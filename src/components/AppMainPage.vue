<template>
  <div class="main_container">
    <div class="left_block">
      <h1>Заметки</h1>
      <div class="bold-text">Заголовок</div>
      <input v-model="title" type="text" class="input_title">
      <div class="bold-text">Описание</div>
      <textarea v-model="description" class="textarea"></textarea>
      <button :disabled="!isDataValid" class="btn_blue" @click="addNewNote">Добавить</button>
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

class Note {
 constructor(id, noteTitle, noteDescription) {
   this.id = id
   this.noteTitle = noteTitle
   this.noteDescription = noteDescription
 }
}

export default {
  name: "AppMainPage",
  components: {AppNoteList, AppShowNote},
  mounted() {
    if(localStorage.getItem('notes') !== null) {
      this.notes = JSON.parse (localStorage.getItem ("notes"));
    }
    if(localStorage.getItem('count') !== null){
      this.count = JSON.parse (localStorage.getItem ("count"));
    } else {
      this.count = 0
    }
  },

  data(){
    return{
      title: '',
      description: '',
      notes: [],
      count: ''
    }
  },

  methods:{
    addNewNote(){
      console.log(this.count)
      this.notes.push(new Note(
        this.increment(),
          this.title,
          this.description)
      )
      this.title = ''
      this.description = ''
      localStorage.setItem('notes', JSON.stringify(this.notes))
      localStorage.setItem('count', JSON.stringify(this.count))
    },

    removeNote(id){
      this.notes = this.notes.filter(i => i.id !== id)
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },

    openNote(id){
      this.notes.filter(o => o.title === id)
    },

    increment(){
     return this.count++
    }
  },

  computed:{
    isDataValid(){
      return this.title.length > 0 && this.description.length > 0
    }
  }

}
</script>
