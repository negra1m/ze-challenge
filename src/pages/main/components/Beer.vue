<template>
  <div class="box">
    <div class="beer">
      <div class="top"></div>
      <div class="top-body"></div>
      <div class="head">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div class="border neck color"></div>
      <div class="border shoulder color"></div>
      <div class="border body rotate"></div>
      <div class="border base color"></div>
    </div>
    <div class="floor"></div>
  </div>
</template>

<script>
export default {
  name: "Beer",
  components: {},
  data() {
    return {
      list: [],
      loading: true,
      show: true
    };
  },
  methods: {}
};
</script>

<style scoped>
.floor {
  width: 180px;
  height: 40px;
  border-radius: 100%;
  background-color: teal;
}

.top-body {
  height: 10px;
  width: 58px;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #686868;
  margin-bottom: -3px;
  margin-top: -6.5px;
  z-index: 2;
  border: 1px solid black;
  box-shadow: inset 0px 0px 3px 1.5px rgba(0, 0, 0, 0.7);
  border-style: none solid none solid;
}
.wave {
  display: flex;
  height: 10px;
  width: 110px;
  background-color: #686868;
  border-radius: 100%;
  margin-top: -2.5px;
  border-style: none none solid none;
  box-shadow: inset 0px 0px 2.5px 1.5px rgba(0, 0, 0, 1);
}
.top {
  background-color: #686868;
  box-shadow: inset 0px 0px 2.5px 1.5px rgba(0, 0, 0, 1);
  border-radius: 100% 100% 50% 50%;
  height: 15px;
  width: 60px;
  margin-top: 2.5px;
  align-self: center;
}

.head {
  max-width: 60px;
  display: flex;
  justify-content: space-around;
  align-self: center;
  align-content: flex-end;
  margin-bottom: -15px;
  z-index: 1;
}

.neck {
  height: 225px;
  width: 50px;
  align-self: center;
  margin-bottom: -50px;
  display: flex;
  justify-content: space-between;
  border-right: 10px solid black;
  border: 10px solid rgba(0, 0, 0, 0.644) !important;
  border-radius: 200% 200% 500% 500% / 500% 500% 200% 200%;
}

.beer {
  height: 450px;
  width: 125px;
  /**/
  border-radius: 0px 0px 15px 15px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.color {
  background-color: rgb(128, 62, 1);
}

.border {
  border: 7.5px solid rgba(0, 0, 0, 0.596);
  box-shadow: inset 0px 0px 28.5px -4.5px rgba(0, 0, 0, 1);
}

.base {
  bottom: 0;
  height: 40px;
  border-radius: 0px 0px 15px 15px;
  margin-top: -8px;
}

.body {
  height: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rotate {
  background-image: url("../../../assets/img/brand-logo.jpg");
  background-size: cover;
  background-repeat: repeat-x;
  animation: animation 50s linear infinite;
}

.floor {
  margin-top: -30px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 10px 9px 10px rgba(0, 0, 0);
}

.box {
  display: flex;
  align-items: center;
  flex-direction: column;
}

@-webkit-keyframes animation {
  100% {
    background-position: right 600px bottom 0;
  }
}

@keyframes animation {
  100% {
    background-position: right 600px bottom 0;
  }
}

.shoulder {
  height: 50px;
  border-style: none none solid solid;
  border-radius: 48% 52% 0% 100% / 100% 100% 0% 0%;
  margin-bottom: -8px;
  z-index: 1;
}
</style>
