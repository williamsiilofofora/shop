<template>
  <div class='d-flex flex-row justify-content-between p-3'>
      <span>{{item.title}}</span>
      <span><strong>{{item.price}} €</strong></span>
      <button @click="removeItemFromCart" class="close">
        <span>&times;</span>
      </button>
  </div>
</template>

<script>
import { eventBus } from '../../../../main'

export default {
   props: ['item'],
   methods: {
     removeItemFromCart(){
       eventBus.removeItemFromCart({ ...this.item })
     }
   }
}
</script>

<style lang="scss">
</style>