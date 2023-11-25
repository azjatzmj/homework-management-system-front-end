// 引入Vue.js库  
import Vue from 'vue';  
  
// 引入Vue Router库，用于构建单页面应用程序  
import VueRouter from 'vue-router';  
  
// 引入Container组件，作为其他组件的容器  
import Container from "@/views/Container";  
  
// 引入Login组件，用于用户登录  
import Login from '@/views/Login';  
  
// 引入Register组件，用于用户注册  
import Register from "@/views/Register";  
  
// 引入Home组件，作为学生和教师的首页  
import Home from "@/views/Home";  
  
// 引入StudentHomework组件，显示学生需要完成的作业  
import StudentHomework from "@/views/student/StudentHomework";  
  
// 引入StudentSubmitted组件，显示学生已经提交的作业  
import StudentSubmitted from "@/views/student/StudentSubmitted";  
  
// 引入TeacherHomework组件，显示教师需要批改的作业  
import TeacherHomework from "@/views/teacher/TeacherHomework";  
  
// 引入TeacherSubmitted组件，显示教师已经批改的作业  
import TeacherSubmitted from "@/views/teacher/TeacherSubmitted";  
  
// 引入StudentCommented组件，显示学生已经评论的作业  
import StudentCommented from "@/views/student/StudentCommented";  
  
// 使用Vue Router插件  
Vue.use(VueRouter);  
  
// 定义路由规则数组，每个对象定义了一个路由规则  
const routes = [
    {
        path: "/",
        name: "container",
        component: Container,
        children: [
            {
                path: "/student",
                name: "student-home",
                component: Home
            },
            {
                path: "/student/homework",
                name: "student-homework",
                component: StudentHomework
            },
            {
                path: "/student/submitted",
                name: "student-submitted",
                component: StudentSubmitted
            },
            {
                path: "/student/commented",
                name: "student-commented",
                component: StudentCommented
            },
            {
                path: "/teacher",
                name: "teacher-home",
                component: Home
            },
            {
                path: "/teacher/homework",
                name: "teacher-homework",
                component: TeacherHomework
            },
            {
                path: "/teacher/submitted",
                name: "teacher-submitted",
                component: TeacherSubmitted
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;