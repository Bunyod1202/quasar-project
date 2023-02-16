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
      <tbody>
        <tr v-for="(item, index) in props.data" :key="index">
          <td>
            <q-btn flat round color="primary"><EditIcon /></q-btn>
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.name[0].text }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <q-pagination
        v-model="current"
        :max-pages="5"
        :max="100"
        :boundary-numbers="false"
        direction-links
        color="grey"
        active-color="orange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EditIcon from "../assets/icons/EditIcon";
const current = ref(1);
const props = defineProps({
  data: null,
});
</script>

<style lang="scss" scoped></style>
