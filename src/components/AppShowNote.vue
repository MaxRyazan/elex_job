<template>
  <div class="note_container">
    <div v-if="$route.params.id" class="note_path">
      <router-link to="/" class="href_main">Главная</router-link>/{{ getNote().noteTitle }}
    </div>
    <div  v-if="$route.params.id">
      <p class="note_title">{{ getNote().noteTitle }}</p>
      <p class="note_desc"> {{ getNote().noteDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppShowNote",
  props:['notes', 'title'],
  methods:{
    getNote(){
      return JSON.parse(localStorage.getItem ("notes")).filter(item => item.id === +this.$route.params.id)[0]
    }
  }
}
</script>