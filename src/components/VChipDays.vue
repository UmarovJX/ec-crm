<template>
  <span>
    <v-chip
      v-for="(day,i) in days"
      :key="i+day"
      class="mr-1 px-1"
      small
      :color="getColor(day)"
      dark
    >{{day}}</v-chip>
  </span>
</template>
<script>
export default {
  name: "v-chip-days",
  props: ["days"],
  methods: {
    getColor(day) {
      switch (day) {
        case "Mon":
        case "Tue":
        case "Wed":
        case "Thu":
        case "Fri":
          return "green";
        case "Sat":
        case "Sun":
          return "red";
      }
    }
  }
};
</script>
<style scoped>
</style>