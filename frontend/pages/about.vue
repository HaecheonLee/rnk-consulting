<i18n>
{
  "en": {
    "title": "About",
    "consulting": "Consulting",
    "sub-text-1": "is an Immigration Consultancy Firm located in",
    "city": "Montreal and Toronto",
    "sub-text-2": "We are a national regulatory body authorized by the government of Canada and Quebec and provide Immigration Services according to the Immigration regulations and the requirement of clients.",
    "sub-text-3": "Ms. Kate Min Kwon, a Member of ICCRC and MIFI since 2018, is a founder of R&K Consulting and an expert in Canada Immigration.",
    "sub-text-4": "Ms. Kwon provides the highest quality of immigration consulting service and represents clients based on the over 10 years of practices in the Canadian Immigration Field. She has an extensive knowledge and experience in immigration regulations and visa applications.",
    "our-team": "Our Team",
    "cert-1": "Regulated Canadian Immigration Consultant",
    "cert-2": "Membre des Consultants en Immigration du Québec",
    "president": "President",
    "vice-president": "Vice President",
    "case-manager": "Case Processing Manager",
    "case-assistant": "Case Processing Assistant",
    "ed-assistant": "Educational Consulting Assistant",
    "alt-1": "A picture of city in Canada"
  },
  "fr": {
    "title": "À Propos",
    "consulting": "Consultation",
    "sub-text-1": "est un cabinet de conseil en immigration situé à",
    "city": "Montréal et Toronto",
    "sub-text-2": "Nous sommes un organisme national de réglementation autorisé par le gouvernement du Canada et du Québec. Nous fournissons des services d’immigration conformément aux réglementations en matière d’immigration et aux exigences des clients.",
    "sub-text-3": "Mme Kate Min Kwon, membre du CRCIC et du MIFI depuis 2018, est fondatrice et experte en immigration au Canada.",
    "sub-text-4": "Mme Kate fournit des services de consultation en immigration de la plus haute qualité et représente des clients basés sur plus de 10 ans de pratiques sur le terrain à Montréal. Elle possède des connaissances et des expériences approfondies des réglementations en matière d’immigration et des demandes de visas.",
    "our-team": "Notre Équipe",
    "cert-1": "Consultante réglementée en immigration canadienne",
    "cert-2": "Membre des Consultants en Immigration du Québec",
    "president": "Présidente",
    "vice-president": "Vice-président",
    "case-manager": "Directrice de traitement des dossiers",
    "case-assistant": "Adjointe au traitement des dossiers",
    "ed-assistant": "Adjointe aux services éducatifs",
    "alt-1": "Une photo de ville au Canada"
  }
}
</i18n>

<template>
  <div>
    <div class="about-block-1">
      <nuxt-img class="about-block-bg" :alt="this.$t('alt-1')" src="/img/about/94AeiTXbDK1ckb9FRlCBjPYw577hTGwWXftH4KdB9b0.png" />
      <div class="about-block-1-deco">
        <div v-if="false" class="block-padding">
          <div class="about-header-container">
            <h1 class="about-text-header-1">
              We support your dream to begin<br/>
              your new life in Canada
            </h1>
          </div>
          <div class="about-info-container">
            <h2 class="mb-0 text-light d-block">2018</h2>
            <label class="lbl-style">Started</label>
          </div>
        </div>
      </div>
    </div>
    <div class="about-block-2">
      <div class="about-block-2-deco">
        <div class="block-padding">
          <div>
            <div class="row">
              <div class="col-md-5 col-sm-12 mb-2">
                <UtilMember
                  name="Kate Min Kwon"
                  :jobTitle="$t('president')"
                  imageUrl="1f1734cf3847aa1308c9d53963a8904a51e8275499d53549be79b4386b1c5c3e.png"
                  :info="$t('cert-1') + ' (R529664) <br/>' + $t('cert-2') + ' (11726)'"
                 />
              </div>
              <div class="col-md-7 col-sm-12 about-block-padding">
                <p class="about-description">
                  <b class="rnk-label-color">R&K {{ $t('consulting') }} </b> {{ $t('sub-text-1') }} <b>{{ $t('city') }}</b>, <b>Canada</b>.
                  {{ $t('sub-text-2') }}
                  <br/><br/>
                  {{ $t('sub-text-3') }}
                  <br/><br/>
                  {{ $t('sub-text-4') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="about-block-3">
      <div class="about-block-3-deco">
        <h2 class="about-text-header-2 rnk-label-color">{{ $t('our-team') }}</h2>
      </div>

      <div class="about-block-3-padding">
        <div class="our-memeber-container">
          <div class="row">
            <div class="col-md-6 about-block-margin">
              <UtilMember
                name="Ryan Mok"
                :jobTitle="$t('vice-president')"
                imageUrl="b8fc51dfaaf5beca2a024b38983cb2536dda7e431b9e22de6b3d40f76f68a591.png"
               />
            </div>
            <div class="col-md-6 about-block-margin">
              <UtilMember
                name="Erika Hahn"
                :jobTitle="$t('case-manager')"
                imageUrl="8df4452b12cbbd990343ea870e325fcaab86619da7476dc45670da6025603132.png"
               />
            </div>
            <div class="col-md-6 about-block-margin">
              <UtilMember
                name="Hailey Kim"
                :jobTitle="$t('case-assistant')"
                imageUrl="fMec7DDbGUwYUH700a3krsdRRVvC07Jh9yONu5NuZ5I.png"
               />
            </div>
            <div class="col-md-6 about-block-margin">
              <UtilMember
                name="Mina Yu"
                :jobTitle="$t('ed-assistant')"
                imageUrl="AxWVQgwA3Yb13UVo5PIkozyslYSNexXK9ZiS8k2TGc.png"
               />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  scrollToTop: true,
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
          hid: 'about',
          name: 'about',
          content: `R&K ${this.$t('consulting')} ${this.$t('sub-text-1')} ${this.$t('city')}, Canada. ${this.$t('sub-text-2')}`
        }
      ],
    }
  },
}
</script>

<style scoped>
.about-block-1 {
  height: 32em;
  width: 100%;
  background: #1A5268;
  position: relative;
}

.about-block-bg {
  width: 100%;
  height: 100%;
  position: absolute;
}

.video-1 {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.about-block-2 {
  background: #fCfCfE;
  margin-bottom: 2em;
}

.about-block-3 {
  min-height: 30em;
  background: #ffffff;
}

.about-block-1-deco {
  margin: auto;
  position: absolute;
  height: 15.625em;
  top: 0; left: 0; bottom: 0; right: 0;
}

.about-block-2-deco {
  padding: 3.5em 0;
}

.about-block-3-deco {
  padding: 5em 0;
}

.lbl-style {
  color: #DAE1E7;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75em;
  display: block;
}

.about-block-padding {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-text-header-1 {
  font-weight: bold;
  color: black;
  padding: 1.5em 0;
}

.about-header-container {
  margin-bottom: 5.5em;
}

.about-description {
  font-size: 0.95em;
}

.about-text-header-2 {
  text-align: center;
}

.lbl-style-2, .about-text-header-2 {
  font-weight: bold;
}

.about-block-margin {
  margin-bottom: 8em;
}

.about-description {
  text-align: justify;
}

@media(min-width: 992px) {
  .about-block-3-padding {
    padding: 0em 12em;
  }

  .about-image-container {
    position: absolute;
    display: block;
  }
}

@media(max-width: 991px) {
  .about-image-container {
    display: none;
  }

  .about-block-margin {
    margin-bottom: 9em;
  }
}

@media(max-width: 767px) {
  .lbl-style-2 {
    text-align: center;
  }

  .about-block-padding {
    margin-top: 2.5em;
  }
}
</style>
