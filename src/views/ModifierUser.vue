 <template>
  <HelloWorld> </HelloWorld>
  <div id="test">
    <link rel="icon" href="icon.ico" />
    <button class="card" @click="deconnecter" tabindex="0">
      <!--écoute du clic  en passant une function -->
      <img
        loading="lazy"
        alt="photo d'une figure humaine représentant une photo de profils"
        class="profile-img"
        src="https://cdn-icons-png.flaticon.com/512/6568/6568636.png"
      />
      <div class="container">
        <h4><b>Déconnecter</b></h4>
      </div>
    </button>
   <div class="login">
      <h1>Vos informations</h1>
      <!--écoute du submit de l'input en passant une function -->
      <form @submit.prevent="guardar()" method="post">
        <input
          v-model="email"
          type="email"
          placeholder="votre nouvelle email"
          name="p"
          required
        /><!--V-model email pour la liaison d'entrée de formulaire bidirectionnelle-->
        <input
          v-model="password"
          type="password"
          placeholder="Votre mot de passe"
          minlength="8"
          required
        /><!--V-model password pour la liaison d'entrée de formulaire bidirectionnelle-->
        <input
          v-model="username"
          placeholder="Votre nouveaux nom user"
          type="text"
          name="u"
          required
        /><!--V-model username pour la liaison d'entrée de formulaire bidirectionnelle-->
        <button class="btn btn-primary btn-block btn-large">Modifier</button>
      </form>
    </div>
 </div>
  <footer>
    <HelloFooter> </HelloFooter>
  </footer>
</template>
<script>
import HelloFooter from "../components/HelloFooter.vue";
import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  /*définir les événements à  émettre vers son parent*/
  components: {
    HelloWorld,
    HelloFooter,
  },
  emit: ["users"] /*définir les événements à  émettre vers son parent*/,
  data() {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      album: 1 /*donnée réactif du v-model*/,
      post: "",
      email: "",
      password: "",
      username: "",
      token: JSON.parse(
        localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
    };
  },

  methods: {
      deconnecter() {
      this.token =
        localStorage.removeItem(
          "token"
        ); /*Nous retirons le token du LocalStorage*/
      this.$router.push("/login"); /*Nous redirigeons vers la page login*/
    },
    /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    guardar() {
      /*Fonction qui écoute le submit et modifi l'user grâce à l'id*/
      const postData = {
        username: this.username,
        email: this.email,
        password: this.password,
        id: this.token.userId,
      };
      const id =
        this.token
          .userId; /*Récupération de l'id de l'user qui est dans le LocalStorage*/
      axios
        .put(`http://localhost:3000/api/user/${id}/modify`, postData, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((res) => {
          localStorage.removeItem(
            "token"
          ); /*Nous retirons le token du LocalStorage*/
          localStorage.setItem(
            "token",
            JSON.stringify(res.data)
          ); /*on crée l'item token en lui passe les données de la res 200 token username userId*/
          this.$emit("UserModifier", "publicationModifier");
          this.$router.push(
            "/selfSpace"
          ); /*Nous redirigeons vers la page espace personnel*/
        });
    },
  },
};
</script>
<style scoped>
@media screen and (min-width: 200px) and (max-width: 1000px) {
 
   .login {
  position: absolute;
  top: 65%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;
}
.login h1{
    top: -8px;
    right: -15px;
    color: #fff;
}
#test {
  width: 100%;
  height: 700px;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #f54b09 0%, #ff0707 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
}
@media screen and (min-width: 1000px) and (max-width: 2500px) {
  .login {
    position: relative;
    top: 240px;
    left: 48%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }
  .login h1{
    top: -8px;
    right: -15px;
    color: #fff;
}
#test {
  width: 100%;
  height: 1000px;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #f54b09 0%, #ff0707 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
}
@media screen and (min-width: 2501px) and (max-width: 3000px) {
  .login {
    position: relative;
    top: 240px;
    left: 48%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }
  .login h1{
    top: -8px;
    right: -15px;
    color: #fff;
}
#test {
  width: 100%;
  height: 1700px;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #f54b09 0%, #ff0707 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
}

::placeholder {
  color: white;
  font-size: 1.3em;
}
.card {
  /* Add shadows to create the "card" effect */
  background: #222;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  top: 15px;
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
.btn {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  padding: 4px 10px 4px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 18px;
  color: red;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  background-color: #f5f5f5;
  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ffffff),
    to(#e6e6e6)
  );
  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: linear-gradient(top, #ffffff, #e6e6e6);
  background-repeat: repeat-x;
  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);
  border-color: #e6e6e6 #e6e6e6 #e6e6e6;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  border: 1px solid #e6e6e6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  *margin-left: 0.3em;
}
.btn:hover,
.btn:active,
.btn.active,
.btn.disabled,
.btn[disabled] {
  background-color: #e6e6e6;
}
b[data-v-4795bea4] {
  font-weight: bolder;
  font-size: 17px;
  color: white;
}
.btn-large {
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.btn:hover {
  color: #333333;
  text-decoration: none;
  background-color: #e6e6e6;
  background-position: 0 -15px;
  -webkit-transition: background-position 0.1s linear;
  -moz-transition: background-position 0.1s linear;
  -ms-transition: background-position 0.1s linear;
  -o-transition: background-position 0.1s linear;
  transition: background-position 0.1s linear;
}
.btn-primary,
.btn-primary:hover {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
}
.btn-primary.active {
  color: rgba(255, 255, 255, 0.75);
}
.btn-primary {
  background-color: black;
  background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#6eb6de),
    to(#4a77d4)
  );
  background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: -o-linear-gradient(top, #6eb6de, #4a77d4);
  background-image: linear-gradient(top, #6eb6de, #4a77d4);
  background-repeat: repeat-x;
  filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);
  border: 1px solid black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
}
.btn-primary:hover,
.btn-primary:active,
.btn-primary.active,
.btn-primary.disabled,
.btn-primary[disabled] {
  filter: none;
  background-color: #4a77d4;
}
.btn-block {
  width: 100%;
  display: block;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}




input {
  width: 100%;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
img {
  width: 50%;
  height: 50%;
  /* margin-bottom: 15px; */
  margin-top: 15px;
  margin-left: 15px;
}
b {
  font-weight: bolder;
  font-size: 17px;
  color: white;
}
.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after {
  display: block;
  background: white;
  height: 4px;
  width: 2em;
  border-radius: 2px;
  position: relative;
}
</style>
