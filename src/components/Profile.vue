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
            <search v-model:queryValue="searchQuery"></search>
            <!-- <div class="search">
              <input type="text" v-model="searchQuery" placeholder="Пошук" class="form-control">
            </div> -->
            <div class="filter">
              <select v-model="selectedSort" class="form-control">
                <option disabled value="">Сортувати по</option>
                <option v-for="option in sortOption" :value="option.value" :key="option.id">{{option.name}}</option>
              </select>
            </div>
            <feedback-list @delete2="deleteItem2" :show="showFeedback" :feedbacks="filteredList"></feedback-list>
            <button @click="showModal" class="btn btn-primary">Залишити відгук</button>
            <div class="feedback">
              <modal v-model:show="modalVisible">
                <template #:header>
                  <h2 class="title upper center-text">Залишити оцінку та відгук</h2>
                </template>
                <template #body>
                  <feedback-form :clear="clearForm" @setRating="getRating" @create="createFeedback"></feedback-form>
                </template>
                <template #footer>
                  <div class="btn-group">

                    <!-- <button class="btn" @click.prevent="clearForm">Очистити</button> -->
                    <!-- <button :disabled="feedback.name && !feedback.rating == false ? false : true " class="btn btn-primary" @click.prevent="createFeedback">Відправити</button> -->
                  </div>
                </template>
              </modal>
            </div>

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
import Search from "@/components/UI/Search"

export default {
  name: 'Profile',
  components: {
    FeedbackForm,
    FeedbackList,
    Alert,
    Search
  },
  data() {
    return {
      feedbacks: [],
      modalVisible: false,
      showFeedback: 5,
      alertVisible: false,
      searchQuery: '',
      selectedSort: '',
      sortOption: [{
          id: 1,
          value: 'up',
          name: 'Рейтинг по зростанні'
        },
        {
          id: 1,
          value: 'down',
          name: 'Рейтинг по спаданні'
        }
      ]
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
      localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks))
      setTimeout(() => this.alertVisible = false, 2000)
    },
    deleteItem2(id) {
      // console.log(id);
      this.feedbacks = this.feedbacks.filter(item => {
        return item.id !== id
      })
      localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks))
    },
    getLocalStorageFeedback() {
      let localStor = JSON.parse(localStorage.getItem('feedbacks'))
      if(localStor != null){
        this.feedbacks = JSON.parse(localStorage.getItem('feedbacks'))
      }
    }
  },
  mounted() {
    this.getLocalStorageFeedback()
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
      } else {
        return 0
      }
    },
    sortedPosts() {
      return this.feedbacks.sort((feedb1, feedb2) => {
        if (this.selectedSort == 'up') {
          return feedb1['rating'] - feedb2['rating']
        }
        if (this.selectedSort == 'down') {
          return feedb2['rating'] - feedb1['rating']
        }
      })
    },
    filteredList() {
      return this.sortedPosts.filter(post => {
        return post.name.toUpperCase().includes(this.searchQuery.toUpperCase()) || post.description.toUpperCase().includes(this.searchQuery.toUpperCase())
      })
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

  &-info {
    &__row {
      display: flex;
    }

    &__label {
      margin-right: 15px;
      min-width: 150px;
      display: inline-block;
    }

    .btn {
      margin-right: 15px;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 15px;
  }
}

.search {
  margin-top: 20px;
}

a {
  color: rgb(84, 186, 226);
  text-decoration: none;

  &:hover {
    color: rgb(52, 148, 185);
  }
}
</style>
