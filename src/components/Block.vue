<template>
  <li @click="onClickHandler">{{ value }}</li>
</template>

<script>
export default {
  name: "block",
  methods: {
    onClickHandler() {
      this.$emit("clicked", this.id);
    }
  },
  props: {
    id: Number,
    value: String
  }
};
</script>

<style scoped>
li {
  float: left;
  margin: 10px;
  height: 70px;
  width: 70px;
  font-size: 50px;
  background: #333;
  color: #ccc;
  list-style: none;
  text-align: center;
  border-radius: 5px;
}
li:hover {
  cursor: pointer;
  background: #000;
}
</style>
