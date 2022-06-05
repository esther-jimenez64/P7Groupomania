<template>
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
      <div class="col-md-8">
        <h1>Poster il y a peu</h1>
        <ThePublication @newPost="getNewPost" />
        <div
          refs:hello
          v-for="publication in publications"
          :key="publication.id"
          class="post-content"
        >
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
                      src="https://tse1.mm.bing.net/th?id=OIP.etoPZN5PSRA0lJXcXCm_KAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                      alt="..."
                      class="userImg"
                    />
                  </a>
                  <ThePublicationDelete :publicationn="publication" />
                  <span class="userName">{{ this.counter.username }}</span>
                  <button
                    v-if="commentair"
                    @click="this.showoff()"
                    type="button"
                    class="btn btn-dange"
                    data-v-5ce821ab=""
                  >
                    <label class="post-actionsModify" data-v-5ce821ab=""
                      ><i
                        class="fa fa-pencil-square-o"
                        aria-hidden="true"
                        data-v-5ce821ab=""
                      ></i>
                      Modify
                    </label>
                  </button>

                  <button
                    v-else
                    @click="this.show()"
                    type="button"
                    class="btn btn-dange"
                    data-v-5ce821ab=""
                  >
                    <label class="post-actionsModify" data-v-5ce821ab=""
                      ><i
                        class="fa fa-pencil-square-o"
                        aria-hidden="true"
                        data-v-5ce821ab=""
                      ></i>
                      Modify
                    </label>
                  </button>

                  <ThePublicationModify
                    v-if="commentair"
                    :publicationn="publication"
                  />

                  <div class="blog-card-image">
                    <a href="#">
                      <img
                        v-if="publication.image"
                        class="img"
                        :src="publication.image"
                        :alt="publication.title" /><img
                        v-else
                        src="https://tse1.mm.bing.net/th?id=OIP.XXWKhZZeWjrUPx-ZSfP0GAHaDt&pid=Api&P=0&w=332&h=166"
                    /></a>
                    <div class="ripple-cont"></div>
                  </div>

                  <div class="blog-table">
                    <button
                      v-if="test"
                      @click="this.showff2(publication.id)"
                      type="button"
                      class="btn btn-d"
                      data-v-5ce821ab=""
                    >
                      <label class="post-actionsModify" data-v-5ce821ab="">
                        <i
                          class="fa fa-comments"
                          aria-hidden="true"
                          data-v-5ce821ab=""
                        ></i>
                        Afficher
                      </label>
                    </button>
                    <button
                      v-else
                      @click="this.showff(publication.id)"
                      type="button"
                      class="btn btn-d"
                      data-v-5ce821ab=""
                    >
                      <label class="post-actionsModify" data-v-5ce821ab="">
                        <i
                          class="fa fa-comments"
                          aria-hidden="true"
                          data-v-5ce821ab=""
                        ></i>
                        Afficher
                      </label>
                    </button>
                    <div
                      v-for="commentaire in publication.Comments"
                      :key="commentaire.id"
                      class="post-comment"
                    >
                      <div v-if="test">
                        <div class="card mb-2">
                          <div class="card-body p-2 p-sm-3">
                            <div class="media forum-item">
                              <a
                                href="#"
                                data-toggle="collapse"
                                data-target=".forum-content"
                                ><img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  class="mr-3 rounded-circle"
                                  width="50"
                                  alt="User"
                              /></a>
                              <div class="media-body">
                                <h6>
                                  <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target=".forum-content"
                                    class="text-body"
                                    >{{ this.counter.username }}</a
                                  >
                                </h6>
                                <p class="text-secondary">
                                  {{ commentaire.content }}
                                </p>
                                <button
                                  v-if="coment"
                                  @click="this.offComment()"
                                  type="button"
                                  class="btn btn-dangee"
                                  data-v-5ce821ab=""
                                >
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

                                <button
                                  v-else
                                  @click="this.showComment()"
                                  type="button"
                                  class="btn btn-dangee"
                                  data-v-5ce821ab=""
                                >
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

                               

                              
                                  <CommentDelete
                                  :publicationn="publication"
                                  :commentt="commentaire"
                                />
                                <CommentModify
                                  v-if="coment"
                                  :publicationn="publication"
                                  :commentt="commentaire"
                                />




                              
                              </div>
                              <div
                                class="text-muted small text-center align-self-center"
                              >
                                <span class="d-none d-sm-inline-block"
                                  ><i class="far fa-eye"></i> {{ publication.updatedAt }}</span
                                >
                                <span
                                  ><i class="far fa-comment ml-2"></i> 1</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 class="blog-card-caption">{{ publication.title }}</h4>

                  <i class="far fa-newspaper"></i>

                  <div>
                    <p class="limit">{{ publication.content }}</p>
                    <div class="ftr">
                      <div class="author">
                        <a href="#">
                          <img
                            src="https://tse1.mm.bing.net/th?id=OIP.etoPZN5PSRA0lJXcXCm_KAHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
                            alt="..."
                            class="avatar img-raised"
                          />
                          <span>{{ this.counter.username }}</span>
                          <div class="detailBox">
                            <form
                              @submit.prevent="save(publication.id)"
                              class="form-inline"
                              role="form"
                            >
                              <input
                              @click.prevent="this.showComment()"
                                :id="`input-comment-${publication.id}`"
                                class="form-control"
                                type="text"
                                placeholder="Your comments"
                              />
                              <button
                                   
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
</template>
<script>
import axios from "axios";
import CommentModify from "../components/CommentModify.vue";
import ThePublication from "../components/ThePublication.vue";
import ThePublicationModify from "../components/ThePublicationModify.vue";
import ThePublicationDelete from "../components/ThePublicationDelete.vue";
import CommentDelete from "../components/CommentDelete.vue";

export default {
  props: ["publicationn", "commentt"],
  components: {
    ThePublication,
    ThePublicationModify,
    ThePublicationDelete,
    CommentModify,
    CommentDelete,
  },

  data: function () {
    return {
      album: 1,
      counter: JSON.parse(localStorage.getItem("token")),
      publications: [],
      commentair: false,
      test: false,
      coment: false,
      comentDelete: false,
    };
  },

  beforeMount() {
    this.created();
  },
  mounted() {
    this.updateData();
  },
  propss: {
    msg: String,
  },

  methods: {
    showCommentDelete() {
      this.comentDelete = true;
    },
    offCommentDelete() {
      this.comentDelete = false;
    },
    showComment() {
      this.coment = true;
    },
    offComment() {
      this.coment = false;
    },
    show() {
      this.commentair = true;
    },
    showff() {
      this.test = true;
    },
    showff2() {
      this.test = false;
    },
    showoff() {
      this.commentair = false;
    },
    updateData() {
      setInterval(this.created, 2500);
    },
    created() {
      const headers = {
        authorization: "Bearer " + this.counter.token,
      };
      axios

        .get("http://localhost:3000/api/publication/post", { headers })

        .then((response) => (this.publications = response.data));
    },

    save(id) {
      console.log(id);
      this.test =true
      const value = document.getElementById(`input-comment-${id}`).value;
      const formData = {
        content: value,
        userId: this.counter.userId,
        postId: this.id,
        username:this.counter.user
      };
      const PostId = id;
      console.log(value);
      axios

        .post(`http://localhost:3000/api/comment/${PostId}`, formData, {
          headers: {
            Authorization: "Bearer " + this.counter.token,
          },
        })

        .then((response) => console.log(response));
      this.value = null;
      this.updateData();
    },
  },

  test(value) {
    console.log(value);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*==================================================
  Post Contents CSS
  ==================================================*/
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
.button-62 {
      background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
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
  bottom: 10px;
  right: 65px;
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
h1 {
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
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
button.btn.btn-dange {
  background-color: #4e5166b3;
  color: white;
  position: relative;
  left: 250px;
  height: 35px;
}
button.btn.btn-dange:hover {
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

button.btn.btn-dangee {
  background-color: #4e5166b3;
  color: white;
  position: relative;
}

button.btn.btn-dangee:hover {
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

/**
 * Oscuro: #283035
 * Azul: #03658c
 * Detalle: #c7cacb
 * Fondo: #dee1e3
 ----------------------------------*/
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  color: #03658c;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

body {
  font-family: "Roboto", Arial, Helvetica, Sans-serif, Verdana;
  background: #dee1e3;
}

/** ====================
 * Lista de Comentarios
 =======================*/
.comments-container {
  margin: 60px auto 15px;
  width: 768px;
}

.comments-container h1 {
  font-size: 36px;
  color: #283035;
  font-weight: 400;
}

.comments-container h1 a {
  font-size: 18px;
  font-weight: 700;
}

.comments-list {
  margin-top: 30px;
  position: relative;
}

/**
 * Lineas / Detalles
 -----------------------*/
.comments-list:before {
  content: "";
  width: 2px;
  height: 100%;
  background: #c7cacb;
  position: absolute;
  left: 32px;
  top: 0;
}

.comments-list:after {
  content: "";
  position: absolute;
  background: #c7cacb;
  bottom: 0;
  left: 27px;
  width: 7px;
  height: 7px;
  border: 3px solid #dee1e3;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.reply-list:before,
.reply-list:after {
  display: none;
}
.reply-list li:before {
  content: "";
  width: 60px;
  height: 2px;
  background: #c7cacb;
  position: absolute;
  top: 25px;
  left: -55px;
}

.comments-list li {
  margin-bottom: 15px;
  display: block;
  position: relative;
}

.comments-list li:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  width: 0;
}

.reply-list {
  padding-left: 88px;
  clear: both;
  margin-top: 15px;
}
/**
 * Avatar
 ---------------------------*/
.comments-list .comment-avatar {
  width: 65px;
  height: 65px;
  position: relative;
  z-index: 99;
  float: left;
  border: 3px solid #fff;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.comments-list .comment-avatar img {
  width: 100%;
  height: 100%;
}

.reply-list .comment-avatar {
  width: 50px;
  height: 50px;
}

.comment-main-level:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  clear: both;
}
/**
 * Caja del Comentario
 ---------------------------*/
.comments-list .comment-box {
  width: 680px;
  float: right;
  position: relative;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}

.comments-list .comment-box:before,
.comments-list .comment-box:after {
  content: "";
  height: 0;
  width: 0;
  position: absolute;
  display: block;
  border-width: 10px 12px 10px 0;
  border-style: solid;
  border-color: transparent #fcfcfc;
  top: 8px;
  left: -11px;
}

.comments-list .comment-box:before {
  border-width: 11px 13px 11px 0;
  border-color: transparent rgba(0, 0, 0, 0.05);
  left: -12px;
}

.reply-list .comment-box {
  width: 610px;
}
.comment-box .comment-head {
  background: #fcfcfc;
  padding: 10px 12px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  -webkit-border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
}

.comment-box .comment-head i {
  float: right;
  margin-left: 14px;
  position: relative;
  top: 2px;
  color: #a6a6a6;
  cursor: pointer;
  -webkit-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  transition: color 0.3s ease;
}

.comment-box .comment-head i:hover {
  color: #03658c;
}

.comment-box .comment-name {
  color: #283035;
  font-size: 14px;
  font-weight: 700;
  float: left;
  margin-right: 10px;
}

.comment-box .comment-name a {
  color: #283035;
}

.comment-box .comment-head span {
  float: left;
  color: #999;
  font-size: 13px;
  position: relative;
  top: 1px;
}

.comment-box .comment-content {
  background: #fff;
  padding: 12px;
  font-size: 15px;
  color: #595959;
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}

.comment-box .comment-name.by-author,
.comment-box .comment-name.by-author a {
  color: #03658c;
}
.comment-box .comment-name.by-author:after {
  content: "autor";
  background: #03658c;
  color: #fff;
  font-size: 12px;
  padding: 3px 5px;
  font-weight: 700;
  margin-left: 10px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
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
@media (min-width: 576px){
.form-inline .form-control {
    display: inline-block;
    vertical-align: middle;
    width: 348px;
}
}
button.btn.btn-Modify[data-v-7a034ad9][data-v-a679a10e][data-v-a679a10e]:hover{
  color:black;
}
input#input-comment-13[data-v-7a034ad9] {
    position: relative;
    height: 35px;
}
</style>
