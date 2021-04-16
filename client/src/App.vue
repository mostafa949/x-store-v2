<template>
  <v-app>
    <navbar />
    <sidebar />
    <!-- <router-link to="/">Home</router-link>
    <br />
    <router-link to="/about">About</router-link> -->
    <v-main>
      <v-container>
        <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";

export default {
  name: "App",
  components: { Navbar, Sidebar },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
};
</script>

<style lang="scss">
#app {
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  height: 1800px;
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
