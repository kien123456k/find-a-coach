<template>
  <li>
    <div class="container">
      <h3>👨‍🏫 {{ fullName }}</h3>
      <h4>💲{{ rate }}/hour</h4>
    </div>
    <div>
      <div class="badges-container">
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        >
          {{ area }}
        </base-badge>
      </div>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink">
        Contact
      </base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.25rem;
}

h3,
h4 {
  margin: 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.badges-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
