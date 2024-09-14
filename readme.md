### 루트에 있던 파일들 src로 이동

### 상대경로로 변경
#### index.html
<script type="module" src="js/main.js"></script>

### sub/*.html
<script type="module" src="../js/main.js"></script>

### style.scss
@import url("reset.scss");
@import url("game.scss");
@import url("about.scss");
@import url("submit.scss");
@import url("gallery.scss");
@import url("event.scss");
@import url("board.scss");
@import "_mixin.scss";

### css 내의 /public/ > / 로 수정

### vite 설정 변경

base: "",
root: "src",
build: {
  assetsDir: "assets",
  outDir: "../dist", // src 기준
  emptyOutDir: true, // 빌드 시 dist 비우기
  rollupOptions: {
    input: {
      main: "src/index.html",
      game: "src/sub/game.html",
      about: "src/sub/about.html",
      gallery: "src/sub/gallery.html",
      submit: "src/sub/submit.html",
      submitSub: "src/sub/submit_next_step.html",
      event: "src/sub/event.html",
      eventSub: "src/sub/event_next_step.html",
      board: "src/sub/board.html",
      boardSub: "src/sub/board_next_step.html",
    },
    