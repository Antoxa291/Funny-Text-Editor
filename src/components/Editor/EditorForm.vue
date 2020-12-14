<template>
  <div class="wrapper">
    <div class="editor-form">
      <div id="toolBar" class="editor-form__btn-set">
        <button @click="formatText('bold')">
          <b>B</b>
        </button>
        <button @click="formatText('italic')"><i>I</i></button>
        <button @click="formatText('underline')"><u>U</u></button>
        <button>Font color</button>
        <button>Font size</button>
        <SelectBgColor
          :options="bgColorOptions"
          @selected-option="formatBgColor"
        />
        <Selector :options="bgColorOptions" @selected-option="formatBgColor" />
      </div>
      <div class="editor-form__main">
        <div
          id="textBox"
          class="editor-form__textfild"
          contenteditable="true"
          spellcheck="false"
        >
          <p>Enter Your text here...</p>
        </div>
        <i class="material-icons close"></i>
      </div>
    </div>
  </div>
</template>
<script>
import SelectBgColor from "./select-bg-color.vue";
import Selector from "./selector.vue";

export default {
  name: "EditorForm",
  components: {
    SelectBgColor,
    Selector,
  },
  data() {
    return {
      focusOnElement: "",
      elementInnerText: "",
      outputText: "",
      bgColorOptions: [
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Blue", value: "blue" },
      ],
      colorOptions: [
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Blue", value: "blue" },
      ],
      sizeOptions: [
        { name: "Small", value: "Very small" },
        { name: "Normal", value: "Normal" },
        { name: "Big", value: "Big" },
      ],
    };
  },
  props: {
    activeEl: {
      type: String,
    },
  },
  computed: {},
  mounted() {
    // window.getSelection().toString();
    this.focusOnElement = document.getElementById("textBox");
    // document.designMode = "on";
    this.elementInnerText = this.focusOnElement.innerHTML;
  },
  methods: {
    formatText(selectedCommand, selectedValue) {
      document.execCommand(selectedCommand, false, selectedValue);
      this.focusOnElement.focus();
    },
    formatBgColor(selectedValue) {
      console.log(selectedValue);
      this.focusOnElement.focus();
      document.execCommand("backcolor", false, selectedValue);
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;

  border-radius: 8px;
  min-width: 380px;
  min-block-size: 600px;

  margin: 16px;
  background: #42b983;
  box-shadow: 0 0 8px 0 #2c3e50;
}
.editor-form {
  &__btn-set {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    // align-items: center;
    min-width: 200px;
    box-sizing: border-box;
    & button {
      font-size: 16px;
      &:hover {
        cursor: pointer;
        box-shadow: 0 0 8px 0 #2c3e50;
      }
    }
  }
  &__main {
    display: flex;
    flex-flow: row nowrap;
  }
  &__textfild {
    display: flex;
    flex-flow: column wrap;
    justify-content: left;
    align-items: flex-start;
    position: relative;
    min-width: 318px;
    min-block-size: 500px;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    font-family: "Aleo", serif;
    font-size: 20px;
    box-shadow: 0 0 8px 0 #42b983;
    background: #ffffff;
    text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px;
    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 8px 0 #2c3e50;
    }
  }
}

.close {
  color: red;
  &:hover {
    cursor: pointer;
    text-shadow: rgba(255, 0, 0, 0.329) 2px 2px 0px;
  }
}
</style>
