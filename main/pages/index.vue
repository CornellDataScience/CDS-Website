<template>
  <div>
    <div>
      <v-img :src="require(`../assets/img/${data.img}`)" :lazy-src="require(`../assets/img/${data.img}`)" 
      gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)" :aspect-ratio="16/9" class="align-center">
          <p class="mx-8 d-flex justify-center text-h2 white--text font-weight-medium text-uppercase title">
              {{ data.imgText }}
          </p>
      </v-img>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16 primary--text">
          About
      </p>
    </div>
    <v-container class="my-8">
        <v-row justify="center">
            <v-col cols="9">
                <p class="body-1 font-weight-light mx-md-18">
                {{ data.description }}
                </p> 
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <br>
        <v-row v-for="(item, index) in data.info" v-bind:key="item.title" justify="center">
            <v-col cols="9">
                <HomeBlockAlt v-bind:title="item.title" v-bind:index="index" v-bind:data="item.body" v-bind:img="item.img"></HomeBlockAlt>
            </v-col>
        </v-row>
        <br>
        <p class="text-h5 body-2 font-weight-medium text-uppercase text-center mt-8" style="color: grey;">
            A special thanks to our sponsors:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem)); align-items: center;" class="center justify-center mx-16">
            <div v-for="img in data.sponsorImages" v-bind:key="img" class="center">
                <v-img :src="require(`../assets/img/${img}`)" :aspect-ratio="1" class="justify-center mx-4 my-4" contain></v-img>
            </div>
        </div>
    </v-container>
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

<style scoped>
.title {
    position:relative; 
    /* top:300px; */
}
</style>
