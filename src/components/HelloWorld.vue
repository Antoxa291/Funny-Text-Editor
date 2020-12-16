<template>
  <div class="hello">
    <h1 class="hello__title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.hello {
  &__title {
    font-family: "Aleo", serif;
    text-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 0rem;
  }
}
</style>
