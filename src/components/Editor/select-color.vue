<template>
  <div class="v-select">
    <p class="v-select__title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="v-select__options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        v-show="option.name != selected"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  computed() {},
  methods: {
    selectOption(option) {
      this.$emit("selected-option", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    //Закрытие по нажатию на елемент или все его
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>
<style lang="scss">
.v-select {
  position: relative;
  width: 200px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &__title {
    border: solid 1px #2c3e50;
    background: #42b983;
    border-radius: 8px;
    padding: 8px/2;
    &:hover {
      background: #2c3e50;
      color: #42b983;
    }
  }
  &__options {
    position: absolute;
    top: 27px;
    left: 0;
    width: 198px;
    border: solid 1px #2c3e50;
    background: #42b983;
    & p:hover {
      color: #42b983;
      background: #2c3e50;
    }
  }
  & p {
    margin: 0;
  }
}
</style>
