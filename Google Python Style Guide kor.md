# Google Python Style Guide

<details>
  <summary>Table of Contents</summary>

-   [1. 배경](#s1)
-   [2. Python 언어 규칙](#s2)
    *   [2.1 Lint](#s2.1-lint)
        +   [2.1.1 정의](#s2.1.1-definition)
        +   [2.1.2 장점](#s2.1.2-pros)
        +   [2.1.3 단점](#s2.1.3-cons)
        +   [2.1.4 결론](#s2.1.4-decision)
    *   [2.2 Imports](#s2.2-imports)
        +   [2.2.1 정의](#s2.2.1-definition)
        +   [2.2.2 장점](#s2.2.2-pros)
        +   [2.2.3 단점](#s2.2.3-cons)
        +   [2.2.4 결론](#s2.2.4-decision)
    *   [2.3 Packages](#s2.3-packages)
        +   [2.3.1 장점](#s2.3.1-pros)
        +   [2.3.2 단점](#S2.3.2-cons)
        +   [2.3.3 결론](#s2.3.3-decision)
    *   [2.4 예외](#s2.4-exceptions)
        +   [2.4.1 결정](#s2.4.1-definition)
        +   [2.4.2 장점](#s2.4.2-pros)
        +   [2.4.3 단점](#s2.4.3-cons)
        +   [2.4.4 결론](#s2.4.4-decision)
    *   [2.5 전역 변수](#s2.5-global-variables)
        +   [2.5.1 정의](#s2.5.1-definition)
        +   [2.5.2 장점](#s2.5.2-pros)
        +   [2.5.3 단점](#s2.5.3-cons)
        +   [2.5.4 결론](#s2.5.4-decision)
    *   [2.6 중첩/지역/내부 클래스와 함수](#s2.6-nested)
        +   [2.6.1 정의](#s2.6.1-definition)
        +   [2.6.2 장점](#s2.6.2-pros)
        +   [2.6.3 단점](#s2.6.3-cons)
        +   [2.6.4 결론](#s2.6.4-decision)
    *   [2.7 Comprehensions & 제너레이터 표현식](#s2.7-list_comprehensions)
        +   [2.7.1 정의](#s2.7.1-definition)
        +   [2.7.2 장점](#s2.7.2-pros)
        +   [2.7.3 단점](#s2.7.3-cons)
        +   [2.7.4 결론](#s2.7.4-decision)
    *   [2.8 기본 반복자와 연산자](#s2.8-default-iterators-and-operators)
        +   [2.8.1 정의](#s2.8.1-definition)
        +   [2.8.2 장점](#s2.8.2-pros)
        +   [2.8.3 단점](#s2.8.3-cons)
        +   [2.8.4 결론](#s2.8.4-decision)
    *   [2.9 제너레이터](#s2.9-generators)
        +   [2.9.1 정의](#s2.9.1-definition)
        +   [2.9.2 장점](#s2.9.2-pros)
        +   [2.9.3 단점](#s2.9.3-cons)
        +   [2.9.4 결론](#s2.9.4-decision)
    *   [2.10 람다 함수](#s2.10-lambda-functions)
        +   [2.10.1 정의](#s2.10.1-definition)
        +   [2.10.2 장점](#s2.10.2-pros)
        +   [2.10.3 단점](#s2.10.3-cons)
        +   [2.10.4 결론](#s2.10.4-decision)
    *   [2.11 조건문 표현](#s2.11-conditional-expressions)
        +   [2.11.1 정의](#s2.11.1-definition)
        +   [2.11.2 장점](#s2.11.2-pros)
        +   [2.11.3 단점](#s2.11.3-cons)
        +   [2.11.4](#s2.11.4-decision)
    *   [2.12 기본 인자 값](#s2.12-default-argument-values)
        +   [2.12.1 정의](#s2.12.1-definition)
        +   [2.12.2 장점](#s2.12.2-pros)
        +   [2.12.3 단점](#s2.12.3-cons)
        +   [2.12.4 결론](#s2.12.4-decision)
    *   [2.13 Properties](#s2.13-properties)
        +   [2.13.1 정의](#s2.13.1-definition)
        +   [2.13.2 장점](#s2.13.2-pros)
        +   [2.13.3 단점](#s2.13.3-cons)
        +   [2.13.4 결론](#s2.13.4-decision)
    *   [2.14 True/False 평가](#s2.14-truefalse-evaluations)
        +   [2.14.1 정의](#s2.14.1-definition)
        +   [2.14.2 장점](#s2.14.2-pros)
        +   [2.14.3 단점](#s2.14.3-cons)
        +   [2.14.4 결론](#s2.14.4-decision)
    *   [2.15 사용하지 않는 언어의 기능](#s2.15-deprecated-language-features)
        +   [2.15.1 정의](#s2.15.1-definition)
        +   [2.15.2 결론](#s2.15.2-decision)
    *   [2.16 렉시컬 스코핑(Lexical Scoping)](#s2.16-lexical-scoping)
        +   [2.16.1 정의](#s2.16.1-definition)
        +   [2.16.2 장점](#s2.16.2-pros)
        +   [2.16.3 단점](#s2.16.3-cons)
        +   [2.16.4 결론](#s2.16.4-decision)
    *   [2.17 함수와 메서드 Decorators](#s2.17-function-and-method-decorators)
        +   [2.17.1 정의](#s2.17.1-definition)
        +   [2.17.2 장점](#s2.17.2-pros)
        +   [2.17.3 단점](#s2.17.3-cons)
        +   [2.17.4 결론](#s2.17.4-decision)
    *   [2.18 스레드](#s2.18-threading)
    *   [2.19 강한 기능](#s2.19-power-features)
        +   [2.19.1 정의](#s2.19.1-definition)
        +   [2.19.2 장점](#s2.19.2-pros)
        +   [2.19.3 단점](#s2.19.3-cons)
        +   [2.19.4 결론](#s2.19.4-decision)
    *   [2.20 Modern Python : Python 3 그리고 from, \_\_future\_\_, imports](#s2.20-modern-python)
        +   [2.20.1 정의](#s2.20.1-definition)
        +   [2.20.2 장점](#s2.20.2-pros)
        +   [2.20.3 단점](#s2.20.3-cons)
        +   [2.20.4 결론](#s2.20.4-decision)
    *   [2.21 Type 주석](#s2.21-typed-code)
        +   [2.21.1 정의](#s2.21.1-definition)
        +   [2.21.2 장점](#s2.21.2-pros)
        +   [2.21.3 단점](#s2.21.3-cons)
        +   [2.21.4 결론](#s2.21.4-decision)
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
    *   [3.9 Classes](#s3.9-classes)
    *   [3.10 Strings](#s3.10-strings)
    *   [3.11 Files and Sockets](#s3.11-files-and-sockets)
    *   [3.12 TODO Comments](#s3.12-todo-comments)
    *   [3.13 import 형식](#s3.13-imports-formatting)
    *   [3.14 Statements](#s3.14-statements)
    *   [3.15 접근 제어](#s3.15-access-control)
    *   [3.16 네이밍](#s3.16-naming)
        +   [3.16.1 피해야 할 이름](#s3.16.1-names-to-avoid)
        +   [3.16.3 파일 네이밍](#s3.16.3-file-naming)
        +   [3.16.4 Guido의 권고에 따른 가이드라인](#s3.16.4-guidelines-derived-from-guidos-recommendations)
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
        +   [3.19.10 TypeVar](#s3.19.10-type-var)
        +   [3.19.11 문자열 Type](#s3.19.11-strings)
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
- 많은 팀에서 형식에 대한 논쟁을 피하기 위해 [yapf](https://github.com/google/yapf/) auto-formatter 을 사용합니다.

---

<br>

<a id="s2"></a>

## 2. Python 언어 규칙

<a id="s2.1-lint"></a>

### 2.1 Lint

- 작성한 코드에 대해 `pylint`를 실행시키세요.

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

---
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

---
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
- 코드상에서 `try`/`except` 블록의 수를 최소화시키세요. `try`문의 내부가 커질수록 예외는 당신이 예외가 발생할것이라 예상하지 않았던 코드에 의해 점점 더 발생할 것입니다. 이러한 상황에서, `try`/`except` 블록은 진짜 검출해야 할 에러를 가리게 됩니다.
- 예외가 `try` 블록에서 발생하던 안하던 `finally`절은 코드를 실행시킨다. 이건 가끔 깔끔히 하는데 유용합니다. 예를들어, 파일을 닫을 때 가 그 예입니다.
- 예외를 포착했을때, `,` 보다 `as` 를 사용하세요. 예시는 다음과 같습니다.

  ```python
  try:
      raise Error()
  except Error as error:
      pass
  ```

---
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

- 없습니다.

<a id="s2.9.4-decision"></a>

#### 2.9.4 결론

- 제너레이터 함수에서 docstring에 대해 "Returns:"보다 "Yields:"를 사용하세요.

---
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

#### 2.11.4

- 간단한 상황에 좋습니다. 그 외의 경우에는 if 문을 사용하는 것이 좋습니다.

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

---
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

---
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
  - `==`를 사용해서 boolean 변수인 `False`와 비교하지 마세요. 대신 `if not x:`를 사용하세요. `False`와 `None`를 구별해야 할 경우 `if not x and is not None:`와 같은 식으로 연결하세요.
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

---
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

---
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
- Decorator는 "Top level code"의 특별한 경우일 때에는 [main](#s3.17-main) 항목에 자세한 내용이 있습니다.
- 기존 라이브러리에 정의된 API와 통합하기 위해 강제하지 않는 한 "@static method"를 사용하지 마세요. 대신 모듈 레벨 함수를 쓰세요.
- 프로세스 전체 캐시 등 필요한 global state를 수정하는 명명된 생성자 또는 클래스별 루틴을 작성할 때만 "@classmethod"를 사용하세요.

---
<a id="s2.18-threading"></a>

### 2.18 스레드

- 내장된 타입의 원자성에 의존하지 마세요. 딕셔너리와 같은 Python의 내장된 타입은 원자 형태로 조작할 수 있지만 그러지 않은 경우(예: `__hash__`이나 `__eq__`가 Python 함수로 구현되는 경우)도 있으며 원자로 되어있다고 신뢰하면 안 됩니다. 또한, 원자 변수 할당에 의존해서는 안 됩니다. (결국, 딕셔너리에 달려있기 때문입니다) 스레드 간 데이터를 통신하는 데 선호하는 방법으로 큐 모듈의 `Queue` 데이터 타입을 사용하세요. 그렇지 않으면 threading 모듈이나 locking primitives를 사용하세요. lower-level lock 대신해 Condition variables와 `threading.Condition`를 선호하세요.

---
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

---
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

---
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

- [PEP-526](https://www.python.org/dev/peps/pep-0526/)구문 처럼 변수의 type을 선언할 때 사용합니다.

  ```python
  a: SomeType = some_func()
  ```

- legacy Python version을 지원해야한다면 코드에 type 설명을 추가합니다.

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

- 3개 이상의 컨텍스트 매니저를 요구하는 `with` 구문을 제외하고 백슬래쉬(`\`) 를 이용한 문장연장을 사용하지 마세요.

- Python의 [소/중/대 괄호 내부의 묵시적 라인결합](http://docs.python.org/reference/lexical_analysis.html#implicit-line-joining)을 사용하세요.
- 필요하다면, 구문 양쪽에 추가로 괄호를 더할 수 있습니다.

  - 올바른 예

    ```python
    foo_bar(self, width, height, color='black', design=None, x='foo',
    emphasis=None, highlight=0)

        if (width == 0 and height == 0 and
            color == 'red' and emphasis == 'strong'):
    ```

- 만약 리터럴 문자열을 한 줄에 표현하기 어렵다면 아래와 같이 괄호를 이용하여 묵시적 라인결합을 사용하세요.

  ```python
  x = ('This will build a very long long '
      'long long long long long long string')
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

- 3줄 이상이 필요한 `with` 구문을 정의할 때는 백슬래쉬(`\`) 를 이용한 문장연장이 허용됩니다. 2줄인 경우 네스티드 `with`를 사용하세요

  - 올바른 예

    ```python
        with very_long_first_expression_function() as spam, \
            very_long_second_expression_function() as beans, \
            third_thing() as eggs:
            place_order(eggs, beans, spam, beans)
    ```

  - 부적절한 예

    ```python
    with VeryLongFirstExpressionFunction() as spam, \
            VeryLongSecondExpressionFunction() as beans:
        PlaceOrder(eggs, beans, spam, beans)
    ```

  - 올바른 예

    ```python
    with very_long_first_expression_function() as spam:
        with very_long_second_expression_function() as beans:
            place_order(beans, spam)
    ```

- 위의 예시에서 각 요소에 사용된 들여쓰기를 잘 기억하세요. 더 자세한 정보는 [들여쓰기](#s3.4-indentation) 챕터를 확인하세요.

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

- 탭을 사용하거나 탭과 스페이스를 섞어서 사용하지 마세요.
- 묵시적 문장연장의 경우 [line length](#s3.2-line-length) 섹션의 예시처럼 동일한 문장에 포함된 요소들을 수직정렬하거나 첫 열린괄호 이후로는 아무것도 없는 4 칸 hanging indent 를 적용하여야 합니다.

- 올바른 예

  ```python
  # Aligned with opening delimiter
  foo = long_function_name(var_one, var_two,
                          var_three, var_four)
  meal = (spam,
          beans)

  # Aligned with opening delimiter in a dictionary
  foo = {
      long_dictionary_key: value1 +
                          value2,
      ...
  }

  # 4-space hanging indent; nothing on first line
  foo = long_function_name(
      var_one, var_two, var_three,
      var_four)
  meal = (
      spam,
      beans)

  # 4-space hanging indent in a dictionary
  foo = {
      long_dictionary_key:
          long_dictionary_value,
      ...
  }
  ```

- 부적절한 예

  ```python
  # Stuff on first line forbidden
  foo = long_function_name(var_one, var_two,
      var_three, var_four)
  meal = (spam,
      beans)

  # 2-space hanging indent forbidden
  foo = long_function_name(
      var_one, var_two, var_three,
      var_four)

  # No hanging indent in a dictionary
  foo = {
      long_dictionary_key:
      long_dictionary_value,
      ...
  }
  ```

<a id="s3.4.1-trailing-comma"></a>

### 3.4.1 원소 나열 시 후행 쉼표

- 여러 원소를 나열할 때 후행 쉼표는 `]`, `)`, `}` 와 같이 컨테이너를 닫는 토큰이 마지막 원소와 같은 줄에 있지 않을 때만 권장됩니다.
- 또한 후행 쉼표의 존재 여부는 파이썬 코드 오토-포메터 [YAPF](https://pypi.org/project/yapf/) 가 컨테이너의 원소를 한 줄에 하나씩 `,` 기호를 붙여 자동 정렬하도록 지시하는 힌트로도 사용됩니다.

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
          6
          ]
  ```

---
<a id="s3.5-blank-lines"></a>

### 3.5 Blank Lines

- 함수 선언이든 객체 선언이든 최상위 선언문과는 2개의 빈 줄을 사이에 두어야 합니다.
- 각 메소드 선언 또는 `class` 줄과 젓 번째 메소드 선언 시 그 사이에는 한 개의 빈 줄이 있어야 합니다.
- `def` 줄 이후에는 빈 줄이 없어야 합니다.
- 함수와 메소드 사이에 개발자의 판단하에 적절하게 한 개의 빈 줄을 사용하세요.

---
<a id="s3.6-whitespace"></a>

### 3.6 Whitespace

- 표준 조판 규칙을 따라 구두점 주변에 스페이스를 사용하세요.

- 괄호, 중괄호, 대괄호 내부에는 화이트스페이스 없어야 합니다.

  - 올바른 예

    ```python
    spam(ham[1], {eggs: 2}, [])
    ```

  - 부적절한 예

    ```python
    spam( ham[ 1 ], { eggs: 2 }, [ ] )
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
- 프로그램의 메인 파일을 `#!/usr/bin/python` 과 [PEP-394](https://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0394/) 에 따른 `2` 또는 `3`을 붙여 사용하면 됩니다.

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
- [PEP257](https://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0257/) 에 따라 docstring 을 시작하거나 끝낼 때는 `"""` 를 사용하세요.
- docstring은 마침표, 물음표, 느낌표로 끝나는 요약줄(한 줄)로 시작하여야 하며 한 줄의 공백을 두고 내용을 담고있는 나머지 docstring 이 이어져야 합니다.
- 또한 내용을 담고있는 docstring 은 `"""` 와 같은 커서위치에서 시작하여야 합니다.

<a id="s3.8.2-comments-in-modules"></a>

#### 3.8.2 Modules

- 모든 파일은 라이센스 보일러 플레이트를 가지고 있어야 합니다.
- 프로젝트에 알맞는 라이센스 보일러 플레이트를 선택하세요. (예를 들면, Apache 2.0, BSD, LGPL, GPL)

<a id="s3.8.3-functions-and-methods"></a>

#### 3.8.3 Functions and Methods

- 이 섹션에서 "함수"는 메소드, 함수 또는 제너레이터를 의미합니다.

- 아래의 조건을 만족하지 않는 이상 함수는 반드시 docstring 을 가지고 있어야 합니다.

  - 외부에서 보이지 않음
  - 매우 짧음
  - 잘 알려져 있음

- docstring 은 직접 함수의 코드를 읽어보지 않더라도 충분히 함수를 호출하는 코드를 작성 할 수 있을만큼 정보를 제공해야 합니다.
- docstring 은 (`"""Fetches rows from a Bigtable."""`) 처럼 _설명조_ 를 사용하여야 하며 (`"""Fetch rows from a Bigtable."""`) 처럼 _명령조_ 를 사용하지 않아야 합니다.
- docstring 은 함수의 구현방식이 아닌 호출 방법과 의미를 기술해야 합니다.
- 복잡한 코드의 경우 docstring 을 사용하는 것보다 코드 한 줄마다 주석을 첨가하는 것이 더 알맞습니다.

- 다른 기본 객체의 메소드를 오버라이드하는 메소드는 `"""See base class."""` 처럼 개발자가 작성한 docstring 에 오버라이드된 메소드가 있음을 알려주는 docstring 을 전달 할 수도 있습니다.
- 그 이유는 같은 문서를 여러곳에서 반복하는 것을 방지하기 위함입니다.
- 하지만 오버라이딩된 메소드가 기존의 메소드와 확연하게 다른 동작방식을 가지고 있거나 세부적인 내용(e.g., 잠재적인 부작용 등)이 존재한다면 적어도 그러한 차이점들은 docstring 을 통해 기록되어야 합니다.

- 다만 함수의 몇가지 특정 부분들은 아래처럼 별도의 특별섹션으로 기록해야 합니다.
- 각 섹션은 표제로 시작하며 콜론으로 끝맺습니다.
- 각 섹션은 표제를 제외하고 2칸 들여쓰기를 합니다.

<a id="doc-function-args"></a>

##### [_Args:_](#doc-function-args)

- 매개변수를 각각 이름으로 나열합니다. 각 이름에는 설명문이 따르며 콜론 뒤에 공백이나 새로운 라인으로 분리되어야 합니다.
- 만약 설명문이 너무 길어 한 줄인 80자를 초과할 경우 매개변수 이름보다 2칸 또는 4칸의 들여쓰기를 사용합니다.(파일의 나머지 문서(docstring)와 일치합니다.)
- 만약 코드가 자료형에 대한 주석을 담고 있지 않다면 설명문은 요구되는 자료형을 포함해서 기록해야 합니다.
- 함수가 `*foo`(가변길이의 매개변수 리스트) 또는 `**bar`(임의의 키워드 매개변수)를 받는다면 `*foo` 와 `**bar`로 기록되어야 합니다.

<a id="doc-function-returns"></a>

##### [_Returns:_ (제너레이터에는 _Yields:_)](#doc-function-returns)

- 반환값의 자료형과 의미를 기록합니다. 만약 함수가 None만을 반환한다면 이 섹션은 필요없습니다.
- 또한 만약 docstring이 Returns 나 Yields로 시작하거나(e.g. `"""Returns row from Bigtable as a tuple of strings."""`) 충분한 설명이 제공된다면 생략 될 수 있습니다.

<a id="doc-function-raises"></a>

##### [_Raises:_](#doc-function-raises)

- interface와 관련된 모든 예외를 설명 뒤에 나열합니다.
- `Args:`에 설명된 것과 유사한 예외 이름 + 콜론 + 공백 또는 줄 바꿈과 hanging indent 스타일을 사용하세요.
- 명시된 API가 docstring을 위반했을 될 경우, 예외를 문서화하지 않습니다. (왜냐하면 이것은 역설적으로 API의 API를 위반하는 행동을 만들 수 있기 때문이다.)

  ```python
  def fetch_smalltable_rows(table_handle: smalltable.Table,
                          keys: Sequence[Union[bytes, str]],
                          require_all_keys: bool = False,
                        ) -> Mapping[bytes, Tuple[str]]:
    """Fetches rows from a Smalltable.

    Retrieves rows pertaining to the given keys from the Table instance
    represented by table_handle.  String keys will be UTF-8 encoded.

    Args:
        table_handle: An open smalltable.Table instance.
        keys: A sequence of strings representing the key of each table
          row to fetch.  String keys will be UTF-8 encoded.
        require_all_keys: Optional; If require_all_keys is True only
          rows with values set for all keys will be returned.

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
  def fetch_smalltable_rows(table_handle: smalltable.Table,
                            keys: Sequence[Union[bytes, str]],
                            require_all_keys: bool = False,
                          ) -> Mapping[bytes, Tuple[str]]:
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
          Optional; If require_all_keys is True only rows with values set
          for all keys will be returned.

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

<a id="s3.8.4-comments-in-classes"></a>

#### 3.8.4 Classes

- 클래스는 선언 바로 아래에 해당 클래스를 설명하는 docstring 를 가지고 있어야 합니다.
- 만약 클래스가 public attributes 를 가지고 있다면 [function's `Args`](#doc-function-args) 섹션과 같은 형식을 사용해 `Attributes` 섹션을 작성해야 합니다.

```python
class SampleClass:
    """Summary of class here.

    Longer class information....
    Longer class information....

    Attributes:
        likes_spam: A boolean indicating if we like SPAM or not.
        eggs: An integer count of the eggs we have laid.
    """

    def __init__(self, likes_spam=False):
        """Inits SampleClass with blah."""
        self.likes_spam = likes_spam
        self.eggs = 0

    def public_method(self):
        """Performs operation blah."""
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
<a id="s3.9-classes"></a>

### 3.9 Classes

- 클래스는 `object`에서 명시적으로 상속할 필요가 없습니다. (Python 2와 호환되는 경우는 제외합니다.)

- Modern

  ```python
  class SampleClass:
      pass

  class OuterClass:

      class InnerClass:
          pass

  ```

- Ancient

  ```python
  class SampleClass(object):
      pass

  class OuterClass(object):

      class InnerClass(object):
          pass
  ```

---
<a id="s3.10-strings"></a>

### 3.10 Strings

- 매개변수가 모두 문자열인 경우에도 `format` 메소드나 `%` 연산자를 사용하여 포메팅하세요.
- 물론 `+` 나 `%` 를 언제 사용할지는 개발자의 판단에 따릅니다.

  - 올바른 예

    ```python
    x = a + b
    x = '%s, %s!' % (imperative, expletive)
    x = '{}, {}'.format(first, second)
    x = 'name: %s; score: %d' % (name, n)
    x = 'name: {}; score: {}'.format(name, n)
    x = f'name: {name}; score: {n}'  # Python 3.6+
    ```

  - 부적절한 예

    ```python
    x = '%s%s' % (a, b)  # use + in this case
    x = '{}{}'.format(a, b)  # use + in this case
    x = first + ', ' + second
    x = 'name: ' + name + '; score: ' + str(n)
    ```

- 반목문에서 `+` 나 `+=` 연산자를 사용하여 문자열을 누적하는 행위는 삼가세요.
- 문자열은 변형이 불가하기 때문에 위와 같은 연산자를 사용하는 것은 불필요한 임시 오브젝트를 생성하게 되고 결국 리니어한 실행시간이 아닌 제곱형태의 실행시간이 소요됩니다.
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
- 다만 `\\` 사용을 피하기 위해 같은 파일이더라도 다른 따옴표를 사용하는 것은 괜찮습니다. `gpylint` 가 이를 검사합니다.

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
- 여러줄의 문자열은 나머지 코드의 들여쓰기와 잘 호환되지 않기에 종종 묵시적인 라인결합 방식을 사용하는 것이 전체적으로 더 깔끔해 보인다는 점을 알아두세요.
- If you need to avoid embedding extra space in the string, use either concatenated single-line strings or a multi-line string with [`textwrap.dedent()`](https://docs.python.org/3/library/textwrap.html#textwrap.dedent) to remove the initial space on each line

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

---
<a id="s3.11-files-and-sockets"></a>

### 3.11 Files and Sockets

- 파일과 소켓의 사용이 끝나면 명시적으로 연결을 종료해주세요.

- 파일이나 소켁과 같은 file-like 객체를 불필요하게 열어둔체로 남겨놓는것은 아래와 같은 단점들이 있습니다:

  - 파일 디스크립터와 같은 제한된 시스템 자원을 소모합니다.
    - 이러한 객체들을 많이 이용하는 코드라면 사용 후 시스템에 곧바로 반납하지 않는 행위는 자원의 고갈로 이어질 수 있습니다.
  - 파일을 열어둔 채로 방치하는 것은 파일의 이동이나 제거가 불가능 할 수 있습니다.
  - 공유되는 파일이나 소켓의 경우 이용 종료 후에 다른 프로그램에 의해 의도치 않게 읽어지거나 쓰여질 수 있습니다.

- 더욱이, 파일이나 소켓은 객체가 소멸될 때 자동으로 닫혀지는 것은 맞으나 객체의 수명주기를 파일의 상태에 구속하는 것은 나쁜 습관입니다:

  - 런타임이 언제 파일의 소멸자를 호출하는지 보장 할 수 없습니다.
    - 지연된 Garbage Collection 과 같이 파이썬의 종류에 따라 다른 방식의 메모리 관리 기법을 사용하기에 객체의 수명주기가 임의의 또는 영원히 지속될 수 있습니다.
  - globals 또는 예외추적 과 같이 의도치 않은 파일의 참조는 본래 수명보다 더 오랫동안 유지시킬 수 있습니다.

- 가장 선호되는 파일관리 방식은 [`with` 구문](http://docs.python.org/reference/compound_stmts.html#the-with-statement) 입니다

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

---
<a id="s3.12-todo-comments"></a>

### 3.12 TODO Comments

- 임시적, 잠시 사용하려는 코드 또는 좋기는 하지만 완벽하지 않은 코드의 경우 `TODO` 주석을 사용하세요.

- `TODO` 주석은 대문자로 되어있는 `TODO` 문구로 시작하며 해당 코드에 대한 가장 높은 이해도를 가진 인물의 이름, 이메일 주소 또는 다른 신원구분 문구를 괄호안에 넣어 포함하여야 합니다.
- 이것 뒤에 무엇을 해야하는 지에 대한 내용을 추가합니다.

- 목적은 `TODO`가 일관된 형식을 이용하여 추후 필요한 세부정보를 검색할 수 있어야 한다는 것입니다.
- `TODO` 는 본인이 아닌 다른 개발자가 문제를 해결하겠다는 약속이 아닙니다.
- 따라서 `TODO` 를 만드셨다면 거의 항상 작성한 본인의 이름이 들어가야 합니다.

```python
# TODO(kl@gmail.com): Use a "*" here for string repetition.
# TODO(Zeke) Change this to use relations.
```

- 만약 작성한 `TODO` 가 "추후 무엇을 진행할 것" 이라는 형식을 담고 있다면 반드시 ("2009년 11월까지") 와 같은 구체적인 기간이나 ("모든 클라이언트가 XML 요청을 해결 할수 있을때 이 코드 삭제") 처럼 목적을 포함하여야 합니다.

---
<a id="s3.13-imports-formatting"></a>

### 3.13 import 형식

- imports는 개별적인 라인에 두어야 합니다; [`typing` imports에 대한 예외가 있습니다.](#s3.19.12-imports).

  - 올바른 예

    ```python
    import os
    import sys
    from typing import Mapping, Sequence
    ```

  - 부적절한 예

    ```python
    import os, sys
    ```

- import는 모듈의 주석 과 docstring 바로 다음, 모듈 전역 및 상수 바로 앞 파일의 맨 위에 배치됩니다.
- import는 가장 일반적인 것 부터 최소한의 일반적인 것들까지 묶여야 합니다.

1. 파이썬의 표준 라이브러리

   - import 예시는 다음과 같습니다.

   ```python
   import sys
   ```

2. [third-party](https://pypi.org/)

   - 모듈이나 패키지의 import 예시는 다음과 같습니다.

   ```python
   import tensorflow as tf
   ```

3. Code repository

   - 서브 패키지의 import 예시는 다음과 같습니다.

   ```python
   from otherproject.ai import mind
   ```

4. 동일한 top 레벨에 속하는 어플리케이션의 특정을 import하는 것은 **더 이상 사용되지 않습니다**

   - 서브 패키지의 파일 import 예시는 다음과 같습니다.

   ```python
   from myproject.backend.hgwells import time_machine
   ```

   - 오래된 Google Python Style code에서 이걸 발견했을 것입니다. 그러나 이건 오래 사용되지는 않았습니다.
   - **새로운 코드는 이에 대해 신경쓰지 않도록 되어있습니다.** 간단하게 어플리케이션 서브 패키지를 import 하는 것을 다른 서브 패키지를 import하는 것과 동일하게 취급하세요.

- 각각의 grouping에서 import는 사전 순으로 정렬되어야 하지만 이러한 조건을 무시해도 될 때는 각각의 모듈의 전체 패키지 경로를 따랐을 경우입니다.
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

### 3.15 접근 제어

- 만약 접근제어자 함수를 무시할 경우 파이썬에서는 함수에 대해 추가적인 비용을 피하기 위해 접근제어자 함수 대신에 public 변수로 사용해야 합니다.
- 더 많은 기능이 추가된다면 `property`를 사용하여 문법을 일관적으로 유지 할 수 있습니다.

- 반면에 접근이 복잡하거나 변수의 접근에 대한 비용이 큰 경우, `get_foo()` 와 `set_foo()`와 같은 함수 호출([네이밍](#s3.16-naming) 가이드 라인을 참고하라)을 사용해야 합니다.
- 만약 전에 했던 행동이 property를 통해 접근을 허락했다면 새로운 접근제어자 함수를 property와 묶지마세요.
- 어떤 코드가 여전히 변수에 오래된 메서드를 통해 접근하려 시도한다면 반드시 눈에 보이게 부수어 복잡성의 변화를 인식하게 만들어야 합니다.

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
`local_var_name`.

- 함수 이름, 변수 이름, 그리고 파일 이름은 설명적이여야 하고 약어로 적는 일을 피해야 합니다.
- 특히 모호하거나 프로젝트에 참여하지 않은 사람들이 읽었을 때 익숙하지 않은 약어를 사용하지마세요. 그리고 절대 단어에서 글자를 지워 줄이지 마세요.

- 항상 `.py`파일 이름 확장자를 사용하고 절대 대시`-`를 사용하지 마세요.

<a id="s3.16.1-names-to-avoid"></a>

#### 3.16.1 피해야 할 이름

1. 아래와 같은 특별한 경우를 제외한 단일 글자는 피합니다.

- counters이나 iterators에서 사용할 때 (예. `i`, `j`, `k`, `v` 등)
- `try/except`문에서 예외 식별자로 `e`를 사용할 때
- with문의 파일 핸들에서 `f`를 사용할 때
  단일 글자를 남용하지 않도록 주의해야합니다. 일반적으로 말해서 서술성은 이름의 가시성 범위에 비례해야합니다. 예를 들어 `i`는 5행 코드 블록에 적합한 이름일 수 있지만 중첩된 여러 범위 내에서는 너무 모호할 수 있습니다.
- package/module 이름에서 dashes(`-`)를 사용할 때
- `__이중_선행_및_후행_밑줄__` 이름을 사용할 때 (Python에서 예약어)
  - 원본에 없는 추가 설명 : double leading and trailing underscore : (앞 뒤로 \_가 2개씩 있는것 e.g **name**, **init**)
- 모듈에서 사용할 때
  - 자바와는 다르게 하나의 모듈에 대해 하나의 클래스로 제한을 할 필요가 없습니다.
- CapWords(단어의 첫 글자를 대문자로 하는 방식)을 사용하지만 모듈의 이름이 \_with_under.py 같은 경우에는 소문자로 합니다.
  - 비록 몇몇 오래된 모듈의 이름이 CapWords.py일지라도 이제는 모듈의 이름을 class이름에 따라 짓게 되면 혼란스러우므로 권장하지 않습니다. (e.g "잠깐만, -- 내가 `import StringIO`를 한거야 아니면 `from StringIO import StringIO`를 한거야 ?" 같은 상황이 발생할 수 있습니다.)
- 구성 요소가 CapWord를 사용하더라도 "test"로 시작하는 _unittest_ 메서드 이름에 Undercore가 나타날 수 있습니다.
  - 한 가지 가능한 패턴은 `test<MethodUnderTest>_<state>`로, 예를 들어 `testPop_EmptyStack`같은 패턴은 괜찮습니다.
  - test 메서드에 에 이름을 붙이는 올바른 방법은 없습니다.

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
| 인스턴스 변수        | `lower_with_under`   | `_lower_with_under`               |
| 메서드 이름          | `lower_with_under()` | `_lower_with_under()` (protected) |
| 함수/메서드 매개변수 | `lower_with_under`   |                                   |
| 지역 변수            | `lower_with_under`   |                                   |

---
<a id="s3.17-main"></a>

### 3.17 Main

- 실행 파일로 사용되도록 의도된 파일도 가져올 수 있어야 하며 단순히 import를 해도 프로그램의 main 함수의 기능을 실행하는 일이 없어야 합니다.
- 메인은 기능적으로 `main()` 함수 안에 있어야 합니다.

- 파이썬에서 `pydoc`과 유닛 테스트는 모듈을 import할 수 있어야 합니다.
- 당신의 코드에서 메인 프로그램이 모듈을 import 할 때 실행되지 않도록 메인 프로그램을 실행시키기 전에 `if __name__ == '__main__'`을 항상 확인해야 합니다.

- [absl](https://github.com/abseil/abseil-py)를 사용할 때 `app.run`를 사용하세요.

```python
from absl import app
...

def main(argv):
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

- [PEP-484](https://www.python.org/dev/peps/pep-0484/)을 읽으세요.
- 메서드에서는 `self`, `cls`는 Type의 정보가 필요한 경우에서만 주석을 달아야합니다. 예) `@classmethod def create(cls: Type[T]) -> T: return cls()`
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

  ```python
  def my_method(self,
              first_var: int,
              second_var: Foo,
              third_var: Optional[Bar]) -> int:
  ...
  ```

- 한줄에 맞출 수 있다면 사용해도 좋지만, 예제처럼 변수와 예를 들어 변수 이름과 유형 주석 간에는 포함되지않은 사이에는 항상 끊는 것을 선호합니다.

  ```python
  def my_method(self, first_var: int) -> int:
  ...
  ```

- 함수 이름, 마지막 매개 변수 및 리턴 Type의 조합이 너무 길면 새 행에서 4만큼 들여 쓰기됩니다.

  ```python
  def my_method(
      self, first_var: int) -> Tuple[MyLongType1, MyLongType1]:
  ...
  ```

리턴 유형이 마지막 파라미터와 같은 라인에 맞지 않을 경우, 선호되는 방법은 파라미터를 4만큼 새 라인에 들여쓰고 닫히는 괄호를 "def"와 정렬하는 것이다.

- 반환 Type이 마지막 파라미터와 같은 줄이 아닐 때, 선호하는 방법은 파라미터를 4만큼 새 라인에 들여쓰고 닫히는 괄호를 `def`와 정렬합니다.

  - 올바른 예

    ```python
    def my_method(
        self, **kw_args: Optional[MyLongType]
    ) -> Dict[OtherLongType, MyLongType]:
    ...
    ```

- `pylint`를 사용하면 닫는 괄호를 새 줄로 이동하고 여는 줄과 맞출 수 있지만 읽기 어렵습니다.

  - 부적절한 예

    ```python
    def my_method(self,
                **kw_args: Optional[MyLongType]
                ) -> Dict[OtherLongType, MyLongType]:
    ...
    ```

- 위 예처럼, Type을 깨지 않는 것을 선호합니다.
- 하지만 때때로는 너무 길어서 한 줄에 담을 수 없습니다. (sub-type를 끊어지지 않도록 노력합니다.)

  ```python
  def my_method(
      self,
      first_var: Tuple[List[MyLongType1],
                      List[MyLongType2]],
      second_var: List[Dict[
          MyLongType3, MyLongType4]]) -> None:
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

- 아직 정의되지 않은 동일한 모듈의 클래스 이름을 사용해야 하는 경우(예, 클래스 선언 내에 클래스가 필요한 경우 또는 아래에 정의된 클래스를 사용하는 경우) 클래스 이름을 문자열로 사용하세요.

```python
class MyClass:

  def __init__(self,
               stack: List["MyClass"]) -> None:
```

<a id="s3.19.4-default-values"></a>

#### 3.19.4 기본 값

- PEP-008에 따라 유형 주석과 기본값이 모두 있는 인수의 경우 "=" \_ only" 주위에 공백을 사용하십시오.
- [PEP-008](https://www.python.org/dev/peps/pep-0008/#other-recommendations)에 따라 Type 주석과 기본 값이 모두 있는 인수의 경우 `=` _only_ 주위에 공백을 사용하세요,

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

- 파이썬형에서 노네타입(NoneType)은 퍼스트클래스형이며, 타이핑을 위해 노네타입(NoneType)은 노네타입(NoneType)의 별칭이다. 논쟁이 '없음'이 될 수 있다면 선언해야 한다! 유니온(Union)은 사용할 수 있지만, 다른 유형이 하나만 있는 경우에는 선택사항(Option)을 사용하십시오.

- 파이썬 타입 시스템에서 `NoneType`은 "first class" Type 이며 작성을 위해 `None`은 `NoneType`의 alias(별칭)입니다. 인자는 `None`이 될 수 있다면 선언을 해야합니다! `Union`을 사용할 수 있지만 다른 Type이 하나만 있는 경우 `Optional`를 사용하세요.

- 암시작 `Optional` 대신 명시적 `Optional` 사용해야 합니다. PEP 484 이전 버전에서는 `a: Optional[Text] = None` 대신에 `a: Text = None` 를 선호했지만 지금은 그렇지 않습니다.

- 올바른 예

  ```python
  def func(a: Optional[Text], b: Optional[Text] = None) -> Text:
  ...
  def multiple_nullable_union(a: Union[None, Text, int]) -> Text
  ...
  ```

- 부적절한 예

  ```python
  def nullable_union(a: Union[None, Text]) -> Text:
  ...
  def implicit_optional(a: Text = None) -> Text:
  ...
  ```

<a id="s3.19.6-type-aliases"></a>
<a id="s3.19.6-aliases"></a>

#### 3.19.6 Type Aliases

- 복잡한 유형의 별칭을 선언할 수 있다. 가명의 이름은 CapWorded여야 한다. 별칭이 이 모듈에서만 사용되는 경우 \_Private여야 한다.

- 어려운 Type을 별칭으로 선언할 수 있습니다. 별칭은 CapWorded여야 합니다. 별칭이 이 모듈에서만 사용하는 경우에는 \_Private여야 합니다.

- 예를 들어 Type과 함께 모듈의 이름이 너무 긴 경우

  ```python
  _ShortName = module_with_long_name.TypeWithLongName
  ComplexMap = Mapping[Text, List[Tuple[int, int]]]
  ```

- 다른 예로는 복잡한 중첩 유형과 함수의 복수 반환 변수(튜플)가 있습니다.

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

- 내부 변수가 유추하기 어렵거나 불가능한 타입을 가지고 있는 경우, 다음과 같이 별도의 주석으로 설명할 수 있습니다.

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
a = [1, 2, 3]  # type: List[int]
b = (1, 2, 3)  # type: Tuple[int, ...]
c = (1, "2", 3.5)  # type: Tuple[int, Text, float]
```

<a id="s3.19.10-typevars"></a>
<a id="s3.19.10-type-var"></a>

#### 3.19.10 TypeVar

- 파이썬형 시스템은 일반성을 가지고 있다. 공장 기능인 TypeVar는 흔히 사용하는 방법입니다.

- 파이선 Type에는 [generics](https://www.python.org/dev/peps/pep-0484/#generics)를 가지고 있습니다.
- factory function `TypeVar`는 흔히 사용하는 방법입니다.

  ```python
  from typing import List, TypeVar
  T = TypeVar("T")
  ...
  def next(l: List[T]) -> T:
  return l.pop()
  ```

- TypeVar는 부자연스러울 수도 있습니다.

  ```python
  AddableType = TypeVar("AddableType", int, float, Text)
  def add(a: AddableType, b: AddableType) -> AddableType:
  return a + b
  ```

- `typing` 모듈의 흔히 미리 정의된 Type 변수는 `AnyStr`입니다. `bytes`, `unicode`일 수 있고 모두 같은 Type이어야 하는 여러 주석에 사용합니다.

  ```python
  from typing import AnyStr
  def check_length(x: AnyStr) -> AnyStr:
  if len(x) <= 42:
      return x
  raise ValueError()
  ```

<a id="s3.19.11-string-types"></a>
<a id="s3.19.11-strings"></a>

#### 3.19.11 문자열 Type

- String 주석에 대한 적절한 Type은 코드의 용도에 따라 달라집니다.

- Python 3 호환 코드일 경우 `str`를 사용하세요.

  - `Text`도 가능합니다.
  - 하나를 사용하더라도 일관성을 유지하여 사용해야 합니다.

- Python 2 호환 코드의 경우 `Text`를 사용하세요.

  - 드믄 경우에 `str`은 적절할 수 있습니다.
  - 일반적으로 두 Python 버전 간에 반환 유형이 동일하지 않을 때 호환성을 돕습니다. Python 3에 존재하지 않는 `unicode`를 사용하지 마세요.

- 이런 불일치가 존재하는 이유는 `str`은 Python 버전에 따라 다른 것을 의미하기 때문입니다.

- 부적절한 예

  ```python
  def py2_code(x: str) -> unicode:
  ...
  ```

- 이진 데이터를 처리하는 경우라면 `bytes`를 사용하세요.

  ```python
  def deals_with_binary_data(x: bytes) -> bytes:
  ...
  ```

- Python 2에서 Text 데이터(`str`, `unicode`는 python 2, `str`은 python 3)는 `Text`를 사용합니다.
- Python 3에서만 Text 데이터를 처리하는 경우 `str`를 선택하세요.

  ```python
  from typing import Text
  ...
  def py2_compatible(x: Text) -> Text:
  ...
  def py3_only(x: str) -> str:
  ...
  ```

- Type이 byte 또는 Text 일 수 있는 경우 적절한 Text Type과 함께 `Union`을 사용하세요.

  ```python
  from typing import Text, Union
  ...
  def py2_compatible(x: Union[bytes, Text]) -> Union[bytes, Text]:
  ...
  def py3_only(x: Union[bytes, str]) -> Union[bytes, str]:
  ...
  ```

- 함수의 모든 string Type이 항상 동일한 경우(예, 반환 Type이 위의 코드에서 인자 Type과 동일한 경우) [AnyStr](#s3.19.10-type-var)를 사용하세요.

- 이렇게 사용하면 Python 3에 코드를 포팅하는 과정이 간단해집니다.

<a id="s3.19.12-imports-for-typing"></a>
<a id="s3.19.12-imports"></a>

#### 3.19.12 Typing 추가

- `typing` 모듈의 클래스는 항상 클래스 자체를 가져와야 합니다. `typing` 모듈에서 한 줄에 여러개의 특정 클래스를 가져올 수 있습니다.

  ```python
  from typing import Any, Dict, Optional
  ```

- `typing`에서 가져오는 이러한 방식이 로컬 네임스페이스에 항목을 추가한다는 점에서, `typing`의 모든 이름은 키워드와 유사하게 취급되어야 하며, typing이든 아니든 Python 코드에 정의되어서는 안됩니다.
- 모듈에 있는 Type과 기존 이름이 충돌하는 경우 `import x as y`를 사용해서 가져와야 합니다.

  ```python
  from typing import Any as AnyType
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
  - 하지만 기술적으로 Circular 종속성을 유지하는 것은 가능하지만, [빌드 시스템(build system)](#typing-build-deps)이 다른 모듈에 의존해야 하기 때문에 그렇게 하도록 허락하지 않을 것입니다.

- Circular 종속을 생성하는 모듈을 `Any`로 교체합니다.
  - 의미있는 이름으로 [alias](#s3.19.6-aliases)를 지정하고 모듈의 실제 Type 이름을 사용하세요 (어떤 것의 어떤 속성인 Any).
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

- 주석을 달때, 일반 Type를 지정하기를 선호하며 그렇지 [않을 때에는 `Any`로 가정합니다](https://www.python.org/dev/peps/pep-0484/#the-any-type).

```python
def get_names(employee_ids: List[int]) -> Dict[int, Any]:
  ...
```

```python
# 두 개의 함수 모두 get_names(employee_ids: List[Any]) -> Dict[Any, Any]
def get_names(employee_ids: list) -> Dict:
  ...

def get_names(employee_ids: List) -> Dict:
  ...
```

- 파라미터의 적합한 Type이 `Any`일 때, 명시적으로 표현되며, 많은 경우에 [`TypeVar`](#s3.19.10-type-var)가 더 적합할 수 있음을 기억해야합니다.

```python
def get_names(employee_ids: List[Any]) -> Dict[Any, Text]:
  """직원의 아이디를 이름과 연결하여 반환합니다."""
```

```python
T = TypeVar('T')
def get_names(employee_ids: List[T]) -> Dict[T, Text]:
  """직원의 아이디를 이름과 연결하여 반환합니다."""
```

---

<br>

<a id="s4"></a>

## 4. 맺음말

<h3> 일관성을 유지하세요 </h3>

- 당신이 코드를 수정한다면 몇 분을 투자해서 코드를 살펴보고 스타일을 파악하세요.
- 만약 모든 산술 연산자에 공백을 넣었다면 당신도 그렇게 해야합니다. 만약 주석이 hash marks(`#`)으로 만든 박스 안에 들어있다면 당신의 주석도 그렇게 해야합니다.
- 스타일 가이드라인의 요점은 코딩에서 공통된 어투를 갖는 것입니다. 그렇게 된다면 사람들은 당신의 코딩 형식보다는 당신의 코드에 집중할 수 있습니다
- 우리는 여기서 사람들이 어휘를 알 수 있는 세계적인 코딩 스타일 규칙을 제공하지만 고유의 스타일도 중요합니다.
- 파일에 코드를 추가했을 때 이 코드가 다른 코드와 비교하여 크게 달라 보이면 코드를 읽는 사람의 입장에서는 리듬이 깨집니다. 이 부분을 주의하세요.

---
