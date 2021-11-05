<i18n>
{
  "en": {
    "title": "Error 404",
    "consulting": "Consulting",
    "msg-1": "Sorry! Nothing was found",
    "msg-2": "The page you are looking for might have been removed, had its name changed or is temporarily unavailable",
    "msg-3": "Return to home"
  },
  "fr": {
    "title": "Erreur 404",
    "consulting": "Consultation",
    "msg-1": "Désolé! Rien n'a été trouvé",
    "msg-2": "La page que vous recherchez a peut-être été supprimée, son nom a changé ou est temporairement indisponible",
    "msg-3": "Retour à la page d'accueil"
  }
}
</i18n>

<template>
  <div>
    <div class="error-block-1">
      <div class="error-container">
        <h1 class="hs-1">404</h1>
        <h3 class="hs-2">{{ $t('msg-1') }}</h3>
        <p class="p-1">
          {{ $t('msg-2') }}
          <br/>
          <NuxtLink :to="localePath('/')" class="nl-1">{{ $t('msg-3') }}</NuxtLink>
        </p>
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
          hid: 'RNK error',
          name: 'error',
          content: `${this.$t('msg-1')} ${this.$t('msg-2')}`,
        }
      ],
    }
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'Kanit Regular';
  src: url('/fonts/Kanit/Kanit-Regular.ttf');
  font-display: swap;
}

.error-block-1 {
  height: 30em;
  width: 100%;
  padding: 5em 2.5%;
}

.error-container {
  text-align: center;
}

.hs-1 {
  font-size: 7.5em;
  letter-spacing: 0.1em;

  font-family: 'Kanit', sans-serif;
  background: linear-gradient(130deg, #5E8595, #123948);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
}

.hs-2 {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: bold;
  margin-bottom: 1.25em;
}

.p-1 {
  font-size: 0.95em;
}

.nl-1 {
  color: #123948;
  text-decoration: none;
  letter-spacing: 0.1em;
  font-weight: bold;
}

.nl-1:hover {
  opacity: 0.9;
}
</style>
