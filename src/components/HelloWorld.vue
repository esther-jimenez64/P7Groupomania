<template>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
  <div id="app">
    <form>
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required />
       <textarea v-model="password" placeholder="Body" required />
      <button @click.prevent="sendPost()">Submit Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
 
   
  data: function() {
    return {
      post: "",
      title: "",
      password:"",
      body: "",
      photos:[],
       counter:JSON.parse(localStorage.getItem("token"))
      
    };
 
  },
  methods: {
    
    sendPost() {
     
      const postData = { username: this.title, email: this.body, password: this.password  };
      axios
   
        .post("http://localhost:3000/api/user/login", postData,)
           .then(res => {
         
           localStorage.setItem("token", JSON.stringify(res.data));
          
        });

    
    }
        
        },
         
         
  
    }
  
;
</script>
  



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{margin-top:20px;}

/*==================================================
  Post Contents CSS
  ==================================================*/

.post-content{
  background: #f8f8f8;
  border-radius: 4px;
  width: 80%;
  border: 1px solid #f1f2f2;
  margin-bottom: 20px;
  margin-left:10%;
  overflow: hidden;
  position: relative;
}

.post-content img.post-image, video.post-video, .google-maps{
  width: 100%;
  height: auto;
}

.post-content .google-maps .map{
  height: 300px;
}

.post-content .post-container{
  padding: 20px;
  padding-right:100px;
}

.post-content .post-container .post-detail{
  margin-left: 65px;
  position: relative;
}

.post-content .post-container .post-detail .post-text{
  line-height: 24px;
  margin: 0;
}

.post-content .post-container .post-detail .reaction{
  position: absolute;
  right: 0;
  top: 0;
}

.post-content .post-container .post-detail .post-comment{
    margin: 10px auto;
    margin-bottom: 20px;
}

.post-content .post-container .post-detail .post-comment img.profile-photo-sm{
  margin-right: 10px;
}

.post-content .post-container .post-detail .post-comment .form-control{
  height: 30px;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  margin: 7px 0;
  min-width: 0;
}

img.profile-photo-md {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

img.profile-photo-sm {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.text-green {
    color: #8dc63f;
}

.text-red {
    color: #ef4136;
}

.following {
    color: #8dc63f;
    font-size: 12px;
    margin-left: 20px;
}


</style>