<template>
    <div class="modal" v-if="show" @click="hideModal">
<!--      <div class="modal_header">-->
<!--        <slot></slot>-->
<!--      </div>-->
      <div class="modal_content" @click.stop>
        <slot></slot>
      </div>
<!--      <div class="modal_footer">-->
<!--        <slot></slot>-->
<!--      </div>-->
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
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_content {
  background-color: #fff;
  border-radius: 12px;
  padding: 15px;
}
</style>
