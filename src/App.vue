<template>
  <div id="app">
    <div class="bg-img" :style="{ background: img }"></div>
    <Base />
  </div>
</template>

<script>
import Base from "./components/Base";
import Util from "./utils";
import defaultImg from "./assets/default.jpg";

export default {
  name: "App",
  components: {
    Base
  },
  data() {
    return {
      img: ""
    };
  },
  created() {
    Util.getTodayBG().then(url => (this.img = `url(${url})`)).catch((err) => {
      console.log(err);
      this.img = `url(${defaultImg})`;
    })
  },
  mounted() {
    console.log(this)
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .layer-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    z-index: -1;
  }
}
</style>>
