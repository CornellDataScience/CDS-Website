<template>
  <div>
    <div>
      <v-parallax width="100%" :src="home.img" :lazy-src="home.img" gradient="rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)"
        height="600" class="align-center">
        <p class="mx-2 d-flex justify-center text-h2 text-white font-weight-medium title">
          Cornell Data Science
        </p>
      </v-parallax>
      <p class="text-h3 justify-center font-weight-medium text-center mt-16 primary--text">
        About
      </p>
    </div>
    <v-container class="my-8 px-8 px-md-0">
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="9">
          <p class="body-1 ml-4 mx-md-18">
            {{ home.description }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" height="100%" v-for="(item, index) in home.info " v-bind:key="item.title"
          justify="center">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card shaped class="rounded-xl py-4 d-flex flex-column" :to="item.linker" height="100%"
              :elevation="isHovering ? 12 : 2">
              <v-card-title class="text-h4 text-center font-weight-medium mx-md-8 justify-center primary--text mb-2"> {{
                item.title }}</v-card-title>
              <v-card-text>
                {{ item.body }}
              </v-card-text>
              <v-img cover :src="item.img" max-height="200" class="mt-auto rounded-xl mx-4" height="200px"></v-img>
            </v-card>
          </v-hover>
          <!--<HomeBlockAlt v-bind:title="item.title" v-bind:index="index" v-bind:data="item.body" v-bind:img="item.img"></HomeBlockAlt>-->
        </v-col>
      </v-row>
      <FloatingCard link="/teams">
        <Block title="Teams">
          <template v-slot:leftContent>
            <p>{{ teams.description }}</p>
          </template>
          <v-img cover aspect-ratio="3" class="rounded-xl" :src="teamsImage"></v-img>
        </Block>
      </FloatingCard>
      <FloatingCard link="/teams/eboard">
        <Block title="People">
          <template v-slot:leftContent>
            <p>{{ home.people }}</p>
          </template>
          <v-img cover aspect-ratio="2.5" class="rounded-xl" :src="eboardImage"></v-img>
        </Block>
      </FloatingCard>
      <FloatingCard link="/education">
        <Block title="Education">
          <template v-slot:leftContent>
            <p>{{ home.education }}</p>
          </template>
          <v-img cover aspect-ratio="3" class="rounded-xl" :src="educationImage"></v-img>
        </Block>
      </FloatingCard>

      <br>
      <p class="text-h5 body-2 font-weight-medium text-uppercase text-center mt-8" style="color: grey;">
        A special thanks to our sponsors:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem)); align-items: center;"
        class="center justify-center mx-16" justify="center">
        <div v-for=" img  in  home.sponsorImages " v-bind:key="img" class="center">
          <v-img :src="img" :aspect-ratio="1" class="justify-center mx-4 my-4" contain></v-img>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import home from '~/assets/json/home.json';
import teams from '~/assets/json/teams.json';

home.img = getImgUrl(home.img)
home.sponsorImages = home.sponsorImages.map((img) => getImgUrl(img))
home.info = home.info.map((info) => ({ ...info, img: getImgUrl(info.img) }))

const educationImage = getImgUrl('info1998_2.png')
const eboardImage = getImgUrl('people.jpg')
const teamsImage = getImgUrl('home1.jpg')

useHead({
  title: 'Cornell Data Science',
  titleTemplate: null,
})
</script>

<style scoped>
.title {
  position: relative;
  /* top:300px; */
}
</style>
