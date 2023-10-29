# 📜 Information

<center>
<img  src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=GabiCafe&fontSize=90" width="80%"/>
</center>

- 커피와 카페의 메뉴를 소개하는 목적으로 만든 사이트 [GabiCafe](https://GabiCafe.netlify.app).

## 🧰 Tech Stack

### 📖 Platforms & Languages

<center>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
</center>

### 🛠️ Tools

<center>
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</center>

<center>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Eclipse-K&layout=compact" width="80%"><br><br>
<img src="https://github-readme-stats.vercel.app/api?username=Eclipse-K&show_icons=true" width="80%">

</center>

## 🔎 상세 소개

- 카페의 메뉴를 모아서 보고 싶다는 생각에서 시작한 프로젝트. 기존에 Html과 Css로만 작업했지만, 코드가 길어지고 복잡해지면서 수정작업에 번거로워지다보니 대대적으로 수정이 필요하다고 느꼈습니다. React로 작업하니 내용의 수정이 쉬워졌다는 것이 장점입니다. 또한 카페에서 어떤 메뉴가 있는지 어떤 기구들이 사용되는지 볼 수 있는 점도 넣었습니다.

### 📌 `메뉴 소개`

1. Espresso
2. Latte
3. Beverage
4. blended
5. Tea
6. Smoothie

### 📌 `제품군`

- Products탭을 통해 카페에 필요한 기구들을 소개하는 페이지를 만들었습니다.

### ⌨️ `로그인`

- 사실 로그인 페이지가 필요할지는 잘 모르겠지만 배운 것들을 페이지에 녹아내는 것도 필요하다고 판단되어 추가했습니다.

### 🪧 `과정`

1. 네비게이션 바를 그대로 가져와보니 홈페이지 사이즈가 줄어들었을 때는 위치 조정이 쉽지 않다는 문제점이 있었습니다. -> 아이콘 모양의 오프캔버스로 변경. -> 아이콘을 직접 만들어 에니메이션 효과 모션을 줄 수 있는 방법을 찾아내서 적용했습니다.

2. 부트스트랩을 사용해 네비게이션 바를 대체하려고 했으나 overflow: hidden을 해제할 수 있는 방법을 찾을 수 없어 사용하지 않기로 하고 직접 만들었습니다.

3. 기존의 페이지에서 문제가 되었던 사진이 있는 코드의 반복을 useState훅으로 json파일에서 불러오는 걸로 해결했습니다.

4. Home에 슬라이드 이미지에 있던 화살표 버튼은 쓸모가 없을 것 같아서 없앴습니다. 5초마다 이미지가 변경됩니다. 현재는 홈의 원본 이미지 밑에 다른 이미지를 추가한 상태입니다.

5. Styled-Components로 CSS의 가독성과 수정의 편리성을 향상 시켰습니다.

6. Home의 이미지가 예쁘지 않은 것 같아 폴라로이드 사진 스타일로 꾸며 봤습니다.

7. CafeMenu에서 각 메뉴탭으로 들어갔을 때 다시 돌아오는 버튼을 만들었습니다.
