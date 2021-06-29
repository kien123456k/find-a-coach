<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import { authTypes } from "./store";

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters[authTypes.G_AUTH_DID_AUTO_LOGOUT];
    },
  },
  created() {
    this.$store.dispatch(authTypes.A_AUTH_TRY_LOGIN);
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/coaches");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;

  --color-white-light: #ffffff;
  --color-white-red: #ffc2c0;
  --color-white-blue: #a6b2da;
  --color-blue-light: #7291f9;
  --color-blue-dark: #3b3086;
  --color-purple-light: #7b3c9f;
  --color-purple-dark: #5e2480;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
