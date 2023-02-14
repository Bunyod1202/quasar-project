<template>
  <router-link
    class="glav-link"
    v-for="(item, index) in menu"
    :key="index"
    :to="item.link"
    v-slot="{ isActive }"
  >
    <q-expansion-item :active="isActive">
      <template v-slot:header>
        <q-item-section avatar>
          <component v-if="item.icon" :is="item.icon" class="menu-icons" />
        </q-item-section>

        <q-item-section class="menu-title">{{ item.name }} </q-item-section>
      </template>

      <q-card>
        <q-card-section>
          <router-link
            class="menu-link"
            v-for="(item, index) in item.arr"
            :key="index"
            :to="item.link"
            v-slot="{ isActive }"
          >
            <q-item
              :active="isActive"
              clickable
              v-ripple
              class="my-menu"
              @click="link = item.name"
              active-class="my-menu-link"
            >
              <q-item-section class="menu-text">{{ item.name }}</q-item-section>
            </q-item>
          </router-link>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </router-link>
</template>

<script setup>
import { ref } from "vue";
import DashboardIcon from "../assets/icons/ponelIcon/DashboardIcon";
import UsersIcon from "../assets/icons/ponelIcon/UsersIcon";
import DocumentationIcon from "../assets/icons/ponelIcon/DocumentationIcon";
import SalesIcon from "../assets/icons/ponelIcon/SalesIcon";
import ReportsIcon from "../assets/icons/ponelIcon/ReportsIcon";
import FinanceIcon from "../assets/icons/ponelIcon/FinanceIcon";
import FundsControlIcon from "../assets/icons/ponelIcon/FundsControlIcon";
import ModerationIcon from "../assets/icons/ponelIcon/ModerationIcon";
import SettingsIcon from "../assets/icons/ponelIcon/SettingsIcon";
import GoOutIcon from "../assets/icons/ponelIcon/GoOutIcon";
import BottomArrowIcon from "../assets/icons/BottomArrowIcon";
const link = ref("inbox");
const menu = ref([
  {
    name: "Дашборд",
    icon: DashboardIcon,
    link: "/settngs",
  },
  {
    name: "Пользователи",
    icon: UsersIcon,
    link: "/settigs",
  },
  {
    name: "Документы",
    icon: DocumentationIcon,
    link: "/settngs",
  },
  {
    name: "Продажи",
    icon: SalesIcon,
    link: "/setings",
  },
  {
    name: "Отчёты",
    icon: ReportsIcon,
    link: "/settngs",
  },
  {
    name: "Финансы",
    icon: FinanceIcon,
    link: "/settngs",
  },
  {
    name: "Контроль средств",
    icon: FundsControlIcon,
    link: "/settngs",
  },
  {
    name: "Модерация",
    icon: ModerationIcon,
    link: "/setings",
  },
  {
    name: "Настройки",
    icon: SettingsIcon,
    link: "/settings",
    arr: [
      {
        name: "Категории",
        link: "/settings/category",
      },
      {
        name: "Бренды",
        link: "/settings/brands",
      },
      {
        name: "Языки",
        link: "/settings/languages",
      },
      {
        name: "Группы атрибутов",
        link: "/settings/attribute",
      },
      {
        name: "Атрибуты к группе",
        link: "/settings/attributes",
      },
      {
        name: "Валюта",
        link: "/yol",
      },
    ],
  },
  {
    name: "Выйти",
    icon: GoOutIcon,
    link: "/setings",
  },
]);
</script>
<style lang="scss" scoped>
@import "../assets/css/mixsin.scss";
.my-menu {
  left: 10px;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 3px;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #f6f7fa;
  }

  @include typography-styles(normal, 14px, 17px, 600, left, #a8aab0);
}
.menu-link {
  text-decoration: none;
}
.menu-title {
  @include typography-styles(normal, 14px, 17px, 600, left, #272a39);
}
</style>
<style lang="scss">
.glav-link {
  text-decoration: none;
}
.router-link-active {
  .q-expansion-item__toggle-icon {
    display: none !important;
  }
  position: relative;
  .menu-title {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      display: block;
      width: 3px;
      height: 100%;
      background-color: #ff9243;
      border-radius: 5px 0px 0px 5px;
    }
  }
}
.my-menu-link {
  color: #272a39 !important;
  &::before {
    background-color: #ff9243 !important;
  }
  .arrow-icon {
    display: none;
  }
  .menu-icons {
    path {
      stroke: #ff9243;
    }
  }
}
.arrow-icon {
  svg {
    path {
      stroke: #000000;
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
