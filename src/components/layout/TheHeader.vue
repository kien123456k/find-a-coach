<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          <div class="logo-container">
            <img :src="logo" alt="Find A Coach Logo" />
            Find a Coach
          </div>
        </router-link>
      </h1>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { authTypes } from "../../store";
import logo from "../../assets/images/logo.png";

export default {
  data() {
    return {
      logo: logo,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters[authTypes.G_AUTH_IS_AUTHENTICATED];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch(authTypes.A_AUTH_LOGOUT);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: var(--color-blue-dark);
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: var(--color-white-red);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.4s ease-out;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid var(--color-white-red);
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

img {
  width: 50px;
  margin-right: 1rem;
}

@media screen and (max-width: 600px) {
  .logo-container {
    font-size: 1rem;
  }
  img {
    width: 40px;
  }
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
  padding: 0;
  text-align: left;
}

a {
  text-align: center;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
  font-size: 1rem;
}

@media screen and (max-width: 600px) {
  li {
    font-size: 0.75rem;
  }
}
</style>
