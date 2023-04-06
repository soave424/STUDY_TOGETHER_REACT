## 2주차 강의 요약

기존에는 html로 작성한 뒤 css와 js를 연결했다면 react js에서는 html을 직접 작성하지 않는다! 대신 Javascript와 React JS를 이용하여 element를 생성한다. 바닐라 JS에서는 HTML을 먼저 만들고, 그것을 Javascript로 가져와서 HTML을 수정하도록 하였다. 하지만 React JS에서는 모든 것이 Javascript로 시작해서 element를 만들고 그 다음 HTML이 된다.id를 만들 필요도 없어 EventListener을 넣을 필요도 없다.(property로 onClick을 넣음) 이것이 ReactJS의 핵심! 인터렉티비티를 위해 만들어짐.EventListener을 반복해서 넣지 않고 property에서 event를 등록할 수 있는 것이 장점.또한 변수도 바로 넣기 때문에 간단함. 바뀐 부분만 리렌더링하기 때문에 좋음.

- React JS는 어플리케이션이 아주 인터렉티브하도록 만들어주는 라이브러리이고, (엔진)
- React-dom은 라이브러리 또는 패키지인데 React element들을 HTML body에 들 수 있도록 해준다.

#### 2주차 강의에서는 React JS로 생성하는 어려운 방법에 대해서 설명하고 있다.

- const root = document.getElementById("root");
- const span = React.createElement("span", {id : "sexy-span", style : {color : "red"}},"Hello I'm a Span");
- ReactDom.render(span,root);

#### 여러개를 넣을 때는

- const container = React.createElement("div", null, [span, btn]);
- ReactDom.render(container, root);

#### OnClick

const btn = React.createElement("button", {
onClick:() => console.log("im clicked"),},"Click me" );

const h3 = React.createElement("h3", {
onMouseEnter:()=>console.log("mouse enter"),
}, "Hello I'm a span");

#### JSX

JSX는 JavaScript를 확장한 문법이다. HTML에서 사용한 것과 유사하게 React 요소를 생성하도록 한다.그래서 개발자 입장에서는 편함. 위의 방식처럼 어려운 거 말고 이제 새로운 방식으로

const Title = <h3 id="title" onMouseEnter={()=> console.log("mouse enter")}> Hello I'm a title </h3>;

const Button = <button style={{
  backgroundColor : "tomato",
}}
onClick = {()=> console.log("im clicked")}

> Click me</button>

- 브라우저가 JSX를 이해할 수 있도록 한번 변환을 해주어야 한다. Bable은 코드를 변환해준다. 설치해주어야 한다. 설치 후 type도 text/bable도 추가해야 한다.

- 여러개를 넣을 때는 각각의 요소를 함수로 만들어서 사용한다. JSX의 규칙에 맞춰서 HTML태그처럼 넣는다.다만 대문자로 작성해야 함!  
  function Title () {
  return(
  )
  }
  const Container = (
    <div> <Title/><Button/> </div>
  )

#### render

let counter = 0;
function countUp() {
counter = counter + 1;
render();
}
function render() {
ReactDOM.render(<Container/>, root);
}
const Container = () => (

  <div>
  <h3> Total clicks : {counter} </h3>
  <button onClick = {countUp}> Click me </button>
  </div>
);
render();

#### STATE

함수를 부르지 않고도 리렌더링을 일으키는 최고의 방법

function App(){
const [counter, setCounter] = React.useState(0);  
 const onClick = () => {
modifier(counter+1 );
}
return(

  <div>
  <h3> Total clicks : {counter} </h3>
  <button onClick = {onClick}> Click me </button>
  </div>
  )
}
