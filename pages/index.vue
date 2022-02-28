<template>
  <div>
    <div>
      <v-parallax width="100%" :src="require(`../assets/img/${data.img}`)" :lazy-src="require(`../assets/img/${data.img}`)" 
      gradient="rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)" height="750" class="align-center">
          <p class="mx-2 d-flex justify-center text-h2 white--text font-weight-normal text-uppercase title">Cornell Data Science</p>
      </v-parallax>
      <p class="text-h3 justify-center font-weight-medium text-uppercase text-center mt-16 primary--text">
          About
      </p>
    </div>
    <v-container class="my-8 px-8 px-md-0">
        <v-row justify="center">
            <v-col cols="12" md="9">
                <p class="body-1 text--black font-weight-light ml-4 mx-md-18">
                {{ data.description }}
                </p> 
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <br>
        <v-row >
            <v-col cols="12" sm="6" md="4" height="100%" v-for="(item, index) in data.info" v-bind:key="item.title" justify="center">
                <v-hover v-slot:default="{ hover }">
                <v-card shaped class="rounded-xl py-4 d-flex flex-column" :to="item.linker" height="100%" :elevation="hover ? 12 : 2">
                    <v-card-title class="text-h5 text-center font-weight-medium mx-md-8 justify-center primary--text"> {{ item.title }}</v-card-title>
                    <v-card-text class="font-weight-small"> 
                        {{ item.body }}
                    </v-card-text>
                    <v-img :src="require(`../assets/img/${item.img}`)" max-height="200" class="mt-auto rounded-xl mx-4" height="200px"></v-img>
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
           <v-img aspect-ratio="3" class="rounded-xl":src="require(`../assets/img/home1.jpg`)"></v-img> 
          </Block>
        </FloatingCard>
        <FloatingCard link="/people">
          <Block title="People">
            <template v-slot:leftContent>
            <p>{{ data.people }}</p>
            </template>
            <v-img aspect-ratio="2.5" class="rounded-xl":src="require(`../assets/img/people.jpg`)"></v-img> 
          </Block>
        </FloatingCard>
        <FloatingCard link="/education">
          <Block title="Education">
            <template v-slot:leftContent>
              <p>{{ data.education }}</p>
            </template>
            <v-img aspect-ratio="3" class="rounded-xl":src="require(`../assets/img/info1998_2.png`)"></v-img> 
          </Block>
        </FloatingCard>

        <br>
        <p class="text-h5 body-2 font-weight-medium text-uppercase text-center mt-8" style="color: grey;">
            A special thanks to our sponsors:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem)); align-items: center;" class="center justify-center mx-16" align="center" justify="center">
            <div v-for="img in data.sponsorImages" v-bind:key="img" class="center">
                <v-img :src="require(`../assets/img/${img}`)" :aspect-ratio="1" class="justify-center mx-4 my-4" contain></v-img>
            </div>
        </div>
    </v-container>
  </div>
</template>

<script>
    import data from '~/assets/json/home.json';
    import teams from '~/assets/json/teams.json';
    export default {
        data () {
            return {
                data: data,
                teams: teams
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
