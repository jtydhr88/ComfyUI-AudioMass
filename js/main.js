import { app as ba } from "../../../scripts/app.js";
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, Fn = [], Dt = () => {
}, Hc = () => !1, vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mi = (e) => e.startsWith("onUpdate:"), Ne = Object.assign, Ri = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Wc = Object.prototype.hasOwnProperty, ce = (e, t) => Wc.call(e, t), X = Array.isArray, jn = (e) => yo(e) === "[object Map]", gl = (e) => yo(e) === "[object Set]", q = (e) => typeof e == "function", Oe = (e) => typeof e == "string", qt = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", bl = (e) => (Ee(e) || q(e)) && q(e.then) && q(e.catch), vl = Object.prototype.toString, yo = (e) => vl.call(e), Bc = (e) => yo(e).slice(8, -1), yl = (e) => yo(e) === "[object Object]", Fi = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rr = /* @__PURE__ */ Di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _o = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Kc = /-(\w)/g, pt = _o(
  (e) => e.replace(Kc, (t, n) => n ? n.toUpperCase() : "")
), Yc = /\B([A-Z])/g, wn = _o(
  (e) => e.replace(Yc, "-$1").toLowerCase()
), So = _o((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ro = _o(
  (e) => e ? `on${So(e)}` : ""
), ln = (e, t) => !Object.is(e, t), Fo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ni = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, zc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Gc = (e) => {
  const t = Oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let va;
const Eo = () => va || (va = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ji(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Oe(r) ? Zc(r) : ji(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (Oe(e) || Ee(e))
    return e;
}
const Xc = /;(?![^(]*\))/g, Jc = /:([^]+)/, qc = /\/\*[^]*?\*\//g;
function Zc(e) {
  const t = {};
  return e.replace(qc, "").split(Xc).forEach((n) => {
    if (n) {
      const r = n.split(Jc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Bn(e) {
  let t = "";
  if (Oe(e))
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
const Qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ed = /* @__PURE__ */ Di(Qc);
function _l(e) {
  return !!e || e === "";
}
const Sl = (e) => !!(e && e.__v_isRef === !0), mr = (e) => Oe(e) ? e : e == null ? "" : X(e) || Ee(e) && (e.toString === vl || !q(e.toString)) ? Sl(e) ? mr(e.value) : JSON.stringify(e, El, 2) : String(e), El = (e, t) => Sl(t) ? El(e, t.value) : jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], i) => (n[jo(r, i) + " =>"] = o, n),
    {}
  )
} : gl(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => jo(n))
} : qt(t) ? jo(t) : Ee(t) && !X(t) && !yl(t) ? String(t) : t, jo = (e, t = "") => {
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
class Tl {
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
function td(e) {
  return new Tl(e);
}
function nd() {
  return rt;
}
let ge;
const Uo = /* @__PURE__ */ new WeakSet();
class Cl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rt && rt.active && rt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Uo.has(this) && (Uo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ll(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ya(this), Pl(this);
    const t = ge, n = Et;
    ge = this, Et = !0;
    try {
      return this.fn();
    } finally {
      wl(this), ge = t, Et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hi(t);
      this.deps = this.depsTail = void 0, ya(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Uo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ri(this) && this.run();
  }
  get dirty() {
    return ri(this);
  }
}
let Ol = 0, or, ir;
function Ll(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ir, ir = e;
    return;
  }
  e.next = or, or = e;
}
function Ui() {
  Ol++;
}
function Vi() {
  if (--Ol > 0)
    return;
  if (ir) {
    let t = ir;
    for (ir = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; or; ) {
    let t = or;
    for (or = void 0; t; ) {
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
function Pl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wl(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Hi(r), rd(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($l(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $l(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hr) || (e.globalVersion = hr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ri(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ge, r = Et;
  ge = e, Et = !0;
  try {
    Pl(e);
    const o = e.fn(e._value);
    (t.version === 0 || ln(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ge = n, Et = r, wl(e), e.flags &= -3;
  }
}
function Hi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Hi(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rd(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Et = !0;
const kl = [];
function Xt() {
  kl.push(Et), Et = !1;
}
function Jt() {
  const e = kl.pop();
  Et = e === void 0 ? !0 : e;
}
function ya(e) {
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
let hr = 0;
class od {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !Et || ge === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ge)
      n = this.activeLink = new od(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, Il(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, hr++, this.notify(t);
  }
  notify(t) {
    Ui();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Vi();
    }
  }
}
function Il(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Il(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const oi = /* @__PURE__ */ new WeakMap(), Cn = Symbol(
  ""
), ii = Symbol(
  ""
), gr = Symbol(
  ""
);
function je(e, t, n) {
  if (Et && ge) {
    let r = oi.get(e);
    r || oi.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Wi()), o.map = r, o.key = n), o.track();
  }
}
function Yt(e, t, n, r, o, i) {
  const a = oi.get(e);
  if (!a) {
    hr++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Ui(), t === "clear")
    a.forEach(s);
  else {
    const l = X(e), u = l && Fi(n);
    if (l && n === "length") {
      const c = Number(r);
      a.forEach((d, f) => {
        (f === "length" || f === gr || !qt(f) && f >= c) && s(d);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), u && s(a.get(gr)), t) {
        case "add":
          l ? u && s(a.get("length")) : (s(a.get(Cn)), jn(e) && s(a.get(ii)));
          break;
        case "delete":
          l || (s(a.get(Cn)), jn(e) && s(a.get(ii)));
          break;
        case "set":
          jn(e) && s(a.get(Cn));
          break;
      }
  }
  Vi();
}
function In(e) {
  const t = le(e);
  return t === e ? t : (je(t, "iterate", gr), Tt(e) ? t : t.map(Xe));
}
function Bi(e) {
  return je(e = le(e), "iterate", gr), e;
}
const id = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vo(this, Symbol.iterator, Xe);
  },
  concat(...e) {
    return In(this).concat(
      ...e.map((t) => X(t) ? In(t) : t)
    );
  },
  entries() {
    return Vo(this, "entries", (e) => (e[1] = Xe(e[1]), e));
  },
  every(e, t) {
    return Ut(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ut(this, "filter", e, t, (n) => n.map(Xe), arguments);
  },
  find(e, t) {
    return Ut(this, "find", e, t, Xe, arguments);
  },
  findIndex(e, t) {
    return Ut(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ut(this, "findLast", e, t, Xe, arguments);
  },
  findLastIndex(e, t) {
    return Ut(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ut(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ho(this, "includes", e);
  },
  indexOf(...e) {
    return Ho(this, "indexOf", e);
  },
  join(e) {
    return In(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ho(this, "lastIndexOf", e);
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
    return _a(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _a(this, "reduceRight", e, t);
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
    return Vo(this, "values", Xe);
  }
};
function Vo(e, t, n) {
  const r = Bi(e), o = r[t]();
  return r !== e && !Tt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const ad = Array.prototype;
function Ut(e, t, n, r, o, i) {
  const a = Bi(e), s = a !== e && !Tt(e), l = a[t];
  if (l !== ad[t]) {
    const d = l.apply(e, i);
    return s ? Xe(d) : d;
  }
  let u = n;
  a !== e && (s ? u = function(d, f) {
    return n.call(this, Xe(d), f, e);
  } : n.length > 2 && (u = function(d, f) {
    return n.call(this, d, f, e);
  }));
  const c = l.call(a, u, r);
  return s && o ? o(c) : c;
}
function _a(e, t, n, r) {
  const o = Bi(e);
  let i = n;
  return o !== e && (Tt(e) ? n.length > 3 && (i = function(a, s, l) {
    return n.call(this, a, s, l, e);
  }) : i = function(a, s, l) {
    return n.call(this, a, Xe(s), l, e);
  }), o[t](i, ...r);
}
function Ho(e, t, n) {
  const r = le(e);
  je(r, "iterate", gr);
  const o = r[t](...n);
  return (o === -1 || o === !1) && Gi(n[0]) ? (n[0] = le(n[0]), r[t](...n)) : o;
}
function Xn(e, t, n = []) {
  Xt(), Ui();
  const r = le(e)[t].apply(e, n);
  return Vi(), Jt(), r;
}
const sd = /* @__PURE__ */ Di("__proto__,__v_isRef,__isVue"), Nl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qt)
);
function ld(e) {
  qt(e) || (e = String(e));
  const t = le(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Al {
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
      return r === (o ? i ? vd : Rl : i ? Ml : Dl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = X(t);
    if (!o) {
      let l;
      if (a && (l = id[n]))
        return l;
      if (n === "hasOwnProperty")
        return ld;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Me(t) ? t : r
    );
    return (qt(n) ? Nl.has(n) : sd(n)) || (o || je(t, "get", n), i) ? s : Me(s) ? a && Fi(n) ? s : s.value : Ee(s) ? o ? Yi(s) : To(s) : s;
  }
}
class xl extends Al {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const l = Pn(i);
      if (!Tt(r) && !Pn(r) && (i = le(i), r = le(r)), !X(t) && Me(i) && !Me(r))
        return l ? !1 : (i.value = r, !0);
    }
    const a = X(t) && Fi(n) ? Number(n) < t.length : ce(t, n), s = Reflect.set(
      t,
      n,
      r,
      Me(t) ? t : o
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
    return (!qt(n) || !Nl.has(n)) && je(t, "has", n), r;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      X(t) ? "length" : Cn
    ), Reflect.ownKeys(t);
  }
}
class ud extends Al {
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
const cd = /* @__PURE__ */ new xl(), dd = /* @__PURE__ */ new ud(), fd = /* @__PURE__ */ new xl(!0);
const ai = (e) => e, Wr = (e) => Reflect.getPrototypeOf(e);
function pd(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = le(o), a = jn(i), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, u = o[e](...r), c = n ? ai : t ? si : Xe;
    return !t && je(
      i,
      "iterate",
      l ? ii : Cn
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
function Br(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function md(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, a = le(i), s = le(o);
      e || (ln(o, s) && je(a, "get", o), je(a, "get", s));
      const { has: l } = Wr(a), u = t ? ai : e ? si : Xe;
      if (l.call(a, o))
        return u(i.get(o));
      if (l.call(a, s))
        return u(i.get(s));
      i !== a && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && je(le(o), "iterate", Cn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, a = le(i), s = le(o);
      return e || (ln(o, s) && je(a, "has", o), je(a, "has", s)), o === s ? i.has(o) : i.has(o) || i.has(s);
    },
    forEach(o, i) {
      const a = this, s = a.__v_raw, l = le(s), u = t ? ai : e ? si : Xe;
      return !e && je(l, "iterate", Cn), s.forEach((c, d) => o.call(i, u(c), u(d), a));
    }
  };
  return Ne(
    n,
    e ? {
      add: Br("add"),
      set: Br("set"),
      delete: Br("delete"),
      clear: Br("clear")
    } : {
      add(o) {
        !t && !Tt(o) && !Pn(o) && (o = le(o));
        const i = le(this);
        return Wr(i).has.call(i, o) || (i.add(o), Yt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !Tt(i) && !Pn(i) && (i = le(i));
        const a = le(this), { has: s, get: l } = Wr(a);
        let u = s.call(a, o);
        u || (o = le(o), u = s.call(a, o));
        const c = l.call(a, o);
        return a.set(o, i), u ? ln(i, c) && Yt(a, "set", o, i) : Yt(a, "add", o, i), this;
      },
      delete(o) {
        const i = le(this), { has: a, get: s } = Wr(i);
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
    n[o] = pd(o, e, t);
  }), n;
}
function Ki(e, t) {
  const n = md(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ce(n, o) && o in r ? n : r,
    o,
    i
  );
}
const hd = {
  get: /* @__PURE__ */ Ki(!1, !1)
}, gd = {
  get: /* @__PURE__ */ Ki(!1, !0)
}, bd = {
  get: /* @__PURE__ */ Ki(!0, !1)
};
const Dl = /* @__PURE__ */ new WeakMap(), Ml = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), vd = /* @__PURE__ */ new WeakMap();
function yd(e) {
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
function _d(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yd(Bc(e));
}
function To(e) {
  return Pn(e) ? e : zi(
    e,
    !1,
    cd,
    hd,
    Dl
  );
}
function Sd(e) {
  return zi(
    e,
    !1,
    fd,
    gd,
    Ml
  );
}
function Yi(e) {
  return zi(
    e,
    !0,
    dd,
    bd,
    Rl
  );
}
function zi(e, t, n, r, o) {
  if (!Ee(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = _d(e);
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
function ar(e) {
  return Pn(e) ? ar(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Pn(e) {
  return !!(e && e.__v_isReadonly);
}
function Tt(e) {
  return !!(e && e.__v_isShallow);
}
function Gi(e) {
  return e ? !!e.__v_raw : !1;
}
function le(e) {
  const t = e && e.__v_raw;
  return t ? le(t) : e;
}
function Ed(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && ni(e, "__v_skip", !0), e;
}
const Xe = (e) => Ee(e) ? To(e) : e, si = (e) => Ee(e) ? Yi(e) : e;
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ze(e) {
  return jl(e, !1);
}
function Fl(e) {
  return jl(e, !0);
}
function jl(e, t) {
  return Me(e) ? e : new Td(e, t);
}
class Td {
  constructor(t, n) {
    this.dep = new Wi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : le(t), this._value = n ? t : Xe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Tt(t) || Pn(t);
    t = r ? t : le(t), ln(t, n) && (this._rawValue = t, this._value = r ? t : Xe(t), this.dep.trigger());
  }
}
function Ul(e) {
  return Me(e) ? e.value : e;
}
const Cd = {
  get: (e, t, n) => t === "__v_raw" ? e : Ul(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return Me(o) && !Me(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Vl(e) {
  return ar(e) ? e : new Proxy(e, Cd);
}
class Od {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Wi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return Ll(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $l(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ld(e, t, n = !1) {
  let r, o;
  return q(e) ? r = e : (r = e.get, o = e.set), new Od(r, o, n);
}
const Kr = {}, ao = /* @__PURE__ */ new WeakMap();
let Sn;
function Pd(e, t = !1, n = Sn) {
  if (n) {
    let r = ao.get(n);
    r || ao.set(n, r = []), r.push(e);
  }
}
function wd(e, t, n = me) {
  const { immediate: r, deep: o, once: i, scheduler: a, augmentJob: s, call: l } = n, u = (g) => o ? g : Tt(g) || o === !1 || o === 0 ? zt(g, 1) : zt(g);
  let c, d, f, h, _ = !1, E = !1;
  if (Me(e) ? (d = () => e.value, _ = Tt(e)) : ar(e) ? (d = () => u(e), _ = !0) : X(e) ? (E = !0, _ = e.some((g) => ar(g) || Tt(g)), d = () => e.map((g) => {
    if (Me(g))
      return g.value;
    if (ar(g))
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
    const g = d, O = o === !0 ? 1 / 0 : o;
    d = () => zt(g(), O);
  }
  const w = nd(), P = () => {
    c.stop(), w && w.active && Ri(w.effects, c);
  };
  if (i && t) {
    const g = t;
    t = (...O) => {
      g(...O), P();
    };
  }
  let R = E ? new Array(e.length).fill(Kr) : Kr;
  const S = (g) => {
    if (!(!(c.flags & 1) || !c.dirty && !g))
      if (t) {
        const O = c.run();
        if (o || _ || (E ? O.some((L, A) => ln(L, R[A])) : ln(O, R))) {
          f && f();
          const L = Sn;
          Sn = c;
          try {
            const A = [
              O,
              // pass undefined as the old value when it's changed for the first time
              R === Kr ? void 0 : E && R[0] === Kr ? [] : R,
              h
            ];
            R = O, l ? l(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            Sn = L;
          }
        }
      } else
        c.run();
  };
  return s && s(S), c = new Cl(d), c.scheduler = a ? () => a(S, !1) : S, h = (g) => Pd(g, !1, c), f = c.onStop = () => {
    const g = ao.get(c);
    if (g) {
      if (l)
        l(g, 4);
      else
        for (const O of g) O();
      ao.delete(c);
    }
  }, t ? r ? S(!0) : R = c.run() : a ? a(S.bind(null, !0), !0) : c.run(), P.pause = c.pause.bind(c), P.resume = c.resume.bind(c), P.stop = P, P;
}
function zt(e, t = 1 / 0, n) {
  if (t <= 0 || !Ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Me(e))
    zt(e.value, t, n);
  else if (X(e))
    for (let r = 0; r < e.length; r++)
      zt(e[r], t, n);
  else if (gl(e) || jn(e))
    e.forEach((r) => {
      zt(r, t, n);
    });
  else if (yl(e)) {
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
function jr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Co(o, t, n);
  }
}
function Ot(e, t, n, r) {
  if (q(e)) {
    const o = jr(e, t, n, r);
    return o && bl(o) && o.catch((i) => {
      Co(i, t, n);
    }), o;
  }
  if (X(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ot(e[i], t, n, r));
    return o;
  }
}
function Co(e, t, n, r = !0) {
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
      Xt(), jr(i, null, 10, [
        e,
        l,
        u
      ]), Jt();
      return;
    }
  }
  $d(e, n, o, r, a);
}
function $d(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Je = [];
let It = -1;
const Un = [];
let nn = null, Nn = 0;
const Hl = /* @__PURE__ */ Promise.resolve();
let so = null;
function Wl(e) {
  const t = so || Hl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kd(e) {
  let t = It + 1, n = Je.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Je[r], i = br(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Xi(e) {
  if (!(e.flags & 1)) {
    const t = br(e), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= br(n) ? Je.push(e) : Je.splice(kd(t), 0, e), e.flags |= 1, Bl();
  }
}
function Bl() {
  so || (so = Hl.then(Yl));
}
function Id(e) {
  X(e) ? Un.push(...e) : nn && e.id === -1 ? nn.splice(Nn + 1, 0, e) : e.flags & 1 || (Un.push(e), e.flags |= 1), Bl();
}
function Sa(e, t, n = It + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Kl(e) {
  if (Un.length) {
    const t = [...new Set(Un)].sort(
      (n, r) => br(n) - br(r)
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
const br = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yl(e) {
  try {
    for (It = 0; It < Je.length; It++) {
      const t = Je[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), jr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < Je.length; It++) {
      const t = Je[It];
      t && (t.flags &= -2);
    }
    It = -1, Je.length = 0, Kl(), so = null, (Je.length || Un.length) && Yl();
  }
}
let De = null, zl = null;
function lo(e) {
  const t = De;
  return De = e, zl = e && e.type.__scopeId || null, t;
}
function Tn(e, t = De, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Da(-1);
    const i = lo(t);
    let a;
    try {
      a = e(...o);
    } finally {
      lo(i), r._d && Da(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Gl(e, t) {
  if (De === null)
    return e;
  const n = wo(De), r = e.dirs || (e.dirs = []);
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
const Xl = Symbol("_vte"), Jl = (e) => e.__isTeleport, sr = (e) => e && (e.disabled || e.disabled === ""), Ea = (e) => e && (e.defer || e.defer === ""), Ta = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ca = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, li = (e, t) => {
  const n = e && e.to;
  return Oe(n) ? t ? t(n) : null : n;
}, ql = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, i, a, s, l, u) {
    const {
      mc: c,
      pc: d,
      pbc: f,
      o: { insert: h, querySelector: _, createText: E, createComment: w }
    } = u, P = sr(t.props);
    let { shapeFlag: R, children: S, dynamicChildren: g } = t;
    if (e == null) {
      const O = t.el = E(""), L = t.anchor = E("");
      h(O, n, r), h(L, n, r);
      const A = (k, B) => {
        R & 16 && (o && o.isCE && (o.ce._teleportTarget = k), c(
          S,
          k,
          B,
          o,
          i,
          a,
          s,
          l
        ));
      }, F = () => {
        const k = t.target = li(t.props, _), B = Zl(k, t, E, h);
        k && (a !== "svg" && Ta(k) ? a = "svg" : a !== "mathml" && Ca(k) && (a = "mathml"), P || (A(k, B), no(t, !1)));
      };
      P && (A(n, L), no(t, !0)), Ea(t.props) ? (t.el.__isMounted = !1, ze(() => {
        F(), delete t.el.__isMounted;
      }, i)) : F();
    } else {
      if (Ea(t.props) && e.el.__isMounted === !1) {
        ze(() => {
          ql.process(
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
      const O = t.anchor = e.anchor, L = t.target = e.target, A = t.targetAnchor = e.targetAnchor, F = sr(e.props), k = F ? n : L, B = F ? O : A;
      if (a === "svg" || Ta(L) ? a = "svg" : (a === "mathml" || Ca(L)) && (a = "mathml"), g ? (f(
        e.dynamicChildren,
        g,
        k,
        o,
        i,
        a,
        s
      ), na(e, t, !0)) : l || d(
        e,
        t,
        k,
        B,
        o,
        i,
        a,
        s,
        !1
      ), P)
        F ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Yr(
          t,
          n,
          O,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = li(
          t.props,
          _
        );
        Y && Yr(
          t,
          Y,
          null,
          u,
          0
        );
      } else F && Yr(
        t,
        L,
        A,
        u,
        1
      );
      no(t, P);
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
      const h = i || !sr(f);
      for (let _ = 0; _ < s.length; _++) {
        const E = s[_];
        r(
          E,
          t,
          n,
          h,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: Yr,
  hydrate: Nd
};
function Yr(e, t, n, { o: { insert: r }, m: o }, i = 2) {
  i === 0 && r(e.targetAnchor, t, n);
  const { el: a, anchor: s, shapeFlag: l, children: u, props: c } = e, d = i === 2;
  if (d && r(a, t, n), (!d || sr(c)) && l & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  d && r(s, t, n);
}
function Nd(e, t, n, r, o, i, {
  o: { nextSibling: a, parentNode: s, querySelector: l, insert: u, createText: c }
}, d) {
  const f = t.target = li(
    t.props,
    l
  );
  if (f) {
    const h = sr(t.props), _ = f._lpa || f.firstChild;
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
        let E = _;
        for (; E; ) {
          if (E && E.nodeType === 8) {
            if (E.data === "teleport start anchor")
              t.targetStart = E;
            else if (E.data === "teleport anchor") {
              t.targetAnchor = E, f._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          E = a(E);
        }
        t.targetAnchor || Zl(f, t, c, u), d(
          _ && a(_),
          t,
          f,
          n,
          r,
          o,
          i
        );
      }
    no(t, h);
  }
  return t.anchor && a(t.anchor);
}
const Ad = ql;
function no(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, o;
    for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Zl(e, t, n, r) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[Xl] = i, e && (r(o, e), r(i, e)), i;
}
const rn = Symbol("_leaveCb"), zr = Symbol("_enterCb");
function xd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return zn(() => {
    e.isMounted = !0;
  }), Ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const ut = [Function, Array], Ql = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ut,
  onEnter: ut,
  onAfterEnter: ut,
  onEnterCancelled: ut,
  // leave
  onBeforeLeave: ut,
  onLeave: ut,
  onAfterLeave: ut,
  onLeaveCancelled: ut,
  // appear
  onBeforeAppear: ut,
  onAppear: ut,
  onAfterAppear: ut,
  onAppearCancelled: ut
}, eu = (e) => {
  const t = e.subTree;
  return t.component ? eu(t.component) : t;
}, Dd = {
  name: "BaseTransition",
  props: Ql,
  setup(e, { slots: t }) {
    const n = jt(), r = xd();
    return () => {
      const o = t.default && ru(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = tu(o), a = le(e), { mode: s } = a;
      if (r.isLeaving)
        return Wo(i);
      const l = Oa(i);
      if (!l)
        return Wo(i);
      let u = ui(
        l,
        a,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => u = d
      );
      l.type !== Ve && vr(l, u);
      let c = n.subTree && Oa(n.subTree);
      if (c && c.type !== Ve && !En(l, c) && eu(n).type !== Ve) {
        let d = ui(
          c,
          a,
          r,
          n
        );
        if (vr(c, d), s === "out-in" && l.type !== Ve)
          return r.isLeaving = !0, d.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, c = void 0;
          }, Wo(i);
        s === "in-out" && l.type !== Ve ? d.delayLeave = (f, h, _) => {
          const E = nu(
            r,
            c
          );
          E[String(c.key)] = c, f[rn] = () => {
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
function tu(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ve) {
        t = n;
        break;
      }
  }
  return t;
}
const Md = Dd;
function nu(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ui(e, t, n, r, o) {
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
    onLeaveCancelled: E,
    onBeforeAppear: w,
    onAppear: P,
    onAfterAppear: R,
    onAppearCancelled: S
  } = t, g = String(e.key), O = nu(n, e), L = (k, B) => {
    k && Ot(
      k,
      r,
      9,
      B
    );
  }, A = (k, B) => {
    const Y = B[1];
    L(k, B), X(k) ? k.every((M) => M.length <= 1) && Y() : k.length <= 1 && Y();
  }, F = {
    mode: a,
    persisted: s,
    beforeEnter(k) {
      let B = l;
      if (!n.isMounted)
        if (i)
          B = w || l;
        else
          return;
      k[rn] && k[rn](
        !0
        /* cancelled */
      );
      const Y = O[g];
      Y && En(e, Y) && Y.el[rn] && Y.el[rn](), L(B, [k]);
    },
    enter(k) {
      let B = u, Y = c, M = d;
      if (!n.isMounted)
        if (i)
          B = P || u, Y = R || c, M = S || d;
        else
          return;
      let z = !1;
      const se = k[zr] = (Te) => {
        z || (z = !0, Te ? L(M, [k]) : L(Y, [k]), F.delayedLeave && F.delayedLeave(), k[zr] = void 0);
      };
      B ? A(B, [k, se]) : se();
    },
    leave(k, B) {
      const Y = String(e.key);
      if (k[zr] && k[zr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      L(f, [k]);
      let M = !1;
      const z = k[rn] = (se) => {
        M || (M = !0, B(), se ? L(E, [k]) : L(_, [k]), k[rn] = void 0, O[Y] === e && delete O[Y]);
      };
      O[Y] = e, h ? A(h, [k, z]) : z();
    },
    clone(k) {
      const B = ui(
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
function Wo(e) {
  if (Oo(e))
    return e = un(e), e.children = null, e;
}
function Oa(e) {
  if (!Oo(e))
    return Jl(e.type) && e.children ? tu(e.children) : e;
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
function vr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ru(e, t = !1, n) {
  let r = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let a = e[i];
    const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : i);
    a.type === Ue ? (a.patchFlag & 128 && o++, r = r.concat(
      ru(a.children, t, s)
    )) : (t || a.type !== Ve) && r.push(s != null ? un(a, { key: s }) : a);
  }
  if (o > 1)
    for (let i = 0; i < r.length; i++)
      r[i].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  return q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ne({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rd() {
  const e = jt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function ou(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function lr(e, t, n, r, o = !1) {
  if (X(e)) {
    e.forEach(
      (_, E) => lr(
        _,
        t && (X(t) ? t[E] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Vn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && lr(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? wo(r.component) : r.el, a = o ? null : i, { i: s, r: l } = e, u = t && t.r, c = s.refs === me ? s.refs = {} : s.refs, d = s.setupState, f = le(d), h = d === me ? () => !1 : (_) => ce(f, _);
  if (u != null && u !== l && (Oe(u) ? (c[u] = null, h(u) && (d[u] = null)) : Me(u) && (u.value = null)), q(l))
    jr(l, s, 12, [a, c]);
  else {
    const _ = Oe(l), E = Me(l);
    if (_ || E) {
      const w = () => {
        if (e.f) {
          const P = _ ? h(l) ? d[l] : c[l] : l.value;
          o ? X(P) && Ri(P, i) : X(P) ? P.includes(i) || P.push(i) : _ ? (c[l] = [i], h(l) && (d[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value));
        } else _ ? (c[l] = a, h(l) && (d[l] = a)) : E && (l.value = a, e.k && (c[e.k] = a));
      };
      a ? (w.id = -1, ze(w, n)) : w();
    }
  }
}
Eo().requestIdleCallback;
Eo().cancelIdleCallback;
const Vn = (e) => !!e.type.__asyncLoader, Oo = (e) => e.type.__isKeepAlive;
function Fd(e, t) {
  iu(e, "a", t);
}
function jd(e, t) {
  iu(e, "da", t);
}
function iu(e, t, n = He) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Lo(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Oo(o.parent.vnode) && Ud(r, t, n, o), o = o.parent;
  }
}
function Ud(e, t, n, r) {
  const o = Lo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  qi(() => {
    Ri(r[t], o);
  }, n);
}
function Lo(e, t, n = He, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...a) => {
      Xt();
      const s = Hr(n), l = Ot(t, n, e, a);
      return s(), Jt(), l;
    });
    return r ? o.unshift(i) : o.push(i), i;
  }
}
const Zt = (e) => (t, n = He) => {
  (!Sr || e === "sp") && Lo(e, (...r) => t(...r), n);
}, au = Zt("bm"), zn = Zt("m"), Vd = Zt(
  "bu"
), Hd = Zt("u"), Ji = Zt(
  "bum"
), qi = Zt("um"), Wd = Zt(
  "sp"
), Bd = Zt("rtg"), Kd = Zt("rtc");
function Yd(e, t = He) {
  Lo("ec", e, t);
}
const Zi = "components", zd = "directives";
function uo(e, t) {
  return Qi(Zi, e, !0, t) || e;
}
const su = Symbol.for("v-ndc");
function ci(e) {
  return Oe(e) ? Qi(Zi, e, !1) || e : e || su;
}
function lu(e) {
  return Qi(zd, e);
}
function Qi(e, t, n = !0, r = !1) {
  const o = De || He;
  if (o) {
    const i = o.type;
    if (e === Zi) {
      const s = xf(
        i,
        !1
      );
      if (s && (s === t || s === pt(t) || s === So(pt(t))))
        return i;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      La(o[e] || i[e], t) || // global registration
      La(o.appContext[e], t)
    );
    return !a && r ? i : a;
  }
}
function La(e, t) {
  return e && (e[t] || e[pt(t)] || e[So(pt(t))]);
}
function Ge(e, t, n = {}, r, o) {
  if (De.ce || De.parent && Vn(De.parent) && De.parent.ce)
    return t !== "default" && (n.name = t), be(), Ct(
      Ue,
      null,
      [$e("slot", n, r && r())],
      64
    );
  let i = e[t];
  i && i._c && (i._d = !1), be();
  const a = i && uu(i(n)), s = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  a && a.key, l = Ct(
    Ue,
    {
      key: (s && !qt(s) ? s : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && r ? "_fb" : "")
    },
    a || (r ? r() : []),
    a && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), i && i._c && (i._d = !0), l;
}
function uu(e) {
  return e.some((t) => _r(t) ? !(t.type === Ve || t.type === Ue && !uu(t.children)) : !0) ? e : null;
}
const di = (e) => e ? wu(e) ? wo(e) : di(e.parent) : null, ur = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => di(e.parent),
    $root: (e) => di(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => du(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wl.bind(e.proxy)),
    $watch: (e) => gf.bind(e)
  })
), Bo = (e, t) => e !== me && !e.__isScriptSetup && ce(e, t), Gd = {
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
        if (Bo(r, t))
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
        fi && (a[t] = 0);
      }
    }
    const c = ur[t];
    let d, f;
    if (c)
      return t === "$attrs" && je(e.attrs, "get", ""), c(e);
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
    return Bo(o, t) ? (o[t] = n, !0) : r !== me && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i }
  }, a) {
    let s;
    return !!n[a] || e !== me && ce(e, a) || Bo(t, a) || (s = i[0]) && ce(s, a) || ce(r, a) || ce(ur, a) || ce(o.config.globalProperties, a);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Pa(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let fi = !0;
function Xd(e) {
  const t = du(e), n = e.proxy, r = e.ctx;
  fi = !1, t.beforeCreate && wa(t.beforeCreate, e, "bc");
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
    activated: E,
    deactivated: w,
    beforeDestroy: P,
    beforeUnmount: R,
    destroyed: S,
    unmounted: g,
    render: O,
    renderTracked: L,
    renderTriggered: A,
    errorCaptured: F,
    serverPrefetch: k,
    // public API
    expose: B,
    inheritAttrs: Y,
    // assets
    components: M,
    directives: z,
    filters: se
  } = t;
  if (u && Jd(u, r, null), a)
    for (const te in a) {
      const Q = a[te];
      q(Q) && (r[te] = Q.bind(n));
    }
  if (o) {
    const te = o.call(n, n);
    Ee(te) && (e.data = To(te));
  }
  if (fi = !0, i)
    for (const te in i) {
      const Q = i[te], Pe = q(Q) ? Q.bind(n, n) : q(Q.get) ? Q.get.bind(n, n) : Dt, we = !q(Q) && q(Q.set) ? Q.set.bind(n) : Dt, ue = dt({
        get: Pe,
        set: we
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
      cu(s[te], r, n, te);
  if (l) {
    const te = q(l) ? l.call(n) : l;
    Reflect.ownKeys(te).forEach((Q) => {
      nf(Q, te[Q]);
    });
  }
  c && wa(c, e, "c");
  function ne(te, Q) {
    X(Q) ? Q.forEach((Pe) => te(Pe.bind(n))) : Q && te(Q.bind(n));
  }
  if (ne(au, d), ne(zn, f), ne(Vd, h), ne(Hd, _), ne(Fd, E), ne(jd, w), ne(Yd, F), ne(Kd, L), ne(Bd, A), ne(Ji, R), ne(qi, g), ne(Wd, k), X(B))
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
  O && e.render === Dt && (e.render = O), Y != null && (e.inheritAttrs = Y), M && (e.components = M), z && (e.directives = z), k && ou(e);
}
function Jd(e, t, n = Dt) {
  X(e) && (e = pi(e));
  for (const r in e) {
    const o = e[r];
    let i;
    Ee(o) ? "default" in o ? i = cr(
      o.from || r,
      o.default,
      !0
    ) : i = cr(o.from || r) : i = cr(o), Me(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (a) => i.value = a
    }) : t[r] = i;
  }
}
function wa(e, t, n) {
  Ot(
    X(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function cu(e, t, n, r) {
  let o = r.includes(".") ? Tu(n, r) : () => n[r];
  if (Oe(e)) {
    const i = t[e];
    q(i) && ft(o, i);
  } else if (q(e))
    ft(o, e.bind(n));
  else if (Ee(e))
    if (X(e))
      e.forEach((i) => cu(i, t, n, r));
    else {
      const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
      q(i) && ft(o, i, e);
    }
}
function du(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = i.get(t);
  let l;
  return s ? l = s : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => co(l, u, a, !0)
  ), co(l, t, a)), Ee(t) && i.set(t, l), l;
}
function co(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && co(e, i, n, !0), o && o.forEach(
    (a) => co(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = qd[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const qd = {
  data: $a,
  props: ka,
  emits: ka,
  // objects
  methods: tr,
  computed: tr,
  // lifecycle
  beforeCreate: Ke,
  created: Ke,
  beforeMount: Ke,
  mounted: Ke,
  beforeUpdate: Ke,
  updated: Ke,
  beforeDestroy: Ke,
  beforeUnmount: Ke,
  destroyed: Ke,
  unmounted: Ke,
  activated: Ke,
  deactivated: Ke,
  errorCaptured: Ke,
  serverPrefetch: Ke,
  // assets
  components: tr,
  directives: tr,
  // watch
  watch: Qd,
  // provide / inject
  provide: $a,
  inject: Zd
};
function $a(e, t) {
  return t ? e ? function() {
    return Ne(
      q(e) ? e.call(this, this) : e,
      q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zd(e, t) {
  return tr(pi(e), pi(t));
}
function pi(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ke(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tr(e, t) {
  return e ? Ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ka(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ne(
    /* @__PURE__ */ Object.create(null),
    Pa(e),
    Pa(t ?? {})
  ) : t;
}
function Qd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ne(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ke(e[r], t[r]);
  return n;
}
function fu() {
  return {
    app: null,
    config: {
      isNativeTag: Hc,
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
let ef = 0;
function tf(e, t) {
  return function(r, o = null) {
    q(r) || (r = Ne({}, r)), o != null && !Ee(o) && (o = null);
    const i = fu(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const u = i.app = {
      _uid: ef++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Mf,
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
          const h = u._ceVNode || $e(r, o);
          return h.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, c, f), l = !0, u._container = c, c.__vue_app__ = u, wo(h.component);
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
function nf(e, t) {
  if (He) {
    let n = He.provides;
    const r = He.parent && He.parent.provides;
    r === n && (n = He.provides = Object.create(r)), n[e] = t;
  }
}
function cr(e, t, n = !1) {
  const r = jt();
  if (r || Hn) {
    let o = Hn ? Hn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && q(t) ? t.call(r && r.proxy) : t;
  }
}
const pu = {}, mu = () => Object.create(pu), hu = (e) => Object.getPrototypeOf(e) === pu;
function rf(e, t, n, r = !1) {
  const o = {}, i = mu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gu(e, t, o, i);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  n ? e.props = r ? o : Sd(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function of(e, t, n, r) {
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
            o[_] = mi(
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
    gu(e, t, o, i) && (u = !0);
    let c;
    for (const d in s)
      (!t || // for camelCase
      !ce(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = wn(d)) === d || !ce(t, c))) && (l ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[d] = mi(
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
function gu(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (rr(l))
        continue;
      const u = t[l];
      let c;
      o && ce(o, c = pt(l)) ? !i || !i.includes(c) ? n[c] = u : (s || (s = {}))[c] = u : Po(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, a = !0);
    }
  if (i) {
    const l = le(n), u = s || me;
    for (let c = 0; c < i.length; c++) {
      const d = i[c];
      n[d] = mi(
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
function mi(e, t, n, r, o, i) {
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
          const c = Hr(o);
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
    ] && (r === "" || r === wn(n)) && (r = !0));
  }
  return r;
}
const af = /* @__PURE__ */ new WeakMap();
function bu(e, t, n = !1) {
  const r = n ? af : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, a = {}, s = [];
  let l = !1;
  if (!q(e)) {
    const c = (d) => {
      l = !0;
      const [f, h] = bu(d, t, !0);
      Ne(a, f), h && s.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l)
    return Ee(e) && r.set(e, Fn), Fn;
  if (X(i))
    for (let c = 0; c < i.length; c++) {
      const d = pt(i[c]);
      Ia(d) && (a[d] = me);
    }
  else if (i)
    for (const c in i) {
      const d = pt(c);
      if (Ia(d)) {
        const f = i[c], h = a[d] = X(f) || q(f) ? { type: f } : Ne({}, f), _ = h.type;
        let E = !1, w = !0;
        if (X(_))
          for (let P = 0; P < _.length; ++P) {
            const R = _[P], S = q(R) && R.name;
            if (S === "Boolean") {
              E = !0;
              break;
            } else S === "String" && (w = !1);
          }
        else
          E = q(_) && _.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = E, h[
          1
          /* shouldCastTrue */
        ] = w, (E || ce(h, "default")) && s.push(d);
      }
    }
  const u = [a, s];
  return Ee(e) && r.set(e, u), u;
}
function Ia(e) {
  return e[0] !== "$" && !rr(e);
}
const ea = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", ta = (e) => X(e) ? e.map(Nt) : [Nt(e)], sf = (e, t, n) => {
  if (t._n)
    return t;
  const r = Tn((...o) => ta(t(...o)), n);
  return r._c = !1, r;
}, vu = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (ea(o)) continue;
    const i = e[o];
    if (q(i))
      t[o] = sf(o, i, r);
    else if (i != null) {
      const a = ta(i);
      t[o] = () => a;
    }
  }
}, yu = (e, t) => {
  const n = ta(t);
  e.slots.default = () => n;
}, _u = (e, t, n) => {
  for (const r in t)
    (n || !ea(r)) && (e[r] = t[r]);
}, lf = (e, t, n) => {
  const r = e.slots = mu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ni(r, "__", o, !0);
    const i = t._;
    i ? (_u(r, t, n), n && ni(r, "_", i, !0)) : vu(t, r);
  } else t && yu(e, t);
}, uf = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let i = !0, a = me;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? i = !1 : _u(o, t, n) : (i = !t.$stable, vu(t, o)), a = t;
  } else t && (yu(e, t), a = { default: 1 });
  if (i)
    for (const s in o)
      !ea(s) && a[s] == null && delete o[s];
}, ze = Tf;
function cf(e) {
  return df(e);
}
function df(e, t) {
  const n = Eo();
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
  } = e, E = (b, y, v, I = null, x = null, D = null, V = void 0, U = null, p = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !En(b, y) && (I = mt(b), he(b, x, D, !0), b = null), y.patchFlag === -2 && (p = !1, y.dynamicChildren = null);
    const { type: m, ref: T, shapeFlag: $ } = y;
    switch (m) {
      case Vr:
        w(b, y, v, I);
        break;
      case Ve:
        P(b, y, v, I);
        break;
      case Yo:
        b == null && R(y, v, I, V);
        break;
      case Ue:
        M(
          b,
          y,
          v,
          I,
          x,
          D,
          V,
          U,
          p
        );
        break;
      default:
        $ & 1 ? O(
          b,
          y,
          v,
          I,
          x,
          D,
          V,
          U,
          p
        ) : $ & 6 ? z(
          b,
          y,
          v,
          I,
          x,
          D,
          V,
          U,
          p
        ) : ($ & 64 || $ & 128) && m.process(
          b,
          y,
          v,
          I,
          x,
          D,
          V,
          U,
          p,
          et
        );
    }
    T != null && x ? lr(T, b && b.ref, D, y || b, !y) : T == null && b && b.ref != null && lr(b.ref, null, D, b, !0);
  }, w = (b, y, v, I) => {
    if (b == null)
      r(
        y.el = s(y.children),
        v,
        I
      );
    else {
      const x = y.el = b.el;
      y.children !== b.children && u(x, y.children);
    }
  }, P = (b, y, v, I) => {
    b == null ? r(
      y.el = l(y.children || ""),
      v,
      I
    ) : y.el = b.el;
  }, R = (b, y, v, I) => {
    [b.el, b.anchor] = _(
      b.children,
      y,
      v,
      I,
      b.el,
      b.anchor
    );
  }, S = ({ el: b, anchor: y }, v, I) => {
    let x;
    for (; b && b !== y; )
      x = f(b), r(b, v, I), b = x;
    r(y, v, I);
  }, g = ({ el: b, anchor: y }) => {
    let v;
    for (; b && b !== y; )
      v = f(b), o(b), b = v;
    o(y);
  }, O = (b, y, v, I, x, D, V, U, p) => {
    y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), b == null ? L(
      y,
      v,
      I,
      x,
      D,
      V,
      U,
      p
    ) : k(
      b,
      y,
      x,
      D,
      V,
      U,
      p
    );
  }, L = (b, y, v, I, x, D, V, U) => {
    let p, m;
    const { props: T, shapeFlag: $, transition: H, dirs: j } = b;
    if (p = b.el = a(
      b.type,
      D,
      T && T.is,
      T
    ), $ & 8 ? c(p, b.children) : $ & 16 && F(
      b.children,
      p,
      null,
      I,
      x,
      Ko(b, D),
      V,
      U
    ), j && hn(b, null, I, "created"), A(p, b, b.scopeId, V, I), T) {
      for (const N in T)
        N !== "value" && !rr(N) && i(p, N, null, T[N], D, I);
      "value" in T && i(p, "value", null, T.value, D), (m = T.onVnodeBeforeMount) && $t(m, I, b);
    }
    j && hn(b, null, I, "beforeMount");
    const C = ff(x, H);
    C && H.beforeEnter(p), r(p, y, v), ((m = T && T.onVnodeMounted) || C || j) && ze(() => {
      m && $t(m, I, b), C && H.enter(p), j && hn(b, null, I, "mounted");
    }, x);
  }, A = (b, y, v, I, x) => {
    if (v && h(b, v), I)
      for (let D = 0; D < I.length; D++)
        h(b, I[D]);
    if (x) {
      let D = x.subTree;
      if (y === D || Ou(D.type) && (D.ssContent === y || D.ssFallback === y)) {
        const V = x.vnode;
        A(
          b,
          V,
          V.scopeId,
          V.slotScopeIds,
          x.parent
        );
      }
    }
  }, F = (b, y, v, I, x, D, V, U, p = 0) => {
    for (let m = p; m < b.length; m++) {
      const T = b[m] = U ? on(b[m]) : Nt(b[m]);
      E(
        null,
        T,
        y,
        v,
        I,
        x,
        D,
        V,
        U
      );
    }
  }, k = (b, y, v, I, x, D, V) => {
    const U = y.el = b.el;
    let { patchFlag: p, dynamicChildren: m, dirs: T } = y;
    p |= b.patchFlag & 16;
    const $ = b.props || me, H = y.props || me;
    let j;
    if (v && gn(v, !1), (j = H.onVnodeBeforeUpdate) && $t(j, v, y, b), T && hn(y, b, v, "beforeUpdate"), v && gn(v, !0), ($.innerHTML && H.innerHTML == null || $.textContent && H.textContent == null) && c(U, ""), m ? B(
      b.dynamicChildren,
      m,
      U,
      v,
      I,
      Ko(y, x),
      D
    ) : V || Q(
      b,
      y,
      U,
      null,
      v,
      I,
      Ko(y, x),
      D,
      !1
    ), p > 0) {
      if (p & 16)
        Y(U, $, H, v, x);
      else if (p & 2 && $.class !== H.class && i(U, "class", null, H.class, x), p & 4 && i(U, "style", $.style, H.style, x), p & 8) {
        const C = y.dynamicProps;
        for (let N = 0; N < C.length; N++) {
          const K = C[N], re = $[K], Ce = H[K];
          (Ce !== re || K === "value") && i(U, K, re, Ce, x, v);
        }
      }
      p & 1 && b.children !== y.children && c(U, y.children);
    } else !V && m == null && Y(U, $, H, v, x);
    ((j = H.onVnodeUpdated) || T) && ze(() => {
      j && $t(j, v, y, b), T && hn(y, b, v, "updated");
    }, I);
  }, B = (b, y, v, I, x, D, V) => {
    for (let U = 0; U < y.length; U++) {
      const p = b[U], m = y[U], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        p.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (p.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !En(p, m) || // - In the case of a component, it could contain anything.
        p.shapeFlag & 198) ? d(p.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      E(
        p,
        m,
        T,
        null,
        I,
        x,
        D,
        V,
        !0
      );
    }
  }, Y = (b, y, v, I, x) => {
    if (y !== v) {
      if (y !== me)
        for (const D in y)
          !rr(D) && !(D in v) && i(
            b,
            D,
            y[D],
            null,
            x,
            I
          );
      for (const D in v) {
        if (rr(D)) continue;
        const V = v[D], U = y[D];
        V !== U && D !== "value" && i(b, D, U, V, x, I);
      }
      "value" in v && i(b, "value", y.value, v.value, x);
    }
  }, M = (b, y, v, I, x, D, V, U, p) => {
    const m = y.el = b ? b.el : s(""), T = y.anchor = b ? b.anchor : s("");
    let { patchFlag: $, dynamicChildren: H, slotScopeIds: j } = y;
    j && (U = U ? U.concat(j) : j), b == null ? (r(m, v, I), r(T, v, I), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      v,
      T,
      x,
      D,
      V,
      U,
      p
    )) : $ > 0 && $ & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (B(
      b.dynamicChildren,
      H,
      v,
      x,
      D,
      V,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || x && y === x.subTree) && na(
      b,
      y,
      !0
      /* shallow */
    )) : Q(
      b,
      y,
      v,
      T,
      x,
      D,
      V,
      U,
      p
    );
  }, z = (b, y, v, I, x, D, V, U, p) => {
    y.slotScopeIds = U, b == null ? y.shapeFlag & 512 ? x.ctx.activate(
      y,
      v,
      I,
      V,
      p
    ) : se(
      y,
      v,
      I,
      x,
      D,
      V,
      p
    ) : Te(b, y, p);
  }, se = (b, y, v, I, x, D, V) => {
    const U = b.component = $f(
      b,
      I,
      x
    );
    if (Oo(b) && (U.ctx.renderer = et), kf(U, !1, V), U.asyncDep) {
      if (x && x.registerDep(U, ne, V), !b.el) {
        const p = U.subTree = $e(Ve);
        P(null, p, y, v), b.placeholder = p.el;
      }
    } else
      ne(
        U,
        b,
        y,
        v,
        x,
        D,
        V
      );
  }, Te = (b, y, v) => {
    const I = y.component = b.component;
    if (Sf(b, y, v))
      if (I.asyncDep && !I.asyncResolved) {
        te(I, y, v);
        return;
      } else
        I.next = y, I.update();
    else
      y.el = b.el, I.vnode = y;
  }, ne = (b, y, v, I, x, D, V) => {
    const U = () => {
      if (b.isMounted) {
        let { next: $, bu: H, u: j, parent: C, vnode: N } = b;
        {
          const Ae = Su(b);
          if (Ae) {
            $ && ($.el = N.el, te(b, $, V)), Ae.asyncDep.then(() => {
              b.isUnmounted || U();
            });
            return;
          }
        }
        let K = $, re;
        gn(b, !1), $ ? ($.el = N.el, te(b, $, V)) : $ = N, H && Fo(H), (re = $.props && $.props.onVnodeBeforeUpdate) && $t(re, C, $, N), gn(b, !0);
        const Ce = Aa(b), Be = b.subTree;
        b.subTree = Ce, E(
          Be,
          Ce,
          // parent may have changed if it's in a teleport
          d(Be.el),
          // anchor may have changed if it's in a fragment
          mt(Be),
          b,
          x,
          D
        ), $.el = Ce.el, K === null && Ef(b, Ce.el), j && ze(j, x), (re = $.props && $.props.onVnodeUpdated) && ze(
          () => $t(re, C, $, N),
          x
        );
      } else {
        let $;
        const { el: H, props: j } = y, { bm: C, m: N, parent: K, root: re, type: Ce } = b, Be = Vn(y);
        gn(b, !1), C && Fo(C), !Be && ($ = j && j.onVnodeBeforeMount) && $t($, K, y), gn(b, !0);
        {
          re.ce && // @ts-expect-error _def is private
          re.ce._def.shadowRoot !== !1 && re.ce._injectChildStyle(Ce);
          const Ae = b.subTree = Aa(b);
          E(
            null,
            Ae,
            v,
            I,
            b,
            x,
            D
          ), y.el = Ae.el;
        }
        if (N && ze(N, x), !Be && ($ = j && j.onVnodeMounted)) {
          const Ae = y;
          ze(
            () => $t($, K, Ae),
            x
          );
        }
        (y.shapeFlag & 256 || K && Vn(K.vnode) && K.vnode.shapeFlag & 256) && b.a && ze(b.a, x), b.isMounted = !0, y = v = I = null;
      }
    };
    b.scope.on();
    const p = b.effect = new Cl(U);
    b.scope.off();
    const m = b.update = p.run.bind(p), T = b.job = p.runIfDirty.bind(p);
    T.i = b, T.id = b.uid, p.scheduler = () => Xi(T), gn(b, !0), m();
  }, te = (b, y, v) => {
    y.component = b;
    const I = b.vnode.props;
    b.vnode = y, b.next = null, of(b, y.props, I, v), uf(b, y.children, v), Xt(), Sa(b), Jt();
  }, Q = (b, y, v, I, x, D, V, U, p = !1) => {
    const m = b && b.children, T = b ? b.shapeFlag : 0, $ = y.children, { patchFlag: H, shapeFlag: j } = y;
    if (H > 0) {
      if (H & 128) {
        we(
          m,
          $,
          v,
          I,
          x,
          D,
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
          x,
          D,
          V,
          U,
          p
        );
        return;
      }
    }
    j & 8 ? (T & 16 && Qe(m, x, D), $ !== m && c(v, $)) : T & 16 ? j & 16 ? we(
      m,
      $,
      v,
      I,
      x,
      D,
      V,
      U,
      p
    ) : Qe(m, x, D, !0) : (T & 8 && c(v, ""), j & 16 && F(
      $,
      v,
      I,
      x,
      D,
      V,
      U,
      p
    ));
  }, Pe = (b, y, v, I, x, D, V, U, p) => {
    b = b || Fn, y = y || Fn;
    const m = b.length, T = y.length, $ = Math.min(m, T);
    let H;
    for (H = 0; H < $; H++) {
      const j = y[H] = p ? on(y[H]) : Nt(y[H]);
      E(
        b[H],
        j,
        v,
        null,
        x,
        D,
        V,
        U,
        p
      );
    }
    m > T ? Qe(
      b,
      x,
      D,
      !0,
      !1,
      $
    ) : F(
      y,
      v,
      I,
      x,
      D,
      V,
      U,
      p,
      $
    );
  }, we = (b, y, v, I, x, D, V, U, p) => {
    let m = 0;
    const T = y.length;
    let $ = b.length - 1, H = T - 1;
    for (; m <= $ && m <= H; ) {
      const j = b[m], C = y[m] = p ? on(y[m]) : Nt(y[m]);
      if (En(j, C))
        E(
          j,
          C,
          v,
          null,
          x,
          D,
          V,
          U,
          p
        );
      else
        break;
      m++;
    }
    for (; m <= $ && m <= H; ) {
      const j = b[$], C = y[H] = p ? on(y[H]) : Nt(y[H]);
      if (En(j, C))
        E(
          j,
          C,
          v,
          null,
          x,
          D,
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
        const j = H + 1, C = j < T ? y[j].el : I;
        for (; m <= H; )
          E(
            null,
            y[m] = p ? on(y[m]) : Nt(y[m]),
            v,
            C,
            x,
            D,
            V,
            U,
            p
          ), m++;
      }
    } else if (m > H)
      for (; m <= $; )
        he(b[m], x, D, !0), m++;
    else {
      const j = m, C = m, N = /* @__PURE__ */ new Map();
      for (m = C; m <= H; m++) {
        const at = y[m] = p ? on(y[m]) : Nt(y[m]);
        at.key != null && N.set(at.key, m);
      }
      let K, re = 0;
      const Ce = H - C + 1;
      let Be = !1, Ae = 0;
      const mn = new Array(Ce);
      for (m = 0; m < Ce; m++) mn[m] = 0;
      for (m = j; m <= $; m++) {
        const at = b[m];
        if (re >= Ce) {
          he(at, x, D, !0);
          continue;
        }
        let wt;
        if (at.key != null)
          wt = N.get(at.key);
        else
          for (K = C; K <= H; K++)
            if (mn[K - C] === 0 && En(at, y[K])) {
              wt = K;
              break;
            }
        wt === void 0 ? he(at, x, D, !0) : (mn[wt - C] = m + 1, wt >= Ae ? Ae = wt : Be = !0, E(
          at,
          y[wt],
          v,
          null,
          x,
          D,
          V,
          U,
          p
        ), re++);
      }
      const Mo = Be ? pf(mn) : Fn;
      for (K = Mo.length - 1, m = Ce - 1; m >= 0; m--) {
        const at = C + m, wt = y[at], ha = y[at + 1], ga = at + 1 < T ? (
          // #13559, fallback to el placeholder for unresolved async component
          ha.el || ha.placeholder
        ) : I;
        mn[m] === 0 ? E(
          null,
          wt,
          v,
          ga,
          x,
          D,
          V,
          U,
          p
        ) : Be && (K < 0 || m !== Mo[K] ? ue(wt, v, ga, 2) : K--);
      }
    }
  }, ue = (b, y, v, I, x = null) => {
    const { el: D, type: V, transition: U, children: p, shapeFlag: m } = b;
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
    if (V === Ue) {
      r(D, y, v);
      for (let $ = 0; $ < p.length; $++)
        ue(p[$], y, v, I);
      r(b.anchor, y, v);
      return;
    }
    if (V === Yo) {
      S(b, y, v);
      return;
    }
    if (I !== 2 && m & 1 && U)
      if (I === 0)
        U.beforeEnter(D), r(D, y, v), ze(() => U.enter(D), x);
      else {
        const { leave: $, delayLeave: H, afterLeave: j } = U, C = () => {
          b.ctx.isUnmounted ? o(D) : r(D, y, v);
        }, N = () => {
          $(D, () => {
            C(), j && j();
          });
        };
        H ? H(D, C, N) : N();
      }
    else
      r(D, y, v);
  }, he = (b, y, v, I = !1, x = !1) => {
    const {
      type: D,
      props: V,
      ref: U,
      children: p,
      dynamicChildren: m,
      shapeFlag: T,
      patchFlag: $,
      dirs: H,
      cacheIndex: j
    } = b;
    if ($ === -2 && (x = !1), U != null && (Xt(), lr(U, null, v, b, !0), Jt()), j != null && (y.renderCache[j] = void 0), T & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const C = T & 1 && H, N = !Vn(b);
    let K;
    if (N && (K = V && V.onVnodeBeforeUnmount) && $t(K, y, b), T & 6)
      Lt(b.component, v, I);
    else {
      if (T & 128) {
        b.suspense.unmount(v, I);
        return;
      }
      C && hn(b, null, y, "beforeUnmount"), T & 64 ? b.type.remove(
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
      (D !== Ue || $ > 0 && $ & 64) ? Qe(
        m,
        y,
        v,
        !1,
        !0
      ) : (D === Ue && $ & 384 || !x && T & 16) && Qe(p, y, v), I && it(b);
    }
    (N && (K = V && V.onVnodeUnmounted) || C) && ze(() => {
      K && $t(K, y, b), C && hn(b, null, y, "unmounted");
    }, v);
  }, it = (b) => {
    const { type: y, el: v, anchor: I, transition: x } = b;
    if (y === Ue) {
      We(v, I);
      return;
    }
    if (y === Yo) {
      g(b);
      return;
    }
    const D = () => {
      o(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (b.shapeFlag & 1 && x && !x.persisted) {
      const { leave: V, delayLeave: U } = x, p = () => V(v, D);
      U ? U(b.el, D, p) : p();
    } else
      D();
  }, We = (b, y) => {
    let v;
    for (; b !== y; )
      v = f(b), o(b), b = v;
    o(y);
  }, Lt = (b, y, v) => {
    const {
      bum: I,
      scope: x,
      job: D,
      subTree: V,
      um: U,
      m: p,
      a: m,
      parent: T,
      slots: { __: $ }
    } = b;
    Na(p), Na(m), I && Fo(I), T && X($) && $.forEach((H) => {
      T.renderCache[H] = void 0;
    }), x.stop(), D && (D.flags |= 8, he(V, b, y, v)), U && ze(U, y), ze(() => {
      b.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve());
  }, Qe = (b, y, v, I = !1, x = !1, D = 0) => {
    for (let V = D; V < b.length; V++)
      he(b[V], y, v, I, x);
  }, mt = (b) => {
    if (b.shapeFlag & 6)
      return mt(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), v = y && y[Xl];
    return v ? f(v) : y;
  };
  let ht = !1;
  const Pt = (b, y, v) => {
    b == null ? y._vnode && he(y._vnode, null, null, !0) : E(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      v
    ), y._vnode = b, ht || (ht = !0, Sa(), Kl(), ht = !1);
  }, et = {
    p: E,
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
    render: Pt,
    hydrate: void 0,
    createApp: tf(Pt)
  };
}
function Ko({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ff(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function na(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (X(r) && X(o))
    for (let i = 0; i < r.length; i++) {
      const a = r[i];
      let s = o[i];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[i] = on(o[i]), s.el = a.el), !n && s.patchFlag !== -2 && na(a, s)), s.type === Vr && (s.el = a.el), s.type === Ve && !s.el && (s.el = a.el);
    }
}
function pf(e) {
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
function Su(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Su(t);
}
function Na(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const mf = Symbol.for("v-scx"), hf = () => cr(mf);
function ft(e, t, n) {
  return Eu(e, t, n);
}
function Eu(e, t, n = me) {
  const { immediate: r, deep: o, flush: i, once: a } = n, s = Ne({}, n), l = t && r || !t && i !== "post";
  let u;
  if (Sr) {
    if (i === "sync") {
      const h = hf();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = Dt, h.resume = Dt, h.pause = Dt, h;
    }
  }
  const c = He;
  s.call = (h, _, E) => Ot(h, c, _, E);
  let d = !1;
  i === "post" ? s.scheduler = (h) => {
    ze(h, c && c.suspense);
  } : i !== "sync" && (d = !0, s.scheduler = (h, _) => {
    _ ? h() : Xi(h);
  }), s.augmentJob = (h) => {
    t && (h.flags |= 4), d && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const f = wd(e, t, s);
  return Sr && (u ? u.push(f) : l && f()), f;
}
function gf(e, t, n) {
  const r = this.proxy, o = Oe(e) ? e.includes(".") ? Tu(r, e) : () => r[e] : e.bind(r, r);
  let i;
  q(t) ? i = t : (i = t.handler, n = t);
  const a = Hr(this), s = Eu(o, i.bind(r), n);
  return a(), s;
}
function Tu(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const bf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pt(t)}Modifiers`] || e[`${wn(t)}Modifiers`];
function vf(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let o = n;
  const i = t.startsWith("update:"), a = i && bf(r, t.slice(7));
  a && (a.trim && (o = n.map((c) => Oe(c) ? c.trim() : c)), a.number && (o = n.map(zc)));
  let s, l = r[s = Ro(t)] || // also try camelCase event handler (#2249)
  r[s = Ro(pt(t))];
  !l && i && (l = r[s = Ro(wn(t))]), l && Ot(
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
function Cu(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let a = {}, s = !1;
  if (!q(e)) {
    const l = (u) => {
      const c = Cu(u, t, !0);
      c && (s = !0, Ne(a, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !s ? (Ee(e) && r.set(e, null), null) : (X(i) ? i.forEach((l) => a[l] = null) : Ne(a, i), Ee(e) && r.set(e, a), a);
}
function Po(e, t) {
  return !e || !vo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, wn(t)) || ce(e, t));
}
function Aa(e) {
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
    inheritAttrs: E
  } = e, w = lo(e);
  let P, R;
  try {
    if (n.shapeFlag & 4) {
      const g = o || r, O = g;
      P = Nt(
        u.call(
          O,
          g,
          c,
          d,
          h,
          f,
          _
        )
      ), R = s;
    } else {
      const g = t;
      P = Nt(
        g.length > 1 ? g(
          d,
          { attrs: s, slots: a, emit: l }
        ) : g(
          d,
          null
        )
      ), R = t.props ? s : yf(s);
    }
  } catch (g) {
    dr.length = 0, Co(g, e, 1), P = $e(Ve);
  }
  let S = P;
  if (R && E !== !1) {
    const g = Object.keys(R), { shapeFlag: O } = S;
    g.length && O & 7 && (i && g.some(Mi) && (R = _f(
      R,
      i
    )), S = un(S, R, !1, !0));
  }
  return n.dirs && (S = un(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && vr(S, n.transition), P = S, lo(w), P;
}
const yf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _f = (e, t) => {
  const n = {};
  for (const r in e)
    (!Mi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Sf(e, t, n) {
  const { props: r, children: o, component: i } = e, { props: a, children: s, patchFlag: l } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? xa(r, a, u) : !!a;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (a[f] !== r[f] && !Po(u, f))
          return !0;
      }
    }
  } else
    return (o || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? xa(r, a, u) : !0 : !!a;
  return !1;
}
function xa(e, t, n) {
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
function Ef({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ou = (e) => e.__isSuspense;
function Tf(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : Id(e);
}
const Ue = Symbol.for("v-fgt"), Vr = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Yo = Symbol.for("v-stc"), dr = [];
let st = null;
function be(e = !1) {
  dr.push(st = e ? null : []);
}
function Cf() {
  dr.pop(), st = dr[dr.length - 1] || null;
}
let yr = 1;
function Da(e, t = !1) {
  yr += e, e < 0 && st && t && (st.hasOnce = !0);
}
function Lu(e) {
  return e.dynamicChildren = yr > 0 ? st || Fn : null, Cf(), yr > 0 && st && st.push(e), e;
}
function qe(e, t, n, r, o, i) {
  return Lu(
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
  return Lu(
    $e(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function _r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function En(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Pu = ({ key: e }) => e ?? null, ro = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Oe(e) || Me(e) || q(e) ? { i: De, r: e, k: t, f: !!n } : e : null);
function Ft(e, t = null, n = null, r = 0, o = null, i = e === Ue ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pu(t),
    ref: t && ro(t),
    scopeId: zl,
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
    ctx: De
  };
  return s ? (oa(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16), yr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  st && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && st.push(l), l;
}
const $e = Of;
function Of(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === su) && (e = Ve), _r(e)) {
    const s = un(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && oa(s, n), yr > 0 && !i && st && (s.shapeFlag & 6 ? st[st.indexOf(e)] = s : st.push(s)), s.patchFlag = -2, s;
  }
  if (Df(e) && (e = e.__vccOpts), t) {
    t = Lf(t);
    let { class: s, style: l } = t;
    s && !Oe(s) && (t.class = Bn(s)), Ee(l) && (Gi(l) && !X(l) && (l = Ne({}, l)), t.style = ji(l));
  }
  const a = Oe(e) ? 1 : Ou(e) ? 128 : Jl(e) ? 64 : Ee(e) ? 4 : q(e) ? 2 : 0;
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
function Lf(e) {
  return e ? Gi(e) || hu(e) ? Ne({}, e) : e : null;
}
function un(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: a, children: s, transition: l } = e, u = t ? de(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Pu(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? X(i) ? i.concat(ro(t)) : [i, ro(t)] : ro(t)
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
    patchFlag: t && e.type !== Ue ? a === -1 ? 16 : a | 16 : a,
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
  return l && r && vr(
    c,
    l.clone(c)
  ), c;
}
function ra(e = " ", t = 0) {
  return $e(Vr, null, e, t);
}
function vt(e = "", t = !1) {
  return t ? (be(), Ct(Ve, null, e)) : $e(Ve, null, e);
}
function Nt(e) {
  return e == null || typeof e == "boolean" ? $e(Ve) : X(e) ? $e(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _r(e) ? on(e) : $e(Vr, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : un(e);
}
function oa(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), oa(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !hu(t) ? t._ctx = De : o === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else q(t) ? (t = { default: t, _ctx: De }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ra(t)]) : n = 8);
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
        t.style = ji([t.style, r.style]);
      else if (vo(o)) {
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
const Pf = fu();
let wf = 0;
function $f(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Pf, i = {
    uid: wf++,
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
    scope: new Tl(
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
    propsOptions: bu(r, o),
    emitsOptions: Cu(r, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = vf.bind(null, i), e.ce && e.ce(i), i;
}
let He = null;
const jt = () => He || De;
let fo, hi;
{
  const e = Eo(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((a) => a(i)) : o[0](i);
    };
  };
  fo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => He = n
  ), hi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sr = n
  );
}
const Hr = (e) => {
  const t = He;
  return fo(e), e.scope.on(), () => {
    e.scope.off(), fo(t);
  };
}, Ma = () => {
  He && He.scope.off(), fo(null);
};
function wu(e) {
  return e.vnode.shapeFlag & 4;
}
let Sr = !1;
function kf(e, t = !1, n = !1) {
  t && hi(t);
  const { props: r, children: o } = e.vnode, i = wu(e);
  rf(e, r, i, t), lf(e, o, n || t);
  const a = i ? If(e, t) : void 0;
  return t && hi(!1), a;
}
function If(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gd);
  const { setup: r } = n;
  if (r) {
    Xt();
    const o = e.setupContext = r.length > 1 ? Af(e) : null, i = Hr(e), a = jr(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), s = bl(a);
    if (Jt(), i(), (s || e.sp) && !Vn(e) && ou(e), s) {
      if (a.then(Ma, Ma), t)
        return a.then((l) => {
          Ra(e, l);
        }).catch((l) => {
          Co(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Ra(e, a);
  } else
    $u(e);
}
function Ra(e, t, n) {
  q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) && (e.setupState = Vl(t)), $u(e);
}
function $u(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Dt);
  {
    const o = Hr(e);
    Xt();
    try {
      Xd(e);
    } finally {
      Jt(), o();
    }
  }
}
const Nf = {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function Af(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vl(Ed(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ur)
        return ur[n](e);
    },
    has(t, n) {
      return n in t || n in ur;
    }
  })) : e.proxy;
}
function xf(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Df(e) {
  return q(e) && "__vccOpts" in e;
}
const dt = (e, t) => Ld(e, t, Sr);
function ia(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Ee(t) && !X(t) ? _r(t) ? $e(e, null, [t]) : $e(e, t) : $e(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && _r(n) && (n = [n]), $e(e, t, n));
}
const Mf = "3.5.18";
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gi;
const Fa = typeof window < "u" && window.trustedTypes;
if (Fa)
  try {
    gi = /* @__PURE__ */ Fa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ku = gi ? (e) => gi.createHTML(e) : (e) => e, Rf = "http://www.w3.org/2000/svg", Ff = "http://www.w3.org/1998/Math/MathML", Kt = typeof document < "u" ? document : null, ja = Kt && /* @__PURE__ */ Kt.createElement("template"), jf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kt.createElementNS(Rf, e) : t === "mathml" ? Kt.createElementNS(Ff, e) : n ? Kt.createElement(e, { is: n }) : Kt.createElement(e);
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
      ja.innerHTML = ku(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = ja.content;
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
}, en = "transition", Jn = "animation", Er = Symbol("_vtc"), Iu = {
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
}, Uf = /* @__PURE__ */ Ne(
  {},
  Ql,
  Iu
), Vf = (e) => (e.displayName = "Transition", e.props = Uf, e), Hf = /* @__PURE__ */ Vf(
  (e, { slots: t }) => ia(Md, Wf(e), t)
), bn = (e, t = []) => {
  X(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ua = (e) => e ? X(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Wf(e) {
  const t = {};
  for (const M in e)
    M in Iu || (t[M] = e[M]);
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
  } = e, _ = Bf(o), E = _ && _[0], w = _ && _[1], {
    onBeforeEnter: P,
    onEnter: R,
    onEnterCancelled: S,
    onLeave: g,
    onLeaveCancelled: O,
    onBeforeAppear: L = P,
    onAppear: A = R,
    onAppearCancelled: F = S
  } = t, k = (M, z, se, Te) => {
    M._enterCancelled = Te, vn(M, z ? c : s), vn(M, z ? u : a), se && se();
  }, B = (M, z) => {
    M._isLeaving = !1, vn(M, d), vn(M, h), vn(M, f), z && z();
  }, Y = (M) => (z, se) => {
    const Te = M ? A : R, ne = () => k(z, M, se);
    bn(Te, [z, ne]), Va(() => {
      vn(z, M ? l : i), Vt(z, M ? c : s), Ua(Te) || Ha(z, r, E, ne);
    });
  };
  return Ne(t, {
    onBeforeEnter(M) {
      bn(P, [M]), Vt(M, i), Vt(M, a);
    },
    onBeforeAppear(M) {
      bn(L, [M]), Vt(M, l), Vt(M, u);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(M, z) {
      M._isLeaving = !0;
      const se = () => B(M, z);
      Vt(M, d), M._enterCancelled ? (Vt(M, f), Ka()) : (Ka(), Vt(M, f)), Va(() => {
        M._isLeaving && (vn(M, d), Vt(M, h), Ua(g) || Ha(M, r, w, se));
      }), bn(g, [M, se]);
    },
    onEnterCancelled(M) {
      k(M, !1, void 0, !0), bn(S, [M]);
    },
    onAppearCancelled(M) {
      k(M, !0, void 0, !0), bn(F, [M]);
    },
    onLeaveCancelled(M) {
      B(M), bn(O, [M]);
    }
  });
}
function Bf(e) {
  if (e == null)
    return null;
  if (Ee(e))
    return [zo(e.enter), zo(e.leave)];
  {
    const t = zo(e);
    return [t, t];
  }
}
function zo(e) {
  return Gc(e);
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Er] || (e[Er] = /* @__PURE__ */ new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Er];
  n && (n.delete(t), n.size || (e[Er] = void 0));
}
function Va(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kf = 0;
function Ha(e, t, n, r) {
  const o = e._endId = ++Kf, i = () => {
    o === e._endId && r();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: a, timeout: s, propCount: l } = Yf(e, t);
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
function Yf(e, t) {
  const n = window.getComputedStyle(e), r = (_) => (n[_] || "").split(", "), o = r(`${en}Delay`), i = r(`${en}Duration`), a = Wa(o, i), s = r(`${Jn}Delay`), l = r(`${Jn}Duration`), u = Wa(s, l);
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
function Wa(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ba(n) + Ba(e[r])));
}
function Ba(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ka() {
  return document.body.offsetHeight;
}
function zf(e, t, n) {
  const r = e[Er];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ya = Symbol("_vod"), Gf = Symbol("_vsh"), Xf = Symbol(""), Jf = /(^|;)\s*display\s*:/;
function qf(e, t, n) {
  const r = e.style, o = Oe(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (Oe(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && oo(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && oo(r, a, "");
    for (const a in n)
      a === "display" && (i = !0), oo(r, a, n[a]);
  } else if (o) {
    if (t !== n) {
      const a = r[Xf];
      a && (n += ";" + a), r.cssText = n, i = Jf.test(n);
    }
  } else t && e.removeAttribute("style");
  Ya in e && (e[Ya] = i ? r.display : "", e[Gf] && (r.display = "none"));
}
const za = /\s*!important$/;
function oo(e, t, n) {
  if (X(n))
    n.forEach((r) => oo(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Zf(e, t);
    za.test(n) ? e.setProperty(
      wn(r),
      n.replace(za, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ga = ["Webkit", "Moz", "ms"], Go = {};
function Zf(e, t) {
  const n = Go[t];
  if (n)
    return n;
  let r = pt(t);
  if (r !== "filter" && r in e)
    return Go[t] = r;
  r = So(r);
  for (let o = 0; o < Ga.length; o++) {
    const i = Ga[o] + r;
    if (i in e)
      return Go[t] = i;
  }
  return t;
}
const Xa = "http://www.w3.org/1999/xlink";
function Ja(e, t, n, r, o, i = ed(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xa, t.slice(6, t.length)) : e.setAttributeNS(Xa, t, n) : n == null || i && !_l(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : qt(n) ? String(n) : n
  );
}
function qa(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ku(n) : n);
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
    s === "boolean" ? n = _l(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(o || t);
}
function Qf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ep(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Za = Symbol("_vei");
function tp(e, t, n, r, o = null) {
  const i = e[Za] || (e[Za] = {}), a = i[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = np(t);
    if (r) {
      const u = i[t] = ip(
        r,
        o
      );
      Qf(e, s, u, l);
    } else a && (ep(e, s, a, l), i[t] = void 0);
  }
}
const Qa = /(?:Once|Passive|Capture)$/;
function np(e) {
  let t;
  if (Qa.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Qa); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : wn(e.slice(2)), t];
}
let Xo = 0;
const rp = /* @__PURE__ */ Promise.resolve(), op = () => Xo || (rp.then(() => Xo = 0), Xo = Date.now());
function ip(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ot(
      ap(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = op(), n;
}
function ap(e, t) {
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
const es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sp = (e, t, n, r, o, i) => {
  const a = o === "svg";
  t === "class" ? zf(e, r, a) : t === "style" ? qf(e, n, r) : vo(t) ? Mi(t) || tp(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : lp(e, t, r, a)) ? (qa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ja(e, t, r, a, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Oe(r)) ? qa(e, pt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ja(e, t, r, a));
};
function lp(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && es(t) && q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return es(t) && Oe(n) ? !1 : t in e;
}
const up = /* @__PURE__ */ Ne({ patchProp: sp }, jf);
let ts;
function cp() {
  return ts || (ts = cf(up));
}
const dp = (...e) => {
  const t = cp().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = pp(r);
    if (!o) return;
    const i = t._component;
    !q(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const a = n(o, !1, fp(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
};
function fp(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pp(e) {
  return Oe(e) ? document.querySelector(e) : e;
}
var mp = Object.defineProperty, ns = Object.getOwnPropertySymbols, hp = Object.prototype.hasOwnProperty, gp = Object.prototype.propertyIsEnumerable, rs = (e, t, n) => t in e ? mp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, bp = (e, t) => {
  for (var n in t || (t = {})) hp.call(t, n) && rs(e, n, t[n]);
  if (ns) for (var n of ns(t)) gp.call(t, n) && rs(e, n, t[n]);
  return e;
};
function $n(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function aa(e) {
  return typeof e == "function" && "call" in e && "apply" in e;
}
function _e(e) {
  return !$n(e);
}
function Mt(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Nu(e = {}, t = {}) {
  let n = bp({}, e);
  return Object.keys(t).forEach((r) => {
    let o = r;
    Mt(t[o]) && o in e && Mt(e[o]) ? n[o] = Nu(e[o], t[o]) : n[o] = t[o];
  }), n;
}
function vp(...e) {
  return e.reduce((t, n, r) => r === 0 ? n : Nu(t, n), {});
}
function lt(e, ...t) {
  return aa(e) ? e(...t) : e;
}
function ot(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function At(e) {
  return ot(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function sa(e, t = "", n = {}) {
  let r = At(t).split("."), o = r.shift();
  if (o) {
    if (Mt(e)) {
      let i = Object.keys(e).find((a) => At(a) === o) || "";
      return sa(lt(e[i], n), r.join("."), n);
    }
    return;
  }
  return lt(e, n);
}
function Au(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function yp(e) {
  return _e(e) && !isNaN(e);
}
function On(e, t) {
  if (t) {
    let n = t.test(e);
    return t.lastIndex = 0, n;
  }
  return !1;
}
function _p(...e) {
  return vp(...e);
}
function fr(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function Sp(e) {
  return ot(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function xu(e) {
  return ot(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function Du() {
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
function Ep(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function po(e, t) {
  if (e && t) {
    let n = (r) => {
      Ep(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Tp() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function Cp(e) {
  typeof e == "string" ? po(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.setProperty(e.variableName, Tp() + "px"), po(document.body, (e == null ? void 0 : e.className) || "p-overflow-hidden"));
}
function pr(e, t) {
  if (e && t) {
    let n = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(n));
  }
}
function Op(e) {
  typeof e == "string" ? pr(document.body, e || "p-overflow-hidden") : (e != null && e.variableName && document.body.style.removeProperty(e.variableName), pr(document.body, (e == null ? void 0 : e.className) || "p-overflow-hidden"));
}
function Lp() {
  let e = window, t = document, n = t.documentElement, r = t.getElementsByTagName("body")[0], o = e.innerWidth || n.clientWidth || r.clientWidth, i = e.innerHeight || n.clientHeight || r.clientHeight;
  return { width: o, height: i };
}
function os(e) {
  return e ? Math.abs(e.scrollLeft) : 0;
}
function Pp(e, t) {
  e && (typeof t == "string" ? e.style.cssText = t : Object.entries(t || {}).forEach(([n, r]) => e.style[n] = r));
}
function Mu(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function wp(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function $p(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && wp(e));
}
function kn(e) {
  return typeof Element < "u" ? e instanceof Element : e !== null && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
}
function mo(e, t = {}) {
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
        i ? e.addEventListener(i[1].toLowerCase(), o) : r === "p-bind" || r === "pBind" ? mo(e, o) : (o = r === "class" ? [...new Set(n("class", o))].join(" ").trim() : r === "style" ? n("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = o), e.setAttribute(r, o));
      }
    });
  }
}
function Ru(e, t = {}, ...n) {
  {
    let r = document.createElement(e);
    return mo(r, t), r.append(...n), r;
  }
}
function kp(e, t) {
  return kn(e) ? Array.from(e.querySelectorAll(t)) : [];
}
function Ip(e, t) {
  return kn(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function Dn(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Np(e, t) {
  if (kn(e)) {
    let n = e.getAttribute(t);
    return isNaN(n) ? n === "true" || n === "false" ? n === "true" : n : +n;
  }
}
function Fu(e, t = "") {
  let n = kp(e, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
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
  let n = Fu(e, t);
  return n.length > 0 ? n[0] : null;
}
function is(e) {
  if (e) {
    let t = e.offsetHeight, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingTop) + parseFloat(n.paddingBottom) + parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth), t;
  }
  return 0;
}
function Ap(e, t) {
  let n = Fu(e, t);
  return n.length > 0 ? n[n.length - 1] : null;
}
function xp(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return { top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: t.left + (window.pageXOffset || os(document.documentElement) || os(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function ju(e, t) {
  return e ? e.offsetHeight : 0;
}
function as(e) {
  if (e) {
    let t = e.offsetWidth, n = getComputedStyle(e);
    return t -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight) + parseFloat(n.borderLeftWidth) + parseFloat(n.borderRightWidth), t;
  }
  return 0;
}
function Uu() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ss(e, t = "") {
  return kn(e) ? e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`) : !1;
}
function Vu(e, t = "", n) {
  kn(e) && n !== null && n !== void 0 && e.setAttribute(t, n);
}
var Gr = {};
function Dp(e = "pui_id_") {
  return Object.hasOwn(Gr, e) || (Gr[e] = 0), Gr[e]++, `${e}${Gr[e]}`;
}
function Mp() {
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
var Jo = Mp(), Rp = Object.defineProperty, Fp = Object.defineProperties, jp = Object.getOwnPropertyDescriptors, ho = Object.getOwnPropertySymbols, Hu = Object.prototype.hasOwnProperty, Wu = Object.prototype.propertyIsEnumerable, ls = (e, t, n) => t in e ? Rp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yt = (e, t) => {
  for (var n in t || (t = {})) Hu.call(t, n) && ls(e, n, t[n]);
  if (ho) for (var n of ho(t)) Wu.call(t, n) && ls(e, n, t[n]);
  return e;
}, qo = (e, t) => Fp(e, jp(t)), Ht = (e, t) => {
  var n = {};
  for (var r in e) Hu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ho) for (var r of ho(e)) t.indexOf(r) < 0 && Wu.call(e, r) && (n[r] = e[r]);
  return n;
}, Up = Du(), xe = Up, Tr = /{([^}]*)}/g, Bu = /(\d+\s+[\+\-\*\/]\s+\d+)/g, Ku = /var\([^)]+\)/g;
function us(e) {
  return ot(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Vp(e) {
  return Mt(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function Hp(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function bi(e = "", t = "") {
  return Hp(`${ot(e, !1) && ot(t, !1) ? `${e}-` : e}${t}`);
}
function Yu(e = "", t = "") {
  return `--${bi(e, t)}`;
}
function Wp(e = "") {
  let t = (e.match(/{/g) || []).length, n = (e.match(/}/g) || []).length;
  return (t + n) % 2 !== 0;
}
function zu(e, t = "", n = "", r = [], o) {
  if (ot(e)) {
    let i = e.trim();
    if (Wp(i)) return;
    if (On(i, Tr)) {
      let a = i.replaceAll(Tr, (s) => {
        let l = s.replace(/{|}/g, "").split(".").filter((u) => !r.some((c) => On(u, c)));
        return `var(${Yu(n, xu(l.join("-")))}${_e(o) ? `, ${o}` : ""})`;
      });
      return On(a.replace(Ku, "0"), Bu) ? `calc(${a})` : a;
    }
    return i;
  } else if (yp(e)) return e;
}
function Bp(e, t, n) {
  ot(t, !1) && e.push(`${t}:${n};`);
}
function An(e, t) {
  return e ? `${e}{${t}}` : "";
}
function Gu(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function n(a, s) {
    let l = [], u = 0, c = "", d = null, f = 0;
    for (; u <= a.length; ) {
      let h = a[u];
      if ((h === '"' || h === "'" || h === "`") && a[u - 1] !== "\\" && (d = d === h ? null : h), !d && (h === "(" && f++, h === ")" && f--, (h === "," || u === a.length) && f === 0)) {
        let _ = c.trim();
        _.startsWith("dt(") ? l.push(Gu(_, s)) : l.push(r(_)), c = "", u++;
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
var Xu = (e) => {
  var t;
  let n = fe.getTheme(), r = vi(n, e, void 0, "variable"), o = (t = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : t[0], i = vi(n, e, void 0, "value");
  return { name: o, variable: r, value: i };
}, Ln = (...e) => vi(fe.getTheme(), ...e), vi = (e = {}, t, n, r) => {
  if (t) {
    let { variable: o, options: i } = fe.defaults || {}, { prefix: a, transform: s } = (e == null ? void 0 : e.options) || i || {}, l = On(t, Tr) ? t : `{${t}}`;
    return r === "value" || $n(r) && s === "strict" ? fe.getTokenValue(t) : zu(l, void 0, a, [o.excludedKeyRegex], n);
  }
  return "";
};
function Xr(e, ...t) {
  if (e instanceof Array) {
    let n = e.reduce((r, o, i) => {
      var a;
      return r + o + ((a = lt(t[i], { dt: Ln })) != null ? a : "");
    }, "");
    return Gu(n, Ln);
  }
  return lt(e, { dt: Ln });
}
function Kp(e, t = {}) {
  let n = fe.defaults.variable, { prefix: r = n.prefix, selector: o = n.selector, excludedKeyRegex: i = n.excludedKeyRegex } = t, a = [], s = [], l = [{ node: e, path: r }];
  for (; l.length; ) {
    let { node: c, path: d } = l.pop();
    for (let f in c) {
      let h = c[f], _ = Vp(h), E = On(f, i) ? bi(d) : bi(d, xu(f));
      if (Mt(_)) l.push({ node: _, path: E });
      else {
        let w = Yu(E), P = zu(_, E, r, [i]);
        Bp(s, w, P);
        let R = E;
        r && R.startsWith(r + "-") && (R = R.slice(r.length + 1)), a.push(R.replace(/-/g, "."));
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
  return Kp(e, { prefix: t == null ? void 0 : t.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: n, set: r, defaults: o }) {
  var i, a, s, l, u, c, d;
  let { preset: f, options: h } = t, _, E, w, P, R, S, g;
  if (_e(f) && h.transform !== "strict") {
    let { primitive: O, semantic: L, extend: A } = f, F = L || {}, { colorScheme: k } = F, B = Ht(F, ["colorScheme"]), Y = A || {}, { colorScheme: M } = Y, z = Ht(Y, ["colorScheme"]), se = k || {}, { dark: Te } = se, ne = Ht(se, ["dark"]), te = M || {}, { dark: Q } = te, Pe = Ht(te, ["dark"]), we = _e(O) ? this._toVariables({ primitive: O }, h) : {}, ue = _e(B) ? this._toVariables({ semantic: B }, h) : {}, he = _e(ne) ? this._toVariables({ light: ne }, h) : {}, it = _e(Te) ? this._toVariables({ dark: Te }, h) : {}, We = _e(z) ? this._toVariables({ semantic: z }, h) : {}, Lt = _e(Pe) ? this._toVariables({ light: Pe }, h) : {}, Qe = _e(Q) ? this._toVariables({ dark: Q }, h) : {}, [mt, ht] = [(i = we.declarations) != null ? i : "", we.tokens], [Pt, et] = [(a = ue.declarations) != null ? a : "", ue.tokens || []], [Qt, b] = [(s = he.declarations) != null ? s : "", he.tokens || []], [y, v] = [(l = it.declarations) != null ? l : "", it.tokens || []], [I, x] = [(u = We.declarations) != null ? u : "", We.tokens || []], [D, V] = [(c = Lt.declarations) != null ? c : "", Lt.tokens || []], [U, p] = [(d = Qe.declarations) != null ? d : "", Qe.tokens || []];
    _ = this.transformCSS(e, mt, "light", "variable", h, r, o), E = ht;
    let m = this.transformCSS(e, `${Pt}${Qt}`, "light", "variable", h, r, o), T = this.transformCSS(e, `${y}`, "dark", "variable", h, r, o);
    w = `${m}${T}`, P = [.../* @__PURE__ */ new Set([...et, ...b, ...v])];
    let $ = this.transformCSS(e, `${I}${D}color-scheme:light`, "light", "variable", h, r, o), H = this.transformCSS(e, `${U}color-scheme:dark`, "dark", "variable", h, r, o);
    R = `${$}${H}`, S = [.../* @__PURE__ */ new Set([...x, ...V, ...p])], g = lt(f.css, { dt: Ln });
  }
  return { primitive: { css: _, tokens: E }, semantic: { css: w, tokens: P }, global: { css: R, tokens: S }, style: g };
}, getPreset({ name: e = "", preset: t = {}, options: n, params: r, set: o, defaults: i, selector: a }) {
  var s, l, u;
  let c, d, f;
  if (_e(t) && n.transform !== "strict") {
    let h = e.replace("-directive", ""), _ = t, { colorScheme: E, extend: w, css: P } = _, R = Ht(_, ["colorScheme", "extend", "css"]), S = w || {}, { colorScheme: g } = S, O = Ht(S, ["colorScheme"]), L = E || {}, { dark: A } = L, F = Ht(L, ["dark"]), k = g || {}, { dark: B } = k, Y = Ht(k, ["dark"]), M = _e(R) ? this._toVariables({ [h]: yt(yt({}, R), O) }, n) : {}, z = _e(F) ? this._toVariables({ [h]: yt(yt({}, F), Y) }, n) : {}, se = _e(A) ? this._toVariables({ [h]: yt(yt({}, A), B) }, n) : {}, [Te, ne] = [(s = M.declarations) != null ? s : "", M.tokens || []], [te, Q] = [(l = z.declarations) != null ? l : "", z.tokens || []], [Pe, we] = [(u = se.declarations) != null ? u : "", se.tokens || []], ue = this.transformCSS(h, `${Te}${te}`, "light", "variable", n, o, i, a), he = this.transformCSS(h, Pe, "dark", "variable", n, o, i, a);
    c = `${ue}${he}`, d = [.../* @__PURE__ */ new Set([...ne, ...Q, ...we])], f = lt(P, { dt: Ln });
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
  return o ? `@layer ${lt(o.order || o.name || "primeui", n)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
  let a = this.getCommon({ name: e, theme: t, params: n, set: o, defaults: i }), s = Object.entries(r).reduce((l, [u, c]) => l.push(`${u}="${c}"`) && l, []).join(" ");
  return Object.entries(a || {}).reduce((l, [u, c]) => {
    if (Mt(c) && Object.hasOwn(c, "css")) {
      let d = fr(c.css), f = `${u}-variables`;
      l.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${d}</style>`);
    }
    return l;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: n, props: r = {}, set: o, defaults: i }) {
  var a;
  let s = { name: e, theme: t, params: n, set: o, defaults: i }, l = (a = e.includes("-directive") ? this.getPresetD(s) : this.getPresetC(s)) == null ? void 0 : a.css, u = Object.entries(r).reduce((c, [d, f]) => c.push(`${d}="${f}"`) && c, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${fr(l)}</style>` : "";
}, createTokens(e = {}, t, n = "", r = "", o = {}) {
  let i = function(s, l = {}, u = []) {
    if (u.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: s, path: this.path, paths: l, value: void 0 };
    u.push(this.path), l.name = this.path, l.binding || (l.binding = {});
    let c = this.value;
    if (typeof this.value == "string" && Tr.test(this.value)) {
      let d = this.value.trim().replace(Tr, (f) => {
        var h;
        let _ = f.slice(1, -1), E = this.tokens[_];
        if (!E) return console.warn(`Token not found for path: ${_}`), "__UNRESOLVED__";
        let w = E.computed(s, l, u);
        return Array.isArray(w) && w.length === 2 ? `light-dark(${w[0].value},${w[1].value})` : (h = w == null ? void 0 : w.value) != null ? h : "__UNRESOLVED__";
      });
      c = Bu.test(d.replace(Ku, "0")) ? `calc(${d})` : d;
    }
    return $n(l.binding) && delete l.binding, u.pop(), { colorScheme: s, path: this.path, paths: l, value: c.includes("__UNRESOLVED__") ? void 0 : c };
  }, a = (s, l, u) => {
    Object.entries(s).forEach(([c, d]) => {
      let f = On(c, t.variable.excludedKeyRegex) ? l : l ? `${l}.${us(c)}` : us(c), h = u ? `${u}.${c}` : c;
      Mt(d) ? a(d, f, h) : (o[f] || (o[f] = { paths: [], computed: (_, E = {}, w = []) => {
        if (o[f].paths.length === 1) return o[f].paths[0].computed(o[f].paths[0].scheme, E.binding, w);
        if (_ && _ !== "none") for (let P = 0; P < o[f].paths.length; P++) {
          let R = o[f].paths[P];
          if (R.scheme === _) return R.computed(_, E.binding, w);
        }
        return o[f].paths.map((P) => P.computed(P.scheme, E[P.scheme], w));
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
      Mt(l) && (u.name = lt(l.name, { name: e, type: r })), _e(u.name) && (t = An(`@layer ${u.name}`, t), i == null || i.layerNames(u.name));
    }
    return t;
  }
  return "";
} }, fe = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: !1 } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = qo(yt({}, t), { options: yt(yt({}, this.defaults.options), t.options) }), this._tokens = gt.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
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
  this.update({ theme: e }), xe.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = qo(yt({}, this.theme), { preset: e }), this._tokens = gt.createTokens(e, this.defaults), this.clearLoadedStyleNames(), xe.emit("preset:change", e), xe.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = qo(yt({}, this.theme), { options: e }), this.clearLoadedStyleNames(), xe.emit("options:change", e), xe.emit("theme:change", this.theme);
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
  this._loadingStyles.size && (this._loadingStyles.delete(t), xe.emit(`theme:${t}:load`, e), !this._loadingStyles.size && xe.emit("theme:load"));
} }, Fe = {
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
}, Yp = `
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
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function cs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cs(Object(n), !0).forEach(function(r) {
      zp(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zp(e, t, n) {
  return (t = Gp(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gp(e) {
  var t = Xp(e, "string");
  return Cr(t) == "symbol" ? t : t + "";
}
function Xp(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  jt() && jt().components ? zn(e) : t ? e() : Wl(e);
}
var qp = 0;
function Zp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ze(!1), r = Ze(e), o = Ze(null), i = Uu() ? window.document : void 0, a = t.document, s = a === void 0 ? i : a, l = t.immediate, u = l === void 0 ? !0 : l, c = t.manual, d = c === void 0 ? !1 : c, f = t.name, h = f === void 0 ? "style_".concat(++qp) : f, _ = t.id, E = _ === void 0 ? void 0 : _, w = t.media, P = w === void 0 ? void 0 : w, R = t.nonce, S = R === void 0 ? void 0 : R, g = t.first, O = g === void 0 ? !1 : g, L = t.onMounted, A = L === void 0 ? void 0 : L, F = t.onUpdated, k = F === void 0 ? void 0 : F, B = t.onLoad, Y = B === void 0 ? void 0 : B, M = t.props, z = M === void 0 ? {} : M, se = function() {
  }, Te = function(Q) {
    var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s) {
      var we = ds(ds({}, z), Pe), ue = we.name || h, he = we.id || E, it = we.nonce || S;
      o.value = s.querySelector('style[data-primevue-style-id="'.concat(ue, '"]')) || s.getElementById(he) || s.createElement("style"), o.value.isConnected || (r.value = Q || e, mo(o.value, {
        type: "text/css",
        id: he,
        media: P,
        nonce: it
      }), O ? s.head.prepend(o.value) : s.head.appendChild(o.value), Vu(o.value, "data-primevue-style-id", ue), mo(o.value, we), o.value.onload = function(We) {
        return Y == null ? void 0 : Y(We, {
          name: ue
        });
      }, A == null || A(ue)), !n.value && (se = ft(r, function(We) {
        o.value.textContent = We, k == null || k(ue);
      }, {
        immediate: !0
      }), n.value = !0);
    }
  }, ne = function() {
    !s || !n.value || (se(), $p(o.value) && s.head.removeChild(o.value), n.value = !1, o.value = null);
  };
  return u && !d && Jp(Te), {
    id: E,
    name: h,
    el: o,
    css: r,
    unload: ne,
    load: Te,
    isLoaded: Yi(n)
  };
}
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
var fs, ps, ms, hs;
function gs(e, t) {
  return nm(e) || tm(e, t) || em(e, t) || Qp();
}
function Qp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function em(e, t) {
  if (e) {
    if (typeof e == "string") return bs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? bs(e, t) : void 0;
  }
}
function bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tm(e, t) {
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
function nm(e) {
  if (Array.isArray(e)) return e;
}
function vs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vs(Object(n), !0).forEach(function(r) {
      rm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rm(e, t, n) {
  return (t = om(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function om(e) {
  var t = im(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function im(e, t) {
  if (Or(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Or(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var am = function(t) {
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
}, sm = {}, lm = {}, ye = {
  name: "base",
  css: am,
  style: Yp,
  classes: sm,
  inlineStyles: lm,
  load: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, o = r(Xr(fs || (fs = Jr(["", ""])), t));
    return _e(o) ? Zp(fr(o), Zo({
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
      return fe.transformCSS(n.name || t.name, "".concat(o).concat(Xr(ps || (ps = Jr(["", ""])), r)));
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
      var r = lt(this.css, {
        dt: Ln
      }) || "", o = fr(Xr(ms || (ms = Jr(["", "", ""])), r, t)), i = Object.entries(n).reduce(function(a, s) {
        var l = gs(s, 2), u = l[0], c = l[1];
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
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = Xr(hs || (hs = Jr(["", ""])), lt(this.style, {
        dt: Ln
      })), a = fr(fe.transformCSS(o, i)), s = Object.entries(n).reduce(function(l, u) {
        var c = gs(u, 2), d = c[0], f = c[1];
        return l.push("".concat(d, '="').concat(f, '"')) && l;
      }, []).join(" ");
      _e(a) && r.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(s, ">").concat(a, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return Zo(Zo({}, this), {}, {
      css: void 0,
      style: void 0
    }, t);
  }
}, sn = Du();
function Lr(e) {
  "@babel/helpers - typeof";
  return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lr(e);
}
function ys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ys(Object(n), !0).forEach(function(r) {
      um(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ys(Object(n)).forEach(function(r) {
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
  return Lr(t) == "symbol" ? t : t + "";
}
function dm(e, t) {
  if (Lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fm = {
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
    text: [Fe.STARTS_WITH, Fe.CONTAINS, Fe.NOT_CONTAINS, Fe.ENDS_WITH, Fe.EQUALS, Fe.NOT_EQUALS],
    numeric: [Fe.EQUALS, Fe.NOT_EQUALS, Fe.LESS_THAN, Fe.LESS_THAN_OR_EQUAL_TO, Fe.GREATER_THAN, Fe.GREATER_THAN_OR_EQUAL_TO],
    date: [Fe.DATE_IS, Fe.DATE_IS_NOT, Fe.DATE_BEFORE, Fe.DATE_AFTER]
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
}, pm = Symbol();
function mm(e, t) {
  var n = {
    config: To(t)
  };
  return e.config.globalProperties.$primevue = n, e.provide(pm, n), hm(), gm(e, n), n;
}
var Mn = [];
function hm() {
  xe.clear(), Mn.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Mn = [];
}
function gm(e, t) {
  var n = Ze(!1), r = function() {
    var u;
    if (((u = t.config) === null || u === void 0 ? void 0 : u.theme) !== "none" && !fe.isStyleNameLoaded("common")) {
      var c, d, f = ((c = ye.getCommonTheme) === null || c === void 0 ? void 0 : c.call(ye)) || {}, h = f.primitive, _ = f.semantic, E = f.global, w = f.style, P = {
        nonce: (d = t.config) === null || d === void 0 || (d = d.csp) === null || d === void 0 ? void 0 : d.nonce
      };
      ye.load(h == null ? void 0 : h.css, qr({
        name: "primitive-variables"
      }, P)), ye.load(_ == null ? void 0 : _.css, qr({
        name: "semantic-variables"
      }, P)), ye.load(E == null ? void 0 : E.css, qr({
        name: "global-variables"
      }, P)), ye.loadStyle(qr({
        name: "global-style"
      }, P), w), fe.setLoadedStyleName("common");
    }
  };
  xe.on("theme:change", function(l) {
    n.value || (e.config.globalProperties.$primevue.config.theme = l, n.value = !0);
  });
  var o = ft(t.config, function(l, u) {
    sn.emit("config:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ft(function() {
    return t.config.ripple;
  }, function(l, u) {
    sn.emit("config:ripple:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = ft(function() {
    return t.config.theme;
  }, function(l, u) {
    n.value || fe.setTheme(l), t.config.unstyled || r(), n.value = !1, sn.emit("config:theme:change", {
      newValue: l,
      oldValue: u
    });
  }, {
    immediate: !0,
    deep: !1
  }), s = ft(function() {
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
var bm = {
  install: function(t, n) {
    var r = _p(fm, n);
    mm(t, r);
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
function vm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pc", t = Rd();
  return "".concat(e).concat(t.replace("v-", "").replaceAll("-", "_"));
}
var _s = ye.extend({
  name: "common"
});
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function ym(e) {
  return Zu(e) || _m(e) || qu(e) || Ju();
}
function _m(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zn(e, t) {
  return Zu(e) || Sm(e, t) || qu(e, t) || Ju();
}
function Ju() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qu(e, t) {
  if (e) {
    if (typeof e == "string") return yi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yi(e, t) : void 0;
  }
}
function yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Sm(e, t) {
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
function Zu(e) {
  if (Array.isArray(e)) return e;
}
function Ss(e, t) {
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
    t % 2 ? Ss(Object(n), !0).forEach(function(r) {
      nr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ss(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function nr(e, t, n) {
  return (t = Em(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Em(e) {
  var t = Tm(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Tm(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $o = {
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
        xe.off("theme:change", this._loadCoreStyles), t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t, n) {
        var r = this;
        xe.off("theme:change", this._themeScopedListener), t ? (this._loadScopedThemeStyles(t), this._themeScopedListener = function() {
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
    var E = (a = this.$primevueConfig) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a._usept, w = E ? (s = this.$primevue) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s.originalValue : void 0, P = E ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (u = this.$primevue) === null || u === void 0 || (u = u.config) === null || u === void 0 ? void 0 : u.pt;
    (c = P || w) === null || c === void 0 || (c = c[this.$.type.name]) === null || c === void 0 || (c = c.hooks) === null || c === void 0 || (d = c.onBeforeCreate) === null || d === void 0 || d.call(c), this.$attrSelector = vm(), this.uid = this.$attrs.id || this.$attrSelector.replace("pc", "pv_id_");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    var t;
    this.rootEl = Ip(kn(this.$el) ? this.$el : (t = this.$el) === null || t === void 0 ? void 0 : t.parentElement, "[".concat(this.$attrSelector, "]")), this.rootEl && (this.rootEl.$pc = oe({
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
      return aa(t) ? t.apply(void 0, r) : de.apply(void 0, r);
    },
    _load: function() {
      an.isStyleNameLoaded("base") || (ye.loadCSS(this.$styleOptions), this._loadGlobalStyles(), an.setLoadedStyleName("base")), this._loadThemeStyles();
    },
    _loadStyles: function() {
      this._load(), this._themeChangeListener(this._load);
    },
    _loadCoreStyles: function() {
      var t, n;
      !an.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (n = this.$style) !== null && n !== void 0 && n.name && (_s.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), an.setLoadedStyleName(this.$style.name));
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
          var c, d, f, h, _ = ((c = this.$style) === null || c === void 0 || (d = c.getComponentTheme) === null || d === void 0 ? void 0 : d.call(c)) || {}, E = _.css, w = _.style;
          (f = this.$style) === null || f === void 0 || f.load(E, oe({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (h = this.$style) === null || h === void 0 || h.loadStyle(oe({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), w), fe.setLoadedStyleName(this.$style.name);
        }
        if (!fe.isStyleNameLoaded("layer-order")) {
          var P, R, S = (P = this.$style) === null || P === void 0 || (R = P.getLayerOrderThemeCSS) === null || R === void 0 ? void 0 : R.call(P);
          ye.load(S, oe({
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
      an.clearLoadedStyleNames(), xe.on("theme:change", t);
    },
    _removeThemeListeners: function() {
      xe.off("theme:change", this._loadCoreStyles), xe.off("theme:change", this._load), xe.off("theme:change", this._themeScopedListener);
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
      return sa(t, n, r);
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
      return r !== "transition" && oe(oe({}, r === "root" && oe(oe(nr({}, "".concat(o, "name"), At(i ? (n = this.pt) === null || n === void 0 ? void 0 : n["data-pc-section"] : this.$.type.name)), i && nr({}, "".concat(o, "extend"), At(this.$.type.name))), {}, nr({}, "".concat(this.$attrSelector), ""))), {}, nr({}, "".concat(o, "section"), At(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return ot(t) || Au(t) ? {
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
      var i = function(E) {
        return n(E, r, o);
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
        var o = this._getOptionValue(this.$style.inlineStyles, t, oe(oe({}, this.$params), r)), i = this._getOptionValue(_s.inlineStyles, t, oe(oe({}, this.$params), r));
        return [i, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return lt(r, {
          instance: n
        });
      });
    },
    defaultPT: function() {
      var t, n = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return n._getOptionValue(r, n.$name, oe({}, n.$params)) || lt(r, oe({}, n.$params));
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
        var r = Zn(n, 2), o = r[0], i = r[1], a = o.split(":"), s = ym(a), l = yi(s).slice(1);
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
}, Cm = `
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
`, Om = ye.extend({
  name: "baseicon",
  css: Cm
});
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function Es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Es(Object(n), !0).forEach(function(r) {
      Lm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Es(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Lm(e, t, n) {
  return (t = Pm(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Pm(e) {
  var t = wm(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function wm(e, t) {
  if (wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ko = {
  name: "BaseIcon",
  extends: $o,
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
  style: Om,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = $n(this.label);
      return Ts(Ts({}, !this.isUnstyled && {
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
}, Qu = {
  name: "TimesIcon",
  extends: ko
};
function $m(e) {
  return Am(e) || Nm(e) || Im(e) || km();
}
function km() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Im(e, t) {
  if (e) {
    if (typeof e == "string") return _i(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _i(e, t) : void 0;
  }
}
function Nm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Am(e) {
  if (Array.isArray(e)) return _i(e);
}
function _i(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xm(e, t, n, r, o, i) {
  return be(), qe("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), $m(t[0] || (t[0] = [Ft("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
Qu.render = xm;
var ec = {
  name: "WindowMaximizeIcon",
  extends: ko
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
    if (typeof e == "string") return Si(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Si(e, t) : void 0;
  }
}
function Fm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jm(e) {
  if (Array.isArray(e)) return Si(e);
}
function Si(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Um(e, t, n, r, o, i) {
  return be(), qe("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Dm(t[0] || (t[0] = [Ft("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
ec.render = Um;
var tc = {
  name: "WindowMinimizeIcon",
  extends: ko
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
    if (typeof e == "string") return Ei(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ei(e, t) : void 0;
  }
}
function Bm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Km(e) {
  if (Array.isArray(e)) return Ei(e);
}
function Ei(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ym(e, t, n, r, o, i) {
  return be(), qe("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Vm(t[0] || (t[0] = [Ft("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
tc.render = Ym;
var nc = {
  name: "SpinnerIcon",
  extends: ko
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
    if (typeof e == "string") return Ti(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ti(e, t) : void 0;
  }
}
function Jm(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function qm(e) {
  if (Array.isArray(e)) return Ti(e);
}
function Ti(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Zm(e, t, n, r, o, i) {
  return be(), qe("svg", de({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), zm(t[0] || (t[0] = [Ft("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
nc.render = Zm;
var Qm = `
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
`, eh = {
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
}, th = ye.extend({
  name: "badge",
  style: Qm,
  classes: eh
}), nh = {
  name: "BaseBadge",
  extends: $o,
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
  style: th,
  provide: function() {
    return {
      $pcBadge: this,
      $parentInstance: this
    };
  }
};
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function Cs(e, t, n) {
  return (t = rh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rh(e) {
  var t = oh(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function oh(e, t) {
  if ($r(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if ($r(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rc = {
  name: "Badge",
  extends: nh,
  inheritAttrs: !1,
  computed: {
    dataP: function() {
      return Wn(Cs(Cs({
        circle: this.value != null && String(this.value).length === 1,
        empty: this.value == null && !this.$slots.default
      }, this.severity, this.severity), this.size, this.size));
    }
  }
}, ih = ["data-p"];
function ah(e, t, n, r, o, i) {
  return be(), qe("span", de({
    class: e.cx("root"),
    "data-p": i.dataP
  }, e.ptmi("root")), [Ge(e.$slots, "default", {}, function() {
    return [ra(mr(e.value), 1)];
  })], 16, ih);
}
rc.render = ah;
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function Os(e, t) {
  return ch(e) || uh(e, t) || lh(e, t) || sh();
}
function sh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lh(e, t) {
  if (e) {
    if (typeof e == "string") return Ls(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ls(e, t) : void 0;
  }
}
function Ls(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uh(e, t) {
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
function ch(e) {
  if (Array.isArray(e)) return e;
}
function Ps(e, t) {
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
    t % 2 ? Ps(Object(n), !0).forEach(function(r) {
      Ci(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ps(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ci(e, t, n) {
  return (t = dh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function dh(e) {
  var t = fh(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function fh(e, t) {
  if (kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Z = {
  _getMeta: function() {
    return [Mt(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], lt(Mt(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, n) {
    var r, o, i;
    return (r = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (n == null || (i = n.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: sa,
  _getPTValue: function() {
    var t, n, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var R = Z._getOptionValue.apply(Z, arguments);
      return ot(R) || Au(R) ? {
        class: R
      } : R;
    }, u = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((n = r.$primevueConfig) === null || n === void 0 ? void 0 : n.ptOptions) || {}, c = u.mergeSections, d = c === void 0 ? !0 : c, f = u.mergeProps, h = f === void 0 ? !1 : f, _ = s ? Z._useDefaultPT(r, r.defaultPT(), l, i, a) : void 0, E = Z._usePT(r, Z._getPT(o, r.$name), l, i, ie(ie({}, a), {}, {
      global: _ || {}
    })), w = Z._getPTDatasets(r, i);
    return d || !d && E ? h ? Z._mergeProps(r, h, _, E, w) : ie(ie(ie({}, _), E), w) : ie(ie({}, E), w);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return ie(ie({}, n === "root" && Ci({}, "".concat(r, "name"), At(t.$name))), {}, Ci({}, "".concat(r, "section"), At(n)));
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
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, a = function(w) {
      return r(w, o, i);
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
        var h, _, E, w, P = ((h = o.$style) === null || h === void 0 || (_ = h.getDirectiveTheme) === null || _ === void 0 ? void 0 : _.call(h)) || {}, R = P.css, S = P.style;
        (E = o.$style) === null || E === void 0 || E.load(R, ie({
          name: "".concat(o.$style.name, "-variables")
        }, i)), (w = o.$style) === null || w === void 0 || w.loadStyle(ie({
          name: "".concat(o.$style.name, "-style")
        }, i), S), fe.setLoadedStyleName(o.$style.name);
      }
      if (!fe.isStyleNameLoaded("layer-order")) {
        var g, O, L = (g = o.$style) === null || g === void 0 || (O = g.getLayerOrderThemeCSS) === null || O === void 0 ? void 0 : O.call(g);
        ye.load(L, ie({
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
    an.clearLoadedStyleNames(), xe.on("theme:change", t);
  },
  _removeThemeListeners: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xe.off("theme:change", t.$loadStyles), t.$loadStyles = void 0;
  },
  _hook: function(t, n, r, o, i, a) {
    var s, l, u = "on".concat(Sp(n)), c = Z._getConfig(o, i), d = r == null ? void 0 : r.$instance, f = Z._usePT(d, Z._getPT(o == null || (s = o.value) === null || s === void 0 ? void 0 : s.pt, t), Z._getOptionValue, "hooks.".concat(u)), h = Z._useDefaultPT(d, c == null || (l = c.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], Z._getOptionValue, "hooks.".concat(u)), _ = {
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
    return aa(t) ? t.apply(void 0, r) : de.apply(void 0, r);
  },
  _extend: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(s, l, u, c, d) {
      var f, h, _, E;
      l._$instances = l._$instances || {};
      var w = Z._getConfig(u, c), P = l._$instances[t] || {}, R = $n(P) ? ie(ie({}, n), n == null ? void 0 : n.methods) : {};
      l._$instances[t] = ie(ie({}, P), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: l,
        $binding: u,
        $modifiers: u == null ? void 0 : u.modifiers,
        $value: u == null ? void 0 : u.value,
        $el: P.$el || l || void 0,
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
        $primevueConfig: w,
        $attrSelector: (f = l.$pd) === null || f === void 0 || (f = f[t]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return Z._getPT(w == null ? void 0 : w.pt, void 0, function(g) {
            var O;
            return g == null || (O = g.directives) === null || O === void 0 ? void 0 : O[t];
          });
        },
        isUnstyled: function() {
          var g, O;
          return ((g = l._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.unstyled) !== void 0 ? (O = l._$instances[t]) === null || O === void 0 || (O = O.$binding) === null || O === void 0 || (O = O.value) === null || O === void 0 ? void 0 : O.unstyled : w == null ? void 0 : w.unstyled;
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
          var g, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return Z._getPTValue(l._$instances[t], (g = l._$instances[t]) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.pt, O, ie({}, L));
        },
        ptmo: function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Z._getPTValue(l._$instances[t], g, O, L, !1);
        },
        cx: function() {
          var g, O, L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (g = l._$instances[t]) !== null && g !== void 0 && g.isUnstyled() ? void 0 : Z._getOptionValue((O = l._$instances[t]) === null || O === void 0 || (O = O.$style) === null || O === void 0 ? void 0 : O.classes, L, ie({}, A));
        },
        sx: function() {
          var g, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return L ? Z._getOptionValue((g = l._$instances[t]) === null || g === void 0 || (g = g.$style) === null || g === void 0 ? void 0 : g.inlineStyles, O, ie({}, A)) : void 0;
        }
      }, R), l.$instance = l._$instances[t], (h = (_ = l.$instance)[s]) === null || h === void 0 || h.call(_, l, u, c, d), l["$".concat(t)] = l.$instance, Z._hook(t, s, l, u, c, d), l.$pd || (l.$pd = {}), l.$pd[t] = ie(ie({}, (E = l.$pd) === null || E === void 0 ? void 0 : E[t]), {}, {
        name: t,
        instance: l._$instances[t]
      });
    }, o = function(s) {
      var l, u, c, d = s._$instances[t], f = d == null ? void 0 : d.watch, h = function(w) {
        var P, R = w.newValue, S = w.oldValue;
        return f == null || (P = f.config) === null || P === void 0 ? void 0 : P.call(d, R, S);
      }, _ = function(w) {
        var P, R = w.newValue, S = w.oldValue;
        return f == null || (P = f["config.ripple"]) === null || P === void 0 ? void 0 : P.call(d, R, S);
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
          attrSelector: Dp("pd")
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
    var t = Z._getMeta.apply(Z, arguments), n = Os(t, 2), r = n[0], o = n[1];
    return ie({
      extend: function() {
        var a = Z._getMeta.apply(Z, arguments), s = Os(a, 2), l = s[0], u = s[1];
        return Z.extend(l, ie(ie(ie({}, o), o == null ? void 0 : o.methods), u));
      }
    }, Z._extend(r, o));
  }
}, ph = `
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
`, mh = {
  root: "p-ink"
}, hh = ye.extend({
  name: "ripple-directive",
  style: ph,
  classes: mh
}), gh = Z.extend({
  style: hh
});
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function bh(e) {
  return Sh(e) || _h(e) || yh(e) || vh();
}
function vh() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yh(e, t) {
  if (e) {
    if (typeof e == "string") return Oi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oi(e, t) : void 0;
  }
}
function _h(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sh(e) {
  if (Array.isArray(e)) return Oi(e);
}
function Oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ws(e, t, n) {
  return (t = Eh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Eh(e) {
  var t = Th(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function Th(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ir(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oc = gh.extend("ripple", {
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
      n || (n = Ru("span", ws(ws({
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
        if (!this.isUnstyled() && pr(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !is(o) && !as(o)) {
          var i = Math.max(Mu(r), ju(r));
          o.style.height = i + "px", o.style.width = i + "px";
        }
        var a = xp(r), s = t.pageX - a.left + document.body.scrollTop - as(o) / 2, l = t.pageY - a.top + document.body.scrollLeft - is(o) / 2;
        o.style.top = l + "px", o.style.left = s + "px", !this.isUnstyled() && po(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!n.isUnstyled() && pr(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && pr(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? bh(t.children).find(function(n) {
        return Np(n, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Ch = `
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
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function kt(e, t, n) {
  return (t = Oh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Oh(e) {
  var t = Lh(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function Lh(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ph = {
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
}, wh = ye.extend({
  name: "button",
  style: Ch,
  classes: Ph
}), $h = {
  name: "BaseButton",
  extends: $o,
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
  style: wh,
  provide: function() {
    return {
      $pcButton: this,
      $parentInstance: this
    };
  }
};
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function tt(e, t, n) {
  return (t = kh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function kh(e) {
  var t = Ih(e, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function Ih(e, t) {
  if (Ar(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Ar(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ic = {
  name: "Button",
  extends: $h,
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
    SpinnerIcon: nc,
    Badge: rc
  },
  directives: {
    ripple: oc
  }
}, Nh = ["data-p"], Ah = ["data-p"];
function xh(e, t, n, r, o, i) {
  var a = uo("SpinnerIcon"), s = uo("Badge"), l = lu("ripple");
  return e.asChild ? Ge(e.$slots, "default", {
    key: 1,
    class: Bn(e.cx("root")),
    a11yAttrs: i.a11yAttrs
  }) : Gl((be(), Ct(ci(e.as), de({
    key: 0,
    class: e.cx("root"),
    "data-p": i.dataP
  }, i.attrs), {
    default: Tn(function() {
      return [Ge(e.$slots, "default", {}, function() {
        return [e.loading ? Ge(e.$slots, "loadingicon", de({
          key: 0,
          class: [e.cx("loadingIcon"), e.cx("icon")]
        }, e.ptm("loadingIcon")), function() {
          return [e.loadingIcon ? (be(), qe("span", de({
            key: 0,
            class: [e.cx("loadingIcon"), e.cx("icon"), e.loadingIcon]
          }, e.ptm("loadingIcon")), null, 16)) : (be(), Ct(a, de({
            key: 1,
            class: [e.cx("loadingIcon"), e.cx("icon")],
            spin: ""
          }, e.ptm("loadingIcon")), null, 16, ["class"]))];
        }) : Ge(e.$slots, "icon", de({
          key: 1,
          class: [e.cx("icon")]
        }, e.ptm("icon")), function() {
          return [e.icon ? (be(), qe("span", de({
            key: 0,
            class: [e.cx("icon"), e.icon, e.iconClass],
            "data-p": i.dataIconP
          }, e.ptm("icon")), null, 16, Nh)) : vt("", !0)];
        }), e.label ? (be(), qe("span", de({
          key: 2,
          class: e.cx("label")
        }, e.ptm("label"), {
          "data-p": i.dataLabelP
        }), mr(e.label), 17, Ah)) : vt("", !0), e.badge ? (be(), Ct(s, {
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
ic.render = xh;
var Dh = ye.extend({
  name: "focustrap-directive"
}), Mh = Z.extend({
  style: Dh
});
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function $s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ks(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $s(Object(n), !0).forEach(function(r) {
      Rh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $s(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Rh(e, t, n) {
  return (t = Fh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Fh(e) {
  var t = jh(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function jh(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Uh = Mh.extend("focustrap", {
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
              var f = ss(d) ? ss(d, r.getComputedSelector(t.$_pfocustrap_focusableselector)) ? d : qn(t, r.getComputedSelector(t.$_pfocustrap_focusableselector)) : qn(d);
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
        value: ks(ks({}, t), {}, {
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
      var n, r = t.currentTarget, o = t.relatedTarget, i = o === r.$_pfocustrap_firsthiddenfocusableelement || !((n = this.$el) !== null && n !== void 0 && n.contains(o)) ? Ap(r.parentElement, this.getComputedSelector(r.$_pfocustrap_focusableselector)) : r.$_pfocustrap_firsthiddenfocusableelement;
      Dn(i);
    },
    createHiddenFocusableElements: function(t, n) {
      var r = this, o = n.value || {}, i = o.tabIndex, a = i === void 0 ? 0 : i, s = o.firstFocusableSelector, l = s === void 0 ? "" : s, u = o.lastFocusableSelector, c = u === void 0 ? "" : u, d = function(E) {
        return Ru("span", {
          class: "p-hidden-accessible p-hidden-focusable",
          tabIndex: a,
          role: "presentation",
          "aria-hidden": !0,
          "data-p-hidden-accessible": !0,
          "data-p-hidden-focusable": !0,
          onFocus: E == null ? void 0 : E.bind(r)
        });
      }, f = d(this.onFirstHiddenElementFocus), h = d(this.onLastHiddenElementFocus);
      f.$_pfocustrap_lasthiddenfocusableelement = h, f.$_pfocustrap_focusableselector = l, f.setAttribute("data-pc-section", "firstfocusableelement"), h.$_pfocustrap_firsthiddenfocusableelement = f, h.$_pfocustrap_focusableselector = c, h.setAttribute("data-pc-section", "lastfocusableelement"), t.prepend(f), t.append(h);
    }
  }
}), ac = {
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
    this.mounted = Uu();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function Vh(e, t, n, r, o, i) {
  return i.inline ? Ge(e.$slots, "default", {
    key: 0
  }) : o.mounted ? (be(), Ct(Ad, {
    key: 1,
    to: n.appendTo
  }, [Ge(e.$slots, "default")], 8, ["to"])) : vt("", !0);
}
ac.render = Vh;
function Is() {
  Cp({
    variableName: Xu("scrollbar.width").name
  });
}
function Ns() {
  Op({
    variableName: Xu("scrollbar.width").name
  });
}
var Hh = `
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
`, Wh = {
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
}, Bh = {
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
}, Kh = ye.extend({
  name: "dialog",
  style: Hh,
  classes: Bh,
  inlineStyles: Wh
}), Yh = {
  name: "BaseDialog",
  extends: $o,
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
  style: Kh,
  provide: function() {
    return {
      $pcDialog: this,
      $parentInstance: this
    };
  }
}, sc = {
  name: "Dialog",
  extends: Yh,
  inheritAttrs: !1,
  emits: ["update:visible", "show", "hide", "after-hide", "maximize", "unmaximize", "dragstart", "dragend"],
  provide: function() {
    var t = this;
    return {
      dialogRef: dt(function() {
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
    this.unbindDocumentState(), this.unbindGlobalListeners(), this.destroyStyle(), this.mask && this.autoZIndex && Jo.clear(this.mask), this.container = null, this.mask = null;
  },
  mounted: function() {
    this.breakpoints && this.createStyle();
  },
  methods: {
    close: function() {
      this.$emit("update:visible", !1);
    },
    onEnter: function() {
      this.$emit("show"), this.target = document.activeElement, this.enableDocumentSettings(), this.bindGlobalListeners(), this.autoZIndex && Jo.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
    },
    onAfterEnter: function() {
      this.focus();
    },
    onBeforeLeave: function() {
      this.modal && !this.isUnstyled && po(this.mask, "p-overlay-mask-leave"), this.dragging && this.documentDragEndListener && this.documentDragEndListener();
    },
    onLeave: function() {
      this.$emit("hide"), Dn(this.target), this.target = null, this.focusableClose = null, this.focusableMax = null;
    },
    onAfterLeave: function() {
      this.autoZIndex && Jo.clear(this.mask), this.containerVisible = !1, this.unbindDocumentState(), this.unbindGlobalListeners(), this.$emit("after-hide");
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
      this.maximized ? (this.maximized = !1, this.$emit("unmaximize", t)) : (this.maximized = !0, this.$emit("maximize", t)), this.modal || (this.maximized ? Is() : Ns());
    },
    enableDocumentSettings: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Is();
    },
    unbindDocumentState: function() {
      (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) && Ns();
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
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", Vu(this.styleElement, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.head.appendChild(this.styleElement);
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
      t.target.closest("div").getAttribute("data-pc-section") !== "headeractions" && this.draggable && (this.dragging = !0, this.lastPageX = t.pageX, this.lastPageY = t.pageY, this.container.style.margin = "0", document.body.setAttribute("data-p-unselectable-text", "true"), !this.isUnstyled && Pp(document.body, {
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
          var r = Mu(t.container), o = ju(t.container), i = n.pageX - t.lastPageX, a = n.pageY - t.lastPageY, s = t.container.getBoundingClientRect(), l = s.left + i, u = s.top + a, c = Lp(), d = getComputedStyle(t.container), f = parseFloat(d.marginLeft), h = parseFloat(d.marginTop);
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
    ripple: oc,
    focustrap: Uh
  },
  components: {
    Button: ic,
    Portal: ac,
    WindowMinimizeIcon: tc,
    WindowMaximizeIcon: ec,
    TimesIcon: Qu
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
function As(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(n), !0).forEach(function(r) {
      zh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : As(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zh(e, t, n) {
  return (t = Gh(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gh(e) {
  var t = Xh(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function Xh(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jh = ["data-p"], qh = ["aria-labelledby", "aria-modal", "data-p"], Zh = ["id"], Qh = ["data-p"];
function eg(e, t, n, r, o, i) {
  var a = uo("Button"), s = uo("Portal"), l = lu("focustrap");
  return be(), Ct(s, {
    appendTo: e.appendTo
  }, {
    default: Tn(function() {
      return [o.containerVisible ? (be(), qe("div", de({
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
      }, e.ptm("mask")), [$e(Hf, de({
        name: "p-dialog",
        onEnter: i.onEnter,
        onAfterEnter: i.onAfterEnter,
        onBeforeLeave: i.onBeforeLeave,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave,
        appear: ""
      }, e.ptm("transition")), {
        default: Tn(function() {
          return [e.visible ? Gl((be(), qe("div", de({
            key: 0,
            ref: i.containerRef,
            class: e.cx("root"),
            style: e.sx("root"),
            role: "dialog",
            "aria-labelledby": i.ariaLabelledById,
            "aria-modal": e.modal,
            "data-p": i.dataP
          }, e.ptmi("root")), [e.$slots.container ? Ge(e.$slots, "container", {
            key: 0,
            closeCallback: i.close,
            maximizeCallback: function(c) {
              return i.maximize(c);
            },
            initDragCallback: i.initDrag
          }) : (be(), qe(Ue, {
            key: 1
          }, [e.showHeader ? (be(), qe("div", de({
            key: 0,
            ref: i.headerContainerRef,
            class: e.cx("header"),
            onMousedown: t[0] || (t[0] = function() {
              return i.initDrag && i.initDrag.apply(i, arguments);
            })
          }, e.ptm("header")), [Ge(e.$slots, "header", {
            class: Bn(e.cx("title"))
          }, function() {
            return [e.header ? (be(), qe("span", de({
              key: 0,
              id: i.ariaLabelledById,
              class: e.cx("title")
            }, e.ptm("title")), mr(e.header), 17, Zh)) : vt("", !0)];
          }), Ft("div", de({
            class: e.cx("headerActions")
          }, e.ptm("headerActions")), [e.maximizable ? Ge(e.$slots, "maximizebutton", {
            key: 0,
            maximized: o.maximized,
            maximizeCallback: function(c) {
              return i.maximize(c);
            }
          }, function() {
            return [$e(a, de({
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
                return [Ge(e.$slots, "maximizeicon", {
                  maximized: o.maximized
                }, function() {
                  return [(be(), Ct(ci(i.maximizeIconComponent), de({
                    class: [u.class, o.maximized ? e.minimizeIcon : e.maximizeIcon]
                  }, e.ptm("pcMaximizeButton").icon), null, 16, ["class"]))];
                })];
              }),
              _: 3
            }, 16, ["autofocus", "class", "onClick", "tabindex", "unstyled", "pt"])];
          }) : vt("", !0), e.closable ? Ge(e.$slots, "closebutton", {
            key: 1,
            closeCallback: i.close
          }, function() {
            return [$e(a, de({
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
                return [Ge(e.$slots, "closeicon", {}, function() {
                  return [(be(), Ct(ci(e.closeIcon ? "span" : "TimesIcon"), de({
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
          }, xs(xs({}, e.contentProps), e.ptm("content"))), [Ge(e.$slots, "default")], 16, Qh), e.footer || e.$slots.footer ? (be(), qe("div", de({
            key: 1,
            ref: i.footerContainerRef,
            class: e.cx("footer")
          }, e.ptm("footer")), [Ge(e.$slots, "footer", {}, function() {
            return [ra(mr(e.footer), 1)];
          })], 16)) : vt("", !0)], 64))], 16, qh)), [[l, {
            disabled: !e.modal
          }]]) : vt("", !0)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, Jh)) : vt("", !0)];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
sc.render = eg;
/*!
  * shared v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function tg(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const go = typeof window < "u", dn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ng = (e, t, n) => rg({ l: e, k: t, s: n }), rg = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Le = (e) => typeof e == "number" && isFinite(e), og = (e) => uc(e) === "[object Date]", cn = (e) => uc(e) === "[object RegExp]", Io = (e) => J(e) && Object.keys(e).length === 0, Re = Object.assign, ig = Object.create, pe = (e = null) => ig(e);
let Ds;
const Gt = () => Ds || (Ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : pe());
function Ms(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Rs(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ag(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, i) => `${o}="${Rs(i)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, i) => `${o}='${Rs(i)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const sg = Object.prototype.hasOwnProperty;
function _t(e, t) {
  return sg.call(e, t);
}
const Se = Array.isArray, ve = (e) => typeof e == "function", W = (e) => typeof e == "string", ee = (e) => typeof e == "boolean", ae = (e) => e !== null && typeof e == "object", lg = (e) => ae(e) && ve(e.then) && ve(e.catch), lc = Object.prototype.toString, uc = (e) => lc.call(e), J = (e) => {
  if (!ae(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, ug = (e) => e == null ? "" : Se(e) || J(e) && e.toString === lc ? JSON.stringify(e, null, 2) : String(e);
function cg(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
function No(e) {
  let t = e;
  return () => ++t;
}
const Zr = (e) => !ae(e) || Se(e);
function io(e, t) {
  if (Zr(e) || Zr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((i) => {
      i !== "__proto__" && (ae(r[i]) && !ae(o[i]) && (o[i] = Array.isArray(r[i]) ? [] : pe()), Zr(o[i]) || Zr(r[i]) ? o[i] = r[i] : n.push({ src: r[i], des: o[i] }));
    });
  }
}
/*!
  * message-compiler v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function dg(e, t, n) {
  return { line: e, column: t, offset: n };
}
function bo(e, t, n) {
  return { start: e, end: t };
}
const fg = /\{([0-9a-zA-Z]+)\}/g;
function cc(e, ...t) {
  return t.length === 1 && pg(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(fg, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const dc = Object.assign, Fs = (e) => typeof e == "string", pg = (e) => e !== null && typeof e == "object";
function fc(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const la = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, mg = {
  [la.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function hg(e, t, ...n) {
  const r = cc(mg[e], ...n || []), o = { message: String(r), code: e };
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
}, gg = {
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
  const { domain: r, messages: o, args: i } = n, a = cc((o || gg)[e] || "", ...i || []), s = new SyntaxError(String(a));
  return s.code = e, t && (s.location = t), s.domain = r, s;
}
function bg(e) {
  throw e;
}
const Wt = " ", vg = "\r", Ye = `
`, yg = "\u2028", _g = "\u2029";
function Sg(e) {
  const t = e;
  let n = 0, r = 1, o = 1, i = 0;
  const a = (A) => t[A] === vg && t[A + 1] === Ye, s = (A) => t[A] === Ye, l = (A) => t[A] === _g, u = (A) => t[A] === yg, c = (A) => a(A) || s(A) || l(A) || u(A), d = () => n, f = () => r, h = () => o, _ = () => i, E = (A) => a(A) || l(A) || u(A) ? Ye : t[A], w = () => E(n), P = () => E(n + i);
  function R() {
    return i = 0, c(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n];
  }
  function S() {
    return a(n + i) && i++, i++, t[n + i];
  }
  function g() {
    n = 0, r = 1, o = 1, i = 0;
  }
  function O(A = 0) {
    i = A;
  }
  function L() {
    const A = n + i;
    for (; A !== n; )
      R();
    i = 0;
  }
  return {
    index: d,
    line: f,
    column: h,
    peekOffset: _,
    charAt: E,
    currentChar: w,
    currentPeek: P,
    next: R,
    peek: S,
    reset: g,
    resetPeek: O,
    skipToPeek: L
  };
}
const tn = void 0, Eg = ".", js = "'", Tg = "tokenizer";
function Cg(e, t = {}) {
  const n = t.location !== !1, r = Sg(e), o = () => r.index(), i = () => dg(r.line(), r.column(), r.index()), a = i(), s = o(), l = {
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
  function d(p, m, T, ...$) {
    const H = u();
    if (m.column += T, m.offset += T, c) {
      const j = n ? bo(H.startLoc, m) : null, C = Gn(p, j, {
        domain: Tg,
        args: $
      });
      c(C);
    }
  }
  function f(p, m, T) {
    p.endLoc = i(), p.currentType = m;
    const $ = { type: m };
    return n && ($.loc = bo(p.startLoc, p.endLoc)), T != null && ($.value = T), $;
  }
  const h = (p) => f(
    p,
    14
    /* TokenTypes.EOF */
  );
  function _(p, m) {
    return p.currentChar() === m ? (p.next(), m) : (d(G.EXPECTED_TOKEN, i(), 0, m), "");
  }
  function E(p) {
    let m = "";
    for (; p.currentPeek() === Wt || p.currentPeek() === Ye; )
      m += p.currentPeek(), p.peek();
    return m;
  }
  function w(p) {
    const m = E(p);
    return p.skipToPeek(), m;
  }
  function P(p) {
    if (p === tn)
      return !1;
    const m = p.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function R(p) {
    if (p === tn)
      return !1;
    const m = p.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function S(p, m) {
    const { currentType: T } = m;
    if (T !== 2)
      return !1;
    E(p);
    const $ = P(p.currentPeek());
    return p.resetPeek(), $;
  }
  function g(p, m) {
    const { currentType: T } = m;
    if (T !== 2)
      return !1;
    E(p);
    const $ = p.currentPeek() === "-" ? p.peek() : p.currentPeek(), H = R($);
    return p.resetPeek(), H;
  }
  function O(p, m) {
    const { currentType: T } = m;
    if (T !== 2)
      return !1;
    E(p);
    const $ = p.currentPeek() === js;
    return p.resetPeek(), $;
  }
  function L(p, m) {
    const { currentType: T } = m;
    if (T !== 8)
      return !1;
    E(p);
    const $ = p.currentPeek() === ".";
    return p.resetPeek(), $;
  }
  function A(p, m) {
    const { currentType: T } = m;
    if (T !== 9)
      return !1;
    E(p);
    const $ = P(p.currentPeek());
    return p.resetPeek(), $;
  }
  function F(p, m) {
    const { currentType: T } = m;
    if (!(T === 8 || T === 12))
      return !1;
    E(p);
    const $ = p.currentPeek() === ":";
    return p.resetPeek(), $;
  }
  function k(p, m) {
    const { currentType: T } = m;
    if (T !== 10)
      return !1;
    const $ = () => {
      const j = p.currentPeek();
      return j === "{" ? P(p.peek()) : j === "@" || j === "%" || j === "|" || j === ":" || j === "." || j === Wt || !j ? !1 : j === Ye ? (p.peek(), $()) : M(p, !1);
    }, H = $();
    return p.resetPeek(), H;
  }
  function B(p) {
    E(p);
    const m = p.currentPeek() === "|";
    return p.resetPeek(), m;
  }
  function Y(p) {
    const m = E(p), T = p.currentPeek() === "%" && p.peek() === "{";
    return p.resetPeek(), {
      isModulo: T,
      hasSpace: m.length > 0
    };
  }
  function M(p, m = !0) {
    const T = (H = !1, j = "", C = !1) => {
      const N = p.currentPeek();
      return N === "{" ? j === "%" ? !1 : H : N === "@" || !N ? j === "%" ? !0 : H : N === "%" ? (p.peek(), T(H, "%", !0)) : N === "|" ? j === "%" || C ? !0 : !(j === Wt || j === Ye) : N === Wt ? (p.peek(), T(!0, Wt, C)) : N === Ye ? (p.peek(), T(!0, Ye, C)) : !0;
    }, $ = T();
    return m && p.resetPeek(), $;
  }
  function z(p, m) {
    const T = p.currentChar();
    return T === tn ? tn : m(T) ? (p.next(), T) : null;
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
  function we(p) {
    const m = p.charCodeAt(0);
    return m >= 48 && m <= 57 || // 0-9
    m >= 65 && m <= 70 || // A-F
    m >= 97 && m <= 102;
  }
  function ue(p) {
    return z(p, we);
  }
  function he(p) {
    let m = "", T = "";
    for (; m = Pe(p); )
      T += m;
    return T;
  }
  function it(p) {
    w(p);
    const m = p.currentChar();
    return m !== "%" && d(G.EXPECTED_TOKEN, i(), 0, m), p.next(), "%";
  }
  function We(p) {
    let m = "";
    for (; ; ) {
      const T = p.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === "%")
        if (M(p))
          m += T, p.next();
        else
          break;
      else if (T === Wt || T === Ye)
        if (M(p))
          m += T, p.next();
        else {
          if (B(p))
            break;
          m += T, p.next();
        }
      else
        m += T, p.next();
    }
    return m;
  }
  function Lt(p) {
    w(p);
    let m = "", T = "";
    for (; m = te(p); )
      T += m;
    return p.currentChar() === tn && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), T;
  }
  function Qe(p) {
    w(p);
    let m = "";
    return p.currentChar() === "-" ? (p.next(), m += `-${he(p)}`) : m += he(p), p.currentChar() === tn && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), m;
  }
  function mt(p) {
    return p !== js && p !== Ye;
  }
  function ht(p) {
    w(p), _(p, "'");
    let m = "", T = "";
    for (; m = z(p, mt); )
      m === "\\" ? T += Pt(p) : T += m;
    const $ = p.currentChar();
    return $ === Ye || $ === tn ? (d(G.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), $ === Ye && (p.next(), _(p, "'")), T) : (_(p, "'"), T);
  }
  function Pt(p) {
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
  function et(p, m, T) {
    _(p, m);
    let $ = "";
    for (let H = 0; H < T; H++) {
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
    return p !== "{" && p !== "}" && p !== Wt && p !== Ye;
  }
  function b(p) {
    w(p);
    let m = "", T = "";
    for (; m = z(p, Qt); )
      T += m;
    return T;
  }
  function y(p) {
    let m = "", T = "";
    for (; m = Te(p); )
      T += m;
    return T;
  }
  function v(p) {
    const m = (T) => {
      const $ = p.currentChar();
      return $ === "{" || $ === "%" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === Wt ? T : (T += $, p.next(), m(T));
    };
    return m("");
  }
  function I(p) {
    w(p);
    const m = _(
      p,
      "|"
      /* TokenChars.Pipe */
    );
    return w(p), m;
  }
  function x(p, m) {
    let T = null;
    switch (p.currentChar()) {
      case "{":
        return m.braceNest >= 1 && d(G.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), p.next(), T = f(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(p), m.braceNest++, T;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && d(G.EMPTY_PLACEHOLDER, i(), 0), p.next(), T = f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && w(p), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), T;
      case "@":
        return m.braceNest > 0 && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), T = D(p, m) || h(m), m.braceNest = 0, T;
      default: {
        let H = !0, j = !0, C = !0;
        if (B(p))
          return m.braceNest > 0 && d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), T = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, T;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return d(G.UNTERMINATED_CLOSING_BRACE, i(), 0), m.braceNest = 0, V(p, m);
        if (H = S(p, m))
          return T = f(m, 5, Lt(p)), w(p), T;
        if (j = g(p, m))
          return T = f(m, 6, Qe(p)), w(p), T;
        if (C = O(p, m))
          return T = f(m, 7, ht(p)), w(p), T;
        if (!H && !j && !C)
          return T = f(m, 13, b(p)), d(G.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, T.value), w(p), T;
        break;
      }
    }
    return T;
  }
  function D(p, m) {
    const { currentType: T } = m;
    let $ = null;
    const H = p.currentChar();
    switch ((T === 8 || T === 9 || T === 12 || T === 10) && (H === Ye || H === Wt) && d(G.INVALID_LINKED_FORMAT, i(), 0), H) {
      case "@":
        return p.next(), $ = f(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, $;
      case ".":
        return w(p), p.next(), f(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(p), p.next(), f(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return B(p) ? ($ = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, $) : L(p, m) || F(p, m) ? (w(p), D(p, m)) : A(p, m) ? (w(p), f(m, 12, y(p))) : k(p, m) ? (w(p), H === "{" ? x(p, m) || $ : f(m, 11, v(p))) : (T === 8 && d(G.INVALID_LINKED_FORMAT, i(), 0), m.braceNest = 0, m.inLinked = !1, V(p, m));
    }
  }
  function V(p, m) {
    let T = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return x(p, m) || h(m);
    if (m.inLinked)
      return D(p, m) || h(m);
    switch (p.currentChar()) {
      case "{":
        return x(p, m) || h(m);
      case "}":
        return d(G.UNBALANCED_CLOSING_BRACE, i(), 0), p.next(), f(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return D(p, m) || h(m);
      default: {
        if (B(p))
          return T = f(m, 1, I(p)), m.braceNest = 0, m.inLinked = !1, T;
        const { isModulo: H, hasSpace: j } = Y(p);
        if (H)
          return j ? f(m, 0, We(p)) : f(m, 4, it(p));
        if (M(p))
          return f(m, 0, We(p));
        break;
      }
    }
    return T;
  }
  function U() {
    const { currentType: p, offset: m, startLoc: T, endLoc: $ } = l;
    return l.lastType = p, l.lastOffset = m, l.lastStartLoc = T, l.lastEndLoc = $, l.offset = o(), l.startLoc = i(), r.currentChar() === tn ? f(
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
const Og = "parser", Lg = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Pg(e, t, n) {
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
function wg(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(S, g, O, L, ...A) {
    const F = S.currentPosition();
    if (F.offset += L, F.column += L, n) {
      const k = t ? bo(O, F) : null, B = Gn(g, k, {
        domain: Og,
        args: A
      });
      n(B);
    }
  }
  function i(S, g, O, L, ...A) {
    const F = S.currentPosition();
    if (F.offset += L, F.column += L, r) {
      const k = t ? bo(O, F) : null;
      r(hg(g, k, A));
    }
  }
  function a(S, g, O) {
    const L = { type: S };
    return t && (L.start = g, L.end = g, L.loc = { start: O, end: O }), L;
  }
  function s(S, g, O, L) {
    t && (S.end = g, S.loc && (S.loc.end = O));
  }
  function l(S, g) {
    const O = S.context(), L = a(3, O.offset, O.startLoc);
    return L.value = g, s(L, S.currentOffset(), S.currentPosition()), L;
  }
  function u(S, g) {
    const O = S.context(), { lastOffset: L, lastStartLoc: A } = O, F = a(5, L, A);
    return F.index = parseInt(g, 10), S.nextToken(), s(F, S.currentOffset(), S.currentPosition()), F;
  }
  function c(S, g, O) {
    const L = S.context(), { lastOffset: A, lastStartLoc: F } = L, k = a(4, A, F);
    return k.key = g, O === !0 && (k.modulo = !0), S.nextToken(), s(k, S.currentOffset(), S.currentPosition()), k;
  }
  function d(S, g) {
    const O = S.context(), { lastOffset: L, lastStartLoc: A } = O, F = a(9, L, A);
    return F.value = g.replace(Lg, Pg), S.nextToken(), s(F, S.currentOffset(), S.currentPosition()), F;
  }
  function f(S) {
    const g = S.nextToken(), O = S.context(), { lastOffset: L, lastStartLoc: A } = O, F = a(8, L, A);
    return g.type !== 12 ? (o(S, G.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0), F.value = "", s(F, L, A), {
      nextConsumeToken: g,
      node: F
    }) : (g.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, bt(g)), F.value = g.value || "", s(F, S.currentOffset(), S.currentPosition()), {
      node: F
    });
  }
  function h(S, g) {
    const O = S.context(), L = a(7, O.offset, O.startLoc);
    return L.value = g, s(L, S.currentOffset(), S.currentPosition()), L;
  }
  function _(S) {
    const g = S.context(), O = a(6, g.offset, g.startLoc);
    let L = S.nextToken();
    if (L.type === 9) {
      const A = f(S);
      O.modifier = A.node, L = A.nextConsumeToken || S.nextToken();
    }
    switch (L.type !== 10 && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(L)), L = S.nextToken(), L.type === 2 && (L = S.nextToken()), L.type) {
      case 11:
        L.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(L)), O.key = h(S, L.value || "");
        break;
      case 5:
        L.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(L)), O.key = c(S, L.value || "");
        break;
      case 6:
        L.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(L)), O.key = u(S, L.value || "");
        break;
      case 7:
        L.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(L)), O.key = d(S, L.value || "");
        break;
      default: {
        o(S, G.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
        const A = S.context(), F = a(7, A.offset, A.startLoc);
        return F.value = "", s(F, A.offset, A.startLoc), O.key = F, s(O, A.offset, A.startLoc), {
          nextConsumeToken: L,
          node: O
        };
      }
    }
    return s(O, S.currentOffset(), S.currentPosition()), {
      node: O
    };
  }
  function E(S) {
    const g = S.context(), O = g.currentType === 1 ? S.currentOffset() : g.offset, L = g.currentType === 1 ? g.endLoc : g.startLoc, A = a(2, O, L);
    A.items = [];
    let F = null, k = null;
    do {
      const M = F || S.nextToken();
      switch (F = null, M.type) {
        case 0:
          M.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(M)), A.items.push(l(S, M.value || ""));
          break;
        case 6:
          M.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(M)), A.items.push(u(S, M.value || ""));
          break;
        case 4:
          k = !0;
          break;
        case 5:
          M.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(M)), A.items.push(c(S, M.value || "", !!k)), k && (i(S, la.USE_MODULO_SYNTAX, g.lastStartLoc, 0, bt(M)), k = null);
          break;
        case 7:
          M.value == null && o(S, G.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, bt(M)), A.items.push(d(S, M.value || ""));
          break;
        case 8: {
          const z = _(S);
          A.items.push(z.node), F = z.nextConsumeToken || null;
          break;
        }
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const B = g.currentType === 1 ? g.lastOffset : S.currentOffset(), Y = g.currentType === 1 ? g.lastEndLoc : S.currentPosition();
    return s(A, B, Y), A;
  }
  function w(S, g, O, L) {
    const A = S.context();
    let F = L.items.length === 0;
    const k = a(1, g, O);
    k.cases = [], k.cases.push(L);
    do {
      const B = E(S);
      F || (F = B.items.length === 0), k.cases.push(B);
    } while (A.currentType !== 14);
    return F && o(S, G.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0), s(k, S.currentOffset(), S.currentPosition()), k;
  }
  function P(S) {
    const g = S.context(), { offset: O, startLoc: L } = g, A = E(S);
    return g.currentType === 14 ? A : w(S, O, L, A);
  }
  function R(S) {
    const g = Cg(S, dc({}, e)), O = g.context(), L = a(0, O.offset, O.startLoc);
    return t && L.loc && (L.loc.source = S), L.body = P(g), e.onCacheKey && (L.cacheKey = e.onCacheKey(S)), O.currentType !== 14 && o(g, G.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, S[O.offset] || ""), s(L, g.currentOffset(), g.currentPosition()), L;
  }
  return { parse: R };
}
function bt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function $g(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Us(e, t) {
  for (let n = 0; n < e.length; n++)
    ua(e[n], t);
}
function ua(e, t) {
  switch (e.type) {
    case 1:
      Us(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Us(e.items, t);
      break;
    case 6: {
      ua(e.key, t), t.helper(
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
function kg(e, t = {}) {
  const n = $g(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && ua(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Ig(e) {
  const t = e.body;
  return t.type === 2 ? Vs(t) : t.cases.forEach((n) => Vs(n)), e;
}
function Vs(e) {
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
      e.static = fc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Ng = "minifier";
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
        domain: Ng,
        args: [e.type]
      });
  }
  delete e.type;
}
const Ag = "parser";
function xg(e, t) {
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
  function l(E, w) {
    a.code += E;
  }
  function u(E, w = !0) {
    const P = w ? r : "";
    l(o ? P + "  ".repeat(E) : P);
  }
  function c(E = !0) {
    const w = ++a.indentLevel;
    E && u(w);
  }
  function d(E = !0) {
    const w = --a.indentLevel;
    E && u(w);
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
    helper: (E) => `_${E}`,
    needIndent: () => a.needIndent
  };
}
function Dg(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Kn(e, t.key), t.modifier ? (e.push(", "), Kn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Mg(e, t) {
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
function Rg(e, t) {
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
function Fg(e, t) {
  t.body ? Kn(e, t.body) : e.push("null");
}
function Kn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Fg(e, t);
      break;
    case 1:
      Rg(e, t);
      break;
    case 2:
      Mg(e, t);
      break;
    case 6:
      Dg(e, t);
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
        domain: Ag,
        args: [t.type]
      });
  }
}
const jg = (e, t = {}) => {
  const n = Fs(t.mode) ? t.mode : "normal", r = Fs(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, i = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], s = xg(e, {
    filename: r,
    breakLineCode: o,
    needIndent: i
  });
  s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(i), a.length > 0 && (s.push(`const { ${fc(a.map((c) => `${c}: _${c}`), ", ")} } = ctx`), s.newline()), s.push("return "), Kn(s, e), s.deindent(i), s.push("}"), delete e.helpers;
  const { code: l, map: u } = s.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ug(e, t = {}) {
  const n = dc({}, t), r = !!n.jit, o = !!n.minify, i = n.optimize == null ? !0 : n.optimize, s = wg(n).parse(e);
  return r ? (i && Ig(s), o && xn(s), { ast: s, code: "" }) : (kg(s, n), jg(s, n));
}
/*!
  * core-base v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Vg() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Gt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Rt(e) {
  return ae(e) && ca(e) === 0 && (_t(e, "b") || _t(e, "body"));
}
const pc = ["b", "body"];
function Hg(e) {
  return fn(e, pc);
}
const mc = ["c", "cases"];
function Wg(e) {
  return fn(e, mc, []);
}
const hc = ["s", "static"];
function Bg(e) {
  return fn(e, hc);
}
const gc = ["i", "items"];
function Kg(e) {
  return fn(e, gc, []);
}
const bc = ["t", "type"];
function ca(e) {
  return fn(e, bc);
}
const vc = ["v", "value"];
function Qr(e, t) {
  const n = fn(e, vc);
  if (n != null)
    return n;
  throw Mr(t);
}
const yc = ["m", "modifier"];
function Yg(e) {
  return fn(e, yc);
}
const _c = ["k", "key"];
function zg(e) {
  const t = fn(e, _c);
  if (t)
    return t;
  throw Mr(
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
const Sc = [
  ...pc,
  ...mc,
  ...hc,
  ...gc,
  ..._c,
  ...yc,
  ...vc,
  ...bc
];
function Mr(e) {
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
const Gg = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Xg(e) {
  return Gg.test(e);
}
function Jg(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function qg(e) {
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
function Zg(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Xg(t) ? Jg(t) : "*" + t;
}
function Qg(e) {
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
      if (o = 0, a === void 0 || (a = Zg(a), a === !1))
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
      if (l = qg(i), d = pn[r], u = d[l] || d.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = f[u[1]], c && (s = i, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Hs = /* @__PURE__ */ new Map();
function eb(e, t) {
  return ae(e) ? e[t] : null;
}
function tb(e, t) {
  if (!ae(e))
    return null;
  let n = Hs.get(t);
  if (n || (n = Qg(t), n && Hs.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, i = 0;
  for (; i < r; ) {
    const a = n[i];
    if (Sc.includes(a) && Rt(o))
      return null;
    const s = o[a];
    if (s === void 0 || ve(o))
      return null;
    o = s, i++;
  }
  return o;
}
const nb = (e) => e, rb = (e) => "", ob = "text", ib = (e) => e.length === 0 ? "" : cg(e), ab = ug;
function Ws(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function sb(e) {
  const t = Le(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Le(e.named.count) || Le(e.named.n)) ? Le(e.named.count) ? e.named.count : Le(e.named.n) ? e.named.n : t : t;
}
function lb(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function ub(e = {}) {
  const t = e.locale, n = sb(e), r = ae(e.pluralRules) && W(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : Ws, o = ae(e.pluralRules) && W(t) && ve(e.pluralRules[t]) ? Ws : void 0, i = (P) => P[r(n, P.length, o)], a = e.list || [], s = (P) => a[P], l = e.named || pe();
  Le(e.pluralIndex) && lb(n, l);
  const u = (P) => l[P];
  function c(P) {
    const R = ve(e.messages) ? e.messages(P) : ae(e.messages) ? e.messages[P] : !1;
    return R || (e.parent ? e.parent.message(P) : rb);
  }
  const d = (P) => e.modifiers ? e.modifiers[P] : nb, f = J(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : ib, h = J(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : ab, _ = J(e.processor) && W(e.processor.type) ? e.processor.type : ob, w = {
    list: s,
    named: u,
    plural: i,
    linked: (P, ...R) => {
      const [S, g] = R;
      let O = "text", L = "";
      R.length === 1 ? ae(S) ? (L = S.modifier || L, O = S.type || O) : W(S) && (L = S || L) : R.length === 2 && (W(S) && (L = S || L), W(g) && (O = g || O));
      const A = c(P)(w), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && Se(A) && L ? A[0] : A
      );
      return L ? d(L)(F, O) : F;
    },
    message: c,
    type: _,
    interpolate: h,
    normalize: f,
    values: Re(pe(), a, l)
  };
  return w;
}
let Rr = null;
function cb(e) {
  Rr = e;
}
function db(e, t, n) {
  Rr && Rr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const fb = /* @__PURE__ */ pb(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function pb(e) {
  return (t) => Rr && Rr.emit(e, t);
}
const mb = la.__EXTEND_POINT__, yn = No(mb), hb = {
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
}, Ec = G.__EXTEND_POINT__, _n = No(Ec), St = {
  INVALID_ARGUMENT: Ec,
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
function da(e, t) {
  return t.locale != null ? Bs(t.locale) : Bs(e.locale);
}
let Qo;
function Bs(e) {
  if (W(e))
    return e;
  if (ve(e)) {
    if (e.resolvedOnce && Qo != null)
      return Qo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (lg(t))
        throw xt(St.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Qo = t;
    } else
      throw xt(St.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw xt(St.NOT_SUPPORT_LOCALE_TYPE);
}
function gb(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Se(t) ? t : ae(t) ? Object.keys(t) : W(t) ? [t] : [n]
  ])];
}
function Tc(e, t, n) {
  const r = W(n) ? n : Yn, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let i = o.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let a = [n];
    for (; Se(a); )
      a = Ks(i, a, t);
    const s = Se(t) || !J(t) ? t : t.default ? t.default : null;
    a = W(s) ? [s] : s, Se(a) && Ks(i, a, !1), o.__localeChainCache.set(r, i);
  }
  return i;
}
function Ks(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ee(r); o++) {
    const i = t[o];
    W(i) && (r = bb(e, t[o], n));
  }
  return r;
}
function bb(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const i = o.join("-");
    r = vb(e, i, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function vb(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Se(n) || J(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const yb = "9.14.5", Ao = -1, Yn = "en-US", Ys = "", zs = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function _b() {
  return {
    upper: (e, t) => t === "text" && W(e) ? e.toUpperCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && W(e) ? e.toLowerCase() : t === "vnode" && ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && W(e) ? zs(e) : t === "vnode" && ae(e) && "__v_isVNode" in e ? zs(e.children) : e
  };
}
let Cc;
function Gs(e) {
  Cc = e;
}
let Oc;
function Sb(e) {
  Oc = e;
}
let Lc;
function Eb(e) {
  Lc = e;
}
let Pc = null;
const Tb = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Pc = e;
}, Cb = /* @__NO_SIDE_EFFECTS__ */ () => Pc;
let wc = null;
const Xs = (e) => {
  wc = e;
}, Ob = () => wc;
let Js = 0;
function Lb(e = {}) {
  const t = ve(e.onWarn) ? e.onWarn : tg, n = W(e.version) ? e.version : yb, r = W(e.locale) || ve(e.locale) ? e.locale : Yn, o = ve(r) ? Yn : r, i = Se(e.fallbackLocale) || J(e.fallbackLocale) || W(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, a = J(e.messages) ? e.messages : ei(o), s = J(e.datetimeFormats) ? e.datetimeFormats : ei(o), l = J(e.numberFormats) ? e.numberFormats : ei(o), u = Re(pe(), e.modifiers, _b()), c = e.pluralRules || pe(), d = ve(e.missing) ? e.missing : null, f = ee(e.missingWarn) || cn(e.missingWarn) ? e.missingWarn : !0, h = ee(e.fallbackWarn) || cn(e.fallbackWarn) ? e.fallbackWarn : !0, _ = !!e.fallbackFormat, E = !!e.unresolving, w = ve(e.postTranslation) ? e.postTranslation : null, P = J(e.processor) ? e.processor : null, R = ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter, g = ve(e.messageCompiler) ? e.messageCompiler : Cc, O = ve(e.messageResolver) ? e.messageResolver : Oc || eb, L = ve(e.localeFallbacker) ? e.localeFallbacker : Lc || gb, A = ae(e.fallbackContext) ? e.fallbackContext : void 0, F = e, k = ae(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), B = ae(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), Y = ae(F.__meta) ? F.__meta : {};
  Js++;
  const M = {
    version: n,
    cid: Js,
    locale: r,
    fallbackLocale: i,
    messages: a,
    modifiers: u,
    pluralRules: c,
    missing: d,
    missingWarn: f,
    fallbackWarn: h,
    fallbackFormat: _,
    unresolving: E,
    postTranslation: w,
    processor: P,
    warnHtmlMessage: R,
    escapeParameter: S,
    messageCompiler: g,
    messageResolver: O,
    localeFallbacker: L,
    fallbackContext: A,
    onWarn: t,
    __meta: Y
  };
  return M.datetimeFormats = s, M.numberFormats = l, M.__datetimeFormatters = k, M.__numberFormatters = B, __INTLIFY_PROD_DEVTOOLS__ && db(M, n, Y), M;
}
const ei = (e) => ({ [e]: pe() });
function fa(e, t, n, r, o) {
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
function Pb(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function wb(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Pb(e, t[r]))
      return !0;
  return !1;
}
function ti(e) {
  return (n) => $b(n, e);
}
function $b(e, t) {
  const n = Hg(t);
  if (n == null)
    throw Mr(
      0
      /* NodeTypes.Resource */
    );
  if (ca(n) === 1) {
    const i = Wg(n);
    return e.plural(i.reduce((a, s) => [
      ...a,
      qs(e, s)
    ], []));
  } else
    return qs(e, n);
}
function qs(e, t) {
  const n = Bg(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = Kg(t).reduce((o, i) => [...o, Li(e, i)], []);
    return e.normalize(r);
  }
}
function Li(e, t) {
  const n = ca(t);
  switch (n) {
    case 3:
      return Qr(t, n);
    case 9:
      return Qr(t, n);
    case 4: {
      const r = t;
      if (_t(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (_t(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Mr(n);
    }
    case 5: {
      const r = t;
      if (_t(r, "i") && Le(r.i))
        return e.interpolate(e.list(r.i));
      if (_t(r, "index") && Le(r.index))
        return e.interpolate(e.list(r.index));
      throw Mr(n);
    }
    case 6: {
      const r = t, o = Yg(r), i = zg(r);
      return e.linked(Li(e, i), o ? Li(e, o) : void 0, e.type);
    }
    case 7:
      return Qr(t, n);
    case 8:
      return Qr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const $c = (e) => e;
let Rn = pe();
function kc(e, t = {}) {
  let n = !1;
  const r = t.onError || bg;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...Ug(e, t), detectError: n };
}
const kb = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!W(e))
    throw xt(St.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || $c)(e), o = Rn[r];
    if (o)
      return o;
    const { code: i, detectError: a } = kc(e, t), s = new Function(`return ${i}`)();
    return a ? s : Rn[r] = s;
  }
};
function Ib(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && W(e)) {
    ee(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || $c)(e), o = Rn[r];
    if (o)
      return o;
    const { ast: i, detectError: a } = kc(e, {
      ...t,
      location: !1,
      jit: !0
    }), s = ti(i);
    return a ? s : Rn[r] = s;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Rn[n];
      return r || (Rn[n] = ti(e));
    } else
      return ti(e);
  }
}
const Zs = () => "", ct = (e) => ve(e);
function Qs(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: a, messages: s } = e, [l, u] = Pi(...t), c = ee(u.missingWarn) ? u.missingWarn : e.missingWarn, d = ee(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = ee(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, h = !!u.resolvedMessage, _ = W(u.default) || ee(u.default) ? ee(u.default) ? i ? l : () => l : u.default : n ? i ? l : () => l : "", E = n || _ !== "", w = da(e, u);
  f && Nb(u);
  let [P, R, S] = h ? [
    l,
    w,
    s[w] || pe()
  ] : Ic(e, l, w, a, d, c), g = P, O = l;
  if (!h && !(W(g) || Rt(g) || ct(g)) && E && (g = _, O = g), !h && (!(W(g) || Rt(g) || ct(g)) || !W(R)))
    return o ? Ao : l;
  let L = !1;
  const A = () => {
    L = !0;
  }, F = ct(g) ? g : Nc(e, l, R, g, O, A);
  if (L)
    return g;
  const k = Db(e, R, S, u), B = ub(k), Y = Ab(e, F, B);
  let M = r ? r(Y, l) : Y;
  if (f && W(M) && (M = ag(M)), __INTLIFY_PROD_DEVTOOLS__) {
    const z = {
      timestamp: Date.now(),
      key: W(l) ? l : ct(g) ? g.key : "",
      locale: R || (ct(g) ? g.locale : ""),
      format: W(g) ? g : ct(g) ? g.source : "",
      message: M
    };
    z.meta = Re({}, e.__meta, /* @__PURE__ */ Cb() || {}), fb(z);
  }
  return M;
}
function Nb(e) {
  Se(e.list) ? e.list = e.list.map((t) => W(t) ? Ms(t) : t) : ae(e.named) && Object.keys(e.named).forEach((t) => {
    W(e.named[t]) && (e.named[t] = Ms(e.named[t]));
  });
}
function Ic(e, t, n, r, o, i) {
  const { messages: a, onWarn: s, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let d = pe(), f, h = null;
  const _ = "translate";
  for (let E = 0; E < c.length && (f = c[E], d = a[f] || pe(), (h = l(d, t)) === null && (h = d[t]), !(W(h) || Rt(h) || ct(h))); E++)
    if (!wb(f, c)) {
      const w = fa(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        i,
        _
      );
      w !== t && (h = w);
    }
  return [h, f, d];
}
function Nc(e, t, n, r, o, i) {
  const { messageCompiler: a, warnHtmlMessage: s } = e;
  if (ct(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = a(r, xb(e, n, o, r, s, i));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Ab(e, t, n) {
  return t(n);
}
function Pi(...e) {
  const [t, n, r] = e, o = pe();
  if (!W(t) && !Le(t) && !ct(t) && !Rt(t))
    throw xt(St.INVALID_ARGUMENT);
  const i = Le(t) ? String(t) : (ct(t), t);
  return Le(n) ? o.plural = n : W(n) ? o.default = n : J(n) && !Io(n) ? o.named = n : Se(n) && (o.list = n), Le(r) ? o.plural = r : W(r) ? o.default = r : J(r) && Re(o, r), [i, o];
}
function xb(e, t, n, r, o, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (a) => {
      throw i && i(a), a;
    },
    onCacheKey: (a) => ng(t, n, a)
  };
}
function Db(e, t, n, r) {
  const { modifiers: o, pluralRules: i, messageResolver: a, fallbackLocale: s, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: i,
    messages: (h) => {
      let _ = a(n, h);
      if (_ == null && c) {
        const [, , E] = Ic(c, h, t, s, l, u);
        _ = a(E, h);
      }
      if (W(_) || Rt(_)) {
        let E = !1;
        const P = Nc(e, h, t, _, h, () => {
          E = !0;
        });
        return E ? Zs : P;
      } else return ct(_) ? _ : Zs;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), Le(r.plural) && (f.pluralIndex = r.plural), f;
}
function el(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: a } = e, { __datetimeFormatters: s } = e, [l, u, c, d] = wi(...t), f = ee(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ee(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, _ = da(e, c), E = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    _
  );
  if (!W(l) || l === "")
    return new Intl.DateTimeFormat(_, d).format(u);
  let w = {}, P, R = null;
  const S = "datetime format";
  for (let L = 0; L < E.length && (P = E[L], w = n[P] || {}, R = w[l], !J(R)); L++)
    fa(e, l, P, f, S);
  if (!J(R) || !W(P))
    return r ? Ao : l;
  let g = `${P}__${l}`;
  Io(d) || (g = `${g}__${JSON.stringify(d)}`);
  let O = s.get(g);
  return O || (O = new Intl.DateTimeFormat(P, Re({}, R, d)), s.set(g, O)), h ? O.formatToParts(u) : O.format(u);
}
const Ac = [
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
function wi(...e) {
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
  } else if (og(t)) {
    if (isNaN(t.getTime()))
      throw xt(St.INVALID_DATE_ARGUMENT);
    s = t;
  } else if (Le(t))
    s = t;
  else
    throw xt(St.INVALID_ARGUMENT);
  return W(n) ? i.key = n : J(n) && Object.keys(n).forEach((l) => {
    Ac.includes(l) ? a[l] = n[l] : i[l] = n[l];
  }), W(r) ? i.locale = r : J(r) && (a = r), J(o) && (a = o), [i.key || "", s, i, a];
}
function tl(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function nl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: a } = e, { __numberFormatters: s } = e, [l, u, c, d] = $i(...t), f = ee(c.missingWarn) ? c.missingWarn : e.missingWarn;
  ee(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const h = !!c.part, _ = da(e, c), E = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    _
  );
  if (!W(l) || l === "")
    return new Intl.NumberFormat(_, d).format(u);
  let w = {}, P, R = null;
  const S = "number format";
  for (let L = 0; L < E.length && (P = E[L], w = n[P] || {}, R = w[l], !J(R)); L++)
    fa(e, l, P, f, S);
  if (!J(R) || !W(P))
    return r ? Ao : l;
  let g = `${P}__${l}`;
  Io(d) || (g = `${g}__${JSON.stringify(d)}`);
  let O = s.get(g);
  return O || (O = new Intl.NumberFormat(P, Re({}, R, d)), s.set(g, O)), h ? O.formatToParts(u) : O.format(u);
}
const xc = [
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
function $i(...e) {
  const [t, n, r, o] = e, i = pe();
  let a = pe();
  if (!Le(t))
    throw xt(St.INVALID_ARGUMENT);
  const s = t;
  return W(n) ? i.key = n : J(n) && Object.keys(n).forEach((l) => {
    xc.includes(l) ? a[l] = n[l] : i[l] = n[l];
  }), W(r) ? i.locale = r : J(r) && (a = r), J(o) && (a = o), [i.key || "", s, i, a];
}
function rl(e, t, n) {
  const r = e;
  for (const o in n) {
    const i = `${t}__${o}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
Vg();
/*!
  * vue-i18n v9.14.5
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Mb = "9.14.5";
function Rb() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Gt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Gt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Gt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Gt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Gt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Fb = hb.__EXTEND_POINT__, Bt = No(Fb);
Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt(), Bt();
const Dc = St.__EXTEND_POINT__, nt = No(Dc), ke = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Dc,
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
function Ie(e, ...t) {
  return Gn(e, null, void 0);
}
const ki = /* @__PURE__ */ dn("__translateVNode"), Ii = /* @__PURE__ */ dn("__datetimeParts"), Ni = /* @__PURE__ */ dn("__numberParts"), Mc = dn("__setPluralRules"), Rc = /* @__PURE__ */ dn("__injectWithOption"), Ai = /* @__PURE__ */ dn("__dispose");
function Fr(e) {
  if (!ae(e) || Rt(e))
    return e;
  for (const t in e)
    if (_t(e, t))
      if (!t.includes("."))
        ae(e[t]) && Fr(e[t]);
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
        if (i || (Rt(o) ? Sc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Rt(o)) {
          const a = o[n[r]];
          ae(a) && Fr(a);
        }
      }
  return e;
}
function xo(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: i } = t, a = J(n) ? n : Se(r) ? pe() : { [e]: pe() };
  if (Se(r) && r.forEach((s) => {
    if ("locale" in s && "resource" in s) {
      const { locale: l, resource: u } = s;
      l ? (a[l] = a[l] || pe(), io(u, a[l])) : io(u, a);
    } else
      W(s) && io(JSON.parse(s), a);
  }), o == null && i)
    for (const s in a)
      _t(a, s) && Fr(a[s]);
  return a;
}
function Fc(e) {
  return e.type;
}
function jc(e, t, n) {
  let r = ae(t.messages) ? t.messages : pe();
  "__i18nGlobal" in n && (r = xo(e.locale.value, {
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
function ol(e) {
  return $e(Vr, null, e, 0);
}
const il = "__INTLIFY_META__", al = () => [], jb = () => !1;
let sl = 0;
function ll(e) {
  return (t, n, r, o) => e(n, r, jt() || void 0, o);
}
const Ub = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = jt();
  let t = null;
  return e && (t = Fc(e)[il]) ? { [il]: t } : null;
};
function pa(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, i = e.flatJson, a = go ? Ze : Fl, s = !!e.translateExistCompatible;
  let l = ee(e.inheritLocale) ? e.inheritLocale : !0;
  const u = a(
    // prettier-ignore
    n && l ? n.locale.value : W(e.locale) ? e.locale : Yn
  ), c = a(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : W(e.fallbackLocale) || Se(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value
  ), d = a(xo(u.value, e)), f = a(J(e.datetimeFormats) ? e.datetimeFormats : { [u.value]: {} }), h = a(J(e.numberFormats) ? e.numberFormats : { [u.value]: {} });
  let _ = n ? n.missingWarn : ee(e.missingWarn) || cn(e.missingWarn) ? e.missingWarn : !0, E = n ? n.fallbackWarn : ee(e.fallbackWarn) || cn(e.fallbackWarn) ? e.fallbackWarn : !0, w = n ? n.fallbackRoot : ee(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, R = ve(e.missing) ? e.missing : null, S = ve(e.missing) ? ll(e.missing) : null, g = ve(e.postTranslation) ? e.postTranslation : null, O = n ? n.warnHtmlMessage : ee(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter;
  const A = n ? n.modifiers : J(e.modifiers) ? e.modifiers : {};
  let F = e.pluralRules || n && n.pluralRules, k;
  k = (() => {
    o && Xs(null);
    const C = {
      version: Mb,
      locale: u.value,
      fallbackLocale: c.value,
      messages: d.value,
      modifiers: A,
      pluralRules: F,
      missing: S === null ? void 0 : S,
      missingWarn: _,
      fallbackWarn: E,
      fallbackFormat: P,
      unresolving: !0,
      postTranslation: g === null ? void 0 : g,
      warnHtmlMessage: O,
      escapeParameter: L,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = f.value, C.numberFormats = h.value, C.__datetimeFormatters = J(k) ? k.__datetimeFormatters : void 0, C.__numberFormatters = J(k) ? k.__numberFormatters : void 0;
    const N = Lb(C);
    return o && Xs(N), N;
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
  const M = dt({
    get: () => u.value,
    set: (C) => {
      u.value = C, k.locale = u.value;
    }
  }), z = dt({
    get: () => c.value,
    set: (C) => {
      c.value = C, k.fallbackLocale = c.value, Qn(k, u.value, C);
    }
  }), se = dt(() => d.value), Te = /* @__PURE__ */ dt(() => f.value), ne = /* @__PURE__ */ dt(() => h.value);
  function te() {
    return ve(g) ? g : null;
  }
  function Q(C) {
    g = C, k.postTranslation = C;
  }
  function Pe() {
    return R;
  }
  function we(C) {
    C !== null && (S = ll(C)), R = C, k.missing = S;
  }
  const ue = (C, N, K, re, Ce, Be) => {
    Y();
    let Ae;
    try {
      __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = n ? Ob() : void 0), Ae = C(k);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = void 0);
    }
    if (K !== "translate exists" && // for not `te` (e.g `t`)
    Le(Ae) && Ae === Ao || K === "translate exists" && !Ae) {
      const [mn, Mo] = N();
      return n && w ? re(n) : Ce(mn);
    } else {
      if (Be(Ae))
        return Ae;
      throw Ie(ke.UNEXPECTED_RETURN_TYPE);
    }
  };
  function he(...C) {
    return ue((N) => Reflect.apply(Qs, null, [N, ...C]), () => Pi(...C), "translate", (N) => Reflect.apply(N.t, N, [...C]), (N) => N, (N) => W(N));
  }
  function it(...C) {
    const [N, K, re] = C;
    if (re && !ae(re))
      throw Ie(ke.INVALID_ARGUMENT);
    return he(N, K, Re({ resolvedMessage: !0 }, re || {}));
  }
  function We(...C) {
    return ue((N) => Reflect.apply(el, null, [N, ...C]), () => wi(...C), "datetime format", (N) => Reflect.apply(N.d, N, [...C]), () => Ys, (N) => W(N));
  }
  function Lt(...C) {
    return ue((N) => Reflect.apply(nl, null, [N, ...C]), () => $i(...C), "number format", (N) => Reflect.apply(N.n, N, [...C]), () => Ys, (N) => W(N));
  }
  function Qe(C) {
    return C.map((N) => W(N) || Le(N) || ee(N) ? ol(String(N)) : N);
  }
  const ht = {
    normalize: Qe,
    interpolate: (C) => C,
    type: "vnode"
  };
  function Pt(...C) {
    return ue(
      (N) => {
        let K;
        const re = N;
        try {
          re.processor = ht, K = Reflect.apply(Qs, null, [re, ...C]);
        } finally {
          re.processor = null;
        }
        return K;
      },
      () => Pi(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[ki](...C),
      (N) => [ol(N)],
      (N) => Se(N)
    );
  }
  function et(...C) {
    return ue(
      (N) => Reflect.apply(nl, null, [N, ...C]),
      () => $i(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Ni](...C),
      al,
      (N) => W(N) || Se(N)
    );
  }
  function Qt(...C) {
    return ue(
      (N) => Reflect.apply(el, null, [N, ...C]),
      () => wi(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (N) => N[Ii](...C),
      al,
      (N) => W(N) || Se(N)
    );
  }
  function b(C) {
    F = C, k.pluralRules = F;
  }
  function y(C, N) {
    return ue(() => {
      if (!C)
        return !1;
      const K = W(N) ? N : u.value, re = x(K), Ce = k.messageResolver(re, C);
      return s ? Ce != null : Rt(Ce) || ct(Ce) || W(Ce);
    }, () => [C], "translate exists", (K) => Reflect.apply(K.te, K, [C, N]), jb, (K) => ee(K));
  }
  function v(C) {
    let N = null;
    const K = Tc(k, c.value, u.value);
    for (let re = 0; re < K.length; re++) {
      const Ce = d.value[K[re]] || {}, Be = k.messageResolver(Ce, C);
      if (Be != null) {
        N = Be;
        break;
      }
    }
    return N;
  }
  function I(C) {
    const N = v(C);
    return N ?? (n ? n.tm(C) || {} : {});
  }
  function x(C) {
    return d.value[C] || {};
  }
  function D(C, N) {
    if (i) {
      const K = { [C]: N };
      for (const re in K)
        _t(K, re) && Fr(K[re]);
      N = K[C];
    }
    d.value[C] = N, k.messages = d.value;
  }
  function V(C, N) {
    d.value[C] = d.value[C] || {};
    const K = { [C]: N };
    if (i)
      for (const re in K)
        _t(K, re) && Fr(K[re]);
    N = K[C], io(N, d.value[C]), k.messages = d.value;
  }
  function U(C) {
    return f.value[C] || {};
  }
  function p(C, N) {
    f.value[C] = N, k.datetimeFormats = f.value, tl(k, C, N);
  }
  function m(C, N) {
    f.value[C] = Re(f.value[C] || {}, N), k.datetimeFormats = f.value, tl(k, C, N);
  }
  function T(C) {
    return h.value[C] || {};
  }
  function $(C, N) {
    h.value[C] = N, k.numberFormats = h.value, rl(k, C, N);
  }
  function H(C, N) {
    h.value[C] = Re(h.value[C] || {}, N), k.numberFormats = h.value, rl(k, C, N);
  }
  sl++, n && go && (ft(n.locale, (C) => {
    l && (u.value = C, k.locale = C, Qn(k, u.value, c.value));
  }), ft(n.fallbackLocale, (C) => {
    l && (c.value = C, k.fallbackLocale = C, Qn(k, u.value, c.value));
  }));
  const j = {
    id: sl,
    locale: M,
    fallbackLocale: z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(C) {
      l = C, C && n && (u.value = n.locale.value, c.value = n.fallbackLocale.value, Qn(k, u.value, c.value));
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
    set missingWarn(C) {
      _ = C, k.missingWarn = _;
    },
    get fallbackWarn() {
      return E;
    },
    set fallbackWarn(C) {
      E = C, k.fallbackWarn = E;
    },
    get fallbackRoot() {
      return w;
    },
    set fallbackRoot(C) {
      w = C;
    },
    get fallbackFormat() {
      return P;
    },
    set fallbackFormat(C) {
      P = C, k.fallbackFormat = P;
    },
    get warnHtmlMessage() {
      return O;
    },
    set warnHtmlMessage(C) {
      O = C, k.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return L;
    },
    set escapeParameter(C) {
      L = C, k.escapeParameter = C;
    },
    t: he,
    getLocaleMessage: x,
    setLocaleMessage: D,
    mergeLocaleMessage: V,
    getPostTranslationHandler: te,
    setPostTranslationHandler: Q,
    getMissingHandler: Pe,
    setMissingHandler: we,
    [Mc]: b
  };
  return j.datetimeFormats = Te, j.numberFormats = ne, j.rt = it, j.te = y, j.tm = I, j.d = We, j.n = Lt, j.getDateTimeFormat = U, j.setDateTimeFormat = p, j.mergeDateTimeFormat = m, j.getNumberFormat = T, j.setNumberFormat = $, j.mergeNumberFormat = H, j[Rc] = r, j[ki] = Pt, j[Ii] = Qt, j[Ni] = et, j;
}
function Vb(e) {
  const t = W(e.locale) ? e.locale : Yn, n = W(e.fallbackLocale) || Se(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = ve(e.missing) ? e.missing : void 0, o = ee(e.silentTranslationWarn) || cn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = ee(e.silentFallbackWarn) || cn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, a = ee(e.fallbackRoot) ? e.fallbackRoot : !0, s = !!e.formatFallbackMessages, l = J(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = ve(e.postTranslation) ? e.postTranslation : void 0, d = W(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, h = ee(e.sync) ? e.sync : !0;
  let _ = e.messages;
  if (J(e.sharedMessages)) {
    const L = e.sharedMessages;
    _ = Object.keys(L).reduce((F, k) => {
      const B = F[k] || (F[k] = {});
      return Re(B, L[k]), F;
    }, _ || {});
  }
  const { __i18n: E, __root: w, __injectWithOption: P } = e, R = e.datetimeFormats, S = e.numberFormats, g = e.flatJson, O = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: _,
    flatJson: g,
    datetimeFormats: R,
    numberFormats: S,
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
    translateExistCompatible: O,
    __i18n: E,
    __root: w,
    __injectWithOption: P
  };
}
function xi(e = {}, t) {
  {
    const n = pa(Vb(e)), { __extender: r } = e, o = {
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
          throw Ie(ke.INVALID_ARGUMENT);
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
          throw Ie(ke.INVALID_ARGUMENT);
        const f = a;
        return W(s) ? u.locale = s : Le(s) ? u.plural = s : Se(s) ? c = s : J(s) && (d = s), W(l) ? u.locale = l : Se(l) ? c = l : J(l) && (d = l), Reflect.apply(n.t, n, [
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
const ma = {
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
function Hb({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ue ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, pe());
}
function Uc(e) {
  return Ue;
}
const Wb = /* @__PURE__ */ Ur({
  /* eslint-disable */
  name: "i18n-t",
  props: Re({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Le(e) || !isNaN(e)
    }
  }, ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Do({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(n).filter((d) => d !== "_"), a = pe();
      e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = W(e.plural) ? +e.plural : e.plural);
      const s = Hb(t, i), l = o[ki](e.keypath, s, a), u = Re(pe(), r), c = W(e.tag) || ae(e.tag) ? e.tag : Uc();
      return ia(c, u, l);
    };
  }
}), ul = Wb;
function Bb(e) {
  return Se(e) && !W(e[0]);
}
function Vc(e, t, n, r) {
  const { slots: o, attrs: i } = t;
  return () => {
    const a = { part: !0 };
    let s = pe();
    e.locale && (a.locale = e.locale), W(e.format) ? a.key = e.format : ae(e.format) && (W(e.format.key) && (a.key = e.format.key), s = Object.keys(e.format).reduce((f, h) => n.includes(h) ? Re(pe(), f, { [h]: e.format[h] }) : f, pe()));
    const l = r(e.value, a, s);
    let u = [a.key];
    Se(l) ? u = l.map((f, h) => {
      const _ = o[f.type], E = _ ? _({ [f.type]: f.value, index: h, parts: l }) : [f.value];
      return Bb(E) && (E[0].key = `${f.type}-${h}`), E;
    }) : W(l) && (u = [l]);
    const c = Re(pe(), i), d = W(e.tag) || ae(e.tag) ? e.tag : Uc();
    return ia(d, c, u);
  };
}
const Kb = /* @__PURE__ */ Ur({
  /* eslint-disable */
  name: "i18n-n",
  props: Re({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Do({
      useScope: e.scope,
      __useComponent: !0
    });
    return Vc(e, t, xc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ni](...r)
    ));
  }
}), cl = Kb, Yb = /* @__PURE__ */ Ur({
  /* eslint-disable */
  name: "i18n-d",
  props: Re({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ma),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Do({
      useScope: e.scope,
      __useComponent: !0
    });
    return Vc(e, t, Ac, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ii](...r)
    ));
  }
}), dl = Yb;
function zb(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Gb(e) {
  const t = (a) => {
    const { instance: s, modifiers: l, value: u } = a;
    if (!s || !s.$)
      throw Ie(ke.UNEXPECTED_ERROR);
    const c = zb(e, s.$), d = fl(u);
    return [
      Reflect.apply(c.t, c, [...pl(d)]),
      c
    ];
  };
  return {
    created: (a, s) => {
      const [l, u] = t(s);
      go && e.global === u && (a.__i18nWatcher = ft(u.locale, () => {
        s.instance && s.instance.$forceUpdate();
      })), a.__composer = u, a.textContent = l;
    },
    unmounted: (a) => {
      go && a.__i18nWatcher && (a.__i18nWatcher(), a.__i18nWatcher = void 0, delete a.__i18nWatcher), a.__composer && (a.__composer = void 0, delete a.__composer);
    },
    beforeUpdate: (a, { value: s }) => {
      if (a.__composer) {
        const l = a.__composer, u = fl(s);
        a.textContent = Reflect.apply(l.t, l, [
          ...pl(u)
        ]);
      }
    },
    getSSRProps: (a) => {
      const [s] = t(a);
      return { textContent: s };
    }
  };
}
function fl(e) {
  if (W(e))
    return { path: e };
  if (J(e)) {
    if (!("path" in e))
      throw Ie(ke.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Ie(ke.INVALID_VALUE);
}
function pl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: i } = e, a = {}, s = r || {};
  return W(n) && (a.locale = n), Le(o) && (a.plural = o), Le(i) && (a.plural = i), [t, s, a];
}
function Xb(e, t, ...n) {
  const r = J(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName;
  (ee(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : ul.name, "I18nT"].forEach((a) => e.component(a, ul)), [cl.name, "I18nN"].forEach((a) => e.component(a, cl)), [dl.name, "I18nD"].forEach((a) => e.component(a, dl))), e.directive("t", Gb(t));
}
function Jb(e, t, n) {
  return {
    beforeCreate() {
      const r = jt();
      if (!r)
        throw Ie(ke.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const i = o.i18n;
        if (o.__i18n && (i.__i18n = o.__i18n), i.__root = t, this === this.$root)
          this.$i18n = ml(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = xi(i);
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = ml(e, o);
        else {
          this.$i18n = xi({
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
      o.__i18nGlobal && jc(t, o, o), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, a) => this.$i18n.te(i, a), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i), n.__setInstance(r, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const r = jt();
      if (!r)
        throw Ie(ke.UNEXPECTED_ERROR);
      const o = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function ml(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Mc](t.pluralizationRules || e.pluralizationRules);
  const n = xo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const qb = /* @__PURE__ */ dn("global-vue-i18n");
function Zb(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ee(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ee(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, i = /* @__PURE__ */ new Map(), [a, s] = Qb(e, n), l = /* @__PURE__ */ dn("");
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
          const P = _[0];
          f.__composerExtend = P.__composerExtend, f.__vueI18nExtend = P.__vueI18nExtend;
        }
        let E = null;
        !n && r && (E = lv(h, f.global)), __VUE_I18N_FULL_INSTALL__ && Xb(h, f, ..._), __VUE_I18N_LEGACY_API__ && n && h.mixin(Jb(s, s.__composer, f));
        const w = h.unmount;
        h.unmount = () => {
          E && E(), f.dispose(), w();
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
function Do(e = {}) {
  const t = jt();
  if (t == null)
    throw Ie(ke.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ie(ke.NOT_INSTALLED);
  const n = ev(t), r = nv(n), o = Fc(t), i = tv(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Ie(ke.NOT_AVAILABLE_IN_LEGACY_MODE);
    return av(t, i, r, e);
  }
  if (i === "global")
    return jc(r, e, o), r;
  if (i === "parent") {
    let l = rv(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const a = n;
  let s = a.__getInstance(t);
  if (s == null) {
    const l = Re({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), s = pa(l), a.__composerExtend && (s[Ai] = a.__composerExtend(s)), iv(a, t, s), a.__setInstance(t, s);
  }
  return s;
}
function Qb(e, t, n) {
  const r = td();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => xi(e)) : r.run(() => pa(e));
    if (o == null)
      throw Ie(ke.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function ev(e) {
  {
    const t = cr(e.isCE ? qb : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ie(e.isCE ? ke.NOT_INSTALLED_WITH_PROVIDE : ke.UNEXPECTED_ERROR);
    return t;
  }
}
function tv(e, t) {
  return Io(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function nv(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function rv(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let i = ov(t, n);
  for (; i != null; ) {
    const a = e;
    if (e.mode === "composition")
      r = a.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const s = a.__getInstance(i);
      s != null && (r = s.__composer, n && r && !r[Rc] && (r = null));
    }
    if (r != null || o === i)
      break;
    i = i.parent;
  }
  return r;
}
function ov(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function iv(e, t, n) {
  zn(() => {
  }, t), qi(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Ai];
    o && (o(), delete r[Ai]);
  }, t);
}
function av(e, t, n, r = {}) {
  const o = t === "local", i = Fl(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Ie(ke.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const a = ee(r.inheritLocale) ? r.inheritLocale : !W(r.locale), s = Ze(
    // prettier-ignore
    !o || a ? n.locale.value : W(r.locale) ? r.locale : Yn
  ), l = Ze(
    // prettier-ignore
    !o || a ? n.fallbackLocale.value : W(r.fallbackLocale) || Se(r.fallbackLocale) || J(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : s.value
  ), u = Ze(xo(s.value, r)), c = Ze(J(r.datetimeFormats) ? r.datetimeFormats : { [s.value]: {} }), d = Ze(J(r.numberFormats) ? r.numberFormats : { [s.value]: {} }), f = o ? n.missingWarn : ee(r.missingWarn) || cn(r.missingWarn) ? r.missingWarn : !0, h = o ? n.fallbackWarn : ee(r.fallbackWarn) || cn(r.fallbackWarn) ? r.fallbackWarn : !0, _ = o ? n.fallbackRoot : ee(r.fallbackRoot) ? r.fallbackRoot : !0, E = !!r.fallbackFormat, w = ve(r.missing) ? r.missing : null, P = ve(r.postTranslation) ? r.postTranslation : null, R = o ? n.warnHtmlMessage : ee(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, S = !!r.escapeParameter, g = o ? n.modifiers : J(r.modifiers) ? r.modifiers : {}, O = r.pluralRules || o && n.pluralRules;
  function L() {
    return [
      s.value,
      l.value,
      u.value,
      c.value,
      d.value
    ];
  }
  const A = dt({
    get: () => i.value ? i.value.locale.value : s.value,
    set: (v) => {
      i.value && (i.value.locale.value = v), s.value = v;
    }
  }), F = dt({
    get: () => i.value ? i.value.fallbackLocale.value : l.value,
    set: (v) => {
      i.value && (i.value.fallbackLocale.value = v), l.value = v;
    }
  }), k = dt(() => i.value ? i.value.messages.value : u.value), B = dt(() => c.value), Y = dt(() => d.value);
  function M() {
    return i.value ? i.value.getPostTranslationHandler() : P;
  }
  function z(v) {
    i.value && i.value.setPostTranslationHandler(v);
  }
  function se() {
    return i.value ? i.value.getMissingHandler() : w;
  }
  function Te(v) {
    i.value && i.value.setMissingHandler(v);
  }
  function ne(v) {
    return L(), v();
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
  function we(...v) {
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
  function We(v, I) {
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
  function Pt(v) {
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
      return i.value ? i.value.pluralRules : O;
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
      return i.value ? i.value.fallbackFormat : E;
    },
    set fallbackFormat(v) {
      i.value && (i.value.fallbackFormat = v);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : R;
    },
    set warnHtmlMessage(v) {
      i.value && (i.value.warnHtmlMessage = v);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : S;
    },
    set escapeParameter(v) {
      i.value && (i.value.escapeParameter = v);
    },
    t: te,
    getPostTranslationHandler: M,
    setPostTranslationHandler: z,
    getMissingHandler: se,
    setMissingHandler: Te,
    rt: Q,
    d: Pe,
    n: we,
    tm: ue,
    te: he,
    getLocaleMessage: it,
    setLocaleMessage: We,
    mergeLocaleMessage: Lt,
    getDateTimeFormat: Qe,
    setDateTimeFormat: mt,
    mergeDateTimeFormat: ht,
    getNumberFormat: Pt,
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
    }), v.escapeParameter = S, v.fallbackFormat = E, v.fallbackRoot = _, v.fallbackWarn = h, v.missingWarn = f, v.warnHtmlMessage = R;
  }
  return au(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Ie(ke.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const v = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (s.value = v.locale.value, l.value = v.fallbackLocale.value, u.value = v.messages.value, c.value = v.datetimeFormats.value, d.value = v.numberFormats.value) : o && y(v);
  }), b;
}
const sv = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], hl = ["t", "rt", "d", "n", "tm", "te"];
function lv(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return sv.forEach((o) => {
    const i = Object.getOwnPropertyDescriptor(t, o);
    if (!i)
      throw Ie(ke.UNEXPECTED_ERROR);
    const a = Me(i.value) ? {
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
  }), e.config.globalProperties.$i18n = n, hl.forEach((o) => {
    const i = Object.getOwnPropertyDescriptor(t, o);
    if (!i || !i.value)
      throw Ie(ke.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, i);
  }), () => {
    delete e.config.globalProperties.$i18n, hl.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
Rb();
__INTLIFY_JIT_COMPILATION__ ? Gs(Ib) : Gs(kb);
Sb(tb);
Eb(Tc);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Gt();
  e.__INTLIFY__ = !0, cb(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const uv = /* @__PURE__ */ Ur({
  __name: "App",
  setup(e) {
    const { t } = Do(), n = Ze(), r = Ze(), o = Ze(!1), i = Ze(null), a = () => {
      var s;
      if ((s = n.value) != null && s.parentElement) {
        const l = n.value.parentElement;
        o.value ? l.classList.remove("h-full") : l.classList.add("h-full");
      }
    };
    return ft(o, () => {
      a();
    }), zn(async () => {
      console.log(t("audiomass.title")), n.value && (a(), i.value = new MutationObserver((s) => {
        s.forEach((l) => {
          l.type === "attributes" && l.attributeName === "maximized" && (o.value = l.target.getAttribute("maximized") === "true");
        });
      }), i.value.observe(n.value, {
        attributes: !0,
        attributeFilter: ["maximized"]
      }));
    }), Ji(() => {
      var s;
      (s = n.value) != null && s.parentElement && n.value.parentElement.classList.remove("h-full"), i.value && (i.value.disconnect(), i.value = null);
    }), (s, l) => (be(), qe("div", {
      ref_key: "viewerContentRef",
      ref: n,
      class: "flex w-full h-full"
    }, [
      Ft("div", {
        ref_key: "mainContentRef",
        ref: r,
        class: "flex-1 relative"
      }, l[0] || (l[0] = [
        Ft("iframe", {
          src: "/audiomass",
          class: "demo-iframe h-full w-full"
        }, null, -1)
      ]), 512)
    ], 512));
  }
}), cv = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, dv = /* @__PURE__ */ cv(uv, [["__scopeId", "data-v-d5503afb"]]), fv = /* @__PURE__ */ Ur({
  __name: "Root",
  setup(e, { expose: t }) {
    const n = Ze(!1), r = () => {
      n.value = !0;
    }, o = () => {
      n.value = !1;
    };
    return zn(() => {
      n.value = !0;
    }), t({ open: r, close: o }), (i, a) => (be(), Ct(Ul(sc), {
      visible: n.value,
      "onUpdate:visible": a[0] || (a[0] = (s) => n.value = s),
      header: "ComfyUI AudioMass",
      style: { width: "80vw", height: "80vh" },
      maximizable: !0,
      modal: !0,
      closable: !0,
      draggable: !1,
      "content-class": "h-full"
    }, {
      default: Tn(() => [
        $e(dv)
      ]),
      _: 1
    }, 8, ["visible"]));
  }
}), pv = {
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
}, mv = Zb({
  legacy: !1,
  locale: navigator.language.split("-")[0] || "en",
  fallbackLocale: "en",
  messages: pv
}), { ComfyButton: hv } = window.comfyAPI.button;
let eo = null, er = null, to = null;
function gv() {
  if (er) {
    to == null || to.open();
    return;
  }
  er = document.createElement("div"), er.id = "audiomass-root", document.body.appendChild(er), eo = dp(fv), eo.use(mv), eo.use(bm, {
    theme: {}
  }), to = eo.mount(er);
}
ba.registerExtension({
  name: "ComfyUI.AudioMass.TopMenu",
  setup() {
    var e;
    (e = ba.menu) == null || e.settingsGroup.append(
      new hv({
        icon: "image",
        tooltip: "comfyui-audiomass",
        content: "AudioMass",
        action: gv
      })
    );
  }
});
