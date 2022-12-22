import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from "@/views/MainPageView";
import NoteView from "@/views/NoteView";


export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: MainPageView
        },
        {
            path: '/:id',
            component: NoteView
        },
    ]
})