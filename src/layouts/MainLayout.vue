<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header-site">
      <q-toolbar>
        <span class="menu-content">
          <p class="header-title">Admin</p>

          <q-btn class="menu-btn" dense flat round @click="toggleLeftDrawer">
            <MenuIcons />
          </q-btn>
        </span>
        <div class="form-group">
          <form class="search-form">
            <BaseInput
              standout="standout-bg-gray no-shadow"
              :placeholder="'Поиск'"
              dense
              prepend
              append
              class="mobile-search-input"
            >
              <template #prepend>
                <SearchIcon />
              </template>
            </BaseInput>
          </form>
          <q-slide-item class="user-menu">
            <q-item class="user-menu-item">
              <q-item-section avatar>
                <q-avatar color="primary" size="40px" text-color="white">
                  <img
                    width="40"
                    height="40"
                    src="../assets/images/user.jpg"
                    alt="user img"
                  />
                </q-avatar>
              </q-item-section>
              <span class="user-content">
                <q-item-section class="user-name">Константин К.</q-item-section>
                <q-item-section class="user-title"
                  >Администратор</q-item-section
                >
              </span>
              <span class="arrow-icon"> <DropArrowIcon />ss </span>
            </q-item>
            <q-menu anchor="bottom right" self="top right">
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>Having fun</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Crazy for transitions</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Mind blown</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-slide-item>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <EssentialLink />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MenuIcons from "../assets/icons/MenuIcons";
import SearchIcon from "../assets/icons/SearchIcon";
import DropArrowIcon from "../assets/icons/DropArrowIcon";
import BaseInput from "../components/ui/BaseInput";
import EssentialLink from "../components/EssentialLink";
export default {
  components: {
    MenuIcons,
    BaseInput,
    SearchIcon,
    DropArrowIcon,
    EssentialLink,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixsin.scss";

.header-site {
  background-color: #fff;
  border-bottom: 1px solid #eef0f4;
}
.header-title {
  margin: 0;
  @include typography-styles(normal, 23px, 27px, 600, left, #272a39);
}
.menu-btn {
  margin-left: 200px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
}
.search-form {
  // display: none;
  width: 100%;
  margin-left: 20px;
}
.mobile-search-input {
  width: 100%;
  max-width: 320px;
  background-color: #f6f7fa;
  border: 1px solid #eef0f4;
  border-radius: 8px;
  @include typography-styles(normal, 14px, 17px, 600, left, #272a39);
  &::placeholder {
    color: #a8aab0;
  }
}
.btn-user {
  box-shadow: 0;
}
.user-menu-item {
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
}
.user-menu {
  widows: 100%;
  min-width: 210px;
  margin-left: 20px;
}
.user-name {
  display: block;
  @include typography-styles(normal, 16px, 19px, 600, left, #272a39);
}
.user-title {
  margin: 0;
  @include typography-styles(normal, 13px, 16px, 400, left, #a8aab0);
}
.arrow-icon {
  margin: auto 0 auto 5px;
}
.q-toolbar {
  padding: 16px;
}
.menu-content {
  display: flex;
  // align-items: center;
}
.form-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@include desktop-first(900px) {
  .menu-btn {
    margin-left: 20px;
    transform: rotate(180deg);
  }
}
@include desktop-first(600px) {
  .form-group {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .menu-btn {
    position: absolute;
    right: 20px;
    z-index: 2;
  }
  .q-toolbar {
    position: relative;
    align-items: flex-start;
  }
  .search-form {
    position: relative;
    top: 10px;
    bottom: 10px;
    left: -50px;
  }
  .menu-content {
    margin-top: 10px;
    margin-left: 10px;
  }
}
</style>

<style lang="scss">
.q-layout__shadow:after {
  display: none;
}
.q-toolbar {
  padding: 16px 8px;
}
.q-field--standout .q-field__control {
  background-color: transparent;
}
.mobile-search-input {
  .standout-bg-gray {
    background-color: #f6f7fa !important;
    .q-field__native {
      color: #000 !important;
    }
    .phone-prefix {
      color: #000 !important;
    }
  }
}
</style>
