<template>
  <div>
    <div class="box" v-if="box">
      <div class="header">
        <p class="categories-title">Список брендов</p>
        <div class="btn-group">
          <q-btn class="filter-btn"
            ><FilterIcon class="filter-icon" />Фильтр</q-btn
          >
          <q-btn class="add-btn" @click="box = !box"
            >Добавить <BottomArrowIcon class="btn-arrow"
          /></q-btn>
        </div>
      </div>
      <div class="body">
        <TableBlok />
      </div>
    </div>
    <div class="box" v-else>
      <div class="header">
        <p class="categories-title">
          <ArrowIcon class="left-arrow-icon" />Добавление бренда
        </p>
      </div>
      <div class="add-category-body">
        <form @submit.prevent="register">
          <div>
            <p class="lable-text">Название Русский язык</p>
            <q-input
              outlined
              v-model="category_ru_name.value"
              :ref="category_ru_name.ref"
              placeholder="Введите название"
            />
            <p v-if="category_ru_name.error">
              {{ category_ru_name.error.message }}
            </p>
          </div>
          <div>
            <p class="lable-text">Название Узбекский язык (кирилл.)</p>
            <q-input
              outlined
              v-model="category_uz_krl_name.value"
              :ref="category_uz_krl_name.ref"
              placeholder="Введите название"
            />
            <p v-if="category_uz_krl_name.error">
              {{ category_uz_krl_name.error.message }}
            </p>
          </div>
          <div>
            <p class="lable-text">Название Узбекский язык (лат.)</p>
            <q-input
              outlined
              v-model="category_uz_lat_name.value"
              :ref="category_uz_lat_name.ref"
              placeholder="Введите название"
            />
            <p v-if="category_uz_lat_name.error">
              {{ category_uz_lat_name.error.message }}
            </p>
          </div>
          <div>
            <p class="input-file-title">Добавить лого бренда</p>
            <BaseFileInput
              class="file-input"
              :title="'Логотип бренда'"
              :icon="TheViolinIcon"
              :imgurl="imgurl"
              @change="res"
            />
          </div>
          <div class="form-btn-group">
            <BaseButton
              @click="box = !box"
              class="cencle-category-btn"
              :title="'Отмена'"
            />
            <BaseButton
              :type="'submit'"
              class="add-category-btn"
              :title="'Добавить категорию'"
              :iconleft="CheckIcon"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useForm } from "vue-hooks-form";
import FilterIcon from "../../assets/icons/FilterIcon";
import BottomArrowIcon from "../../assets/icons/BottomArrowIcon";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import BaseFileInput from "../../components/ui/BaseFileInput";
import TheViolinIcon from "../../assets/icons/TheViolinIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import TableBlok from "../TableBlok";

import { PostCategoriesIpi } from "../../API/API";
const current = ref(1);
const box = ref(true);
const imgurl = ref(null);
let inputImg = null;
const res = (evt) => {
  console.log(evt.target.files[0]);
  inputImg = evt.target.files[0];
  let img = evt.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(img);
  fileReader.addEventListener("load", function () {
    imgurl.value = this.result;
  });
};
const options = ref([
  {
    label: "ssssssss",
    id: "1",
  },
]);
const { useField, handleSubmit } = useForm({
  defaultValues: {},
});
const category_name = useField("category_name", {
  rule: { required: true },
});
const category_ru_name = useField("category_ru_name", {
  rule: { required: true },
});
const category_uz_krl_name = useField("category_uz_krl_name", {
  rule: { required: true },
});
const category_uz_lat_name = useField("category_uz_lat_name", {
  rule: { required: true },
});

const register = handleSubmit(async (data) => {
  console.log(register);
  const formData = new FormData();

  formData.append("parentId", data.category_name);
  formData.append(
    "imageId",
    "https://www.amp-solar.com/media/SlikeIT/panasonic-325-330w.jpg"
  );
  formData.append("name", [
    { languageCode: "ru", text: data.category_ru_name },
    { languageCode: "uz-Latn-UZ", text: data.category_uz_krl_name },
    { languageCode: "uz-Cyrl-UZ", text: data.category_uz_lat_name },
  ]);

  console.log(inputImg);
  console.log(data);

  const RegisterApiUser = async () => {
    const cardCasts = await PostCategoriesIpi(formData).catch((err) =>
      console.log(err)
    );
    console.log(cardCasts);
  };
  RegisterApiUser();
});
</script>
