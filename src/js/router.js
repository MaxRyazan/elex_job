import { createRouter, createWebHistory } from 'vue-router'
import AppMainPage from "@/components/AppMainPage";
import NoteView from "@/views/NoteView";


export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: AppMainPage
        },
        {
            path: '/:id',
            component: NoteView
        },
    ]
})