<template>
      <div class="card-details">
            <div class="details">
                  <p class="item">
                        <span class="subtitle">{{Math.floor(item.cpuCapacity).toLocaleString('fa-EG')}} هسته </span>
                        <cite> : CPU </cite>
                        <img src="@/assets/icons/svg/cpu.svg" alt="cpu">
                  </p>
                  <p class="item">
                        <span class="subtitle">{{Math.floor(item.storageCapacity).toLocaleString('fa-EG')}} گیگ </span>
                        <cite> : SSD </cite>
                        <img src="@/assets/icons/svg/ssd.svg" alt="ssd">
                  </p>
            </div>
            <div class="details">
                  <p class="item">
                        <span class="subtitle">{{Math.floor(item.trafficCapacity).toLocaleString('fa-EG')}}</span>
                        <cite> : Traffic </cite>
                        <img src="@/assets/icons/svg/traffic.svg" alt="traffic">
                  </p>
                  <p class="item">
                        <span class="subtitle">{{Math.floor(item.ramCapcity).toLocaleString('fa-EG')}} گیگ </span>
                        <cite> : RAM </cite>
                        <img src="@/assets/icons/svg/ram.svg" alt="ram">
                  </p>
            </div>
      </div>
</template>

<script>
export default {
      props:{
            item: {
                  type: Object,
                  required: true
            }
      }
}
</script>

<style lang="scss">
      .card-details {
            display: flex;
            justify-content: space-between;

            .details {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  justify-content: center;
                  
                  .item {
                        display: flex;
                        font-size: 12px;

                        @media screen and (min-width: 1200px) and (max-width: 1392px){
                              font-size: 10px;
                        }

                        @media screen and (min-width: 1392px) and (max-width: 1450px){
                              font-size: 11px;
                        }

                        img {
                              width: 13px;
                              height: 18px;
                              margin-left: 4px;

                              @media screen  and (min-width: 1200px) and (max-width: 1350px){
                                    width: 10px;
                              }
                        }

                        cite {
                              all: unset;
                              color: var(--subtitle-color);
                        }

                        .subtitle {
                              margin-right: 2px;
                              color: var(--thertiray-color);
                        }
                  }
            }
      }
</style>