## localhost란?

### 학습 배경

VSC에서 코드 파일을 실행시킬 때 Go Live기능을 사용하곤 한다. http://localhost:포트번호 url으로 웹브라우저를 통해 접속하면 파일을 실행한 결과가 화면에 보인다.
이때, localhost가 무엇이고, VSC에서 Go Live 기능은 어떻게 localhost를 통해 파일을 실행시킬 수 있도록 만드는지 알고 싶다.

### 조사

localhost는 네트워크 용어이다. 네트워크 상에서 자신의 컴퓨터의 주소를 뜻한다.
127.0.0.1

- live server plugin을 사용하며 접한다.
- 웹사이트나 웹 어플리케이션을 local환경에서 테스트하는데 사용한다.
- host는 서버라는 의미를 가진다.
- host는 localhost와 remote host로 구분된다.
- localhost : 사용중인 컴퓨터를 서버로 만들어 사용하는 네트워크 연결 방법을 loopback이라고 한다. 인터넷 연결 없어도 사용중인 컴퓨터를 이용해 웹페이지를 테스트 할 수 있다.
- remote host : Heroku, Netlify와 같은호스팅 회사가 제공하는 서비스를 통해 remote server를 사용할 수 있다.

### 정리

- host는 서버이고, localhost는 사용중인 컴퓨터를 서버로 만든 주소이다. 다른 네트워크 없이도 localhost 서버 주소에 접속해 웹페이지나 웹 어플리케이션을 테스트해볼 수 있다.

### 참고자료

[text](https://unit-15.tistory.com/66)
[text](https://www.freecodecamp.org/news/what-is-localhost/)
