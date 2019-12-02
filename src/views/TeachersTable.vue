<template>
  <v-data-table
    :headers="headers"
    :items="teachers"
    :items-per-page="8"
    :hide-default-footer="!teachers.length"
  >
    <template v-slot:item.name="{item}">
      <router-link
        :to="{name:'teacher-form', query:{editing:true, id:item.id}}"
        v-text="item.name+' '+item.surname"
      ></router-link>
    </template>

    <template v-slot:item.work="{item}">{{item.workTimeStart+" - "+item.workTimeEnd}}</template>
  </v-data-table>
</template>
<script>
import { mapState } from "vuex";

export default {
  methods: {},
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Working time", value: "work", sortable: false }
      ]
    };
  },
  computed: {
    ...mapState({
      teachers: state => state.appData.teachers
    })
  }
};
</script>
<style scoped>
</style>