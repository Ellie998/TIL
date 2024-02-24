# 배경

VM을 이해하다가 발견한 개념

# 내용

- JIT(just in time)
  - VM 최적화 기법이다.
  - VM 기술을 가능하게 해주는 기술 중 하나
  - 프로그램을 실제 실행하는 시점에 바이트 코드를 기계 언어로 번역하는 **컴파일러 기법**이다.
    - 컴파일러 기법
      - JIT
        - 인터프리터보다 빠르다
        - 정적 컴파일보다는 성능이 떨어진다.
        - 최소한의 최적화
      - 인터프리터 방식
      - 정적 컴파일 방식

---

### JS 언어와 JIT

JS는 변수에 저장된 타입이 실행 시점에 결정되는 동적 언어

- 기계어가 많아진다
- JS engine JIT의 JS 코드 실행 방법
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ce5444ce-afe1-467c-b8f0-28aa4fd0604a/ab7453b3-ea3d-4813-b85a-377fff478bab/Untitled.png)
  - JS는 매우 동적인 언어이다. 만일 변수 두 개의 덧셈 연산을 다루는데, 변수 타입이 서로 다를 경우 slow case로 넘어간다.
    - 코드의 동작을 native code로 생성하지 않고, 미리 엔진 내부에 C로 구현된 helper function을 호출하여 동작을 수행한다.
    - interpreter 모드로 수행할 때와 똑같은 코드를 사용하게 된다.
    - 심지어 compilation overhead이 더해져 비효율적이다
- hot-spot이 적다는 특징을 가진다.
  - hotspot
    - 자주 반복되어 사용되는 구간
  - = loop이 적고 한 두번만 수행되는 코드가 대부분이다.
  - = compile overhead가 상대적으로 커진다.
    - native code 수행 시간보다 native code를 만들어 내는 시간이 상대적으로 더 커진다

# 정리

# 참고 자료

https://samslow.github.io/development/2020/07/06/JIT/

https://meetup.nhncloud.com/posts/77
