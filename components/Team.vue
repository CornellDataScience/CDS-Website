<template>
  <div class="px-4">
    <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">{{ title }}</p>
    <div class="mx-md-16 my-8">
      <p v-if="leads.length !== 0" class="body-1 font-weight-light mx-md-8">
        <b class="font-weight-bold">Team Leads: </b> 
        <span v-for="(lead, index) in leads" v-bind:key="lead.name">
            <a v-bind:href="lead.link" class="text-decoration-none">{{ lead.name }}</a><span v-if="index != Object.keys(leads).length - 1">, </span>
        </span>
      </p>
      <p v-if="advisors.length !== 0" class="body-1 font-weight-light mx-md-8">
            <b class="font-weight-bold">Advisor: </b> 
            <span v-for="(advisor, index) in advisors" v-bind:key="advisor.name">
                <a v-bind:href="advisor.link" class="text-decoration-none">{{ advisor.name }}</a><span v-if="index != Object.keys(advisors).length -1">, </span>
            </span>
      </p>

      <v-sparkline :line-width="0.5" :gradient="['grey']" :height="10" :padding="2" :smooth="10" :value="[1, 1]" auto-draw class="mb-4"></v-sparkline>

      <div class="text-h3 my-8 text-center font-weight-medium text--uppercase primary--text">
        Current Members
      </div>
      <v-row justify="center" class="mx-md-16">
      <v-col cols="12" sm="4" md="3" xl="2" v-for="member in members" v-bind:key="member.name" class="text-center">
          <v-card class="rounded-xl mx-auto" height="300" width="200">
              <v-img :src="getImagePath(member.image)" class="fill-height"></v-img>
          </v-card>
          <p class="mt-2">{{member.name}}</p>
      </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      leads: Array,
      advisors: Array,
      members: Array
    },
    methods: {
      getImagePath(imageName) {
        try { 
          return require(`../assets/img/headshots/${imageName}`);
        } catch {
          return require(`../assets/img/headshots/default.jpg`);
        }
      }
    }
  }
</script>

