<script setup lang="ts">
import { ContextMenuTrigger } from "reka-ui";

const props = defineProps<{
  as?: string;
  class?: string;
}>();
</script>

<template>
  <ContextMenuTrigger :as="as" :class="props.class">
    <slot />
  </ContextMenuTrigger>
</template>