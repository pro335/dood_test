<template>
  <div class="container mainBody">
    <HeaderPage />
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <div v-if="alert.message" :class="`alert ${alert.type}`">
          {{ alert.message }}
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import HeaderPage from "../components/header/HeaderPage";

export default {
  name: "app",
  components: { HeaderPage },
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear",
    }),
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
</script>
<style scoped>
.mainBody {
  max-width: 100% !important;
  width: inherit;
  height: 100vh;
  background-color: #1c1833;
}
</style>