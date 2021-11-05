<i18n>
{
  "en": {
    "title": "Home",
    "consulting": "Consulting",
    "header": "From the beginning to the end with experienced immigration consultant",
    "consulting": "Consulting",
    "sub-text-1": "is an Immigration Consultancy and Consulting Firm located in",
    "sub-text-2": "We provide Immigration Services according to the Immigration regulations and the requirement of clients.",
    "book-consultation": "Book Consultation",
    "city": "Montreal and Toronto",
    "canada": "Canada"
  },
  "fr": {
    "title": "Accueil",
    "consulting": "Consultation",
    "header": "De la première démarche jusqu’à la fin avec notre consultante expérimentée",
    "consulting": "Consultation",
    "sub-text-1": "est un cabinet de conseil en immigration situé à",
    "sub-text-2": "Nous fournissons des services d'immigration conformément aux réglementations en matière d'immigration et aux exigences des clients.",
    "book-consultation": "Contactez-Nous",
    "city": "Montréal et Toronto",
    "canada": "Canada"
  }
}
</i18n>

<template>
  <div class="main-container">
    <div class="block-padding">
        <div class="row main-row-container">
          <div class="col-md-12 col-lg-6 main-left-container">
            <div>
              <h3 class="main-header-text">
                {{ $t('header') }}
              </h3>
              <p class="main-detail-text">
                <b class="rnk-label-color">R&K {{ $t('consulting') }}</b> {{ $t('sub-text-1') }} <b>{{ $t('city') }}</b>, <b>{{ $t('canada') }}</b>.
                {{ $t('sub-text-2') }}
              </p>
              <NuxtLink v-if="false" to="/book-consultation" class="rnk-button">{{ $t('book-consultation') }}</NuxtLink>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <img class="index-bg" src="/img/index/4ob70Xb7rYBQDTzyv1IQcTObANl2UoKVa5Yc15nIY0=.png" :alt="`R&K ${this.$t('consulting')} Information`"></img>
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
          hid: 'RNK home',
          name: 'home',
          content: `R&K ${this.$t('consulting')} ${this.$t('sub-text-1')} ${this.$t('city')}, ${this.$t('canada')}. ${this.$t('sub-text-2')}`,
        }
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-row-container {
  height: 100%;
}

.main-left-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-header-text {
  margin-bottom: 4em;
  font-weight: bold;
  font-size: 1.5em;
}

.main-detail-text {
  font-size: 0.95em;
  margin-bottom: 3.225em;
  text-align: justify;
}

.p-1 {
  text-align: justify;
}

.index-bg {
  width: 100%;
  height: 25em;
  object-fit: cover;
  object-position: center;
}

@media(min-width: 992px) {
  .main-container {
    display: flex;
    min-height: 32em;
  }

  .main-header-text {
    margin-top: 2em;
  }
}

@media(max-width: 991px) {
  .main-right-container {
    display: block;
  }

  .main-left-container {
    margin: 6em 0;
  }

  .main-header-text {
    margin-top: 4em;
  }

  .main-right-container {
    margin-bottom: 4em;
  }
}

</style>
