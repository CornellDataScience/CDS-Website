<template>
    <div>
        <div class="d-flex flex-row flex-wrap flex-md-nowrap mt-4 text-center justify-center align-center">
            <div v-if="index % 2" class="justify-center mx-4 mt-4 order-2">
                <p class="text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                <p class="font-weight-small "> {{ data }}</p>
            </div>
            <div v-else class="order-1">
                <img :src="require(`../assets/img/${img}`)" class="mx-4" height="240" width="360">
            </div>
            <div v-if="!(index % 2)" class="justify-center mx-4 mt-4 order-2 order-md-1">
                <p class="text-h5 font-weight-medium mx-md-8"> {{ title }}</p>
                <p class="font-weight-small "> {{ data }}</p> 
            </div>
            <div v-else class="order-1 order-md-2">
                <img :src="require(`../assets/img/${img}`)" class="mx-4" height="240" width="360">
            </div>
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