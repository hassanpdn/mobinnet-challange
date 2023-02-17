<template>
      <ul class="packages-wrapper">
            <li class="package" :class="{'selected-item': selectedPackIndex === packIndex}">
                  <div
                        class="icon"
                        :style="{ backgroundImage: 'url('+ require(`@/assets/icons/svg/${mode? 'dark': 'light'}/${getName(item.packageName)}.svg`) +')' }"
                  >
                        <p v-show="item.discountPercent" class="discount-badge">
                              <span>
                                    <img
                                          class="percent"
                                          src="@/assets/icons/svg/percent.svg"
                                          alt="percent"
                                    />
                                    {{Math.floor(item.discountPercent).toLocaleString('fa-EG')}}
                              </span>
                              <img
                                    class="badge"
                                    src="@/assets/icons/svg/discount-holder.svg"
                                    alt="discount-badge"
                              />
                        </p>
                  </div>
                  <span class="title">{{item.packageName}}</span>
                  <p class="price">
                        <span class="subtitle">تومان / ماهیانه</span>
                        <span class="amount">
                              {{getFinalPrice}}
                              <span v-show="item.discount" class="old-price">{{Math.floor(item.price).toLocaleString('fa-EG')}}</span>
                        </span>
                  </p>
                  <div class="package-details">
                        <Details :item="item"/>
                  </div>
                  <SelectBox @setPack="setPack" style="width:100%" :selectOptions="selectOptions"/>
                  <Btn :title="selectedPackIndex === packIndex ? 'پرداخت' : 'انتخاب'" @click="choosePack(item.id)"/>
            </li>
      </ul>
</template>

<script>
//Components
import Details from '../Details';
import SelectBox from '@/components/common/select/select';
import Btn from '@/components/common/button/btn';

export default {
      components: {
            Details, SelectBox, Btn
      },
      props: {
            pack: {
                  type: Array,
                  required: true,
            },
            darkMode: {
                  type: Boolean,
            },
            selectedPackIndex: {
                  type: Number
            },
            packIndex: {
                  type: Number
            }
      },
      data(){
            return {
                  item: {},
                  selectedPackId: null
            }
      },
      created(){
            this.item = this.pack[0];
      },
      computed: {
            mode() {
                  return this.darkMode;
            },
            selectOptions(){
                  let arr = [];
                  this.pack.map(item => arr.push(item.duration));
                  return arr
            },
            getFinalPrice(){
                  return this.item.discount && this.item.price ? Math.floor((this.item.price - this.item.discount)/10).toLocaleString('fa-EG')  : Math.floor(this.item.price).toLocaleString('fa-EG') || 'صفر'
            }
      },
      methods: {
            getName(name) {
                  let newName = name.split(" ")[0];
                  return newName;
            },
            choosePack(id){
                  this.$emit('setSelectedPack', id)
            },
            setPack(index){
                  this.item = this.pack[index];
                  this.selectedPackId = this.item.id;
                  console.log(this.selectedPackId)
            }
      },
};
</script>

<style lang="scss">
@import 'CloudPackageGroup';
</style>