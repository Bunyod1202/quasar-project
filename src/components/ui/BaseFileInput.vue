<template>
  <label
    class="file-label dropzone"
    :style="`background-image: url('${imgurl}')`"
    id="dropzone"
  >
    <input
      v-bind="$attrs"
      lazy-rules="ondemand"
      ref="inputRef"
      hide-bottom-space
      :model-value="modelValue"
      @update:model-value="onInputChange"
      class="dropzone-input"
      type="file"
      multiple
    />
    <span v-if="!imgurl" class="img-wrapper">
      <component v-if="props.icon" :is="props.icon" class="menu-icons" />
      <p>{{ props.title }}</p>
    </span>
  </label>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: null,
  },
  append: {
    type: Boolean,
    default: false,
  },
  imgurl: {
    type: String,
  },
  icon: {
    type: Object,
    default: null,
  },
  title: String,
  prepend: {
    type: Boolean,
    default: false,
  },
});
const inputRef = ref(null);
</script>

<style lang="scss" scoped>
.file-label {
  height: 143px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.img-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dropzone-input {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
