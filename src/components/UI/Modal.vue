<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal_dialog">
      <div class="modal_header">
      <slot name="header"></slot>
    </div>
    <div class="modal_body" @click.stop>
      <slot name="body"></slot>
    </div>
    <div class="modal_footer">
      <slot name="footer"></slot>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.modal {
  content: '';
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_dialog {
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
}
</style>
