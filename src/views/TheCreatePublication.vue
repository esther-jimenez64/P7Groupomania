<template>
  <HelloWorld> </HelloWorld>
  <div class="hello">
    <div class="container"></div>
  </div>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div class="container">
    <router-view />
    <div class="row">
      <div class="bouge">
        <div class="col-md-8">
          <h1>Dernière publication</h1>
          <!--déclaration du composant-->
          <ThePublication /><!-- parcourir une liste d'éléments et l'afficher dans VueJS avec une boucle for.-->
          <div
            v-for="publication in publications"
            :key="publication.id"
            :ref="publications"
            class="post-content"
          >
            <!--key index de chaque publication-->
            <link
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
              rel="stylesheet"
            />

            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="blog-card blog-card-blog">
                    <a href="#">
                      <img
                        loading="lazy"
                        alt="photo d'une figure humaine gris représentant une photo de profils"
                        src="https://tse1.mm.bing.net/th?id=OIP.etoPZN5PSRA0lJXcXCm_KAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                        class="userImg"
                      />
                    </a>
                    <ThePublicationDelete
                      :publicationn="publication"
                      @PostSuprimmer="this.updateData"
                    /><!--envois props les posts récuperer de la database-->
                    <!--rendu conditionnel si commentair vaut true-->
                    <!--Réception avec emits De la suprimation du post-->
                    <button
                      v-if="PostsModify"
                      @click="this.showoffInputPostMody()"
                      type="button"
                      class="btn btn-modifyPost"
                      data-v-5ce821ab=""
                    >
                      <!--écoute du clic en passant une function -->
                      <label class="post-actionsModify" data-v-5ce821ab=""
                        ><i
                          class="fa fa-pencil-square-o"
                          aria-hidden="true"
                          data-v-5ce821ab=""
                        ></i>
                        Modify
                      </label>
                    </button>
                    <!--rendu conditionnel si commentair vaut false-->
                    <button
                      v-else
                      @click="this.showInputPostModify(publication.id)"
                      type="button"
                      class="btn btn-modifyPost"
                      data-v-5ce821ab=""
                    >
                      <!--Écoute du clic en passant une function en passant en paramètre l'id du post -->
                      <label class="post-actionsModify" data-v-5ce821ab="">
                        <i
                          class="fa fa-pencil-square-o"
                          aria-hidden="true"
                          data-v-5ce821ab=""
                        ></i>
                        Modify
                      </label>
                    </button>
                    <span class="userName">{{ this.token.username }}</span
                    ><!--récupèration de l'username de data-->
                    <!--Rendu conditionnel si commentaire et edit.. id et la même que c'elle de publication.id -->
                    <!-- l'affichage de l'input se fait si la variable contient le même id que celui du post ciblé-->
                    <!--Réception avec emits De la modification du post-->
                    <ThePublicationModify
                      v-if="PostsModify && editPostId == publication.id"
                      :publicationn="publication"
                      @PostModifier="this.updateData"
                    />
                    <!--Rendu conditionnel si le post a une image ou pas-->
                    <div class="blog-card-image">
                      <a href="#">
                        <img
                          loading="lazy"
                          v-if="publication.image"
                          class="img"
                          :src="publication.image"
                          alt="une image publier par les users" /><img
                          v-else
                          alt="une image"
                          src="https://tse1.mm.bing.net/th?id=OIP.XXWKhZZeWjrUPx-ZSfP0GAHaDt&pid=Api&P=0&w=332&h=166" /></a
                      ><!--placeHolder dynamique avec v-blind lier un attribut HTML à une expression JavaScript. qui contient l'image qui est données data-->
                      <div class="ripple-cont"></div>
                    </div>

                    <div class="datePost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"
                        />
                      </svg>
                      {{ this.convertDate(publication.updatedAt) }}
                    </div>
                    <!--date de publication du post contenu dans la database-->
                    <!--Rendu conditionnel si le post contient des commentaire l'affichage du bouton se fait -->
                    <div class="blog-table">
                      <button
                        v-if="publication.Comments.length > 0 "
                        @click="this.showAllComments(publication.id)"
                        type="button"
                        class="btn btn-d"
                        data-v-5ce821ab=""
                      >
                        <!--Écoute du clic en passant une function en passant en paramètre l'id du post -->
                        <label class="post-actionsModify" data-v-5ce821ab="">
                          <i
                            class="fa fa-comments"
                            aria-hidden="true"
                            data-v-5ce821ab=""
                          ></i>
                          Afficher
                        </label>
                      </button>
                      <!-- boucle parcourir une liste d'éléments et l'afficher dans VueJS. les commentaire-->
                      <div
                        v-for="commentaire in publication.Comments"
                        :key="commentaire.id"
                        class="post-comment"
                      >
                        <!--key index de chaque commentaire-->
                        <!--Rendu conditionnel si  afficheComment == true et que le postId correspond à celui sur lequel on clique alors ça affiche les commentaires -->
                        <div
                          v-if="
                            afficheComment && commentPostId == publication.id
                          "
                        >
                          <div class="card mb-2">
                            <div class="card-body p-2 p-sm-3">
                              <div class="media forum-item">
                                <a
                                  href="#"
                                  data-toggle="collapse"
                                  data-target=".forum-content"
                                  ><img
                                    loading="lazy"
                                    alt="photo d'une figure humaine  représentant une photo de profils"
                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                    class="mr-3 rounded-circle"
                                    width="50"
                                /></a>
                                <div class="media-body">
                                  <h6>
                                    <a
                                      href="#"
                                      data-toggle="collapse"
                                      data-target=".forum-content"
                                      class="text-body"
                                      >{{ this.token.username }}</a
                                    ><!--récupèration de l'username du localStorage-->
                                  </h6>
                                  <p class="text-secondary">
                                    {{ commentaire.content }}
                                  </p>
                                  <!--récupèration du content du comment avec le v-for-->
                                  <div class="dateComment">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                    >
                                      <path
                                        d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"
                                      />
                                    </svg>
                                    {{
                                      this.convertDate(commentaire.updatedAt)
                                    }}
                                  </div>
                                  <!--Fonction qui converti la date et extrait seulement ce qu'il faut-->
                                  <!--Rendu conditionnel si coment == true -->
                                  <button
                                    v-if="coment"
                                    @click="this.offCommentModify()"
                                    type="button"
                                    class="btn btn-modifyComment"
                                    data-v-5ce821ab=""
                                  >
                                    <!--Écoute du clic en passant une function-->
                                    <label
                                      class="post-actionsModify"
                                      data-v-5ce821ab=""
                                      ><i
                                        class="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                        data-v-5ce821ab=""
                                      ></i>
                                      Modify
                                    </label>
                                  </button>
                                  <!--Rendu conditionnel si coment == false -->
                                  <button
                                    v-else
                                    @click="
                                      this.showCommentModify(commentaire.id)
                                    "
                                    type="button"
                                    class="btn btn-modifyComment"
                                    data-v-5ce821ab=""
                                  >
                                    <!--Écoute du clic en passant une function en passant l'id du comment en paramètre-->
                                    <label
                                      class="post-actionsModify"
                                      data-v-5ce821ab=""
                                      ><i
                                        class="fa fa-pencil-square-o"
                                        aria-hidden="true"
                                        data-v-5ce821ab=""
                                      ></i>
                                      Modify
                                    </label>
                                  </button>
                                  <!--déclaration du composant -->
                                  <!--Réception avec emits De la suprimation du commentaire-->
                                  <CommentDelete
                                    @DeletedComment="this.updateData"
                                    :publicationn="publication"
                                    :commentt="commentaire"
                                  />
                                  <!--déclaration du composant-->
                                  <!--Réception avec emits De la modification du commentaire-->
                                  <!--Passage de l'id de la publication et du comment au composant modify-->
                                  <CommentModify
                                    @ModifyComment="this.updateData"
                                    :publicationn="publication"
                                    :commentt="commentaire"
                                    v-if="coment && commentaire.id == commentId"
                                  />
                                  <!--Rendu conditionnel si coment et =True  et que commentaire.id correspond à celui sur lequel on clique alors ça affiche les commentaires -->
                                </div>
                                <div
                                  class="text-muted small text-center align-self-center"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 class="blog-card-caption">{{ publication.title }}</h3>
                    <!--récupèration du title de la publication avec le v-for-->
                    <i class="far fa-newspaper"></i>

                    <div>
                      <!--récupèration du content de la publication avec le v-for-->
                      <p class="limit">{{ publication.content }}</p>
                      <div class="ftr">
                        <div class="author">
                          <a href="#">
                            <img
                              loading="lazy"
                              alt="photo d'une figure humaine  représentant une photo de profils"
                              src="https://tse1.mm.bing.net/th?id=OIP.etoPZN5PSRA0lJXcXCm_KAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                              class="avatar img-raised"
                            />
                            <span>{{ this.token.username }}</span>
                            <br /><!--récupèration de l'username du localStorage-->
                            <div class="detailBox">
                              <form
                              @submit.prevent="save(publication.id)"
                              class="form-inline"
                              role="form"
                            >
                              <input
                              @click.prevent="this.showAllComments()"
                                :id="`input-comment-${publication.id}`"
                                class="form-control"
                                type="text"
                                placeholder="Your comments"
                              />
                              <button
                               @click.prevent="this.save(publication.id)"
                                   
                                class="button-62"
                                role="button"
                              >
                                publish
                              </button>
                            </form>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <HelloFooter> </HelloFooter>
  </footer>
</template>
<script>
import HelloFooter from "../components/HelloFooter.vue";
import axios from "axios"; /*Import d'axios pour effectuer mes requêtes http*/
import HelloWorld from "../components/HelloWorld.vue";
import CommentModify from "../components/CommentModify.vue"; /*inmport des components*/
import ThePublication from "../components/ThePublication.vue";
import ThePublicationModify from "../components/ThePublicationModify.vue";
import ThePublicationDelete from "../components/ThePublicationDelete.vue";
import CommentDelete from "../components/CommentDelete.vue";
export default {
  /*importer un SFC comme un module*/
  props: [
    "publicationn",
    "commentt",
  ] /*passer des données de notre composant vers un autre composant*/,
  components: {
    ThePublication,
    ThePublicationModify,
    ThePublicationDelete,
    CommentModify,
    CommentDelete,
    HelloWorld,
    HelloFooter,
  },

  data: function () {
    /*Les données et le DOM sont maintenant couplés, et tout est à présent réactif*/
    return {
      token: JSON.parse(
        localStorage.getItem("token")
      ) /*Récupération du token présent dans le local storage*/,
      publications: [],
      publicationActive: [],
      PostsModify: false,
      afficheComment: false,
      coment: false,
      comentDelete: false,
      editPostId: null,
      commentPostId: null,
      commentId: null,
      contentComment: "",
      createComent: false,
      TestInterval: false
    };
  },
  beforeMount() {
    this.created();
  },

  mounted() {
    this.updateData();
  },

  methods: {
    save(id) {
      this.commentPostId = id;
      this.afficheComment = true; /*affectant les data pour que lorsque on submit un nouveaux commentaire ils s'affiche*/
      console.log(id);
      const value = document.getElementById(`input-comment-${id}`).value;
      const formData = {
        content: value,
        userId: this.token.userId,
        postId: this.id,
        username:this.token.user
      };
      const PostId = id;
      console.log(value);
      axios
        .post(`http://localhost:3000/api/comment/${PostId}`, formData, {
          headers: {
            Authorization: "Bearer " + this.token.token,
          },
        })
        .then((response) => console.log(response));
       this.value = null;
     document.getElementById(`input-comment-${id}`).value="";
       this.createComent = true;
       this.updateData();
    },
    /*objet méthode pour déclarer mes function utiles  pour effectuer une action avec la directive v-on sur un élément pour gérer les événements*/
    showCommentModify(id) {
      /*Fonction qui écoute le clic et return comment true et affecte l'id du comment d'où le clic a été effectué, ainsi seul l'input pour  modifier de ce commentaire s'affichera */
      this.coment = true;
      this.commentId = id;
    },
    offCommentModify() {
      /*Fonction qui écoute le clic et return comment false ainsi fermer l'input modify */
      this.coment = false;
    },
    showAllComments(postId) {
      /*Fonction qui écoute le clic et return  afficheComment true et affecte l'id du post d'où le clic a été effectué, ainsi seul les comments de ce post s'affichera */
      if (!this.afficheComment) {
        /*condition si  afficheComment=false le bouton na pas reçu de clic*/
        this.afficheComment = true; /*alors il passe a true au clic*/
        this.commentPostId = postId; /*on affecte l'id du post*/
      } else {
        /*si  afficheComment et true alors on masque les commentaires*/
        this.afficheComment = false;
        this.commentPostId = null;
      }
    },
    showInputPostModify(postId) {
      /*Fonction qui écoute le clic et return PostsModify true et affecte l'id du post d'où le clic a été effectué, ainsi seul le form modify de ce post s'affichera */
      this.PostsModify = true;
      this.editPostId = postId; /*on affecte l'id du post*/
    },
    showoffInputPostMody() {
      /*Fonction qui écoute le clic et return PostsModify false et affecte l'id du post d'où le clic a été effectué, ainsi seul le form modify de ce post se masquera */
      this.PostsModify = false;
      this.editPostId = null;
    },
    convertDate(updatedAt) {
      /*fonction qui récupère la date de création et extrait uniquement les données nécessaires*/
      let substring = updatedAt.substring(0, 10);
      let substring2 = updatedAt.substring(11, 19);
      return substring + "-" + substring2;
    },
    /*Fonction passer avec emits et c'est différent argument*/
    /*si on modifie ou en supprime un comment ou un post */
    /*le set interval se lancera ainsi récupérer les nouvelles données de l'api*/
 
    updateData(ok, id, Modify, Deleted) {
      if (ok || id || this.createComent ||this.afficheComment ||this.commentPostId || Modify || Deleted) {
           setTimeout(this.created,1000);         
      }
    },
    created() {
      /*Fonction qui get all publications de la database*/
      const headers = {
        authorization: "Bearer " + this.token.token,
      };
      axios
        .get("http://localhost:3000/api/publication/post", { headers })
        .then(
          (response) => (this.publications = response.data)
        ); /*Affecte-le résulta de la requête au tableau publications qui est dans la data réactive*/
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 576px) {
  .form-inline .form-control[data-v-7a034ad9] {
    display: inline-block;
    vertical-align: middle;
    width: 411px;
  }
}
@media screen and (min-width: 425px) and (max-width: 768px) {
  .bouge {
    position: relative;
    right: 7px;
  }
}
@media screen and (min-width: 990px) and (max-width: 2024px) {
  .bouge {
    position: relative;
    left: 160px;
  }
}
@media screen and (min-width: 768px) and (max-width: 990px) {
  .bouge {
    position: relative;
    left: 80px;
  }
}
@media screen and (min-width: 150px) and (max-width: 575px) {
  .button-62 {
    background: #a1a1a1;
    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    color: #ffffff;
    cursor: pointer;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    height: 85px;
    width: 85px;
    background-color: #bbb;
    border-radius: 50%;
    position: relative;
    left: 195px;
  }
  .form-control[data-v-7a034ad9] {
    width: 500px;
  }
  .button-62:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
  .button-62:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
}
@media screen and (min-width: 576px) and (max-width: 2000px) {
  .button-62 {
    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    position: relative;
    right: 8px;
    bottom: 2px;
    height: 45px;
    width: 89px;
  }
  .button-62:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
  .button-62:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
}
button.btn.btn-delete {
  color: black;
}
label.post-actionsModify {
  color: black;
}
span {
  color: black;
}
.datePost {
  position: relative;
  left: 15px;
  top: 5px;
}
.datePost svg {
  width: 11px;
  position: relative;
  bottom: 1.5px;
}
.dateComment svg {
  width: 11px;
  position: relative;
  bottom: 1.5px;
}
.dateComment {
  position: relative;
  left: 240px;
}
* p {
  width: 300px;
}
.limit {
  margin-bottom: 150px;
  margin-top: -25px;
  margin-bottom: 1rem;
  word-wrap: break-word;
  width: 475px;
  margin-left: 15px;
  margin-right: 150px;
}
body {
  margin-top: 20px;
  background: #eee;
}
@media (min-width: 0) {
  .g-mr-15 {
    margin-right: 1.07143rem !important;
  }
}
@media (min-width: 0) {
  .g-mt-3 {
    margin-top: 0.21429rem !important;
  }
}
.g-height-50 {
  height: 50px;
}
.g-width-50 {
  width: 50px !important;
}
@media (min-width: 0) {
  .g-pa-30 {
    padding: 2.14286rem !important;
  }
}
.g-bg-secondary {
  background-color: #fafafa !important;
}
.u-shadow-v18 {
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.15);
}
.g-color-gray-dark-v4 {
  color: #777 !important;
}
.g-font-size-12 {
  font-size: 0.85714rem !important;
}
.media-comment {
  margin-top: 20px;
}
input#input-comment-13 {
  width: 300px;
  position: relative;
  height: 35px;
}
.btn:hover {
  color: #222;
  text-decoration: none;
}
.attachments--btn[data-v-5ce821ab] {
  background-color: #eaeaea;
  color: #fd2d01;
  border-radius: 1.5em;
}
.post-actions__publish[data-v-5ce821ab] {
  width: 120px;
  background-color: #fd2d01;
  color: #fff;
  border-radius: 1.5em;
}
label.post-actionsModify {
  margin-bottom: 5px;
}
.post-actionsModify {
}
button.btnModify[data-v-7a034ad9] {
  position: relative;
  bottom: 3px;
  background: #fd2d01;
  border-radius: 4px;
  box-shadow: #5e5df0 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
  line-height: 22px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 4px 8px;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  word-break: break-word;
  border: 0;
  left: 340px;
}
img.userImg {
  width: 50px;
}
span.userName {
  position: relative;
  bottom: 1px;
  right: 145px;
  margin-right: -150px;
}
@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 88.333333% !important;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 950px;
  }
}
.notShown {
  visibility: hidden !important;
}
@media screen and (min-width: 276px) and (max-width: 767px) {
  h1 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 50px;
    position: relative;
  }
}
@media screen and (min-width: 768px) and (max-width: 2000px) {
  h1 {
    text-align: center;
    margin-bottom: 50px;
    margin-top: 50px;
    position: relative;
    left: 80px;
  }
}
a {
  font-family: Roboto;
}
.blog-card-blog {
  margin-top: 30px;
}
.blog-card {
  display: inline-block;
  position: relative;
  width: 500px;
  height: auto;
  margin-bottom: 30px;
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
}
.blog-card .blog-card-image {
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgb(0 0 0 / 56%),
    0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
}
.blog-card .blog-card-image img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  pointer-events: none;
}
.blog-card .blog-table {
  padding: 15px 0px;
  margin-top: 10px;
}
.blog-table {
  margin-bottom: 0px;
}
.blog-category {
  position: relative;
  line-height: 0;
  margin: 15px 0;
}
.blog-text-success {
  color: #28a745 !important;
}
.blog-card-blog .blog-card-caption[data-v-7a034ad9] {
  margin-top: 5px;
  position: relative;
  bottom: 29px;
  left: 15px;
}
.blog-card-caption {
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.blog-card-caption,
.blog-card-caption a {
  color: #333;
  text-decoration: none;
}
p {
  color: #3c4857;
}
p {
  margin-top: 15px;
  margin-bottom: 1rem;
}
.blog-card .ftr {
  margin-top: 15px;
}
.blog-card .ftr .author {
  color: #888;
}
.blog-card .ftr div {
  display: inline-block;
}
.blog-card .author .avatar {
  width: 36px;
  height: 36px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 5px;
}
.blog-card .ftr .stats {
  position: relative;
  top: 1px;
  font-size: 14px;
}
.blog-card .ftr .stats {
  float: right;
  line-height: 30px;
}
.row {
  display: flex;
  -ms-flex-wrap: wrap;
  margin-right: -15px;
  align-content: flex-start;
  justify-content: flex-start;
}
button.btn.btn-modifyPost {
  background-color: #4e5166b3;
  color: white;
  position: relative;
  left: 270px;
  height: 35px;
}
button.btn-btn-time {
  background-color: #4e5166b3;
  color: white;
}
button.btn.btn-modifyPost:hover {
  background-color: #4e5166;
  color: black;
  cursor: pointer;
}
button.btn.btn-d {
  background-color: #4e5166b3;
  color: white;
  position: relative;
  left: 15px;
  bottom: 15px;
  height: 35px;
}
button.btn.btn-d:hover {
  background-color: #4e5166;
  color: black;
  cursor: pointer;
}
.btn-danger {
  border-color: #ff291d;
  position: relative;
  left: 250px;
}
button.btn.btn-modifyComment {
  background-color: #4e5166b3;
  color: white;
  position: relative;
}
button.btn.btn-modifyComment:hover {
  background-color: #4e5166b3;
  color: black;
  position: relative;
}
.form-control {
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
  width: 510px;
  position: relative;
}
/** =====================
 * Responsive
 ========================*/
@media only screen and (max-width: 766px) {
  .comments-container {
    width: 480px;
  }
  .comments-list .comment-box {
    width: 390px;
  }
  .reply-list .comment-box {
    width: 320px;
  }
}
@media (min-width: 576px) {
  .form-inline .form-control {
    display: inline-block;
    vertical-align: middle;
    width: 348px;
  }
}
button.btn.btn-Modify[data-v-7a034ad9][data-v-a679a10e][data-v-a679a10e]:hover {
  color: black;
}
input#input-comment-13[data-v-7a034ad9] {
  position: relative;
  height: 35px;
}
</style>
