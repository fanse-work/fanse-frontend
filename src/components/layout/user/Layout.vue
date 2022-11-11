<template>
  <layout-authorized v-if="isLoggedIn" />
  <layout-landing v-else />
</template>
<script>
const LayoutAuthorized = () => import("./LayoutAuthorized.vue")
const LayoutLanding = () => import("./LayoutLanding.vue")
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.state.token != null;
    },
  },
  components: { LayoutAuthorized, LayoutLanding },
  mounted() {
    if (this.isLoggedIn) {
      this.$get(
        "/auth/me",
        (data) => {
          this.$saveUser(data);
        },
        () => {}
      );
    }
  },
};
</script>
