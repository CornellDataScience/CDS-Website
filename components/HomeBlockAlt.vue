<template>
    <div>
        <div class="d-flex flex-wrap flex-column flex-md-nowrap mt-4 text-center justify-center align-center" height="100%">
            <v-hover v-slot:default="{ hover }">
            <v-card shaped :elevation="hover ? 12 : 2" height="100%" class="flexcard d-flex rounded-xl flex-column my-4">
                <v-container height="100%" fluid>
                <v-col height="100%">
                  <v-row class="justify-center">
                    <v-card-title class="text-h5 text-center font-weight-medium mx-md-8 justify-center primary--text"> {{ title }}</v-card-title>
                  </v-row>
                  <v-row class="justify-center">
                    <v-card-text class="font-weight-small"> 
                        {{ data }}
                    </v-card-text>
                  </v-row>
                  <!--<div class="justify-center mt-4 order-2">-->
                  <v-spacer></v-spacer> 
                  <v-row class="justify-center">
                    <v-img :src="require(`../assets/img/${img}`)" class="rounded-xl mx-4 contain" height="200px"></v-img>
                  </v-row>
                  <!--<div class="justify-center mb-4 order-2">
                      <v-img :src="require(`../assets/img/${img}`)" class="rounded-xl mx-4 contain" height="200px"></v-img>
                  </div>-->
                </v-col>
                </v-container>
            </v-card>
            </v-hover>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            index: Number,
            data: String,
            img: String,
            linker: String
        }
    }
</script>
