<script setup lang="ts">
function onAction(label: string) {
  console.log(`[ContextMenu] "${label}" clicked`);
}
</script>

<template>
  <UiContextMenu>
    <!-- Full-viewport trigger so any right-click anywhere opens the menu -->
    <UiContextMenuTrigger as="div" class="min-h-screen w-full">
      <slot />
    </UiContextMenuTrigger>

    <UiContextMenuContent class="w-52">
      <UiContextMenuItem @select="onAction('New Tab')">New Tab</UiContextMenuItem>
      <UiContextMenuItem @select="onAction('New Window')">New Window</UiContextMenuItem>
      <UiContextMenuSeparator />
      <UiContextMenuItem @select="onAction('Copy')">Copy</UiContextMenuItem>
      <UiContextMenuItem @select="onAction('Paste')">Paste</UiContextMenuItem>
      <UiContextMenuSeparator />
      <UiContextMenuItem @select="onAction('Settings')">Settings</UiContextMenuItem>
    </UiContextMenuContent>
  </UiContextMenu>
</template>