<template>
  <div>
    <div class="widget-post" aria-labelledby="post-header-title">
      <div class="center">
        <img
        loading="lazy"
				alt="photo d'une figure humaine gris représentant une photo de profils"
          src="https://tse1.mm.bing.net/th?id=OIP.etoPZN5PSRA0lJXcXCm_KAHaHa&amp;pid=Api&amp;rs=1&amp;c=1&amp;qlt=95&amp;w=123&amp;h=123"
          class="chex"
        /><span>{{ this.token.username }}</span> <!--afectation de l'username-->
      </div>
      <div class="widget-post__header">
        <h2 class="widget-post__title" id="post-header-title">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <input v-model="title" placeholder="Title" /> <!--V-model title pour la liaison d'entrée de formulaire à content bidirectionnelle-->
        </h2>
      </div> <!--écoute du submit retirement de l'event default en mettant la funtion guardar-->
      <form 
        id="widget-form"
        class="widget-post__form"
        @submit.prevent="guardar()"
        name="form"
        aria-label="post widget"
      >  <!--V-model content pour la liaison d'entrée du textarea à content bidirectionnelle-->
        <div class="widget-post__content">
          <label for="post-content" class="sr-only">share your moments</label>
          <textarea 
            v-model="content"
            name="post"
            id="post-content"
            class="widget-post__textarea scroller"
            placeholder="votre status"
            required
          ></textarea>
        </div>

        <div class="widget-post__actions post--actions">
          <div class="post-actions__attachments">
            <button
              type="button"
              class="btn post-actions__upload attachments--btn"
            >
              <label for="upload-image" class="post-actions__label" >
                <i class="fa fa-upload" aria-hidden="true"></i>
                upload image
              </label>
            </button><!--écoute du changement de l'input en passant une function -->
            <input 
              tabindex="0"
              type="file"
              id="upload-image"
              accept="image/png, image/jpeg, image/jpg"
              @change="OneFileSelected"
            />
          </div>
          <div class="post-actions__widget">
            <button class="btn post-actions__publish">publish</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";/*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  data: function () {   /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      title: "", /*donnée réactif du v-model*/
      content: "",
      userId: "",
      file: "",
      token: JSON.parse(localStorage.getItem("token")), /*Récupération du token présent dans le local storage*/
      selectedFile: null,
    };
  },
  methods: {/*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    OneFileSelected(e) {
      this.file = e.target.files[0];/*récupération de l'image passer au event change*/
    },

    guardar() {
      const formData = new FormData(); /*Le constructeur FormData qui est l'objet qui représente les données du formulaire HTML*/ 
      {
        if (this.file == null) { /*si il n'y a pas d'image*/
          formData.append("title", this.title);
          formData.append("content", this.content);
          formData.append("username", this.token.username);
        } else { /*si il y a une image*/
          formData.append("title", this.title);
          formData.append("content", this.content);
          formData.append("image", this.file);
          formData.append("username", this.token.username);
        }
      }

      axios
        .post("http://localhost:3000/api/publication/create", formData, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$router.go();                   /*Rechargement du router pour affecter les modif*/
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center span {
  margin-left: 10px;
}
.chex {
  width: 40px;
}

input {
  display: block;
  width: 580px;
  padding: 15px 0 15px 12px;
  font-weight: 400;
  border: none;
  outline: none;
  color: blue;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgb(100 100 100 / 20%),
    0 1px 1px rgb(255 255 255 / 20%);
  transition: all 0.3s ease-in-out;
  position: relative;
  font-size: 15px;
}
input:focus {
  text-indent: 12px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}

* {
  box-sizing: border-box;
}
body {
  padding: 0 1em;
  font-family: sans-serif;
}

/* * Post widget * */

input[type="file"] {
  display: none;
}
ul {
  list-style-type: none;
}

.btn {
  padding: 0.5em 1em;

  background-color: transparent;
  color: #6b7270;

  border: none;
  cursor: pointer;
}

.widget-post[data-v-5ce821ab] {
  width: 500px;
  min-height: 100px;
  height: auto;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: 0 1px 2px 1px rgb(130 130 130 / 10%);
  background-color: #fff;
  margin: auto;
  overflow: hidden;
  margin-left: 15px;
}

.widget-post__header {
  padding: 0.2em 0.5em;

  background-color: #eaeaea;
  color: #3f5563;
}
.widget-post__title {
  font-size: 18px;
}

.widget-post__content {
  width: 100%;
  height: 50%;
}
.widget-post__textarea {
  width: 100%;
  height: 100%;
  padding: 0.5em;

  border: none;
  resize: none;
}
.widget-post__textarea:focus {
  outline: none;
}

.widget-post__options {
  padding: 0.5em;
}
.widget-post___input {
  display: inline-block;

  width: 24%;
  padding: 0.2em 0.5em;

  border: 1px solid #eaeaea;
  border-radius: 1.5em;
}
.post-actions__label {
  cursor: pointer;
}

.widget-post__actions {
  width: 100%;
  padding: 0.5em;
}
.post--actions {
  position: relative;
  padding: 0.5em;

  background-color: #f5f5f5;
  color: #a2a6a7;
}
.post-actions__attachments {
  display: inline-block;
  width: 60%;
}
.attachments--btn {
  background-color: #eaeaea;
  color: #007582;

  border-radius: 1.5em;
}

.post-actions__widget {
  display: inline-block;
  width: 38%;
  text-align: right;
}
.post-actions__publish {
  width: 120px;

  background-color: #008391;
  color: #fff;

  border-radius: 1.5em;
}

.scroller::-webkit-scrollbar {
  display: none;
}

.is--hidden {
  display: none;
}

/* * SR * */
.sr-only {
  width: 1px;
  height: 1px;

  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);

  overflow: hidden;
  white-space: nowrap;

  position: absolute;
  top: 0;
}

/* *  Placeholder contrast * */
::-webkit-input-placeholder {
  color: #666;
}
::-moz-placeholder {
  color: #666;
}
:-ms-input-placeholder {
  color: #666;
}
:-moz-placeholder {
  color: #666;
}
</style>
