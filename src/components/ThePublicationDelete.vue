<template>

   
    <button @click.prevent="guardar()" type="button" class="btn btn-danger">
  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
</button>
</template>

<script>
import axios from "axios";

export default {
  emit: ["newPost"],
  props: ["publicationn"],
  counter: JSON.parse(localStorage.getItem("token")),
  data: function () {
    return {
      title: "",
      contenent: "",
      userId: "",
      file: "",
      counter: JSON.parse(localStorage.getItem("token")),
      selectedFile: null,
    };
  },
  methods: {
    guardar() {
      const id = this.publicationn.id;
      console.log(id);
      axios
        .delete(`http://localhost:3000/api/publication/${id}`, {
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
.text-center{
  margin-top: 140px;
}
</style>
