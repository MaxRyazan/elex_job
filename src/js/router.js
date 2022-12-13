import { createRouter, createWebHistory } from 'vue-router'
import AppMainPage from "@/components/AppMainPage";
import AppShowNote from "@/components/AppShowNote";


export default createRouter({
    history: createWebHistory(),
    routes:[
        {
        path: '/main/', component: AppMainPage
        },
        {
            path: '/main/:title', component: AppShowNote
        },
    ]
})