<template>
      <div class="selectdiv" :class="opened? 'opened' : 'closed'">
            <label>
                  <select @change="setPack" @click="opened = !opened">
                        <option v-for="(option, i) in selectOptions" :key="`option-${i}`" :value="i">{{Math.floor(option.split(' ')[0]).toLocaleString('fa-EG')}} {{option.split(' ')[1]}}</option>
                  </select>
            </label>
      </div>
</template>

<script>
export default {
      props: {
            selectOptions: {
                  type: [],
            },
      },
      data() {
            return {
                  opened: false,
            };
      },
      methods: {
            setPack: function(e){
                  this.$emit('setPack',e.target.value)
            }
      }
};
</script>

<style lang="scss">
@import "select";
</style>