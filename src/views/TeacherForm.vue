<template>
  <v-container>
    <v-row justify="center">
      <div class="py-1 title" v-text="$route.query.editing?'Edit Teacher data':'New Teacher data'"></div>
    </v-row>
    <v-row>
      <v-col cols="6" class="py-0 my-0">
        <v-text-field class="py-0 my-0" v-model="edited.name" label="Full name"></v-text-field>
      </v-col>

      <v-col cols="4" class="py-0 my-0">
        <v-text-field
          class="py-0 my-0 plusik"
          v-model="edited.phone"
          label="Phone number"
          prepend-inner-icon="mdi-plus"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">Working Time</v-row>
    <v-row justify="space-between" align="center" class="mx-0">
      <v-time-picker
        :allowed-minutes="allowedMinutes"
        landscape
        width="260"
        v-model="edited.workTimeStart"
        class="mt-1"
        color="teal darken-2"
        format="24hr"
        scrollable
        :min="$store.state.settings.workTimeStart"
        :max="$store.state.settings.workTimeEnd"
      ></v-time-picker>
      <div col="1" style="font-size:100px" class="mx-10">-</div>
      <v-time-picker
        :disabled="!(edited.workTimeStart)"
        :allowed-minutes="allowedMinutes"
        landscape
        width="260"
        v-model="edited.workTimeEnd"
        class="mt-1"
        color="teal darken-2"
        format="24hr"
        scrollable
        :min="minWorkTimeEnd"
        :max="$store.state.settings.workTimeEnd"
      ></v-time-picker>
    </v-row>

    <v-row class="mt-2">
      <v-spacer></v-spacer>
      <!-- <v-btn outlined color="info darken-2" text @click="close">Cancel</v-btn> -->
      <v-btn
        v-if="$route.query.editing"
        outlined
        color="danger darken-2"
        text
        @click="deleteTeacher"
      >Delete</v-btn>
      <v-btn outlined color="info darken-2" text @click="cancel">Cancel</v-btn>
      <v-btn :disabled="disableBtn" outlined color="success darken-2" text @click="saveTeacher">Save</v-btn>
    </v-row>
  </v-container>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.editing) {
        const [current] = vm.$store.state.appData[vm.$data.collection].filter(
          e => e.id === to.query.id
        );
        vm.$data.edited = { ...current };
      }
    });
  },

  data() {
    return {
      phoneNumberRegExp: /^\d{9}$/,
      timeRegExp: /(2[0-3]|[0-1]\d):[0-5]\d/,
      collection: "teachers",
      //collectionItem: "teacher"
      edited: {
        name: "",
        phone: "",
        workTimeStart: "",
        workTimeEnd: ""
      },
      default: {
        name: "",
        phone: "",
        workTimeStart: "",
        workTimeEnd: ""
      }
    };
  },
  methods: {
    saveTeacher() {
      this.$store.dispatch("saveTeacher", {
        newEntry: !this.$route.query.editing,
        teacher: {
          ...this.edited,
          ...(this.$route.query.editing ? {} : { groups: [] })
        }
      });
      this.edited = { ...this.default, days: [] };
      this.$router.push({ name: this.collection });
    },
    deleteTeacher() {
      this.$store.dispatch("deleteTeacher", {
        id: this.edited.id,
        groups: this.edited.groups
      });
      this.$router.push({ name: this.collection });
    },
    cancel() {
      this.$router.push({ name: this.collection });
    },
    allowedMinutes: v => v % 5 === 0
  },
  computed: {
    disableBtn() {
      return !(
        !!this.edited.name &&
        this.phoneNumberRegExp.test(this.edited.phone) &&
        this.timeRegExp.test(this.edited.workTimeStart) &&
        this.timeRegExp.test(this.edited.workTimeEnd) &&
        this.edited.workTimeEnd > this.edited.workTimeStart
      );
    },
    minWorkTimeEnd() {
      if (this.edited.workTimeStart) {
        return this.edited.workTimeStart >
          this.$store.state.settings.workTimeStart
          ? this.edited.workTimeStart
          : this.$store.state.settings.workTimeStart;
      }
      return this.$store.state.settings.workTimeStart;
    }
  }
};
</script>
<style>
</style>