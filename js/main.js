import { app as Ea } from "../../../scripts/app.js";
import { api as ri } from "../../../scripts/api.js";
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ri(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, Fn = [], Dt = () => {
}, Gc = () => !1, yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fi = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, ji = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xc = Object.prototype.hasOwnProperty, ce = (e, t) => Xc.call(e, t), X = Array.isArray, jn = (e) => _o(e) === "[object Map]", El = (e) => _o(e) === "[object Set]", q = (e) => typeof e == "function", Le = (e) => typeof e == "string", qt = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", Tl = (e) => (Ee(e) || q(e)) && q(e.then) && q(e.catch), Cl = Object.prototype.toString, _o = (e) => Cl.call(e), Jc = (e) => _o(e).slice(8, -1), Ol = (e) => _o(e) === "[object Object]", Ui = (e) => Le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ Ri(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), So = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, qc = /-(\w)/g, pt = So(
  (e) => e.replace(qc, (t, n) => n ? n.toUpperCase() : "")
), Zc = /\B([A-Z])/g, Pn = So(
  (e) => e.replace(Zc, "-$1").toLowerCase()
), Eo = So((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fo = So(
  (e) => e ? `on${Eo(e)}` : ""
), ln = (e, t) => !Object.is(e, t), jo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, oi = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Qc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ed = (e) => {
  const t = Le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ta;
const To = () => Ta || (Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vi(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Le(r) ? od(r) : Vi(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Le(e) || Ee(e))
    return e;
}
const td = /;(?![^(]*\))/g, nd = /:([^]+)/, rd = /\/\*[^]*?\*\//g;
function od(e) {
  const t = {};
  return e.replace(rd, "").split(td).forEach((n) => {
    if (n) {
      const r = n.split(nd);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Bn(e) {
  let t = "";
  if (Le(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const r = Bn(e[n]);
      r && (t += r + " ");
    }
  else if (Ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const id = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ad = /* @__PURE__ */ Ri(id);
function Ll(e) {
  return !!e || e === "";
}
const wl = (e) => !!(e && e.__v_isRef === !0), gr = (e) => Le(e) ? e : e == null ? "" : X(e) || Ee(e) && (e.toString === Cl || !q(e.toString)) ? wl(e) ? gr(e.value) : JSON.stringify(e, Pl, 2) : String(e), Pl = (e, t) => wl(t) ? Pl(e, t.value) : jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], i) => (n[Uo(r, i) + " =>"] = o, n),
    {}
  )
} : El(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Uo(n))
} : qt(t) ? Uo(t) : Ee(t) && !X(t) && !Ol(t) ? String(t) : t, Uo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rt;
class $l {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = rt, !t && rt && (this.index = (rt.scopes || (rt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = rt;
      try {
        return rt = this, t();
      } finally {
        rt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = rt, rt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (rt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function sd(e) {
  return new $l(e);
}
function ld() {
  return rt;
}
let ge;
const Vo = /* @__PURE__ */ new WeakSet();
class kl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rt && rt.active && rt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vo.has(this) && (Vo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Nl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ca(this), Al(this);
    const t = ge, n = Et;
    ge = this, Et = !0;
    try {
      return this.fn();
    } finally {
      xl(this), ge = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bi(t);
      this.deps = this.depsTail = void 0, Ca(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ii(this) && this.run();
  }
  get dirty() {
    return ii(this);
  }
}
let Il = 0, ir, ar;
function Nl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ar, ar = e;
    return;
  }
  e.next = ir, ir = e;
}
function Hi() {
  Il++;
}
function Wi() {
  if (--Il > 0)
    return;
  if (ar) {
    let t = ar;
    for (ar = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ir; ) {
    let t = ir;
    for (ir = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Al(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xl(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Bi(r), ud(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Dl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Dl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === br) || (e.globalVersion = br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ii(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ge, r = Et;
  ge = e, Et = !0;
  try {
    Al(e);
    const o = e.fn(e._value);
    (t.version === 0 || ln(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ge = n, Et = r, xl(e), e.flags &= -3;
  }
}
function Bi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Bi(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ud(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = !0;
const Ml = [];
function Xt() {
  Ml.push(Et), Et = !1;
}
function Jt() {
  const e = Ml.pop();
  Et = e === void 0 ? !0 : e;
}
function Ca(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ge;
    ge = void 0;
    try {
      t();
    } finally {
      ge = n;
    }
  }
}
let br = 0;
class cd {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ki {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !Et || ge === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ge)
      n = this.activeLink = new cd(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, Rl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, br++, this.notify(t);
  }
  notify(t) {
    Hi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wi();
    }
  }
}
function Rl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Rl(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ai = /* @__PURE__ */ new WeakMap(), Cn = Symbol(
  ""
), si = Symbol(
  ""
), vr = Symbol(
  ""
);
function Ue(e, t, n) {
  if (Et && ge) {
    let r = ai.get(e);
    r || ai.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Ki()), o.map = r, o.key = n), o.track();
  }
}
function Yt(e, t, n, r, o, i) {
  const a = ai.get(e);
  if (!a) {
    br++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Hi(), t === "clear")
    a.forEach(s);
  else {
    const l = X(e), u = l && Ui(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((d, f) => {
        (f === "length" || f === vr || !qt(f) && f >= c) && s(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), u && s(a.get(vr)), t) {
        case "add":
          l ? u && s(a.get("length")) : (s(a.get(Cn)), jn(e) && s(a.get(si)));
          break;
        case "delete":
          l || (s(a.get(Cn)), jn(e) && s(a.get(si)));
          break;
        case "set":
          jn(e) && s(a.get(Cn));
          break;
      }
  }
  Wi();
}
function In(e) {
  const t = le(e);
  return t === e ? t : (Ue(t, "iterate", vr), Tt(e) ? t : t.map(Je));
}
function Yi(e) {
  return Ue(e = le(e), "iterate", vr), e;
}
const dd = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ho(this, Symbol.iterator, Je);
  },
  concat(...e) {
    return In(this).concat(
      ...e.map((t) => X(t) ? In(t) : t)
    );
  },
  entries() {
    return Ho(this, "entries", (e) => (e[1] = Je(e[1]), e));
  },
  every(e, t) {
    return Ut(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ut(this, "filter", e, t, (n) => n.map(Je), arguments);
  },
  find(e, t) {
    return Ut(this, "find", e, t, Je, arguments);
  },
  findIndex(e, t) {
    return Ut(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ut(this, "findLast", e, t, Je, arguments);
  },
  findLastIndex(e, t) {
    return Ut(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ut(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wo(this, "includes", e);
  },
  indexOf(...e) {
    return Wo(this, "indexOf", e);
  },
  join(e) {
    return In(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Wo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ut(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xn(this, "pop");
  },
  push(...e) {
    return Xn(this, "push", e);
  },
  reduce(e, ...t) {
    return Oa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Oa(this, "reduceRight", e, t);
  },
  shift() {
    return Xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ut(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xn(this, "splice", e);
  },
  toReversed() {
    return In(this).toReversed();
  },
  toSorted(e) {
    return In(this).toSorted(e);
  },
  toSpliced(...e) {
    return In(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xn(this, "unshift", e);
  },
  values() {
    return Ho(this, "values", Je);
  }
};
function Ho(e, t, n) {
  const r = Yi(e), o = r[t]();
  return r !== e && !Tt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const fd = Array.prototype;
function Ut(e, t, n, r, o, i) {
  const a = Yi(e), s = a !== e && !Tt(e), l = a[t];
  if (l !== fd[t]) {
    const d = l.apply(e, i);
    return s ? Je(d) : d;
  }
  let u = n;
  a !== e && (s ? u = function(d, f) {
    return n.call(this, Je(d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = l.call(a, u, r);
  return s && o ? o(c) : c;
}
function Oa(e, t, n, r) {
  const o = Yi(e);
  let i = n;
  return o !== e && (Tt(e) ? n.length > 3 && (i = function(a, s, l) {
    return n.call(this, a, s, l, e);
  }) : i = function(a, s, l) {
    return n.call(this, a, Je(s), l, e);
  }), o[t](i, ...r);
}
function Wo(e, t, n) {
  const r = le(e);
  Ue(r, "iterate", vr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Ji(n[0]) ? (n[0] = le(n[0]), r[t](...n)) : o;
}
function Xn(e, t, n = []) {
  Xt(), Hi();
  const r = le(e)[t].apply(e, n);
  return Wi(), Jt(), r;
}
const pd = /* @__PURE__ */ Ri("__proto__,__v_isRef,__isVue"), Fl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qt)
);
function md(e) {
  qt(e) || (e = String(e));
  const t = le(this);
  return Ue(t, "has", e), t.hasOwnProperty(e);
}
class jl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (o ? i ? Cd : Wl : i ? Hl : Vl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = X(t);
    if (!o) {
      let l;
      if (a && (l = dd[n]))
        return l;
      if (n === "hasOwnProperty")
        return md;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Re(t) ? t : r
    );
    return (qt(n) ? Fl.has(n) : pd(n)) || (o || Ue(t, "get", n), i) ? s : Re(s) ? a && Ui(n) ? s : s.value : Ee(s) ? o ? Gi(s) : Co(s) : s;
  }
}
class Ul extends jl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = wn(i);
      if (!Tt(r) && !wn(r) && (i = le(i), r = le(r)), !X(t) && Re(i) && !Re(r))
        return l ? !1 : (i.value = r, !0);
    }
    const a = X(t) && Ui(n) ? Number(n) < t.length : ce(t, n), s = Reflect.set(
      t,
      n,
      r,
      Re(t) ? t : o
    );
    return t === le(o) && (a ? ln(r, i) && Yt(t, "set", n, r) : Yt(t, "add", n, r)), s;
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Yt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!qt(n) || !Fl.has(n)) && Ue(t, "has", n), r;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      X(t) ? "length" : Cn
    ), Reflect.ownKeys(t);
  }
}
class hd extends jl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const gd = /* @__PURE__ */ new Ul(), bd = /* @__PURE__ */ new hd(), vd = /* @__PURE__ */ new Ul(!0);
const li = (e) => e, Kr = (e) => Reflect.getPrototypeOf(e);
function yd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = le(o), a = jn(i), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? li : t ? ui : Je;
    return !t && Ue(
      i,
      "iterate",
      l ? si : Cn
    ), {
      // iterator protocol
      next() {
        const { value: d, done: f } = u.next();
        return f ? { value: d, done: f } : {
          value: s ? [c(d[0]), c(d[1])] : c(d),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Yr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _d(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, a = le(i), s = le(o);
      e || (ln(o, s) && Ue(a, "get", o), Ue(a, "get", s));
      const { has: l } = Kr(a), u = t ? li : e ? ui : Je;
      if (l.call(a, o))
        return u(i.get(o));
      if (l.call(a, s))
        return u(i.get(s));
      i !== a && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Ue(le(o), "iterate", Cn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, a = le(i), s = le(o);
      return e || (ln(o, s) && Ue(a, "has", o), Ue(a, "has", s)), o === s ? i.has(o) : i.has(o) || i.has(s);
    },
    forEach(o, i) {
      const a = this, s = a.__v_raw, l = le(s), u = t ? li : e ? ui : Je;
      return !e && Ue(l, "iterate", Cn), s.forEach((c, d) => o.call(i, u(c), u(d), a));
    }
  };
  return Ae(
    n,
    e ? {
      add: Yr("add"),
      set: Yr("set"),
      delete: Yr("delete"),
      clear: Yr("clear")
    } : {
      add(o) {
        !t && !Tt(o) && !wn(o) && (o = le(o));
        const i = le(this);
        return Kr(i).has.call(i, o) || (i.add(o), Yt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !Tt(i) && !wn(i) && (i = le(i));
        const a = le(this), { has: s, get: l } = Kr(a);
        let u = s.call(a, o);
        u || (o = le(o), u = s.call(a, o));
        const c = l.call(a, o);
        return a.set(o, i), u ? ln(i, c) && Yt(a, "set", o, i) : Yt(a, "add", o, i), this;
      },
      delete(o) {
        const i = le(this), { has: a, get: s } = Kr(i);
        let l = a.call(i, o);
        l || (o = le(o), l = a.call(i, o)), s && s.call(i, o);
        const u = i.delete(o);
        return l && Yt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = le(this), i = o.size !== 0, a = o.clear();
        return i && Yt(
          o,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = yd(o, e, t);
  }), n;
}
function zi(e, t) {
  const n = _d(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ce(n, o) && o in r ? n : r,
    o,
    i
  );
}
const Sd = {
  get: /* @__PURE__ */ zi(!1, !1)
}, Ed = {
  get: /* @__PURE__ */ zi(!1, !0)
}, Td = {
  get: /* @__PURE__ */ zi(!0, !1)
};
const Vl = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Wl = /* @__PURE__ */ new WeakMap(), Cd = /* @__PURE__ */ new WeakMap();
function Od(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ld(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Od(Jc(e));
}
function Co(e) {
  return wn(e) ? e : Xi(
    e,
    !1,
    gd,
    Sd,
    Vl
  );
}
function wd(e) {
  return Xi(
    e,
    !1,
    vd,
    Ed,
    Hl
  );
}
function Gi(e) {
  return Xi(
    e,
    !0,
    bd,
    Td,
    Wl
  );
}
function Xi(e, t, n, r, o) {
  if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ld(e);
  if (i === 0)
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, s), s;
}
function sr(e) {
  return wn(e) ? sr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wn(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function Ji(e) {
  return e ? !!e.__v_raw : !1;
}
function le(e) {
  const t = e && e.__v_raw;
  return t ? le(t) : e;
}
function Pd(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && oi(e, "__v_skip", !0), e;
}
const Je = (e) => Ee(e) ? Co(e) : e, ui = (e) => Ee(e) ? Gi(e) : e;
function Re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oe(e) {
  return Kl(e, !1);
}
function Bl(e) {
  return Kl(e, !0);
}
function Kl(e, t) {
  return Re(e) ? e : new $d(e, t);
}
class $d {
  constructor(t, n) {
    this.dep = new Ki(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : le(t), this._value = n ? t : Je(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Tt(t) || wn(t);
    t = r ? t : le(t), ln(t, n) && (this._rawValue = t, this._value = r ? t : Je(t), this.dep.trigger());
  }
}
function Yl(e) {
  return Re(e) ? e.value : e;
}
const kd = {
  get: (e, t, n) => t === "__v_raw" ? e : Yl(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Re(o) && !Re(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function zl(e) {
  return sr(e) ? e : new Proxy(e, kd);
}
class Id {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ki(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return Nl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Dl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Nd(e, t, n = !1) {
  let r, o;
  return q(e) ? r = e : (r = e.get, o = e.set), new Id(r, o, n);
}
const zr = {}, so = /* @__PURE__ */ new WeakMap();
let Sn;
function Ad(e, t = !1, n = Sn) {
  if (n) {
    let r = so.get(n);
    r || so.set(n, r = []), r.push(e);
  }
}
function xd(e, t, n = me) {
  const { immediate: r, deep: o, once: i, scheduler: a, augmentJob: s, call: l } = n, u = (g) => o ? g : Tt(g) || o === !1 || o === 0 ? zt(g, 1) : zt(g);
  let c, d, f, h, _ = !1, S = !1;
  if (Re(e) ? (d = () => e.value, _ = Tt(e)) : sr(e) ? (d = () => u(e), _ = !0) : X(e) ? (S = !0, _ = e.some((g) => sr(g) || Tt(g)), d = () => e.map((g) => {
    if (Re(g))
      return g.value;
    if (sr(g))
      return u(g);
    if (q(g))
      return l ? l(g, 2) : g();
  })) : q(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
    if (f) {
      Xt();
      try {
        f();
      } finally {
        Jt();
      }
    }
    const g = Sn;
    Sn = c;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      Sn = g;
    }
  } : d = Dt, t && o) {
    const g = d, w = o === !0 ? 1 / 0 : o;
    d = () => zt(g(), w);
  }
  const C = ld(), T = () => {
    c.stop(), C && C.active && ji(C.effects, c);
  };
  if (i && t) {
    const g = t;
    t = (...w) => {
      g(...w), T();
    };
  }
  let x = S ? new Array(e.length).fill(zr) : zr;
  const E = (g) => {
    if (!(!(c.flags & 1) || !c.dirty && !g))
      if (t) {
        const w = c.run();
        if (o || _ || (S ? w.some((P, A) => ln(P, x[A])) : ln(w, x))) {
          f && f();
          const P = Sn;
          Sn = c;
          try {
            const A = [
              w,
              // pass undefined as the old value when it's changed for the first time
              x === zr ? void 0 : S && x[0] === zr ? [] : x,
              h
            ];
            x = w, l ? l(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Sn = P;
          }
        }
      } else
        c.run();
  };
  return s && s(E), c = new kl(d), c.scheduler = a ? () => a(E, !1) : E, h = (g) => Ad(g, !1, c), f = c.onStop = () => {
    const g = so.get(c);
    if (g) {
      if (l)
        l(g, 4);
      else
        for (const w of g) w();
      so.delete(c);
    }
  }, t ? r ? E(!0) : x = c.run() : a ? a(E.bind(null, !0), !0) : c.run(), T.pause = c.pause.bind(c), T.resume = c.resume.bind(c), T.stop = T, T;
}
function zt(e, t = 1 / 0, n) {
  if (t <= 0 || !Ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Re(e))
    zt(e.value, t, n);
  else if (X(e))
    for (let r = 0; r < e.length; r++)
      zt(e[r], t, n);
  else if (El(e) || jn(e))
    e.forEach((r) => {
      zt(r, t, n);
    });
  else if (Ol(e)) {
    for (const r in e)
      zt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && zt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Vr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Oo(o, t, n);
  }
}
function Ot(e, t, n, r) {
  if (q(e)) {
    const o = Vr(e, t, n, r);
    return o && Tl(o) && o.catch((i) => {
      Oo(i, t, n);
    }), o;
  }
  if (X(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ot(e[i], t, n, r));
    return o;
  }
}
function Oo(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: a } = t && t.appContext.config || me;
  if (t) {
    let s = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, l, u) === !1)
            return;
      }
      s = s.parent;
    }
    if (i) {
      Xt(), Vr(i, null, 10, [
        e,
        l,
        u
      ]), Jt();
      return;
    }
  }
  Dd(e, n, o, r, a);
}
function Dd(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const qe = [];
let It = -1;
const Un = [];
let nn = null, Nn = 0;
const Gl = /* @__PURE__ */ Promise.resolve();
let lo = null;
function qi(e) {
  const t = lo || Gl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Md(e) {
  let t = It + 1, n = qe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = qe[r], i = yr(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Zi(e) {
  if (!(e.flags & 1)) {
    const t = yr(e), n = qe[qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yr(n) ? qe.push(e) : qe.splice(Md(t), 0, e), e.flags |= 1, Xl();
  }
}
function Xl() {
  lo || (lo = Gl.then(ql));
}
function Rd(e) {
  X(e) ? Un.push(...e) : nn && e.id === -1 ? nn.splice(Nn + 1, 0, e) : e.flags & 1 || (Un.push(e), e.flags |= 1), Xl();
}
function La(e, t, n = It + 1) {
  for (; n < qe.length; n++) {
    const r = qe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      qe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Jl(e) {
  if (Un.length) {
    const t = [...new Set(Un)].sort(
      (n, r) => yr(n) - yr(r)
    );
    if (Un.length = 0, nn) {
      nn.push(...t);
      return;
    }
    for (nn = t, Nn = 0; Nn < nn.length; Nn++) {
      const n = nn[Nn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    nn = null, Nn = 0;
  }
}
const yr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ql(e) {
  try {
    for (It = 0; It < qe.length; It++) {
      const t = qe[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Vr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < qe.length; It++) {
      const t = qe[It];
      t && (t.flags &= -2);
    }
    It = -1, qe.length = 0, Jl(), lo = null, (qe.length || Un.length) && ql();
  }
}
let Me = null, Zl = null;
function uo(e) {
  const t = Me;
  return Me = e, Zl = e && e.type.__scopeId || null, t;
}
function Tn(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Ua(-1);
    const i = uo(t);
    let a;
    try {
      a = e(...o);
    } finally {
      uo(i), r._d && Ua(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ql(e, t) {
  if (Me === null)
    return e;
  const n = $o(Me), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, a, s, l = me] = t[o];
    i && (q(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && zt(a), r.push({
      dir: i,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function hn(e, t, n, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const s = o[a];
    i && (s.oldValue = i[a].value);
    let l = s.dir[r];
    l && (Xt(), Ot(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), Jt());
  }
}
const eu = Symbol("_vte"), tu = (e) => e.__isTeleport, lr = (e) => e && (e.disabled || e.disabled === ""), wa = (e) => e && (e.defer || e.defer === ""), Pa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, $a = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ci = (e, t) => {
  const n = e && e.to;
  return Le(n) ? t ? t(n) : null : n;
}, nu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, i, a, s, l, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: h, querySelector: _, createText: S, createComment: C }
    } = u, T = lr(t.props);
    let { shapeFlag: x, children: E, dynamicChildren: g } = t;
    if (e == null) {
      const w = t.el = S(""), P = t.anchor = S("");
      h(w, n, r), h(P, n, r);
      const A = (k, B) => {
        x & 16 && (o && o.isCE && (o.ce._teleportTarget = k), c(
          E,
          k,
          B,
          o,
          i,
          a,
          s,
          l
        ));
      }, F = () => {
        const k = t.target = ci(t.props, _), B = ru(k, t, S, h);
        k && (a !== "svg" && Pa(k) ? a = "svg" : a !== "mathml" && $a(k) && (a = "mathml"), T || (A(k, B), ro(t, !1)));
      };
      T && (A(n, P), ro(t, !0)), wa(t.props) ? (t.el.__isMounted = !1, Ge(() => {
        F(), delete t.el.__isMounted;
      }, i)) : F();
    } else {
      if (wa(t.props) && e.el.__isMounted === !1) {
        Ge(() => {
          nu.process(
            e,
            t,
            n,
            r,
            o,
            i,
            a,
            s,
            l,
            u
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const w = t.anchor = e.anchor, P = t.target = e.target, A = t.targetAnchor = e.targetAnchor, F = lr(e.props), k = F ? n : P, B = F ? w : A;
      if (a === "svg" || Pa(P) ? a = "svg" : (a === "mathml" || $a(P)) && (a = "mathml"), g ? (f(
        e.dynamicChildren,
        g,
        k,
        o,
        i,
        a,
        s
      ), ia(e, t, !0)) : l || d(
        e,
        t,
        k,
        B,
        o,
        i,
        a,
        s,
        !1
      ), T)
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Gr(
          t,
          n,
          w,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = ci(
          t.props,
          _
        );
        Y && Gr(
          t,
          Y,
          null,
          u,
          0
        );
      } else F && Gr(
        t,
        P,
        A,
        u,
        1
      );
      ro(t, T);
    }
  },
  remove(e, t, n, { um: r, o: { remove: o } }, i) {
    const {
      shapeFlag: a,
      children: s,
      anchor: l,
      targetStart: u,
      targetAnchor: c,
      target: d,
      props: f
    } = e;
    if (d && (o(u), o(c)), i && o(l), a & 16) {
      const h = i || !lr(f);
      for (let _ = 0; _ < s.length; _++) {
        const S = s[_];
        r(
          S,
          t,
          n,
          h,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: Gr,
  hydrate: Fd
};
function Gr(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: u, props: c } = e, d = i === 2;
  if (d && r(a, t, n), (!d || lr(c)) && l & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && r(s, t, n);
}
function Fd(e, t, n, r, o, i, {
  o: { nextSibling: a, parentNode: s, querySelector: l, insert: u, createText: c }
}, d) {
  const f = t.target = ci(
    t.props,
    l
  );
  if (f) {
    const h = lr(t.props), _ = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        t.anchor = d(
          a(e),
          t,
          s(e),
          n,
          r,
          o,
          i
        ), t.targetStart = _, t.targetAnchor = _ && a(_);
      else {
        t.anchor = a(e);
        let S = _;
        for (; S; ) {
          if (S && S.nodeType === 8) {
            if (S.data === "teleport start anchor")
              t.targetStart = S;
            else if (S.data === "teleport anchor") {
              t.targetAnchor = S, f._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          S = a(S);
        }
        t.targetAnchor || ru(f, t, c, u), d(
          _ && a(_),
          t,
          f,
          n,
          r,
          o,
          i
        );
      }
    ro(t, h);
  }
  return t.anchor && a(t.anchor);
}
const jd = nu;
function ro(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function ru(e, t, n, r) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[eu] = i, e && (r(o, e), r(i, e)), i;
}
const rn = Symbol("_leaveCb"), Xr = Symbol("_enterCb");
function Ud() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return zn(() => {
    e.isMounted = !0;
  }), Qi(() => {
    e.isUnmounting = !0;
  }), e;
}
const ct = [Function, Array], ou = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ct,
  onEnter: ct,
  onAfterEnter: ct,
  onEnterCancelled: ct,
  // leave
  onBeforeLeave: ct,
  onLeave: ct,
  onAfterLeave: ct,
  onLeaveCancelled: ct,
  // appear
  onBeforeAppear: ct,
  onAppear: ct,
  onAfterAppear: ct,
  onAppearCancelled: ct
}, iu = (e) => {
  const t = e.subTree;
  return t.component ? iu(t.component) : t;
}, Vd = {
  name: "BaseTransition",
  props: ou,
  setup(e, { slots: t }) {
    const n = jt(), r = Ud();
    return () => {
      const o = t.default && lu(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = au(o), a = le(e), { mode: s } = a;
      if (r.isLeaving)
        return Bo(i);
      const l = ka(i);
      if (!l)
        return Bo(i);
      let u = di(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      l.type !== He && _r(l, u);
      let c = n.subTree && ka(n.subTree);
      if (c && c.type !== He && !En(l, c) && iu(n).type !== He) {
        let d = di(
          c,
          a,
          r,
          n
        );
        if (_r(c, d), s === "out-in" && l.type !== He)
          return r.isLeaving = !0, d.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Bo(i);
        s === "in-out" && l.type !== He ? d.delayLeave = (f, h, _) => {
          const S = su(
            r,
            c
          );
          S[String(c.key)] = c, f[rn] = () => {
            h(), f[rn] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            _(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function au(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== He) {
        t = n;
        break;
      }
  }
  return t;
}
const Hd = Vd;
function su(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function di(e, t, n, r, o) {
  const {
    appear: i,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: C,
    onAppear: T,
    onAfterAppear: x,
    onAppearCancelled: E
  } = t, g = String(e.key), w = su(n, e), P = (k, B) => {
    k && Ot(
      k,
      r,
      9,
      B
    );
  }, A = (k, B) => {
    const Y = B[1];
    P(k, B), X(k) ? k.every((R) => R.length <= 1) && Y() : k.length <= 1 && Y();
  }, F = {
    mode: a,
    persisted: s,
    beforeEnter(k) {
      let B = l;
      if (!n.isMounted)
        if (i)
          B = C || l;
        else
          return;
      k[rn] && k[rn](
        !0
        /* cancelled */
      );
      const Y = w[g];
      Y && En(e, Y) && Y.el[rn] && Y.el[rn](), P(B, [k]);
    },
    enter(k) {
      let B = u, Y = c, R = d;
      if (!n.isMounted)
        if (i)
          B = T || u, Y = x || c, R = E || d;
        else
          return;
      let z = !1;
      const se = k[Xr] = (Te) => {
        z || (z = !0, Te ? P(R, [k]) : P(Y, [k]), F.delayedLeave && F.delayedLeave(), k[Xr] = void 0);
      };
      B ? A(B, [k, se]) : se();
    },
    leave(k, B) {
      const Y = String(e.key);
      if (k[Xr] && k[Xr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      P(f, [k]);
      let R = !1;
      const z = k[rn] = (se) => {
        R || (R = !0, B(), se ? P(S, [k]) : P(_, [k]), k[rn] = void 0, w[Y] === e && delete w[Y]);
      };
      w[Y] = e, h ? A(h, [k, z]) : z();
    },
    clone(k) {
      const B = di(
        k,
        t,
        n,
        r,
        o
      );
      return o && o(B), B;
    }
  };
  return F;
}
function Bo(e) {
  if (Lo(e))
    return e = un(e), e.children = null, e;
}
function ka(e) {
  if (!Lo(e))
    return tu(e.type) && e.children ? au(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && q(n.default))
      return n.default();
  }
}
function _r(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _r(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lu(e, t = !1, n) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === Ve ? (a.patchFlag & 128 && o++, r = r.concat(
      lu(a.children, t, s)
    )) : (t || a.type !== He) && r.push(s != null ? un(a, { key: s }) : a);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function Wd() {
  const e = jt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function uu(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ur(e, t, n, r, o = !1) {
  if (X(e)) {
    e.forEach(
      (_, S) => ur(
        _,
        t && (X(t) ? t[S] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Vn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ur(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? $o(r.component) : r.el, a = o ? null : i, { i: s, r: l } = e, u = t && t.r, c = s.refs === me ? s.refs = {} : s.refs, d = s.setupState, f = le(d), h = d === me ? () => !1 : (_) => ce(f, _);
  if (u != null && u !== l && (Le(u) ? (c[u] = null, h(u) && (d[u] = null)) : Re(u) && (u.value = null)), q(l))
    Vr(l, s, 12, [a, c]);
  else {
    const _ = Le(l), S = Re(l);
    if (_ || S) {
      const C = () => {
        if (e.f) {
          const T = _ ? h(l) ? d[l] : c[l] : l.value;
          o ? X(T) && ji(T, i) : X(T) ? T.includes(i) || T.push(i) : _ ? (c[l] = [i], h(l) && (d[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value));
        } else _ ? (c[l] = a, h(l) && (d[l] = a)) : S && (l.value = a, e.k && (c[e.k] = a));
      };
      a ? (C.id = -1, Ge(C, n)) : C();
    }
  }
}
To().requestIdleCallback;
To().cancelIdleCallback;
const Vn = (e) => !!e.type.__asyncLoader, Lo = (e) => e.type.__isKeepAlive;
function Bd(e, t) {
  cu(e, "a", t);
}
function Kd(e, t) {
  cu(e, "da", t);
}
function cu(e, t, n = We) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (wo(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Lo(o.parent.vnode) && Yd(r, t, n, o), o = o.parent;
  }
}
function Yd(e, t, n, r) {
  const o = wo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ea(() => {
    ji(r[t], o);
  }, n);
}
function wo(e, t, n = We, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      Xt();
      const s = Br(n), l = Ot(t, n, e, a);
      return s(), Jt(), l;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Zt = (e) => (t, n = We) => {
  (!Tr || e === "sp") && wo(e, (...r) => t(...r), n);
}, du = Zt("bm"), zn = Zt("m"), zd = Zt(
  "bu"
), Gd = Zt("u"), Qi = Zt(
  "bum"
), ea = Zt("um"), Xd = Zt(
  "sp"
), Jd = Zt("rtg"), qd = Zt("rtc");
function Zd(e, t = We) {
  wo("ec", e, t);
}
const ta = "components", Qd = "directives";
function co(e, t) {
  return na(ta, e, !0, t) || e;
}
const fu = Symbol.for("v-ndc");
function fi(e) {
  return Le(e) ? na(ta, e, !1) || e : e || fu;
}
function pu(e) {
  return na(Qd, e);
}
function na(e, t, n = !0, r = !1) {
  const o = Me || We;
  if (o) {
    const i = o.type;
    if (e === ta) {
      const s = Uf(
        i,
        !1
      );
      if (s && (s === t || s === pt(t) || s === Eo(pt(t))))
        return i;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ia(o[e] || i[e], t) || // global registration
      Ia(o.appContext[e], t)
    );
    return !a && r ? i : a;
  }
}
function Ia(e, t) {
  return e && (e[t] || e[pt(t)] || e[Eo(pt(t))]);
}
function Xe(e, t, n = {}, r, o) {
  if (Me.ce || Me.parent && Vn(Me.parent) && Me.parent.ce)
    return t !== "default" && (n.name = t), be(), Ct(
      Ve,
      null,
      [ke("slot", n, r && r())],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), be();
  const a = i && mu(i(n)), s = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Ct(
    Ve,
    {
      key: (s && !qt(s) ? s : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l;
}
function mu(e) {
  return e.some((t) => Er(t) ? !(t.type === He || t.type === Ve && !mu(t.children)) : !0) ? e : null;
}
const pi = (e) => e ? Au(e) ? $o(e) : pi(e.parent) : null, cr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pi(e.parent),
    $root: (e) => pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qi.bind(e.proxy)),
    $watch: (e) => Ef.bind(e)
  })
), Ko = (e, t) => e !== me && !e.__isScriptSetup && ce(e, t), ef = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: i, accessCache: a, type: s, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const h = a[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Ko(r, t))
          return a[t] = 1, r[t];
        if (o !== me && ce(o, t))
          return a[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ce(u, t)
        )
          return a[t] = 3, i[t];
        if (n !== me && ce(n, t))
          return a[t] = 4, n[t];
        mi && (a[t] = 0);
      }
    }
    const c = cr[t];
    let d, f;
    if (c)
      return t === "$attrs" && Ue(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== me && ce(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, ce(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: i } = e;
    return Ko(o, t) ? (o[t] = n, !0) : r !== me && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i }
  }, a) {
    let s;
    return !!n[a] || e !== me && ce(e, a) || Ko(t, a) || (s = i[0]) && ce(s, a) || ce(r, a) || ce(cr, a) || ce(o.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Na(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let mi = !0;
function tf(e) {
  const t = gu(e), n = e.proxy, r = e.ctx;
  mi = !1, t.beforeCreate && Aa(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: a,
    watch: s,
    provide: l,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: _,
    activated: S,
    deactivated: C,
    beforeDestroy: T,
    beforeUnmount: x,
    destroyed: E,
    unmounted: g,
    render: w,
    renderTracked: P,
    renderTriggered: A,
    errorCaptured: F,
    serverPrefetch: k,
    // public API
    expose: B,
    inheritAttrs: Y,
    // assets
    components: R,
    directives: z,
    filters: se
  } = t;
  if (u && nf(u, r, null), a)
    for (const te in a) {
      const Q = a[te];
      q(Q) && (r[te] = Q.bind(n));
    }
  if (o) {
    const te = o.call(n, n);
    Ee(te) && (e.data = Co(te));
  }
  if (mi = !0, i)
    for (const te in i) {
      const Q = i[te], Pe = q(Q) ? Q.bind(n, n) : q(Q.get) ? Q.get.bind(n, n) : Dt, $e = !q(Q) && q(Q.set) ? Q.set.bind(n) : Dt, ue = ft({
        get: Pe,
        set: $e
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (he) => ue.value = he
      });
    }
  if (s)
    for (const te in s)
      hu(s[te], r, n, te);
  if (l) {
    const te = q(l) ? l.call(n) : l;
    Reflect.ownKeys(te).forEach((Q) => {
      uf(Q, te[Q]);
    });
  }
  c && Aa(c, e, "c");
  function ne(te, Q) {
    X(Q) ? Q.forEach((Pe) => te(Pe.bind(n))) : Q && te(Q.bind(n));
  }
  if (ne(du, d), ne(zn, f), ne(zd, h), ne(Gd, _), ne(Bd, S), ne(Kd, C), ne(Zd, F), ne(qd, P), ne(Jd, A), ne(Qi, x), ne(ea, g), ne(Xd, k), X(B))
    if (B.length) {
      const te = e.exposed || (e.exposed = {});
      B.forEach((Q) => {
        Object.defineProperty(te, Q, {
          get: () => n[Q],
          set: (Pe) => n[Q] = Pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === Dt && (e.render = w), Y != null && (e.inheritAttrs = Y), R && (e.components = R), z && (e.directives = z), k && uu(e);
}
function nf(e, t, n = Dt) {
  X(e) && (e = hi(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Ee(o) ? "default" in o ? i = dr(
      o.from || r,
      o.default,
      !0
    ) : i = dr(o.from || r) : i = dr(o), Re(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (a) => i.value = a
    }) : t[r] = i;
  }
}
function Aa(e, t, n) {
  Ot(
    X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function hu(e, t, n, r) {
  let o = r.includes(".") ? Pu(n, r) : () => n[r];
  if (Le(e)) {
    const i = t[e];
    q(i) && st(o, i);
  } else if (q(e))
    st(o, e.bind(n));
  else if (Ee(e))
    if (X(e))
      e.forEach((i) => hu(i, t, n, r));
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(i) && st(o, i, e);
    }
}
function gu(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = i.get(t);
  let l;
  return s ? l = s : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => fo(l, u, a, !0)
  ), fo(l, t, a)), Ee(t) && i.set(t, l), l;
}
function fo(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && fo(e, i, n, !0), o && o.forEach(
    (a) => fo(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = rf[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const rf = {
  data: xa,
  props: Da,
  emits: Da,
  // objects
  methods: nr,
  computed: nr,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: nr,
  directives: nr,
  // watch
  watch: af,
  // provide / inject
  provide: xa,
  inject: of
};
function xa(e, t) {
  return t ? e ? function() {
    return Ae(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function of(e, t) {
  return nr(hi(e), hi(t));
}
function hi(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nr(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Da(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    Na(e),
    Na(t ?? {})
  ) : t;
}
function af(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ye(e[r], t[r]);
  return n;
}
function bu() {
  return {
    app: null,
    config: {
      isNativeTag: Gc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let sf = 0;
function lf(e, t) {
  return function(r, o = null) {
    q(r) || (r = Ae({}, r)), o != null && !Ee(o) && (o = null);
    const i = bu(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const u = i.app = {
      _uid: sf++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Hf,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...d) {
        return a.has(c) || (c && q(c.install) ? (a.add(c), c.install(u, ...d)) : q(c) && (a.add(c), c(u, ...d))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, d) {
        return d ? (i.components[c] = d, u) : i.components[c];
      },
      directive(c, d) {
        return d ? (i.directives[c] = d, u) : i.directives[c];
      },
      mount(c, d, f) {
        if (!l) {
          const h = u._ceVNode || ke(r, o);
          return h.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, c, f), l = !0, u._container = c, c.__vue_app__ = u, $o(h.component);
        }
      },
      onUnmount(c) {
        s.push(c);
      },
      unmount() {
        l && (Ot(
          s,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, d) {
        return i.provides[c] = d, u;
      },
      runWithContext(c) {
        const d = Hn;
        Hn = u;
        try {
          return c();
        } finally {
          Hn = d;
        }
      }
    };
    return u;
  };
}
let Hn = null;
function uf(e, t) {
  if (We) {
    let n = We.provides;
    const r = We.parent && We.parent.provides;
    r === n && (n = We.provides = Object.create(r)), n[e] = t;
  }
}
function dr(e, t, n = !1) {
  const r = jt();
  if (r || Hn) {
    let o = Hn ? Hn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(r && r.proxy) : t;
  }
}
const vu = {}, yu = () => Object.create(vu), _u = (e) => Object.getPrototypeOf(e) === vu;
function cf(e, t, n, r = !1) {
  const o = {}, i = yu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Su(e, t, o, i);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : wd(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function df(e, t, n, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: a }
  } = e, s = le(o), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (Po(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (l)
          if (ce(i, f))
            h !== i[f] && (i[f] = h, u = !0);
          else {
            const _ = pt(f);
            o[_] = gi(
              l,
              s,
              _,
              h,
              e,
              !1
            );
          }
        else
          h !== i[f] && (i[f] = h, u = !0);
      }
    }
  } else {
    Su(e, t, o, i) && (u = !0);
    let c;
    for (const d in s)
      (!t || // for camelCase
      !ce(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Pn(d)) === d || !ce(t, c))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = gi(
        l,
        s,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== s)
      for (const d in i)
        (!t || !ce(t, d)) && (delete i[d], u = !0);
  }
  u && Yt(e.attrs, "set", "");
}
function Su(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (or(l))
        continue;
      const u = t[l];
      let c;
      o && ce(o, c = pt(l)) ? !i || !i.includes(c) ? n[c] = u : (s || (s = {}))[c] = u : Po(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (i) {
    const l = le(n), u = s || me;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = gi(
        o,
        l,
        d,
        u[d],
        e,
        !ce(u, d)
      );
    }
  }
  return a;
}
function gi(e, t, n, r, o, i) {
  const a = e[n];
  if (a != null) {
    const s = ce(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && q(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const c = Br(o);
          r = u[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        r = l;
      o.ce && o.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (i && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Pn(n)) && (r = !0));
  }
  return r;
}
const ff = /* @__PURE__ */ new WeakMap();
function Eu(e, t, n = !1) {
  const r = n ? ff : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, a = {}, s = [];
  let l = !1;
  if (!q(e)) {
    const c = (d) => {
      l = !0;
      const [f, h] = Eu(d, t, !0);
      Ae(a, f), h && s.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l)
    return Ee(e) && r.set(e, Fn), Fn;
  if (X(i))
    for (let c = 0; c < i.length; c++) {
      const d = pt(i[c]);
      Ma(d) && (a[d] = me);
    }
  else if (i)
    for (const c in i) {
      const d = pt(c);
      if (Ma(d)) {
        const f = i[c], h = a[d] = X(f) || q(f) ? { type: f } : Ae({}, f), _ = h.type;
        let S = !1, C = !0;
        if (X(_))
          for (let T = 0; T < _.length; ++T) {
            const x = _[T], E = q(x) && x.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && (C = !1);
          }
        else
          S = q(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = S, h[
          1
          /* shouldCastTrue */
        ] = C, (S || ce(h, "default")) && s.push(d);
      }
    }
  const u = [a, s];
  return Ee(e) && r.set(e, u), u;
}
function Ma(e) {
  return e[0] !== "$" && !or(e);
}
const ra = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", oa = (e) => X(e) ? e.map(Nt) : [Nt(e)], pf = (e, t, n) => {
  if (t._n)
    return t;
  const r = Tn((...o) => oa(t(...o)), n);
  return r._c = !1, r;
}, Tu = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (ra(o)) continue;
    const i = e[o];
    if (q(i))
      t[o] = pf(o, i, r);
    else if (i != null) {
      const a = oa(i);
      t[o] = () => a;
    }
  }
}, Cu = (e, t) => {
  const n = oa(t);
  e.slots.default = () => n;
}, Ou = (e, t, n) => {
  for (const r in t)
    (n || !ra(r)) && (e[r] = t[r]);
}, mf = (e, t, n) => {
  const r = e.slots = yu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && oi(r, "__", o, !0);
    const i = t._;
    i ? (Ou(r, t, n), n && oi(r, "_", i, !0)) : Tu(t, r);
  } else t && Cu(e, t);
}, hf = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let i = !0, a = me;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? i = !1 : Ou(o, t, n) : (i = !t.$stable, Tu(t, o)), a = t;
  } else t && (Cu(e, t), a = { default: 1 });
  if (i)
    for (const s in o)
      !ra(s) && a[s] == null && delete o[s];
}, Ge = $f;
function gf(e) {
  return bf(e);
}
function bf(e, t) {
  const n = To();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: i,
    createElement: a,
    createText: s,
    createComment: l,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = Dt,
    insertStaticContent: _
  } = e, S = (b, y, v, I = null, D = null, M = null, V = void 0, U = null, p = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !En(b, y) && (I = mt(b), he(b, D, M, !0), b = null), y.patchFlag === -2 && (p = !1, y.dynamicChildren = null);
    const { type: m, ref: O, shapeFlag: $ } = y;
    switch (m) {
      case Wr:
        C(b, y, v, I);
        break;
      case He:
        T(b, y, v, I);
        break;
      case zo:
        b == null && x(y, v, I, V);
        break;
      case Ve:
        R(
          b,
          y,
          v,
          I,
          D,
          M,
          V,
          U,
          p
        );
        break;
      default:
        $ & 1 ? w(
          b,
          y,
          v,
          I,
          D,
          M,
          V,
          U,
          p
        ) : $ & 6 ? z(
          b,
          y,
          v,
          I,
          D,
          M,
          V,
          U,
          p
        ) : ($ & 64 || $ & 128) && m.process(
          b,
          y,
          v,
          I,
          D,
          M,
          V,
          U,
          p,
          et
        );
    }
    O != null && D ? ur(O, b && b.ref, M, y || b, !y) : O == null && b && b.ref != null && ur(b.ref, null, M, b, !0);
  }, C = (b, y, v, I) => {
    if (b == null)
      r(
        y.el = s(y.children),
        v,
        I
      );
    else {
      const D = y.el = b.el;
      y.children !== b.children && u(D, y.children);
    }
  }, T = (b, y, v, I) => {
    b == null ? r(
      y.el = l(y.children || ""),
      v,
      I
    ) : y.el = b.el;
  }, x = (b, y, v, I) => {
    [b.el, b.anchor] = _(
      b.children,
      y,
      v,
      I,
      b.el,
      b.anchor
    );
  }, E = ({ el: b, anchor: y }, v, I) => {
    let D;
    for (; b && b !== y; )
      D = f(b), r(b, v, I), b = D;
    r(y, v, I);
  }, g = ({ el: b, anchor: y }) => {
    let v;
    for (; b && b !== y; )
      v = f(b), o(b), b = v;
    o(y);
  }, w = (b, y, v, I, D, M, V, U, p) => {
    y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), b == null ? P(
      y,
      v,
      I,
      D,
      M,
      V,
      U,
      p
    ) : k(
      b,
      y,
      D,
      M,
      V,
      U,
      p
    );
  }, P = (b, y, v, I, D, M, V, U) => {
    let p, m;
    const { props: O, shapeFlag: $, transition: H, dirs: j } = b;
    if (p = b.el = a(
      b.type,
      M,
      O && O.is,
      O
    ), $ & 8 ? c(p, b.children) : $ & 16 && F(
      b.children,
      p,
      null,
      I,
      D,
      Yo(b, M),
      V,
      U
    ), j && hn(b, null, I, "created"), A(p, b, b.scopeId, V, I), O) {
      for (const N in O)
        N !== "value" && !or(N) && i(p, N, null, O[N], M, I);
      "value" in O && i(p, "value", null, O.value, M), (m = O.onVnodeBeforeMount) && $t(m, I, b);
    }
    j && hn(b, null, I, "beforeMount");
    const L = vf(D, H);
    L && H.beforeEnter(p), r(p, y, v), ((m = O && O.onVnodeMounted) || L || j) && Ge(() => {
      m && $t(m, I, b), L && H.enter(p), j && hn(b, null, I, "mounted");
    }, D);
  }, A = (b, y, v, I, D) => {
    if (v && h(b, v), I)
      for (let M = 0; M < I.length; M++)
        h(b, I[M]);
    if (D) {
      let M = D.subTree;
      if (y === M || ku(M.type) && (M.ssContent === y || M.ssFallback === y)) {
        const V = D.vnode;
        A(
          b,
          V,
          V.scopeId,
          V.slotScopeIds,
          D.parent
        );
      }
    }
  }, F = (b, y, v, I, D, M, V, U, p = 0) => {
    for (let m = p; m < b.length; m++) {
      const O = b[m] = U ? on(b[m]) : Nt(b[m]);
      S(
        null,
        O,
        y,
        v,
        I,
        D,
        M,
        V,
        U
      );
    }
  }, k = (b, y, v, I, D, M, V) => {
    const U = y.el = b.el;
    let { patchFlag: p, dynamicChildren: m, dirs: O } = y;
    p |= b.patchFlag & 16;
    const $ = b.props || me, H = y.props || me;
    let j;
    if (v && gn(v, !1), (j = H.onVnodeBeforeUpdate) && $t(j, v, y, b), O && hn(y, b, v, "beforeUpdate"), v && gn(v, !0), ($.innerHTML && H.innerHTML == null || $.textContent && H.textContent == null) && c(U, ""), m ? B(
      b.dynamicChildren,
      m,
      U,
      v,
      I,
      Yo(y, D),
      M
    ) : V || Q(
      b,
      y,
      U,
      null,
      v,
      I,
      Yo(y, D),
      M,
      !1
    ), p > 0) {
      if (p & 16)
        Y(U, $, H, v, D);
      else if (p & 2 && $.class !== H.class && i(U, "class", null, H.class, D), p & 4 && i(U, "style", $.style, H.style, D), p & 8) {
        const L = y.dynamicProps;
        for (let N = 0; N < L.length; N++) {
          const K = L[N], re = $[K], Ce = H[K];
          (Ce !== re || K === "value") && i(U, K, re, Ce, D, v);
        }
      }
      p & 1 && b.children !== y.children && c(U, y.children);
    } else !V && m == null && Y(U, $, H, v, D);
    ((j = H.onVnodeUpdated) || O) && Ge(() => {
      j && $t(j, v, y, b), O && hn(y, b, v, "updated");
    }, I);
  }, B = (b, y, v, I, D, M, V) => {
    for (let U = 0; U < y.length; U++) {
      const p = b[U], m = y[U], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        p.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (p.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !En(p, m) || // - In the case of a component, it could contain anything.
        p.shapeFlag & 198) ? d(p.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      S(
        p,
        m,
        O,
        null,
        I,
        D,
        M,
        V,
        !0
      );
    }
  }, Y = (b, y, v, I, D) => {
    if (y !== v) {
      if (y !== me)
        for (const M in y)
          !or(M) && !(M in v) && i(
            b,
            M,
            y[M],
            null,
            D,
            I
          );
      for (const M in v) {
        if (or(M)) continue;
        const V = v[M], U = y[M];
        V !== U && M !== "value" && i(b, M, U, V, D, I);
      }
      "value" in v && i(b, "value", y.value, v.value, D);
    }
  }, R = (b, y, v, I, D, M, V, U, p) => {
    const m = y.el = b ? b.el : s(""), O = y.anchor = b ? b.anchor : s("");
    let { patchFlag: $, dynamicChildren: H, slotScopeIds: j } = y;
    j && (U = U ? U.concat(j) : j), b == null ? (r(m, v, I), r(O, v, I), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      v,
      O,
      D,
      M,
      V,
      U,
      p
    )) : $ > 0 && $ & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (B(
      b.dynamicChildren,
      H,
      v,
      D,
      M,
      V,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || D && y === D.subTree) && ia(
      b,
      y,
      !0
      /* shallow */
    )) : Q(
      b,
      y,
      v,
      O,
      D,
      M,
      V,
      U,
      p
    );
  }, z = (b, y, v, I, D, M, V, U, p) => {
    y.slotScopeIds = U, b == null ? y.shapeFlag & 512 ? D.ctx.activate(
      y,
      v,
      I,
      V,
      p
    ) : se(
      y,
      v,
      I,
      D,
      M,
      V,
      p
    ) : Te(b, y, p);
  }, se = (b, y, v, I, D, M, V) => {
    const U = b.component = Df(
      b,
      I,
      D
    );
    if (Lo(b) && (U.ctx.renderer = et), Mf(U, !1, V), U.asyncDep) {
      if (D && D.registerDep(U, ne, V), !b.el) {
        const p = U.subTree = ke(He);
        T(null, p, y, v), b.placeholder = p.el;
      }
    } else
      ne(
        U,
        b,
        y,
        v,
        D,
        M,
        V
      );
  }, Te = (b, y, v) => {
    const I = y.component = b.component;
    if (wf(b, y, v))
      if (I.asyncDep && !I.asyncResolved) {
        te(I, y, v);
        return;
      } else
        I.next = y, I.update();
    else
      y.el = b.el, I.vnode = y;
  }, ne = (b, y, v, I, D, M, V) => {
    const U = () => {
      if (b.isMounted) {
        let { next: $, bu: H, u: j, parent: L, vnode: N } = b;
        {
          const xe = Lu(b);
          if (xe) {
            $ && ($.el = N.el, te(b, $, V)), xe.asyncDep.then(() => {
              b.isUnmounted || U();
            });
            return;
          }
        }
        let K = $, re;
        gn(b, !1), $ ? ($.el = N.el, te(b, $, V)) : $ = N, H && jo(H), (re = $.props && $.props.onVnodeBeforeUpdate) && $t(re, L, $, N), gn(b, !0);
        const Ce = Fa(b), Ke = b.subTree;
        b.subTree = Ce, S(
          Ke,
          Ce,
          // parent may have changed if it's in a teleport
          d(Ke.el),
          // anchor may have changed if it's in a fragment
          mt(Ke),
          b,
          D,
          M
        ), $.el = Ce.el, K === null && Pf(b, Ce.el), j && Ge(j, D), (re = $.props && $.props.onVnodeUpdated) && Ge(
          () => $t(re, L, $, N),
          D
        );
      } else {
        let $;
        const { el: H, props: j } = y, { bm: L, m: N, parent: K, root: re, type: Ce } = b, Ke = Vn(y);
        gn(b, !1), L && jo(L), !Ke && ($ = j && j.onVnodeBeforeMount) && $t($, K, y), gn(b, !0);
        {
          re.ce && // @ts-expect-error _def is private
          re.ce._def.shadowRoot !== !1 && re.ce._injectChildStyle(Ce);
          const xe = b.subTree = Fa(b);
          S(
            null,
            xe,
            v,
            I,
            b,
            D,
            M
          ), y.el = xe.el;
        }
        if (N && Ge(N, D), !Ke && ($ = j && j.onVnodeMounted)) {
          const xe = y;
          Ge(
            () => $t($, K, xe),
            D
          );
        }
        (y.shapeFlag & 256 || K && Vn(K.vnode) && K.vnode.shapeFlag & 256) && b.a && Ge(b.a, D), b.isMounted = !0, y = v = I = null;
      }
    };
    b.scope.on();
    const p = b.effect = new kl(U);
    b.scope.off();
    const m = b.update = p.run.bind(p), O = b.job = p.runIfDirty.bind(p);
    O.i = b, O.id = b.uid, p.scheduler = () => Zi(O), gn(b, !0), m();
  }, te = (b, y, v) => {
    y.component = b;
    const I = b.vnode.props;
    b.vnode = y, b.next = null, df(b, y.props, I, v), hf(b, y.children, v), Xt(), La(b), Jt();
  }, Q = (b, y, v, I, D, M, V, U, p = !1) => {
    const m = b && b.children, O = b ? b.shapeFlag : 0, $ = y.children, { patchFlag: H, shapeFlag: j } = y;
    if (H > 0) {
      if (H & 128) {
        $e(
          m,
          $,
          v,
          I,
          D,
          M,
          V,
          U,
          p
        );
        return;
      } else if (H & 256) {
        Pe(
          m,
          $,
          v,
          I,
          D,
          M,
          V,
          U,
          p
        );
        return;
      }
    }
    j & 8 ? (O & 16 && Qe(m, D, M), $ !== m && c(v, $)) : O & 16 ? j & 16 ? $e(
      m,
      $,
      v,
      I,
      D,
      M,
      V,
      U,
      p
    ) : Qe(m, D, M, !0) : (O & 8 && c(v, ""), j & 16 && F(
      $,
      v,
      I,
      D,
      M,
      V,
      U,
      p
    ));
  }, Pe = (b, y, v, I, D, M, V, U, p) => {
    b = b || Fn, y = y || Fn;
    const m = b.length, O = y.length, $ = Math.min(m, O);
    let H;
    for (H = 0; H < $; H++) {
      const j = y[H] = p ? on(y[H]) : Nt(y[H]);
      S(
        b[H],
        j,
        v,
        null,
        D,
        M,
        V,
        U,
        p
      );
    }
    m > O ? Qe(
      b,
      D,
      M,
      !0,
      !1,
      $
    ) : F(
      y,
      v,
      I,
      D,
      M,
      V,
      U,
      p,
      $
    );
  }, $e = (b, y, v, I, D, M, V, U, p) => {
    let m = 0;
    const O = y.length;
    let $ = b.length - 1, H = O - 1;
    for (; m <= $ && m <= H; ) {
      const j = b[m], L = y[m] = p ? on(y[m]) : Nt(y[m]);
      if (En(j, L))
        S(
          j,
          L,
          v,
          null,
          D,
          M,
          V,
          U,
          p
        );
      else
        break;
      m++;
    }
    for (; m <= $ && m <= H; ) {
      const j = b[$], L = y[H] = p ? on(y[H]) : Nt(y[H]);
      if (En(j, L))
        S(
          j,
          L,
          v,
          null,
          D,
          M,
          V,
          U,
          p
        );
      else
        break;
      $--, H--;
    }
    if (m > $) {
      if (m <= H) {
        const j = H + 1, L = j < O ? y[j].el : I;
        for (; m <= H; )
          S(
            null,
            y[m] = p ? on(y[m]) : Nt(y[m]),
            v,
            L,
            D,
            M,
            V,
            U,
            p
          ), m++;
      }
    } else if (m > H)
      for (; m <= $; )
        he(b[m], D, M, !0), m++;
    else {
      const j = m, L = m, N = /* @__PURE__ */ new Map();
      for (m = L; m <= H; m++) {
        const at = y[m] = p ? on(y[m]) : Nt(y[m]);
        at.key != null && N.set(at.key, m);
      }
      let K, re = 0;
      const Ce = H - L + 1;
      let Ke = !1, xe = 0;
      const mn = new Array(Ce);
      for (m = 0; m < Ce; m++) mn[m] = 0;
      for (m = j; m <= $; m++) {
        const at = b[m];
        if (re >= Ce) {
          he(at, D, M, !0);
          continue;
        }
        let Pt;
        if (at.key != null)
          Pt = N.get(at.key);
        else
          for (K = L; K <= H; K++)
            if (mn[K - L] === 0 && En(at, y[K])) {
              Pt = K;
              break;
            }
        Pt === void 0 ? he(at, D, M, !0) : (mn[Pt - L] = m + 1, Pt >= xe ? xe = Pt : Ke = !0, S(
          at,
          y[Pt],
          v,
          null,
          D,
          M,
          V,
          U,
          p
        ), re++);
      }
      const Ro = Ke ? yf(mn) : Fn;
      for (K = Ro.length - 1, m = Ce - 1; m >= 0; m--) {
        const at = L + m, Pt = y[at], _a = y[at + 1], Sa = at + 1 < O ? (
          // #13559, fallback to el placeholder for unresolved async component
          _a.el || _a.placeholder
        ) : I;
        mn[m] === 0 ? S(
          null,
          Pt,
          v,
          Sa,
          D,
          M,
          V,
          U,
          p
        ) : Ke && (K < 0 || m !== Ro[K] ? ue(Pt, v, Sa, 2) : K--);
      }
    }
  }, ue = (b, y, v, I, D = null) => {
    const { el: M, type: V, transition: U, children: p, shapeFlag: m } = b;
    if (m & 6) {
      ue(b.component.subTree, y, v, I);
      return;
    }
    if (m & 128) {
      b.suspense.move(y, v, I);
      return;
    }
    if (m & 64) {
      V.move(b, y, v, et);
      return;
    }
    if (V === Ve) {
      r(M, y, v);
      for (let $ = 0; $ < p.length; $++)
        ue(p[$], y, v, I);
      r(b.anchor, y, v);
      return;
    }
    if (V === zo) {
      E(b, y, v);
      return;
    }
    if (I !== 2 && m & 1 && U)
      if (I === 0)
        U.beforeEnter(M), r(M, y, v), Ge(() => U.enter(M), D);
      else {
        const { leave: $, delayLeave: H, afterLeave: j } = U, L = () => {
          b.ctx.isUnmounted ? o(M) : r(M, y, v);
        }, N = () => {
          $(M, () => {
            L(), j && j();
          });
        };
        H ? H(M, L, N) : N();
      }
    else
      r(M, y, v);
  }, he = (b, y, v, I = !1, D = !1) => {
    const {
      type: M,
      props: V,
      ref: U,
      children: p,
      dynamicChildren: m,
      shapeFlag: O,
      patchFlag: $,
      dirs: H,
      cacheIndex: j
    } = b;
    if ($ === -2 && (D = !1), U != null && (Xt(), ur(U, null, v, b, !0), Jt()), j != null && (y.renderCache[j] = void 0), O & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const L = O & 1 && H, N = !Vn(b);
    let K;
    if (N && (K = V && V.onVnodeBeforeUnmount) && $t(K, y, b), O & 6)
      Lt(b.component, v, I);
    else {
      if (O & 128) {
        b.suspense.unmount(v, I);
        return;
      }
      L && hn(b, null, y, "beforeUnmount"), O & 64 ? b.type.remove(
        b,
        y,
        v,
        et,
        I
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ve || $ > 0 && $ & 64) ? Qe(
        m,
        y,
        v,
        !1,
        !0
      ) : (M === Ve && $ & 384 || !D && O & 16) && Qe(p, y, v), I && it(b);
    }
    (N && (K = V && V.onVnodeUnmounted) || L) && Ge(() => {
      K && $t(K, y, b), L && hn(b, null, y, "unmounted");
    }, v);
  }, it = (b) => {
    const { type: y, el: v, anchor: I, transition: D } = b;
    if (y === Ve) {
      Be(v, I);
      return;
    }
    if (y === zo) {
      g(b);
      return;
    }
    const M = () => {
      o(v), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (b.shapeFlag & 1 && D && !D.persisted) {
      const { leave: V, delayLeave: U } = D, p = () => V(v, M);
      U ? U(b.el, M, p) : p();
    } else
      M();
  }, Be = (b, y) => {
    let v;
    for (; b !== y; )
      v = f(b), o(b), b = v;
    o(y);
  }, Lt = (b, y, v) => {
    const {
      bum: I,
      scope: D,
      job: M,
      subTree: V,
      um: U,
      m: p,
      a: m,
      parent: O,
      slots: { __: $ }
    } = b;
    Ra(p), Ra(m), I && jo(I), O && X($) && $.forEach((H) => {
      O.renderCache[H] = void 0;
    }), D.stop(), M && (M.flags |= 8, he(V, b, y, v)), U && Ge(U, y), Ge(() => {
      b.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve());
  }, Qe = (b, y, v, I = !1, D = !1, M = 0) => {
    for (let V = M; V < b.length; V++)
      he(b[V], y, v, I, D);
  }, mt = (b) => {
    if (b.shapeFlag & 6)
      return mt(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), v = y && y[eu];
    return v ? f(v) : y;
  };
  let ht = !1;
  const wt = (b, y, v) => {
    b == null ? y._vnode && he(y._vnode, null, null, !0) : S(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      v
    ), y._vnode = b, ht || (ht = !0, La(), Jl(), ht = !1);
  }, et = {
    p: S,
    um: he,
    m: ue,
    r: it,
    mt: se,
    mc: F,
    pc: Q,
    pbc: B,
    n: mt,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: lf(wt)
  };
}
function Yo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ia(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (X(r) && X(o))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let s = o[i];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[i] = on(o[i]), s.el = a.el), !n && s.patchFlag !== -2 && ia(a, s)), s.type === Wr && (s.el = a.el), s.type === He && !s.el && (s.el = a.el);
    }
}
function yf(e) {
  const t = e.slice(), n = [0];
  let r, o, i, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (i = 0, a = n.length - 1; i < a; )
        s = i + a >> 1, e[n[s]] < u ? i = s + 1 : a = s;
      u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, a = n[i - 1]; i-- > 0; )
    n[i] = a, a = t[a];
  return n;
}
function Lu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Lu(t);
}
function Ra(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const _f = Symbol.for("v-scx"), Sf = () => dr(_f);
function st(e, t, n) {
  return wu(e, t, n);
}
function wu(e, t, n = me) {
  const { immediate: r, deep: o, flush: i, once: a } = n, s = Ae({}, n), l = t && r || !t && i !== "post";
  let u;
  if (Tr) {
    if (i === "sync") {
      const h = Sf();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Dt, h.resume = Dt, h.pause = Dt, h;
    }
  }
  const c = We;
  s.call = (h, _, S) => Ot(h, c, _, S);
  let d = !1;
  i === "post" ? s.scheduler = (h) => {
    Ge(h, c && c.suspense);
  } : i !== "sync" && (d = !0, s.scheduler = (h, _) => {
    _ ? h() : Zi(h);
  }), s.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const f = xd(e, t, s);
  return Tr && (u ? u.push(f) : l && f()), f;
}
function Ef(e, t, n) {
  const r = this.proxy, o = Le(e) ? e.includes(".") ? Pu(r, e) : () => r[e] : e.bind(r, r);
  let i;
  q(t) ? i = t : (i = t.handler, n = t);
  const a = Br(this), s = wu(o, i.bind(r), n);
  return a(), s;
}
function Pu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Tf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${Pn(t)}Modifiers`];
function Cf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let o = n;
  const i = t.startsWith("update:"), a = i && Tf(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => Le(c) ? c.trim() : c)), a.number && (o = n.map(Qc)));
  let s, l = r[s = Fo(t)] || // also try camelCase event handler (#2249)
  r[s = Fo(pt(t))];
  !l && i && (l = r[s = Fo(Pn(t))]), l && Ot(
    l,
    e,
    6,
    o
  );
  const u = r[s + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Ot(
      u,
      e,
      6,
      o
    );
  }
}
function $u(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let a = {}, s = !1;
  if (!q(e)) {
    const l = (u) => {
      const c = $u(u, t, !0);
      c && (s = !0, Ae(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !s ? (Ee(e) && r.set(e, null), null) : (X(i) ? i.forEach((l) => a[l] = null) : Ae(a, i), Ee(e) && r.set(e, a), a);
}
function Po(e, t) {
  return !e || !yo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, Pn(t)) || ce(e, t));
}
function Fa(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [i],
    slots: a,
    attrs: s,
    emit: l,
    render: u,
    renderCache: c,
    props: d,
    data: f,
    setupState: h,
    ctx: _,
    inheritAttrs: S
  } = e, C = uo(e);
  let T, x;
  try {
    if (n.shapeFlag & 4) {
      const g = o || r, w = g;
      T = Nt(
        u.call(
          w,
          g,
          c,
          d,
          h,
          f,
          _
        )
      ), x = s;
    } else {
      const g = t;
      T = Nt(
        g.length > 1 ? g(
          d,
          { attrs: s, slots: a, emit: l }
        ) : g(
          d,
          null
        )
      ), x = t.props ? s : Of(s);
    }
  } catch (g) {
    fr.length = 0, Oo(g, e, 1), T = ke(He);
  }
  let E = T;
  if (x && S !== !1) {
    const g = Object.keys(x), { shapeFlag: w } = E;
    g.length && w & 7 && (i && g.some(Fi) && (x = Lf(
      x,
      i
    )), E = un(E, x, !1, !0));
  }
  return n.dirs && (E = un(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && _r(E, n.transition), T = E, uo(C), T;
}
const Of = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || yo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lf = (e, t) => {
  const n = {};
  for (const r in e)
    (!Fi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function wf(e, t, n) {
  const { props: r, children: o, component: i } = e, { props: a, children: s, patchFlag: l } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? ja(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (a[f] !== r[f] && !Po(u, f))
          return !0;
      }
    }
  } else
    return (o || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? ja(r, a, u) : !0 : !!a;
  return !1;
}
function ja(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !Po(n, i))
      return !0;
  }
  return !1;
}
function Pf({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ku = (e) => e.__isSuspense;
function $f(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Rd(e);
}
const Ve = Symbol.for("v-fgt"), Wr = Symbol.for("v-txt"), He = Symbol.for("v-cmt"), zo = Symbol.for("v-stc"), fr = [];
let lt = null;
function be(e = !1) {
  fr.push(lt = e ? null : []);
}
function kf() {
  fr.pop(), lt = fr[fr.length - 1] || null;
}
let Sr = 1;
function Ua(e, t = !1) {
  Sr += e, e < 0 && lt && t && (lt.hasOnce = !0);
}
function Iu(e) {
  return e.dynamicChildren = Sr > 0 ? lt || Fn : null, kf(), Sr > 0 && lt && lt.push(e), e;
}
function Ze(e, t, n, r, o, i) {
  return Iu(
    Ft(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
    )
  );
}
function Ct(e, t, n, r, o) {
  return Iu(
    ke(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Nu = ({ key: e }) => e ?? null, oo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Le(e) || Re(e) || q(e) ? { i: Me, r: e, k: t, f: !!n } : e : null);
function Ft(e, t = null, n = null, r = 0, o = null, i = e === Ve ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nu(t),
    ref: t && oo(t),
    scopeId: Zl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Me
  };
  return s ? (sa(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Le(n) ? 8 : 16), Sr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  lt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && lt.push(l), l;
}
const ke = If;
function If(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === fu) && (e = He), Er(e)) {
    const s = un(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && sa(s, n), Sr > 0 && !i && lt && (s.shapeFlag & 6 ? lt[lt.indexOf(e)] = s : lt.push(s)), s.patchFlag = -2, s;
  }
  if (Vf(e) && (e = e.__vccOpts), t) {
    t = Nf(t);
    let { class: s, style: l } = t;
    s && !Le(s) && (t.class = Bn(s)), Ee(l) && (Ji(l) && !X(l) && (l = Ae({}, l)), t.style = Vi(l));
  }
  const a = Le(e) ? 1 : ku(e) ? 128 : tu(e) ? 64 : Ee(e) ? 4 : q(e) ? 2 : 0;
  return Ft(
    e,
    t,
    n,
    r,
    o,
    a,
    i,
    !0
  );
}
function Nf(e) {
  return e ? Ji(e) || _u(e) ? Ae({}, e) : e : null;
}
function un(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: a, children: s, transition: l } = e, u = t ? de(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Nu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? X(i) ? i.concat(oo(t)) : [i, oo(t)] : oo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && un(e.ssContent),
    ssFallback: e.ssFallback && un(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && _r(
    c,
    l.clone(c)
  ), c;
}
function aa(e = " ", t = 0) {
  return ke(Wr, null, e, t);
}
function vt(e = "", t = !1) {
  return t ? (be(), Ct(He, null, e)) : ke(He, null, e);
}
function Nt(e) {
  return e == null || typeof e == "boolean" ? ke(He) : X(e) ? ke(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Er(e) ? on(e) : ke(Wr, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : un(e);
}
function sa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), sa(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !_u(t) ? t._ctx = Me : o === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else q(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [aa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function de(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Bn([t.class, r.class]));
      else if (o === "style")
        t.style = Vi([t.style, r.style]);
      else if (yo(o)) {
        const i = t[o], a = r[o];
        a && i !== a && !(X(i) && i.includes(a)) && (t[o] = i ? [].concat(i, a) : a);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function $t(e, t, n, r = null) {
  Ot(e, t, 7, [
    n,
    r
  ]);
}
const Af = bu();
let xf = 0;
function Df(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Af, i = {
    uid: xf++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new $l(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Eu(r, o),
    emitsOptions: $u(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Cf.bind(null, i), e.ce && e.ce(i), i;
}
let We = null;
const jt = () => We || Me;
let po, bi;
{
  const e = To(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((a) => a(i)) : o[0](i);
    };
  };
  po = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), bi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Tr = n
  );
}
const Br = (e) => {
  const t = We;
  return po(e), e.scope.on(), () => {
    e.scope.off(), po(t);
  };
}, Va = () => {
  We && We.scope.off(), po(null);
};
function Au(e) {
  return e.vnode.shapeFlag & 4;
}
let Tr = !1;
function Mf(e, t = !1, n = !1) {
  t && bi(t);
  const { props: r, children: o } = e.vnode, i = Au(e);
  cf(e, r, i, t), mf(e, o, n || t);
  const a = i ? Rf(e, t) : void 0;
  return t && bi(!1), a;
}
function Rf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ef);
  const { setup: r } = n;
  if (r) {
    Xt();
    const o = e.setupContext = r.length > 1 ? jf(e) : null, i = Br(e), a = Vr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), s = Tl(a);
    if (Jt(), i(), (s || e.sp) && !Vn(e) && uu(e), s) {
      if (a.then(Va, Va), t)
        return a.then((l) => {
          Ha(e, l);
        }).catch((l) => {
          Oo(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ha(e, a);
  } else
    xu(e);
}
function Ha(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = zl(t)), xu(e);
}
function xu(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const o = Br(e);
    Xt();
    try {
      tf(e);
    } finally {
      Jt(), o();
    }
  }
}
const Ff = {
  get(e, t) {
    return Ue(e, "get", ""), e[t];
  }
};
function jf(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ff),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $o(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zl(Pd(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cr)
        return cr[n](e);
    },
    has(t, n) {
      return n in t || n in cr;
    }
  })) : e.proxy;
}
function Uf(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Vf(e) {
  return q(e) && "__vccOpts" in e;
}
const ft = (e, t) => Nd(e, t, Tr);
function la(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ee(t) && !X(t) ? Er(t) ? ke(e, null, [t]) : ke(e, t) : ke(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Er(n) && (n = [n]), ke(e, t, n));
}
const Hf = "3.5.18";
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vi;
const Wa = typeof window < "u" && window.trustedTypes;
if (Wa)
  try {
    vi = /* @__PURE__ */ Wa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Du = vi ? (e) => vi.createHTML(e) : (e) => e, Wf = "http://www.w3.org/2000/svg", Bf = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, Ba = Kt && /* @__PURE__ */ Kt.createElement("template"), Kf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(Wf, e) : t === "mathml" ? Kt.createElementNS(Bf, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kt.createTextNode(e),
  createComment: (e) => Kt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, i) {
    const a = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Ba.innerHTML = Du(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Ba.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, en = "transition", Jn = "animation", Cr = Symbol("_vtc"), Mu = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Yf = /* @__PURE__ */ Ae(
  {},
  ou,
  Mu
), zf = (e) => (e.displayName = "Transition", e.props = Yf, e), Gf = /* @__PURE__ */ zf(
  (e, { slots: t }) => la(Hd, Xf(e), t)
), bn = (e, t = []) => {
  X(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ka = (e) => e ? X(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xf(e) {
  const t = {};
  for (const R in e)
    R in Mu || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: a = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = i,
    appearActiveClass: u = a,
    appearToClass: c = s,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, _ = Jf(o), S = _ && _[0], C = _ && _[1], {
    onBeforeEnter: T,
    onEnter: x,
    onEnterCancelled: E,
    onLeave: g,
    onLeaveCancelled: w,
    onBeforeAppear: P = T,
    onAppear: A = x,
    onAppearCancelled: F = E
  } = t, k = (R, z, se, Te) => {
    R._enterCancelled = Te, vn(R, z ? c : s), vn(R, z ? u : a), se && se();
  }, B = (R, z) => {
    R._isLeaving = !1, vn(R, d), vn(R, h), vn(R, f), z && z();
  }, Y = (R) => (z, se) => {
    const Te = R ? A : x, ne = () => k(z, R, se);
    bn(Te, [z, ne]), Ya(() => {
      vn(z, R ? l : i), Vt(z, R ? c : s), Ka(Te) || za(z, r, S, ne);
    });
  };
  return Ae(t, {
    onBeforeEnter(R) {
      bn(T, [R]), Vt(R, i), Vt(R, a);
    },
    onBeforeAppear(R) {
      bn(P, [R]), Vt(R, l), Vt(R, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(R, z) {
      R._isLeaving = !0;
      const se = () => B(R, z);
      Vt(R, d), R._enterCancelled ? (Vt(R, f), Ja()) : (Ja(), Vt(R, f)), Ya(() => {
        R._isLeaving && (vn(R, d), Vt(R, h), Ka(g) || za(R, r, C, se));
      }), bn(g, [R, se]);
    },
    onEnterCancelled(R) {
      k(R, !1, void 0, !0), bn(E, [R]);
    },
    onAppearCancelled(R) {
      k(R, !0, void 0, !0), bn(F, [R]);
    },
    onLeaveCancelled(R) {
      B(R), bn(w, [R]);
    }
  });
}
function Jf(e) {
  if (e == null)
    return null;
  if (Ee(e))
    return [Go(e.enter), Go(e.leave)];
  {
    const t = Go(e);
    return [t, t];
  }
}
function Go(e) {
  return ed(e);
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Cr] || (e[Cr] = /* @__PURE__ */ new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Cr];
  n && (n.delete(t), n.size || (e[Cr] = void 0));
}
function Ya(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qf = 0;
function za(e, t, n, r) {
  const o = e._endId = ++qf, i = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: a, timeout: s, propCount: l } = Zf(e, t);
  if (!a)
    return r();
  const u = a + "end";
  let c = 0;
  const d = () => {
    e.removeEventListener(u, f), i();
  }, f = (h) => {
    h.target === e && ++c >= l && d();
  };
  setTimeout(() => {
    c < l && d();
  }, s + 1), e.addEventListener(u, f);
}
function Zf(e, t) {
  const n = window.getComputedStyle(e), r = (_) => (n[_] || "").split(", "), o = r(`${en}Delay`), i = r(`${en}Duration`), a = Ga(o, i), s = r(`${Jn}Delay`), l = r(`${Jn}Duration`), u = Ga(s, l);
  let c = null, d = 0, f = 0;
  t === en ? a > 0 && (c = en, d = a, f = i.length) : t === Jn ? u > 0 && (c = Jn, d = u, f = l.length) : (d = Math.max(a, u), c = d > 0 ? a > u ? en : Jn : null, f = c ? c === en ? i.length : l.length : 0);
  const h = c === en && /\b(transform|all)(,|$)/.test(
    r(`${en}Property`).toString()
  );
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: h
  };
}
function Ga(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Xa(n) + Xa(e[r])));
}
function Xa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ja() {
  return document.body.offsetHeight;
}
function Qf(e, t, n) {
  const r = e[Cr];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qa = Symbol("_vod"), ep = Symbol("_vsh"), tp = Symbol(""), np = /(^|;)\s*display\s*:/;
function rp(e, t, n) {
  const r = e.style, o = Le(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Le(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && io(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && io(r, a, "");
    for (const a in n)
      a === "display" && (i = !0), io(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[tp];
      a && (n += ";" + a), r.cssText = n, i = np.test(n);
    }
  } else t && e.removeAttribute("style");
  qa in e && (e[qa] = i ? r.display : "", e[ep] && (r.display = "none"));
}
const Za = /\s*!important$/;
function io(e, t, n) {
  if (X(n))
    n.forEach((r) => io(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = op(e, t);
    Za.test(n) ? e.setProperty(
      Pn(r),
      n.replace(Za, ""),
      "important"
    ) : e[r] = n;
  }
}
const Qa = ["Webkit", "Moz", "ms"], Xo = {};
function op(e, t) {
  const n = Xo[t];
  if (n)
    return n;
  let r = pt(t);
  if (r !== "filter" && r in e)
    return Xo[t] = r;
  r = Eo(r);
  for (let o = 0; o < Qa.length; o++) {
    const i = Qa[o] + r;
    if (i in e)
      return Xo[t] = i;
  }
  return t;
}
const es = "http://www.w3.org/1999/xlink";
function ts(e, t, n, r, o, i = ad(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(es, t.slice(6, t.length)) : e.setAttributeNS(es, t, n) : n == null || i && !Ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : qt(n) ? String(n) : n
  );
}
function ns(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Du(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const s = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Ll(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function ip(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ap(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const rs = Symbol("_vei");
function sp(e, t, n, r, o = null) {
  const i = e[rs] || (e[rs] = {}), a = i[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = lp(t);
    if (r) {
      const u = i[t] = dp(
        r,
        o
      );
      ip(e, s, u, l);
    } else a && (ap(e, s, a, l), i[t] = void 0);
  }
}
const os = /(?:Once|Passive|Capture)$/;
function lp(e) {
  let t;
  if (os.test(e)) {
    t = {};
    let r;
    for (; r = e.match(os); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pn(e.slice(2)), t];
}
let Jo = 0;
const up = /* @__PURE__ */ Promise.resolve(), cp = () => Jo || (up.then(() => Jo = 0), Jo = Date.now());
function dp(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ot(
      fp(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = cp(), n;
}
function fp(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pp = (e, t, n, r, o, i) => {
  const a = o === "svg";
  t === "class" ? Qf(e, r, a) : t === "style" ? rp(e, n, r) : yo(t) ? Fi(t) || sp(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mp(e, t, r, a)) ? (ns(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ts(e, t, r, a, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Le(r)) ? ns(e, pt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ts(e, t, r, a));
};
function mp(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && is(t) && q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return is(t) && Le(n) ? !1 : t in e;
}
const hp = /* @__PURE__ */ Ae({ patchProp: pp }, Kf);
let as;
function gp() {
  return as || (as = gf(hp));
}
const bp = (...e) => {
  const t = gp().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = yp(r);
    if (!o) return;
    const i = t._component;
    !q(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, vp(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
};
function vp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function yp(e) {
  return Le(e) ? document.querySelector(e) : e;
}
var _p = Object.defineProperty, ss = Object.getOwnPropertySymbols, Sp = Object.prototype.hasOwnProperty, Ep = Object.prototype.propertyIsEnumerable, ls = (e, t, n) => t in e ? _p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Tp = (e, t) => {
  for (var n in t || (t = {})) Sp.call(t, n) && ls(e, n, t[n]);
  if (ss) for (var n of ss(t)) Ep.call(t, n) && ls(e, n, t[n]);
  return e;
};
function $n(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function ua(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function _e(e) {
  return !$n(e);
}
function Mt(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Ru(e = {}, t = {}) {
  let n = Tp({}, e);
  return Object.keys(t).forEach((r) => {
    let o = r;
    Mt(t[o]) && o in e && Mt(e[o]) ? n[o] = Ru(e[o], t[o]) : n[o] = t[o];
  }), n;
}
function Cp(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Ru(t, n), {});
}
function ut(e, ...t) {
  return ua(e) ? e(...t) : e;
}
function ot(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function At(e) {
  return ot(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function ca(e, t = "", n = {}) {
  let r = At(t).split("."), o = r.shift();
  if (o) {
    if (Mt(e)) {
      let i = Object.keys(e).find((a) => At(a) === o) || "";
      return ca(ut(e[i], n), r.join("."), n);
    }
    return;
  }
  return ut(e, n);
}
function Fu(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Op(e) {
  return _e(e) && !isNaN(e);
}
function On(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function Lp(...e) {
  return Cp(...e);
}
function pr(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function wp(e) {
  return ot(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function ju(e) {
  return ot(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function Uu() {
  let e = /* @__PURE__ */ new Map();
  return { on(t, n) {
    let r = e.get(t);
    return r ? r.push(n) : r = [n], e.set(t, r), this;
  }, off(t, n) {
    let r = e.get(t);
    return r && r.splice(r.indexOf(n) >>> 0, 1), this;
  }, emit(t, n) {
    let r = e.get(t);
    r && r.forEach((o) => {
      o(n);
    });
  }, clear() {
    e.clear();
  } };
}
function Wn(...e) {
  if (e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (!r) continue;
      let o = typeof r;
      if (o === "string" || o === "number") t.push(r);
      else if (o === "object") {
        let i = Array.isArray(r) ? [Wn(...r)] : Object.entries(r).map(([a, s]) => s ? a : void 0);
        t = i.length ? t.concat(i.filter((a) => !!a)) : t;
      }
    }
    return t.join(" ").trim();
  }
}
function Pp(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function mo(e, t) {
  if (e && t) {
    let n = (r) => {
      Pp(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function $p() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function kp(e) {
  typeof e == "string" ? mo(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, $p() + "px"), mo(document.body, (e == null ? void 0 : e.className) || "p-overflow-hidden"));
}
function mr(e, t) {
  if (e && t) {
    let n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Ip(e) {
  typeof e == "string" ? mr(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), mr(document.body, (e == null ? void 0 : e.className) || "p-overflow-hidden"));
}
function Np() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, i = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: i };
}
function us(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Ap(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function Vu(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function xp(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Dp(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && xp(e));
}
function kn(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function ho(e, t = {}) {
  if (kn(e)) {
    let n = (r, o) => {
      var i, a;
      let s = (i = e == null ? void 0 : e.$attrs) != null && i[r] ? [(a = e == null ? void 0 : e.$attrs) == null ? void 0 : a[r]] : [];
      return [o].flat().reduce((l, u) => {
        if (u != null) {
          let c = typeof u;
          if (c === "string" || c === "number") l.push(u);
          else if (c === "object") {
            let d = Array.isArray(u) ? n(r, u) : Object.entries(u).map(([f, h]) => r === "style" && (h || h === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${h}` : h ? f : void 0);
            l = d.length ? l.concat(d.filter((f) => !!f)) : l;
          }
        }
        return l;
      }, s);
    };
    Object.entries(t).forEach(([r, o]) => {
      if (o != null) {
        let i = r.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? ho(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function Hu(e, t = {}, ...n) {
  {
    let r = document.createElement(e);
    return ho(r, t), r.append(...n), r;
  }
}
function Mp(e, t) {
  return kn(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function Rp(e, t) {
  return kn(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function Dn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Fp(e, t) {
  if (kn(e)) {
    let n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Wu(e, t = "") {
  let n = Mp(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`), r = [];
  for (let o of n) getComputedStyle(o).display != "none" && getComputedStyle(o).visibility != "hidden" && r.push(o);
  return r;
}
function qn(e, t) {
  let n = Wu(e, t);
  return n.length > 0 ? n[0] : null;
}
function cs(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function jp(e, t) {
  let n = Wu(e, t);
  return n.length > 0 ? n[n.length - 1] : null;
}
function Up(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || us(document.documentElement) || us(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function Bu(e, t) {
  return e ? e.offsetHeight : 0;
}
function ds(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Ku() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function fs(e, t = "") {
  return kn(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function Yu(e, t = "", n) {
  kn(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Jr = {};
function Vp(e = "pui_id_") {
  return Object.hasOwn(Jr, e) || (Jr[e] = 0), Jr[e]++, `${e}${Jr[e]}`;
}
function Hp() {
  let e = [], t = (a, s, l = 999) => {
    let u = o(a, s, l), c = u.value + (u.key === a ? 0 : l) + 1;
    return e.push({ key: a, value: c }), c;
  }, n = (a) => {
    e = e.filter((s) => s.value !== a);
  }, r = (a, s) => o(a).value, o = (a, s, l = 0) => [...e].reverse().find((u) => !0) || { key: a, value: l }, i = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return { get: i, set: (a, s, l) => {
    s && (s.style.zIndex = String(t(a, !0, l)));
  }, clear: (a) => {
    a && (n(i(a)), a.style.zIndex = "");
  }, getCurrent: (a) => r(a) };
}
var qo = Hp(), Wp = Object.defineProperty, Bp = Object.defineProperties, Kp = Object.getOwnPropertyDescriptors, go = Object.getOwnPropertySymbols, zu = Object.prototype.hasOwnProperty, Gu = Object.prototype.propertyIsEnumerable, ps = (e, t, n) => t in e ? Wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yt = (e, t) => {
  for (var n in t || (t = {})) zu.call(t, n) && ps(e, n, t[n]);
  if (go) for (var n of go(t)) Gu.call(t, n) && ps(e, n, t[n]);
  return e;
}, Zo = (e, t) => Bp(e, Kp(t)), Ht = (e, t) => {
  var n = {};
  for (var r in e) zu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && go) for (var r of go(e)) t.indexOf(r) < 0 && Gu.call(e, r) && (n[r] = e[r]);
  return n;
}, Yp = Uu(), De = Yp, Or = /{([^}]*)}/g, Xu = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Ju = /var\([^)]+\)/g;
function ms(e) {
  return ot(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function zp(e) {
  return Mt(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Gp(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function yi(e = "", t = "") {
  return Gp(`${ot(e, !1) && ot(t, !1) ? `${e}-` : e}${t}`);
}
function qu(e = "", t = "") {
  return `--${yi(e, t)}`;
}
function Xp(e = "") {
  let t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function Zu(e, t = "", n = "", r = [], o) {
  if (ot(e)) {
    let i = e.trim();
    if (Xp(i)) return;
    if (On(i, Or)) {
      let a = i.replaceAll(Or, (s) => {
        let l = s.replace(/{|}/g, "").split(".").filter((u) => !r.some((c) => On(u, c)));
        return `var(${qu(n, ju(l.join("-")))}${_e(o) ? `, ${o}` : ""})`;
      });
      return On(a.replace(Ju, "0"), Xu) ? `calc(${a})` : a;
    }
    return i;
  } else if (Op(e)) return e;
}
function Jp(e, t, n) {
  ot(t, !1) && e.push(`${t}:${n};`);
}
function An(e, t) {
  return e ? `${e}{${t}}` : "";
}
function Qu(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function n(a, s) {
    let l = [], u = 0, c = "", d = null, f = 0;
    for (; u <= a.length; ) {
      let h = a[u];
      if ((h === '"' || h === "'" || h === "`") && a[u - 1] !== "\\" && (d = d === h ? null : h), !d && (h === "(" && f++, h === ")" && f--, (h === "," || u === a.length) && f === 0)) {
        let _ = c.trim();
        _.startsWith("dt(") ? l.push(Qu(_, s)) : l.push(r(_)), c = "", u++;
        continue;
      }
      h !== void 0 && (c += h), u++;
    }
    return l;
  }
  function r(a) {
    let s = a[0];
    if ((s === '"' || s === "'" || s === "`") && a[a.length - 1] === s) return a.slice(1, -1);
    let l = Number(a);
    return isNaN(l) ? a : l;
  }
  let o = [], i = [];
  for (let a = 0; a < e.length; a++) if (e[a] === "d" && e.slice(a, a + 3) === "dt(") i.push(a), a += 2;
  else if (e[a] === ")" && i.length > 0) {
    let s = i.pop();
    i.length === 0 && o.push([s, a]);
  }
  if (!o.length) return e;
  for (let a = o.length - 1; a >= 0; a--) {
    let [s, l] = o[a], u = e.slice(s + 3, l), c = n(u, t), d = t(...c);
    e = e.slice(0, s) + d + e.slice(l + 1);
  }
  return e;
}
var ec = (e) => {
  var t;
  let n = fe.getTheme(), r = _i(n, e, void 0, "variable"), o = (t = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : t[0], i = _i(n, e, void 0, "value");
  return { name: o, variable: r, value: i };
}, Ln = (...e) => _i(fe.getTheme(), ...e), _i = (e = {}, t, n, r) => {
  if (t) {
    let { variable: o, options: i } = fe.defaults || {}, { prefix: a, transform: s } = (e == null ? void 0 : e.options) || i || {}, l = On(t, Or) ? t : `{${t}}`;
    return r === "value" || $n(r) && s === "strict" ? fe.getTokenValue(t) : Zu(l, void 0, a, [o.excludedKeyRegex], n);
  }
  return "";
};
function qr(e, ...t) {
  if (e instanceof Array) {
    let n = e.reduce((r, o, i) => {
      var a;
      return r + o + ((a = ut(t[i], { dt: Ln })) != null ? a : "");
    }, "");
    return Qu(n, Ln);
  }
  return ut(e, { dt: Ln });
}
function qp(e, t = {}) {
  let n = fe.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: i = n.excludedKeyRegex } = t, a = [], s = [], l = [{ node: e, path: r }];
  for (; l.length; ) {
    let { node: c, path: d } = l.pop();
    for (let f in c) {
      let h = c[f], _ = zp(h), S = On(f, i) ? yi(d) : yi(d, ju(f));
      if (Mt(_)) l.push({ node: _, path: S });
      else {
        let C = qu(S), T = Zu(_, S, r, [i]);
        Jp(s, C, T);
        let x = S;
        r && x.startsWith(r + "-") && (x = x.slice(r.length + 1)), a.push(x.replace(/-/g, "."));
      }
    }
  }
  let u = s.join("");
  return { value: s, tokens: a, declarations: u, css: An(o, u) };
}
var gt = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: !0 };
} } }, resolve(e) {
  let t = Object.keys(this.rules).filter((n) => n !== "custom").map((n) => this.rules[n]);
  return [e].flat().map((n) => {
    var r;
    return (r = t.map((o) => o.resolve(n)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(n);
  });
} }, _toVariables(e, t) {
  return qp(e, { prefix: t == null ? void 0 : t.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var i, a, s, l, u, c, d;
  let { preset: f, options: h } = t, _, S, C, T, x, E, g;
  if (_e(f) && h.transform !== "strict") {
    let { primitive: w, semantic: P, extend: A } = f, F = P || {}, { colorScheme: k } = F, B = Ht(F, ["colorScheme"]), Y = A || {}, { colorScheme: R } = Y, z = Ht(Y, ["colorScheme"]), se = k || {}, { dark: Te } = se, ne = Ht(se, ["dark"]), te = R || {}, { dark: Q } = te, Pe = Ht(te, ["dark"]), $e = _e(w) ? this._toVariables({ primitive: w }, h) : {}, ue = _e(B) ? this._toVariables({ semantic: B }, h) : {}, he = _e(ne) ? this._toVariables({ light: ne }, h) : {}, it = _e(Te) ? this._toVariables({ dark: Te }, h) : {}, Be = _e(z) ? this._toVariables({ semantic: z }, h) : {}, Lt = _e(Pe) ? this._toVariables({ light: Pe }, h) : {}, Qe = _e(Q) ? this._toVariables({ dark: Q }, h) : {}, [mt, ht] = [(i = $e.declarations) != null ? i : "", $e.tokens], [wt, et] = [(a = ue.declarations) != null ? a : "", ue.tokens || []], [Qt, b] = [(s = he.declarations) != null ? s : "", he.tokens || []], [y, v] = [(l = it.declarations) != null ? l : "", it.tokens || []], [I, D] = [(u = Be.declarations) != null ? u : "", Be.tokens || []], [M, V] = [(c = Lt.declarations) != null ? c : "", Lt.tokens || []], [U, p] = [(d = Qe.declarations) != null ? d : "", Qe.tokens || []];
    _ = this.transformCSS(e, mt, "light", "variable", h, r, o), S = ht;
    let m = this.transformCSS(e, `${wt}${Qt}`, "light", "variable", h, r, o), O = this.transformCSS(e, `${y}`, "dark", "variable", h, r, o);
    C = `${m}${O}`, T = [.../* @__PURE__ */ new Set([...et, ...b, ...v])];
    let $ = this.transformCSS(e, `${I}${M}color-scheme:light`, "light", "variable", h, r, o), H = this.transformCSS(e, `${U}color-scheme:dark`, "dark", "variable", h, r, o);
    x = `${$}${H}`, E = [.../* @__PURE__ */ new Set([...D, ...V, ...p])], g = ut(f.css, { dt: Ln });
  }
  return { primitive: { css: _, tokens: S }, semantic: { css: C, tokens: T }, global: { css: x, tokens: E }, style: g };
}, getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: i, selector: a }) {
  var s, l, u;
  let c, d, f;
  if (_e(t) && n.transform !== "strict") {
    let h = e.replace("-directive", ""), _ = t, { colorScheme: S, extend: C, css: T } = _, x = Ht(_, ["colorScheme", "extend", "css"]), E = C || {}, { colorScheme: g } = E, w = Ht(E, ["colorScheme"]), P = S || {}, { dark: A } = P, F = Ht(P, ["dark"]), k = g || {}, { dark: B } = k, Y = Ht(k, ["dark"]), R = _e(x) ? this._toVariables({ [h]: yt(yt({}, x), w) }, n) : {}, z = _e(F) ? this._toVariables({ [h]: yt(yt({}, F), Y) }, n) : {}, se = _e(A) ? this._toVariables({ [h]: yt(yt({}, A), B) }, n) : {}, [Te, ne] = [(s = R.declarations) != null ? s : "", R.tokens || []], [te, Q] = [(l = z.declarations) != null ? l : "", z.tokens || []], [Pe, $e] = [(u = se.declarations) != null ? u : "", se.tokens || []], ue = this.transformCSS(h, `${Te}${te}`, "light", "variable", n, o, i, a), he = this.transformCSS(h, Pe, "dark", "variable", n, o, i, a);
    c = `${ue}${he}`, d = [.../* @__PURE__ */ new Set([...ne, ...Q, ...$e])], f = ut(T, { dt: Ln });
  }
  return { css: c, tokens: d, style: f };
}, getPresetC({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var i;
  let { preset: a, options: s } = t, l = (i = a == null ? void 0 : a.components) == null ? void 0 : i[e];
  return this.getPreset({ name: e, preset: l, options: s, params: n, set: r, defaults: o });
}, getPresetD({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var i, a;
  let s = e.replace("-directive", ""), { preset: l, options: u } = t, c = ((i = l == null ? void 0 : l.components) == null ? void 0 : i[s]) || ((a = l == null ? void 0 : l.directives) == null ? void 0 : a[s]);
  return this.getPreset({ name: s, preset: c, options: u, params: n, set: r, defaults: o });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
}, getColorSchemeOption(e, t) {
  var n;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (n = e.darkModeSelector) != null ? n : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, n, r) {
  let { cssLayer: o } = t;
  return o ? `@layer ${ut(o.order || o.name || "primeui", n)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
  let a = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: i }), s = Object.entries(r).reduce((l, [u, c]) => l.push(`${u}="${c}"`) && l, []).join(" ");
  return Object.entries(a || {}).reduce((l, [u, c]) => {
    if (Mt(c) && Object.hasOwn(c, "css")) {
      let d = pr(c.css), f = `${u}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${d}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
  var a;
  let s = { name: e, theme: t, params: n, set: o, defaults: i }, l = (a = e.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : a.css, u = Object.entries(r).reduce((c, [d, f]) => c.push(`${d}="${f}"`) && c, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${pr(l)}</style>` : "";
}, createTokens(e = {}, t, n = "", r = "", o = {}) {
  let i = function(s, l = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: l, value: void 0 };
    u.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let c = this.value;
    if (typeof this.value == "string" && Or.test(this.value)) {
      let d = this.value.trim().replace(Or, (f) => {
        var h;
        let _ = f.slice(1, -1), S = this.tokens[_];
        if (!S) return console.warn(`Token not found for path: ${_}`), "__UNRESOLVED__";
        let C = S.computed(s, l, u);
        return Array.isArray(C) && C.length === 2 ? `light-dark(${C[0].value},${C[1].value})` : (h = C == null ? void 0 : C.value) != null ? h : "__UNRESOLVED__";
      });
      c = Xu.test(d.replace(Ju, "0")) ? `calc(${d})` : d;
    }
    return $n(l.binding) && delete l.binding, u.pop(), { colorScheme: s, path: this.path, paths: l, value: c.includes("__UNRESOLVED__") ? void 0 : c };
  }, a = (s, l, u) => {
    Object.entries(s).forEach(([c, d]) => {
      let f = On(c, t.variable.excludedKeyRegex) ? l : l ? `${l}.${ms(c)}` : ms(c), h = u ? `${u}.${c}` : c;
      Mt(d) ? a(d, f, h) : (o[f] || (o[f] = { paths: [], computed: (_, S = {}, C = []) => {
        if (o[f].paths.length === 1) return o[f].paths[0].computed(o[f].paths[0].scheme, S.binding, C);
        if (_ && _ !== "none") for (let T = 0; T < o[f].paths.length; T++) {
          let x = o[f].paths[T];
          if (x.scheme === _) return x.computed(_, S.binding, C);
        }
        return o[f].paths.map((T) => T.computed(T.scheme, S[T.scheme], C));
      } }), o[f].paths.push({ path: h, value: d, scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none", computed: i, tokens: o }));
    });
  };
  return a(e, n, r), o;
}, getTokenValue(e, t, n) {
  var r;
  let o = ((s) => s.split(".").filter((l) => !On(l.toLowerCase(), n.variable.excludedKeyRegex)).join("."))(t), i = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(r = e[o]) == null ? void 0 : r.computed(i)].flat().filter((s) => s);
  return a.length === 1 ? a[0].value : a.reduce((s = {}, l) => {
    let u = l, { colorScheme: c } = u, d = Ht(u, ["colorScheme"]);
    return s[c] = d, s;
  }, void 0);
}, getSelectorRule(e, t, n, r) {
  return n === "class" || n === "attr" ? An(_e(t) ? `${e}${t},${e} ${t}` : e, r) : An(e, An(t ?? ":root,:host", r));
}, transformCSS(e, t, n, r, o = {}, i, a, s) {
  if (_e(t)) {
    let { cssLayer: l } = o;
    if (r !== "style") {
      let u = this.getColorSchemeOption(o, a);
      t = n === "dark" ? u.reduce((c, { type: d, selector: f }) => (_e(f) && (c += f.includes("[CSS]") ? f.replace("[CSS]", t) : this.getSelectorRule(f, s, d, t)), c), "") : An(s ?? ":root,:host", t);
    }
    if (l) {
      let u = { name: "primeui" };
      Mt(l) && (u.name = ut(l.name, { name: e, type: r })), _e(u.name) && (t = An(`@layer ${u.name}`, t), i == null || i.layerNames(u.name));
    }
    return t;
  }
  return "";
} }, fe = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = Zo(yt({}, t), { options: yt(yt({}, this.defaults.options), t.options) }), this._tokens = gt.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), De.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = Zo(yt({}, this.theme), { preset: e }), this._tokens = gt.createTokens(e, this.defaults), this.clearLoadedStyleNames(), De.emit("preset:change", e), De.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = Zo(yt({}, this.theme), { options: e }), this.clearLoadedStyleNames(), De.emit("options:change", e), De.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return gt.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t) {
  return gt.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return gt.getPresetC(n);
}, getDirective(e = "", t) {
  let n = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return gt.getPresetD(n);
}, getCustomPreset(e = "", t, n, r) {
  let o = { name: e, preset: t, options: this.options, selector: n, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return gt.getPreset(o);
}, getLayerOrderCSS(e = "") {
  return gt.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t, n = "style", r) {
  return gt.transformCSS(e, t, r, n, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t, n = {}) {
  return gt.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t, n = {}) {
  return gt.getStyleSheet({ name: e, theme: this.theme, params: t, props: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t), De.emit(`theme:${t}:load`, e), !this._loadingStyles.size && De.emit("theme:load"));
} }, je = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
}, Zp = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function hs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hs(Object(n), !0).forEach(function(r) {
      Qp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qp(e, t, n) {
  return (t = em(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function em(e) {
  var t = tm(e, "string");
  return Lr(t) == "symbol" ? t : t + "";
}
function tm(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  jt() && jt().components ? zn(e) : t ? e() : qi(e);
}
var rm = 0;
function om(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Oe(!1), r = Oe(e), o = Oe(null), i = Ku() ? window.document : void 0, a = t.document, s = a === void 0 ? i : a, l = t.immediate, u = l === void 0 ? !0 : l, c = t.manual, d = c === void 0 ? !1 : c, f = t.name, h = f === void 0 ? "style_".concat(++rm) : f, _ = t.id, S = _ === void 0 ? void 0 : _, C = t.media, T = C === void 0 ? void 0 : C, x = t.nonce, E = x === void 0 ? void 0 : x, g = t.first, w = g === void 0 ? !1 : g, P = t.onMounted, A = P === void 0 ? void 0 : P, F = t.onUpdated, k = F === void 0 ? void 0 : F, B = t.onLoad, Y = B === void 0 ? void 0 : B, R = t.props, z = R === void 0 ? {} : R, se = function() {
  }, Te = function(Q) {
    var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var $e = gs(gs({}, z), Pe), ue = $e.name || h, he = $e.id || S, it = $e.nonce || E;
      o.value = s.querySelector('style[data-primevue-style-id="'.concat(ue, '"]')) || s.getElementById(he) || s.createElement("style"), o.value.isConnected || (r.value = Q || e, ho(o.value, {
        type: "text/css",
        id: he,
        media: T,
        nonce: it
      }), w ? s.head.prepend(o.value) : s.head.appendChild(o.value), Yu(o.value, "data-primevue-style-id", ue), ho(o.value, $e), o.value.onload = function(Be) {
        return Y == null ? void 0 : Y(Be, {
          name: ue
        });
      }, A == null || A(ue)), !n.value && (se = st(r, function(Be) {
        o.value.textContent = Be, k == null || k(ue);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ne = function() {
    !s || !n.value || (se(), Dp(o.value) && s.head.removeChild(o.value), n.value = !1, o.value = null);
  };
  return u && !d && nm(Te), {
    id: S,
    name: h,
    el: o,
    css: r,
    unload: ne,
    load: Te,
    isLoaded: Gi(n)
  };
}
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
var bs, vs, ys, _s;
function Ss(e, t) {
  return lm(e) || sm(e, t) || am(e, t) || im();
}
function im() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function am(e, t) {
  if (e) {
    if (typeof e == "string") return Es(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Es(e, t) : void 0;
  }
}
function Es(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function sm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function lm(e) {
  if (Array.isArray(e)) return e;
}
function Ts(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ts(Object(n), !0).forEach(function(r) {
      um(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ts(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function um(e, t, n) {
  return (t = cm(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function cm(e) {
  var t = dm(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function dm(e, t) {
  if (wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var fm = function(t) {
  var n = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(n("scrollbar.width"), `;
}
`);
}, pm = {}, mm = {}, ye = {
  name: "base",
  css: fm,
  style: Zp,
  classes: pm,
  inlineStyles: mm,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, o = r(qr(bs || (bs = Zr(["", ""])), t));
    return _e(o) ? om(pr(o), Qo({
      name: this.name
    }, n)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadStyle: function() {
    var t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, n, function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return fe.transformCSS(n.name || t.name, "".concat(o).concat(qr(vs || (vs = Zr(["", ""])), r)));
    });
  },
  getCommonTheme: function(t) {
    return fe.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return fe.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return fe.getDirective(this.name, t);
  },
  getPresetTheme: function(t, n, r) {
    return fe.getCustomPreset(this.name, t, n, r);
  },
  getLayerOrderThemeCSS: function() {
    return fe.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = ut(this.css, {
        dt: Ln
      }) || "", o = pr(qr(ys || (ys = Zr(["", "", ""])), r, t)), i = Object.entries(n).reduce(function(a, s) {
        var l = Ss(s, 2), u = l[0], c = l[1];
        return a.push("".concat(u, '="').concat(c, '"')) && a;
      }, []).join(" ");
      return _e(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fe.getCommonStyleSheet(this.name, t, n);
  },
  getThemeStyleSheet: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [fe.getStyleSheet(this.name, t, n)];
    if (this.style) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = qr(_s || (_s = Zr(["", ""])), ut(this.style, {
        dt: Ln
      })), a = pr(fe.transformCSS(o, i)), s = Object.entries(n).reduce(function(l, u) {
        var c = Ss(u, 2), d = c[0], f = c[1];
        return l.push("".concat(d, '="').concat(f, '"')) && l;
      }, []).join(" ");
      _e(a) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(s, ">").concat(a, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return Qo(Qo({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
}, sn = Uu();
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function Cs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cs(Object(n), !0).forEach(function(r) {
      hm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hm(e, t, n) {
  return (t = gm(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gm(e) {
  var t = bm(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function bm(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vm = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [je.STARTS_WITH, je.CONTAINS, je.NOT_CONTAINS, je.ENDS_WITH, je.EQUALS, je.NOT_EQUALS],
    numeric: [je.EQUALS, je.NOT_EQUALS, je.LESS_THAN, je.LESS_THAN_OR_EQUAL_TO, je.GREATER_THAN, je.GREATER_THAN_OR_EQUAL_TO],
    date: [je.DATE_IS, je.DATE_IS_NOT, je.DATE_BEFORE, je.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, ym = Symbol();
function _m(e, t) {
  var n = {
    config: Co(t)
  };
  return e.config.globalProperties.$primevue = n, e.provide(ym, n), Sm(), Em(e, n), n;
}
var Mn = [];
function Sm() {
  De.clear(), Mn.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Mn = [];
}
function Em(e, t) {
  var n = Oe(!1), r = function() {
    var u;
    if (((u = t.config) === null || u === void 0 ? void 0 : u.theme) !== "none" && !fe.isStyleNameLoaded("common")) {
      var c, d, f = ((c = ye.getCommonTheme) === null || c === void 0 ? void 0 : c.call(ye)) || {}, h = f.primitive, _ = f.semantic, S = f.global, C = f.style, T = {
        nonce: (d = t.config) === null || d === void 0 || (d = d.csp) === null || d === void 0 ? void 0 : d.nonce
      };
      ye.load(h == null ? void 0 : h.css, Qr({
        name: "primitive-variables"
      }, T)), ye.load(_ == null ? void 0 : _.css, Qr({
        name: "semantic-variables"
      }, T)), ye.load(S == null ? void 0 : S.css, Qr({
        name: "global-variables"
      }, T)), ye.loadStyle(Qr({
        name: "global-style"
      }, T), C), fe.setLoadedStyleName("common");
    }
  };
  De.on("theme:change", function(l) {
    n.value || (e.config.globalProperties.$primevue.config.theme = l, n.value = !0);
  });
  var o = st(t.config, function(l, u) {
    sn.emit("config:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = st(function() {
    return t.config.ripple;
  }, function(l, u) {
    sn.emit("config:ripple:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = st(function() {
    return t.config.theme;
  }, function(l, u) {
    n.value || fe.setTheme(l), t.config.unstyled || r(), n.value = !1, sn.emit("config:theme:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = st(function() {
    return t.config.unstyled;
  }, function(l, u) {
    !l && t.config.theme && r(), sn.emit("config:unstyled:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Mn.push(o), Mn.push(i), Mn.push(a), Mn.push(s);
}
var Tm = {
  install: function(t, n) {
    var r = Lp(vm, n);
    _m(t, r);
  }
}, an = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function Cm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = Wd();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var Os = ye.extend({
  name: "common"
});
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function Om(e) {
  return rc(e) || Lm(e) || nc(e) || tc();
}
function Lm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zn(e, t) {
  return rc(e) || wm(e, t) || nc(e, t) || tc();
}
function tc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nc(e, t) {
  if (e) {
    if (typeof e == "string") return Si(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Si(e, t) : void 0;
  }
}
function Si(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function rc(e) {
  if (Array.isArray(e)) return e;
}
function Ls(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ls(Object(n), !0).forEach(function(r) {
      rr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ls(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rr(e, t, n) {
  return (t = Pm(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Pm(e) {
  var t = $m(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function $m(e, t) {
  if ($r(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($r(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ko = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        De.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var r = this;
        De.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
          return r._loadScopedThemeStyles(t);
        }, this._themeChangeListener(this._themeScopedListener)) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  uid: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, n, r, o, i, a, s, l, u, c, d, f = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, h = f ? (n = this.pt) === null || n === void 0 || (n = n.originalValue) === null || n === void 0 ? void 0 : n[this.$.type.name] : void 0, _ = f ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (o = _ || h) === null || o === void 0 || (o = o.hooks) === null || o === void 0 || (i = o.onBeforeCreate) === null || i === void 0 || i.call(o);
    var S = (a = this.$primevueConfig) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a._usept, C = S ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.originalValue : void 0, T = S ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (c = T || C) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (d = c.onBeforeCreate) === null || d === void 0 || d.call(c), this.$attrSelector = Cm(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = Rp(kn(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = oe({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._removeThemeListeners(), this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var n = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        n == null || n(), r == null || r();
      }
    },
    _mergeProps: function(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return ua(t) ? t.apply(void 0, r) : de.apply(void 0, r);
    },
    _load: function() {
      an.isStyleNameLoaded("base") || (ye.loadCSS(this.$styleOptions), this._loadGlobalStyles(), an.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !an.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (Os.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), an.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      _e(t) && ye.load(t, oe({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, n;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!fe.isStyleNameLoaded("common")) {
          var r, o, i = ((r = this.$style) === null || r === void 0 || (o = r.getCommonTheme) === null || o === void 0 ? void 0 : o.call(r)) || {}, a = i.primitive, s = i.semantic, l = i.global, u = i.style;
          ye.load(a == null ? void 0 : a.css, oe({
            name: "primitive-variables"
          }, this.$styleOptions)), ye.load(s == null ? void 0 : s.css, oe({
            name: "semantic-variables"
          }, this.$styleOptions)), ye.load(l == null ? void 0 : l.css, oe({
            name: "global-variables"
          }, this.$styleOptions)), ye.loadStyle(oe({
            name: "global-style"
          }, this.$styleOptions), u), fe.setLoadedStyleName("common");
        }
        if (!fe.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name) {
          var c, d, f, h, _ = ((c = this.$style) === null || c === void 0 || (d = c.getComponentTheme) === null || d === void 0 ? void 0 : d.call(c)) || {}, S = _.css, C = _.style;
          (f = this.$style) === null || f === void 0 || f.load(S, oe({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (h = this.$style) === null || h === void 0 || h.loadStyle(oe({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), C), fe.setLoadedStyleName(this.$style.name);
        }
        if (!fe.isStyleNameLoaded("layer-order")) {
          var T, x, E = (T = this.$style) === null || T === void 0 || (x = T.getLayerOrderThemeCSS) === null || x === void 0 ? void 0 : x.call(T);
          ye.load(E, oe({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), fe.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var n, r, o, i = ((n = this.$style) === null || n === void 0 || (r = n.getPresetTheme) === null || r === void 0 ? void 0 : r.call(n, t, "[".concat(this.$attrSelector, "]"))) || {}, a = i.css, s = (o = this.$style) === null || o === void 0 ? void 0 : o.load(a, oe({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = s.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      an.clearLoadedStyleNames(), De.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      De.off("theme:change", this._loadCoreStyles), De.off("theme:change", this._load), De.off("theme:change", this._themeScopedListener);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var n;
      return this[t] || ((n = this._getHostInstance(this)) === null || n === void 0 ? void 0 : n[t]);
    },
    _getOptionValue: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return ca(t, n, r);
    },
    _getPTValue: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = /./g.test(r) && !!o[r.split(".")[0]], s = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = s.mergeSections, u = l === void 0 ? !0 : l, c = s.mergeProps, d = c === void 0 ? !1 : c, f = i ? a ? this._useGlobalPT(this._getPTClassValue, r, o) : this._useDefaultPT(this._getPTClassValue, r, o) : void 0, h = a ? void 0 : this._getPTSelf(n, this._getPTClassValue, r, oe(oe({}, o), {}, {
        global: f || {}
      })), _ = this._getPTDatasets(r);
      return u || !u && h ? d ? this._mergeProps(d, f, h, _) : oe(oe(oe({}, f), h), _) : oe(oe({}, h), _);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        r[o - 1] = arguments[o];
      return de(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = "data-pc-", i = r === "root" && _e((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return r !== "transition" && oe(oe({}, r === "root" && oe(oe(rr({}, "".concat(o, "name"), At(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && rr({}, "".concat(o, "extend"), At(this.$.type.name))), {}, rr({}, "".concat(this.$attrSelector), ""))), {}, rr({}, "".concat(o, "section"), At(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return ot(t) || Fu(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var n = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, i = function(s) {
        var l, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, c = o ? o(s) : s, d = At(r), f = At(n.$name);
        return (l = u ? d !== f ? c == null ? void 0 : c[d] : void 0 : c == null ? void 0 : c[d]) !== null && l !== void 0 ? l : c;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, n, r, o) {
      var i = function(S) {
        return n(S, r, o);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var a, s = t._usept || ((a = this.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, l = s.mergeSections, u = l === void 0 ? !0 : l, c = s.mergeProps, d = c === void 0 ? !1 : c, f = i(t.originalValue), h = i(t.value);
        return f === void 0 && h === void 0 ? void 0 : ot(h) ? h : ot(f) ? f : u || !u && h ? d ? this._mergeProps(d, f, h) : oe(oe({}, f), h) : h;
      }
      return i(t);
    },
    _useGlobalPT: function(t, n, r) {
      return this._usePT(this.globalPT, t, n, r);
    },
    _useDefaultPT: function(t, n, r) {
      return this._usePT(this.defaultPT, t, n, r);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, oe(oe({}, this.$params), n));
    },
    ptmi: function() {
      var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = de(this.$_attrsWithoutPT, this.ptm(n, r));
      return o != null && o.hasOwnProperty("id") && ((t = o.id) !== null && t !== void 0 || (o.id = this.$id)), o;
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, n, oe({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, oe(oe({}, this.$params), n));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (n) {
        var o = this._getOptionValue(this.$style.inlineStyles, t, oe(oe({}, this.$params), r)), i = this._getOptionValue(Os.inlineStyles, t, oe(oe({}, this.$params), r));
        return [i, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return ut(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, oe({}, n.$params)) || ut(r, oe({}, n.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $id: function() {
      return this.$attrs.id || this.uid;
    },
    $inProps: function() {
      var t, n = Object.keys(((t = this.$.vnode) === null || t === void 0 ? void 0 : t.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(r) {
        var o = Zn(r, 1), i = o[0];
        return n == null ? void 0 : n.includes(i);
      }));
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return oe(oe({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadStyle: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = Zn(t, 1), r = n[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(t, n) {
        var r = Zn(n, 2), o = r[0], i = r[1], a = o.split(":"), s = Om(a), l = Si(s).slice(1);
        return l == null || l.reduce(function(u, c, d, f) {
          return !u[c] && (u[c] = d === f.length - 1 ? i : {}), u[c];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var n = Zn(t, 1), r = n[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(t, n) {
        var r = Zn(n, 2), o = r[0], i = r[1];
        return t[o] = i, t;
      }, {});
    }
  }
}, km = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Im = ye.extend({
  name: "baseicon",
  css: km
});
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function ws(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ws(Object(n), !0).forEach(function(r) {
      Nm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ws(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Nm(e, t, n) {
  return (t = Am(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Am(e) {
  var t = xm(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function xm(e, t) {
  if (kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Io = {
  name: "BaseIcon",
  extends: ko,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: Im,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = $n(this.label);
      return Ps(Ps({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, oc = {
  name: "TimesIcon",
  extends: Io
};
function Dm(e) {
  return jm(e) || Fm(e) || Rm(e) || Mm();
}
function Mm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rm(e, t) {
  if (e) {
    if (typeof e == "string") return Ei(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ei(e, t) : void 0;
  }
}
function Fm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jm(e) {
  if (Array.isArray(e)) return Ei(e);
}
function Ei(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Um(e, t, n, r, o, i) {
  return be(), Ze("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Dm(t[0] || (t[0] = [Ft("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
oc.render = Um;
var ic = {
  name: "WindowMaximizeIcon",
  extends: Io
};
function Vm(e) {
  return Km(e) || Bm(e) || Wm(e) || Hm();
}
function Hm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wm(e, t) {
  if (e) {
    if (typeof e == "string") return Ti(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ti(e, t) : void 0;
  }
}
function Bm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Km(e) {
  if (Array.isArray(e)) return Ti(e);
}
function Ti(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ym(e, t, n, r, o, i) {
  return be(), Ze("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Vm(t[0] || (t[0] = [Ft("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
ic.render = Ym;
var ac = {
  name: "WindowMinimizeIcon",
  extends: Io
};
function zm(e) {
  return qm(e) || Jm(e) || Xm(e) || Gm();
}
function Gm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xm(e, t) {
  if (e) {
    if (typeof e == "string") return Ci(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ci(e, t) : void 0;
  }
}
function Jm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qm(e) {
  if (Array.isArray(e)) return Ci(e);
}
function Ci(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zm(e, t, n, r, o, i) {
  return be(), Ze("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), zm(t[0] || (t[0] = [Ft("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
ac.render = Zm;
var sc = {
  name: "SpinnerIcon",
  extends: Io
};
function Qm(e) {
  return rh(e) || nh(e) || th(e) || eh();
}
function eh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function th(e, t) {
  if (e) {
    if (typeof e == "string") return Oi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oi(e, t) : void 0;
  }
}
function nh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rh(e) {
  if (Array.isArray(e)) return Oi(e);
}
function Oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function oh(e, t, n, r, o, i) {
  return be(), Ze("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Qm(t[0] || (t[0] = [Ft("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
sc.render = oh;
var ih = `
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`, ah = {
  root: function(t) {
    var n = t.props, r = t.instance;
    return ["p-badge p-component", {
      "p-badge-circle": _e(n.value) && String(n.value).length === 1,
      "p-badge-dot": $n(n.value) && !r.$slots.default,
      "p-badge-sm": n.size === "small",
      "p-badge-lg": n.size === "large",
      "p-badge-xl": n.size === "xlarge",
      "p-badge-info": n.severity === "info",
      "p-badge-success": n.severity === "success",
      "p-badge-warn": n.severity === "warn",
      "p-badge-danger": n.severity === "danger",
      "p-badge-secondary": n.severity === "secondary",
      "p-badge-contrast": n.severity === "contrast"
    }];
  }
}, sh = ye.extend({
  name: "badge",
  style: ih,
  classes: ah
}), lh = {
  name: "BaseBadge",
  extends: ko,
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    severity: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  style: sh,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function $s(e, t, n) {
  return (t = uh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function uh(e) {
  var t = ch(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function ch(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ir(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lc = {
  name: "Badge",
  extends: lh,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return Wn($s($s({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, dh = ["data-p"];
function fh(e, t, n, r, o, i) {
  return be(), Ze("span", de({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [Xe(e.$slots, "default", {}, function() {
    return [aa(gr(e.value), 1)];
  })], 16, dh);
}
lc.render = fh;
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function ks(e, t) {
  return gh(e) || hh(e, t) || mh(e, t) || ph();
}
function ph() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mh(e, t) {
  if (e) {
    if (typeof e == "string") return Is(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Is(e, t) : void 0;
  }
}
function Is(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function hh(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function gh(e) {
  if (Array.isArray(e)) return e;
}
function Ns(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ns(Object(n), !0).forEach(function(r) {
      Li(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ns(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Li(e, t, n) {
  return (t = bh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bh(e) {
  var t = vh(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function vh(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Z = {
  _getMeta: function() {
    return [Mt(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], ut(Mt(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var r, o, i;
    return (r = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: ca,
  _getPTValue: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var x = Z._getOptionValue.apply(Z, arguments);
      return ot(x) || Fu(x) ? {
        class: x
      } : x;
    }, u = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, c = u.mergeSections, d = c === void 0 ? !0 : c, f = u.mergeProps, h = f === void 0 ? !1 : f, _ = s ? Z._useDefaultPT(r, r.defaultPT(), l, i, a) : void 0, S = Z._usePT(r, Z._getPT(o, r.$name), l, i, ie(ie({}, a), {}, {
      global: _ || {}
    })), C = Z._getPTDatasets(r, i);
    return d || !d && S ? h ? Z._mergeProps(r, h, _, S, C) : ie(ie(ie({}, _), S), C) : ie(ie({}, S), C);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return ie(ie({}, n === "root" && Li({}, "".concat(r, "name"), At(t.$name))), {}, Li({}, "".concat(r, "section"), At(n)));
  },
  _getPT: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, o = function(a) {
      var s, l = r ? r(a) : a, u = At(n);
      return (s = l == null ? void 0 : l[u]) !== null && s !== void 0 ? s : l;
    };
    return t && Object.hasOwn(t, "_usept") ? {
      _usept: t._usept,
      originalValue: o(t.originalValue),
      value: o(t.value)
    } : o(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, a = function(C) {
      return r(C, o, i);
    };
    if (n && Object.hasOwn(n, "_usept")) {
      var s, l = n._usept || ((s = t.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, u = l.mergeSections, c = u === void 0 ? !0 : u, d = l.mergeProps, f = d === void 0 ? !1 : d, h = a(n.originalValue), _ = a(n.value);
      return h === void 0 && _ === void 0 ? void 0 : ot(_) ? _ : ot(h) ? h : c || !c && _ ? f ? Z._mergeProps(t, f, h, _) : ie(ie({}, h), _) : _;
    }
    return a(n);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return Z._usePT(t, n, r, o, i);
  },
  _loadStyles: function() {
    var t, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, i = Z._getConfig(r, o), a = {
      nonce: i == null || (t = i.csp) === null || t === void 0 ? void 0 : t.nonce
    };
    Z._loadCoreStyles(n, a), Z._loadThemeStyles(n, a), Z._loadScopedThemeStyles(n, a), Z._removeThemeListeners(n), n.$loadStyles = function() {
      return Z._loadThemeStyles(n, a);
    }, Z._themeChangeListener(n.$loadStyles);
  },
  _loadCoreStyles: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!an.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (n = r.$style) !== null && n !== void 0 && n.name) {
      var i;
      ye.loadCSS(o), (i = r.$style) === null || i === void 0 || i.loadCSS(o), an.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, n, r, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled() || (o == null || (t = o.theme) === null || t === void 0 ? void 0 : t.call(o)) === "none")) {
      if (!fe.isStyleNameLoaded("common")) {
        var a, s, l = ((a = o.$style) === null || a === void 0 || (s = a.getCommonTheme) === null || s === void 0 ? void 0 : s.call(a)) || {}, u = l.primitive, c = l.semantic, d = l.global, f = l.style;
        ye.load(u == null ? void 0 : u.css, ie({
          name: "primitive-variables"
        }, i)), ye.load(c == null ? void 0 : c.css, ie({
          name: "semantic-variables"
        }, i)), ye.load(d == null ? void 0 : d.css, ie({
          name: "global-variables"
        }, i)), ye.loadStyle(ie({
          name: "global-style"
        }, i), f), fe.setLoadedStyleName("common");
      }
      if (!fe.isStyleNameLoaded((n = o.$style) === null || n === void 0 ? void 0 : n.name) && (r = o.$style) !== null && r !== void 0 && r.name) {
        var h, _, S, C, T = ((h = o.$style) === null || h === void 0 || (_ = h.getDirectiveTheme) === null || _ === void 0 ? void 0 : _.call(h)) || {}, x = T.css, E = T.style;
        (S = o.$style) === null || S === void 0 || S.load(x, ie({
          name: "".concat(o.$style.name, "-variables")
        }, i)), (C = o.$style) === null || C === void 0 || C.loadStyle(ie({
          name: "".concat(o.$style.name, "-style")
        }, i), E), fe.setLoadedStyleName(o.$style.name);
      }
      if (!fe.isStyleNameLoaded("layer-order")) {
        var g, w, P = (g = o.$style) === null || g === void 0 || (w = g.getLayerOrderThemeCSS) === null || w === void 0 ? void 0 : w.call(g);
        ye.load(P, ie({
          name: "layer-order",
          first: !0
        }, i)), fe.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = t.preset();
    if (r && t.$attrSelector) {
      var o, i, a, s = ((o = t.$style) === null || o === void 0 || (i = o.getPresetTheme) === null || i === void 0 ? void 0 : i.call(o, r, "[".concat(t.$attrSelector, "]"))) || {}, l = s.css, u = (a = t.$style) === null || a === void 0 ? void 0 : a.load(l, ie({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, n));
      t.scopedStyleEl = u.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    an.clearLoadedStyleNames(), De.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    De.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, n, r, o, i, a) {
    var s, l, u = "on".concat(wp(n)), c = Z._getConfig(o, i), d = r == null ? void 0 : r.$instance, f = Z._usePT(d, Z._getPT(o == null || (s = o.value) === null || s === void 0 ? void 0 : s.pt, t), Z._getOptionValue, "hooks.".concat(u)), h = Z._useDefaultPT(d, c == null || (l = c.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], Z._getOptionValue, "hooks.".concat(u)), _ = {
      el: r,
      binding: o,
      vnode: i,
      prevVnode: a
    };
    f == null || f(d, _), h == null || h(d, _);
  },
  /* eslint-disable-next-line no-unused-vars */
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      r[o - 2] = arguments[o];
    return ua(t) ? t.apply(void 0, r) : de.apply(void 0, r);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(s, l, u, c, d) {
      var f, h, _, S;
      l._$instances = l._$instances || {};
      var C = Z._getConfig(u, c), T = l._$instances[t] || {}, x = $n(T) ? ie(ie({}, n), n == null ? void 0 : n.methods) : {};
      l._$instances[t] = ie(ie({}, T), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: l,
        $binding: u,
        $modifiers: u == null ? void 0 : u.modifiers,
        $value: u == null ? void 0 : u.value,
        $el: T.$el || l || void 0,
        $style: ie({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadStyle: function() {
          }
        }, n == null ? void 0 : n.style),
        $primevueConfig: C,
        $attrSelector: (f = l.$pd) === null || f === void 0 || (f = f[t]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return Z._getPT(C == null ? void 0 : C.pt, void 0, function(g) {
            var w;
            return g == null || (w = g.directives) === null || w === void 0 ? void 0 : w[t];
          });
        },
        isUnstyled: function() {
          var g, w;
          return ((g = l._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.unstyled) !== void 0 ? (w = l._$instances[t]) === null || w === void 0 || (w = w.$binding) === null || w === void 0 || (w = w.value) === null || w === void 0 ? void 0 : w.unstyled : C == null ? void 0 : C.unstyled;
        },
        theme: function() {
          var g;
          return (g = l._$instances[t]) === null || g === void 0 || (g = g.$primevueConfig) === null || g === void 0 ? void 0 : g.theme;
        },
        preset: function() {
          var g;
          return (g = l._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.dt;
        },
        /* instance's methods */
        ptm: function() {
          var g, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return Z._getPTValue(l._$instances[t], (g = l._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.pt, w, ie({}, P));
        },
        ptmo: function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Z._getPTValue(l._$instances[t], g, w, P, !1);
        },
        cx: function() {
          var g, w, P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (g = l._$instances[t]) !== null && g !== void 0 && g.isUnstyled() ? void 0 : Z._getOptionValue((w = l._$instances[t]) === null || w === void 0 || (w = w.$style) === null || w === void 0 ? void 0 : w.classes, P, ie({}, A));
        },
        sx: function() {
          var g, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return P ? Z._getOptionValue((g = l._$instances[t]) === null || g === void 0 || (g = g.$style) === null || g === void 0 ? void 0 : g.inlineStyles, w, ie({}, A)) : void 0;
        }
      }, x), l.$instance = l._$instances[t], (h = (_ = l.$instance)[s]) === null || h === void 0 || h.call(_, l, u, c, d), l["$".concat(t)] = l.$instance, Z._hook(t, s, l, u, c, d), l.$pd || (l.$pd = {}), l.$pd[t] = ie(ie({}, (S = l.$pd) === null || S === void 0 ? void 0 : S[t]), {}, {
        name: t,
        instance: l._$instances[t]
      });
    }, o = function(s) {
      var l, u, c, d = s._$instances[t], f = d == null ? void 0 : d.watch, h = function(C) {
        var T, x = C.newValue, E = C.oldValue;
        return f == null || (T = f.config) === null || T === void 0 ? void 0 : T.call(d, x, E);
      }, _ = function(C) {
        var T, x = C.newValue, E = C.oldValue;
        return f == null || (T = f["config.ripple"]) === null || T === void 0 ? void 0 : T.call(d, x, E);
      };
      d.$watchersCallback = {
        config: h,
        "config.ripple": _
      }, f == null || (l = f.config) === null || l === void 0 || l.call(d, d == null ? void 0 : d.$primevueConfig), sn.on("config:change", h), f == null || (u = f["config.ripple"]) === null || u === void 0 || u.call(d, d == null || (c = d.$primevueConfig) === null || c === void 0 ? void 0 : c.ripple), sn.on("config:ripple:change", _);
    }, i = function(s) {
      var l = s._$instances[t].$watchersCallback;
      l && (sn.off("config:change", l.config), sn.off("config:ripple:change", l["config.ripple"]), s._$instances[t].$watchersCallback = void 0);
    };
    return {
      created: function(s, l, u, c) {
        s.$pd || (s.$pd = {}), s.$pd[t] = {
          name: t,
          attrSelector: Vp("pd")
        }, r("created", s, l, u, c);
      },
      beforeMount: function(s, l, u, c) {
        var d;
        Z._loadStyles((d = s.$pd[t]) === null || d === void 0 ? void 0 : d.instance, l, u), r("beforeMount", s, l, u, c), o(s);
      },
      mounted: function(s, l, u, c) {
        var d;
        Z._loadStyles((d = s.$pd[t]) === null || d === void 0 ? void 0 : d.instance, l, u), r("mounted", s, l, u, c);
      },
      beforeUpdate: function(s, l, u, c) {
        r("beforeUpdate", s, l, u, c);
      },
      updated: function(s, l, u, c) {
        var d;
        Z._loadStyles((d = s.$pd[t]) === null || d === void 0 ? void 0 : d.instance, l, u), r("updated", s, l, u, c);
      },
      beforeUnmount: function(s, l, u, c) {
        var d;
        i(s), Z._removeThemeListeners((d = s.$pd[t]) === null || d === void 0 ? void 0 : d.instance), r("beforeUnmount", s, l, u, c);
      },
      unmounted: function(s, l, u, c) {
        var d;
        (d = s.$pd[t]) === null || d === void 0 || (d = d.instance) === null || d === void 0 || (d = d.scopedStyleEl) === null || d === void 0 || (d = d.value) === null || d === void 0 || d.remove(), r("unmounted", s, l, u, c);
      }
    };
  },
  extend: function() {
    var t = Z._getMeta.apply(Z, arguments), n = ks(t, 2), r = n[0], o = n[1];
    return ie({
      extend: function() {
        var a = Z._getMeta.apply(Z, arguments), s = ks(a, 2), l = s[0], u = s[1];
        return Z.extend(l, ie(ie(ie({}, o), o == null ? void 0 : o.methods), u));
      }
    }, Z._extend(r, o));
  }
}, yh = `
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`, _h = {
  root: "p-ink"
}, Sh = ye.extend({
  name: "ripple-directive",
  style: yh,
  classes: _h
}), Eh = Z.extend({
  style: Sh
});
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function Th(e) {
  return wh(e) || Lh(e) || Oh(e) || Ch();
}
function Ch() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oh(e, t) {
  if (e) {
    if (typeof e == "string") return wi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wi(e, t) : void 0;
  }
}
function Lh(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wh(e) {
  if (Array.isArray(e)) return wi(e);
}
function wi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function As(e, t, n) {
  return (t = Ph(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ph(e) {
  var t = $h(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function $h(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ar(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var uc = Eh.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var n = this.getInk(t);
      n || (n = Hu("span", As(As({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root"))), t.appendChild(n), this.$el = n);
    },
    remove: function(t) {
      var n = this.getInk(t);
      n && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), n.removeEventListener("animationend", this.onAnimationEnd), n.remove());
    },
    onMouseDown: function(t) {
      var n = this, r = t.currentTarget, o = this.getInk(r);
      if (!(!o || getComputedStyle(o, null).display === "none")) {
        if (!this.isUnstyled() && mr(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !cs(o) && !ds(o)) {
          var i = Math.max(Vu(r), Bu(r));
          o.style.height = i + "px", o.style.width = i + "px";
        }
        var a = Up(r), s = t.pageX - a.left + document.body.scrollTop - ds(o) / 2, l = t.pageY - a.top + document.body.scrollLeft - cs(o) / 2;
        o.style.top = l + "px", o.style.left = s + "px", !this.isUnstyled() && mo(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!n.isUnstyled() && mr(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && mr(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Th(t.children).find(function(n) {
        return Fp(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), kh = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function kt(e, t, n) {
  return (t = Ih(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ih(e) {
  var t = Nh(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function Nh(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ah = {
  root: function(t) {
    var n = t.instance, r = t.props;
    return ["p-button p-component", kt(kt(kt(kt(kt(kt(kt(kt(kt({
      "p-button-icon-only": n.hasIcon && !r.label && !r.badge,
      "p-button-vertical": (r.iconPos === "top" || r.iconPos === "bottom") && r.label,
      "p-button-loading": r.loading,
      "p-button-link": r.link || r.variant === "link"
    }, "p-button-".concat(r.severity), r.severity), "p-button-raised", r.raised), "p-button-rounded", r.rounded), "p-button-text", r.text || r.variant === "text"), "p-button-outlined", r.outlined || r.variant === "outlined"), "p-button-sm", r.size === "small"), "p-button-lg", r.size === "large"), "p-button-plain", r.plain), "p-button-fluid", n.hasFluid)];
  },
  loadingIcon: "p-button-loading-icon",
  icon: function(t) {
    var n = t.props;
    return ["p-button-icon", kt({}, "p-button-icon-".concat(n.iconPos), n.label)];
  },
  label: "p-button-label"
}, xh = ye.extend({
  name: "button",
  style: kh,
  classes: Ah
}), Dh = {
  name: "BaseButton",
  extends: ko,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconPos: {
      type: String,
      default: "left"
    },
    iconClass: {
      type: [String, Object],
      default: null
    },
    badge: {
      type: String,
      default: null
    },
    badgeClass: {
      type: [String, Object],
      default: null
    },
    badgeSeverity: {
      type: String,
      default: "secondary"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "BUTTON"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    link: {
      type: Boolean,
      default: !1
    },
    severity: {
      type: String,
      default: null
    },
    raised: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: !1
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: xh,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function tt(e, t, n) {
  return (t = Mh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Mh(e) {
  var t = Rh(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function Rh(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cc = {
  name: "Button",
  extends: Dh,
  inheritAttrs: !1,
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var n = t === "root" ? this.ptmi : this.ptm;
      return n(t, {
        context: {
          disabled: this.disabled
        }
      });
    }
  },
  computed: {
    disabled: function() {
      return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
    },
    defaultAriaLabel: function() {
      return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs.ariaLabel;
    },
    hasIcon: function() {
      return this.icon || this.$slots.icon;
    },
    attrs: function() {
      return de(this.asAttrs, this.a11yAttrs, this.getPTOptions("root"));
    },
    asAttrs: function() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.disabled
      } : void 0;
    },
    a11yAttrs: function() {
      return {
        "aria-label": this.defaultAriaLabel,
        "data-pc-name": "button",
        "data-p-disabled": this.disabled,
        "data-p-severity": this.severity
      };
    },
    hasFluid: function() {
      return $n(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    dataP: function() {
      return Wn(tt(tt(tt(tt(tt(tt(tt(tt(tt(tt({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge), "loading", this.loading), "fluid", this.hasFluid), "rounded", this.rounded), "raised", this.raised), "outlined", this.outlined || this.variant === "outlined"), "text", this.text || this.variant === "text"), "link", this.link || this.variant === "link"), "vertical", (this.iconPos === "top" || this.iconPos === "bottom") && this.label));
    },
    dataIconP: function() {
      return Wn(tt(tt({}, this.iconPos, this.iconPos), this.size, this.size));
    },
    dataLabelP: function() {
      return Wn(tt(tt({}, this.size, this.size), "icon-only", this.hasIcon && !this.label && !this.badge));
    }
  },
  components: {
    SpinnerIcon: sc,
    Badge: lc
  },
  directives: {
    ripple: uc
  }
}, Fh = ["data-p"], jh = ["data-p"];
function Uh(e, t, n, r, o, i) {
  var a = co("SpinnerIcon"), s = co("Badge"), l = pu("ripple");
  return e.asChild ? Xe(e.$slots, "default", {
    key: 1,
    class: Bn(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : Ql((be(), Ct(fi(e.as), de({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: Tn(function() {
      return [Xe(e.$slots, "default", {}, function() {
        return [e.loading ? Xe(e.$slots, "loadingicon", de({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (be(), Ze("span", de({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (be(), Ct(a, de({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Xe(e.$slots, "icon", de({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (be(), Ze("span", de({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, Fh)) : vt("", !0)];
        }), e.label ? (be(), Ze("span", de({
          key: 2,
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), gr(e.label), 17, jh)) : vt("", !0), e.badge ? (be(), Ct(s, {
          key: 3,
          value: e.badge,
          class: Bn(e.badgeClass),
          severity: e.badgeSeverity,
          unstyled: e.unstyled,
          pt: e.ptm("pcBadge")
        }, null, 8, ["value", "class", "severity", "unstyled", "pt"])) : vt("", !0)];
      })];
    }),
    _: 3
  }, 16, ["class", "data-p"])), [[l]]);
}
cc.render = Uh;
var Vh = ye.extend({
  name: "focustrap-directive"
}), Hh = Z.extend({
  style: Vh
});
function Mr(e) {
  "@babel/helpers - typeof";
  return Mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mr(e);
}
function xs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xs(Object(n), !0).forEach(function(r) {
      Wh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Wh(e, t, n) {
  return (t = Bh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bh(e) {
  var t = Kh(e, "string");
  return Mr(t) == "symbol" ? t : t + "";
}
function Kh(e, t) {
  if (Mr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Mr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yh = Hh.extend("focustrap", {
  mounted: function(t, n) {
    var r = n.value || {}, o = r.disabled;
    o || (this.createHiddenFocusableElements(t, n), this.bind(t, n), this.autoElementFocus(t, n)), t.setAttribute("data-pd-focustrap", !0), this.$el = t;
  },
  updated: function(t, n) {
    var r = n.value || {}, o = r.disabled;
    o && this.unbind(t);
  },
  unmounted: function(t) {
    this.unbind(t);
  },
  methods: {
    getComputedSelector: function(t) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t ?? "");
    },
    bind: function(t, n) {
      var r = this, o = n.value || {}, i = o.onFocusIn, a = o.onFocusOut;
      t.$_pfocustrap_mutationobserver = new MutationObserver(function(s) {
        s.forEach(function(l) {
          if (l.type === "childList" && !t.contains(document.activeElement)) {
            var u = function(d) {
              var f = fs(d) ? fs(d, r.getComputedSelector(t.$_pfocustrap_focusableselector)) ? d : qn(t, r.getComputedSelector(t.$_pfocustrap_focusableselector)) : qn(d);
              return _e(f) ? f : d.nextSibling && u(d.nextSibling);
            };
            Dn(u(l.nextSibling));
          }
        });
      }), t.$_pfocustrap_mutationobserver.disconnect(), t.$_pfocustrap_mutationobserver.observe(t, {
        childList: !0
      }), t.$_pfocustrap_focusinlistener = function(s) {
        return i && i(s);
      }, t.$_pfocustrap_focusoutlistener = function(s) {
        return a && a(s);
      }, t.addEventListener("focusin", t.$_pfocustrap_focusinlistener), t.addEventListener("focusout", t.$_pfocustrap_focusoutlistener);
    },
    unbind: function(t) {
      t.$_pfocustrap_mutationobserver && t.$_pfocustrap_mutationobserver.disconnect(), t.$_pfocustrap_focusinlistener && t.removeEventListener("focusin", t.$_pfocustrap_focusinlistener) && (t.$_pfocustrap_focusinlistener = null), t.$_pfocustrap_focusoutlistener && t.removeEventListener("focusout", t.$_pfocustrap_focusoutlistener) && (t.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function(t) {
      this.autoElementFocus(this.$el, {
        value: Ds(Ds({}, t), {}, {
          autoFocus: !0
        })
      });
    },
    autoElementFocus: function(t, n) {
      var r = n.value || {}, o = r.autoFocusSelector, i = o === void 0 ? "" : o, a = r.firstFocusableSelector, s = a === void 0 ? "" : a, l = r.autoFocus, u = l === void 0 ? !1 : l, c = qn(t, "[autofocus]".concat(this.getComputedSelector(i)));
      u && !c && (c = qn(t, this.getComputedSelector(s))), Dn(c);
    },
    onFirstHiddenElementFocus: function(t) {
      var n, r = t.currentTarget, o = t.relatedTarget, i = o === r.$_pfocustrap_lasthiddenfocusableelement || !((n = this.$el) !== null && n !== void 0 && n.contains(o)) ? qn(r.parentElement, this.getComputedSelector(r.$_pfocustrap_focusableselector)) : r.$_pfocustrap_lasthiddenfocusableelement;
      Dn(i);
    },
    onLastHiddenElementFocus: function(t) {
      var n, r = t.currentTarget, o = t.relatedTarget, i = o === r.$_pfocustrap_firsthiddenfocusableelement || !((n = this.$el) !== null && n !== void 0 && n.contains(o)) ? jp(r.parentElement, this.getComputedSelector(r.$_pfocustrap_focusableselector)) : r.$_pfocustrap_firsthiddenfocusableelement;
      Dn(i);
    },
    createHiddenFocusableElements: function(t, n) {
      var r = this, o = n.value || {}, i = o.tabIndex, a = i === void 0 ? 0 : i, s = o.firstFocusableSelector, l = s === void 0 ? "" : s, u = o.lastFocusableSelector, c = u === void 0 ? "" : u, d = function(S) {
        return Hu("span", {
          class: "p-hidden-accessible p-hidden-focusable",
          tabIndex: a,
          role: "presentation",
          "aria-hidden": !0,
          "data-p-hidden-accessible": !0,
          "data-p-hidden-focusable": !0,
          onFocus: S == null ? void 0 : S.bind(r)
        });
      }, f = d(this.onFirstHiddenElementFocus), h = d(this.onLastHiddenElementFocus);
      f.$_pfocustrap_lasthiddenfocusableelement = h, f.$_pfocustrap_focusableselector = l, f.setAttribute("data-pc-section", "firstfocusableelement"), h.$_pfocustrap_firsthiddenfocusableelement = f, h.$_pfocustrap_focusableselector = c, h.setAttribute("data-pc-section", "lastfocusableelement"), t.prepend(f), t.append(h);
    }
  }
}), dc = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = Ku();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function zh(e, t, n, r, o, i) {
  return i.inline ? Xe(e.$slots, "default", {
    key: 0
  }) : o.mounted ? (be(), Ct(jd, {
    key: 1,
    to: n.appendTo
  }, [Xe(e.$slots, "default")], 8, ["to"])) : vt("", !0);
}
dc.render = zh;
function Ms() {
  kp({
    variableName: ec("scrollbar.width").name
  });
}
function Rs() {
  Ip({
    variableName: ec("scrollbar.width").name
  });
}
var Gh = `
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 0.75rem;
        transform: translate3d(0px, 0px, 0px);
    }

    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-top .p-dialog-leave-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-leave-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-left .p-dialog-leave-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-right .p-dialog-leave-active,
    .p-dialog-topleft .p-dialog-enter-active,
    .p-dialog-topleft .p-dialog-leave-active,
    .p-dialog-topright .p-dialog-enter-active,
    .p-dialog-topright .p-dialog-leave-active,
    .p-dialog-bottomleft .p-dialog-enter-active,
    .p-dialog-bottomleft .p-dialog-leave-active,
    .p-dialog-bottomright .p-dialog-enter-active,
    .p-dialog-bottomright .p-dialog-leave-active {
        transition: all 0.3s ease-out;
    }

    .p-dialog-top .p-dialog-enter-from,
    .p-dialog-top .p-dialog-leave-to {
        transform: translate3d(0px, -100%, 0px);
    }

    .p-dialog-bottom .p-dialog-enter-from,
    .p-dialog-bottom .p-dialog-leave-to {
        transform: translate3d(0px, 100%, 0px);
    }

    .p-dialog-left .p-dialog-enter-from,
    .p-dialog-left .p-dialog-leave-to,
    .p-dialog-topleft .p-dialog-enter-from,
    .p-dialog-topleft .p-dialog-leave-to,
    .p-dialog-bottomleft .p-dialog-enter-from,
    .p-dialog-bottomleft .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-right .p-dialog-enter-from,
    .p-dialog-right .p-dialog-leave-to,
    .p-dialog-topright .p-dialog-enter-from,
    .p-dialog-topright .p-dialog-leave-to,
    .p-dialog-bottomright .p-dialog-enter-from,
    .p-dialog-bottomright .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-left:dir(rtl) .p-dialog-enter-from,
    .p-dialog-left:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(100%, 0px, 0px);
    }

    .p-dialog-right:dir(rtl) .p-dialog-enter-from,
    .p-dialog-right:dir(rtl) .p-dialog-leave-to,
    .p-dialog-topright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-topright:dir(rtl) .p-dialog-leave-to,
    .p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
    .p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
        transform: translate3d(-100%, 0px, 0px);
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`, Xh = {
  mask: function(t) {
    var n = t.position, r = t.modal;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: n === "left" || n === "topleft" || n === "bottomleft" ? "flex-start" : n === "right" || n === "topright" || n === "bottomright" ? "flex-end" : "center",
      alignItems: n === "top" || n === "topleft" || n === "topright" ? "flex-start" : n === "bottom" || n === "bottomleft" || n === "bottomright" ? "flex-end" : "center",
      pointerEvents: r ? "auto" : "none"
    };
  },
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
}, Jh = {
  mask: function(t) {
    var n = t.props, r = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"], o = r.find(function(i) {
      return i === n.position;
    });
    return ["p-dialog-mask", {
      "p-overlay-mask p-overlay-mask-enter": n.modal
    }, o ? "p-dialog-".concat(o) : ""];
  },
  root: function(t) {
    var n = t.props, r = t.instance;
    return ["p-dialog p-component", {
      "p-dialog-maximized": n.maximizable && r.maximized
    }];
  },
  header: "p-dialog-header",
  title: "p-dialog-title",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
}, qh = ye.extend({
  name: "dialog",
  style: Gh,
  classes: Jh,
  inlineStyles: Xh
}), Zh = {
  name: "BaseDialog",
  extends: ko,
  props: {
    header: {
      type: null,
      default: null
    },
    footer: {
      type: null,
      default: null
    },
    visible: {
      type: Boolean,
      default: !1
    },
    modal: {
      type: Boolean,
      default: null
    },
    contentStyle: {
      type: null,
      default: null
    },
    contentClass: {
      type: String,
      default: null
    },
    contentProps: {
      type: null,
      default: null
    },
    maximizable: {
      type: Boolean,
      default: !1
    },
    dismissableMask: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    blockScroll: {
      type: Boolean,
      default: !1
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    position: {
      type: String,
      default: "center"
    },
    breakpoints: {
      type: Object,
      default: null
    },
    draggable: {
      type: Boolean,
      default: !0
    },
    keepInViewport: {
      type: Boolean,
      default: !0
    },
    minX: {
      type: Number,
      default: 0
    },
    minY: {
      type: Number,
      default: 0
    },
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    maximizeIcon: {
      type: String,
      default: void 0
    },
    minimizeIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    maximizeButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary",
          text: !0,
          rounded: !0
        };
      }
    },
    _instance: null
  },
  style: qh,
  provide: function() {
    return {
      $pcDialog: this,
      $parentInstance: this
    };
  }
}, fc = {
  name: "Dialog",
  extends: Zh,
  inheritAttrs: !1,
  emits: ["update:visible", "show", "hide", "after-hide", "maximize", "unmaximize", "dragstart", "dragend"],
  provide: function() {
    var t = this;
    return {
      dialogRef: ft(function() {
        return t._instance;
      })
    };
  },
  data: function() {
    return {
      containerVisible: this.visible,
      maximized: !1,
      focusableMax: null,
      focusableClose: null,
      target: null
    };
  },
  documentKeydownListener: null,
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  maximizableButton: null,
  closeButton: null,
  styleElement: null,
  dragging: null,
  documentDragListener: null,
  documentDragEndListener: null,
  lastPageX: null,
  lastPageY: null,
  maskMouseDownTarget: null,
  updated: function() {
    this.visible && (this.containerVisible = this.visible);
  },
  beforeUnmount: function() {
    this.unbindDocumentState(), this.unbindGlobalListeners(), this.destroyStyle(), this.mask && this.autoZIndex && qo.clear(this.mask), this.container = null, this.mask = null;
  },
  mounted: function() {
    this.breakpoints && this.createStyle();
  },
  methods: {
    close: function() {
      this.$emit("update:visible", !1);
    },
    onEnter: function() {
      this.$emit("show"), this.target = document.activeElement, this.enableDocumentSettings(), this.bindGlobalListeners(), this.autoZIndex && qo.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
    },
    onAfterEnter: function() {
      this.focus();
    },
    onBeforeLeave: function() {
      this.modal && !this.isUnstyled && mo(this.mask, "p-overlay-mask-leave"), this.dragging && this.documentDragEndListener && this.documentDragEndListener();
    },
    onLeave: function() {
      this.$emit("hide"), Dn(this.target), this.target = null, this.focusableClose = null, this.focusableMax = null;
    },
    onAfterLeave: function() {
      this.autoZIndex && qo.clear(this.mask), this.containerVisible = !1, this.unbindDocumentState(), this.unbindGlobalListeners(), this.$emit("after-hide");
    },
    onMaskMouseDown: function(t) {
      this.maskMouseDownTarget = t.target;
    },
    onMaskMouseUp: function() {
      this.dismissableMask && this.modal && this.mask === this.maskMouseDownTarget && this.close();
    },
    focus: function() {
      var t = function(o) {
        return o && o.querySelector("[autofocus]");
      }, n = this.$slots.footer && t(this.footerContainer);
      n || (n = this.$slots.header && t(this.headerContainer), n || (n = this.$slots.default && t(this.content), n || (this.maximizable ? (this.focusableMax = !0, n = this.maximizableButton) : (this.focusableClose = !0, n = this.closeButton)))), n && Dn(n, {
        focusVisible: !0
      });
    },
    maximize: function(t) {
      this.maximized ? (this.maximized = !1, this.$emit("unmaximize", t)) : (this.maximized = !0, this.$emit("maximize", t)), this.modal || (this.maximized ? Ms() : Rs());
    },
    enableDocumentSettings: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Ms();
    },
    unbindDocumentState: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Rs();
    },
    onKeyDown: function(t) {
      t.code === "Escape" && this.closeOnEscape && this.close();
    },
    bindDocumentKeyDownListener: function() {
      this.documentKeydownListener || (this.documentKeydownListener = this.onKeyDown.bind(this), window.document.addEventListener("keydown", this.documentKeydownListener));
    },
    unbindDocumentKeyDownListener: function() {
      this.documentKeydownListener && (window.document.removeEventListener("keydown", this.documentKeydownListener), this.documentKeydownListener = null);
    },
    containerRef: function(t) {
      this.container = t;
    },
    maskRef: function(t) {
      this.mask = t;
    },
    contentRef: function(t) {
      this.content = t;
    },
    headerContainerRef: function(t) {
      this.headerContainer = t;
    },
    footerContainerRef: function(t) {
      this.footerContainer = t;
    },
    maximizableRef: function(t) {
      this.maximizableButton = t ? t.$el : void 0;
    },
    closeButtonRef: function(t) {
      this.closeButton = t ? t.$el : void 0;
    },
    createStyle: function() {
      if (!this.styleElement && !this.isUnstyled) {
        var t;
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", Yu(this.styleElement, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.head.appendChild(this.styleElement);
        var n = "";
        for (var r in this.breakpoints)
          n += `
                        @media screen and (max-width: `.concat(r, `) {
                            .p-dialog[`).concat(this.$attrSelector, `] {
                                width: `).concat(this.breakpoints[r], ` !important;
                            }
                        }
                    `);
        this.styleElement.innerHTML = n;
      }
    },
    destroyStyle: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    },
    initDrag: function(t) {
      t.target.closest("div").getAttribute("data-pc-section") !== "headeractions" && this.draggable && (this.dragging = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, this.container.style.margin = "0", document.body.setAttribute("data-p-unselectable-text", "true"), !this.isUnstyled && Ap(document.body, {
        "user-select": "none"
      }), this.$emit("dragstart", t));
    },
    bindGlobalListeners: function() {
      this.draggable && (this.bindDocumentDragListener(), this.bindDocumentDragEndListener()), this.closeOnEscape && this.bindDocumentKeyDownListener();
    },
    unbindGlobalListeners: function() {
      this.unbindDocumentDragListener(), this.unbindDocumentDragEndListener(), this.unbindDocumentKeyDownListener();
    },
    bindDocumentDragListener: function() {
      var t = this;
      this.documentDragListener = function(n) {
        if (t.dragging) {
          var r = Vu(t.container), o = Bu(t.container), i = n.pageX - t.lastPageX, a = n.pageY - t.lastPageY, s = t.container.getBoundingClientRect(), l = s.left + i, u = s.top + a, c = Np(), d = getComputedStyle(t.container), f = parseFloat(d.marginLeft), h = parseFloat(d.marginTop);
          t.container.style.position = "fixed", t.keepInViewport ? (l >= t.minX && l + r < c.width && (t.lastPageX = n.pageX, t.container.style.left = l - f + "px"), u >= t.minY && u + o < c.height && (t.lastPageY = n.pageY, t.container.style.top = u - h + "px")) : (t.lastPageX = n.pageX, t.container.style.left = l - f + "px", t.lastPageY = n.pageY, t.container.style.top = u - h + "px");
        }
      }, window.document.addEventListener("mousemove", this.documentDragListener);
    },
    unbindDocumentDragListener: function() {
      this.documentDragListener && (window.document.removeEventListener("mousemove", this.documentDragListener), this.documentDragListener = null);
    },
    bindDocumentDragEndListener: function() {
      var t = this;
      this.documentDragEndListener = function(n) {
        t.dragging && (t.dragging = !1, document.body.removeAttribute("data-p-unselectable-text"), !t.isUnstyled && (document.body.style["user-select"] = ""), t.$emit("dragend", n));
      }, window.document.addEventListener("mouseup", this.documentDragEndListener);
    },
    unbindDocumentDragEndListener: function() {
      this.documentDragEndListener && (window.document.removeEventListener("mouseup", this.documentDragEndListener), this.documentDragEndListener = null);
    }
  },
  computed: {
    maximizeIconComponent: function() {
      return this.maximized ? this.minimizeIcon ? "span" : "WindowMinimizeIcon" : this.maximizeIcon ? "span" : "WindowMaximizeIcon";
    },
    ariaLabelledById: function() {
      return this.header != null || this.$attrs["aria-labelledby"] !== null ? this.$id + "_header" : null;
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    dataP: function() {
      return Wn({
        maximized: this.maximized,
        modal: this.modal
      });
    }
  },
  directives: {
    ripple: uc,
    focustrap: Yh
  },
  components: {
    Button: cc,
    Portal: dc,
    WindowMinimizeIcon: ac,
    WindowMaximizeIcon: ic,
    TimesIcon: oc
  }
};
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function Fs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fs(Object(n), !0).forEach(function(r) {
      Qh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qh(e, t, n) {
  return (t = eg(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eg(e) {
  var t = tg(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function tg(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Rr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ng = ["data-p"], rg = ["aria-labelledby", "aria-modal", "data-p"], og = ["id"], ig = ["data-p"];
function ag(e, t, n, r, o, i) {
  var a = co("Button"), s = co("Portal"), l = pu("focustrap");
  return be(), Ct(s, {
    appendTo: e.appendTo
  }, {
    default: Tn(function() {
      return [o.containerVisible ? (be(), Ze("div", de({
        key: 0,
        ref: i.maskRef,
        class: e.cx("mask"),
        style: e.sx("mask", !0, {
          position: e.position,
          modal: e.modal
        }),
        onMousedown: t[1] || (t[1] = function() {
          return i.onMaskMouseDown && i.onMaskMouseDown.apply(i, arguments);
        }),
        onMouseup: t[2] || (t[2] = function() {
          return i.onMaskMouseUp && i.onMaskMouseUp.apply(i, arguments);
        }),
        "data-p": i.dataP
      }, e.ptm("mask")), [ke(Gf, de({
        name: "p-dialog",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onBeforeLeave: i.onBeforeLeave,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave,
        appear: ""
      }, e.ptm("transition")), {
        default: Tn(function() {
          return [e.visible ? Ql((be(), Ze("div", de({
            key: 0,
            ref: i.containerRef,
            class: e.cx("root"),
            style: e.sx("root"),
            role: "dialog",
            "aria-labelledby": i.ariaLabelledById,
            "aria-modal": e.modal,
            "data-p": i.dataP
          }, e.ptmi("root")), [e.$slots.container ? Xe(e.$slots, "container", {
            key: 0,
            closeCallback: i.close,
            maximizeCallback: function(c) {
              return i.maximize(c);
            },
            initDragCallback: i.initDrag
          }) : (be(), Ze(Ve, {
            key: 1
          }, [e.showHeader ? (be(), Ze("div", de({
            key: 0,
            ref: i.headerContainerRef,
            class: e.cx("header"),
            onMousedown: t[0] || (t[0] = function() {
              return i.initDrag && i.initDrag.apply(i, arguments);
            })
          }, e.ptm("header")), [Xe(e.$slots, "header", {
            class: Bn(e.cx("title"))
          }, function() {
            return [e.header ? (be(), Ze("span", de({
              key: 0,
              id: i.ariaLabelledById,
              class: e.cx("title")
            }, e.ptm("title")), gr(e.header), 17, og)) : vt("", !0)];
          }), Ft("div", de({
            class: e.cx("headerActions")
          }, e.ptm("headerActions")), [e.maximizable ? Xe(e.$slots, "maximizebutton", {
            key: 0,
            maximized: o.maximized,
            maximizeCallback: function(c) {
              return i.maximize(c);
            }
          }, function() {
            return [ke(a, de({
              ref: i.maximizableRef,
              autofocus: o.focusableMax,
              class: e.cx("pcMaximizeButton"),
              onClick: i.maximize,
              tabindex: e.maximizable ? "0" : "-1",
              unstyled: e.unstyled
            }, e.maximizeButtonProps, {
              pt: e.ptm("pcMaximizeButton"),
              "data-pc-group-section": "headericon"
            }), {
              icon: Tn(function(u) {
                return [Xe(e.$slots, "maximizeicon", {
                  maximized: o.maximized
                }, function() {
                  return [(be(), Ct(fi(i.maximizeIconComponent), de({
                    class: [u.class, o.maximized ? e.minimizeIcon : e.maximizeIcon]
                  }, e.ptm("pcMaximizeButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["autofocus", "class", "onClick", "tabindex", "unstyled", "pt"])];
          }) : vt("", !0), e.closable ? Xe(e.$slots, "closebutton", {
            key: 1,
            closeCallback: i.close
          }, function() {
            return [ke(a, de({
              ref: i.closeButtonRef,
              autofocus: o.focusableClose,
              class: e.cx("pcCloseButton"),
              onClick: i.close,
              "aria-label": i.closeAriaLabel,
              unstyled: e.unstyled
            }, e.closeButtonProps, {
              pt: e.ptm("pcCloseButton"),
              "data-pc-group-section": "headericon"
            }), {
              icon: Tn(function(u) {
                return [Xe(e.$slots, "closeicon", {}, function() {
                  return [(be(), Ct(fi(e.closeIcon ? "span" : "TimesIcon"), de({
                    class: [e.closeIcon, u.class]
                  }, e.ptm("pcCloseButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["autofocus", "class", "onClick", "aria-label", "unstyled", "pt"])];
          }) : vt("", !0)], 16)], 16)) : vt("", !0), Ft("div", de({
            ref: i.contentRef,
            class: [e.cx("content"), e.contentClass],
            style: e.contentStyle,
            "data-p": i.dataP
          }, js(js({}, e.contentProps), e.ptm("content"))), [Xe(e.$slots, "default")], 16, ig), e.footer || e.$slots.footer ? (be(), Ze("div", de({
            key: 1,
            ref: i.footerContainerRef,
            class: e.cx("footer")
          }, e.ptm("footer")), [Xe(e.$slots, "footer", {}, function() {
            return [aa(gr(e.footer), 1)];
          })], 16)) : vt("", !0)], 64))], 16, rg)), [[l, {
            disabled: !e.modal
          }]]) : vt("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, ng)) : vt("", !0)];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
fc.render = ag;
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function sg(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bo = typeof window < "u", dn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), lg = (e, t, n) => ug({ l: e, k: t, s: n }), ug = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), we = (e) => typeof e == "number" && isFinite(e), cg = (e) => mc(e) === "[object Date]", cn = (e) => mc(e) === "[object RegExp]", No = (e) => J(e) && Object.keys(e).length === 0, Fe = Object.assign, dg = Object.create, pe = (e = null) => dg(e);
let Us;
const Gt = () => Us || (Us = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : pe());
function Vs(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Hs(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function fg(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, i) => `${o}="${Hs(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, i) => `${o}='${Hs(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const pg = Object.prototype.hasOwnProperty;
function _t(e, t) {
  return pg.call(e, t);
}
const Se = Array.isArray, ve = (e) => typeof e == "function", W = (e) => typeof e == "string", ee = (e) => typeof e == "boolean", ae = (e) => e !== null && typeof e == "object", mg = (e) => ae(e) && ve(e.then) && ve(e.catch), pc = Object.prototype.toString, mc = (e) => pc.call(e), J = (e) => {
  if (!ae(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, hg = (e) => e == null ? "" : Se(e) || J(e) && e.toString === pc ? JSON.stringify(e, null, 2) : String(e);
function gg(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function Ao(e) {
  let t = e;
  return () => ++t;
}
const eo = (e) => !ae(e) || Se(e);
function ao(e, t) {
  if (eo(e) || eo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" && (ae(r[i]) && !ae(o[i]) && (o[i] = Array.isArray(r[i]) ? [] : pe()), eo(o[i]) || eo(r[i]) ? o[i] = r[i] : n.push({ src: r[i], des: o[i] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function bg(e, t, n) {
  return { line: e, column: t, offset: n };
}
function vo(e, t, n) {
  return { start: e, end: t };
}
const vg = /\{([0-9a-zA-Z]+)\}/g;
function hc(e, ...t) {
  return t.length === 1 && yg(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(vg, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const gc = Object.assign, Ws = (e) => typeof e == "string", yg = (e) => e !== null && typeof e == "object";
function bc(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const da = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, _g = {
  [da.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Sg(e, t, ...n) {
  const r = hc(_g[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const G = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, Eg = {
  // tokenizer error messages
  [G.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [G.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [G.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [G.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [G.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [G.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [G.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [G.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [G.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [G.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [G.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [G.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [G.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [G.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [G.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Gn(e, t, n = {}) {
  const { domain: r, messages: o, args: i } = n, a = hc((o || Eg)[e] || "", ...i || []), s = new SyntaxError(String(a));
  return s.code = e, t && (s.location = t), s.domain = r, s;
}
function Tg(e) {
  throw e;
}
const Wt = " ", Cg = "\r", ze = `
`, Og = "\u2028", Lg = "\u2029";
function wg(e) {
  const t = e;
  let n = 0, r = 1, o = 1, i = 0;
  const a = (A) => t[A] === Cg && t[A + 1] === ze, s = (A) => t[A] === ze, l = (A) => t[A] === Lg, u = (A) => t[A] === Og, c = (A) => a(A) || s(A) || l(A) || u(A), d = () => n, f = () => r, h = () => o, _ = () => i, S = (A) => a(A) || l(A) || u(A) ? ze : t[A], C = () => S(n), T = () => S(n + i);
  function x() {
    return i = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function E() {
    return a(n + i) && i++, i++, t[n + i];
  }
  function g() {
    n = 0, r = 1, o = 1, i = 0;
  }
  function w(A = 0) {
    i = A;
  }
  function P() {
    const A = n + i;
    for (; A !== n; )
      x();
    i = 0;
  }
  return {
    index: d,
    line: f,
    column: h,
    peekOffset: _,
    charAt: S,
    currentChar: C,
    currentPeek: T,
    next: x,
    peek: E,
    reset: g,
    resetPeek: w,
    skipToPeek: P
  };
}
const tn = void 0, Pg = ".", Bs = "'", $g = "tokenizer";
function kg(e, t = {}) {
  const n = t.location !== !1, r = wg(e), o = () => r.index(), i = () => bg(r.line(), r.column(), r.index()), a = i(), s = o(), l = {
    currentType: 14,
    offset: s,
    startLoc: a,
    endLoc: a,
    lastType: 14,
    lastOffset: s,
    lastStartLoc: a,
    lastEndLoc: a,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function d(p, m, O, ...$) {
    const H = u();
    if (m.column += O, m.offset += O, c) {
      const j = n ? vo(H.startLoc, m) : null, L = Gn(p, j, {
        domain: $g,
        args: $
      });
      c(L);
    }
  }
  function f(p, m, O) {
    p.endLoc = i(), p.currentType = m;
    const $ = { type: m };
    return n && ($.loc = vo(p.startLoc, p.endLoc)), O != null && ($.value = O), $;
  }
  const h = (p) => f(
    p,
    14
    /* TokenTypes.EOF */
  );
  function _(p, m) {
    return p.currentChar() === m ? (p.next(), m) : (d(G.EXPECTED_TOKEN, i(), 0, m), "");
  }
  function S(p) {
    let m = "";
    for (; p.currentPeek() === Wt || p.currentPeek() === ze; )
      m += p.currentPeek(), p.peek();
    return m;
  }
  function C(p) {
    const m = S(p);
    return p.skipToPeek(), m;
  }
  function T(p) {
    if (p === tn)
      return !1;
    const m = p.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function x(p) {
    if (p === tn)
      return !1;
    const m = p.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function E(p, m) {
    const { currentType: O } = m;
    if (O !== 2)
      return !1;
    S(p);
    const $ = T(p.currentPeek());
    return p.resetPeek(), $;
  }
  function g(p, m) {
    const { currentType: O } = m;
    if (O !== 2)
      return !1;
    S(p);
    const $ = p.currentPeek() === "-" ? p.peek() : p.currentPeek(), H = x($);
    return p.resetPeek(), H;
  }
  function w(p, m) {
    const { currentType: O } = m;
    if (O !== 2)
      return !1;
    S(p);
    const $ = p.currentPeek() === Bs;
    return p.resetPeek(), $;
  }
  function P(p, m) {
    const { currentType: O } = m;
    if (O !== 8)
      return !1;
    S(p);
    const $ = p.currentPeek() === ".";
    return p.resetPeek(), $;
  }
  function A(p, m) {
    const { currentType: O } = m;
    if (O !== 9)
      return !1;
    S(p);
    const $ = T(p.currentPeek());
    return p.resetPeek(), $;
  }
  function F(p, m) {
    const { currentType: O } = m;
    if (!(O === 8 || O === 12))
      return !1;
    S(p);
    const $ = p.currentPeek() === ":";
    return p.resetPeek(), $;
  }
  function k(p, m) {
    const { currentType: O } = m;
    if (O !== 10)
      return !1;
    const $ = () => {
      const j = p.currentPeek();
      return j === "{" ? T(p.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Wt || !j ? !1 : j === ze ? (p.peek(), $()) : R(p, !1);
    }, H = $();
    return p.resetPeek(), H;
  }
  function B(p) {
    S(p);
    const m = p.currentPeek() === "|";
    return p.resetPeek(), m;
  }
  function Y(p) {
    const m = S(p), O = p.currentPeek() === "%" && p.peek() === "{";
    return p.resetPeek(), {
      isModulo: O,
      hasSpace: m.length > 0
    };
  }
  function R(p, m = !0) {
    const O = (H = !1, j = "", L = !1) => {
      const N = p.currentPeek();
      return N === "{" ? j === "%" ? !1 : H : N === "@" || !N ? j === "%" ? !0 : H : N === "%" ? (p.peek(), O(H, "%", !0)) : N === "|" ? j === "%" || L ? !0 : !(j === Wt || j === ze) : N === Wt ? (p.peek(), O(!0, Wt, L)) : N === ze ? (p.peek(), O(!0, ze, L)) : !0;
    }, $ = O();
    return m && p.resetPeek(), $;
  }
  function z(p, m) {
    const O = p.currentChar();
    return O === tn ? tn : m(O) ? (p.next(), O) : null;
  }
  function se(p) {
    const m = p.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36;
  }
  function Te(p) {
    return z(p, se);
  }
  function ne(p) {
    const m = p.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m >= 48 && m <= 57 || // 0-9
    m === 95 || // _
    m === 36 || // $
    m === 45;
  }
  function te(p) {
    return z(p, ne);
  }
  function Q(p) {
    const m = p.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function Pe(p) {
    return z(p, Q);
  }
  function $e(p) {
    const m = p.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function ue(p) {
    return z(p, $e);
  }
  function he(p) {
    let m = "", O = "";
    for (; m = Pe(p); )
      O += m;
    return O;
  }
  function it(p) {
    C(p);
    const m = p.currentChar();
    return m !== "%" && d(G.EXPECTED_TOKEN, i(), 0, m), p.next(), "%";
  }
  function Be(p) {
    let m = "";
    for (; ; ) {
      const O = p.currentChar();
      if (O === "{" || O === "}" || O === "@" || O === "|" || !O)
        break;
      if (O === "%")
        if (R(p))
          m += O, p.next();
        else
          break;
      else if (O === Wt || O === ze)
        if (R(p))
          m += O, p.next();
        else {
          if (B(p))
            break;
          m += O, p.next();
        }
      else
        m += O, p.next();
    }
    return m;
  }
  function Lt(p) {
    C(p);
    let m = "", O = "";
    for (; m = te(p); )
      O += m;
    return p.currentChar() === tn && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), O;
  }
  function Qe(p) {
    C(p);
    let m = "";
    return p.currentChar() === "-" ? (p.next(), m += `-${he(p)}`) : m += he(p), p.currentChar() === tn && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), m;
  }
  function mt(p) {
    return p !== Bs && p !== ze;
  }
  function ht(p) {
    C(p), _(p, "'");
    let m = "", O = "";
    for (; m = z(p, mt); )
      m === "\\" ? O += wt(p) : O += m;
    const $ = p.currentChar();
    return $ === ze || $ === tn ? (d(G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), $ === ze && (p.next(), _(p, "'")), O) : (_(p, "'"), O);
  }
  function wt(p) {
    const m = p.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return p.next(), `\\${m}`;
      case "u":
        return et(p, m, 4);
      case "U":
        return et(p, m, 6);
      default:
        return d(G.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, m), "";
    }
  }
  function et(p, m, O) {
    _(p, m);
    let $ = "";
    for (let H = 0; H < O; H++) {
      const j = ue(p);
      if (!j) {
        d(G.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${m}${$}${p.currentChar()}`);
        break;
      }
      $ += j;
    }
    return `\\${m}${$}`;
  }
  function Qt(p) {
    return p !== "{" && p !== "}" && p !== Wt && p !== ze;
  }
  function b(p) {
    C(p);
    let m = "", O = "";
    for (; m = z(p, Qt); )
      O += m;
    return O;
  }
  function y(p) {
    let m = "", O = "";
    for (; m = Te(p); )
      O += m;
    return O;
  }
  function v(p) {
    const m = (O) => {
      const $ = p.currentChar();
      return $ === "{" || $ === "%" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === Wt ? O : (O += $, p.next(), m(O));
    };
    return m("");
  }
  function I(p) {
    C(p);
    const m = _(
      p,
      "|"
      /* TokenChars.Pipe */
    );
    return C(p), m;
  }
  function D(p, m) {
    let O = null;
    switch (p.currentChar()) {
      case "{":
        return m.braceNest >= 1 && d(G.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), p.next(), O = f(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), C(p), m.braceNest++, O;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && d(G.EMPTY_PLACEHOLDER, i(), 0), p.next(), O = f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && C(p), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), O;
      case "@":
        return m.braceNest > 0 && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), O = M(p, m) || h(m), m.braceNest = 0, O;
      default: {
        let H = !0, j = !0, L = !0;
        if (B(p))
          return m.braceNest > 0 && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), O = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, O;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), m.braceNest = 0, V(p, m);
        if (H = E(p, m))
          return O = f(m, 5, Lt(p)), C(p), O;
        if (j = g(p, m))
          return O = f(m, 6, Qe(p)), C(p), O;
        if (L = w(p, m))
          return O = f(m, 7, ht(p)), C(p), O;
        if (!H && !j && !L)
          return O = f(m, 13, b(p)), d(G.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, O.value), C(p), O;
        break;
      }
    }
    return O;
  }
  function M(p, m) {
    const { currentType: O } = m;
    let $ = null;
    const H = p.currentChar();
    switch ((O === 8 || O === 9 || O === 12 || O === 10) && (H === ze || H === Wt) && d(G.INVALID_LINKED_FORMAT, i(), 0), H) {
      case "@":
        return p.next(), $ = f(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, $;
      case ".":
        return C(p), p.next(), f(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return C(p), p.next(), f(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(p) ? ($ = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, $) : P(p, m) || F(p, m) ? (C(p), M(p, m)) : A(p, m) ? (C(p), f(m, 12, y(p))) : k(p, m) ? (C(p), H === "{" ? D(p, m) || $ : f(m, 11, v(p))) : (O === 8 && d(G.INVALID_LINKED_FORMAT, i(), 0), m.braceNest = 0, m.inLinked = !1, V(p, m));
    }
  }
  function V(p, m) {
    let O = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return D(p, m) || h(m);
    if (m.inLinked)
      return M(p, m) || h(m);
    switch (p.currentChar()) {
      case "{":
        return D(p, m) || h(m);
      case "}":
        return d(G.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return M(p, m) || h(m);
      default: {
        if (B(p))
          return O = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, O;
        const { isModulo: H, hasSpace: j } = Y(p);
        if (H)
          return j ? f(m, 0, Be(p)) : f(m, 4, it(p));
        if (R(p))
          return f(m, 0, Be(p));
        break;
      }
    }
    return O;
  }
  function U() {
    const { currentType: p, offset: m, startLoc: O, endLoc: $ } = l;
    return l.lastType = p, l.lastOffset = m, l.lastStartLoc = O, l.lastEndLoc = $, l.offset = o(), l.startLoc = i(), r.currentChar() === tn ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : V(r, l);
  }
  return {
    nextToken: U,
    currentOffset: o,
    currentPosition: i,
    context: u
  };
}
const Ig = "parser", Ng = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Ag(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function xg(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(E, g, w, P, ...A) {
    const F = E.currentPosition();
    if (F.offset += P, F.column += P, n) {
      const k = t ? vo(w, F) : null, B = Gn(g, k, {
        domain: Ig,
        args: A
      });
      n(B);
    }
  }
  function i(E, g, w, P, ...A) {
    const F = E.currentPosition();
    if (F.offset += P, F.column += P, r) {
      const k = t ? vo(w, F) : null;
      r(Sg(g, k, A));
    }
  }
  function a(E, g, w) {
    const P = { type: E };
    return t && (P.start = g, P.end = g, P.loc = { start: w, end: w }), P;
  }
  function s(E, g, w, P) {
    t && (E.end = g, E.loc && (E.loc.end = w));
  }
  function l(E, g) {
    const w = E.context(), P = a(3, w.offset, w.startLoc);
    return P.value = g, s(P, E.currentOffset(), E.currentPosition()), P;
  }
  function u(E, g) {
    const w = E.context(), { lastOffset: P, lastStartLoc: A } = w, F = a(5, P, A);
    return F.index = parseInt(g, 10), E.nextToken(), s(F, E.currentOffset(), E.currentPosition()), F;
  }
  function c(E, g, w) {
    const P = E.context(), { lastOffset: A, lastStartLoc: F } = P, k = a(4, A, F);
    return k.key = g, w === !0 && (k.modulo = !0), E.nextToken(), s(k, E.currentOffset(), E.currentPosition()), k;
  }
  function d(E, g) {
    const w = E.context(), { lastOffset: P, lastStartLoc: A } = w, F = a(9, P, A);
    return F.value = g.replace(Ng, Ag), E.nextToken(), s(F, E.currentOffset(), E.currentPosition()), F;
  }
  function f(E) {
    const g = E.nextToken(), w = E.context(), { lastOffset: P, lastStartLoc: A } = w, F = a(8, P, A);
    return g.type !== 12 ? (o(E, G.UNEXPECTED_EMPTY_LINKED_MODIFIER, w.lastStartLoc, 0), F.value = "", s(F, P, A), {
      nextConsumeToken: g,
      node: F
    }) : (g.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, bt(g)), F.value = g.value || "", s(F, E.currentOffset(), E.currentPosition()), {
      node: F
    });
  }
  function h(E, g) {
    const w = E.context(), P = a(7, w.offset, w.startLoc);
    return P.value = g, s(P, E.currentOffset(), E.currentPosition()), P;
  }
  function _(E) {
    const g = E.context(), w = a(6, g.offset, g.startLoc);
    let P = E.nextToken();
    if (P.type === 9) {
      const A = f(E);
      w.modifier = A.node, P = A.nextConsumeToken || E.nextToken();
    }
    switch (P.type !== 10 && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(P)), P = E.nextToken(), P.type === 2 && (P = E.nextToken()), P.type) {
      case 11:
        P.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(P)), w.key = h(E, P.value || "");
        break;
      case 5:
        P.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(P)), w.key = c(E, P.value || "");
        break;
      case 6:
        P.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(P)), w.key = u(E, P.value || "");
        break;
      case 7:
        P.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(P)), w.key = d(E, P.value || "");
        break;
      default: {
        o(E, G.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const A = E.context(), F = a(7, A.offset, A.startLoc);
        return F.value = "", s(F, A.offset, A.startLoc), w.key = F, s(w, A.offset, A.startLoc), {
          nextConsumeToken: P,
          node: w
        };
      }
    }
    return s(w, E.currentOffset(), E.currentPosition()), {
      node: w
    };
  }
  function S(E) {
    const g = E.context(), w = g.currentType === 1 ? E.currentOffset() : g.offset, P = g.currentType === 1 ? g.endLoc : g.startLoc, A = a(2, w, P);
    A.items = [];
    let F = null, k = null;
    do {
      const R = F || E.nextToken();
      switch (F = null, R.type) {
        case 0:
          R.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(R)), A.items.push(l(E, R.value || ""));
          break;
        case 6:
          R.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(R)), A.items.push(u(E, R.value || ""));
          break;
        case 4:
          k = !0;
          break;
        case 5:
          R.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(R)), A.items.push(c(E, R.value || "", !!k)), k && (i(E, da.USE_MODULO_SYNTAX, g.lastStartLoc, 0, bt(R)), k = null);
          break;
        case 7:
          R.value == null && o(E, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(R)), A.items.push(d(E, R.value || ""));
          break;
        case 8: {
          const z = _(E);
          A.items.push(z.node), F = z.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const B = g.currentType === 1 ? g.lastOffset : E.currentOffset(), Y = g.currentType === 1 ? g.lastEndLoc : E.currentPosition();
    return s(A, B, Y), A;
  }
  function C(E, g, w, P) {
    const A = E.context();
    let F = P.items.length === 0;
    const k = a(1, g, w);
    k.cases = [], k.cases.push(P);
    do {
      const B = S(E);
      F || (F = B.items.length === 0), k.cases.push(B);
    } while (A.currentType !== 14);
    return F && o(E, G.MUST_HAVE_MESSAGES_IN_PLURAL, w, 0), s(k, E.currentOffset(), E.currentPosition()), k;
  }
  function T(E) {
    const g = E.context(), { offset: w, startLoc: P } = g, A = S(E);
    return g.currentType === 14 ? A : C(E, w, P, A);
  }
  function x(E) {
    const g = kg(E, gc({}, e)), w = g.context(), P = a(0, w.offset, w.startLoc);
    return t && P.loc && (P.loc.source = E), P.body = T(g), e.onCacheKey && (P.cacheKey = e.onCacheKey(E)), w.currentType !== 14 && o(g, G.UNEXPECTED_LEXICAL_ANALYSIS, w.lastStartLoc, 0, E[w.offset] || ""), s(P, g.currentOffset(), g.currentPosition()), P;
  }
  return { parse: x };
}
function bt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Dg(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Ks(e, t) {
  for (let n = 0; n < e.length; n++)
    fa(e[n], t);
}
function fa(e, t) {
  switch (e.type) {
    case 1:
      Ks(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ks(e.items, t);
      break;
    case 6: {
      fa(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Mg(e, t = {}) {
  const n = Dg(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && fa(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Rg(e) {
  const t = e.body;
  return t.type === 2 ? Ys(t) : t.cases.forEach((n) => Ys(n)), e;
}
function Ys(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = bc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Fg = "minifier";
function xn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      xn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        xn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        xn(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      xn(t.key), t.k = t.key, delete t.key, t.modifier && (xn(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw Gn(G.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Fg,
        args: [e.type]
      });
  }
  delete e.type;
}
const jg = "parser";
function Ug(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, i = t.location !== !1, a = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  i && e.loc && (a.source = e.loc.source);
  const s = () => a;
  function l(S, C) {
    a.code += S;
  }
  function u(S, C = !0) {
    const T = C ? r : "";
    l(o ? T + "  ".repeat(S) : T);
  }
  function c(S = !0) {
    const C = ++a.indentLevel;
    S && u(C);
  }
  function d(S = !0) {
    const C = --a.indentLevel;
    S && u(C);
  }
  function f() {
    u(a.indentLevel);
  }
  return {
    context: s,
    push: l,
    indent: c,
    deindent: d,
    newline: f,
    helper: (S) => `_${S}`,
    needIndent: () => a.needIndent
  };
}
function Vg(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Kn(e, t.key), t.modifier ? (e.push(", "), Kn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Hg(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let i = 0; i < o && (Kn(e, t.items[i]), i !== o - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function Wg(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let i = 0; i < o && (Kn(e, t.cases[i]), i !== o - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function Bg(e, t) {
  t.body ? Kn(e, t.body) : e.push("null");
}
function Kn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Bg(e, t);
      break;
    case 1:
      Wg(e, t);
      break;
    case 2:
      Hg(e, t);
      break;
    case 6:
      Vg(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw Gn(G.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: jg,
        args: [t.type]
      });
  }
}
const Kg = (e, t = {}) => {
  const n = Ws(t.mode) ? t.mode : "normal", r = Ws(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], s = Ug(e, {
    filename: r,
    breakLineCode: o,
    needIndent: i
  });
  s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(i), a.length > 0 && (s.push(`const { ${bc(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), s.newline()), s.push("return "), Kn(s, e), s.deindent(i), s.push("}"), delete e.helpers;
  const { code: l, map: u } = s.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Yg(e, t = {}) {
  const n = gc({}, t), r = !!n.jit, o = !!n.minify, i = n.optimize == null ? !0 : n.optimize, s = xg(n).parse(e);
  return r ? (i && Rg(s), o && xn(s), { ast: s, code: "" }) : (Mg(s, n), Kg(s, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function zg() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Gt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Rt(e) {
  return ae(e) && pa(e) === 0 && (_t(e, "b") || _t(e, "body"));
}
const vc = ["b", "body"];
function Gg(e) {
  return fn(e, vc);
}
const yc = ["c", "cases"];
function Xg(e) {
  return fn(e, yc, []);
}
const _c = ["s", "static"];
function Jg(e) {
  return fn(e, _c);
}
const Sc = ["i", "items"];
function qg(e) {
  return fn(e, Sc, []);
}
const Ec = ["t", "type"];
function pa(e) {
  return fn(e, Ec);
}
const Tc = ["v", "value"];
function to(e, t) {
  const n = fn(e, Tc);
  if (n != null)
    return n;
  throw Fr(t);
}
const Cc = ["m", "modifier"];
function Zg(e) {
  return fn(e, Cc);
}
const Oc = ["k", "key"];
function Qg(e) {
  const t = fn(e, Oc);
  if (t)
    return t;
  throw Fr(
    6
    /* NodeTypes.Linked */
  );
}
function fn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (_t(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Lc = [
  ...vc,
  ...yc,
  ..._c,
  ...Sc,
  ...Oc,
  ...Cc,
  ...Tc,
  ...Ec
];
function Fr(e) {
  return new Error(`unhandled node type: ${e}`);
}
const pn = [];
pn[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
pn[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
pn[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
pn[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
pn[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
pn[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
pn[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const eb = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function tb(e) {
  return eb.test(e);
}
function nb(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function rb(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function ob(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : tb(t) ? nb(t) : "*" + t;
}
function ib(e) {
  const t = [];
  let n = -1, r = 0, o = 0, i, a, s, l, u, c, d;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    a === void 0 ? a = s : a += s;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    a !== void 0 && (t.push(a), a = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), o++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, a === void 0 || (a = ob(a), a === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const _ = e[n + 1];
    if (r === 5 && _ === "'" || r === 6 && _ === '"')
      return n++, s = "\\" + _, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && h())) {
      if (l = rb(i), d = pn[r], u = d[l] || d.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = f[u[1]], c && (s = i, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const zs = /* @__PURE__ */ new Map();
function ab(e, t) {
  return ae(e) ? e[t] : null;
}
function sb(e, t) {
  if (!ae(e))
    return null;
  let n = zs.get(t);
  if (n || (n = ib(t), n && zs.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, i = 0;
  for (; i < r; ) {
    const a = n[i];
    if (Lc.includes(a) && Rt(o))
      return null;
    const s = o[a];
    if (s === void 0 || ve(o))
      return null;
    o = s, i++;
  }
  return o;
}
const lb = (e) => e, ub = (e) => "", cb = "text", db = (e) => e.length === 0 ? "" : gg(e), fb = hg;
function Gs(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function pb(e) {
  const t = we(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (we(e.named.count) || we(e.named.n)) ? we(e.named.count) ? e.named.count : we(e.named.n) ? e.named.n : t : t;
}
function mb(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function hb(e = {}) {
  const t = e.locale, n = pb(e), r = ae(e.pluralRules) && W(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : Gs, o = ae(e.pluralRules) && W(t) && ve(e.pluralRules[t]) ? Gs : void 0, i = (T) => T[r(n, T.length, o)], a = e.list || [], s = (T) => a[T], l = e.named || pe();
  we(e.pluralIndex) && mb(n, l);
  const u = (T) => l[T];
  function c(T) {
    const x = ve(e.messages) ? e.messages(T) : ae(e.messages) ? e.messages[T] : !1;
    return x || (e.parent ? e.parent.message(T) : ub);
  }
  const d = (T) => e.modifiers ? e.modifiers[T] : lb, f = J(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : db, h = J(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : fb, _ = J(e.processor) && W(e.processor.type) ? e.processor.type : cb, C = {
    list: s,
    named: u,
    plural: i,
    linked: (T, ...x) => {
      const [E, g] = x;
      let w = "text", P = "";
      x.length === 1 ? ae(E) ? (P = E.modifier || P, w = E.type || w) : W(E) && (P = E || P) : x.length === 2 && (W(E) && (P = E || P), W(g) && (w = g || w));
      const A = c(T)(C), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        w === "vnode" && Se(A) && P ? A[0] : A
      );
      return P ? d(P)(F, w) : F;
    },
    message: c,
    type: _,
    interpolate: h,
    normalize: f,
    values: Fe(pe(), a, l)
  };
  return C;
}
let jr = null;
function gb(e) {
  jr = e;
}
function bb(e, t, n) {
  jr && jr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const vb = /* @__PURE__ */ yb(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function yb(e) {
  return (t) => jr && jr.emit(e, t);
}
const _b = da.__EXTEND_POINT__, yn = Ao(_b), Sb = {
  // 2
  FALLBACK_TO_TRANSLATE: yn(),
  // 3
  CANNOT_FORMAT_NUMBER: yn(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: yn(),
  // 5
  CANNOT_FORMAT_DATE: yn(),
  // 6
  FALLBACK_TO_DATE_FORMAT: yn(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: yn(),
  // 8
  __EXTEND_POINT__: yn()
  // 9
}, wc = G.__EXTEND_POINT__, _n = Ao(wc), St = {
  INVALID_ARGUMENT: wc,
  // 17
  INVALID_DATE_ARGUMENT: _n(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: _n(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: _n(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: _n(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: _n(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: _n(),
  // 23
  __EXTEND_POINT__: _n()
  // 24
};
function xt(e) {
  return Gn(e, null, void 0);
}
function ma(e, t) {
  return t.locale != null ? Xs(t.locale) : Xs(e.locale);
}
let ei;
function Xs(e) {
  if (W(e))
    return e;
  if (ve(e)) {
    if (e.resolvedOnce && ei != null)
      return ei;
    if (e.constructor.name === "Function") {
      const t = e();
      if (mg(t))
        throw xt(St.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ei = t;
    } else
      throw xt(St.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw xt(St.NOT_SUPPORT_LOCALE_TYPE);
}
function Eb(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Se(t) ? t : ae(t) ? Object.keys(t) : W(t) ? [t] : [n]
  ])];
}
function Pc(e, t, n) {
  const r = W(n) ? n : Yn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let i = o.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let a = [n];
    for (; Se(a); )
      a = Js(i, a, t);
    const s = Se(t) || !J(t) ? t : t.default ? t.default : null;
    a = W(s) ? [s] : s, Se(a) && Js(i, a, !1), o.__localeChainCache.set(r, i);
  }
  return i;
}
function Js(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ee(r); o++) {
    const i = t[o];
    W(i) && (r = Tb(e, t[o], n));
  }
  return r;
}
function Tb(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const i = o.join("-");
    r = Cb(e, i, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Cb(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Se(n) || J(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Ob = "9.14.5", xo = -1, Yn = "en-US", qs = "", Zs = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Lb() {
  return {
    upper: (e, t) => t === "text" && W(e) ? e.toUpperCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && W(e) ? e.toLowerCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && W(e) ? Zs(e) : t === "vnode" && ae(e) && "__v_isVNode" in e ? Zs(e.children) : e
  };
}
let $c;
function Qs(e) {
  $c = e;
}
let kc;
function wb(e) {
  kc = e;
}
let Ic;
function Pb(e) {
  Ic = e;
}
let Nc = null;
const $b = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Nc = e;
}, kb = /* @__NO_SIDE_EFFECTS__ */ () => Nc;
let Ac = null;
const el = (e) => {
  Ac = e;
}, Ib = () => Ac;
let tl = 0;
function Nb(e = {}) {
  const t = ve(e.onWarn) ? e.onWarn : sg, n = W(e.version) ? e.version : Ob, r = W(e.locale) || ve(e.locale) ? e.locale : Yn, o = ve(r) ? Yn : r, i = Se(e.fallbackLocale) || J(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = J(e.messages) ? e.messages : ti(o), s = J(e.datetimeFormats) ? e.datetimeFormats : ti(o), l = J(e.numberFormats) ? e.numberFormats : ti(o), u = Fe(pe(), e.modifiers, Lb()), c = e.pluralRules || pe(), d = ve(e.missing) ? e.missing : null, f = ee(e.missingWarn) || cn(e.missingWarn) ? e.missingWarn : !0, h = ee(e.fallbackWarn) || cn(e.fallbackWarn) ? e.fallbackWarn : !0, _ = !!e.fallbackFormat, S = !!e.unresolving, C = ve(e.postTranslation) ? e.postTranslation : null, T = J(e.processor) ? e.processor : null, x = ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, g = ve(e.messageCompiler) ? e.messageCompiler : $c, w = ve(e.messageResolver) ? e.messageResolver : kc || ab, P = ve(e.localeFallbacker) ? e.localeFallbacker : Ic || Eb, A = ae(e.fallbackContext) ? e.fallbackContext : void 0, F = e, k = ae(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), B = ae(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), Y = ae(F.__meta) ? F.__meta : {};
  tl++;
  const R = {
    version: n,
    cid: tl,
    locale: r,
    fallbackLocale: i,
    messages: a,
    modifiers: u,
    pluralRules: c,
    missing: d,
    missingWarn: f,
    fallbackWarn: h,
    fallbackFormat: _,
    unresolving: S,
    postTranslation: C,
    processor: T,
    warnHtmlMessage: x,
    escapeParameter: E,
    messageCompiler: g,
    messageResolver: w,
    localeFallbacker: P,
    fallbackContext: A,
    onWarn: t,
    __meta: Y
  };
  return R.datetimeFormats = s, R.numberFormats = l, R.__datetimeFormatters = k, R.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && bb(R, n, Y), R;
}
const ti = (e) => ({ [e]: pe() });
function ha(e, t, n, r, o) {
  const { missing: i, onWarn: a } = e;
  if (i !== null) {
    const s = i(e, n, t, o);
    return W(s) ? s : t;
  } else
    return t;
}
function Qn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ab(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function xb(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Ab(e, t[r]))
      return !0;
  return !1;
}
function ni(e) {
  return (n) => Db(n, e);
}
function Db(e, t) {
  const n = Gg(t);
  if (n == null)
    throw Fr(
      0
      /* NodeTypes.Resource */
    );
  if (pa(n) === 1) {
    const i = Xg(n);
    return e.plural(i.reduce((a, s) => [
      ...a,
      nl(e, s)
    ], []));
  } else
    return nl(e, n);
}
function nl(e, t) {
  const n = Jg(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = qg(t).reduce((o, i) => [...o, Pi(e, i)], []);
    return e.normalize(r);
  }
}
function Pi(e, t) {
  const n = pa(t);
  switch (n) {
    case 3:
      return to(t, n);
    case 9:
      return to(t, n);
    case 4: {
      const r = t;
      if (_t(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (_t(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Fr(n);
    }
    case 5: {
      const r = t;
      if (_t(r, "i") && we(r.i))
        return e.interpolate(e.list(r.i));
      if (_t(r, "index") && we(r.index))
        return e.interpolate(e.list(r.index));
      throw Fr(n);
    }
    case 6: {
      const r = t, o = Zg(r), i = Qg(r);
      return e.linked(Pi(e, i), o ? Pi(e, o) : void 0, e.type);
    }
    case 7:
      return to(t, n);
    case 8:
      return to(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const xc = (e) => e;
let Rn = pe();
function Dc(e, t = {}) {
  let n = !1;
  const r = t.onError || Tg;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Yg(e, t), detectError: n };
}
const Mb = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!W(e))
    throw xt(St.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || xc)(e), o = Rn[r];
    if (o)
      return o;
    const { code: i, detectError: a } = Dc(e, t), s = new Function(`return ${i}`)();
    return a ? s : Rn[r] = s;
  }
};
function Rb(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && W(e)) {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || xc)(e), o = Rn[r];
    if (o)
      return o;
    const { ast: i, detectError: a } = Dc(e, {
      ...t,
      location: !1,
      jit: !0
    }), s = ni(i);
    return a ? s : Rn[r] = s;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Rn[n];
      return r || (Rn[n] = ni(e));
    } else
      return ni(e);
  }
}
const rl = () => "", dt = (e) => ve(e);
function ol(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: a, messages: s } = e, [l, u] = $i(...t), c = ee(u.missingWarn) ? u.missingWarn : e.missingWarn, d = ee(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = ee(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, h = !!u.resolvedMessage, _ = W(u.default) || ee(u.default) ? ee(u.default) ? i ? l : () => l : u.default : n ? i ? l : () => l : "", S = n || _ !== "", C = ma(e, u);
  f && Fb(u);
  let [T, x, E] = h ? [
    l,
    C,
    s[C] || pe()
  ] : Mc(e, l, C, a, d, c), g = T, w = l;
  if (!h && !(W(g) || Rt(g) || dt(g)) && S && (g = _, w = g), !h && (!(W(g) || Rt(g) || dt(g)) || !W(x)))
    return o ? xo : l;
  let P = !1;
  const A = () => {
    P = !0;
  }, F = dt(g) ? g : Rc(e, l, x, g, w, A);
  if (P)
    return g;
  const k = Vb(e, x, E, u), B = hb(k), Y = jb(e, F, B);
  let R = r ? r(Y, l) : Y;
  if (f && W(R) && (R = fg(R)), __INTLIFY_PROD_DEVTOOLS__) {
    const z = {
      timestamp: Date.now(),
      key: W(l) ? l : dt(g) ? g.key : "",
      locale: x || (dt(g) ? g.locale : ""),
      format: W(g) ? g : dt(g) ? g.source : "",
      message: R
    };
    z.meta = Fe({}, e.__meta, /* @__PURE__ */ kb() || {}), vb(z);
  }
  return R;
}
function Fb(e) {
  Se(e.list) ? e.list = e.list.map((t) => W(t) ? Vs(t) : t) : ae(e.named) && Object.keys(e.named).forEach((t) => {
    W(e.named[t]) && (e.named[t] = Vs(e.named[t]));
  });
}
function Mc(e, t, n, r, o, i) {
  const { messages: a, onWarn: s, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let d = pe(), f, h = null;
  const _ = "translate";
  for (let S = 0; S < c.length && (f = c[S], d = a[f] || pe(), (h = l(d, t)) === null && (h = d[t]), !(W(h) || Rt(h) || dt(h))); S++)
    if (!xb(f, c)) {
      const C = ha(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        i,
        _
      );
      C !== t && (h = C);
    }
  return [h, f, d];
}
function Rc(e, t, n, r, o, i) {
  const { messageCompiler: a, warnHtmlMessage: s } = e;
  if (dt(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = a(r, Ub(e, n, o, r, s, i));
  return l.locale = n, l.key = t, l.source = r, l;
}
function jb(e, t, n) {
  return t(n);
}
function $i(...e) {
  const [t, n, r] = e, o = pe();
  if (!W(t) && !we(t) && !dt(t) && !Rt(t))
    throw xt(St.INVALID_ARGUMENT);
  const i = we(t) ? String(t) : (dt(t), t);
  return we(n) ? o.plural = n : W(n) ? o.default = n : J(n) && !No(n) ? o.named = n : Se(n) && (o.list = n), we(r) ? o.plural = r : W(r) ? o.default = r : J(r) && Fe(o, r), [i, o];
}
function Ub(e, t, n, r, o, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw i && i(a), a;
    },
    onCacheKey: (a) => lg(t, n, a)
  };
}
function Vb(e, t, n, r) {
  const { modifiers: o, pluralRules: i, messageResolver: a, fallbackLocale: s, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: i,
    messages: (h) => {
      let _ = a(n, h);
      if (_ == null && c) {
        const [, , S] = Mc(c, h, t, s, l, u);
        _ = a(S, h);
      }
      if (W(_) || Rt(_)) {
        let S = !1;
        const T = Rc(e, h, t, _, h, () => {
          S = !0;
        });
        return S ? rl : T;
      } else return dt(_) ? _ : rl;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), we(r.plural) && (f.pluralIndex = r.plural), f;
}
function il(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: a } = e, { __datetimeFormatters: s } = e, [l, u, c, d] = ki(...t), f = ee(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ee(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, _ = ma(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    _
  );
  if (!W(l) || l === "")
    return new Intl.DateTimeFormat(_, d).format(u);
  let C = {}, T, x = null;
  const E = "datetime format";
  for (let P = 0; P < S.length && (T = S[P], C = n[T] || {}, x = C[l], !J(x)); P++)
    ha(e, l, T, f, E);
  if (!J(x) || !W(T))
    return r ? xo : l;
  let g = `${T}__${l}`;
  No(d) || (g = `${g}__${JSON.stringify(d)}`);
  let w = s.get(g);
  return w || (w = new Intl.DateTimeFormat(T, Fe({}, x, d)), s.set(g, w)), h ? w.formatToParts(u) : w.format(u);
}
const Fc = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function ki(...e) {
  const [t, n, r, o] = e, i = pe();
  let a = pe(), s;
  if (W(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw xt(St.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    s = new Date(u);
    try {
      s.toISOString();
    } catch {
      throw xt(St.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (cg(t)) {
    if (isNaN(t.getTime()))
      throw xt(St.INVALID_DATE_ARGUMENT);
    s = t;
  } else if (we(t))
    s = t;
  else
    throw xt(St.INVALID_ARGUMENT);
  return W(n) ? i.key = n : J(n) && Object.keys(n).forEach((l) => {
    Fc.includes(l) ? a[l] = n[l] : i[l] = n[l];
  }), W(r) ? i.locale = r : J(r) && (a = r), J(o) && (a = o), [i.key || "", s, i, a];
}
function al(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function sl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: a } = e, { __numberFormatters: s } = e, [l, u, c, d] = Ii(...t), f = ee(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ee(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, _ = ma(e, c), S = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    _
  );
  if (!W(l) || l === "")
    return new Intl.NumberFormat(_, d).format(u);
  let C = {}, T, x = null;
  const E = "number format";
  for (let P = 0; P < S.length && (T = S[P], C = n[T] || {}, x = C[l], !J(x)); P++)
    ha(e, l, T, f, E);
  if (!J(x) || !W(T))
    return r ? xo : l;
  let g = `${T}__${l}`;
  No(d) || (g = `${g}__${JSON.stringify(d)}`);
  let w = s.get(g);
  return w || (w = new Intl.NumberFormat(T, Fe({}, x, d)), s.set(g, w)), h ? w.formatToParts(u) : w.format(u);
}
const jc = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Ii(...e) {
  const [t, n, r, o] = e, i = pe();
  let a = pe();
  if (!we(t))
    throw xt(St.INVALID_ARGUMENT);
  const s = t;
  return W(n) ? i.key = n : J(n) && Object.keys(n).forEach((l) => {
    jc.includes(l) ? a[l] = n[l] : i[l] = n[l];
  }), W(r) ? i.locale = r : J(r) && (a = r), J(o) && (a = o), [i.key || "", s, i, a];
}
function ll(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
zg();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Hb = "9.14.5";
function Wb() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Gt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Gt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Gt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Bb = Sb.__EXTEND_POINT__, Bt = Ao(Bb);
Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt();
const Uc = St.__EXTEND_POINT__, nt = Ao(Uc), Ie = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Uc,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: nt(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: nt(),
  // 26
  NOT_INSTALLED: nt(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: nt(),
  // 28
  // directive module errors
  REQUIRED_VALUE: nt(),
  // 29
  INVALID_VALUE: nt(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: nt(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: nt(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: nt(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: nt(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: nt(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: nt(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: nt(),
  // 37
  // for enhancement
  __EXTEND_POINT__: nt()
  // 38
};
function Ne(e, ...t) {
  return Gn(e, null, void 0);
}
const Ni = /* @__PURE__ */ dn("__translateVNode"), Ai = /* @__PURE__ */ dn("__datetimeParts"), xi = /* @__PURE__ */ dn("__numberParts"), Vc = dn("__setPluralRules"), Hc = /* @__PURE__ */ dn("__injectWithOption"), Di = /* @__PURE__ */ dn("__dispose");
function Ur(e) {
  if (!ae(e) || Rt(e))
    return e;
  for (const t in e)
    if (_t(e, t))
      if (!t.includes("."))
        ae(e[t]) && Ur(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, i = !1;
        for (let a = 0; a < r; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in o || (o[n[a]] = pe()), !ae(o[n[a]])) {
            i = !0;
            break;
          }
          o = o[n[a]];
        }
        if (i || (Rt(o) ? Lc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Rt(o)) {
          const a = o[n[r]];
          ae(a) && Ur(a);
        }
      }
  return e;
}
function Do(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: i } = t, a = J(n) ? n : Se(r) ? pe() : { [e]: pe() };
  if (Se(r) && r.forEach((s) => {
    if ("locale" in s && "resource" in s) {
      const { locale: l, resource: u } = s;
      l ? (a[l] = a[l] || pe(), ao(u, a[l])) : ao(u, a);
    } else
      W(s) && ao(JSON.parse(s), a);
  }), o == null && i)
    for (const s in a)
      _t(a, s) && Ur(a[s]);
  return a;
}
function Wc(e) {
  return e.type;
}
function Bc(e, t, n) {
  let r = ae(t.messages) ? t.messages : pe();
  "__i18nGlobal" in n && (r = Do(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((i) => {
    e.mergeLocaleMessage(i, r[i]);
  });
  {
    if (ae(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((a) => {
        e.mergeDateTimeFormat(a, t.datetimeFormats[a]);
      });
    }
    if (ae(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((a) => {
        e.mergeNumberFormat(a, t.numberFormats[a]);
      });
    }
  }
}
function ul(e) {
  return ke(Wr, null, e, 0);
}
const cl = "__INTLIFY_META__", dl = () => [], Kb = () => !1;
let fl = 0;
function pl(e) {
  return (t, n, r, o) => e(n, r, jt() || void 0, o);
}
const Yb = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = jt();
  let t = null;
  return e && (t = Wc(e)[cl]) ? { [cl]: t } : null;
};
function ga(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, i = e.flatJson, a = bo ? Oe : Bl, s = !!e.translateExistCompatible;
  let l = ee(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : W(e.locale) ? e.locale : Yn
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : W(e.fallbackLocale) || Se(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), d = a(Do(u.value, e)), f = a(J(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), h = a(J(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let _ = n ? n.missingWarn : ee(e.missingWarn) || cn(e.missingWarn) ? e.missingWarn : !0, S = n ? n.fallbackWarn : ee(e.fallbackWarn) || cn(e.fallbackWarn) ? e.fallbackWarn : !0, C = n ? n.fallbackRoot : ee(e.fallbackRoot) ? e.fallbackRoot : !0, T = !!e.fallbackFormat, x = ve(e.missing) ? e.missing : null, E = ve(e.missing) ? pl(e.missing) : null, g = ve(e.postTranslation) ? e.postTranslation : null, w = n ? n.warnHtmlMessage : ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter;
  const A = n ? n.modifiers : J(e.modifiers) ? e.modifiers : {};
  let F = e.pluralRules || n && n.pluralRules, k;
  k = (() => {
    o && el(null);
    const L = {
      version: Hb,
      locale: u.value,
      fallbackLocale: c.value,
      messages: d.value,
      modifiers: A,
      pluralRules: F,
      missing: E === null ? void 0 : E,
      missingWarn: _,
      fallbackWarn: S,
      fallbackFormat: T,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: w,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = f.value, L.numberFormats = h.value, L.__datetimeFormatters = J(k) ? k.__datetimeFormatters : void 0, L.__numberFormatters = J(k) ? k.__numberFormatters : void 0;
    const N = Nb(L);
    return o && el(N), N;
  })(), Qn(k, u.value, c.value);
  function Y() {
    return [
      u.value,
      c.value,
      d.value,
      f.value,
      h.value
    ];
  }
  const R = ft({
    get: () => u.value,
    set: (L) => {
      u.value = L, k.locale = u.value;
    }
  }), z = ft({
    get: () => c.value,
    set: (L) => {
      c.value = L, k.fallbackLocale = c.value, Qn(k, u.value, L);
    }
  }), se = ft(() => d.value), Te = /* @__PURE__ */ ft(() => f.value), ne = /* @__PURE__ */ ft(() => h.value);
  function te() {
    return ve(g) ? g : null;
  }
  function Q(L) {
    g = L, k.postTranslation = L;
  }
  function Pe() {
    return x;
  }
  function $e(L) {
    L !== null && (E = pl(L)), x = L, k.missing = E;
  }
  const ue = (L, N, K, re, Ce, Ke) => {
    Y();
    let xe;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = n ? Ib() : void 0), xe = L(k);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    we(xe) && xe === xo || K === "translate exists" && !xe) {
      const [mn, Ro] = N();
      return n && C ? re(n) : Ce(mn);
    } else {
      if (Ke(xe))
        return xe;
      throw Ne(Ie.UNEXPECTED_RETURN_TYPE);
    }
  };
  function he(...L) {
    return ue((N) => Reflect.apply(ol, null, [N, ...L]), () => $i(...L), "translate", (N) => Reflect.apply(N.t, N, [...L]), (N) => N, (N) => W(N));
  }
  function it(...L) {
    const [N, K, re] = L;
    if (re && !ae(re))
      throw Ne(Ie.INVALID_ARGUMENT);
    return he(N, K, Fe({ resolvedMessage: !0 }, re || {}));
  }
  function Be(...L) {
    return ue((N) => Reflect.apply(il, null, [N, ...L]), () => ki(...L), "datetime format", (N) => Reflect.apply(N.d, N, [...L]), () => qs, (N) => W(N));
  }
  function Lt(...L) {
    return ue((N) => Reflect.apply(sl, null, [N, ...L]), () => Ii(...L), "number format", (N) => Reflect.apply(N.n, N, [...L]), () => qs, (N) => W(N));
  }
  function Qe(L) {
    return L.map((N) => W(N) || we(N) || ee(N) ? ul(String(N)) : N);
  }
  const ht = {
    normalize: Qe,
    interpolate: (L) => L,
    type: "vnode"
  };
  function wt(...L) {
    return ue(
      (N) => {
        let K;
        const re = N;
        try {
          re.processor = ht, K = Reflect.apply(ol, null, [re, ...L]);
        } finally {
          re.processor = null;
        }
        return K;
      },
      () => $i(...L),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Ni](...L),
      (N) => [ul(N)],
      (N) => Se(N)
    );
  }
  function et(...L) {
    return ue(
      (N) => Reflect.apply(sl, null, [N, ...L]),
      () => Ii(...L),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[xi](...L),
      dl,
      (N) => W(N) || Se(N)
    );
  }
  function Qt(...L) {
    return ue(
      (N) => Reflect.apply(il, null, [N, ...L]),
      () => ki(...L),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Ai](...L),
      dl,
      (N) => W(N) || Se(N)
    );
  }
  function b(L) {
    F = L, k.pluralRules = F;
  }
  function y(L, N) {
    return ue(() => {
      if (!L)
        return !1;
      const K = W(N) ? N : u.value, re = D(K), Ce = k.messageResolver(re, L);
      return s ? Ce != null : Rt(Ce) || dt(Ce) || W(Ce);
    }, () => [L], "translate exists", (K) => Reflect.apply(K.te, K, [L, N]), Kb, (K) => ee(K));
  }
  function v(L) {
    let N = null;
    const K = Pc(k, c.value, u.value);
    for (let re = 0; re < K.length; re++) {
      const Ce = d.value[K[re]] || {}, Ke = k.messageResolver(Ce, L);
      if (Ke != null) {
        N = Ke;
        break;
      }
    }
    return N;
  }
  function I(L) {
    const N = v(L);
    return N ?? (n ? n.tm(L) || {} : {});
  }
  function D(L) {
    return d.value[L] || {};
  }
  function M(L, N) {
    if (i) {
      const K = { [L]: N };
      for (const re in K)
        _t(K, re) && Ur(K[re]);
      N = K[L];
    }
    d.value[L] = N, k.messages = d.value;
  }
  function V(L, N) {
    d.value[L] = d.value[L] || {};
    const K = { [L]: N };
    if (i)
      for (const re in K)
        _t(K, re) && Ur(K[re]);
    N = K[L], ao(N, d.value[L]), k.messages = d.value;
  }
  function U(L) {
    return f.value[L] || {};
  }
  function p(L, N) {
    f.value[L] = N, k.datetimeFormats = f.value, al(k, L, N);
  }
  function m(L, N) {
    f.value[L] = Fe(f.value[L] || {}, N), k.datetimeFormats = f.value, al(k, L, N);
  }
  function O(L) {
    return h.value[L] || {};
  }
  function $(L, N) {
    h.value[L] = N, k.numberFormats = h.value, ll(k, L, N);
  }
  function H(L, N) {
    h.value[L] = Fe(h.value[L] || {}, N), k.numberFormats = h.value, ll(k, L, N);
  }
  fl++, n && bo && (st(n.locale, (L) => {
    l && (u.value = L, k.locale = L, Qn(k, u.value, c.value));
  }), st(n.fallbackLocale, (L) => {
    l && (c.value = L, k.fallbackLocale = L, Qn(k, u.value, c.value));
  }));
  const j = {
    id: fl,
    locale: R,
    fallbackLocale: z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(L) {
      l = L, L && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Qn(k, u.value, c.value));
    },
    get availableLocales() {
      return Object.keys(d.value).sort();
    },
    messages: se,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return F || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return _;
    },
    set missingWarn(L) {
      _ = L, k.missingWarn = _;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(L) {
      S = L, k.fallbackWarn = S;
    },
    get fallbackRoot() {
      return C;
    },
    set fallbackRoot(L) {
      C = L;
    },
    get fallbackFormat() {
      return T;
    },
    set fallbackFormat(L) {
      T = L, k.fallbackFormat = T;
    },
    get warnHtmlMessage() {
      return w;
    },
    set warnHtmlMessage(L) {
      w = L, k.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(L) {
      P = L, k.escapeParameter = L;
    },
    t: he,
    getLocaleMessage: D,
    setLocaleMessage: M,
    mergeLocaleMessage: V,
    getPostTranslationHandler: te,
    setPostTranslationHandler: Q,
    getMissingHandler: Pe,
    setMissingHandler: $e,
    [Vc]: b
  };
  return j.datetimeFormats = Te, j.numberFormats = ne, j.rt = it, j.te = y, j.tm = I, j.d = Be, j.n = Lt, j.getDateTimeFormat = U, j.setDateTimeFormat = p, j.mergeDateTimeFormat = m, j.getNumberFormat = O, j.setNumberFormat = $, j.mergeNumberFormat = H, j[Hc] = r, j[Ni] = wt, j[Ai] = Qt, j[xi] = et, j;
}
function zb(e) {
  const t = W(e.locale) ? e.locale : Yn, n = W(e.fallbackLocale) || Se(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = ve(e.missing) ? e.missing : void 0, o = ee(e.silentTranslationWarn) || cn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = ee(e.silentFallbackWarn) || cn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = ee(e.fallbackRoot) ? e.fallbackRoot : !0, s = !!e.formatFallbackMessages, l = J(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = ve(e.postTranslation) ? e.postTranslation : void 0, d = W(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, h = ee(e.sync) ? e.sync : !0;
  let _ = e.messages;
  if (J(e.sharedMessages)) {
    const P = e.sharedMessages;
    _ = Object.keys(P).reduce((F, k) => {
      const B = F[k] || (F[k] = {});
      return Fe(B, P[k]), F;
    }, _ || {});
  }
  const { __i18n: S, __root: C, __injectWithOption: T } = e, x = e.datetimeFormats, E = e.numberFormats, g = e.flatJson, w = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: _,
    flatJson: g,
    datetimeFormats: x,
    numberFormats: E,
    missing: r,
    missingWarn: o,
    fallbackWarn: i,
    fallbackRoot: a,
    fallbackFormat: s,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: h,
    translateExistCompatible: w,
    __i18n: S,
    __root: C,
    __injectWithOption: T
  };
}
function Mi(e = {}, t) {
  {
    const n = ga(zb(e)), { __extender: r } = e, o = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(i) {
        n.locale.value = i;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(i) {
        n.fallbackLocale.value = i;
      },
      // messages
      get messages() {
        return n.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return n.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return n.availableLocales;
      },
      // formatter
      get formatter() {
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(i) {
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(i) {
        n.setMissingHandler(i);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return ee(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(i) {
        n.missingWarn = ee(i) ? !i : i;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ee(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(i) {
        n.fallbackWarn = ee(i) ? !i : i;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(i) {
        n.fallbackFormat = i;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(i) {
        n.setPostTranslationHandler(i);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(i) {
        n.inheritLocale = i;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(i) {
        n.warnHtmlMessage = i !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(i) {
        n.escapeParameter = i;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return !0;
      },
      set preserveDirectiveContent(i) {
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...i) {
        const [a, s, l] = i, u = {};
        let c = null, d = null;
        if (!W(a))
          throw Ne(Ie.INVALID_ARGUMENT);
        const f = a;
        return W(s) ? u.locale = s : Se(s) ? c = s : J(s) && (d = s), Se(l) ? c = l : J(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          c || d || {},
          u
        ]);
      },
      rt(...i) {
        return Reflect.apply(n.rt, n, [...i]);
      },
      // tc
      tc(...i) {
        const [a, s, l] = i, u = { plural: 1 };
        let c = null, d = null;
        if (!W(a))
          throw Ne(Ie.INVALID_ARGUMENT);
        const f = a;
        return W(s) ? u.locale = s : we(s) ? u.plural = s : Se(s) ? c = s : J(s) && (d = s), W(l) ? u.locale = l : Se(l) ? c = l : J(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          c || d || {},
          u
        ]);
      },
      // te
      te(i, a) {
        return n.te(i, a);
      },
      // tm
      tm(i) {
        return n.tm(i);
      },
      // getLocaleMessage
      getLocaleMessage(i) {
        return n.getLocaleMessage(i);
      },
      // setLocaleMessage
      setLocaleMessage(i, a) {
        n.setLocaleMessage(i, a);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(i, a) {
        n.mergeLocaleMessage(i, a);
      },
      // d
      d(...i) {
        return Reflect.apply(n.d, n, [...i]);
      },
      // getDateTimeFormat
      getDateTimeFormat(i) {
        return n.getDateTimeFormat(i);
      },
      // setDateTimeFormat
      setDateTimeFormat(i, a) {
        n.setDateTimeFormat(i, a);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(i, a) {
        n.mergeDateTimeFormat(i, a);
      },
      // n
      n(...i) {
        return Reflect.apply(n.n, n, [...i]);
      },
      // getNumberFormat
      getNumberFormat(i) {
        return n.getNumberFormat(i);
      },
      // setNumberFormat
      setNumberFormat(i, a) {
        n.setNumberFormat(i, a);
      },
      // mergeNumberFormat
      mergeNumberFormat(i, a) {
        n.mergeNumberFormat(i, a);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(i, a) {
        return -1;
      }
    };
    return o.__extender = r, o;
  }
}
const ba = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Gb({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ve ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, pe());
}
function Kc(e) {
  return Ve;
}
const Xb = /* @__PURE__ */ Hr({
  /* eslint-disable */
  name: "i18n-t",
  props: Fe({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => we(e) || !isNaN(e)
    }
  }, ba),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Mo({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(n).filter((d) => d !== "_"), a = pe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = W(e.plural) ? +e.plural : e.plural);
      const s = Gb(t, i), l = o[Ni](e.keypath, s, a), u = Fe(pe(), r), c = W(e.tag) || ae(e.tag) ? e.tag : Kc();
      return la(c, u, l);
    };
  }
}), ml = Xb;
function Jb(e) {
  return Se(e) && !W(e[0]);
}
function Yc(e, t, n, r) {
  const { slots: o, attrs: i } = t;
  return () => {
    const a = { part: !0 };
    let s = pe();
    e.locale && (a.locale = e.locale), W(e.format) ? a.key = e.format : ae(e.format) && (W(e.format.key) && (a.key = e.format.key), s = Object.keys(e.format).reduce((f, h) => n.includes(h) ? Fe(pe(), f, { [h]: e.format[h] }) : f, pe()));
    const l = r(e.value, a, s);
    let u = [a.key];
    Se(l) ? u = l.map((f, h) => {
      const _ = o[f.type], S = _ ? _({ [f.type]: f.value, index: h, parts: l }) : [f.value];
      return Jb(S) && (S[0].key = `${f.type}-${h}`), S;
    }) : W(l) && (u = [l]);
    const c = Fe(pe(), i), d = W(e.tag) || ae(e.tag) ? e.tag : Kc();
    return la(d, c, u);
  };
}
const qb = /* @__PURE__ */ Hr({
  /* eslint-disable */
  name: "i18n-n",
  props: Fe({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ba),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Mo({
      useScope: e.scope,
      __useComponent: !0
    });
    return Yc(e, t, jc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xi](...r)
    ));
  }
}), hl = qb, Zb = /* @__PURE__ */ Hr({
  /* eslint-disable */
  name: "i18n-d",
  props: Fe({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ba),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Mo({
      useScope: e.scope,
      __useComponent: !0
    });
    return Yc(e, t, Fc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ai](...r)
    ));
  }
}), gl = Zb;
function Qb(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function ev(e) {
  const t = (a) => {
    const { instance: s, modifiers: l, value: u } = a;
    if (!s || !s.$)
      throw Ne(Ie.UNEXPECTED_ERROR);
    const c = Qb(e, s.$), d = bl(u);
    return [
      Reflect.apply(c.t, c, [...vl(d)]),
      c
    ];
  };
  return {
    created: (a, s) => {
      const [l, u] = t(s);
      bo && e.global === u && (a.__i18nWatcher = st(u.locale, () => {
        s.instance && s.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      bo && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: s }) => {
      if (a.__composer) {
        const l = a.__composer, u = bl(s);
        a.textContent = Reflect.apply(l.t, l, [
          ...vl(u)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [s] = t(a);
      return { textContent: s };
    }
  };
}
function bl(e) {
  if (W(e))
    return { path: e };
  if (J(e)) {
    if (!("path" in e))
      throw Ne(Ie.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Ne(Ie.INVALID_VALUE);
}
function vl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: i } = e, a = {}, s = r || {};
  return W(n) && (a.locale = n), we(o) && (a.plural = o), we(i) && (a.plural = i), [t, s, a];
}
function tv(e, t, ...n) {
  const r = J(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (ee(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : ml.name, "I18nT"].forEach((a) => e.component(a, ml)), [hl.name, "I18nN"].forEach((a) => e.component(a, hl)), [gl.name, "I18nD"].forEach((a) => e.component(a, gl))), e.directive("t", ev(t));
}
function nv(e, t, n) {
  return {
    beforeCreate() {
      const r = jt();
      if (!r)
        throw Ne(Ie.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const i = o.i18n;
        if (o.__i18n && (i.__i18n = o.__i18n), i.__root = t, this === this.$root)
          this.$i18n = yl(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = Mi(i);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = yl(e, o);
        else {
          this.$i18n = Mi({
            __i18n: o.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      o.__i18nGlobal && Bc(t, o, o), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, a) => this.$i18n.te(i, a), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = jt();
      if (!r)
        throw Ne(Ie.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function yl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Vc](t.pluralizationRules || e.pluralizationRules);
  const n = Do(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const rv = /* @__PURE__ */ dn("global-vue-i18n");
function ov(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ee(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ee(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, i = /* @__PURE__ */ new Map(), [a, s] = iv(e, n), l = /* @__PURE__ */ dn("");
  function u(f) {
    return i.get(f) || null;
  }
  function c(f, h) {
    i.set(f, h);
  }
  function d(f) {
    i.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return o;
      },
      // install plugin
      async install(h, ..._) {
        if (h.__VUE_I18N_SYMBOL__ = l, h.provide(h.__VUE_I18N_SYMBOL__, f), J(_[0])) {
          const T = _[0];
          f.__composerExtend = T.__composerExtend, f.__vueI18nExtend = T.__vueI18nExtend;
        }
        let S = null;
        !n && r && (S = mv(h, f.global)), __VUE_I18N_FULL_INSTALL__ && tv(h, f, ..._), __VUE_I18N_LEGACY_API__ && n && h.mixin(nv(s, s.__composer, f));
        const C = h.unmount;
        h.unmount = () => {
          S && S(), f.dispose(), C();
        };
      },
      // global accessor
      get global() {
        return s;
      },
      dispose() {
        a.stop();
      },
      // @internal
      __instances: i,
      // @internal
      __getInstance: u,
      // @internal
      __setInstance: c,
      // @internal
      __deleteInstance: d
    };
    return f;
  }
}
function Mo(e = {}) {
  const t = jt();
  if (t == null)
    throw Ne(Ie.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ne(Ie.NOT_INSTALLED);
  const n = av(t), r = lv(n), o = Wc(t), i = sv(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Ne(Ie.NOT_AVAILABLE_IN_LEGACY_MODE);
    return fv(t, i, r, e);
  }
  if (i === "global")
    return Bc(r, e, o), r;
  if (i === "parent") {
    let l = uv(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let s = a.__getInstance(t);
  if (s == null) {
    const l = Fe({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), s = ga(l), a.__composerExtend && (s[Di] = a.__composerExtend(s)), dv(a, t, s), a.__setInstance(t, s);
  }
  return s;
}
function iv(e, t, n) {
  const r = sd();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Mi(e)) : r.run(() => ga(e));
    if (o == null)
      throw Ne(Ie.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function av(e) {
  {
    const t = dr(e.isCE ? rv : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ne(e.isCE ? Ie.NOT_INSTALLED_WITH_PROVIDE : Ie.UNEXPECTED_ERROR);
    return t;
  }
}
function sv(e, t) {
  return No(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function lv(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function uv(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let i = cv(t, n);
  for (; i != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const s = a.__getInstance(i);
      s != null && (r = s.__composer, n && r && !r[Hc] && (r = null));
    }
    if (r != null || o === i)
      break;
    i = i.parent;
  }
  return r;
}
function cv(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function dv(e, t, n) {
  zn(() => {
  }, t), ea(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Di];
    o && (o(), delete r[Di]);
  }, t);
}
function fv(e, t, n, r = {}) {
  const o = t === "local", i = Bl(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Ne(Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = ee(r.inheritLocale) ? r.inheritLocale : !W(r.locale), s = Oe(
    // prettier-ignore
    !o || a ? n.locale.value : W(r.locale) ? r.locale : Yn
  ), l = Oe(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : W(r.fallbackLocale) || Se(r.fallbackLocale) || J(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : s.value
  ), u = Oe(Do(s.value, r)), c = Oe(J(r.datetimeFormats) ? r.datetimeFormats : { [s.value]: {} }), d = Oe(J(r.numberFormats) ? r.numberFormats : { [s.value]: {} }), f = o ? n.missingWarn : ee(r.missingWarn) || cn(r.missingWarn) ? r.missingWarn : !0, h = o ? n.fallbackWarn : ee(r.fallbackWarn) || cn(r.fallbackWarn) ? r.fallbackWarn : !0, _ = o ? n.fallbackRoot : ee(r.fallbackRoot) ? r.fallbackRoot : !0, S = !!r.fallbackFormat, C = ve(r.missing) ? r.missing : null, T = ve(r.postTranslation) ? r.postTranslation : null, x = o ? n.warnHtmlMessage : ee(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, g = o ? n.modifiers : J(r.modifiers) ? r.modifiers : {}, w = r.pluralRules || o && n.pluralRules;
  function P() {
    return [
      s.value,
      l.value,
      u.value,
      c.value,
      d.value
    ];
  }
  const A = ft({
    get: () => i.value ? i.value.locale.value : s.value,
    set: (v) => {
      i.value && (i.value.locale.value = v), s.value = v;
    }
  }), F = ft({
    get: () => i.value ? i.value.fallbackLocale.value : l.value,
    set: (v) => {
      i.value && (i.value.fallbackLocale.value = v), l.value = v;
    }
  }), k = ft(() => i.value ? i.value.messages.value : u.value), B = ft(() => c.value), Y = ft(() => d.value);
  function R() {
    return i.value ? i.value.getPostTranslationHandler() : T;
  }
  function z(v) {
    i.value && i.value.setPostTranslationHandler(v);
  }
  function se() {
    return i.value ? i.value.getMissingHandler() : C;
  }
  function Te(v) {
    i.value && i.value.setMissingHandler(v);
  }
  function ne(v) {
    return P(), v();
  }
  function te(...v) {
    return i.value ? ne(() => Reflect.apply(i.value.t, null, [...v])) : ne(() => "");
  }
  function Q(...v) {
    return i.value ? Reflect.apply(i.value.rt, null, [...v]) : "";
  }
  function Pe(...v) {
    return i.value ? ne(() => Reflect.apply(i.value.d, null, [...v])) : ne(() => "");
  }
  function $e(...v) {
    return i.value ? ne(() => Reflect.apply(i.value.n, null, [...v])) : ne(() => "");
  }
  function ue(v) {
    return i.value ? i.value.tm(v) : {};
  }
  function he(v, I) {
    return i.value ? i.value.te(v, I) : !1;
  }
  function it(v) {
    return i.value ? i.value.getLocaleMessage(v) : {};
  }
  function Be(v, I) {
    i.value && (i.value.setLocaleMessage(v, I), u.value[v] = I);
  }
  function Lt(v, I) {
    i.value && i.value.mergeLocaleMessage(v, I);
  }
  function Qe(v) {
    return i.value ? i.value.getDateTimeFormat(v) : {};
  }
  function mt(v, I) {
    i.value && (i.value.setDateTimeFormat(v, I), c.value[v] = I);
  }
  function ht(v, I) {
    i.value && i.value.mergeDateTimeFormat(v, I);
  }
  function wt(v) {
    return i.value ? i.value.getNumberFormat(v) : {};
  }
  function et(v, I) {
    i.value && (i.value.setNumberFormat(v, I), d.value[v] = I);
  }
  function Qt(v, I) {
    i.value && i.value.mergeNumberFormat(v, I);
  }
  const b = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: A,
    fallbackLocale: F,
    messages: k,
    datetimeFormats: B,
    numberFormats: Y,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : a;
    },
    set inheritLocale(v) {
      i.value && (i.value.inheritLocale = v);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : g;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : w;
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1;
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : f;
    },
    set missingWarn(v) {
      i.value && (i.value.missingWarn = v);
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : h;
    },
    set fallbackWarn(v) {
      i.value && (i.value.missingWarn = v);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : _;
    },
    set fallbackRoot(v) {
      i.value && (i.value.fallbackRoot = v);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : S;
    },
    set fallbackFormat(v) {
      i.value && (i.value.fallbackFormat = v);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : x;
    },
    set warnHtmlMessage(v) {
      i.value && (i.value.warnHtmlMessage = v);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : E;
    },
    set escapeParameter(v) {
      i.value && (i.value.escapeParameter = v);
    },
    t: te,
    getPostTranslationHandler: R,
    setPostTranslationHandler: z,
    getMissingHandler: se,
    setMissingHandler: Te,
    rt: Q,
    d: Pe,
    n: $e,
    tm: ue,
    te: he,
    getLocaleMessage: it,
    setLocaleMessage: Be,
    mergeLocaleMessage: Lt,
    getDateTimeFormat: Qe,
    setDateTimeFormat: mt,
    mergeDateTimeFormat: ht,
    getNumberFormat: wt,
    setNumberFormat: et,
    mergeNumberFormat: Qt
  };
  function y(v) {
    v.locale.value = s.value, v.fallbackLocale.value = l.value, Object.keys(u.value).forEach((I) => {
      v.mergeLocaleMessage(I, u.value[I]);
    }), Object.keys(c.value).forEach((I) => {
      v.mergeDateTimeFormat(I, c.value[I]);
    }), Object.keys(d.value).forEach((I) => {
      v.mergeNumberFormat(I, d.value[I]);
    }), v.escapeParameter = E, v.fallbackFormat = S, v.fallbackRoot = _, v.fallbackWarn = h, v.missingWarn = f, v.warnHtmlMessage = x;
  }
  return du(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Ne(Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const v = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (s.value = v.locale.value, l.value = v.fallbackLocale.value, u.value = v.messages.value, c.value = v.datetimeFormats.value, d.value = v.numberFormats.value) : o && y(v);
  }), b;
}
const pv = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], _l = ["t", "rt", "d", "n", "tm", "te"];
function mv(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return pv.forEach((o) => {
    const i = Object.getOwnPropertyDescriptor(t, o);
    if (!i)
      throw Ne(Ie.UNEXPECTED_ERROR);
    const a = Re(i.value) ? {
      get() {
        return i.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(s) {
        i.value.value = s;
      }
    } : {
      get() {
        return i.get && i.get();
      }
    };
    Object.defineProperty(n, o, a);
  }), e.config.globalProperties.$i18n = n, _l.forEach((o) => {
    const i = Object.getOwnPropertyDescriptor(t, o);
    if (!i || !i.value)
      throw Ne(Ie.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, i);
  }), () => {
    delete e.config.globalProperties.$i18n, _l.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
Wb();
__INTLIFY_JIT_COMPILATION__ ? Qs(Rb) : Qs(Mb);
wb(sb);
Pb(Pc);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Gt();
  e.__INTLIFY__ = !0, gb(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const hv = /* @__PURE__ */ Hr({
  __name: "App",
  setup(e, { expose: t }) {
    const { t: n } = Mo(), r = Oe(), o = Oe(), i = Oe(), a = Oe(!1), s = Oe(null), l = Oe(null), u = Oe(!1), c = Oe(null), d = () => {
      var C;
      if ((C = r.value) != null && C.parentElement) {
        const T = r.value.parentElement;
        a.value ? T.classList.remove("h-full") : T.classList.add("h-full");
      }
    };
    st(a, () => {
      d();
    });
    const f = async (C) => {
      var T, x, E, g;
      if (((T = C.data) == null ? void 0 : T.type) === "audiomass-ready")
        u.value = !0, l.value && (h(l.value.url, l.value.filename), l.value = null);
      else if (((x = C.data) == null ? void 0 : x.type) === "save-to-comfyui") {
        const { data: w, format: P } = C.data;
        if (w && c.value) {
          const A = new Blob([w], { type: P === "mp3" ? "audio/mpeg" : P === "wav" ? "audio/wav" : "audio/flac" }), F = await c.value(A, P);
          (g = (E = i.value) == null ? void 0 : E.contentWindow) == null || g.postMessage({
            type: "save-to-comfyui-result",
            success: F.success,
            path: F.path,
            error: F.error
          }, "*");
        }
      }
    }, h = async (C, T) => {
      var x;
      if ((x = i.value) != null && x.contentWindow)
        try {
          const g = await (await fetch(C)).arrayBuffer();
          i.value.contentWindow.postMessage({
            type: "load-audio",
            data: g,
            filename: T
          }, "*");
        } catch {
        }
    }, _ = async (C, T) => {
      u.value ? h(C, T) : l.value = { url: C, filename: T };
    }, S = (C) => {
      c.value = C;
    };
    return zn(async () => {
      window.addEventListener("message", f), i.value && i.value.addEventListener("load", () => {
        var C, T;
        (T = (C = i.value) == null ? void 0 : C.contentWindow) == null || T.postMessage({ type: "check-ready" }, "*");
      }), r.value && (d(), s.value = new MutationObserver((C) => {
        C.forEach((T) => {
          T.type === "attributes" && T.attributeName === "maximized" && (a.value = T.target.getAttribute("maximized") === "true");
        });
      }), s.value.observe(r.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), Qi(() => {
      var C;
      window.removeEventListener("message", f), (C = r.value) != null && C.parentElement && r.value.parentElement.classList.remove("h-full"), s.value && (s.value.disconnect(), s.value = null);
    }), t({ loadAudioFromUrl: _, setSaveHandler: S }), (C, T) => (be(), Ze("div", {
      ref_key: "viewerContentRef",
      ref: r,
      class: "flex w-full h-full"
    }, [
      Ft("div", {
        ref_key: "mainContentRef",
        ref: o,
        class: "flex-1 relative"
      }, [
        Ft("iframe", {
          ref_key: "iframeRef",
          ref: i,
          src: "/audiomass",
          class: "demo-iframe h-full w-full"
        }, null, 512)
      ], 512)
    ], 512));
  }
}), gv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, bv = /* @__PURE__ */ gv(hv, [["__scopeId", "data-v-6a8b10f1"]]), vv = /* @__PURE__ */ Hr({
  __name: "Root",
  setup(e, { expose: t }) {
    const n = Oe(!1), r = Oe(null), o = Oe(null), i = Oe(null), a = () => {
      n.value = !0;
    }, s = () => {
      n.value = !1;
    }, l = (d, f) => {
      r.value ? r.value.loadAudioFromUrl(d, f) : o.value = { url: d, filename: f };
    }, u = (d) => {
      i.value = d;
    }, c = async (d, f) => i.value ? await i.value(d, f) : { success: !1, error: "No save callback registered" };
    return st(r, (d) => {
      d && (d.setSaveHandler(c), o.value && qi(() => {
        d.loadAudioFromUrl(o.value.url, o.value.filename), o.value = null;
      }));
    }), zn(() => {
      n.value = !0;
    }), t({ open: a, close: s, loadAudioFromUrl: l, setSaveCallback: u }), (d, f) => (be(), Ct(Yl(fc), {
      visible: n.value,
      "onUpdate:visible": f[0] || (f[0] = (h) => n.value = h),
      header: "ComfyUI AudioMass",
      style: { width: "80vw", height: "80vh" },
      maximizable: !0,
      modal: !0,
      closable: !0,
      draggable: !1,
      "content-class": "h-full"
    }, {
      default: Tn(() => [
        ke(bv, {
          ref_key: "appRef",
          ref: r
        }, null, 512)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), yv = {
  en: {
    audiomass: {
      title: "AudioMass"
    }
  },
  zh: {
    audiomass: {
      title: "AudioMass"
    }
  }
}, _v = ov({
  legacy: !1,
  locale: navigator.language.split("-")[0] || "en",
  fallbackLocale: "en",
  messages: yv
}), { ComfyButton: Sv } = window.comfyAPI.button;
let no = null, er = null, tr = null, hr = null, va = "", ya = !1;
const Ev = ["LoadAudio"], Tv = ["PreviewAudio", "SaveAudio", "SaveAudioMP3", "SaveAudioOpus"];
function zc() {
  return er && tr || (er = document.createElement("div"), er.id = "audiomass-root", document.body.appendChild(er), no = bp(vv), no.use(_v), no.use(Tm, {
    theme: {}
  }), tr = no.mount(er), tr.setSaveCallback(Ov)), tr;
}
function Cv() {
  hr = null, va = "", ya = !1, zc().open();
}
async function Sl(e, t, n, r = "input") {
  hr = t, va = e, ya = n;
  const o = zc();
  o.open();
  const i = ri.apiURL(`/view?filename=${encodeURIComponent(e)}&type=${r}`);
  o.loadAudioFromUrl(i, e);
}
async function Ov(e, t) {
  var s, l, u;
  const n = Date.now();
  let r = va || "audio";
  const o = r.lastIndexOf(".");
  o > 0 && (r = r.substring(0, o));
  const i = r.lastIndexOf("/");
  i >= 0 && (r = r.substring(i + 1));
  const a = `${r}_audiomass_${n}.${t}`;
  try {
    const c = new File([e], a, { type: e.type }), d = new FormData();
    d.append("image", c);
    const f = await ri.fetchApi("/upload/image", {
      method: "POST",
      body: d
    });
    if (f.status === 200) {
      const h = await f.json();
      let _ = h.name;
      if (h.subfolder && (_ = h.subfolder + "/" + _), hr && ya) {
        const S = (s = hr.widgets) == null ? void 0 : s.find((T) => T.name === "audio"), C = (l = hr.widgets) == null ? void 0 : l.find((T) => T.name === "audioUI");
        if (S && (S.options.values.includes(_) || S.options.values.push(_), S.value = _, (u = S.callback) == null || u.call(S, _)), C != null && C.element) {
          const T = ri.apiURL(`/view?filename=${encodeURIComponent(_)}&type=input`);
          C.element.src = T;
        }
      }
      return { success: !0, path: _ };
    } else
      return { success: !1, error: `${f.status} - ${f.statusText}` };
  } catch (c) {
    return { success: !1, error: String(c) };
  }
}
Ea.registerExtension({
  name: "ComfyUI.AudioMass.TopMenu",
  setup() {
    var e;
    (e = Ea.menu) == null || e.settingsGroup.append(
      new Sv({
        icon: "image",
        tooltip: "comfyui-audiomass",
        content: "AudioMass",
        action: Cv
      })
    );
  },
  getNodeMenuItems(e) {
    var o, i, a;
    const t = e.constructor.comfyClass, n = Ev.includes(t), r = Tv.includes(t);
    if (!n && !r) return [];
    if (n) {
      const s = (o = e.widgets) == null ? void 0 : o.find((l) => l.name === "audio");
      return s != null && s.value ? [
        null,
        {
          content: "Open in AudioMass",
          callback: () => {
            Sl(s.value, e, !0, "input");
          }
        }
      ] : [];
    } else {
      const s = (i = e.widgets) == null ? void 0 : i.find((u) => u.name === "audioUI"), l = (a = s == null ? void 0 : s.element) == null ? void 0 : a.src;
      if (!l) return [];
      try {
        const u = new URL(l, window.location.origin), c = u.searchParams.get("filename"), d = u.searchParams.get("subfolder"), f = u.searchParams.get("type") || "output";
        if (!c) return [];
        const h = d ? `${d}/${c}` : c;
        return [
          null,
          {
            content: "Open in AudioMass",
            callback: () => {
              Sl(h, e, !1, f);
            }
          }
        ];
      } catch {
        return [];
      }
    }
  }
});
