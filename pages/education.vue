<template>
  <div>
    <div>
      <v-img cover :src="education.img" :lazy-src="education.img" gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)"
        :aspect-ratio="3" class="align-center">
        <p class="mx-8 d-flex justify-center text-h2 text-white font-weight-medium title">
          Education
        </p>
      </v-img>
      <p class="text-h3 font-weight-medium text-center mt-16 primary--text">
        About
      </p>
    </div>
    <v-container class="my-8">
      <v-row justify="center">
        <v-col cols="11" md="9">
          <p class="body-1 mx-md-18">
            {{ education.description }}
          </p>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <br>
      <FloatingCard v-for="(item, index) in education.info" :link="item.link" :key="item.title">
        <Block :title="item.title" :index="index">
          <template v-slot:leftContent>
            <p v-html="item.body"></p>
          </template>
          <v-img cover aspect-ratio="2" :src="item.img" class="rounded-xl" />
        </Block>
      </FloatingCard>
      <br>
    </v-container>
  </div>
</template>
  
<script setup lang="ts">
import education from '~/assets/json/education.json';

education.img = getImgUrl(education.img)
education.info = education.info.map((info) => ({ ...info, img: getImgUrl(info.img) }))

useHead({ title: 'Education' })
</script>
  
<style scoped>
.title {
  position: relative;
  /* top:300px; */
}
</style>