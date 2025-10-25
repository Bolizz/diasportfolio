<template>
  <article
    class="group relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden transition-[transform,box-shadow,background-color,opacity] duration-300 will-change-transform"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="!openOnHover ? (expanded = !expanded) : null"
  >
    <!-- Image -->
    <div v-if="image" class="h-40 w-full overflow-hidden">
      <img
        :src="image"
        alt=""
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Header -->
    <header class="p-6">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold leading-tight text-white">
            {{ title }}
          </h3>
          <p v-if="subtitle" class="mt-1 text-sm text-white/80">
            {{ subtitle }}
          </p>
        </div>
        <div
          class="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          ↗
        </div>
      </div>

      <p v-if="$slots.summary" class="mt-3 text-white/90">
        <slot name="summary" />
      </p>

      <div v-if="tags?.length" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="t in tags"
          :key="t"
          class="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/90"
        >
          {{ t }}
        </span>
      </div>
    </header>

    <!-- Expandable details with smooth height -->
    <Transition
      name="collapse"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="expanded" ref="bodyRef" class="px-6 pb-6 overflow-hidden">
        <div
          class="mt-2 border-t border-white/10 pt-4 text-white/95 leading-relaxed"
        >
          <slot />
        </div>
        <div v-if="$slots.actions" class="mt-4 flex gap-3">
          <slot name="actions" />
        </div>
      </div>
    </Transition>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    subtitle?: string;
    tags?: string[];
    image?: string;
    openOnHover?: boolean;
  }>(),
  { openOnHover: true }
);

const expanded = ref(false);
const bodyRef = ref<HTMLElement | null>(null);

let hoverTimer: number | null = null;
const HOVER_IN_DELAY = 60; // ms
const HOVER_OUT_DELAY = 130; // ms

function onEnter() {
  if (!props.openOnHover) return;
  if (hoverTimer) window.clearTimeout(hoverTimer);
  hoverTimer = window.setTimeout(() => {
    expanded.value = true;
  }, HOVER_IN_DELAY);
}

function onLeave() {
  if (!props.openOnHover) return;
  if (hoverTimer) window.clearTimeout(hoverTimer);
  hoverTimer = window.setTimeout(() => {
    expanded.value = false;
  }, HOVER_OUT_DELAY);
}

/** Transition hooks to animate auto-height */
function enter(el: Element) {
  const elmt = el as HTMLElement;
  elmt.style.height = "0px";
  elmt.style.opacity = "0";
  void elmt.offsetHeight; // reflow
  elmt.style.transition =
    "height 260ms cubic-bezier(.22,.61,.36,1), opacity 220ms ease-out";
  elmt.style.height = elmt.scrollHeight + "px";
  elmt.style.opacity = "1";
}
function afterEnter(el: Element) {
  const elmt = el as HTMLElement;
  elmt.style.height = "auto";
  elmt.style.transition = "";
}
function leave(el: Element) {
  const elmt = el as HTMLElement;
  elmt.style.height = elmt.scrollHeight + "px";
  elmt.style.opacity = "1";
  void elmt.offsetHeight;
  elmt.style.transition =
    "height 260ms cubic-bezier(.22,.61,.36,1), opacity 200ms ease-in";
  elmt.style.height = "0px";
  elmt.style.opacity = "0";
}
</script>

<style scoped>
/* Fallback if JS hooks fail; not used for height but keeps opacity graceful */
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: opacity 220ms ease;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .collapse-enter-active,
  .collapse-leave-active {
    transition-duration: 1ms !important;
  }
}
</style>
