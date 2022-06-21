<template>
  <div id="app">
    <head>
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,700&family=Roboto:ital@1&display=swap"
        as="style"
      />
      <title>Groupomania</title>
    </head>
    <!--Premier composant, point d'entrée de vue-->
    <router-view />
    <!--router-view affichera le composant qui correspond à l'url.-->
  </div>
</template>

<script>
/*import du composants accueil*/

export default {
  /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
  components: {},
  data: function () {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      token: JSON.parse(localStorage.getItem("token")),
      components: {},
    };
  },
  methods: {
    veremos() {
      this.token = JSON.parse(
        localStorage.getItem("token")
      ); /*Récupération du token présent dans le local storage*/
    },
  },
};
</script>
