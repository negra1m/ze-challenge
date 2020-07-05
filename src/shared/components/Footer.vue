<template>
  <footer>
    <div class="meaning">
      <p>Challenge for Front End Position at:</p>
      <img src="../../assets/img/ze.png" alt="logo Zé Delivery" />
    </div>
    <div class="author-rights">
      <a href="http://www.github.com/negra1m">by Vinícius Negrão</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<!-- scoped faz com que o CSS seja aplicado somente a este componente -->
<style scoped>
a {
  font-weight: 200;
  font-size: 12px;
}
footer {
  align-items: center;
  background-color: #333;
  bottom: 0;
  color: rgba(255, 255, 255, 0.658);
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
}

.meaning {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  height: 60px;
  padding-left: 1rem;
}

.meaning > img {
  height: 30px;
  padding-left: 1rem;
}

.author-rights {
  letter-spacing: 2px;
  padding-right: 0.75rem;
}

@media only screen and (max-width: 800px) {
  footer {
    font-size: 10px;
  }

  .author-rights {
    text-align: right;
  }
}
</style>
