<template>
  <div class="main_container">
      <div class="left_block">
          <h1>Заметки</h1>
          <span class="span_title">Заголовок</span>
          <input v-model="title" type="text" class="input_title">
          <span class="span_title">Описание</span>
          <textarea v-model="description" class="textarea"></textarea>
          <app-button :disabled="!isDataValid"  class="btn_blue" @click="createNewNote">Добавить</app-button>
      </div>
      <app-note-list :notes="notes" @removeNote="removeNote" @openNote="openNote"></app-note-list>
  </div>
  <note-view></note-view>
</template>

<script setup>
import AppNoteList from "@/components/AppNoteList";
import NoteView from "@/views/NoteView";
import AppButton from "@/components/AppButton";
import { useRouter } from 'vue-router'
import {computed, onMounted, ref} from "vue";
import Note from "@/js/models";

const router = useRouter()
const description = ref('')
const title = ref('')
let notes = ref([])
let count = 0

onMounted(() => {
    if(localStorage.getItem('notes')) {
        notes.value = JSON.parse (localStorage.getItem ("notes"));
    }
    if(localStorage.getItem('count')){
        count = JSON.parse (localStorage.getItem ("count"));
    }
})

const openNote = (id) => {
    router.push('/' + id)
    notes.value.filter(note => note.id === id)
}

const removeNote = (id) => {
    notes.value = notes.value.filter(i => i.id !== id)
    localStorage.setItem('notes', JSON.stringify(notes.value))
}

const createNewNote = () => {
    notes.value.push(new Note(increment(), title.value, description.value))
    localStorage.setItem('notes', JSON.stringify(notes.value))
    localStorage.setItem('count', JSON.stringify(count))
    title.value = ''
    description.value = ''
}

let increment = () => count++

const isDataValid = computed(() => title.value.length > 0 && description.value.length > 0)

</script>
