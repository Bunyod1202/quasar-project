<template>
  <div>
    <div class="box" v-if="box">
      <div class="header">
        <p class="categories-title">Список брендов</p>
        <div class="btn-group">
          <BaseButton
            class="filter-icon"
            :title="'Фильтр'"
            :iconleft="FilterIcon"
          />
          <BaseButton
            class="add-btn"
            @click="box = !box"
            :title="'Добавить'"
            :iconright="ButtonArrowIcon"
          />
        </div>
      </div>
      <div class="body">
        <TableBlok :data="data" />
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
import ButtonArrowIcon from "../../assets/icons/ButtonArrowIcon";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import BaseFileInput from "../../components/ui/BaseFileInput";
import TheViolinIcon from "../../assets/icons/TheViolinIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import TableBlok from "../TableBlok";
import BaseButton from "../../components/ui/BaseButton";
import { PostCategoriesIpi } from "../../API/API";

const current = ref(1);
const box = ref(true);
const imgurl = ref(null);
const data = ref(null);
let inputImg = ref(null);
const res = (evt) => {
  console.log(evt.target.files[0]);
  inputImg.value = evt.target.files[0];
  let img = evt.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(img);
  fileReader.addEventListener("load", function () {
    imgurl.value = this.result;
  });
};
const getCategoriesIpi = async () => {
  const cardCasts = await GetCategoriesIpi().catch((err) => console.log(err));
  data.value = cardCasts.data;
  console.log(cardCasts.data);
};
getCategoriesIpi();

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
  // console.log(data.category_name.id);
  const formData = {
    imageId: inputImg.value,
    name: [
      { languageCode: "ru", text: data.category_ru_name },
      { languageCode: "uz-Latn-UZ", text: data.category_uz_krl_name },
      { languageCode: "uz-Cyrl-UZ", text: data.category_uz_lat_name },
    ],
  };
  getCategoriesIpi();
  console.log(data);

  const postCategoriesIpi = async () => {
    const cardCasts = await PostCategoriesIpi(formData).catch((err) =>
      console.log(err)
    );
    console.log(cardCasts);
  };
  postCategoriesIpi();
});
</script>
