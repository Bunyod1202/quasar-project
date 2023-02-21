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
        <form @submit.prevent="addBrand">
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
            <p class="input-file-title">Добавить лого бренда</p>
            <BaseFileInput
              class="file-input"
              :title="'Логотип бренда'"
              :icon="TheViolinIcon"
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
import BaseFileInput from "../../components/ui/BaseFileInput";
import TheViolinIcon from "../../assets/icons/TheViolinIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import TableBlok from "../TableBlok";
import BaseButton from "../../components/ui/BaseButton";
import BaseInput from "../../components/ui/BaseInput";
import { GetBrandIpi, PostBrandIpi, PostFileIpi } from "../../API/API";

const box = ref(true);

// Get Category api started

const data = ref([]);
const getBrandApi = async () => {
  const getBrand = await GetBrandIpi().catch((err) => console.log(err));
  console.log(getBrand);
  if (getBrand.status === 200) {
    data.value = getBrand.data.item;
  }
};

getBrandApi();

// Get category api finished

// Post file api started
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
const { useField, handleSubmit } = useForm({
  defaultValues: {},
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
// Form values started

// Post Category api started
const addBrand = handleSubmit(async (data) => {
  const postBrandApi = async () => {
    const postCategory = await PostBrandIpi({
      logoBase64: inputImg,
      name: [
        { languageCode: "ru", text: data.category_ru_name },
        { languageCode: "uz-Latn-UZ", text: data.category_uz_krl_name },
        { languageCode: "uz-Cyrl-UZ", text: data.category_uz_lat_name },
      ],
    }).catch((err) => console.log(err));
    if (postCategory.status === 200) {
      box.value = true;
      getBrandApi();
    }
    console.log(postCategory);
  };
  postBrandApi();
});
// Post Category api finished
</script>
