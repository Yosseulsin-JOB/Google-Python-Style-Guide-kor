<a id="s2.1-lint"></a>

### 2.1 Lint

- 이 [pylintrc](https://google.github.io/styleguide/pylintrc)를 사용하여 코드에서 `pylint`를 실행합니다.

<a id="s2.1.1-definition"></a>

#### 2.1.1 정의

- `pylint`는 파이썬 소스코드에서 버그와 스타일 문제를 찾기 위한 툴입니다. (`pylint`는 빌나 컴파일 시 에러 외에 `추가`로 오류검사를 할 수 있는 도구라고 생각하면 될 것 같습니다.)
- 일반적으로 C나 C++와 같은 비동적 프로그래밍 언어에서의 컴파일러를 통해 잡히는 문제를 찾아냅니다.
- 파이썬의 동적인 특성때문에 몇몇 경고들은 정확하지 않을 수 있지만 드물게 발생합니다.

<a id="s2.1.2-pros"></a>

#### 2.1.2 장점

- 오타와 같은 놓치기 쉬운 에러나 할당이 되지 않은 변수 사용 등의 에러를 쉽게 잡을 수 있습니다.

<a id="s2.1.3-cons"></a>

#### 2.1.3 단점

- `pylint`는 완벽하지 않습니다.
- `pylint`를 이용하기 위해 다음과 같은 사항들을 따라야 합니다.
  - 주위에 작성한다.
  - 경고를 억제한다.
  - 그것을 개선한다.

<a id="s2.1.4-decision"></a>

#### 2.1.4 결론

- 코드에 `pylint`를 실행시키세요.

- 다른 문제가 가려지지 않도록 경고가 부적절할 경우 경고를 띄우지 마세요.
- 경고를 띄우지 않기 위해, 코드에 라인 단위로 주석을 달아야 합니다.

  ```python
  def do_PUT(self):  # WSGI name, so pylint: disable=invalid-name
    ...
  ```

- `pylint`의 경고는 각각 symbolic name(`empty-docstring`)으로 구별됩니다.
- Google-specific 경고는 `g-`로 시작합니다.
- symbolic name에서 경고를 억제한 이유가 명확하지 않으면 설명을 추가해야 합니다.
- 이러한 방식으로 경고를 억제하면 쉽게 경고를 억제한 것들을 찾을 수 있는 이점이 있습니다.
- `pylint`의 경고 리스트를 다음과 같은 방법으로 볼 수 있습니다.

  ```shell
  pylint --list-msgs
  ```

- 각 메시지에 대해 자세한 정보를 얻고자 하는 경우 다음과 같은 방법으로 볼 수 있습니다.

  ```shell
  pylint --help-msg=invalid-name
  ```

- `pyling: disable-msg`는 이전에 사용했던 방식으로 이제는 사용되지 않으며 `pylint: disable`를 사용합니다.
- 사용되지 않는 인자에 대한 경고는 함수를 시작할 때 그 변수를 지움으로써 억제할 수 있습니다. 다만 그 변수를 왜 지웠는지에 대해 항상 주석으로 설명을 추가해야 합니다. 이러한 경우는 "Unused."라고 작성하면 충분합니다.
- 아래 예시를 참고하세요.

  ```python
  def viking_cafe_order(spam: str, beans: str, eggs: str | None = None) -> str:
      del beans, eggs  # Unused by vikings.
      return spam + spam + spam
  ```

- 경고를 없애는 방법은 일반적인 형태로 사용되지 않은 인자의 이름으로 `_`를 사용하거나 이름에 `unused_`를 붙이거나 `_`으로 할당하는 것입니다. 이러한 형태는 허용되지만 권장하지 않습니다. break caller는 이름으로 인수를 전달하고 인수가 실제로 사용되지 않도록 강제하지 않습니다.

---
<a id="s2.2-imports"></a>

### 2.2 Imports

- `import`문은 개별 타입, 클래스, 함수가 아니라 패키지와 모듈에만 사용하세요. (주: 개별 타입은 기본 자료형, 사용자 정의 클래스를 나타냅니다.)

<a id="s2.2.1-definition"></a>

#### 2.2.1 정의

- 하나의 모듈에서 다른 모듈로 코드를 공유하는 재사용 매커니즘 입니다.

<a id="s2.2.2-pros"></a>

#### 2.2.2 장점

- namespace management convention(이름을 짓는 방식)은 간단합니다. 각각 식별된 소스는 하나의 일관된 방식으로 작성됩니다. `x.Obj` 는 모듈 `x` 에 정의된 객체 `Obj` 를 의미합니다.

<a id="s2.2.3-cons"></a>

#### 2.2.3 단점

- 모듈 이름이 충돌할 수도 있습니다. 몇몇 모듈 이름은 불편할 정도로 깁니다.

<a id="s2.2.4-decision"></a>

#### 2.2.4 결론

- `import x`를 패키지와 모듈을 import할때 사용하세요.
- `from x import y`를 `x`가 패키지의 접두어이고 `y`가 접두어가 없는 모듈일때 사용하세요.
- 다음과 같은 상황에서는 `from x import y as z` 를 사용하세요.
  - `y`라는 이름을 가진 두 개의 모듈을 가져옵니다.
  - `y`는 현재 모듈에 정의된 최상위 이름과 충돌합니다.
  - `y`는 공개 API의 일부인 공통 매개변수 이름(예: 'features')과 충돌합니다.
  - `y`는 불편할 정도로 긴 이름입니다.
  - `y`는 코드 컨텍스트에서 너무 일반적입니다(예: `from storage.file_system import options as fs_options`).
- `import y as z`를 `z` 가 공식적인 약어인 경우에만 사용하세요(e.g., `import numpy as np`)

- 예를들어 `sound.effects.echo`모듈이 import 된다면 아래와 같습니다.

  ```python
  from sound.effects import echo
  ...
  echo.EchoFilter(input, output, delay=0.7, atten=4)
  ```

- import된것들과 관련있는 이름을 사용하지마세요.
- 모듈이 같은 패키지에 있더라도 전체 패키지 이름을 사용하세요.
- 이는 무심코 패키지를 두번 import 하는것을 예방하는 것에 도움이 됩니다.

<a id="imports-exemptions"></a>

##### 2.2.4.1 예외

- 이 규칙의 예외는 다음과 같습니다.
  - 다음 모듈의 심볼은 정적 분석 및 타입 검사를 지원하는 데 사용됩니다.
    - [`typing` module](#typing-imports)
    - [`collections.abc` module](#typing-imports)
    - [`typing_extensions` module](https://github.com/python/typing_extensions/blob/main/README.md)
  - [six.moves module](https://six.readthedocs.io/#module-six.moves)의 리다이렉션입니다.

---
<a id="s2.3-packages"></a>

### 2.3 Packages

- 각각의 모듈은 그 모듈의 전체 경로 위치를 사용하여 import합니다.

<a id="s2.3.1-pros"></a>

#### 2.3.1 장점

- module 이름의 충돌이나 작성자가 예상하지 못한 module search path으로 인한 잘못된 import를 방지합니다.
- 모듈을 쉽게 찾을 수 있도록 해줍니다.

<a id="S2.3.2-cons"></a>

#### 2.3.2 단점

- 패키지 계층을 복제해야 하므로 코드를 배포하기 어렵습니다. 다만 현대적 배포 매커니즘에서는 문제될게 없습니다.

<a id="s2.3.3-decision"></a>

#### 2.3.3 결론

- 모든 새로운 코드는 그 코드의 전체 패키지 이름으로 각각의 모듈을 import해야합니다.
- Import는 아래 사항을 따라야 합니다.

  - 올바른 예

    ```python
    # Reference absl.flags in code with the complete name (verbose).
    import absl.flags
    from doctor.who import jodie

    _FOO = absl.flags.DEFINE_string(...)
    ```

    ```python
    # Reference flags in code with just the module name (common).
    from absl import flags
    from doctor.who import jodie

    _FOO = flags.DEFINE_string(...)
    ```

  - 부적절한 예 _(이 파일은 `doctor/who/` 에 있다고 가정하고 `jodie.py`또한 존재한다고 가정합니다.)_

    ```python
    # Unclear what module the author wanted and what will be imported.  The actual
    # import behavior depends on external factors controlling sys.path.
    # Which possible jodie module did the author intend to import?
    import jodie
    ```

- 메인 바이너리 디렉토리는 몇몇 환경에서 발생했음에도 불구하고`sys.path`에 있다고 예측하면 안됩니다.
- 이러한 상황에서 코드는 `import jodie`는 파일로 된 `jodie.py`가 아닌 써드파티나 탑 레벨 패키지 이름이 `jodie`라고 참조한다고 가정해야합니다.

---
<a id="s2.4-exceptions"></a>

### 2.4 예외

- 예외는 허용하지만 주의하며 사용해야합니다.

<a id="s2.4.1-definition"></a>

#### 2.4.1 정의

- 예외는 코드블록에서 정상적인 상황에 발생한 에러나 다른 예외적인 상황을 다루기 위해 정상적인 흐름에서 벗어나는것을 의미합니다.

<a id="s2.4.2-pros"></a>

#### 2.4.2 장점

- 일반적인 연산자에 대한 제어흐름은 에러 핸들링 코드에 의해 난잡해지지 않습니다.
- 특정 조건이 발생했을 때 제어 흐름이 몇몇 프레임들을 생략할 수 있습니다.
- 예를 들어, 에러 코드를 살펴보는 것 대신 한 번에 N개의 중첩 함수로부터 반환합니다.

<a id="s2.4.3-cons"></a>

#### 2.4.3 단점

- 제어 흐름이 혼란스러워질 수 있습니다. 라이브러리를 호출할때 에러 상황들을 놓치기 쉽습니다.

<a id="s2.4.4-decision"></a>

#### 2.4.4 결론

##### 예외는 다음과 같은 조건을 만족해야 합니다

- 내장 예외 클래스를 사용하는 데에 문제가 없다면 사용합니다. 예를 들어, 함수 인자를 검증할 때와 같은 프로그래밍 오류나 위반된 전제조건을 나타내기 위해 `ValueError`를 발생시키세요.
- `assert` 문을 조건문이나 전제조건 검증 대신 사용하지 마세요. application logic에 중요하지 않아야 합니다. `assert`문을 제거해도 코드가 정상적으로 작동한다면, 그것이 기준이 될 수 있습니다. assert 조건문은 평가될 것이라고 [보장되지 않습니다](https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement). [pytest](https://pytest.org)기반의 테스트에서는 `assert` 문을 사용하여 기대값을 검증하는 것이 적절하고 예상됩니다

  - 올바른 예

    ```python
    def connect_to_next_port(self, minimum: int) -> int:
        """Connects to the next available port.

        Args:
            minimum: A port value greater or equal to 1024.
        Raises:
            ValueError: If the minimum port specified is less than 1024.
            ConnectionError: If no available port is found.
        Returns:
            The new minimum port.
        """
        if minimum < 1024:
            raise ValueError(f'Min. port must be at least 1024, not {minimum}.')
        port = self._find_next_open_port(minimum)
        if port is None:
          raise ConnectionError(
              f'Could not connect to service on port {minimum} or higher.')
        # 이 코드의 결과는 이 assert에 의존하지 않습니다.
        assert port >= minimum, (
            f'Unexpected port {port} when minimum was {minimum}.')
        return port
    ```

  - 부적절한 예

    ```python
    def connect_to_next_port(self, minimum: int) -> int:
        """Connects to the next available port.

        Args:
        minimum: A port value greater or equal to 1024.
        Returns:
        The new minimum port.
        """
        assert minimum >= 1024, 'Minimum port must be at least 1024.'
        # 이 코드는 이전 assert에 의존합니다.
        port = self._find_next_open_port(minimum)
        assert port is not None
        # 반환 값에 대한 타입 검사는 assert에 의존합니다.
        return port
    ```

- 라이브러리나 패키지는 고유의 예외가 정의되어 있을 것입니다.
- 사용하는 동안, 기존에 존재하는 예외 클래스(exception class)로부터 상속을 받아야 합니다.
- 예외 이름은 `Error`로 끝나야 하고 되풀이로 시작하면 안됩니다.(`foo.fooError`).
- 예외를 다시 발생시키거나 쓰레드의 가장 바깥 쪽 블록에 있지않으면 절대 포괄적인 `except:`문을 사용하거나 `Exception`, `StandardError`을 사용하지마세요. (그리고 에러메시지를 출력하세요.) Python은 이와 관련해서 매우 관용적이며 `except:` 모든 오탈자를 비롯하여, sys.exit() 호출, Ctrl+C로 인한 인터럽트, 유닛테스트 실패와 마지막으로 당신이 포착을 원하지 않았던 다른 모든 종류의 예외들까지 모두 잡아낼 것입니다.
- 코드상에서 `try`/`except` 블록의 수를 최소화시키세요. `try`문의 내부가 커질수록 예외는 당신이 예외가 발생할것이라 예상하지 않았던 코드에 의해 점점 더 발생할 것입니다. 이러한 상황에서, `try`/`except` 블록은 진짜 검출해야 할 에러를 가리게 됩니다.
- 예외가 `try` 블록에서 발생하던 안하던 `finally`절은 코드를 실행시킨다. 이건 가끔 깔끔히 하는데 유용합니다. 예를들어, 파일을 닫을 때 가 그 예입니다.

---
<a id="s2.5-global-variables"></a>
<a id="25-global-variables"></a>
<a id="s2.5-global-state"></a>
<a id="25-global-state"></a>

### 2.5 변경 가능한 전역 상태

- 변경 가능한 전역 상태를 사용하지 마세요.

<a id="s2.5.1-definition"></a>

#### 2.5.1 정의

- 프로그램 실행 중 변경될 수 있는 모듈 수준의 값이나 클래스 속성을 말합니다.

<a id="s2.5.2-pros"></a>

#### 2.5.2 장점

- 가끔 편리합니다.

<a id="s2.5.3-cons"></a>
<a id="253-cons"></a>
<a id="global-variables-cons"></a>

#### 2.5.3 단점

- 캡슐화가 깨집니다.
  - 이러한 설계는 유효한 목표를 달성하기 어렵게 만들 수 있습니다. 예를 들면, 전역 상태를 사용하여 데이터베이스 연결을 관리하는 경우, 두 개의 서로 다른 데이터베이스를 동시에 연결하는 것이 어려워질 수 있습니다(e.g., 마이그레이션 중 차이를 계산할 때). 전역 레지스트리에서도 유사한 문제가 쉽게 발생할 수 있습니다.
- 모듈이 처음 임포트될 때 전역 변수에 대한 할당이 이루어지기 때문에, 모듈의 동작을 임포트 중에 변경할 가능성이 있습니다.

<a id="s2.5.4-decision"></a>
<a id="254-decision"></a>
<a id="global-variables-decision"></a>

#### 2.5.4 결론

- 변경 가능한 전역 상태를 사용하지 마세요.
  - 전역 상태를 사용하는 것이 드물게 필요한 경우, 변경 가능한 전역 엔티티는 모듈 수준이나 클래스 속성으로 선언하고, 이름 앞에 `_`를 붙여 내부적으로 사용해야 합니다. 필요한 경우, 변경 가능한 전역 상태에 대한 외부 접근은 공개 함수나 클래스 메소드를 통해 이루어져야 합니다. [Naming](#s3.16-naming)를 참고하세요. 변경 가능한 전역 상태를 사용하는 설계 이유에 대해서는 주석에 설명하거나 링크된 문서에서 설명해 주세요.
  - 모듈 수준의 상수는 허용되며 권장됩니다. 예를 들어, 내부 용도의 상수에는 `_MAX_HOLY_HANDGRENADE_COUNT = 3`를 사용하고, Public API 상수에는 `SIR_LANCELOTS_FAVORITE_COLOR = "blue"`를 사용하세요. 상수는 모두 대문자와 밑줄을 사용하여 명명해야 합니다. [Naming](#s3.16-naming)를 참고하세요.

---
<a id="s2.6-nested"></a>

### 2.6 중첩/지역/내부 클래스와 함수

- 중첩된 지역 함수나 클래스는 지역변수에 접근할 때 사용하면 좋습니다.
- 내부클래스에서는 괜찮습니다.

<a id="s2.6.1-definition"></a>

#### 2.6.1 정의

- 클래스는 메소드, 함수, 클래스 내에서 정의할 수 있습니다.
- 함수는 메서드나 함수 내에서 정의할 수 있습니다.
- 중첩함수는 해당 스코프에 정의된 변수를 읽기만 가능합니다.

<a id="s2.6.2-pros"></a>

#### 2.6.2 장점

- 제한된 스코프 내에서 사용하는 유틸리티 클래스와 함수의 정의를 허용합니다.
- [ADT](https://ko.wikipedia.org/wiki/추상_자료형)가 무엇인지 참고하세요.
- 일반적으로 데코레이터를 구현할 때 사용됩니다.

<a id="s2.6.3-cons"></a>

#### 2.6.3 단점

- 중첩된 함수와 클래스는 직접 테스트할 수 없습니다.
- 중첩은 외부함수를 더 길고 읽기 어렵게 만들 수 있습니다.

<a id="s2.6.4-decision"></a>

#### 2.6.4 결론

- 몇가지 주의사항을 지키면 사용해도 괜찮습니다.
- `self` 나 `cls`를 제외한 local value을 접근할 때 중첩함수나 중첩 클래스 사용을 피하세요.
- 단순히 모듈 내 함수를 사용자들에게 숨기기 위해 중첩하지마세요. 대신, 모듈 수준에서 이름 앞에 \_을 붙여 test가 접근할 수 있게 하세요.

---
<a id="s2.7-comprehensions"></a>
<a id="s2.7-list_comprehensions"></a>

### 2.7 Comprehensions & 제너레이터 표현식

- 복잡하지 않은 상황에서 사용하세요.

<a id="s2.7.1-definition"></a>

#### 2.7.1 정의

- 리스트와 딕셔너리, Set comprehensions, 제너레이터 표현식은 오래전부터 사용되어 왔던 반복문이나, `map()`, `filter()`, `lambda`를 사용하지 않고도 container 타입과 iterator를 만들때 간결하고 효율적인 방법을 제공합니다.

<a id="s2.7.2-pros"></a>

#### 2.7.2 장점

- 간단한 comprehension은 다른 딕셔너리나 리스트, set을 만드는 기술보다 명확하고 간단합니다.
- 제너레이터 표현식은 리스트 전체를 만드는 것이 아니여서 매우 효율적입니다.

<a id="s2.7.3-cons"></a>

#### 2.7.3 단점

- 복잡한 comprehension이나 제너레이터 표현식은 읽기 힘듭니다.

<a id="s2.7.4-decision"></a>

#### 2.7.4 결론

- 컴프리헨션(comprehension)은 허용되지만, 여러 개의 for 절이나 필터 표현식은 허용되지 않습니다. 간결함보다는 가독성을 우선시하세요.
- 올바른 예

  ```python
  result = [mapping_expr for value in iterable if filter_expr]

  result = [
      is_valid(metric={'key': value})
      for value in interesting_iterable
      if a_longer_filter_expression(value)
  ]

  descriptive_name = [
      transform({'key': key, 'value': value}, color='black')
      for key, value in generate_iterable(some_input)
      if complicated_condition_is_met(key, value)
  ]

  result = []
  for x in range(10):
    for y in range(5):
      if x * y > 10:
        result.append((x, y))
  return {
      x: complicated_transform(x)
      for x in long_generator_function(parameter)
      if x is not None
  }
  return (x**2 for x in range(10))

  unique_names = {user.name for user in users if user is not None}
  ```

- 부적절한 예

  ```python
  result = [(x, y) for x in range(10) for y in range(5) if x * y > 10]

  return (
      (x, y, z)
      for x in range(5)
      for y in range(5)
      if x != y
      for z in range(5)
      if y != z
  )
  ```

---
<a id="s2.8-default-iterators-and-operators"></a>

### 2.8 기본 반복자와 연산자

- 리스트나 딕셔너리, 파일등의 타입등에서 기본 반복자와 연산자를 지원하는 경우에 사용하세요.

<a id="s2.8.1-definition"></a>

#### 2.8.1 정의

- 딕셔너리나 리스트같은 컨테이너 타입은 기본 반복자와 ("in" 과 "not in")같은 멤버 연산자를 정의합니다.

<a id="s2.8.2-pros"></a>

#### 2.8.2 장점

- 기본 반복자와 연산자는 간단하고 효율적입니다. 추가적인 메소드를 호출하지 않고 연산자를 직접 표현합니다.
- 제네릭은 기본 연산자를 사용한 함수입니다. 연산자를 지원해주는 어떠한 타입에서도 사용할 수 있습니다.

<a id="s2.8.3-cons"></a>

#### 2.8.3 단점

- 메소드 이름을 읽어도 객체의 타입을 유추할 수 없습니다.(변수에 타입 주석이 없는 경우) 이건 이점이 될 수도 있습니다.

<a id="s2.8.4-decision"></a>

#### 2.8.4 결론

- 리스트와 딕셔너리, 파일과 같은 연산자를 지원해주는 타입에서 기본 반복자와 연산자를 사용하세요.
- built-in 타입은 iterator 메서드도 정의합니다.
- 컨테이너를 반복하는 동안 컨테이너를 변경해서는 안 된다는 점을 제외하고 list를 반환하는 메서드보다 이러한 메서드를 선호합니다.
- 올바른 예

  ```python
  for key in adict: ...
  if obj in alist: ...
  for line in afile: ...
  for k, v in adict.items(): ...
  ```

- 부적절한 예

  ```python
  for key in adict.keys(): ...
  for line in afile.readlines(): ...
  ```

---
<a id="s2.9-generators"></a>

### 2.9 제너레이터

- 필요에 따라 제너레이터를 사용하세요.

<a id="s2.9.1-definition"></a>

#### 2.9.1 정의

- 제너레이터 함수는 yield문을 실행할때마다 값을 생성해주는 반복자를 반환합니다.
- 값을 계산한 다음, 제너레이터 함수의 runtime 상태는 다음 값이 필요해질 때 까지 정지됩니다.

<a id="s2.9.2-pros"></a>

#### 2.9.2 장점

- 지역변수의 상태와 제어 흐름은 각 호출을 보존되기 때문에 코드가 단순합니다.
- 제너레이터의 사용은 전체 리스트의 값을 단 한번 생성하기 때문에 함수를 사용하는 것보다 메모리를 적게 사용합니다.

<a id="s2.9.3-cons"></a>

#### 2.9.3 단점

- 제너레이터 내의 지역 변수는 제너레이터가 모두 소모되거나 자체적으로 가비지 컬렉션될 때까지 가비지 컬렉션되지 않습니다.

<a id="s2.9.4-decision"></a>

#### 2.9.4 결론

- 제너레이터 함수에서 docstring에 대해 "Returns:"보다 "Yields:"를 사용하세요.
- 제너레이터가 비용이 많이 드는 자원을 관리하는 경우, 정리 작업을 강제로 수행해야 합니다.
- 정리 작업을 잘 수행하는 방법 중 하나는 제너레이터를 컨텍스트 매니저로 감싸는 것입니다 ([PEP-0533](https://peps.python.org/pep-0533/)).

---
<a id="s2.10-lambda-functions"></a>

### 2.10 람다 함수

- 한 줄 작성에 사용하세요.
- `lambda`에는 `map()` 또는 `filter()` 보다 제너레이터 구문이 더 적합합니다

<a id="s2.10.1-definition"></a>

#### 2.10.1 정의

- 람다는 표현에 있어 다른 `문` 과는 달리 익명 함수들을 정의합니다.

<a id="s2.10.2-pros"></a>

#### 2.10.2 장점

- 편리합니다.

<a id="s2.10.3-cons"></a>

#### 2.10.3 단점

- 로컬 함수에 비해 읽기 어렵고 디버깅이 힘듭니다. 이름이 없다는 것은 stack trace를 이해하기 어렵다는 것입니다.
- 함수에는 오직 표현식만 담을 수 있어 표현이 제한됩니다.

<a id="s2.10.4-decision"></a>

#### 2.10.4 결론

- 람다 함수는 허용하지만, 람다 함수 내부의 코드가 여러 줄에 걸치거나 60-80자를 넘는 경우, 일반적인 [중첩 함수](#s2.16-lexical-scoping)로 정의하는 것이 더 나을 수 있습니다.
- 곱셈 같은 일반 연산자에서는 `operator`모듈 대신에 람다 함수를 사용하세요.
- 예를 들어, `operator.mul`을 `lambda x,y : x * y` 처럼 사용하시면 됩니다.

---
<a id="s2.11-conditional-expressions"></a>

### 2.11 조건문 표현

- 간단한 상황에 좋습니다.

<a id="s2.11.1-definition"></a>

#### 2.11.1 정의

- 조건식(삼항 연산자)은 if 문을 더 짧은 구문으로 사용하는 방법입니다. (e.g, `x = 1 if cond else 2`)

<a id="s2.11.2-pros"></a>

#### 2.11.2 장점

- if 문보다 짧고 편리합니다.

<a id="s2.11.3-cons"></a>

#### 2.11.3 단점

- if 문보다 읽기가 어려울 수 있습니다. 표현이 길어지면 조건을 찾기가 어려울 수 있습니다.

<a id="s2.11.4-decision"></a>

#### 2.11.4 결론

- 간단한 상황에 좋습니다. 그 외의 경우에는 if 문을 사용하는 것이 좋습니다.
- `true-false`, `if-else` 표현 등 각각의 코드가 반드시 한 줄에 표현되어야 합니다.
- 보다 복잡한 구문이 필요하다면 `lambda`가 아닌 완전한 `if` 구문을 사용하세요.

```python

올바른 예:
    one_line = 'yes' if predicate(value) else 'no'
    slightly_split = ('yes' if predicate(value)
                      else 'no, nein, nyet')
    the_longest_ternary_style_that_can_be_done = (
        'yes, true, affirmative, confirmed, correct'
        if predicate(value)
        else 'no, false, negative, nay')

잘못된 예:
    bad_line_breaking = ('yes' if predicate(value) else
                         'no')
    portion_too_long = ('yes'
                        if some_long_module.some_long_predicate_function(
                            really_long_variable_name)
                        else 'no, false, negative, nay')

```
---
<a id="s2.12-default-argument-values"></a>

### 2.12 기본 인자 값

- 대부분은 사용해도 됩니다.

<a id="s2.12.1-definition"></a>

#### 2.12.1 정의

- 함수의 매개변수 목록 끝에 있는 변수에 대한 값을 지정할 수 있습니다.
  - 예) `def foo(a, b=0):` 라는 함수의 경우에 만약 `foo`를 하나의 인자값으로 호출한다면 `b`의 값은 0으로 설정됩니다. 만약에 두 개의 인자값이라면 `b`의 값은 두 번째 인자값을 가지게 됩니다.

<a id="s2.12.2-pros"></a>

#### 2.12.2 장점

- 기본값을 많이 가지는 함수는 있지만, 기본값을 재정의하는 경우는 거의 없습니다.
- 기본 인자값을 사용하면 드문 예외에 대해 많은 함수를 정의할 필요 없이 쉽게 처리할 수 있습니다.
- 또한, Python은 매서드/함수에 대해 Overloading을 지원하지 않으므로 기본 인자값을 사용하면 쉽게 Overloading를 사용하는 것처럼 할 수 있습니다.

<a id="s2.12.3-cons"></a>

#### 2.12.3 단점

- 기본 인자값은 모듈이 불러올 때 한번 계산됩니다.
- 인자값이 list나 dictionary 같은 경우 변형이 가능한 Object이면 문제를 일으킬 수 있습니다.
- 만약에 함수가 Object를 수정하는 경우(list에 item을 추가하는 경우) 기본값이 수정됩니다.

- 예시

  ```python
  def foo(b=[]):
      b.append(1)
      return b
  foo() # b = [1]
  foo() # b = [1, 1]
  print(foo()) # [1, 1, 1]
  ```

<a id="s2.12.4-decision"></a>

#### 2.12.4 결론

- 다음 주의사항과 함께 사용할 수 있습니다.
- 함수 또는 메서드 정의할 때 `변할 수 있는 Object`를 기본값으로 사용하지 마세요.
- 올바른 예

  ```python
  def foo(a, b=None):
      if b is None:
          b = []
  def foo(a, b: Sequence | None = None):
      if b is None:
          b = []
  def foo(a, b: Sequence = ()):  # tuples은 불변하기 때문에 사용 가능합니다.
      ...
  ```

- 부적절한 예

  ```python
  from absl import flags
  _FOO = flags.DEFINE_string(...)

  def foo(a, b=[]):
      ...
  def foo(a, b=time.time()):  # `b`가 이 모듈이 로드된 시간을 나타내는 것인가요?
      ...
  def foo(a, b=_FOO.value):  # sys.argv는 아직 구문 분석되지 않았습니다...
      ...
  def foo(a, b: Mapping = {}):  # 확인되지 않은 코드로 전달 될 수 있습니다.
      ...
  ```

---
<a id="s2.13-properties"></a>

### 2.13 Properties

- `Properties`는 간단한 계산이나 로직이 필요한 attribute을 가져오거나 설정하는 것을 제어하는 데 사용될 수 있습니다.
- `Properties` 구현은 보통의 attribute 접근에 대한 일반적인 기대와 일치되어야 합니다.

<a id="s2.13.1-definition"></a>

#### 2.13.1 정의

- 일반적인 속성을 접근하듯이 속성을 가져오거나 설정하는 메서드 호출을 포장하는 방법입니다.

<a id="s2.13.2-pros"></a>

#### 2.13.2 장점

- getter, setter method 호출 대신 attribute 접근 및 할당 API를 허용합니다.
- attribute를 읽기 전용으로 만드는 데 사용할 수 있습니다.
- [느긋한 계산법](https://ko.wikipedia.org/wiki/느긋한_계산법)을 허용합니다.
- 내부가 class 사용자와 독립적으로 발전할 때 클레스의 public interface를 유지 관리하는 방법을 제공합니다.

<a id="s2.13.3-cons"></a>

#### 2.13.3 단점

- 연산자 오버 로딩(operator overloading)과 같은 부작용을 숨길 수 있습니다.
- 하위 클래스의 경우 혼란스러울 수 있습니다.

<a id="s2.13.4-decision"></a>

#### 2.13.4 결론

- Properties는 허용하지만 연산자 오버로딩과 마찬가지로 필요한 경우에만 사용해야 하며 일반적인 attribute 접근에 대한 기대와 일치해야합니다
  - 그렇지 않은 경우에는 [getters and setters](#getters-and-setters)규칙을 따르세요.
- 예를 들어, 단순히 attribute를 가져오고 설정하기 위해 property를 사용하는 것은 허용되지 않습니다.
  - 계산이 발생하지 않으므로 property는 불필요합니다. ([대신 attribute를 public으로 설정합니다.](#getters-and-setters))
- 이에 비해 attribute 접근을 제어하거나 사소한 파생 값을 계산하기 위해 property를 사용하는 것은 허용됩니다.
  - 로직은 간단하고 놀랍지 않습니다.
- Properties는 `@property` [decorator](#s2.17-function-and-method-decorators)를 사용하여 생성해야합니다.
- property descriptor를 수동으로 구현하는 것은 [power feature](#power-features)로 간주됩니다.
- 속성에 대한 상속은 명백하지 않을 수 있습니다. subclass가 재정의하고 확장하기 위한 계산 도구로 properties를 사용하지 마세요.

---
<a id="s2.14-truefalse-evaluations"></a>

### 2.14 True/False 평가

- 가능한 경우 "암묵적(implicit)" `false`를 사용하세요. (몇 가지 주의사항이 있지만)

<a id="s2.14.1-definition"></a>

#### 2.14.1 정의

- Python은 boolean문에서 특정 값을 `False`으로 평가합니다.
- 빠른 "거짓의 법칙"은 모든 "비어있는" 값을 `False`으로 간주되므로 `0, None, [], {}, ''`은 boolean문에서는 `False`으로 평가합니다.

<a id="s2.14.2-pros"></a>

#### 2.14.2 장점

- Python boolean을 사용하면 읽기 쉽고 오류가 적고 대부분의 경우 빠릅니다.

<a id="s2.14.3-cons"></a>

#### 2.14.3 단점

- C/C++ 개발자들에게는 이상하게 보일 수도 있습니다.

<a id="s2.14.4-decision"></a>

#### 2.14.4 결론

- 가능하다면 "암묵적(implicit)" `False`를 사용하세요. (e.g. `if foo != []:` 보다는 `if foo:` 가 좋습니다.)
- 그러나 몇가지 주의 사항을 명심해야합니다.

  - 항상 `if foo is None:`(혹은 `is not None`)을 통해 `None` 값을 확인하세요.
  - 예를 들어, 기본값이 `None`인 변수나 인자를 어떤 값으로 설정했는지 확인할 때, 어떤 값이 boolean의 `False` 값일 수 있습니다.
  - `==`를 사용해서 boolean 변수인 `False`와 비교하지 마세요. 대신 `if not x:`를 사용하세요. `False`와 `None`를 구별해야 할 경우 `if not x and is not None:`와 같은 식으로 연결하세요.
  - sequences(strings, lists, tuples)의 경우 빈 sequences는 `False`이므로 `if len(seq):` 혹은 `if not len(seq):` 보다 `if seq:` 혹은 `if not seq:`가 더 바람직합니다.
  - 정수(integer)를 처리할때, 암묵적(implicit) `False`는 이점보다 더 많은 위험을 가져올 수 있습니다(즉 `None`을 0으로 잘못 처리합니다.). (`len()`의 결과가 아닌)정수라고 알려진 값을 정수 0과 비교할 수 있습니다.

- 올바른 예

  ```python
  if not users:
      print('사용자가 없습니다.')

  if i % 10 == 0:
      self.handle_multiple_of_ten()

  def f(x=None):
      if x is None:
          x = []
  ```

- 부적절한 예

  ```python
  if len(users) == 0:
      print('사용자가 없습니다.')

  if not i % 10:
      self.handle_multiple_of_ten()

  def f(x=None):
      x = x or []
  ```

- `'0'`(즉, `0` 문자열)은 참으로 평가한다는 점에 유의해야합니다.
- Numpy 배열은 암시적 boolean 컨텍스트에서 예외를 발생시킬 수 있습니다. `np.array`의 비어 있음을 테스트할 때 `.size` attribute를 선호합니다. (e.g. `if not users.size`)

---
<a id="s2.16-lexical-scoping"></a>

### 2.16 렉시컬 스코핑(Lexical Scoping)

- 사용해도 좋습니다.

<a id="s2.16.1-definition"></a>

#### 2.16.1 정의

- 중첩된 Python 함수는 주변 함수에 정의된 변수를 참조할 수 있지만 할당할 수 없습니다.
- 변수 바인딩은 렉시컬 스코핑(Lexical Scoping)를 사용하여 해결합니다. 즉, 정적 프로그램 텍스트를 기반으로 합니다.
- 블록 내에 할당된 모든 이름은 Python이 해당 이름에 대한 모든 참조를 할당에 앞서 사용하더라도 로컬 변수로 처리하게 할 것입니다. 만약에 전역 변수가 발생하면 그 이름은 전역 변수로 취급합니다.

- 이 기능에 대해 사용예는 다음과 같습니다.

  ```python
  def get_adder(summand1: float) -> Callable[[float], float]:
      """주어진 숫자에 숫자를 더하는 함수를 반환합니다."""
      def adder(summand2: float) -> float:
          return summand1 + summand2

      return adder
  ```

<a id="s2.16.2-pros"></a>

#### 2.16.2 장점

- 종종 명확하고 우아한 코드를 만들어냅니다. 특히 Lisp와 Scheme(그리고 Haskell, ML ...) 개발자들에게 위안을 줍니다.

<a id="s2.16.3-cons"></a>

#### 2.16.3 단점

- [PEP-0227](https://peps.python.org/pep-0227)을 기반으로 한 이 예시와 같이 혼란스러운 버그를 초래할 수 있습니다.

  ```python
  i = 4
  def foo(x: Iterable[int]):
      def bar():
          print(i, end='') # foo 함수 밖에 있는 i와 동일한 i를 사용합니다.
      # ...
      # 코드 생략
      # ...
      for i in x:  # foo함수 밖의 i와 동일한 i를 사용합니다. (i 값이 초기화 됩니다.)
          print(i, end='')
      bar()
  ```

  - `foo([1, 2, 3])`은 `1 2 3 4`가 아니라 `1 2 3 3`가 출력됩니다.

<a id="s2.16.4-decision"></a>

#### 2.16.4 결론

- 사용해도 좋습니다.

---
<a id="s2.17-function-and-method-decorators"></a>

### 2.17 함수와 메서드 Decorators

- Decorators는 확실하게 이점이 있을 때에 신중하게 사용하세요. `staticmethod`는 피하고 `classmethod`의 사용은 제한하세요.

<a id="s2.17.1-definition"></a>

#### 2.17.1 정의

- [함수와 메서드를 위한 Decorators 입니다.](https://docs.python.org/3/glossary.html#term-decorator) ("`@` 표기법"으로 알려져있습니다).
- 일반적인 decorator 중 하나는 메서드를 동적으로 계산한 속성으로 변환하는 데 사용하는 `@property`가 있습니다. 그러나 decorator는 사용자 정의 decorator도 허용하고 있습니다.
- 특히 이 `my_decorator` 함수 처럼 할 수 있습니다

  ```python
  class C:
      @my_decorator
      def method(self):
          # 메서드 구현부 ...
  ```

- 위 와 동일한 역할 합니다

  ```python
  class C:
      def method(self):
          # 메서드 구현부 ...
      method = my_decorator(method)
  ```

<a id="s2.17.2-pros"></a>

#### 2.17.2 장점

- 메서드에 대해 몇몇 변형을 엄밀하게 명시합니다.
- 변형은 몇 가지 반복적인 코드를 제거하고 불변성을 유지하게 만드는 작업 등을 수행합니다.

<a id="s2.17.3-cons"></a>

#### 2.17.3 단점

- Decorator는 함수의 인자, 반환 값에 대해 임의의 동작을 수행할 수 있으며 결과적으로 놀라운 암묵적 행동을 할 수 있습니다.
- 게다가, Decorator는 object 정의 시 실행합니다. module-level 객체(classes, module functions, ...)의 경우 import할 때 발생합니다.
- Decorator 코드 오류는 복구가 거의 불가능합니다.

<a id="s2.17.4-decision"></a>

#### 2.17.4 결론

- Decorator는 분명한 이점이 있더라도 현명하게 사용해야 합니다. Decorator는 import와 명명 지침을 따라야 합니다. Decorator pydoc는 decorator 함수 임을 분명히 명시해야합니다. dcorator를 위한 유닛 테스트(unit test)를 사용해야합니다.
- Decorator(예. 파일, 소켓, 데이터베이스 연결 등) 를 실행할 때 (`pydoc` 혹은 기타 도구를 import 시간에 가져올 때) 사용 못할 수 있으므로 Decorator의 외부 의존성을 피하세요. 유효한 매개변수를 가진 Decorator은 모든 경우에 작동할 수 있도록 보장되어야 합니다.
- Decorator는 "Top-level code"의 특별한 경우일 때에는 [main](#s3.17-main) 항목에 자세한 내용이 있습니다.
- 기존 라이브러리에 정의된 API와 통합하기 위해 강제하지 않는 한 "staticmethod"를 사용하지 마세요. 대신 모듈 레벨 함수를 쓰세요.
- classmethod는 명명된 생성자를 작성하거나 프로세스 전체 캐시와 같은 필수 전역 상태를 수정하는 클래스 특정 루틴을 작성할 때만 사용하세요.

---
<a id="s2.18-threading"></a>

### 2.18 스레드

- 내장된 타입의 원자성에 의존하지 마세요. 딕셔너리와 같은 Python의 내장된 타입은 원자 형태로 조작할 수 있지만 그러지 않은 경우(예: `__hash__`이나 `__eq__`가 Python 함수로 구현되는 경우)도 있으며 원자로 되어있다고 신뢰하면 안 됩니다. 또한, 원자 변수 할당에 의존해서는 안 됩니다. (결국, 딕셔너리에 달려있기 때문입니다) 스레드 간 데이터를 통신하는 데 선호하는 방법으로 `queue` 모듈의 `Queue` 데이터 타입을 사용하세요. 그렇지 않으면 `threading` 모듈이나 locking primitives를 사용하세요. lower-level lock 대신해 Condition variables와 `threading.Condition`를 선호하세요.

---
<a id="s2.19-power-features"></a>

### 2.19 강한 기능

- 이런 기능들은 피하세요.

<a id="s2.19.1-definition"></a>

#### 2.19.1 정의

- Python은 매우 유연한 언어로서 당신에게 많은 화려한 기능을 줍니다. (e.g. 사용자 정의 mtaclasses, bytecode 접근, 즉각적인 컴파일, 동적 상속, object reparenting, import hacks, reflection (`getattr()`의 일부 사용), 시스템 내부 수정, 커스텀 Cleanup을 위한 `__del__` 메소드 등.)

<a id="s2.19.2-pros"></a>

#### 2.19.2 장점

- 이것들은 강력한 언어 기능입니다. 코드를 더 짧게 만들 수 있습니다.

<a id="s2.19.3-cons"></a>

#### 2.19.3 단점

- 이 "멋진"기능이 반드시 필요한 것은 아니나 사용하는 것이 매우 유혹적입니다. 이러한 흔치 않은 기능들을 사용하면 읽거나 이해하거나 디버그하는데 어렵습니다.
- 처음에는 그렇게 보이지 않지만 (원저자에게) 코드를 다시 보면 코드는 간단하지만 긴 코드보다 어려운 경향이 있습니다.

<a id="s2.19.4-decision"></a>

#### 2.19.4 결론

- 코드에서 이러한 기능은 피하세요.
- 이러한 기능을 내부적으로 사용하는 표준 라이브러리 모듈과 클래스는 사용할 수 있습니다. (예를 들면, `abc.ABCMeta`, `dataclasses`, `enum`)

---
<a id="s2.20-modern-python"></a>

### 2.20 Modern Python : from, \_\_future\_\_, imports

- 새로운 언어 버전 의미 체계 변경 사항은 이전 런타임 내에서 파일 단위로 활성화하기 위해 특별한 향후 가져오기 뒤에 제어될 수 있습니다.
  (New language version semantic changes may be gated behind a special future import to enable them on a per-file basis within earlier runtimes.)

<a id="s2.20.1-definition"></a>

#### 2.20.1 정의

- `from __future__ import`문을 통해 보다 현대적인 기능 중 일부를 활성화할 수 있으면 예상되는 향후 Python 버전의 기능을 조기에 사용할 수 있습니다.

<a id="s2.20.2-pros"></a>

#### 2.20.2 장점

- 이는 호환성을 선언하고 해당 파일 내에서 회귀를 방지하면서 파일별로 변경이 이루어질 수 있으므로 런타임 버전 업그레이드를 더 원활하게 만드는 것으로 입중되었습니다.
- 최신 코드는 향후 런타임 업그레이드 중에 문제가 될 수 있는 기술적 부채가 축적될 가능성이 적기 때문에 유지 관리가 더 쉽습니다.

<a id="s2.20.3-cons"></a>

#### 2.20.3 단점

- 이러한 코드는 필요한 feature 문을 도입하기 전에는 매우 오래된 인터프리터 버전에서 동작하지 않을 수 있습니다.
- 일반적으로 다양한 환경을 지원해야하는 프로젝트에서 필요합니다.

<a id="s2.20.4-decision"></a>

#### 2.20.4 결론

##### from \_\_future\_\_ imports

- `from __future__ import`문을 사용하는 것이 좋습니다.
- 주어진 소스파일에서 더욱 현대적인 Python 구문 기능을 사용할 수 있습니다.
- `__future__` import 뒤에 기능이 숨겨져 있는 버전에서 더 이상 실행할 필요가 없다면 해당 줄을 자유롭게 제거하세요.
- 3.7 이상이 아닌 3.5 이전 버전에서 실행될 수 있는 코드에서 가져올 경우

  ```python
  from __future__ import generator_stop
  ```

- 자세한 내용은 [Python future statement definitions](https://docs.python.org/3/library/__future__.html) 문서를 읽어보세요.

---
<a id="s2.21-type-annotated-code"></a>
<a id="s2.21-typed-code"></a>

### 2.21 Type 주석

- Python에서 타입의 정보를 [PEP-484](https://www.python.org/dev/peps/pep-0484/)의 참고해서 주석으로 달 수 있습니다. 그리고 빌드 할 때 [pytype](https://github.com/google/pytype)같은 타입검사도구를 사용하세요.
- Type에 대한 주석은 소스 안이나 [stub pyi 파일](https://peps.python.org/pep-0484/#stub-files)에 있을 수 있습니다. 가능하면 주석은 소스안에 있어야 합니다. 타사 또는 확장 모듈에는 pyi 파일을 사용하세요.

<a id="s2.21.1-definition"></a>

#### 2.21.1 정의

- Type의 주석(혹은 Type 정보)은 함수나 메서드의 인자값이나 반환값입니다

  ```python
  def func(a: int) -> list[int]:
  ```

- [PEP-526](https://peps.python.org/pep-0526/)구문 처럼 변수의 type을 선언할 때 사용합니다.

  ```python
  a: SomeType = some_func()
  ```

<a id="s2.21.2-pros"></a>

#### 2.21.2 장점

- Type에 대한 주석은 코드의 가독성과 유지관리에 도움을 줍니다. Type 검사기는 많은 런타임 오류를 빌드 타임 오류로 바꿔주고 [강력한 기능들](#s2.19-power-features)의 사용을 줄여줍니다.

<a id="s2.21.3-cons"></a>

#### 2.21.3 단점

- Type의 명세를 최신으로 유지해야합니다. 올바른 코드라고 생각했던 곳에서 Type 에러를 볼지도 모릅니다. [Type 검사기](https://github.com/google/pytype)를 사용하면 [강력한 기능들](#s2.19-power-features)을 활용하는 능력이 떨어질 수 있습니다.

<a id="s2.21.4-decision"></a>

#### 2.21.4 결론

- 프로젝트의 복잡성에 크게 좌우됩니다. 한번 해보세요.

---
