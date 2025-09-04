<script setup lang="ts">
import { ref, computed } from "vue";
import InteractiveCard from "~/components/InteractiveCard.vue";
import ExperienceRocket from "~/components/ExperienceRocket.vue";
import { useSectionDim } from "~/composables/useSectionDim.client";
import AbmcoLogo from "/images/abmco.png";
import CmiLogo from "/images/cmilogo.png";

const { rootRef, isDimmed } = useSectionDim(0.6);
const isRocketHover = ref(false);

const dimClass = computed(() =>
  isDimmed.value || isRocketHover.value ? "opacity-80" : "opacity-100"
);
</script>

<template>
  <section
    id="experience"
    ref="rootRef"
    :class="dimClass"
    class="relative bg-slate-900/60 py-24 transition-opacity duration-300"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-semibold mb-10">📈 Experience</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- ABM.CO -->
        <InteractiveCard
          title="Frontend Developer — ABM.CO"
          subtitle="Jan 2024 – Nov 2024 · Nuxt, Tailwind, Pinia, Vue"
          :tags="['Nuxt.js', 'Tailwind', 'Pinia', 'Vue 3', 'JavaScript']"
          :image="AbmcoLogo"
        >
          <template #summary>
            Psychologists’ platform + LMS system with advanced filters, reusable
            components, and responsive layouts.
          </template>

          <ul class="list-disc ml-5 space-y-1">
            <li>
              Built and maintained responsive pages for psychologists’ platform
              with advanced filtering (slots, cities, problem types).
            </li>
            <li>
              Ensured cross-browser compatibility and mobile-first design for
              consistent UX.
            </li>
            <li>
              Managed synchronous UI changes with Pinia, ensuring smooth and
              consistent state management.
            </li>
            <li>
              Created reusable card components for seminars and psychologists
              with conditional rendering for paid/free services.
            </li>
            <li>
              Built composables for API data fetching using Promises, reducing
              code complexity and improving maintainability.
            </li>
            <li>
              Developed responsive LMS system: sidebar navigation + meal plan
              page with weekly/monthly data views.
            </li>
            <li>
              Optimized page load times by ~20% through performance improvements
              and efficient data fetching.
            </li>
            <li>
              Collaborated with designers to implement UI/UX mockups, reaching
              95% design accuracy.
            </li>
            <li>
              Debugged and resolved frontend issues, improving application
              stability.
            </li>
            <li>
              Participated in Agile sprints: daily stand-ups, sprint planning,
              reviews, and retrospectives.
            </li>
          </ul>
        </InteractiveCard>

        <!-- China Mobile International -->
        <InteractiveCard
          title="Data Analyst — China Mobile International"
          subtitle="Apr 2025 – Jun 2025 · Python, SQL, Pandas, Excel"
          :tags="['Forecasting', 'SQL Optimization', 'Power BI']"
          :image="CmiLogo"
        >
          <template #summary>
            Automated ABC classification, customer feedback analysis,
            forecasting, reporting.
          </template>

          <ul class="list-disc ml-5 space-y-1">
            <li>
              <strong>Customer Feedback Analysis</strong>: built Python NLP
              model to classify NPS/social feedback, flagged churn drivers; cut
              churn by 8% in pilot market.
            </li>
            <li>
              <strong>SQL Reporting</strong>: designed cohort retention + ARPU
              reports with window functions/CTEs; reduced report runtime from 40
              → 12 minutes.
            </li>
            <li>
              <strong>Demand Forecasting</strong>: implemented moving average +
              ARIMA models to predict network traffic; prevented overload in
              peak hours.
            </li>
            <li>
              <strong>A/B Testing</strong>: ran t-tests & confidence intervals
              on push campaigns; proved 6% lift in conversions → scaled to full
              base.
            </li>
            <li>
              <strong>Dashboards</strong>: interactive churn/ARPU/retention/NPS
              dashboards in Power BI + Excel; adopted in weekly exec reviews.
            </li>
            <li>
              <strong>Data Quality</strong>: Python + SQL pipeline for
              duplicates/missing/anomalies; raised reporting accuracy by 15%.
            </li>
            <li>
              <strong>Cross-functional</strong>: collaborated with
              marketing/product on churn & campaign insights → UX and strategy
              improvements.
            </li>
            <li>
              <strong>Automation</strong>: Python scripts to validate Excel
              business rules; removed manual errors, saving analyst hours.
            </li>
            <li>
              <strong>Executive Presentations</strong>: built KPI decks with
              visualizations for regional investment decisions.
            </li>
          </ul>
        </InteractiveCard>
      </div>

      <!-- Tech stack overview -->
      <div class="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>Frontend Core</strong>: Vue 3 (Composition API), Nuxt 3,
          Pinia, Tailwind<br />
          <strong>Patterns</strong>: composables, reusable components, reactive
          layouts
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>API & Auth</strong>: REST, Axios interceptors, JWT in
          sessionStorage<br />
          <strong>Async</strong>: cancellation, retries, memoization,
          debounce/throttle
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>UI/UX</strong>: Responsive design, modal flows,
          accessibility-first<br />
          <strong>Validation</strong>: Yup / Vee-Validate, role-aware components
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>Architecture</strong>: Pinia store design (normalized state,
          modular stores), API-driven layouts<br />
          <strong>Patterns</strong>: Scoped reactivity, middleware for roles,
          centralized auth, observer & decorator usage
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>Deployment & Ops</strong>: Nginx server maintenance, project
          uploads, env configs<br />
          <strong>Collaboration</strong>: Git flow, PR hygiene, Agile sprints &
          retros
        </div>

        <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
          <strong>Performance</strong>: CWV, lazy routes, code-split, hydration
          strategy<br />
          <strong>Extras</strong>: Three.js visuals, animated countdowns,
          navigator.share, map embeds
        </div>
      </div>

      <!-- Rocket area -->
      <div
        class="relative mt-8 rounded-2xl overflow-hidden"
        @mouseenter="isRocketHover = true"
        @mouseleave="isRocketHover = false"
      >
        <ClientOnly>
          <ExperienceRocket />
        </ClientOnly>

        <!-- Scroll-safe gutters -->
        <div
          class="pointer-events-auto absolute inset-y-0 left-0 w-10 md:w-14 bg-gradient-to-r from-white/80 to-white/0 z-20"
        />
        <div
          class="pointer-events-auto absolute inset-y-0 right-0 w-10 md:w-14 bg-gradient-to-l from-white/80 to-white/0 z-20"
        />

        <p
          class="absolute bottom-3 right-4 text-xs text-slate-100/70 select-none z-30"
        >
          Tip: move to edges to scroll • click rocket for boost my Career level!
        </p>
      </div>
    </div>
  </section>
</template>
