<template>
  <div>
    <button class="changeText" id="exampleText" @click="setDefaultText">
      <span v-if="!isDelete"
        >Change text to example
        <i class="material-icons sentiment_satisfied_alt"> </i
      ></span>
      <span v-else
        >Delete text <i class="material-icons sentiment_very_dissatisfied"> </i
      ></span>
    </button>

    <div v-show="isShow" id="example">
      <div
        style="color: rgb(255, 255, 255); opacity: 1; border-radius: 0.6rem; transform: rotate(0deg); border: 0rem solid rgb(70, 144, 247); padding: 1rem; text-align: center; letter-spacing: 0rem; font-size: 3.2rem; font-family: Aleo;  text-decoration: none; box-shadow: rgb(0, 0, 0) 0rem 0rem 0rem 0rem; text-transform: initial; font-style: normal; z-index: 2002; text-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 0rem; line-height: 4.5rem;"
      >
        <span
          style="background-color: rgb(248, 187, 208); padding-left: 0.3rem; padding-right: 0.3rem; border-radius: 0.4rem;"
          >Hi</span
        >
        <br />
        <span
          style="background-color: rgb(248, 187, 208); padding-left: 0.3rem; padding-right: 0.3rem; border-radius: 0.4rem;"
          >My lovely</span
        >
        <span style="color: rgb(136, 14, 79); font-size: 5.4rem">little</span>
        <span
          style="color: rgb(186, 104, 200); background-color: rgb(248, 187, 0);"
          >Ponny</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "emitExample",
  props: {},
  data() {
    return {
      isDelete: false,
      isShow: false,
      defaultText: {},
    };
  },
  computed: {},
  methods: {
    setDefaultText() {
      if (this.isDelete) this.defaultText = "Enter your text here...";
      else this.defaultText = document.getElementById("example").innerHTML;

      this.isDelete = !this.isDelete;

      this.$emit("setInnerHTML", this.defaultText);
    },
  },
  mounted() {},
  beforeUnmount() {},
};
</script>
<style lang="scss">
.changeText {
  border-radius: 0.8rem;
  margin: 1rem;
  width: 21.4rem;
}
.sentiment_satisfied_alt {
  color: #e2e25bd4;
  font-weight: 300;
}
.sentiment_very_dissatisfied {
  color: #b40404d0;
  font-weight: 300;
  &:hover {
    color: #b40404d0;
  }
}
</style>
