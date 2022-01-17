<template>
    <div>
        <v-sparkline :line-width="0.5" :gradient="['grey']" :height="10" :padding="2" :smooth="10" :value="[1, 1]" auto-draw class="mb-4"></v-sparkline>
        <v-row class="mt-4">
            <v-col cols="12" md="4">
                <p class="flex-grow-0 text-h4 font-weight-medium mx-md-8 text-uppercase primary--text"> {{ title }} </p>
            </v-col>
            <v-col cols="12" md="8">
                <slot></slot>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>