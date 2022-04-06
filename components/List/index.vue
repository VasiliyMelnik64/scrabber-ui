<template>
  <v-container align="start">
    <v-row>
      <v-col cols="12">
        <v-card v-if="title" class="card" outlined>
          <v-card-text v-html="title" class="card-text"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="item in data" :key="item" class="card">
      <v-col cols="12">
        <v-card>
          <v-card-text v-html="item"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
