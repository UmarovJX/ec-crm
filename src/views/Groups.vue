<template>
  <v-card elevation="10" height="100%">
    <v-app-bar color="teal darken-2" dark dense>
      <v-toolbar-title>Groups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="showBtn" outlined dark :to="{name:'group-form'}">New Group</v-btn>
    </v-app-bar>

    <router-view></router-view>
  </v-card>
</template>
<script>
export default {
  name: "groupsView",
  computed: {
    showBtn() {
      const temp = this.$route.path.split("/").filter(a => a !== "");
      const str = temp[temp.length - 1];
      return str === "groups";
    }
  },

  methods: {},
  data: () => ({})
};
</script>
<style scoped>
</style>