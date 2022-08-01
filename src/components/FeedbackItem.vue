<template>
  
    <div class="feedback-item">
      <div class="feedback-item__title feedback-item__row"><strong>Імя: </strong>{{ feedback.name }}</div>
      <div class="feedback-item__rating feedback-item__row"><strong>Рейтинг: </strong>{{ feedback.rating }}</div>
      <div class="feedback-item__description feedback-item__row" v-if="feedback.description !== ''">
        <strong>Опис: </strong>{{ feedback.description }}</div>
    </div>
    
  
</template>

<script>

export default {
  props: {
    feedback: {
      type: Array,
      requared: true
    }
  }
}
</script>

<style scoped lang="scss">
  .feedback-item {
    border-bottom : 1px solid #ced4da;
    padding: 0 0 15px 0;
    margin: 0 0 15px 0;
    &__row{
      padding: 2px 0;
      display: flex;
      strong{
        color: #a1a1a1
      }
    }
  }
  strong{
    display: inline-block;
    min-width: 120px;
    font-size: 14px;
  }

</style>
