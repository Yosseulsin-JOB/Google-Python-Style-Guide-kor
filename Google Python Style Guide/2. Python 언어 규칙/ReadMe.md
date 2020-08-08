<a id="s2.1-lint"></a>

### 2.1 Lint

- 작성한 코드에 대해 `pylint`를 실행시키세요.

<a id="s2.1.1-definition"></a>

#### 2.1.1 정의

- `pylint`는 파이썬 소스코드에서 버그와 스타일 문제를 찾기위한 툴입니다. (`pylint`는 빌나 컴파일시 에러외에 `추가`로 오류검사를 할 수 있는 도구라고 생각하면 될 것 같습니다.)
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
  dict = 'something awful'  # Bad Idea... pylint: disable=redefined-builtin
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
  pylint --help-msg=C6409
  ```

- `pyling: disable-msg`는 이전에 사용했던 방식으로 이제는 사용되지 않으며 `pylint: disable`를 사용합니다.
- 사용되지 않는 인자에 대한 경고는 함수를 시작할 때 그 변수를 지움으로써 억제할 수 있습니다. 다만 그 변수를 왜 지웠는지에 대해 항상 주석으로 설명을 추가해야 합니다. 이러한 경우는 "Unused."라고 작성하면 충분합니다.
- 아래 예시를 참고하세요.

  ```python
  def viking_cafe_order(spam, beans, eggs=None):
      del beans, eggs  # Unused by vikings.
      return spam + spam + spam
  ```

- 경고를 없애는 방법은 일반적인 형태로 사용되지 않은 인자의 이름으로 `_`를 사용하거나 이름에 `unused_`를 붙이거나 `_`으로 할당하는 것입니다. 이러한 형태는 허용되지만 권장하지 않습니다. break caller는 이름으로 인수를 전달하고 인수가 실제로 사용되지 않도록 강제하지 않습니다.
<a id="s2.2-imports"></a>

### 2.2 Imports

- `import`문을 사용할때 package와 module을 대상으로만 사용해야하고 각각의 클래스나 함수에 대해 사용하면 안됩니다. 다만 [typing 모듈](#s3.19.12-imports)을 사용할때는 예외입니다.

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
- 만약 `y` 로 이름이 지어진 두 모듈이 import되거나 `y` 가 불필요하게 너무 긴 이름을 가졌다면 `from x import y as z`를 사용세요.
- `import y as z`를 `z` 가 공식적인 약어인 경우에만 사용하세요(e.g., `np` 는 `numpy` 를 의미합니다.)

- 예를들어 `sound.effects.echo`모듈이 import 된다면 아래와 같습니다.

  ```python
  from sound.effects import echo
  ...
  echo.EchoFilter(input, output, delay=0.7, atten=4)
  ```

- import된것들과 관련있는 이름을 사용하지마세요.
- 모듈이 같은 패키지에 있더라도 전체 패키지 이름을 사용하세요.
- 이는 무심코 패키지를 두번 import 하는것을 예방하는 것에 도움이 됩니다. 다만 [typing 모듈](#s3.19.12-imports) 를 import할때는 이러한 규칙들에서 예외될 수 있습니다.
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

    FLAGS = absl.flags.FLAGS
    ```

    ```python
    # Reference flags in code with just the module name (common).
    from absl import flags
    from doctor.who import jodie

    FLAGS = flags.FLAGS
    ```

  - 부적절한 예 (이 파일은 `doctor/who/` 에 있다고 가정하고 `jodie.py`또한 존재한다고 가정합니다.)

    ```python
    # Unclear what module the author wanted and what will be imported.  The actual
    # import behavior depends on external factors controlling sys.path.
    # Which possible jodie module did the author intend to import?
    import jodie
    ```

- 메인 바이너리 디렉토리는 몇몇 환경에서 발생했음에도 불구하고`sys.path`에 있다고 예측하면 안됩니다.
- 이러한 상황에서 코드는 `import jodie`는 파일로 된 `jodie.py`가 아닌 써드파티나 탑 레벨 패키지 이름이 `jodie`라고 참조한다고 가정해야합니다.
<a id="s2.4-exceptions"></a>

### 2.4 예외

- 예외는 허용하지만 주의하며 사용해야합니다.

<a id="s2.4.1-definition"></a>

#### 2.4.1 결정

- 예외는 코드블록에서 정상적인 상황에 발생한 에러나 다른 예외적인 상황을 다루는 방법입니다.

<a id="s2.4.2-pros"></a>

#### 2.4.2 장점

- 일반적인 연산자에 대한 제어흐름은 에러 핸들링 코드에 의해 난잡해지지 않습니다.
- 특정 조건이 발생했을 때 제어 흐름이 몇몇 프레임들을 생략할 수 있습니다.
- 예를 들어, N이라는 중첩된 함수에서 앞으로 돌아가는 것 대신, 에러코드를 전달합니다.

<a id="s2.4.3-cons"></a>

#### 2.4.3 단점

- 제어 흐름이 혼란스러워질 수 있습니다. 라이브러리를 호출할때 에러 상황들을 놓치기 쉽습니다.

<a id="s2.4.4-decision"></a>

#### 2.4.4 결론

##### 예외는 다음과 같은 조건을 만족해야 합니다

- `raise MyError('Error message')` 또는 `raise MyError()` 같이 예외를 발생시킵니다.
- 두개의 인자를 가지는 형식을 사용하지 않습니다. (`raise Myerror, 'Error message'`).
- 적절한 경우 내장 예외 클래스를 사용하세요.
- 예를 들어, 만약 양수를 예상하는데 음수가 통과한다면 `ValueError`를 발생시는 것이 그 예입니다.
- 공공 API에 있는 인수의 값을 검증하기 위해 `assert`문을 사용하지마세요.
- `assert`는 올바른 사용이나 예상치 못한 이벤트 발생을 나타내는 것이 아니라 내부적 정확성을 보장하기 위해 사용됩니다. 만약 나중에 예외가 필요하다면, raise문을 실행하세요.

  - 올바른 예

    ```python
    def connect_to_next_port(self, minimum):
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
        if not port:
          raise ConnectionError(
              f'Could not connect to service on port {minimum} or higher.')
        assert port >= minimum, (
            f'Unexpected port {port} when minimum was {minimum}.')
        return port
    ```

  - 부적절한 예

    ```python
    def connect_to_next_port(self, minimum):
        """Connects to the next available port.

        Args:
        minimum: A port value greater or equal to 1024.
        Returns:
        The new minimum port.
        """
        assert minimum >= 1024, 'Minimum port must be at least 1024.'
        port = self._find_next_open_port(minimum)
        assert port is not None
        return port
    ```

- 라이브러리나 패키지는 고유의 예외가 정의되어 있을 것입니다.
- 사용하는 동안, 기존에 존재하는 예외 클래스(exception class)로부터 상속을 받아야 합니다.
- 예외 이름은 `Error`로 끝나야 하고 말더듬이(stutter)로 시작하면 안됩니다.(`foo.fooError`).
- 예외를 다시 발생시키거나 쓰레드의 가장 바깥 쪽 블록에 있지않으면 절대 포괄적인 `except:`문을 사용하거나 `Exception`, `StandardError`을 사용하지마세요. (그리고 에러메시지를 출력하세요.) Python은 이와 관련해서 매우 관용적이며 `except:` 모든 오탈자를 비롯하여, sys.exit() 호출, Ctrl+C로 인한 인터럽트, 유닛테스트 실패와 마지막으로 당신이 포착을 원하지 않았던 다른 모든 종류의 예외들까지 모두 잡아낼 것입니다.
- 코드상에서 `try`/`except` 블록의 수를 최소화시키세요. `try`문의 내부가 커질수록 예외는 당신이 예외가 발생할것이라 예상하지 않았던 코드에 의해 점점 더 발생할 것입니다. 이러한 상황에서, `try`/`except` 블록은 진짜 검출해야할 에러를 가리게 됩니다.
- 예외가 `try` 블록에서 발생하던 안하던 `finally`절은 코드를 실행시킨다. 이건 가끔 깔끔히 하는데 유용합니다. 예를들어, 파일을 닫을 때 가 그 예입니다.
- 예외를 포착했을때, `,` 보다 `as` 를 사용하세요. 예시는 다음과 같습니다.

  ```python
  try:
      raise Error()
  except Error as error:
      pass
  ```
<a id="s2.5-global-variables"></a>

### 2.5 전역 변수

- 전역 변수를 사용하지 마세요.

<a id="s2.5.1-definition"></a>

#### 2.5.1 정의

- 모듈이나 클래스 속성으로 선언된 변수를 말합니다.

<a id="s2.5.2-pros"></a>

#### 2.5.2 장점

- 가끔 편리합니다.

<a id="s2.5.3-cons"></a>

#### 2.5.3 단점

- import되는 동안 모듈의 동작이 변경될 수도 있습니다. 왜냐하면 전역 변수의 할당은 모듈을 처음 import를 할때 수행이 되기 때문입니다.

<a id="s2.5.4-decision"></a>

#### 2.5.4 결론

- 전역 변수를 사용하지 마세요.

- 전역변수는 기술적으로는 변수이지만, module-level 상수가 허용되고 권장됩니다.
- 예를들어 `MAX_HOLY_HANDGRENADE_COUNT = 3`. 상수는 반드시 모든 공백 `_`를 넣어서 이름을 만들어야 합니다. [Naming](#s3.16-naming) 을 참고하세요.
- 만약 전역변수가 필요하다면 module-level에서 선언되고 모듈 내부에서 이름에 `_`를 붙여서 만들어져야 합니다.
- 외부 접근은 반드시 public단위의 module-level 함수를 통해서 동작되어야 합니다. [Naming](#s3.16-naming)을 참고하세요.
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
- [ADT](http://www.google.com/url?sa=D&q=http://en.wikipedia.org/wiki/Abstract_data_type)가 무엇인지 참고하세요.
- 일반적으로 데코레이터를 구현할 때 사용됩니다.

<a id="s2.6.3-cons"></a>

#### 2.6.3 단점

- 중첩 또는 로컬클래스의 인스턴스들은 pickle을 할 수 없습니다.
- 중첩된 함수와 클래스는 직접 테스트할 수 없습니다.
- 중첩은 외부함수를 더 길고 읽기 어렵게 만듭니다.

<a id="s2.6.4-decision"></a>

#### 2.6.4 결론

- 몇가지 주의사항을 지키면 사용해도 괜찮습니다.
- local value에 접근할 때를 제외하고 중첩함수나 중첩 클래스 사용을 피하세요.
- 함수를 모듈 사용자들에게 숨기기 위해 중첩하지마세요. 대신, module level에서는 이름 앞에 `_`을 붙여 계속해서 test할 수 있게 하세요.
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

- 복잡하지 않은 상황에서 사용하세요. 각각의 부분은 반드시 한 라인에서 끝나야 합니다.
- map, for문, filter 표현식이 그 예입니다. 중첩 for문이나 filter문은 허용되지 않습니다.
- loop문을 통해 코드를 단순화 할 수 있으면 사용하세요.
- 올바른 예

  ```python
  result = [mapping_expr for value in iterable if filter_expr]

  result = [{'key': value} for value in iterable
              if a_long_filter_expression(value)]

  result = [complicated_transform(x)
              for x in iterable if predicate(x)]

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

  return {x: complicated_transform(x)
          for x in long_generator_function(parameter)
          if x is not None}

  squares_generator = (x**2 for x in range(10))

  unique_names = {user.name for user in users if user is not None}

  eat(jelly_bean for jelly_bean in jelly_beans
      if jelly_bean.color == 'black')
  ```

- 부적절한 예

  ```python
  result = [complicated_transform(
                  x, some_argument=x+1)
              for x in iterable if predicate(x)]

  result = [(x, y) for x in range(10) for y in range(5) if x * y > 10]

  return ((x, y, z)
          for x in range(5)
          for y in range(5)
          if x != y
          for z in range(5)
          if y != z)
  ```
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

- 메소드 이름을 읽어도 객체의 타입을 유추할 수 없습니다.(e.g. `has_key()`는 딕셔너리를 의미합니다.) 이건 이점이 될 수도 있습니다.

<a id="s2.8.4-decision"></a>

#### 2.8.4 결론

- 리스트와 딕셔너리, 파일과 같은 연산자를 지원해주는 타입에서 기본 반복자와 연산자를 사용하세요.
- 내장된 타입은 기본 반복자 메소드도 정의하고 있습니다.
- built-in 타입은 iterator 메서드도 정의합니다.
- 컨테이너를 반복하는 동안 컨테이너를 변형시키지 않아야 한다는 점을 제외하고 리스트를 반환하는 방법보다 이런 메서드를 선호하세요.
- 필요한 경우가 아니면 절대 파이썬2 문법의 `dict.iter8()`와 같은 특정 반복 메소드를 사용하지 마세요.
- 올바른 예

  ```python
  for key in adict: ...
  if key not in adict: ...
  if obj in alist: ...
  for line in afile: ...
  for k, v in adict.items(): ...
  for k, v in six.iteritems(adict): ...
  ```

- 부적절한 예

  ```python
  for key in adict.keys(): ...
  if not adict.has_key(key): ...
  for line in afile.readlines(): ...
  for k, v in dict.iteritems(): ...
  ```
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

- 없습니다.

<a id="s2.9.4-decision"></a>

#### 2.9.4 결론

- 제너레이터 함수에서 docstring에 대해 "Returns:"보다 "Yields:"를 사용하세요.
<a id="s2.10-lambda-functions"></a>

### 2.10 람다 함수

- 한 줄로 작성하세요.

<a id="s2.10.1-definition"></a>

#### 2.10.1 정의

- 람다는 표현에 있어 다른 `문` 과는 달리 익명 함수들을 정의합니다.
- 람다는 `map()`이나 `filter()`와 같은 higher-order functions(고차 함수)에 대해 콜백이나 연산자를 정의하기 위해 가끔 사용됩니다.

<a id="s2.10.2-pros"></a>

#### 2.10.2 장점

- 편리합니다.

<a id="s2.10.3-cons"></a>

#### 2.10.3 단점

- 로컬 함수에 비해 읽기 어렵고 디버깅이 힘듭니다. 이름이 없다는 것은 stack trace를 이해하기 어렵다는 것입니다.
- 함수에는 오직 표현식만 담을 수 있어 표현이 제한됩니다.

<a id="s2.10.4-decision"></a>

#### 2.10.4 결론

- 람다를 한 줄로 사용하세요. 만약 코드 내부에 있는 람다 함수가 60~80글자 수 정도로 길다면 그건 아마 더 일반적인 [Lexical Scoping(렉시컬 스코핑)](#s2.16-lexical-scoping)으로 정의하는게 나을 것입니다.

- 곱셈 같은 일반 연산자에서는 `operator`모듈 대신에 람다 함수를 사용하세요.
- 예를 들어, `operator.mul`을 `lambda x,y : x * y` 처럼 사용하시면 됩니다.
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

#### 2.11.4

- 간단한 상황에 좋습니다. 그 외의 경우에는 if 문을 사용하는 것이 좋습니다.
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
  def foo(a, b: Optional[Sequence] = None):
      if b is None:
          b = []
  def foo(a, b: Sequence = ()):  # tuples은 불변하기 때문에 사용 가능합니다.
      ...
  ```

- 부적절한 예

  ```python
  def foo(a, b=[]):
      ...
  def foo(a, b=time.time()):  # 모듈이 로드가 될 때의 시간인가???
      ...
  def foo(a, b=FLAGS.my_thing):  # sys.argv는 아직 구문 분석되지 않았습니다...
      ...
  def foo(a, b: Mapping = {}):  # 확인되지 않은 코드로 전달 될 수 있습니다...
      ...
  ```
<a id="s2.13-properties"></a>

### 2.13 Properties

- `Properties`을 접근하거나 데이터값을 설정할 때 보통 간단한 방법인 가벼운 접근자나 `setter` 메서드를 사용했을 것입니다.

<a id="s2.13.1-definition"></a>

#### 2.13.1 정의

- 간단한 계산을 할 때 일반적인 속성을 접근하듯이 속성을 가져오거나 설정하는 메서드 호출을 포장하는 방법입니다.

<a id="s2.13.2-pros"></a>

#### 2.13.2 장점

- 간단한 속성 접근에 대해 명시적인 `get`, `set` 메서드 호출을 제거함으로써 가독성이 증가합니다.
- [느긋한 계산법](https://ko.wikipedia.org/wiki/느긋한_계산법)을 허용합니다.
- 클래스의 인터페이스를 유지하는 방법으로 [Pythonic](https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor/wiki/2.13-properties#pythonic)을 고려합니다.
- 성능 측면에서, trivial 접근자 메서드는 직접 변수 접근이 합리적일 때 속성 우회를 허용할 필요가 있습니다. 또한, 인터페이스를 파괴하지 않고 미래에 접근자 메서드를 추가할 수 있게 합니다.

<a id="s2.13.3-cons"></a>

#### 2.13.3 단점

- `Python 2`에서는 `object`에 상속되어있어야 합니다.
- 연산자 오버 로딩(operator overloading)과 같은 부작용을 숨길 수 있습니다. 하위 클래스의 경우 혼란스러울 수 있습니다.

<a id="s2.13.4-decision"></a>

#### 2.13.4 결론

- 새 코드에서 속성을 사용하여 일반적으로 단순하고 가벼운 접근자 또는 `setter` 메소드를 사용했던 데이터를 접근하거나 설정합니다.
- 속성은 `@property` [decorator](#s2.17-function-and-method-decorators)로 만들어야 합니다.
- 속성 자체가 재정의되지 않은 경우 속성에 대한 상속은 명백하지 않을 수 있습니다. 따라서 하위 클래스에서 재정의 된 메서드가 속성에 의해 호출되도록하려면 접근자 메서드를 간접적으로 호출해야합니다([template method design pattern](https://en.wikipedia.org/wiki/Template_method_pattern)를 사용합니다.).
- 올바른 예

  ```python
  import math
  class Square:
      """두 가지 속성을 가진 사각형: 쓰기 가능한 면적(area)과 읽기전용인 둘레(perimeter)

      사용방법:
      >>> sq = Square(3)
      >>> sq.area
      9
      >>> sq.perimeter
      12
      >>> sq.area = 16
      >>> sq.side
      4
      >>> sq.perimeter
      16
      """

      def __init__(self, side):
          self.side = side

      @property
      def area(self):
          """사각형의 면적을 가져오거나 설정합니다."""
          return self._get_area()

      @area.setter
      def area(self, area):
          return self._set_area(area)

      def _get_area(self):
          """'면적'속성을 계산하기 위한 간접 접근자입니다."""
          return self.side ** 2

      def _set_area(self, area):
          """'면적' 속성을 설정하기 위한 간접 설정자입니다."""
          self.side = math.sqrt(area)

      @property
      def perimeter(self):
          return self.side * 4
  ```
<a id="s2.14-truefalse-evaluations"></a>

### 2.14 True/False 평가

- 가능한 경우 "암묵적(implicit)" `false`를 사용하세요.

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
  - `==`를 사용해서 boolean 변수인 `False`와 비교하지 마세요. 대신 `if not x:`를 사용하세요. `False`와 `None`를 구별해야할 경우 `if not x and is not None:`와 같은 식으로 연결하세요.
  - sequences(strings, lists, tuples)의 경우 빈 sequences는 `False`이므로 `if len(seq):` 혹은 `if not len(seq):` 보다 `if seq:` 혹은 `if not seq:`가 더 바람직합니다.
  - 정수(integer)를 처리할때, 암묵적(implicit) `False`는 이점보다 더 많은 위험을 가져올 수 있습니다(즉 `None`을 0으로 잘못 처리합니다.). (`len()`의 결과가 아닌)정수라고 알려진 값을 정수 0과 비교할 수 있습니다.

- 올바른 예

  ```python
  if not users:
      print('사용자가 없습니다.')

  if foo == 0:
      self.handle_zero()

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

  if foo is not None and not foo:
      self.handle_zero()

  if not i % 10:
      self.handle_multiple_of_ten()

  def f(x=None):
      x = x or []
  ```

- `'0'`(즉, `0` 문자열)은 참으로 평가한다는 점에 유의해야합니다.
<a id="s2.15-deprecated-language-features"></a>

### 2.15 사용하지 않는 언어의 기능

- 가능한 `string` 모듈 대신 string 함수를 사용하세요. `apply`를 사용하는 대신에 함수 호출(function call) 구문을 사용하세요.
- 함수의 인자 값이 inlined lambda일 때 `filter` 와 `map` 대신에 `list comprehensions` 와 `for`문을 사용하세요. `reduce` 대신에 `for`문을 사용하세요.

<a id="s2.15.1-definition"></a>

#### 2.15.1 정의

- 현재 버전의 Python은 사람들이 일반적으로 선호하는 대체 구문을 제공합니다.

<a id="s2.15.2-decision"></a>

#### 2.15.2 결론

- 이러한 기능을 지원하지 않은 Python 버전은 사용하지 않으므로, 새로운 스타일을 사용하지 않을 이유가 없습니다.
- 올바른 예

  ```python
  words = foo.split(':')

  [x[1] for x in my_list if x[2] == 5]

  map(math.sqrt, data)    # 좋습니다. inlined lambda 식이 없습니다.

  fn(*args, **kwargs)
  ```

- 부적절한 예

  ```python
  words = string.split(foo, ':')

  map(lambda x: x[1], filter(lambda x: x[2] == 5, my_list))

  apply(fn, args, kwargs)
  ```
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
  def get_adder(summand1):
      """주어진 숫자에 숫자를 더하는 함수를 반환합니다."""
      def adder(summand2):
          return summand1 + summand2

      return adder
  ```

<a id="s2.16.2-pros"></a>

#### 2.16.2 장점

- 종종 명확하고 우아한 코드를 만들어냅니다. 특히 Lisp와 Scheme(그리고 Haskell, ML ...) 개발자들에게 위안을 줍니다.

<a id="s2.16.3-cons"></a>

#### 2.16.3 단점

- 혼란스러운 버그로 이어질 수 있습니다. [PEP-0227](http://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0227/)에서 자세한 정보를 확인할 수 있습니다.

  ```python
  i = 4
  def foo(x):
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
<a id="s2.17-function-and-method-decorators"></a>

### 2.17 함수와 메서드 Decorators

- Decorators는 확실하게 이점이 있을 때에 신중하게 사용하세요. `@staticmethod`는 피하고 `@classmethod`의 사용은 제한하세요.

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

- Decorator는 함수의 인자, 반환 값에 대해 임의의 동작을 수행할 수 있으며 결과적으로 놀라운 암묵적 행동을 할 수 있습니다. 게다가, Decorator는 import할 때 실행합니다. 잘못된 Decorator 코드는 회복이 거의 불가능합니다.

<a id="s2.17.4-decision"></a>

#### 2.17.4 결론

- Decorator는 분명한 이점이 있더라도 현명하게 사용해야 합니다. Decorator는 import와 명명 지침을 따라야 합니다. Decorator pydoc는 decorator 함수 임을 분명히 명시해야합니다. dcorator를 위한 유닛 테스트(unit test)를 사용해야합니다.
- Decorator(예. 파일, 소켓, 데이터베이스 연결 등) 를 실행할 때 (`pydoc` 혹은 기타 도구를 import 시간에 가져올 때) 사용 못할 수 있으므로 Decorator의 외부 의존성을 피하세요. 유효한 매개변수를 가진 Decorator은 모든 경우에 작동할 수 있도록 보장되어야 합니다.
- Decorator는 "Top level code"의 특별한 경우일 때에는 [main](#317-main) 항목에 자세한 내용이 있습니다.
- 기존 라이브러리에 정의된 API와 통합하기 위해 강제하지 않는 한 "@static method"를 사용하지 마세요. 대신 모듈 레벨 함수를 쓰세요.
- 프로세스 전체 캐시 등 필요한 global state를 수정하는 명명된 생성자 또는 클래스별 루틴을 작성할 때만 "@classmethod"를 사용하세요.
<a id="s2.18-threading"></a>

### 2.18 스레드

- 내장된 타입의 원자성에 의존하지 마세요. 딕셔너리와 같은 Python의 내장된 타입은 원자 형태로 조작할 수 있지만 그러지 않은 경우(예: `__hash__`이나 `__eq__`가 Python 함수로 구현되는 경우)도 있으며 원자로 되어있다고 신뢰하면 안 됩니다. 또한, 원자 변수 할당에 의존해서는 안 됩니다. (결국, 딕셔너리에 달려있기 때문입니다) 스레드 간 데이터를 통신하는 데 선호하는 방법으로 큐 모듈의 `Queue` 데이터 타입을 사용하세요. 그렇지 않으면 threading 모듈이나 locking primitives를 사용하세요. lower-level 대신해 Condition variables와 `threading.Condition`를 선호하세요.
<a id="s2.19-power-features"></a>

### 2.19 강한 기능

- 이런 기능들은 피하세요.

<a id="s2.19.1-definition"></a>

#### 2.19.1 정의

- Python은 매우 유연한 언어로서 당신에게 많은 화려한 기능을 줍니다. (e.g. 사용자 정의 mtaclasses, bytecode 접근, 즉각적인 컴파일, 동적 상속, object reparenting, import hacks, reflection (`getattr()`의 일부 사용), 시스템 내부 수정 등.)

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
- 이러한 기능을 내부적으로 사용하는 표준 라이브러리 모듈과 클래스는 사용할 수 있습니다. (예를 들면, `abc.ABCMeta`, `collections.namedtuple`, `dataclasses`, `enum`)
<a id="s2.20-modern-python"></a>

### 2.20 Modern Python : Python 3 그리고 from, \_\_future\_\_, imports

- Python 3 버전이 나왔습니다. 아직 프로젝트에 Python 3을 사용할 준비가 되어있는 건 아니지만 모든 코드는 호환되도록 작성되어야 합니다. (가능한 경우에 Python 3에 따라 테스트합니다.)

<a id="s2.20.1-definition"></a>

#### 2.20.1 정의

- Python 3는 Python언어에서 중요한 변화가 있습니다. 현재 사용하고 있는 코드는 2.7 버전을 염두하여 작성하는 경우가 많습니다.
- Python3에서 수정없이 사용할 수 있도록 잘 준비하기 위해서 코드의 의도를 명확하게 만들 수 있게 하는 몇몇 간단한 것들이 있습니다.

<a id="s2.20.2-pros"></a>

#### 2.20.2 장점

- Python 3를 염두해 두고 작성된 코드는 명확하고 프로젝트의 모든 의존성이 Python 3에서 실행하기가 더 쉬워집니다.

<a id="s2.20.3-cons"></a>

#### 2.20.3 단점

- 어떤 사람들은 추가된 boilerplate가 추하다고 생각합니다. 사용하지 않는 기능을 import하는 것은 이례적입니다.

<a id="s2.20.4-decision"></a>

#### 2.20.4 결론

##### from \_\_future\_\_ imports

- `from __future__ import` 형태를 사용하는 것이 바람직합니다. 모든 새로운 코드는 다음 사항이 포함되어야 하며 가능한 경우 기존 코드가 호환되도록 업데이트 해야 합니다

  ```python
  from __future__ import absolute_import
  from __future__ import division
  from __future__ import print_function
  ```

- `import`에 대한 자세한 내용은 [absolute imports](https://www.python.org/dev/peps/pep-0328/), [`/` division behavior](https://www.python.org/dev/peps/pep-0238/), [the `print` function](https://www.python.org/dev/peps/pep-3105/)을 참조하세요.
- 이러한 import는 현재 모듈에서 사용되지 않더라도 생략하거나 제거하지 마세요. 모든 파일에 항상 향후 import가 있으므로 나중에 이러한 기능을 사용하기 시작할 때 편집하는 동안 잊지 않도록 하는 것이 좋습니다.
- 다른 `from __future__` import 명세도 있으니 알맞게 사용하세요. `unicode_literals`는 파이썬 2.7 내 여러 곳에서 도입되는 암묵적 기본 코덱 변환 결과 때문에 명확하지 않기 때문에 권고사항에 포함시키지 않았습니다. 대부분의 코드는 필요에 따라 `b''`, `u''` 바이트를 명시적으로 사용하고 유니코드 문자열 literal를 사용하면 더 좋습니다.

##### six, future 그리고 past 라이브러리

- 프로젝트가 Python 2, 3 모두 지원해야하는 경우에 라이브러리를 적합하게 사용하는 것을 권장합니다. 코드를 더 깨끗하고 삶을 더 쉽게 만들기 위해 존재합니다.
<a id="s2.21-type-annotated-code"></a>
<a id="s2.21-typed-code"></a>

### 2.21 Type 주석

- Python 3에서 타입의 정보를 [PEP-484](https://www.python.org/dev/peps/pep-0484/)의 참고해서 주석으로 달 수 있습니다. 그리고 빌드 할 때 [pytype](https://github.com/google/pytype)같은 타입검사도구를 사용하세요.
- Type에 대한 주석은 소스 안이나 [stub pyi 파일](https://www.python.org/dev/peps/pep-0484/#stub-files)에 있을 수 있습니다. 가능하면 주석은 소스안에 있어야 합니다. 타사 또는 확장 모듈에는 pyi 파일을 사용하세요.

<a id="s2.21.1-definition"></a>

#### 2.21.1 정의

- Type의 주석(혹은 Type 정보)은 함수나 메서드의 인자값이나 반환값입니다

  ```python
  def func(a: int) -> List[int]:
  ```

- [PEP-526](https://www.python.org/dev/peps/pep-0526/)구문 처럼 변수의 type을 선언할 수 있습니다.

  ```python
  a: SomeType = some_func()
  ```

- 또는 legacy Python version을 지원해야한다면 코드에 type 설명을 사용합니다.

  ```python
  a = some_func()  # type: SomeType
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
