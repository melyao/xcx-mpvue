<template>
  <div>
    <p :class="font">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text','font']
}
</script>

<style>
.card {
  padding: 10px;
}
.font{
  color: brown;
}
</style>
