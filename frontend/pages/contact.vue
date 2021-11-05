<i18n>
{
  "en": {
    "title": "Contact",
    "consulting": "Consulting",
    "contact": "contact",
    "sub-text-1": "We're here to help and answer any question you<br/> might have. We look forward to hearing from you.",
    "sub-text-2": "Let us know your",
    "sub-text-3": "question",
    "sub-text-4": "We are ready to answer any questions regrading to immigration and visas. Feel free to fill out the form to write us your questions and set up a meeting with us. Or, contact us via the following information below.",
    "address-1": "3333 Cavendish Blvd Suite 250, Montreal, Quebec, H4B 2M5",
    "address-2": "4711 Yonge Street 10th Floor, Toronto, Ontario, M2N 6K8",
    "mon": "Monday",
    "tue": "Tuesday",
    "wed": "Wednesday",
    "thu": "Thursday",
    "fri": "Friday",
    "sat": "Saturday",
    "sun": "Sunday",
    "closed": "closed",
    "name": "Name",
    "ph-name": "Enter name",
    "email": "E-mail",
    "ph-email": "Enter e-mail",
    "phone": "Phone Number",
    "ph-phone": "Enter phone number",
    "message": "Message",
    "ph-message": "Please write your question here",
    "send": "Send",
    "error-msg": "It's our fault. Try it later again",
    "success-msg": "Thank you for contacting us. Your message is successfully sent to us.",
    "invalid-1": "We need your",
    "invalid-2": "to properly answer you",
    "montreal": "Montreal",
    "toronto": "Toronto",
    "alt-icon": "An icon for",
    "alt-address": "address",
    "alt-schedule": "schedule",
    "alt-email": "email",
    "alt-phone": "phone"
  },
  "fr": {
    "title": "Contact",
    "consulting": "Consultation",
    "contact": "contact",
    "sub-text-1": "Nous sommes là pour vous aider et répondre<br/>à vos questions. Nous avons hâte de vous entendre.",
    "sub-text-2": "Faites-nous savoir vos",
    "sub-text-3": "questions",
    "sub-text-4": "Nous sommes prêts à répondre à vos questions concernant l’immigration et les visas. N’hésitez pas à remplir le formulaire afin de nous écrire vos questions et prendre rendez-vous avec nous. Vous pouvez également nous contacter via les informations ci-dessous.",
    "address-1": "3333 boulevard Cavendish, bureau 250, Montréal, Québec, H4B 2M5",
    "address-2": "4711 rue Yonge, 10e étage, Toronto, Ontario, M2N 6K8",
    "mon": "Lundi",
    "tue": "Mardi",
    "wed": "Mercredi",
    "thu": "Jeudi",
    "fri": "Vendredi",
    "sat": "Samedi",
    "sun": "Dimanche",
    "closed": "fermé",
    "name": "Nom et Prénom",
    "ph-name": "Entrez votre nom et prénom",
    "email": "Courriel",
    "ph-email": "Entrez votre adresse courriel",
    "phone": "Numéro de téléphone",
    "ph-phone": "Entrez votre numéro de téléphone",
    "message": "Message",
    "ph-message": "Écrivez vos questions ici",
    "send": "Envoyer",
    "error-msg": "C'est notre faute. Réessayez plus tard",
    "success-msg": "Merci de nous contacter. Votre message nous a été envoyé avec succès.",
    "invalid-1": "Nous avons besoin de votre",
    "invalid-2": "pour bien vous répondre",
    "montreal": "Montréal",
    "toronto": "Toronto",
    "alt-icon": "Une icône pour",
    "alt-address": "l'adresse",
    "alt-schedule": "le calendrier",
    "alt-email": "le courrier électronique",
    "alt-phone": "téléphone"
  }
}
</i18n>

<template>
  <div>
    <div v-if="isActive">
      <div class="custom-alertbox alert alert-dismissible fade show" :class="isSuccess ? 'alert-success' : 'alert-danger'" role="alert">
        <label :class="isSuccess ? 'lbl-success-alert' : 'lbl-error-alert'">{{ resultMsg }}</label>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    <div>
      <div class="contact-container">
        <CommonBanner :header="$t('contact')"
                      :description="$t('sub-text-1')">
        </CommonBanner>
        <div class="contact-content-container">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-7 contact-content-row-container">
                <div class="contact-content-description-container">
                  <p class="contact-content-description-header rnk-label-color">
                    <span class="contact-lbl-2 me-2">{{ $t('sub-text-2') }}</span>
                    <span class="contact-lbl-2">{{ $t('sub-text-3') }}</span>
                  </p>
                  <p class="contact-content-description-subline">
                    {{ $t('sub-text-4') }}
                  </p>
                </div>
                <div class="contact-content-extra-info-container">
                  <div>
                    <img class="contact-icon" :alt="`${this.$t('alt-icon')} ${this.$t('alt-address')}`" src="/img/icons/address-icon.png" />
                    <p class="contact-content-extra-information mb-1">{{ $t('address-1') }}</p>
                    <p class="contact-content-extra-information p-ls-1">{{ $t('address-2') }}</p>
                  </div>
                  <div>
                    <img class="contact-icon" :alt="`${this.$t('alt-icon')} ${this.$t('alt-schedule')}`" src="/img/icons/schedule-icon.png" />
                    <p class="contact-content-extra-information">
                      <span class="contact-lbl-1">{{ $t('mon') }}</span> 09:00 - 18:00<br/>
                      <span class="contact-lbl-1">{{ $t('tue') }}</span> 09:00 - 18:00<br/>
                      <span class="contact-lbl-1">{{ $t('wed') }}</span> 09:00 - 18:00<br/>
                      <span class="contact-lbl-1">{{ $t('thu') }}</span> 09:00 - 18:00<br/>
                      <span class="contact-lbl-1">{{ $t('fri') }}</span> 09:00 - 13:00<br/>
                      <span class="contact-lbl-1">{{ $t('sat') }}</span> {{ $t('closed') }} <br/>
                      <span class="contact-lbl-1">{{ $t('sun') }}</span> {{ $t('closed') }} <br/>
                    </p>
                  </div>
                  <div>
                    <img class="contact-icon" :alt="`${this.$t('alt-icon')} ${this.$t('alt-email')}`" src="/img/icons/email-icon.png" />
                    <p class="contact-content-extra-information">{{ env_email }}</p>
                  </div>
                  <div>
                    <img class="contact-icon" :alt="`${this.$t('alt-icon')} ${this.$t('alt-phone')}`" src="/img/icons/phone-icon.png" />
                    <p class="contact-content-extra-information"><span class="sp-1">{{ $t('montreal') }}</span> {{ montreal_phone }}</p>
                    <p class="contact-content-extra-information"><span class="sp-1 sp-ls">{{ $t('toronto') }}</span> {{ toronto_phone }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-5 contact-content-row-container">
                <div class="contact-content-form-container">
                  <div id="contact-form">
                    <div class="form-group">
                      <label :class="nameError.length ? 'text-danger' : ''">{{ $t('name') }}</label>
                      <input type="text" v-model="name" @keyup="resetThisError(nameError)" :class="nameError.length ? 'border-danger' : ''" class="form-control" :placeholder="$t('ph-name')" :disabled="isBeingSent">
                      <div v-if="nameError.length">
                        <p v-for="(error, index) in nameError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label :class="emailError.length ? 'text-danger' : ''">{{ $t('email') }}</label>
                      <input type="email" v-model="email" @keyup="resetThisError(emailError)" :class="emailError.length ? 'border-danger' : ''" class="form-control" :placeholder="$t('ph-email')" :disabled="isBeingSent">
                      <div v-if="emailError.length">
                        <p v-for="(error, index) in emailError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label :class="phoneError.length ? 'text-danger' : ''">{{ $t('phone') }}</label>
                      <input type="tel" v-model="phone" @keyup="resetThisError(phoneError)" :class="phoneError.length ? 'border-danger' : ''" class="form-control" :placeholder="$t('ph-phone')" :disabled="isBeingSent">
                      <div v-if="phoneError.length">
                        <p v-for="(error, index) in phoneError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label :class="msgError.length ? 'text-danger' : ''">{{ $t('message') }} (max: 255)</label>
                      <textarea v-model="msg" @keyup="resetThisError(msgError)" :class="msgError.length ? 'border-danger' : ''" class="form-control" rows="7" maxlength="255" :placeholder="$t('ph-message')" :disabled="isBeingSent"></textarea>
                      <div v-if="msgError.length">
                        <p v-for="(error, index) in msgError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                      </div>
                    </div>
                    <div class="form-group contact-form-button-container">
                      <button @click="this.sendMail" class="btn" :disabled="isBeingSent">
                        <span v-if="isBeingSent" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        {{ $t('send') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      env_addr: process.env.appAddr,
      montreal_phone: process.env.appMtlPhone,
      toronto_phone: process.env.appTorPhone,
      env_email: process.env.appEmail,
      title: this.$t('title'),
      consulting: this.$t('consulting'),

      isSent: false,
      isBeingSent: false,
      name: "",
      email: "",
      phone: "",
      msg: "",
      nameError: [],
      emailError: [],
      phoneError: [],
      msgError: [],
      isSuccess: false,
      isActive: false,
      resultMsg: '',
    }
  },
  head: function() {
    return {
      title: `${this.title} - R&K ${this.consulting}`,
      meta: [
        {
          hid: 'RNK consulting',
          name: 'contact',
          content: `${this.$t('sub-text-4')}`,
        }
      ],
    }
  },
  methods: {
    resetInput: function() {
      this.name = this.email = this.phone = this.msg = "";
    },
    resetError: function() {
      this.nameError = this.emailError = this.phoneError = this.msgError = [];
    },
    resetAlert: function() {
      this.isActive = false;
    },
    resetThisError: function(errorData) {
      // empty the error's array
      if(errorData.length) errorData.splice(0, errorData.length)
    },
    validateEmpty: function() {
      if(this.name === "") this.nameError = [`${this.$t('invalid-1')} ${this.$t('name')} ${this.$t('invalid-2')}`];
      if(this.email === "") this.emailError = [`${this.$t('invalid-1')} ${this.$t('email')} ${this.$t('invalid-2')}`];
      if(this.phone === "") this.phoneError = [`${this.$t('invalid-1')} ${this.$t('phone')} ${this.$t('invalid-2')}`];
      if(this.msg === "") this.msgError = [`${this.$t('invalid-1')} ${this.$t('message')} ${this.$t('invalid-2')}`];

      return !this.nameError.length && !this.emailError.length && !this.phoneError.length && !this.msgError.length;
    },
    makeSendMailRequest: function() {
      try {
        const contactForm = { 'name': this.name, 'email': this.email, 'phone': this.phone, 'message': this.msg }

        // disables all form input
        this.isBeingSent = true;

        // request http communication
        this.$axios.$post('/contact', contactForm)
             .then(response => {
               // successfully sent a mail to a customer
               if(response.success) {
                 this.resetInput();
                 this.isActive = true;
                 this.isSuccess = true;
                 this.resultMsg = this.$t('success-msg');
               } else {
                 this.displayErrorAlert();
               }
             }).catch(error => {
               if(error.response) {
                 // error from the server's validation
                 const errors = error.response.data.errors;

                 if(errors) {
                   if(errors.name) this.nameError = errors.name;
                   if(errors.email) this.emailError = errors.email;
                   if(errors.phone) this.phoneError = errors.phone;
                   if(errors.message) this.msgError = errors.message;
                 } else {
                   // no errors returned, but something went wrong in the server
                   this.displayErrorAlert();
                 }
               } else {
                 // server error
                 this.displayErrorAlert();
               }
             }).finally(() => {
               // enables all form input
               this.isBeingSent = false;
             });

      } catch(e) {
        this.displayErrorAlert();
      }
    },
    sendMail: function() {
      // reset Error and Alert
      this.resetError();
      this.resetAlert();

      if(this.validateEmpty()) {
        this.makeSendMailRequest();
      }
    },
    displayErrorAlert() {
      this.isActive = true;
      this.resultMsg = this.$t('error-msg');
    }
  }
}
</script>

<style scoped>
.contact-content-row-container {
  margin-bottom: 1.25em;
}

.contact-content-form-container {
  width: 100%;
  height: auto;
  padding: 2.03125em 1.34375em;
  border-radius: 1px;
  background-color: #fff;
  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -ms-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -o-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.contact-form-button-container {
  margin-bottom: 0 !important;
  text-align: right;
}

.contact-form-button-container>button {
  background: #1A5268;
  border-color: #306377;
  color: white;
}

.contact-form-button-container>button:hover {
  background: white;
  color: #005678;
}

.contact-form-button-container>button:focus{
  outline: none;
  box-shadow: none;
}

.contact-content-form-container label {
  margin-bottom: 0.3125em;
  font-size: 0.85em;
  font-weight: bold;
}

.contact-content-form-container input, .contact-content-form-container textarea {
  font-size: 0.84375em;
}

.contact-content-form-container .form-group {
  margin-bottom: 1.15625em;
}

.contact-content-description-container {
  margin-bottom: 2.5em;
}

.contact-content-description-header {
  font-size: 3.125em;
  font-weight: bold;
  margin-bottom: 0.5em;
  line-height: 0.8;
}

.contact-content-description-subline {
  font-size: 0.95em;
  line-height: 1.25;
  color: #787878;
  text-align: justify;
}

.contact-content-extra-info-container>div {
  margin-bottom: 1.25em;
}

.contact-content-extra-information {
  font-size: 0.85em;
  font-weight: bold;
}

.contact-container {
  background-color: #fff;
}

.contact-lbl-1 {
  min-width: 7em;
  display: inline-block;
}

.contact-icon {
  height: 1.2em;
  max-width: 1.2em;
  opacity: 0.8;
}

.sp-1 {
  width: 5em;
  display: inline-block;
  font-size: 1em;
}

.sp-ls {
  letter-spacing: 0.08em;
}

.p-ls-1 {
  letter-spacing: 0.024em;
}

@media (max-width: 991px) {
  .contact-content-container {
    padding: 3em 10%;
    margin: auto;
  }

  .contact-lbl-2 {
    display: inline-block;
  }
}

@media (min-width: 992px) {
  .contact-content-container {
    padding: 3em 3.5em;
    width: 80%;
    margin: auto;
  }

  .contact-lbl-2 {
    display: block;
  }
}

@media (max-width: 575px) {
  .contact-content-description-header {
    line-height: 1.0;
  }
}
</style>
