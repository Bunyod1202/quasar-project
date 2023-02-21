<template>
  <div>
    <div class="box" v-if="box">
      <div class="header">
        <p class="categories-title">Список категорий</p>
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
          <ArrowIcon class="left-arrow-icon" />Добавление категории
        </p>
      </div>
      <div class="add-category-body">
        <form @submit.prevent="addCategory">
          <div>
            <p class="lable-text">Главная категория</p>
            <q-select
              outlined
              v-model="category_name.value"
              :ref="category_name.ref"
              :options="options"
              label="Укажите категорию"
            />
            <p v-if="category_name.error">{{ category_name.error.message }}</p>
          </div>
          <div>
            <p class="lable-text">Название Русский язык</p>
            <BaseInput
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
            <BaseInput
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
            <BaseInput
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
            <p class="input-file-title">Добавить фото товара</p>
            <BaseFileInput
              class="file-input"
              :title="'Фото товара'"
              :icon="AddPhoto"
              :imgurl="imgurl"
              @change="addInputFile"
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
import CheckIcon from "../../assets/icons/CheckIcon";
import AddPhoto from "../../assets/icons/AddPhoto";
import BaseInput from "../../components/ui/BaseInput";
import BaseFileInput from "../../components/ui/BaseFileInput";
import TableBlok from "../TableBlok";
import {
  GetCategoriesIpi,
  PostCategoriesIpi,
  PostFileIpi,
} from "../../API/API";
import BaseButton from "../../components/ui/BaseButton";

const box = ref(true);

// Get Category api started

const data = ref([]);
const getCategoryesApi = async () => {
  const getCategories = await GetCategoriesIpi().catch((err) =>
    console.log(err)
  );
  console.log(getCategories);
  if (getCategories.status === 200) {
    data.value = getCategories.data.item[2].childs;
  }
};

getCategoryesApi();

// Get category api finished

// Post file api starteded
const imgurl = ref(null);
let inputImg = null;
const addInputFile = (evt) => {
  const fileApiCategoryes = async () => {
    const formData = new FormData();
    formData.append("files", evt.target.files[0]);
    const fileCategoryAdd = await PostFileIpi(formData).catch((err) =>
      console.log(err)
    );
    if (fileCategoryAdd.status === 200) {
      inputImg = fileCategoryAdd.data[0].id;
    }
  };
  fileApiCategoryes();

  let img = evt.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(img);
  fileReader.addEventListener("load", function () {
    imgurl.value = this.result;
  });
};
// Post file api finished

// Form values started
const options = ref([
  {
    label: "ssssssss",
    id: 12,
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
//Form values finished

// Post Category api started
const addCategory = handleSubmit(async (data) => {
  const postCategoryApi = async () => {
    const postCategory = await PostCategoriesIpi({
      parentId: data.category_name.id,
      imageId: inputImg,
      name: [
        { languageCode: "ru", text: data.category_ru_name },
        { languageCode: "uz-Latn-UZ", text: data.category_uz_krl_name },
        { languageCode: "uz-Cyrl-UZ", text: data.category_uz_lat_name },
      ],
    }).catch((err) => console.log(err));
    if (postCategory.status === 200) {
      box.value = true;
      getCategoryesApi();
    }
    console.log(postCategory);
  };
  postCategoryApi();
});
// Post Category api finished
</script>
