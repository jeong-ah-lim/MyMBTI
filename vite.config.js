import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: "src",
  build: {
    assetsDir: "assets",
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "src/index.html",
        game: "src/sub/game.html",
        about: "src/sub/about.html",
        gallery: "src/sub/gallery.html",
        submit: "src/sub/submit.html",
        submitSub: "src/sub/submit_next_step.html",
        submitSuccess: "src/sub/submit_success.html",
        event: "src/sub/event.html",
        eventSub1: "src/sub/event_next_step_1.html",
        eventSub2: "src/sub/event_next_step_2.html",
        eventSub3: "src/sub/event_next_step_3.html",
        eventSub4: "src/sub/event_next_step_4.html",
        eventSuccess: "src/sub/event_success.html",
        board: "src/sub/board.html",
        boardSub: "src/sub/board_next_step.html",
      },
    },
  },
});
