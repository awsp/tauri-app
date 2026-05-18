<script setup lang="ts">
import { ContextMenuRoot } from "reka-ui";

const props = defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <ContextMenuRoot v-model="props.modelValue" @update:model-value="emit('update:modelValue', $event)">
    <slot />
  </ContextMenuRoot>
</template>