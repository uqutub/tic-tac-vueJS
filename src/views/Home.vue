<template>
  <div class="home">
    <NavBar />
    <Board />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Board from "@/components/Board.vue";

export default {
  name: "home",
  components: {
    NavBar,
    Board
  }
};
</script>
