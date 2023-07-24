<template>
  <div class="px-4">
    <p class="text-h3 font-weight-medium text-center mt-16">
      {{ title }}
    </p>
    <div class="mx-md-16 my-8">
      <p v-if="leads.length !== 0" class="body-1 mx-md-8">
        <b class="font-weight-bold">Team Leads: </b>
        <span v-for="(lead, index) in leads" v-bind:key="lead.name">
          <a v-bind:href="lead.link" class="text-decoration-none">{{ lead.name }}</a><span
            v-if="index != Object.keys(leads).length - 1">, </span>
        </span>
      </p>
      <p v-if="advisors.length !== 0" class="body-1 mx-md-8">
        <b class="font-weight-bold">Advisor: </b>
        <span v-for="(advisor, index) in advisors" v-bind:key="advisor.name">
          <a v-bind:href="advisor.link" class="text-decoration-none">{{ advisor.name }}</a><span
            v-if="index != Object.keys(advisors).length - 1">, </span>
        </span>
      </p>

      <v-divider thickness="1" class="mt-8" />

      <div class="text-h3 my-8 text-center font-weight-medium primary--text">
        Current Members
      </div>
      <v-row justify="center" class="mx-md-16">
        <v-col cols="12" sm="4" md="3" xl="2" v-for="member in editedMembers" v-bind:key="member.name"
          class="text-center">
          <v-card class="rounded-xl mx-auto" height="200" width="200">
            <v-img cover :src="member.image" class="fill-height" max-height="200"></v-img>
          </v-card>
          <p class="mt-2">{{ member.name }}</p>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script setup lang="ts">
// types of subteam objects, probably should pull into utils or types.ts later for visibility
const props = defineProps<{
  title: string,
  leads: { name: string, link: string }[],
  advisors: { name: string, link: string }[],
  members: { name: string, image: string }[],
}>()

// need to convert to refs and set a new variable first, since props are uneditable
let membersRef = toRef(props.members)
const editedMembers = membersRef.value.map((member) => ({ ...member, image: getImgUrl(`headshots/${member.image}`) }))
</script>
