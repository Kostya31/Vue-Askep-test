<template>
  <div class="star-rating">
    <label class="star-rating__star" v-for="rating in ratings" :key="rating" :class="{'is-selected': ((tempValue >= rating.number) && tempValue != null), 
        'is-disabled': disabled}" @click="setRating(rating.number)" @mouseover="star_over(rating.number)" @mouseleave="star_out">
      <input class="star-rating star-rating__checkbox" type="radio" :value="rating.number" v-model="value">★<small>{{rating.text}}</small></label>
  </div>

</template>

<script>
export default {
  props: {
    'value': Number,
    'id': String,
    'required': Boolean
  },
  data() {
    return {
      tempValue: null,
      ratings: [{
          number: 1,
          text: 'Дуже погано'
        },
        {
          number: 2,
          text: 'Погано'
        },
        {
          number: 3,
          text: 'Нормально'
        },
        {
          number: 4,
          text: 'Добре'
        },
        {
          number: 5,
          text: 'Дуже добре'
        }
      ]
    }
  },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over(index) {

      this.tempValue = index;
    },
    star_out() {

      this.tempValue = this.value;

    },
    setRating(value) {
      this.tempValue = value;
      this.$emit('setRatingg', value);
    }
  },
  watch: {
    value(val) {
      this.tempValue = val
    }
  }
}
</script>

<style lang="scss" scoped>

.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating__star {
  display: inline-flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 28px;
  color: #ababab;
  transition: color 0.2s ease-out;
  small {
    font-size: 8px;
  }
}

.star-rating__star:hover {
  cursor: pointer;
}

.star-rating__star.is-selected {
  color: #ffd700;
}

.star-rating__star.is-disabled:hover {
  cursor: default;
}
</style>
