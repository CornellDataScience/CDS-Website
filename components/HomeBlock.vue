<template>
    <div>
        <v-row class="mt-4 text-center">
            <v-col class = "flex-grow-0 mx-auto">
                <div v-if="index % 2">
                    <p class="flex-grow-0 text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                    <p class="flex-grow-0 font-weight-small mx-md-n16"> {{ data }}</p>
                </div>
                <div v-else>
                    <img class="flex-grow-0" :src="require(`../assets/img/${img}`)" height="200" width="300">
                </div>
            </v-col>
            <v-col class = "flex-grow-0 mx-auto">
                <div v-if="!(index % 2)">
                    <p class="flex-grow-0 text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                    <p class="flex-grow-0 font-weight-small mx-md-n16"> {{ data }}</p> 
                </div>
                <div v-else>
                    <img class="flex-grow-0" :src="require(`../assets/img/${img}`)" height="200" width="300">
                </div>
            </v-col>
        </v-row>
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