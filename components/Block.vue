<template>
    <!--<v-sparkline :line-width="0.5" :gradient="['grey']" :height="10" :padding="2" :smooth="10" :value="[1, 1]" auto-draw class="mb-4"></v-sparkline>-->
    <v-row class="pa-4">
        <v-col cols="12" md="4">
            <a v-if="link" class="flex-grow-0 text-h4 font-weight-medium text-uppercase primary--text text-decoration-none" :href="link"> {{ title }} </a>
            <p v-else class="flex-grow-0 text-h4 font-weight-medium text-uppercase primary--text text-decoration-none">
              <slot name="title"> {{ title }}</slot>
            </p>
            <slot name="leftContent"></slot>
        </v-col>
        <v-col cols="12" md="8">
            <slot></slot>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            title: String,
            link: String,
            alt: {
              type: Boolean,
              default: false
            }
        }
    }
</script>
