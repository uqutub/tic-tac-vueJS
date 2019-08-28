<template>
  <div class="resetDiv">
    <button class="reset" @click="onClickHandler">Reset</button>
  </div>
</template>

<script>
export default {
  name: "reset",
  methods: {
    onClickHandler() {
      this.$emit("clicked");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resetDiv {
  display: block;
  text-align: center;
  padding-top: 20px;
}
.reset {
  border: 0;
  background: #444;
  color: #fff;
  width: 70%;
  padding: 15px;
  border-radius: 5px;
}
</style>
