<template>
  <div class="contact-container">
    <form
      @submit.prevent
      ref="contactForm"
      name="contact"
      method="post"
      action
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <transition mode="out-in" name="slide-fade">
        <button
          v-if="!email.show && !name.show && !subject.show && !message.show"
          @click.prevent="email.show = true"
          class="contact-button"
          :key="'start'"
        >{{ $t('contact.buttons.start') }}</button>
        <!-- Email Input -->
        <div v-else-if="email.show" class="form-group" :key="'email'">
          <label for="email">{{ $t('contact.labels.email.title') }}</label>
          <div>
            <input
              @input="$v.email.value.$touch()"
              @blur="$v.email.value.$touch()"
              v-model="email['value']"
              type="email"
              id="email"
              @keypress.enter.prevent
              name="email"
            />
            <span class="border-line"></span>
            <transition mode="out-in" name="shake">
              <small
                v-if="$v.email.value.$invalid && $v.email.value.$dirty"
              >{{ $t('contact.labels.email.errorText') }}</small>
            </transition>
          </div>
          <div class="buttons-container">
            <app-button
              @click.prevent.native="email.show = false"
              :text="$t('contact.buttons.prev')"
            ></app-button>
            <app-button @click.prevent.native="cancel" :text="$t('contact.buttons.cancel')"></app-button>
            <app-button
              :disabled="$v.email.value.$invalid"
              @click.prevent.native="email.show = false; name.show = true"
              :text="$t('contact.buttons.next')"
            ></app-button>
          </div>
        </div>
        <!-- Name Input -->
        <div v-else-if="name.show" class="form-group" :key="'name'">
          <label for="firstName">{{ $t('contact.labels.name.first') }}</label>
          <div>
            <input
              @input="$v.name.first.$touch()"
              @blur="$v.name.first.$touch()"
              v-model="name['first']"
              type="text"
              id="firstName"
              @keypress.enter.prevent
              name="firstName"
            />
            <span class="border-line"></span>
            <transition mode="out-in" name="shake">
              <small
                v-if="$v.name.first.$invalid && $v.name.first.$dirty"
                style="margin-bottom: 30px;"
              >{{ $t('contact.labels.name.errorText') }}</small>
            </transition>
          </div>
          <label for="lastName">{{ $t('contact.labels.name.last') }}</label>
          <div>
            <input
              @input="$v.name.last.$touch()"
              @blur="$v.name.last.$touch()"
              type="text"
              v-model="name['last']"
              id="lastName"
              @keypress.enter.prevent
              name="lastName"
            />
            <span class="border-line"></span>
            <transition mode="out-in" name="shake">
              <small
                v-if="$v.name.last.$invalid && $v.name.last.$dirty"
              >{{ $t('contact.labels.name.errorText') }}</small>
            </transition>
          </div>
          <div class="buttons-container">
            <app-button
              @click.prevent.native="name.show = false; email.show = true"
              :text="$t('contact.buttons.prev')"
            ></app-button>
            <app-button @click.prevent.native="cancel" :text="$t('contact.buttons.cancel')"></app-button>
            <app-button
              :disabled="$v.name.first.$invalid || $v.name.last.$invalid"
              @click.prevent.native="subject.show = true; name.show = false"
              :text="$t('contact.buttons.next')"
            ></app-button>
          </div>
        </div>
        <!-- Subject Input -->
        <div v-else-if="subject.show" class="form-group" :key="'subject'">
          <label for="subject">{{ $t('contact.labels.subject.title') }}</label>
          <div>
            <input
              @input="$v.subject.value.$touch()"
              @blur="$v.subject.value.$touch()"
              v-model="subject['value']"
              type="text"
              id="subject"
              @keypress.enter.prevent
              name="subject"
            />
            <span class="border-line"></span>
            <transition mode="out-in" name="shake">
              <small
                v-if="$v.subject.value.$invalid && $v.subject.value.$dirty"
              >{{ $t('contact.labels.subject.errorText') }}</small>
            </transition>
          </div>
          <div class="buttons-container">
            <app-button
              @click.prevent.native="subject.show = false; name.show = true"
              :text="$t('contact.buttons.prev')"
            ></app-button>
            <app-button @click.prevent.native="cancel" :text="$t('contact.buttons.cancel')"></app-button>
            <app-button
              :disabled="$v.subject.value.$invalid"
              @click.prevent.native="subject.show = false; message.show = true"
              :text="$t('contact.buttons.next')"
            ></app-button>
          </div>
        </div>
        <!-- Message Input -->
        <div v-else-if="message.show" class="form-group" :key="'message'">
          <label for="message">{{ $t('contact.labels.message.title') }}</label>
          <div>
            <textarea
              @input="$v.message.value.$touch()"
              @blur="$v.message.value.$touch()"
              v-model="message['value']"
              id="message"
              @keypress.enter.prevent
              name="message"
            ></textarea>
            <span class="border-line"></span>
            <transition mode="out-in" name="shake">
              <small
                v-if="$v.message.value.$invalid && $v.message.value.$dirty"
              >{{ $t('contact.labels.message.errorText') }}</small>
            </transition>
          </div>
          <div class="buttons-container">
            <app-button
              @click.prevent.native="subject.show = true; message.show = false"
              :text="$t('contact.buttons.prev')"
            ></app-button>
            <app-button @click.prevent.native="cancel" :text="$t('contact.buttons.cancel')"></app-button>
            <app-button
              :disabled="$v.$invalid"
              @click.prevent.native="handleSubmit"
              :text="$t('contact.buttons.submit')"
              type="submit"
            ></app-button>
          </div>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton'

import { validationMixin } from 'vuelidate'

import {
  required,
  email,
  minLength,
  maxLength,
  alpha
} from 'vuelidate/lib/validators'

const subjectValidation = value => {
  let regEx = /^[\w\s]+$/gi
  return regEx.test(value)
}

export default {
  name: 'contact-me',
  head() {
    return {
      title: 'Contact me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tell me what you have in mind - Here you can send me a message about any subject you are interested in.'
        }
      ],
      noscript: [{ innerHTML: 'Body No Scripts', body: true }]
    }
  },
  components: {
    AppButton
  },
  mixins: [validationMixin],
  data() {
    return {
      email: {
        show: false,
        value: ''
      },
      name: {
        show: false,
        first: '',
        last: ''
      },
      subject: {
        show: false,
        value: ''
      },
      message: {
        show: false,
        value: ''
      }
    }
  },
  validations() {
    return {
      email: {
        value: {
          required,
          email
        }
      },
      name: {
        first: {
          required,
          alpha,
          maxLength: maxLength(100)
        },
        last: {
          required,
          alpha,
          maxLength: maxLength(100)
        }
      },
      subject: {
        value: {
          required,
          subjectValidation,
          maxLength: maxLength(200)
        }
      },
      message: {
        value: {
          required,
          maxLength: maxLength(5000)
        }
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async handleSubmit() {
      if (!this.$v.$invalid) {
        try {
          let data = this.encode({
            'form-name': 'contact',
            email: this.email.value,
            firstName: this.name.first,
            lastName: this.name.last,
            subject: this.subject.value,
            message: this.message.value
          })
          let header = {
            'Content-Type': 'application/x-www/form-urlencoded'
          }
          let url = this.$refs.contactForm.attributes.action.baseURI

          await this.$axios({
            method: 'post',
            url,
            data,
            header
          })

          this.showSuccessNotification({
            title: this.$t('contact.notifications.success.title'),
            message: this.$t('contact.notifications.success.message')
          })
          this.cancel()
        } catch (err) {
          this.showErrorNotification({
            title: this.$t('contact.notifications.error.title'),
            message: this.$t('contact.notifications.error.message')
          })
          this.cancel()
        }
      }
    },
    cancel() {
      this.email = {
        show: false,
        value: ''
      }
      this.name = {
        show: false,
        first: '',
        last: ''
      }
      this.subject = {
        show: false,
        value: ''
      }
      this.message = {
        show: false,
        value: ''
      }
    }
  },
  notifications: {
    showSuccessNotification: {
      title: 'Message successfully recieved',
      message:
        "Hi, your message was successfully sent, I'll try to answer as soon as possible.",
      type: 'success',
      image: require('~/assets/images/markozlatar.jpg'),
      layout: 2,
      imageWidth: 100,
      timeout: 20000,
      progressBarColor: 'rgb(0, 255, 184)',
      theme: 'dark',
      backgroundColor: '#575D71'
    },
    showErrorNotification: {
      title: 'An Error Occurred',
      message: "Somewhere in process an error occurred, I'm working on it...",
      type: 'error',
      layout: 2,
      image: require('~/assets/images/markozlatar.jpg'),
      imageWidth: 100,
      timeout: 20000,
      theme: 'dark',
      backgroundColor: '#FF5252'
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $site-gray;
  color: white;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

form {
  width: 70%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-button {
  padding: 5px;
  width: 100%;
  border-radius: 0px;
  min-height: 65px;
  border: 1px solid $site-text-dark;
  font-size: 25px;
  background-color: $site-text-dark;
  color: white;
  cursor: pointer;
  transition: all 350ms ease 0ms;
  &:hover {
    background-color: $site-button-dark;
  }
}

.form-group {
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  label {
    font-size: 23px;
  }
  div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    input,
    textarea {
      width: 100%;
      height: 65px;
      outline: none;
      background: transparent;
      border: none;
      border-bottom: 2px solid $site-text-dark;
      font-size: 30px;
      color: white;

      &:focus ~ .border-line {
        transform: scaleX(1);
      }
    }
    textarea {
      height: 300px;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 18px;
      resize: none;
      max-height: 400px;
    }
  }

  small {
    position: absolute;
    top: 100%;
    left: 0px;
    font-size: 16px;
    padding: 5px 0px;
    color: rgb(228, 72, 72);
  }
  .border-line {
    display: inline-block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 300ms ease 0ms;
    background-color: white;
    z-index: 1;
  }
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 35px;
  button {
    margin: 5px 5px 0px 0px;
    width: 100px !important;
    height: 50px !important;
  }
  button:disabled,
  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
  button:last-child {
    margin-left: auto;
    margin-right: 0px;
  }
}

.slide-fade-enter-active {
  animation: slade-fade-in 500ms forwards;
}
.slide-fade-leave-active {
  animation: slade-fade-out 500ms forwards;
}

@keyframes slade-fade-in {
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes slade-fade-out {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(150px);
  }
}

.shake-enter-active {
  animation: shake-in 500ms forwards;
}
.shake-leave {
  opacity: 1;
}
.shake-leave-active {
  transition: opacity 500ms;
}
.shake-leave-to {
  opacity: 0;
}

@keyframes shake-in {
  0% {
    transform: translate(3px, 0);
  }
  15% {
    transform: translate(-3px, 0);
  }
  30% {
    transform: translate(3px, 0);
  }
  45% {
    transform: translate(-3px, 0);
  }
  60% {
    transform: translate(3px, 0);
  }
  75% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@media screen and(max-width: 650px) {
  .buttons-container {
    button {
      height: 40px !important;
      width: 90px !important;
    }
  }
}

@media screen and(max-width: 400px) {
  form {
    width: 95%;
  }
}
</style>