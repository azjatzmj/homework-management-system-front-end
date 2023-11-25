<template>
    <div class="home">
        <head-bar/>
        <side-bar/>

        <div class="content-box">
            <div class="content" v-loading="this.$store.state.loading">
                <router-view/>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
// 导入UserType模块 
import UserType from "@/common/userType";  
  
// 导入HeadBar组件 
import HeadBar from "@/components/HeadBar";  
  
// 导入SideBar组件
import SideBar from "@/components/SideBar";  
  
// 从@/api/user模块导入getLoginStatus函数，这个函数可能是用来获取用户登录状态  
import {getLoginStatus} from "@/api/user";  
  
// 定义一个名为Container的Vue组件  
export default {  
    // 设置组件的名字为Container  
    name: "Container",  
  
    // 指定该组件包含的子组件
    components: {  
        HeadBar,  
        SideBar  
    },  
  
    // 定义组件的方法  
    methods: {  
        // 定义一个名为redirectHome的方法，这个方法根据用户类型重定向到对应的首页  
        redirectHome(userType) {  
            if (userType === UserType.student) {  
                // 如果用户类型是学生，则重定向到名为"student-home"的路由  
                this.$router.push({name: "student-home"});  
            } else if (userType === UserType.teacher) {  
                // 如果用户类型是老师，则重定向到名为"teacher-home"的路由  
                this.$router.push({name: "teacher-home"});  
            }  
        }  
    },  
  
    // 当组件被创建后执行回调函数，这是Vue的生命周期钩子之一  
    created() {  
        // 调用getLoginStatus函数获取用户登录状态，并在成功后执行回调函数  
        getLoginStatus().then(res => {  
            // 将用户登录状态存储到Vuex的store中，使用commit方法来触发store的action  
            this.$store.commit("login", res);  
            if (!res.loggedIn) {  
                // 如果用户没有登录，则重定向到登录页面  
                this.$router.push({name: "login"});  
            } else if (this.$route.path === "/") {  
                // 如果用户已经登录且当前页面路径为"/",则根据用户类型重定向到对应的首页  
                this.redirectHome(res.userType);  
            }  
        });  
    }  
};
</script>

<style scoped>
    .content-box {
        position: absolute;
        left: 200px;
        right: 0;
        top: 70px;
        bottom: 0;
        background: #f0f0f0;
    }

    .content {
        width: auto;
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
        box-sizing: border-box;
    }
</style>
