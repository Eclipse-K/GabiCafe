# 📜 Information

<center>
<img  src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=GabiCafe&fontSize=90" width="80%"/>
</center>

- 커피와 카페의 메뉴를 소개하는 목적으로 만든 사이트 [GabiCafe](https://GabiCafe.netlify.app).

## 🧰 Tech Stack

### 📖 Platforms & Languages

<center>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" width="160" height="35">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" width="160" height="35"><br>
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" width="160" height="35">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" width="160" height="35"><br>
</center>

### 🛠️ Tools

<center>
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"  height="40"><br>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"  height="40">
</center>

<center>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Eclipse-K&layout=compact" width="300" height="100">
<img src="https://github-readme-stats.vercel.app/api?username=Eclipse-K&show_icons=true" width="300" height="100">

</center>

## 🔎 상세 소개

- 제가 커피를 좋아하기도 하고 카페사이트를 만들어 보고 싶다는 생각에서 시작한 프로젝트.
  기존에 Html과 Css로만 작업했지만, 코드가 길어지고 복잡해지면서 수정작업이 번거로워지는 문제를 발견하고 React를 이용해 새롭게 구축한 사이트입니다.
  또한 카페 메뉴를 한 눈에 볼 수 있는 장점이 있고 카페에 필요한 기구들을 구매할 수도 있는 사이트로 발전해 나갈 수 있게 계속 수정 중입니다.

### 📌 `메뉴 소개`

1. Espresso
2. Latte
3. Beverage
4. blended
5. Tea
6. Smoothie

### 📌 `제품군`

- Products탭을 통해 카페에 필요한 기구들을 소개, 판매하는 페이지를 만들었습니다.

### ⌨️ `로그인`

- 홈페이지의 기본 구조에 해당된다고 판단하여 로그인 페이지도 만들었습니다.

### 🪧 `과정`

1. 네비게이션 바를 홈페이지 사이즈에서 반응형 사이즈로 가져왔을 때는 위치 조정이 어렵고 글자를 줄이니 가독성의 문제점이 있었습니다.
   -> 부트스트랩을 사용해 네비게이션 바를 대체하려고 했으나 overflow: hidden을 해제할 수 있는 방법을 찾을 수 없어 사용하지 않기로 하고 다른 방법을 찾아야 했습니다.
   -> 아이콘 모양의 오프캔버스로 변경.
   -> 아이콘을 "<span>태그"로 만들어 css로 모션 효과를 줄 수 있는 방법을 타사이트의 코드를 통해 찾아내 적용해 봤습니다.
   -> Navbar icon에서 웹페이지 사이즈 일때는 탭이 표시 되고 반응형 사이즈가 됐을 때는 icon("<span>태그로 만든")이 나타납니다.

2. 시스템 설정에 따라 테마가 바뀌는 설정을 시도해 보고 싶어 코드를 찾아봤습니다.
   ReactSwitch를 사용해 수동스위치도 추가해서 낮과 밤에 잘 작동되는지 확인도 했습니다.
   이미 색상이 따로 설정된 부분은 테마 색상이 아닌 해당 색상을 사용한다는 사실을 알 수 있었습니다.

3. 기존의 페이지에서는 사진 파일을 import형식으로 불러와서 반영했기 때문에 import가 너무 많은 비중을 차지하는 문제점이 있었습니다.
   json파일을 생성하여 파일 안에서 불러오는 방식으로 바꾸니 코드가 깔끔해지고 렌더링이 빨라지는 것을 알 수 있었습니다.

4. 초기 Html Home화면에는 화면 전체를 커버하는 이미지가 있었고 그 이미지가 슬라이딩 되는 형식의 구조를 띄게 했습니다.
   미관상 그다지 깔끔한 느낌은 받지 못하여 사이즈를 축소했습니다.
   5초마다 이미지가 자동으로 변경되게 타이머 방식을 채택했습니다.
   Home에 슬라이드 이미지에 있던 화살표 버튼은 쓸모가 없을 것 같아서 없앴습니다.
   두 가지의 액자틀을 만들어 위는 내,외부 인테리어 사진을 쓰고 아래는 디저트 메뉴의 사진을 사용하는 방식으로 바꿨습니다.
   코르크 게시판 이미지를 가져와 게시판에 꽂힌 사진 컨셉으로 바꿨습니다.
   이미지를 사용하니 코드 수정을 잦게 해야되는 문제점이 있었습니다. -> 이미지를 삭제하고 게시판 용도로 쓸 수 있는 공간을 만들고 그리드화 했습니다.

5. CSS코드가 길어지면서 수정을 위해 코드를 찾는 번거로움이 있었습니다.
   각 부분마다 따로 관리할 필요가 있는 부분은 Styled-Components로 대체했습니다.
   수정이 완료되지 않았거나 추가를 위해 CSS파일도 따로 이용하고 있습니다.

6. CafeMenu에서 각 메뉴탭으로 들어갔을 때 다시 돌아오는 버튼을 만들었습니다.
   -> 각 메뉴 페이지의 메뉴 타이틀을 클릭하면 뒤로 돌아가게 만들었습니다. 메뉴 타이틀에 마우스를 올리면 말풍선이 나타납니다.

7. Products탭의 화면 구성을 기존의 그리드 방식에서 쇼핑몰의 상품페이지와 같은 방식으로 변경했습니다.
   -> 이미지는 큰 이미지와 작은 이미지로 나뉘었습니다.
   -> 큰 이미지는 작은 이미지를 클릭했을 때 해당하는 작은 이미지로 바뀌게 했습니다.
   -> 작은 이미지는 슬라이딩 방식을 사용했습니다.

8. 메뉴의 각 항목의 페이지에 스크롤을 내릴 때 몇 번을 내려야 내려가는 문제점과 하얀 바탕이 바닥까지 닿아있는 문제점을 발견했습니다. -> 최상위의 overflow 때문에 발생된 문제점으로 높이를 조절하니 문제가 해결됐습니다.
