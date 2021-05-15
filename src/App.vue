<template>
  <router-view v-if="isPublic" />
  <Navigation v-else>
    <router-view />
  </Navigation>
  {{ isPublic }}
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  computed: {
    isPublic() {
      return this.$route.path === "/login" || this.$route.path === "/register";
    },
  },
};
</script>

<style>
</style>
