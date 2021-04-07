<script lang="ts">
import Vue from "vue";
import VouchpanelVue2 from "@/vouchpanel-vue2.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VouchpanelVue2,
  },
});
</script>

<template>
  <div id="app">
    <vouchpanel-vue2 id="4" dark-mode="off" />
  </div>
</template>
