<template>
  <div>
    <section>
      <base-card>
        <div class="container">
          <h3>👨‍🏫 {{ fullName }}</h3>
          <h4>💲{{ rate }}/hour</h4>
        </div>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button
            v-if="$route.name === 'coachDetail'"
            link
            replace
            :to="contactLink"
          >
            Contact
          </base-button>
        </header>
        <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Academic field</h2>
        </header>
        <div class="badges-container">
          <base-badge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          >
          </base-badge>
        </div>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import { coachTypes } from "../../store";

export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters[
      `coach/${coachTypes.G_COACH_COACHES}`
    ].find((coach) => coach.id === this.id);
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
}

.badges-container {
  display: flex;
  justify-content: center;
  align-items: center;
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

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
