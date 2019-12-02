<template>
  <span>
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click.native="$emit('system','settings')">
          <v-icon v-text="'mdi-settings'" v-on="on"></v-icon>
        </v-btn>
      </template>
      <span>Settings</span>
    </v-tooltip>

    <v-divider light vertical></v-divider>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click.native="blocked=true">
          <v-icon v-text="'mdi-lock-open-variant'" v-on="on"></v-icon>
        </v-btn>
      </template>
      <span>Block app</span>
    </v-tooltip>

    <v-dialog v-model="blocked" overlay-opacity="1" persistent max-width="40%">
      <v-card class="text-center">
        <v-card-text>
          <v-form ref="form" v-model="valid" @submit.prevent="unblockApp">
            <v-container>
              <v-row>
                <v-flex class="display-2 bold teal--text">Application locked!</v-flex>

                <v-col cols="6" class="display-1 offset-3">
                  <v-text-field
                    label="Password"
                    type="password"
                    required
                    v-model="passInput"
                    :rules="nameRules"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="unblockApp" :disabled="!valid">Unlock</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="invalidPass" overlay-opacity="1" persistent max-width="40%">
      <v-card class="text-center">
        <v-card-text>
          <v-container>
            <v-row>
              <v-flex class="display-2 bold red--text">Invalid Password</v-flex>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="invalidPass=false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </span>
</template>

<script>
import { compareSync } from "bcryptjs";
import { mapState } from "vuex";
export default {
  name: "systemButtons",
  data() {
    return {
      blocked: false,
      valid: false,
      passInput: "",
      invalidPass: false,
      nameRules: [
        v => (v && v.length >= 6) || "Password must be more than 6 characters"
      ]
    };
  },
  methods: {
    unblockApp() {
      const check = compareSync(this.passInput, this.passHash);
      if (check) this.blocked = false;
      else this.invalidPass = true;
      this.passInput = "";
    }
  },
  computed: {
    ...mapState({
      passHash: state => state.settings.password
    })
  }
};
</script>
<style scoped>
</style>