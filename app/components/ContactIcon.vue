<template>
  <a
    :href="href"
    :aria-label="label"
    class="group block w-full rounded-xl border border-slate-700/40 p-4 transition-[transform,border-color,box-shadow] duration-200 hover:border-sky-400/50 hover:shadow-lg"
    :target="external ? '_blank' : undefined"
    rel="noopener"
  >
    <div class="flex items-center justify-center">
      <img
        :src="iconSrc"
        :alt="label"
        class="icon-size transition-transform duration-200 group-hover:scale-105"
      />
    </div>
    <p class="mt-2 text-center text-slate-200 text-sm font-medium">
      {{ label }}
    </p>
  </a>
</template>

<script setup lang="ts">
import GmailIcon from "/images/gmail.svg";
import LinkedinIcon from "/images/linkedin.svg";
import TelegramIcon from "/images/telegram.svg";

const props = withDefaults(
  defineProps<{
    kind: "email" | "linkedin" | "telegram";
    href: string;
    label: string;
    external?: boolean;
  }>(),
  {
    external: true,
  }
);

const iconSrc = computed(() => {
  switch (props.kind) {
    case "email":
      return GmailIcon;
    case "linkedin":
      return LinkedinIcon;
    case "telegram":
      return TelegramIcon;
  }
});
</script>

<style scoped>
.icon-size {
  width: 42px;
  height: 42px;
}
</style>
