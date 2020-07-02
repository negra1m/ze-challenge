<template>
  <header>
    <img class="logo" src="../../assets/ze.png" alt="Zé Delivery Logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    mobile: Boolean
  }
};
</script>

<!-- scoped faz com que o CSS seja aplicado somente a este componente -->
<style scoped>
header {
  align-items: center;
  background-color: rgb(255, 197, 0);
  display: flex;
  height: 70px;
  justify-content: center;
  width: 100%;
}

.logo {
  height: 60px;
}
</style>
