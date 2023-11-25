import Vue from "vue";
import Vuex from "vuex";
import SideBarItem from "@/common/sideBarItem";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: {
            loggedIn: false, // 登录状态，初始值为false，表示未登录 
            userId: -1, // 用户ID，初始值为-1，表示未定义
            username: "",// 用户名，初始值为空字符串
            userType: 0,// 用户类型，初始值为0，表示未定义
        },
        loading: false,// 加载状态，初始值为false，表示没有加载操作
        sideBarItems: [] // 侧边栏项目列表，初始值为空数组
    },
 // 定义突变对象
    mutations: {  
        // login方法，该方法将根据传入的参数改变状态对象中的status属性  
        login(state, res) {  
            state.status.loggedIn = res.loggedIn;
            state.status.userId = res.userId;
            state.status.username = res.username;
            state.status.userType = res.userType;

            let items = [];
            for (let i = 0; i < SideBarItem.items.length; i++) {
                let item = SideBarItem.items[i];
                if (item.userType === res.userType) {
                    items.push(item);
                }
            }

            state.sideBarItems = items;
        },
// logout方法，该方法将重置状态对象中的status属性为初始值  
        logout(state) {
            state.status = {
                loggedIn: false,
                userId: -1,
                username: "",
                userType: 0,
            }
        }
    }
})