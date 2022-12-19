<template>
  <div class="right_block">
      <div class="card" v-for="(item) in notes" :key="item.id">
          <div class="card_item_title clamp">{{item.noteTitle}}</div>
          <div class="card_item_description clamp">{{item.noteDescription}}</div>
          <div class="flex">
              <app-button :class="'btn_open'" @click="$emit('openNote', item.id)">Открыть</app-button>
              <app-button :class="'btn_delete'" @click="$emit('removeNote', item.id)">Удалить</app-button>
          </div>
      </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
export default {
  name: "AppNoteList",
  components: {AppButton},

  props:{
    notes:{
      type: Array
    }
  },
  emits:['removeNote', 'openNote']
}
</script>
