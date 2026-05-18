<script setup lang="ts">
import { ContextMenuSeparator } from "reka-ui";
import type { HtmlHTMLAttributes } from "vue";

const props = defineProps<{
  class?: HtmlHTMLAttributes["class"];
}>();
</script>

<template>
  <ContextMenuSeparator :class="['-mx-1 my-1 h-px bg-border', props.class]" />
</template>