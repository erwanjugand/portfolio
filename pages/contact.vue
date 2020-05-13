<template>
  <main>
    contact
    <PForm>
      <PField
        v-model="form.email"
        required
        type="email"
        :label="$t('contact.email')"
        autocomplete="email"
      />
      <PField
        v-model="form.title"
        type="text"
        required
        :label="$t('contact.title')"
      />
      <PField
        v-model="form.message"
        required
        type="textarea"
        :min-rows="2"
        :label="$t('contact.message')"
      />
      <PButton icon="sparkles">
        Envoyer
      </PButton>
    </PForm>
  </main>
</template>

<script>

export default {
  nuxtI18n: {
    paths: {
      fr: '/contact',
      en: '/contact'
    }
  },

  data () {
    return {
      form: {
        email: '',
        title: '',
        message: ''
      }
    }
  }
}
</script>
