<template>
  <div>
    <div class="container">
      图书
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.$emit('routerEmit', 'book');
    activeNav = 'book'
  }
}
</script>
