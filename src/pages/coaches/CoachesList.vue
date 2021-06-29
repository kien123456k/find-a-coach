<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">
            Refresh
          </base-button>
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">
            Login to Register as Coach
          </base-button>
          <base-button
            v-if="isLoggedIn && !isCoach && !isLoading"
            link
            to="/register"
          >
            Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else class="notFoundMessage">No coaches found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import { authTypes, coachTypes } from "../../store";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters[authTypes.G_AUTH_IS_AUTHENTICATED];
    },
    filteredCoaches() {
      const coaches =
        this.$store.getters[`coach/${coachTypes.G_COACH_COACHES}`];
      return coaches.filter((coach) => {
        if (this.activeFilters.ai && coach.areas.includes("ai")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.mobile && coach.areas.includes("mobile")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return (
        !this.isLoading &&
        this.$store.getters[`coach/${coachTypes.G_COACH_HAS_COACHES}`]
      );
    },
    isCoach() {
      return this.$store.getters[`coach/${coachTypes.G_COACH_IS_COACH}`];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch(`coach/${coachTypes.A_COACH_LOAD}`, {
          forceRefresh: refresh,
        });
      } catch (error) {
        console.log(error);
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

.notFoundMessage {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}
</style>
