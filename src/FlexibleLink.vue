<template> 
  <a v-if="native" :class="customClass" @click="openLinkNatively">
    <slot></slot>
  </a>
  <a v-else :class="customClass" :href="href" :target="target">
    <slot></slot>
  </a>
</template> 

<script>
export default {
  name: 'flexible-link',
  props: {
    native: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: '/',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  methods: {
    openLinkNatively() {
      if (this.native) {
        /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, global-require */
        require('electron').shell.openExternal(this.href);
        /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, global-require */
      }
    },
  },
};

</script>
