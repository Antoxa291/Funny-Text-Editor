<template>
  <div class="v-select">
    <button
      class="v-select__title last"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ title }}
    </button>
    <div class="v-select__options" v-show="areOptionsVisible">
      <button
        class="editor-btn"
        v-for="option in options"
        :key="option.name"
        :data-command="option.command"
        :data-attribute="option.attribute"
      >
        {{ option.name }}
      </button>
      <!-- @click="selectOption(option)" -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  computed: {},
  methods: {
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    //Закрытие по нажатию на елемент или вне его
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>
<style lang="scss">
.v-select {
  width: 21.5rem;
  height: 7rem;
  & .last {
    border-bottom-right-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
}
</style>
