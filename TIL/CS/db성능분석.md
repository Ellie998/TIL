# DB 성능 분석 및 테스트 방법

## 성능 테스트

- 부하 테스트
- 애플리케이션을 사용할 수 있는 최대 사용자의 수를 측정한다

### 도구

- nGrinder
  - 네이버 제작
  - The Grinder라는 성능 테스트 도구를 기반으로 제작한 오픈 소스 테스트 솔루션이다.
- JMeter
- Gatling

## 서비스 속도 측정 기준/ 서비스 성능 지표

- Throughput
  - 시간당 처리량
  - TPS(Transaction Per Second), RPS(Request Per Second) 등으로도 불린다
  - '1초에 처리하는 단위 작업의 수' 혹은 '1초에 처리하는 HTTP 요청 수' 등으로 해석할 수 있다.
  - 시간당 작업을 얼마나 많이 처리하는지
- Latency
  - 서버가 요청을 받아 클라이언트에게 응답을 보내주는데 까지 걸리는 시간
  -
  - 작업을 얼마나 빨리 처리하는지

# 정리

# 참고 자료

https://hyuntaeknote.tistory.com/10
