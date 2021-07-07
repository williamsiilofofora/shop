<template>
  <div class='w-25 p-3 product-container d-flex flex-column'>
      <div class="d-flex flex-row justify-content-center">
          <img style="height: 150px" :src="product.img" alt="">
      </div>
      <div>
          <h3> {{ product.title }} </h3>
      </div>
      <hr>
      <div>
          <p> {{ product.description }} </p>
      </div>
      <div>
          <span> {{ product.price}} €</span>
          <button class="btn btn-primary btn-sm float-right" @click="addProductToCart">Commander</button>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../../../../main'

export default {
   props: ['product'],
   methods: {
       addProductToCart() {
           eventBus.addProductToCart({...this.product})
       }
   }
}
</script>

<style lang="scss">
.product-container {
    height:400px;
}
p {
    font-size: 12px;
}
</style>