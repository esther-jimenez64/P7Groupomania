<template>
  <body>
    <div id="test">
      <HelloWorld> </HelloWorld>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div
              class="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
              role="alert"
              data-brk-library="component__alert"
            >
              <i class="start-icon far fa-times-circle faa-pulse animated"></i
              ><!--Définir l'user name avec les données data-->
              <strong class="font__weight-semibold"
                ><span>{{ this.token.username }}</span></strong
              >
              Vous êtes sûr de vouloir supprimer votre compte, cette action sera
              irréversible
            </div>
            <button @click="deleteUser()" class="button">
              <!--écoute du clic du bouton en passant une function -->
              <div class="trash">
                <div class="top">
                  <div class="paper"></div>
                </div>
                <div class="box"></div>
                <div class="check">
                  <svg viewBox="0 0 8 6">
                    <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                  </svg>
                </div>
              </div>
              <span>Delete User</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
  <HelloFooter> </HelloFooter>
</template>
<script>
import HelloFooter from "../components/HelloFooter.vue";
import HelloWorld from "../components/HelloWorld.vue";
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  components: {
    HelloWorld,
    HelloFooter,
  } /*définir les événements à  émettre vers son parent*/,
  emit: ["users"],
  data() {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      /*donnée réactif du v-model*/ post: "",
      email: "",
      password: "",
      username: "",
      token: JSON.parse(
        localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
    };
  },

  methods: {
    /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    deleteUser() {
      /*Fonction qui écoute le clic et supprime le post en question grâce à l'id*/
      const id =
        this.token
          .userId; /*Récupération de l'id de l'user qui est dans le LocalStorage*/
      axios
        .delete(`http://localhost:3000/api/user/${id}/delete`, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem(
            "token"
          ); /*Nous retirons le token du LocalStorage*/
          this.$router.push("/signup"); /*Nous redirigeons vers la page login*/
        });
    },
  },
};
</script>
<style scoped>
.col-sm-12 {
  margin-top: 150px;
}
#test {
  background: #000e29;
  width: 100%;
  height: 700px;
}

.alert > .start-icon {
  margin-right: 0;
  min-width: 20px;
  text-align: center;
}

.alert > .start-icon {
  margin-right: 5px;
}

.greencross {
  font-size: 18px;
  color: #25ff0b;
  text-shadow: none;
}

.alert-simple.alert-success {
  border: 1px solid rgba(36, 241, 6, 0.46);
  background-color: rgba(7, 149, 66, 0.12156862745098039);
  box-shadow: 0px 0px 2px #259c08;
  color: #0ad406;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
}
.alert-success:hover {
  background-color: rgba(7, 149, 66, 0.35);
  transition: 0.5s;
}
.alert-simple.alert-info {
  border: 1px solid rgba(6, 44, 241, 0.46);
  background-color: rgba(7, 73, 149, 0.12156862745098039);
  box-shadow: 0px 0px 2px #0396ff;
  color: #0396ff;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
}

.alert-info:hover {
  background-color: rgba(7, 73, 149, 0.35);
  transition: 0.5s;
}

.blue-cross {
  font-size: 18px;
  color: #0bd2ff;
  text-shadow: none;
}

.alert-simple.alert-warning {
  border: 1px solid rgba(241, 142, 6, 0.81);
  background-color: rgba(220, 128, 1, 0.16);
  box-shadow: 0px 0px 2px #ffb103;
  color: #ffb103;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
}

.alert-warning:hover {
  background-color: rgba(220, 128, 1, 0.33);
  transition: 0.5s;
}

.warning {
  font-size: 18px;
  color: #ffb40b;
  text-shadow: none;
}

.alert-simple.alert-danger {
  border: 1px solid rgba(241, 6, 6, 0.81);
  background-color: rgba(220, 17, 1, 0.16);
  box-shadow: 0px 0px 2px #ff0303;
  color: #ff0303;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
  bottom: 15px;
}

.alert-danger:hover {
  background-color: rgba(220, 17, 1, 0.33);
  transition: 0.5s;
}

.danger {
  font-size: 18px;
  color: #ff0303;
  text-shadow: none;
}

.alert-simple.alert-primary {
  border: 1px solid rgba(6, 241, 226, 0.81);
  background-color: rgba(1, 204, 220, 0.16);
  box-shadow: 0px 0px 2px #03fff5;
  color: #03d0ff;
  text-shadow: 2px 1px #00040a;
  transition: 0.5s;
  cursor: pointer;
}

.alert-primary:hover {
  background-color: rgba(1, 204, 220, 0.33);
  transition: 0.5s;
}

.alertprimary {
  font-size: 18px;
  color: #03d0ff;
  text-shadow: none;
}

.square_box {
  position: absolute;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  border-top-left-radius: 45px;
  opacity: 0.302;
}

.square_box.box_three {
  background-image: -moz-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  background-image: -webkit-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  background-image: -ms-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  opacity: 0.059;
  left: -80px;
  top: -60px;
  width: 500px;
  height: 500px;
  border-radius: 45px;
}

.square_box.box_four {
  background-image: -moz-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  background-image: -webkit-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  background-image: -ms-linear-gradient(-90deg, #290a59 0%, #3d57f4 100%);
  opacity: 0.059;
  left: 150px;
  top: -25px;
  width: 550px;
  height: 550px;
  border-radius: 45px;
}

.alert:before {
  content: "";
  position: absolute;
  width: 0;
  height: calc(100% - 44px);
  border-left: 1px solid;
  border-right: 2px solid;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  height: 20px;
}

.fa-times {
  -webkit-animation: blink-1 2s infinite both;
  animation: blink-1 2s infinite both;
}
@-webkit-keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

.button {
  --background: #2b3044;
  --background-hover: #1e2235;
  --text: #fff;
  --shadow: rgba(0, 9, 61, 0.2);
  --paper: #5c86ff;
  --paper-lines: #fff;
  --trash: #e1e6f9;
  --trash-lines: #bbc1e1;
  --check: #fff;
  --check-background: #5c86ff;
  position: relative;
  border: none;
  outline: none;
  background: none;
  padding: 10px 24px;
  border-radius: 7px;
  min-width: 142px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  color: var(--text);
  background: var(--btn, var(--background));
  box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 8px) var(--shadow);
  transform: scale(var(--scale, 1));
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.button span {
  display: block;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
  opacity: var(--span-opacity, 1);
  transform: translateX(var(--span-x, 0)) translateZ(0);
  transition: transform 0.4s ease var(--span-delay, 0.2s),
    opacity 0.3s ease var(--span-delay, 0.2s);
}
.button .trash {
  display: block;
  position: relative;
  left: -8px;
  transform: translate(var(--trash-x, 0), var(--trash-y, 1px)) translateZ(0)
    scale(var(--trash-scale, 0.64));
  transition: transform 0.5s;
}
.button .trash:before,
.button .trash:after {
  content: "";
  position: absolute;
  height: 8px;
  width: 2px;
  border-radius: 1px;
  background: var(--icon, var(--trash));
  bottom: 100%;
  transform-origin: 50% 6px;
  transform: translate(var(--x, 3px), 2px) scaleY(var(--sy, 0.7))
    rotate(var(--r, 0deg));
  transition: transform 0.4s, background 0.3s;
}
.button .trash:before {
  left: 1px;
}
.button .trash:after {
  right: 1px;
  --x: -3px;
}
.button .trash .top {
  position: absolute;
  overflow: hidden;
  left: -4px;
  right: -4px;
  bottom: 100%;
  height: 40px;
  z-index: 1;
  transform: translateY(2px);
}
.button .trash .top:before,
.button .trash .top:after {
  content: "";
  position: absolute;
  border-radius: 1px;
  background: var(--icon, var(--trash));
  width: var(--w, 12px);
  height: var(--h, 2px);
  left: var(--l, 8px);
  bottom: var(--b, 5px);
  transition: background 0.3s, transform 0.4s;
}
.button .trash .top:after {
  --w: 28px;
  --h: 2px;
  --l: 0;
  --b: 0;
  transform: scaleX(var(--trash-line-scale, 1));
}
.button .trash .top .paper {
  width: 14px;
  height: 18px;
  background: var(--paper);
  left: 7px;
  bottom: 0;
  border-radius: 1px;
  position: absolute;
  transform: translateY(-16px);
  opacity: 0;
}
.button .trash .top .paper:before,
.button .trash .top .paper:after {
  content: "";
  width: var(--w, 10px);
  height: 2px;
  border-radius: 1px;
  position: absolute;
  left: 2px;
  top: var(--t, 2px);
  background: var(--paper-lines);
  transform: scaleY(0.7);
  box-shadow: 0 9px 0 var(--paper-lines);
}
.button .trash .top .paper:after {
  --t: 5px;
  --w: 7px;
}
.button .trash .box {
  width: 20px;
  height: 25px;
  border: 2px solid var(--icon, var(--trash));
  border-radius: 1px 1px 4px 4px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: border-color 0.3s;
}
.button .trash .box:before,
.button .trash .box:after {
  content: "";
  position: absolute;
  width: 4px;
  height: var(--h, 20px);
  top: 0;
  left: var(--l, 50%);
  background: var(--b, var(--trash-lines));
}
.button .trash .box:before {
  border-radius: 2px;
  margin-left: -2px;
  transform: translateX(-3px) scale(0.6);
  box-shadow: 10px 0 0 var(--trash-lines);
  opacity: var(--trash-lines-opacity, 1);
  transition: transform 0.4s, opacity 0.4s;
}
.button .trash .box:after {
  --h: 16px;
  --b: var(--paper);
  --l: 1px;
  transform: translate(-0.5px, -16px) scaleX(0.5);
  box-shadow: 7px 0 0 var(--paper), 14px 0 0 var(--paper), 21px 0 0 var(--paper);
}
.button .trash .check {
  padding: 4px 3px;
  border-radius: 50%;
  background: var(--check-background);
  position: absolute;
  left: 2px;
  top: 24px;
  opacity: var(--check-opacity, 0);
  transform: translateY(var(--check-y, 0)) scale(var(--check-scale, 0.2));
  transition: transform var(--check-duration, 0.2s) ease var(--check-delay, 0s),
    opacity var(--check-duration-opacity, 0.2s) ease var(--check-delay, 0s);
}
.button .trash .check svg {
  width: 8px;
  height: 6px;
  display: block;
  fill: none;
  stroke-width: 1.5;
  stroke-dasharray: 9px;
  stroke-dashoffset: var(--check-offset, 9px);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: var(--check);
  transition: stroke-dashoffset 0.4s ease var(--checkmark-delay, 0.4s);
}
.button.delete {
  --span-opacity: 0;
  --span-x: 16px;
  --span-delay: 0s;
  --trash-x: 46px;
  --trash-y: 2px;
  --trash-scale: 1;
  --trash-lines-opacity: 0;
  --trash-line-scale: 0;
  --icon: #fff;
  --check-offset: 0;
  --check-opacity: 1;
  --check-scale: 1;
  --check-y: 16px;
  --check-delay: 1.7s;
  --checkmark-delay: 2.1s;
  --check-duration: 0.55s;
  --check-duration-opacity: 0.3s;
}
.button.delete .trash:before,
.button.delete .trash:after {
  --sy: 1;
  --x: 0;
}
.button.delete .trash:before {
  --r: 40deg;
}
.button.delete .trash:after {
  --r: -40deg;
}
.button.delete .trash .top .paper {
  animation: paper 1.5s linear forwards 0.5s;
}
.button.delete .trash .box:after {
  animation: cut 1.5s linear forwards 0.5s;
}
.button.delete,
.button:hover {
  --btn: var(--background-hover);
  --shadow-y: 5px;
  --shadow-blur: 9px;
}
.button:active {
  --shadow-y: 2px;
  --shadow-blur: 5px;
  --scale: 0.94;
}
@keyframes paper {
  10%,
  100% {
    opacity: 1;
  }
  20% {
    transform: translateY(-16px);
  }
  40% {
    transform: translateY(0);
  }
  70%,
  100% {
    transform: translateY(24px);
  }
}
@keyframes cut {
  0%,
  40% {
    transform: translate(-0.5px, -16px) scaleX(0.5);
  }
  100% {
    transform: translate(-0.5px, 24px) scaleX(0.5);
  }
}

html {
  width: 800px;
  height: 100%;
}
* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}
body {
  min-height: 100vh;
  display: flex;
  font-family: "Inter", Arial;
  justify-content: center;
  align-items: center;
}
span {
  color: white;
}
</style>
