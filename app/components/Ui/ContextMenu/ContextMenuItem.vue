<script setup lang="ts">
import { ContextMenuItem } from "reka-ui";
import type { HtmlHTMLAttributes } from "vue";

const props = defineProps<{
  class?: HtmlHTMLAttributes["class"];
  disabled?: boolean;
  textValue?: string;
}>();

const emit = defineEmits<{
  select: [event: Event];
}>();
</script>

<template>
  <ContextMenuItem
    :class="[
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'dark:focus:bg-accent/50',
      props.class,
    ]"
    :disabled="disabled"
    :text-value="textValue"
    @select="emit('select', $event)"
  >
    <slot />
  </ContextMenuItem>
</template>