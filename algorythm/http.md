## url

- url이 항상 자원의 주소를 말하는건 아니다
- ex) /about.html로 접속했다고 해서 실제 불러온 값이 /about.html임을 보장하진 않습니다.
- 해킹의 위험이 있기 때문 (크롤링 방지)
- 고도화하면 시간대별로 바꿀수도 있다
- URL은 웹사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있습니다.

- 문자열을 url 인코딩으로 변환시켜서 들어감
- => 한국어를 넣어도 괜찮긴 하다

### url의 구조

- 암기하기

![](url.png)

```
WHATWG URL's origin property (https://nodejs.org/api/url.html#url)
┌────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             href                                           │
├──────────┬──┬────────────────────┬────────────────────────┬────────────────────────┬───────┤
│ protocol │  │       auth         │          host          │          path          │ hash  │
│          │  │                    ├─────────────────┬──────┼──────────┬─────────────┤       │
│          │  │                    │    hostname     │ port │ pathname │    search   │       │
│          │  │                    │                 │      │          ├─┬───────────┤       │
│          │  │                    │                 │      │          │ │    query  │       │
"  https:   //   user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ? query=string #hash"
│          │  │         │          │    hostname     │ port │          │             │       │
│          │  │         │          ├─────────────────┴──────┤          │             │       │
│ protocol │  │   user  │ password │          host          │          │             │       │
├──────────┴──┼─────────┴──────────┼────────────────────────┤          │             │       │
│   origin    │                    │         origin         │ pathname │    search   │ hash  │
├─────────────┴────────────────────┴────────────────────────┴──────────┴─────────────┴───────┤
│                                             href                                           │
└────────────────────────────────────────────────────────────────────────────────────────────┘
0번 ~ 1023번: 잘 알려진 포트 (well-known port)
1024번 ~ 49151번: 등록된 포트 (registered port)
49152번 ~ 65535번: 동적 포트 (dynamic port)
```

- 서버 실행 코드

```py
# 여기서는 실행이 안됨
from http.server import BaseHTTPRequestHandler, HTTPServer


class CustomHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()

        if self.path == "/a":
            self.wfile.write(b"<h1>a</h1>")
        elif self.path == "/b":
            self.wfile.write(b"<h1>b</h1>")
        elif self.path == "/c":
            self.wfile.write(b"<h1>c</h1>")
        else:
            self.wfile.write(b"<h1>d</h1>")


def run_server(port=8000):
    server_address = ("", port)
    httpd = HTTPServer(server_address, CustomHTTPRequestHandler)
    print(f"Starting server on port {port}")
    httpd.serve_forever()


if __name__ == "__main__":
    run_server()
```

### js의 URL 객체

```js
const url = new URL(
  "https://example.org:8080/a/b/c/d?query=abc&name=hojun#licat"
);

// 파싱하기
// split('/')으로 나누지 않는다.

console.log("전체 URL:", url.href);
console.log("프로토콜:", url.protocol);
console.log("호스트:", url.host);
console.log("호스트네임:", url.hostname);
console.log("포트:", url.port);
console.log("경로:", url.pathname);
console.log("검색:", url.search);
console.log("해시:", url.hash);

// 값 변경이 가능하다
url.protocol = "ftp";

// 쿼리 파라미터를 따로 뺄 수 있다
// URLSearchParams 객체
console.log("URLSearchParams 객체:", url.searchParams);
console.log("query:", url.searchParams.get("query"));
console.log("name:", url.searchParams.get("name"));
```

- query (?~) 이후 나오는 것들은 서버로 전송할 데이터를 나타냄
