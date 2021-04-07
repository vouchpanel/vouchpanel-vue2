<script lang="ts">
import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "VouchpanelVue2", // vue component name
  props: ["darkMode", "id"],
  mounted() {
    let vouchpanelScript = document.createElement("script");
    vouchpanelScript.setAttribute(
      "src",
      "https://app.vouchpanel.com/js/embed.js"
    );
    document.head.appendChild(vouchpanelScript);
  },
});
</script>

<template>
  <div
    class="vouchpanel-publish"
    :dark-mode="darkMode"
    :data-wall="id"
  ></div>
</template>
