<template>
  <div>
      <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
          {{ title }}
      </p>
      <div class="mx-16 my-8">
          <p class="body-1 font-weight-light mx-md-8">
                <b class="font-weight-bold">Team Leads: </b> 
                <span v-for="(lead, index) in leads" v-bind:key="lead.name">
                    <a v-bind:href="lead.link" class="text-decoration-none">{{ lead.name }}</a><span v-if="index != Object.keys(leads).length - 1">, </span>
                </span>
          </p>
          <p class="body-1 font-weight-light mx-md-8">
                <b class="font-weight-bold">Advisor: </b> 
                <span>
                    <a v-bind:href="advisor.link" class="text-decoration-none">{{ advisor.name }}</a>
                </span>
          </p>
          <Block title="About Us">
              <p v-html="about"></p>
          </Block>
          <Block title="Current Projects">
              <li v-for="proj in current" v-bind:key="proj.title" class="mb-4 font-weight-medium">
                  <a v-bind:href="proj.link" class="secondary--text text-decoration-none">{{ proj.title }}</a>
              </li>
          </Block>
          <Block title="Past Projects">
              <li v-for="proj in past" v-bind:key="proj.title" class="mb-4 font-weight-medium">
                  <a v-bind:href="proj.link" class="secondary--text text-decoration-none">{{ proj.title }}</a>
              </li>
          </Block>
          <Block title="Members">
              <div v-for="(section, key) in members" v-bind:key="key" class="mb-6">
                  <div class="secondary--text text-uppercase text-h6 mb-4">{{ key }}</div>
                  <span v-for="(person, index) in section" v-bind:key="person.name">
                      <a v-bind:href="person.link" class="text-decoration-none">{{ person.name }}</a><span v-if="index != Object.keys(section).length - 1" class="mr-2">, </span>
                  </span>
              </div>
          </Block>
      </div>
  </div>
</template>

<script>
    export default {
        props: {
            title: String,
            leads: Array,
            advisor: Object,
            about: String,
            current: Array,
            past: Array,
            members: Object
        }
    }
</script>

