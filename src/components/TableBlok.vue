<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Название</th>
        </tr>
      </thead>
      <tbody v-if="props.data">
        <tr v-for="(item, index) in props.data" :key="index">
          <td>
            <BaseButton flat round :iconCenter="EditIcon" />
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
      <div v-else class="sal">пока недоступно</div>
    </table>
    <div class="pagination">
      <q-pagination
        v-model="currentPage"
        :max="10"
        :max-pages="5"
        :boundary-numbers="false"
        direction-links
        color="grey"
        active-color="orange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import EditIcon from "../assets/icons/EditIcon";
import BaseButton from "./ui/BaseButton.vue";

const props = defineProps({
  data: Array,
});
// watch(
//   () => props.data,
//   (value) => {
//     data.value = value;
//   }
// );
console.log(props.data);

const currentPage = ref(1);
const itemsPerPage = 10;
// const maxPages = computed(() => Math.ceil(props.data.length / itemsPerPage));
</script>
<style lang="scss" scoped></style>
