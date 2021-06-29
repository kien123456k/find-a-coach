<template>
  <li>
    <div>
      <a :href="emailLink">📧 {{ email }}</a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
}

a {
  color: var(--color-blue-light);
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: var(--color-blue-dark);
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
