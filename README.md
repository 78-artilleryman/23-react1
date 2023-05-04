# 윤병현 23 - React
## 10주차 정리(23.05.04)
### 리스트와 키란 무엇인가

- 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다
---
### 여러 개의 컴포넌트 렌더링

- 예의 에이버엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 랜더링 합니다
- 다음은 numbers 배열에 들어있는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후 doubled라는 배열에 다시 넣는 코드다

```jsx
const doubled = numbers.map((number) => number*2);
```

- 다음은 리액트에서 map()함수를 사용한 예제입니다.

```jsx
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) =>
		<li>{number}</li>
);
```

```jsx
리턴된 listItems는 <ul>태그와 결합하여 렌더링 됩니다.
```
---
### 기본적인 리스트 컴포넌트

앞서 작성한 코드를 별도의 컴포넌트로 분리하면 다음과 같습니다

- 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해 줍니다

```jsx
function NumberList(props){
	const{numbers}=props;

	const list = numbers.map((neuber) =>
		<li>{number}</li>
);

return(
	<ul>{listItems}</ul>
);
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
	<NumberList numbers={numbers}/>
	document.getElementById('root')
);
```

- 이 코드를 실행하면 “리스트 아이템에 무조건 키가 있어야 한다”는 경고 문구가 나옵니다-
- 경고 문구가 나오는 이유는 각각의 아이템에 key props가 있어야 한다
---
### 리스트의 키에 대해 알아보기

- 리스트에서의 키는 “리스트에서 아이템을 구별하기 위한 고유한 문자열”입니다.
- 이 키는 리스트에서 어떤 아이템에 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.
---
### 폼이란 무엇인가

- 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.

```jsx
<form>
	<label>
			이름:
			<input type="text" name="name" />
	</label>
	<button type="submit">제출</button>
</form>
```
---
### 제어 컴포넌트

- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다.

```jsx
function NameForm(props){
	const[value, setValue] = useState('');
	
	const handleChange = (event) =>{
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		alert('입력한 이름: ' + value);
		event.preventDefault();
	}

	return(
		<form onSubmit={handleSunmit}>
			<label>
			 이름:
				<input type="text" value={value} onChage={handleChange}/>
			</label>
				<button type="submit">제출</button>
		</form>
	)
}
```
---
### textarea 태그

- HTML에서는 textarea의 children으로 텍스트가 들어가는 형태입니다

```jsx
<textarea>
 hello world
</textarea>
```

- 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시합니다.

```jsx
function NameForm(props){
	const[value, setValue] = useState('요청사항을 입력하세요');
	
	const handleChange = (event) =>{
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		alert('입력한 요청사항: ' + value);
		event.preventDefault();
	}

	return(
		<form onSubmit={handleSunmit}>
			<label>
				요청사항:
				<textarea value={value} onChage={handleChange}/>
			</label>
				<button type="submit">제출</button>
		</form>
	)
}
```
---
### select 태그

- select 태그도 textarea와 동일합니다

```jsx
<select>
		<option value="apple">사과</option>
		<option value="banana">바나나</option>
		<option selected value="grape">포도</option>
		<option value="watermelon">수박</option>
</select>
```

```jsx
function FruitSelect(props){
	const[value, setValue] = useState('grape');
	
	const handleChange = (event) =>{
		setValue(event.target.value);
	}

	const handleSubmit = (event) => {
		alert('선택한 과일: ' + value);
		event.preventDefault();
	}

	return(
		<form onSubmit={handleSubmit}>
			<label>
				과일을 선택하세요:
				<select value={value} onChange={handleChange}>
					<option value="apple">사과</option>
					<option value="banana">바나나</option>
					<option selected value="grape">포도</option>
					<option value="watermelon">수박</option>
				</select>
			</label>
				<button type="submit">제출</button>
		</form>
	)
}
```
---
### File input 태그

- File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.

```jsx
<input type="file">
```
---
### input Null Value

- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
- 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값에 undefined 또는 null을 넣어 주면 됩니다

```jsx
ReactDOM.render(<input value="hi"/>, rootNode);

setTimeout(function(){
	ReactDOM.render(<input value={null}/>, rootNode);
}, 1000);
```
---
### Shared state

- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것
---
## 9주차 정리(23.04.27)
### 이벤트 처리하기

- DOM에서 클릭 이벤트를 처리하는 예제 코드

```jsx
<button onclick="activate()">
	Actvate
</button>
```

- React에서 클릭 이벤트 처리하는 예제 코드

```jsx
<button onClick={activate}>
	Actvate
</button>
```

- 차이점
  1. 이벤트 이름이 onclick에서 onClick으로 변경(Camel case)
  2. 전달하려는 함수는 문자열에서 함수 그래도 전달
- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 “이벤트 핸들러 (Event Handler)” 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 “이벤트 리스너(Event Listener)” 라고 부르기도 합니다.
***
### Arguments 전달하기

- 함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument) 혹은 인자라고 부릅니다.
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다

```jsx
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

- 위의 코드는 모두 동일한 역학을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했습니다
- event라는 매개변수는 리액트의 이벤트 객체를 의미합니다
- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 됩니다
- 첫 번째 코드는 명사적으로  event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후에 두번째 매개변수로 event가 자동 전달 됩니다(이 방법은 클래스형에서 사용하는 방법입니다)
***
### 조건부 렌더링이란?

- 여기서 조건이란 우리가 알고 있는 조건문의 조건입니다

```jsx
function UserGreeting(props){
	return <h1>다시 오셨군요</h1>
}
function GuestGreeting(props){
	return <h1>회원가입을 해주세요</h1>
}
```

```jsx
function Greeting(props){
 const isLoggedIn = props.isLoggedIn;
if(isLoggedIn){
	return <UserGreeting/>
}
	return <GuestGreeting/>
}
```

- props로 전달 받은 isLoggedIn이 true면 <UserGreeting/>을 false면 <GuestGreeting/>을 return 합니다
- 이와 같은 렌더링을 조건부 렌더링 이라고 합니다.
***
### 엘리먼트 변수

- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.
- state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있습니다.

```jsx
function LoginButton(props) { 
return (

	<button onClick={props.onClick}>
		로그인
	</button>

);
}

function LogoutButton (props) { 
return (
	<button onClick={props.onClick}>
		로그아웃
	</button>
	);
}
```
***
### 인라인 조건

- 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.

1. 인라인 if
- if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다
- &&는 and연산자로 모든 조건이 참일때만 참이 됩니다.
- 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없음(단축 평가)

```jsx
true && expression -> expression
false && expression -> false
```

1. 인라인 if-else
- 삼항 연산자를 사용합니다
- 문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다

```jsx
function UserStatus (props) { 
	return (
		<div>
			이사용자는현재<b>{props.islogedin ?' 로그인' : ' 로그인하지은'}</b> 상태입니다. 
		</div>
	)
}
```
***
### 컴포넌트 렌더링 막기

- 리엑트에서는 null을 리턴하면 렌더링이 되지 않음
- 특정 컴포넌트를 렌더링하고 싶지 않을 때는 null을 리턴하면 된다
## 8주차
- 중간고사
## 7주차 정리 (23.4.13)
### 훅

- 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것
- 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트합니다.
- Hook이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수를 의미합니다.
---
### useState

- state를 사용하기 위한 훅
- 함수 컴포넌트에서는 기본적으로 state라는 것을 제공하지 않음
- 클래스 컴포넌트처럼 state를 사용하고 싶으면 useState()훅을 사용해야 함
    
    사용법
    
    ```jsx
    const [변수명, set함수명] = useState(초깃값);
    ```
    
---
### useEffect

- 사이드 이펙트를 수행하기 위한 훅
- 사이드 이펙트란 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업
- useEffect() 훅만으로 클래스 컴포넌트의 생명주기 함수들과 동일한 기능을 수행할 수 있음
    
    사용법
    
    ```jsx
    useEffect(이펙트 함수, 의존성 배열);
    ```
    
- 의존성 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨
- 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단  한 번씩만 실행됨
- 의존성 배열 생략 시 컴포넌트가 업데이트될 때마다 호출됨
- 선언된 컴포넌트의 props와 state에 접근할 수 있음
- useEffect()에서 리턴하는 함수는 컴포넌트 마운트가 해제될 때 호출됨
---
## useMemo

- Memoized value를 리턴하는 훅
- 연상량이 높은 작업이 매번  렌더링될 때마다 반복되는 것을 피하기 위해 사용
- 렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행돼서는 안될 작업을 useMemo()에 넣으면 안 됨
    
    사용법
    
    ```jsxㄴ
    const memoizedValue = useMemo(값 생성 함수, 의존성 배열)
    ```
    
- 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 값 생성 함수를 호출하여 결과값을 반환함
- 그렇지 않은 경우에는 기존 함수의 결과값을 그대로 반환함
- 의존성 배열을 넣지 않을 경우 렌더링이 일어날 때마다 매번 값 생성 함수가 실행되므로 의미가 없음
---
### useCallback

- useMemo() 훅과 유사하지만 값이 아닌 함수를 반환하다는 점이 다름
- 컴포넌트 내에 함수를 정의하면 매번 렌더링이 일어날 때마다 함수가 새로 정의되므로 useCallback() 훅을 사용하여 불필요한 함수 재정의 작업을 없애는 것
    
    사용법
    
    ```jsx
    const memoizedCallback = useCallback(콜백 함수, 의존성 배열);
    ```
    
- 의존성 배열에 들어있는 변수가 변했을 경우에만 콜백 함수를 다시 정의해서 리턴함
---
### useRef

- 레퍼런스를 사용하기 위한 훅
- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
- 매번 렌더링될 때마다 항상 같은 레퍼런스 객체를 반환
    
    사용법
    
    ```jsx
    const refContainer = useRef(초깃값);
    ```
    
---
## 훅의 규칙

무조건 최상위 레벨에서만 호출해야 함

- 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됨
- 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출되어야 함

리액트 함수 컴포넌트에서만 훅을 호출해야 함

- 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출할 수 있음
---
### 커스텀 훅

- 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순한 자바스크립트 함수
- 파라미터로 무엇을 받을지, 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있음
- 중복되는 로직을 커스텀 훅으로 추출하여 재사용성을 높이기
- 이름이 use로 시작하지 않으면 특정 함수의 내부에서 훅을 호출하는지를 알 수 없기 때문에  훅의 규칙 위반 여부를 자동으로 확인할 수 없음

## 6주차 정리 (23.4.6)
### 컴포넌트 추출

- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포너느를 만드는 것
- 기능 단위로 구분하는 것이 좋고, 나중에 곧바로 재사용이 가능한 형태로 추출하는 것이 좋음
***
### state

- state는 리엑트 컴포넌트의 상태를 의미합니다
- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다
- 정확히는 컴포넌트의 변경 가능한 데이터를 의미합니다
- state가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.
***
### state 특징

- 리엑트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐 입니다.

```jsx
class LikeButton extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			liked: false
		};
	}

...
}
```

이 생성자 코드를  보면 this.state라는 부분이 나오는데 이 부분이 바로 현재 컴포넌트의 state를 정의하는 부분입니다.

클래스 컴포넌트의 경우 state를 생성자에서 정의합니다. 함수 컴포넌트는 state를 uesState()라는 훅을 사용해서 정의하게 됩니다.

```jsx
// state를 직접 수정 (잘못된 사용법)
this.state = {
	name: 'Inje'
};

// setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
	name: 'Inge'
});
```

리액트에서의 state는 컴포넌트의 랜더링과 관련 있기 때문에 마음대로 수정하게 되면 개발자가 의도한 대로 작동하지 않을 가능성이 있습니다. 그래서 state를 변경하고자 할 때에는 꼭 setState()라는 함수를 사용해야 합니다.
***
### component VS element VS intance

element는 재료에 해당하고, component를 빵 틀, intance는 재료를 방 틀에 넣고 만든 빵으로 비유를 하셨는데 element라는 재료가 달라지면 여러가지에 intance 빵이 나올 수 있다는 말이다
***
### 생명주기

- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것입니다.
- constructor가 실행 되면서 컴포넌트가 생성됩니다.
- 생성 직후 conponentDidMount()함수가 호출됩니다.
- 컴포넌트가 소멸하기 전까지 여러 번 렌더링 합니다.
- 렌더링은 props, setState(), foreUpdate()에 의해 상태가 변경되면 이루어집니다.
- 그리고 렌더링이 끝나면 conponentDinUpdate() 함수가 호출됩니다.
- 마지막으로 컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됩니다.
***
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



