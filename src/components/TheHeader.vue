<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">
    <img width="30" height="30" src="../assets/logofoncé.png" alt=""/>
    E-Shop
  </a>
  <button class="navbar-toggler">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: page === 'User' }" @click="changePage('User')">Boutique</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" :class="{ active: page === 'Admin' }" @click="changePage('Admin')">Admin</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { eventBus } from '../main'

export default {
  data() {
    return { 
      page: eventBus.page
    }
  },
  methods: {
    changePage(page){
      eventBus.changePage(page);
     
    }
  },
  created() {
    eventBus.$on('update:Page',(page) => {
      this.page = page;
    })
  }
}
</script>

<style lang="scss">
  a{ 
    cursor: pointer;
  }
</style>