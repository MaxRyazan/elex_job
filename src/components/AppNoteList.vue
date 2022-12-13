<template>
  <div class="card" v-for="(item) in notes" :key="item.id">
      <div class="card_item_title">{{item.noteTitle}}</div>
      <div class="card_item_description clamp">{{item.noteDescription}}</div>
      <div class="flex">
      <router-link :to="'/main/' + item.noteTitle">
        <button class="btn_open" @click="$emit('openNote', item.id)">Открыть</button>
      </router-link>
      <button class="btn_delete" @click="$emit('removeNote', item.id)">Удалить</button>
      </div>
  </div>
  <div>
  </div>
</template>

<script>
import "@/styles/styles.css"
export default {
  name: "AppNoteList",
  components: {},

  props:{
    notes:{
      type: Array
    }
  },
  emits:['removeNote', 'openNote']
}
</script>
