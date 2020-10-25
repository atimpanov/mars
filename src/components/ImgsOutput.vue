<template>
  <div class="imgs-wrapper">
    <div class="imgs-row" v-for="row in imgSet" :key="row.__ob__.dep.id">
      <img v-for="item in row" :key="item.id" :src="item.img_src" />
    </div>
  </div>
</template>

<script>
import Util from "../utils"
import { eventemitter } from '../main'
import defaultImgSet from "../assets/moch.json"

export default {
  name: "ImgsOutput",
  data() {
    return {
      imgSet: []
    };
  },
  created() {
    //  //
    console.log(defaultImgSet) 
    eventemitter.$on('nasaConfigImg', (config) => {
      console.log(config)
      Util.getImgSet(config)
      .then(urls => (this.imgSet = urls))
      .catch(err => {
        console.log(err);
        this.imgSet = Util.splitImgSet(defaultImgSet);
      });
    })

    Util.getImgSet()
      .then(urls => (this.imgSet = urls))
      .catch(err => {
        console.log(err);
        this.imgSet = Util.splitImgSet(defaultImgSet);
      });
  }
};
</script>

<style lang="scss" scoped>
.imgs-wrapper {
  margin-right: 20px;

  .imgs-row {
    overflow: hidden;
    margin-bottom: 15px;
    white-space: nowrap;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 100px;
      height: 100px;
      margin-right: 15px;
      vertical-align: bottom;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .imgs-wrapper {
    margin-right: 0;
    margin-bottom: 24px;
  }
}

@media (min-width: 375px) and (max-width: 767px) {
  .imgs-wrapper {
    margin-right: 0;
    max-height: 460px;
    overflow: scroll;
  }
}

</style>