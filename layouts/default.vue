<template>
  <v-app>
    <Navbar />

    <v-main>
      <!-- <v-container> -->
      <slot />
      <!-- </v-container> -->
    </v-main>

    <FooterContacts />
  </v-app>
</template>

<style scoped>
.nav-btn:before {
  color: var(--v-secondary-base);
}

.nav-btn:hover {
  color: var(--v-primary-base);
}

.nav-btn:activated {
  color: var(--v-primary-base);
}
</style>
