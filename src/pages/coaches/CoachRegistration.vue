<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
import { coachTypes } from "../../store";

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch(`coach/${coachTypes.A_COACH_REGISTER}`, data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
