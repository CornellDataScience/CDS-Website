<template>
    <!-- <div class="indigo darken-4 d-flex align-center mb-4" :aspect-ratio="3"> -->
    <div>
    <v-img 
    gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)" :aspect-ratio="3" class="d-flex align-center mb-4 indigo darken-4">
        <p class="mx-8 d-flex justify-center text-h2 white--text font-weight-medium text-uppercase title">
            Contact
        </p>
    </v-img>
    <div class="d-flex align-center justify-center">
      <iframe class="mx-auto d-flex align-center justify-center" src="https://docs.google.com/forms/d/e/1FAIpQLSeLyZ9pGAXYWuLiis2-hCV4fqdIQqy4gR74Q0ns2b7NBYHlPg/viewform?embedded=true" width="640" height="963" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    <div class="mx-16 my-16">
      <p class="body-1 font-weight-light mx-md-8">
        For general questions about the team or interest in what we're doing, please reach Cornell Data Science at <a href="mailto: cornelldatascience@gmail.com">cornelldatascience@gmail.com</a>!
        <br/>
        <br/>
        If you are a company interested in sponsoring us, please view our sponsorship packet below, and reach out to us if you have any questions. 
      </p>
      <div class="text-h4 text--secondary d-flex align-center">
        <NuxtLink to="/CDS_Sponsorship.pdf" class="mx-auto text-uppercase text-decoration-none"> Sponsorship Packet </NuxtLink>
      </div>
    </div>
    </div>
</template>
