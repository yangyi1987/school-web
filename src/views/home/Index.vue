<template lang="pug">
  .index 首页
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getApplications } from "@/http/home";

@Component
export default class HomeIndex extends Vue {
  @Prop() private msg!: string;
  mounted() {
    this.getHomeApplications();
  }
  private async getHomeApplications(): Promise<void> {
    const { data } = await getApplications();
    console.log(data);
  }
}
</script>

<style scoped></style>
