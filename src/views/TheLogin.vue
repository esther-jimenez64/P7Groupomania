<template>
<div class="move">
 <HelloWorld> </HelloWorld>
 </div>
  <div id="test">
    <head>
      <title>Your Title here</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://bootswatch.com/4/lumen/bootstrap.min.css"
      />
    </head>
    <body>
      <div class="fullDiv">
        <div class="innerLeftBlurred"></div>
      </div>
      <div class="innerRightBlurred"></div>
      <div class="innerRight">
        <div class="row">
          <h1 class="text-center login-title"></h1>
          <div class="account-wall">
            <img
              loading="lazy"
              alt="photo du logo groupomania"
              class="profile-img"
              src="../assets/icon-above-font.png "
            />
            <form class="form-signin">
              <input
                class="form-control"
                v-model="email"
                type="email"
                placeholder="Insérer votre email"
                required
                autofocus
              /><!--V-model email pour la liaison d'entrée de formulaire bidirectionnelle-->
              <br />
              <input
                class="form-control"
                v-model="password"
                type="password"
                placeholder="Insérer votre mot de passe"
                minlength="8"
                required
              /><!--V-model password pour la liaison d'entrée de formulaire bidirectionnelle-->
              <button
                @click.prevent="sendPost()"
                class="btn btn-lg btn-primary btn-block sign-in"
                type="submit"
              >
                <!--écoute du clic du bouton en passant une function -->
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                Login
              </button>
              <router-link class="pull-right need-help" to="/signup"
                ><!--link vers views-->
                Pas de compte ? Inscrivez vous</router-link
              ><router-view /><!--router-view affichera le composant qui correspond à l'url.-->
            </form>
          </div>
        </div>

      </div>
      
    </body>
    
  </div>
<footer class="foot">
             <HelloFooter> </HelloFooter>  
             </footer>
  

</template>

<script>
import HelloFooter from "../components/HelloFooter.vue";
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/
import HelloWorld from "../components/HelloWorld.vue";
export default {
  /*importer un SFC comme un module*/
  components: {
    HelloWorld,
    HelloFooter
  },
  data: function () {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      email: "" /*donnée réactif du v-model*/,
      password: "",
      token: JSON.parse(
        localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
    };
  },
  methods: {
    /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    goToPost() {
      /*fontion qui redirige vers le view posts*/
      this.$router.push("/posts");
    },
    mounted() {
      /*lors du cycle de vie vu mounted en récupère le toke du LS*/
      this.token = JSON.parse(localStorage.getItem("token"));
    },
    sendPost() {
      /*Fonction qui post qui envois l'user à la database*/
      const postData = {
        /*objet avec les value */ email: this.email,
        password: this.password,
      };
      axios
        .post("http://localhost:3000/api/user/login", postData)
        .then((res) => {
          localStorage.setItem(
            "token",
            JSON.stringify(res.data)
          ); /*on crée l'item token en lui passe les données de la res 200 token username userId*/
          this.token = JSON.parse(
            localStorage.getItem("token")
          ); /*Ensuite, nous le récupérons*/
          this.goToPost(); /* redirige vers le view posts*/
        })
        .catch((res) => {
          /*erreur possible et alert*/
          console.log(res);
          alert("L'émail saisi ou le mot de pass est incorrect ");
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.move.nav{
position:relative;left:10px;
}
footer.foot {
    position: absolute;
    bottom: -175px;
}
#test a[data-v-092dea1e] {
  font-weight: bold;
  color: #fd2d01 !important;
}
.a.pull.right.need-help {
  color: red;
}
.btn-primary {
  background-color: white;
  border-color: silver;
  color: #fd2d01;
  font-family: "Lato", bold;
}

#test {
  padding: 30px;
}

#test a {
  font-weight: bold;
  color: #fd2d01 !important;
}

#test a.router-link-exact-active {
  color: #42b983;
}

.fullDiv[data-v-c168189c] {
    background: url(https://www.renovationettravaux.fr/wp-content/uploads/2019/01/Prix-d%E2%80%99am%C3%A9nagement-de-bureau-professionnel.jpg) no-repeat;
    background-size: cover;
    position: absolute;
    left: 0px;
    bottom: -90.8px;
    width: 100%;
    height: 100%;
    background-color: orange;
}


.innerRightBlurred[data-v-c168189c][data-v-c168189c] {
    position: absolute;
    opacity: 0.8;
    background-color: #202020;
    left: auto;
    width: 335px;
    top: 92px;
    bottom: 0;
    right: 0;
    height: 631px;
}
.innerRight {
  position: absolute;
  left: auto;
  top: 0;
  bottom: 0;
  right: 0;
  color: #707070;
}
.innerLeft {
  position: fixed;
  opacity: 1;
  left: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 330px;
}

.qrcode {
  position: fixed;
  opacity: 1;
  left: auto;
  bottom: 10px;
  right: 330px;
  padding-right: 10px;
  padding-top: 10px;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.checkbox {
  color: rgb(14, 134, 232);
  margin-left: 20px;
}

.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 18px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 250px;
  color: rgb(21, 140, 186);
}
.form-signin input[type="password"] {
  color: rgb(21, 140, 186);
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  width: 250px;
}
.account-wall {
  margin-top: auto;
  margin-right: 10px;
  padding-left: 200px;
  padding: 20px;
  margin-top: 150px;
}
.login-title {
  color: #555;
  font-size: 50px;
  font-weight: 400;
  display: block;
}
.profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.need-help {
  margin: 10px 0px 0px 45px;
}
.new-account {
  display: block;
}
.sign-in {
  margin-bottom: 20px;
}
</style>
