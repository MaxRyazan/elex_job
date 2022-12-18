<template>
  <div class="card" v-for="(item) in notes" :key="item.id">
      <div class="card_item_title clamp">{{item.noteTitle}}</div>
      <div class="card_item_description clamp">{{item.noteDescription}}</div>
      <div class="absolut">
        <div class="flex">
          <router-link :to="'/' + item.id" class="card_href">
            <button class="btn_open" @click="$emit('openNote', item.id)">Открыть</button>
          </router-link>
          <button class="btn_delete" @click="$emit('removeNote', item.id)">Удалить</button>
        </div>
      </div>
  </div>
</template>

<script>
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
