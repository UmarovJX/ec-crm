<template>
  <v-app>
    <top-app-bar></top-app-bar>
    <main-menu></main-menu>

    <v-content>
      <v-container fluid fill-height class="pa-1">
        <v-layout justify-center align-center>
          <v-flex text-xs-center fill-height>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TopAppBar from "./components/TopAppBar";
import MainMenu from "./components/MainMenu";

export default {
  name: "App",

  components: {
    MainMenu,
    TopAppBar
  },

  data: () => ({
    //
  })
};
</script>
