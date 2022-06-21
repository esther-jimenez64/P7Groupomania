<template>
  <!--v-on écoute du clic retirant l'événement default en mettant la function guardar-->
  <button @click.prevent="guardar()" type="button" class="btn btn-delete">
    <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
  </button>
</template>
<script>
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/ /*importer un SFC comme un module*/
export default {
  props: [
    "publicationn",
  ] /*passer des données de notre composant vers un autre composant*/,
  data: function () {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      /*donnée réactif du v-model*/ userId: "",
      token: JSON.parse(
        localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
    };
  },
  methods: {
    /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    guardar() {
      /*Fonction qui écoute le clic et supprimé le post en question grâce à l'id*/
      const id =
        this.publicationn.id; /*Récupération de l'id du post grâce au props*/
      axios
        .delete(`http://localhost:3000/api/publication/${id}`, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit(
            "PostSuprimmer",
            "Post is delete"
          ); /*nous envoyer que le post à était suprimer*/
        });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-center {
  margin-top: 140px;
}

button.btn-delete:hover {
  color: #fff;
  background-color: #ff4136;
  border-color: #ff4136;
  cursor: pointer;
}
.btn-delete {
  color: #fff;
  background-color: #ff4136;
  border-color: #ff4136;
  position: relative;
  left: 250px;
}
</style>
