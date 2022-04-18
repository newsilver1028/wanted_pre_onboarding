# wanted_pre_onboarding

`styled-components`

## Toggle

![화면 기록 2022-04-18 오전 11 49 59](https://user-images.githubusercontent.com/79626675/163746817-a4db5d87-67c4-406d-bec4-c031f2a6a257.gif)

### 🔥 Progress

- 라벨로 토글을 스타일링하고 체크박스와 연결 후 진짜 체크박스는 숨겼다.
- 토글 state를 true와 false로 간단하게 설정할 수 있었다.

### 🚨 Error

체크박스에 checked 값을 state로 주었더니

```
Warning: You provided a `checked` prop to a form field without an `onChange` handler.
This will render a read-only field. If the field should be mutable use `defaultChecked`.
Otherwise, set either `onChange` or `readOnly`.
```

onClick 핸들러와 checked 속성을 동시에 사용하면 안된다는 오류가 발생했다.
checkbox에 read-only 속성을 주어 해결했다.

## Tab

![화면 기록 2022-04-18 오후 12 02 42](https://user-images.githubusercontent.com/79626675/163747932-7aa91296-1a7e-4ff7-9859-7d233891e7be.gif)

### 🔥 Progress

- 전체 너비를 prop으로 받고 탭 아이템의 length로 나눠 아이템의 개수가 바뀌어도 한 아이템 당 width를 일정하게 렌더링 할 수 있게 했다.
- 아이템을 클릭할 때 **(현재 아이템의 index) - (이전에 클릭한 아이템의 index) \* 한 아이템 당 width** 로 방향과 거리를 계산해 tranformX에 prop으로 전달했다.

### 🚨 Error

탭 아이템 객체를 map으로 렌더링하며 index 파라미터를 `listKey` **prop으로 전달했을 때** `undefined`로 전달되었다.
![화면 기록 2022-04-14 오후 7 37 24](https://user-images.githubusercontent.com/79626675/163750739-89d5517e-cd90-46fb-abc6-10a63ba9985d.gif)
(onClick 이벤트의 target에 listKey prop이 없다)
data-set attribute를 사용하여 해결하였다.

### 🚀 needs to be improved

아이템의 개수는 변경되어도 컴포넌트의 재사용성에 문제가 없으나, 텍스트 길이가 width를 넘어가면 잘린다.

## Slider

![화면 기록 2022-04-18 오후 12 52 23](https://user-images.githubusercontent.com/79626675/163751911-be3b3765-99f3-4aa8-a4b7-b193c494ba6c.gif)

### 🔥 Progress

- slider의 `event.target.value`를 state로 주고 slider의 `onChange` 와 `onClick` 이벤트로 변경할 수 있게 했다.
- section을 나타내는 원형 div에 `event.target.value`를 prop으로 받아 div의 value와 크기를 비교하여 색상이 변경되게 했다.
- 기본 슬라이더를 숨기고 전체 슬라이더 바와 progress를 나타내는 바를 배치하였다.
- section div와 하단 버튼을 `display: flex; justify-content: space-between;` 스타일 속성으로 화면 크기가 변경되어도 픽셀이 맞을 수 있게 배치했다.
  ![화면 기록 2022-04-18 오후 1 06 14](https://user-images.githubusercontent.com/79626675/163752939-5e11dc0f-d018-43d6-a3c9-3b44fe7bf877.gif)

## Input

![화면 기록 2022-04-18 오후 1 19 00](https://user-images.githubusercontent.com/79626675/163753882-2f6f7f48-5a4d-4de7-b4e6-f801949211ad.gif)

### 🔥 Progress
