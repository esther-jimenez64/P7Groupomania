<template>


  <div>
    <button                       @click.prevent="guardar()"
                                  type="button"
                                  class="btn btn-deleteComment"
                                  data-v-5cc6dbb6=""
                                  data-v-7a034ad9=""
                                >
                                  <i
                                    class="fa fa-trash-o"
                                    aria-hidden="true"
                                    data-v-5cc6dbb6=""
                                  ></i>
                                  Delete
                                </button>
    
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  emit: ["newPost"],
  props: ["publicationn", "commentt"],
  data: function () {
    return {
      userId: "",
      counter: JSON.parse(localStorage.getItem("token")),
    };
  },
  methods: {
    guardar() {
      console.log(this.commentt.id);
      console.log(this.counter.userId);
      const id = this.counter.userId;
      const CommentId = this.commentt.id;
      
      console.log(id);
      axios
        .delete(`http://localhost:3000/api/comment/${id}/${CommentId}`, {
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
button.btn.btn-deleteComment{
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



