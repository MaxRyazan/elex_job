<template>
  <div class="main_container">
    <div class="left_block">
      <h1>Заметки</h1>
      <div class="bold-text">Заголовок</div>
      <input v-model="title" type="text" class="input_title">
      <div class="bold-text">Описание</div>
      <textarea v-model="description" class="textarea"></textarea>
      <button :disabled="!isDataValid"  class="btn_blue" @click="addNewNote">Добавить</button>
    </div>
    <div class="right_block">
      <app-note-list :notes="notes" @removeNote="removeNote" @openNote="openNote"></app-note-list>
    </div>
  </div>
  <app-show-note></app-show-note>
</template>

<script>
import AppNoteList from "@/components/AppNoteList";
import AppShowNote from "@/components/AppShowNote";
import {ref, computed, onMounted} from "vue";

class Note {
 constructor(id, noteTitle, noteDescription) {
   this.id = id
   this.noteTitle = noteTitle
   this.noteDescription = noteDescription
 }
}

export default {
  components: {AppNoteList, AppShowNote},
  setup() {
    let notes = ref([])
    let count = ref(0)
    let title = ref('')
    let description = ref('')

    onMounted(() => {
        if(localStorage.getItem('notes')) {
         notes.value = JSON.parse (localStorage.getItem ("notes"));
        }

        if(localStorage.getItem('count')){
          count.value = JSON.parse (localStorage.getItem ("count"));
        } else {
         count.value = 0
        }
    })

    let increment = () => count.value++

    const addNewNote = () => {
      notes.value.push(new Note(increment(), title.value, description.value))
      localStorage.setItem('notes', JSON.stringify(notes.value))
      localStorage.setItem('count', JSON.stringify(count.value))
      title.value = ''
      description.value = ''
    }

    const isDataValid = computed(() => title.value.length > 0 && description.value.length > 0)

    const openNote = (id) => notes.value.filter(note => note.id === id)

    const removeNote = (id) => {
      notes.value = notes.value.filter(i => i.id !== id)
      localStorage.setItem('notes', JSON.stringify(notes.value))
    }

    return {notes, count, addNewNote, title, description, isDataValid, openNote, removeNote}
  }
}

</script>
