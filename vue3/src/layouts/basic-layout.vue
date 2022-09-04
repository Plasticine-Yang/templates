<script setup lang="ts">
const router = useRouter()
const styleObj = {
  backgroundColor: router.currentRoute.value.meta.bgColor as string,
}
</script>

<template>
  <v-router-view></v-router-view>
  <div :style="styleObj">basic layout</div>
</template>
