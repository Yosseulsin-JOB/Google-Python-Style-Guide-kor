# Google Python Style Guide

## 번역

- Contributors : [`0113bernoyoun`](https://github.com/0113bernoyoun), [`Sotaneum`](https://github.com/Sotaneum), [`denmark111`](https://github.com/denmark111)
- Log
  - 초안 : 2019.12.10

## 3. Python Style 규칙

### 3.1 Semicolons

- 세미콜론을 이용해서 문장을 끝내거나 한 줄에 2개의 구문을 작성하지 마세요.

### 3.2 Line length

- 최대 줄 길이는 *80자* 입니다.
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

### 3.4 Indentation

- 코드를 작성할 때 *4 칸* 들여쓰기를 하세요.

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

### 3.5 Blank Lines

- 함수 선언이든 객체 선언이든 최상위 선언문과는 2개의 빈 줄을 사이에 두어야 합니다.
- 각 메소드 선언 또는 `class` 줄과 젓 번째 메소드 선언 시 그 사이에는 한 개의 빈 줄이 있어야 합니다.
- `def` 줄 이후에는 빈 줄이 없어야 합니다.
- 함수와 메소드 사이에 개발자의 판단하에 적절하게 한 개의 빈 줄을 사용하세요.

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

- 한가지 예외사항인 [형 지정이 존재할 떄](#typing-default-values) 를 제외하고 키워드 매개변수나 매개변수의 기본값을 지정하는 경우 `=` 기호 앞뒤에는 공백을 사용하지 마세요.
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

### 3.7 Shebang Line

- 대부분의 `.py` 파일은 `#!` 로 시작하지 않아도 됩니다.
- 프로그램의 메인 파일을 `#!/usr/bin/python` 과 [PEP-394](https://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0394/) 에 따른 `2` 또는 `3`을 붙여 사용하면 됩니다.

- 이 줄은 파이썬 파일을 import 할때는 무시되지만 실행 될때는 커널이 어떤 파이썬 인터프리터를 사용해야 하는지 알려줍니다.
- 따라서 직접 실행될 파일에 기록하는것이 적합합니다.

### 3.8 Comments and Docstrings

- 모듈, 함수, 메소드에 올바른 형식의 docstring과 인라인 주석을 사용하세요.  

#### 3.8.1 Docstrings

- 파이썬은 코드를 문서화 할 때 _docstring_ 을 사용합니다.
- docstring 은 패키지, 모듈, 클래스나 함수의 첫번째 선언되는 문자열입니다.
- 이 문자열은 `pydoc` 이 사용하는 `__doc__` 멤버 오브젝트에서 자동으로 추출될 수 있습니다. (여러분의 모듈에서 `pydoc` 를 실행 후 결과를 확인해보세요)  
- [PEP257](https://www.google.com/url?sa=D&q=http://www.python.org/dev/peps/pep-0257/) 에 따라 docstring 을 시작하거나 끝낼 때는 `"""` 를 사용하세요.
- docstring은 마침표, 물음표, 느낌표로 끝나는 요약줄(한 줄)로 시작하여야 하며 한 줄의 공백을 두고 내용을 담고있는 나머지 docstring 이 이어져야 합니다.
- 또한 내용을 담고있는 docstring 은 `"""` 와 같은 커서위치에서 시작하여야 합니다.

#### 3.8.2 Modules

- 모든 파일은 라이센스 보일러 플레이트를 가지고 있어야 합니다.
- 프로젝트에 알맞는 라이센스 보일러 플레이트를 선택하세요. (예를 들면, Apache 2.0, BSD, LGPL, GPL)

#### 3.8.3 Functions and Methods

- 이 섹션에서 "함수"는 메소드, 함수 또는 제너레이터를 의미합니다.  

- 아래의 조건을 만족하지 않는 이상 함수는 반드시 docstring 을 가지고 있어야 합니다.  
  - 외부에서 보이지 않음
  - 매우 짧음
  - 잘 알려져 있음

- docstring 은 직접 함수의 코드를 읽어보지 않더라도 충분히 함수를 호출하는 코드를 작성 할 수 있을만큼 정보를 제공해야 합니다.  
- docstring 은 (`"""Fetches rows from a Bigtable."""`) 처럼 *설명조* 를 사용하여야 하며 (`"""Fetch rows from a Bigtable."""`) 처럼 *명령조* 를 사용하지 않아야 합니다.  
- docstring 은 함수의 구현방식이 아닌 호출 방법과 의미를 기술해야 합니다.
- 복잡한 코드의 경우 docstring 을 사용하는 것보다 코드 한 줄마다 주석을 첨가하는 것이 더 알맞습니다.  

- 다른 기본 객체의 메소드를 오버라이드하는 메소드는 `"""See base class."""` 처럼 개발자가 작성한 docstring 에 오버라이드된 메소드가 있음을 알려주는 docstring 을 전달 할 수도 있습니다.
- 그 이유는 같은 문서를 여러곳에서 반복하는 것을 방지하기 위함입니다.  
- 하지만 오버라이딩된 메소드가 기존의 메소드와 확연하게 다른 동작방식을 가지고 있거나 세부적인 내용(e.g., 잠재적인 부작용 등)이 존재한다면 적어도 그러한 차이점들은 docstring 을 통해 기록되어야 합니다.  

- 다만 함수의 몇가지 특정 부분들은 아래처럼 별도의 특별섹션으로 기록해야 합니다.
- 각 섹션은 표제로 시작하며 콜론으로 끝맺습니다.
- 각 섹션은 표제를 제외하고 2칸 들여쓰기를 합니다.  

##### [*Args:*](#doc-function-args)

- 매개변수를 각각 이름으로 나열합니다. 각 이름에는 설명문이 따르며 콜론과 공백으로 분리됩니다.
- 만약 설명문이 너무 길어 한 줄인 80자를 초과할 경우 2칸 또는 4칸의 들여쓰기를 사용합니다.(나머지 내용과 일관되게 사용하세요)
- 만약 코드가 자료형에 대한 주석을 담고 있지 않다면 설명문은 요구되는 자료형을 포함해서 기록해야 합니다.
- 함수가 `*foo`(가변길이의 매개변수 리스트) 또는 `**bar`(임의의 키워드 매개변수)를 받는다면 `*foo` 와 `**bar`로 기록되어야 합니다.

##### [*Returns:* (제너레이터에는 *Yields:*)](#doc-function-returns)

- 반환값의 자료형과 의미를 기록합니다. 만약 함수가 None만을 반환한다면 이 섹션은 필요없습니다.
- 또한 만약 docstring이 Returns 나 Yields로 시작하거나(e.g. `"""Returns row from Bigtable as a tuple of strings."""`) 충분한 설명이 제공된다면 생략 될 수 있습니다.

##### [*Raises:*](#doc-function-raises)

- 인터페이스에 관련된 모든 예외사항을 나열합니다.  

    ```python
    def fetch_bigtable_rows(big_table, keys, other_silly_variable=None):
        """Fetches rows from a Bigtable.

        Retrieves rows pertaining to the given keys from the Table instance
        represented by big_table.  Silly things may happen if
        other_silly_variable is not None.

        Args:
            big_table: An open Bigtable Table instance.
            keys: A sequence of strings representing the key of each table row
                to fetch.
            other_silly_variable: Another optional variable, that has a much
                longer name than the other args, and which does nothing.

        Returns:
            A dict mapping keys to the corresponding table row data
            fetched. Each row is represented as a tuple of strings. For
            example:

            {'Serak': ('Rigel VII', 'Preparer'),
            'Zim': ('Irk', 'Invader'),
            'Lrrr': ('Omicron Persei 8', 'Emperor')}

            If a key from the keys argument is missing from the dictionary,
            then that row was not found in the table.

        Raises:
            IOError: An error occurred accessing the bigtable.Table object.
        """
    ```

#### 3.8.4 Classes

- 클래스는 선언 바로 아래에 해당 클래스를 설명하는 docstring 를 가지고 있어야 합니다.
- 만약 클래스가 public attributes 를 가지고 있다면 [function's `Args`](#doc-function-args) 섹션과 같은 형식을 사용해 `Attributes` 섹션을 작성해야 합니다.

```python
class SampleClass(object):
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

#### 3.8.6 Punctuation, Spelling and Grammar

- 스펠링과 문법 그리고 구두점에 주의를 기울이세요. 잘 써진 주석이 읽기도 편합니다.  

- 주석은 마치 말하는 것처럼 자연스럽게 읽을 수 있어야 하며 영문 주석의 경우 올바른 대문자와 구두점이 필요합니다.
- 대부분의 경우 조각난 문장보다 온전한 문장이 높은 가독성을 가집니다.
- 코드 끝에 붙는 짧은 주석 등의 경우 다소 형식적이지 않아도 되지만, 전체적인 일관성을 맞추어야 합니다.  

- 코드 리뷰어가 세미콜론이 사용되어야 하는데 컴마를 사용했다고 지적하는 것은 불만스러울 수 있지만 소스코드가 높은 수준의 명료성과 가독성을 가지는것은 매우 중요합니다.
- 올바른 구두점, 스펠링 그리고 문법은 이를 얻을 수 있도록 도와줍니다.

### 3.9 Classes

- 만약 어떠한 클래스가 다른 클래스를 상속받지 않는다면 명시적으로 `object` 를 상속받으세요.
- 이는 중첩 클래스에도 해당됩니다.  

- 올바른 예

    ```python
    class SampleClass(object):
        pass


    class OuterClass(object):

        class InnerClass(object):
            pass


    class ChildClass(ParentClass):
        """Explicitly inherits from another class already."""
    ```

- 부적절한 예

    ```python
    class SampleClass:
        pass


    class OuterClass:

        class InnerClass:
            pass
    ```

- `object` 를 상속받는것은 파이썬 2에서 다양한 속성들이 작동할 수 있게 해주며 파이썬 3과의 호환성 이슈에서도 보호해줍니다.
- 또한 이것은 `__new__`, `__init__`, `__delattr__`, `__getattribute__`, `__setattr__`, `__hash__`, `__repr__`, `__str__` 과 같은 기본 시멘틱을 구현하는 특수메소드들을 정의합니다.

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
    long_string = ("And this is fine if you can not accept\n" +
                    "extraneous leading spaces.")
    ```

    ```python
    long_string = ("And this too is fine if you can not accept\n"
                    "extraneous leading spaces.")
    ```

    ```python
    import textwrap

    long_string = textwrap.dedent("""\
        This is also fine, because textwrap.dedent()
        will collapse common leading spaces in each line.""")
    ```

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

- 가장 선호되는 파일관리 방식은 ["with" 구문](http://docs.python.org/reference/compound_stmts.html#the-with-statement) 입니다

    ```python
    with open("hello.txt") as hello_file:
        for line in hello_file:
            print(line)
    ```

- "with" 구문을 지원하지 않는 file-like 객체는 `contextlib.closing()`을 사용하세요.

    ```python
    import contextlib

    with contextlib.closing(urllib.urlopen("http://www.python.org/")) as front_page:
        for line in front_page:
            print(line)
    ```

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

### 3.13 import 형식

- imports는 개별적인 라인에 두어야 합니다.

  - 올바른 예

    ```python
    import os
    import sys
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

### 3.15 접근 제어

- 만약 접근제어자 함수를 무시할 경우 파이썬에서는 함수에 대해 추가적인 비용을 피하기 위해 접근제어자 함수 대신에 public 변수로 사용해야 합니다.
- 더 많은 기능이 추가된다면 `property`를 사용하여 문법을 일관적으로 유지 할 수 있습니다.

- 반면에 접근이 복잡하거나 변수의 접근에 대한 비용이 큰 경우, `get_foo()` 와 `set_foo()`와 같은 함수 호출([네이밍](#s3.16 - 네이밍) 가이드 라인을 참고하라)을 사용해야 합니다.
- 만약 전에 했던 행동이 property를 통해 접근을 허락했다면 새로운 접근제어자 함수를 property와 묶지마세요.
- 어떤 코드가 여전히 변수에 오래된 메서드를 통해 접근하려 시도한다면 반드시 눈에 보이게 부수어 복잡성의 변화를 인식하게 만들어야 합니다.

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

#### 3.16.1 피해야할 이름

- 반복자나 카운터에서의 사용을 제외한 단일글자 이름.( 단, try/except 문에서 "e"를 예외처리 식별자로 사용해도 됩니다.)
- 패키지나 모듈 이름에서의 대시(`-`).
- `__double_leading_and_trailing_underscore__` 이름(파이썬 예약어)
- 원본에 없는 추가 설명 : double leading and trailing underscore : (앞 뒤로 _가 2개씩 있는것 e.g  __name__, __init__)

#### 3.16.2 네이밍 규약

- "Internal"은 모듈의 내부 혹은, class내에서 protected, private을 의미합니다.

- 앞에 있는 (`_`)는 모듈 변수와 함수를 보호할 수 있는 기능이 있습니다.(`from module import *`는 여기 해당되지 않습니다.)
  - 앞에 있는 double underscore(`__`인데 이것을 별칭으로 "dunder"라 합니다)는 인스턴스 변수나 메서드를 해당 클래스에 대해 private으로 만들어 줍니다(name mangling 발생). 우리는 이 기능은 가독성과 테스트에 영향을 미치고 실제로 private이 아니여서 권장하지 않습니다.

- 서로 관련있는 클래스들과 top-level 함수들을 함께 모듈에 두세요.
  - 자바와는 다르게 하나의 모듈에 대해 하나의 클래스로 제한을 할 필요가 없습니다.

- CapWords(단어의 첫 글자를 대문자로 하는 방식)을 사용하지만 모듈의 이름이 \_with\_under.py 같은 경우에는 소문자로 합니다.
  - 비록 몇몇 오래된 모듈의 이름이 CapWords.py일지라도 이제는 모듈의 이름을 class이름에 따라 짓게 되면 혼란스러우므로 권장하지 않습니다. (e.g "잠깐만, -- 내가 `import StringIO`를 한거야 아니면 `from StringIO import StringIO`를 한거야 ?" 같은 상황이 발생할 수 있습니다.)

- 구성 요소가 CapWord를 사용하더라도 "test"로 시작하는 *unittest* 메서드 이름에 Undercore가 나타날 수 있습니다.
  - 한 가지 가능한 패턴은 `test<MethodUnderTest>_<state>`로, 예를 들어 `testPop_EmptyStack`같은 패턴은 괜찮습니다.
  - test 메서드에 에 이름을 붙이는 올바른 방법은 없습니다.

#### 3.16.3 파일 네이밍

- 파이썬 파일이름은 반드시 `.py`확장자를 가지고 (`-`)를 가지고 있으면 안됩니다.
- 이건 import와 유닛테스트를 할 수 있게 해줍니다.
- 만약 확장자 없이 실행 파일에 접근하려면 `exec "$0.py" "$@"` 가 들어 있는 심볼 링크나 간단한 bash wrapper를 사용하세요.

#### 3.16.4 Guido의 권고에 따른 가이드라인

|타입|Public|Internal|
|--|--|--|
|패키지|```lower_with_under```||
|모듈|```lower_with_under```|```_lower_with_under```|
|클래스|```CapWords```|```_CapWords```|
|예외|```CapWords```||
|함수|```lower_with_under()```|```_lower_with_under()```|
|글로벌/클래스 상수|```CAPS_WITH_UNDER```|```_CAPS_WITH_UNDER```|
|글로벌/클래스 변수|```lower_with_under```|```_lower_with_under```|
|인스턴스 변수|```lower_with_under```|```_lower_with_under```|
|메서드 이름|```lower_with_under()```|```_lower_with_under()``` (protected)|
|함수/메서드 매개변수|```lower_with_under```||
|지역 변수|```lower_with_under```||

- 파이썬은 이름에 double underscore `__` (줄여서 "dunder") 접두사를 사용하여 변수 등을 만드는 것을 지원하지만 권장하지 않습니다.
- 단일 underscore `_`을 사용하는 것을 권장합니다.
- 소규모 유닛테스트에 대해 읽고 쓰고 접근하기 쉽습니다.
- Lint경고는 protected member에 대해 잘못된 접근을 막아줍니다.

### 3.17 Main

- 실행 파일로 사용되도록 의도된 파일도 가져올 수 있어야 하며 단순히 import를 해도 프로그램의 main 함수의 기능을 실행하는 일이 없어야 합니다.
- 메인은 기능적으로 `main()` 함수 안에 있어야 합니다.

- 파이썬에서 `pydoc`과 유닛 테스트는 모듈을 import할 수 있어야 합니다.
- 당신의 코드에서 메인 프로그램이 모듈을 import 할 때 실행되지 않도록 메인 프로그램을 실행시키기 전에 `if __name__ == '__main__'`을 항상 확인해야 합니다.

```python
def main():
    ...

if __name__ == '__main__':
    main()
```

- top level에 있는 모든 코드는 모듈이 import될 때 실행될 것입니다.
- 파일을 `pydoc`으로 만들 때 실행하면 안되는 연산을 하거나 함수를 호출하는 것과 객체를 만드는 것을 조심하세요.

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

### 3.19 Type 주석 방법

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

#### 3.19.2 줄 바꿈

- 기존의 [들여쓰기](#indentation) 규칙을 따르세요.

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

- 반환 Type이 마지막 파라미터와 같은 줄이 아닐 때, 파라미터 줄을 다음 줄로 내리고 4칸을 띄운 다음에 다음 줄에 가로를 닫고 그 다음에 기입합니다.

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

- 단일 이름과 Type이 너무 길면 Type에 대한 [alias(별칭)](#typing-aliases)사용을 고려하세요.
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

#### 3.19.3 전방선언

- 아직 정의되지 않은 동일한 모듈의 클래스 이름을 사용해야 하는 경우(예, 클래스 선언 내에 클래스가 필요한 경우 또는 아래에 정의된 클래스를 사용하는 경우) 클래스 이름을 문자열로 사용하세요.

```python
class MyClass(object):

  def __init__(self,
               stack: List["MyClass"]) -> None:
```

#### 3.19.4 기본 값

- PEP-008에 따라 유형 주석과 기본값이 모두 있는 인수의 경우 "=" _ only" 주위에 공백을 사용하십시오.
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

#### 3.19.6 Type Aliases

- 복잡한 유형의 별칭을 선언할 수 있다. 가명의 이름은 CapWorded여야 한다. 별칭이 이 모듈에서만 사용되는 경우 \_Private여야 한다.

- 어려운 Type을 별칭으로 선언할 수 있습니다. 별칭은 CapWorded여야 합니다. 별칭이 이 모듈에서만 사용하는 경우에는 \_Private여야 합니다.

- 예를 들어 Type과 함께 모듈의 이름이 너무 긴 경우

    ```python
    _ShortName = module_with_long_name.TypeWithLongName
    ComplexMap = Mapping[Text, List[Tuple[int, int]]]
    ```

- 다른 예로는 복잡한 중첩 유형과 함수의 복수 반환 변수(튜플)가 있습니다.

#### 3.19.7 Ignoring Types

- `# type: ignore` 주석으로 Type 검사를 사용하지 않도록 설정 할 수 있습니다.

- `pytype`에는 특정 오류에 대한 비활성화 옵션이 있습니다.(lint과 유사).

    ```python
    # pytype: disable=attribute-error
    ```

#### 3.19.8 내부 변수 작성

- 내부 변수가 유추하기 어렵거나 불가능한 타입을 가지고 있는 경우, 다음과 같이 별도의 주석으로 설명할 수 있습니다.

```python
a = SomeUndecoratedFunction()  # type: Foo
```

#### 3.19.9 튜플 vs 리스트

- 한가지 타입만을 가지는 리스트와는 다르게 튜플은 반복된 싱글 타입이나 서로 다른 타입의 수를 넣을 수 있습니다.
- 서로 다른 타입의 수를 넣는 경우는 일반적으로 함수에서 타입을 반환할 때 사용됩니다.

```python
a = [1, 2, 3]  # type: List[int]
b = (1, 2, 3)  # type: Tuple[int, ...]
c = (1, "2", 3.5)  # type: Tuple[int, Text, float]
```

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

- 함수의 모든 string Type이 항상 동일한 경우(예, 반환 Type이 위의 코드에서 인자 Type과 동일한 경우) [AnyStr](#typing-type-var)를 사용하세요.

- 이렇게 사용하면 Python 3에 코드를 포팅하는 과정이 간단해집니다.

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

#### 3.19.14 Circular 종속

- Circular 종속의 원인은 심오한 문제(code smells)를 작성하는 것입니다.
  - 그런 코드는 리팩터링에 적합합니다.
  - 하지만 기술적으로 Circular 종속성을 유지하는 것은 가능하지만, [빌드 시스템(build system)](#typing-build-deps)이 다른 모듈에 의존해야 하기 때문에 그렇게 하도록 허락하지 않을 것입니다.

- Circular 종속을 생성하는 모듈을 `Any`로 교체합니다.
  - 의미있는 이름으로 [alias](#typing-aliases)를 지정하고 모듈의 실제 Type 이름을 사용하세요 (어떤 것의 어떤 속성인 Any).
  - Alias의 정의는 마지막으로 import와 한 줄로 분리합니다.

```python
from typing import Any

some_mod = Any  # some_mod.py에서 이 모듈을 import 합니다.
...

def my_method(self, var: some_mod.SomeType) -> None:
  ...
```

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

- 파라미터의 적합한 Type이 `Any`일 때, 명시적으로 표현되며, 많은 경우에 [`TypeVar`](#typing-type-var)가 더 적합할 수 있음을 기억해야합니다.

```python
def get_names(employee_ids: List[Any]) -> Dict[Any, Text]:
  """직원의 아이디를 이름과 연결하여 반환합니다."""
```

```python
T = TypeVar('T')
def get_names(employee_ids: List[T]) -> Dict[T, Text]:
  """직원의 아이디를 이름과 연결하여 반환합니다."""
```
