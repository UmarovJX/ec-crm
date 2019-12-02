<template>
  <v-data-table
    :headers="headers"
    :items="groups"
    :items-per-page="8"
    :hide-default-header="!groups.length"
    :hide-default-footer="!groups.length"
  >
    <template v-slot:item.name="{item}">
      <router-link :to="{name:'group-form', query:{editing:true, id:item.id}}" v-text="item.name"></router-link>
    </template>
    <template v-slot:item.teacherId="{item}">
      <router-link
        :to="{name:'teacher-form', query:{editing:true, id:item.teacherId}}"
        v-text="teacherName(item.teacherId)"
      ></router-link>
    </template>
    <template v-slot:item.time={item}>
      {{item.workTimeStart+" - "+item.workTimeEnd}}
    </template>
    <template v-slot:item.days="{item}">
      <v-chip-days :days="item.days"></v-chip-days>
    </template>
  </v-data-table>
</template>
<script>
import VChipDays from "../components/VChipDays";
import { mapState } from "vuex";

export default {
  methods: {
    teacherName(id) {
      return this.$store.getters.itemGet("teachers")(id).name;
    }
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Teacher", value: "teacherId" },
        { text: "Room", value: "roomId", sortable: false },
        { text: "Days", value: "days" },
        { text: "Time", value: "time" }
      ]
    };
  },
  components: { VChipDays },
  computed: {
    ...mapState({
      groups: state => state.appData.groups
    })
  }
};
</script>
<style scoped>
</style>