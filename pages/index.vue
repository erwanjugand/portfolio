<template>
  <main id="index">
    <h1 :background="'portfolio-v3'" class="title" v-text="'portfolio-v3'" />
    <PAbout />
    <PTools />
    <PSkills />
    <PExperiences />
    <PMoreInformation />
    <PContact />
    <PFooter />
  </main>
</template>

<style lang="scss">
#index {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2em;
    font-weight: 500;
    text-align: center;
  }
}
</style>
