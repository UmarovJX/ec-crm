import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as genId } from "uuid";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appData: {
      groups: [],
      teachers: [],
      rooms: []
    },
    settings: {
      password: '$2y$09$tLZjIDFVhUuXpMjmyNPsFuY6PfahBYL4NudQMBSzzpB3jt33lrS.K',
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      workdays: [],
      workTimeStart: '09:00',
      workTimeEnd: '18:00'
    }
  },
  getters: {
    itemGet: state => collection => id => state.appData[collection].find(e => e.id === id)
  },
  mutations: {
    // TEACHER----------------------------------------------------
    addTeacher(state, data) {
      state.appData.teachers.push(data);
    },
    editTeacher(state, data) {
      const oldData = state.appData.teachers.find(e => e.id === data.id);
      Object.assign(oldData, data);
    },
    deleteTeacher(state, id) {
      const teachers = state.appData.teachers;
      state.appData.teachers = teachers.filter(e => e.id !== id)
    },

    deleteItem(state, payload) { state.appData[payload.collection] = state.appData[payload.collection].filter(e => e.id !== payload.id) }
  },
  actions: {
    //TEACHERS--------------------------------------------
    saveTeacher(context, data) {
      if (data.newEntry) {
        context.commit('addTeacher', { ...(data.teacher), id: genId() })
      }
      else {
        context.commit('editTeacher', data.teacher)
      }
    },
    deleteTeacher(context, data) {
      if (!data.groups.length) context.commit('deleteTeacher', data.id);
    }
  },
  modules: {
  }
})
