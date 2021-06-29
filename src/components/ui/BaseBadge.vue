<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  cursor: context-menu;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.frontend {
  background-color: #f1c40f;
  color: white;
}

.backend {
  background-color: #8e44ad;
  color: white;
}

.mobile {
  background-color: #3498db;
  color: white;
}

.ai {
  background-color: #e67e22;
  color: white;
}

.ux\/ui {
  background-color: #1abc9c;
  color: white;
}

.career {
  background-color: #95a5a6;
  color: white;
}
</style>
