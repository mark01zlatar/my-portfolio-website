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
            <input
              @input="$v.email.value.$touch()"
              @blur="$v.email.value.$touch()"
              v-model="email['value']"
              type="email"
              id="email"
            />
            <span class="border-line"></span>
          </div>
          <transition mode="out-in" name="shake">
            <small
              v-if="$v.email.value.$invalid && $v.email.value.$dirty"
            >Please enter a valid email</small>
          </transition>
          <div class="buttons-container">
            <app-button @click.native="email.show = false" text="Back"></app-button>
            <app-button @click.native="cancel" text="Cancel"></app-button>
            <app-button
              :disabled="$v.email.value.$invalid"
              @click.native="email.show = false; name.show = true"
              text="Next"
            ></app-button>
          </div>
        </div>
        <!-- Name Input -->
        <div v-else-if="name.show" class="form-group" :key="'name'">
          <label for="firstName">First Name</label>
          <div>
            <input
              @input="$v.name.first.$touch()"
              @blur="$v.name.first.$touch()"
              v-model="name['first']"
              type="text"
              id="firstName"
            />
            <span class="border-line"></span>
          </div>
          <transition mode="out-in" name="shake">
            <small
              v-if="$v.name.first.$invalid && $v.name.first.$dirty"
              style="margin-bottom: 30px;"
            >Please enter a valid text</small>
          </transition>
          <label for="lastName">Last Name</label>
          <div>
            <input
              @input="$v.name.last.$touch()"
              @blur="$v.name.last.$touch()"
              type="text"
              v-model="name['last']"
              id="lastName"
            />
            <span class="border-line"></span>
          </div>
          <transition mode="out-in" name="shake">
            <small v-if="$v.name.last.$invalid && $v.name.last.$dirty">Please enter a valid text</small>
          </transition>
          <div class="buttons-container">
            <app-button @click.native="name.show = false; email.show = true" text="Back"></app-button>
            <app-button @click.native="cancel" text="Cancel"></app-button>
            <app-button
              :disabled="$v.name.first.$invalid || $v.name.last.$invalid"
              @click.native="subject.show = true; name.show = false"
              text="Next"
            ></app-button>
          </div>
        </div>
        <!-- Subject Input -->
        <div v-else-if="subject.show" class="form-group" :key="'subject'">
          <label for="subject">Subject</label>
          <div>
            <input
              @input="$v.subject.value.$touch()"
              @blur="$v.subject.value.$touch()"
              v-model="subject['value']"
              type="text"
              id="subject"
            />
            <span class="border-line"></span>
          </div>
          <transition mode="out-in" name="shake">
            <small
              v-if="$v.subject.value.$invalid && $v.subject.value.$dirty"
            >Please enter a valid subject</small>
          </transition>
          <div class="buttons-container">
            <app-button @click.native="subject.show = false; name.show = true" text="Back"></app-button>
            <app-button @click.native="cancel" text="Cancel"></app-button>
            <app-button
              :disabled="$v.subject.value.$invalid"
              @click.native="subject.show = false; message.show = true"
              text="Next"
            ></app-button>
          </div>
        </div>
        <!-- Message Input -->
        <div v-else-if="message.show" class="form-group" :key="'message'">
          <label for="message">Message</label>
          <div>
            <textarea
              @input="$v.message.value.$touch()"
              @blur="$v.message.value.$touch()"
              v-model="message['value']"
              id="message"
            ></textarea>
            <span class="border-line"></span>
          </div>
          <transition mode="out-in" name="shake">
            <small
              v-if="$v.message.value.$invalid && $v.message.value.$dirty"
            >Please enter a valid message</small>
          </transition>
          <div class="buttons-container">
            <app-button @click.native="subject.show = true; message.show = false" text="Back"></app-button>
            <app-button @click.native="cancel" text="Cancel"></app-button>
            <app-button :disabled="$v.$invalid" @click.native="submit" text="Submit"></app-button>
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
      email: {
        value: {
          required,
          email
        }
      },
      name: {
        first: {
          required,
          alpha
        },
        last: {
          required,
          alpha
        }
      },
      subject: {
        value: {
          required
        }
      },
      message: {
        value: {
          required
        }
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
    position: absolute;
    top: 100%;
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
  position: absolute !important;
  width: 100%;
  top: 150%;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 5px 5px 0px 0px;
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
</style>