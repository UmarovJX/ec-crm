import Vue from 'vue'
import VueRouter from 'vue-router'
//-----------------------------------------
import Calendar from "../views/Calendar.vue";
import Rooms from "../views/Rooms.vue";
import Teachers from "../views/Teachers.vue";
import Groups from "../views/Groups.vue";
//-GROUPS-----------------------------------------------
import GroupsTable from '../views/GroupsTable.vue';
import GroupForm from '../views/GroupForm.vue'

//-TEACHERS------------------------------------------------
import TeachersTable from '../views/TeachersTable.vue';
import TeacherForm from '../views/TeacherForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/groups'
  },
  {
    path: '/groups',
    title: 'Croups',
    component: Groups,
    icon: 'mdi-account-group',
    children: [{
      path: '',
      name: 'groups',
      component: GroupsTable,
    },
    {
      path: 'group-from',
      name: 'group-form',
      component: GroupForm,
    }
      // {
      //   path: 'details',
      //   name: 'group-details',
      //   component: GroupForm,
      // }
    ]
  },
  {
    path: '/teachers',
    title: 'Teachers',
    component: Teachers,
    icon: 'mdi-school',
    children: [{
      path: '',
      name: 'teachers',
      component: TeachersTable,
    },
    {
      path: 'teacher-from',
      name: 'teacher-form',
      component: TeacherForm,
    }]
  },
  {
    path: '/rooms',
    name: 'rooms',
    title: 'Rooms',
    component: Rooms,
    icon: 'mdi-door',
  },
  {
    path: '/calendar',
    name: 'calendar',
    title: 'Calendar',
    component: Calendar,
    icon: 'mdi-timetable',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
