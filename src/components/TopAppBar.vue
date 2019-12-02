<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app dark class="teal darken-2">
    <v-toolbar-items>
      <v-img class="ml-0" :src="require('../assets/edcrm.png')" />
    </v-toolbar-items>

    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light ma-3">EDCRM</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <system-buttons></system-buttons>
  </v-app-bar>
</template>
<script>
import SystemButtons from "./SystemButtons";

export default {
  components: {
    SystemButtons
  },
  name: "topAppBar",
  methods: {}
};
</script>
<style scoped>
</style>