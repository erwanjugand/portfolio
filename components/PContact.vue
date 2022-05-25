<template>
  <section class="container contact">
    <h2 v-text="$t('home.contact.title')" />

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
        <PTransitionFadeHeight tag="ul">
          <div v-if="emailStatus === 'sent' || emailStatus === 'error'">
            <div :class="emailStatus === 'sent' ? 'message-success' : 'message-fail'">
              <PIcon :name="emailStatus === 'sent' ? 'circleCheck' : 'circleXmark'" />
              {{ $t(`contact.validation.${emailStatus}`) }}
            </div>
          </div>
        </PTransitionFadeHeight>
        <PButton icon="sparkles" :loading="loading">
          {{ $t('contact.submit') }}
        </PButton>
      </PForm>
    </PCard>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Form } from '~/models'

export default Vue.extend({
  data () {
    return {
      form: {
        email: undefined,
        title: undefined,
        message: undefined
      } as Form,
      emailStatus: null as 'sent' | 'error' | null,
      loading: false
    }
  },

  methods: {
    async sendEmail () {
      this.loading = true
      try {
        await this.$axios.$post('/mail/send', {
          subject: `${this.$config.siteTitle} - ${this.form.title}`,
          html: `<p><b>Email :</b><br>${this.form.email}</p><p><b>Message :</b><br>${this.form.message}</p>`
        })
        this.emailStatus = 'sent'
      } catch (e) {
        this.emailStatus = 'error'
      }
      this.form = {
        email: undefined,
        title: undefined,
        message: undefined
      }
      this.loading = false
      setTimeout(() => { this.emailStatus = null }, 5000)
    }
  }
})
</script>
