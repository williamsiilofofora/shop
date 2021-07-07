<template>
    <div class="d-flex flex-row">
        <shop class="w-75"></shop>
        <cart class="w-25"></cart>
    </div>
</template>
<script>
import Cart from './Cart/Cart'
import Shop from './Shop/Shop'
export default {
  components: { 
      Shop,
      Cart
    },
    
}
</script>
<style lang="scss" scoped>

</style>
