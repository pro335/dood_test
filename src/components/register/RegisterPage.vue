<template>
  <div class="signInDiv">
    <h2 class="signLabel">Sign Up</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control inputTag"
          :class="{ 'is-invalid': submitted && !username }"
          placeholder="E-mail or Username"
        />
        <div v-show="submitted && !username" class="invalid-feedback">
          Email or Username is required
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control inputTag"
          :class="{ 'is-invalid': submitted && !password }"
          placeholder="Password"
        />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn continueBtn" :disabled="status.loggingIn">
          Continue
        </button>
      </div>
      <div class="form-group">
        <router-link to="/login" class="btn registerBtn">Sign In</router-link>
      </div>
    </form>
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
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["register", "logout"]),
    handleSubmit(e) {
      this.submitted = true;
      if (this.username && this.password) {
        this.register({ username: this.username, password: this.password });
      }
    },
  },
};
</script>
<style scoped>
.signInDiv {
  margin-left: auto;
  margin-right: auto;
  padding-top: 12%;
  max-width: 400px;
}

.signLabel {
  margin-bottom: 20px;
  font-size: 45px;
  color: #f6f8ff;
  font-weight: 700;
  text-align: center;
}

.inputTag {
  background-color: #1c1833 !important;
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid rgb(93, 92, 111) !important;
}

.continueBtn {
  margin-top: 20px;
  padding-top: 4px;
  width: 100%;
  height: 45px;
  background-color: #00cb51;
  border-radius: 10px;
  vertical-align: center;
  color: white;
}

.registerBtn {
  margin-top: 10px;
  padding-top: 10px;
  width: 100%;
  height: 45px;
  background-color: rgb(93, 92, 111);
  border-radius: 10px;
  vertical-align: center;
  color: white;
}
</style>
