<i18n>
{
  "en": {
    "sub-text-1": "Realize your dream",
    "consulting": "Consulting",
    "home": "Home",
    "about": "About",
    "our-service": "Our Service",
    "contact": "Contact",
    "book-consultation": "Book Consultation",
    "about-us": "About us",
    "sub-text-2": "is an Immigration Consultancy Firm located in",
    "sub-text-3": "We provide Immigration Services according to the Immigration regulations and the requirement of clients.",
    "read-more": "Read more",
    "follow": "Follow",
    "copyright": "Copyright",
    "right-reserved": "All rights reserved",
    "english": "English",
    "french": "French",
    "city": "Montreal and Toronto",
    "address-1": "3333 Cavendish Blvd Suite 250, Montreal, Quebec, H4B 2M5",
    "address-2": "4711 Yonge Street 10th Floor, Toronto, Ontario, M2N 6K8",
    "montreal": "Montreal",
    "toronto": "Toronto",
    "alt-icon": "An icon for",
    "alt-address": "address",
    "alt-email": "email",
    "alt-phone": "phone"
  },
  "fr": {
    "sub-text-1": "Réalisez votre rêve",
    "consulting": "Consultation",
    "home": "Accueil",
    "about": "À propos",
    "our-service": "Nos services",
    "contact": "Contact",
    "book-consultation": "Contactez-Nous",
    "about-us": "À propos de nous",
    "sub-text-2": "est un cabinet de conseil en immigration situé à",
    "sub-text-3": "Nous fournissons des services d'immigration conformément aux réglementations en matière d'immigration et aux exigences des clients.",
    "read-more": "En savoir plus",
    "follow": "Suivez-Nous",
    "copyright": "Droits d’auteurs",
    "right-reserved": "Tous droits réservés",
    "english": "Anglais",
    "french": "Français",
    "city": "Montréal et Toronto",
    "address-1": "3333 boulevard Cavendish, bureau 250, Montréal, Québec, H4B 2M5",
    "address-2": "4711 rue Yonge, 10e étage, Toronto, Ontario, M2N 6K8",
    "montreal": "Montréal",
    "toronto": "Toronto",
    "alt-icon": "Une icône pour",
    "alt-address": "l'adresse",
    "alt-email": "le courrier électronique",
    "alt-phone": "téléphone"
  }
}
</i18n>

<template>
  <div id="app">
    <!-- header section -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="navbar-first-section">
        <div class="left-side-container side-container">
          <p>{{ $t('sub-text-1')}}</p>
        </div>
        <div class="logo-letter-container">
          <NuxtLink :to="localePath('/')" class="logo-letter">
            <label>R & K</label><br/>
            <label>{{ $t('consulting') }}</label>
          </NuxtLink>
        </div>
        <div class="right-side-container side-container">
          <NuxtLink v-if="this.$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="a-lang nav-item nav-link disabled-active">{{ $t('english') }}</NuxtLink>
          <NuxtLink v-if="this.$i18n.locale !== 'fr'" :to="switchLocalePath('fr')" class="a-lang nav-item nav-link disabled-active">{{ $t('french') }}</NuxtLink>
          <NuxtLink v-if="false" class="rnk-button" :to="localePath('/book-consultation')">{{ $t('book-consultation') }}</NuxtLink>
        </div>
        <div ref="navbarTogglerContainer" class="navbar-toggler-container">
          <button id="navbarToggler" ref="navbarToggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="navbar-second-section">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink :to="localePath('/')" class="nav-item nav-link" exact><span @click="clickNavBar()">{{ $t('home') }}</span></NuxtLink>
            <NuxtLink :to="localePath('/about')" class="nav-item nav-link"><span @click="clickNavBar()">{{ $t('about') }}</span></NuxtLink>
            <NuxtLink :to="localePath('/our-service')" class="nav-item nav-link"><span @click="clickNavBar()">{{ $t('our-service') }}</span></NuxtLink>
            <NuxtLink v-if="false" :to="localePath('/book-consultation')" class="nav-item nav-link nav-mobile"><span @click="clickNavBar()">{{ $t('book-consultation') }}</span></NuxtLink>
            <!--
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
              </a>
              <div class="dropdown-menu">
                <NuxtLink to="/blog/newsroom" class="dropdown-item">Newsroom</NuxtLink>
              </div>
            </li>
            -->
            <NuxtLink :to="localePath('/contact')" class="nav-item nav-link"><span @click="clickNavBar()">{{ $t('contact') }}</span></NuxtLink>
            <NuxtLink v-if="this.$i18n.locale !== 'en'" :to="switchLocalePath('en')" class="a-lang-2 nav-item nav-link disabled-active nav-mobile">{{ $t('english') }}</NuxtLink>
            <NuxtLink v-if="this.$i18n.locale !== 'fr'" :to="switchLocalePath('fr')" class="a-lang-2 nav-item nav-link disabled-active nav-mobile">{{ $t('french') }}</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- content section -->
    <div class="content-container">
      <Nuxt />
    </div>

    <!-- footer section -->
    <footer class="page-footer">
      <div class="block-padding">
        <div>
          <div class="row footer-content-container">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <p class="footer-label">{{ $t('about-us') }}</p>
              <div class="footer-inner-content-container">
                <p class="p-justify-1">
                  R&K {{ $t('consulting') }} {{ $t('sub-text-2') }} {{ $t('city') }}, Canada.
                  {{ $t('sub-text-3') }}
                  <NuxtLink to="/about" class="footer-about-link">{{ $t('read-more') }}</NuxtLink>
                </p>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-12">
              <p class="footer-label">{{ $t('contact') }}</p>
              <div class="footer-inner-content-container">
                <div class="footer-contact-container">
                  <div class="row">
                    <div class="col-xl-1 col-2 footer-contact-icon-container">
                        <img src="/img/icons/address-icon.png" :alt="`${this.$t('alt-icon')} ${this.$t('alt-address')}`" />
                    </div>
                    <div class="col-xl-11 col-10">
                      <p>
                        <a href="http://google.com/maps?q=rnk-immigration&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjzxseftdfmAhXP1FkKHcHZAhwQ_AUoA3oECA8QBQ" target="_blank" rel="noreferrer">
                          {{ $t('address-1') }}
                        </a>
                        <br/>
                        <a class="a-ls-1" href="https://www.google.com/maps/place/Regus+-+Ontario,+Toronto+-+Yonge+and+Sheppard/@43.7598733,-79.412427,17z/data=!3m2!4b1!5s0x882b2d63f23cb019:0xc5d0e02959cd911a!4m5!3m4!1s0x882b2d63bf2b6aed:0xc335ad9065800e1b!8m2!3d43.7598694!4d-79.4102383" target="_blank" rel="noreferrer">
                          {{ $t('address-2') }}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-1 col-2 footer-contact-icon-container">
                        <img src="/img/icons/email-icon.png" :alt="`${this.$t('alt-icon')} ${this.$t('alt-email')}`" />
                    </div>
                    <div class="col-xl-11 col-10">
                      <p><a :href="'mailto:' + email">{{ email }}</a></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xl-1 col-2 footer-contact-icon-container">
                      <img src="/img/icons/phone-icon.png" :alt="`${this.$t('alt-icon')} ${this.$t('alt-phone')}`" />
                    </div>
                    <div class="col-xl-11 col-10">
                      <p><span class="sp-1">{{ $t('montreal') }}</span><a :href="'tel:' + montreal_phone">{{ montreal_phone }}</a></p>
                      <p><span class="sp-1 sp-ls">{{ $t('toronto') }}</span><a :href="'tel:' + toronto_phone">{{ toronto_phone }}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <p class="footer-label">{{ $t('follow') }}</p>
              <div class="footer-inner-content-container">
                <p class="footer-social-media-container">
                  <a href="https://blog.naver.com/rnk-consulting" target="_blank" rel="noreferrer"><img src="/img/icons/naver-icon.png" :alt="`${this.$t('alt-icon')} naver`" /></a>
                  <a href="https://www.facebook.com/RK-Consulting-239029000050831" target="_blank" rel="noreferrer"><img src="/img/icons/fb-icon.png" :alt="`${this.$t('alt-icon')} fb`" /></a>
                  <a href="https://www.instagram.com/rnk.consulting" target="_blank" rel="noreferrer"><img src="/img/icons/instagram-icon.png" :alt="`${this.$t('alt-icon')} instagram`" /></a>
                </p>
              </div>
            </div>
            <div class="col-12 d-mt-1">
              <div class="copyright-reserved-container">
                <p class="copyright-text">&copy; 2018 - {{ current_year }}, R&K {{ $t('consulting') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      'name': process.env.appTitle,
      'addr': process.env.appAddr,
      'montreal_phone': process.env.appMtlPhone,
      'toronto_phone': process.env.appTorPhone,
      'email': process.env.appEmail,
      'current_year': new Date().getFullYear(),
    }
  },
  methods: {
    clickNavBar: function() {
      // toggler is visible when width <= 991
      if(window.innerWidth <= 991) this.$refs.navbarToggler.click();
    }
  }
}
</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*/

@font-face {
  font-family: 'Roboto Regular';
  src: url('/fonts/Roboto/Roboto-Regular.ttf');
  font-display: swap;
}

html, body, #app {
  width: 100%;
  height: 100%;
  font-family: 'Roboto Regular', sans-serif;
}

.rnk-label-color {
  color: #1A5268;
}

.rnk-button {
  font-size: 0.90625em;
  padding: 0.47em 0.79em;
  text-decoration: none;
  background: #005678;
  color: white;
  border-radius: 2px;
  transition: .5s;
}

.rnk-button:hover {
  transition: .5s;
  color: #005678;
  background: white;
}

.block-padding {
  width: 90%;
  margin: auto !important;
  padding: 0 var(--bs-gutter-x, 0.75rem);
}

.navbar {
  background: #fff !important;
  padding-left: 0px;
  padding-right: 0px;
  flex-flow: column;
  padding-bottom: 0px !important;
  border-bottom: 1px solid #eee
}

.navbar-first-section {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.53125em;
  padding-bottom: 0.46875em;
  display: flex;
  flex-flow: row;
}

.left-side-container p {
  font-weight: bold;
  margin-bottom: 0px;
}

.logo-letter-container {
  width: 50%;
}

.side-container, .navbar-toggler-container {
  width: 25%;
  margin: auto;
}

p {
  margin-bottom: 0px;
}

.logo-letter {
  color: black;
}

.logo-letter:hover {
  color: black;
  cursor: pointer;
}

.logo-letter>label {
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
}

.logo-letter>label:nth-child(3) {
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.navbar-nav>a, .navbar-nav>li>a{
  font-size: 0.75em;
  text-transform: uppercase;
  color: black !important;
  letter-spacing: 0.25px;
  font-weight: bold;
}

.navbar-nav>.nuxt-link-exact-active:not(.disabled-active) {
  color: #1A5268 !important;
}

.nav-link:hover {
  transition: .25s;
  color: #005678 !important;
}

.dropdown-menu {
  border-radius: 0 !important;
}

.dropdown-menu>a {
  font-size: 0.75em;
  color: black;
  padding-left: 0.5rem;
  font-weight: bold;
  transition: .1s;
}

.dropdown-menu>a:hover {
  color: #005678 !important;
  background: transparent;
  transition: .1s;
}

.dropdown-menu>a:active, .dropdown-menu>a:focus {
  background: transparent;
  color: black;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0;
}

.content-container {
  width: 100%;
}

footer {
  padding: 5.3125em 0;
}

.footer-content-container>div {
  margin-top: 0.78125em;
}

footer .footer-content-container .footer-label {
  font-size: 1.125em;
  font-weight: bold;
  letter-spacing: 0.25px;
  margin-bottom: 1em;
}

.footer-contact-container>.row {
  margin-bottom: 1.15625em;
}

.footer-contact-container>.row>div {
  margin: auto;
}

.footer-contact-icon-container {
  margin: auto;
}

.footer-contact-icon-container img {
  width: 1.5em;
  height: 1.5em;
}

.footer-contact-container p, .footer-contact-container a {
  font-size: 0.91em;
  text-decoration: none;
  color: #666;
  margin: auto !important;
}

.footer-about-link {
  font-size: 1em;
  color: black;
  text-decoration: none;
}

.footer-contact-container a:hover, .footer-about-link:hover {
  color: #005678;
  transition: 0.25s;
}

.footer-inner-content-container>div {
  padding: 0px;
}

.footer-inner-content-container>p {
  color: #888;
  font-size: 0.83em;
}

.footer-social-media-container a {
  margin-right: 0.3125em;
}

.footer-social-media-container img {
  width: 2.45em;
  height: 2.45em;
}

.copyright-reserved-container>p {
  font-size: 0.78em;
  color: #888
}

.text-secondary {
  background: transparent !important;
}

.lbl-success-alert, .lbl-error-alert {
  font-size: 0.9em;
}

.custom-alertbox {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  z-index: 2;
}

.alert .btn-close:focus {
  outline: 0 !important;
}

.lbl-error {
  font-size: 0.8em;
}

.d-mt-1 {
  margin-top: 3.125em !important;
}

.row {
  width: 100%;
}

.disabled-active {
  color: black !important;
}

.p-justify-1 {
  text-align: justify;
}

.sp-1 {
  width: 5em;
  display: inline-block;
  font-size: 0.85em;
}

.sp-ls {
  letter-spacing: 0.089em;
}

.a-lang, .a-lang-2 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  font-weight: bold;
}

.a-ls-1 {
  letter-spacing: 0.0269em;
}

@media(min-width: 992px) {
  .navbar {
    border-bottom: 1px solid #eee;
  }

  .navbar-toggler-container {
    display: none;
  }

  .book-consultation-link {
    display: none;
  }

  .dropdown-menu {
    top: 35.49px !important;
    left: 5px !important;
    border-top: none !important;
    background: white !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  .nav-mobile {
    display: none !important;
  }

  .logo-letter>label:nth-child(1) {
    font-size: 1.15625em;
  }

  .logo-letter>label:nth-child(3) {
    font-size: 1.09375em;
  }

  .left-side-container p {
    font-size: 1.125em;
  }
}

@media(max-width: 991px) {
  .contact-content-description-header {
    font-size: 2em;
  }

  .contact-content-description-subline {
    font-size: 0.84375em;
  }

  .navbar {
    padding-bottom: 0;
  }

  .navbar-nav {
    width: 10.3125em;
  }

  .dropdown-menu {
    background: transparent !important;
    border: none !important;
    padding-top: 0px !important;
  }

  .navbar-first-section {
    margin-bottom: 0px;
  }

  .right-side-container {
    display: none;
  }

  .book-consultation-link {
    display: block;
  }

  .footer-content-container>div {
    margin-bottom: 1.59375em;
  }

  .content-container {
    width: 100%;
  }

  .logo-letter>label:nth-child(1) {
    font-size: 0.84375em;
  }

  .logo-letter>label:nth-child(3) {
    font-size: 0.78125em;
    padding-left: 0.75em;
  }

  .left-side-container p {
    font-size: 0.98125em;
  }
}

@media(max-width: 768px) {
  .left-side-container p {
    font-size: 0.88125em;
    margin-left: 0.1em;
  }
}

@media(max-width: 575px) {
  .left-side-container p {
    font-size: 0.78125em;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
