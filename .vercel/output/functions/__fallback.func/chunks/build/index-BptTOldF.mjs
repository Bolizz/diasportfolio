import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, ref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'gsap';

const _imports_0 = publicAssetsURL("/images/dias.jpg");
function useSectionDim(threshold = 0.6) {
  const rootRef = ref(null);
  const isDimmed = ref(false);
  return { rootRef, isDimmed };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    const { rootRef, isDimmed } = useSectionDim(0.6);
    const dimClass = computed(
      () => isDimmed.value ? "opacity-60" : "opacity-100"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        ref_key: "rootRef",
        ref: rootRef,
        class: [unref(dimClass), "bg-slate-50 text-slate-800"]
      }, _attrs))}><div class="mx-auto max-w-6xl px-6 py-14 md:py-16"><div class="grid gap-10 md:grid-cols-2 md:gap-12 items-start"><div><div class="relative inline-block"><img${ssrRenderAttr("src", _imports_0)} alt="Photo of Dias Akimbay" class="h-28 w-28 md:h-32 md:w-32 rounded-full ring-8 ring-white shadow-md object-cover object-top"></div><h1 class="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight"> Dias Akimbay </h1><p class="mt-2 text-lg font-semibold text-primary-600"> Robotics Engineer </p><p class="text-slate-600">Nazarbayev University</p></div><div><div class="flex items-center gap-3"><div class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 ring-1 ring-primary-100"> 🚀 </div><h2 class="text-2xl font-bold">About me</h2></div><div class="mt-4 space-y-4 leading-7 text-slate-700"><p> I am a robotics engineer passionate about building robots from scratch — from concept and design to full functional systems.My name is Dias Akimbay, a 2025 graduate of Nazarbayev University with a major in Robotics Engineering. </p><p> Currently, I am working with my PI on the development of an in-pipe robot for inspection and maintenance. Alongside this, we are building educational robots for schools across Kazakhstan — integrating hands-on robotics courses to inspire future engineers. </p><p> My personal research interest is in soft robotics. I am currently developing a continuum manipulator and designing its actuation system to explore more adaptive and flexible robotic mechanisms. </p><p> Outside of engineering, I enjoy Photoshop and calligraphy. My life philosophy: Be resilient to failures until success is achieved. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutMe.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AboutMe = Object.assign(_sfc_main$8, { __name: "AboutMe" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TechStack",
  __ssrInlineRender: true,
  setup(__props) {
    const { rootRef, isDimmed } = useSectionDim(0.6);
    const dimClass = computed(
      () => isDimmed.value ? "opacity-60" : "opacity-100"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "stack",
        ref_key: "rootRef",
        ref: rootRef,
        class: "relative overflow-hidden bg-slate-900/60 py-24"
      }, _attrs))}><div class="${ssrRenderClass([unref(dimClass), "container mx-auto px-6 relative z-10 transition-opacity duration-300"])}"><h2 class="text-3xl md:text-4xl font-semibold mb-12">🛠 Tech Stack</h2><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Core Robotics</h3><ul class="space-y-1 text-slate-200"><li>SolidWorks (CAD), Mechanical Design</li><li>3D Printing &amp; Prototyping (UltiMaker, Bambu Lab)</li><li>Embedded &amp; Teleop (ESP32, 433MHz RF, nRF24L01)</li></ul></div><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Software</h3><ul class="space-y-1 text-slate-200"><li>Python, C/C++</li><li>OpenCV, basic ML for perception</li><li>MATLAB (analysis)</li></ul></div><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Sensing &amp; Analysis</h3><ul class="space-y-1 text-slate-200"><li>OptiTrack motion capture</li><li>Data logging &amp; calibration</li><li>Experiment design &amp; evaluation</li></ul></div><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Control &amp; Systems</h3><ul class="space-y-1 text-slate-200"><li>Teleoperation UX &amp; safety</li><li>Real-time comms &amp; latency tuning</li><li>Mechanism actuation &amp; testing</li></ul></div><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Publication &amp; Team</h3><ul class="space-y-1 text-slate-200"><li>IEEE writing &amp; figures</li><li>Cross-lab collaboration</li><li>Mentoring (ISSAI Summer Program)</li></ul></div><div class="glass p-6 rounded-2xl"><h3 class="text-xl font-semibold mb-3">Extras</h3><ul class="space-y-1 text-slate-200"><li>Mixed Reality prototyping (HoloLens)</li><li>Photoshop, Calligraphy</li><li>Git, VS Code</li></ul></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TechStack.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const TechStack = Object.assign(_sfc_main$7, { __name: "TechStack" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "InteractiveCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    tags: {},
    image: {},
    openOnHover: { type: Boolean, default: true }
  },
  setup(__props) {
    const expanded = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden transition-[transform,box-shadow,background-color,opacity] duration-300 will-change-transform" }, _attrs))} data-v-8dd4c278>`);
      if (_ctx.image) {
        _push(`<div class="h-40 w-full overflow-hidden" data-v-8dd4c278><img${ssrRenderAttr("src", _ctx.image)} alt="" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-v-8dd4c278></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<header class="p-6" data-v-8dd4c278><div class="flex items-start justify-between" data-v-8dd4c278><div data-v-8dd4c278><h3 class="text-lg font-semibold leading-tight" data-v-8dd4c278>${ssrInterpolate(_ctx.title)}</h3>`);
      if (_ctx.subtitle) {
        _push(`<p class="mt-1 text-sm text-gray-900" data-v-8dd4c278>${ssrInterpolate(_ctx.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600/20 text-primary-600 transition-transform duration-300 group-hover:scale-110" data-v-8dd4c278> ↗ </div></div>`);
      if (_ctx.$slots.summary) {
        _push(`<p class="mt-3 text-gray-900" data-v-8dd4c278>`);
        ssrRenderSlot(_ctx.$slots, "summary", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.tags?.length) {
        _push(`<div class="mt-4 flex flex-wrap gap-2" data-v-8dd4c278><!--[-->`);
        ssrRenderList(_ctx.tags, (t) => {
          _push(`<span class="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-900" data-v-8dd4c278>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div style="${ssrRenderStyle(expanded.value ? null : { display: "none" })}" class="px-6 pb-6 overflow-hidden" data-v-8dd4c278><div class="mt-2 border-t border-white/10 pt-4 text-gray-900 leading-relaxed" data-v-8dd4c278>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="mt-4 flex gap-3" data-v-8dd4c278>`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InteractiveCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const InteractiveCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-8dd4c278"]]), { __name: "InteractiveCard" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { rootRef, isDimmed } = useSectionDim(0.6);
    const dimClass = computed(
      () => isDimmed.value ? "opacity-85" : "opacity-100"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        ref_key: "rootRef",
        ref: rootRef,
        class: [dimClass.value, "container mx-auto px-6 py-24 transition-opacity duration-300"]
      }, _attrs))}><h2 class="text-3xl text-gray-900 md:text-4xl font-semibold mb-10"> 💼 Projects </h2><div class="grid md:grid-cols-2 gap-8 text-gray-900">`);
      _push(ssrRenderComponent(InteractiveCard, {
        title: "Hybrid In-Pipe Inspection Robot",
        subtitle: "Chassis actuation, teleop, motion capture",
        tags: ["Mechanical", "Teleoperation", "Perception"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lab-built in-pipe robot for smart inspection and maintenance in constrained environments. `);
          } else {
            return [
              createTextVNode(" Lab-built in-pipe robot for smart inspection and maintenance in constrained environments. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Designed chassis &amp; actuation; integrated ESP32-based teleop (433MHz RF/nRF24L01); logged motion with OptiTrack; contributed to AI-assisted defect detection pipeline. `);
          } else {
            return [
              createTextVNode(" Designed chassis & actuation; integrated ESP32-based teleop (433MHz RF/nRF24L01); logged motion with OptiTrack; contributed to AI-assisted defect detection pipeline. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(InteractiveCard, {
        title: "Continuum Manipulator (Cable-Driven)",
        subtitle: "Soft robotics | tensegrity-inspired",
        tags: ["CAD", "Additive Manufacturing", "Soft Robotics"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sub-segment design &amp; fabrication of a cable-driven manipulator for compliant manipulation. `);
          } else {
            return [
              createTextVNode(" Sub-segment design & fabrication of a cable-driven manipulator for compliant manipulation. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Iterated from tensegrity concept to PLA/TPU printed components; studied stability and controllability; preparing for integrated actuation and sensing. `);
          } else {
            return [
              createTextVNode(" Iterated from tensegrity concept to PLA/TPU printed components; studied stability and controllability; preparing for integrated actuation and sensing. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(InteractiveCard, {
        title: "Virtual Keyboard via Hand Gestures",
        subtitle: "OpenCV + Python",
        tags: ["Computer Vision", "HCI"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Real-time hand tracking to type without a physical keyboard. `);
          } else {
            return [
              createTextVNode(" Real-time hand tracking to type without a physical keyboard. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Implemented gesture detection and debounced keystroke mapping; tuned robustness across lighting conditions. `);
          } else {
            return [
              createTextVNode(" Implemented gesture detection and debounced keystroke mapping; tuned robustness across lighting conditions. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(InteractiveCard, {
        title: "Gesture-Controlled LED Switching",
        subtitle: "OpenCV + Embedded",
        tags: ["CV", "Embedded", "IoT"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Simple HCI pipeline controlling LED on/off via tracked gestures. `);
          } else {
            return [
              createTextVNode(" Simple HCI pipeline controlling LED on/off via tracked gestures. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Bridged CV outputs to microcontroller I/O; demonstrated end-to-end latency-aware loop for real-time control. `);
          } else {
            return [
              createTextVNode(" Bridged CV outputs to microcontroller I/O; demonstrated end-to-end latency-aware loop for real-time control. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(InteractiveCard, {
        title: "Real-Time Color Correction for Color-Blind Users",
        subtitle: "Microsoft HoloLens (Gen 1) · C#",
        tags: ["Mixed Reality", "Signal Processing", "Accessibility"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` LMS-space adaptive filtering for improved color discrimination. `);
          } else {
            return [
              createTextVNode(" LMS-space adaptive filtering for improved color discrimination. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Implemented pipeline on HoloLens Gen 1; tested interactive tuning to personalize corrections for daltonian users. `);
          } else {
            return [
              createTextVNode(" Implemented pipeline on HoloLens Gen 1; tested interactive tuning to personalize corrections for daltonian users. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Projects = Object.assign(_sfc_main$5, { __name: "Projects" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    tags: {},
    image: {},
    openOnHover: { type: Boolean, default: true }
  },
  setup(__props) {
    const expanded = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden transition-[transform,box-shadow,background-color,opacity] duration-300 will-change-transform" }, _attrs))} data-v-e8e0e71f>`);
      if (_ctx.image) {
        _push(`<div class="h-40 w-full overflow-hidden" data-v-e8e0e71f><img${ssrRenderAttr("src", _ctx.image)} alt="" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-v-e8e0e71f></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<header class="p-6" data-v-e8e0e71f><div class="flex items-start justify-between" data-v-e8e0e71f><div data-v-e8e0e71f><h3 class="text-lg font-semibold leading-tight text-white" data-v-e8e0e71f>${ssrInterpolate(_ctx.title)}</h3>`);
      if (_ctx.subtitle) {
        _push(`<p class="mt-1 text-sm text-white/80" data-v-e8e0e71f>${ssrInterpolate(_ctx.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" data-v-e8e0e71f> ↗ </div></div>`);
      if (_ctx.$slots.summary) {
        _push(`<p class="mt-3 text-white/90" data-v-e8e0e71f>`);
        ssrRenderSlot(_ctx.$slots, "summary", {}, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.tags?.length) {
        _push(`<div class="mt-4 flex flex-wrap gap-2" data-v-e8e0e71f><!--[-->`);
        ssrRenderList(_ctx.tags, (t) => {
          _push(`<span class="rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/90" data-v-e8e0e71f>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div style="${ssrRenderStyle(expanded.value ? null : { display: "none" })}" class="px-6 pb-6 overflow-hidden" data-v-e8e0e71f><div class="mt-2 border-t border-white/10 pt-4 text-white/95 leading-relaxed" data-v-e8e0e71f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="mt-4 flex gap-3" data-v-e8e0e71f>`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ExperienceCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-e8e0e71f"]]), { __name: "ExperienceCard" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    const { rootRef, isDimmed } = useSectionDim(0.6);
    const isRocketHover = ref(false);
    const dimClass = computed(
      () => isDimmed.value || isRocketHover.value ? "opacity-80" : "opacity-100"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        ref_key: "rootRef",
        ref: rootRef,
        class: [dimClass.value, "relative bg-slate-900/60 py-24 transition-opacity duration-300"]
      }, _attrs))}><div class="container mx-auto px-6"><h2 class="text-3xl md:text-4xl font-semibold mb-10">📈 Experience</h2><div class="grid md:grid-cols-2 gap-8">`);
      _push(ssrRenderComponent(ExperienceCard, {
        title: "Research Assistant — Advanced Robotics & Mechatronics Lab",
        subtitle: "2022 – Present",
        tags: [
          "In-Pipe Robot",
          "SolidWorks",
          "3D Printing",
          "ESP32",
          "Teleop",
          "OptiTrack"
        ]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hybrid mobile in-pipe robot for inspection &amp; maintenance; perception + teleop. `);
          } else {
            return [
              createTextVNode(" Hybrid mobile in-pipe robot for inspection & maintenance; perception + teleop. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="list-disc ml-5 space-y-1"${_scopeId}><li${_scopeId}> Designed &amp; prototyped in-pipe robot mechanics (SolidWorks); printed parts (UltiMaker, Bambu Lab) and performed assembly. </li><li${_scopeId}> Implemented teleoperation (ESP32, radio controller; 433MHz RF / nRF24L01 modules) and tested control latency &amp; range. </li><li${_scopeId}> Collected and analyzed motion data with OptiTrack to improve stability and traversability in bends/junctions. </li><li${_scopeId}> Co-authored IEEE Access papers on in-pipe inspection robots and AI-powered defect detection. </li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "list-disc ml-5 space-y-1" }, [
                createVNode("li", null, " Designed & prototyped in-pipe robot mechanics (SolidWorks); printed parts (UltiMaker, Bambu Lab) and performed assembly. "),
                createVNode("li", null, " Implemented teleoperation (ESP32, radio controller; 433MHz RF / nRF24L01 modules) and tested control latency & range. "),
                createVNode("li", null, " Collected and analyzed motion data with OptiTrack to improve stability and traversability in bends/junctions. "),
                createVNode("li", null, " Co-authored IEEE Access papers on in-pipe inspection robots and AI-powered defect detection. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ExperienceCard, {
        title: "Research Assistant — Astana Lab for Robotic & Intelligent Systems",
        subtitle: "Jun 2022 – Sep 2022",
        tags: ["3D Modelling", "Computer Vision", "Electronics"]
      }, {
        summary: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Foundations in CV + electronics for real-world robotics demos. `);
          } else {
            return [
              createTextVNode(" Foundations in CV + electronics for real-world robotics demos. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="list-disc ml-5 space-y-1"${_scopeId}><li${_scopeId}> Built CV prototypes and electronics rigs, sharpening design-to-demo iteration speed. </li></ul>`);
          } else {
            return [
              createVNode("ul", { class: "list-disc ml-5 space-y-1" }, [
                createVNode("li", null, " Built CV prototypes and electronics rigs, sharpening design-to-demo iteration speed. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6"><h3 class="text-xl font-semibold mb-4">📝 Publications</h3><ul class="list-disc ml-5 space-y-2 text-slate-200/95"><li><a href="https://ieeexplore.ieee.org/document/10649586" target="_blank" class="hover:text-gray-400 hover:underline"><strong>Smart Pipe Inspection Robot with In-Chassis Motor Actuation &amp; AI Defect Detection</strong>, IEEE Access (Aug 27, 2024).</a></li><li><a href="https://ieeexplore.ieee.org/document/11159233" target="_blank" class="hover:text-gray-400 hover:underline"><strong>A Novel Hybrid Robot for In-Pipe Maintenance and Inspection</strong>, IEEE Access (Sep 11, 2025).</a></li><li><strong>Deep Learning-Based Hole Detection and Localization for Autonomous Pipe Inspection</strong>, Frontiers in Robotics &amp; AI — under review. </li><li><strong>Mixed Reality Based In-Pipe Inspection</strong>, Frontiers in Robotics &amp; AI — under review. </li></ul></div><div class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6"><h3 class="text-xl font-semibold mb-3">🎓 Mentoring</h3><p class="text-slate-200/95"> Trained 4 high-school students in CAD, mechanical design, and prototyping during the ISSAI Summer Research Program (2025). </p></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Experience = Object.assign(_sfc_main$3, { __name: "Experience" });
function useReveal(targets, opts = {}) {
  opts.y ?? 40;
  opts.duration ?? 0.9;
  opts.stagger ?? 0.08;
  opts.once ?? true;
  opts.markers ?? false;
}
const GmailIcon = publicAssetsURL("/images/gmail.svg");
const LinkedinIcon = publicAssetsURL("/images/linkedin.svg");
const TelegramIcon = publicAssetsURL("/images/telegram.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactIcon",
  __ssrInlineRender: true,
  props: {
    kind: {},
    href: {},
    label: {},
    external: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.href,
        "aria-label": _ctx.label,
        class: "group block w-full rounded-xl border border-slate-700/40 p-4 transition-[transform,border-color,box-shadow] duration-200 hover:border-sky-400/50 hover:shadow-lg",
        target: _ctx.external ? "_blank" : void 0,
        rel: "noopener"
      }, _attrs))} data-v-f9350667><div class="flex items-center justify-center" data-v-f9350667><img${ssrRenderAttr("src", unref(iconSrc))}${ssrRenderAttr("alt", _ctx.label)} class="icon-size transition-transform duration-200 group-hover:scale-105" data-v-f9350667></div><p class="mt-2 text-center text-gray-900 text-sm font-medium" data-v-f9350667>${ssrInterpolate(_ctx.label)}</p></a>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactIcon = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-f9350667"]]), { __name: "ContactIcon" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    useReveal(".reveal", { y: 34, stagger: 0.06, once: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "container mx-auto px-6 py-24"
      }, _attrs))}><h2 class="text-3xl text-gray-900 md:text-4xl font-semibold mb-6"> 📞 Contact </h2><div class="reveal grid grid-cols-1 sm:grid-cols-3 gap-4">`);
      _push(ssrRenderComponent(ContactIcon, {
        kind: "email",
        href: "mailto:dias.akimbay@nu.edu.kz",
        label: "Email",
        external: false
      }, null, _parent));
      _push(ssrRenderComponent(ContactIcon, {
        kind: "linkedin",
        href: "https://www.linkedin.com/in/dias-akimbay-68066125a/",
        label: "LinkedIn"
      }, null, _parent));
      _push(ssrRenderComponent(ContactIcon, {
        kind: "telegram",
        href: "https://t.me/akimbaydias",
        label: "Telegram"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = Object.assign(_sfc_main$1, { __name: "Contact" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(AboutMe, null, null, _parent));
      _push(ssrRenderComponent(TechStack, null, null, _parent));
      _push(`<section id="projects">`);
      _push(ssrRenderComponent(Projects, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(Experience, null, null, _parent));
      _push(`<section id="contact">`);
      _push(ssrRenderComponent(Contact, null, null, _parent));
      _push(`</section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BptTOldF.mjs.map
