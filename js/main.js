import { app as r } from "../../../scripts/app.js";
import { defineComponent as f, ref as i, watch as c, onMounted as p, onBeforeUnmount as d, createElementBlock as v, openBlock as _, createElementVNode as m } from "vue";
const b = /* @__PURE__ */ f({
  __name: "App",
  setup(s) {
    const e = i(), o = i(), l = i(!1), a = i(null), u = () => {
      var n;
      if ((n = e.value) != null && n.parentElement) {
        const t = e.value.parentElement;
        l.value ? t.classList.remove("h-full") : t.classList.add("h-full");
      }
    };
    return c(l, () => {
      u();
    }), p(async () => {
      e.value && (u(), a.value = new MutationObserver((n) => {
        n.forEach((t) => {
          t.type === "attributes" && t.attributeName === "maximized" && (l.value = t.target.getAttribute("maximized") === "true");
        });
      }), a.value.observe(e.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), d(() => {
      var n;
      (n = e.value) != null && n.parentElement && e.value.parentElement.classList.remove("h-full"), a.value && (a.value.disconnect(), a.value = null);
    }), (n, t) => (_(), v("div", {
      ref_key: "viewerContentRef",
      ref: e,
      class: "flex w-full h-full"
    }, [
      m("div", {
        ref_key: "mainContentRef",
        ref: o,
        class: "flex-1 relative"
      }, t[0] || (t[0] = [
        m("iframe", {
          src: "/audiomass",
          class: "demo-iframe h-full w-full"
        }, null, -1)
      ]), 512)
    ], 512));
  }
}), g = (s, e) => {
  const o = s.__vccOpts || s;
  for (const [l, a] of e)
    o[l] = a;
  return o;
}, w = /* @__PURE__ */ g(b, [["__scopeId", "data-v-977b9d19"]]), { ComfyButton: x } = window.comfyAPI.button;
r.registerExtension({
  name: "ComfyUI.AudioMass.TopMenu",
  setup() {
    var e;
    function s() {
      var o;
      (o = r.extensionManager) == null || o.dialog.showExtensionDialog({
        key: "global-audiomass",
        title: "ComfyUI AudioMass",
        component: w,
        dialogComponentProps: {
          style: "width: 80vw; height: 80vh;",
          maximizable: !0
        }
      });
    }
    (e = r.menu) == null || e.settingsGroup.append(
      new x({
        icon: "image",
        tooltip: "comfyui-audiomass",
        content: "AudioMass",
        action: s
      })
    );
  }
});
