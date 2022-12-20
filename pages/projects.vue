<template>
    <div>
        <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
        {{ projects.title }}
        </p>
        <div class="mx-16 my-8">
            <v-row >
                <v-col cols="12" sm="6" md="4" height="100%" v-for="item in projects.cdsproj" v-bind:key="item.name" justify="center">
                    <v-hover v-slot:default="{ hover }">
                    <v-card shaped class="rounded-xl py-4 d-flex flex-column" :href="item.github" height="100%" :elevation="hover ? 12 : 2">
                        <v-card-title class="text-h5 text-center font-weight-medium mx-md-8 justify-center primary--text"> {{ item.name }}</v-card-title>
                        <v-card-text class="font-weight-small">
                            {{ item.description }}
                        </v-card-text>
                    </v-card>
                    </v-hover>
                </v-col>
            </v-row>
      </div>
    </div>
</template>

<script>
    import projects from '~/assets/json/projects.json';
    export default {
        data () {
            return {
                projects: projects,
            }
        }
    }
</script>