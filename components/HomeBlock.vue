<template>
    <div>
        <v-row class="mt-4 text-center">
            <v-col >
                <div v-if="index % 2">
                    <p class="text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                    <p class="font-weight-small mx-md-n16"> {{ data }}</p>
                </div>
                <div v-else>
                    <img :src="require(`../assets/img/${img}`)" height="200" width="300">
                </div>
            </v-col>
            <v-col >
                <div v-if="!(index % 2)">
                    <p class="text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                    <p class="font-weight-small mx-md-n16"> {{ data }}</p> 
                </div>
                <div v-else>
                    <img :src="require(`../assets/img/${img}`)" height="200" width="300">
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