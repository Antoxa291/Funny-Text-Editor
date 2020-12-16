<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Funny Text Editor!" />
    <EditorForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EditorForm from "@/components/Editor/EditorForm.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    EditorForm,
  },
};
</script>

<style lang="scss">
.home {
  &__logo {
    max-width: 5rem;
  }
}
</style>
