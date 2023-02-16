<template>
  <q-btn :type="type">
    <span class="globl-btn">
      <component
        v-if="props.iconleft"
        :is="props.iconleft"
        class="btn-left-icon"
      />
      <p>{{ props.title }}</p>
      <component
        v-if="props.iconright"
        :is="props.iconright"
        class="btn-right-icon"
      />
    </span>
  </q-btn>
</template>

<script setup>
const props = defineProps({
  iconleft: null,
  iconright: null,
  title: String,
  type: String,
});
</script>

<style lang="scss">
.globl-btn {
  display: flex;
  align-items: center;
}
.btn-left-icon {
  margin-right: 8px;
}
.btn-right-icon {
  margin-left: 8px;
}
</style>
