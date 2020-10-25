<template>
  <div class="ctrl-wrapper">
    <div class="input-pack">
      <div class="selectedMars">
        <select v-model="selectedMars">
          <option disabled value="">Выберите один из вариантов</option>
          <option v-for="item in mars" :value="item" :key="item">{{
            item
          }}</option>
        </select>
      </div>
      <div class="selectedCamera">
        <select v-model="selectedCamera">
          <option disabled value="">Выберите один из вариантов</option>
          <option
            v-for="item in cameras"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</option
          >
        </select>
      </div>
    </div>
    <div class="input-pack">
      <Datetime v-model="date" format="yyyy-MM-dd" />
      <button :disabled="disableSubmit" @click="sendConfig" class="submitBtn">
        Искать
      </button>
    </div>
  </div>
</template>

<script>
import { Datetime } from "vue-datetime";
import { eventemitter } from "../main";

export default {
  name: "CtrlPanel",
  data() {
    return {
      date: "2020-10-23",
      mars: ["Curiosity", "Opportunity", "Spirit"],
      selectedMars: "",
      cameras: [
        { value: "FHAZ", label: "Front Hazard Avoidance Camera" },
        { value: "RHAZ", label: "Rear Hazard Avoidance Camera" },
        { value: "MAST", label: "Mast Camera" },
        { value: "CHEMCAM", label: "Chemistry and Camera Complex" },
        { value: "MAHLI", label: "Mars Hand Lens Imager" },
        { value: "MARDI", label: "Mars Descent Imager" },
        { value: "NAVCAM", label: "Navigation Camera" },
        { value: "PANCAM", label: "Panoramic Camera" },
        {
          value: "MINITES",
          label: "Miniature Thermal Emission Spectrometer (Mini-TES)"
        }
      ],
      selectedCamera: ""
    };
  },
  components: {
    Datetime
  },
  methods: {
    sendConfig() {
      eventemitter.$emit("nasaConfigImg", {
        date: this.date.split("T")[0],
        mars: this.selectedMars,
        camera: this.selectedCamera
      });
    }
  },
  computed: {
    disableSubmit() {
      if (this.date && this.selectedMars && this.selectedCamera) return false;
      else return true;
    }
  }
};
</script>

<style lang="scss">
.ctrl-wrapper {
  width: 257px;

  .input-pack {
    width: 257px;
  }

  .selectedMars {
    position: relative;

    &::after {
      content: "Марсоход";
      position: absolute;
      top: 4px;
      left: 11px;
      font-family: "Roboto", sans-serif;
      color: rgba(159, 159, 159, 1);
      font-size: 12px;
    }
  }

  .selectedCamera {
    position: relative;

    &::after {
      content: "Камера";
      position: absolute;
      top: 4px;
      left: 11px;
      font-family: "Roboto", sans-serif;
      color: rgba(159, 159, 159, 1);
      font-size: 12px;
    }
  }

  select,
  .vdatetime,
  .vdatetime-input {
    display: block;
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
  }
  .vdatetime {
    margin-bottom: 24px;
    position: relative;

    &::after {
      content: "Земная дата";
      position: absolute;
      top: 4px;
      left: 11px;
      font-family: "Roboto", sans-serif;
      color: rgba(159, 159, 159, 1);
      font-size: 12px;
    }
  }
  .vdatetime-input {
    padding-top: 16px;
    padding-left: 10px;
    cursor: pointer;
    border: none;
  }
  select {
    appearance: none;
    background: url("../assets/arrow.png") no-repeat 97% center, #fff;
    padding-left: 10px;
    margin-bottom: 24px;
    padding-top: 16px;
    cursor: pointer;
    position: relative;
    border: 0;

    option {
      padding: 10px;
    }
  }
}
.submitBtn {
  display: block;
  width: 100%;
  height: 45px;
  background: rgba(66, 96, 255, 1);
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  cursor: pointer;

  &:disabled {
    background: grey;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .ctrl-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}

@media (min-width: 375px) and (max-width: 767px) {
    .ctrl-wrapper {
        margin: 0 auto 30px;
    }
}
</style>
