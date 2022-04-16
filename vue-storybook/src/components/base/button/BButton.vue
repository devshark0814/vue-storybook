<template>
  <v-btn color="primary" @click="$emit('click')">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'ボタン',
    }
  }
}
</script>