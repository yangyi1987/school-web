<template lang="pug">
  .index 首页
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeIndex extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped></style>
