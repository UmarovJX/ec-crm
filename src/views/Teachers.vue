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
          <!-- <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="editedTeacher.name" label="Teacher name"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="editedTeacher.surname" label="Teacher surname"></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field v-model="editedTeacher.phone" label="Phone number"></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field v-model="editedTeacher.workTimeStart" label="Work time starts"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editedTeacher.workTimeEnd" label="Work time ends"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined color="info darken-2" text @click="close">Cancel</v-btn>
            <v-btn outlined color="success darken-2" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card> -->
     
//   data: () => ({
//     newTeacherDialogOpen: false,
//     editedTeacher: {
//       name: "",
//       surname: "",
//       phone: "",
//       workTimeStart: "",
//       workTimeEnd: ""
//     },
//     defaultTeacher: {
//       name: "",
//       surname: "",
//       phone: "",
//       workTimeStart: "",
//       workTimeEnd: ""
//     },
//     editing: false,
//     week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//   })
// };
