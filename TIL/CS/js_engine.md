# 배경

크롬 브라우저의 [개발자도구]→[메모리] 탭에서 js VM instance의 개념을 학습하다가, js machine이 무엇인지 알고자 했다.

# 내용

### 서버에서 보내진 js 파일을 받아와 브라우저에 렌더링하는 과정

- parser
  - JS 엔진은 서버로부터 받아온 js code를 엔진의 파서에 넣는다.
  - 파서는 코드의 패턴을 찾아서 엔진이 이해할 수 있는 representation object로 바꾼다.
    - 파서는 `var`, `let`을 만나면 공간을 할당해야 한다는 것을 알고 있다.
  - AST (Abstract Syntax Tree)
    - 엔진이 이해할 수 있는 object
    - 파서의 모든 변환 결과가 저장된 구조화된 object이다.
- 인터프리터
  - 파서의 동작이 완료되면 파서의 결과물인 AST는 인터프리터로 들어간다.
  - 인터프리터는 AST의 object를 byte 코드로 변환한다.
  - 만약 인터프리터가 VM을 포함한다면, 최적화된 기계 언어로의 추가적인 변환 없이 byte code 형식의 코드를 즉시 실행할 수 있다.
    - 인터프리터에서 byte코드는 일회성으로 실행되기 때문에 변수 초기화나 setup에 유용하다.
  - 코드의 다양성을 추적한다.
    - hot code
      - 여러번 반복적으로 수행되는 코드를 의미한다.
      - high-optimized machine code로 변환된다.
        - 빠르게 접근 가능
        - 여러 명령어 세트에 걸쳐서 실행된다.
        - 엔진의 컴파일러에 의해 실행된다.
          - 머신 코드를 CPU에서 직접 실행되도록 보낸다.
  - interpreted된 언어는 엔진에 의해 제어되지 않는다.
- 컴파일러
  - 최적화 단계이다.
  - 인터프리터에서 초기화나 설정과 같은 동작의 코드 실행은 적합하지만 자주 사용하는 코드들에는 적합하지 않다.
  -

---

- byte code는 VM에서 적절하다고 판단되면 실행되는 반면, 최적화된 컴파일러 machine code는 CPU가 필요로하는 정확한 명령어 세트를 실행하기 위하여 매우 조심히 실행된다.

---

### JS engine

- JS 엔진은 브라우저의 component이다.
  - 브라우저
    - JS code를 가져옴
    - JS code를 최적화
    - JS code를 실행
- VM으로 알려진 JS engine은 플랫폼 독립적인 환경에서 코드를 실행시킨다.
  - 윈도우, 맥, 리눅스에서 모두 동일한 코드를 실행할 수 있다.
  - 브라우저, node.js에서 동일한 코드를 실행할 수 있다.
- 브라우저 엔진은 다양하다.
  - 엔진 사이의 가장 큰 차이점은 컴파일러 instructions이다.
  - JS 엔진은 maintainers를 가진다
    - 메모리 사용을 최적화하는 방법을 신중히 선택하해야 하는 관리자이다.

# 정리

- machine code
  - CPU에서 실행되는 코드의 형태
  - 매우 메모리 집약적이기 때문에 트레이드 오프를 고려해야 한다.
- byte code
  - 인터프리터에서 해석하는 코드의 형태
- 컴파일러
  - 코드를 최적화
  - 반복되는 코드가 많다면 최적화하여 실행했을 때 성능이 좋아진다

# 참고 자료

[https://www.linkedin.com/pulse/basics-javascript-engines-adam-conrad#:~:text=Also known as virtual machines,MacOS%2C Windows%2C or Linux](https://www.linkedin.com/pulse/basics-javascript-engines-adam-conrad#:~:text=Also%20known%20as%20virtual%20machines,MacOS%2C%20Windows%2C%20or%20Linux).
