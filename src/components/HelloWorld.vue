<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,700&family=Roboto:ital@1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Roboto:ital@1&display=swap"
    rel="stylesheet"
  />
  <head>
    <link
      rel="stylesheet"
      href="https://bootswatch.com/4/lumen/bootstrap.min.css"
    />
  </head>
  <header>
    <h1>Groupomania</h1>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" tabindex="0" />
    <label for="nav-toggle" class="acessNav"
      >"bouton pour afficher le menu navigation phone"</label
    >
    <nav>
      <ul>
        <li>
          <a><router-link to="/">Accueil</router-link></a>
          <!-- link vers les autres views Accueil-->
        </li>
        <li><router-link v-if="token" to="/posts">Forum</router-link></li>
        <!-- link vers views avec condition si l'user à un token-->
        <li>
          <!--link vers views avec condition si l'user n'a pas de token-->
          <router-link v-if="token == null" to="/signup"
            >Inscription</router-link
          >
        </li>
        <li>
          <!--link vers views avec condition si l'user n'a pas de token -->
          <router-link v-if="token == null" to="/login">
            Connecter vous</router-link
          >
        </li>
        <li>
          <!--link vers views avec condition si l'user à un token-->
          <router-link v-if="token" to="/selfSpace">
            Espace Personel</router-link
          >
        </li>
      </ul>
    </nav>
    <label for="nav-toggle" class="nav-toggle-label" tabindex="0">
      <span></span>
    </label>
  </header>
</template>

<script>
export default {
  data: function () {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      token: JSON.parse(localStorage.getItem("token")),
      components: {},
    };
  },
  created() {
    this.takeToken();
  },
  methods: {
    takeToken() {
      this.token = JSON.parse(
        localStorage.getItem("token")
      ); /*Récupération du token présent dans le local storage*/
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300,600");
h1 header {
  display: flex;
  align-items: flex-end;
  margin-left: -100px;
  font-family: "Lato", bold;
  margin-top: 15px;
}
h1 {
  color: #fd2d01;
  font-family: "Lato", bold;
}
.h1,
h1 {
  font-size: 2.1875rem;
  position: relative;
  top: 35px;
  right: 10px;
}
:root {
  --background: rgba(0, 214, 170, 0.85);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
a body {
  margin: 0;
  background: #222;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}
.content {
  height: 200vh;
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-items: center;
}
/* navigation styles start here */
header {
  background: white;
  text-align: center;
  position: relative;
  bottom: 25px;
  right: 1px;
  z-index: 999;
  width: 100%;
}

.nav-toggle {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}

.nav-toggle:focus ~ .nav-toggle-label {
  outline: 3px solid rgba(lightblue, 0.75);
}
.acessNav {
  color: white;
}
.nav-toggle-label {
  position: absolute;
  top: 35px;
  left: 0;
  margin-left: em;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fd2d01;
  width: 44px;
  margin-right: 15px;
  padding-left: 7px;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: white;
  height: 2px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
  content: "";
  position: absolute;
}

.nav-toggle-label span::before {
  bottom: 7px;
}

.nav-toggle-label span::after {
  top: 7px;
}

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav ul {
  margin: 0;
  padding: 0;
  margin-top: 15px;
  list-style: none;
}

nav li {
  margin-bottom: 1em;
  margin-left: 1em;
}

nav a {
  color: #fd2d01;
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0;
  font-family: "Lato", regular;
  transition: opacity 150ms ease-in-out;
}

nav a:hover {
  color: blue;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px) {
  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }

  .logo {
    grid-column: 2 / 3;
  }

  nav {
    position: relative;
    text-align: left;
    transition: none;
    transform: scale(1, 1);
    background: none;
    top: initial;
    left: initial;
    grid-column: 3 / 4;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  nav ul {
    display: flex;
  }

  nav li {
    margin-left: 3em;
    margin-bottom: 0;
  }

  nav a {
    opacity: 1;
    position: relative;
  }

  nav a::before {
    content: "";
    display: block;
    height: 5px;
    background: #ace8fb;
    position: absolute;
    top: -0.75em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }

  nav a:hover::before {
    transform: scale(1, 1);
  }
}
</style>
