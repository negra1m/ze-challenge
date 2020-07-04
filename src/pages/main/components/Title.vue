<template>
  <div class="animated">
    <div class="section-1">{{firstText}}</div>
    <div class="section-2">{{secondText}}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  components: {},
  props: {
    firstText: String,
    secondText: String
  },
  methods: {}
};
</script>

<style scoped>
.animated {
  align-self: flex-start;
  text-align: right;
  margin-top: 2rem;
  font-size: 50px;
  font-weight: 800;
}

.section-1 {
  word-spacing: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  animation: appear ease 4s both;
  opacity: 0;
  margin-left: 1px;
}

.section-2 {
  opacity: 0;
  animation: appear ease-in 7s both;
  color: rgba(255, 255, 255, 0.9);
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
    position: absolute;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>
