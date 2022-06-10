<template>
  <div id="test">
    <head>
      <title>Your Title here</title>
      <link
        rel="stylesheet"
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
              class="profile-img"
              src="../assets/icon-above-font.png "
              alt=""
            />
            <form class="form-signin">
              <input
                class="form-control"
                v-model="email"
                type="email"
                placeholder="Insérer votre email"
                required
                autofocus
              />
             
              <br/>
              <input
                class="form-control"
                v-model="password"
                type="password"
                placeholder="Choisisez un mot de passe"
                minlength="8"
                required
              />
              

              <input
                v-model="username"
                class="form-control"
                placeholder="Crée votre username "
                required
              />
              <br />
              <button
                @click.prevent="sendPost()"
                class="btn btn-lg btn-primary btn-block sign-in"
                type="submit"
              >
                 <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                Sign in
              </button>
              <router-link  class="pull-right need-help" to="/login"
                >Déjà Inscrit ? Connecter vous</router-link
              >
              <router-view />
              >
            </form>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      show: false,
      chest:false
    };
  },
  methods: {
    sendPost() {
        if (this.email.length < 5) { //Condition si le mot de pass est trop court non//
      alert('Votre email doit contenir au moins 5 caractères');
  }
     if (this.username.length < 2) { //Condition si le mot de pass est trop court non//
      alert('Votre username doit contenir au moins 5 caractères');
  }
        if (this.password.length < 5) { //Condition si le mot de pass est trop court non//
      alert('Votre Mot de pass doit contenir au moins 5 caractères');
  }
  if (this.password.length > 50) { //S'il est trop long non//
      alert('Votre Mots de pass ne peux  contenir plus de 50 caractères');
  }
    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  if (!regexEmail.test(this.email)) { //Si la regex n'est pas respecté alors non//
     alert('Vous devait rentrer une Adresse Email valide');
  }
  const regexPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/; //Regex pour valider le formulaire doit contenir 1 majuscule ////1 caractère spécial et un chiffre//
  if (!regexPassword.test(this.password)&& this.password.length > 5) { //Si la regex n'est pas respecté alors non//
    alert('Votre Mots de pass dois contenir au moins 1 caractère spéciaux une majuscule et un chiffre');
    
  }
  const postData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:3000/api/user/signup", postData).then(() => {
      
        this.$router.push("/login");
      });
     
    },
  },
};
</script>

<style scoped>
#test a[data-v-092dea1e] {
  font-weight: bold;
  color:#FD2D01!important;
}
.a.pull.right.need-help {
  color: red;
}
.btn-primary {
  background-color: white;
  border-color: silver;
  color:#FD2D01;
  font-family: 'Lato', bold;
}


#test {
  padding: 30px;
}

#test a {
  font-weight: bold;
  color: #red;
  font-family: 'Lato', bold;
}

#test a.router-link-exact-active {
  color: #42b983;
}

.fullDiv {
  background: url("https://wallpapershome.com/images/pages/pic_h/588.jpg")
    no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  left: 0px;
  top: 7px;
  width: 100%;
  height: 100%;

  background-color: orange;
}

.innerRightBlurred {
  position: fixed;
  opacity: 0.8;
  background-color: #202020;
  left: auto;
  width: 330px;
  top: 10px;
  bottom: 0;
  right: 0;
}

.innerRight {
  position: fixed;
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
  margin-top: 100px;
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
