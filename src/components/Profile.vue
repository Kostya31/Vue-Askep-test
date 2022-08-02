<template>
  <div class="container">
    <div class="profile">
      <div class="profile-header">
        <h2 class="profile-title upper">Назва лікаря</h2>
        <span>Середня оцінка: {{totalRating}}</span>
      </div>
      <div class="profile-body">
        <div class="profile-img">
          <img src="@/assets/img/doctor.jpg" alt="Фото лікаря" srcset="">
        </div>
        <div class="profile-content">
          <div class="profile-info">
            <div class="profile-info__row"><strong class="profile-info__label">Місто:</strong><span>Львів</span></div>
            <div class="profile-info__row"><strong class="profile-info__label">Місце Роботи:</strong><span>Львів, площа Ринок, 10</span></div>
            <div class="profile-info__row"><strong class="profile-info__label">Заклад:</strong><a href="# " target="blank">Відділення надання допомоги</a></div>
          </div>
          <div class="profile-info">
            <feedback-list :show="showFeedback" :feedbacks="feedbacks"></feedback-list>
            <button @click="showModal" class="btn btn-primary">Залишити відгук</button>
            <modal v-model:show="modalVisible">
              <feedback-form @setRating="getRating" @create="createFeedback"></feedback-form>
            </modal>
          </div>
        </div>
      </div>
    </div>
  </div>
  <alert :show="alertVisible">
    <span>Відгук успішно відправлений!</span>
  </alert>
</template>

<script>
import FeedbackForm from "@/components/FeedbackForm"
import FeedbackList from "@/components/FeedbackList"
import Alert from "@/components/UI/Alert"

export default {
  name: 'Profile',
  components: {
    FeedbackForm,
    FeedbackList,
    Alert
  },
  data() {
    return {
      feedbacks: [],
      modalVisible: false,
      showFeedback: 5,
      alertVisible: false
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true
    },
    createFeedback(feedback) {
      feedback.name !== "" && feedback.rating !== '' ? this.feedbacks.push(feedback) : ''
      this.modalVisible = false;
      this.alertVisible = true;
      setTimeout(() => this.alertVisible = false, 2000)
    }
  },
  computed: {
    totalRating() {
      if (this.feedbacks.length) {
        let sum = this.feedbacks.map(function (val) {
          return val.rating;
        }).reduce(function (a, b) {
          return a + b;
        });
        return (sum / this.feedbacks.length).toFixed(1)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
  margin-top: 40px;

  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &-title {
    font-size: 20px;
    font-weight: 300;
    color: rgb(84, 186, 226);
    margin: 0;
    padding-right: 20px;
  }

  &-img {
    

    img {
      object-fit: cover;
      width: 219px;
      height: 243px;
    }
  }

  &-body {
    border: 1px solid rgb(231, 231, 231);
    padding: 15px;
    display: flex;
  }
  &-info{
    &__row{
      display: flex;
    }

    &__label{
      margin-right: 15px;
      min-width: 150px;
      display: inline-block;
    }
    .btn{
      margin-right: 15px;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 15px;
  }
}
</style>
