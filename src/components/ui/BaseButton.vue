<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode" :replace="replace">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    replace: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  text-align: center;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--color-blue-light);
  border: 1px solid var(--color-blue-light);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease-out;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: var(--color-blue-dark);
  border-color: var(--color-blue-dark);
}

.flat {
  background-color: transparent;
  color: var(--color-blue-dark);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: var(--color-blue-dark);
  color: var(--color-blue-dark);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: var(--color-white-blue);
}
</style>
