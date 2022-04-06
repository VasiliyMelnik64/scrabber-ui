<template>
  <v-form @submit.prevent="onSubmit" justify="center" align="start">
    <v-container align="start">
      <v-row justify="center" align="start">
        <v-col cols="10">
          <v-text-field
            v-model="value"
            label="Enter your text"
            outlined
            clearable
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn block x-large color="primary" type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return { value: "" };
  },

  methods: {
    onSubmit() {
      if (this.value) {
        this.$emit("submit-data", this.value);
      }
    },
  },
};
</script>
