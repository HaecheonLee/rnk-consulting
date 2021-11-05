<i18n>
{
  "en": {
    "title": "Our Service",
    "consulting": "Consulting",
    "header-text-1": "A trustworthy consulting is the most important starting point",
    "header-text-2": "for your visit or immigration plan to Canada",
    "our": "our",
    "service": "service",
    "overview": "An overview of our consultation",
    "sub-text-1": "We assess your eligibility in order to suggest the best immigration strategy. The first consultation is free of charge. The next arranged meeting in person, by phone or Zoom will be $100 an hour and this fee will be deducted once you sign the contract for our professional service.",
    "sub-text-2": "We are happy to offer you Canadian Immigration Services in the following languages: French, English, and Korean.",
    "sub-text-3": "Please do not hesitate to book a consultation for your future plan.",
    "header-text-3": "What we offer",
    "sub-text-4": "We will assist you all the way to fulfill your dream in Canada",
    "opt-1": "Immigration Consulting",
    "opt-2": "Visa & Immigration Application",
    "opt-3": "Job Matching Service",
    "opt-4": "Landing Assistance",
    "alt-1": "An icon for book",
    "alt-2": "An icon for global",
    "alt-3": "An icon for bulb",
    "alt-4": "An icon for flight"
  },
  "fr": {
    "title": "Nos Services",
    "consulting": "Consultation",
    "header-text-1": "Une consultation digne de confiance est le point de départ",
    "header-text-2": "le plus important de votre plan de visite ou d’immigration au Canada",
    "our": "nos",
    "service": "services",
    "overview": "Un aperçu de notre consultation",
    "sub-text-1": "Nous évaluons votre admissibilité afin de vous proposer la meilleure stratégie d’immigration. Le rendez-vous arrangé en personne, par téléphone ou Zoom sera de 100$ de l’heure et ces frais seront déduits une fois que vous aurez signé le contrat de notre service professionnel.",
    "sub-text-2": "Nous sommes heureux de vous offrir nos services d’immigration canadienne dans les langues suivantes : français, anglais et coréen.",
    "sub-text-3": "N’hésitez pas à communiquer avec nous afin de prendre un rendez-vous pour votre futur projet.",
    "header-text-3": "Ceux que nous offrons",
    "sub-text-4": "Nous vous aiderons tout au long du chemin à réaliser vos rêves au Canada.",
    "opt-1": "Consultation en immigration",
    "opt-2": "Demandes des visas et d’immigration",
    "opt-3": "Jumelage d’emploi",
    "opt-4": "Service d’accompagnement",
    "alt-1": "Une icône pour le livre",
    "alt-2": "Une icône pour le monde",
    "alt-3": "Une icône pour l'ampoule",
    "alt-4": "Une icône pour le vol"
  }
}
</i18n>

<template>
  <div>
    <div class="service-block-1">
      <div class="service-block-padding-1">
        <h2 class="rnk-label-color text-center mb-0">
          {{ $t('header-text-1') }}<br/>
          {{ $t('header-text-2') }}
        </h2>
      </div>
    </div>

    <div class="service-block-2">
      <div class="service-block-padding-2">
        <div class="row service-block-2-height-1">
          <div class="col-md-6 col-sm-12">
            <div class="service-block-vertical-center">
              <p class="service-lbl-1 rnk-label-color">
                <label class="service-lbl-5">{{ $t('our') }}&nbsp;</label>
                <label class="service-lbl-5">{{ $t('service') }}</label>
              </p>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <p class="service-lbl-2">{{ $t('overview') }}</p>
            <p class="service-lbl-3">
              {{ $t('sub-text-1') }}
              <br/><br/>
              {{ $t('sub-text-2') }}
              <br/><br/>
              {{ $t('sub-text-3') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="service-block-3">
      <div class="service-block-padding-3">
        <h4 class="text-center mb-4">{{ $t('header-text-3') }}</h4>
        <p class="service-lbl-4 text-center">{{ $t('sub-text-4') }}</p>
        <div class="block-padding text-center">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="service-box-container">
                <div class="service-icon-container">
                  <img src="/img/our-service/book.png" :alt="this.$t('alt-1')">
                </div>
                <p class="service-lbl-6">{{ $t('opt-1') }}</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box-container">
                <div class="service-icon-container">
                  <img src="/img/our-service/global.png" :alt="this.$t('alt-2')">
                </div>
                <p class="service-lbl-6">{{ $t('opt-2') }}</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box-container">
                <div class="service-icon-container">
                  <img src="/img/our-service/bulb.png" :alt="this.$t('alt-3')">
                </div>
                <p class="service-lbl-6">{{ $t('opt-3') }}</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="service-box-container">
                <div class="service-icon-container">
                  <img src="/img/our-service/flight.png" :alt="this.$t('alt-4')">
                </div>
                <p class="service-lbl-6">{{ $t('opt-4') }}</p>
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
      title: this.$t('title'),
      consulting: this.$t('consulting'),
    }
  },
  head: function() {
    return {
      title: `${this.title} - R&K ${this.consulting}`,
      meta: [
        {
          hid: 'RNK our service',
          name: 'our service',
          content: `${this.$t('header-text-1')} ${this.$t('header-text-2')}`,
        }
      ],
    }
  },
}
</script>

<style scoped>
.service-block-1 {
  height: auto;
  position: relative;
}

.service-block-2 {
  background: #fCfCfE;
}

.service-block-padding-1, .service-block-padding-2, .service-block-padding-3 {
  padding-top: 5.5em;
  padding-bottom: 5.5em;
}

.service-block-2-height-1 {
  min-height: 17.5em;
}

.service-lbl-4 {
  font-size: 0.95em;
  color: #9a9a9a;
  margin-bottom: 5em;
}

.service-lbl-1 {
  font-size: 5em;
  line-height: 0.8;
}

.service-lbl-2 {
  font-size: 1.75em;
  margin: 0;
  font-weight: bold;
  margin-bottom: 2.25em;
}

.service-lbl-3 {
  font-size: 0.95em;
  margin-bottom: 1.5em;
  text-align: justify;
}

.service-lbl-6 {
  font-size: 0.9em;
  font-weight: bold;
}

.service-book-consult {
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: #1A5268;
  font-size: 0.9em;
}

.service-book-consult:hover {
  opacity: 0.8;
}

.service-block-1-deco {
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-box-container {
  margin-bottom: 1em;
}

.service-icon-container {
  padding: 3em 2em;
}

.service-lbl-5 {
  text-transform: capitalize;
}

@media (min-width: 992px) {
  .service-block-padding-1 {
    padding-left: 12em;
    padding-right: 12em;
  }

  .service-block-padding-2 {
    padding-left: 17.5%;
    padding-right: 17.5%;
  }

  .service-lbl-1 {
    text-align: left;
  }

  .service-lbl-5 {
    display: block;
  }
}

@media (max-width: 991px) {
  .service-block-padding-1 {
    padding-left: 2em;
    padding-right: 2em;
  }

  .service-block-padding-2 {
    padding-left: 2em;
    padding-right: 2em;
  }
}

@media (min-width: 768px) {
  .service-block-vertical-center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .service-block-padding-2 {
    padding-left: 1.5em;
    padding-right: 1.5em;
  }

  .service-block-padding-3 {
    padding-left: 5%;
    padding-right: 5%;
  }

  .service-box-container {
    margin-bottom: 2em;
  }

  .service-lbl-1 {
    font-size: 3em;
    margin-bottom: 3em;
    text-align: center;
  }

  .service-lbl-2 {
    font-size: 1.25em;
    text-align: center;
  }
}
</style>
