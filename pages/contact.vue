<template>
  <main>
    contact
    <PForm>
      <PField
        v-model="form.text"
        required
        type="email"
        :label="$t('contact.email')"
      />
      <PField
        v-model="form.password"
        type="text"
        :label="$t('contact.title')"
      />
      <PField
        v-model="form.textarea"
        required
        type="textarea"
        :min-rows="2"
        :max-rows="6"
        :label="$t('contact.message')"
      />
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
        title: null,
        password: 'test',
        number: null,
        textArea: null
      }
    }
  }
}
</script>
