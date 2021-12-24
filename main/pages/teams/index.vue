<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
          {{ data.title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-md-8">
            {{ data.description }}
          </p>
          <p class="text-h4 primary--text font-weight-normal text-uppercase text-center mt-8">
            {{ data.subtitle }}
          </p>
          <p class="body-1 font-weight-light mx-md-8">
            {{ data.subdescription }}
          </p>
          <div v-for="item in data.info" v-bind:key="item.title">
            <Block v-bind:title="item.name"><p v-html="item.description"></p></Block>
          </div>
      </div>
  </div>
</template>

<script>
    import data from '~/assets/json/teams.json';
    export default {
        data () {
            return {
                data: data
            }
        }
    }
</script>

