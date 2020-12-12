<template>
  <div class="wrapper">
    <div class="editor-form">
      <div class="editor-form__btn-set">
        <button>
          <b>B</b>
        </button>
        <button><i>I</i></button>
        <button><u>U</u></button>
        <button>Font color</button>
        <button>Font size</button>
        <button>Background color</button>
      </div>
      <div class="editor-form__main">
        <div class="editor-form__textfild" contenteditable="true">
          text...
        </div>
        <i class="material-icons close"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
    flex-flow: row wrap;
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
