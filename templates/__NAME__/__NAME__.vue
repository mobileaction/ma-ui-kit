<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">

export default {
  name: '__NAME__', // this part should be in lower kebab case e.g. --> if __NAME__ is MaName then ma-name
  props: {
    /**
       * The size of the button allows only some values
       * @value small, medium, large
    */
    msg: {
      required: true,
      default: '1',
      type: String,
    },
  },
};
</script>

<style scoped>

</style>
