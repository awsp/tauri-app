<script setup>
  import UiButton from "./components/UI/Button.vue";
  import { UiCard, UiCardHeader, UiCardTitle, UiCardContent } from "#components";
</script>

<template>
  <AppContextMenu>
    <!-- Native macOS draggable title bar overlay region -->
    <div class="titlebar" data-tauri-drag-region />
    <div class="container p-2">
      <UiCard class="w-[380px] max-w-sm">
        <UiCardHeader>
          <UiCardTitle>Create account</UiCardTitle>
        </UiCardHeader>
        <UiCardContent>
          <UiButton>Test</UiButton>
        </UiCardContent>
      </UiCard>
    </div>
  </AppContextMenu>
</template>

<style>
  :root {
    font-family:
      -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color: #1c1c1e;
    /* Transparent so macOS vibrancy shows through */
    background-color: transparent;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    height: 100%;
    background: transparent;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .titlebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 28px;
    z-index: 1000;
    /* cursor: grab ensures users know this area is draggable */
    cursor: default;
    /* No background — vibrancy shows through */
    background: transparent;
  }

  .container {
    margin: 0 auto;
    padding: 68px 24px 32px; /* 68px top = 28px titlebar + 40px breathing room */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
  }

  /* ── Dark mode ── */
  @media (prefers-color-scheme: dark) {
    :root {
      color: #f5f5f7;
    }
  }
</style>
