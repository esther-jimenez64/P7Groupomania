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
              <br />
              <input
                class="form-control"
                v-model="password"
                type="password"
                placeholder="Insérer votre mot de passe"
                minlength="8"
                required
              />
              <button
                @click.prevent="sendPost()"
                class="btn btn-lg btn-primary btn-block sign-in"
                type="submit"
              >
                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />

                Login
              </button>
              <router-link class="pull-right need-help" to="/singup">
                Pas de compte ? insriver vous</router-link
              ><router-view />
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

   emit: ["closeModal"],
  data: function () {
    return {
      email: "",
      password: "",
      photos: [],
      token: JSON.parse(localStorage.getItem("token")),
    };
  },
  methods: {
  
    goToPost() {
      this.$router.push("/posts");
    },
     mounted(){
        this.token = JSON.parse(localStorage.getItem("token"))
     },
    sendPost() {
      const postData = {
        email: this.email,
        password: this.password,
      };

      axios

        .post("http://localhost:3000/api/user/login", postData)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data));
          this.token = JSON.parse(localStorage.getItem("token"))
            this.$emit('closeModal',this.token);
          this.goToPost();
        });
    },
       },
  
  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

.fullDiv {
    background: url("https://www.renovationettravaux.fr/wp-content/uploads/2019/01/Prix-d%E2%80%99am%C3%A9nagement-de-bureau-professionnel.jpg")
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
