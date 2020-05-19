<template>
  <main>
    contact
    <PForm :data="form" secure @submit="sendEmail">
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
      <STransitionFadeHeight>
        <div v-if="emailStatus === 'sent' || emailStatus === 'error'">
          <div :class="emailStatus === 'sent' ? 'message-success' : 'message-fail'">
            <PIcon :name="emailStatus === 'sent' ? 'checkCircle' : 'timesCircle'" />
            {{ $t(`contact.validation.${emailStatus}`) }}
          </div>
        </div>
      </STransitionFadeHeight>
      <PButton icon="sparkles">
        {{ $t('contact.send') }}
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
      },
      emailStatus: null
    }
  },

  methods: {
    sendEmail () {
      this.form = {
        email: '',
        title: '',
        message: ''
      }

      this.emailStatus = 'sent'
      setTimeout(() => { this.emailStatus = null }, 5000)
      // TODO : POST email datas
    }
  }
}
</script>
