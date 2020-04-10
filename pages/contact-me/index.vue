<template>
  <div class="contact-container">
    <form @submit.prevent>
      <transition mode="out-in" name="slide-fade">
        <button
          v-if="!email.show && !name.show && !subject.show && !message.show"
          @click="email.show = true"
          class="contact-button"
          :key="'start'"
        >Click me and fill the form</button>
        <!-- Email Input -->
        <div v-else-if="email.show" class="form-group" :key="'email'">
          <label for="email">Email</label>
          <div>
            <input v-model="email['value']" type="email" id="email" />
            <span class="border-line"></span>
          </div>
          <small>Some text</small>
          <div class="buttons-container">
            <span @click.stop.prevent="email.show = false">
              <app-button text="Back"></app-button>
            </span>
            <span @click="cancel">
              <app-button text="Cancel"></app-button>
            </span>
            <span @click="email.show = false; name.show = true">
              <app-button text="Next"></app-button>
            </span>
          </div>
        </div>
        <!-- Name Input -->
        <div v-else-if="name.show" class="form-group" :key="'name'">
          <label for="firstName">First Name</label>
          <div>
            <input v-model="name['first']" type="text" id="firstName" />
            <span class="border-line"></span>
          </div>
          <small style="margin-bottom: 30px;">Some text</small>
          <label for="lastName">Last Name</label>
          <div>
            <input type="text" v-model="name['last']" id="lastName" />
            <span class="border-line"></span>
          </div>
          <small>Some text</small>
          <div class="buttons-container">
            <span @click="name.show = false; email.show = true">
              <app-button text="Back"></app-button>
            </span>
            <span @click="cancel">
              <app-button text="Cancel"></app-button>
            </span>
            <span @click="subject.show = true; name.show = false">
              <app-button text="Next"></app-button>
            </span>
          </div>
        </div>
        <!-- Subject Input -->
        <div v-else-if="subject.show" class="form-group" :key="'subject'">
          <label for="subject">Subject</label>
          <div>
            <input v-model="subject['value']" type="text" id="subject" />
            <span class="border-line"></span>
          </div>
          <small>Some text</small>
          <div class="buttons-container">
            <span @click="subject.show = false; name.show = true">
              <app-button text="Back"></app-button>
            </span>
            <span @click="cancel">
              <app-button text="Cancel"></app-button>
            </span>
            <span @click="subject.show = false; message.show = true">
              <app-button text="Next"></app-button>
            </span>
          </div>
        </div>
        <!-- Message Input -->
        <div v-else-if="message.show" class="form-group" :key="'message'">
          <label for="message">Message</label>
          <div>
            <textarea v-model="message['value']" id="message"></textarea>
            <span class="border-line"></span>
          </div>
          <small>Some text</small>
          <div class="buttons-container">
            <span @click="subject.show = true; message.show = false">
              <app-button text="Back"></app-button>
            </span>
            <span @click="cancel">
              <app-button text="Cancel"></app-button>
            </span>
            <span @click="submit">
              <app-button text="Submit"></app-button>
            </span>
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
export default {
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
      'email.value': {
        required,
        email
      },
      'name.first': {
        required,
        alpha
      },
      'name.last': {
        required,
        alpha
      },
      'subject.value': {
        required
      },
      'message.value': {
        required,
        alpha
      }
    }
  },
  methods: {
    submit() {
      console.log(this.email)
      console.log(this.name)
      console.log(this.subject)
      console.log(this.message)
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
      height: 200px;
      background-color: rgba(0, 0, 0, 0.2);
      font-size: 18px;
      resize: vertical;
      max-height: 400px;
    }
  }

  small {
    font-size: 16px;
    padding: 5px 0px;
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
  position: absolute !important;
  width: 100%;
  top: 130%;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  span {
    margin: 5px 5px 0px 0px;
  }
  span:last-child {
    margin-left: auto;
    margin-right: 0px;
  }
}

.slide-fade-enter {
  opacity: 0;
  transform: translateY(150px);
}
.slide-fade-enter-active {
  transition: all 700ms ease 0ms;
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0%);
}
.slide-fade-leave {
  opacity: 1;
  transform: translateY(0%);
}
.slide-fade-leave-active {
  transition: all 700ms ease 0ms;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
</style>