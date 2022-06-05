<template>
  <div>
    <form >
                  <input
                  class="test"
                    type="text"
                    placeholder="content"
                    v-model="content"
                    required
                  />
                <button  @click.prevent="guardar()" type="button" class="btn btn-Modify" data-v-5cc6dbb6="" data-v-7a034ad9=""><i class="fa-solid fa-paper-plane-top"></i> Send </button>
                <font-awesome-icon icon="fa-solid fa-paper-plane-top" />
                </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  emit: ["newPost"],
  props: ["publicationn", "commentt"],
  counter: JSON.parse(localStorage.getItem("token")),
  data: function () {
    return {
      title: "",
      content: "",
      userId: "",
      counter: JSON.parse(localStorage.getItem("token")),
      selectedFile: null,
    };
  },
  methods: {
    guardar() {
        console.log(this.commentt);
        console.log(this.counter.userId);
     const formData = {
        content: this.content,
        userId: this.counter.userId,
      };
      const id = this.counter.userId;
      const PostId = this.publicationn.id;
      const CommentId = this.commentt.id;
      console.log(id);
      axios
        .put(`http://localhost:3000/api/comment/${id}/${PostId}/${CommentId}`, formData, {
          headers: {
            Authorization: "Bearer " + this.counter.token,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   button.btn.btn-Modify[data-v-7a034ad9][data-v-a679a10e] {
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
