# wanted_pre_onboarding

- 컴포넌트에 렌더링할 아이템은 prop으로 받아 컴포넌트의 재사용성을 높였다.
- 아이템의 개수 혹은 텍스트 길이의 변동성이 높은 Toggle과 Tab은 width를 prop으로 받아 변경이 용이하게 했다.
- `styled-components` 사용.
- `font awesome icon` 사용.

## Toggle

![화면 기록 2022-04-18 오전 11 49 59](https://user-images.githubusercontent.com/79626675/163746817-a4db5d87-67c4-406d-bec4-c031f2a6a257.gif)

### 🔥 Progress

- state
  - `isChecked` : 토글 클릭 시 true or false로 변경.
- 라벨로 토글을 스타일링하고 체크박스와 연결 후 진짜 체크박스는 숨겼다.

### 🚨 Error

체크박스에 checked 값을 state로 주었더니

```
Warning: You provided a `checked` prop to a form field without an `onChange` handler.
This will render a read-only field. If the field should be mutable use `defaultChecked`.
Otherwise, set either `onChange` or `readOnly`.
```

onClick 핸들러와 checked 속성을 동시에 사용하면 안된다는 오류가 발생했다.
checkbox에 `read-only` 속성을 주어 해결했다.

## Tab

![화면 기록 2022-04-18 오후 12 02 42](https://user-images.githubusercontent.com/79626675/163747932-7aa91296-1a7e-4ff7-9859-7d233891e7be.gif)

### 🔥 Progress

- state

  ```
  selectedTab : {
    currentId : 현재 클릭한 탭 아이템
    currentIndex : 현재 클릭한 탭 인덱스
    distance : 탭의 underline이 이동할 방향과 거리
  }
  ```

- 아이템을 클릭할 때 **(현재 아이템의 index) - (이전에 클릭한 아이템의 index) \* 한 아이템 당 width** 로 방향과 거리를 계산해 tranformX에 prop으로 전달했다.
- 전체 너비를 prop으로 받고 탭 아이템의 length로 나눠 아이템의 개수가 바뀌어도 한 아이템 당 width를 일정하게 렌더링 할 수 있게 했다.

### 🚨 Error

탭 아이템 객체를 map으로 렌더링하며 index 파라미터를 `listKey` **prop으로 전달했을 때** `undefined`로 전달되었다.

![화면 기록 2022-04-14 오후 7 37 24](https://user-images.githubusercontent.com/79626675/163750739-89d5517e-cd90-46fb-abc6-10a63ba9985d.gif)

`<li>` 태그에서 listKey 속성이 유효한 것이 아니기 때문에 undefined로 전달되었다.  
사용자에게 보여질 필요가 없는 값이기 때문에 data-set attribute를 사용하여 해결하였다.

### 🚀 needs to be improved

아이템의 개수는 변경되어도 컴포넌트의 재사용성에 문제가 없으나, 텍스트 길이가 width를 넘어가면 잘린다.

## Slider

![화면 기록 2022-04-18 오후 12 52 23](https://user-images.githubusercontent.com/79626675/163751911-be3b3765-99f3-4aa8-a4b7-b193c494ba6c.gif)

### 🔥 Progress

- state
  - `value` : slider의 `event.target.value`. `onChange` 와 `onClick` 이벤트로 변경할 수 있게 했다.
- section을 나타내는 원형 div에 `event.target.value`를 prop으로 받아 div의 value와 크기를 비교하여 색상이 변경되게 했다.
- 기본 슬라이더를 숨기고 전체 슬라이더 바와 progress를 나타내는 바를 배치하였다.
- section div와 하단 버튼을 `display: flex; justify-content: space-between;` 스타일 속성으로 화면 크기가 변경되어도 픽셀이 맞을 수 있게 배치했다.

![화면 기록 2022-04-18 오후 1 06 14](https://user-images.githubusercontent.com/79626675/163752939-5e11dc0f-d018-43d6-a3c9-3b44fe7bf877.gif)

- 기본 슬라이더의 디자인만 숨기고 bar와 thumb를 커스텀 하는 것이 까다로웠다.

## Input

![화면 기록 2022-04-18 오후 1 19 00](https://user-images.githubusercontent.com/79626675/163753882-2f6f7f48-5a4d-4de7-b4e6-f801949211ad.gif)

### 🔥 Progress

- state
  - `isVisible` : InputPassword 컴포넌트에서 아이콘을 클릭하였을 때 true of false로 변경. true 일 때 `input type="text"`, false 일 때 `input type="text"`로 비밀번호 표시
  - `isEmailFormatted` : 정규식으로 이메일 형식 여부를 판단하여 true of false로 변경.

## Dropdown

![화면 기록 2022-04-18 오후 2 20 07](https://user-images.githubusercontent.com/79626675/163758852-512598f3-c69e-4958-9cdc-5ba55c3ceafb.gif)

### 🔥 Progress

- **state**
  - value : `input type="text"`의 `event.target.value`. 입력 시 `filter`로 검색결과를 렌더링한다. 메뉴를 선택한 후 초기화.
  - selected : 드롭다운 메뉴 아이템을 클릭 시 변경.
  - toggle : true or false로 드롭다운 클릭 시 선택 메뉴 렌더링여부를 결정.
- html의 select 태그는 option에 input 태그를 children으로 받지 못하고, 제약이 많기 때문에 사용 불가능했다.
- 기본 값을 검색여부에 상관없이 렌더링 하는 것이 까다로웠다.
