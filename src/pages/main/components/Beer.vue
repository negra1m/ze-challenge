<template>
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

<style>
.top-body {
  height: 20px;
  width: 116px;
  -ms-flex-item-align: center;
  align-self: center;
  background-color: #686868;
  margin-bottom: -8px;
  margin-top: -3px;
  z-index: 2;
  border: 2px solid black;
  box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0.7);
  border-style: none solid none solid;
}
.wave {
  display: flex;
  height: 20px;
  width: 220px;
  background-color: #686868;
  border-radius: 100%;
  margin-top: -5px;
  border-style: none none solid none;
  box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 1);
}
.top {
  background-color: #686868;
  box-shadow: inset 0px 0px 5px 3px rgba(0, 0, 0, 1);
  border-radius: 100% 100% 50% 50%;
  height: 10px;
  width: 200px;

  max-width: 120px;
  margin-top: 10px;
  align-self: center;
}

.head {
  max-width: 120px;
  display: flex;
  justify-content: space-around;
  align-self: center;
  align-content: flex-end;
  margin-bottom: -10px;
  z-index: 1;
}

.neck {
  height: 450px;
  width: 100px;
  align-self: center;
  margin-bottom: -100px;
  display: flex;
  justify-content: space-between;
  border-right: 20px solid black;
  border: 20px solid rgba(0, 0, 0, 0.644) !important;
  border-radius: 200% 200% 500% 500% / 500% 500% 200% 200%;
}

.beer {
  height: 900px;
  width: 250px;
  /**/
  border-radius: 0px 0px 30px 30px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}

.color {
  background-color: rgb(128, 62, 1);
}

.border {
  border: 15px solid rgba(0, 0, 0, 0.596);
  box-shadow: inset 0px 0px 57px -9px rgba(0, 0, 0, 1);
}

.base {
  bottom: 0;
  height: 80px;
  box-shadow: inset 100px 20px 57px -9px rgb(59, 29, 0);
  border-radius: 0px 0px 30px 30px;
  margin-top: -16px;
}

.body {
  height: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 57px -9px rgba(0, 0, 0, 1);
}

.rotate {
  background-image: url("../../../assets/img/brand-logo.jpg");
  background-size: cover;
  background-repeat: repeat-x;
  animation: animation 50s linear infinite;
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
  height: 100px;
  border-style: none none solid solid;
  border-radius: 48% 52% 0% 100% / 100% 100% 0% 0%;
  margin-bottom: -16px;
  z-index: 1;
}
</style>
