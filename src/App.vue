<template>
  <div>
    <header class="header">
      <div class="container">
        <h1 class="upper center-text">Профіль лікаря</h1>
      </div>
    </header>
    <profile></profile>
  </div>

</template>

<script>
import Profile from '@/components/Profile.vue'

export default {
  name: 'App',
  components: {
    Profile,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}

.container {
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}

.header {
  background-color: #0f4377;

  h1 {
    color: #fff;
    margin: 0;
    font-size: 24px;
    padding: 15px 0;
  }
}

.upper {
  text-transform: uppercase
}

.center-text {
  text-align: center;
}

.row {
  display: flex;
}

.btn {
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
  position: relative;
  border: none;
  color: rgb(43, 67, 202);
  white-space: nowrap;
  background-clip: padding-box;
  text-align: center;
  padding: 15px 25px;
  margin-right: 15px;
  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
  &-primary {
    background-color: rgb(186, 208, 250)  
    }
   &:hover {
    background-color: rgb(191, 224, 252);
   }
   &:disabled{
    background-color: rgb(214, 214, 214)
   }
}

.fd-column {
  display: flex;
  flex-direction: column;
}


.btn-group {
  display: flex;
  justify-content: center;

  .btn {
    margin: 0 10px;
  }
}
</style>
