import Vue from 'vue'
import Vuex from 'vuex'

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
    addItem(state, payload) {
      state.appData[payload.collection].push(payload.data);
      if (payload.collection === 'groups') {
        state.appData.teachers
          .find(e => e.id === payload.data.teacherId)
          .groups
          .push(payload.data.id);
        state.appData.rooms
          .find(e => e.id === payload.data.roomId)
          .groups
          .push(payload.data.id);
      }
    },
    editItem(state, payload) {
      const [old] = state.appData[payload.collection].filter(e => e.id === payload.data.id);
      //Object.assign(current, payload.data);
      if (payload.collection === 'groups') {
        if (old.teacherId !== payload.data.teacherId) {
          const teacher = state.appData.teachers.find(e => e.id === old.teacherId)
          teacher.groups = [...teacher.groups.filter(e => e !== old.id), payload.data.id]
        }
        if (old.roomId !== payload.data.roomId) {
          const room = state.appData.rooms.find(e => e.id === old.roomId)
          room.groups = [...room.groups.filter(e => e !== old.id), payload.data.id]
        }
      }
      Object.assign(old, payload.data);
    },
    deleteItem(state, payload) { state.appData[payload.collection] = state.appData[payload.collection].filter(e => e.id !== payload.id) }
  },
  actions: {
  },
  modules: {
  }
})
