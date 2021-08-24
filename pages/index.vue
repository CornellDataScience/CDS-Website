<template>
  <div>
    <v-img :src="require(`../assets/img/${data.img}`)" :lazy-src="require(`../assets/img/${data.img}`)" width="2500" height="650">
        <p class="text-h3 font-weight-medium text-uppercase text-center" style="color:white; position:relative; top:300px;">
            {{ data.imgText }}
        </p>
    </v-img>
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
        <p class="text-h5 body-2 font-weight-medium text-uppercase text-center mt-8" style="color: grey;">
            {{ data.sponsorHeader }}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem)); align-items: center;" class="center">
            <div v-for="img in data.sponsorImages" v-bind:key="img">
                <img :src="require(`../assets/img/${img}`)" width="75%">
            </div>
        </div>
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

