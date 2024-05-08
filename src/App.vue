<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import './styles.css'

export default {
    components: {
        appHeader: Header
    }
  };

</script> -->

<template>
  <div>
    <app-header></app-header>
    <v-card>
      <v-row justify="center" no-gutters class="my-2">
        <v-col class="text-center" cols="12">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-card>
    <app-footer></app-footer>
    <!-- <notifications group="foo"/> -->
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<script>
import './styles.css'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
  .red {
    color: #D10000;
  }

  .bg-red {
    color: white;
    background-color: #D10000;
  }

  .black {
    color: #0D2D44;
  }

  .bg-black {
    color: white;
    background-color: #0D2D44;;
  }
</style>
