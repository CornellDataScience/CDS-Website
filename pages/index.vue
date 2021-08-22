<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16 primary--text">
          {{ data.title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-md-18">
          {{ data.description }}
          </p>
          <br>
          <hr>
          <div v-for="(item, index) in data.info" v-bind:key="item.title">
            <HomeBlock v-bind:title="item.title" v-bind:index="index" v-bind:data="item.body" v-bind:img="item.img"></HomeBlock>
          </div>
          <br>
          <hr>
      </div>
  </div>
</template>

<script>
    import data from '~/assets/json/home.json';
    export default {
        data () {
            return {
                data: data
            }
        }
    }
</script>

