<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
          {{ data.title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-md-8">
          {{ data.description }}
          </p>
          <v-timeline dense>
          <v-timeline-item v-for="item in data.info" v-bind:key="item.title">
            <FloatingCard :link="item.link">
              <Block v-bind:title="item.title"><p v-html="item.body"></p></Block>
            </FloatingCard>
          </v-timeline-item>
          </v-timeline>
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

