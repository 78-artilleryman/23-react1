# 윤병현 23 - React
## 5주차 정리 (23.3.30)  
### 엘리먼트 정의

Element라는영단어는요소, 성분이라는뜻을갖고있습니다. 어떤물체를구성하는 영어로엘리먼트라고부릅니다. 마찬가지로리액트의엘리먼트는리액트앱을구성하는 를의미합니다.

Elements are the smallest  building blocks of React apps.

위의문장을번역하면엘리먼트는리액트앱의가장작은빌딩블록들이라는 의미가 됩니다.
***
### 엘리먼트 생김새

```jsx
const element = <h1>hello</h1>;
```

 코드가 실행될 때 , 대입연산자의 오른쪽 부분은 리스 createElement()함수를 사용하여 엘리먼트를 생성하게됩니다. 결국 이렇게 생성된 것이 바로 리액트 엘리먼트가 되는 것입니다. 

```jsx
function Button(props) { 
	return (
		<button className={' bg-${props.color} '}> 
			<b>
				{props.children} 
			</b>
		</button> 
	)
}

function ConfirmDialog (props) { return (
‹div>
	<p>내용을확인하셨으면확인버튼을눌러주세요. </p>
	<Button color='green'>확인</Button> 
</div>
)
}
```

코드에는Button 컴포넌트와ConfirmDialog 컴포넌트가있으며, ConfirmDialc 컴포넌트가 Button 컴포넌트를포함하고 있습니다. 여기에서 ConfirmDialog 컴포넌트의 엘리먼트는 어떤모습이될까요? 아마도 아래와 같은 형태가될 것입니다.

```jsx
{
	type: 'div', 
	porops:{
	children:[
		{
			type : 'p':
			props: {
				children : '내용을 확인했으면 확인을 눌러주세요'
			}
		},
		{
			type : 'Buttton'
			props :{
					color : 'green'
					children : '확인'
				}
			}
		]
	}
}
```

첫번째 children은 type이 HTML 태그인 p태그이기 때문에 곧바로 렌더링이 될 수 있는 상태입니다. 하지만두번째 children의 type은 HTML 태그가 아니라 리액트 컴포넌트 Button 입 니 다 . 이경우에 리액트는 But ton 컴포넌트의 엘리먼트를 생성해서 합치게 됩니다.
최종적으로는 아래와 같은 형태가 됩니다.

```jsx
{
	type: 'div', 
	porops:{
	children:[
		{
			type: 'p':
			props: {
				children: '내용을 확인했으면 확인을 눌러주세요'
			}
		},
		{
			type: 'buttton'
			props:{
					className: 'bg-green',
					children:{
							type: 'b',
							props: {
								children: '확인'
						}
					}
				}
			}
		]
	}
}
```
***
### 엘리먼트 특징

엘리먼트는 불변성(immutable)이라는  변하지 않는 성질을 가지고 있습니다

- 엘리먼트 생성 후에는 children이나 attributes를 바꿀 수 없다.

엘리먼트는 다양한 모습으로 존재할 수 있지만 한 번 생성된 다음에느 변경이 불가능합니다.

그래서 화면에 변경된 엘리먼트들을 보여주기 위해서는 새로운 엘리먼트를 만들어 기존 엘리먼트와 바꿔치기하는 방법이 있다.
***
### 엘리먼트 렌더링

리액트 엘리먼트를 렌더링하기 위해서는 아래와 같은 코드를 사용합니다.

```jsx
const element = <h1>안녕, 리액트</h1>;
ReacDOM.render(element, document.getElementById('root'));
```
*** 
### 컴포넌트

컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다

컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있다

컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서는 유사합니다

다만 입력과 출력은 입력은 props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
***
#### props의 개념

props는 (property: 속성, 특성)의 준말입니다

컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됩니다.

props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
***
### props의 특징

읽기 전용입니다 변경할 수 없다는 의미 입니다.

속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

pure함수는 인자로 받는 정보가 함수 내부에서도 변하지 않는 함수입니다

impure함수는 인자로 받는 정보가 함수 내부에서 변하는 함수입니다.
***
### 컴포넌트 종류

리액트 초기버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다
이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트르 주로 사용합니다
예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문이다  
### 함수형 컴포넌트

```jsx
function Welcome(props){
	return <h1>안녕, {props.name}</h1>
}
```

### 클래스형 컴포넌트

```jsx
class Welcome extends React.Component{
	render(){
		return <h1>안녕, {this.props.name}</h1>;
	}
}
```
***
### 컴포넌트 이름
컴포넌트의 이름은 항상 대문자로 시작해야된다.
## 4주차 정리 (23.3.23)

### jsx 정의

jsx는 자바스트립트 확장 문법이며  javascript와 xml/html을 합친 것입니다. 

```jsx
// jsx 사용 예시
const element = <h1>hello world</h1>
```
***
### jsx를 사용하는 이유

```jsx
//순수 자바스크립트 코드
class Hello extents React.Component{
render(){
	return React.createElement('div',null,`hello${this.props.toWhat}`);
	}
}

ReactDOM.render(
	React.createElement(hello, {toWhat: 'wolrd' }, null),
	document.getElementById('root)
);
```

```jsx
//
const element =(
	<h1 className="greeting">
			hello, world!
	</h1>
)

const element = React.createElement(
	'h1',
	{className: 'greeting' },
	'hello, world
)
```

위 두개 코드는 JSX를 사용한 코드와 사용하지 않은 코드이며, 모두 동일한 역할을 합니다. JSX를 사용한 코드도 내부적으로 createElement() 함수를 사용하도록 변환되기 때문입니다.

결과는 아래와 같이 객체가 나옵니다

```jsx
const element ={
	type: 'h1',
	props: {
		className: 'greeting',
		children: 'hello, world1'
	}
}
```

리엑트는 이런식으로 JSX 코드를 모두 createElment() 함수를 사용하는 코드로 변환합니다 그렇기 때문에 리엑트에서 JSX를 사용하는 것은 필수는 아닙니다. 왜냐하면 createElment() 함수를 사용해서 개발하면 되기 때문이다

다만 JSX를 사용했을 때 코드가 더욱 간결해지고 생산성과 가독성이 올라가기 때문에 사용하는 것을 권장한다.
***
### jsx 장점

코드가 간결해 집니다

가독성이 향상 됩니다

injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다.
***
### jsx 사용방법

모든 자바스크립트 문법을 지원합니다

자바스트립트 문법에 xml, html을 섞어서 사용한다

```jsx
const name = '소플';
const element = <h1>안녕, {name}</h1>;

ReactDOM.render(
	element,
	document.getElementById('root')
);
```

만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다

```jsx
fuction formatName(user){
	return user.firstName + ' ' + user.lastName; 

const user ={
	firstName: 'Inge',
	lastName: 'Lee'
};

const element = (
	<h1>
		hello,{formatUser(user)}
	</h1>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
```
***
## 3주차 정리 (23.3.16)

### 윈도우 패키지 관리자

[https://chocolatey.org/](https://chocolatey.org/)

### node js 설치

노드 js를 설치하면 npm npx가 같이 깔린다

```bash
$ npm -v
$ npx -v
```

위와 같은 명령어로 잘 깔렸는지와 버젼 정보를 알 수 있다.

---

### 리엑트 정의

사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리, 랜더링 툴

리엑트를 쉽게 쓰기 위해 next란 프레임워크가 있다.

복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트입니다.

---

### 리엑트 장점

1. 빠른 업데이트와 렌더링 속도
- 이것을 가능하게 해주는 것이 Virtual Dom
- dom이란 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스이다
- DOM은 동기식, Virtual Dom은 비동기식 방법으로 랜더링 함

2. 컴포넌트 기반 구조
- 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
- 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
- 리액트로 개발을 하다 보면 레고 블록을 조립하는 것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 됩니다

3. 재사용성
- 반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다
- 유지보수 용이
- 재사용이 가능 하려면 해당 모듈의 의존성이 없어야함

4. 든든한 지원군
- 메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전하는 중

5. 모바일 앱 개발기능

- 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있음

---

### 리액트 단점

1. 방대한 학습량
2. 높은 상태 관리 복잡도
- state, component life cycle 등의 개념이 있지만 그리 어렵지 않음

---

### 웹에서 동기식, 비동기식 차이점

1. ### 동기방식

웹서버에 클라이언트로부터 요청이 들어왔을때 스레드풀에서 스레드를 꺼내거나 프로세스를 복제하는 방식으로

요청이나 연결당 스레드 혹은 프로세스를 할당하여 처리하는 방법을 말한다.

- ### 동기방식의 장점

서버의 사양이 넉넉해서 많은 스레드를 감당해낼수 있는 경우 성능이 좋다

요청의 갯수가 적고 요청의 크기가 큰 경우 동기방식을 이용하는게 좋다.

- ### 동기방식의 단점

입출력 요청이 있을때 입출력처리가 끝날때까지 스레드가 메모리버퍼에 데이터를 차지하기 때문에 입출력요청이 처리되는 동안 메모리가 낭비되는 상황이 생길 수 있다.

요청의 갯수가 많아지면 많아질수록 스레드를 생성하므로 많은 요청이 들어오는 경우 입출력요청을 기다리는 것 만으로 서버메모리를 점유하기 때문에 전체적인 성능저하의 원인이 될 수 있다.

요청의 갯수만큼 쓰레드를 생성하기에 쓰레드가 너무 많이 생성되고 입출력을 결과를 기다리는 것 만으로 메모리를 잡아먹기에 비효율적이다  
2. 비동기 방식

요청을 받는 스레드와 요청에 대해 처리하는 스레드를 따로 두는 방식이다.

요청을 받는 스레드에서는 요청을 blocking없이 지속적으로 받으면서 입출력이 필요한 요청은 요청을 처리하는 스레드로 따로 보내놓고 입출력 처리가 끝났을때 결과를 따로 통지받아 클라이언트에게 리턴한다.

2 - 1 비동기 방식의 장점

- 요청에 따라 스레드를 새로 생성하는 것이 아니기에 동기방식에 비해서 메모리 점유율이 낮다
- 입출력 작업이 이루어지는 동안 메모리를 점유하지 않는다.
- 이렇게 처리 할 경우 입출력 요청으로 인해서 끊김 없이 계속해서 요청을 받을 수 있다.

2 - 2 비동기 방식의 단점

- 요청을 처리하는데 시간이 오래 걸린다면 적합하지 않다
- 작업이 크기가 커서 cpu를 많이 잡아 먹는 경우 다수의 요청을 처리하기에 적합하지 않다.
---
### 리액트 설치 방법

https://nodejs.org/en/

접속하여 nodejs를 깔아준다.

터미널을 열어 npm이 잘 깔렸는지 확인한다.

```bash
$ npm -v
```

리액트를 설치해줄 위치를 cd 명렁어를 통해 이동해준다. 그리고 아래와 같은 명령어로 리액트를 설치 해준다.

파일의 경로를 모르겠으면 맥같은 경우는 폴더를 터미널 안에 끌어댕기면 자동으로 파일 경로가 입력된다.

```bash
$ cd 파일경로
$ create-react-app .
```

리액트가 잘 깔렸으면 실행을 시킬 수가 있는데 이때 쓰는 명령어는 밑에와 같은 명령어다

```bash
$ npm run start
```
***
## 2주차 정리
- 깃허브 계정 생성
- 깃허브 & vscode 연동 
- git commit & push 
- gitignore
- Repositories 클론
- JSON
- js
---
깃허브와 vscode를 연결 시키기 위해서는 일단 초기 설정을 해줘야한다.  

## 사용자 정보, commit을 위한 정보 등록
``` bash
  $ git config --global user.name 'name'
  $ git config --global user.name 'github Email'
```
github에 push를 하기전애 사용자 정보를 먼저 등록을 해줘야한다.  
위에 명령어로 이름과 이메일을 설정할 수 있고 
``` bash
    $ git config — global —list 
```
명령어를 사용해 이름, 이메일을 뭘로 등록을 했는지 볼 수 있다.  
이후 publish 버튼을 누르면 깃허브 로그인을 할 수가 있습니다.
***
## commit 
``` bash
    $ git init
```
현재 프로젝트에서 변경사항을 추적을 해주는 명령어로 원하는 파일이 스테이지에 올릴 수 있도록  
하는 밑작업이다.

``` bash
    $ git add {파일명}
    $ git add .
```
변경사항을 추적할 파일을 지정해서 스테이지라은 공간으로 올려주는 명령어인데 add 뒤에 .을  
붙여주면 모든 파일의 변경사항을 추적하여 스테이지로 올려준다.

``` bash
    $ git commit -m '원하는 메세지'
```
커밋을 할 때 쓰는 명령어로 뒤에 -m 옵션을 붙여주면 원하는 메세지와 함께 커밋이 실행된다.  
메세지같은 경우에는 50byte(약 한글 25자)입니다.

``` bash
    $ git remote add origin {깃허브 Repositories 주소}
```
로컬저장소와 원격저장소를 연결시켜줘야하는데 위에 명령을 통해 연결을 시켜줄 수 있다.

``` bash
    $ git push origin master
```
오리진이란 별칭의 원격 저장소로 master 브랜치에 버전 내역을 전송해주는 명령어입니다.
이런식으로 깃허브에 commit과 push 작업을 해주면 된다.
***
## .gitignore
git은 변경점을 추적을 추적하는데, 특정파일들을 무시(ignere)하여 추적하지 않게 할 수 있다.

### .gitignore 생성
.gitignore 파일을 프로젝트 최상위 루트에 생성한 후  
그 안에 버전관리에 포함하지 않을 파일을 패턴에 맞게 작성해 준다.
- 표준 Glob 패턴을 사용한다.
- 아무것도 없는 라인이나, "#"으로 시작하는 라인은 무시한다.
- /로 시작하면 하위 디렉토리에 적용되지 않은다.
- 디렉토리는 /를 끝에 사용하는 것으로 표현한다.
- !로 시작하는 패턴의 파일을 무시하지 않는다.

***
## clone 생성
``` bash
    $ git clone {깃허브 Repositories 주소}
```
위와 같은 명령어를 입력해주면 깃허브에 올라와 있는 Repositories에 클론 파일을 만들 수 있다.
***
## JSON
자바스크립트에서 오브젝트를 선언하는 방법 KEY 값과 KEY VALUE있는 스타일의 자료형을 가장 많이 사용하고 있습니다.

***
## js 특이한 문법
``` javascript
let a = 1 //정수
let b = '1' //캐릭터

a == b  //TRUE
a === b //FALSE

consol.log
```
단순히 ==를 쓰면 변수가 가지고 있는 내용으로만 비교를 하고, === 비교 연산자를 쓰면 자료형까지 판별한다.   
consol.log는 개발단계에서 확인용으로 자주 사용한다.



