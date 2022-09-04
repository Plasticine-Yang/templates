<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push('/hi')
}
</script>

<template>
  <div>index</div>
  <button @click="go">Go</button>
</template>
<route lang="yaml">
meta:
  layout: basic-layout
  bgColor: cyan
</route>
