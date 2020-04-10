<template>
  <div class="contact-container">
    <form @submit.prevent>
      <transition mode="out-in" name="slide-fade">
        <button v-if="!email.show" @click="email.show = true" class="contact-button">Fill the form</button>
        <div v-else-if="email.show" class="form-group">
          <label for="email">Email</label>
          <div>
            <input type="email" id="email" />
            <span class="border-line"></span>
          </div>
          <small>Some text</small>
          <div class="buttons-container">
            <span @click.stop.prevent="email.show = false">
              <app-button text="Back"></app-button>
            </span>
            <span>
              <app-button text="Cancel"></app-button>
            </span>
            <span>
              <app-button text="Next"></app-button>
            </span>
          </div>
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/shared/AppButton'
export default {
  components: {
    AppButton
  },
  data() {
    return {
      email: {
        show: false,
        value: ''
      }
    }
  },
  methods: {
    log() {
      console.log('works')
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
  width: 100%;
  border-radius: 0px;
  height: 65px;
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
    input {
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
  transform: translateY(50px);
}
.slide-fade-enter-active {
  transition: all 1000ms ease 0ms;
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
  transition: all 1000ms ease 0ms;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
</style>