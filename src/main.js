import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [

      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '2',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '3',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/None_b582cb78-cf2b-4c3a-bb69-7804aa62d834.jpg',
        title: 'Asus Rog Strix',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 880
      },
      {
        id: '4',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/346916_b5988d2b-efab-4426-b078-adc85d99f55a.jpg',
        title: 'Razer Blade Pro',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 980
      },
      {
        id: '5',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/None_f08bea6f-1c1c-4890-b71f-1d736baed189.jpg',
        title: 'Acer Nitro 5',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 900
      },
      {
        id: '6',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/None_3fbf86d5-809a-46b0-8192-cd9f403db39f.jpg',
        title: 'MSI GF63 THIN',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1100
      },
      {
        id: '7',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/364024_b79f240b-38fa-4737-b9be-019a059b578d.jpg',
        title: 'Razer Blade 15 Advanced',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '8',
        img: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/3984_15b93e1a-15aa-459d-80db-11552231f78f.jpg',
        title: 'MacBook Pro',
        description: 'Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une vitesse et une puissance sidérantes. Il offre des performances de processeur jusqu’à 2,8 fois plus élevées. Des performances graphiques jusqu’à 5 fois plus rapides',
        price: 1660
      }

    ],
    cart: [
     
    ],
    page: 'Admin'
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map(i => i.id).includes(product.id)) {
        this.cart = [...this.cart, product];
        this.$emit('update:cart', this.cart.slice());
      }  
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter(i => i.id !== item.id);
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page) {
      this.page = page;
      this.$emit('update:page', this.page)
    },
    addProduct(product) {
      this.products = [...this.products, { ...product, id: this.products.length + 1 + '' }],
      this.$emit('update:products', this.products)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')