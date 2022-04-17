<template>
  <v-btn color="primary" @click="$emit('click')">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    /**
     * ボタンアイコン
     *
     * ※空の場合は表示なし
     * @type String
     */
    icon: {
      type: String,
      default: '',
    },
    /**
     * ボタン名
     * @type String
     */
    text: {
      type: String,
      default: 'ボタン',
    }
  }
}
</script>