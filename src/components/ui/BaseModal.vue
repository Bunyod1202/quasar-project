<template>
  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn flat round dense v-close-popup><CloseIcon /></q-btn>
      </q-card-section>
      <q-card-section class="row items-center">
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, watch } from "vue";
import CloseIcon from "../../assets/icons/CloseIcon";

const props = defineProps({
  open: Boolean,
});
const confirm = ref(props.open);

watch(
  () => props.open,
  (value) => {
    confirm.value = value;
  }
);
</script>
<style lang="scss" scoped></style>
