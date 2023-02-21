<template>
  <q-no-ssr>
    <q-input
      v-bind="$attrs"
      class="base-input"
      lazy-rules="ondemand"
      ref="inputRef"
      hide-bottom-space
      :model-value="modelValue"
      @update:model-value="change"
    >
      <template v-if="append" #append>
        <slot name="append" />
      </template>
      <template v-if="prepend" #prepend>
        <slot name="prepend" />
      </template>
    </q-input>
  </q-no-ssr>
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
  prepend: {
    type: Boolean,
    default: false,
  },
});

const inputRef = ref(null);

function focus() {
  inputRef.value.focus();
}
function resetValidation() {
  inputRef.value.resetValidation();
}

defineExpose({
  focus,
  resetValidation,
});
</script>
