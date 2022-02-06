<template>
    <div>
        <div class="d-flex flex-wrap flex-md-nowrap mt-4 text-center justify-center align-center">
            <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" height="400px" class="d-flex flex-column mt-4">
                <v-spacer>
                <div class="justify-center mt-4 order-2">
                    <v-card-title class="text-h5 text-center font-weight-medium mx-md-8 justify-center"> {{ title }}</v-card-title>
                    <v-card-text class="font-weight-small"> 
                        {{ data }}
                    </v-card-text>
                </div>
                </v-spacer>   
                <div class="justify-center mb-4 order-2">
                    <v-img :src="require(`../assets/img/${img}`)" class="mx-4 contain" height="200px"></v-img>
                </div>
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