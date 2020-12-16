<template>
  <div class="wrapper">
    <div class="editor">
      <div class="editor__btn-set">
        <button class="editor-btn" data-command="bold">
          <b>B</b>
        </button>
        <button class="editor-btn" data-command="italic"><i>I</i></button>
        <button class="editor-btn" data-command="underline"><u>U</u></button>
        <button class="editor-btn" data-command="justifyleft">left</button>
        <button class="editor-btn" data-command="justifycenter">center</button>
        <button class="editor-btn" data-command="justifyright">right</button>
      </div>
      <div class="editor__btn-set">
        <Select
          class="btn"
          :title="selectorsTitle[0]"
          :options="bgColorOptions"
        />
        <Select
          class="btn"
          :title="selectorsTitle[1]"
          :options="colorOptions"
        />
        <Select class="btn" :title="selectorsTitle[2]" :options="sizeOptions" />
      </div>
      <emitExample @setInnerHTML="setDefaultInnerHTML" />
      <button
        class="btn btn__toggle"
        id="toJson"
        @click="isEditorVisible = !isEditorVisible"
      >
        <span v-if="isEditorVisible">toggle to JSON</span>
        <span v-else>toggle to text</span>
      </button>
      <div
        v-show="isEditorVisible"
        class="editor__textfield"
        id="textfield"
        contenteditable="true"
        spellcheck="false"
      >
        <div id="content">Enter your text here...</div>
      </div>
      <div v-show="!isEditorVisible" class="editor__textfield " id="jsonfield">
        <div id="contentJSON" v-if="this.editorContentObjJSON.length">
          {{ this.editorContentObjJSON }}
        </div>
        <div id="contentNon" v-else>Get start to edit text!</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Select from "@/components/Editor/select";
import emitExample from "@/components/Editor/emitExample";

export default {
  name: "Editor",
  components: { Select, emitExample },
  props: {},
  data() {
    return {
      editorBtn: "",
      editorContentObj: {},
      editorContentObjJSON: {},
      isEditorVisible: true,
      selectorsTitle: ["background color", "text color", "text size"],

      bgColorOptions: [
        { name: "White", command: "backcolor", attribute: "white" },
        { name: "Red", command: "backcolor", attribute: "red" },
        { name: "Green", command: "backcolor", attribute: "green" },
        { name: "Blue", command: "backcolor", attribute: "blue" },
      ],
      colorOptions: [
        { name: "Black", command: "forecolor", attribute: "black" },
        { name: "Red", command: "forecolor", attribute: "red" },
        { name: "Green", command: "forecolor", attribute: "green" },
        { name: "Blue", command: "forecolor", attribute: "blue" },
      ],
      sizeOptions: [
        { name: "Small", command: "fontsize", attribute: "1" },
        { name: "Normal", command: "fontsize", attribute: "3" },
        { name: "Big", command: "fontsize", attribute: "5" },
      ],
    };
  },

  computed: {
    ...mapGetters(["CONTENT"]),
  },
  methods: {
    ...mapActions(["GET_CONTENT_FROM_API"]),
    selectEditorElements() {
      this.editorBtn = document.getElementsByClassName("editor-btn");
      this.editorContentObj = document.getElementById("content");
    },
    setAttribute(element) {
      document.execCommand(
        element.dataset.command,
        false,
        element.dataset.attribute
      );
      this.editorContentObj = document.getElementById("content");
      const outputDivObj = this.htmlToJSON(this.editorContentObj);

      if (outputDivObj.tagName == "DIV") {
        this.editorContentObjJSON = JSON.stringify(outputDivObj);
      }
    },
    htmlToJSON({ tagName, childNodes, style }) {
      let tag = {};

      if (tagName) {
        tag["tagName"] = tagName;
      }

      tag["children"] = [];

      for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].data) {
          tag["children"].push({ outerText: childNodes[i].data });
        } else {
          tag["children"].push({ node: this.htmlToJSON(childNodes[i]) });
        }
      }

      if (style.cssText) {
        for (const key in style) {
          if (key.length > 3 && key !== "cssText" && key !== "length") {
            if (
              style[key] !== "" &&
              style[key] !== null &&
              typeof style[key] !== "function"
            ) {
              tag[key] = style[key];
            }
          }
        }
      }

      return tag;
    },
    setDefaultInnerHTML(defaultInner) {
      document.getElementById("content").innerHTML = defaultInner;

      if (defaultInner !== "") {
        this.editorContentObj = document.getElementById("content");
        const outputDivObj = this.htmlToJSON(this.editorContentObj);

        if (outputDivObj.tagName == "DIV") {
          this.editorContentObjJSON = JSON.stringify(outputDivObj);
        }
      }
    },
  },
  mounted() {
    // this.GET_CONTENT_FROM_API(); //method for getting data from API

    this.editorBtn = document.getElementsByClassName("editor-btn");
    this.editorContentObj = document.getElementById("content");

    document.execCommand("StyleWithCSS", false, "useCss");
    for (let i = 0; i < this.editorBtn.length; i++) {
      this.editorBtn[i].addEventListener("click", () => {
        this.setAttribute(this.editorBtn[i]);
      });
    }
  },
  beforeUnmount() {
    for (let i = 0; i < this.editorBtn.length; i++) {
      this.editorBtn[i].addEventListener("click", () => {
        this.removeEventListener("click", this.hideSelect);
      });
    }
  },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  border-radius: 0.8rem;
  margin: 1rem;
  background: #42b983;
  box-shadow: 0 0 0.8rem 0 #2c3e50;
  .btn__toggle {
    width: 13rem;
  }
}
.editor {
  padding: 2rem;

  &__btn-set {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    box-sizing: border-box;
    border-radius: 0.8rem;
    & button:first-child {
      border-bottom-left-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
    }
    & button:last-child {
      border-bottom-right-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
    }
  }

  &__textfield {
    text-align: left;
    border-radius: 0.8rem;
    padding: 1.5rem 1rem;
    margin: 1.5rem 0;
    font-family: "Aleo", serif;
    font-size: 1.6rem;
    line-height: 1.2;
    word-break: break-word;
    box-shadow: 0 0 0.8rem 0 #42b983;
    background: #ffffff;
    // text-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 0;
    min-height: 30rem;
    width: 100%;
    max-width: 66rem;
    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 0.8rem 0 #2c3e50;
    }
  }
}
</style>
