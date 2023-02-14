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
        <tr>
          <td>
            <q-btn flat round color="primary"><EditIcon /></q-btn>
          </td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
        </tr>
        <tr>
          <td><EditIcon /></td>
          <td>66271</td>
          <td>Hotpoint</td>
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
</script>

<style lang="scss" scoped></style>
