<template>
  <v-container>
    <v-row>
      <v-col v-text="$route.query.editing?'Edit Group':'New Group'"></v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-text-field v-model="edited.name" label="Group name"></v-text-field>
      </v-col>

      <v-col cols="3">
        <v-select
          :items="teachers"
          label="Teacher"
          v-model="edited.teacherId"
          :item-value="e=>e.id"
          :item-text="e=>e.name"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="edited.roomId" label="Room"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          :items="$store.state.settings.weekDays"
          label="Days"
          v-model="edited.days"
          multiple
        ></v-select>
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
    <v-row class="mt-">
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
      collection: "groups",
      //collectionItem: "group",
      edited: {
        name: "",
        teacherId: "",
        roomId: "",
        days: [],
        workTimeStart: "",
        workTimeEnd: ""
      },
      default: {
        name: "",
        teacherId: "",
        roomId: "",
        days: [],
        workTimeStart: "",
        workTimeEnd: ""
      }
    };
  },
  methods: {},
  computed: {
    additionalFeilds() {
      return {};
    },
    teachers() {
      return this.$store.state.appData.teachers.map(teacher => ({
        name: teacher.name + " " + teacher.surname,
        id: teacher.id
      }));
    }
  }
};
</script>