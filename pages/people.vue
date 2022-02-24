<template>
    <div>
    <v-img :src="require(`../assets/img/VictorPresenting.jpg`)" :lazy-src="require(`../assets/img/VictorPresenting.jpg`)" 
    gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)" :aspect-ratio="3" position="top 33% right 70%" class="d-flex align-center mb-4">
        <!--<v-container>
        <v-row>-->
          <p class="ml-16 d-flex justify-center text-h2 white--text font-weight-medium text-uppercase title">
              People
          </p>
        <!--</v-row>
        </v-container>-->
    </v-img>
    <div v-for="group in leads" class="mt-16" v-bind:key="group.title">
        <div class="text-h3 my-8 mx-4 mx-md-0 text-center font-weight-medium text--uppercase primary--text">
        {{group.title}}
        </div>
        <!-- <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem)); align-items: center;"
        class="center justify-center mx-16"> -->
        <v-row justify="center" class="mx-16">
          <v-col cols="12" sm="4" md="3" xl="2" v-for="person in group.people" v-bind:key="person.name" class="text-center">
            <b>{{person.name}}</b>
            <p>{{person.title}}</p>
          </v-col>
        </v-row>
    </div>
    <div class="text-h3 my-8 text-center font-weight-medium text--uppercase primary--text">
      Members
    </div>
    <div v-for="group in members" class="mx-16 mb-8" v-bind:key="group.subtitle">
        <v-lazy> <v-sparkline :line-width="0.5" :gradient="['grey']" :height="10" :padding="2" :smooth="10" :value="[1, 1]" auto-draw class="mx-8 mb-4"></v-sparkline></v-lazy>
        <div class="text-h2 my-8 text-center font-weight-medium text--uppercase">
          {{group.subtitle}}
        </div>
        <v-row justify="center" class="mx-md-16">
          <v-col cols="12" sm="4" md="3" xl="2" v-for="person in group.people" v-bind:key="person.name" class="text-center">
            <v-card class="rounded-xl mx-auto" height="200" width="200">
              <v-img :src="require(`../assets/img/headshots/${person.image}`)" class="fill-height" max-height="200"></v-img>
            </v-card>
            <p class="mt-2">{{person.name}}</p>
          </v-col>
        </v-row>
    </div>
    </div>
</template>

<script>
    import leads from '~/assets/json/leads.json';
    import members from '~/assets/json/members.json';
    export default {
        data () {
            return {
                leads: leads,
                members: members
            }
        }
    }
</script>
