# @vouchpanel/vue

[![Package Version][package-image]][package-url]
<!-- [![Open Issues][issues-image]][issues-url]
[![Build Status][build-image]][build-url] -->
<!-- [![Coverage Status][coverage-image]][coverage-url] -->
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Dev Dependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

Quickly embed a vouchpanel into your Vue project.

### How To Use

If you are using Vue as a `Direct <script> Include`, please go to [link](https://vouchpanel.com/docs/vanillajs).

If you are using Vue as a SPA use the instructions below.

Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/vue
```

Include it as a Vue element:

```vue
<template>
  <Wall id="4" darkMode="off" />
</template>

<script lang="ts">
import Vue from "vue";
import VouchpanelVue2 from "@vouchpanel/vue";

Vue.component("Wall", VouchpanelVue2);

export default new Vue({});
</script>
};
```

[project-url]: https://github.com/vouchpanel/vouchpanel-vue
[package-image]: https://img.shields.io/npm/v/@vouchpanel/vue
[package-url]: https://www.npmjs.com/package/@vouchpanel/vue
[issues-image]: https://img.shields.io/github/issues/vouchpanel/vouchpanel-vue.svg?style=popout
[issues-url]: https://github.com/vouchpanel/vouchpanel-vue/issues
[build-image]: https://travis-ci.org/vouchpanel/vouchpanel-vue.svg?branch=master
[build-url]: https://travis-ci.org/vouchpanel/vouchpanel-vue
[coverage-image]: https://coveralls.io/repos/github/vouchpanel/vouchpanel-vue/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/vouchpanel/vouchpanel-vue?branch=master
[dependencies-image]: https://img.shields.io/david/vouchpanel/vouchpanel-vue
[dependencies-url]: https://www.npmjs.com/package/@vouchpanel/vue
[dev-dependencies-image]: https://img.shields.io/david/dev/vouchpanel/vouchpanel-vue
[dev-dependencies-url]: https://www.npmjs.com/package/@vouchpanel/vue
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli
