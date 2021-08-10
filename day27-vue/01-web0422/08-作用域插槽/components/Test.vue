<template>
  <div>
      <slot :games="games" :msg="msg" :demo="demo"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            games: ['王者荣耀', '英雄联盟', '连连看'],
            msg: '123',
            demo: '哈哈哈'
        }
    }
}
</script>

<style>

</style>