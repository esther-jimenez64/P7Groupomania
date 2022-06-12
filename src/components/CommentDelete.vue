<template>
<HelloWorld> </HelloWorld>
  <!--écoute du clic sur le bouton en retirant l'event default et le remplacant par la methode guardar-->
  <div>
    <button
      @click.prevent="guardar()"
      type="button"
      class="btn btn-deleteComment"
      data-v-5cc6dbb6=""
      data-v-7a034ad9=""
    >
      <i class="fa fa-trash-o" aria-hidden="true" data-v-5cc6dbb6=""></i>Delete
    </button>
  </div>
</template>

<script>
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  emit: ["newPost"] /*définir les événements à  émettre vers son parent*/,
  props: [
    "publicationn",
    "commentt",
  ] /*passer des données de notre composant vers un autre composant*/,
  data: function () {/*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      userId: "",
      token: JSON.parse(
      localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
    };
  },
  methods: {  /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    guardar() {  /*function guardar qui écouter le clic et qui exécuter une requête delete avec axios*/
      const id = this.token.userId;     /*Récupération de l'id de l'user du localStorage*/
      const CommentId = this.commentt.id;  /*Récupération de l'id du comment à supprimer grâce au props*/
      axios
        .delete(`http://localhost:3000/api/comment/${id}/${CommentId}`, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>   
<style scoped>/*style css affecté uniquement a ce component scoped*/
button.btn.btn-deleteComment {
  color: #fff;
  background-color: #ff4136;
  border-color: #ff4136;
  position: relative;
  margin-left: 90px;
  bottom: 35px;
  height: 36px;
}
button.btn.btn-deleteComment:hover {
  background-color: #ff4136;
  color: black;
  cursor: pointer;
}
</style>
