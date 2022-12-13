<template>
  <div class="note_container">
    <div v-if="$route.params.title" class="note_path">
      <router-link to="/main" class="href_main">Главная</router-link>/{{ $route.params.title }}
    </div>
    <div  v-if="$route.params.title">
    <h2 class="note_title"> {{ getNote().noteTitle }}</h2>
    <h2 class="note_desc"> {{ getNote().noteDescription }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppShowNote",
  props:['notes', 'title'],
  methods:{
    getNote(){
      return JSON.parse(localStorage.getItem ("notes")).filter(item => item.noteTitle === this.$route.params.title)[0]
    }
  }
}
</script>
