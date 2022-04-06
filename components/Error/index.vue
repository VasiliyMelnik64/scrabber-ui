<template>
  <v-container align="start">
    <v-alert v-if="title" type="error">
      {{ title }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: "Error",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style></style>
