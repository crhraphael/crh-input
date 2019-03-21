<template>
  <div class="crh-input text">
    <input
      :id="id"
      type="text"
      value=""
      name=""
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.started();
  },
  methods: {
    teste() {
      console.log('cover');
    },
    started() {
      console.log('as');
    },
  },
};
</script>


<style scoped>
    input {
        border-radius: 3px;
        border-width: 3px;
        border-color: tomato;
        padding-left: 5px;
        background-color: rgb(255, 154, 137);
        outline-color: brown;
    }
</style>
