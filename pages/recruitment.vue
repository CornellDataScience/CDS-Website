<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
          {{ data.title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-8">
          {{ data.description }}
          </p>
          <div v-for="item in data.info">
            <v-sparkline :line-width="0.5" :gradient="['grey']" :height="10" :padding="2" :smooth="10" :value="[1, 1]" auto-draw class="mb-4"></v-sparkline>
            <v-row class="mt-4">
                <v-col cols="12" md="4">
                    <p class="flex-grow-0 text-h4 font-weight-medium mx-8 text-uppercase primary--text"> {{ item.title }} </p>
                </v-col>
                <v-col cols="12" md="8">
                    <p v-html="item.body"></p>
                </v-col>
            </v-row>
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

