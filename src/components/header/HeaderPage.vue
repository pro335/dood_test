<template>
  <div>
    <div class="row headerBody">
      <img
        class="logo"
        :style="`${status.loggedIn ? 'opacity: 1' : 'opacity: .3'}`"
        src="/src/assets/Logo.png"
      />
      <div
        class="rightHeader"
        :style="`${status.loggedIn ? 'display: block' : 'display: none'}`"
      >
        <button
          class="btn customBtn"
          :disabled="status.loggingIn"
          @click="signout"
        >
          Logout
        </button>
        <img class="avatar" src="/src/assets/avatar.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    // // reset login status
    // this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    signout() {
      this.logout();
      window.location.href = "/";
    },
  },
};
</script>
<style scoped>
.headerBody {
  padding: 35px 60px 0px 50px;
}

.logo {
  width: 72px;
  height: 29px;
}

.rightHeader {
  margin-left: auto;
}

.avatar {
  width: 35px;
  opacity: 0.3;
}

.customBtn {
  margin-right: 22px;
  padding-top: 4px;
  width: 120px;
  height: 35px;
  background-color: #00cb51;
  border-radius: 10px;
  vertical-align: center;
  color: white;
}
</style>