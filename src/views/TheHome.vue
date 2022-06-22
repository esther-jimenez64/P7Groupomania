<template>
  <div class="navMove">
    <HelloWorld> </HelloWorld>
  </div>
  <head>
    <meta name="description" content="Web Social" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <div id="test">
    <div class="bg"></div>
    <div class="blog-card spring-fever">
      <div class="title-content">
        <h2><a href="#">Groupomania</a></h2>
        <div class="intro"><a href="#">quesque?</a></div>
      </div>
      <div class="card-info">
        Est un réseau social interne pour les employés de Groupomania. Le but
        est de faciliter les interactions entre collègues.Avec plusieurs
        fonctionnalités pour favoriser les échanges entre collègues.
        <router-link to="/signup"
          >Nous Rejoindre<span class="licon icon-arr icon-black"></span
        ></router-link>
        <!--link vers views-->
        <router-view />
        <!--router-view affichera le composant qui correspond à l'url.-->
      </div>
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </div>
  </div>
     <footer class="foot">
    <HelloFooter> </HelloFooter>
   </footer>
</template>
<script>
import HelloFooter from "../components/HelloFooter.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  /*importer un SFC comme un module*/
  components: {
    HelloWorld,
    HelloFooter,
  },
};
</script>
<style scoped>
@media screen and (min-width: 1891px) and (max-width: 3000px) {
  .bg {
  /* The image used */
  background-image: url("../assets/homeGroupomania.webp");
  /* Full height */
  height: 180%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.foot footer{
    position: relative;
    top: 790px;
    left: 70px;
}
}
@media screen and (min-width: 200px) and (max-width: 1890px) {
  .bg {
  /* The image used */
  background-image: url("../assets/homeGroupomania.webp");
  /* Full height */
  height: 100%;
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

}

#test {
  height: 1000px;
  margin: 0;
}


@import url(//fonts.googleapis.com/css?family=Abril+Fatface|Droid+Serif:400,700,400italic,700italic);
html,
body {
  height: 100%;
}
body {
  background: linear-gradient(
    to bottom,
    rgba(0, 5, 10, 0.4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  font-family: "Droid Serif", serif;
}

.blog-card {
  max-width: 550px;
  width: 100%;
  height: 500px;
  position: absolute;
  font-family: "Droid Serif", serif;
  color: #fff;
  top: 35%;
  right: 0;
  left: 0;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0px;
  box-shadow: 0px 10px 20px -9px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: all 0.4s;

  background-size: 100%;
}
.blog-card a {
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
}
.blog-card .color-overlay {
  background: rgba(64, 84, 94, 0.5);
  width: 550px;
  height: 500px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  transition: background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
}
.blog-card .gradient-overlay {
  background-image: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.6) 21%);
  width: 550px;
  height: 500px;
  position: absolute;
  top: 350px;
  left: 0;
  z-index: 15;
}
.blog-card:hover {
  box-shadow: 0px 18px 20px -9px rgba(0, 10, 30, 0.75);
}
.blog-card:hover .card-info {
  opacity: 1;
  bottom: 100px;
}
.blog-card:hover .color-overlay {
  background: rgba(64, 64, 70, 0.8);
}
.blog-card:hover .title-content {
  margin-top: 70px;
}
.title-content {
  text-align: center;
  margin: 170px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s;
}

.blog-card:hover h2:after {
  animation: changeLetter 0.3s 1 linear;
  width: 80%;
}

.blog-card h2,
h1 {
  font-size: 1.9em;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: "Abril Fatface", serif;
  margin-bottom: 0;
  display: inline-block;
}
.blog-card h2 a {
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
}
.blog-card h2 a:hover {
  text-shadow: 0px 8px 20px rgba(0, 0, 0, 0.95);
}
h2:after {
  content: " ";
  display: block;
  width: 10%;
  height: 2px;
  margin: 20px auto;
  border: 0;
  background: #bda26b;
  transition: all 0.2s;
}

@keyframes changeLetter {
  0% {
    width: 10%;
  }
  100% {
    width: 80%;
  }
}

.intro {
  width: 170px;
  margin: 0 auto;
  color: #ddd;
  font-style: italic;
  line-height: 18px;
}
.intro a {
  color: #ddd;
}
.intro a:hover {
  text-decoration: underline;
}
.card-info {
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  position: absolute;
  bottom: -40px;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom 0.64s, opacity 0.63s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.card-info a {
  display: block;
  width: 130px;
  margin: 15px auto;
  background: #fff;
  color: #444;
  padding: 3px 10px;
  border-radius: 2px;
  font-size: 0.8em;
}
.card-info a:hover {
  background: #8e7c49;
  color: #fff;
}
.card-info a:hover span {
  filter: brightness(10);
  opacity: 1;
}
.utility-info {
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 20;
  width: 100%;
  text-align: left;
}
.utility-info:after {
  content: " ";
  background: url(https://rawcdn.githack.com/Nodws/NodPen/ffad95aa5244b4b09a3c7c1508a018959bbedb7e/postItem/licons.svg)
    center no-repeat;
  background-size: 30px auto;
  display: block;
  opacity: 0.4;
  position: absolute;
  bottom: 25px;
  right: 15px;
  width: 30px;
  height: 15px;
}
.utility-info a:hover {
  text-decoration: underline;
}
.utility-list {
  list-style-type: none;
  margin: 0 0 10px 20px;
  padding: 0;
  width: 100%;
}
.utility-list li {
  margin: 0 5px 0 0;
  padding: 3px 0 15px 0px;
  display: inline-block;

  font-size: 0.8em;
}

.licon {
  position: relative;
  width: 23px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;
}
.licon:before {
  content: "";
  background: url(https://rawcdn.githack.com/Nodws/NodPen/ffad95aa5244b4b09a3c7c1508a018959bbedb7e/postItem/licons.svg?) -2px -6px
    no-repeat;
  background-size: 250px;
  width: 26px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: -3px;
  left: 0;
}
.icon-white {
  filter: brightness(10);
}
.icon-black {
  filter: brightness(0);
  opacity: 0.6;
}
.icon-like:before {
  background-position: -183px -6px;
}
.icon-com:before {
  background-position: -63px -4px;
}
.icon-dat:before {
  background-position: -94px -7px;
}
.icon-tag:before {
  background-position: -33px -6px;
}
</style>
