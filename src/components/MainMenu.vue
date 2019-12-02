<template>
  <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app class="teal darken-2">
    <v-list class="pa-0">
      <v-list-item-group v-model="selected" mandatory>
        <v-list-item
          :to="route.path"
          dark
          class="teal darken-2"
          v-for="route in routes"
          :key="route.name"
        >
          <v-list-item-icon>
            <v-icon v-text="route.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="route.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  components: {},
  computed: {
    routes() {
      return this.$router.options.routes.filter(
        e => e.name !== "about" && e.name !== "home"
      );
    }
  },
  data() {
    return {
      selected: 0,
      class: ""
    };
  },
  watch: {
    selected() {
      this.$emit("input", this.selected);
    }
  },
  name: "mainMenu"
};
</script>

<style scoped>
</style>