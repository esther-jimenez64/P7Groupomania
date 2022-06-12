<template>
  <div>
    <form>
      <!-- formulaire pour modify un post-->
      <input
        class="test"
        :id="`input-comment-${publicationn.id}`"
        type="text"
        placeholder="content"
        v-model="content"
        required
      /><!--id dynamique avec v-blind lier un attribut HTML à une expression JavaScript. qui contient l'id du post grâce aux données du props-->
      <!--v-model content pour la liaison d'entrée de formulaire à content bidirectionnelle. -->
      <!--v-on écoute du clic retirant l'événement default en mettant la function guardar en paramètre l'id du post-->
      <button
        type="button"
        @click.prevent="guardar(publicationn.id)"
        class="btn btn-SendModify"
        data-v-5cc6dbb6=""
        data-v-7a034ad9=""
      ><i class="fa-solid fa-paper-plane-top"></i> Send
      <font-awesome-icon icon="fa-solid fa-paper-plane-top" />  
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";  /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  emit: ["newPost"],/*définir les événements à  émettre vers son parent*/
  props: ["publicationn", "commentt"],/*passer des données de notre composant vers un autre composant*/
  data: function () { /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      content: "",/*donnée réactif du v-model*/
      userId: "",
      token: JSON.parse(localStorage.getItem("token")),/*Récupération du token présent dans le local storage*/
    };  
  },
  mounted() { 
    this.updateData();
  },
   
  methods: { /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    updateData() {
      setInterval(this.created, 2500);/*Répète la requête get all post toute les 2500 seconds pour récupérer la new valeur */
    },
    created() {
      const headers = {   /*Création de l'en-tête http de la requête avec le token récupérer du localstorage*/
        authorization: "Bearer " + this.token.token,
      };
      axios
        .get("http://localhost:3000/api/publication/post", { headers })
        .then((response) => (this.publications = response.data));
    },/*Le constructeur FormData qui est l'objet qui représente les données du formulaire HTML*/ 
    guardar() {
     const formData = { 
        content: this.content,          
        userId: this.token.userId,      /*Récupération de l'id de l'user du localStorage*/
        username: this.token.username,  /*Récupération de l'username de l'user du localStorage*/
      };
      const id = this.token.userId;      /*Récupération de l'id de l'user du localStorage************/
      const PostId = this.publicationn.id;  /*Récupération de l'id du post grâce au props*************/
      const CommentId = this.commentt.id;   /*Récupération de l'id du comment grâce au props**********/

      axios
        .put(  /*requête modify un comment*/
          `http://localhost:3000/api/comment/${id}/${PostId}/${CommentId}`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + this.token.token,
            },
          }
        )

        .then((response) => {
          console.log(response.data);
          this.content = ""; /*vider le formulaire après envois*/
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button.btn.btn-SendModify[data-v-7a034ad9][data-v-a679a10e] {
  color: #fff;
  background-color: #ff4136;
  border-color: #ff4136;
  position: relative;
  margin-left: 295px;
  bottom: 29px;
  height: 45px;
}

input.test {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  height: 42px;
  width: 350px;
  top: 15px;
  position: relative;
}
</style>
