# 주제

# 내용

- 최근 JS engine들이 사용하는 방식

## Adaptive JIT Compilation

### 개념

- 반복적으로 수행되는 정도에 따라서 유동적으로 서로 다른 최적화 수준을 적용하는 컴파일러 최적화 방식이다.

### 작동 방식

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/ce5444ce-afe1-467c-b8f0-28aa4fd0604a/a327b503-7487-48ef-b227-ed823fb85b44/Untitled.png)

- interpreter을 거쳐 bytecode 형태로 코드를 실행
- hotspot이 발견되면 그 부분에만 JITC 적용해 native code로 수행
- 최근에는 optimized native code를 생성해 더 많은 최적화를 진행한 코드를 생성하기도 한다.

# 정리

# 참고 자료

https://meetup.nhncloud.com/posts/77
