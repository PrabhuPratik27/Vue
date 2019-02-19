<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninja from "./Ninja";

export default {
  components: {
    ninjas: Ninja
  },
  data() {
    return {
      title: "Ninja App"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
  h1{
    color: red;
  }
</style>

