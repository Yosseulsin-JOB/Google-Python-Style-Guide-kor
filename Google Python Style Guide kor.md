# Google Python Style Guide

<details>
  <summary>Table of Contents</summary>

-   [1. 배경](#s1)
-   [2. Python 언어 규칙](#s2)
    *   [2.1 Lint](#s2.1-lint)
    *   [2.2 Imports](#s2.2-imports)
    *   [2.3 Packages](#s2.3-packages)
    *   [2.4 예외](#s2.4-exceptions)
    *   [2.5 변경 가능한 전역 상태](#25-global-state)
    *   [2.6 중첩/지역/내부 클래스와 함수](#s2.6-nested)
    *   [2.7 Comprehensions & 제너레이터 표현식](#s2.7-list_comprehensions)
    *   [2.8 기본 반복자와 연산자](#s2.8-default-iterators-and-operators)
    *   [2.9 제너레이터](#s2.9-generators)
    *   [2.10 람다 함수](#s2.10-lambda-functions)
    *   [2.11 조건문 표현](#s2.11-conditional-expressions)
    *   [2.12 기본 인자 값](#s2.12-default-argument-values)
    *   [2.13 Properties](#s2.13-properties)
    *   [2.14 True/False 평가](#s2.14-truefalse-evaluations)
    *   [2.16 렉시컬 스코핑(Lexical Scoping)](#s2.16-lexical-scoping)
    *   [2.17 함수와 메서드 Decorators](#s2.17-function-and-method-decorators)
    *   [2.18 스레드](#s2.18-threading)
    *   [2.19 강한 기능](#s2.19-power-features)
    *   [2.20 Modern Python : from, \_\_future\_\_, imports](#s2.20-modern-python)
    *   [2.21 Type 주석](#s2.21-typed-code)
-   [3. Python 스타일 규칙](#s3)
    *   [3.1 Semicolons](#s3.1-semicolons)
    *   [3.2 Line length](#s3.2-line-length)
    *   [3.3 Parentheses](#s3.3-parentheses)
    *   [3.4 Indentation](#s3.4-indentation)
        +   [3.4.1 원소 나열 시 후행 쉼표](#s3.4.1-trailing-comma)
    *   [3.5 Blank Lines](#s3.5-blank-lines)
    *   [3.6 Whitespace](#s3.6-whitespace)
    *   [3.7 Shebang Line](#s3.7-shebang-line)
    *   [3.8 Comments and Docstrings](#s3.8-comments)
        +   [3.8.1 Docstrings](#s3.8.1-comments-in-doc-strings)
        +   [3.8.2 Modules](#s3.8.2-comments-in-modules)
        +   [3.8.3 Functions and Methods](#s3.8.3-functions-and-methods)
        +   [3.8.4 Classes](#s3.8.4-comments-in-classes)
        +   [3.8.5 Block and Inline Comments](#s3.8.5-comments-in-block-and-inline)
        +   [3.8.6 Punctuation, Spelling and Grammar](#s3.8.6-punctuation-spelling-and-grammar)
    *   [3.10 Strings](#s3.10-strings)
        +   [3.10.1 Logging](#s3.10.1-logging)
        +   [3.10.2 Error Messages](#s3.10.2-error-messages)
    *   [3.11 파일과 소켓 그리고 유사한 Stateful Resources](#s3.11-files-and-sockets)
    *   [3.12 TODO Comments](#s3.12-todo-comments)
    *   [3.13 import 형식](#s3.13-imports-formatting)
    *   [3.14 Statements](#s3.14-statements)
    *   [3.15 접근 제어](#getters-and-setters)
    *   [3.16 네이밍](#s3.16-naming)
        +   [3.16.1 피해야 할 이름](#s3.16.1-names-to-avoid)
        +   [3.16.2 Naming Conventions](#s3.16.2-naming-conventions)
        +   [3.16.3 파일 네이밍](#s3.16.3-file-naming)
        +   [3.16.4 Guido의 권고에 따른 가이드라인](#s3.16.4-guidelines-derived-from-guidos-recommendations)
        +   [3.16.5 수학 표기법](#math-notation)
    *   [3.17 Main](#s3.17-main)
    *   [3.18 함수 길이](#s3.18-function-length)
    *   [3.19 Type 주석 방법](#s3.19-type-annotations)
        +   [3.19.1 일반적인 규칙](#s3.19.1-general)
        +   [3.19.2 줄 바꿈](#s3.19.2-line-breaking)
        +   [3.19.3 전방선언](#s3.19.3-forward-declarations)
        +   [3.19.4 기본 값](#s3.19.4-default-values)
        +   [3.19.5 NoneType](#s3.19.5-none-type)
        +   [3.19.6 Type Aliases](#s3.19.6-aliases)
        +   [3.19.7 Ignoring Types](#s3.19.7-ignore)
        +   [3.19.8 내부 변수 작성](#s3.19.8-comments)
        +   [3.19.9 튜플 vs 리스트](#s3.19.9-tuples)
        +   [3.19.10 Type variables](#typevars)
        +   [3.19.11 문자열 Type](#typing-strings)
        +   [3.19.12 Typing 추가](#s3.19.12-imports)
        +   [3.19.13 조건 Imports](#s3.19.13-conditional-imports)
        +   [3.19.14 Circular 종속](#s3.19.14-circular-deps)
        +   [3.19.15 일반](#s3.19.15-generics)
-   [4. 맺음말](#s4)

</details>

<br>

<a id="s1"></a>

## 1. 배경

- Python은 구글에서 메인으로 사용하는 동적 언어입니다.
- 이 스타일 가이드는 Python 프로그램에서 _해야 할 것들과 하지 말아야 할 것_ 들을 적어놓았습니다.
- 코드 형식을 정확하게 하는 것들 돕기 위해, 우리는 [settings file for Vim](google_python_style.vim)을 만들었습니다.
- Emacs 편집기에서는 기본 설정값으로 사용하면 됩니다.
- 많은 팀에서 형식에 대한 논쟁을 피하기 위해 [Black](https://github.com/psf/black) 혹은 [Pyink](https://github.com/google/pyink) auto-formatter 을 사용합니다.

---

<br>

<a id="s2"></a>

## 2. Python 언어 규칙

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

<br>

<a id="s3"></a>

## 3. Python 스타일 규칙

<a id="s3.1-semicolons"></a>

### 3.1 Semicolons

- 세미콜론을 이용해서 문장을 끝내거나 한 줄에 2개의 구문을 작성하지 마세요.

---
<a id="s3.2-line-length"></a>

### 3.2 Line length

- 최대 줄 길이는 _80자_ 입니다.

  - 예외
    - 긴 import 구문
    - URLs, 경로이름, 또는 주석의 긴 플래그
    - 경로이름이나 URLs와 같은 공백을 포함하지 않는 긴 모듈수준 문자상수는 여러 줄에 나누어 기록하기 불편할 경우
    - Pylint 비활성화 주석문 (e.g.: `# pylint: disable=invalid-name`)

- [명시적인 줄 연속](https://docs.python.org/3/reference/lexical_analysis.html#explicit-line-joining)을 위해 백슬래시를 사용하지 마세요.
- 대신에 Python의 [소/중/대 괄호 내부의 묵시적 라인결합](http://docs.python.org/reference/lexical_analysis.html#implicit-line-joining)을 사용하세요.
- 필요하다면, 구문 양쪽에 추가로 괄호를 더할 수 있습니다.
- 이 규칙은 문자열 내에서 백슬래시로 이스케이프된 개행을 금지하지 않습니다(아래 [참조](#strings)).

  - 올바른 예

    ```python
    foo_bar(self, width, height, color='black', design=None, x='foo',
    emphasis=None, highlight=0)

    if (width == 0 and height == 0 and
         color == 'red' and emphasis == 'strong'):
     (bridge_questions.clarification_on
      .average_airspeed_of.unladen_swallow) = 'African or European?'
     with (
         very_long_first_expression_function() as spam,
         very_long_second_expression_function() as beans,
         third_thing() as eggs,
     ):
       place_order(eggs, beans, spam, beans)
    ```

  - 부적절한 예

    ```python
    if width == 0 and height == 0 and \
         color == 'red' and emphasis == 'strong':
     bridge_questions.clarification_on \
         .average_airspeed_of.unladen_swallow = 'African or European?'
     with very_long_first_expression_function() as spam, \
           very_long_second_expression_function() as beans, \
           third_thing() as eggs:
       place_order(eggs, beans, spam, beans)
    ```

- 만약 리터럴 문자열을 한 줄에 표현하기 어렵다면 아래와 같이 괄호를 이용하여 묵시적 라인결합을 사용하세요.

  ```python
  x = ('This will build a very long long '
      'long long long long long long string')
  ```

- 가능한 가장 높은 구문 수준에서 줄을 나누는 것을 선호하세요. 줄을 두 번 나눠야 하는 경우, 두 번 모두 동일한 구문 수준에서 나누세요.

  - 올바른 예

    ```python
    bridgekeeper.answer(
         name="Arthur", quest=questlib.find(owner="Arthur", perilous=True))
     answer = (a_long_line().of_chained_methods()
               .that_eventually_provides().an_answer())
     if (
         config is None
         or 'editor.language' not in config
         or config['editor.language'].use_spaces is False
     ):
       use_tabs()
    ```

  - 부적절한 예

    ```python
    bridgekeeper.answer(name="Arthur", quest=questlib.find(
        owner="Arthur", perilous=True))
    answer = a_long_line().of_chained_methods().that_eventually_provides(
        ).an_answer()
    if (config is None or 'editor.language' not in config or config[
        'editor.language'].use_spaces is False):
      use_tabs()
    ```

- 주석의 경우 긴 URLs 들은 한줄에 표현하세요.

  - 올바른 예

    ```python
    # See details at
    # http://www.example.com/us/developer/documentation/api/content/v2.0/csv_file_name_extension_full_specification.html
    ```

  - 부적절한 예

    ```python
    # See details at
    # http://www.example.com/us/developer/documentation/api/content/\
    # v2.0/csv_file_name_extension_full_specification.html
    ```

- 위의 예시에서 각 요소에 사용된 들여쓰기를 잘 기억하세요. 더 자세한 정보는 [들여쓰기](#s3.4-indentation) 챕터를 확인하세요.
- 위에서 언급되지 않은 상황에서 한 줄의 길이가 80자를 초과함에도 [Black](https://github.com/psf/black) 혹은 [Pyink](https://github.com/google/pyink) 오토포메터가 별다른 도움을 주지 못한다면 80자 이상 초과가 허용됩니다. 작성자는 상식적인 수준내에서 위 문서의 사항을 참고하여 줄을 분리하는것이 바람직합니다.

---
<a id="s3.3-parentheses"></a>

### 3.3 Parentheses

- 괄호를 적게 사용하세요.

- 필요하지는 않지만 튜플의 양쪽에 괄호를 사용하여도 무방합니다.
- 하지만 묵시적 문장연장이나 튜플을 나타내기 위한 상황을 제외하고 리턴문이나 조건문에는 사용하지 마세요.

- 올바른 예

  ```python
  if foo:
      bar()
  while x:
      x = bar()
  if x and y:
      bar()
  if not x:
      bar()
  # For a 1 item tuple the ()s are more visually obvious than the comma.
  onesie = (foo,)
  return foo
  return spam, beans
  return (spam, beans)
  for (x, y) in dict.items(): ...
  ```

- 부적절한 예

  ```python
  if (x):
      bar()
  if not(x):
      bar()
  return (foo)
  ```

---
<a id="s3.4-indentation"></a>

### 3.4 Indentation

- 코드를 작성할 때 _4 칸_ 들여쓰기를 하세요.

- 탭을 절대 사용하지 마세요. 암시된 줄 연속은 래핑된 요소를 수직으로 정렬해야 하며([줄 길이 예제](#s3.2-line-length) 참조), 또는 4개의 공백을 사용하여 행을 들여쓰기 하세요.
- 닫는 괄호(원, 대각선 또는 중괄호)는 표현식의 끝에 배치하거나 별도의 줄에 배치할 수 있지만, 이 경우 해당 여는 괄호와 같은 줄에 들여쓰기해야 합니다.

- 올바른 예

  ```python
  # 여는 구분 기호와 정렬됨
  foo = long_function_name(var_one, var_two,
                          var_three, var_four)
  meal = (spam,
          beans)

  # 딕셔너리의 여는 구분 기호와 정렬됨
  foo = {
      'long_dictionary_key': value1 +
                             value2,
      ...
  }

  # 4칸 공백의 걸쳐서 들여쓰기, 첫 번째 줄에는 아무것도 없음
  foo = long_function_name(
      var_one, var_two, var_three,
      var_four)
  meal = (
      spam,
      beans)

  # 4칸 공백의 걸쳐서 들여쓰기; 첫 번째 줄에는 아무것도 없음, 닫는 괄호는 새 줄에 배치
  foo = long_function_name(
      var_one, var_two, var_three,
      var_four
  )
  meal = (
      spam,
      beans,
  )
  # 딕셔너리에서 4칸 공백의 걸쳐서 들여쓰기
  foo = {
      'long_dictionary_key':
          long_dictionary_value,
      ...
  }
  ```

- 부적절한 예

  ```python
  # 첫 번째 줄에 내용이 있어서는 안 됩니다.
  foo = long_function_name(var_one, var_two,
      var_three, var_four)
  meal = (spam,
      beans)

  # 2칸 공백의 걸쳐서 들여쓰기는 금지됩니다.
  foo = long_function_name(
      var_one, var_two, var_three,
      var_four)

  # 딕셔너리에서는 걸쳐서 들여쓰기를 사용하지 않습니다.
  foo = {
      'long_dictionary_key':
      long_dictionary_value,
      ...
  }
  ```

<a id="s3.4.1-trailing-comma"></a>

#### 3.4.1 원소 나열 시 후행 쉼표

- 후행 쉼표는 시퀀스의 요소에서 닫는 구문 기호 `]`, `)`, 또는 `}`가 마지막 요소와 같은 줄에 나타나지 않는 경우와 단일 요소를 가진 튜플에 대해서만 권장됩니다.
- 후행 쉼표의 존재는 Python 코드 자동 포맷터인 [Black](https://github.com/psf/black)이나 [Pyink](https://github.com/google/pyink)에게 마지막 요소 뒤에 `,`가 있을 때 항목의 컨테이너를 한 줄에 하나의 항목씩 자동으로 포맷하도록 지시하는 힌트로도 사용됩니다.

- 올바른 예

  ```python
  golomb3 = [0, 1, 3]
  golomb4 = [
          0,
          1,
          4,
          6,
      ]
  ```

- 부적절한 예

  ```python
  golomb4 = [
          0,
          1,
          4,
          6,]
  ```

---
<a id="s3.5-blank-lines"></a>

### 3.5 Blank Lines

- 함수 선언이든 객체 선언이든 최상위 선언문과는 2개의 빈 줄을 사이에 두어야 합니다.
- 각 메소드 선언 또는 `class`의 docstring 줄과 젓 번째 메소드 선언 시 그 사이에는 한 개의 빈 줄이 있어야 합니다.
- `def` 줄 이후에는 빈 줄이 없어야 합니다.
- 함수와 메소드 사이에 개발자의 판단하에 적절하게 한 개의 빈 줄을 사용하세요.

- 빈 줄을 정의에 고정할 필요는 없습니다.
- 예를 들어, 함수와 클래스 및 메서드 정의 바로 앞에 있는 관련 주석이 의미가 있을 수 있습니다.
- comment가 Docstring의 일부로 더 유용할 수 있는 지 고려해야합니다.

---
<a id="s3.6-whitespace"></a>

### 3.6 Whitespace

- 표준 조판 규칙을 따라 구두점 주변에 스페이스를 사용하세요.

- 괄호, 중괄호, 대괄호 내부에는 화이트스페이스 없어야 합니다.

  - 올바른 예

    ```python
    spam(ham[1], {'eggs']: 2}, [])
    ```

  - 부적절한 예

    ```python
    spam( ham[ 1 ], { 'eggs': 2 }, [ ] )
    ```

- 컴마, 세미콜론, 콜론 앞에는 화이트스페이스가 없어야 합니다.
- 문장 끝을 제외하고 컴마, 세미콜론, 콜론 뒤에 화이트스페이스를 사용하지 마세요.

  - 올바른 예

    ```python
    if x == 4:
        print(x, y)
    x, y = y, x
    ```

  - 부적절한 예

    ```python
    if x == 4 :
        print(x , y)
    x , y = y , x
    ```

- 매개변수 목록, 인덱싱, 슬라이싱의 시작에 사용된 열린 소/중괄호 앞에는 화이트스페이스를 사용하지 마세요.

  - 올바른 예

    ```python
    spam(1)
    ```

  - 부적절한 예

    ```python
    spam (1)
    ```

  - 올바른 예

    ```python
    dict['key'] = list[index]
    ```

  - 부적절한 예

    ```python
    dict ['key'] = list [index]
    ```

- 대입(`=`), 비교(`==, <, >, !=, <>, <=, >=, in, not in, is, is not`), 불린(`and, or, not`) 과 같은 바이너리 연산자는 앞, 뒤로 한 칸 띄우세요.
- 수리 연산자 앞, 뒤의 공백은 개발자의 판단에 따라 사용하세요.

  - 올바른 예

    ```python
    x == 1
    ```

  - 부적절한 예

    ```python
    x<1
    ```

- 한가지 예외사항인 [Type 지정이 존재할 떄](#s3.19.4-default-values)를 제외하고 키워드 매개변수나 매개변수의 기본값을 지정하는 경우 `=` 기호 앞뒤에는 공백을 사용하지 마세요.
- 형 지정이 존재한다면 매개변수의 기본값을 지정할 때 `=` 앞뒤에 공백을 _사용_ 하세요.

  - 올바른 예

    ```python
    def complex(real, imag=0.0): return Magic(r=real, i=imag)
    def complex(real, imag: float = 0.0): return Magic(r=real, i=imag)
    ```

  - 부적절한 예

    ```python
    def complex(real, imag = 0.0): return Magic(r = real, i = imag)
    def complex(real, imag: float=0.0): return Magic(r = real, i = imag)
    ```

- 유지보수에 짐이 되기 때문에 공백을 이용하여 연속된 여러 줄을 수직정렬하지 마세요 (`:`, `#`, `=` 등에 적용됩니다.).

  - 올바른 예

    ```python
    foo = 1000  # comment
    long_name = 2  # comment that should not be aligned

    dictionary = {
        'foo': 1,
        'long_name': 2,
    }
    ```

  - 부적절한 예

    ```python
    foo       = 1000  # comment
    long_name = 2     # comment that should not be aligned

    dictionary = {
        'foo'      : 1,
        'long_name': 2,
    }
    ```

---
<a id="s3.7-shebang-line"></a>

### 3.7 Shebang Line

- 대부분의 `.py` 파일은 `#!` 로 시작하지 않아도 됩니다.
- [PEP-394](https://peps.python.org/pep-0394/)에 따라 프로그램의 메인 파일 첫 줄에 `#!/usr/bin/env python3` (virtualenvs 지원) 또는 `#!/usr/bin/python3`사용하면 됩니다.

- 이 줄은 파이썬 파일을 import 할때는 무시되지만 실행 될때는 커널이 어떤 파이썬 인터프리터를 사용해야 하는지 알려줍니다.
- 따라서 직접 실행될 파일에 기록하는것이 적합합니다.

---
<a id="s3.8-comments"></a>

### 3.8 Comments and Docstrings

- 모듈, 함수, 메소드에 올바른 형식의 docstring과 인라인 주석을 사용하세요.

<a id="s3.8.1-comments-in-doc-strings"></a>

#### 3.8.1 Docstrings

- 파이썬은 코드를 문서화 할 때 _docstring_ 을 사용합니다.
- docstring 은 패키지, 모듈, 클래스나 함수의 첫번째 선언되는 문자열입니다.
- 이 문자열은 `pydoc` 이 사용하는 `__doc__` 멤버 오브젝트에서 자동으로 추출될 수 있습니다. (여러분의 모듈에서 `pydoc` 를 실행 후 결과를 확인해보세요)
- [PEP257](https://peps.python.org/pep-0257/) 에 따라 docstring 을 시작하거나 끝낼 때는 `"""` 를 사용하세요.
- docstring은 마침표, 물음표, 느낌표로 끝나는 요약줄(한 줄)로 시작하여야 하며 한 줄의 공백을 두고 내용을 담고있는 나머지 docstring 이 이어져야 합니다.
- 또한 내용을 담고있는 docstring 은 `"""` 와 같은 커서위치에서 시작하여야 합니다.

<a id="s3.8.2-comments-in-modules"></a>

#### 3.8.2 Modules

- 프로젝트에 알맞는 라이센스 보일러 플레이트를 선택하세요. (예를 들면, Apache 2.0, BSD, LGPL, GPL)
- 모든 파일은 라이센스 보일러 플레이트를 가지고 있어야 합니다.

  ```python
  """모듈이나 프로그램에 대한 한 줄 요약으로, 마침표로 끝나야 합니다.

  한 줄을 비워두세요. 이 docstring의 나머지 부분에는 모듈이나 프로그램에
  대한 전반적인 설명이 포함되어야 합니다. 선택적으로, 내보낸 클래스와
  함수에 대한 간단한 설명 및/또는 사용 예시도 포함될 수 있습니다.

  전형적인 사용 예시:

    foo = ClassFoo()
    bar = foo.FunctionBar()
  """
  ```

<a id="s3.8.2.1-test-modules"></a>
<a id="test-docs"></a>

##### 3.8.2.1 Test modules

- 테스트 파일의 모듈 수준 docstring은 필수는 아닙니다.
- 추가적인 정보를 제공할 필요가 있는 경우에만 포함해야 합니다.
- 예를 들면, 테스트를 실행하는 방법에 대한 구체적인 내용, 특이한 설정 패턴에 대한 설명, 외부 환경에 대한 의존성 등이 포함될 수 있습니다.

```python
"""이 Blaze 테스트는 golden 파일을 사용합니다.
`google3` 디렉토리에서
`blaze run //foo/bar:foo_test -- --update_golden_files` 명령어를 실행하여
이러한 파일을 업데이트할 수 있습니다.
"""
```

- 새로운 정보를 제공하지 않는 docstring은 사용하지 말아야 합니다.

```python
"""Tests for foo.bar."""
```

<a id="s3.8.3-functions-and-methods"></a>

#### 3.8.3 Functions and Methods

- 이 섹션에서 ‘function’은 메소드, 함수, 제너레이터 또는 속성을 의미합니다.

- 다음 중 하나 이상의 속성을 가진 모든 함수에는 docstring이 필수입니다.

  - 공개 API의 일부인 경우
  - 비교적 큰 경우
  - 직관적이지 않은 로직을 가진 경우

- docstring은 함수의 코드를 읽지 않고도 함수 호출을 작성할 수 있을 만큼 충분한 정보를 제공해야 합니다.
- docstring은 함수의 호출 구문과 의미를 설명해야 하며, 일반적으로 구현 세부 사항은 포함하지 않아야 하지만, 이러한 세부 사항이 함수 사용 방법에 중요하다면 예외입니다.
- 예를 들어, 인자를 사이드 임펙트로 변경하는 함수는 그 점을 docstring에 명시해야 합니다.

- 그렇지 않으면, 호출자에게 중요하지 않은 함수 구현의 미묘하지만 중요한 세부 사항은 함수의 docstring보다는 코드 옆에 주석으로 표현하는 것이 좋습니다.
- docstring은 서술형(`"""Fetches rows from a Bigtable."""`) 또는 명령형(`"""Fetch rows from a Bigtable."""`) 스타일일 수 있지만, 파일 내에서 스타일은 일관되게 유지해야 합니다.
- `@property` 속성의 docstring은 속성이나 [함수 인자](#doc-function-args)의 docstring과 같은 스타일을 사용해야 합니다 (`"""The Bigtable path."""` 대신에 `"""Returns the Bigtable path."""`).

- 함수의 특정 측면은 아래에 나열된 특별한 섹션에서 문서화해야 합니다.
- 각 섹션은 콜론으로 끝나는 제목 행으로 시작합니다.
- 제목을 제외한 모든 섹션은 2칸 또는 4칸 공백의 걸쳐서 들여쓰기를 유지해야 합니다 (파일 내에서 일관되게 유지).
- 함수의 이름과 시그니처가 충분히 정보를 제공하여 한 줄의 docstring으로 적절히 설명할 수 있는 경우, 이러한 섹션은 생략할 수 있습니다.

<a id="doc-function-args"></a>

##### [_Args:_](#doc-function-args)

- 매개변수를 각각 이름으로 나열합니다. 각 이름에는 설명문이 따르며 콜론 뒤에 공백이나 새로운 라인으로 분리되어야 합니다.
- 만약 설명문이 너무 길어 한 줄인 80자를 초과할 경우 매개변수 이름보다 2칸 또는 4칸의 들여쓰기를 사용합니다.(파일의 나머지 문서(docstring)와 일치합니다.)
- 만약 코드가 자료형에 대한 주석을 담고 있지 않다면 설명문은 요구되는 자료형을 포함해서 기록해야 합니다.
- 함수가 `*foo`(가변길이의 매개변수 리스트) 또는 `**bar`(임의의 키워드 매개변수)를 받는다면 `*foo` 와 `**bar`로 기록되어야 합니다.

<a id="doc-function-returns"></a>

##### [_Returns:_ (제너레이터에는 _Yields:_)](#doc-function-returns)

- 반환 값의 의미를 설명하고, 타입 어노테이션에서 제공하지 않는 타입 정보도 포함해야 합니다.
- 함수가 None만 반환하는 경우, 이 섹션은 필요하지 않습니다.
- docstring이 "Return", "Returns", "Yield", "Yields"로 시작하고(e.g. `"""Returns row from Bigtable as a tuple of strings."""`), 첫 번째 문장이 반환 값을 설명하기에 충분할 경우, 이 섹션은 생략될 수 있습니다.
- 이전의 'NumPy 스타일'을 모방하지 마세요. ([example](https://numpy.org/doc/1.24/reference/generated/numpy.linalg.qr.html)) 이 스타일은 종종 튜플 반환 값을 여러 개의 개별 반환 값처럼 각각의 이름으로 문서화했습니다. (튜플이라는 점을 언급하지 않고)
- 대신, 반환 값을 다음과 같이 설명하세요: "Returns: A tuple (mat_a, mat_b), where mat_a is ..., and ...".
- docstring에서 사용되는 설명용 이름은 함수 본문에서 사용되는 내부 이름과 반드시 일치할 필요는 없습니다 (내부 이름은 API의 일부가 아니기 때문입니다)
- 함수가 `yield`를 사용하는 경우(즉, 제너레이터인 경우), `Yields:` 섹션에서는 호출 결과로 반환되는 제너레이터 객체가 아니라, `next()`에 의해 반환되는 객체를 문서화해야 합니다.

<a id="doc-function-raises"></a>

##### [_Raises:_](#doc-function-raises)

- interface와 관련된 모든 예외를 설명 뒤에 나열합니다.
- `Args:`에 설명된 것과 유사한 예외 이름 + 콜론 + 공백 또는 줄 바꿈과 hanging indent 스타일을 사용하세요.
- 명시된 API가 docstring을 위반했을 될 경우, 예외를 문서화하지 않습니다. (왜냐하면 이것은 역설적으로 API의 API를 위반하는 행동을 만들 수 있기 때문이다.)

  ```python
  def fetch_smalltable_rows(
      table_handle: smalltable.Table,
      keys: Sequence[bytes | str],
      require_all_keys: bool = False,
  ) -> Mapping[bytes, tuple[str, ...]]:
    """Fetches rows from a Smalltable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by table_handle.  String keys will be UTF-8 encoded.

    Args:
        table_handle: An open smalltable.Table instance.
        keys: A sequence of strings representing the key of each table
          row to fetch.  String keys will be UTF-8 encoded.
        require_all_keys: If True only rows with values set for all keys will be
          returned.

    Returns:
        A dict mapping keys to the corresponding table row data
        fetched. Each row is represented as a tuple of strings. For
        example:

        {b'Serak': ('Rigel VII', 'Preparer'),
        b'Zim': ('Irk', 'Invader'),
        b'Lrrr': ('Omicron Persei 8', 'Emperor')}

        Returned keys are always bytes.  If a key from the keys argument is
        missing from the dictionary, then that row was not found in the
        table (and require_all_keys must have been False).

    Raises:
        IOError: An error occurred accessing the smalltable.
    """
  ```

- 마찬가지로, 줄 바꿈이 있는 `Args:`도 허용합니다.

  ```python
  def fetch_smalltable_rows(
      table_handle: smalltable.Table,
      keys: Sequence[bytes | str],
      require_all_keys: bool = False,
  ) -> Mapping[bytes, tuple[str, ...]]:
      """Fetches rows from a Smalltable.

      Retrieves rows pertaining to the given keys from the Table instance
      represented by table_handle.  String keys will be UTF-8 encoded.

      Args:
        table_handle:
          An open smalltable.Table instance.
        keys:
          A sequence of strings representing the key of each table row to
          fetch.  String keys will be UTF-8 encoded.
        require_all_keys:
          If True only rows with values set for all keys will be returned.

      Returns:
        A dict mapping keys to the corresponding table row data
        fetched. Each row is represented as a tuple of strings. For
        example:

        {b'Serak': ('Rigel VII', 'Preparer'),
        b'Zim': ('Irk', 'Invader'),
        b'Lrrr': ('Omicron Persei 8', 'Emperor')}

        Returned keys are always bytes.  If a key from the keys argument is
        missing from the dictionary, then that row was not found in the
        table (and require_all_keys must have been False).

      Raises:
        IOError: An error occurred accessing the smalltable.
      """
  ```

<a id="s3.8.3.1-overridden-methods"></a>
<a id="overridden-method-docs"></a>

##### 3.8.3.1 Overridden Methods

- 기본 클래스의 메서드를 오버라이드하는 메서드는 [`@override`](https://typing-extensions.readthedocs.io/en/latest/#override) 데코레이터(`typing_extensions` 또는 `typing` 모듈에서 제공)를 명시적으로 사용하는 경우 docstring이 필요하지 않습니다.
- 단, 오버라이딩된 메서드의 동작이 기본 메서드의 계약을 실질적으로 개선하거나, 추가적인 사이드 임펙트 등을 문서화해야 하는 경우에는, 그러한 차이점이 최소한 포함된 docstring이 오버라이딩 메서드에 필요합니다.

  ```python
  from typing_extensions import override
  class Parent:
    def do_something(self):
      """Parent method, includes docstring."""
  # 자식 클래스, 오버라이드로 주석이 달린 메서드.
  class Child(Parent):
    @override
    def do_something(self):
      pass
  ```

  ```python
  # 자식 클래스에서 @override 데코레이터가 없는 경우, docstring이 필요합니다.
  class Child(Parent):
    def do_something(self):
      pass
  # docstring이 단순한 경우, @override만으로도 문서가 기본 클래스에 있음을 표시할 수 있습니다.
  class Child(Parent):
    @override
    def do_something(self):
      """See base class."""
  ```

<a id="s3.8.4-comments-in-classes"></a>

#### 3.8.4 Classes

- 클래스는 선언 바로 아래에 해당 클래스를 설명하는 docstring 를 가지고 있어야 합니다.
- [properties](#properties)을 제외한 공개 속성은 `Attributes` 섹션에서 문서화해야 하며, [함수의 `Args`](#doc-function-args) 섹션과 동일한 형식을 따라야 합니다.

```python
class SampleClass:
    """Summary of class here.

    Longer class information...
    Longer class information...

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam: bool = False):
        """Initializes the instance based on spam preference.
        Args:
          likes_spam: Defines if instance exhibits this preference.
        """
        self.likes_spam = likes_spam
        self.eggs = 0

    @property
    def butter_sticks(self) -> int:
        """The number of butter sticks we have."""
```

- 모든 클래스의 docstring은 클래스 인스턴스가 무엇을 나타내는지를 설명하는 한 줄 요약으로 시작해야 합니다. 이는 `Exception`의 서브클래스도 예외가 무엇을 나타내는지를 설명해야 하며, 발생할 수 있는 컨텍스트에 대해서는 설명하지 않아야 함을 의미합니다. 클래스의 docstring은 클래스가 클래스라는 등의 불필요한 정보를 반복해서는 안 됩니다.

- 올바른 예

  ```python
  class CheeseShopAddress:
    """The address of a cheese shop.
    ...
    """
  class OutOfCheeseError(Exception):
    """No more cheese is available."""
  ```

- 부적절한 예

  ```python
  class CheeseShopAddress:
    """Class that describes the address of a cheese shop.
    ...
    """
  class OutOfCheeseError(Exception):
    """Raised when no more cheese is available."""
  ```

<a id="s3.8.5-block-and-inline-comments"></a>
<a id="s3.8.5-comments-in-block-and-inline"></a>

#### 3.8.5 Block and Inline Comments

- 마지막으로 주석을 달아야 하는 곳은 코드의 복잡한 부분입니다.
- 만약 추후 [code review](http://en.wikipedia.org/wiki/Code_review)에서 코드를 설명하려고 한다면 지금 주석을 달아두어야 합니다.
- 복잡한 동작은 시작하기 전에 몇 줄의 주석을 달아야 합니다.
- 잘 알려져 있지 않는 부분은 끝에 주석을 달아야 합니다.

```python
# We use a weighted dictionary search to find out where i is in
# the array.  We extrapolate position based on the largest num
# in the array and the array size and then do binary search to
# get the exact number.

if i & (i-1) == 0:  # True if i is 0 or a power of 2.
```

- 가독성 향상을 위해 이러한 주석들은 코드에서 최소 2줄 떨어져 있어야 합니다.

- 하지만 코드 자체를 설명하지는 마세요.
- 코드를 읽고 있는 사람이 여러분보다 파이썬을 더 잘 알고 있다고 가정하세요. (물론 그게 중요한 것은 아닙니다.)

- 부적절한 예(주석)

  ```python
  # Now go through the b array and make sure whenever i occurs
  # the next element is i+1
  ```

<a id="s3.8.6-punctuation-spelling-and-grammar"></a>

#### 3.8.6 Punctuation, Spelling and Grammar

- 스펠링과 문법 그리고 구두점에 주의를 기울이세요. 잘 써진 주석이 읽기도 편합니다.

- 주석은 마치 말하는 것처럼 자연스럽게 읽을 수 있어야 하며 영문 주석의 경우 올바른 대문자와 구두점이 필요합니다.
- 대부분의 경우 조각난 문장보다 온전한 문장이 높은 가독성을 가집니다.
- 코드 끝에 붙는 짧은 주석 등의 경우 다소 형식적이지 않아도 되지만, 전체적인 일관성을 맞추어야 합니다.

- 코드 리뷰어가 세미콜론이 사용되어야 하는데 컴마를 사용했다고 지적하는 것은 불만스러울 수 있지만 소스코드가 높은 수준의 명료성과 가독성을 가지는것은 매우 중요합니다.
- 올바른 구두점, 스펠링 그리고 문법은 이를 얻을 수 있도록 도와줍니다.

---
<a id="s3.10-strings"></a>

### 3.10 Strings

- 매개변수가 모두 문자열인 경우에도 [f-string](https://docs.python.org/3/reference/lexical_analysis.html#f-strings), `format` 메소드나 `%` 연산자를 사용하여 포메팅하세요.
- 문자열 포맷팅 옵션 사이에서 최상의 판단을 사용하세요.
- `+`를 사용한 단일 join은 괜찮지만, `+`를 사용한 포맷팅은 피하세요.

  - 올바른 예

    ```python
    x = f'name: {name}; score: {n}'
    x = '%s, %s!' % (imperative, expletive)
    x = '{}, {}'.format(first, second)
    x = 'name: %s; score: %d' % (name, n)
    x = 'name: %(name)s; score: %(score)d' % {'name':name, 'score':n}
    x = 'name: {}; score: {}'.format(name, n)
    x = a + b
    ```

  - 부적절한 예

    ```python
    x = first + ', ' + second
    x = 'name: ' + name + '; score: ' + str(n)
    ```

- 반목문에서 `+` 나 `+=` 연산자를 사용하여 문자열을 누적하는 행위는 삼가세요.
- 몇몇 상황에서 위 연산자를 이용하여 문자열을 누적하는 경우 리니어한 실행시간이 아닌 제곱형태의 실행시간이 소요될 수 있습니다.
- 물론 이러한 문자열 누적은 CPython의 수정을 통하여 최적화 될 수도 있지만 최적화 여부는 매번 변경될 수도 있으며 이를 예측하는 것 또한 어렵습니다.
- 위의 연산자 대신 리스트에 문자열을 넣고 반복문이 종료되면 `''.join` 를 사용하는것이 더 바람직합니다. (또는 각각의 문자열을 `io.BytesIO` 버퍼에 기록하는 것도 방법입니다.)

  - 올바른 예

    ```python
    items = ['<table>']
    for last_name, first_name in employee_list:
        items.append('<tr><td>%s, %s</td></tr>' % (last_name, first_name))
    items.append('</table>')
    employee_table = ''.join(items)
    ```

  - 부적절한 예

    ```python
    employee_table = '<table>'
    for last_name, first_name in employee_list:
        employee_table += '<tr><td>%s, %s</td></tr>' % (last_name, first_name)
    employee_table += '</table>'
    ```

- 하나의 파일에는 따옴표를 일관되게 사용하세요. `'` 또는 `"` 중 하나를 선택하고 그것만 사용하세요.
- 다만 backslash-escape 따음표 문자 사용을 피하기 위해 같은 파일이더라도 다른 따옴표를 사용하는 것은 괜찮습니다.

  - 올바른 예

    ```python
    Python('Why are you hiding your eyes?')
    Gollum("I'm scared of lint errors.")
    Narrator('"Good!" thought a happy Python reviewer.')
    ```

  - 부적절한 예

    ```python
    Python("Why are you hiding your eyes?")
    Gollum('The lint. It burns. It burns us.')
    Gollum("Always the great lint. Watching. Watching.")
    ```

- 다수의 문장을 이용할 때는 `'''` 보단 `"""` 를 이용하세요.
- 프로젝트에 따라 docstring이 아닌 다른 여러줄의 문자열을 `'''` 를 이용하여 작성할 수 있습니다.
- docstring은 상황과 무관하게 `"""` 를 사용합니다.

- 다중 라인 문자열은 다른 코드의 들여쓰기를 따르지 않습니다.
- 만약에 문자열에 추가 공간을 포함하는 것을 피하려면 단일 행 문자열을 연결하거나 [`textwrap.dedent()`](https://docs.python.org/3/library/textwrap.html#textwrap.dedent)와 함께 다중 라인 문자열을 사용하여 각 줄의 초기 공백을 제거합니다.

  - 부적절한 예

    ```python
    long_string = """This is pretty ugly.
    Don't do this.
    """
    ```

  - 올바른 예

    ```python
    long_string = """This is fine if your use case can accept
        extraneous leading spaces."""
    ```

    ```python
    long_string = ("And this is fine if you cannot accept\n" +
                    "extraneous leading spaces.")
    ```

    ```python
    long_string = ("And this too is fine if you cannot accept\n"
                    "extraneous leading spaces.")
    ```

    ```python
    import textwrap

    long_string = textwrap.dedent("""\
        This is also fine, because textwrap.dedent()
        will collapse common leading spaces in each line.""")
    ```

- 여기서 백슬래시를 사용하는 것은 [명시적인 줄 이어쓰기](#line-length)에 대한 금지를 위반하지 않습니다.
- 이 경우, 백슬래시는 문자열 리터럴에서 [줄바꿈을 이스케이프](https://docs.python.org/3/reference/lexical_analysis.html#string-and-bytes-literals)하는 것입니다.

<a id="s3.10.1-logging"></a>

#### 3.10.1 Logging

- 첫번째 인자로 패턴문자열(% placeholder)이 요구되는 함수의 경우 아래 내용을 확인하세요.
  - 반드시 스트링 리터럴(f 스트링 아님)을 첫번째 인자, 패턴인자를 이후에 사용하여 호출하세요.
  - 일부 로깅방식의 경우 예상되지 않은 패턴문자열을 쿼리항목으로 이용합니다.
  - 또 로거가 필요없는 문자를 출력하는데에 시간을 낭비하지 않도록 방지합니다.

```python
  올바른 예:
  import tensorflow as tf
  logger = tf.get_logger()
  logger.info('TensorFlow Version is: %s', tf.__version__)
```

```python
  올바른 예:
  import os
  from absl import logging
  logging.info('Current $PAGER is: %s', os.getenv('PAGER', default=''))
  homedir = os.getenv('HOME')
  if homedir is None or not os.access(homedir, os.W_OK):
    logging.error('Cannot write to home directory, $HOME=%r', homedir)
```

```python
  잘못된 예:
  import os
  from absl import logging
  logging.info('Current $PAGER is:')
  logging.info(os.getenv('PAGER', default=''))
  homedir = os.getenv('HOME')
  if homedir is None or not os.access(homedir, os.W_OK):
    logging.error(f'Cannot write to home directory, $HOME={homedir!r}')
```

<a id="s3.10.2-error-messages"></a>

#### 3.10.2 Error Messages

- 에러 메시지(`ValueError`와 같은 에외메시지, 유저에게 보여지는 메시지 등)는 아래의 가이드라인을 따라야합니다.

1. 에러메시지는 반드시 에러 조건과 정확하게 일치하여야 합니다.
2. 메시지 발생위치는 아래 예시와 같이 명확하게 알아볼 수 있어야합니다.
3. 에러메시지는 간단한 자동화 처리를 허용해야 합니다. (예: grepping)

```python
  올바른 예:
  if not 0 <= p <= 1:
    raise ValueError(f'Not a probability: {p=}')
  try:
    os.rmdir(workdir)
  except OSError as error:
    logging.warning('Could not remove directory (reason: %r): %r',
                    error, workdir)
```

```python
  잘못된 예:
  if p < 0 or p > 1:  # PROBLEM: also false for float('nan')!
    raise ValueError(f'Not a probability: {p=}')
  try:
    os.rmdir(workdir)
  except OSError:
    # 문제: 에러메시지가 사실이 아닐 수 있는 내용을 포함하고 있습니다:
    # 삭제작업이 실패했을 수도 있기에 이를 디버깅할 누군가가 오해할 수 있습니다
    logging.warning('Directory already was deleted: %s', workdir)
  try:
    os.rmdir(workdir)
  except OSError:
    # 문제: 메시지가 불필요하게 grep 하기 어려우며
    # `workdir`의 값에 따라 사용자가 혼란스러울 수도 있습니다
    # 누군가가 아래와 같은 workdir을 사용하는 경우를 생각해보세요
    # workdir = 'deleted'.:
    # 경고는 아래와 같이 표시될 것입니다.
    # "The deleted directory could not be deleted."
    logging.warning('The %s directory could not be deleted.', workdir)
```

---
<a id="s3.11-files-and-sockets"></a>

### 3.11 파일과 소켓 그리고 유사한 Stateful Resources

- 파일과 소켓의 사용이 끝나면 명시적으로 연결을 종료해주세요.
- 이 규칙은 당연히 데이터베이스 연결과 같이 내부적으로 소켓을 사용하는 종료가 필요한 자원에도 적용됩니다.
- 몇가지 예시를 들어보자면 아래의 경우가 있습니다

  - [mmap](https://docs.python.org/3/library/mmap.html)
  - [h5py File objects](https://docs.h5py.org/en/stable/high/file.html)
  - [matplotlib.pyplot figure windows](https://matplotlib.org/2.1.0/api/_as_gen/matplotlib.pyplot.close.html)

- 파일이나 소켓과 같은 stateful 한 객체를 불필요하게 열어둔체로 남겨놓는것은 아래와 같은 단점들이 있습니다:

  - 파일 디스크립터와 같은 제한된 시스템 자원을 소모합니다.
    - 이러한 객체들을 많이 이용하는 코드라면 사용 후 시스템에 곧바로 반납하지 않는 행위는 자원의 고갈로 이어질 수 있습니다.
  - 파일을 열어둔 채로 방치하는 것은 파일의 이동, 제거 또는 마운트 해제가 불가능 할 수 있습니다.
  - 공유되는 파일이나 소켓의 경우 이용 종료 후에 다른 프로그램에 의해 의도치 않게 읽어지거나 쓰여질 수 있습니다.
    - 만약 정말 객체가 닫혀있다면 read/write를 시도할 때 exception을 일으켜 문제를 빠르게 알 수 있습니다.

- 더욱이, 파일이나 소켓(비슷하게 동작하는 다른 자원 포함)은 객체가 소멸될 때 자동으로 닫혀지는 것은 맞으나 객체의 생명주기를 파일의 상태에 구속하는 것은 나쁜 습관입니다:

  - 런타임이 언제 `__del__` 메소드를 호출하는지 보장 할 수 없습니다.
    - 지연된 Garbage Collection 과 같이 파이썬의 종류에 따라 다른 방식의 메모리 관리 기법을 사용하기에 객체의 생명주기가 임의로 늘어나거나 영원히 죽지 않을 수도 있습니다.
  - globals 또는 예외추적 과 같이 의도치 않은 파일의 참조는 본래 생명주기보다 더 오랫동안 유지시킬 수 있습니다.

- 수십 년 동안 여러 언어로 [finalizers](https://en.wikipedia.org/wiki/Finalizer)에 의한 자동 정리를 수행하는 것은 주목할 만한 사이드 임팩트를 거듭해서 재발견되었고 중대한 문제로 이어지고 있습니다. ( [Java에 대한 이 기사 참조](https://wiki.sei.cmu.edu/confluence/display/java/MET12-J.+Do+not+use+finalizers) )

- 가장 선호되는 파일(비슷하게 동작하는 다른 자원 포함)관리 방식은 [`with` 구문](http://docs.python.org/reference/compound_stmts.html#the-with-statement) 입니다

  ```python
  with open("hello.txt") as hello_file:
      for line in hello_file:
          print(line)
  ```

- `with` 구문을 지원하지 않는 file-like 객체는 `contextlib.closing()`을 사용하세요.

  ```python
  import contextlib

  with contextlib.closing(urllib.urlopen("http://www.python.org/")) as front_page:
      for line in front_page:
          print(line)
  ```

드물게 컨텍스트 기반 자원관리가 불가피한 경우 코드의 설명을 통해 어떻게 해당 자원의 생명주기가 관리되고 있는지 반드시 기술하여야 합니다

---
<a id="s3.12-todo-comments"></a>

### 3.12 TODO Comments

- 임시적, 잠시 사용하려는 코드 또는 좋기는 하지만 완벽하지 않은 코드의 경우 `TODO` 주석을 사용하세요.

- `TODO` 주석은 모두 대문자로 된 `TODO`로 시작하고, 다음에 콜론을 붙이며, 맥락이 포함된 리소스에 대한 링크(이상적으로는 버그 참조)를 포함해야 합니다.
- 버그 참조가 선호됩니다. 왜냐하면 버그는 추적되며 후속 댓글이 달리기 때문입니다.
- 이 문맥 다음에 하이픈 `-`으로 시작하는 설명 문자열을 추가하세요..
- 목적은 일관된 `TODO` 형식을 유지하여, 더 많은 세부 정보를 찾기 위해 검색할 수 있도록 하는 것입니다.

  ```python
  # TODO: crbug.com/192795 - Investigate cpufreq optimizations.
  ```

- 이전 스타일로, 예전에는 권장되었지만 새로운 코드에서는 사용이 권장되지 않습니다.

  ```python
  # TODO(crbug.com/192795): Investigate cpufreq optimizations.
  # TODO(yourusername): Use a "\*" here for concatenation operator.
  ```

- 문맥으로 개인이나 팀을 참조하는 TODO를 추가하는 것을 피하세요.

  ```python
  # TODO: @yourusername - File an issue and use a '*' for repetition.
  ```

- `TODO`가 "미래의 어느 시점에 무엇을 해야 한다"는 형식이라면, 미래의 코드 유지 관리자가 이해할 수 있도록 매우 구체적인 날짜("2009년 11월까지")나 사건("모든 클라이언트가 XML 요청을 해결 할수 있을때 이 코드 삭제")을 포함해야 합니다.
- 이슈는 이를 추적하는 데 이상적입니다.

---
<a id="s3.13-imports-formatting"></a>

### 3.13 import 형식

- imports는 개별적인 라인에 두어야 합니다; [`typing` 그리고 `collections.abc` imports에 대한 예외가 있습니다.](#s3.19.12-imports).

  - 올바른 예

    ```python
    import os
    import sys
    from typing import Any, NewType
    ```

  - 부적절한 예

    ```python
    import os, sys
    ```

- import는 모듈의 주석 과 docstring 바로 다음, 모듈 전역 및 상수 바로 앞 파일의 맨 위에 배치됩니다.
- import는 가장 일반적인 것 부터 최소한의 일반적인 것들까지 묶여야 합니다.

1. Python의 **future** import 문

   ```python
   from __future__ import annotations
   ```

   자세한 내용은 [위](#from-future-imports)를 참조하세요.

2. 파이썬의 표준 라이브러리

   - import 예시는 다음과 같습니다.

   ```python
   import sys
   ```

3. [third-party](https://pypi.org/)

   - 모듈이나 패키지의 import 예시는 다음과 같습니다.

   ```python
   import tensorflow as tf
   ```

4. Code repository

   - 서브 패키지의 import 예시는 다음과 같습니다.

   ```python
   from otherproject.ai import mind
   ```

5. 동일한 top 레벨에 속하는 어플리케이션의 특정을 import하는 것은 **더 이상 사용되지 않습니다**

   - 서브 패키지의 파일 import 예시는 다음과 같습니다.

   ```python
   from myproject.backend.hgwells import time_machine
   ```

   - 오래된 Google Python Style code에서 이걸 발견했을 것입니다. 그러나 이건 오래 사용되지는 않았습니다.
   - **새로운 코드는 이에 대해 신경쓰지 않도록 되어있습니다.** 간단하게 어플리케이션 서브 패키지를 import 하는 것을 다른 서브 패키지를 import하는 것과 동일하게 취급하세요.

- 각각의 grouping에서 import는 사전 순으로 정렬되어야 하지만 이러한 조건을 무시해도 될 때는 각각의 모듈의 전체 패키지 경로(`from path import ...` 의 `path`)를 따랐을 경우입니다.
- 코드는 import부분에서 선택적으로 개행을 두어도 됩니다.

  ```python
  import collections
  import queue
  import sys

  from absl import app
  from absl import flags
  import bs4
  import cryptography
  import tensorflow as tf

  from book.genres import scifi
  from myproject.backend import huxley
  from myproject.backend.hgwells import time_machine
  from myproject.backend.state_machine import main_loop
  from otherproject.ai import body
  from otherproject.ai import mind
  from otherproject.ai import soul

  # Older style code may have these imports down here instead:
  #from myproject.backend.hgwells import time_machine
  #from myproject.backend.state_machine import main_loop
  ```

---
<a id="s3.14-statements"></a>

### 3.14 Statements

- 일반적으로 한 라인에는 오직 한 statement만 있어야 합니다.
- 그러나, 테스트에 관한 statement 전체가 한 라인에 들어간다면 테스트 결과를 같은 줄에 둘 수 있습니다.
- 특히 절대 `try`/`except`에서 `try` 와 `except`를 같은 라인에 둘 수 없고 `if`문에 `else`가 있지 않은 경우에는 가능합니다.

- 올바른 예

  ```python
  if foo: bar(foo)
  ```

- 부적절한 예

  ```python
  if foo: bar(foo)
  else:   baz(foo)

  try:               bar(foo)
  except ValueError: baz(foo)

  try:
      bar(foo)
  except ValueError: baz(foo)
  ```

---
<a id="s3.15-access-control"></a>
<a id="getters-and-setters"></a>

### 3.15 접근 제어

- Getter/Setter 함수(접근자 및 변경자라고도함)는 변수 값을 가져오거나 설정하기 위한 의미 있는 역할이나 동작을 제공하는 경우 사용해야 합니다.
- 특히 현재 또는 합리적인 미래에 변수를 가져오거나 설정하는 것이 복잡하거나 비용이 상당할 때 사용해야 합니다.
- 예를 들어 한 쌍의 getter/setter가 단순히 내부 속성을 읽고 쓰는 경우 내부 속성은 대신 공개되어야 합니다.
- 이에 비해 변수를 설정하면 일부 상태가 무효화되거나 다시 작성됨을 의미하는 경우 이는 setter 함수여야 합니다.
- 함수 호출은 잠재적으로 사소하지 않은 작업이 발생하고 있음을 암시합니다.
- 또한 간단한 논리가 필요하거나 더 이상 getter/setter가 필요하지 않도록 리팩토링할 때 [properties](#properties) 옵션이 될 수 있습니다.
- Getter/Setter는 `get_foo()`, `set_foo()`와 같은 [Naming](#s3.16-naming) 지침을 따라야 합니다.
- 이전 동작에서 property을 통한 엑세스가 허용된 경우 새 getter/setter함수를 property에 바인딩하지 마세요.
- 여전히 이전 방법으로 변수에 액세스하려고 시도하는 코드는 눈에 띄게 중단되어 복잡성의 변화를 인식할 수 있습니다.

---
<a id="s3.16-naming"></a>

### 3.16 네이밍

`module_name`,
`package_name`,
`ClassName`,
`method_name`,
`ExceptionName`,
`function_name`,
`GLOBAL_CONSTANT_NAME`,
`global_var_name`,
`instance_var_name`,
`function_parameter_name`,
`local_var_name`,
`query_proper_noun_for_thing`,
`send_acronym_via_https`.

- 함수 이름, 변수 이름, 그리고 파일 이름은 설명적이여야 하고 약어로 적는 일을 피해야 합니다.
- 특히 모호하거나 프로젝트에 참여하지 않은 사람들이 읽었을 때 익숙하지 않은 약어를 사용하지마세요. 그리고 절대 단어에서 글자를 지워 줄이지 마세요.

- 항상 `.py`파일 이름 확장자를 사용하고 절대 대시`-`를 사용하지 마세요.

<a id="s3.16.1-names-to-avoid"></a>

#### 3.16.1 피해야 할 이름

- 아래와 같은 특별한 경우를 제외한 단일 글자는 피합니다.

  - counters이나 iterators에서 사용할 때 (예. `i`, `j`, `k`, `v` 등)
  - `try/except`문에서 예외 식별자로 `e`를 사용할 때
  - with문의 파일 핸들에서 `f`를 사용할 때
  - 제약 조건이 없는 비공식적인 [type variables](#typing-type-var)를 사용할 때 (e.g., `_T = TypeVar("_T"), _P = ParamSpec("_P")`)

  단일 글자를 남용하지 않도록 주의해야합니다. 일반적으로 말해서 서술성은 이름의 가시성 범위에 비례해야합니다. 예를 들어 `i`는 5행 코드 블록에 적합한 이름일 수 있지만 중첩된 여러 범위 내에서는 너무 모호할 수 있습니다.

- package/module 이름에서 dashes(`-`)를 사용할 때
- `__이중_선행_및_후행_밑줄__` 이름을 사용할 때 (Python에서 예약어)

  - 원본에 없는 추가 설명 : double leading and trailing underscore : (앞 뒤로 \_가 2개씩 있는것 e.g **name**, **init**)

- 공격적인 단어
- 불필요하게 변수 타입을 포함하는 이름 (예 : `id_to_name_dict`)

<a id="s3.16.2-naming-conventions"></a>

#### 3.16.2 Naming Conventions

모듈에 관련 클래스와 최상위 기능을 함께 배치합니다.

- "Internal"는 모듈의 내부 또는 클래스 내에서 protected 또는 private를 의미합니다.
- 단일 밑줄(`_`)을 추가하면 모듈 변수와 함수를 보호하기 위한 몇 가지 지원이 있습니다. (linters는 보호된 멤버 접근에 플래그를 지정합니다.)
- 단일 언더스코어(`_`)를 접두사로 사용하는 것은 모듈 변수와 함수 보호를 위한 일부 지원을 제공합니다 (linters가 보호된 멤버 접근을 경고할 수 있습니다). 그러나 유닛 테스트가 테스트 중인 모듈의 보호된 상수에 접근하는 것은 괜찮습니다.
- 인스턴스 변수나 메소드에 이중 밑줄(`__` : dunder)을 추가하면 변수나 메소드가 해당 클래스에 대해 효과적으로 private 됩니다.
  - 가독성과 테스트 가능성에 영향을 미치고 _실제로_ 비공개가 아니므로 사용을 권장하지 않습니다.
  - 하나의 밑줄을 선호합니다.
- 모듈에 관련 클래스와 top-level 함수를 함께 배치합니다.
- 자바와는 다르게 하나의 모듈에 대해 하나의 클래스로 제한을 할 필요가 없습니다.
- CapWords(단어의 첫 글자를 대문자로 하는 방식)을 사용하지만 모듈의 이름이 \_with_under.py 같은 경우에는 소문자로 합니다.

  - 비록 몇몇 오래된 모듈의 이름이 CapWords.py일지라도 이제는 모듈의 이름을 class이름에 따라 짓게 되면 혼란스러우므로 권장하지 않습니다. (e.g "잠깐만, -- 내가 `import StringIO`를 한거야 아니면 `from StringIO import StringIO`를 한거야 ?" 같은 상황이 발생할 수 있습니다.)

- 새로운 유닛 테스트 파일은 PEP 8을 준수하는 소문자와 언더스코어 방식의 메서드 이름을 따릅니다.
  - 예를 들어, `test*<method*under_test>*<state>`와 같은 형식을 사용합니다.
  - 일관성을 위해(\*) 이전 모듈에서 CapWords 함수 이름을 따르는 경우, `test`로 시작하는 메서드 이름에 논리적 구성 요소를 구분하기 위해 언더스코어가 포함될 수 있습니다.
  - 하나의 가능한 패턴은 `test<MethodUnderTest>_<state>`입니다.

<a id="s3.16.3-file-naming"></a>

#### 3.16.3 파일 네이밍

- 파이썬 파일이름은 반드시 `.py`확장자를 가지고 (`-`)를 가지고 있으면 안됩니다.
- 이건 import와 유닛테스트를 할 수 있게 해줍니다.
- 만약 확장자 없이 실행 파일에 접근하려면 `exec "$0.py" "$@"` 가 들어 있는 심볼 링크나 간단한 bash wrapper를 사용하세요.

<a id="s3.16.4-guidelines-derived-from-guidos-recommendations"></a>

#### 3.16.4 [Guido](https://en.wikipedia.org/wiki/Guido_van_Rossum)의 권고에 따른 가이드라인

| 타입                 | Public               | Internal                          |
| -------------------- | -------------------- | --------------------------------- |
| 패키지               | `lower_with_under`   |                                   |
| 모듈                 | `lower_with_under`   | `_lower_with_under`               |
| 클래스               | `CapWords`           | `_CapWords`                       |
| 예외                 | `CapWords`           |                                   |
| 함수                 | `lower_with_under()` | `_lower_with_under()`             |
| 글로벌/클래스 상수   | `CAPS_WITH_UNDER`    | `_CAPS_WITH_UNDER`                |
| 글로벌/클래스 변수   | `lower_with_under`   | `_lower_with_under`               |
| 인스턴스 변수        | `lower_with_under`   | `_lower_with_under` (protected)   |
| 메서드 이름          | `lower_with_under()` | `_lower_with_under()` (protected) |
| 함수/메서드 매개변수 | `lower_with_under`   |                                   |
| 지역 변수            | `lower_with_under`   |                                   |

<a id="math-notation"></a>

#### 3.16.5 수학 표기법

- 수학적으로 복잡한 코드의 경우 일반적으로 코딩 스타일 가이드를 벗어나는 짧은 변수이더라도 참고서나 알고리즘에서 보편적으로 사용되는 정립된 표식은 허용됩니다.
- 이런 경우 주석이나 docstring으로 표식의 출처를 참조해주세요.
- 출처에 접근할 수 없는 경우 명확하게 명명규칙을 기술하세요.
- 공개 API의 경우 더 자주 사용되는 PEP8-compliant `descriptive_names`이 선호됩니다.

---
<a id="s3.17-main"></a>

### 3.17 Main

- 파이썬에서 `pydoc`과 유닛 테스트는 모듈을 import할 수 있어야 합니다.
- 파일이 실행파일로써 사용되어야 하더라도 주된 기능은 `main()` 함수에 포함되어야 합니다.
- 당신의 코드에서 메인 프로그램이 모듈을 import 할 때 실행되지 않도록 메인 프로그램을 실행시키기 전에 `if __name__ == '__main__'`을 항상 확인해야 합니다.

- [absl](https://github.com/abseil/abseil-py)를 사용할 때 `app.run`를 사용하세요.

```python
from absl import app
...

def main(argv: Sequence[str]):
    # process non-flag arguments
    ...

if __name__ == '__main__':
    app.run(main)
```

- 그렇지 않으면 다음을 사용하세요.

```python
def main():
    ...

if __name__ == '__main__':
    main()
```

- top level에 있는 모든 코드는 모듈이 import될 때 실행될 것입니다.
- 파일을 `pydoc`으로 만들 때 실행하면 안되는 연산을 하거나 함수를 호출하는 것과 객체를 만드는 것을 조심하세요.

---
<a id="s3.18-function-length"></a>

### 3.18 함수 길이

- 함수의 길이가 작고 필수기능으로만 작성된 함수를 선호하세요.

- 우리는 길이가 긴 함수들이 가끔 필요하다는걸 알고있습니다. 그래서 함수 길이에 딱히 제한은 없습니다.
- 하지만 만약 함수가 40줄을 넘어가면 프로그램의 구조에 피해가 안가면서 줄일 수 있는지 생각해보세요.

- 비록 작성한 길이가 긴 함수가 당장은 완벽하게 작동할지라도 누군가 몇 달 이내에 함수에 새로운 동작을 추가할수 도 있습니다.
- 이건 버그를 찾기 어렵게 할수 도 있습니다.
- 작성한 함수를 짧고 간단하게 하여 다른 사람들이 읽고 코드를 수정하기 쉽게 만드세요.

- 작업을 할때 몇몇 길고 복잡한 함수를 발견할 수 있습니다. 절대 기존의 코드를 수정한다는 협박을 하지 마세요
  - 만약 함수가 사용하기 어렵다고 판단되면, 에러를 디버깅 하기 힘들다는걸 알거나 몇몇 다른 문맥에서 이 에러들을 사용하기 원한다고 할때
  - 그 함수를 작고 더욱 관리가 가능한 조각들로 나누는 것을 생각해 보세요.

---
<a id="s3.19-type-annotations"></a>

### 3.19 Type 주석 방법

<a id="s3.19.1-general"></a>

#### 3.19.1 일반적인 규칙

- [PEP-484](https://peps.python.org/pep-0484/)을 읽으세요.

- `self` 또는 `cls`에 주석을 달 필요는 일반적으로 없습니다. 올바른 타입 정보를 위해 필요한 경우에만 [`Self`](https://docs.python.org/3/library/typing.html#typing.Self)를 사용할 수 있습니다.

  ```python
  from typing import Self
  class BaseClass:
    @classmethod
    def create(cls) -> Self:
      ...
    def difference(self, other: Self) -> float:
      ...
  ```

- 마찬가지로, `__init__`의 반환 값에 주석을 달 필요는 없습니다 (여기서 `None`만 유효한 옵션입니다).

- 모든 변수나 반환되는 Type이 정해지지 않았다면 `Any`를 사용하세요.

- 모듈에서 모든 함수에 주석을 달 필요는 없습니다.
  - Public API에는 최소한의 주석을 답니다.
  - 판단력을 사용하여 한편으로는 안전성과 명확성, 그리고 다른 한편으로는 유연성 사이의 균형을 잘 잡아야 합니다.
  - Type 관련 오류(이전 버그 또는 복잡성)가 발생하기 쉬운 코드에 주석을 답니다.
  - 이해하기 어려운 코드에 주석을 답니다.
  - Type의 관점에서 코드가 안정화되면 주석을 답니다. 많은 경우에 너무 변하는 코드를 제외한 모든 심사숙고한 코드에 주석을 달 수 있습니다.

<a id="s3.19.2-line-breaking"></a>

#### 3.19.2 줄 바꿈

- 기존의 [들여쓰기](#s3.4-indentation) 규칙을 따르세요.

- 주석처리하고나서 많은 함수는 "한 줄에 하나의 파라미터"가 될 것입니다.
- 반환 타입이 별도의 줄에 표시되도록 보장하기 위해, 마지막 매개변수 뒤에 쉼표를 추가할 수 있습니다.

  ```python
  def my_method(
      self,
      first_var: int,
      second_var: Foo,
      third_var: Bar | None,
  ) -> int:
  ...
  ```

- 한줄에 맞출 수 있다면 사용해도 좋지만, 예제처럼 변수와 예를 들어 변수 이름과 유형 주석 간에는 포함되지않은 사이에는 항상 끊는 것을 선호합니다.

  ```python
  def my_method(self, first_var: int) -> int:
  ...
  ```

- 함수 이름, 마지막 매개 변수 및 리턴 Type의 조합이 너무 길면 새 행에서 4만큼 들여 쓰기됩니다.
- 줄 바꿈을 사용할 때는 각 매개변수와 반환 타입을 별도의 줄에 배치하고, 닫는 괄호를 `def`와 정렬하는 것이 좋습니다.

  ```python
  def my_method(
      self,
      other_arg: MyLongType | None,
  ) -> tuple[MyLongType1, MyLongType1]:
  ...
  ```

- 선택적으로, 반환 타입을 마지막 매개변수와 같은 줄에 배치할 수도 있습니다.

  - 괜찮은 예

    ```python
    def my_method(
      self,
      first_var: int,
      second_var: int) -> dict[OtherLongType, MyLongType]:
    ...
    ```

- `pylint`를 사용하면 닫는 괄호를 새 줄로 이동하고 여는 줄과 맞출 수 있지만 읽기 어렵습니다.

  - 부적절한 예

    ```python
    def my_method(self,
              other_arg: MyLongType | None,
             ) -> dict[OtherLongType, MyLongType]:
    ...
    ```

- 위 예처럼, Type을 깨지 않는 것을 선호합니다.
- 하지만 때때로는 너무 길어서 한 줄에 담을 수 없습니다. (sub-type를 끊어지지 않도록 노력합니다.)

  ```python
  def my_method(
      self,
      first_var: tuple[list[MyLongType1],
                      list[MyLongType2]],
      second_var: list[dict[
          MyLongType3, MyLongType4]],
  ) -> None:
  ...
  ```

- 단일 이름과 Type이 너무 길면 Type에 대한 [alias(별칭)](#s3.19.6-aliases)사용을 고려하세요.
- 최후의 수단은 다음에 4칸을 들여 쓰는 것입니다.

- 올바른 예

  ```python
  def my_function(
      long_variable_name:
          long_module_name.LongTypeName,
  ) -> None:
  ...
  ```

- 부적절한 예

  ```python
  def my_function(
      long_variable_name: long_module_name.
          LongTypeName,
  ) -> None:
  ...
  ```

<a id="s3.19.3-forward-declarations"></a>

#### 3.19.3 전방선언

- 아직 정의되지 않은 클래스 이름(예를 들어, 클래스 선언 내부에서 클래스 이름이 필요하거나 코드에서 나중에 정의된 클래스를 사용할 경우)을 사용해야 할 경우, `from __future__ import annotations`를 사용하거나 클래스 이름을 문자열로 사용하세요.

  - 올바른 예

    ```python
    from __future__ import annotations

    class MyClass:
      def __init__(self, stack: Sequence[MyClass], item: OtherClass) -> None:

    class OtherClass:
      ...
    ```

    ```python
    class MyClass:
      def __init__(self, stack: Sequence['MyClass'], item: 'OtherClass') -> None:

    class OtherClass:
      ...
    ```

<a id="s3.19.4-default-values"></a>

#### 3.19.4 기본 값

- PEP-008에 따라 유형 주석과 기본값이 모두 있는 인수의 경우 "=" \_ only" 주위에 공백을 사용하십시오.
- [PEP-008](https://peps.python.org/pep-0008/#other-recommendations)에 따라 Type 주석과 기본 값이 모두 있는 인수의 경우 `=` _only_ 주위에 공백을 사용하세요,

- 올바른 예

  ```python
  def func(a: int = 0) -> int:
  ...
  ```

- 부적절한 예

  ```python
  def func(a:int=0) -> int:
  ...
  ```

<a id="s3.19.5-none-type"></a>

#### 3.19.5 NoneType

- 파이썬형에서 노네타입(NoneType)은 퍼스트클래스형이며, 타이핑을 위해 노네타입(NoneType)은 노네타입(NoneType)의 별칭이다.
- 인자가 `None`이 될 수 있는 경우, 이를 선언해야 합니다!
- 새로운 Python 3.10+ 코드에서는 `|` 유니온 타입 표현식을 사용하는 것이 권장되며, 이전에는 `Optional`과 `Union` 구문을 사용할 수 있습니다.

- 암시적인 대신 명시적인 `X | None`을 사용하세요.
- 이전 버전의 PEP 484에서는 `a: str = None`을 `a: str | None = None`으로 해석할 수 있었지만, 이제는 이것이 선호되는 동작이 아닙니다.

- 올바른 예

  ```python
  def modern_or_union(a: str | int | None, b: str | None = None) -> str:
    ...
  def union_optional(a: Union[str, int, None], b: Optional[str] = None) -> str:
    ...
  ```

- 부적절한 예

  ```python
  def nullable_union(a: Union[None, str]) -> str:
  ...
  def implicit_optional(a: str = None) -> str:
  ...
  ```

<a id="s3.19.6-type-aliases"></a>
<a id="s3.19.6-aliases"></a>

#### 3.19.6 Type Aliases

- 복잡한 유형의 별칭을 선언할 수 있다. 가명의 이름은 CapWorded여야 한다. 별칭이 이 모듈에서만 사용되는 경우 \_Private여야 한다.

- 어려운 Type을 별칭으로 선언할 수 있습니다. 별칭은 CapWorded여야 합니다. 별칭이 이 모듈에서만 사용하는 경우에는 \_Private여야 합니다.

- TypeAlias 주석은 버전 3.10 이상에서만 지원된다는 점에 유의하세요.

```python
from typing import TypeAlias
_LossAndGradient: TypeAlias = tuple[tf.Tensor, tf.Tensor]
ComplexTFMap: TypeAlias = Mapping[str, _LossAndGradient]
```

<a id="s3.19.7-ignoring-types"></a>
<a id="s3.19.7-ignore"></a>

#### 3.19.7 Ignoring Types

- `# type: ignore` 주석으로 Type 검사를 사용하지 않도록 설정 할 수 있습니다.

- `pytype`에는 특정 오류에 대한 비활성화 옵션이 있습니다.(lint과 유사).

  ```python
  # pytype: disable=attribute-error
  ```

<a id="s3.19.8-typing-variables"></a>
<a id="s3.19.8-comments"></a>

#### 3.19.8 내부 변수 작성

<a id="annotated-assignments"></a>

- [_Annotated Assignments_](#annotated-assignments): 내부 변수의 타입을 추론하기 어렵거나 불가능한 경우, 주석이 달린 할당으로 타입을 명시하세요. 변수 이름과 값 사이에 콜론과 타입을 사용합니다 (기본값이 있는 함수 인수와 동일한 방식으로).

  ```python
  a: Foo = SomeUndecoratedFunction()
  ```

<a id="type-comments"></a>

- [_Type Comments_](#type-comments): 코드베이스에 여전히 남아 있을 수 있지만 (Python 3.6 이전에는 필요했음), 더 이상 `# type: <type name>` 주석을 줄 끝에 추가하지 마세요.

  ```python
  a = SomeUndecoratedFunction()  # type: Foo
  ```

<a id="s3.19.9-tuples-vs-lists"></a>
<a id="s3.19.9-tuples"></a>

#### 3.19.9 튜플 vs 리스트

- 리스트 타입은 한가지 타입의 오프젝트만 포함할 수 있습니다. 튜플 타입은 반복되는 하나의 타입이나 서로 다른 타입을 넣을 수 있습니다.
- 서로 다른 타입의 수를 넣는 경우는 일반적으로 함수에서 타입을 반환할 때 사용됩니다.
- 리스트는 함수의 반환 타입으로 일반적으로 사용된다.

```python
a: list[int] = [1, 2, 3]
b: tuple[int, ...] = (1, 2, 3)
c: tuple[int, str, float] = (1, "2", 3.5)
```

<a id="s3.19.10-typevars"></a>
<a id="s3.19.10-type-var"></a>
<a id="typevars"></a>

#### 3.19.10 Type variables

- 파이썬형 시스템은 일반성을 가지고 있다. 공장 기능인 TypeVar는 흔히 사용하는 방법입니다.

- 파이선 Type에는 [generics](https://peps.python.org/pep-0484/#generics)를 가지고 있습니다.
- `TypeVar`와 `ParamSpec`과 같은 타입 변수는 제너릭을 사용하는 일반적인 방법입니다.

  ```python
  from collections.abc import Callable
  from typing import ParamSpec, TypeVar
  _P = ParamSpec("_P")
  _T = TypeVar("_T")
  ...
  def next(l: list[_T]) -> _T:
    return l.pop()
  def print_when_called(f: Callable[_P, _T]) -> Callable[_P, _T]:
    def inner(*args: _P.args, **kwargs: _P.kwargs) -> _T:
      print("Function was called")
      return f(*args, **kwargs)
    return inner
  ```

- `TypeVar`는 부자연스러울 수도 있습니다.

  ```python
  AddableType = TypeVar("AddableType", int, float, str)
  def add(a: AddableType, b: AddableType) -> AddableType:
  return a + b
  ```

- `typing` 모듈의 흔히 미리 정의된 Type 변수는 `AnyStr`입니다. `bytes`, `str`일 수 있고 모두 같은 Type이어야 하는 여러 주석에 사용합니다.

  ```python
  from typing import AnyStr
  def check_length(x: AnyStr) -> AnyStr:
  if len(x) <= 42:
      return x
  raise ValueError()
  ```

- 타입 변수는 설명적인 이름을 가져야 합니다. 단, 다음 모든 기준을 충족하는 경우에는 예외입니다.

  - 외부에서 보이지 않는 경우
  - 제약 조건이 없는 경우

  - 올바른 예

    ```python
      _T = TypeVar("_T")
      _P = ParamSpec("_P")
      AddableType = TypeVar("AddableType", int, float, str)
      AnyFunction = TypeVar("AnyFunction", bound=Callable)
    ```

  - 부적절한 예

    ```python
      T = TypeVar("T")
      P = ParamSpec("P")
      _T = TypeVar("_T", int, float, str)
      _F = TypeVar("_F", bound=Callable)
    ```

<a id="s3.19.11-string-types"></a>
<a id="s3.19.11-strings"></a>
<a id="31911-string-types"></a>
<a id="typing-strings"></a>

#### 3.19.11 문자열 Type

> 새로운 코드에서는 `typing.Text`를 사용하지 마세요. 이는 Python 2/3 호환성을 위한 것입니다.

- 문자열/텍스트 데이터에는 `str`을 사용하세요. 이진 데이터와 관련된 코드에서는 `bytes`를 사용하세요.

  ```python
  def deals_with_text_data(x: str) -> str:
    ...
  def deals_with_binary_data(x: bytes) -> bytes:
    ...
  ```

- 함수의 모든 string Type이 항상 동일한 경우(예, 반환 Type이 위의 코드에서 인자 Type과 동일한 경우) [AnyStr](#s3.19.10-type-var)를 사용하세요.

- 이렇게 사용하면 Python 3에 코드를 포팅하는 과정이 간단해집니다.

<a id="s3.19.12-imports-for-typing"></a>
<a id="s3.19.12-imports"></a>

#### 3.19.12 Typing 추가

- `typing` 또는 `collections.abc` 모듈에서 정적 분석 및 타입 검사를 지원하기 위해 사용하는 심볼(타입, 함수, 상수 등)은 항상 심볼 자체를 임포트하세요.
- 이렇게 하면 일반적인 주석이 더 간결해지고, 전 세계적으로 사용되는 타입 주석 관행에 맞출 수 있습니다.
- `typing` 및 `collections.abc` 모듈에서 여러 개의 특정 심볼을 한 줄에서 명시적으로 임포트할 수 있습니다.

  ```python
  from collections.abc import Mapping, Sequence
  from typing import Any, Generic, cast, TYPE_CHECKING
  ```

- 이 방식으로 임포트하면 로컬 네임스페이스에 항목이 추가되므로, `typing` 또는 `collections.abc`의 이름은 키워드와 유사하게 취급되어야 하며, Python 코드에서 정의되지 않아야 합니다. 타입 여부와 관계없이 말입니다.
- 모듈 내에서 타입과 기존 이름 간에 충돌이 있는 경우, `import x as y`를 사용하여 임포트하세요.

  ```python
  from typing import Any as AnyType
  ```

- 가능한 경우, 주석으로 내장 타입을 사용하는 것이 좋습니다.
- Prefer to use built-in types as annotations where available.
- Python은 [PEP-585](https://peps.python.org/pep-0585/)를 통해 매개형 컨테이너 타입을 사용한 타입 주석을 지원하며, 이는 Python 3.9에서 도입되었습니다.

  ```python
  def generate_foo_scores(foo: set[str]) -> list[float]:
    ...
  ```

<a id="typing-conditional-imports"></a>
<a id="s3.19.13-conditional-imports"></a>

#### 3.19.13 조건 Imports

- 형식 확인에 필요한 추가 가져오기를 런타임에 피해야 하는 예외적인 경우에만 조건부 가져오기를 사용하십시오.

  - 이러한 패턴은 바람직하지 않습니다.
  - 최고 수준의 수입을 허용하도록 코드 재인쇄와 같은 대안이 선호되어야 합니다.

- Type 확인에 필요한 import 추가는 런타임에 피해야 하는 예외적인 경우에만 조건부 가져오기를 사용하세요.

  - 이러한 패턴은 바람직하지 않습니다.
  - top level import을 허용하도록 코드 재구성과 같은 대안이 선호되어야 합니다.

- Type 주석에만 필요한 impot는 `if TYPE_CHECKING:` 블록 내에 배치 할 수 있습니다.
  - 조건부로 import한 Type을 문자열로 참조하여 주석 표현이 실제로 평가되는 Python 3.6과 정방향 호환 가능합니다.
  - 입력에만 사용되는 속성만 정의되어야 합니다. 별칭이 포함되어야 하며 그렇지 않으면 모듈을 런타임에 가져오지 않기 때문에 런타임 오류가 발생합니다.
  - 블록은 모든 정상 import 후여야 합니다.
  - typing import 목록에 빈 줄이 없어야 합니다.
  - 목록을 일반 import 목록인 것처럼 정렬하세요.

```python
import typing
if typing.TYPE_CHECKING:
  import sketch
def f(x: "sketch.Sketch"): ...
```

<a id="s3.19.14-circular-dependencies"></a>
<a id="s3.19.14-circular-deps"></a>

#### 3.19.14 Circular 종속

- Circular 종속의 원인은 심오한 문제(code smells)를 작성하는 것입니다.

  - 그런 코드는 리팩터링에 적합합니다.
  - 하지만 기술적으로 Circular 종속성을 유지하는 것은 가능하지만, 다양한 빌드 시스템은 다른 모듈에 의존해야 하기 때문에 그렇게 하도록 허락하지 않을 것입니다.

- Circular 종속을 생성하는 모듈을 `Any`로 교체합니다.
  - 의미있는 이름으로 [alias](#s3.19.6-aliases)를 지정하고 모듈의 실제 Type 이름을 사용하세요 (`Any`의 모든 속성은 `Any`입니다.).
  - Alias의 정의는 마지막으로 import와 한 줄로 분리합니다.

```python
from typing import Any

some_mod = Any  # some_mod.py에서 이 모듈을 import 합니다.
...

def my_method(self, var: "some_mod.SomeType") -> None:
  ...
```

<a id="s3.19.15-generics"></a>

#### 3.19.15 일반

- 주석을 달때, 일반 Type를 지정하기를 선호하며 그렇지 [않을 때에는 `Any`로 가정합니다](https://peps.python.org/pep-0484/#the-any-type).

  - 올바른 예

    ```python
    def get_names(employee_ids: Sequence[int]) -> Mapping[int, str]:
      ...
    ```

  - 부적절한 예

    ```python
    # 이는 get_names(employee_ids: Sequence[Any]) -> Mapping[Any, Any]로 해석됩니다.
    def get_names(employee_ids: Sequence) -> Mapping:
    ```

- 파라미터의 적합한 Type이 `Any`일 때, 명시적으로 표현되며, 많은 경우에 [`TypeVar`](#s3.19.10-type-var)가 더 적합할 수 있음을 기억해야합니다.

  - 부적절한 예

    ```python
    def get_names(employee_ids: Sequence[Any]) -> Mapping[Any, str]:
      """직원의 아이디를 이름과 연결하여 반환합니다."""
    ```

  - 올바른 예

    ```python
    _T = TypeVar('_T')
    def get_names(employee_ids: Sequence[_T]) -> Mapping[_T, str]:
      """직원의 아이디를 이름과 연결하여 반환합니다."""
    ```

---

<br>

<a id="s4"></a>

## 4. 맺음말

<h3> 일관성을 유지하세요 </h3>

- 당신이 코드를 수정한다면 몇 분을 투자해서 코드를 살펴보고 스타일을 파악하세요.
- 그들이 인덱스 변수 이름에 `_idx` 접미사를 사용하는 경우, 당신도 그렇게 해야 합니다. 만약 주석이 hash marks(`#`)으로 만든 박스 안에 들어있다면 당신의 주석도 그렇게 해야합니다.

- 스타일 가이드라인의 요점은 코딩에서 공통된 어투를 갖는 것입니다. 그렇게 된다면 사람들은 당신의 코딩 형식보다는 당신의 코드에 집중할 수 있습니다
- 우리는 여기서 사람들이 어휘를 알 수 있는 세계적인 코딩 스타일 규칙을 제공하지만 고유의 스타일도 중요합니다.
- 파일에 코드를 추가했을 때 이 코드가 다른 코드와 비교하여 크게 달라 보이면 코드를 읽는 사람의 입장에서는 리듬이 깨집니다.

- 그러나 일관성에는 한계가 있습니다.
- 일관성은 주로 지역적으로 적용되며, 전역 스타일에서 명시되지 않은 선택에 더 강하게 적용됩니다.
- 일관성을 구식 스타일을 고수하는 정당화의 근거로 삼기보다는 새로운 스타일의 장점이나 코드베이스가 시간이 지남에 따라 새로운 스타일로 수렴하는 경향을 고려하는 것이 좋습니다.

---
