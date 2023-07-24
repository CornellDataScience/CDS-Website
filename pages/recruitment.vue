<template>
    <div>
        <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
            {{ recruitment.title }}
        </p>
        <div class="mx-16 my-8">
            <p class="body-1 font-weight-light mx-md-8">
                {{ recruitment.description }}
            </p>
            <v-timeline dense class="hidden-sm-and-down">
                <v-timeline-item v-for="item in recruitment.info" v-bind:key="item.title">
                    <FloatingCard :link="item.link">
                        <Block v-bind:title="item.title">
                            <p v-html="item.body"></p>
                        </Block>
                    </FloatingCard>
                </v-timeline-item>
            </v-timeline>
            <FloatingCard v-for="item in recruitment.info" v-bind:key="item.title" class="hidden-md-and-up">
                <Block v-bind:title="item.title">
                    <p v-html="item.body"></p>
                </Block>
            </FloatingCard>
        </div>
    </div>
</template>

<script setup lang="ts">
import recruitment from '~/assets/json/recruitment.json';

useHead({ title: 'Recruitment' })
</script>
