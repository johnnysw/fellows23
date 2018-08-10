<template>
  <div>
    <div class="container">
      图片
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.$emit('routerEmit', 'photo');
    activeNav = 'photo'
  }
  
}
</script>
