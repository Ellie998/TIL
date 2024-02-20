## 설명

- TCP/IP란, TCP와 IP를 합쳐 부르는 말이다.

### TCP

- OSI 7 Layer 중에서 4계층인 전송 계층에서 활용된다.
- 송신자와 수신자 사이에 논리적인 연결을 생성한다.
- 네트워크 정보 전달을 통제하여 데이터의 신뢰성을 유지할 수 있도록 돕는다.
- TCP Header에는 source Port와 destination Port 정보 등이 담겨져 있다.
- 3-way handshake를 통해 송신자와 수신자간에 신뢰성 있는 정보 전달을 한다.
  - TCP Header 내의 flag를 사용한다.
    - SYN
    - SYN/ACK
    - ACK
- 흐름제어

  - TCP Header 내의 Window Size를 사용해 한 번에 받고 보낼 수 있는 데이터의 양을 정한다.
  - TCP Header 내의 Acknowledment Number를 통해 수신자가 받은 데이터의 양을 송신자에게 알린다.
  - TCP Header 내의 Sequence Number를 사용해 쪼개어 보내지는 데이터의 순서 번호를 표시한다.

- 혼잡제어

### IP

- OSI 7 Layer 중에서 3계층인 네트워크 계층에서 활용된다.
- IP 주소 체계를 따른다.
- IP Routing을 이용해 목적지에 도달하도록 한다.

## 참고 자료

[text](https://aws-hyoh.tistory.com/57)
