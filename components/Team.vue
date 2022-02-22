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
                <span v-for="(advisor, index) in advisors" v-bind:key="advisor.name">
                    <a v-bind:href="advisor.link" class="text-decoration-none">{{ advisor.name }}</a><span v-if="index != Object.keys(advisors).length -1">, </span>
                </span>
          </p>
          <Block title="About Us">
              <p v-html="about"></p>
          </Block>
          <Block title="Current Projects"> 
              <div v-for="proj in current" v-bind:key="proj.title" >
                <ProjectCard 
                v-bind:title="proj.title"
                v-bind:text="proj.text"
                v-bind:link="proj.link"
                ></ProjectCard>
              </div>
          </Block>
          <Block title="Past Projects">
              <div v-for="proj in past" v-bind:key="proj.title" >
                <ProjectCard 
                v-bind:title="proj.title"
                v-bind:text="proj.text"
                v-bind:link="proj.link"
                ></ProjectCard>
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
            advisors: Array,
            about: String,
            current: Array,
            past: Array
        }
    }
</script>

