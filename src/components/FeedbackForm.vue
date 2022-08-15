<template>

  <form class="form-feedback">
    <div class="input-group row">
      <label>Представтесь <span>*</span></label>
      <div class="row fd-column">
        <input type="text" class="form-control" :maxlength="maxName" :disabled="anonimus" placeholder="Прізвище імя по батькові" requared v-model="feedback.name" name="full-name">
        <small>Залишилось символів: {{maxName - feedback.name.length}}</small>
      </div>
      <div class="row">
        <input type="checkbox" v-model="anonimus" name="anonimus" id="anonimus">
        <label for="anonimus">Анонімно</label>
      </div>
    </div>

    <div class="input-group row">
      <label>Оцініть роботу лікаря: <span>*</span></label>
      <star-rating :required="true" :value="feedback.rating" @setRatingg="getRating"></star-rating>

    </div>
    <div class="input-group row">
      <label>Напишіть відгук:</label>
      <div class="row fd-column">
        <textarea class="form-control" v-model="feedback.description" :maxlength="maxDesc" placeholder="Ваш відгук про лікаря" name="feedback-description"></textarea>
        <small>Залишилось символів: {{maxDesc - feedback.description.length}}</small>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn" @click.prevent="clearForm">Очистити</button>
      <button :disabled="feedback.name && !feedback.rating == false ? false : true " class="btn btn-primary" @click.prevent="sendFeedback">Відправити</button>
    </div>
  </form>

</template>

<script>
import StarRating from '@/components/UI/StarRating'
import axios from 'axios'

export default {
  name: "FeedbackForm",
  components: {
    StarRating
  },
  data() {
    return {
      anonimus: false,
      maxName: 50,
      maxDesc: 500,
      feedback: {
        name: '',
        rating: 0,
        description: ''
      }
    }
  },
  methods: {
    createFeedback() {
      this.feedback.id = Date.now()
      this.$emit('create', this.feedback);
      this.feedback = {
        name: '',
        rating: 0,
        description: ''
      }
    },
    getRating(rating) {
      this.feedback.rating = rating
    },
    clearForm() {
      this.feedback = {
        name: '',
        rating: 0,
        description: ''
      }
      this.anonimus = false
    },
    sendFeedback() {
      
      // axios.get('https://reqres.in/api/user/2')
      //   .then(function (response) {
      //     console.log('axios',response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })

      // =-------------fetch 
      // fetch('https://reqres.in/api/user/2')
      //   .then(function(res){
      //     console.log('fetch',res);
      //     return res.json()
      //   })  
      //   .then(function(data) {
      //     console.log('data',data);
      //   })

      // ********************* POST ************************
      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(this.feedback),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => {
          console.log('resp', response)
          return response.json()
        })
        .then((json) => console.log(json));

        this.createFeedback();
    }
  },
  watch: {
    anonimus(val) {
      val ? this.feedback.name = 'Анонім' : this.feedback.name = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  .title {
    font-size: 20px;
    color: rgb(84, 186, 226);
  }
}

.input-group {
  margin: 15px 0;
  display: flex;
  align-items: center;
  position: relative;

  small {
    font-size: 12px;
    color: #979797;
  }

  label {
    font-size: 14px;
    margin-right: 15px;
    color: #4c92d8;
    font-size: 14px;

    span {
      color: rgb(218, 66, 66);
    }
  }
}
</style>
