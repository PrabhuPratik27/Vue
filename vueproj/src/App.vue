<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "My first Vue file"
    };
  },
  methods: {
    greeting() {
      return "Wow you is genius";
    }
  }
};
</script>
