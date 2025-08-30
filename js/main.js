import { app as u } from "../../../scripts/app.js";
import { defineComponent as c, ref as i, watch as p, onMounted as d, onBeforeUnmount as v, createElementBlock as _, openBlock as g, createElementVNode as f } from "vue";
import { useI18n as b } from "vue-i18n";
const w = /* @__PURE__ */ c({
  __name: "App",
  setup(a) {
    const { t: n } = b(), e = i(), r = i(), s = i(!1), l = i(null), m = () => {
      var o;
      if ((o = e.value) != null && o.parentElement) {
        const t = e.value.parentElement;
        s.value ? t.classList.remove("h-full") : t.classList.add("h-full");
      }
    };
    return p(s, () => {
      m();
    }), d(async () => {
      console.log(n("audiomass.title")), e.value && (m(), l.value = new MutationObserver((o) => {
        o.forEach((t) => {
          t.type === "attributes" && t.attributeName === "maximized" && (s.value = t.target.getAttribute("maximized") === "true");
        });
      }), l.value.observe(e.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), v(() => {
      var o;
      (o = e.value) != null && o.parentElement && e.value.parentElement.classList.remove("h-full"), l.value && (l.value.disconnect(), l.value = null);
    }), (o, t) => (g(), _("div", {
      ref_key: "viewerContentRef",
      ref: e,
      class: "flex w-full h-full"
    }, [
      f("div", {
        ref_key: "mainContentRef",
        ref: r,
        class: "flex-1 relative"
      }, t[0] || (t[0] = [
        f("iframe", {
          src: "/audiomass",
          class: "demo-iframe h-full w-full"
        }, null, -1)
      ]), 512)
    ], 512));
  }
}), x = (a, n) => {
  const e = a.__vccOpts || a;
  for (const [r, s] of n)
    e[r] = s;
  return e;
}, y = /* @__PURE__ */ x(w, [["__scopeId", "data-v-d5503afb"]]), { ComfyButton: h } = window.comfyAPI.button;
u.registerExtension({
  name: "ComfyUI.AudioMass.TopMenu",
  setup() {
    var n;
    function a() {
      var e;
      (e = u.extensionManager) == null || e.dialog.showExtensionDialog({
        key: "global-audiomass",
        title: "ComfyUI AudioMass",
        component: y,
        dialogComponentProps: {
          style: "width: 80vw; height: 80vh;",
          maximizable: !0
        }
      });
    }
    (n = u.menu) == null || n.settingsGroup.append(
      new h({
        icon: "image",
        tooltip: "comfyui-audiomass",
        content: "AudioMass",
        action: a
      })
    );
  }
});
