<template>
  <div>
    <div class="container">
      音乐
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$emit('routerChange','music')
  }
}
</script>
