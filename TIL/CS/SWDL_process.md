# 소프트웨어 생명주기 (Software Development Life Cycle)

: 개발부터 유지보수까지 전 공정을 체계화한 절차

## SDLC 모델 절차

1. 요구사항 분석
   - 개념
     - 개발할 소프트웨어의 기능과 제약조건, 목표 등을 소프트웨어 사용자와 함께 명확히 하는 단계이다
     - 만들려는 소프트웨어의 기능적, 비기능적 요구사항들을 도출, 분석, 명세하는 단계
       - 기능적 요구사항
         - 시스템이 갖추어야 할 기능
         - ex) A 시스템은 사용자 로그인 기능을 통해 댓글을 작성할 수 있어야 한다.
       - 비기능적 요구사항
         - 시스템의 성능, 보안적 햔계 및 제약사항 등
         - ex) A 시스템은 3초 안에 페이지가 화면에 보여져야 한다.
   - 요구공학
     - 개념
       - 시스템 요구사항에 대한 파악을 목적으로 구조화된 활동이다.
       - 요구사항의 누락 없이 개발의 요구사항을 이해관계자들 사이에서 도출하여, 요구사항에 대한 공통된 이해를 돕도록 한다.
     - **요구사항 개발 단계**
       1. 요구사항 도출
          - 인터뷰, 브레인 스토밍 등의 기법을 통해 고객의 추상적 요구를 구체화시키는 단계
          - 기법의 종류
            - 인터뷰
            - 브레인스토밍
            - 델파이 기법
            - 롤 플레잉
            - 워크숍
            - 설문 조사
       2. 요구사항 분석
          - 개념
            - 도출된 요구사항의 충돌, 중복, 누락 등의 분석을 통해 요구사항의 일관성과 완전성을 확보하는 단계이다.
          - 절차
            1. 요구사항 분류
               - 요구사항을 기능 | 비기능 요구사항으로 분류한다.
            2. 개념 모델링 생성 및 분석
               - 현실세계를 기준으로 작성된 요구사항을 모델링하여 표현
               - 유스케이스 다이어그램, 데이터 흐름 모델, 상태 모델, 목표 기반 모델 등 다양한 모델로 작성할 수 있다.
               - 주로 UML을 사용해 모델링을 표기한다.
            3. 요구사항 할당
               - 요구사항을 만족시키기 위한 아키텍처 구성요소를 식별한다.
               - 모델링으로 표현된 요구사항의 요소들간의 상호작용을 분석한다.
            4. 요구사항 협상
               - 이해관계자간에 발생되는 의견차이를 적절한 지점에서 합의한다.
            5. 정형 분석
               - 최종적 단계로, 정형 언어를 사용해 요구사항을 표현한다.
          - 분석 기법
            - 자료 흐름 지향 분석
              - DFD, DD로부터 소프트웨어 구조를 유도
            - 객체 지향 분석
              - UML로 표준화
       3. 요구사항 명세
          - 개념
            - 요구사항에 대해 체계적인 문서로 작성한다.
          - 산출물
            - 요구사항 명세서 (= 요구사항 정의서)
              - 내용 목록
                - 시스템명
                - 서브 시스템명
                - 작성자
                - 작성일자
                ***
                - ID
                - 이름
                - 유형
                - 품질 속성
                - 우선순위
                - 중요도
                - 출처
                - 관련 부서
                - 전제 조건
                - 내용
                - 관련 요구사항
                - 버전
                - 수용 여부
       4. 요구사항 확인 및 검증
     - 요구사항 관리 단계 (요구사항의 변경 관리, 추적 관리)
2. 설계
   - 명세된 기능들을 어떻게 구현/해결할 것인지에 대한 논리적 방법을 결정한다.
3. 구현
   - 설계 단계에서 결정한 구현/해결 방법을 프로그래밍 언어로 작성한다.
4. 테스트
   - 만들어진 소프트웨어가 요구사항을 만족하는지 대하여 확인 및 테스트한다.
5. 유지보수
   - 시스템을 사용자가 사용하기 시작한 이후부터 일어나는 모든 활동을 의미한다.