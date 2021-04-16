<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="test"></div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped>
div.test {
  display: block;
  width: 50px;
  height: 4px;
  background-color: #000;
  animation: tested 5s;
}

@keyframes tested {
  from {
    width: 50px;
  }
  to {
    width: 300px;
  }
}
</style>
