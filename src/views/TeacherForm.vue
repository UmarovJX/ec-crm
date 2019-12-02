<template>
  <v-container>
    <v-row justify="center">
      <div class="py-1" v-text="$route.query.editing?'Edit Teacher data':'New Teacher data'"></div>
    </v-row>
    <v-row>
      <v-col cols="4" class="py-0 my-0">
        <v-text-field class="py-0 my-0" v-model="edited.name" label="Teacher name"></v-text-field>
      </v-col>
      <v-col cols="4" class="py-0 my-0">
        <v-text-field class="py-0 my-0" v-model="edited.surname" label="Teacher surname"></v-text-field>
      </v-col>
      <v-col cols="4" class="py-0 my-0">
        <v-text-field class="py-0 my-0" v-model="edited.phone" label="Phone number"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">Working Time</v-row>
    <v-row justify="space-between" align="center" class="mx-0">
      <v-time-picker
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
        landscape
        width="260"
        v-model="edited.workTimeEnd"
        class="mt-1"
        color="teal darken-2"
        format="24hr"
        scrollable
        :min="$store.state.settings.workTimeStart"
        :max="$store.state.settings.workTimeEnd"
      ></v-time-picker>
    </v-row>
    <v-row class="mt-2">
      <v-spacer></v-spacer>
      <!-- <v-btn outlined color="info darken-2" text @click="close">Cancel</v-btn> -->
      <v-btn v-if="$route.query.editing" outlined color="danger darken-2" text @click="deleteItem">Delete</v-btn>
      <v-btn outlined color="info darken-2" text @click="cancel">Cancel</v-btn>
      <v-btn outlined color="success darken-2" text @click="saveItem">Save</v-btn>
    </v-row>
  </v-container>
</template>
<script>
import FormMixin from "../mixins/FormMixin";
export default {
  mixins: [FormMixin],

  data() {
    return {
      collection: "teachers",
      //collectionItem: "teacher",
      edited: {
        name: "",
        surname: "",
        phone: "",
        workTimeStart: "",
        workTimeEnd: ""
      },
      default: {
        name: "",
        teacherId: "",
        roomId: "",
        workTimeStart: "",
        workTimeEnd: ""
      }
    };
  },
  methods: {},
  computed: {
    additionalFields() {
      return this.$route.query.editing ? {} : { groups: Array(0) };
    }
  }
};
</script>
<style>
</style>