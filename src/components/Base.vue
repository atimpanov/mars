<template>
  <div class="base-layout">
    <Imgsoutput />
    <CtrlPanel />
  </div>
</template>

<script>
import Imgsoutput from "./ImgsOutput";
import CtrlPanel from "./CtrlPanel";

export default {
  name: "Base",
  components: {
    Imgsoutput,
    CtrlPanel
  }
};
</script>

<style scoped lang="scss">
.base-layout {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(63, 63, 63, 0.6);
  padding: 34px;
  border-radius: 24px;
}

@media screen and (min-width: 1200px) {
  .base-layout {
    display: flex;
    flex-wrap: nowrap;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .base-layout {
    display: block;
  }
}

@media (min-width: 375px) and (max-width: 767px) {
  .base-layout {
    display: flex;
    flex-direction: column-reverse;
    position: static;
    transform: none;
    padding: 30px 15px 15px 15px;
    border-radius: 0;
    height: 100vh;
    box-sizing: border-box;
  }
}

</style>
