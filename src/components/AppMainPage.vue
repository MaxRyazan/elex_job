<template>
  <div class="main_container">
      <div class="left_block">
          <h1>Заметки</h1>
          <div class="bold-text">Заголовок</div>
          <input v-model="title" type="text" class="input_title">
          <div class="bold-text">Описание</div>
          <textarea v-model="description" class="textarea"></textarea>
          <app-button :disabled="!isDataValid"  :class="'btn_blue'" @click="addNewNote">Добавить</app-button>
      </div>
      <app-note-list :notes="notes" @removeNote="removeNote" @openNote="openNote"></app-note-list>
  </div>
  <note-view></note-view>
</template>

<script>
import AppNoteList from "@/components/AppNoteList";
import NoteView from "@/views/NoteView";
import AppButton from "@/components/AppButton";
import Note from "@/js/models";

import {ref, computed, onMounted} from "vue";
import {useRouter} from 'vue-router'

export default {
  components: {AppButton, AppNoteList, NoteView},
  setup() {
    const router = useRouter()
    let count = 0
    let notes = ref([])
    let title = ref('')
    let description = ref('')

    onMounted(() => {
        if(localStorage.getItem('notes')) {
         notes.value = JSON.parse (localStorage.getItem ("notes"));
        }

        if(localStorage.getItem('count')){
          count = JSON.parse (localStorage.getItem ("count"));
        } else {
         count = 0
        }
    })

    let increment = () => count++

    const addNewNote = () => {
      notes.value.push(new Note(increment(), title.value, description.value))
      localStorage.setItem('notes', JSON.stringify(notes.value))
      localStorage.setItem('count', JSON.stringify(count))
      title.value = ''
      description.value = ''
    }

    const isDataValid = computed(() => title.value.length > 0 && description.value.length > 0)

    const openNote = (id) => {
      router.push('/' + id)
      notes.value.filter(note => note.id === id)
    }

    const removeNote = (id) => {
      notes.value = notes.value.filter(i => i.id !== id)
      localStorage.setItem('notes', JSON.stringify(notes.value))
    }

    return { notes, count, addNewNote, title, description, isDataValid, openNote, removeNote }
  }
}

</script>
