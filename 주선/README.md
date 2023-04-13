<1주차>

- 불참 ㅠ

<2주차>

- TTS 웹사이트 (https://onairstudio.ai/)
- 장점 : 무료 , 좀 자연스러운 음성
- 단점 : 자막 파일 (srt, smi)등 입력이 불가능해서 시간 조정을 따로 해야함

- 프론트엔드 프레임워크, 라이브러리를 활용하면 편하므로, MUI(https://mui.com/components/)의 도움을 받아볼 계획
- 클래스123 명렬표 같은 사이트를 만들어 볼 계획

<3주차>

- props 전달할 때, {} 중괄호 써야 하는가?
- {}의 역할은 js 문법임을 안내하는 것 같다.
<!-- <Button text='hello' /> 도 가능하지만 , <Button text={"hello"} /> 도 문제 없이 작동한다.-->
- Button.propTypes = {
  text : PropTypes.string
  }
  proptype의 대문자 유의..
- \_\_.module.css 이해가 되지 않는다. 정리해보자.
- 컴포넌트 개별로 css를 적용하고 싶을 때 사용한다.
- 컴포넌트명.module.css 파일에 클래스명을 활용하여 css를 꾸민다.
- 컴포넌트에서 사용할 때 property에 className=\_\_\_.{module.css.클래스명} 이렇게 사용한다.
- 그러면 React에서 class명을 무작위로 생성해준다.
  => 이거 왜 쓰지? 장점이 뭐지? 효과가 뭐지?
