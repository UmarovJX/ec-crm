<template>
  <v-card elevation="10" height="100%">
    <v-toolbar color="teal darken-2" dark dense>
      <v-toolbar-title>Teachers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="showBtn" outlined dark :to="{name:'teacher-form'}">New teacher</v-btn>
    </v-toolbar>
    <router-view></router-view>
  </v-card>
</template>
<script>
export default {
  name: "TeachersView",
  computed: {
    showBtn() {
      const temp = this.$route.path.split("/").filter(a => a !== "");
      const str = temp[temp.length - 1];
      return str === "teachers";
    }
  },

  methods: {},
  data: () => ({})
};
</script>
<style scoped>
</style>
