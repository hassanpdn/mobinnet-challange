<template>
      <button class="btn" @click.prevent="$emit('click')">
            <span>{{title}}</span>
            <img class="btn-icon" :src="require(title === 'پرداخت'? '@/assets/icons/svg/active-payment.svg' : '@/assets/icons/svg/deactive-payment.svg')" alt="payment">
      </button>
</template>

<script>
      export default {
            name: 'btn',
            props: {
                  title: {
                        type: String
                  }
            }
      }
</script>

<style lang="scss">
      @import "btn";
</style>
