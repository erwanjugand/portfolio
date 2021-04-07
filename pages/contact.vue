<template>
  <main>
    <section class="container">
      <h1 v-text="$t('contact.mainTitle')" />
      <PCard class="form-contact">
        <template #header>
          <h2>
            <PIcon name="envelopeOpenText" />
            {{ $t('contact.title') }}
          </h2>
        </template>
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
            :label="$t('contact.titleMessage')"
          />
          <PField
            v-model="form.message"
            required
            type="textarea"
            :min-rows="2"
            :label="$t('contact.message')"
          />
          <STransitionFadeHeight tag="ul">
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
      </PCard>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  data () {
    return {
      form: {
        email: '',
        title: '',
        message: ''
      },
      emailStatus: null as 'sent' | 'error' | null
    }
  },
  head () {
    return {
      title: this.$t('contact.metaTitle').toString()
    }
  },

  nuxtI18n: {
    paths: {
      fr: '/contact',
      en: '/contact'
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
})
</script>

<style lang="scss">
.form-contact {
  max-width: 640px;
  margin: auto;
}
</style>
