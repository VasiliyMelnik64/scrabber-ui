<template>
  <v-container align="start">
    <Error :title="error" />
    <Form @submit-data="fetchData" />
    <List :title="title" :data="tags" />
  </v-container>
</template>

<script>
import Form from "@/components/Form";
import List from "@/components/List";
import Error from "@/components/Error";

export default {
  name: "HomePage",
  components: { Form, List, Error },
  data() {
    return { title: "" };
  },
  methods: {
    async fetchData(queryString) {
      this.$store.dispatch("requestData", queryString);
      this.title = queryString;
    },
  },
  computed: {
    tags() {
      return this.$store.getters.getData;
    },
    error() {
      return this.$store.getters.getError;
    },
  },
};
</script>
<style>
.card-text {
  font-weight: bold;
}
</style>
