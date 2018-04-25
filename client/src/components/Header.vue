<template>
  <v-toolbar fixed class="brown lighten-3" dark>
      <v-toolbar-title class="mr-4">
            <router-link
                to="/"
                tag="v-btn"
                class="btn btn--flat theme--dark">
                Band Tracker
            </router-link>
          </v-toolbar-title>
      <v-toolbar-items>
          <router-link
                to="/bands"
                tag="v-btn"
                class="btn btn--flat theme--dark">
                Browse
            </router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
            <router-link
                v-if="!$store.state.isUserLoggedIn"
                to="login"
                tag="v-btn"
                class="btn btn--flat theme--dark">
                Log In
            </router-link>
            <router-link
                v-if="!$store.state.isUserLoggedIn"
                to="register"
                tag="v-btn"
                class="btn btn--flat theme--dark">
                Sign Up
            </router-link>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                @click="logout"
                class="btn btn--flat theme--dark">
                Log out
            </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$router.push({
                name: 'root'
            });
        }
    }
};
</script>
