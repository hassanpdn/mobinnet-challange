<template>
      <div class="switch">
            <input
                  @input="handleSwitchStatus"
                  v-model="isSwitchOn"
                  @change="$emit('change' , isSwitchOn)"
                  type="checkbox"
                  id="switch-toggler"
            />
            <label for="switch-toggler">Toggle</label>
      </div>
</template>

<script>
export default {
      data() {
            return {
                  isSwitchOn: false
            };
      },
      methods: {
            handleSwitchStatus() {
                  this.isSwitchOn = !this.isSwitchOn;
            },
      },
};
</script>

<style lang="scss">
@import "switch";
</style>