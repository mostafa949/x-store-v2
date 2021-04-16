<template>
  <div class="navbar">
    <v-app-bar app flat color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title
        ><router-link to="/">x-store</router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="route in authRoutes"
            :key="route.name"
            :to="route.route"
            @click="() => {}"
          >
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      authRoutes: [
        { name: "Login", route: "/login" },
        { name: "Signup", route: "/signup" },
      ],
    };
  },
};
</script>
