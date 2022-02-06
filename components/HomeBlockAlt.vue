<template>
    <div>
        <div class="d-flex flex-wrap flex-md-nowrap mt-4 text-center justify-center align-center">
            <v-card elevation="5" height="500px">
                <div class="justify-center mt-4 order-2">
                    <v-card-title class="text-h5 font-weight-medium mx-md-8 align-center"> {{ title }}</v-card-title>
                    <v-card-text class="font-weight-small"> 
                        {{ data }}
                    </v-card-text>
                    <v-img :src="require(`../assets/img/${img}`)" class="mx-4 contain" height="200px"></v-img>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            index: Number,
            data: String,
            img: String
        }
    }
</script>