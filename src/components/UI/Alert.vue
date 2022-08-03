<template>
  <div class="alert alert-success" v-if="show" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props:{
    show: Boolean,
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 5;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  &-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
}
</style>
