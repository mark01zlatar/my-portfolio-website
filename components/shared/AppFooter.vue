<template>
  <footer>
    <h1>{{ $t('footer.title') }}</h1>
    <nav>
      <scrollactive tag="div">
        <a :href="localePath({ path: '/', hash: '#top' })" class="scrollactive-item">
          <img
            src="@/assets/images/MZ-logo-white-small.png"
            width="70"
            alt="Marko Zlatar Logo"
          />
        </a>
        <div>
          <ul class="navigation-list">
            <li>
              <a
                :href="localePath({ path: '/', hash: '#about' })"
                class="scrollactive-item"
              >{{ $t('links.about') }}</a>
            </li>
            <li>
              <a
                :href="localePath({ path: '/', hash: '#portfolio' })"
                class="scrollactive-item"
              >{{ $t('links.portfolio') }}</a>
            </li>
            <li>
              <a
                :href="localePath({ path: '/', hash: '#technologies' })"
                class="scrollactive-item"
              >{{ $t('links.technologies') }}</a>
            </li>
            <li>
              <a :href="require('~/assets/MarkoZlatarResume.pdf')" download class="resume-download">
                <i class="mdi mdi-download"></i>
                {{ $t('links.resume') }}
              </a>
            </li>
            <nuxt-link :to="localePath('contact-me')" tag="li">
              <a>{{ $t('links.contact') }}</a>
            </nuxt-link>
          </ul>
        </div>
        <div class="social-media-icons">
          <a href="#">
            <i class="mdi mdi-facebook"></i>
          </a>
          <a href="#">
            <i class="mdi mdi-instagram"></i>
          </a>
          <a href="#">
            <i class="mdi mdi-linkedin"></i>
          </a>
        </div>
      </scrollactive>
      <p class="rights">&copy; 2020 Marko Zlatar.</p>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 100vh;
  background: $site-gray url('~assets/images/dots.svg') no-repeat center center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  color: white;
  font-size: 30px;
  h1 {
    padding: 0px 20px;
  }
}
nav {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  & > div {
    width: 80%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    padding: 10px 0px;
  }
}

.navigation-list {
  margin-left: 120px;
  font-size: 18px;
  color: white;
  display: flex;
  li {
    margin-right: 30px;
    cursor: pointer;
    a {
      transition: color 200ms ease;
      &:hover {
        color: $site-text-dark;
      }
    }
  }
}

.rights {
  font-size: 15px;
  background-color: $site-gray-dark;
  color: $site-text-dark;
  padding: 5px;
}

.social-media-icons {
  margin-left: auto;
  margin-right: 50px;
  a {
    transition: color 200ms ease;
    margin: 5px;
    &:hover {
      color: $site-text-dark;
    }
  }
}

@media screen and(max-width: 1210px) {
  nav {
    & > div {
      flex-direction: column;
    }
  }

  .navigation-list {
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 10px 15px;
    }
  }
  .social-media-icons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and(max-width: 720px) {
  footer {
    h1 {
      font-size: 30px;
    }
  }
  .navigation-list {
    flex-direction: column;
  }
}
</style>