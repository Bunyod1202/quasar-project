<template>
  <q-btn :type="type">
    <span class="global-btn" v-if="!iconCenter">
      <component
        v-if="iconleft"
        :is="iconleft"
        class="btn-icon btn-icon-left"
      />
      <p>{{ title }}</p>
      <component v-if="iconCenter" :is="iconCenter" class="btn-icon" />
    </span>
    <component v-else :is="iconCenter" class="btn-icon" />
  </q-btn>
</template>
<script setup>
const props = defineProps({
  iconleft: null,
  iconright: null,
  iconCenter: null,
  title: String,
  type: String,
});
</script>
<style lang="scss">
.global-btn {
  display: flex;
  align-items: center;
}

.btn-icon {
  width: 24px;
  height: 24px;
}

.btn-icon-left {
  margin-right: 8px;
}

.btn-icon-right {
  margin-left: 8px;
}
</style>
