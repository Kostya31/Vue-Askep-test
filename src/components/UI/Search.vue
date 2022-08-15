<template>
  <div class="search">
    <input type="text" :value="queryValue" @input="updateInput" placeholder="Пошук" class="form-control">
  </div>
</template>

<script>
export default {
  name:'Search',
  props: {
    queryValue: [String, Number],
  },
  methods: {
    updateInput(event){
      this.$emit('update:queryValue', event.target.value)
    }
  }
}
</script>

<style>

</style>