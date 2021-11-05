<template>
  <div>
    <div v-if="isActive">
      <div class="custom-alertbox alert alert-dismissible fade show" :class="isSuccess ? 'alert-success' : 'alert-danger'" role="alert">
        <label :class="isSuccess ? 'lbl-success-alert' : 'lbl-error-alert'">{{ resultMsg }}</label>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
    <div v-if="isNotBooking" class="bc-main">
      <div class="block-padding">
        <div class="bc-block-1">
          <h1 class="rnk-label-color mb-0">Visa & Immigration Consultation</h1>
          <p class="bc-lbl-1">Start planning your new dream with us</p>
        </div>
      </div>
      <div class="bc-block-2">
        <div class="block-padding">
          <h3 class="bc-lbl-2">Consultation</h3>
          <p class="bc-lbl-4">A regulated, professional immigration consultant will provide the assistance you need</p>
        </div>
      </div>
      <div class="bc-block-3">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="bc-option-container">
              <div class="bc-icon-container">
                <img class="bc-option-img" src="/img/book-consultation/calendar.png" />
              </div>
              <h6 class="bc-lbl-3">Make an appointment</h6>
              <div class="text-start">
                <button @click="updateBookingState" class="bc-btn-1">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="bc-block-3">
        <div class="block-padding">
          <button @click="updateBookingState" class="bc-btn-1 d-block mb-3">&#9665 View all services</button>
          <div class="row">
            <div class="col-sm-12 col-md-6 mb-3">
              <div class="mb-3">
                <client-only placeholder="Loading...">
                  <v-date-picker
                        :min-date="new Date(new Date().getTime() + (24 * 60 * 60 * 1000))"
                        color="teal"
                        :disabled-dates='(isBeingBooked ? {} : { weekdays: [1, 7] })'
                        trim-weeks
                        is24hr
                        is-expanded
                        v-model="selectedDateTime"
                        mode="dateTime" :minute-increment="80" />
                  <div v-if="bookingAtError.length">
                    <p v-for="(error, index) in bookingAtError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                  </div>
                </client-only>
              </div>
              <div class="mb-5">
                <p class="bc-p-1">Notice</p>
                <hr/>
                <label class="bc-lbl-5"><b>A.</b> You need to provide us with your name, email, phone, and booking time to book your consultation</label>
                <label class="bc-lbl-5"><b>B.</b> Please check our service hours <NuxtLink class="bc-contact-link" to="/contact">here</NuxtLink> before booking the consultation</label>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 mb-3">
              <div class="bc-content-form-container">
                <div id="bc-form">
                  <h6 class="text-center fw-bold mb-4 text-uppercase rnk-label-color">Book Consulting</h6>
                  <div class="form-group">
                    <label :class="nameError.length ? 'text-danger' : ''">Name</label>
                    <input type="text" v-model="name" @keyup="resetThisError(nameError)" :class="nameError.length ? 'border-danger' : ''" class="form-control" placeholder="Enter name" :disabled="isBeingBooked">
                    <div v-if="nameError.length">
                      <p v-for="(error, index) in nameError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label :class="emailError.length ? 'text-danger' : ''">E-mail</label>
                    <input type="email" v-model="email" @keyup="resetThisError(emailError)" :class="emailError.length ? 'border-danger' : ''" class="form-control" placeholder="Enter e-mail" :disabled="isBeingBooked">
                    <div v-if="emailError.length">
                      <p v-for="(error, index) in emailError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <label :class="phoneError.length ? 'text-danger' : ''">Phone Number</label>
                    <input type="tel" v-model="phone" @keyup="resetThisError(phoneError)" :class="phoneError.length ? 'border-danger' : ''" class="form-control" placeholder="Enter phone number" :disabled="isBeingBooked">
                    <div v-if="phoneError.length">
                      <p v-for="(error, index) in phoneError" :key="index + error" class="lbl-error text-danger">{{ error }}</p>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="bc-form-button-container">
                      <button @click="booking" class="btn" :disabled="isBeingBooked">
                        <span v-if="isBeingBooked" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Book
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
  middleware({ store, redirect }) {
    // redirect to home, will be removed after the service of reservation is on
    return redirect('/');
  },
  data: function() {
    return {
      title: 'Book Consultation',

      name: '',
      phone: '',
      email: '',
      selectedDateTime: '',
      booking_at: '',
      nameError: [],
      phoneError: [],
      emailError: [],
      bookingAtError: [],
      isBeingBooked: false,
      isBooked: false,
      isNotBooking: true,
      isSuccess: false,
      isActive: false,
      resultMsg: '',
    }
  },
  head: function() {
    return {
      title: this.title,
      meta: [
        {
          hid: '',
          name: 'book consultation',
          content: '',
        }
      ],
    }
  },
  watch: {
    selectedDateTime: function(val) {
      this.booking_at = val;
      if(this.booking_at) this.booking_at.setMinutes(0, 0, 0);
    },
    isNotBooking: function(val) {
      if(val) {
        this.resetAlert();
        this.resetInput();
        this.resetError();
      }
    }
  },
  methods: {
    updateBookingState: function() {
      this.isNotBooking = !this.isNotBooking;

      // scroll to the top
      window.scrollTo(0, 0);
    },
    makeBookingRequest: function() {
      const bookingForm = { 'name': this.name, 'email': this.email, 'phone': this.phone, 'booking_at': this.booking_at };

      // disable all form input
      this.isBeingBooked = true;

      this.$axios.$post('/booking', bookingForm)
                 .then(response => {
                    this.resultMsg = response.msg;
                    this.isSuccess = response.success;
                    this.isActive = true;

                    if(this.isSuccess) {
                      this.resetInput();
                    }
               }).catch(error => {
                 const errors = error.response.data.errors;
                 if(errors) {
                   if(errors.name) this.nameError = errors.name;
                   if(errors.email) this.emailError = errors.email;
                   if(errors.phone) this.phoneError = errors.phone;
                   if(errors.booking_at) this.bookingAtError = errors.booking_at;
                 } else {
                   this.isActive = true;
                   this.isSuccess = false;
                   this.resultMsg = 'It\'t our fault. Please try it later again';
                 }
               }).finally(() => {
                  this.isBeingBooked = false;
               });
    },
    resetError: function() {
      this.nameError = this.emailError = this.phoneError = this.bookingAtError = [];
    },
    resetThisError: function(errorData) {
      // empty the error's array
      if(errorData.length) errorData.splice(0, errorData.length)
    },
    resetInput: function() {
      this.name = this.email = this.phone = this.selectedDateTime = "";
    },
    resetAlert: function() {
      this.isActive = this.isSuccess = false;
      this.resultMsg = '';
    },
    booking: function() {
      this.resetError();
      this.resetAlert();

      if(this.validateEmpty()) {
        this.makeBookingRequest();
      }
    },
    validateEmpty: function() {
      if(this.name === "") this.nameError = ["You need your name to book the consulting"];
      if(this.email === "") this.emailError = ["You need your email to book the consulting"];
      if(this.phone === "") this.phoneError = ["You need your phone to book the consulting"];
      if(this.booking_at === "") this.bookingAtError = ["You need your booking time book the consulting"];

      return !this.nameError.length && !this.emailError.length && !this.phoneError.length && !this.bookingAtError.length;
    }
  }
}
</script>

<style scoped>
.bc-block-1 {
  height: auto;
  padding-top: 5.5em;
  padding-bottom: 5.5em;
  position: relative;
  text-align: left;
}

.bc-block-2 {
  background: #fCfCfE;
  text-align: center;
}

.bc-block-2, .bc-block-3 {
  padding-top: 5em;
  padding-bottom: 5em;
}

.bc-option-container {
  max-width: 15em;
  margin: auto;
  margin-bottom: 4.5em;
  padding: 1.5em 1.25em;
  border-radius: 1em;
  background-color: #fff;
  -webkit-box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.35), 5px 8px 1px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.35), 5px 8px 1px rgba(0, 0, 0, 0.12);
  -ms-box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.35), 5px 8px 1px rgba(0, 0, 0, 0.12);
  -o-box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.35), 5px 8px 1px rgba(0, 0, 0, 0.12);
  box-shadow: 1px 5px 25px rgba(0, 0, 0, 0.35), 5px 8px 1px rgba(0, 0, 0, 0.12);
}

.bc-option-img {
  opacity: 0.8;
}

.bc-lbl-1 {
  color: #9a9a9a;
  font-size: 1.25em;
}

.bc-lbl-2 {
  margin-bottom: 0.5em;
}

.bc-lbl-3 {
  font-size: 0.95em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 0.5em;
}

.bc-lbl-4 {
  font-size: 0.85em;
  color: #9a9a9a;
}

.bc-lbl-5 {
  font-size: 0.85em;
  display: block;
  margin-bottom: 0.5em;
}

.bc-btn-1 {
  text-decoration: none;
  font-size: 0.8em;
  color: #1A5268;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  border: none;
  padding: 0;
}

.bc-btn-1:hover {
  opacity: 0.8;
}

.bc-icon-container {
  text-align: center;
  padding: 5em 1em;
}

.bc-content-form-container {
  max-width: 22.5em;
  height: auto;
  margin: auto;
  padding: 1.25em 1.85em;
  border-radius: 0.5em;
  background-color: #fff;
  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -ms-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  -o-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.bc-content-form-container label {
  margin-bottom: 0.3125em;
  font-size: 0.85em;
  font-weight: bold;
}

.bc-content-form-container input, .bc-content-form-container textarea {
  font-size: 0.84375em;
}

.bc-content-form-container .form-group {
  margin-bottom: 1.15625em;
}

.bc-form-button-container {
  margin-bottom: 0 !important;
  text-align: right;
}

.bc-form-button-container>button {
  background: #1A5268;
  border-color: #306377;
  color: white;
}

.bc-form-button-container>button:hover {
  background: white;
  color: #005678;
}

.bc-form-button-container>button:focus{
  outline: none;
  box-shadow: none;
}

.bc-p-1 {
  font-size: 0.95em;
  font-weight: bold;
}

.bc-contact-link {
  text-decoration: none;
  font-weight: bold;
  color: #1A5268;
  text-transform: uppercase;
}

.bc-contact-link:hover {
  opacity: 0.8;
}

hr {
  margin: 0.5em 0;
}

@media (min-width: 992px) {

}

@media (max-width: 991px) {

}

@media (max-width: 767px) {
  .consultation-block-1 {
    text-align: center;
  }
}

@media (max-width: 575px) {
  .bc-block-1 {
    text-align: center;
  }
}
</style>
