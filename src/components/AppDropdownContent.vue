<template>
  <transition name="dropdown-content">
    <div
      v-if="active"
      class="origin-top-right absolute mt-2 w-48 bg-white rounded-lg border py-2"
      style="right: 0;"
    >
      <slot />
    </div>
  </transition>
</template>


<script>
export default {
  name: "AppDropdownContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>
