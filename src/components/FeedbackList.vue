<template>
  <div v-show="feedbacks.length > 0">
    <h3>Відгуки про лікаря:</h3>
    <feedback-item :feedback="feedback" v-for="feedback in showFeedback" :key="feedback.key"></feedback-item>
  </div>
  <p v-show="feedbacks.length === 0">Список відгуків пустий</p>
  
  <button class="btn" v-show="feedbacks.length > fedbackToShow" @click="showMore">Зававтажити відгуки</button>
  

</template>

<script>
import FeedbackItem from '@/components/FeedbackItem.vue';

export default {
  components: {
    FeedbackItem
  },
  props: {
    feedbacks: {
      type: Array,
      requared: true
    },
    show: Number
  },
  data() {
    return {
      fedbackToShow: this.show,
    }
  },
  methods: {
    showMore() {
      this.fedbackToShow += this.fedbackToShow
    }
  },
  computed: {
    showFeedback() {
      if (this.feedbacks.length) {
        let arr = []
        for (let i = 0; i < this.fedbackToShow; i++) {
          if(i < this.feedbacks.length){
            arr.push(this.feedbacks[i])
          }    
        }
        return arr
      }
    }
  }
}
</script>

<style scoped lang="scss">

h3{
  color: #54bae2
}
p{
  color: #91c3d6;
  font-size: 20px;
}

</style>
