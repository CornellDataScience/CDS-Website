<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
          {{ data.title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-md-8">
          {{ data.description }}
          </p>
          <div v-for="item in data.info" v-bind:key="item.title">
            <Block v-bind:title="item.title"><p v-html="item.body"></p></Block>
          </div>
      </div>
  </div>
</template>

<script>
    import data from '~/assets/json/recruitment.json';
    export default {
        data () {
            return {
                data: data
            }
        }
    }
</script>

