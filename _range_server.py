#!/usr/bin/env python3
"""Local dev server with HTTP Range support (needed to test video scrubbing).
Usage: python3 _range_server.py [port]  (defaults to 8642)
"""
import http.server
import os
import re
import sys


class RangeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        if not os.path.exists(path):
            self.send_error(404, "File not found")
            return None

        file_size = os.path.getsize(path)
        range_header = self.headers.get("Range")
        ctype = self.guess_type(path)

        if range_header:
            match = re.match(r"bytes=(\d*)-(\d*)", range_header)
            start_str, end_str = match.groups()
            start = int(start_str) if start_str else 0
            end = int(end_str) if end_str else file_size - 1
            end = min(end, file_size - 1)
            length = end - start + 1

            f = open(path, "rb")
            f.seek(start)

            self.send_response(206)
            self.send_header("Content-type", ctype)
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
            self.send_header("Content-Length", str(length))
            self.end_headers()
            return _LimitedReader(f, length)

        f = open(path, "rb")
        self.send_response(200)
        self.send_header("Content-type", ctype)
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(file_size))
        self.end_headers()
        return f

    def copyfile(self, source, outputfile):
        if isinstance(source, _LimitedReader):
            source.copy_to(outputfile)
        else:
            super().copyfile(source, outputfile)


class _LimitedReader:
    def __init__(self, f, remaining):
        self.f = f
        self.remaining = remaining

    def copy_to(self, outputfile):
        chunk_size = 64 * 1024
        try:
            while self.remaining > 0:
                chunk = self.f.read(min(chunk_size, self.remaining))
                if not chunk:
                    break
                outputfile.write(chunk)
                self.remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass
        finally:
            self.f.close()

    def close(self):
        self.f.close()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8642
    server = http.server.ThreadingHTTPServer(("", port), RangeRequestHandler)
    print(f"Serving with Range support on http://localhost:{port}")
    server.serve_forever()
