<template>
  <div>
    <div>
      <v-img :src="require(`../assets/img/${data.img}`)" :lazy-src="require(`../assets/img/${data.img}`)" 
      gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)" :aspect-ratio="3" class="align-center">
          <p class="mx-8 d-flex justify-center text-h2 white--text font-weight-medium text-uppercase title">
              Education
          </p>
      </v-img>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16 primary--text">
          About
      </p>
    </div>
    <v-container class="my-8">
        <v-row justify="center">
            <v-col cols="11" md="9">
                <p class="body-1 font-weight-light mx-md-18">
                {{ data.description }}
                </p> 
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <br>
        <FloatingCard v-for="(item, index) in data.info" :link="item.link" :key="item.title">
          <Block :title="item.title" :index="index">
            <template v-slot:leftContent>
            <p v-html="item.body"></p>
            </template>
            <v-img aspect-ratio="2.5" :src="get_image(item.img)" class="rounded-xl"></v-img>
          </Block>
        </FloatingCard>
        <br>
    </v-container>
  </div>
</template>

<script>
    import data from '~/assets/json/education.json';
    export default {
        data () {
            return {
                data: data
            }
        },
        methods: {
            get_image(img) {
              return require(`../assets/img/${img}`)
            }
        }
    }
</script>

<style scoped>
.title {
    position:relative; 
    /* top:300px; */
}
</style>
