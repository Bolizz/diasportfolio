<script setup lang="ts">
import { computed } from "vue";
import InteractiveCard from "~/components/InteractiveCard.vue";
import { useSectionDim } from "~/composables/useSectionDim.client";

import EdifyImg from "/images/edify.jpeg";
import JaqynImg from "/images/jaqyn.png";
import LmsImg from "/images/lms.png";
import ShaqyrtuImg from "/images/shaqyrtu.png";

const { rootRef, isDimmed } = useSectionDim(0.6);
const dimClass = computed(() =>
  isDimmed.value ? "opacity-85" : "opacity-100"
);
</script>

<template>
  <section
    id="projects"
    ref="rootRef"
    :class="dimClass"
    class="container mx-auto px-6 py-24 transition-opacity duration-300"
  >
    <h2 class="text-3xl md:text-4xl font-semibold mb-10">💼 Projects</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Edify CRM -->
      <InteractiveCard
        title="Edify CRM — Calendar, Users & JWT Auth"
        subtitle="Week/Month calendar, protected API, dashboard widgets"
        :tags="['Vue 3', 'Pinia', 'Axios', 'Tailwind', 'JWT', 'REST']"
        :image="EdifyImg"
      >
        <template #summary>
          Week/Month calendar with modal create, JWT-secured API calls,
          dashboard + chat.
        </template>

        Implemented <code>weekStart/weekEnd</code> and
        <code>startDay/endDay</code> date math for weekly/monthly views. Modal
        event creation via <code>CalendarModal</code>; Pinia stores for
        events/users with Axios interceptors and JWT persisted in
        <code>sessionStorage</code>. Dashboard KPIs + chat list driven by store
        state.

        <ul class="mt-3 list-disc pl-5 text-sm opacity-90">
          <li>
            Fixed timezone drift by trimming ISO ranges before server queries.
          </li>
          <li>Centralized auth header injection to keep components minimal.</li>
          <li>
            Scoped reactivity to avoid grid over-renders on date navigation.
          </li>
        </ul>
      </InteractiveCard>

      <!-- Shaqyrtu -->
      <InteractiveCard
        title="Shaqyrtu — Digital Invitation Builder"
        subtitle="Interactive templates, media upload, maps & countdown"
        :tags="['Nuxt 3', 'Pinia', 'Nuxt UI', 'Vee-Validate', 'VCalendar']"
        :image="ShaqyrtuImg"
      >
        <template #summary>
          14+ reusable templates: photos, audio, 2GIS/Yandex maps, RSVP form,
          countdown.
        </template>

        Dynamic template switcher renders layouts from backend JSON. Media
        uploader with preview/remove; audio selector with autoplay guard. Map
        embeds and animated countdown timer; RSVP validated with
        Yup/Vee-Validate.

        <ul class="mt-3 list-disc pl-5 text-sm opacity-90">
          <li>
            Abstracted template assets (SVG/video/img) via computed decorators.
          </li>
          <li>
            Preloader + conditional rendering for paid/unpaid invite states.
          </li>
          <li>
            Share flow using <code>navigator.share</code> with clipboard
            fallback.
          </li>
        </ul>
      </InteractiveCard>

      <!-- Jaqyn -->
      <InteractiveCard
        title="Jaqyn — Specialists, Seminars & Profile"
        subtitle="Protected routes, rich filtering, sessions, payments"
        :tags="[
          'Nuxt 3',
          'Pinia',
          'TypeScript',
          'VueUse/Composables',
          'ofetch',
          'i18n',
        ]"
        :image="JaqynImg"
      >
        <template #summary>
          Full Nuxt app: auth-gated layouts, specialists & seminars with deep
          filters, profiles, favorites, sessions, and payments.
        </template>

        <!-- Core highlights (technical, FE-focused) -->
        <ul class="mt-2 list-disc pl-5 text-sm space-y-1 opacity-90">
          <!-- Architecture & Auth -->
          <li>
            Role-aware navigation via <code>defineNuxtRouteMiddleware</code>,
            cookie-based token check, SSR/client hydration guards, auth modal
            fallback.
          </li>
          <li>
            App-wide <code>$fetch.create</code> plugin: JWT header injection,
            <code>locale</code> header, 401 interceptor →
            <code>navigateTo</code>, error surface.
          </li>

          <!-- Data & State -->
          <li>
            Typed stores (Pinia) for filters, user, sessions; normalized lists;
            cache + invalidation keyed by filter params.
          </li>
          <li>
            Reusable <code>useAPI&lt;T&gt;</code> composable wrapping
            <code>useFetch</code> with the custom <code>$api</code>, lazy &
            watched queries, SSR-safe.
          </li>

          <!-- Specialists -->
          <li>
            Specialists index: left rail filter (tags, city, language,
            specialization) + top filter; skeleton loaders; paginated results
            with <code>UPagination</code>.
          </li>
          <li>
            Specialist details: modal booking, reviews CRUD, education gallery
            (image modal), optimistic “favorite” toggle using a composable.
          </li>

          <!-- Seminars -->
          <li>
            Seminars list with city filter; seminar page supports paid/unpaid
            flows; status & seat availability driven from store.
          </li>
          <li>
            Video/preview rendering with graceful fallbacks; i18n strings
            throughout.
          </li>

          <!-- Profile -->
          <li>
            Profile layout with sticky nav: Settings, Sessions (pay/edit
            review), Favorites; masked inputs; form validation (Vee-Validate +
            Yup).
          </li>
          <li>
            Payment CTA & session state machine: online/offline meeting
            shortcuts, WhatsApp deep links, review modals.
          </li>

          <!-- UI/UX & Performance -->
          <li>
            Suspense boundaries, skeletons, and optimistic updates for perceived
            speed; scroll-to-top on filter change.
          </li>
          <li>
            Component library integration (<code>U*</code> components),
            accessibility-minded forms, keyboardable controls.
          </li>

          <!-- Dev Experience -->
          <li>
            Strict TS props/types for API entities, clean composables, and
            isolation of services (users, specialists, transactions).
          </li>
        </ul>
      </InteractiveCard>

      <!-- LMS -->
      <InteractiveCard
        title="LMS — Meal Plans & Personal Pages"
        subtitle="Weekly/monthly plans, news feed, teacher/parent/student roles"
        :tags="['Nuxt 3', 'Pinia', 'Tailwind', 'API Integration']"
        :image="LmsImg"
      >
        <template #summary>
          Backend-fetched plans + news rendered through role-based components.
        </template>

        Meal plan module renders week/month; news module reuses the same
        structure. Teachers: CRUD students + upload plans. Parents/Students:
        read-only access. Middleware enforces permissions and keeps layouts
        clean.

        <ul class="mt-3 list-disc pl-5 text-sm opacity-90">
          <li>Encapsulated day/week views into reusable components.</li>
          <li>Separated permissions into middleware (not components).</li>
          <li>
            Store hydration syncs API data across plans, news, personal pages.
          </li>
        </ul>
      </InteractiveCard>
    </div>
  </section>
</template>
