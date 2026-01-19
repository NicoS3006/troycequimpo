(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
  5382: function(t, e, i) {
      var n, s, r, a, o, l, u, c, h, d, p, f, m, g, v, y, b, x, w, T, S, k, C, A;
      n = i(7424),
      s = i(6690),
      r = i(9728),
      a = function(t, e, i) {
          return {
              endTime: e,
              insertTime: i,
              type: "exponentialRampToValue",
              value: t
          }
      }
      ,
      o = function(t, e, i) {
          return {
              endTime: e,
              insertTime: i,
              type: "linearRampToValue",
              value: t
          }
      }
      ,
      l = function(t, e) {
          return {
              startTime: e,
              type: "setValue",
              value: t
          }
      }
      ,
      u = function(t, e, i) {
          return {
              duration: i,
              startTime: e,
              type: "setValueCurve",
              values: t
          }
      }
      ,
      c = function(t, e, i) {
          var n = i.startTime
            , s = i.target;
          return s + (e - s) * Math.exp((n - t) / i.timeConstant)
      }
      ,
      h = function(t) {
          return "exponentialRampToValue" === t.type
      }
      ,
      d = function(t) {
          return "linearRampToValue" === t.type
      }
      ,
      p = function(t) {
          return h(t) || d(t)
      }
      ,
      f = function(t) {
          return "setValue" === t.type
      }
      ,
      m = function(t) {
          return "setValueCurve" === t.type
      }
      ,
      g = function t(e, i, n, s) {
          var r = e[i];
          return void 0 === r ? s : p(r) || f(r) ? r.value : m(r) ? r.values[r.values.length - 1] : c(n, t(e, i - 1, r.startTime, s), r)
      }
      ,
      v = function(t, e, i, n, s) {
          return void 0 === i ? [n.insertTime, s] : p(i) ? [i.endTime, i.value] : f(i) ? [i.startTime, i.value] : m(i) ? [i.startTime + i.duration, i.values[i.values.length - 1]] : [i.startTime, g(t, e - 1, i.startTime, s)]
      }
      ,
      y = function(t) {
          return "cancelAndHold" === t.type
      }
      ,
      b = function(t) {
          return "cancelScheduledValues" === t.type
      }
      ,
      x = function(t) {
          return y(t) || b(t) ? t.cancelTime : h(t) || d(t) ? t.endTime : t.startTime
      }
      ,
      w = function(t, e, i, n) {
          var s = n.endTime
            , r = n.value;
          return i === r ? r : 0 < i && 0 < r || i < 0 && r < 0 ? i * Math.pow(r / i, (t - e) / (s - e)) : 0
      }
      ,
      T = function(t, e, i, n) {
          return i + (t - e) / (n.endTime - e) * (n.value - i)
      }
      ,
      S = function(t, e) {
          var i = Math.floor(e)
            , n = Math.ceil(e);
          return i === n ? t[i] : (1 - (e - i)) * t[i] + (1 - (n - e)) * t[n]
      }
      ,
      k = function(t, e) {
          var i = e.duration
            , n = e.startTime
            , s = e.values
            , r = (t - n) / i * (s.length - 1);
          return S(s, r)
      }
      ,
      C = function(t) {
          return "setTarget" === t.type
      }
      ,
      A = r(function t(e) {
          s(this, t),
          this._automationEvents = [],
          this._currenTime = 0,
          this._defaultValue = e
      }, [{
          key: Symbol.iterator,
          value: function() {
              return this._automationEvents[Symbol.iterator]()
          }
      }, {
          key: "add",
          value: function(t) {
              var e = x(t);
              if (y(t) || b(t)) {
                  var i = this._automationEvents.findIndex(function(i) {
                      return b(t) && m(i) ? i.startTime + i.duration >= e : x(i) >= e
                  })
                    , n = this._automationEvents[i];
                  if (-1 !== i && (this._automationEvents = this._automationEvents.slice(0, i)),
                  y(t)) {
                      var s = this._automationEvents[this._automationEvents.length - 1];
                      if (void 0 !== n && p(n)) {
                          if (void 0 !== s && C(s))
                              throw Error("The internal list is malformed.");
                          var r = void 0 === s ? n.insertTime : m(s) ? s.startTime + s.duration : x(s)
                            , c = void 0 === s ? this._defaultValue : m(s) ? s.values[s.values.length - 1] : s.value
                            , f = h(n) ? w(e, r, c, n) : T(e, r, c, n)
                            , g = h(n) ? a(f, e, this._currenTime) : o(f, e, this._currenTime);
                          this._automationEvents.push(g)
                      }
                      if (void 0 !== s && C(s) && this._automationEvents.push(l(this.getValue(e), e)),
                      void 0 !== s && m(s) && s.startTime + s.duration > e) {
                          var v = e - s.startTime
                            , S = (s.values.length - 1) / s.duration
                            , k = Math.max(2, 1 + Math.ceil(v * S))
                            , A = v / (k - 1) * S
                            , O = s.values.slice(0, k);
                          if (A < 1)
                              for (var M = 1; M < k; M += 1) {
                                  var E = A * M % 1;
                                  O[M] = s.values[M - 1] * (1 - E) + s.values[M] * E
                              }
                          this._automationEvents[this._automationEvents.length - 1] = u(O, s.startTime, v)
                      }
                  }
              } else {
                  var D = this._automationEvents.findIndex(function(t) {
                      return x(t) > e
                  })
                    , R = -1 === D ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[D - 1];
                  if (void 0 !== R && m(R) && x(R) + R.duration > e)
                      return !1;
                  var I = h(t) ? a(t.value, t.endTime, this._currenTime) : d(t) ? o(t.value, e, this._currenTime) : t;
                  if (-1 === D)
                      this._automationEvents.push(I);
                  else {
                      if (m(t) && e + t.duration > x(this._automationEvents[D]))
                          return !1;
                      this._automationEvents.splice(D, 0, I)
                  }
              }
              return !0
          }
      }, {
          key: "flush",
          value: function(t) {
              var e = this._automationEvents.findIndex(function(e) {
                  return x(e) > t
              });
              if (e > 1) {
                  var i = this._automationEvents.slice(e - 1)
                    , n = i[0];
                  C(n) && i.unshift(l(g(this._automationEvents, e - 2, n.startTime, this._defaultValue), n.startTime)),
                  this._automationEvents = i
              }
          }
      }, {
          key: "getValue",
          value: function(t) {
              if (0 === this._automationEvents.length)
                  return this._defaultValue;
              var e = this._automationEvents.findIndex(function(e) {
                  return x(e) > t
              })
                , i = this._automationEvents[e]
                , s = (-1 === e ? this._automationEvents.length : e) - 1
                , r = this._automationEvents[s];
              if (void 0 !== r && C(r) && (void 0 === i || !p(i) || i.insertTime > t))
                  return c(t, g(this._automationEvents, s - 1, r.startTime, this._defaultValue), r);
              if (void 0 !== r && f(r) && (void 0 === i || !p(i)))
                  return r.value;
              if (void 0 !== r && m(r) && (void 0 === i || !p(i) || r.startTime + r.duration > t))
                  return t < r.startTime + r.duration ? k(t, r) : r.values[r.values.length - 1];
              if (void 0 !== r && p(r) && (void 0 === i || !p(i)))
                  return r.value;
              if (void 0 !== i && h(i)) {
                  var a = n(v(this._automationEvents, s, r, i, this._defaultValue), 2);
                  return w(t, a[0], a[1], i)
              }
              if (void 0 !== i && d(i)) {
                  var o = n(v(this._automationEvents, s, r, i, this._defaultValue), 2);
                  return T(t, o[0], o[1], i)
              }
              return this._defaultValue
          }
      }]),
      e.AutomationEventList = A,
      e.createCancelAndHoldAutomationEvent = function(t) {
          return {
              cancelTime: t,
              type: "cancelAndHold"
          }
      }
      ,
      e.createCancelScheduledValuesAutomationEvent = function(t) {
          return {
              cancelTime: t,
              type: "cancelScheduledValues"
          }
      }
      ,
      e.createExponentialRampToValueAutomationEvent = function(t, e) {
          return {
              endTime: e,
              type: "exponentialRampToValue",
              value: t
          }
      }
      ,
      e.createLinearRampToValueAutomationEvent = function(t, e) {
          return {
              endTime: e,
              type: "linearRampToValue",
              value: t
          }
      }
      ,
      e.createSetTargetAutomationEvent = function(t, e, i) {
          return {
              startTime: e,
              target: t,
              timeConstant: i,
              type: "setTarget"
          }
      }
      ,
      e.createSetValueAutomationEvent = l,
      e.createSetValueCurveAutomationEvent = u
  },
  6038: function(t, e, i) {
      "use strict";
      function n(t) {
          if (void 0 === t)
              throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
      }
      function s(t, e) {
          t.prototype = Object.create(e.prototype),
          t.prototype.constructor = t,
          t.__proto__ = e
      }
      i.d(e, {
          p8: function() {
              return nF
          }
      });
      /*!
* GSAP 3.12.5
* https://gsap.com
*
* @license Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
      var r, a, o, l, u, c, h, d, p, f, m, g, v, y, b, x, w, T, S, k, C, A, O, M, E, D, R, I, P, V = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
              lineHeight: ""
          }
      }, j = {
          duration: .5,
          overwrite: !1,
          delay: 0
      }, N = 2 * Math.PI, F = N / 4, z = 0, q = Math.sqrt, B = Math.cos, L = Math.sin, W = function(t) {
          return "string" == typeof t
      }, U = function(t) {
          return "function" == typeof t
      }, Y = function(t) {
          return "number" == typeof t
      }, G = function(t) {
          return void 0 === t
      }, H = function(t) {
          return "object" == typeof t
      }, X = function(t) {
          return !1 !== t
      }, Z = function() {
          return "undefined" != typeof window
      }, $ = function(t) {
          return U(t) || W(t)
      }, Q = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
      , J = Array.isArray, K = /(?:-?\.?\d|\.)+/gi, tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ti = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, tn = /[+-]=-?[.\d]+/, ts = /[^,'"\[\]\s]+/gi, tr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ta = {}, to = {}, tl = function(t) {
          return (to = tN(t, ta)) && iD
      }, tu = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
      }, tc = function(t, e) {
          return !e && console.warn(t)
      }, th = function(t, e) {
          return t && (ta[t] = e) && to && (to[t] = e) || ta
      }, td = function() {
          return 0
      }, tp = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
      }, tf = {
          suppressEvents: !0,
          kill: !1
      }, tm = {
          suppressEvents: !0
      }, tg = {}, t_ = [], tv = {}, ty = {}, tb = {}, tx = 30, tw = [], tT = "", tS = function(t) {
          var e, i, n = t[0];
          if (H(n) || U(n) || (t = [t]),
          !(e = (n._gsap || {}).harness)) {
              for (i = tw.length; i-- && !tw[i].targetTest(n); )
                  ;
              e = tw[i]
          }
          for (i = t.length; i--; )
              t[i] && (t[i]._gsap || (t[i]._gsap = new eY(t[i],e))) || t.splice(i, 1);
          return t
      }, tk = function(t) {
          return t._gsap || tS(eo(t))[0]._gsap
      }, tC = function(t, e, i) {
          return (i = t[e]) && U(i) ? t[e]() : G(i) && t.getAttribute && t.getAttribute(e) || i
      }, tA = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
      }, tO = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
      }, tM = function(t) {
          return Math.round(1e7 * t) / 1e7 || 0
      }, tE = function(t, e) {
          var i = e.charAt(0)
            , n = parseFloat(e.substr(2));
          return t = parseFloat(t),
          "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
      }, tD = function(t, e) {
          for (var i = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < i; )
              ;
          return n < i
      }, tR = function() {
          var t, e, i = t_.length, n = t_.slice(0);
          for (t = 0,
          tv = {},
          t_.length = 0; t < i; t++)
              (e = n[t]) && e._eager && (e.render(e._eager[0], e._eager[1], !0)._eager = 0)
      }, tI = function(t, e, i, n) {
          t_.length && !k && tR(),
          t.render(e, i, n || k && e < 0 && (t._initted || t._startAt)),
          t_.length && !k && tR()
      }, tP = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(ts).length < 2 ? e : W(t) ? t.trim() : t
      }, tV = function(t) {
          return t
      }, tj = function(t, e) {
          for (var i in e)
              i in t || (t[i] = e[i]);
          return t
      }, tN = function(t, e) {
          for (var i in e)
              t[i] = e[i];
          return t
      }, tF = function t(e, i) {
          for (var n in i)
              "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = H(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
          return e
      }, tz = function(t, e) {
          var i, n = {};
          for (i in t)
              i in e || (n[i] = t[i]);
          return n
      }, tq = function(t) {
          var e, i = t.parent || A, n = t.keyframes ? (e = J(t.keyframes),
          function(t, i) {
              for (var n in i)
                  n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
          }
          ) : tj;
          if (X(t.inherit))
              for (; i; )
                  n(t, i.vars.defaults),
                  i = i.parent || i._dp;
          return t
      }, tB = function(t, e) {
          for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; )
              ;
          return i < 0
      }, tL = function(t, e, i, n, s) {
          void 0 === i && (i = "_first"),
          void 0 === n && (n = "_last");
          var r, a = t[n];
          if (s)
              for (r = e[s]; a && a[s] > r; )
                  a = a._prev;
          return a ? (e._next = a._next,
          a._next = e) : (e._next = t[i],
          t[i] = e),
          e._next ? e._next._prev = e : t[n] = e,
          e._prev = a,
          e.parent = e._dp = t,
          e
      }, tW = function(t, e, i, n) {
          void 0 === i && (i = "_first"),
          void 0 === n && (n = "_last");
          var s = e._prev
            , r = e._next;
          s ? s._next = r : t[i] === e && (t[i] = r),
          r ? r._prev = s : t[n] === e && (t[n] = s),
          e._next = e._prev = e.parent = null
      }, tU = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
          t._act = 0
      }, tY = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
              for (var i = t; i; )
                  i._dirty = 1,
                  i = i.parent;
          return t
      }, tG = function(t) {
          for (var e = t.parent; e && e.parent; )
              e._dirty = 1,
              e.totalDuration(),
              e = e.parent;
          return t
      }, tH = function(t, e, i, n) {
          return t._startAt && (k ? t._startAt.revert(tf) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
      }, tX = function(t) {
          return t._repeat ? tZ(t._tTime, t = t.duration() + t._rDelay) * t : 0
      }, tZ = function(t, e) {
          var i = Math.floor(t /= e);
          return t && i === t ? i - 1 : i
      }, t$ = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      }, tQ = function(t) {
          return t._end = tM(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
      }, tJ = function(t, e) {
          var i = t._dp;
          return i && i.smoothChildTiming && t._ts && (t._start = tM(i._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))),
          tQ(t),
          i._dirty || tY(i, t)),
          t
      }, tK = function(t, e) {
          var i;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = t$(t.rawTime(), e),
          (!e._dur || en(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)),
          tY(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
              if (t._dur < t.duration())
                  for (i = t; i._dp; )
                      i.rawTime() >= 0 && i.totalTime(i._tTime),
                      i = i._dp;
              t._zTime = -.00000001
          }
      }, t0 = function(t, e, i, n) {
          return e.parent && tU(e),
          e._start = tM((Y(i) ? i : i || t !== A ? et(t, i, e) : t._time) + e._delay),
          e._end = tM(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
          tL(t, e, "_first", "_last", t._sort ? "_start" : 0),
          t8(e) || (t._recent = e),
          n || tK(t, e),
          t._ts < 0 && tJ(t, t._tTime),
          t
      }, t1 = function(t, e) {
          return (ta.ScrollTrigger || tu("scrollTrigger", e)) && ta.ScrollTrigger.create(e, t)
      }, t2 = function(t, e, i, n, s) {
          return (e8(t, e, s),
          t._initted) ? !i && t._pt && !k && (t._dur && !1 !== t.vars.eager || !t._dur && t.vars.eager) && R !== eE.frame ? (t_.push(t),
          t._eager = [s, n],
          1) : void 0 : 1
      }, t3 = function t(e) {
          var i = e.parent;
          return i && i._ts && i._initted && !i._lock && (0 > i.rawTime() || t(i))
      }, t8 = function(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
      }, t5 = function(t, e, i, n) {
          var s, r, a, o = t.ratio, l = e < 0 || !e && (!t._start && t3(t) && !(!t._initted && t8(t)) || (t._ts < 0 || t._dp._ts < 0) && !t8(t)) ? 0 : 1, u = t._rDelay, c = 0;
          if (u && t._repeat && (r = tZ(c = en(0, t._tDur, e), u),
          t._yoyo && 1 & r && (l = 1 - l),
          r !== tZ(t._tTime, u) && (o = 1 - l,
          t.vars.repeatRefresh && t._initted && t.invalidate())),
          l !== o || k || n || 1e-8 === t._zTime || !e && t._zTime) {
              if (!t._initted && t2(t, e, n, i, c))
                  return;
              for (a = t._zTime,
              t._zTime = e || (i ? 1e-8 : 0),
              i || (i = e && !a),
              t.ratio = l,
              t._from && (l = 1 - l),
              t._time = 0,
              t._tTime = c,
              s = t._pt; s; )
                  s.r(l, s.d),
                  s = s._next;
              e < 0 && tH(t, e, i, !0),
              t._onUpdate && !i && ev(t, "onUpdate"),
              c && t._repeat && !i && t.parent && ev(t, "onRepeat"),
              (e >= t._tDur || e < 0) && t.ratio === l && (l && tU(t, 1),
              i || k || (ev(t, l ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()))
          } else
              t._zTime || (t._zTime = e)
      }, t4 = function(t, e, i) {
          var n;
          if (i > e)
              for (n = t._first; n && n._start <= i; ) {
                  if ("isPause" === n.data && n._start > e)
                      return n;
                  n = n._next
              }
          else
              for (n = t._last; n && n._start >= i; ) {
                  if ("isPause" === n.data && n._start < e)
                      return n;
                  n = n._prev
              }
      }, t6 = function(t, e, i, n) {
          var s = t._repeat
            , r = tM(e) || 0
            , a = t._tTime / t._tDur;
          return a && !n && (t._time *= r / t._dur),
          t._dur = r,
          t._tDur = s ? s < 0 ? 1e10 : tM(r * (s + 1) + t._rDelay * s) : r,
          a > 0 && !n && tJ(t, t._tTime = t._tDur * a),
          t.parent && tQ(t),
          i || tY(t.parent, t),
          t
      }, t9 = function(t) {
          return t instanceof eH ? tY(t) : t6(t, t._dur)
      }, t7 = {
          _start: 0,
          endTime: td,
          totalDuration: td
      }, et = function t(e, i, n) {
          var s, r, a, o = e.labels, l = e._recent || t7, u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
          return W(i) && (isNaN(i) || i in o) ? (r = i.charAt(0),
          a = "%" === i.substr(-1),
          s = i.indexOf("="),
          "<" === r || ">" === r) ? (s >= 0 && (i = i.replace(/=/, "")),
          ("<" === r ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (a ? (s < 0 ? l : n).totalDuration() / 100 : 1)) : s < 0 ? (i in o || (o[i] = u),
          o[i]) : (r = parseFloat(i.charAt(s - 1) + i.substr(s + 1)),
          a && n && (r = r / 100 * (J(n) ? n[0] : n).totalDuration()),
          s > 1 ? t(e, i.substr(0, s - 1), n) + r : u + r) : null == i ? u : +i
      }, ee = function(t, e, i) {
          var n, s, r = Y(e[1]), a = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
          if (r && (o.duration = e[1]),
          o.parent = i,
          t) {
              for (n = o,
              s = i; s && !("immediateRender"in n); )
                  n = s.vars.defaults || {},
                  s = X(s.vars.inherit) && s.parent;
              o.immediateRender = X(n.immediateRender),
              t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
          }
          return new ie(e[0],o,e[a + 1])
      }, ei = function(t, e) {
          return t || 0 === t ? e(t) : e
      }, en = function(t, e, i) {
          return i < t ? t : i > e ? e : i
      }, es = function(t, e) {
          return W(t) && (e = tr.exec(t)) ? e[1] : ""
      }, er = [].slice, ea = function(t, e) {
          return t && H(t) && "length"in t && (!e && !t.length || t.length - 1 in t && H(t[0])) && !t.nodeType && t !== O
      }, eo = function(t, e, i) {
          var n;
          return C && !e && C.selector ? C.selector(t) : W(t) && !i && (M || !eD()) ? er.call((e || E).querySelectorAll(t), 0) : J(t) ? (void 0 === n && (n = []),
          t.forEach(function(t) {
              var e;
              return W(t) && !i || ea(t, 1) ? (e = n).push.apply(e, eo(t)) : n.push(t)
          }) || n) : ea(t) ? er.call(t, 0) : t ? [t] : []
      }, el = function(t) {
          return t = eo(t)[0] || tc("Invalid scope") || {},
          function(e) {
              var i = t.current || t.nativeElement || t;
              return eo(e, i.querySelectorAll ? i : i === t ? tc("Invalid scope") || E.createElement("div") : t)
          }
      }, eu = function(t) {
          return t.sort(function() {
              return .5 - Math.random()
          })
      }, ec = function(t) {
          if (U(t))
              return t;
          var e = H(t) ? t : {
              each: t
          }
            , i = eq(e.ease)
            , n = e.from || 0
            , s = parseFloat(e.base) || 0
            , r = {}
            , a = n > 0 && n < 1
            , o = isNaN(n) || a
            , l = e.axis
            , u = n
            , c = n;
          return W(n) ? u = c = ({
              center: .5,
              edges: .5,
              end: 1
          })[n] || 0 : !a && o && (u = n[0],
          c = n[1]),
          function(t, a, h) {
              var d, p, f, m, g, v, y, b, x, w = (h || e).length, T = r[w];
              if (!T) {
                  if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                      for (y = -1e8; y < (y = h[x++].getBoundingClientRect().left) && x < w; )
                          ;
                      x < w && x--
                  }
                  for (v = 0,
                  T = r[w] = [],
                  d = o ? Math.min(x, w) * u - .5 : n % x,
                  p = 1e8 === x ? 0 : o ? w * c / x - .5 : n / x | 0,
                  y = 0,
                  b = 1e8; v < w; v++)
                      f = v % x - d,
                      m = p - (v / x | 0),
                      T[v] = g = l ? Math.abs("y" === l ? m : f) : q(f * f + m * m),
                      g > y && (y = g),
                      g < b && (b = g);
                  "random" === n && eu(T),
                  T.max = y - b,
                  T.min = b,
                  T.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : l ? "y" === l ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === n ? -1 : 1),
                  T.b = w < 0 ? s - w : s,
                  T.u = es(e.amount || e.each) || 0,
                  i = i && w < 0 ? eF(i) : i
              }
              return w = (T[t] - T.min) / T.max || 0,
              tM(T.b + (i ? i(w) : w) * T.v) + T.u
          }
      }, eh = function(t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function(i) {
              var n = tM(Math.round(parseFloat(i) / t) * t * e);
              return (n - n % 1) / e + (Y(i) ? 0 : es(i))
          }
      }, ed = function(t, e) {
          var i, n, s = J(t);
          return !s && H(t) && (i = s = t.radius || 1e8,
          t.values ? (n = !Y((t = eo(t.values))[0])) && (i *= i) : t = eh(t.increment)),
          ei(e, s ? U(t) ? function(e) {
              return Math.abs((n = t(e)) - e) <= i ? n : e
          }
          : function(e) {
              for (var s, r, a = parseFloat(n ? e.x : e), o = parseFloat(n ? e.y : 0), l = 1e8, u = 0, c = t.length; c--; )
                  (s = n ? (s = t[c].x - a) * s + (r = t[c].y - o) * r : Math.abs(t[c] - a)) < l && (l = s,
                  u = c);
              return u = !i || l <= i ? t[u] : e,
              n || u === e || Y(e) ? u : u + es(e)
          }
          : eh(t))
      }, ep = function(t, e, i, n) {
          return ei(J(t) ? !e : !0 === i ? (i = 0,
          !1) : !n, function() {
              return J(t) ? t[~~(Math.random() * t.length)] : (n = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
          })
      }, ef = function(t, e, i) {
          return ei(i, function(i) {
              return t[~~e(i)]
          })
      }, em = function(t) {
          for (var e, i, n, s, r = 0, a = ""; ~(e = t.indexOf("random(", r)); )
              n = t.indexOf(")", e),
              s = "[" === t.charAt(e + 7),
              i = t.substr(e + 7, n - e - 7).match(s ? ts : K),
              a += t.substr(r, e - r) + ep(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5),
              r = n + 1;
          return a + t.substr(r, t.length - r)
      }, eg = function(t, e, i, n, s) {
          var r = e - t
            , a = n - i;
          return ei(s, function(e) {
              return i + ((e - t) / r * a || 0)
          })
      }, e_ = function(t, e, i) {
          var n, s, r, a = t.labels, o = 1e8;
          for (n in a)
              (s = a[n] - e) < 0 == !!i && s && o > (s = Math.abs(s)) && (r = n,
              o = s);
          return r
      }, ev = function(t, e, i) {
          var n, s, r, a = t.vars, o = a[e], l = C, u = t._ctx;
          if (o)
              return n = a[e + "Params"],
              s = a.callbackScope || t,
              i && t_.length && tR(),
              u && (C = u),
              r = n ? o.apply(s, n) : o.call(s),
              C = l,
              r
      }, ey = function(t) {
          return tU(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!k),
          1 > t.progress() && ev(t, "onInterrupt"),
          t
      }, eb = [], ex = function(t) {
          if (t) {
              if (t = !t.name && t.default || t,
              Z() || t.headless) {
                  var e = t.name
                    , i = U(t)
                    , n = e && !i && t.init ? function() {
                      this._props = []
                  }
                  : t
                    , s = {
                      init: td,
                      render: ih,
                      add: e1,
                      kill: ip,
                      modifier: id,
                      rawVars: 0
                  }
                    , r = {
                      targetTest: 0,
                      get: 0,
                      getSetter: io,
                      aliases: {},
                      register: 0
                  };
                  if (eD(),
                  t !== n) {
                      if (ty[e])
                          return;
                      tj(n, tj(tz(t, s), r)),
                      tN(n.prototype, tN(s, tz(t, r))),
                      ty[n.prop = e] = n,
                      t.targetTest && (tw.push(n),
                      tg[e] = 1),
                      e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                  }
                  th(e, n),
                  t.register && t.register(iD, n, i_)
              } else
                  eb.push(t)
          }
      }, ew = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0]
      }, eT = function(t, e, i) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
      }, eS = function(t, e, i) {
          var n, s, r, a, o, l, u, c, h, d, p = t ? Y(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ew.black;
          if (!p) {
              if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
              ew[t])
                  p = ew[t];
              else if ("#" === t.charAt(0)) {
                  if (t.length < 6 && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (r = t.charAt(3)) + r + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                  9 === t.length)
                      return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                  p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
              } else if ("hsl" === t.substr(0, 3)) {
                  if (p = d = t.match(K),
                  e) {
                      if (~t.indexOf("="))
                          return p = t.match(tt),
                          i && p.length < 4 && (p[3] = 1),
                          p
                  } else
                      a = +p[0] % 360 / 360,
                      o = +p[1] / 100,
                      s = (l = +p[2] / 100) <= .5 ? l * (o + 1) : l + o - l * o,
                      n = 2 * l - s,
                      p.length > 3 && (p[3] *= 1),
                      p[0] = eT(a + 1 / 3, n, s),
                      p[1] = eT(a, n, s),
                      p[2] = eT(a - 1 / 3, n, s)
              } else
                  p = t.match(K) || ew.transparent;
              p = p.map(Number)
          }
          return e && !d && (l = ((u = Math.max(n = p[0] / 255, s = p[1] / 255, r = p[2] / 255)) + (c = Math.min(n, s, r))) / 2,
          u === c ? a = o = 0 : (h = u - c,
          o = l > .5 ? h / (2 - u - c) : h / (u + c),
          a = (u === n ? (s - r) / h + (s < r ? 6 : 0) : u === s ? (r - n) / h + 2 : (n - s) / h + 4) * 60),
          p[0] = ~~(a + .5),
          p[1] = ~~(100 * o + .5),
          p[2] = ~~(100 * l + .5)),
          i && p.length < 4 && (p[3] = 1),
          p
      }, ek = function(t) {
          var e = []
            , i = []
            , n = -1;
          return t.split(eA).forEach(function(t) {
              var s = t.match(te) || [];
              e.push.apply(e, s),
              i.push(n += s.length + 1)
          }),
          e.c = i,
          e
      }, eC = function(t, e, i) {
          var n, s, r, a, o = "", l = (t + o).match(eA), u = e ? "hsla(" : "rgba(", c = 0;
          if (!l)
              return t;
          if (l = l.map(function(t) {
              return (t = eS(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
          }),
          i && (r = ek(t),
          (n = i.c).join(o) !== r.c.join(o)))
              for (a = (s = t.replace(eA, "1").split(te)).length - 1; c < a; c++)
                  o += s[c] + (~n.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (r.length ? r : l.length ? l : i).shift());
          if (!s)
              for (a = (s = t.split(eA)).length - 1; c < a; c++)
                  o += s[c] + l[c];
          return o + s[a]
      }, eA = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ew)
              e += "|" + t + "\\b";
          return RegExp(e + ")", "gi")
      }(), eO = /hsl[a]?\(/, eM = function(t) {
          var e, i = t.join(" ");
          if (eA.lastIndex = 0,
          eA.test(i))
              return e = eO.test(i),
              t[1] = eC(t[1], e),
              t[0] = eC(t[0], e, ek(t[1])),
              !0
      }, eE = (f = Date.now,
      m = 500,
      g = 33,
      y = v = f(),
      b = 1e3 / 240,
      x = 1e3 / 240,
      w = [],
      T = function t(e) {
          var i, n, s, r, a = f() - y, o = !0 === e;
          if ((a > m || a < 0) && (v += a - g),
          y += a,
          ((i = (s = y - v) - x) > 0 || o) && (r = ++h.frame,
          d = s - 1e3 * h.time,
          h.time = s /= 1e3,
          x += i + (i >= b ? 4 : b - i),
          n = 1),
          o || (l = u(t)),
          n)
              for (p = 0; p < w.length; p++)
                  w[p](s, d, r, e)
      }
      ,
      h = {
          time: 0,
          frame: 0,
          tick: function() {
              T(!0)
          },
          deltaRatio: function(t) {
              return d / (1e3 / (t || 60))
          },
          wake: function() {
              D && (!M && Z() && (E = (O = M = window).document || {},
              ta.gsap = iD,
              (O.gsapVersions || (O.gsapVersions = [])).push(iD.version),
              tl(to || O.GreenSockGlobals || !O.gsap && O || {}),
              eb.forEach(ex)),
              c = "undefined" != typeof requestAnimationFrame && requestAnimationFrame,
              l && h.sleep(),
              u = c || function(t) {
                  return setTimeout(t, x - 1e3 * h.time + 1 | 0)
              }
              ,
              P = 1,
              T(2))
          },
          sleep: function() {
              (c ? cancelAnimationFrame : clearTimeout)(l),
              P = 0,
              u = td
          },
          lagSmoothing: function(t, e) {
              g = Math.min(e || 33, m = t || 1 / 0)
          },
          fps: function(t) {
              b = 1e3 / (t || 240),
              x = 1e3 * h.time + b
          },
          add: function(t, e, i) {
              var n = e ? function(e, i, s, r) {
                  t(e, i, s, r),
                  h.remove(n)
              }
              : t;
              return h.remove(t),
              w[i ? "unshift" : "push"](n),
              eD(),
              n
          },
          remove: function(t, e) {
              ~(e = w.indexOf(t)) && w.splice(e, 1) && p >= e && p--
          },
          _listeners: w
      }), eD = function() {
          return !P && eE.wake()
      }, eR = {}, eI = /^[\d.\-M][\d.\-,\s]/, eP = /["']/g, eV = function(t) {
          for (var e, i, n, s = {}, r = t.substr(1, t.length - 3).split(":"), a = r[0], o = 1, l = r.length; o < l; o++)
              i = r[o],
              e = o !== l - 1 ? i.lastIndexOf(",") : i.length,
              n = i.substr(0, e),
              s[a] = isNaN(n) ? n.replace(eP, "").trim() : +n,
              a = i.substr(e + 1).trim();
          return s
      }, ej = function(t) {
          var e = t.indexOf("(") + 1
            , i = t.indexOf(")")
            , n = t.indexOf("(", e);
          return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i)
      }, eN = function(t) {
          var e = (t + "").split("(")
            , i = eR[e[0]];
          return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [eV(e[1])] : ej(t).split(",").map(tP)) : eR._CE && eI.test(t) ? eR._CE("", t) : i
      }, eF = function(t) {
          return function(e) {
              return 1 - t(1 - e)
          }
      }, ez = function t(e, i) {
          for (var n, s = e._first; s; )
              s instanceof eH ? t(s, i) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === i || (s.timeline ? t(s.timeline, i) : (n = s._ease,
              s._ease = s._yEase,
              s._yEase = n,
              s._yoyo = i)),
              s = s._next
      }, eq = function(t, e) {
          return t && (U(t) ? t : eR[t] || eN(t)) || e
      }, eB = function(t, e, i, n) {
          void 0 === i && (i = function(t) {
              return 1 - e(1 - t)
          }
          ),
          void 0 === n && (n = function(t) {
              return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
          }
          );
          var s, r = {
              easeIn: e,
              easeOut: i,
              easeInOut: n
          };
          return tA(t, function(t) {
              for (var e in eR[t] = ta[t] = r,
              eR[s = t.toLowerCase()] = i,
              r)
                  eR[s + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = eR[t + "." + e] = r[e]
          }),
          r
      }, eL = function(t) {
          return function(e) {
              return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
          }
      }, eW = function t(e, i, n) {
          var s = i >= 1 ? i : 1
            , r = (n || (e ? .3 : .45)) / (i < 1 ? i : 1)
            , a = r / N * (Math.asin(1 / s) || 0)
            , o = function(t) {
              return 1 === t ? 1 : s * Math.pow(2, -10 * t) * L((t - a) * r) + 1
          }
            , l = "out" === e ? o : "in" === e ? function(t) {
              return 1 - o(1 - t)
          }
          : eL(o);
          return r = N / r,
          l.config = function(i, n) {
              return t(e, i, n)
          }
          ,
          l
      }, eU = function t(e, i) {
          void 0 === i && (i = 1.70158);
          var n = function(t) {
              return t ? --t * t * ((i + 1) * t + i) + 1 : 0
          }
            , s = "out" === e ? n : "in" === e ? function(t) {
              return 1 - n(1 - t)
          }
          : eL(n);
          return s.config = function(i) {
              return t(e, i)
          }
          ,
          s
      };
      tA("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
          var i = e < 5 ? e + 1 : e;
          eB(t + ",Power" + (i - 1), e ? function(t) {
              return Math.pow(t, i)
          }
          : function(t) {
              return t
          }
          , function(t) {
              return 1 - Math.pow(1 - t, i)
          }, function(t) {
              return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2
          })
      }),
      eR.Linear.easeNone = eR.none = eR.Linear.easeIn,
      eB("Elastic", eW("in"), eW("out"), eW()),
      eZ = 2 * (eX = 1 / 2.75),
      e$ = 2.5 * eX,
      eB("Bounce", function(t) {
          return 1 - eQ(1 - t)
      }, eQ = function(t) {
          return t < eX ? 7.5625 * t * t : t < eZ ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < e$ ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
      }
      ),
      eB("Expo", function(t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0
      }),
      eB("Circ", function(t) {
          return -(q(1 - t * t) - 1)
      }),
      eB("Sine", function(t) {
          return 1 === t ? 1 : -B(t * F) + 1
      }),
      eB("Back", eU("in"), eU("out"), eU()),
      eR.SteppedEase = eR.steps = ta.SteppedEase = {
          config: function(t, e) {
              void 0 === t && (t = 1);
              var i = 1 / t
                , n = t + (e ? 0 : 1)
                , s = e ? 1 : 0;
              return function(t) {
                  return ((n * en(0, .99999999, t) | 0) + s) * i
              }
          }
      },
      j.ease = eR["quad.out"],
      tA("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
          return tT += t + "," + t + "Params,"
      });
      var eY = function(t, e) {
          this.id = z++,
          t._gsap = this,
          this.target = t,
          this.harness = e,
          this.get = e ? e.get : tC,
          this.set = e ? e.getSetter : io
      }
        , eG = function() {
          function t(t) {
              this.vars = t,
              this._delay = +t.delay || 0,
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
              this._yoyo = !!t.yoyo || !!t.yoyoEase),
              this._ts = 1,
              t6(this, +t.duration, 1, 1),
              this.data = t.data,
              C && (this._ctx = C,
              C.data.push(this)),
              P || eE.wake()
          }
          var e = t.prototype;
          return e.delay = function(t) {
              return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
              this._delay = t,
              this) : this._delay
          }
          ,
          e.duration = function(t) {
              return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }
          ,
          e.totalDuration = function(t) {
              return arguments.length ? (this._dirty = 0,
              t6(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }
          ,
          e.totalTime = function(t, e) {
              if (eD(),
              !arguments.length)
                  return this._tTime;
              var i = this._dp;
              if (i && i.smoothChildTiming && this._ts) {
                  for (tJ(this, t),
                  !i._dp || i.parent || tK(i, this); i && i.parent; )
                      i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : -((i.totalDuration() - i._tTime) / i._ts)) && i.totalTime(i._tTime, !0),
                      i = i.parent;
                  !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && t0(this._dp, this, this._start - this._delay)
              }
              return this._tTime === t && (this._dur || e) && (!this._initted || 1e-8 !== Math.abs(this._zTime)) && (t || this._initted || !this.add && !this._ptLookup) || (this._ts || (this._pTime = t),
              tI(this, t, e)),
              this
          }
          ,
          e.time = function(t, e) {
              return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + tX(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }
          ,
          e.totalProgress = function(t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }
          ,
          e.progress = function(t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + tX(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }
          ,
          e.iteration = function(t, e) {
              var i = this.duration() + this._rDelay;
              return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? tZ(this._tTime, i) + 1 : 1
          }
          ,
          e.timeScale = function(t, e) {
              if (!arguments.length)
                  return -.00000001 === this._rts ? 0 : this._rts;
              if (this._rts === t)
                  return this;
              var i = this.parent && this._ts ? t$(this.parent._time, this) : this._tTime;
              return this._rts = +t || 0,
              this._ts = this._ps || -.00000001 === t ? 0 : this._rts,
              this.totalTime(en(-Math.abs(this._delay), this._tDur, i), !1 !== e),
              tQ(this),
              tG(this)
          }
          ,
          e.paused = function(t) {
              return arguments.length ? (this._ps !== t && (this._ps = t,
              t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
              this._ts = this._act = 0) : (eD(),
              this._ts = this._rts,
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
              this) : this._ps
          }
          ,
          e.startTime = function(t) {
              if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return e && (e._sort || !this.parent) && t0(e, this, t - this._delay),
                  this
              }
              return this._start
          }
          ,
          e.endTime = function(t) {
              return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }
          ,
          e.rawTime = function(t) {
              var e = this.parent || this._dp;
              return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? t$(e.rawTime(t), this) : this._tTime : this._tTime
          }
          ,
          e.revert = function(t) {
              void 0 === t && (t = tm);
              var e = k;
              return k = t,
              (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
              this.totalTime(-.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              k = e,
              this
          }
          ,
          e.globalTime = function(t) {
              for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
                  i = e._start + i / (Math.abs(e._ts) || 1),
                  e = e._dp;
              return !this.parent && this._sat ? this._sat.globalTime(t) : i
          }
          ,
          e.repeat = function(t) {
              return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
              t9(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }
          ,
          e.repeatDelay = function(t) {
              if (arguments.length) {
                  var e = this._time;
                  return this._rDelay = t,
                  t9(this),
                  e ? this.time(e) : this
              }
              return this._rDelay
          }
          ,
          e.yoyo = function(t) {
              return arguments.length ? (this._yoyo = t,
              this) : this._yoyo
          }
          ,
          e.seek = function(t, e) {
              return this.totalTime(et(this, t), X(e))
          }
          ,
          e.restart = function(t, e) {
              return this.play().totalTime(t ? -this._delay : 0, X(e))
          }
          ,
          e.play = function(t, e) {
              return null != t && this.seek(t, e),
              this.reversed(!1).paused(!1)
          }
          ,
          e.reverse = function(t, e) {
              return null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
          }
          ,
          e.pause = function(t, e) {
              return null != t && this.seek(t, e),
              this.paused(!0)
          }
          ,
          e.resume = function() {
              return this.paused(!1)
          }
          ,
          e.reversed = function(t) {
              return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -.00000001 : 0)),
              this) : this._rts < 0
          }
          ,
          e.invalidate = function() {
              return this._initted = this._act = 0,
              this._zTime = -.00000001,
              this
          }
          ,
          e.isActive = function() {
              var t, e = this.parent || this._dp, i = this._start;
              return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8)
          }
          ,
          e.eventCallback = function(t, e, i) {
              var n = this.vars;
              return arguments.length > 1 ? (e ? (n[t] = e,
              i && (n[t + "Params"] = i),
              "onUpdate" === t && (this._onUpdate = e)) : delete n[t],
              this) : n[t]
          }
          ,
          e.then = function(t) {
              var e = this;
              return new Promise(function(i) {
                  var n = U(t) ? t : tV
                    , s = function() {
                      var t = e.then;
                      e.then = null,
                      U(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      i(n),
                      e.then = t
                  };
                  e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
              }
              )
          }
          ,
          e.kill = function() {
              ey(this)
          }
          ,
          t
      }();
      tj(eG.prototype, {
          _time: 0,
          _start: 0,
          _end: 0,
          _tTime: 0,
          _tDur: 0,
          _dirty: 0,
          _repeat: 0,
          _yoyo: !1,
          parent: null,
          _initted: !1,
          _rDelay: 0,
          _ts: 1,
          _dp: 0,
          ratio: 0,
          _zTime: -.00000001,
          _prom: 0,
          _ps: !1,
          _rts: 1
      });
      var eH = function(t) {
          function e(e, i) {
              var s;
              return void 0 === e && (e = {}),
              (s = t.call(this, e) || this).labels = {},
              s.smoothChildTiming = !!e.smoothChildTiming,
              s.autoRemoveChildren = !!e.autoRemoveChildren,
              s._sort = X(e.sortChildren),
              A && t0(e.parent || A, n(s), i),
              e.reversed && s.reverse(),
              e.paused && s.paused(!0),
              e.scrollTrigger && t1(n(s), e.scrollTrigger),
              s
          }
          s(e, t);
          var i = e.prototype;
          return i.to = function(t, e, i) {
              return ee(0, arguments, this),
              this
          }
          ,
          i.from = function(t, e, i) {
              return ee(1, arguments, this),
              this
          }
          ,
          i.fromTo = function(t, e, i, n) {
              return ee(2, arguments, this),
              this
          }
          ,
          i.set = function(t, e, i) {
              return e.duration = 0,
              e.parent = this,
              tq(e).repeatDelay || (e.repeat = 0),
              e.immediateRender = !!e.immediateRender,
              new ie(t,e,et(this, i),1),
              this
          }
          ,
          i.call = function(t, e, i) {
              return t0(this, ie.delayedCall(0, t, e), i)
          }
          ,
          i.staggerTo = function(t, e, i, n, s, r, a) {
              return i.duration = e,
              i.stagger = i.stagger || n,
              i.onComplete = r,
              i.onCompleteParams = a,
              i.parent = this,
              new ie(t,i,et(this, s)),
              this
          }
          ,
          i.staggerFrom = function(t, e, i, n, s, r, a) {
              return i.runBackwards = 1,
              tq(i).immediateRender = X(i.immediateRender),
              this.staggerTo(t, e, i, n, s, r, a)
          }
          ,
          i.staggerFromTo = function(t, e, i, n, s, r, a, o) {
              return n.startAt = i,
              tq(n).immediateRender = X(n.immediateRender),
              this.staggerTo(t, e, n, s, r, a, o)
          }
          ,
          i.render = function(t, e, i) {
              var n, s, r, a, o, l, u, c, h, d, p, f, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, y = t <= 0 ? 0 : tM(t), b = this._zTime < 0 != t < 0 && (this._initted || !v);
              if (this !== A && y > g && t >= 0 && (y = g),
              y !== this._tTime || i || b) {
                  if (m !== this._time && v && (y += this._time - m,
                  t += this._time - m),
                  n = y,
                  h = this._start,
                  l = !(c = this._ts),
                  b && (v || (m = this._zTime),
                  (t || !e) && (this._zTime = t)),
                  this._repeat) {
                      if (p = this._yoyo,
                      o = v + this._rDelay,
                      this._repeat < -1 && t < 0)
                          return this.totalTime(100 * o + t, e, i);
                      if (n = tM(y % o),
                      y === g ? (a = this._repeat,
                      n = v) : ((a = ~~(y / o)) && a === y / o && (n = v,
                      a--),
                      n > v && (n = v)),
                      d = tZ(this._tTime, o),
                      !m && this._tTime && d !== a && this._tTime - d * o - this._dur <= 0 && (d = a),
                      p && 1 & a && (n = v - n,
                      f = 1),
                      a !== d && !this._lock) {
                          var x = p && 1 & d
                            , w = x === (p && 1 & a);
                          if (a < d && (x = !x),
                          m = x ? 0 : y % v ? v : y,
                          this._lock = 1,
                          this.render(m || (f ? 0 : tM(a * o)), e, !v)._lock = 0,
                          this._tTime = y,
                          !e && this.parent && ev(this, "onRepeat"),
                          this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                          m && m !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                          g = this._tDur,
                          w && (this._lock = 2,
                          m = x ? v : -.0001,
                          this.render(m, !0),
                          this.vars.repeatRefresh && !f && this.invalidate()),
                          this._lock = 0,
                          !this._ts && !l))
                              return this;
                          ez(this, f)
                      }
                  }
                  if (this._hasPause && !this._forcing && this._lock < 2 && (u = t4(this, tM(m), tM(n))) && (y -= n - (n = u._start)),
                  this._tTime = y,
                  this._time = n,
                  this._act = !c,
                  this._initted || (this._onUpdate = this.vars.onUpdate,
                  this._initted = 1,
                  this._zTime = t,
                  m = 0),
                  !m && n && !e && !a && (ev(this, "onStart"),
                  this._tTime !== y))
                      return this;
                  if (n >= m && t >= 0)
                      for (s = this._first; s; ) {
                          if (r = s._next,
                          (s._act || n >= s._start) && s._ts && u !== s) {
                              if (s.parent !== this)
                                  return this.render(t, e, i);
                              if (s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, i),
                              n !== this._time || !this._ts && !l) {
                                  u = 0,
                                  r && (y += this._zTime = -.00000001);
                                  break
                              }
                          }
                          s = r
                      }
                  else {
                      s = this._last;
                      for (var T = t < 0 ? t : n; s; ) {
                          if (r = s._prev,
                          (s._act || T <= s._end) && s._ts && u !== s) {
                              if (s.parent !== this)
                                  return this.render(t, e, i);
                              if (s.render(s._ts > 0 ? (T - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (T - s._start) * s._ts, e, i || k && (s._initted || s._startAt)),
                              n !== this._time || !this._ts && !l) {
                                  u = 0,
                                  r && (y += this._zTime = T ? -.00000001 : 1e-8);
                                  break
                              }
                          }
                          s = r
                      }
                  }
                  if (u && !e && (this.pause(),
                  u.render(n >= m ? 0 : -.00000001)._zTime = n >= m ? 1 : -1,
                  this._ts))
                      return this._start = h,
                      tQ(this),
                      this.render(t, e, i);
                  this._onUpdate && !e && ev(this, "onUpdate", !0),
                  (y === g && this._tTime >= this.totalDuration() || !y && m) && (h === this._start || Math.abs(c) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && tU(this, 1),
                  e || t < 0 && !m || !y && !m && g || (ev(this, y === g && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                  this._prom && !(y < g && this.timeScale() > 0) && this._prom()))
              }
              return this
          }
          ,
          i.add = function(t, e) {
              var i = this;
              if (Y(e) || (e = et(this, e, t)),
              !(t instanceof eG)) {
                  if (J(t))
                      return t.forEach(function(t) {
                          return i.add(t, e)
                      }),
                      this;
                  if (W(t))
                      return this.addLabel(t, e);
                  if (!U(t))
                      return this;
                  t = ie.delayedCall(0, t)
              }
              return this !== t ? t0(this, t, e) : this
          }
          ,
          i.getChildren = function(t, e, i, n) {
              void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === i && (i = !0),
              void 0 === n && (n = -1e8);
              for (var s = [], r = this._first; r; )
                  r._start >= n && (r instanceof ie ? e && s.push(r) : (i && s.push(r),
                  t && s.push.apply(s, r.getChildren(!0, e, i)))),
                  r = r._next;
              return s
          }
          ,
          i.getById = function(t) {
              for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
                  if (e[i].vars.id === t)
                      return e[i]
          }
          ,
          i.remove = function(t) {
              return W(t) ? this.removeLabel(t) : U(t) ? this.killTweensOf(t) : (tW(this, t),
              t === this._recent && (this._recent = this._last),
              tY(this))
          }
          ,
          i.totalTime = function(e, i) {
              return arguments.length ? (this._forcing = 1,
              !this._dp && this._ts && (this._start = tM(eE.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))),
              t.prototype.totalTime.call(this, e, i),
              this._forcing = 0,
              this) : this._tTime
          }
          ,
          i.addLabel = function(t, e) {
              return this.labels[t] = et(this, e),
              this
          }
          ,
          i.removeLabel = function(t) {
              return delete this.labels[t],
              this
          }
          ,
          i.addPause = function(t, e, i) {
              var n = ie.delayedCall(0, e || td, i);
              return n.data = "isPause",
              this._hasPause = 1,
              t0(this, n, et(this, t))
          }
          ,
          i.removePause = function(t) {
              var e = this._first;
              for (t = et(this, t); e; )
                  e._start === t && "isPause" === e.data && tU(e),
                  e = e._next
          }
          ,
          i.killTweensOf = function(t, e, i) {
              for (var n = this.getTweensOf(t, i), s = n.length; s--; )
                  eJ !== n[s] && n[s].kill(t, e);
              return this
          }
          ,
          i.getTweensOf = function(t, e) {
              for (var i, n = [], s = eo(t), r = this._first, a = Y(e); r; )
                  r instanceof ie ? tD(r._targets, s) && (a ? (!eJ || r._initted && r._ts) && r.globalTime(0) <= e && r.globalTime(r.totalDuration()) > e : !e || r.isActive()) && n.push(r) : (i = r.getTweensOf(s, e)).length && n.push.apply(n, i),
                  r = r._next;
              return n
          }
          ,
          i.tweenTo = function(t, e) {
              e = e || {};
              var i, n = this, s = et(n, t), r = e, a = r.startAt, o = r.onStart, l = r.onStartParams, u = r.immediateRender, c = ie.to(n, tj({
                  ease: e.ease || "none",
                  eager: !1,
                  immediateRender: !1,
                  time: s,
                  overwrite: "auto",
                  duration: e.duration || Math.abs((s - (a && "time"in a ? a.time : n._time)) / n.timeScale()) || 1e-8,
                  onStart: function() {
                      if (n.pause(),
                      !i) {
                          var t = e.duration || Math.abs((s - (a && "time"in a ? a.time : n._time)) / n.timeScale());
                          c._dur !== t && t6(c, t, 0, 1).render(c._time, !0, !0),
                          i = 1
                      }
                      o && o.apply(c, l || [])
                  }
              }, e));
              return u ? c.render(0) : c
          }
          ,
          i.tweenFromTo = function(t, e, i) {
              return this.tweenTo(e, tj({
                  startAt: {
                      time: et(this, t)
                  }
              }, i))
          }
          ,
          i.recent = function() {
              return this._recent
          }
          ,
          i.nextLabel = function(t) {
              return void 0 === t && (t = this._time),
              e_(this, et(this, t))
          }
          ,
          i.previousLabel = function(t) {
              return void 0 === t && (t = this._time),
              e_(this, et(this, t), 1)
          }
          ,
          i.currentLabel = function(t) {
              return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
          }
          ,
          i.shiftChildren = function(t, e, i) {
              void 0 === i && (i = 0);
              for (var n, s = this._first, r = this.labels; s; )
                  s._start >= i && (s._start += t,
                  s._end += t),
                  s = s._next;
              if (e)
                  for (n in r)
                      r[n] >= i && (r[n] += t);
              return tY(this)
          }
          ,
          i.invalidate = function(e) {
              var i = this._first;
              for (this._lock = 0; i; )
                  i.invalidate(e),
                  i = i._next;
              return t.prototype.invalidate.call(this, e)
          }
          ,
          i.clear = function(t) {
              void 0 === t && (t = !0);
              for (var e, i = this._first; i; )
                  e = i._next,
                  this.remove(i),
                  i = e;
              return this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              tY(this)
          }
          ,
          i.totalDuration = function(t) {
              var e, i, n, s = 0, r = this._last, a = 1e8;
              if (arguments.length)
                  return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
              if (this._dirty) {
                  for (n = this.parent; r; )
                      e = r._prev,
                      r._dirty && r.totalDuration(),
                      (i = r._start) > a && this._sort && r._ts && !this._lock ? (this._lock = 1,
                      t0(this, r, i - r._delay, 1)._lock = 0) : a = i,
                      i < 0 && r._ts && (s -= i,
                      (!n && !this._dp || n && n.smoothChildTiming) && (this._start += i / this._ts,
                      this._time -= i,
                      this._tTime -= i),
                      this.shiftChildren(-i, !1, -Infinity),
                      a = 0),
                      r._end > s && r._ts && (s = r._end),
                      r = e;
                  t6(this, this === A && this._time > s ? this._time : s, 1, 1),
                  this._dirty = 0
              }
              return this._tDur
          }
          ,
          e.updateRoot = function(t) {
              if (A._ts && (tI(A, t$(t, A)),
              R = eE.frame),
              eE.frame >= tx) {
                  tx += V.autoSleep || 120;
                  var e = A._first;
                  if ((!e || !e._ts) && V.autoSleep && eE._listeners.length < 2) {
                      for (; e && !e._ts; )
                          e = e._next;
                      e || eE.sleep()
                  }
              }
          }
          ,
          e
      }(eG);
      tj(eH.prototype, {
          _lock: 0,
          _hasPause: 0,
          _forcing: 0
      });
      var eX, eZ, e$, eQ, eJ, eK, e0 = function(t, e, i, n, s, r, a) {
          var o, l, u, c, h, d, p, f, m = new i_(this._pt,t,e,0,1,ic,null,s), g = 0, v = 0;
          for (m.b = i,
          m.e = n,
          i += "",
          n += "",
          (p = ~n.indexOf("random(")) && (n = em(n)),
          r && (r(f = [i, n], t, e),
          i = f[0],
          n = f[1]),
          l = i.match(ti) || []; o = ti.exec(n); )
              c = o[0],
              h = n.substring(g, o.index),
              u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1),
              c !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
              m._pt = {
                  _next: m._pt,
                  p: h || 1 === v ? h : ",",
                  s: d,
                  c: "=" === c.charAt(1) ? tE(d, c) - d : parseFloat(c) - d,
                  m: u && u < 4 ? Math.round : 0
              },
              g = ti.lastIndex);
          return m.c = g < n.length ? n.substring(g, n.length) : "",
          m.fp = a,
          (tn.test(n) || p) && (m.e = 0),
          this._pt = m,
          m
      }, e1 = function(t, e, i, n, s, r, a, o, l, u) {
          U(n) && (n = n(s || 0, t, r));
          var c, h = t[e], d = "get" !== i ? i : U(h) ? l ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h, p = U(h) ? l ? ir : is : ii;
          if (W(n) && (~n.indexOf("random(") && (n = em(n)),
          "=" === n.charAt(1) && ((c = tE(d, n) + (es(d) || 0)) || 0 === c) && (n = c)),
          !u || d !== n || eK)
              return isNaN(d * n) || "" === n ? (h || e in t || tu(e, n),
              e0.call(this, t, e, d, n, p, o || V.stringFilter, l)) : (c = new i_(this._pt,t,e,+d || 0,n - (d || 0),"boolean" == typeof h ? iu : il,0,p),
              l && (c.fp = l),
              a && c.modifier(a, this, t),
              this._pt = c)
      }, e2 = function(t, e, i, n, s) {
          if (U(t) && (t = e9(t, s, e, i, n)),
          !H(t) || t.style && t.nodeType || J(t) || Q(t))
              return W(t) ? e9(t, s, e, i, n) : t;
          var r, a = {};
          for (r in t)
              a[r] = e9(t[r], s, e, i, n);
          return a
      }, e3 = function(t, e, i, n, s, r) {
          var a, o, l, u;
          if (ty[t] && !1 !== (a = new ty[t]).init(s, a.rawVars ? e[t] : e2(e[t], n, s, r, i), i, n, r) && (i._pt = o = new i_(i._pt,s,t,0,1,a.render,a,0,a.priority),
          i !== I))
              for (l = i._ptLookup[i._targets.indexOf(s)],
              u = a._props.length; u--; )
                  l[a._props[u]] = o;
          return a
      }, e8 = function t(e, i, n) {
          var s, r, a, o, l, u, c, h, d, p, f, m, g, v = e.vars, y = v.ease, b = v.startAt, x = v.immediateRender, w = v.eager, T = v.onUpdate, C = v.runBackwards, O = v.yoyoEase, M = v.keyframes, E = v.autoRevert, D = e._dur, R = e._startAt, I = e._targets, P = e.parent, V = P && "nested" === P.data ? P.vars.targets : I, N = "auto" === e._overwrite && !S, F = e.timeline;
          if (!F || M && y || (y = "none"),
          e._ease = eq(y, j.ease),
          e._yEase = O ? eF(eq(!0 === O ? y : O, j.ease)) : 0,
          O && e._yoyo && !e._repeat && (O = e._yEase,
          e._yEase = e._ease,
          e._ease = O),
          e._from = !F && !!v.runBackwards,
          !F || M && !v.stagger) {
              if (m = (h = I[0] ? tk(I[0]).harness : 0) && v[h.prop],
              s = tz(v, tg),
              R && (R._zTime < 0 && R.progress(1),
              i < 0 && C && x && !E ? R.render(-1, !0) : R.revert(C && D ? tf : tp),
              R._eager = 0),
              b) {
                  if (tU(e._startAt = ie.set(I, tj({
                      data: "isStart",
                      overwrite: !1,
                      parent: P,
                      immediateRender: !0,
                      eager: !R && X(w),
                      startAt: null,
                      delay: 0,
                      onUpdate: T && function() {
                          return ev(e, "onUpdate")
                      }
                      ,
                      stagger: 0
                  }, b))),
                  e._startAt._dp = 0,
                  e._startAt._sat = e,
                  i < 0 && (k || !x && !E) && e._startAt.revert(tf),
                  x && D && i <= 0 && n <= 0) {
                      i && (e._zTime = i);
                      return
                  }
              } else if (C && D && !R) {
                  if (i && (x = !1),
                  a = tj({
                      overwrite: !1,
                      data: "isFromStart",
                      eager: x && !R && X(w),
                      immediateRender: x,
                      stagger: 0,
                      parent: P
                  }, s),
                  m && (a[h.prop] = m),
                  tU(e._startAt = ie.set(I, a)),
                  e._startAt._dp = 0,
                  e._startAt._sat = e,
                  i < 0 && (k ? e._startAt.revert(tf) : e._startAt.render(-1, !0)),
                  e._zTime = i,
                  x) {
                      if (!i)
                          return
                  } else
                      t(e._startAt, 1e-8, 1e-8)
              }
              for (r = 0,
              e._pt = e._ptCache = 0,
              w = D && X(w) || w && !D; r < I.length; r++) {
                  if (c = (l = I[r])._gsap || tS(I)[r]._gsap,
                  e._ptLookup[r] = p = {},
                  tv[c.id] && t_.length && tR(),
                  f = V === I ? r : V.indexOf(l),
                  h && !1 !== (d = new h).init(l, m || s, e, f, V) && (e._pt = o = new i_(e._pt,l,d.name,0,1,d.render,d,0,d.priority),
                  d._props.forEach(function(t) {
                      p[t] = o
                  }),
                  d.priority && (u = 1)),
                  !h || m)
                      for (a in s)
                          ty[a] && (d = e3(a, s, e, f, l, V)) ? d.priority && (u = 1) : p[a] = o = e1.call(e, l, a, "get", s[a], f, V, 0, v.stringFilter);
                  e._op && e._op[r] && e.kill(l, e._op[r]),
                  N && e._pt && (eJ = e,
                  A.killTweensOf(l, p, e.globalTime(i)),
                  g = !e.parent,
                  eJ = 0),
                  e._pt && w && (tv[c.id] = 1)
              }
              u && ig(e),
              e._onInit && e._onInit(e)
          }
          e._onUpdate = T,
          e._initted = (!e._op || e._pt) && !g,
          M && i <= 0 && F.render(1e8, !0, !0)
      }, e5 = function(t, e, i, n, s, r, a, o) {
          var l, u, c, h, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
          if (!d)
              for (d = t._ptCache[e] = [],
              c = t._ptLookup,
              h = t._targets.length; h--; ) {
                  if ((l = c[h][e]) && l.d && l.d._pt)
                      for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                          l = l._next;
                  if (!l)
                      return eK = 1,
                      t.vars[e] = "+=0",
                      e8(t, a),
                      eK = 0,
                      o ? tc(e + " not eligible for reset") : 1;
                  d.push(l)
              }
          for (h = d.length; h--; )
              (l = (u = d[h])._pt || u).s = (n || 0 === n) && !s ? n : l.s + (n || 0) + r * l.c,
              l.c = i - l.s,
              u.e && (u.e = tO(i) + es(u.e)),
              u.b && (u.b = l.s + es(u.b))
      }, e4 = function(t, e) {
          var i, n, s, r, a = t[0] ? tk(t[0]).harness : 0, o = a && a.aliases;
          if (!o)
              return e;
          for (n in i = tN({}, e),
          o)
              if (n in i)
                  for (s = (r = o[n].split(",")).length; s--; )
                      i[r[s]] = i[n];
          return i
      }, e6 = function(t, e, i, n) {
          var s, r, a = e.ease || n || "power1.inOut";
          if (J(e))
              r = i[t] || (i[t] = []),
              e.forEach(function(t, i) {
                  return r.push({
                      t: i / (e.length - 1) * 100,
                      v: t,
                      e: a
                  })
              });
          else
              for (s in e)
                  r = i[s] || (i[s] = []),
                  "ease" === s || r.push({
                      t: parseFloat(t),
                      v: e[s],
                      e: a
                  })
      }, e9 = function(t, e, i, n, s) {
          return U(t) ? t.call(e, i, n, s) : W(t) && ~t.indexOf("random(") ? em(t) : t
      }, e7 = tT + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", it = {};
      tA(e7 + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
          return it[t] = 1
      });
      var ie = function(t) {
          function e(e, i, s, r) {
              "number" == typeof i && (s.duration = i,
              i = s,
              s = null);
              var a, o, l, u, c, h, d, p, f, m = (a = t.call(this, r ? i : tq(i)) || this).vars, g = m.duration, v = m.delay, y = m.immediateRender, b = m.stagger, x = m.overwrite, w = m.keyframes, T = m.defaults, k = m.scrollTrigger, C = m.yoyoEase, O = i.parent || A, M = (J(e) || Q(e) ? Y(e[0]) : "length"in i) ? [e] : eo(e);
              if (a._targets = M.length ? tS(M) : tc("GSAP target " + e + " not found. https://gsap.com", !V.nullTargetWarn) || [],
              a._ptLookup = [],
              a._overwrite = x,
              w || b || $(g) || $(v)) {
                  if (i = a.vars,
                  (o = a.timeline = new eH({
                      data: "nested",
                      defaults: T || {},
                      targets: O && "nested" === O.data ? O.vars.targets : M
                  })).kill(),
                  o.parent = o._dp = n(a),
                  o._start = 0,
                  b || $(g) || $(v)) {
                      if (c = M.length,
                      p = b && ec(b),
                      H(b))
                          for (h in b)
                              ~e7.indexOf(h) && (f || (f = {}),
                              f[h] = b[h]);
                      for (l = 0; l < c; l++)
                          (u = tz(i, it)).stagger = 0,
                          C && (u.yoyoEase = C),
                          f && tN(u, f),
                          d = M[l],
                          u.duration = +e9(g, n(a), l, d, M),
                          u.delay = (+e9(v, n(a), l, d, M) || 0) - a._delay,
                          !b && 1 === c && u.delay && (a._delay = v = u.delay,
                          a._start += v,
                          u.delay = 0),
                          o.to(d, u, p ? p(l, d, M) : 0),
                          o._ease = eR.none;
                      o.duration() ? g = v = 0 : a.timeline = 0
                  } else if (w) {
                      tq(tj(o.vars.defaults, {
                          ease: "none"
                      })),
                      o._ease = eq(w.ease || i.ease || "none");
                      var E, D, R, I = 0;
                      if (J(w))
                          w.forEach(function(t) {
                              return o.to(M, t, ">")
                          }),
                          o.duration();
                      else {
                          for (h in u = {},
                          w)
                              "ease" === h || "easeEach" === h || e6(h, w[h], u, w.easeEach);
                          for (h in u)
                              for (l = 0,
                              E = u[h].sort(function(t, e) {
                                  return t.t - e.t
                              }),
                              I = 0; l < E.length; l++)
                                  (R = {
                                      ease: (D = E[l]).e,
                                      duration: (D.t - (l ? E[l - 1].t : 0)) / 100 * g
                                  })[h] = D.v,
                                  o.to(M, R, I),
                                  I += R.duration;
                          o.duration() < g && o.to({}, {
                              duration: g - o.duration()
                          })
                      }
                  }
                  g || a.duration(g = o.duration())
              } else
                  a.timeline = 0;
              return !0 !== x || S || (eJ = n(a),
              A.killTweensOf(M),
              eJ = 0),
              t0(O, n(a), s),
              i.reversed && a.reverse(),
              i.paused && a.paused(!0),
              (y || !g && !w && a._start === tM(O._time) && X(y) && function t(e) {
                  return !e || e._ts && t(e.parent)
              }(n(a)) && "nested" !== O.data) && (a._tTime = -.00000001,
              a.render(Math.max(0, -v) || 0)),
              k && t1(n(a), k),
              a
          }
          s(e, t);
          var i = e.prototype;
          return i.render = function(t, e, i) {
              var n, s, r, a, o, l, u, c, h, d = this._time, p = this._tDur, f = this._dur, m = t < 0, g = t > p - 1e-8 && !m ? p : t < 1e-8 ? 0 : t;
              if (f) {
                  if (g !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                      if (n = g,
                      c = this.timeline,
                      this._repeat) {
                          if (a = f + this._rDelay,
                          this._repeat < -1 && m)
                              return this.totalTime(100 * a + t, e, i);
                          if (n = tM(g % a),
                          g === p ? (r = this._repeat,
                          n = f) : ((r = ~~(g / a)) && r === tM(g / a) && (n = f,
                          r--),
                          n > f && (n = f)),
                          (l = this._yoyo && 1 & r) && (h = this._yEase,
                          n = f - n),
                          o = tZ(this._tTime, a),
                          n === d && !i && this._initted && r === o)
                              return this._tTime = g,
                              this;
                          r !== o && (c && this._yEase && ez(c, l),
                          this.vars.repeatRefresh && !l && !this._lock && this._time !== a && this._initted && (this._lock = i = 1,
                          this.render(tM(a * r), !0).invalidate()._lock = 0))
                      }
                      if (!this._initted) {
                          if (t2(this, m ? t : n, i, e, g))
                              return this._tTime = 0,
                              this;
                          if (d !== this._time && !(i && this.vars.repeatRefresh && r !== o))
                              return this;
                          if (f !== this._dur)
                              return this.render(t, e, i)
                      }
                      if (this._tTime = g,
                      this._time = n,
                      !this._act && this._ts && (this._act = 1,
                      this._eager = 0),
                      this.ratio = u = (h || this._ease)(n / f),
                      this._from && (this.ratio = u = 1 - u),
                      n && !d && !e && !r && (ev(this, "onStart"),
                      this._tTime !== g))
                          return this;
                      for (s = this._pt; s; )
                          s.r(u, s.d),
                          s = s._next;
                      c && c.render(t < 0 ? t : c._dur * c._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t),
                      this._onUpdate && !e && (m && tH(this, t, e, i),
                      ev(this, "onUpdate")),
                      this._repeat && r !== o && this.vars.onRepeat && !e && this.parent && ev(this, "onRepeat"),
                      (g === this._tDur || !g) && this._tTime === g && (m && !this._onUpdate && tH(this, t, !0, !0),
                      (t || !f) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && tU(this, 1),
                      !e && !(m && !d) && (g || d || l) && (ev(this, g === p ? "onComplete" : "onReverseComplete", !0),
                      this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
                  }
              } else
                  t5(this, t, e, i);
              return this
          }
          ,
          i.targets = function() {
              return this._targets
          }
          ,
          i.invalidate = function(e) {
              return e && this.vars.runBackwards || (this._startAt = 0),
              this._pt = this._op = this._onUpdate = this._eager = this.ratio = 0,
              this._ptLookup = [],
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
          }
          ,
          i.resetTo = function(t, e, i, n, s) {
              P || eE.wake(),
              this._ts || this.play();
              var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
              return (this._initted || e8(this, r),
              e5(this, t, e, i, n, this._ease(r / this._dur), r, s)) ? this.resetTo(t, e, i, n, 1) : (tJ(this, 0),
              this.parent || tL(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
              this.render(0))
          }
          ,
          i.kill = function(t, e) {
              if (void 0 === e && (e = "all"),
              !t && (!e || "all" === e))
                  return this._eager = this._pt = 0,
                  this.parent ? ey(this) : this;
              if (this.timeline) {
                  var i = this.timeline.totalDuration();
                  return this.timeline.killTweensOf(t, e, eJ && !0 !== eJ.vars.overwrite)._first || ey(this),
                  this.parent && i !== this.timeline.totalDuration() && t6(this, this._dur * this.timeline._tDur / i, 0, 1),
                  this
              }
              var n, s, r, a, o, l, u, c = this._targets, h = t ? eo(t) : c, d = this._ptLookup, p = this._pt;
              if ((!e || "all" === e) && tB(c, h))
                  return "all" === e && (this._pt = 0),
                  ey(this);
              for (n = this._op = this._op || [],
              "all" !== e && (W(e) && (o = {},
              tA(e, function(t) {
                  return o[t] = 1
              }),
              e = o),
              e = e4(c, e)),
              u = c.length; u--; )
                  if (~h.indexOf(c[u]))
                      for (o in s = d[u],
                      "all" === e ? (n[u] = e,
                      a = s,
                      r = {}) : (r = n[u] = n[u] || {},
                      a = e),
                      a)
                          (l = s && s[o]) && ("kill"in l.d && !0 !== l.d.kill(o) || tW(this, l, "_pt"),
                          delete s[o]),
                          "all" !== r && (r[o] = 1);
              return this._initted && !this._pt && p && ey(this),
              this
          }
          ,
          e.to = function(t, i) {
              return new e(t,i,arguments[2])
          }
          ,
          e.from = function(t, e) {
              return ee(1, arguments)
          }
          ,
          e.delayedCall = function(t, i, n, s) {
              return new e(i,0,{
                  immediateRender: !1,
                  eager: !1,
                  overwrite: !1,
                  delay: t,
                  onComplete: i,
                  onReverseComplete: i,
                  onCompleteParams: n,
                  onReverseCompleteParams: n,
                  callbackScope: s
              })
          }
          ,
          e.fromTo = function(t, e, i) {
              return ee(2, arguments)
          }
          ,
          e.set = function(t, i) {
              return i.duration = 0,
              i.repeatDelay || (i.repeat = 0),
              new e(t,i)
          }
          ,
          e.killTweensOf = function(t, e, i) {
              return A.killTweensOf(t, e, i)
          }
          ,
          e
      }(eG);
      tj(ie.prototype, {
          _targets: [],
          _eager: 0,
          _startAt: 0,
          _op: 0,
          _onInit: 0
      }),
      tA("staggerTo,staggerFrom,staggerFromTo", function(t) {
          ie[t] = function() {
              var e = new eH
                , i = er.call(arguments, 0);
              return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
              e[t].apply(e, i)
          }
      });
      var ii = function(t, e, i) {
          return t[e] = i
      }
        , is = function(t, e, i) {
          return t[e](i)
      }
        , ir = function(t, e, i, n) {
          return t[e](n.fp, i)
      }
        , ia = function(t, e, i) {
          return t.setAttribute(e, i)
      }
        , io = function(t, e) {
          return U(t[e]) ? is : G(t[e]) && t.setAttribute ? ia : ii
      }
        , il = function(t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
      }
        , iu = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
      }
        , ic = function(t, e) {
          var i = e._pt
            , n = "";
          if (!t && e.b)
              n = e.b;
          else if (1 === t && e.e)
              n = e.e;
          else {
              for (; i; )
                  n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + n,
                  i = i._next;
              n += e.c
          }
          e.set(e.t, e.p, n, e)
      }
        , ih = function(t, e) {
          for (var i = e._pt; i; )
              i.r(t, i.d),
              i = i._next
      }
        , id = function(t, e, i, n) {
          for (var s, r = this._pt; r; )
              s = r._next,
              r.p === n && r.modifier(t, e, i),
              r = s
      }
        , ip = function(t) {
          for (var e, i, n = this._pt; n; )
              i = n._next,
              (n.p !== t || n.op) && n.op !== t ? n.dep || (e = 1) : tW(this, n, "_pt"),
              n = i;
          return !e
      }
        , im = function(t, e, i, n) {
          n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
      }
        , ig = function(t) {
          for (var e, i, n, s, r = t._pt; r; ) {
              for (e = r._next,
              i = n; i && i.pr > r.pr; )
                  i = i._next;
              (r._prev = i ? i._prev : s) ? r._prev._next = r : n = r,
              (r._next = i) ? i._prev = r : s = r,
              r = e
          }
          t._pt = n
      }
        , i_ = function() {
          function t(t, e, i, n, s, r, a, o, l) {
              this.t = e,
              this.s = n,
              this.c = s,
              this.p = i,
              this.r = r || il,
              this.d = a || this,
              this.set = o || ii,
              this.pr = l || 0,
              this._next = t,
              t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, i) {
              this.mSet = this.mSet || this.set,
              this.set = im,
              this.m = t,
              this.mt = i,
              this.tween = e
          }
          ,
          t
      }();
      tA(tT + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,eager,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
          return tg[t] = 1
      }),
      ta.TweenMax = ta.TweenLite = ie,
      ta.TimelineLite = ta.TimelineMax = eH,
      A = new eH({
          sortChildren: !1,
          defaults: j,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0
      }),
      V.stringFilter = eM;
      var iv = []
        , iy = {}
        , ib = []
        , ix = 0
        , iw = 0
        , iT = function(t) {
          return (iy[t] || ib).map(function(t) {
              return t()
          })
      }
        , iS = function() {
          var t = Date.now()
            , e = [];
          t - ix > 2 && (iT("matchMediaInit"),
          iv.forEach(function(t) {
              var i, n, s, r, a = t.queries, o = t.conditions;
              for (n in a)
                  (i = O.matchMedia(a[n]).matches) && (s = 1),
                  i !== o[n] && (o[n] = i,
                  r = 1);
              r && (t.revert(),
              s && e.push(t))
          }),
          iT("matchMediaRevert"),
          e.forEach(function(t) {
              return t.onMatch(t, function(e) {
                  return t.add(null, e)
              })
          }),
          ix = t,
          iT("matchMedia"))
      }
        , ik = function() {
          function t(t, e) {
              this.selector = e && el(e),
              this.data = [],
              this._r = [],
              this.isReverted = !1,
              this.id = iw++,
              t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function(t, e, i) {
              U(t) && (i = e,
              e = t,
              t = U);
              var n = this
                , s = function() {
                  var t, s = C, r = n.selector;
                  return s && s !== n && s.data.push(n),
                  i && (n.selector = el(i)),
                  C = n,
                  t = e.apply(n, arguments),
                  U(t) && n._r.push(t),
                  C = s,
                  n.selector = r,
                  n.isReverted = !1,
                  t
              };
              return n.last = s,
              t === U ? s(n, function(t) {
                  return n.add(null, t)
              }) : t ? n[t] = s : s
          }
          ,
          e.ignore = function(t) {
              var e = C;
              C = null,
              t(this),
              C = e
          }
          ,
          e.getTweens = function() {
              var e = [];
              return this.data.forEach(function(i) {
                  return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof ie && !(i.parent && "nested" === i.parent.data) && e.push(i)
              }),
              e
          }
          ,
          e.clear = function() {
              this._r.length = this.data.length = 0
          }
          ,
          e.kill = function(t, e) {
              var i = this;
              if (t ? function() {
                  for (var e, n = i.getTweens(), s = i.data.length; s--; )
                      "isFlip" === (e = i.data[s]).data && (e.revert(),
                      e.getChildren(!0, !0, !1).forEach(function(t) {
                          return n.splice(n.indexOf(t), 1)
                      }));
                  for (n.map(function(t) {
                      return {
                          g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                          t: t
                      }
                  }).sort(function(t, e) {
                      return e.g - t.g || -1 / 0
                  }).forEach(function(e) {
                      return e.t.revert(t)
                  }),
                  s = i.data.length; s--; )
                      (e = i.data[s])instanceof eH ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(),
                      e.kill()) : e instanceof ie || !e.revert || e.revert(t);
                  i._r.forEach(function(e) {
                      return e(t, i)
                  }),
                  i.isReverted = !0
              }() : this.data.forEach(function(t) {
                  return t.kill && t.kill()
              }),
              this.clear(),
              e)
                  for (var n = iv.length; n--; )
                      iv[n].id === this.id && iv.splice(n, 1)
          }
          ,
          e.revert = function(t) {
              this.kill(t || {})
          }
          ,
          t
      }()
        , iC = function() {
          function t(t) {
              this.contexts = [],
              this.scope = t,
              C && C.data.push(this)
          }
          var e = t.prototype;
          return e.add = function(t, e, i) {
              H(t) || (t = {
                  matches: t
              });
              var n, s, r, a = new ik(0,i || this.scope), o = a.conditions = {};
              for (s in C && !a.selector && (a.selector = C.selector),
              this.contexts.push(a),
              e = a.add("onMatch", e),
              a.queries = t,
              t)
                  "all" === s ? r = 1 : (n = O.matchMedia(t[s])) && (0 > iv.indexOf(a) && iv.push(a),
                  (o[s] = n.matches) && (r = 1),
                  n.addListener ? n.addListener(iS) : n.addEventListener("change", iS));
              return r && e(a, function(t) {
                  return a.add(null, t)
              }),
              this
          }
          ,
          e.revert = function(t) {
              this.kill(t || {})
          }
          ,
          e.kill = function(t) {
              this.contexts.forEach(function(e) {
                  return e.kill(t, !0)
              })
          }
          ,
          t
      }()
        , iA = {
          registerPlugin: function() {
              for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                  e[i] = arguments[i];
              e.forEach(function(t) {
                  return ex(t)
              })
          },
          timeline: function(t) {
              return new eH(t)
          },
          getTweensOf: function(t, e) {
              return A.getTweensOf(t, e)
          },
          getProperty: function(t, e, i, n) {
              W(t) && (t = eo(t)[0]);
              var s = tk(t || {}).get
                , r = i ? tV : tP;
              return "native" === i && (i = ""),
              t ? e ? r((ty[e] && ty[e].get || s)(t, e, i, n)) : function(e, i, n) {
                  return r((ty[e] && ty[e].get || s)(t, e, i, n))
              }
              : t
          },
          quickSetter: function(t, e, i) {
              if ((t = eo(t)).length > 1) {
                  var n = t.map(function(t) {
                      return iD.quickSetter(t, e, i)
                  })
                    , s = n.length;
                  return function(t) {
                      for (var e = s; e--; )
                          n[e](t)
                  }
              }
              t = t[0] || {};
              var r = ty[e]
                , a = tk(t)
                , o = a.harness && (a.harness.aliases || {})[e] || e
                , l = r ? function(e) {
                  var n = new r;
                  I._pt = 0,
                  n.init(t, i ? e + i : e, I, 0, [t]),
                  n.render(1, n),
                  I._pt && ih(1, I)
              }
              : a.set(t, o);
              return r ? l : function(e) {
                  return l(t, o, i ? e + i : e, a, 1)
              }
          },
          quickTo: function(t, e, i) {
              var n, s = iD.to(t, tN(((n = {})[e] = "+=0.1",
              n.paused = !0,
              n), i || {})), r = function(t, i, n) {
                  return s.resetTo(e, t, i, n)
              };
              return r.tween = s,
              r
          },
          isTweening: function(t) {
              return A.getTweensOf(t, !0).length > 0
          },
          defaults: function(t) {
              return t && t.ease && (t.ease = eq(t.ease, j.ease)),
              tF(j, t || {})
          },
          config: function(t) {
              return tF(V, t || {})
          },
          registerEffect: function(t) {
              var e = t.name
                , i = t.effect
                , n = t.plugins
                , s = t.defaults
                , r = t.extendTimeline;
              (n || "").split(",").forEach(function(t) {
                  return t && !ty[t] && !ta[t] && tc(e + " effect requires " + t + " plugin.")
              }),
              tb[e] = function(t, e, n) {
                  return i(eo(t), tj(e || {}, s), n)
              }
              ,
              r && (eH.prototype[e] = function(t, i, n) {
                  return this.add(tb[e](t, H(i) ? i : (n = i) && {}, this), n)
              }
              )
          },
          registerEase: function(t, e) {
              eR[t] = eq(e)
          },
          parseEase: function(t, e) {
              return arguments.length ? eq(t, e) : eR
          },
          getById: function(t) {
              return A.getById(t)
          },
          exportRoot: function(t, e) {
              void 0 === t && (t = {});
              var i, n, s = new eH(t);
              for (s.smoothChildTiming = X(t.smoothChildTiming),
              A.remove(s),
              s._dp = 0,
              s._time = s._tTime = A._time,
              i = A._first; i; )
                  n = i._next,
                  (e || !(!i._dur && i instanceof ie && i.vars.onComplete === i._targets[0])) && t0(s, i, i._start - i._delay),
                  i = n;
              return t0(A, s, 0),
              s
          },
          context: function(t, e) {
              return t ? new ik(t,e) : C
          },
          matchMedia: function(t) {
              return new iC(t)
          },
          matchMediaRefresh: function() {
              return iv.forEach(function(t) {
                  var e, i, n = t.conditions;
                  for (i in n)
                      n[i] && (n[i] = !1,
                      e = 1);
                  e && t.revert()
              }) || iS()
          },
          addEventListener: function(t, e) {
              var i = iy[t] || (iy[t] = []);
              ~i.indexOf(e) || i.push(e)
          },
          removeEventListener: function(t, e) {
              var i = iy[t]
                , n = i && i.indexOf(e);
              n >= 0 && i.splice(n, 1)
          },
          utils: {
              wrap: function t(e, i, n) {
                  var s = i - e;
                  return J(e) ? ef(e, t(0, e.length), i) : ei(n, function(t) {
                      return (s + (t - e) % s) % s + e
                  })
              },
              wrapYoyo: function t(e, i, n) {
                  var s = i - e
                    , r = 2 * s;
                  return J(e) ? ef(e, t(0, e.length - 1), i) : ei(n, function(t) {
                      return t = (r + (t - e) % r) % r || 0,
                      e + (t > s ? r - t : t)
                  })
              },
              distribute: ec,
              random: ep,
              snap: ed,
              normalize: function(t, e, i) {
                  return eg(t, e, 0, 1, i)
              },
              getUnit: es,
              clamp: function(t, e, i) {
                  return ei(i, function(i) {
                      return en(t, e, i)
                  })
              },
              splitColor: eS,
              toArray: eo,
              selector: el,
              mapRange: eg,
              pipe: function() {
                  for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
                      e[i] = arguments[i];
                  return function(t) {
                      return e.reduce(function(t, e) {
                          return e(t)
                      }, t)
                  }
              },
              unitize: function(t, e) {
                  return function(i) {
                      return t(parseFloat(i)) + (e || es(i))
                  }
              },
              interpolate: function t(e, i, n, s) {
                  var r = isNaN(e + i) ? 0 : function(t) {
                      return (1 - t) * e + t * i
                  }
                  ;
                  if (!r) {
                      var a, o, l, u, c, h = W(e), d = {};
                      if (!0 === n && (s = 1) && (n = null),
                      h)
                          e = {
                              p: e
                          },
                          i = {
                              p: i
                          };
                      else if (J(e) && !J(i)) {
                          for (o = 1,
                          l = [],
                          c = (u = e.length) - 2; o < u; o++)
                              l.push(t(e[o - 1], e[o]));
                          u--,
                          r = function(t) {
                              var e = Math.min(c, ~~(t *= u));
                              return l[e](t - e)
                          }
                          ,
                          n = i
                      } else
                          s || (e = tN(J(e) ? [] : {}, e));
                      if (!l) {
                          for (a in i)
                              e1.call(d, e, a, "get", i[a]);
                          r = function(t) {
                              return ih(t, d) || (h ? e.p : e)
                          }
                      }
                  }
                  return ei(n, r)
              },
              shuffle: eu
          },
          install: tl,
          effects: tb,
          ticker: eE,
          updateRoot: eH.updateRoot,
          plugins: ty,
          globalTimeline: A,
          core: {
              PropTween: i_,
              globals: th,
              Tween: ie,
              Timeline: eH,
              Animation: eG,
              getCache: tk,
              _removeLinkedListItem: tW,
              reverting: function() {
                  return k
              },
              context: function(t) {
                  return t && C && (C.data.push(t),
                  t._ctx = C),
                  C
              },
              suppressOverwrites: function(t) {
                  return S = t
              }
          }
      };
      tA("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
          return iA[t] = ie[t]
      }),
      eE.add(eH.updateRoot),
      I = iA.to({}, {
          duration: 0
      });
      var iO = function(t, e) {
          for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
              i = i._next;
          return i
      }
        , iM = function(t, e) {
          var i, n, s, r = t._targets;
          for (i in e)
              for (n = r.length; n--; )
                  (s = t._ptLookup[n][i]) && (s = s.d) && (s._pt && (s = iO(s, i)),
                  s && s.modifier && s.modifier(e[i], t, r[n], i))
      }
        , iE = function(t, e) {
          return {
              name: t,
              rawVars: 1,
              init: function(t, i, n) {
                  n._onInit = function(t) {
                      var n, s;
                      if (W(i) && (n = {},
                      tA(i, function(t) {
                          return n[t] = 1
                      }),
                      i = n),
                      e) {
                          for (s in n = {},
                          i)
                              n[s] = e(i[s]);
                          i = n
                      }
                      iM(t, i)
                  }
              }
          }
      }
        , iD = iA.registerPlugin({
          name: "attr",
          init: function(t, e, i, n, s) {
              var r, a, o;
              for (r in this.tween = i,
              e)
                  o = t.getAttribute(r) || "",
                  (a = this.add(t, "setAttribute", (o || 0) + "", e[r], n, s, 0, 0, r)).op = r,
                  a.b = o,
                  this._props.push(r)
          },
          render: function(t, e) {
              for (var i = e._pt; i; )
                  k ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
                  i = i._next
          }
      }, {
          name: "endArray",
          init: function(t, e) {
              for (var i = e.length; i--; )
                  this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
          }
      }, iE("roundProps", eh), iE("modifiers"), iE("snap", ed)) || iA;
      ie.version = eH.version = iD.version = "3.12.5",
      D = 1,
      Z() && eD(),
      eR.Power0,
      eR.Power1,
      eR.Power2,
      eR.Power3,
      eR.Power4,
      eR.Linear,
      eR.Quad,
      eR.Cubic,
      eR.Quart,
      eR.Quint,
      eR.Strong,
      eR.Elastic,
      eR.Back,
      eR.SteppedEase,
      eR.Bounce,
      eR.Sine,
      eR.Expo,
      eR.Circ;
      /*!
* CSSPlugin 3.12.5
* https://gsap.com
*
* Copyright 2008-2024, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
      var iR, iI, iP, iV, ij, iN, iF, iz = {}, iq = 180 / Math.PI, iB = Math.PI / 180, iL = Math.atan2, iW = /([A-Z])/g, iU = /(left|right|width|margin|padding|x)/i, iY = /[\s,\(]\S/, iG = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
      }, iH = function(t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
      }, iX = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
      }, iZ = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
      }, i$ = function(t, e) {
          var i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
      }, iQ = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
      }, iJ = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
      }, iK = function(t, e, i) {
          return t.style[e] = i
      }, i0 = function(t, e, i) {
          return t.style.setProperty(e, i)
      }, i1 = function(t, e, i) {
          return t._gsap[e] = i
      }, i2 = function(t, e, i) {
          return t._gsap.scaleX = t._gsap.scaleY = i
      }, i3 = function(t, e, i, n, s) {
          var r = t._gsap;
          r.scaleX = r.scaleY = i,
          r.renderTransform(s, r)
      }, i8 = function(t, e, i, n, s) {
          var r = t._gsap;
          r[e] = i,
          r.renderTransform(s, r)
      }, i5 = "transform", i4 = i5 + "Origin", i6 = function t(e, i) {
          var n = this
            , s = this.target
            , r = s.style
            , a = s._gsap;
          if (e in iz && r) {
              if (this.tfm = this.tfm || {},
              "transform" === e)
                  return iG.transform.split(",").forEach(function(e) {
                      return t.call(n, e, i)
                  });
              if (~(e = iG[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                  return n.tfm[t] = nm(s, t)
              }) : this.tfm[e] = a.x ? a[e] : nm(s, e),
              e === i4 && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(i5) >= 0)
                  return;
              a.svg && (this.svgo = s.getAttribute("data-svg-origin"),
              this.props.push(i4, i, "")),
              e = i5
          }
          (r || i) && this.props.push(e, i, r[e])
      }, i9 = function(t) {
          t.translate && (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"))
      }, i7 = function() {
          var t, e, i = this.props, n = this.target, s = n.style, r = n._gsap;
          for (t = 0; t < i.length; t += 3)
              i[t + 1] ? n[i[t]] = i[t + 2] : i[t + 2] ? s[i[t]] = i[t + 2] : s.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(iW, "-$1").toLowerCase());
          if (this.tfm) {
              for (e in this.tfm)
                  r[e] = this.tfm[e];
              r.svg && (r.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              (t = iN()) && t.isStart || s[i5] || (i9(s),
              r.zOrigin && s[i4] && (s[i4] += " " + r.zOrigin + "px",
              r.zOrigin = 0,
              r.renderTransform()),
              r.uncache = 1)
          }
      }, nt = function(t, e) {
          var i = {
              target: t,
              props: [],
              revert: i7,
              save: i6
          };
          return t._gsap || iD.core.getCache(t),
          e && e.split(",").forEach(function(t) {
              return i.save(t)
          }),
          i
      }, ne = function(t, e) {
          var i = iR.createElementNS ? iR.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : iR.createElement(t);
          return i && i.style ? i : iR.createElement(t)
      }, ni = function t(e, i, n) {
          var s = getComputedStyle(e);
          return s[i] || s.getPropertyValue(i.replace(iW, "-$1").toLowerCase()) || s.getPropertyValue(i) || !n && t(e, ns(i) || i, 1) || ""
      }, nn = "O,Moz,ms,Ms,Webkit".split(","), ns = function(t, e, i) {
          var n = (e || iV).style
            , s = 5;
          if (t in n && !i)
              return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(nn[s] + t in n); )
              ;
          return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? nn[s] : "") + t
      }, nr = function() {
          "undefined" != typeof window && window.document && (iI = (iR = window.document).documentElement,
          iV = ne("div") || {
              style: {}
          },
          ne("div"),
          i4 = (i5 = ns(i5)) + "Origin",
          iV.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
          iF = !!ns("perspective"),
          iN = iD.core.reverting,
          iP = 1)
      }, na = function t(e) {
          var i, n = ne("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = this.parentNode, r = this.nextSibling, a = this.style.cssText;
          if (iI.appendChild(n),
          n.appendChild(this),
          this.style.display = "block",
          e)
              try {
                  i = this.getBBox(),
                  this._gsapBBox = this.getBBox,
                  this.getBBox = t
              } catch (t) {}
          else
              this._gsapBBox && (i = this._gsapBBox());
          return s && (r ? s.insertBefore(this, r) : s.appendChild(this)),
          iI.removeChild(n),
          this.style.cssText = a,
          i
      }, no = function(t, e) {
          for (var i = e.length; i--; )
              if (t.hasAttribute(e[i]))
                  return t.getAttribute(e[i])
      }, nl = function(t) {
          var e;
          try {
              e = t.getBBox()
          } catch (i) {
              e = na.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === na || (e = na.call(t, !0)),
          !e || e.width || e.x || e.y ? e : {
              x: +no(t, ["x", "cx", "x1"]) || 0,
              y: +no(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0
          }
      }, nu = function(t) {
          return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && nl(t))
      }, nc = function(t, e) {
          if (e) {
              var i, n = t.style;
              e in iz && e !== i4 && (e = i5),
              n.removeProperty ? (("ms" === (i = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
              n.removeProperty("--" === i ? e : e.replace(iW, "-$1").toLowerCase())) : n.removeAttribute(e)
          }
      }, nh = function(t, e, i, n, s, r) {
          var a = new i_(t._pt,e,i,0,1,r ? iJ : iQ);
          return t._pt = a,
          a.b = n,
          a.e = s,
          t._props.push(i),
          a
      }, nd = {
          deg: 1,
          rad: 1,
          turn: 1
      }, np = {
          grid: 1,
          flex: 1
      }, nf = function t(e, i, n, s) {
          var r, a, o, l, u = parseFloat(n) || 0, c = (n + "").trim().substr((u + "").length) || "px", h = iV.style, d = iU.test(i), p = "svg" === e.tagName.toLowerCase(), f = (p ? "client" : "offset") + (d ? "Width" : "Height"), m = "px" === s, g = "%" === s;
          if (s === c || !u || nd[s] || nd[c])
              return u;
          if ("px" === c || m || (u = t(e, i, n, "px")),
          l = e.getCTM && nu(e),
          (g || "%" === c) && (iz[i] || ~i.indexOf("adius")))
              return r = l ? e.getBBox()[d ? "width" : "height"] : e[f],
              tO(g ? u / r * 100 : u / 100 * r);
          if (h[d ? "width" : "height"] = 100 + (m ? c : s),
          a = ~i.indexOf("adius") || "em" === s && e.appendChild && !p ? e : e.parentNode,
          l && (a = (e.ownerSVGElement || {}).parentNode),
          a && a !== iR && a.appendChild || (a = iR.body),
          (o = a._gsap) && g && o.width && d && o.time === eE.time && !o.uncache)
              return tO(u / o.width * 100);
          if (g && ("height" === i || "width" === i)) {
              var v = e.style[i];
              e.style[i] = 100 + s,
              r = e[f],
              v ? e.style[i] = v : nc(e, i)
          } else
              (g || "%" === c) && !np[ni(a, "display")] && (h.position = ni(e, "position")),
              a === e && (h.position = "static"),
              a.appendChild(iV),
              r = iV[f],
              a.removeChild(iV),
              h.position = "absolute";
          return d && g && ((o = tk(a)).time = eE.time,
          o.width = a[f]),
          tO(m ? r * u / 100 : r && u ? 100 / r * u : 0)
      }, nm = function(t, e, i, n) {
          var s;
          return iP || nr(),
          e in iG && "transform" !== e && ~(e = iG[e]).indexOf(",") && (e = e.split(",")[0]),
          iz[e] && "transform" !== e ? (s = nA(t, n),
          s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : nO(ni(t, i4)) + " " + s.zOrigin + "px") : (!(s = t.style[e]) || "auto" === s || n || ~(s + "").indexOf("calc(")) && (s = nb[e] && nb[e](t, e, i) || ni(t, e) || tC(t, e) || ("opacity" === e ? 1 : 0)),
          i && !~(s + "").trim().indexOf(" ") ? nf(t, e, s, i) + i : s
      }, ng = function(t, e, i, n) {
          if (!i || "none" === i) {
              var s = ns(e, t, 1)
                , r = s && ni(t, s, 1);
              r && r !== i ? (e = s,
              i = r) : "borderColor" === e && (i = ni(t, "borderTopColor"))
          }
          var a, o, l, u, c, h, d, p, f, m, g, v = new i_(this._pt,t.style,e,0,1,ic), y = 0, b = 0;
          if (v.b = i,
          v.e = n,
          i += "",
          "auto" == (n += "") && (h = t.style[e],
          t.style[e] = n,
          n = ni(t, e) || n,
          h ? t.style[e] = h : nc(t, e)),
          eM(a = [i, n]),
          i = a[0],
          n = a[1],
          l = i.match(te) || [],
          (n.match(te) || []).length) {
              for (; o = te.exec(n); )
                  d = o[0],
                  f = n.substring(y, o.index),
                  c ? c = (c + 1) % 5 : ("rgba(" === f.substr(-5) || "hsla(" === f.substr(-5)) && (c = 1),
                  d !== (h = l[b++] || "") && (u = parseFloat(h) || 0,
                  g = h.substr((u + "").length),
                  "=" === d.charAt(1) && (d = tE(u, d) + g),
                  p = parseFloat(d),
                  m = d.substr((p + "").length),
                  y = te.lastIndex - m.length,
                  m || (m = m || V.units[e] || g,
                  y !== n.length || (n += m,
                  v.e += m)),
                  g !== m && (u = nf(t, e, h, m) || 0),
                  v._pt = {
                      _next: v._pt,
                      p: f || 1 === b ? f : ",",
                      s: u,
                      c: p - u,
                      m: c && c < 4 || "zIndex" === e ? Math.round : 0
                  });
              v.c = y < n.length ? n.substring(y, n.length) : ""
          } else
              v.r = "display" === e && "none" === n ? iJ : iQ;
          return tn.test(n) && (v.e = 0),
          this._pt = v,
          v
      }, n_ = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
      }, nv = function(t) {
          var e = t.split(" ")
            , i = e[0]
            , n = e[1] || "50%";
          return ("top" === i || "bottom" === i || "left" === n || "right" === n) && (t = i,
          i = n,
          n = t),
          e[0] = n_[i] || i,
          e[1] = n_[n] || n,
          e.join(" ")
      }, ny = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
              var i, n, s, r = e.t, a = r.style, o = e.u, l = r._gsap;
              if ("all" === o || !0 === o)
                  a.cssText = "",
                  n = 1;
              else
                  for (s = (o = o.split(",")).length; --s > -1; )
                      iz[i = o[s]] && (n = 1,
                      i = "transformOrigin" === i ? i4 : i5),
                      nc(r, i);
              n && (nc(r, i5),
              l && (l.svg && r.removeAttribute("transform"),
              nA(r, 1),
              l.uncache = 1,
              i9(a)))
          }
      }, nb = {
          clearProps: function(t, e, i, n, s) {
              if ("isFromStart" !== s.data) {
                  var r = t._pt = new i_(t._pt,e,i,0,0,ny);
                  return r.u = n,
                  r.pr = -10,
                  r.tween = s,
                  t._props.push(i),
                  1
              }
          }
      }, nx = [1, 0, 0, 1, 0, 0], nw = {}, nT = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
      }, nS = function(t) {
          var e = ni(t, i5);
          return nT(e) ? nx : e.substr(7).match(tt).map(tO)
      }, nk = function(t, e) {
          var i, n, s, r, a = t._gsap || tk(t), o = t.style, l = nS(t);
          return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(s = t.transform.baseVal.consolidate().matrix).a, s.b, s.c, s.d, s.e, s.f]).join(",") ? nx : l : (l !== nx || t.offsetParent || t === iI || a.svg || (s = o.display,
          o.display = "block",
          (i = t.parentNode) && t.offsetParent || (r = 1,
          n = t.nextElementSibling,
          iI.appendChild(t)),
          l = nS(t),
          s ? o.display = s : nc(t, "display"),
          r && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : iI.removeChild(t))),
          e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
      }, nC = function(t, e, i, n, s, r) {
          var a, o, l, u, c = t._gsap, h = s || nk(t, !0), d = c.xOrigin || 0, p = c.yOrigin || 0, f = c.xOffset || 0, m = c.yOffset || 0, g = h[0], v = h[1], y = h[2], b = h[3], x = h[4], w = h[5], T = e.split(" "), S = parseFloat(T[0]) || 0, k = parseFloat(T[1]) || 0;
          i ? h !== nx && (o = g * b - v * y) && (l = b / o * S + -y / o * k + (y * w - b * x) / o,
          u = -v / o * S + g / o * k - (g * w - v * x) / o,
          S = l,
          k = u) : (S = (a = nl(t)).x + (~T[0].indexOf("%") ? S / 100 * a.width : S),
          k = a.y + (~(T[1] || T[0]).indexOf("%") ? k / 100 * a.height : k)),
          n || !1 !== n && c.smooth ? (x = S - d,
          w = k - p,
          c.xOffset = f + (x * g + w * y) - x,
          c.yOffset = m + (x * v + w * b) - w) : c.xOffset = c.yOffset = 0,
          c.xOrigin = S,
          c.yOrigin = k,
          c.smooth = !!n,
          c.origin = e,
          c.originIsAbsolute = !!i,
          t.style[i4] = "0px 0px",
          r && (nh(r, c, "xOrigin", d, S),
          nh(r, c, "yOrigin", p, k),
          nh(r, c, "xOffset", f, c.xOffset),
          nh(r, c, "yOffset", m, c.yOffset)),
          t.setAttribute("data-svg-origin", S + " " + k)
      }, nA = function(t, e) {
          var i = t._gsap || new eY(t);
          if ("x"in i && !e && !i.uncache)
              return i;
          var n, s, r, a, o, l, u, c, h, d, p, f, m, g, v, y, b, x, w, T, S, k, C, A, O, M, E, D, R, I, P, j, N = t.style, F = i.scaleX < 0, z = getComputedStyle(t), q = ni(t, i4) || "0";
          return n = s = r = l = u = c = h = d = p = 0,
          a = o = 1,
          i.svg = !!(t.getCTM && nu(t)),
          z.translate && (("none" !== z.translate || "none" !== z.scale || "none" !== z.rotate) && (N[i5] = ("none" !== z.translate ? "translate3d(" + (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") + ("none" !== z.scale ? "scale(" + z.scale.split(" ").join(",") + ") " : "") + ("none" !== z[i5] ? z[i5] : "")),
          N.scale = N.rotate = N.translate = "none"),
          g = nk(t, i.svg),
          i.svg && (i.uncache ? (O = t.getBBox(),
          q = i.xOrigin - O.x + "px " + (i.yOrigin - O.y) + "px",
          A = "") : A = !e && t.getAttribute("data-svg-origin"),
          nC(t, A || q, !!A || i.originIsAbsolute, !1 !== i.smooth, g)),
          f = i.xOrigin || 0,
          m = i.yOrigin || 0,
          g !== nx && (x = g[0],
          w = g[1],
          T = g[2],
          S = g[3],
          n = k = g[4],
          s = C = g[5],
          6 === g.length ? (a = Math.sqrt(x * x + w * w),
          o = Math.sqrt(S * S + T * T),
          l = x || w ? iL(w, x) * iq : 0,
          (h = T || S ? iL(T, S) * iq + l : 0) && (o *= Math.abs(Math.cos(h * iB))),
          i.svg && (n -= f - (f * x + m * T),
          s -= m - (f * w + m * S))) : (j = g[6],
          I = g[7],
          E = g[8],
          D = g[9],
          R = g[10],
          P = g[11],
          n = g[12],
          s = g[13],
          r = g[14],
          u = (v = iL(j, R)) * iq,
          v && (A = k * (y = Math.cos(-v)) + E * (b = Math.sin(-v)),
          O = C * y + D * b,
          M = j * y + R * b,
          E = -(k * b) + E * y,
          D = -(C * b) + D * y,
          R = -(j * b) + R * y,
          P = -(I * b) + P * y,
          k = A,
          C = O,
          j = M),
          c = (v = iL(-T, R)) * iq,
          v && (A = x * (y = Math.cos(-v)) - E * (b = Math.sin(-v)),
          O = w * y - D * b,
          M = T * y - R * b,
          P = S * b + P * y,
          x = A,
          w = O,
          T = M),
          l = (v = iL(w, x)) * iq,
          v && (A = x * (y = Math.cos(v)) + w * (b = Math.sin(v)),
          O = k * y + C * b,
          w = w * y - x * b,
          C = C * y - k * b,
          x = A,
          k = O),
          u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0,
          c = 180 - c),
          a = tO(Math.sqrt(x * x + w * w + T * T)),
          o = tO(Math.sqrt(C * C + j * j)),
          h = Math.abs(v = iL(k, C)) > 2e-4 ? v * iq : 0,
          p = P ? 1 / (P < 0 ? -P : P) : 0),
          i.svg && (A = t.getAttribute("transform"),
          i.forceCSS = t.setAttribute("transform", "") || !nT(ni(t, i5)),
          A && t.setAttribute("transform", A))),
          Math.abs(h) > 90 && 270 > Math.abs(h) && (F ? (a *= -1,
          h += l <= 0 ? 180 : -180,
          l += l <= 0 ? 180 : -180) : (o *= -1,
          h += h <= 0 ? 180 : -180)),
          e = e || i.uncache,
          i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px",
          i.y = s - ((i.yPercent = s && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px",
          i.z = r + "px",
          i.scaleX = tO(a),
          i.scaleY = tO(o),
          i.rotation = tO(l) + "deg",
          i.rotationX = tO(u) + "deg",
          i.rotationY = tO(c) + "deg",
          i.skewX = h + "deg",
          i.skewY = d + "deg",
          i.transformPerspective = p + "px",
          (i.zOrigin = parseFloat(q.split(" ")[2]) || !e && i.zOrigin || 0) && (N[i4] = nO(q)),
          i.xOffset = i.yOffset = 0,
          i.force3D = V.force3D,
          i.renderTransform = i.svg ? nI : iF ? nR : nE,
          i.uncache = 0,
          i
      }, nO = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
      }, nM = function(t, e, i) {
          var n = es(e);
          return tO(parseFloat(e) + parseFloat(nf(t, "x", i + "px", n))) + n
      }, nE = function(t, e) {
          e.z = "0px",
          e.rotationY = e.rotationX = "0deg",
          e.force3D = 0,
          nR(t, e)
      }, nD = "0deg", nR = function(t, e) {
          var i = e || this
            , n = i.xPercent
            , s = i.yPercent
            , r = i.x
            , a = i.y
            , o = i.z
            , l = i.rotation
            , u = i.rotationY
            , c = i.rotationX
            , h = i.skewX
            , d = i.skewY
            , p = i.scaleX
            , f = i.scaleY
            , m = i.transformPerspective
            , g = i.force3D
            , v = i.target
            , y = i.zOrigin
            , b = ""
            , x = "auto" === g && t && 1 !== t || !0 === g;
          if (y && (c !== nD || u !== nD)) {
              var w, T = parseFloat(u) * iB, S = Math.sin(T), k = Math.cos(T);
              r = nM(v, r, -(S * (w = Math.cos(T = parseFloat(c) * iB)) * y)),
              a = nM(v, a, -(-Math.sin(T) * y)),
              o = nM(v, o, -(k * w * y) + y)
          }
          "0px" !== m && (b += "perspective(" + m + ") "),
          (n || s) && (b += "translate(" + n + "%, " + s + "%) "),
          (x || "0px" !== r || "0px" !== a || "0px" !== o) && (b += "0px" !== o || x ? "translate3d(" + r + ", " + a + ", " + o + ") " : "translate(" + r + ", " + a + ") "),
          l !== nD && (b += "rotate(" + l + ") "),
          u !== nD && (b += "rotateY(" + u + ") "),
          c !== nD && (b += "rotateX(" + c + ") "),
          (h !== nD || d !== nD) && (b += "skew(" + h + ", " + d + ") "),
          (1 !== p || 1 !== f) && (b += "scale(" + p + ", " + f + ") "),
          v.style[i5] = b || "translate(0, 0)"
      }, nI = function(t, e) {
          var i, n, s, r, a, o = e || this, l = o.xPercent, u = o.yPercent, c = o.x, h = o.y, d = o.rotation, p = o.skewX, f = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, y = o.xOrigin, b = o.yOrigin, x = o.xOffset, w = o.yOffset, T = o.forceCSS, S = parseFloat(c), k = parseFloat(h);
          d = parseFloat(d),
          p = parseFloat(p),
          (f = parseFloat(f)) && (p += f = parseFloat(f),
          d += f),
          d || p ? (d *= iB,
          p *= iB,
          i = Math.cos(d) * m,
          n = Math.sin(d) * m,
          s = -(Math.sin(d - p) * g),
          r = Math.cos(d - p) * g,
          p && (f *= iB,
          s *= a = Math.sqrt(1 + (a = Math.tan(p - f)) * a),
          r *= a,
          f && (i *= a = Math.sqrt(1 + (a = Math.tan(f)) * a),
          n *= a)),
          i = tO(i),
          n = tO(n),
          s = tO(s),
          r = tO(r)) : (i = m,
          r = g,
          n = s = 0),
          (S && !~(c + "").indexOf("px") || k && !~(h + "").indexOf("px")) && (S = nf(v, "x", c, "px"),
          k = nf(v, "y", h, "px")),
          (y || b || x || w) && (S = tO(S + y - (y * i + b * s) + x),
          k = tO(k + b - (y * n + b * r) + w)),
          (l || u) && (S = tO(S + l / 100 * (a = v.getBBox()).width),
          k = tO(k + u / 100 * a.height)),
          a = "matrix(" + i + "," + n + "," + s + "," + r + "," + S + "," + k + ")",
          v.setAttribute("transform", a),
          T && (v.style[i5] = a)
      }, nP = function(t, e, i, n, s) {
          var r, a, o = W(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? iq : 1) - n, u = n + l + "deg";
          return o && ("short" === (r = s.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
          "cw" === r && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === r && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
          t._pt = a = new i_(t._pt,e,i,n,l,iX),
          a.e = u,
          a.u = "deg",
          t._props.push(i),
          a
      }, nV = function(t, e) {
          for (var i in e)
              t[i] = e[i];
          return t
      }, nj = function(t, e, i) {
          var n, s, r, a, o, l, u, c = nV({}, i._gsap), h = i.style;
          for (s in c.svg ? (r = i.getAttribute("transform"),
          i.setAttribute("transform", ""),
          h[i5] = e,
          n = nA(i, 1),
          nc(i, i5),
          i.setAttribute("transform", r)) : (r = getComputedStyle(i)[i5],
          h[i5] = e,
          n = nA(i, 1),
          h[i5] = r),
          iz)
              (r = c[s]) !== (a = n[s]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) && (o = es(r) !== (u = es(a)) ? nf(i, s, r, u) : parseFloat(r),
              l = parseFloat(a),
              t._pt = new i_(t._pt,n,s,o,l - o,iH),
              t._pt.u = u || 0,
              t._props.push(s));
          nV(n, c)
      };
      tA("padding,margin,Width,Radius", function(t, e) {
          var i = "Right"
            , n = "Bottom"
            , s = "Left"
            , r = (e < 3 ? ["Top", i, n, s] : ["Top" + s, "Top" + i, n + i, n + s]).map(function(i) {
              return e < 2 ? t + i : "border" + i + t
          });
          nb[e > 1 ? "border" + t : t] = function(t, e, i, n, s) {
              var a, o;
              if (arguments.length < 4)
                  return 5 === (o = (a = r.map(function(e) {
                      return nm(t, e, i)
                  })).join(" ")).split(a[0]).length ? a[0] : o;
              a = (n + "").split(" "),
              o = {},
              r.forEach(function(t, e) {
                  return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
              }),
              t.init(e, o, s)
          }
      });
      var nN = {
          name: "css",
          register: nr,
          targetTest: function(t) {
              return t.style && t.nodeType
          },
          init: function(t, e, i, n, s) {
              var r, a, o, l, u, c, h, d, p, f, m, g, v, y, b, x, w = this._props, T = t.style, S = i.vars.startAt;
              for (h in iP || nr(),
              this.styles = this.styles || nt(t),
              x = this.styles.props,
              this.tween = i,
              e)
                  if ("autoRound" !== h && (a = e[h],
                  !(ty[h] && e3(h, e, i, n, t, s)))) {
                      if (u = typeof a,
                      c = nb[h],
                      "function" === u && (u = typeof (a = a.call(i, n, t, s))),
                      "string" === u && ~a.indexOf("random(") && (a = em(a)),
                      c)
                          c(this, t, h, a, i) && (b = 1);
                      else if ("--" === h.substr(0, 2))
                          r = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                          a += "",
                          eA.lastIndex = 0,
                          eA.test(r) || (d = es(r),
                          p = es(a)),
                          p ? d !== p && (r = nf(t, h, r, p) + p) : d && (a += d),
                          this.add(T, "setProperty", r, a, n, s, 0, 0, h),
                          w.push(h),
                          x.push(h, 0, T[h]);
                      else if ("undefined" !== u) {
                          if (S && h in S ? (W(r = "function" == typeof S[h] ? S[h].call(i, n, t, s) : S[h]) && ~r.indexOf("random(") && (r = em(r)),
                          es(r + "") || "auto" === r || (r += V.units[h] || es(nm(t, h)) || ""),
                          "=" === (r + "").charAt(1) && (r = nm(t, h))) : r = nm(t, h),
                          l = parseFloat(r),
                          (f = "string" === u && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                          o = parseFloat(a),
                          h in iG && ("autoAlpha" === h && (1 === l && "hidden" === nm(t, "visibility") && o && (l = 0),
                          x.push("visibility", 0, T.visibility),
                          nh(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                          "scale" !== h && "transform" !== h && ~(h = iG[h]).indexOf(",") && (h = h.split(",")[0])),
                          m = h in iz) {
                              if (this.styles.save(h),
                              g || ((v = t._gsap).renderTransform && !e.parseTransform || nA(t, e.parseTransform),
                              y = !1 !== e.smoothOrigin && v.smooth,
                              (g = this._pt = new i_(this._pt,T,i5,0,1,v.renderTransform,v,0,-1)).dep = 1),
                              "scale" === h)
                                  this._pt = new i_(this._pt,v,"scaleY",v.scaleY,(f ? tE(v.scaleY, f + o) : o) - v.scaleY || 0,iH),
                                  this._pt.u = 0,
                                  w.push("scaleY", h),
                                  h += "X";
                              else if ("transformOrigin" === h) {
                                  x.push(i4, 0, T[i4]),
                                  a = nv(a),
                                  v.svg ? nC(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && nh(this, v, "zOrigin", v.zOrigin, p),
                                  nh(this, T, h, nO(r), nO(a)));
                                  continue
                              } else if ("svgOrigin" === h) {
                                  nC(t, a, 1, y, 0, this);
                                  continue
                              } else if (h in nw) {
                                  nP(this, v, h, l, f ? tE(l, f + a) : a);
                                  continue
                              } else if ("smoothOrigin" === h) {
                                  nh(this, v, "smooth", v.smooth, a);
                                  continue
                              } else if ("force3D" === h) {
                                  v[h] = a;
                                  continue
                              } else if ("transform" === h) {
                                  nj(this, a, t);
                                  continue
                              }
                          } else
                              h in T || (h = ns(h) || h);
                          if (m || (o || 0 === o) && (l || 0 === l) && !iY.test(a) && h in T)
                              d = (r + "").substr((l + "").length),
                              o || (o = 0),
                              p = es(a) || (h in V.units ? V.units[h] : d),
                              d !== p && (l = nf(t, h, r, p)),
                              this._pt = new i_(this._pt,m ? v : T,h,l,(f ? tE(l, f + o) : o) - l,m || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? iH : i$),
                              this._pt.u = p || 0,
                              d !== p && "%" !== p && (this._pt.b = r,
                              this._pt.r = iZ);
                          else if (h in T)
                              ng.call(this, t, h, r, f ? f + a : a);
                          else if (h in t)
                              this.add(t, h, r || t[h], f ? f + a : a, n, s);
                          else if ("parseTransform" !== h) {
                              tu(h, a);
                              continue
                          }
                          m || (h in T ? x.push(h, 0, T[h]) : x.push(h, 1, r || t[h])),
                          w.push(h)
                      }
                  }
              b && ig(this)
          },
          render: function(t, e) {
              if (e.tween._time || !iN())
                  for (var i = e._pt; i; )
                      i.r(t, i.d),
                      i = i._next;
              else
                  e.styles.revert()
          },
          get: nm,
          aliases: iG,
          getSetter: function(t, e, i) {
              var n = iG[e];
              return n && 0 > n.indexOf(",") && (e = n),
              e in iz && e !== i4 && (t._gsap.x || nm(t, "x")) ? i && ij === i ? "scale" === e ? i2 : i1 : (ij = i || {},
              "scale" === e ? i3 : i8) : t.style && !G(t.style[e]) ? iK : ~e.indexOf("-") ? i0 : io(t, e)
          },
          core: {
              _removeProperty: nc,
              _getMatrix: nk
          }
      };
      iD.utils.checkPrefix = ns,
      iD.core.getStyleSaver = nt,
      o = tA((r = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (a = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
          iz[t] = 1
      }),
      tA(a, function(t) {
          V.units[t] = "deg",
          nw[t] = 1
      }),
      iG[o[13]] = r + "," + a,
      tA("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
          var e = t.split(":");
          iG[e[1]] = o[e[0]]
      }),
      tA("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
          V.units[t] = "px"
      }),
      iD.registerPlugin(nN);
      var nF = iD.registerPlugin(nN) || iD;
      nF.core.Tween
  },
  7544: function(t, e, i) {
      t.exports = i(7174)
  },
  3454: function(t, e, i) {
      "use strict";
      var n, s;
      t.exports = (null == (n = i.g.process) ? void 0 : n.env) && "object" == typeof (null == (s = i.g.process) ? void 0 : s.env) ? i.g.process : i(7663)
  },
  6840: function(t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
          return i(353)
      }
      ])
  },
  250: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function() {
              return b
          }
      });
      let n = i(8754)
        , s = i(1757)
        , r = i(5893)
        , a = s._(i(7294))
        , o = n._(i(3935))
        , l = n._(i(3709))
        , u = i(3943)
        , c = i(6270)
        , h = i(3334);
      i(6415);
      let d = i(5832)
        , p = n._(i(5930))
        , f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1
      };
      function m(t, e, i, n, s, r) {
          let a = null == t ? void 0 : t.src;
          t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a,
          ("decode"in t ? t.decode() : Promise.resolve()).catch( () => {}
          ).then( () => {
              if (t.parentElement && t.isConnected) {
                  if ("empty" !== e && s(!0),
                  null == i ? void 0 : i.current) {
                      let e = new Event("load");
                      Object.defineProperty(e, "target", {
                          writable: !1,
                          value: t
                      });
                      let n = !1
                        , s = !1;
                      i.current({
                          ...e,
                          nativeEvent: e,
                          currentTarget: t,
                          target: t,
                          isDefaultPrevented: () => n,
                          isPropagationStopped: () => s,
                          persist: () => {}
                          ,
                          preventDefault: () => {
                              n = !0,
                              e.preventDefault()
                          }
                          ,
                          stopPropagation: () => {
                              s = !0,
                              e.stopPropagation()
                          }
                      })
                  }
                  (null == n ? void 0 : n.current) && n.current(t)
              }
          }
          ))
      }
      function g(t) {
          let[e,i] = a.version.split(".", 2)
            , n = parseInt(e, 10)
            , s = parseInt(i, 10);
          return n > 18 || 18 === n && s >= 3 ? {
              fetchPriority: t
          } : {
              fetchpriority: t
          }
      }
      let v = (0,
      a.forwardRef)( (t, e) => {
          let {src: i, srcSet: n, sizes: s, height: o, width: l, decoding: u, className: c, style: h, fetchPriority: d, placeholder: p, loading: f, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: x, setBlurComplete: w, setShowAltText: T, onLoad: S, onError: k, ...C} = t;
          return (0,
          r.jsx)("img", {
              ...C,
              ...g(d),
              loading: f,
              width: l,
              height: o,
              decoding: u,
              "data-nimg": y ? "fill" : "1",
              className: c,
              style: h,
              sizes: s,
              srcSet: n,
              src: i,
              ref: (0,
              a.useCallback)(t => {
                  e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)),
                  t && (k && (t.src = t.src),
                  t.complete && m(t, p, b, x, w, v))
              }
              , [i, p, b, x, w, k, v, e]),
              onLoad: t => {
                  m(t.currentTarget, p, b, x, w, v)
              }
              ,
              onError: t => {
                  T(!0),
                  "empty" !== p && w(!0),
                  k && k(t)
              }
          })
      }
      );
      function y(t) {
          let {isAppRouter: e, imgAttributes: i} = t
            , n = {
              as: "image",
              imageSrcSet: i.srcSet,
              imageSizes: i.sizes,
              crossOrigin: i.crossOrigin,
              referrerPolicy: i.referrerPolicy,
              ...g(i.fetchPriority)
          };
          return e && o.default.preload ? (o.default.preload(i.src, n),
          null) : (0,
          r.jsx)(l.default, {
              children: (0,
              r.jsx)("link", {
                  rel: "preload",
                  href: i.srcSet ? void 0 : i.src,
                  ...n
              }, "__nimg-" + i.src + i.srcSet + i.sizes)
          })
      }
      let b = (0,
      a.forwardRef)( (t, e) => {
          let i = (0,
          a.useContext)(d.RouterContext)
            , n = (0,
          a.useContext)(h.ImageConfigContext)
            , s = (0,
          a.useMemo)( () => {
              let t = f || n || c.imageConfigDefault
                , e = [...t.deviceSizes, ...t.imageSizes].sort( (t, e) => t - e)
                , i = t.deviceSizes.sort( (t, e) => t - e);
              return {
                  ...t,
                  allSizes: e,
                  deviceSizes: i
              }
          }
          , [n])
            , {onLoad: o, onLoadingComplete: l} = t
            , m = (0,
          a.useRef)(o);
          (0,
          a.useEffect)( () => {
              m.current = o
          }
          , [o]);
          let g = (0,
          a.useRef)(l);
          (0,
          a.useEffect)( () => {
              g.current = l
          }
          , [l]);
          let[b,x] = (0,
          a.useState)(!1)
            , [w,T] = (0,
          a.useState)(!1)
            , {props: S, meta: k} = (0,
          u.getImgProps)(t, {
              defaultLoader: p.default,
              imgConf: s,
              blurComplete: b,
              showAltText: w
          });
          return (0,
          r.jsxs)(r.Fragment, {
              children: [(0,
              r.jsx)(v, {
                  ...S,
                  unoptimized: k.unoptimized,
                  placeholder: k.placeholder,
                  fill: k.fill,
                  onLoadRef: m,
                  onLoadingCompleteRef: g,
                  setBlurComplete: x,
                  setShowAltText: T,
                  ref: e
              }), k.priority ? (0,
              r.jsx)(y, {
                  isAppRouter: !i,
                  imgAttributes: S
              }) : null]
          })
      }
      );
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
          value: !0
      }),
      Object.assign(e.default, e),
      t.exports = e.default)
  },
  3943: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function() {
              return o
          }
      }),
      i(6415);
      let n = i(4010)
        , s = i(6270);
      function r(t) {
          return void 0 !== t.default
      }
      function a(t) {
          return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
      }
      function o(t, e) {
          var i;
          let o, l, u, {src: c, sizes: h, unoptimized: d=!1, priority: p=!1, loading: f, className: m, quality: g, width: v, height: y, fill: b=!1, style: x, onLoad: w, onLoadingComplete: T, placeholder: S="empty", blurDataURL: k, fetchPriority: C, layout: A, objectFit: O, objectPosition: M, eagerBoundary: E, eagerRoot: D, ...R} = t, {imgConf: I, showAltText: P, blurComplete: V, defaultLoader: j} = e, N = I || s.imageConfigDefault;
          if ("allSizes"in N)
              o = N;
          else {
              let t = [...N.deviceSizes, ...N.imageSizes].sort( (t, e) => t - e)
                , e = N.deviceSizes.sort( (t, e) => t - e);
              o = {
                  ...N,
                  allSizes: t,
                  deviceSizes: e
              }
          }
          let F = R.loader || j;
          delete R.loader,
          delete R.srcSet;
          let z = "__next_img_default"in F;
          if (z) {
              if ("custom" === o.loader)
                  throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
          } else {
              let t = F;
              F = e => {
                  let {config: i, ...n} = e;
                  return t(n)
              }
          }
          if (A) {
              "fill" === A && (b = !0);
              let t = {
                  intrinsic: {
                      maxWidth: "100%",
                      height: "auto"
                  },
                  responsive: {
                      width: "100%",
                      height: "auto"
                  }
              }[A];
              t && (x = {
                  ...x,
                  ...t
              });
              let e = {
                  responsive: "100vw",
                  fill: "100vw"
              }[A];
              e && !h && (h = e)
          }
          let q = ""
            , B = a(v)
            , L = a(y);
          if ("object" == typeof (i = c) && (r(i) || void 0 !== i.src)) {
              let t = r(c) ? c.default : c;
              if (!t.src)
                  throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
              if (!t.height || !t.width)
                  throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
              if (l = t.blurWidth,
              u = t.blurHeight,
              k = k || t.blurDataURL,
              q = t.src,
              !b) {
                  if (B || L) {
                      if (B && !L) {
                          let e = B / t.width;
                          L = Math.round(t.height * e)
                      } else if (!B && L) {
                          let e = L / t.height;
                          B = Math.round(t.width * e)
                      }
                  } else
                      B = t.width,
                      L = t.height
              }
          }
          let W = !p && ("eager" === f || void 0 === f);
          (!(c = "string" == typeof c ? c : q) || c.startsWith("data:") || c.startsWith("blob:")) && (d = !0,
          W = !1),
          o.unoptimized && (d = !0),
          z && c.endsWith(".svg") && !o.dangerouslyAllowSVG && (d = !0),
          p && (C = "high");
          let U = a(g)
            , Y = Object.assign(b ? {
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: O,
              objectPosition: M
          } : {}, P ? {} : {
              color: "transparent"
          }, x)
            , G = V || "empty" === S ? null : "blur" === S ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
          n.getImageBlurSvg)({
              widthInt: B,
              heightInt: L,
              blurWidth: l,
              blurHeight: u,
              blurDataURL: k || "",
              objectFit: Y.objectFit
          }) + '")' : 'url("' + S + '")'
            , H = G ? {
              backgroundSize: Y.objectFit || "cover",
              backgroundPosition: Y.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: G
          } : {}
            , X = function(t) {
              let {config: e, src: i, unoptimized: n, width: s, quality: r, sizes: a, loader: o} = t;
              if (n)
                  return {
                      src: i,
                      srcSet: void 0,
                      sizes: void 0
                  };
              let {widths: l, kind: u} = function(t, e, i) {
                  let {deviceSizes: n, allSizes: s} = t;
                  if (i) {
                      let t = /(^|\s)(1?\d?\d)vw/g
                        , e = [];
                      for (let n; n = t.exec(i); n)
                          e.push(parseInt(n[2]));
                      if (e.length) {
                          let t = .01 * Math.min(...e);
                          return {
                              widths: s.filter(e => e >= n[0] * t),
                              kind: "w"
                          }
                      }
                      return {
                          widths: s,
                          kind: "w"
                      }
                  }
                  return "number" != typeof e ? {
                      widths: n,
                      kind: "w"
                  } : {
                      widths: [...new Set([e, 2 * e].map(t => s.find(e => e >= t) || s[s.length - 1]))],
                      kind: "x"
                  }
              }(e, s, a)
                , c = l.length - 1;
              return {
                  sizes: a || "w" !== u ? a : "100vw",
                  srcSet: l.map( (t, n) => o({
                      config: e,
                      src: i,
                      quality: r,
                      width: t
                  }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
                  src: o({
                      config: e,
                      src: i,
                      quality: r,
                      width: l[c]
                  })
              }
          }({
              config: o,
              src: c,
              unoptimized: d,
              width: B,
              quality: U,
              sizes: h,
              loader: F
          });
          return {
              props: {
                  ...R,
                  loading: W ? "eager" : f,
                  fetchPriority: C,
                  width: B,
                  height: L,
                  decoding: "async",
                  className: m,
                  style: {
                      ...Y,
                      ...H
                  },
                  sizes: X.sizes,
                  srcSet: X.srcSet,
                  src: X.src
              },
              meta: {
                  unoptimized: d,
                  priority: p,
                  placeholder: S,
                  fill: b
              }
          }
      }
  },
  4010: function(t, e) {
      "use strict";
      function i(t) {
          let {widthInt: e, heightInt: i, blurWidth: n, blurHeight: s, blurDataURL: r, objectFit: a} = t
            , o = n ? 40 * n : e
            , l = s ? 40 * s : i
            , u = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
          return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + r + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function() {
              return i
          }
      })
  },
  7922: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      function(t, e) {
          for (var i in e)
              Object.defineProperty(t, i, {
                  enumerable: !0,
                  get: e[i]
              })
      }(e, {
          getImageProps: function() {
              return o
          },
          default: function() {
              return l
          }
      });
      let n = i(8754)
        , s = i(3943)
        , r = i(250)
        , a = n._(i(5930))
        , o = t => {
          let {props: e} = (0,
          s.getImgProps)(t, {
              defaultLoader: a.default,
              imgConf: {
                  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                  path: "/_next/image",
                  loader: "default",
                  dangerouslyAllowSVG: !1,
                  unoptimized: !1
              }
          });
          for (let[t,i] of Object.entries(e))
              void 0 === i && delete e[t];
          return {
              props: e
          }
      }
        , l = r.Image
  },
  5930: function(t, e) {
      "use strict";
      function i(t) {
          let {config: e, src: i, width: n, quality: s} = t;
          return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (s || 75)
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function() {
              return n
          }
      }),
      i.__next_img_default = !0;
      let n = i
  },
  4825: function(t, e, i) {
      "use strict";
      var n = i(3454);
      i(1479);
      var s = i(7294)
        , r = s && "object" == typeof s && "default"in s ? s : {
          default: s
      };
      function a(t, e) {
          for (var i = 0; i < e.length; i++) {
              var n = e[i];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n)
          }
      }
      var o = void 0 !== n && n.env && !0
        , l = function(t) {
          return "[object String]" === Object.prototype.toString.call(t)
      }
        , u = function() {
          function t(t) {
              var e = void 0 === t ? {} : t
                , i = e.name
                , n = void 0 === i ? "stylesheet" : i
                , s = e.optimizeForSpeed
                , r = void 0 === s ? o : s;
              c(l(n), "`name` must be a string"),
              this._name = n,
              this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}",
              c("boolean" == typeof r, "`optimizeForSpeed` must be a boolean"),
              this._optimizeForSpeed = r,
              this._serverSheet = void 0,
              this._tags = [],
              this._injected = !1,
              this._rulesCount = 0;
              var a = document.querySelector('meta[property="csp-nonce"]');
              this._nonce = a ? a.getAttribute("content") : null
          }
          var e, i = t.prototype;
          return i.setOptimizeForSpeed = function(t) {
              c("boolean" == typeof t, "`setOptimizeForSpeed` accepts a boolean"),
              c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"),
              this.flush(),
              this._optimizeForSpeed = t,
              this.inject()
          }
          ,
          i.isOptimizeForSpeed = function() {
              return this._optimizeForSpeed
          }
          ,
          i.inject = function() {
              var t = this;
              if (c(!this._injected, "sheet already injected"),
              this._injected = !0,
              this._optimizeForSpeed) {
                  this._tags[0] = this.makeStyleTag(this._name),
                  this._optimizeForSpeed = "insertRule"in this.getSheet(),
                  this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),
                  this.flush(),
                  this._injected = !0);
                  return
              }
              this._serverSheet = {
                  cssRules: [],
                  insertRule: function(e, i) {
                      return "number" == typeof i ? t._serverSheet.cssRules[i] = {
                          cssText: e
                      } : t._serverSheet.cssRules.push({
                          cssText: e
                      }),
                      i
                  },
                  deleteRule: function(e) {
                      t._serverSheet.cssRules[e] = null
                  }
              }
          }
          ,
          i.getSheetForTag = function(t) {
              if (t.sheet)
                  return t.sheet;
              for (var e = 0; e < document.styleSheets.length; e++)
                  if (document.styleSheets[e].ownerNode === t)
                      return document.styleSheets[e]
          }
          ,
          i.getSheet = function() {
              return this.getSheetForTag(this._tags[this._tags.length - 1])
          }
          ,
          i.insertRule = function(t, e) {
              if (c(l(t), "`insertRule` accepts only strings"),
              this._optimizeForSpeed) {
                  var i = this.getSheet();
                  "number" != typeof e && (e = i.cssRules.length);
                  try {
                      i.insertRule(t, e)
                  } catch (e) {
                      return o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                      -1
                  }
              } else {
                  var n = this._tags[e];
                  this._tags.push(this.makeStyleTag(this._name, t, n))
              }
              return this._rulesCount++
          }
          ,
          i.replaceRule = function(t, e) {
              if (this._optimizeForSpeed) {
                  var i = this.getSheet();
                  if (e.trim() || (e = this._deletedRulePlaceholder),
                  !i.cssRules[t])
                      return t;
                  i.deleteRule(t);
                  try {
                      i.insertRule(e, t)
                  } catch (n) {
                      o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"),
                      i.insertRule(this._deletedRulePlaceholder, t)
                  }
              } else {
                  var n = this._tags[t];
                  c(n, "old rule at index `" + t + "` not found"),
                  n.textContent = e
              }
              return t
          }
          ,
          i.deleteRule = function(t) {
              if (this._optimizeForSpeed)
                  this.replaceRule(t, "");
              else {
                  var e = this._tags[t];
                  c(e, "rule at index `" + t + "` not found"),
                  e.parentNode.removeChild(e),
                  this._tags[t] = null
              }
          }
          ,
          i.flush = function() {
              this._injected = !1,
              this._rulesCount = 0,
              this._tags.forEach(function(t) {
                  return t && t.parentNode.removeChild(t)
              }),
              this._tags = []
          }
          ,
          i.cssRules = function() {
              var t = this;
              return this._tags.reduce(function(e, i) {
                  return i ? e = e.concat(Array.prototype.map.call(t.getSheetForTag(i).cssRules, function(e) {
                      return e.cssText === t._deletedRulePlaceholder ? null : e
                  })) : e.push(null),
                  e
              }, [])
          }
          ,
          i.makeStyleTag = function(t, e, i) {
              e && c(l(e), "makeStyleTag accepts only strings as second parameter");
              var n = document.createElement("style");
              this._nonce && n.setAttribute("nonce", this._nonce),
              n.type = "text/css",
              n.setAttribute("data-" + t, ""),
              e && n.appendChild(document.createTextNode(e));
              var s = document.head || document.getElementsByTagName("head")[0];
              return i ? s.insertBefore(n, i) : s.appendChild(n),
              n
          }
          ,
          a(t.prototype, [{
              key: "length",
              get: function() {
                  return this._rulesCount
              }
          }]),
          e && a(t, e),
          t
      }();
      function c(t, e) {
          if (!t)
              throw Error("StyleSheet: " + e + ".")
      }
      var h = function(t) {
          for (var e = 5381, i = t.length; i; )
              e = 33 * e ^ t.charCodeAt(--i);
          return e >>> 0
      }
        , d = {};
      function p(t, e) {
          if (!e)
              return "jsx-" + t;
          var i = String(e)
            , n = t + i;
          return d[n] || (d[n] = "jsx-" + h(t + "-" + i)),
          d[n]
      }
      function f(t, e) {
          var i = t + e;
          return d[i] || (d[i] = e.replace(/__jsx-style-dynamic-selector/g, t)),
          d[i]
      }
      var m = function() {
          function t(t) {
              var e = void 0 === t ? {} : t
                , i = e.styleSheet
                , n = void 0 === i ? null : i
                , s = e.optimizeForSpeed
                , r = void 0 !== s && s;
              this._sheet = n || new u({
                  name: "styled-jsx",
                  optimizeForSpeed: r
              }),
              this._sheet.inject(),
              n && "boolean" == typeof r && (this._sheet.setOptimizeForSpeed(r),
              this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
              this._fromServer = void 0,
              this._indices = {},
              this._instancesCounts = {}
          }
          var e = t.prototype;
          return e.add = function(t) {
              var e = this;
              void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(t.children),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
              this._fromServer || (this._fromServer = this.selectFromServer(),
              this._instancesCounts = Object.keys(this._fromServer).reduce(function(t, e) {
                  return t[e] = 0,
                  t
              }, {}));
              var i = this.getIdAndRules(t)
                , n = i.styleId
                , s = i.rules;
              if (n in this._instancesCounts) {
                  this._instancesCounts[n] += 1;
                  return
              }
              var r = s.map(function(t) {
                  return e._sheet.insertRule(t)
              }).filter(function(t) {
                  return -1 !== t
              });
              this._indices[n] = r,
              this._instancesCounts[n] = 1
          }
          ,
          e.remove = function(t) {
              var e = this
                , i = this.getIdAndRules(t).styleId;
              if (function(t, e) {
                  if (!t)
                      throw Error("StyleSheetRegistry: " + e + ".")
              }(i in this._instancesCounts, "styleId: `" + i + "` not found"),
              this._instancesCounts[i] -= 1,
              this._instancesCounts[i] < 1) {
                  var n = this._fromServer && this._fromServer[i];
                  n ? (n.parentNode.removeChild(n),
                  delete this._fromServer[i]) : (this._indices[i].forEach(function(t) {
                      return e._sheet.deleteRule(t)
                  }),
                  delete this._indices[i]),
                  delete this._instancesCounts[i]
              }
          }
          ,
          e.update = function(t, e) {
              this.add(e),
              this.remove(t)
          }
          ,
          e.flush = function() {
              this._sheet.flush(),
              this._sheet.inject(),
              this._fromServer = void 0,
              this._indices = {},
              this._instancesCounts = {}
          }
          ,
          e.cssRules = function() {
              var t = this
                , e = this._fromServer ? Object.keys(this._fromServer).map(function(e) {
                  return [e, t._fromServer[e]]
              }) : []
                , i = this._sheet.cssRules();
              return e.concat(Object.keys(this._indices).map(function(e) {
                  return [e, t._indices[e].map(function(t) {
                      return i[t].cssText
                  }).join(t._optimizeForSpeed ? "" : "\n")]
              }).filter(function(t) {
                  return !!t[1]
              }))
          }
          ,
          e.styles = function(t) {
              var e, i;
              return e = this.cssRules(),
              void 0 === (i = t) && (i = {}),
              e.map(function(t) {
                  var e = t[0]
                    , n = t[1];
                  return r.default.createElement("style", {
                      id: "__" + e,
                      key: "__" + e,
                      nonce: i.nonce ? i.nonce : void 0,
                      dangerouslySetInnerHTML: {
                          __html: n
                      }
                  })
              })
          }
          ,
          e.getIdAndRules = function(t) {
              var e = t.children
                , i = t.dynamic
                , n = t.id;
              if (i) {
                  var s = p(n, i);
                  return {
                      styleId: s,
                      rules: Array.isArray(e) ? e.map(function(t) {
                          return f(s, t)
                      }) : [f(s, e)]
                  }
              }
              return {
                  styleId: p(n),
                  rules: Array.isArray(e) ? e : [e]
              }
          }
          ,
          e.selectFromServer = function() {
              return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(t, e) {
                  return t[e.id.slice(2)] = e,
                  t
              }, {})
          }
          ,
          t
      }()
        , g = s.createContext(null);
      g.displayName = "StyleSheetContext";
      var v = r.default.useInsertionEffect || r.default.useLayoutEffect
        , y = new m;
      function b(t) {
          var e = y || s.useContext(g);
          return e && v(function() {
              return e.add(t),
              function() {
                  e.remove(t)
              }
          }, [t.id, String(t.dynamic)]),
          null
      }
      b.dynamic = function(t) {
          return t.map(function(t) {
              return p(t[0], t[1])
          }).join(" ")
      }
      ,
      e.style = b
  },
  7947: function(t, e, i) {
      "use strict";
      t.exports = i(4825).style
  },
  353: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(5893)
        , s = i(7294)
        , r = i(4304)
        , a = i(7544)
        , o = i.n(a);
      let l = console.warn;
      console.warn = function() {
          for (var t, e = arguments.length, i = Array(e), n = 0; n < e; n++)
              i[n] = arguments[n];
          null !== (t = i[0]) && void 0 !== t && t.includes('The AudioContext is "suspended"') || l(...i)
      }
      ;
      class u extends o() {
          static async getInitialProps(t) {
              let e = await o().getInitialProps(t)
                , i = t.ctx.req ? t.ctx.req.headers["user-agent"] : navigator.userAgent
                , n = /iPhone|Android/i.test(i);
              return {
                  ...e,
                  pageProps: {
                      ...e.pageProps,
                      isMobile: n
                  }
              }
          }
          render() {
              let {Component: t, pageProps: e} = this.props;
              return (0,
              n.jsxs)(n.Fragment, {
                  children: [(0,
                  n.jsx)(r.Wi, {
                      trackPageViews: !0
                  }), (0,
                  n.jsx)("div", {
                      children: e.isMobile ? s.createElement(i(27).default, e) : s.createElement(t, e)
                  })]
              })
          }
      }
      e.default = u
  },
  6493: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(7294)
        , s = i(6955);
      class r extends n.Component {
          createBackgroundMusic() {
              let t = new s.E8(10).toDestination()
                , e = new s.wm("8n",.5).toDestination()
                , i = new s.v2(s.WV,{
                  volume: -Infinity,
                  oscillator: {
                      type: "sine"
                  },
                  envelope: {
                      attack: .1,
                      decay: .3,
                      sustain: .4,
                      release: 1
                  }
              }).connect(t).connect(e)
                , n = new s.CF({
                  volume: -Infinity,
                  envelope: {
                      sustain: .3,
                      attack: .02,
                      decay: .1,
                      release: .2
                  }
              }).toDestination();
              this.melodicPattern = new s.cf( (t, e) => {
                  i.triggerAttackRelease(e, "2n", t)
              }
              ,["C3", "G3", "Eb3", "F3", "G3", "C4", "Bb3", "F3"],"random"),
              this.bassPattern = new s.cf( (t, e) => {
                  n.triggerAttackRelease(e, "2n", t)
              }
              ,["C2", "G2", "C2", "Bb2"],"random")
          }
          startBackgroundMusic() {
              "running" !== s.Do.state && s.Do.resume(),
              this.melodicPattern.start(0),
              this.bassPattern.start(0),
              s.J7.start()
          }
          playSound() {
              if (this.synth)
                  try {
                      "running" !== s.Do.state && s.BL();
                      let t = s.zO();
                      if (t - this.lastTriggerTime > .05) {
                          let e = Math.floor(Math.random() * this.notes.length)
                            , i = this.notes[e];
                          this.synth.triggerAttackRelease(i, "8n"),
                          this.lastTriggerTime = t
                      }
                  } catch (t) {
                      console.error(t)
                  }
          }
          playTypingSound() {
              if (this.typingSynth)
                  try {
                      "running" !== s.Do.state && s.BL();
                      let t = s.zO();
                      if (t - this.lastTriggerTime > .05) {
                          let e = Math.floor(Math.random() * this.notes.length)
                            , i = this.notes[e];
                          this.typingSynth.triggerAttackRelease(i, "16n"),
                          this.lastTriggerTime = t
                      }
                  } catch (t) {
                      console.error(t)
                  }
          }
          ensureToneStarted() {
              "running" !== s.Do.state && s.BL()
          }
          render() {
              return null
          }
          constructor(t) {
              super(t),
              this.synth = new s.WV({
                  oscillator: {
                      type: "sine"
                  },
                  envelope: {
                      attack: .005
                  }
              }).toDestination(),
              this.synth.volume.value = -Infinity,
              this.typingSynth = new s.WV({
                  oscillator: {
                      type: "sine"
                  },
                  volume: -Infinity,
                  envelope: {
                      attack: .005,
                      decay: .1,
                      sustain: .2,
                      release: .2
                  }
              }).toDestination(),
              this.notes = ["C4", "Eb4", "F4", "Gb4", "G4", "Bb4"],
              this.lastTriggerTime = 0,
              this.createBackgroundMusic()
          }
      }
      e.default = r
  },
  8229: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(5893)
        , s = i(7294)
        , r = i(8978)
        , a = i.n(r)
        , o = i(6038);
      class l {
          init() {
  const t = window.matchMedia("(min-width: 1000px)").matches;

  this.allImagesLoaded(() => {
    this.initialImageSizing(),
    this.applyScaleToImages();

    if (!t) {
      const e = document.querySelectorAll(".".concat(a().physicsContainer, " img"));
      e.forEach((t, e) => {
        const i = this.initialPositions[e];
        i && (
          t.style.left = "".concat(i.left, "px"),
          t.style.width = "".concat(i.width, "px"),
          t.style.height = "".concat(i.height, "px"),
          t.style.bottom = "".concat(i.bottom, "px"),
          t.style.transform = "rotate(0deg)",
          t.style.opacity = "1",
          t.style.pointerEvents = "auto",
          t.classList.add(a().detached),
          this.detachedImages.add(t)
        )
      }),
      this.clickedImagesCount = e.length,
      this.onAllImagesClicked();
      return;
    }

    this.physicsSimulation(),
    this.addClickListeners()
  }),

  window.addEventListener("resize", () => {
    clearTimeout(this.resizeTimeout),
    cancelAnimationFrame(this.animationFrameId),
    this.resizeTimeout = window.setTimeout(() => {
      const t = window.matchMedia("(min-width: 1000px)").matches;

      this.initialImageSizing(),
      this.applyScaleToImages();

      if (!t) {
        const t = document.querySelectorAll(".".concat(a().physicsContainer, " img"));
        t.forEach((t, e) => {
          const i = this.initialPositions[e];
          i && (
            t.style.left = "".concat(i.left, "px"),
            t.style.width = "".concat(i.width, "px"),
            t.style.height = "".concat(i.height, "px"),
            t.style.bottom = "".concat(i.bottom, "px"),
            t.style.transform = "rotate(0deg)",
            t.style.opacity = "1",
            t.style.pointerEvents = "auto",
            t.classList.add(a().detached),
            this.detachedImages.add(t)
          )
        }),
        this.clickedImagesCount = t.length,
        this.onAllImagesClicked();
        return;
      }

      this.physicsSimulation(),
      this.addClickListeners()
    }, this.config.debounceDelay)
  }),

  t && window.addEventListener("mousemove", t => {
    this.updateMousePosition(t.clientX, window.innerHeight - t.clientY)
  }),

  window.addEventListener("touchmove", e => {
    if (!t) return;
    let i = e.touches[0];
    this.updateMousePosition(i.clientX, window.innerHeight - i.clientY)
  }),

  this.applyMessageConfig()
}

          applyMessageConfig() {
              this.rigidBody = document.querySelector(".".concat(a().rigidBody)),
              this.introRigidBody = document.querySelector(".intro"),
              this.rigidBody && (this.rigidBody.textContent = this.config.rigidBodyMessage || "",
              this.rigidBody.style.fontSize = this.config.rigidBodyFontSize || "16px")
          }
          physicsSimulation() {
              var t, e, i, n, s, r, o, l;
              let u = document.querySelectorAll(".".concat(a().physicsContainer, " img"))
                , c = document.querySelector(".".concat(a().physicsContainer))
                , h = c.clientWidth
                , d = c.clientHeight;
              this.balls = [];
              let p = [];
              this.rigidBody = document.querySelector(".".concat(a().rigidBody));
              let f = {
                  left: this.rigidBody.offsetLeft,
                  bottom: this.rigidBody.offsetTop + this.rigidBody.offsetHeight,
                  right: this.rigidBody.offsetLeft + this.rigidBody.offsetWidth,
                  top: this.rigidBody.offsetTop,
                  width: this.rigidBody.offsetWidth,
                  height: this.rigidBody.offsetHeight
              }
                , m = {
                  left: (null === (t = this.introRigidBody) || void 0 === t ? void 0 : t.offsetLeft) || 0,
                  bottom: ((null === (e = this.introRigidBody) || void 0 === e ? void 0 : e.offsetTop) || 0) + ((null === (i = this.introRigidBody) || void 0 === i ? void 0 : i.offsetHeight) || 0),
                  right: ((null === (n = this.introRigidBody) || void 0 === n ? void 0 : n.offsetLeft) || 0) + ((null === (s = this.introRigidBody) || void 0 === s ? void 0 : s.offsetWidth) || 0),
                  top: (null === (r = this.introRigidBody) || void 0 === r ? void 0 : r.offsetTop) || 0,
                  width: (null === (o = this.introRigidBody) || void 0 === o ? void 0 : o.offsetWidth) || 0,
                  height: (null === (l = this.introRigidBody) || void 0 === l ? void 0 : l.offsetHeight) || 0
              };
              this.mouseRigidBody = document.querySelector(".".concat(a().mouseRigidBody)),
              this.updateMouseRigidBodyPosition();
              let g = {
                  element: this.mouseRigidBody,
                  width: this.mouseRigidBody.offsetWidth,
                  height: this.mouseRigidBody.offsetHeight,
                  x: this.mousePosition.x - this.mouseRigidBody.offsetWidth / 2,
                  y: this.mousePosition.y - this.mouseRigidBody.offsetHeight / 2,
                  vx: 0,
                  vy: 0,
                  angle: 0,
                  vAngle: 0
              };
              this.balls.push(g),
              u.forEach(t => {
                  if (!this.detachedImages.has(t)) {
                      let e = this.getRandomPosition(h, d, t.offsetWidth, t.offsetHeight, p, f, m)
                        , i = {
                          element: t,
                          width: t.offsetWidth,
                          height: t.offsetHeight,
                          x: e.x,
                          y: e.y,
                          vx: (Math.random() - .5) * this.config.velocityFactor,
                          vy: (Math.random() - .5) * this.config.velocityFactor,
                          angle: 0,
                          vAngle: (Math.random() - .5) * this.config.rotationSpeedFactor
                      };
                      p.push({
                          left: i.x,
                          bottom: i.y,
                          right: i.x + i.width,
                          top: i.y + i.height
                      }),
                      this.balls.push(i)
                  }
              }
              );
              let v = () => {
                  g.x = this.mousePosition.x - g.width / 2,
                  g.y = this.mousePosition.y - g.height / 2,
                  g.vx = this.mouseVelocity.vx,
                  g.vy = this.mouseVelocity.vy,
                  this.balls.forEach(t => {
                      t !== g && !t.element.classList.contains("detached") && (t.x += t.vx,
                      t.y += t.vy,
                      t.angle += t.vAngle,
                      (t.x <= 0 || t.x + t.width >= h) && (t.vx *= -1 * this.config.dampingFactor,
                      t.vAngle *= -1,
                      t.x = Math.max(0, Math.min(t.x, h - t.width))),
                      (t.y <= 0 || t.y + t.height >= d) && (t.vy *= -1 * this.config.dampingFactor,
                      t.vAngle *= -1,
                      t.y = Math.max(0, Math.min(t.y, d - t.height))));
                      let e = {
                          left: t.x,
                          bottom: t.y,
                          right: t.x + t.width,
                          top: t.y + t.height
                      };
                      t !== g && this.isOverlapping(e, f) && this.handleCollision(t, f),
                      t !== g && this.isOverlapping(e, m) && this.handleCollision(t, m),
                      t.element.style.left = "".concat(t.x, "px"),
                      t.element.style.bottom = "".concat(t.y, "px"),
                      t.element.style.transform = "rotate(".concat(t.angle, "deg)")
                  }
                  );
                  for (let t = 0; t < this.balls.length; t++)
                      for (let e = t + 1; e < this.balls.length; e++) {
                          let i = this.balls[t]
                            , n = this.balls[e]
                            , s = {
                              left: i.x,
                              bottom: i.y,
                              right: i.x + i.width,
                              top: i.y + i.height
                          }
                            , r = {
                              left: n.x,
                              bottom: n.y,
                              right: n.x + n.width,
                              top: n.y + n.height
                          };
                          this.isOverlapping(s, r) && ([i.vx,n.vx] = [n.vx * this.config.dampingFactor, i.vx * this.config.dampingFactor],
                          [i.vy,n.vy] = [n.vy * this.config.dampingFactor, i.vy * this.config.dampingFactor],
                          [i.vAngle,n.vAngle] = [n.vAngle, i.vAngle],
                          Math.min(s.right - r.left, r.right - s.left) < Math.min(s.top - r.bottom, r.top - s.bottom) ? (i.x += i.vx,
                          n.x += n.vx) : (i.y += i.vy,
                          n.y += n.vy))
                      }
                  g.vx *= .9,
                  g.vy *= .9,
                  this.animationFrameId = requestAnimationFrame(v)
              }
              ;
              cancelAnimationFrame(this.animationFrameId),
              v()
          }
          handleCollision(t, e) {
              t.vx *= -1 * this.config.dampingFactor,
              t.vy *= -1 * this.config.dampingFactor,
              t.vAngle *= -1,
              Math.min(t.x + t.width - e.left, e.right - t.x) < Math.min(t.y + t.height - e.bottom, e.top - t.y) ? t.x += t.vx : t.y += t.vy
          }
          isOverlapping(t, e) {
              return !(t.right < e.left || t.left > e.right || t.bottom > e.top || t.top < e.bottom)
          }
          getRandomPosition(t, e, i, n, s, r, a) {
              let o, l;
              let u = .3 * e
                , c = .7 * e;
              do {
                  l = !1;
                  let h = Math.random() * (t - i)
                    , d = .5 > Math.random() ? Math.random() * u : c + Math.random() * (e - c - n);
                  if (o = {
                      left: h,
                      top: d + n,
                      right: h + i,
                      bottom: d
                  },
                  this.isOverlapping(o, r) || this.isOverlapping(o, a))
                      l = !0;
                  else
                      for (let t = 0; t < s.length; t++)
                          if (this.isOverlapping(o, s[t])) {
                              l = !0;
                              break
                          }
              } while (l);
              return {
                  x: o.left,
                  y: o.bottom
              }
          }
          setScale(t) {
              this.config.scale = t,
              this.applyScaleToImages()
          }
          applyScaleToImages() {
              document.querySelectorAll(".".concat(a().physicsContainer, " img")).forEach(t => {
                  if (!this.detachedImages.has(t)) {
                      let e = parseFloat(t.style.width) * this.config.scale
                        , i = parseFloat(t.style.height) * this.config.scale;
                      t.style.width = "".concat(e, "px"),
                      t.style.height = "".concat(i, "px")
                  }
              }
              )
          }
          updateMousePosition(t, e) {
              this.mousePosition.x = t,
              this.mousePosition.y = e,
              this.mouseVelocity.vx = (this.mousePosition.x - this.prevMousePosition.x) * this.config.mouseForceFactor,
              this.mouseVelocity.vy = (this.mousePosition.y - this.prevMousePosition.y) * this.config.mouseForceFactor,
              this.prevMousePosition.x = this.mousePosition.x,
              this.prevMousePosition.y = this.mousePosition.y,
              this.updateMouseRigidBodyPosition()
          }
          initialImageSizing() {
              let t = document.querySelectorAll(".".concat(a().physicsContainer, " img"))
                , e = document.body.clientWidth - this.config.containerPadding
                , i = 0;
              t.forEach(t => {
                  i += t.naturalWidth
              }
              );
              let n = e / i
                , s = this.config.initialLeftMargin;
              t.forEach( (t, e) => {
                  let i = t.naturalWidth * n
                    , r = t.naturalHeight * n
                    , a = parseFloat(window.getComputedStyle(t).marginRight) || 0;
                  t.style.width = "".concat(i, "px"),
                  t.style.height = "".concat(r, "px"),
                  t.style.left = "".concat(s, "px"),
                  this.fadeInApplied || t.classList.contains("fadeInApplied") || (o.p8.fromTo(t, {
                      opacity: 0,
                      duration: 1
                  }, {
                      opacity: 1,
                      ease: "back.out(1.3)",
                      delay: e
                  }),
                  t.classList.add("fadeInApplied")),
                  this.initialPositions[e] = {
                      left: s,
                      width: i,
                      height: r,
                      bottom: this.config.initialBottomMargin,
                      angle: 0,
                      marginRight: a
                  },
                  s += i + a
              }
              )
          }
          allImagesLoaded(t) {
              let e = document.querySelectorAll(".".concat(a().physicsContainer, " img"))
                , i = 0;
              e.forEach(n => {
                  n.complete ? i++ : n.addEventListener("load", () => {
                      ++i === e.length && t()
                  }
                  )
              }
              ),
              i === e.length && t()
          }
          updateMouseRigidBodyPosition() {
              let t = this.mouseRigidBody;
              t.style.left = "".concat(this.mousePosition.x, "px"),
              t.style.bottom = "".concat(this.mousePosition.y, "px")
          }
          addClickListeners() {
              document.querySelectorAll(".".concat(a().physicsContainer, " img")).forEach( (t, e) => {
                  t.addEventListener("click", this.handleImageClick.bind(this, t, e))
              }
              )
          }
          handleImageClick(t, e) {
              this.playClickSound(),
              this.detachImage(t, e)
          }
          playClickSound() {
              "function" == typeof this.config.playSound && this.config.playSound()
          }
          detachImage(t, e) {
              if (this.detachedImages.has(t))
                  return;
              let {left: i, width: n, height: s, bottom: r, marginRight: l} = this.initialPositions[e];
              o.p8.to(t, {
                  scale: .5,
                  duration: .15,
                  ease: "back.out(1.3)",
                  opacity: .4,
                  onComplete: function() {
                      o.p8.to(t, {
                          opacity: 1,
                          duration: .3,
                          left: "".concat(i, "px"),
                          width: "".concat(n, "px"),
                          height: "".concat(s, "px"),
                          bottom: "".concat(r, "px"),
                          transform: "rotate(0deg)",
                          marginRight: "".concat(l, "px"),
                          ease: "back.out(1.3)"
                      })
                  }
              });
              let u = this.balls.findIndex(e => e.element === t);
              -1 !== u && this.balls.splice(u, 1),
              t.classList.add("detached"),
              this.detachedImages.add(t),
              this.clickedImagesCount++,
              t.style.pointerEvents = "none",
              this.clickedImagesCount === document.querySelectorAll(".".concat(a().physicsContainer, " img")).length && this.onAllImagesClicked()
          }
          onAllImagesClicked() {
              this.fadeInApplied = !0,
              document.querySelector(".".concat(a().physicsContainer)),
              this.rigidBody && (this.rigidBody.style.visibility = "hidden",
              this.rigidBody.style.opacity = "0"),
              this.config.onAllImagesClicked && this.config.onAllImagesClicked(),
              document.querySelectorAll(".".concat(a().physicsContainer, " img")).forEach(t => {
                  t.removeEventListener("click", this.handleImageClick.bind(this, t)),
                  t.style.pointerEvents = "auto",
                  t.addEventListener("mouseenter", this.handleImageMouseEnter.bind(this, t))
              }
              )
          }
          handleImageMouseEnter(t) {
              let e = Array.from(document.querySelectorAll(".".concat(a().physicsContainer, " img"))).indexOf(t)
                , {left: i, width: n, height: s, bottom: r, marginRight: o} = this.initialPositions[e]
          }
          animate(t, e, i, n, s) {
              let r = performance.now()
                , a = {};
              for (let i in e)
                  "transform" === i ? a[i] = getComputedStyle(t).transform || "rotate(0deg)" : "opacity" === i ? a[i] = parseFloat(getComputedStyle(t)[i]) || 1 : a[i] = parseFloat(getComputedStyle(t)[i]) || 0;
              let o = l => {
                  let u = Math.min((l - r) / i, 1)
                    , c = n(u);
                  for (let i in e)
                      if ("transform" === i) {
                          let n = "none" === a[i] ? 0 : parseFloat(a[i].split("(")[1])
                            , s = parseFloat(e[i].split("(")[1]);
                          t.style.transform = "rotate(".concat(n + (s - n) * c, "deg)")
                      } else if ("opacity" === i) {
                          let n = a[i]
                            , s = parseFloat(e[i]);
                          t.style.opacity = n + (s - n) * c
                      } else if ("marginRight" === i)
                          t.style[i] = e[i];
                      else {
                          let n = a[i]
                            , s = parseFloat(e[i]);
                          t.style[i] = n + (s - n) * c + "px"
                      }
                  u < 1 ? requestAnimationFrame(o) : s && s()
              }
              ;
              requestAnimationFrame(o)
          }
          easeOutBack(t) {
              return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2)
          }
          easeInOut(t) {
              return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          }
          constructor(t) {
              this.config = t,
              this.balls = [],
              this.animationFrameId = null,
              this.resizeTimeout = null,
              this.rigidBody = null,
              this.introRigidBody = null,
              this.mouseRigidBody = null,
              this.mousePosition = {
                  x: 0,
                  y: 0
              },
              this.prevMousePosition = {
                  x: 0,
                  y: 0
              },
              this.mouseVelocity = {
                  vx: 0,
                  vy: 0
              },
              this.initialPositions = [],
              this.detachedImages = new Set,
              this.clickedImagesCount = 0,
              this.fadeInApplied = !1
          }
      }
      e.default = (0,
      s.forwardRef)( (t, e) => {
          let i = s.useRef(null);
          return (0,
          s.useImperativeHandle)(e, () => ({
              setPhysicsContainerStyle(t, e) {
                  let i = document.querySelector(".".concat(a().physicsContainer));
                  i && i.style.setProperty(t, e)
              },
              getPhysicsContainer: () => document.querySelector(".".concat(a().physicsContainer)),
              setScale(t) {
                  var e;
                  null === (e = i.current) || void 0 === e || e.setScale(t)
              },
              animateScale(t, e) {
                  let i = document.querySelector(".".concat(a().physicsContainer));
                  i && o.p8.to(i, {
                      scale: t,
                      duration: e,
                      ease: "power3.inOut"
                  })
              }
          })),
          (0,
          s.useEffect)( () => {
              let e = new l({
                  scale: t.scale || .5,
                  velocityFactor: t.velocityFactor || 1,
                  rotationSpeedFactor: t.rotationSpeedFactor || 4,
                  debounceDelay: t.debounceDelay || 200,
                  mouseForceFactor: t.mouseForceFactor || .05,
                  opacityDuration: t.opacityDuration || 100,
                  positionDuration: t.positionDuration || 300,
                  rigidBodyMessage: t.rigidBodyMessage || "",
                  rigidBodyFontSize: t.rigidBodyFontSize || "16px",
                  onAllImagesClicked: t.onAllImagesClicked,
                  containerPadding: t.containerPadding || 20,
                  initialLeftMargin: t.initialLeftMargin || 10,
                  initialBottomMargin: t.initialBottomMargin || 5,
                  dampingFactor: t.dampingFactor || .9,
                  playSound: t.playSound
              });
              i.current = e,
              e.init()
          }
          , [t]),
          (0,
          n.jsxs)("div", {
              className: a().physicsContainer,
              children: [(0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/T.svg",
                  style: {
                      marginBottom: "0px",
                      opacity: 0
                  }
              }), (0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/underscore.svg",
                  style: {
                      opacity: 0,
                      marginRight: "0px",
                      marginLeft: "-1.8vw"
                  }
              }), (0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/a.svg",
                  style: {
                      marginBottom: "0px",
                      opacity: 0,
                      marginLeft: "-1.2vw"
                  }
              }), (0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/lt.svg",
                  style: {
                      opacity: 0,
                      marginLeft: "-.65vw"
                  }
              }), (0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/e.svg",
                  className: "i-l",
                  style: {
                      opacity: 0,
                      marginLeft: "-.6vw",
                  }
              }), (0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/l.svg",
                  style: {
                      marginLeft: "0vw",
                      marginBottom: "0px",
                      opacity: 0
                  }
              }),(0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/i.svg",
                  style: {
                      marginLeft: "0vw",
                      marginBottom: "0px",
                      opacity: 0
                  }
              }),(0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/e.svg",
                  style: {
                      marginLeft: "0vw",
                      marginBottom: "0px",
                      opacity: 0
                  }
              }),(0,
              n.jsx)("img", {
                  src: "public/assets/char3/works/r.svg",
                  style: {
                      marginLeft: "0vw",
                      marginBottom: "0px",
                      opacity: 0
                  }
              }), (0,
              n.jsx)("div", {
                  id: "rigidBody",
                  className: a().rigidBody,
                  children: t.rigidBodyMessage || "Tap all the floating letters to start"
              }), (0,
              n.jsx)("div", {
                  className: a().mouseRigidBody
              })]
          })
      }
      )
  },
  1766: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(5893)
        , s = i(7294)
        , r = i(6955);
      i(8382);
      class a extends s.Component {
          componentDidMount() {
              this.animateBars()
          }
          render() {
              return (0,
              n.jsx)("div", {
                  className: "audio-bars",
                  onClick: this.toggleAudio,
                  children: this.barRefs.map( (t, e) => (0,
                  n.jsx)("div", {
                      className: "bar",
                      ref: t
                  }, e))
              })
          }
          constructor(t) {
              super(t),
              this.toggleAudio = () => {
                  let {audioControllerRef: t} = this.props;
                  if ("started" === r.J7.state)
                      r.J7.stop(),
                      this.barRefs.forEach(t => {
                          var e;
                          return null === (e = t.current) || void 0 === e ? void 0 : e.classList.add("paused")
                      }
                      ),
                      this.setState({
                          isPlaying: !1
                      });
                  else {
                      var e;
                      r.J7.start(),
                      null === (e = t.current) || void 0 === e || e.startBackgroundMusic(),
                      this.barRefs.forEach(t => {
                          var e;
                          return null === (e = t.current) || void 0 === e ? void 0 : e.classList.remove("paused")
                      }
                      ),
                      this.setState({
                          isPlaying: !0
                      })
                  }
              }
              ,
              this.animateBars = () => {
                  this.barRefs.forEach(t => {
                      var e;
                      null === (e = t.current) || void 0 === e || e.style.setProperty("animation-duration", "".concat(.3 * Math.random() + .1, "s"))
                  }
                  )
              }
              ,
              this.state = {
                  isPlaying: !1
              },
              this.barRefs = [s.createRef(), s.createRef(), s.createRef()]
          }
      }
      e.default = a
  },
  27: function(t, e, i) {
      "use strict";
      i.r(e);
      var n = i(5893)
        , s = i(7947)
        , r = i.n(s)
        , a = i(7294)
        , o = i(9008)
        , l = i.n(o)
        , u = i(6038)
        , c = i(5675)
        , h = i.n(c)
        , d = i(2870)
        , p = i(6493)
        , f = i(5123)
        , m = i(8229)
        , g = i(1766);
      i(324);
      let v = (0,
      i(2231).T)();
      function y(t, e) {
          return "".concat(t, "-").concat(String(Math.floor(Math.random() * e) + 1).padStart(2, "0"), ".webp")
      }
      let b = y("t", 5)
        , x = y("f", 5);
      class w extends a.Component {
          initializeObserver() {
              let t = new IntersectionObserver(t => {
                  t.forEach(t => {
                      if (t.isIntersecting) {
                          var e;
                          null === (e = this.audioControllerRef.current) || void 0 === e || e.playSound()
                      }
                  }
                  )
              }
              ,{
                  threshold: .5
              });
              this.containerRef.current.querySelectorAll(".box").forEach(e => {
                  t.observe(e)
              }
              )
          }
          componentDidMount() {
              var t;
              document.body.classList.add("mobile"),
              this.containerHeight = (null === (t = this.containerRef.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
              this.translateY = -(this.containerHeight - 40),
              this.wrapIntroText()
          }
          wrapIntroText() {
              let t = document.createElement("div");
              t.className = "intro",
              t.innerHTML = "<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ex ac tortor aliquet tincidunt id vitae arcu. Nullam euismod, lacus a tincidunt dictum, augue ligula sollicitudin libero, nec vehicula turpis justo vel erat. Ut fermentum nisi at sapien luctus, eu eleifend justo ultrices. Aliquam vehicula, lectus sit amet mollis cursus, lorem felis consequat est, ut luctus libero risus sit amet arcu. Pellentesque at risus non elit porttitor viverra.  </span></p>";
              let e = t.cloneNode(!0);
              e.className = "intro background",
              document.body.appendChild(t),
              document.body.insertBefore(e, t.nextSibling);
              let i = f.L.wrapWords(t.querySelector("p"))
                , n = f.L.wrapWords(e.querySelector("p"));
              u.p8.set([...i.words], {
                  opacity: 0
              }),
              u.p8.set([...n.words], {
                  opacity: .2
              }),
              this.introBackground = e,
              this.introDiv = t;
              let s = u.p8.timeline({});
              i.words.forEach( (t, e) => {
                  let i = 0
                    , n = t.textContent.slice(-1);
                  "," === n || ";" === n ? i = .5 : ("." === n || "!" === n || "?" === n) && (i = .4),
                  s.to(t, {
                      opacity: 1,
                      duration: .09,
                      onComplete: () => {}
                  }),
                  i > 0 && s.to({}, {
                      duration: i
                  })
              }
              )
          }
          initScrollingBoxAnimator() {
              this.container = this.containerRef.current,
              this.items.forEach( (t, e) => {
                  let i = u.p8.to(this.container.querySelectorAll(".box")[e], {
                      y: "".concat(this.translateY, "px"),
                      scale: .73,
                      duration: 7,
                      paused: !0,
                      ease: "back.out(1.3)",
                      repeat: -1
                  });
                  i.progress(e / this.numberOfBoxes),
                  this.animations.push(i),
                  this.container.querySelectorAll(".box")[e].addEventListener("click", () => {
                      var t;
                      null === (t = this.audioControllerRef.current) || void 0 === t || t.playSound();
                      let i = this.createClone(this.container.querySelectorAll(".box")[e]);
                      i.classList.add("cloneMobile"),
                      i.setAttribute("data-index", this.container.querySelectorAll(".box")[e].getAttribute("data-index")),
                      this.setOpacityForAllBoxes(0),
                      this.animateWhiteEffect(i),
                      this.disablePointerEventsForOtherBoxes(i),
                      this.stopAutoScroll()
                  }
                  )
              }
              ),
              this.updateZIndexes(),
              this.setupInteractionListeners(),
              this.startFastAutoScroll(),
              this.animate()
          }
          disablePointerEventsForOtherBoxes(t) {
              this.container.querySelectorAll(".box").forEach(e => {
                  e !== t && e.classList.add("no-pointer-events")
              }
              )
          }
          enablePointerEventsForAllBoxes() {
              this.container.querySelectorAll(".box").forEach(t => {
                  t.classList.remove("no-pointer-events")
              }
              )
          }
          setupInteractionListeners() {
              let t = this;
              window.addEventListener("touchstart", function(e) {
                  t.lastTouchY = e.touches[0].clientY,
                  t.stopAutoScroll()
              }),
              window.addEventListener("touchmove", function(e) {
                  let i = e.touches[0].clientY
                    , n = i > t.lastTouchY ? -1 : 1;
                  t.targetProgress += (t.lastTouchY - i) / window.innerHeight,
                  t.lastTouchY = i,
                  t.scrollDirection = n,
                  t.stopAutoScroll(),
                  t.startAutoScrollTimeout()
              }),
              window.addEventListener("mousedown", function(e) {
                  t.isMouseDown = !0,
                  t.lastMouseY = e.clientY,
                  t.stopAutoScroll()
              }),
              window.addEventListener("mouseup", function() {
                  t.isMouseDown = !1
              }),
              window.addEventListener("mousemove", function(e) {
                  if (t.isMouseDown) {
                      let i = e.clientY
                        , n = i > t.lastMouseY ? -1 : 1;
                      t.targetProgress += (t.lastMouseY - i) / window.innerHeight,
                      t.lastMouseY = i,
                      t.scrollDirection = n,
                      t.stopAutoScroll(),
                      t.startAutoScrollTimeout()
                  }
              })
          }
          startAutoScrollTimeout() {
              this.autoScrollTimeout && clearTimeout(this.autoScrollTimeout),
              this.autoScrollTimeout = setTimeout( () => {
                  this.autoScrolling = !0
              }
              , 100)
          }
          stopAutoScroll() {
              this.autoScrolling = !1,
              this.autoScrollTimeout && clearTimeout(this.autoScrollTimeout)
          }
          startFastAutoScroll() {
              u.p8.to(document.querySelector(".blackMobile"), {
                  opacity: 0,
                  delay: .3,
                  duration: 1.4
              }),
              this.autoScrolling = !0,
              this.scrollDirection = 1,
              this.fastScrolling = !0,
              setTimeout( () => {
                  this.fastScrolling = !1
              }
              , this.fastScrollDuration)
          }
          createWhiteDiv() {
              let t = document.createElement("div");
              return t.classList.add("whiteMobile"),
              t
          }
          createClone(t) {
              let e = t.cloneNode(!0);
              return e.style.position = "absolute",
              this.container.appendChild(e),
              e
          }
          animateWhiteEffect(t) {
              let e = t.querySelector(".whiteMobile");
              u.p8.to(e, {
                  opacity: .7,
                  duration: .2,
                  yoyo: !0,
                  repeat: 1,
                  onComplete: () => this.animateCloneToCenter(t)
              })
          }
          createCircle() {
              let t = document.createElement("div");
              return t.classList.add("circleMobile"),
              this.container.appendChild(t),
              u.p8.fromTo(t, {
                  scale: .4
              }, {
                  scale: 1,
                  duration: .3,
                  ease: "back.out(1.7)"
              }),
              t.addEventListener("click", () => {
                  var e;
                  null === (e = this.audioControllerRef.current) || void 0 === e || e.playSound(),
                  u.p8.to(t, {
                      scale: .4,
                      duration: .3,
                      ease: "back.in(1.7)",
                      onComplete: () => {
                          this.startAutoScrollTimeout(),
                          t.style.display = "none";
                          let e = document.querySelector(".menuMobile");
                          e && (e.style.display = "flex"),
                          this.animationWords && this.animationWords.isActive() ? this.animationWords.timeScale(10).eventCallback("onComplete", () => {
                              this.completeAndReverse()
                          }
                          ) : this.completeAndReverse(),
                          this.enablePointerEventsForAllBoxes(),
                          this.autoScrolling || (this.autoScrolling = !0)
                      }
                  })
              }
              ),
              this.circle = t,
              t
          }
          completeAndReverse() {
              let t = this
                , e = this.container.querySelector(".content-div")
                , i = this.container.querySelector(".duplicate-content-div");
              e && this.container.removeChild(e),
              i && this.container.removeChild(i);
              let n = this.container.querySelector(".box.cloneMobile")
                , s = this.container.querySelector(".blackMobile");
              parseInt(n.getAttribute("data-index"), 10);
              let r = document.querySelector(".gradient")
                , a = document.querySelector(".gradient2");
              u.p8.to(r, {
                  opacity: 1,
                  ease: "power2.out",
                  duration: .5
              }),
              u.p8.to(a, {
                  opacity: 1,
                  ease: "power2.out",
                  duration: .5
              }),
              u.p8.to(s, {
                  opacity: 1,
                  ease: "power2.out",
                  duration: .5,
                  onComplete: () => {
                      t.container.removeChild(n),
                      t.setOpacityForAllBoxes(1),
                      u.p8.to(s, {
                          opacity: 0,
                          ease: "power2.out",
                          duration: 1
                      })
                  }
              }),
              this.physicsSimRef.current && this.physicsSimRef.current.animateScale(1, .3)
          }
          animateCloneToCenter(t) {
              let e = parseInt(t.getAttribute("data-index"), 10)
                , i = t.getAttribute("data-title")
                , n = t.getAttribute("data-description");
              this.items[e];
              let s = document.createElement("div");
              s.classList.add("content-div"),
              s.innerHTML = "<h3>".concat(i, "</h3><p>").concat(n, "</p>");
              let r = s.cloneNode(!0);
              r.classList.add("duplicate-content-div");
              let a = s.querySelector("p");
              u.p8.set(a, {
                  opacity: .2
              }),
              u.p8.set(r.querySelector("h3"), {
                  opacity: 0
              });
              let o = f.L.wrapWords(r.querySelector("p"));
              f.L.wrapWords(s.querySelector("p")),
              o.words.forEach(t => {
                  u.p8.set(t, {
                      opacity: 0
                  })
              }
              );
              let l = this.container.offsetWidth / 2 - t.offsetWidth / 2
                , c = this.container.offsetHeight / 2 - t.offsetHeight / 2;
              u.p8.to(t, {
                  x: l - t.offsetLeft,
                  y: c - t.offsetTop,
                  scale: .7,
                  transformOrigin: "center center",
                  duration: .3,
                  ease: "power2.out",
                  onStart: () => {
                      var t;
                      null === (t = this.audioControllerRef.current) || void 0 === t || t.playSound(),
                      this.physicsSimRef.current && this.physicsSimRef.current.animateScale(.4, .3);
                      let e = document.querySelector(".menuMobile");
                      e && (e.style.display = "none"),
                      this.createCircle()
                  }
                  ,
                  onComplete: () => {
                      this.physicsSimRef.current && this.physicsSimRef.current.animateScale(.3, .3),
                      this.container.appendChild(s),
                      this.container.appendChild(r),
                      t.querySelector(".img-container");
                      let e = this.container.offsetWidth
                        , i = this.container.offsetHeight
                        , n = document.querySelector(".gradient")
                        , a = document.querySelector(".gradient2");
                      u.p8.to(n, {
                          opacity: 0,
                          ease: "power2.out",
                          duration: .3
                      }),
                      u.p8.to(a, {
                          opacity: 0,
                          ease: "power2.out",
                          duration: .3
                      }),
                      u.p8.to(t, {
                          width: this.container.offsetWidth,
                          height: this.container.offsetHeight,
                          x: 0,
                          y: 0,
                          scale: 1,
                          bottom: 0,
                          duration: .3,
                          ease: "power2.out",
                          opacity: .8,
                          onComplete: () => {
                              let n = t.querySelector("img")
                                , s = n.offsetWidth
                                , r = n.offsetHeight
                                , a = Math.max(0, s - e)
                                , o = Math.max(0, r - i)
                                , l = u.p8.to(n, {
                                  x: -a,
                                  duration: 40,
                                  ease: "none"
                              })
                                , c = 0
                                , h = 0
                                , d = 0
                                , p = 0
                                , f = "left"
                                , m = t => {
                                  this.stopAutoScroll();
                                  let e = "touches"in t ? t.touches[0].clientX : t.clientX
                                    , i = "touches"in t ? t.touches[0].clientY : t.clientY
                                    , s = e - c
                                    , r = (i - h) / 1.2;
                                  f = s > 0 ? "right" : "left";
                                  let l = Math.max(Math.min(d + s, 0), -a)
                                    , m = Math.max(Math.min(p + r, 0), -o);
                                  u.p8.to(n, {
                                      x: l,
                                      y: m,
                                      duration: .1,
                                      ease: "power2.out"
                                  })
                              }
                                , g = () => {
                                  let t = u.p8.getProperty(n, "x");
                                  l.kill(),
                                  l = u.p8.to(n, {
                                      x: "left" === f ? -a : 0,
                                      duration: 40 * (1 - Math.abs(t) / a),
                                      ease: "none"
                                  }),
                                  u.p8.to(n, {
                                      opacity: .9,
                                      y: 0,
                                      duration: .3,
                                      ease: "power2.out"
                                  }),
                                  u.p8.to(".content-div", {
                                      opacity: 1,
                                      duration: .3,
                                      ease: "power2.out"
                                  }),
                                  window.removeEventListener("mousemove", m),
                                  window.removeEventListener("touchmove", m)
                              }
                                , v = t => {
                                  this.stopAutoScroll(),
                                  c = "touches"in t ? t.touches[0].clientX : t.clientX,
                                  h = "touches"in t ? t.touches[0].clientY : t.clientY,
                                  d = u.p8.getProperty(n, "x"),
                                  p = u.p8.getProperty(n, "y"),
                                  l.pause(),
                                  u.p8.to(n, {
                                      opacity: 1,
                                      duration: .3,
                                      ease: "power2.out"
                                  }),
                                  u.p8.to(".content-div", {
                                      opacity: 0,
                                      duration: .3,
                                      ease: "power2.out"
                                  }),
                                  window.addEventListener("mousemove", m),
                                  window.addEventListener("touchmove", m)
                              }
                              ;
                              t.addEventListener("mousedown", v),
                              t.addEventListener("touchstart", v),
                              window.addEventListener("mouseup", g),
                              window.addEventListener("touchend", g)
                          }
                          ,
                          onStart: () => {
                              setTimeout( () => {
                                  this.animationWords = u.p8.timeline({}),
                                  o.words.forEach( (t, e) => {
                                      let i = 0
                                        , n = t.textContent.slice(-1);
                                      "," === n || ";" === n ? i = .25 : ("." === n || "!" === n || "?" === n) && (i = .4),
                                      this.animationWords.to(t, {
                                          opacity: 1,
                                          duration: .09,
                                          onComplete: () => {
                                              var t;
                                              null === (t = this.audioControllerRef.current) || void 0 === t || t.playTypingSound()
                                          }
                                      }),
                                      i > 0 && this.animationWords.to({}, {
                                          duration: i
                                      })
                                  }
                                  )
                              }
                              , 700)
                          }
                      })
                  }
              })
          }
          setOpacityForAllBoxes(t) {
              this.animations.forEach(e => {
                  let i = e.targets()[0];
                  u.p8.set(i, {
                      opacity: t
                  })
              }
              )
          }
          updateZIndexes() {
              let t = this.animations.map(t => ({
                  box: t.targets()[0],
                  progress: t.progress()
              }));
              t.sort( (t, e) => t.progress - e.progress),
              t.forEach( (t, e) => {
                  t.box.style.zIndex = this.numberOfBoxes - e
              }
              )
          }
          animate() {
              this.autoScrolling && (this.targetProgress += this.fastScrolling ? this.fastScrollSpeed : this.normalScrollSpeed * this.scrollDirection),
              this.lastProgress += (this.targetProgress - this.lastProgress) * this.easing;
              let t = this.lastProgress % 1;
              this.animations.forEach( (e, i) => {
                  let n = (t + i / this.numberOfBoxes) % 1;
                  e.progress(n)
              }
              ),
              this.updateZIndexes(),
              requestAnimationFrame(this.animate.bind(this))
          }
          render() {
              let {preloadProgress: t, imagesLoaded: e, readyToStart: i} = this.state;
              return (0,
              n.jsxs)(n.Fragment, {
                  children: [(0,
                  n.jsxs)(l(), {
                      children: [(0,
                      n.jsx)("title", {
                          className: "jsx-4cd8aa9450b705a8",
                          children: "Troyce - Transform Your Space with Expert 3D Room Design"
                      }), (0,
                      n.jsx)("meta", {
                          name: "description",
                          content: "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          property: "og:title",
                          content: "Troyce - Transform Your Space with Expert 3D Room Design",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          property: "og:description",
                          content: "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          property: "og:url",
                          content: "".concat(v),
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          name: "twitter:card",
                          content: "summary_large_image",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          name: "twitter:title",
                          content: "Troyce - Transform Your Space with Expert 3D Room Design",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          name: "twitter:description",
                          content: "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          name: "twitter:image",
                          content: "".concat(v, "/social/").concat(b),
                          className: "jsx-4cd8aa9450b705a8"
                      }), (0,
                      n.jsx)("meta", {
                          property: "og:image",
                          content: "".concat(v, "/social/").concat(x),
                          className: "jsx-4cd8aa9450b705a8"
                      })]
                  }), (0,
                  n.jsx)(r(), {
                      id: "4cd8aa9450b705a8",
                      children: 'body.mobile{text-decoration:none;color:white;margin:0;height:100vh;background-color:#000;line-height:15px;font-size:13px;letter-spacing:.2px;overflow:hidden;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Barlow Semi Condensed",sans-serif}#header{width:95%;margin:0 auto;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:99999999999;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-transform:uppercase}.container{width:100%;height:100%;background-color:black;position:fixed;top:0;left:50%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);overflow:hidden;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:1e3px;-moz-perspective:1e3px;perspective:1e3px}.box{width:100vw;height:100vw;position:absolute;bottom:-100vw;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.whiteMobile{position:absolute;top:0;left:0;width:100%;height:100%;background-color:white;opacity:0;z-index:2}.circleMobile{position:absolute;width:40px;height:40px;background-color:white;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;top:8px;right:8px;z-index:999999999999}.circleMobile::before{content:"\xd7";font-size:20px;color:black;line-height:0}.gradient,.gradient2{width:100%;position:absolute;height:33%;z-index:30;pointer-events:none}.gradient{bottom:0;background:-webkit-linear-gradient(bottom,black,transparent);background:-moz-linear-gradient(bottom,black,transparent);background:-o-linear-gradient(bottom,black,transparent);background:linear-gradient(360deg,black,transparent)}.gradient2{top:0;background:-webkit-linear-gradient(bottom,transparent,black);background:-moz-linear-gradient(bottom,transparent,black);background:-o-linear-gradient(bottom,transparent,black);background:linear-gradient(360deg,transparent,black)}.blackMobile{position:absolute;top:0;width:100%;height:100%;background:black;z-index:9223372036854775807;opacity:1;pointer-events:none}.logoMobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:999}.menuMobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:999}.menuMobile a{margin-left:15px}.content-div{position:absolute;width:100%;bottom:40px;left:0;padding:10px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;z-index:999999}.content-div span{display:block;margin-bottom:15px}.content-div h3{margin-right:30px;text-transform:uppercase}.content-div p{font-size:12px}.img-container{position:relative;width:100%;height:100%}.img-container img{-o-object-position:0%;object-position:0%;-o-object-fit:none;object-fit:none;height:100%!important;width:auto!important;pointer-events:none}.no-pointer-events{pointer-events:none}.preloader{position:fixed;top:0;left:0;width:100%;height:100%;background:white;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:black;background:white;font-size:12px;z-index:99999;text-transform:uppercase}.audio-bars{height:12px!important}.bar{background-color:white!important}.bar.paused{height:10px!important}.i-l{margin-bottom:.-6vw!important}.intro{position:fixed;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:white;z-index:99999999999999;text-transform:none;text-align:center;width:90vw;-webkit-transform:translate(-50%,-100%);-moz-transform:translate(-50%,-100%);-ms-transform:translate(-50%,-100%);-o-transform:translate(-50%,-100%);transform:translate(-50%,-100%);top:50%;left:50%;margin:0 auto;font-size:12px;line-height:13px;pointer-events:none}.intro p{font-weight:500}#rigidBody{-webkit-transform:translate(-50%,1500%)!important;-moz-transform:translate(-50%,1500%)!important;-ms-transform:translate(-50%,1500%)!important;-o-transform:translate(-50%,1500%)!important;transform:translate(-50%,1500%)!important}.invert{-webkit-filter:invert(1)!important;filter:invert(1)!important}'
                  }), !e && (0,
                  n.jsx)("div", {
                      className: "jsx-4cd8aa9450b705a8 preloader",
                      children: (0,
                      n.jsxs)("p", {
                          className: "jsx-4cd8aa9450b705a8",
                          children: ["Loading... ", t, "%"]
                      })
                  }), (0,
                  n.jsx)("div", {
                      className: "jsx-4cd8aa9450b705a8 noise"
                  }), i && (0,
                  n.jsx)("div", {
                      className: "jsx-4cd8aa9450b705a8",
                      children: (0,
                      n.jsx)(m.default, {
                          ref: this.physicsSimRef,
                          scale: .7,
                          velocityFactor: .5,
                          rotationSpeedFactor: 2,
                          debounceDelay: 200,
                          mouseForceFactor: .05,
                          opacityDuration: 100,
                          positionDuration: 300,
                          containerPadding: 20,
                          initialLeftMargin: 10,
                          initialBottomMargin: 10,
                          rigidBodyMessage: "Tap all the floating letters to start",
                          onAllImagesClicked: this.handleAllImagesClicked,
                          rigidBodyFontSize: "11px",
                          dampingFactor: .3,
                          playSound: this.playClickSound
                      })
                  }), (0,
                  n.jsxs)("div", {
                      ref: this.containerRef,
                      className: "jsx-4cd8aa9450b705a8 container",
                      children: [(0,
                      n.jsxs)("div", {
                          id: "header",
                          className: "jsx-4cd8aa9450b705a8",
                          children: [(0,
                          n.jsxs)("div", {
                              className: "jsx-4cd8aa9450b705a8 logoMobile",
                              children: ["", (0,
                              n.jsx)("br", {
                                  className: "jsx-4cd8aa9450b705a8"
                              }), " ", (0,
                              n.jsx)("br", {
                                  className: "jsx-4cd8aa9450b705a8"
                              }), " ", (0,
                              n.jsx)("br", {
                                  className: "jsx-4cd8aa9450b705a8"
                              })]
                          }), (0,
                          n.jsxs)("div", {
                              className: "jsx-4cd8aa9450b705a8 menuMobile",
                              children: [(0,
                              n.jsx)(g.default, {
                                  audioControllerRef: this.audioControllerRef
                              }), (0,
                              n.jsx)("a", {
                                  href: "https://Troyce.space/book-a-meeting",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "jsx-4cd8aa9450b705a8",
                                  children: "BOOK A MEETING"
                              }), (0,
                              n.jsx)("a", {
                                  href: "https://www.linkedin.com/company/Troyce/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "jsx-4cd8aa9450b705a8",
                                  children: "LI"
                              }), (0,
                              n.jsx)("a", {
                                  href: "https://www.instagram.com/Troyce.space/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "jsx-4cd8aa9450b705a8",
                                  children: "INS"
                              })]
                          })]
                      }), (0,
                      n.jsx)("div", {
                          className: "jsx-4cd8aa9450b705a8 gradient"
                      }), (0,
                      n.jsx)("div", {
                          className: "jsx-4cd8aa9450b705a8 gradient2"
                      }), (0,
                      n.jsx)("div", {
                          className: "jsx-4cd8aa9450b705a8 blackMobile"
                      }), this.items.map( (t, e) => (0,
                      n.jsxs)("div", {
                          "data-index": e,
                          "data-description": t.description,
                          "data-title": t.title,
                          className: "jsx-4cd8aa9450b705a8 box",
                          children: [(0,
                          n.jsx)("div", {
                              className: "jsx-4cd8aa9450b705a8 whiteMobile"
                          }), (0,
                          n.jsx)("div", {
                              className: "jsx-4cd8aa9450b705a8 img-container",
                              children: (0,
                              n.jsx)(h(), {
                                  src: t.imageUrl,
                                  alt: "Image ".concat(e),
                                  fill: !0,
                                  objectFit: "cover",
                                  loading: "eager",
                                  onLoad: this.handleImageLoad
                              })
                          })]
                      }, e))]
                  }), (0,
                  n.jsx)(p.default, {
                      ref: this.audioControllerRef
                  })]
              })
          }
          constructor(t) {
              super(t),
              this.touchStartY = null,
              this.container = null,
              this.autoScrollTimeout = null,
              this.fastScrolling = !1,
              this.circle = null,
              this.getRandomItems = (t, e) => t.sort( () => .5 - Math.random()).slice(0, e),
              this.handleStart = () => {
                  this.setState({
                      readyToStart: !1
                  }, () => {
                      this.initScrollingBoxAnimator()
                  }
                  )
              }
              ,
              this.handleImageLoad = () => {
                  this.imagesLoadedCount++;
                  let t = Math.round(this.imagesLoadedCount / this.imagesToLoad * 100);
                  this.setState({
                      preloadProgress: t
                  }, () => {
                      100 === t && (this.setState({
                          imagesLoaded: !0,
                          readyToStart: !0
                      }),
                      document.body.classList.add("invert"))
                  }
                  )
              }
              ,
              this.handleAllImagesClicked = () => {
                  var t;
                  null === (t = this.audioControllerRef.current) || void 0 === t || t.startBackgroundMusic(),
                  this.initScrollingBoxAnimator(),
                  this.initializeObserver(),
                  document.body.removeChild(this.introBackground),
                  document.body.removeChild(this.introDiv),
                  document.body.classList.remove("invert"),
                  this.physicsSimRef.current && (this.physicsSimRef.current.setPhysicsContainerStyle("filter", "invert(0)"),
                  this.physicsSimRef.current.setPhysicsContainerStyle("right", "0px"),
                  this.physicsSimRef.current.setPhysicsContainerStyle("bottom", "0px"),
                  this.physicsSimRef.current.setPhysicsContainerStyle("background", "transparent"),
                  this.physicsSimRef.current.setPhysicsContainerStyle("pointer-events", "none"))
              }
              ,
              this.playClickSound = () => {
                  var t;
                  null === (t = this.audioControllerRef.current) || void 0 === t || t.playSound()
              }
              ,
              this.state = {
                  preloadProgress: 0,
                  imagesLoaded: !1,
                  readyToStart: !1
              },
              this.containerRef = a.createRef(),
              this.physicsSimRef = a.createRef(),
              this.audioControllerRef = a.createRef(),
              this.items = this.getRandomItems(d, 10),
              this.imagesToLoad = this.items.length,
              this.imagesLoadedCount = 0,
              this.numberOfBoxes = this.items.length,
              this.containerHeight = 0,
              this.translateY = 0,
              this.repeats = 1e3,
              this.animations = [],
              this.autoScrolling = !0,
              this.isMouseDown = !1,
              this.userScrollDetected = !1,
              this.lastTouchY = 0,
              this.lastMouseY = 0,
              this.lastProgress = 0,
              this.targetProgress = 0,
              this.easing = .05,
              this.scrollDirection = 1,
              this.fastScrollDuration = 500,
              this.fastScrollSpeed = 1,
              this.normalScrollSpeed = .001,
              this.introBackground = null,
              this.introDiv = null
          }
      }
      e.default = w
  },
  5123: function(t, e, i) {
      "use strict";
      i.d(e, {
          L: function() {
              return n
          }
      });
      class n {
          static wrapWords(t) {
              let e = [];
              return t ? t.querySelectorAll("span").forEach(t => {
                  let i = t.textContent.trim().split(/(\s+)/);
                  t.textContent = "",
                  i.forEach(i => {
                      if (i.match(/^\s+$/))
                          t.appendChild(document.createTextNode(i));
                      else {
                          let n = document.createElement("div");
                          n.style.cssText = "position: relative; display: inline-block; opacity: 1;",
                          n.textContent = i,
                          t.appendChild(n),
                          e.push(n)
                      }
                  }
                  )
              }
              ) : console.error("Invalid element passed to wrapWords function"),
              {
                  words: e
              }
          }
      }
  },
  2231: function(t, e, i) {
      "use strict";
      i.d(e, {
          T: function() {
              return n
          }
      });
      let n = () => "https://Troyce.xyz"
  },
  1479: function() {},
  8382: function() {},
  324: function() {},
  8978: function(t) {
      t.exports = {
          physicsContainer: "PhysicsSimulation_physicsContainer__l20q0",
          rigidBody: "PhysicsSimulation_rigidBody__FrI2H",
          pulse: "PhysicsSimulation_pulse__uhnA3",
          mouseRigidBody: "PhysicsSimulation_mouseRigidBody__dPtOL",
          detached: "PhysicsSimulation_detached__AmdIZ",
          fadeIn: "PhysicsSimulation_fadeIn__lWhCj"
      }
  },
  7663: function(t) {
      !function() {
          var e = {
              229: function(t) {
                  var e, i, n, s = t.exports = {};
                  function r() {
                      throw Error("setTimeout has not been defined")
                  }
                  function a() {
                      throw Error("clearTimeout has not been defined")
                  }
                  function o(t) {
                      if (e === setTimeout)
                          return setTimeout(t, 0);
                      if ((e === r || !e) && setTimeout)
                          return e = setTimeout,
                          setTimeout(t, 0);
                      try {
                          return e(t, 0)
                      } catch (i) {
                          try {
                              return e.call(null, t, 0)
                          } catch (i) {
                              return e.call(this, t, 0)
                          }
                      }
                  }
                  !function() {
                      try {
                          e = "function" == typeof setTimeout ? setTimeout : r
                      } catch (t) {
                          e = r
                      }
                      try {
                          i = "function" == typeof clearTimeout ? clearTimeout : a
                      } catch (t) {
                          i = a
                      }
                  }();
                  var l = []
                    , u = !1
                    , c = -1;
                  function h() {
                      u && n && (u = !1,
                      n.length ? l = n.concat(l) : c = -1,
                      l.length && d())
                  }
                  function d() {
                      if (!u) {
                          var t = o(h);
                          u = !0;
                          for (var e = l.length; e; ) {
                              for (n = l,
                              l = []; ++c < e; )
                                  n && n[c].run();
                              c = -1,
                              e = l.length
                          }
                          n = null,
                          u = !1,
                          function(t) {
                              if (i === clearTimeout)
                                  return clearTimeout(t);
                              if ((i === a || !i) && clearTimeout)
                                  return i = clearTimeout,
                                  clearTimeout(t);
                              try {
                                  i(t)
                              } catch (e) {
                                  try {
                                      return i.call(null, t)
                                  } catch (e) {
                                      return i.call(this, t)
                                  }
                              }
                          }(t)
                      }
                  }
                  function p(t, e) {
                      this.fun = t,
                      this.array = e
                  }
                  function f() {}
                  s.nextTick = function(t) {
                      var e = Array(arguments.length - 1);
                      if (arguments.length > 1)
                          for (var i = 1; i < arguments.length; i++)
                              e[i - 1] = arguments[i];
                      l.push(new p(t,e)),
                      1 !== l.length || u || o(d)
                  }
                  ,
                  p.prototype.run = function() {
                      this.fun.apply(null, this.array)
                  }
                  ,
                  s.title = "browser",
                  s.browser = !0,
                  s.env = {},
                  s.argv = [],
                  s.version = "",
                  s.versions = {},
                  s.on = f,
                  s.addListener = f,
                  s.once = f,
                  s.off = f,
                  s.removeListener = f,
                  s.removeAllListeners = f,
                  s.emit = f,
                  s.prependListener = f,
                  s.prependOnceListener = f,
                  s.listeners = function(t) {
                      return []
                  }
                  ,
                  s.binding = function(t) {
                      throw Error("process.binding is not supported")
                  }
                  ,
                  s.cwd = function() {
                      return "/"
                  }
                  ,
                  s.chdir = function(t) {
                      throw Error("process.chdir is not supported")
                  }
                  ,
                  s.umask = function() {
                      return 0
                  }
              }
          }
            , i = {};
          function n(t) {
              var s = i[t];
              if (void 0 !== s)
                  return s.exports;
              var r = i[t] = {
                  exports: {}
              }
                , a = !0;
              try {
                  e[t](r, r.exports, n),
                  a = !1
              } finally {
                  a && delete i[t]
              }
              return r.exports
          }
          n.ab = "//";
          var s = n(229);
          t.exports = s
      }()
  },
  9008: function(t, e, i) {
      t.exports = i(3709)
  },
  5675: function(t, e, i) {
      t.exports = i(7922)
  },
  1163: function(t, e, i) {
      t.exports = i(4546)
  },
  4298: function(t, e, i) {
      t.exports = i(3104)
  },
  1462: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.GoogleAnalytics = void 0;
      let n = i(7582)
        , s = n.__importDefault(i(7294))
        , r = n.__importDefault(i(4298))
        , a = i(8816);
      e.GoogleAnalytics = function({debugMode: t=!1, gaMeasurementId: e, gtagUrl: i="https://www.googletagmanager.com/gtag/js", strategy: n="afterInteractive", defaultConsent: o="granted", trackPageViews: l, nonce: u}) {
          let c = "G-7QGK4YQ7N7";
          return ((0,
          a.usePageViews)({
              gaMeasurementId: c,
              ignoreHashChange: "object" == typeof l && (null == l ? void 0 : l.ignoreHashChange),
              disabled: !l
          }),
          c) ? s.default.createElement(s.default.Fragment, null, s.default.createElement(r.default, {
              src: `${i}?id=${c}`,
              strategy: n
          }), s.default.createElement(r.default, {
              id: "nextjs-google-analytics",
              nonce: u
          }, `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${"denied" === o && `gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });`}
          gtag('config', '${c}', {
            page_path: window.location.pathname,
            ${t ? `debug_mode: ${t},` : ""}
          });
        `)) : null
      }
  },
  7270: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.GoogleAnalytics = void 0;
      var n = i(1462);
      Object.defineProperty(e, "GoogleAnalytics", {
          enumerable: !0,
          get: function() {
              return n.GoogleAnalytics
          }
      })
  },
  8816: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.usePageViews = e.usePagesViews = void 0;
      var n = i(7015);
      Object.defineProperty(e, "usePagesViews", {
          enumerable: !0,
          get: function() {
              return n.usePagesViews
          }
      });
      var s = i(9412);
      Object.defineProperty(e, "usePageViews", {
          enumerable: !0,
          get: function() {
              return s.usePageViews
          }
      })
  },
  9412: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.usePageViews = void 0;
      let n = i(7294)
        , s = i(1163)
        , r = i(8396);
      e.usePageViews = function({gaMeasurementId: t, ignoreHashChange: e, disabled: i}={}) {
          (0,
          n.useEffect)( () => {
              if (i)
                  return;
              let t = t => {
                  (0,
                  r.pageView)({
                      path: t.toString()
                  }, "G-7QGK4YQ7N7")
              }
              ;
              return s.Router.events.on("routeChangeComplete", t),
              e || s.Router.events.on("hashChangeComplete", t),
              () => {
                  s.Router.events.off("routeChangeComplete", t),
                  e || s.Router.events.off("hashChangeComplete", t)
              }
          }
          , [s.Router.events, t, e])
      }
  },
  7015: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.usePagesViews = void 0;
      let n = i(9412);
      e.usePagesViews = function(t) {
          console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"),
          (0,
          n.usePageViews)(t)
      }
  },
  4304: function(t, e, i) {
      "use strict";
      e.Wi = void 0;
      var n = i(7270);
      Object.defineProperty(e, "Wi", {
          enumerable: !0,
          get: function() {
              return n.GoogleAnalytics
          }
      }),
      i(8816),
      i(8396)
  },
  5146: function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.consent = void 0,
      e.consent = function({arg: t, params: e}) {
          window.gtag && window.gtag("consent", t, e)
      }
  },
  9633: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.event = void 0;
      let n = i(7582);
      e.event = function(t, e={}) {
          var {category: i, label: s, value: r, nonInteraction: a, userId: o} = e
            , l = n.__rest(e, ["category", "label", "value", "nonInteraction", "userId"]);
          if (!window.gtag)
              return;
          let u = Object.assign({}, l);
          void 0 !== i && (u.event_category = i),
          void 0 !== s && (u.event_label = s),
          void 0 !== r && (u.value = r),
          void 0 !== a && (u.non_interaction = a),
          void 0 !== o && (u.user_id = o),
          window.gtag("event", t, u)
      }
  },
  8396: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.consent = e.event = e.pageView = void 0;
      var n = i(3371);
      Object.defineProperty(e, "pageView", {
          enumerable: !0,
          get: function() {
              return n.pageView
          }
      });
      var s = i(9633);
      Object.defineProperty(e, "event", {
          enumerable: !0,
          get: function() {
              return s.event
          }
      });
      var r = i(5146);
      Object.defineProperty(e, "consent", {
          enumerable: !0,
          get: function() {
              return r.consent
          }
      })
  },
  3371: function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      }),
      e.pageView = void 0,
      e.pageView = function({title: t, location: e, path: i, sendPageView: n, userId: s}={}, r) {
          let a = "G-7QGK4YQ7N7";
          if (!a || !window.gtag)
              return;
          let o = {};
          void 0 !== t && (o.page_title = t),
          void 0 !== e && (o.page_location = e),
          void 0 !== i && (o.page_path = i),
          void 0 !== n && (o.send_page_view = n),
          void 0 !== s && (o.user_id = s),
          window.gtag("config", a, o)
      }
  },
  6955: function(t, e, i) {
      "use strict";
      let n, s;
      i.d(e, {
          wm: function() {
              return aR
          },
          CF: function() {
              return ac
          },
          cf: function() {
              return aC
          },
          v2: function() {
              return ap
          },
          E8: function() {
              return aI
          },
          WV: function() {
              return au
          },
          J7: function() {
              return az
          },
          Do: function() {
              return aq
          },
          zO: function() {
              return aF
          },
          BL: function() {
              return rr
          }
      });
      let r = "14.7.77";
      var a, o, l, u, c, h, d, p, f, m, g, v, y, b, x, w, T, S, k, C, A, O, M, E, D, R, I, P, V, j, N, F, z, q, B, L, W, U, Y, G, H, X, Z, $, Q, J, K, tt, te, ti, tn, ts, tr, ta, to, tl, tu, tc, th, td, tp, tf, tm, tg, t_, tv, ty, tb, tx, tw, tT, tS, tk, tC, tA, tO, tM, tE, tD, tR, tI, tP, tV, tj, tN, tF, tz, tq, tB, tL, tW, tU, tY, tG, tH, tX, tZ, t$, tQ, tJ, tK, t0, t1, t2, t3, t8 = i(5382);
      let t5 = new WeakSet
        , t4 = new WeakMap
        , t6 = new WeakMap
        , t9 = new WeakMap
        , t7 = new WeakMap
        , et = new WeakMap
        , ee = new WeakMap
        , ei = new WeakMap
        , en = new WeakMap
        , es = new WeakMap
        , er = {
          construct: () => er
      }
        , ea = t => {
          try {
              new new Proxy(t,er)
          } catch {
              return !1
          }
          return !0
      }
        , eo = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/
        , el = (t, e) => {
          let i = []
            , n = t.replace(/^[\s]+/, "")
            , s = n.match(eo);
          for (; null !== s; ) {
              let t = s[1].slice(1, -1)
                , r = s[0].replace(/([\s]+)?;?$/, "").replace(t, new URL(t,e).toString());
              i.push(r),
              s = (n = n.slice(s[0].length).replace(/^[\s]+/, "")).match(eo)
          }
          return [i.join(";"), n]
      }
        , eu = t => {
          if (void 0 !== t && !Array.isArray(t))
              throw TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
      }
        , ec = t => {
          if (!ea(t))
              throw TypeError("The given value for processorCtor should be a constructor.");
          if (null === t.prototype || "object" != typeof t.prototype)
              throw TypeError("The given value for processorCtor should have a prototype.")
      }
        , eh = (t, e) => {
          let i = t.get(e);
          if (void 0 === i)
              throw Error("A value with the given key could not be found.");
          return i
      }
        , ed = (t, e) => {
          let i = Array.from(t).filter(e);
          if (i.length > 1)
              throw Error("More than one element was found.");
          if (0 === i.length)
              throw Error("No element was found.");
          let[n] = i;
          return t.delete(n),
          n
      }
        , ep = (t, e, i, n) => {
          let s = eh(t, e)
            , r = ed(s, t => t[0] === i && t[1] === n);
          return 0 === s.size && t.delete(e),
          r
      }
        , ef = t => eh(ee, t)
        , em = t => {
          if (t5.has(t))
              throw Error("The AudioNode is already stored.");
          t5.add(t),
          ef(t).forEach(t => t(!0))
      }
        , eg = t => "port"in t
        , e_ = t => {
          if (!t5.has(t))
              throw Error("The AudioNode is not stored.");
          t5.delete(t),
          ef(t).forEach(t => t(!1))
      }
        , ev = (t, e) => {
          !eg(t) && e.every(t => 0 === t.size) && e_(t)
      }
        , ey = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          fftSize: 2048,
          maxDecibels: -30,
          minDecibels: -100,
          smoothingTimeConstant: .8
      }
        , eb = (t, e) => t.context === e
        , ex = t => {
          try {
              t.copyToChannel(new Float32Array(1), 0, -1)
          } catch {
              return !1
          }
          return !0
      }
        , ew = () => new DOMException("","IndexSizeError")
        , eT = t => {
          var e;
          t.getChannelData = (e = t.getChannelData,
          i => {
              try {
                  return e.call(t, i)
              } catch (t) {
                  if (12 === t.code)
                      throw ew();
                  throw t
              }
          }
          )
      }
        , eS = {
          numberOfChannels: 1
      }
        , ek = t => t5.has(t)
        , eC = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1
      }
        , eA = t => "playbackRate"in t
        , eO = t => "frequency"in t && "gain"in t
        , eM = t => "offset"in t
        , eE = t => !("frequency"in t) && "gain"in t
        , eD = t => "detune"in t && "frequency"in t
        , eR = t => "pan"in t
        , eI = t => eh(t4, t)
        , eP = t => eh(t9, t)
        , eV = (t, e) => {
          let {activeInputs: i} = eI(t);
          for (let n of (i.forEach(i => i.forEach( ([i]) => {
              e.includes(t) || eV(i, [...e, t])
          }
          )),
          eA(t) ? [t.playbackRate] : eg(t) ? Array.from(t.parameters.values()) : eO(t) ? [t.Q, t.detune, t.frequency, t.gain] : eM(t) ? [t.offset] : eE(t) ? [t.gain] : eD(t) ? [t.detune, t.frequency] : eR(t) ? [t.pan] : [])) {
              let t = eP(n);
              void 0 !== t && t.activeInputs.forEach( ([t]) => eV(t, e))
          }
          ek(t) && e_(t)
      }
        , ej = t => {
          eV(t.destination, [])
      }
        , eN = t => void 0 === t || "number" == typeof t || "string" == typeof t && ("balanced" === t || "interactive" === t || "playback" === t)
        , eF = t => "context"in t
        , ez = t => eF(t[0])
        , eq = (t, e, i, n) => {
          for (let e of t)
              if (i(e)) {
                  if (n)
                      return !1;
                  throw Error("The set contains at least one similar element.")
              }
          return t.add(e),
          !0
      }
        , eB = (t, e, [i,n], s) => {
          eq(t, [e, i, n], t => t[0] === e && t[1] === i, s)
      }
        , eL = (t, [e,i,n], s) => {
          let r = t.get(e);
          void 0 === r ? t.set(e, new Set([[i, n]])) : eq(r, [i, n], t => t[0] === i, s)
      }
        , eW = t => "inputs"in t
        , eU = (t, e, i, n) => {
          if (eW(e)) {
              let s = e.inputs[n];
              return t.connect(s, i, 0),
              [s, i, 0]
          }
          return t.connect(e, i, n),
          [e, i, n]
      }
        , eY = (t, e, i) => {
          for (let n of t)
              if (n[0] === e && n[1] === i)
                  return t.delete(n),
                  n;
          return null
      }
        , eG = (t, e, i) => ed(t, t => t[0] === e && t[1] === i)
        , eH = (t, e) => {
          if (!ef(t).delete(e))
              throw Error("Missing the expected event listener.")
      }
        , eX = (t, e, i) => {
          let n = eh(t, e)
            , s = ed(n, t => t[0] === i);
          return 0 === n.size && t.delete(e),
          s
      }
        , eZ = (t, e, i, n) => {
          eW(e) ? t.disconnect(e.inputs[n], i, 0) : t.disconnect(e, i, n)
      }
        , e$ = t => eh(t6, t)
        , eQ = t => eh(t7, t)
        , eJ = t => ei.has(t)
        , eK = t => !t5.has(t)
        , e0 = (t, e) => new Promise(i => {
          if (null !== e)
              i(!0);
          else {
              let e = t.createScriptProcessor(256, 1, 1)
                , n = t.createGain()
                , s = t.createBuffer(1, 2, 44100)
                , r = s.getChannelData(0);
              r[0] = 1,
              r[1] = 1;
              let a = t.createBufferSource();
              a.buffer = s,
              a.loop = !0,
              a.connect(e).connect(t.destination),
              a.connect(n),
              a.disconnect(n),
              e.onaudioprocess = n => {
                  let s = n.inputBuffer.getChannelData(0);
                  Array.prototype.some.call(s, t => 1 === t) ? i(!0) : i(!1),
                  a.stop(),
                  e.onaudioprocess = null,
                  a.disconnect(e),
                  e.disconnect(t.destination)
              }
              ,
              a.start()
          }
      }
      )
        , e1 = (t, e) => {
          let i = new Map;
          for (let e of t)
              for (let t of e) {
                  let e = i.get(t);
                  i.set(t, void 0 === e ? 1 : e + 1)
              }
          i.forEach( (t, i) => e(i, t))
      }
        , e2 = t => "context"in t
        , e3 = t => {
          var e, i;
          let n = new Map;
          t.connect = (e = t.connect.bind(t),
          (t, i=0, s=0) => {
              let r = e2(t) ? e(t, i, s) : e(t, i)
                , a = n.get(t);
              return void 0 === a ? n.set(t, [{
                  input: s,
                  output: i
              }]) : a.every(t => t.input !== s || t.output !== i) && a.push({
                  input: s,
                  output: i
              }),
              r
          }
          ),
          t.disconnect = (i = t.disconnect,
          (e, s, r) => {
              if (i.apply(t),
              void 0 === e)
                  n.clear();
              else if ("number" == typeof e)
                  for (let[t,i] of n) {
                      let s = i.filter(t => t.output !== e);
                      0 === s.length ? n.delete(t) : n.set(t, s)
                  }
              else if (n.has(e)) {
                  if (void 0 === s)
                      n.delete(e);
                  else {
                      let t = n.get(e);
                      if (void 0 !== t) {
                          let i = t.filter(t => t.output !== s && (t.input !== r || void 0 === r));
                          0 === i.length ? n.delete(e) : n.set(e, i)
                      }
                  }
              }
              for (let[e,i] of n)
                  i.forEach(i => {
                      e2(e) ? t.connect(e, i.output, i.input) : t.connect(e, i.output)
                  }
                  )
          }
          )
      }
        , e8 = (t, e, i, n) => {
          let {activeInputs: s, passiveInputs: r} = eP(e)
            , {outputs: a} = eI(t)
            , o = ef(t)
            , l = a => {
              let o = e$(t)
                , l = eQ(e);
              if (a) {
                  let e = eX(r, t, i);
                  eB(s, t, e, !1),
                  n || eJ(t) || o.connect(l, i)
              } else
                  eL(r, eG(s, t, i), !1),
                  n || eJ(t) || o.disconnect(l, i)
          }
          ;
          return !!eq(a, [e, i], t => t[0] === e && t[1] === i, !0) && (o.add(l),
          ek(t) ? eB(s, t, [i, l], !0) : eL(r, [t, i, l], !0),
          !0)
      }
        , e5 = (t, e, i, n) => {
          let {activeInputs: s, passiveInputs: r} = eI(e)
            , a = eY(s[n], t, i);
          return null === a ? [ep(r, t, i, n)[2], !1] : [a[2], !0]
      }
        , e4 = (t, e, i) => {
          let {activeInputs: n, passiveInputs: s} = eP(e)
            , r = eY(n, t, i);
          return null === r ? [eX(s, t, i)[1], !1] : [r[2], !0]
      }
        , e6 = (t, e, i, n, s) => {
          let[r,a] = e5(t, i, n, s);
          if (null === r || (eH(t, r),
          !a || e || eJ(t) || eZ(e$(t), e$(i), n, s)),
          ek(i)) {
              let {activeInputs: t} = eI(i);
              ev(i, t)
          }
      }
        , e9 = (t, e, i, n) => {
          let[s,r] = e4(t, i, n);
          null === s || (eH(t, s),
          !r || e || eJ(t) || e$(t).disconnect(eQ(i), n))
      }
        , e7 = (t, e) => {
          let i = eI(t)
            , n = [];
          for (let s of i.outputs)
              ez(s) ? e6(t, e, ...s) : e9(t, e, ...s),
              n.push(s[0]);
          return i.outputs.clear(),
          n
      }
        , it = (t, e, i) => {
          let n = eI(t)
            , s = [];
          for (let r of n.outputs)
              r[1] === i && (ez(r) ? e6(t, e, ...r) : e9(t, e, ...r),
              s.push(r[0]),
              n.outputs.delete(r));
          return s
      }
        , ie = (t, e, i, n, s) => {
          let r = eI(t);
          return Array.from(r.outputs).filter(t => t[0] === i && (void 0 === n || t[1] === n) && (void 0 === s || t[2] === s)).map(i => (ez(i) ? e6(t, e, ...i) : e9(t, e, ...i),
          r.outputs.delete(i),
          i[0]))
      }
      ;
      class ii {
          constructor(t) {
              this._map = new Map(t)
          }
          get size() {
              return this._map.size
          }
          entries() {
              return this._map.entries()
          }
          forEach(t, e=null) {
              return this._map.forEach( (i, n) => t.call(e, i, n, this))
          }
          get(t) {
              return this._map.get(t)
          }
          has(t) {
              return this._map.has(t)
          }
          keys() {
              return this._map.keys()
          }
          values() {
              return this._map.values()
          }
      }
      let is = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 1,
          numberOfOutputs: 1,
          parameterData: {},
          processorOptions: {}
      };
      function ir(t, e, i, n, s) {
          if ("function" == typeof t.copyFromChannel)
              0 === e[i].byteLength && (e[i] = new Float32Array(128)),
              t.copyFromChannel(e[i], n, s);
          else {
              let r = t.getChannelData(n);
              if (0 === e[i].byteLength)
                  e[i] = r.slice(s, s + 128);
              else {
                  let t = new Float32Array(r.buffer,s * Float32Array.BYTES_PER_ELEMENT,128);
                  e[i].set(t)
              }
          }
      }
      let ia = (t, e, i, n, s) => {
          "function" == typeof t.copyToChannel ? 0 !== e[i].byteLength && t.copyToChannel(e[i], n, s) : 0 !== e[i].byteLength && t.getChannelData(n).set(e[i], s)
      }
        , io = (t, e) => {
          let i = [];
          for (let n = 0; n < t; n += 1) {
              let t = []
                , s = "number" == typeof e ? e : e[n];
              for (let e = 0; e < s; e += 1)
                  t.push(new Float32Array(128));
              i.push(t)
          }
          return i
      }
        , il = (t, e) => {
          let i = eh(es, t);
          return eh(i, e$(e))
      }
        , iu = async (t, e, i, n, s, r, a) => {
          let o = null === e ? 128 * Math.ceil(t.context.length / 128) : e.length
            , l = n.channelCount * n.numberOfInputs
            , u = s.reduce( (t, e) => t + e, 0)
            , c = 0 === u ? null : i.createBuffer(u, o, i.sampleRate);
          if (void 0 === r)
              throw Error("Missing the processor constructor.");
          let h = eI(t)
            , d = await il(i, t)
            , p = io(n.numberOfInputs, n.channelCount)
            , f = io(n.numberOfOutputs, s)
            , m = Array.from(t.parameters.keys()).reduce( (t, e) => ({
              ...t,
              [e]: new Float32Array(128)
          }), {});
          for (let u = 0; u < o; u += 128) {
              if (n.numberOfInputs > 0 && null !== e)
                  for (let t = 0; t < n.numberOfInputs; t += 1)
                      for (let i = 0; i < n.channelCount; i += 1)
                          ir(e, p[t], i, i, u);
              void 0 !== r.parameterDescriptors && null !== e && r.parameterDescriptors.forEach( ({name: t}, i) => {
                  ir(e, m, t, l + i, u)
              }
              );
              for (let t = 0; t < n.numberOfInputs; t += 1)
                  for (let e = 0; e < s[t]; e += 1)
                      0 === f[t][e].byteLength && (f[t][e] = new Float32Array(128));
              try {
                  let t = p.map( (t, e) => 0 === h.activeInputs[e].size ? [] : t)
                    , e = a(u / i.sampleRate, i.sampleRate, () => d.process(t, f, m));
                  if (null !== c)
                      for (let t = 0, e = 0; t < n.numberOfOutputs; t += 1) {
                          for (let i = 0; i < s[t]; i += 1)
                              ia(c, f[t], i, e + i, u);
                          e += s[t]
                      }
                  if (!e)
                      break
              } catch (e) {
                  t.dispatchEvent(new ErrorEvent("processorerror",{
                      colno: e.colno,
                      filename: e.filename,
                      lineno: e.lineno,
                      message: e.message
                  }));
                  break
              }
          }
          return c
      }
        , ic = {
          Q: 1,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 350,
          gain: 0,
          type: "lowpass"
      }
        , ih = {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 6
      }
        , id = {
          channelCount: 6,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: 6
      }
        , ip = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          offset: 1
      }
        , im = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          disableNormalization: !1
      }
        , ig = t => {
          let {port1: e, port2: i} = new MessageChannel;
          return new Promise(n => {
              let s = () => {
                  i.onmessage = null,
                  e.close(),
                  i.close(),
                  n()
              }
              ;
              i.onmessage = () => s();
              try {
                  e.postMessage(t, [t])
              } catch {} finally {
                  s()
              }
          }
          )
      }
        , i_ = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          delayTime: 0,
          maxDelayTime: 1
      }
        , iv = t => "delayTime"in t
        , iy = (t, e, i) => {
          let n = e[i];
          if (void 0 === n)
              throw t();
          return n
      }
        , ib = {
          attack: .003,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          knee: 30,
          ratio: 12,
          release: .25,
          threshold: -24
      }
        , ix = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          gain: 1
      }
        , iw = () => new DOMException("","InvalidStateError")
        , iT = () => new DOMException("","InvalidAccessError")
        , iS = t => {
          var e;
          t.getFrequencyResponse = (e = t.getFrequencyResponse,
          (i, n, s) => {
              if (i.length !== n.length || n.length !== s.length)
                  throw iT();
              return e.call(t, i, n, s)
          }
          )
      }
        , ik = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers"
      }
        , iC = (t, e, i, n, s, r, a, o, l, u, c) => {
          let h = u.length
            , d = o;
          for (let o = 0; o < h; o += 1) {
              let h = i[0] * u[o];
              for (let e = 1; e < s; e += 1) {
                  let n = d - e & l - 1;
                  h += i[e] * r[n],
                  h -= t[e] * a[n]
              }
              for (let t = s; t < n; t += 1)
                  h += i[t] * r[d - t & l - 1];
              for (let i = s; i < e; i += 1)
                  h -= t[i] * a[d - i & l - 1];
              r[d] = u[o],
              a[d] = h,
              d = d + 1 & l - 1,
              c[o] = h
          }
          return d
      }
        , iA = (t, e, i, n) => {
          let s = i instanceof Float64Array ? i : new Float64Array(i)
            , r = n instanceof Float64Array ? n : new Float64Array(n)
            , a = s.length
            , o = r.length
            , l = Math.min(a, o);
          if (1 !== s[0]) {
              for (let t = 0; t < a; t += 1)
                  r[t] /= s[0];
              for (let t = 1; t < o; t += 1)
                  s[t] /= s[0]
          }
          let u = new Float32Array(32)
            , c = new Float32Array(32)
            , h = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate)
            , d = t.numberOfChannels;
          for (let e = 0; e < d; e += 1) {
              let i = t.getChannelData(e)
                , n = h.getChannelData(e);
              u.fill(0),
              c.fill(0),
              iC(s, a, r, o, l, u, c, 0, 32, i, n)
          }
          return h
      }
        , iO = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers"
      }
        , iM = t => {
          let e = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
          try {
              let i = t.decodeAudioData(e.buffer, () => {}
              );
              if (void 0 === i)
                  return !1;
              return i.catch( () => {}
              ),
              !0
          } catch {}
          return !1
      }
        , iE = (t, e, i) => {
          let n = e[i];
          void 0 !== n && n !== t[i] && (t[i] = n)
      }
        , iD = (t, e) => {
          iE(t, e, "channelCount"),
          iE(t, e, "channelCountMode"),
          iE(t, e, "channelInterpretation")
      }
        , iR = t => "function" == typeof t.getFloatTimeDomainData
        , iI = t => {
          t.getFloatTimeDomainData = e => {
              let i = new Uint8Array(e.length);
              t.getByteTimeDomainData(i);
              let n = Math.max(i.length, t.fftSize);
              for (let t = 0; t < n; t += 1)
                  e[t] = (i[t] - 128) * .0078125;
              return e
          }
      }
        , iP = (t, e, i) => {
          let n = e[i];
          void 0 !== n && n !== t[i].value && (t[i].value = n)
      }
        , iV = t => {
          var e;
          let i;
          t.start = (e = t.start,
          i = !1,
          (n=0, s=0, r) => {
              if (i)
                  throw iw();
              e.call(t, n, s, r),
              i = !0
          }
          )
      }
        , ij = t => {
          var e;
          t.start = (e = t.start,
          (i=0, n=0, s) => {
              if ("number" == typeof s && s < 0 || n < 0 || i < 0)
                  throw RangeError("The parameters can't be negative.");
              e.call(t, i, n, s)
          }
          )
      }
        , iN = t => {
          var e;
          t.stop = (e = t.stop,
          (i=0) => {
              if (i < 0)
                  throw RangeError("The parameter can't be negative.");
              e.call(t, i)
          }
          )
      }
        , iF = t => {
          let {port1: e} = new MessageChannel;
          try {
              e.postMessage(t)
          } finally {
              e.close()
          }
      }
        , iz = (t, e) => null === t ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e)))))
        , iq = t => new Promise( (e, i) => {
          let {port1: n, port2: s} = new MessageChannel;
          n.onmessage = ({data: t}) => {
              n.close(),
              s.close(),
              e(t)
          }
          ,
          n.onmessageerror = ({data: t}) => {
              n.close(),
              s.close(),
              i(t)
          }
          ,
          s.postMessage(t)
      }
      )
        , iB = async (t, e) => new t(await iq(e))
        , iL = (t, e, i, n) => {
          let s = es.get(t);
          void 0 === s && (s = new WeakMap,
          es.set(t, s));
          let r = iB(i, n);
          return s.set(e, r),
          r
      }
        , iW = (t, e) => {
          let i = t.createBiquadFilter();
          return iD(i, e),
          iP(i, e, "Q"),
          iP(i, e, "detune"),
          iP(i, e, "frequency"),
          iP(i, e, "gain"),
          iE(i, e, "type"),
          i
      }
        , iU = t => {
          let e = t.numberOfOutputs;
          Object.defineProperty(t, "channelCount", {
              get: () => e,
              set: t => {
                  if (t !== e)
                      throw iw()
              }
          }),
          Object.defineProperty(t, "channelCountMode", {
              get: () => "explicit",
              set: t => {
                  if ("explicit" !== t)
                      throw iw()
              }
          }),
          Object.defineProperty(t, "channelInterpretation", {
              get: () => "discrete",
              set: t => {
                  if ("discrete" !== t)
                      throw iw()
              }
          })
      }
        , iY = (t, e) => {
          let i = t.createChannelSplitter(e.numberOfOutputs);
          return iD(i, e),
          iU(i),
          i
      }
        , iG = (t, e) => (t.connect = e.connect.bind(e),
      t.disconnect = e.disconnect.bind(e),
      t)
        , iH = (t, e) => {
          let i = t.createDelay(e.maxDelayTime);
          return iD(i, e),
          iP(i, e, "delayTime"),
          i
      }
        , iX = (t, e) => {
          let i = t.createGain();
          return iD(i, e),
          iP(i, e, "gain"),
          i
      }
      ;
      function iZ(t, e) {
          let i = [0, 0];
          for (let s = t.length - 1; s >= 0; s -= 1) {
              var n;
              i = [(n = i)[0] * e[0] - n[1] * e[1], n[0] * e[1] + n[1] * e[0]],
              i[0] += t[s]
          }
          return i
      }
      let i$ = (t, e, i, n) => t.createScriptProcessor(e, i, n)
        , iQ = () => new DOMException("","NotSupportedError")
        , iJ = {
          numberOfChannels: 1
      }
        , iK = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 440,
          periodicWave: void 0,
          type: "sine"
      }
        , i0 = {
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          coneInnerAngle: 360,
          coneOuterAngle: 360,
          coneOuterGain: 0,
          distanceModel: "inverse",
          maxDistance: 1e4,
          orientationX: 1,
          orientationY: 0,
          orientationZ: 0,
          panningModel: "equalpower",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          refDistance: 1,
          rolloffFactor: 1
      }
        , i1 = {
          disableNormalization: !1
      }
        , i2 = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          pan: 0
      }
        , i3 = () => new DOMException("","UnknownError")
        , i8 = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          curve: null,
          oversample: "none"
      }
        , i5 = (t, e, i) => void 0 === t.copyFromChannel ? t.getChannelData(i)[0] : (t.copyFromChannel(e, i),
      e[0])
        , i4 = t => {
          if (null === t)
              return !1;
          let e = t.length;
          return e % 2 != 0 ? 0 !== t[Math.floor(e / 2)] : t[e / 2 - 1] + t[e / 2] !== 0
      }
        , i6 = (t, e, i, n) => {
          let s = t;
          for (; !s.hasOwnProperty(e); )
              s = Object.getPrototypeOf(s);
          let {get: r, set: a} = Object.getOwnPropertyDescriptor(s, e);
          Object.defineProperty(t, e, {
              get: i(r),
              set: n(a)
          })
      }
        , i9 = (t, e, i) => {
          try {
              t.setValueAtTime(e, i)
          } catch (n) {
              if (9 !== n.code)
                  throw n;
              i9(t, e, i + 1e-7)
          }
      }
        , i7 = t => {
          let e = t.createOscillator();
          try {
              e.start(-1)
          } catch (t) {
              return t instanceof RangeError
          }
          return !1
      }
        , nt = t => {
          let e = t.createBuffer(1, 1, 44100)
            , i = t.createBufferSource();
          i.buffer = e,
          i.start(),
          i.stop();
          try {
              return i.stop(),
              !0
          } catch {
              return !1
          }
      }
        , ne = t => {
          let e = t.createOscillator();
          try {
              e.stop(-1)
          } catch (t) {
              return t instanceof RangeError
          }
          return !1
      }
        , ni = (t, e) => {
          var i, n;
          let s;
          let r = e.createGain();
          t.connect(r);
          let a = (i = t.disconnect,
          () => {
              i.call(t, r),
              t.removeEventListener("ended", a)
          }
          );
          t.addEventListener("ended", a),
          iG(t, r),
          t.stop = (n = t.stop,
          s = !1,
          (e=0) => {
              if (s)
                  try {
                      n.call(t, e)
                  } catch {
                      r.gain.setValueAtTime(0, e)
                  }
              else
                  n.call(t, e),
                  s = !0
          }
          )
      }
        , nn = (t, e) => i => {
          let n = {
              value: t
          };
          return (Object.defineProperties(i, {
              currentTarget: n,
              target: n
          }),
          "function" == typeof e) ? e.call(t, i) : e.handleEvent.call(t, i)
      }
        , ns = new WeakMap
        , nr = (a = new Map,
      o = new WeakMap,
      (t, e) => {
          let i = o.get(t);
          if (void 0 !== i)
              return i;
          let n = a.get(t);
          if (void 0 !== n)
              return n;
          try {
              let i = e();
              if (i instanceof Promise)
                  return a.set(t, i),
                  i.catch( () => !1).then(e => (a.delete(t),
                  o.set(t, e),
                  e));
              return o.set(t, i),
              i
          } catch {
              return o.set(t, !1),
              !1
          }
      }
      )
        , na = "undefined" == typeof window ? null : window
        , no = (t, e) => {
          let i = t.createAnalyser();
          if (iD(i, e),
          !(e.maxDecibels > e.minDecibels))
              throw ew();
          return iE(i, e, "fftSize"),
          iE(i, e, "maxDecibels"),
          iE(i, e, "minDecibels"),
          iE(i, e, "smoothingTimeConstant"),
          nr(iR, () => iR(i)) || iI(i),
          i
      }
        , nl = t => {
          let e = eI(t);
          if (null === e.renderer)
              throw Error("Missing the renderer of the given AudioNode in the audio graph.");
          return e.renderer
      }
        , nu = async (t, e, i) => {
          let n = eI(t);
          await Promise.all(n.activeInputs.map( (n, s) => Array.from(n).map(async ([n,r]) => {
              let a = nl(n)
                , o = await a.render(n, e)
                , l = t.context.destination;
              eJ(n) || t === l && eJ(t) || o.connect(i, r, s)
          }
          )).reduce( (t, e) => [...t, ...e], []))
      }
        , nc = t => {
          let e = et.get(t);
          if (void 0 === e)
              throw iw();
          return e
      }
        , nh = null === na ? null : na.hasOwnProperty("OfflineAudioContext") ? na.OfflineAudioContext : na.hasOwnProperty("webkitOfflineAudioContext") ? na.webkitOfflineAudioContext : null
        , nd = t => null !== nh && t instanceof nh
        , np = new WeakMap
        , nf = class {
          constructor(t) {
              this._nativeEventTarget = t,
              this._listeners = new WeakMap
          }
          addEventListener(t, e, i) {
              if (null !== e) {
                  let n = this._listeners.get(e);
                  void 0 === n && (n = nn(this, e),
                  "function" == typeof e && this._listeners.set(e, n)),
                  this._nativeEventTarget.addEventListener(t, n, i)
              }
          }
          dispatchEvent(t) {
              return this._nativeEventTarget.dispatchEvent(t)
          }
          removeEventListener(t, e, i) {
              let n = null === e ? void 0 : this._listeners.get(e);
              this._nativeEventTarget.removeEventListener(t, void 0 === n ? null : n, i)
          }
      }
        , nm = null === na ? null : na.hasOwnProperty("AudioContext") ? na.AudioContext : na.hasOwnProperty("webkitAudioContext") ? na.webkitAudioContext : null
        , ng = t => null !== nm && t instanceof nm
        , n_ = t => null !== na && "function" == typeof na.AudioNode && t instanceof na.AudioNode
        , nv = t => null !== na && "function" == typeof na.AudioParam && t instanceof na.AudioParam
        , ny = null === na ? null : na.hasOwnProperty("AudioWorkletNode") ? na.AudioWorkletNode : null
        , nb = (l = (t, e, i) => {
          let n = [];
          for (let t = 0; t < i.numberOfInputs; t += 1)
              n.push(new Set);
          t4.set(t, {
              activeInputs: n,
              outputs: new Set,
              passiveInputs: new WeakMap,
              renderer: e
          })
      }
      ,
      u = ( (t, e, i, n, s, r, a, o, l, u, c, h, d) => {
          let p = new WeakMap;
          return (f, m, g, v, y) => {
              let {activeInputs: b, passiveInputs: x} = r(m)
                , {outputs: w} = r(f)
                , T = o(f)
                , S = r => {
                  let o = l(m)
                    , u = l(f);
                  if (r) {
                      let e = ep(x, f, g, v);
                      t(b, f, e, !1),
                      y || h(f) || i(u, o, g, v),
                      d(m) && em(m)
                  } else {
                      let t = n(b, f, g, v);
                      e(x, v, t, !1),
                      y || h(f) || s(u, o, g, v);
                      let i = a(m);
                      if (0 === i)
                          c(m) && ev(m, b);
                      else {
                          let t = p.get(m);
                          void 0 !== t && clearTimeout(t),
                          p.set(m, setTimeout( () => {
                              c(m) && ev(m, b)
                          }
                          , 1e3 * i))
                      }
                  }
              }
              ;
              return !!u(w, [m, g, v], t => t[0] === m && t[1] === g && t[2] === v, !0) && (T.add(S),
              c(f) ? t(b, f, [g, v, S], !0) : e(x, v, [f, g, S], !0),
              !0)
          }
      }
      )( (t, e, [i,n,s], r) => {
          eq(t[n], [e, i, s], t => t[0] === e && t[1] === i, r)
      }
      , (t, e, [i,n,s], r) => {
          let a = t.get(i);
          void 0 === a ? t.set(i, new Set([[n, e, s]])) : eq(a, [n, e, s], t => t[0] === n && t[1] === e, r)
      }
      , eU, (t, e, i, n) => ed(t[n], t => t[0] === e && t[1] === i), eZ, eI, t => {
          var e;
          return null !== (e = ns.get(t)) && void 0 !== e ? e : 0
      }
      , ef, e$, eq, ek, eJ, eK),
      c = t => (e, i) => {
          let n = ei.get(e);
          if (void 0 === n) {
              if (!t && ek(e)) {
                  let t = e$(e)
                    , {outputs: i} = eI(e);
                  for (let e of i)
                      if (ez(e))
                          eZ(t, e$(e[0]), e[1], e[2]);
                      else {
                          let i = eQ(e[0]);
                          t.disconnect(i, e[1])
                      }
              }
              ei.set(e, i)
          } else
              ei.set(e, n + i)
      }
      ,
      h = (t, e) => {
          let i = ei.get(t);
          if (void 0 === i)
              throw Error("Missing the expected cycle count.");
          let n = nd(nc(t.context));
          if (i === e) {
              if (ei.delete(t),
              !n && ek(t)) {
                  let e = e$(t)
                    , {outputs: i} = eI(t);
                  for (let t of i)
                      if (ez(t))
                          eU(e, e$(t[0]), t[1], t[2]);
                      else {
                          let i = eQ(t[0]);
                          e.connect(i, t[1])
                      }
              }
          } else
              ei.set(t, i - e)
      }
      ,
      d = function t(e, i) {
          let n = eF(i) ? i : eh(np, i);
          if (iv(n))
              return [];
          if (e[0] === n)
              return [e];
          if (e.includes(n))
              return [];
          let {outputs: s} = eI(n);
          return Array.from(s).map(i => t([...e, n], i[0])).reduce( (t, e) => t.concat(e), [])
      }
      ,
      p = nf,
      class extends p {
          constructor(t, e, i, n) {
              super(i),
              this._context = t,
              this._nativeAudioNode = i;
              let s = nc(t);
              ng(s) && !0 !== nr(e0, () => e0(s, ny)) && e3(i),
              t6.set(this, i),
              ee.set(this, new Set),
              "closed" !== t.state && e && em(this),
              l(this, n, i)
          }
          get channelCount() {
              return this._nativeAudioNode.channelCount
          }
          set channelCount(t) {
              this._nativeAudioNode.channelCount = t
          }
          get channelCountMode() {
              return this._nativeAudioNode.channelCountMode
          }
          set channelCountMode(t) {
              this._nativeAudioNode.channelCountMode = t
          }
          get channelInterpretation() {
              return this._nativeAudioNode.channelInterpretation
          }
          set channelInterpretation(t) {
              this._nativeAudioNode.channelInterpretation = t
          }
          get context() {
              return this._context
          }
          get numberOfInputs() {
              return this._nativeAudioNode.numberOfInputs
          }
          get numberOfOutputs() {
              return this._nativeAudioNode.numberOfOutputs
          }
          connect(t, e=0, i=0) {
              if (e < 0 || e >= this._nativeAudioNode.numberOfOutputs)
                  throw ew();
              let n = nd(nc(this._context));
              if (n_(t) || nv(t))
                  throw iT();
              if (eF(t)) {
                  let s = e$(t);
                  try {
                      let r = eU(this._nativeAudioNode, s, e, i)
                        , a = eK(this);
                      (n || a) && this._nativeAudioNode.disconnect(...r),
                      "closed" !== this.context.state && !a && eK(t) && em(t)
                  } catch (t) {
                      if (12 === t.code)
                          throw iT();
                      throw t
                  }
                  return u(this, t, e, i, n) && e1(d([this], t), c(n)),
                  t
              }
              let s = eQ(t);
              if ("playbackRate" === s.name && 1024 === s.maxValue)
                  throw iQ();
              try {
                  this._nativeAudioNode.connect(s, e),
                  (n || eK(this)) && this._nativeAudioNode.disconnect(s, e)
              } catch (t) {
                  if (12 === t.code)
                      throw iT();
                  throw t
              }
              e8(this, t, e, n) && e1(d([this], t), c(n))
          }
          disconnect(t, e, i) {
              let n;
              let s = nd(nc(this._context));
              if (void 0 === t)
                  n = e7(this, s);
              else if ("number" == typeof t) {
                  if (t < 0 || t >= this.numberOfOutputs)
                      throw ew();
                  n = it(this, s, t)
              } else {
                  if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs) || eF(t) && void 0 !== i && (i < 0 || i >= t.numberOfInputs))
                      throw ew();
                  if (0 === (n = ie(this, s, t, e, i)).length)
                      throw iT()
              }
              for (let t of n)
                  e1(d([this], t), h)
          }
      }
      )
        , nx = (f = nb,
      m = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e);
              return eb(n, i) || (n = no(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  fftSize: n.fftSize,
                  maxDecibels: n.maxDecibels,
                  minDecibels: n.minDecibels,
                  smoothingTimeConstant: n.smoothingTimeConstant
              })),
              t.set(i, n),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends f {
          constructor(t, e) {
              let i = nc(t)
                , n = no(i, {
                  ...ey,
                  ...e
              });
              super(t, !1, n, nd(i) ? m() : null),
              this._nativeAnalyserNode = n
          }
          get fftSize() {
              return this._nativeAnalyserNode.fftSize
          }
          set fftSize(t) {
              this._nativeAnalyserNode.fftSize = t
          }
          get frequencyBinCount() {
              return this._nativeAnalyserNode.frequencyBinCount
          }
          get maxDecibels() {
              return this._nativeAnalyserNode.maxDecibels
          }
          set maxDecibels(t) {
              let e = this._nativeAnalyserNode.maxDecibels;
              if (this._nativeAnalyserNode.maxDecibels = t,
              !(t > this._nativeAnalyserNode.minDecibels))
                  throw this._nativeAnalyserNode.maxDecibels = e,
                  ew()
          }
          get minDecibels() {
              return this._nativeAnalyserNode.minDecibels
          }
          set minDecibels(t) {
              let e = this._nativeAnalyserNode.minDecibels;
              if (this._nativeAnalyserNode.minDecibels = t,
              !(this._nativeAnalyserNode.maxDecibels > t))
                  throw this._nativeAnalyserNode.minDecibels = e,
                  ew()
          }
          get smoothingTimeConstant() {
              return this._nativeAnalyserNode.smoothingTimeConstant
          }
          set smoothingTimeConstant(t) {
              this._nativeAnalyserNode.smoothingTimeConstant = t
          }
          getByteFrequencyData(t) {
              this._nativeAnalyserNode.getByteFrequencyData(t)
          }
          getByteTimeDomainData(t) {
              this._nativeAnalyserNode.getByteTimeDomainData(t)
          }
          getFloatFrequencyData(t) {
              this._nativeAnalyserNode.getFloatFrequencyData(t)
          }
          getFloatTimeDomainData(t) {
              this._nativeAnalyserNode.getFloatTimeDomainData(t)
          }
      }
      )
        , nw = new WeakSet
        , nT = null === na ? null : na.hasOwnProperty("AudioBuffer") ? na.AudioBuffer : null
        , nS = (g = new Uint32Array(1),
      t => (g[0] = t,
      g[0]))
        , nk = t => {
          t.copyFromChannel = (e, i, n=0) => {
              let s = nS(n)
                , r = nS(i);
              if (r >= t.numberOfChannels)
                  throw ew();
              let a = t.length
                , o = t.getChannelData(r)
                , l = e.length;
              for (let t = s < 0 ? -s : 0; t + s < a && t < l; t += 1)
                  e[t] = o[t + s]
          }
          ,
          t.copyToChannel = (e, i, n=0) => {
              let s = nS(n)
                , r = nS(i);
              if (r >= t.numberOfChannels)
                  throw ew();
              let a = t.length
                , o = t.getChannelData(r)
                , l = e.length;
              for (let t = s < 0 ? -s : 0; t + s < a && t < l; t += 1)
                  o[t + s] = e[t]
          }
      }
        , nC = t => {
          var e, i;
          t.copyFromChannel = (e = t.copyFromChannel,
          (i, n, s=0) => {
              let r = nS(s)
                , a = nS(n);
              if (r < t.length)
                  return e.call(t, i, a, r)
          }
          ),
          t.copyToChannel = (i = t.copyToChannel,
          (e, n, s=0) => {
              let r = nS(s)
                , a = nS(n);
              if (r < t.length)
                  return i.call(t, e, a, r)
          }
          )
      }
        , nA = (v = () => {
          if (null === nT)
              return !1;
          try {
              new nT({
                  length: 1,
                  sampleRate: 44100
              })
          } catch {
              return !1
          }
          return !0
      }
      ,
      n = null,
      class t {
          constructor(t) {
              if (null === nh)
                  throw Error("Missing the native OfflineAudioContext constructor.");
              let {length: e, numberOfChannels: i, sampleRate: s} = {
                  ...eS,
                  ...t
              };
              null === n && (n = new nh(1,1,44100));
              let r = null !== nT && nr(v, v) ? new nT({
                  length: e,
                  numberOfChannels: i,
                  sampleRate: s
              }) : n.createBuffer(i, e, s);
              if (0 === r.numberOfChannels)
                  throw iQ();
              return "function" != typeof r.copyFromChannel ? (nk(r),
              eT(r)) : nr(ex, () => ex(r)) || nC(r),
              nw.add(r),
              r
          }
          static[Symbol.hasInstance](e) {
              return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === t.prototype || nw.has(e)
          }
      }
      )
        , nO = (t, e) => {
          let i = iX(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
          });
          e.connect(i).connect(t.destination);
          let n = () => {
              e.removeEventListener("ended", n),
              e.disconnect(i),
              i.disconnect()
          }
          ;
          e.addEventListener("ended", n)
      }
        , nM = async (t, e, i) => {
          let n = eP(t);
          await Promise.all(Array.from(n.activeInputs).map(async ([t,n]) => {
              let s = nl(t)
                , r = await s.render(t, e);
              eJ(t) || r.connect(i, n)
          }
          ))
      }
        , nE = (t, e, i) => nM(e, t, i)
        , nD = (y = t => {
          let e = t.createBufferSource();
          e.start();
          try {
              e.start()
          } catch {
              return !0
          }
          return !1
      }
      ,
      b = t => {
          let e = t.createBufferSource()
            , i = t.createBuffer(1, 1, 44100);
          e.buffer = i;
          try {
              e.start(0, 1)
          } catch {
              return !1
          }
          return !0
      }
      ,
      x = t => {
          let e = t.createBufferSource();
          e.start();
          try {
              e.stop()
          } catch {
              return !1
          }
          return !0
      }
      ,
      w = t => {
          var e;
          t.start = (e = t.start,
          (i=0, n=0, s) => {
              let r = t.buffer
                , a = null === r ? n : Math.min(r.duration, n);
              null !== r && a > r.duration - .5 / t.context.sampleRate ? e.call(t, i, 0, 0) : e.call(t, i, a, s)
          }
          )
      }
      ,
      T = (t, e) => {
          let i = e.createBuffer(1, 1, 44100);
          null === t.buffer && (t.buffer = i),
          i6(t, "buffer", e => () => {
              let n = e.call(t);
              return n === i ? null : n
          }
          , e => n => e.call(t, null === n ? i : n))
      }
      ,
      (t, e) => {
          let i = t.createBufferSource();
          return iD(i, e),
          iP(i, e, "playbackRate"),
          iE(i, e, "buffer"),
          iE(i, e, "loop"),
          iE(i, e, "loopEnd"),
          iE(i, e, "loopStart"),
          nr(y, () => y(t)) || iV(i),
          nr(b, () => b(t)) || w(i),
          nr(x, () => x(t)) || T(i, t),
          nr(i7, () => i7(t)) || ij(i),
          nr(nt, () => nt(t)) || ni(i, t),
          nr(ne, () => ne(t)) || iN(i),
          nO(t, i),
          i
      }
      )
        , nR = (S = t => {
          let e = eP(t);
          if (null === e.renderer)
              throw Error("Missing the renderer of the given AudioParam in the audio graph.");
          return e.renderer
      }
      ,
      (t, e, i) => (S(e).replay(i),
      nM(e, t, i)))
        , nI = (k = (t, e) => {
          t9.set(t, {
              activeInputs: new Set,
              passiveInputs: new WeakMap,
              renderer: e
          })
      }
      ,
      C = t => ({
          replay(e) {
              for (let i of t)
                  if ("exponentialRampToValue" === i.type) {
                      let {endTime: t, value: n} = i;
                      e.exponentialRampToValueAtTime(n, t)
                  } else if ("linearRampToValue" === i.type) {
                      let {endTime: t, value: n} = i;
                      e.linearRampToValueAtTime(n, t)
                  } else if ("setTarget" === i.type) {
                      let {startTime: t, target: n, timeConstant: s} = i;
                      e.setTargetAtTime(n, t, s)
                  } else if ("setValue" === i.type) {
                      let {startTime: t, value: n} = i;
                      e.setValueAtTime(n, t)
                  } else if ("setValueCurve" === i.type) {
                      let {duration: t, startTime: n, values: s} = i;
                      e.setValueCurveAtTime(s, n, t)
                  } else
                      throw Error("Can't apply an unknown automation.")
          }
      }),
      A = t8.createCancelAndHoldAutomationEvent,
      O = t8.createCancelScheduledValuesAutomationEvent,
      M = t8.createExponentialRampToValueAutomationEvent,
      E = t8.createLinearRampToValueAutomationEvent,
      D = t8.createSetTargetAutomationEvent,
      R = t8.createSetValueAutomationEvent,
      I = t8.createSetValueCurveAutomationEvent,
      (t, e, i, n=null, s=null) => {
          let r = i.value
            , a = new t8.AutomationEventList(r)
            , o = e ? C(a) : null
            , l = {
              get defaultValue() {
                  return r
              },
              get maxValue() {
                  return null === n ? i.maxValue : n
              },
              get minValue() {
                  return null === s ? i.minValue : s
              },
              get value() {
                  return i.value
              },
              set value(value) {
                  i.value = value,
                  l.setValueAtTime(value, t.context.currentTime)
              },
              cancelAndHoldAtTime(e) {
                  if ("function" == typeof i.cancelAndHoldAtTime)
                      null === o && a.flush(t.context.currentTime),
                      a.add(A(e)),
                      i.cancelAndHoldAtTime(e);
                  else {
                      let n = Array.from(a).pop();
                      null === o && a.flush(t.context.currentTime),
                      a.add(A(e));
                      let s = Array.from(a).pop();
                      i.cancelScheduledValues(e),
                      n !== s && void 0 !== s && ("exponentialRampToValue" === s.type ? i.exponentialRampToValueAtTime(s.value, s.endTime) : "linearRampToValue" === s.type ? i.linearRampToValueAtTime(s.value, s.endTime) : "setValue" === s.type ? i.setValueAtTime(s.value, s.startTime) : "setValueCurve" === s.type && i.setValueCurveAtTime(s.values, s.startTime, s.duration))
                  }
                  return l
              },
              cancelScheduledValues: e => (null === o && a.flush(t.context.currentTime),
              a.add(O(e)),
              i.cancelScheduledValues(e),
              l),
              exponentialRampToValueAtTime(e, n) {
                  if (0 === e || !Number.isFinite(n) || n < 0)
                      throw RangeError();
                  let s = t.context.currentTime;
                  return null === o && a.flush(s),
                  0 === Array.from(a).length && (a.add(R(r, s)),
                  i.setValueAtTime(r, s)),
                  a.add(M(e, n)),
                  i.exponentialRampToValueAtTime(e, n),
                  l
              },
              linearRampToValueAtTime(e, n) {
                  let s = t.context.currentTime;
                  return null === o && a.flush(s),
                  0 === Array.from(a).length && (a.add(R(r, s)),
                  i.setValueAtTime(r, s)),
                  a.add(E(e, n)),
                  i.linearRampToValueAtTime(e, n),
                  l
              },
              setTargetAtTime: (e, n, s) => (null === o && a.flush(t.context.currentTime),
              a.add(D(e, n, s)),
              i.setTargetAtTime(e, n, s),
              l),
              setValueAtTime: (e, n) => (null === o && a.flush(t.context.currentTime),
              a.add(R(e, n)),
              i.setValueAtTime(e, n),
              l),
              setValueCurveAtTime(e, n, s) {
                  let r = e instanceof Float32Array ? e : new Float32Array(e);
                  if (null !== nm && "webkitAudioContext" === nm.name) {
                      let e = n + s
                        , u = t.context.sampleRate
                        , c = Math.ceil(n * u)
                        , h = Math.floor(e * u)
                        , d = h - c
                        , p = new Float32Array(d);
                      for (let t = 0; t < d; t += 1) {
                          let e = (r.length - 1) / s * ((c + t) / u - n)
                            , i = Math.floor(e)
                            , a = Math.ceil(e);
                          p[t] = i === a ? r[i] : (1 - (e - i)) * r[i] + (1 - (a - e)) * r[a]
                      }
                      null === o && a.flush(t.context.currentTime),
                      a.add(I(p, n, s)),
                      i.setValueCurveAtTime(p, n, s);
                      let f = h / u;
                      f < e && i9(l, p[p.length - 1], f),
                      i9(l, r[r.length - 1], e)
                  } else
                      null === o && a.flush(t.context.currentTime),
                      a.add(I(r, n, s)),
                      i.setValueCurveAtTime(r, n, s);
                  return l
              }
          };
          return t7.set(l, i),
          np.set(l, t),
          k(l, o),
          l
      }
      )
        , nP = (P = nb,
      V = () => {
          let t = new WeakMap
            , e = null
            , i = null
            , n = async (n, s) => {
              let r = e$(n)
                , a = eb(r, s);
              return a || (r = nD(s, {
                  buffer: r.buffer,
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation,
                  loop: r.loop,
                  loopEnd: r.loopEnd,
                  loopStart: r.loopStart,
                  playbackRate: r.playbackRate.value
              }),
              null !== e && r.start(...e),
              null !== i && r.stop(i)),
              t.set(s, r),
              a ? await nE(s, n.playbackRate, r.playbackRate) : await nR(s, n.playbackRate, r.playbackRate),
              await nu(n, s, r),
              r
          }
          ;
          return {
              set start(value) {
                  e = value
              },
              set stop(value) {
                  i = value
              },
              render(e, i) {
                  let s = t.get(i);
                  return void 0 !== s ? Promise.resolve(s) : n(e, i)
              }
          }
      }
      ,
      class extends P {
          constructor(t, e) {
              let i = nc(t)
                , n = {
                  ...eC,
                  ...e
              }
                , s = nD(i, n)
                , r = nd(i)
                , a = r ? V() : null;
              super(t, !1, s, a),
              this._audioBufferSourceNodeRenderer = a,
              this._isBufferNullified = !1,
              this._isBufferSet = null !== n.buffer,
              this._nativeAudioBufferSourceNode = s,
              this._onended = null,
              this._playbackRate = nI(this, r, s.playbackRate, 34028234663852886e22, -34028234663852886e22)
          }
          get buffer() {
              return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
          }
          set buffer(t) {
              if (this._nativeAudioBufferSourceNode.buffer = t,
              null !== t) {
                  if (this._isBufferSet)
                      throw iw();
                  this._isBufferSet = !0
              }
          }
          get loop() {
              return this._nativeAudioBufferSourceNode.loop
          }
          set loop(t) {
              this._nativeAudioBufferSourceNode.loop = t
          }
          get loopEnd() {
              return this._nativeAudioBufferSourceNode.loopEnd
          }
          set loopEnd(t) {
              this._nativeAudioBufferSourceNode.loopEnd = t
          }
          get loopStart() {
              return this._nativeAudioBufferSourceNode.loopStart
          }
          set loopStart(t) {
              this._nativeAudioBufferSourceNode.loopStart = t
          }
          get onended() {
              return this._onended
          }
          set onended(t) {
              let e = "function" == typeof t ? nn(this, t) : null;
              this._nativeAudioBufferSourceNode.onended = e;
              let i = this._nativeAudioBufferSourceNode.onended;
              this._onended = null !== i && i === e ? t : i
          }
          get playbackRate() {
              return this._playbackRate
          }
          start(t=0, e=0, i) {
              if (this._nativeAudioBufferSourceNode.start(t, e, i),
              null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === i ? [t, e] : [t, e, i]),
              "closed" !== this.context.state) {
                  em(this);
                  let t = () => {
                      this._nativeAudioBufferSourceNode.removeEventListener("ended", t),
                      ek(this) && e_(this)
                  }
                  ;
                  this._nativeAudioBufferSourceNode.addEventListener("ended", t)
              }
          }
          stop(t=0) {
              this._nativeAudioBufferSourceNode.stop(t),
              null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = t)
          }
      }
      )
        , nV = (j = nb,
      N = t => {
          let e = new WeakMap
            , i = async (i, n) => {
              let s = n.destination;
              return e.set(n, s),
              await t(i, n, s),
              s
          }
          ;
          return {
              render(t, n) {
                  let s = e.get(n);
                  return void 0 !== s ? Promise.resolve(s) : i(t, n)
              }
          }
      }
      ,
      F = (t, e, i) => {
          let n = t.destination;
          if (n.channelCount !== e)
              try {
                  n.channelCount = e
              } catch {}
          i && "explicit" !== n.channelCountMode && (n.channelCountMode = "explicit"),
          0 === n.maxChannelCount && Object.defineProperty(n, "maxChannelCount", {
              value: e
          });
          let s = iX(t, {
              channelCount: e,
              channelCountMode: n.channelCountMode,
              channelInterpretation: n.channelInterpretation,
              gain: 1
          });
          return i6(s, "channelCount", t => () => t.call(s), t => e => {
              t.call(s, e);
              try {
                  n.channelCount = e
              } catch (t) {
                  if (e > n.maxChannelCount)
                      throw t
              }
          }
          ),
          i6(s, "channelCountMode", t => () => t.call(s), t => e => {
              t.call(s, e),
              n.channelCountMode = e
          }
          ),
          i6(s, "channelInterpretation", t => () => t.call(s), t => e => {
              t.call(s, e),
              n.channelInterpretation = e
          }
          ),
          Object.defineProperty(s, "maxChannelCount", {
              get: () => n.maxChannelCount
          }),
          s.connect(n),
          s
      }
      ,
      class extends j {
          constructor(t, e) {
              let i = nc(t)
                , n = nd(i)
                , s = F(i, e, n);
              super(t, !1, s, n ? N(nu) : null),
              this._isNodeOfNativeOfflineAudioContext = n,
              this._nativeAudioDestinationNode = s
          }
          get channelCount() {
              return this._nativeAudioDestinationNode.channelCount
          }
          set channelCount(t) {
              if (this._isNodeOfNativeOfflineAudioContext)
                  throw iw();
              if (t > this._nativeAudioDestinationNode.maxChannelCount)
                  throw ew();
              this._nativeAudioDestinationNode.channelCount = t
          }
          get channelCountMode() {
              return this._nativeAudioDestinationNode.channelCountMode
          }
          set channelCountMode(t) {
              if (this._isNodeOfNativeOfflineAudioContext)
                  throw iw();
              this._nativeAudioDestinationNode.channelCountMode = t
          }
          get maxChannelCount() {
              return this._nativeAudioDestinationNode.maxChannelCount
          }
      }
      )
        , nj = (t, e) => ns.set(t, e)
        , nN = (z = nb,
      q = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e)
                , s = eb(n, i);
              return s || (n = iW(i, {
                  Q: n.Q.value,
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  detune: n.detune.value,
                  frequency: n.frequency.value,
                  gain: n.gain.value,
                  type: n.type
              })),
              t.set(i, n),
              s ? (await nE(i, e.Q, n.Q),
              await nE(i, e.detune, n.detune),
              await nE(i, e.frequency, n.frequency),
              await nE(i, e.gain, n.gain)) : (await nR(i, e.Q, n.Q),
              await nR(i, e.detune, n.detune),
              await nR(i, e.frequency, n.frequency),
              await nR(i, e.gain, n.gain)),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends z {
          constructor(t, e) {
              let i = nc(t)
                , n = iW(i, {
                  ...ic,
                  ...e
              })
                , s = nd(i);
              super(t, !1, n, s ? q() : null),
              this._Q = nI(this, s, n.Q, 34028234663852886e22, -34028234663852886e22),
              this._detune = nI(this, s, n.detune, 1200 * Math.log2(34028234663852886e22), -1200 * Math.log2(34028234663852886e22)),
              this._frequency = nI(this, s, n.frequency, t.sampleRate / 2, 0),
              this._gain = nI(this, s, n.gain, 40 * Math.log10(34028234663852886e22), -34028234663852886e22),
              this._nativeBiquadFilterNode = n,
              nj(this, 1)
          }
          get detune() {
              return this._detune
          }
          get frequency() {
              return this._frequency
          }
          get gain() {
              return this._gain
          }
          get Q() {
              return this._Q
          }
          get type() {
              return this._nativeBiquadFilterNode.type
          }
          set type(t) {
              this._nativeBiquadFilterNode.type = t
          }
          getFrequencyResponse(t, e, i) {
              try {
                  this._nativeBiquadFilterNode.getFrequencyResponse(t, e, i)
              } catch (t) {
                  if (11 === t.code)
                      throw iT();
                  throw t
              }
              if (t.length !== e.length || e.length !== i.length)
                  throw iT()
          }
      }
      )
        , nF = (t, e, i) => {
          var n, s;
          let r = new Set;
          return t.connect = (n = t.connect,
          (i, s=0, a=0) => {
              let o = 0 === r.size;
              if (n_(i))
                  return n.call(t, i, s, a),
                  eq(r, [i, s, a], t => t[0] === i && t[1] === s && t[2] === a, !0),
                  o && e(),
                  i;
              n.call(t, i, s),
              eq(r, [i, s], t => t[0] === i && t[1] === s, !0),
              o && e()
          }
          ),
          t.disconnect = (s = t.disconnect,
          (e, n, a) => {
              let o = r.size > 0;
              if (void 0 === e)
                  s.apply(t),
                  r.clear();
              else if ("number" == typeof e)
                  for (let i of (s.call(t, e),
                  r))
                      i[1] === e && r.delete(i);
              else
                  for (let i of (n_(e) ? s.call(t, e, n, a) : s.call(t, e, n),
                  r))
                      i[0] === e && (void 0 === n || i[1] === n) && (void 0 === a || i[2] === a) && r.delete(i);
              let l = 0 === r.size;
              o && l && i()
          }
          ),
          t
      }
        , nz = (B = (t, e) => {
          e.channelCount = 1,
          e.channelCountMode = "explicit",
          Object.defineProperty(e, "channelCount", {
              get: () => 1,
              set: () => {
                  throw iw()
              }
          }),
          Object.defineProperty(e, "channelCountMode", {
              get: () => "explicit",
              set: () => {
                  throw iw()
              }
          });
          let i = t.createBufferSource();
          nF(e, () => {
              let t = e.numberOfInputs;
              for (let n = 0; n < t; n += 1)
                  i.connect(e, 0, n)
          }
          , () => i.disconnect(e))
      }
      ,
      (t, e) => {
          let i = t.createChannelMerger(e.numberOfInputs);
          return null !== nm && "webkitAudioContext" === nm.name && B(t, i),
          iD(i, e),
          i
      }
      )
        , nq = (L = nb,
      W = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e);
              return eb(n, i) || (n = nz(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  numberOfInputs: n.numberOfInputs
              })),
              t.set(i, n),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends L {
          constructor(t, e) {
              let i = nc(t);
              super(t, !1, nz(i, {
                  ...ih,
                  ...e
              }), nd(i) ? W() : null)
          }
      }
      )
        , nB = (U = nb,
      Y = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e);
              return eb(n, i) || (n = iY(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  numberOfOutputs: n.numberOfOutputs
              })),
              t.set(i, n),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      G = t => ({
          ...t,
          channelCount: t.numberOfOutputs
      }),
      class extends U {
          constructor(t, e) {
              let i = nc(t);
              super(t, !1, iY(i, G({
                  ...id,
                  ...e
              })), nd(i) ? Y() : null)
          }
      }
      )
        , nL = (H = (t, {offset: e, ...i}) => {
          let n = t.createBuffer(1, 2, 44100)
            , s = nD(t, {
              buffer: null,
              channelCount: 2,
              channelCountMode: "max",
              channelInterpretation: "speakers",
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1
          })
            , r = iX(t, {
              ...i,
              gain: e
          })
            , a = n.getChannelData(0);
          return a[0] = 1,
          a[1] = 1,
          s.buffer = n,
          s.loop = !0,
          nO(t, s),
          nF(iG({
              get bufferSize() {
                  return
              },
              get channelCount() {
                  return r.channelCount
              },
              set channelCount(value) {
                  r.channelCount = value
              },
              get channelCountMode() {
                  return r.channelCountMode
              },
              set channelCountMode(value) {
                  r.channelCountMode = value
              },
              get channelInterpretation() {
                  return r.channelInterpretation
              },
              set channelInterpretation(value) {
                  r.channelInterpretation = value
              },
              get context() {
                  return r.context
              },
              get inputs() {
                  return []
              },
              get numberOfInputs() {
                  return s.numberOfInputs
              },
              get numberOfOutputs() {
                  return r.numberOfOutputs
              },
              get offset() {
                  return r.gain
              },
              get onended() {
                  return s.onended
              },
              set onended(value) {
                  s.onended = value
              },
              addEventListener: (...t) => s.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => s.dispatchEvent(t[0]),
              removeEventListener: (...t) => s.removeEventListener(t[0], t[1], t[2]),
              start(t=0) {
                  s.start.call(s, t)
              },
              stop(t=0) {
                  s.stop.call(s, t)
              }
          }, r), () => s.connect(r), () => s.disconnect(r))
      }
      ,
      (t, e) => {
          if (void 0 === t.createConstantSource)
              return H(t, e);
          let i = t.createConstantSource();
          return iD(i, e),
          iP(i, e, "offset"),
          nr(i7, () => i7(t)) || ij(i),
          nr(ne, () => ne(t)) || iN(i),
          nO(t, i),
          i
      }
      )
        , nW = (X = nb,
      Z = () => {
          let t = new WeakMap
            , e = null
            , i = null
            , n = async (n, s) => {
              let r = e$(n)
                , a = eb(r, s);
              return a || (r = nL(s, {
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation,
                  offset: r.offset.value
              }),
              null !== e && r.start(e),
              null !== i && r.stop(i)),
              t.set(s, r),
              a ? await nE(s, n.offset, r.offset) : await nR(s, n.offset, r.offset),
              await nu(n, s, r),
              r
          }
          ;
          return {
              set start(value) {
                  e = value
              },
              set stop(value) {
                  i = value
              },
              render(e, i) {
                  let s = t.get(i);
                  return void 0 !== s ? Promise.resolve(s) : n(e, i)
              }
          }
      }
      ,
      class extends X {
          constructor(t, e) {
              let i = nc(t)
                , n = nL(i, {
                  ...ip,
                  ...e
              })
                , s = nd(i)
                , r = s ? Z() : null;
              super(t, !1, n, r),
              this._constantSourceNodeRenderer = r,
              this._nativeConstantSourceNode = n,
              this._offset = nI(this, s, n.offset, 34028234663852886e22, -34028234663852886e22),
              this._onended = null
          }
          get offset() {
              return this._offset
          }
          get onended() {
              return this._onended
          }
          set onended(t) {
              let e = "function" == typeof t ? nn(this, t) : null;
              this._nativeConstantSourceNode.onended = e;
              let i = this._nativeConstantSourceNode.onended;
              this._onended = null !== i && i === e ? t : i
          }
          start(t=0) {
              if (this._nativeConstantSourceNode.start(t),
              null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = t),
              "closed" !== this.context.state) {
                  em(this);
                  let t = () => {
                      this._nativeConstantSourceNode.removeEventListener("ended", t),
                      ek(this) && e_(this)
                  }
                  ;
                  this._nativeConstantSourceNode.addEventListener("ended", t)
              }
          }
          stop(t=0) {
              this._nativeConstantSourceNode.stop(t),
              null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = t)
          }
      }
      )
        , nU = (t, e) => {
          let i = t.createConvolver();
          if (iD(i, e),
          e.disableNormalization === i.normalize && (i.normalize = !e.disableNormalization),
          iE(i, e, "buffer"),
          e.channelCount > 2 || (i6(i, "channelCount", t => () => t.call(i), t => e => {
              if (e > 2)
                  throw iQ();
              return t.call(i, e)
          }
          ),
          "max" === e.channelCountMode))
              throw iQ();
          return i6(i, "channelCountMode", t => () => t.call(i), t => e => {
              if ("max" === e)
                  throw iQ();
              return t.call(i, e)
          }
          ),
          i
      }
        , nY = ($ = nb,
      Q = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e);
              return eb(n, i) || (n = nU(i, {
                  buffer: n.buffer,
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  disableNormalization: !n.normalize
              })),
              t.set(i, n),
              eW(n) ? await nu(e, i, n.inputs[0]) : await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends $ {
          constructor(t, e) {
              let i = nc(t)
                , n = {
                  ...im,
                  ...e
              }
                , s = nU(i, n);
              super(t, !1, s, nd(i) ? Q() : null),
              this._isBufferNullified = !1,
              this._nativeConvolverNode = s,
              null !== n.buffer && nj(this, n.buffer.duration)
          }
          get buffer() {
              return this._isBufferNullified ? null : this._nativeConvolverNode.buffer
          }
          set buffer(t) {
              if (this._nativeConvolverNode.buffer = t,
              null === t && null !== this._nativeConvolverNode.buffer) {
                  let t = this._nativeConvolverNode.context;
                  this._nativeConvolverNode.buffer = t.createBuffer(1, 1, t.sampleRate),
                  this._isBufferNullified = !0,
                  nj(this, 0)
              } else
                  this._isBufferNullified = !1,
                  nj(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration)
          }
          get normalize() {
              return this._nativeConvolverNode.normalize
          }
          set normalize(t) {
              this._nativeConvolverNode.normalize = t
          }
      }
      )
        , nG = (J = nb,
      K = t => {
          let e = new WeakMap
            , i = async (i, n) => {
              let s = e$(i)
                , r = eb(s, n);
              return r || (s = iH(n, {
                  channelCount: s.channelCount,
                  channelCountMode: s.channelCountMode,
                  channelInterpretation: s.channelInterpretation,
                  delayTime: s.delayTime.value,
                  maxDelayTime: t
              })),
              e.set(n, s),
              r ? await nE(n, i.delayTime, s.delayTime) : await nR(n, i.delayTime, s.delayTime),
              await nu(i, n, s),
              s
          }
          ;
          return {
              render(t, n) {
                  let s = e.get(n);
                  return void 0 !== s ? Promise.resolve(s) : i(t, n)
              }
          }
      }
      ,
      class extends J {
          constructor(t, e) {
              let i = nc(t)
                , n = {
                  ...i_,
                  ...e
              }
                , s = iH(i, n)
                , r = nd(i);
              super(t, !1, s, r ? K(n.maxDelayTime) : null),
              this._delayTime = nI(this, r, s.delayTime),
              nj(this, n.maxDelayTime)
          }
          get delayTime() {
              return this._delayTime
          }
      }
      )
        , nH = (t, e) => {
          let i = t.createDynamicsCompressor();
          if (iD(i, e),
          e.channelCount > 2 || "max" === e.channelCountMode)
              throw iQ();
          return iP(i, e, "attack"),
          iP(i, e, "knee"),
          iP(i, e, "ratio"),
          iP(i, e, "release"),
          iP(i, e, "threshold"),
          i
      }
        , nX = (tt = nb,
      te = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e)
                , s = eb(n, i);
              return s || (n = nH(i, {
                  attack: n.attack.value,
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  knee: n.knee.value,
                  ratio: n.ratio.value,
                  release: n.release.value,
                  threshold: n.threshold.value
              })),
              t.set(i, n),
              s ? (await nE(i, e.attack, n.attack),
              await nE(i, e.knee, n.knee),
              await nE(i, e.ratio, n.ratio),
              await nE(i, e.release, n.release),
              await nE(i, e.threshold, n.threshold)) : (await nR(i, e.attack, n.attack),
              await nR(i, e.knee, n.knee),
              await nR(i, e.ratio, n.ratio),
              await nR(i, e.release, n.release),
              await nR(i, e.threshold, n.threshold)),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends tt {
          constructor(t, e) {
              let i = nc(t)
                , n = nH(i, {
                  ...ib,
                  ...e
              })
                , s = nd(i);
              super(t, !1, n, s ? te() : null),
              this._attack = nI(this, s, n.attack),
              this._knee = nI(this, s, n.knee),
              this._nativeDynamicsCompressorNode = n,
              this._ratio = nI(this, s, n.ratio),
              this._release = nI(this, s, n.release),
              this._threshold = nI(this, s, n.threshold),
              nj(this, .006)
          }
          get attack() {
              return this._attack
          }
          get channelCount() {
              return this._nativeDynamicsCompressorNode.channelCount
          }
          set channelCount(t) {
              let e = this._nativeDynamicsCompressorNode.channelCount;
              if (this._nativeDynamicsCompressorNode.channelCount = t,
              t > 2)
                  throw this._nativeDynamicsCompressorNode.channelCount = e,
                  iQ()
          }
          get channelCountMode() {
              return this._nativeDynamicsCompressorNode.channelCountMode
          }
          set channelCountMode(t) {
              let e = this._nativeDynamicsCompressorNode.channelCountMode;
              if (this._nativeDynamicsCompressorNode.channelCountMode = t,
              "max" === t)
                  throw this._nativeDynamicsCompressorNode.channelCountMode = e,
                  iQ()
          }
          get knee() {
              return this._knee
          }
          get ratio() {
              return this._ratio
          }
          get reduction() {
              return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction
          }
          get release() {
              return this._release
          }
          get threshold() {
              return this._threshold
          }
      }
      )
        , nZ = (ti = nb,
      tn = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e)
                , s = eb(n, i);
              return s || (n = iX(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  gain: n.gain.value
              })),
              t.set(i, n),
              s ? await nE(i, e.gain, n.gain) : await nR(i, e.gain, n.gain),
              await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends ti {
          constructor(t, e) {
              let i = nc(t)
                , n = iX(i, {
                  ...ix,
                  ...e
              })
                , s = nd(i);
              super(t, !1, n, s ? tn() : null),
              this._gain = nI(this, s, n.gain, 34028234663852886e22, -34028234663852886e22)
          }
          get gain() {
              return this._gain
          }
      }
      )
        , n$ = (ts = () => {
          if (null === nh)
              return Promise.resolve(!1);
          let t = new nh(1,1,44100)
            , e = iX(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
          });
          return new Promise(i => {
              t.oncomplete = () => {
                  e.disconnect(),
                  i(0 !== t.currentTime)
              }
              ,
              t.startRendering()
          }
          )
      }
      ,
      t => nr(iM, () => iM(t)) ? Promise.resolve(nr(ts, ts)).then(e => {
          if (!e) {
              let e = i$(t, 512, 0, 1);
              t.oncomplete = () => {
                  e.onaudioprocess = null,
                  e.disconnect()
              }
              ,
              e.onaudioprocess = () => t.currentTime,
              e.connect(t.destination)
          }
          return t.startRendering()
      }
      ) : new Promise(e => {
          let i = iX(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
          });
          t.oncomplete = t => {
              i.disconnect(),
              e(t.renderedBuffer)
          }
          ,
          i.connect(t.destination),
          t.startRendering()
      }
      ))
        , nQ = (tr = (t, e, {channelCount: i, channelCountMode: n, channelInterpretation: s, feedback: r, feedforward: a}) => {
          let o = iz(e, t.sampleRate)
            , l = r instanceof Float64Array ? r : new Float64Array(r)
            , u = a instanceof Float64Array ? a : new Float64Array(a)
            , c = l.length
            , h = u.length
            , d = Math.min(c, h);
          if (0 === c || c > 20)
              throw iQ();
          if (0 === l[0])
              throw iw();
          if (0 === h || h > 20)
              throw iQ();
          if (0 === u[0])
              throw iw();
          if (1 !== l[0]) {
              for (let t = 0; t < h; t += 1)
                  u[t] /= l[0];
              for (let t = 1; t < c; t += 1)
                  l[t] /= l[0]
          }
          let p = i$(t, o, i, i);
          p.channelCount = i,
          p.channelCountMode = n,
          p.channelInterpretation = s;
          let f = []
            , m = []
            , g = [];
          for (let t = 0; t < i; t += 1) {
              f.push(0);
              let t = new Float32Array(32)
                , e = new Float32Array(32);
              t.fill(0),
              e.fill(0),
              m.push(t),
              g.push(e)
          }
          p.onaudioprocess = t => {
              let e = t.inputBuffer
                , i = t.outputBuffer
                , n = e.numberOfChannels;
              for (let t = 0; t < n; t += 1) {
                  let n = e.getChannelData(t)
                    , s = i.getChannelData(t);
                  f[t] = iC(l, c, u, h, d, m[t], g[t], f[t], 32, n, s)
              }
          }
          ;
          let v = t.sampleRate / 2;
          return iG({
              get bufferSize() {
                  return o
              },
              get channelCount() {
                  return p.channelCount
              },
              set channelCount(value) {
                  p.channelCount = value
              },
              get channelCountMode() {
                  return p.channelCountMode
              },
              set channelCountMode(value) {
                  p.channelCountMode = value
              },
              get channelInterpretation() {
                  return p.channelInterpretation
              },
              set channelInterpretation(value) {
                  p.channelInterpretation = value
              },
              get context() {
                  return p.context
              },
              get inputs() {
                  return [p]
              },
              get numberOfInputs() {
                  return p.numberOfInputs
              },
              get numberOfOutputs() {
                  return p.numberOfOutputs
              },
              addEventListener: (...t) => p.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => p.dispatchEvent(t[0]),
              getFrequencyResponse(t, e, i) {
                  if (t.length !== e.length || e.length !== i.length)
                      throw iT();
                  let n = t.length;
                  for (let s = 0; s < n; s += 1) {
                      let n = -(t[s] / v * Math.PI)
                        , r = [Math.cos(n), Math.sin(n)]
                        , a = function(t, e) {
                          let i = e[0] * e[0] + e[1] * e[1];
                          return [(t[0] * e[0] + t[1] * e[1]) / i, (t[1] * e[0] - t[0] * e[1]) / i]
                      }(iZ(u, r), iZ(l, r));
                      e[s] = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
                      i[s] = Math.atan2(a[1], a[0])
                  }
              },
              removeEventListener: (...t) => p.removeEventListener(t[0], t[1], t[2])
          }, p)
      }
      ,
      (t, e, i) => {
          if (void 0 === t.createIIRFilter)
              return tr(t, e, i);
          let n = t.createIIRFilter(i.feedforward, i.feedback);
          return iD(n, i),
          n
      }
      )
        , nJ = (ta = nb,
      to = (t, e) => {
          let i = new WeakMap
            , n = null
            , s = async (s, r) => {
              let a = null
                , o = e$(s)
                , l = eb(o, r);
              if (void 0 === r.createIIRFilter ? a = nD(r, {
                  buffer: null,
                  channelCount: 2,
                  channelCountMode: "max",
                  channelInterpretation: "speakers",
                  loop: !1,
                  loopEnd: 0,
                  loopStart: 0,
                  playbackRate: 1
              }) : l || (o = r.createIIRFilter(e, t)),
              i.set(r, null === a ? o : a),
              null !== a) {
                  if (null === n) {
                      if (null === nh)
                          throw Error("Missing the native OfflineAudioContext constructor.");
                      let i = new nh(s.context.destination.channelCount,s.context.length,r.sampleRate);
                      n = (async () => (await nu(s, i, i.destination),
                      iA(await n$(i), r, t, e)))()
                  }
                  let i = await n;
                  return a.buffer = i,
                  a.start(0),
                  a
              }
              return await nu(s, r, o),
              o
          }
          ;
          return {
              render(t, e) {
                  let n = i.get(e);
                  return void 0 !== n ? Promise.resolve(n) : s(t, e)
              }
          }
      }
      ,
      class extends ta {
          constructor(t, e) {
              let i = nc(t)
                , n = nd(i)
                , s = {
                  ...ik,
                  ...e
              }
                , r = nQ(i, n ? null : t.baseLatency, s);
              super(t, !1, r, n ? to(s.feedback, s.feedforward) : null),
              iS(r),
              this._nativeIIRFilterNode = r,
              nj(this, 1)
          }
          getFrequencyResponse(t, e, i) {
              return this._nativeIIRFilterNode.getFrequencyResponse(t, e, i)
          }
      }
      )
        , nK = new WeakMap
        , n0 = (tl = (t, e) => {
          let i = e.listener
            , {forwardX: n, forwardY: s, forwardZ: r, positionX: a, positionY: o, positionZ: l, upX: u, upY: c, upZ: h} = void 0 === i.forwardX ? ( () => {
              let n = new Float32Array(1)
                , s = nz(e, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "speakers",
                  numberOfInputs: 9
              })
                , r = nd(e)
                , a = !1
                , o = [0, 0, -1, 0, 1, 0]
                , l = [0, 0, 0]
                , u = () => {
                  if (a)
                      return;
                  a = !0;
                  let t = i$(e, 256, 9, 0);
                  t.onaudioprocess = ({inputBuffer: t}) => {
                      let e = [i5(t, n, 0), i5(t, n, 1), i5(t, n, 2), i5(t, n, 3), i5(t, n, 4), i5(t, n, 5)];
                      e.some( (t, e) => t !== o[e]) && (i.setOrientation(...e),
                      o = e);
                      let s = [i5(t, n, 6), i5(t, n, 7), i5(t, n, 8)];
                      s.some( (t, e) => t !== l[e]) && (i.setPosition(...s),
                      l = s)
                  }
                  ,
                  s.connect(t)
              }
                , c = t => e => {
                  e !== o[t] && (o[t] = e,
                  i.setOrientation(...o))
              }
                , h = t => e => {
                  e !== l[t] && (l[t] = e,
                  i.setPosition(...l))
              }
                , d = (i, n, a) => {
                  var o, l, c, h, d, p, f;
                  let m = nL(e, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "discrete",
                      offset: n
                  });
                  m.connect(s, 0, i),
                  m.start(),
                  Object.defineProperty(m.offset, "defaultValue", {
                      get: () => n
                  });
                  let g = nI({
                      context: t
                  }, r, m.offset, 34028234663852886e22, -34028234663852886e22);
                  return i6(g, "value", t => () => t.call(g), t => e => {
                      try {
                          t.call(g, e)
                      } catch (t) {
                          if (9 !== t.code)
                              throw t
                      }
                      u(),
                      r && a(e)
                  }
                  ),
                  g.cancelAndHoldAtTime = (o = g.cancelAndHoldAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = o.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.cancelScheduledValues = (l = g.cancelScheduledValues,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = l.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.exponentialRampToValueAtTime = (c = g.exponentialRampToValueAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = c.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.linearRampToValueAtTime = (h = g.linearRampToValueAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = h.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.setTargetAtTime = (d = g.setTargetAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = d.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.setValueAtTime = (p = g.setValueAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = p.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g.setValueCurveAtTime = (f = g.setValueCurveAtTime,
                  r ? () => {
                      throw iQ()
                  }
                  : (...t) => {
                      let e = f.apply(g, t);
                      return u(),
                      e
                  }
                  ),
                  g
              }
              ;
              return {
                  forwardX: d(0, 0, c(0)),
                  forwardY: d(1, 0, c(1)),
                  forwardZ: d(2, -1, c(2)),
                  positionX: d(6, 0, h(0)),
                  positionY: d(7, 0, h(1)),
                  positionZ: d(8, 0, h(2)),
                  upX: d(3, 0, c(3)),
                  upY: d(4, 1, c(4)),
                  upZ: d(5, 0, c(5))
              }
          }
          )() : i;
          return {
              get forwardX() {
                  return n
              },
              get forwardY() {
                  return s
              },
              get forwardZ() {
                  return r
              },
              get positionX() {
                  return a
              },
              get positionY() {
                  return o
              },
              get positionZ() {
                  return l
              },
              get upX() {
                  return u
              },
              get upY() {
                  return c
              },
              get upZ() {
                  return h
              }
          }
      }
      ,
      tu = nf,
      class extends tu {
          constructor(t, e) {
              super(t),
              this._nativeContext = t,
              et.set(this, t),
              nd(t) && nK.set(t, new Set),
              this._destination = new nV(this,e),
              this._listener = tl(this, t),
              this._onstatechange = null
          }
          get currentTime() {
              return this._nativeContext.currentTime
          }
          get destination() {
              return this._destination
          }
          get listener() {
              return this._listener
          }
          get onstatechange() {
              return this._onstatechange
          }
          set onstatechange(t) {
              let e = "function" == typeof t ? nn(this, t) : null;
              this._nativeContext.onstatechange = e;
              let i = this._nativeContext.onstatechange;
              this._onstatechange = null !== i && i === e ? t : i
          }
          get sampleRate() {
              return this._nativeContext.sampleRate
          }
          get state() {
              return this._nativeContext.state
          }
      }
      )
        , n1 = (t, e) => {
          let i = t.createOscillator();
          return iD(i, e),
          iP(i, e, "detune"),
          iP(i, e, "frequency"),
          void 0 !== e.periodicWave ? i.setPeriodicWave(e.periodicWave) : iE(i, e, "type"),
          nr(i7, () => i7(t)) || ij(i),
          nr(nt, () => nt(t)) || ni(i, t),
          nr(ne, () => ne(t)) || iN(i),
          nO(t, i),
          i
      }
        , n2 = (tc = nb,
      th = () => {
          let t = new WeakMap
            , e = null
            , i = null
            , n = null
            , s = async (s, r) => {
              let a = e$(s)
                , o = eb(a, r);
              return o || (a = n1(r, {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  detune: a.detune.value,
                  frequency: a.frequency.value,
                  periodicWave: null === e ? void 0 : e,
                  type: a.type
              }),
              null !== i && a.start(i),
              null !== n && a.stop(n)),
              t.set(r, a),
              o ? (await nE(r, s.detune, a.detune),
              await nE(r, s.frequency, a.frequency)) : (await nR(r, s.detune, a.detune),
              await nR(r, s.frequency, a.frequency)),
              await nu(s, r, a),
              a
          }
          ;
          return {
              set periodicWave(value) {
                  e = value
              },
              set start(value) {
                  i = value
              },
              set stop(value) {
                  n = value
              },
              render(e, i) {
                  let n = t.get(i);
                  return void 0 !== n ? Promise.resolve(n) : s(e, i)
              }
          }
      }
      ,
      class extends tc {
          constructor(t, e) {
              let i = nc(t)
                , n = {
                  ...iK,
                  ...e
              }
                , s = n1(i, n)
                , r = nd(i)
                , a = r ? th() : null
                , o = t.sampleRate / 2;
              super(t, !1, s, a),
              this._detune = nI(this, r, s.detune, 153600, -153600),
              this._frequency = nI(this, r, s.frequency, o, -o),
              this._nativeOscillatorNode = s,
              this._onended = null,
              this._oscillatorNodeRenderer = a,
              null !== this._oscillatorNodeRenderer && void 0 !== n.periodicWave && (this._oscillatorNodeRenderer.periodicWave = n.periodicWave)
          }
          get detune() {
              return this._detune
          }
          get frequency() {
              return this._frequency
          }
          get onended() {
              return this._onended
          }
          set onended(t) {
              let e = "function" == typeof t ? nn(this, t) : null;
              this._nativeOscillatorNode.onended = e;
              let i = this._nativeOscillatorNode.onended;
              this._onended = null !== i && i === e ? t : i
          }
          get type() {
              return this._nativeOscillatorNode.type
          }
          set type(t) {
              this._nativeOscillatorNode.type = t,
              null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null)
          }
          setPeriodicWave(t) {
              this._nativeOscillatorNode.setPeriodicWave(t),
              null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = t)
          }
          start(t=0) {
              if (this._nativeOscillatorNode.start(t),
              null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = t),
              "closed" !== this.context.state) {
                  em(this);
                  let t = () => {
                      this._nativeOscillatorNode.removeEventListener("ended", t),
                      ek(this) && e_(this)
                  }
                  ;
                  this._nativeOscillatorNode.addEventListener("ended", t)
              }
          }
          stop(t=0) {
              this._nativeOscillatorNode.stop(t),
              null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = t)
          }
      }
      )
        , n3 = (t, e) => {
          let i = nD(t, {
              buffer: null,
              channelCount: 2,
              channelCountMode: "max",
              channelInterpretation: "speakers",
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1
          })
            , n = t.createBuffer(1, 2, 44100);
          return i.buffer = n,
          i.loop = !0,
          i.connect(e),
          i.start(),
          () => {
              i.stop(),
              i.disconnect(e)
          }
      }
        , n8 = (td = (t, {curve: e, oversample: i, ...n}) => {
          let s = t.createWaveShaper()
            , r = t.createWaveShaper();
          iD(s, n),
          iD(r, n);
          let a = iX(t, {
              ...n,
              gain: 1
          })
            , o = iX(t, {
              ...n,
              gain: -1
          })
            , l = iX(t, {
              ...n,
              gain: 1
          })
            , u = iX(t, {
              ...n,
              gain: -1
          })
            , c = null
            , h = !1
            , d = null
            , p = {
              get bufferSize() {
                  return
              },
              get channelCount() {
                  return s.channelCount
              },
              set channelCount(value) {
                  a.channelCount = value,
                  o.channelCount = value,
                  s.channelCount = value,
                  l.channelCount = value,
                  r.channelCount = value,
                  u.channelCount = value
              },
              get channelCountMode() {
                  return s.channelCountMode
              },
              set channelCountMode(value) {
                  a.channelCountMode = value,
                  o.channelCountMode = value,
                  s.channelCountMode = value,
                  l.channelCountMode = value,
                  r.channelCountMode = value,
                  u.channelCountMode = value
              },
              get channelInterpretation() {
                  return s.channelInterpretation
              },
              set channelInterpretation(value) {
                  a.channelInterpretation = value,
                  o.channelInterpretation = value,
                  s.channelInterpretation = value,
                  l.channelInterpretation = value,
                  r.channelInterpretation = value,
                  u.channelInterpretation = value
              },
              get context() {
                  return s.context
              },
              get curve() {
                  return d
              },
              set curve(value) {
                  if (null !== value && value.length < 2)
                      throw iw();
                  if (null === value)
                      s.curve = value,
                      r.curve = value;
                  else {
                      let t = value.length
                        , e = new Float32Array(t + 2 - t % 2)
                        , i = new Float32Array(t + 2 - t % 2);
                      e[0] = value[0],
                      i[0] = -value[t - 1];
                      let n = Math.ceil((t + 1) / 2)
                        , a = (t + 1) / 2 - 1;
                      for (let s = 1; s < n; s += 1) {
                          let r = s / n * a
                            , o = Math.floor(r)
                            , l = Math.ceil(r);
                          e[s] = o === l ? value[o] : (1 - (r - o)) * value[o] + (1 - (l - r)) * value[l],
                          i[s] = o === l ? -value[t - 1 - o] : -((1 - (r - o)) * value[t - 1 - o]) - (1 - (l - r)) * value[t - 1 - l]
                      }
                      e[n] = t % 2 == 1 ? value[n - 1] : (value[n - 2] + value[n - 1]) / 2,
                      s.curve = e,
                      r.curve = i
                  }
                  d = value,
                  h && (i4(d) && null === c ? c = n3(t, a) : null !== c && (c(),
                  c = null))
              },
              get inputs() {
                  return [a]
              },
              get numberOfInputs() {
                  return s.numberOfInputs
              },
              get numberOfOutputs() {
                  return s.numberOfOutputs
              },
              get oversample() {
                  return s.oversample
              },
              set oversample(value) {
                  s.oversample = value,
                  r.oversample = value
              },
              addEventListener: (...t) => a.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => a.dispatchEvent(t[0]),
              removeEventListener: (...t) => a.removeEventListener(t[0], t[1], t[2])
          };
          return null !== e && (p.curve = e instanceof Float32Array ? e : new Float32Array(e)),
          i !== p.oversample && (p.oversample = i),
          nF(iG(p, l), () => {
              a.connect(s).connect(l),
              a.connect(o).connect(r).connect(u).connect(l),
              h = !0,
              i4(d) && (c = n3(t, a))
          }
          , () => {
              a.disconnect(s),
              s.disconnect(l),
              a.disconnect(o),
              o.disconnect(r),
              r.disconnect(u),
              u.disconnect(l),
              h = !1,
              null !== c && (c(),
              c = null)
          }
          )
      }
      ,
      (t, e) => {
          let i = t.createWaveShaper();
          if (null !== nm && "webkitAudioContext" === nm.name && void 0 === t.createGain().gain.automationRate)
              return td(t, e);
          iD(i, e);
          let n = null === e.curve || e.curve instanceof Float32Array ? e.curve : new Float32Array(e.curve);
          if (null !== n && n.length < 2)
              throw iw();
          iE(i, {
              curve: n
          }, "curve"),
          iE(i, e, "oversample");
          let s = null
            , r = !1;
          return i6(i, "curve", t => () => t.call(i), e => n => (e.call(i, n),
          r && (i4(n) && null === s ? s = n3(t, i) : i4(n) || null === s || (s(),
          s = null)),
          n)),
          nF(i, () => {
              r = !0,
              i4(i.curve) && (s = n3(t, i))
          }
          , () => {
              r = !1,
              null !== s && (s(),
              s = null)
          }
          )
      }
      )
        , n5 = (tp = (t, {coneInnerAngle: e, coneOuterAngle: i, coneOuterGain: n, distanceModel: s, maxDistance: r, orientationX: a, orientationY: o, orientationZ: l, panningModel: u, positionX: c, positionY: h, positionZ: d, refDistance: p, rolloffFactor: f, ...m}) => {
          let g = t.createPanner();
          if (m.channelCount > 2 || "max" === m.channelCountMode)
              throw iQ();
          iD(g, m);
          let v = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete"
          }
            , y = nz(t, {
              ...v,
              channelInterpretation: "speakers",
              numberOfInputs: 6
          })
            , b = iX(t, {
              ...m,
              gain: 1
          })
            , x = iX(t, {
              ...v,
              gain: 1
          })
            , w = iX(t, {
              ...v,
              gain: 0
          })
            , T = iX(t, {
              ...v,
              gain: 0
          })
            , S = iX(t, {
              ...v,
              gain: 0
          })
            , k = iX(t, {
              ...v,
              gain: 0
          })
            , C = iX(t, {
              ...v,
              gain: 0
          })
            , A = i$(t, 256, 6, 1)
            , O = n8(t, {
              ...v,
              curve: new Float32Array([1, 1]),
              oversample: "none"
          })
            , M = [a, o, l]
            , E = [c, h, d]
            , D = new Float32Array(1);
          A.onaudioprocess = ({inputBuffer: t}) => {
              let e = [i5(t, D, 0), i5(t, D, 1), i5(t, D, 2)];
              e.some( (t, e) => t !== M[e]) && (g.setOrientation(...e),
              M = e);
              let i = [i5(t, D, 3), i5(t, D, 4), i5(t, D, 5)];
              i.some( (t, e) => t !== E[e]) && (g.setPosition(...i),
              E = i)
          }
          ,
          Object.defineProperty(w.gain, "defaultValue", {
              get: () => 0
          }),
          Object.defineProperty(T.gain, "defaultValue", {
              get: () => 0
          }),
          Object.defineProperty(S.gain, "defaultValue", {
              get: () => 0
          }),
          Object.defineProperty(k.gain, "defaultValue", {
              get: () => 0
          }),
          Object.defineProperty(C.gain, "defaultValue", {
              get: () => 0
          });
          let R = {
              get bufferSize() {
                  return
              },
              get channelCount() {
                  return g.channelCount
              },
              set channelCount(value) {
                  if (value > 2)
                      throw iQ();
                  b.channelCount = value,
                  g.channelCount = value
              },
              get channelCountMode() {
                  return g.channelCountMode
              },
              set channelCountMode(value) {
                  if ("max" === value)
                      throw iQ();
                  b.channelCountMode = value,
                  g.channelCountMode = value
              },
              get channelInterpretation() {
                  return g.channelInterpretation
              },
              set channelInterpretation(value) {
                  b.channelInterpretation = value,
                  g.channelInterpretation = value
              },
              get coneInnerAngle() {
                  return g.coneInnerAngle
              },
              set coneInnerAngle(value) {
                  g.coneInnerAngle = value
              },
              get coneOuterAngle() {
                  return g.coneOuterAngle
              },
              set coneOuterAngle(value) {
                  g.coneOuterAngle = value
              },
              get coneOuterGain() {
                  return g.coneOuterGain
              },
              set coneOuterGain(value) {
                  if (value < 0 || value > 1)
                      throw iw();
                  g.coneOuterGain = value
              },
              get context() {
                  return g.context
              },
              get distanceModel() {
                  return g.distanceModel
              },
              set distanceModel(value) {
                  g.distanceModel = value
              },
              get inputs() {
                  return [b]
              },
              get maxDistance() {
                  return g.maxDistance
              },
              set maxDistance(value) {
                  if (value < 0)
                      throw RangeError();
                  g.maxDistance = value
              },
              get numberOfInputs() {
                  return g.numberOfInputs
              },
              get numberOfOutputs() {
                  return g.numberOfOutputs
              },
              get orientationX() {
                  return x.gain
              },
              get orientationY() {
                  return w.gain
              },
              get orientationZ() {
                  return T.gain
              },
              get panningModel() {
                  return g.panningModel
              },
              set panningModel(value) {
                  g.panningModel = value
              },
              get positionX() {
                  return S.gain
              },
              get positionY() {
                  return k.gain
              },
              get positionZ() {
                  return C.gain
              },
              get refDistance() {
                  return g.refDistance
              },
              set refDistance(value) {
                  if (value < 0)
                      throw RangeError();
                  g.refDistance = value
              },
              get rolloffFactor() {
                  return g.rolloffFactor
              },
              set rolloffFactor(value) {
                  if (value < 0)
                      throw RangeError();
                  g.rolloffFactor = value
              },
              addEventListener: (...t) => b.addEventListener(t[0], t[1], t[2]),
              dispatchEvent: (...t) => b.dispatchEvent(t[0]),
              removeEventListener: (...t) => b.removeEventListener(t[0], t[1], t[2])
          };
          return e !== R.coneInnerAngle && (R.coneInnerAngle = e),
          i !== R.coneOuterAngle && (R.coneOuterAngle = i),
          n !== R.coneOuterGain && (R.coneOuterGain = n),
          s !== R.distanceModel && (R.distanceModel = s),
          r !== R.maxDistance && (R.maxDistance = r),
          a !== R.orientationX.value && (R.orientationX.value = a),
          o !== R.orientationY.value && (R.orientationY.value = o),
          l !== R.orientationZ.value && (R.orientationZ.value = l),
          u !== R.panningModel && (R.panningModel = u),
          c !== R.positionX.value && (R.positionX.value = c),
          h !== R.positionY.value && (R.positionY.value = h),
          d !== R.positionZ.value && (R.positionZ.value = d),
          p !== R.refDistance && (R.refDistance = p),
          f !== R.rolloffFactor && (R.rolloffFactor = f),
          (1 !== M[0] || 0 !== M[1] || 0 !== M[2]) && g.setOrientation(...M),
          (0 !== E[0] || 0 !== E[1] || 0 !== E[2]) && g.setPosition(...E),
          nF(iG(R, g), () => {
              b.connect(g),
              eU(b, O, 0, 0),
              O.connect(x).connect(y, 0, 0),
              O.connect(w).connect(y, 0, 1),
              O.connect(T).connect(y, 0, 2),
              O.connect(S).connect(y, 0, 3),
              O.connect(k).connect(y, 0, 4),
              O.connect(C).connect(y, 0, 5),
              y.connect(A).connect(t.destination)
          }
          , () => {
              b.disconnect(g),
              eZ(b, O, 0, 0),
              O.disconnect(x),
              x.disconnect(y),
              O.disconnect(w),
              w.disconnect(y),
              O.disconnect(T),
              T.disconnect(y),
              O.disconnect(S),
              S.disconnect(y),
              O.disconnect(k),
              k.disconnect(y),
              O.disconnect(C),
              C.disconnect(y),
              y.disconnect(A),
              A.disconnect(t.destination)
          }
          )
      }
      ,
      (t, e) => {
          let i = t.createPanner();
          return void 0 === i.orientationX ? tp(t, e) : (iD(i, e),
          iP(i, e, "orientationX"),
          iP(i, e, "orientationY"),
          iP(i, e, "orientationZ"),
          iP(i, e, "positionX"),
          iP(i, e, "positionY"),
          iP(i, e, "positionZ"),
          iE(i, e, "coneInnerAngle"),
          iE(i, e, "coneOuterAngle"),
          iE(i, e, "coneOuterGain"),
          iE(i, e, "distanceModel"),
          iE(i, e, "maxDistance"),
          iE(i, e, "panningModel"),
          iE(i, e, "refDistance"),
          iE(i, e, "rolloffFactor"),
          i)
      }
      )
        , n4 = (tf = nb,
      tm = () => {
          let t = new WeakMap
            , e = null
            , i = async (i, n) => {
              let s = null
                , r = e$(i)
                , a = {
                  channelCount: r.channelCount,
                  channelCountMode: r.channelCountMode,
                  channelInterpretation: r.channelInterpretation
              }
                , o = {
                  ...a,
                  coneInnerAngle: r.coneInnerAngle,
                  coneOuterAngle: r.coneOuterAngle,
                  coneOuterGain: r.coneOuterGain,
                  distanceModel: r.distanceModel,
                  maxDistance: r.maxDistance,
                  panningModel: r.panningModel,
                  refDistance: r.refDistance,
                  rolloffFactor: r.rolloffFactor
              }
                , l = eb(r, n);
              if ("bufferSize"in r ? s = iX(n, {
                  ...a,
                  gain: 1
              }) : l || (r = n5(n, {
                  ...o,
                  orientationX: r.orientationX.value,
                  orientationY: r.orientationY.value,
                  orientationZ: r.orientationZ.value,
                  positionX: r.positionX.value,
                  positionY: r.positionY.value,
                  positionZ: r.positionZ.value
              })),
              t.set(n, null === s ? r : s),
              null !== s) {
                  if (null === e) {
                      if (null === nh)
                          throw Error("Missing the native OfflineAudioContext constructor.");
                      let t = new nh(6,i.context.length,n.sampleRate)
                        , s = nz(t, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "speakers",
                          numberOfInputs: 6
                      });
                      s.connect(t.destination),
                      e = (async () => {
                          let e = await Promise.all([i.orientationX, i.orientationY, i.orientationZ, i.positionX, i.positionY, i.positionZ].map(async (e, i) => {
                              let n = nL(t, {
                                  channelCount: 1,
                                  channelCountMode: "explicit",
                                  channelInterpretation: "discrete",
                                  offset: 0 === i ? 1 : 0
                              });
                              return await nR(t, e, n.offset),
                              n
                          }
                          ));
                          for (let t = 0; t < 6; t += 1)
                              e[t].connect(s, 0, t),
                              e[t].start(0);
                          return n$(t)
                      }
                      )()
                  }
                  let t = await e
                    , r = iX(n, {
                      ...a,
                      gain: 1
                  });
                  await nu(i, n, r);
                  let l = [];
                  for (let e = 0; e < t.numberOfChannels; e += 1)
                      l.push(t.getChannelData(e));
                  let u = [l[0][0], l[1][0], l[2][0]]
                    , c = [l[3][0], l[4][0], l[5][0]]
                    , h = iX(n, {
                      ...a,
                      gain: 1
                  })
                    , d = n5(n, {
                      ...o,
                      orientationX: u[0],
                      orientationY: u[1],
                      orientationZ: u[2],
                      positionX: c[0],
                      positionY: c[1],
                      positionZ: c[2]
                  });
                  r.connect(h).connect(d.inputs[0]),
                  d.connect(s);
                  for (let e = 128; e < t.length; e += 128) {
                      let t = [l[0][e], l[1][e], l[2][e]]
                        , i = [l[3][e], l[4][e], l[5][e]];
                      if (t.some( (t, e) => t !== u[e]) || i.some( (t, e) => t !== c[e])) {
                          u = t,
                          c = i;
                          let l = e / n.sampleRate;
                          h.gain.setValueAtTime(0, l),
                          h = iX(n, {
                              ...a,
                              gain: 0
                          }),
                          d = n5(n, {
                              ...o,
                              orientationX: u[0],
                              orientationY: u[1],
                              orientationZ: u[2],
                              positionX: c[0],
                              positionY: c[1],
                              positionZ: c[2]
                          }),
                          h.gain.setValueAtTime(1, l),
                          r.connect(h).connect(d.inputs[0]),
                          d.connect(s)
                      }
                  }
                  return s
              }
              return l ? (await nE(n, i.orientationX, r.orientationX),
              await nE(n, i.orientationY, r.orientationY),
              await nE(n, i.orientationZ, r.orientationZ),
              await nE(n, i.positionX, r.positionX),
              await nE(n, i.positionY, r.positionY),
              await nE(n, i.positionZ, r.positionZ)) : (await nR(n, i.orientationX, r.orientationX),
              await nR(n, i.orientationY, r.orientationY),
              await nR(n, i.orientationZ, r.orientationZ),
              await nR(n, i.positionX, r.positionX),
              await nR(n, i.positionY, r.positionY),
              await nR(n, i.positionZ, r.positionZ)),
              eW(r) ? await nu(i, n, r.inputs[0]) : await nu(i, n, r),
              r
          }
          ;
          return {
              render(e, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : i(e, n)
              }
          }
      }
      ,
      class extends tf {
          constructor(t, e) {
              let i = nc(t)
                , n = n5(i, {
                  ...i0,
                  ...e
              })
                , s = nd(i);
              super(t, !1, n, s ? tm() : null),
              this._nativePannerNode = n,
              this._orientationX = nI(this, s, n.orientationX, 34028234663852886e22, -34028234663852886e22),
              this._orientationY = nI(this, s, n.orientationY, 34028234663852886e22, -34028234663852886e22),
              this._orientationZ = nI(this, s, n.orientationZ, 34028234663852886e22, -34028234663852886e22),
              this._positionX = nI(this, s, n.positionX, 34028234663852886e22, -34028234663852886e22),
              this._positionY = nI(this, s, n.positionY, 34028234663852886e22, -34028234663852886e22),
              this._positionZ = nI(this, s, n.positionZ, 34028234663852886e22, -34028234663852886e22),
              nj(this, 1)
          }
          get coneInnerAngle() {
              return this._nativePannerNode.coneInnerAngle
          }
          set coneInnerAngle(t) {
              this._nativePannerNode.coneInnerAngle = t
          }
          get coneOuterAngle() {
              return this._nativePannerNode.coneOuterAngle
          }
          set coneOuterAngle(t) {
              this._nativePannerNode.coneOuterAngle = t
          }
          get coneOuterGain() {
              return this._nativePannerNode.coneOuterGain
          }
          set coneOuterGain(t) {
              this._nativePannerNode.coneOuterGain = t
          }
          get distanceModel() {
              return this._nativePannerNode.distanceModel
          }
          set distanceModel(t) {
              this._nativePannerNode.distanceModel = t
          }
          get maxDistance() {
              return this._nativePannerNode.maxDistance
          }
          set maxDistance(t) {
              this._nativePannerNode.maxDistance = t
          }
          get orientationX() {
              return this._orientationX
          }
          get orientationY() {
              return this._orientationY
          }
          get orientationZ() {
              return this._orientationZ
          }
          get panningModel() {
              return this._nativePannerNode.panningModel
          }
          set panningModel(t) {
              this._nativePannerNode.panningModel = t
          }
          get positionX() {
              return this._positionX
          }
          get positionY() {
              return this._positionY
          }
          get positionZ() {
              return this._positionZ
          }
          get refDistance() {
              return this._nativePannerNode.refDistance
          }
          set refDistance(t) {
              this._nativePannerNode.refDistance = t
          }
          get rolloffFactor() {
              return this._nativePannerNode.rolloffFactor
          }
          set rolloffFactor(t) {
              this._nativePannerNode.rolloffFactor = t
          }
      }
      )
        , n6 = (tg = (t, {disableNormalization: e, imag: i, real: n}) => {
          let s = i instanceof Float32Array ? i : new Float32Array(i)
            , r = n instanceof Float32Array ? n : new Float32Array(n)
            , a = t.createPeriodicWave(r, s, {
              disableNormalization: e
          });
          if (Array.from(i).length < 2)
              throw ew();
          return a
      }
      ,
      t_ = new WeakSet,
      tv = t => {
          let {imag: e, real: i} = t;
          return void 0 === e ? void 0 === i ? {
              ...t,
              imag: [0, 0],
              real: [0, 0]
          } : {
              ...t,
              imag: Array.from(i, () => 0),
              real: i
          } : void 0 === i ? {
              ...t,
              imag: e,
              real: Array.from(e, () => 0)
          } : {
              ...t,
              imag: e,
              real: i
          }
      }
      ,
      class t {
          constructor(t, e) {
              let i = tg(nc(t), tv({
                  ...i1,
                  ...e
              }));
              return t_.add(i),
              i
          }
          static[Symbol.hasInstance](e) {
              return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === t.prototype || t_.has(e)
          }
      }
      )
        , n9 = (ty = ( (t, e, i, n, s, r) => {
          let a = new Float32Array([1, 1])
            , o = Math.PI / 2
            , l = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete"
          }
            , u = {
              ...l,
              oversample: "none"
          }
            , c = (t, e, s, r) => {
              let c = new Float32Array(16385)
                , h = new Float32Array(16385);
              for (let t = 0; t < 16385; t += 1) {
                  let e = t / 16384 * o;
                  c[t] = Math.cos(e),
                  h[t] = Math.sin(e)
              }
              let d = i(t, {
                  ...l,
                  gain: 0
              })
                , p = n(t, {
                  ...u,
                  curve: c
              })
                , f = n(t, {
                  ...u,
                  curve: a
              })
                , m = i(t, {
                  ...l,
                  gain: 0
              })
                , g = n(t, {
                  ...u,
                  curve: h
              });
              return {
                  connectGraph() {
                      e.connect(d),
                      e.connect(void 0 === f.inputs ? f : f.inputs[0]),
                      e.connect(m),
                      f.connect(s),
                      s.connect(void 0 === p.inputs ? p : p.inputs[0]),
                      s.connect(void 0 === g.inputs ? g : g.inputs[0]),
                      p.connect(d.gain),
                      g.connect(m.gain),
                      d.connect(r, 0, 0),
                      m.connect(r, 0, 1)
                  },
                  disconnectGraph() {
                      e.disconnect(d),
                      e.disconnect(void 0 === f.inputs ? f : f.inputs[0]),
                      e.disconnect(m),
                      f.disconnect(s),
                      s.disconnect(void 0 === p.inputs ? p : p.inputs[0]),
                      s.disconnect(void 0 === g.inputs ? g : g.inputs[0]),
                      p.disconnect(d.gain),
                      g.disconnect(m.gain),
                      d.disconnect(r, 0, 0),
                      m.disconnect(r, 0, 1)
                  }
              }
          }
            , h = (t, s, r, c) => {
              let h = new Float32Array(16385)
                , d = new Float32Array(16385)
                , p = new Float32Array(16385)
                , f = new Float32Array(16385)
                , m = Math.floor(8192.5);
              for (let t = 0; t < 16385; t += 1)
                  if (t > m) {
                      let e = (t - m) / (16384 - m) * o;
                      h[t] = Math.cos(e),
                      d[t] = Math.sin(e),
                      p[t] = 0,
                      f[t] = 1
                  } else {
                      let e = t / (16384 - m) * o;
                      h[t] = 1,
                      d[t] = 0,
                      p[t] = Math.cos(e),
                      f[t] = Math.sin(e)
                  }
              let g = e(t, {
                  channelCount: 2,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: 2
              })
                , v = i(t, {
                  ...l,
                  gain: 0
              })
                , y = n(t, {
                  ...u,
                  curve: h
              })
                , b = i(t, {
                  ...l,
                  gain: 0
              })
                , x = n(t, {
                  ...u,
                  curve: d
              })
                , w = n(t, {
                  ...u,
                  curve: a
              })
                , T = i(t, {
                  ...l,
                  gain: 0
              })
                , S = n(t, {
                  ...u,
                  curve: p
              })
                , k = i(t, {
                  ...l,
                  gain: 0
              })
                , C = n(t, {
                  ...u,
                  curve: f
              });
              return {
                  connectGraph() {
                      s.connect(g),
                      s.connect(void 0 === w.inputs ? w : w.inputs[0]),
                      g.connect(v, 0),
                      g.connect(b, 0),
                      g.connect(T, 1),
                      g.connect(k, 1),
                      w.connect(r),
                      r.connect(void 0 === y.inputs ? y : y.inputs[0]),
                      r.connect(void 0 === x.inputs ? x : x.inputs[0]),
                      r.connect(void 0 === S.inputs ? S : S.inputs[0]),
                      r.connect(void 0 === C.inputs ? C : C.inputs[0]),
                      y.connect(v.gain),
                      x.connect(b.gain),
                      S.connect(T.gain),
                      C.connect(k.gain),
                      v.connect(c, 0, 0),
                      T.connect(c, 0, 0),
                      b.connect(c, 0, 1),
                      k.connect(c, 0, 1)
                  },
                  disconnectGraph() {
                      s.disconnect(g),
                      s.disconnect(void 0 === w.inputs ? w : w.inputs[0]),
                      g.disconnect(v, 0),
                      g.disconnect(b, 0),
                      g.disconnect(T, 1),
                      g.disconnect(k, 1),
                      w.disconnect(r),
                      r.disconnect(void 0 === y.inputs ? y : y.inputs[0]),
                      r.disconnect(void 0 === x.inputs ? x : x.inputs[0]),
                      r.disconnect(void 0 === S.inputs ? S : S.inputs[0]),
                      r.disconnect(void 0 === C.inputs ? C : C.inputs[0]),
                      y.disconnect(v.gain),
                      x.disconnect(b.gain),
                      S.disconnect(T.gain),
                      C.disconnect(k.gain),
                      v.disconnect(c, 0, 0),
                      T.disconnect(c, 0, 0),
                      b.disconnect(c, 0, 1),
                      k.disconnect(c, 0, 1)
                  }
              }
          }
            , d = (t, e, i, n, r) => {
              if (1 === e)
                  return c(t, i, n, r);
              if (2 === e)
                  return h(t, i, n, r);
              throw s()
          }
          ;
          return (e, {channelCount: n, channelCountMode: a, pan: o, ...l}) => {
              if ("max" === a)
                  throw s();
              let u = t(e, {
                  ...l,
                  channelCount: 1,
                  channelCountMode: a,
                  numberOfInputs: 2
              })
                , c = i(e, {
                  ...l,
                  channelCount: n,
                  channelCountMode: a,
                  gain: 1
              })
                , h = i(e, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  gain: o
              })
                , {connectGraph: p, disconnectGraph: f} = d(e, n, c, h, u);
              Object.defineProperty(h.gain, "defaultValue", {
                  get: () => 0
              }),
              Object.defineProperty(h.gain, "maxValue", {
                  get: () => 1
              }),
              Object.defineProperty(h.gain, "minValue", {
                  get: () => -1
              });
              let m = !1;
              return r(iG({
                  get bufferSize() {
                      return
                  },
                  get channelCount() {
                      return c.channelCount
                  },
                  set channelCount(value) {
                      c.channelCount !== value && (m && f(),
                      {connectGraph: p, disconnectGraph: f} = d(e, value, c, h, u),
                      m && p()),
                      c.channelCount = value
                  },
                  get channelCountMode() {
                      return c.channelCountMode
                  },
                  set channelCountMode(value) {
                      if ("clamped-max" === value || "max" === value)
                          throw s();
                      c.channelCountMode = value
                  },
                  get channelInterpretation() {
                      return c.channelInterpretation
                  },
                  set channelInterpretation(value) {
                      c.channelInterpretation = value
                  },
                  get context() {
                      return c.context
                  },
                  get inputs() {
                      return [c]
                  },
                  get numberOfInputs() {
                      return c.numberOfInputs
                  },
                  get numberOfOutputs() {
                      return c.numberOfOutputs
                  },
                  get pan() {
                      return h.gain
                  },
                  addEventListener: (...t) => c.addEventListener(t[0], t[1], t[2]),
                  dispatchEvent: (...t) => c.dispatchEvent(t[0]),
                  removeEventListener: (...t) => c.removeEventListener(t[0], t[1], t[2])
              }, u), () => {
                  p(),
                  m = !0
              }
              , () => {
                  f(),
                  m = !1
              }
              )
          }
      }
      )(nz, iY, iX, n8, iQ, nF),
      (t, e) => {
          let i = e.channelCountMode;
          if ("clamped-max" === i)
              throw iQ();
          if (void 0 === t.createStereoPanner)
              return ty(t, e);
          let n = t.createStereoPanner();
          return iD(n, e),
          iP(n, e, "pan"),
          Object.defineProperty(n, "channelCountMode", {
              get: () => i,
              set: t => {
                  if (t !== i)
                      throw iQ()
              }
          }),
          n
      }
      )
        , n7 = (tb = nb,
      tx = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e)
                , s = eb(n, i);
              return s || (n = n9(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  pan: n.pan.value
              })),
              t.set(i, n),
              s ? await nE(i, e.pan, n.pan) : await nR(i, e.pan, n.pan),
              eW(n) ? await nu(e, i, n.inputs[0]) : await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends tb {
          constructor(t, e) {
              let i = nc(t)
                , n = n9(i, {
                  ...i2,
                  ...e
              })
                , s = nd(i);
              super(t, !1, n, s ? tx() : null),
              this._pan = nI(this, s, n.pan)
          }
          get pan() {
              return this._pan
          }
      }
      )
        , st = (tw = nb,
      tT = () => {
          let t = new WeakMap
            , e = async (e, i) => {
              let n = e$(e);
              return eb(n, i) || (n = n8(i, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  curve: n.curve,
                  oversample: n.oversample
              })),
              t.set(i, n),
              eW(n) ? await nu(e, i, n.inputs[0]) : await nu(e, i, n),
              n
          }
          ;
          return {
              render(i, n) {
                  let s = t.get(n);
                  return void 0 !== s ? Promise.resolve(s) : e(i, n)
              }
          }
      }
      ,
      class extends tw {
          constructor(t, e) {
              let i = nc(t)
                , n = n8(i, {
                  ...i8,
                  ...e
              });
              super(t, !0, n, nd(i) ? tT() : null),
              this._isCurveNullified = !1,
              this._nativeWaveShaperNode = n,
              nj(this, 1)
          }
          get curve() {
              return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve
          }
          set curve(t) {
              if (null === t)
                  this._isCurveNullified = !0,
                  this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
              else {
                  if (t.length < 2)
                      throw iw();
                  this._isCurveNullified = !1,
                  this._nativeWaveShaperNode.curve = t
              }
          }
          get oversample() {
              return this._nativeWaveShaperNode.oversample
          }
          set oversample(t) {
              this._nativeWaveShaperNode.oversample = t
          }
      }
      )
        , se = null !== na && na.isSecureContext
        , si = (t, e, i) => {
          Object.defineProperties(na, {
              currentFrame: {
                  configurable: !0,
                  get: () => Math.round(t * e)
              },
              currentTime: {
                  configurable: !0,
                  get: () => t
              }
          });
          try {
              return i()
          } finally {
              null !== na && (delete na.currentFrame,
              delete na.currentTime)
          }
      }
        , sn = new WeakMap
        , ss = se ? (tk = t => new Promise( (e, i) => {
          if (null === na) {
              i(SyntaxError());
              return
          }
          let n = na.document.head;
          if (null === n)
              i(SyntaxError());
          else {
              let s = na.document.createElement("script")
                , r = new Blob([t],{
                  type: "application/javascript"
              })
                , a = URL.createObjectURL(r)
                , o = na.onerror
                , l = () => {
                  na.onerror = o,
                  URL.revokeObjectURL(a)
              }
              ;
              na.onerror = (t, e, n, s, r) => e === a || e === na.location.href && 1 === n && 1 === s ? (l(),
              i(r),
              !1) : null !== o ? o(t, e, n, s, r) : void 0,
              s.onerror = () => {
                  l(),
                  i(SyntaxError())
              }
              ,
              s.onload = () => {
                  l(),
                  e()
              }
              ,
              s.src = a,
              s.type = "module",
              n.appendChild(s)
          }
      }
      ),
      tS = () => new DOMException("","AbortError"),
      tC = async t => {
          try {
              let e = await fetch(t);
              if (e.ok)
                  return [await e.text(), e.url]
          } catch {}
          throw tS()
      }
      ,
      tA = t => {
          let e = sn.get(t);
          if (void 0 !== e)
              return e;
          if (null === nh)
              throw Error("Missing the native OfflineAudioContext constructor.");
          return e = new nh(1,1,44100),
          sn.set(t, e),
          e
      }
      ,
      tO = new WeakMap,
      tM = new WeakMap,
      tE = async () => {
          if (null === ny)
              return !0;
          if (null === nh)
              return !1;
          let t = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{
              type: "application/javascript; charset=utf-8"
          })
            , e = new nh(1,128,44100)
            , i = URL.createObjectURL(t)
            , n = !1
            , s = !1;
          try {
              await e.audioWorklet.addModule(i);
              let t = new ny(e,"a",{
                  numberOfOutputs: 0
              })
                , r = e.createOscillator();
              t.port.onmessage = () => n = !0,
              t.onprocessorerror = () => s = !0,
              r.connect(t),
              r.start(0),
              await e.startRendering(),
              await new Promise(t => setTimeout(t))
          } catch {} finally {
              URL.revokeObjectURL(i)
          }
          return n && !s
      }
      ,
      s = 0,
      (t, e, i={
          credentials: "omit"
      }) => {
          let n = tM.get(t);
          if (void 0 !== n && n.has(e))
              return Promise.resolve();
          let r = tO.get(t);
          if (void 0 !== r) {
              let t = r.get(e);
              if (void 0 !== t)
                  return t
          }
          let a = nc(t)
            , o = void 0 === a.audioWorklet ? tC(e).then( ([t,e]) => {
              let[i,n] = el(t, e);
              return tk(`${i};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${n}
})})(window,'_AWGS')`)
          }
          ).then( () => {
              let t = na._AWGS.pop();
              if (void 0 === t)
                  throw SyntaxError();
              si(a.currentTime, a.sampleRate, () => t(class {
              }
              , void 0, (t, e) => {
                  if ("" === t.trim())
                      throw iQ();
                  let i = en.get(a);
                  if (void 0 !== i) {
                      if (i.has(t))
                          throw iQ();
                      ec(e),
                      eu(e.parameterDescriptors),
                      i.set(t, e)
                  } else
                      ec(e),
                      eu(e.parameterDescriptors),
                      en.set(a, new Map([[t, e]]))
              }
              , a.sampleRate, void 0, void 0))
          }
          ) : Promise.all([tC(e), Promise.resolve(nr(tE, tE))]).then( ([[t,e],n]) => {
              let r = s + 1;
              s = r;
              let[o,l] = el(t, e)
                , u = `${o};((AudioWorkletProcessor,registerProcessor)=>{${l}
})(${n ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${n ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${n ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${r}',class extends AudioWorkletProcessor{process(){return !1}})`
                , c = new Blob([u],{
                  type: "application/javascript; charset=utf-8"
              })
                , h = URL.createObjectURL(c);
              return a.audioWorklet.addModule(h, i).then( () => {
                  if (nd(a))
                      return a;
                  let t = tA(a);
                  return t.audioWorklet.addModule(h, i).then( () => t)
              }
              ).then(t => {
                  if (null === ny)
                      throw SyntaxError();
                  try {
                      new ny(t,`__sac${r}`)
                  } catch {
                      throw SyntaxError()
                  }
              }
              ).finally( () => URL.revokeObjectURL(h))
          }
          );
          return void 0 === r ? tO.set(t, new Map([[e, o]])) : r.set(e, o),
          o.then( () => {
              let i = tM.get(t);
              void 0 === i ? tM.set(t, new Set([e])) : i.add(e)
          }
          ).finally( () => {
              let i = tO.get(t);
              void 0 !== i && i.delete(e)
          }
          ),
          o
      }
      ) : void 0
        , sr = (tD = () => new DOMException("","DataCloneError"),
      tR = () => new DOMException("","EncodingError"),
      tI = new WeakSet,
      tP = t => ng(t) || nd(t),
      (t, e) => {
          let i = tP(t) ? t : nc(t);
          if (tI.has(e))
              return Promise.reject(tD());
          try {
              tI.add(e)
          } catch {}
          return nr(iM, () => iM(i)) ? i.decodeAudioData(e).then(t => (ig(e).catch( () => {}
          ),
          nr(ex, () => ex(t)) || nC(t),
          nw.add(t),
          t)) : new Promise( (t, n) => {
              let s = async () => {
                  try {
                      await ig(e)
                  } catch {}
              }
                , r = t => {
                  n(t),
                  s()
              }
              ;
              try {
                  i.decodeAudioData(e, e => {
                      "function" != typeof e.copyFromChannel && (nk(e),
                      eT(e)),
                      nw.add(e),
                      s().then( () => t(e))
                  }
                  , t => {
                      null === t ? r(tR()) : r(t)
                  }
                  )
              } catch (t) {
                  r(t)
              }
          }
          )
      }
      )
        , sa = (tV = n0,
      class extends tV {
          constructor(t, e) {
              super(t, e),
              this._nativeContext = t,
              this._audioWorklet = void 0 === ss ? void 0 : {
                  addModule: (t, e) => ss(this, t, e)
              }
          }
          get audioWorklet() {
              return this._audioWorklet
          }
          createAnalyser() {
              return new nx(this)
          }
          createBiquadFilter() {
              return new nN(this)
          }
          createBuffer(t, e, i) {
              return new nA({
                  length: e,
                  numberOfChannels: t,
                  sampleRate: i
              })
          }
          createBufferSource() {
              return new nP(this)
          }
          createChannelMerger(t=6) {
              return new nq(this,{
                  numberOfInputs: t
              })
          }
          createChannelSplitter(t=6) {
              return new nB(this,{
                  numberOfOutputs: t
              })
          }
          createConstantSource() {
              return new nW(this)
          }
          createConvolver() {
              return new nY(this)
          }
          createDelay(t=1) {
              return new nG(this,{
                  maxDelayTime: t
              })
          }
          createDynamicsCompressor() {
              return new nX(this)
          }
          createGain() {
              return new nZ(this)
          }
          createIIRFilter(t, e) {
              return new nJ(this,{
                  feedback: e,
                  feedforward: t
              })
          }
          createOscillator() {
              return new n2(this)
          }
          createPanner() {
              return new n4(this)
          }
          createPeriodicWave(t, e, i={
              disableNormalization: !1
          }) {
              return new n6(this,{
                  ...i,
                  imag: e,
                  real: t
              })
          }
          createStereoPanner() {
              return new n7(this)
          }
          createWaveShaper() {
              return new st(this)
          }
          decodeAudioData(t, e, i) {
              return sr(this._nativeContext, t).then(t => ("function" == typeof e && e(t),
              t), t => {
                  throw "function" == typeof i && i(t),
                  t
              }
              )
          }
      }
      )
        , so = (tj = nb,
      tN = (t, e) => t.createMediaElementSource(e.mediaElement),
      class extends tj {
          constructor(t, e) {
              let i = nc(t)
                , n = tN(i, e);
              if (nd(i))
                  throw TypeError();
              super(t, !0, n, null),
              this._nativeMediaElementAudioSourceNode = n
          }
          get mediaElement() {
              return this._nativeMediaElementAudioSourceNode.mediaElement
          }
      }
      )
        , sl = (tF = nb,
      tz = (t, e) => {
          let i = t.createMediaStreamDestination();
          return iD(i, e),
          1 === i.numberOfOutputs && Object.defineProperty(i, "numberOfOutputs", {
              get: () => 0
          }),
          i
      }
      ,
      class extends tF {
          constructor(t, e) {
              let i = nc(t);
              if (nd(i))
                  throw TypeError();
              let n = tz(i, {
                  ...iO,
                  ...e
              });
              super(t, !1, n, null),
              this._nativeMediaStreamAudioDestinationNode = n
          }
          get stream() {
              return this._nativeMediaStreamAudioDestinationNode.stream
          }
      }
      )
        , su = (tq = nb,
      tB = (t, {mediaStream: e}) => {
          let i = e.getAudioTracks();
          i.sort( (t, e) => t.id < e.id ? -1 : t.id > e.id ? 1 : 0);
          let n = i.slice(0, 1)
            , s = t.createMediaStreamSource(new MediaStream(n));
          return Object.defineProperty(s, "mediaStream", {
              value: e
          }),
          s
      }
      ,
      class extends tq {
          constructor(t, e) {
              let i = nc(t)
                , n = tB(i, e);
              if (nd(i))
                  throw TypeError();
              super(t, !0, n, null),
              this._nativeMediaStreamAudioSourceNode = n
          }
          get mediaStream() {
              return this._nativeMediaStreamAudioSourceNode.mediaStream
          }
      }
      )
        , sc = (tL = nb,
      tW = (t, {mediaStreamTrack: e}) => {
          if ("function" == typeof t.createMediaStreamTrackSource)
              return t.createMediaStreamTrackSource(e);
          let i = new MediaStream([e])
            , n = t.createMediaStreamSource(i);
          if ("audio" !== e.kind)
              throw iw();
          if (nd(t))
              throw TypeError();
          return n
      }
      ,
      class extends tL {
          constructor(t, e) {
              super(t, !0, tW(nc(t), e), null)
          }
      }
      )
        , sh = (tU = sa,
      class extends tU {
          constructor(t={}) {
              let e;
              if (null === nm)
                  throw Error("Missing the native AudioContext constructor.");
              try {
                  e = new nm(t)
              } catch (t) {
                  if (12 === t.code && "sampleRate is not in range" === t.message)
                      throw iQ();
                  throw t
              }
              if (null === e)
                  throw i3();
              if (!eN(t.latencyHint))
                  throw TypeError(`The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
              if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate)
                  throw iQ();
              super(e, 2);
              let {latencyHint: i} = t
                , {sampleRate: n} = e;
              if (this._baseLatency = "number" == typeof e.baseLatency ? e.baseLatency : "balanced" === i ? 512 / n : "interactive" === i || void 0 === i ? 256 / n : "playback" === i ? 1024 / n : 128 * Math.max(2, Math.min(128, Math.round(i * n / 128))) / n,
              this._nativeAudioContext = e,
              "webkitAudioContext" === nm.name ? (this._nativeGainNode = e.createGain(),
              this._nativeOscillatorNode = e.createOscillator(),
              this._nativeGainNode.gain.value = 1e-37,
              this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e.destination),
              this._nativeOscillatorNode.start()) : (this._nativeGainNode = null,
              this._nativeOscillatorNode = null),
              this._state = null,
              "running" === e.state) {
                  this._state = "suspended";
                  let t = () => {
                      "suspended" === this._state && (this._state = null),
                      e.removeEventListener("statechange", t)
                  }
                  ;
                  e.addEventListener("statechange", t)
              }
          }
          get baseLatency() {
              return this._baseLatency
          }
          get state() {
              return null !== this._state ? this._state : this._nativeAudioContext.state
          }
          close() {
              return "closed" === this.state ? this._nativeAudioContext.close().then( () => {
                  throw iw()
              }
              ) : ("suspended" === this._state && (this._state = null),
              this._nativeAudioContext.close().then( () => {
                  null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(),
                  this._nativeGainNode.disconnect(),
                  this._nativeOscillatorNode.disconnect()),
                  ej(this)
              }
              ))
          }
          createMediaElementSource(t) {
              return new so(this,{
                  mediaElement: t
              })
          }
          createMediaStreamDestination() {
              return new sl(this)
          }
          createMediaStreamSource(t) {
              return new su(this,{
                  mediaStream: t
              })
          }
          createMediaStreamTrackSource(t) {
              return new sc(this,{
                  mediaStreamTrack: t
              })
          }
          resume() {
              return "suspended" === this._state ? new Promise( (t, e) => {
                  let i = () => {
                      this._nativeAudioContext.removeEventListener("statechange", i),
                      "running" === this._nativeAudioContext.state ? t() : this.resume().then(t, e)
                  }
                  ;
                  this._nativeAudioContext.addEventListener("statechange", i)
              }
              ) : this._nativeAudioContext.resume().catch(t => {
                  if (void 0 === t || 15 === t.code)
                      throw iw();
                  throw t
              }
              )
          }
          suspend() {
              return this._nativeAudioContext.suspend().catch(t => {
                  if (void 0 === t)
                      throw iw();
                  throw t
              }
              )
          }
      }
      )
        , sd = t => {
          let e = nK.get(t);
          if (void 0 === e)
              throw Error("The context has no set of AudioWorkletNodes.");
          return e
      }
        , sp = (t, e, i=0, n=0) => {
          let s = t[i];
          if (void 0 === s)
              throw ew();
          return e2(e) ? s.connect(e, 0, n) : s.connect(e, 0)
      }
        , sf = (t, e, i, n=0) => void 0 === e ? t.forEach(t => t.disconnect()) : "number" == typeof e ? iy(ew, t, e).disconnect() : e2(e) ? void 0 === i ? t.forEach(t => t.disconnect(e)) : void 0 === n ? iy(ew, t, i).disconnect(e, 0) : iy(ew, t, i).disconnect(e, 0, n) : void 0 === i ? t.forEach(t => t.disconnect(e)) : iy(ew, t, i).disconnect(e, 0)
        , sm = new WeakMap
        , sg = (tY = t => eh(sm, t),
      (t, e, i, n) => {
          var s, r;
          if (0 === n.numberOfInputs && 0 === n.numberOfOutputs)
              throw iQ();
          let a = Array.isArray(n.outputChannelCount) ? n.outputChannelCount : Array.from(n.outputChannelCount);
          if (a.some(t => t < 1))
              throw iQ();
          if (a.length !== n.numberOfOutputs)
              throw ew();
          if ("explicit" !== n.channelCountMode)
              throw iQ();
          let o = n.channelCount * n.numberOfInputs
            , l = a.reduce( (t, e) => t + e, 0)
            , u = void 0 === i.parameterDescriptors ? 0 : i.parameterDescriptors.length;
          if (o + u > 6 || l > 6)
              throw iQ();
          let c = new MessageChannel
            , h = []
            , d = [];
          for (let e = 0; e < n.numberOfInputs; e += 1)
              h.push(iX(t, {
                  channelCount: n.channelCount,
                  channelCountMode: n.channelCountMode,
                  channelInterpretation: n.channelInterpretation,
                  gain: 1
              })),
              d.push(iY(t, {
                  channelCount: n.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: n.channelCount
              }));
          let p = [];
          if (void 0 !== i.parameterDescriptors)
              for (let {defaultValue: e, maxValue: s, minValue: r, name: a} of i.parameterDescriptors) {
                  let i = nL(t, {
                      channelCount: 1,
                      channelCountMode: "explicit",
                      channelInterpretation: "discrete",
                      offset: void 0 !== n.parameterData[a] ? n.parameterData[a] : void 0 === e ? 0 : e
                  });
                  Object.defineProperties(i.offset, {
                      defaultValue: {
                          get: () => void 0 === e ? 0 : e
                      },
                      maxValue: {
                          get: () => void 0 === s ? 34028234663852886e22 : s
                      },
                      minValue: {
                          get: () => void 0 === r ? -34028234663852886e22 : r
                      }
                  }),
                  p.push(i)
              }
          let f = nz(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: Math.max(1, o + u)
          })
            , m = iz(e, t.sampleRate)
            , g = i$(t, m, o + u, Math.max(1, l))
            , v = iY(t, {
              channelCount: Math.max(1, l),
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              numberOfOutputs: Math.max(1, l)
          })
            , y = [];
          for (let e = 0; e < n.numberOfOutputs; e += 1)
              y.push(nz(t, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "speakers",
                  numberOfInputs: a[e]
              }));
          for (let t = 0; t < n.numberOfInputs; t += 1) {
              h[t].connect(d[t]);
              for (let e = 0; e < n.channelCount; e += 1)
                  d[t].connect(f, e, t * n.channelCount + e)
          }
          let b = new ii(void 0 === i.parameterDescriptors ? [] : i.parameterDescriptors.map( ({name: t}, e) => {
              let i = p[e];
              return i.connect(f, 0, o + e),
              i.start(0),
              [t, i.offset]
          }
          ));
          f.connect(g);
          let x = n.channelInterpretation
            , w = null
            , T = 0 === n.numberOfOutputs ? [g] : y
            , S = {
              get bufferSize() {
                  return m
              },
              get channelCount() {
                  return n.channelCount
              },
              set channelCount(_) {
                  throw iw()
              },
              get channelCountMode() {
                  return n.channelCountMode
              },
              set channelCountMode(_) {
                  throw iw()
              },
              get channelInterpretation() {
                  return x
              },
              set channelInterpretation(value) {
                  for (let t of h)
                      t.channelInterpretation = value;
                  x = value
              },
              get context() {
                  return g.context
              },
              get inputs() {
                  return h
              },
              get numberOfInputs() {
                  return n.numberOfInputs
              },
              get numberOfOutputs() {
                  return n.numberOfOutputs
              },
              get onprocessorerror() {
                  return w
              },
              set onprocessorerror(value) {
                  "function" == typeof w && S.removeEventListener("processorerror", w),
                  "function" == typeof (w = "function" == typeof value ? value : null) && S.addEventListener("processorerror", w)
              },
              get parameters() {
                  return b
              },
              get port() {
                  return c.port2
              },
              addEventListener: (...t) => g.addEventListener(t[0], t[1], t[2]),
              connect: sp.bind(null, T),
              disconnect: sf.bind(null, T),
              dispatchEvent: (...t) => g.dispatchEvent(t[0]),
              removeEventListener: (...t) => g.removeEventListener(t[0], t[1], t[2])
          }
            , k = new Map;
          c.port1.addEventListener = (s = c.port1.addEventListener,
          (...e) => {
              if ("message" === e[0]) {
                  let i = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null;
                  if (null !== i) {
                      let n = k.get(e[1]);
                      void 0 !== n ? e[1] = n : (e[1] = e => {
                          si(t.currentTime, t.sampleRate, () => i(e))
                      }
                      ,
                      k.set(i, e[1]))
                  }
              }
              return s.call(c.port1, e[0], e[1], e[2])
          }
          ),
          c.port1.removeEventListener = (r = c.port1.removeEventListener,
          (...t) => {
              if ("message" === t[0]) {
                  let e = k.get(t[1]);
                  void 0 !== e && (k.delete(t[1]),
                  t[1] = e)
              }
              return r.call(c.port1, t[0], t[1], t[2])
          }
          );
          let C = null;
          Object.defineProperty(c.port1, "onmessage", {
              get: () => C,
              set: t => {
                  "function" == typeof C && c.port1.removeEventListener("message", C),
                  "function" == typeof (C = "function" == typeof t ? t : null) && (c.port1.addEventListener("message", C),
                  c.port1.start())
              }
          }),
          i.prototype.port = c.port1;
          let A = null;
          iL(t, S, i, n).then(t => A = t);
          let O = io(n.numberOfInputs, n.channelCount)
            , M = io(n.numberOfOutputs, a)
            , E = void 0 === i.parameterDescriptors ? [] : i.parameterDescriptors.reduce( (t, {name: e}) => ({
              ...t,
              [e]: new Float32Array(128)
          }), {})
            , D = !0
            , R = () => {
              n.numberOfOutputs > 0 && g.disconnect(v);
              for (let t = 0, e = 0; t < n.numberOfOutputs; t += 1) {
                  let i = y[t];
                  for (let n = 0; n < a[t]; n += 1)
                      v.disconnect(i, e + n, n);
                  e += a[t]
              }
          }
            , I = new Map;
          g.onaudioprocess = ({inputBuffer: e, outputBuffer: s}) => {
              if (null !== A) {
                  let r = tY(S);
                  for (let l = 0; l < m; l += 128) {
                      for (let t = 0; t < n.numberOfInputs; t += 1)
                          for (let i = 0; i < n.channelCount; i += 1)
                              ir(e, O[t], i, i, l);
                      void 0 !== i.parameterDescriptors && i.parameterDescriptors.forEach( ({name: t}, i) => {
                          ir(e, E, t, o + i, l)
                      }
                      );
                      for (let t = 0; t < n.numberOfInputs; t += 1)
                          for (let e = 0; e < a[t]; e += 1)
                              0 === M[t][e].byteLength && (M[t][e] = new Float32Array(128));
                      try {
                          let e = O.map( (t, e) => {
                              if (r[e].size > 0)
                                  return I.set(e, m / 128),
                                  t;
                              let i = I.get(e);
                              return void 0 === i ? [] : (t.every(t => t.every(t => 0 === t)) && (1 === i ? I.delete(e) : I.set(e, i - 1)),
                              t)
                          }
                          );
                          D = si(t.currentTime + l / t.sampleRate, t.sampleRate, () => A.process(e, M, E));
                          for (let t = 0, e = 0; t < n.numberOfOutputs; t += 1) {
                              for (let i = 0; i < a[t]; i += 1)
                                  ia(s, M[t], i, e + i, l);
                              e += a[t]
                          }
                      } catch (t) {
                          D = !1,
                          S.dispatchEvent(new ErrorEvent("processorerror",{
                              colno: t.colno,
                              filename: t.filename,
                              lineno: t.lineno,
                              message: t.message
                          }))
                      }
                      if (!D) {
                          for (let t = 0; t < n.numberOfInputs; t += 1) {
                              h[t].disconnect(d[t]);
                              for (let e = 0; e < n.channelCount; e += 1)
                                  d[l].disconnect(f, e, t * n.channelCount + e)
                          }
                          if (void 0 !== i.parameterDescriptors) {
                              let t = i.parameterDescriptors.length;
                              for (let e = 0; e < t; e += 1) {
                                  let t = p[e];
                                  t.disconnect(f, 0, o + e),
                                  t.stop()
                              }
                          }
                          f.disconnect(g),
                          g.onaudioprocess = null,
                          P ? R() : N();
                          break
                      }
                  }
              }
          }
          ;
          let P = !1
            , V = iX(t, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
          })
            , j = () => g.connect(V).connect(t.destination)
            , N = () => {
              g.disconnect(V),
              V.disconnect()
          }
          ;
          return j(),
          nF(S, () => {
              if (D) {
                  N(),
                  n.numberOfOutputs > 0 && g.connect(v);
                  for (let t = 0, e = 0; t < n.numberOfOutputs; t += 1) {
                      let i = y[t];
                      for (let n = 0; n < a[t]; n += 1)
                          v.connect(i, e + n, n);
                      e += a[t]
                  }
              }
              P = !0
          }
          , () => {
              D && (j(),
              R()),
              P = !1
          }
          )
      }
      )
        , s_ = (tG = (t, e) => {
          sd(t).delete(e)
      }
      ,
      (t, e, i) => {
          let n = new WeakMap
            , s = null
            , r = async (r, a) => {
              let o = e$(r)
                , l = null
                , u = eb(o, a)
                , c = Array.isArray(e.outputChannelCount) ? e.outputChannelCount : Array.from(e.outputChannelCount);
              if (null === ny) {
                  let t = c.reduce( (t, e) => t + e, 0)
                    , i = iY(a, {
                      channelCount: Math.max(1, t),
                      channelCountMode: "explicit",
                      channelInterpretation: "discrete",
                      numberOfOutputs: Math.max(1, t)
                  })
                    , n = [];
                  for (let t = 0; t < r.numberOfOutputs; t += 1)
                      n.push(nz(a, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "speakers",
                          numberOfInputs: c[t]
                      }));
                  let s = iX(a, {
                      channelCount: e.channelCount,
                      channelCountMode: e.channelCountMode,
                      channelInterpretation: e.channelInterpretation,
                      gain: 1
                  });
                  s.connect = sp.bind(null, n),
                  s.disconnect = sf.bind(null, n),
                  l = [i, n, s]
              } else
                  u || (o = new ny(a,t));
              if (n.set(a, null === l ? o : l[2]),
              null !== l) {
                  if (null === s) {
                      if (void 0 === i)
                          throw Error("Missing the processor constructor.");
                      if (null === nh)
                          throw Error("Missing the native OfflineAudioContext constructor.");
                      let t = r.channelCount * r.numberOfInputs
                        , n = void 0 === i.parameterDescriptors ? 0 : i.parameterDescriptors.length
                        , o = t + n
                        , l = async () => {
                          let i = new nh(o,128 * Math.ceil(r.context.length / 128),a.sampleRate)
                            , s = []
                            , l = [];
                          for (let t = 0; t < e.numberOfInputs; t += 1)
                              s.push(iX(i, {
                                  channelCount: e.channelCount,
                                  channelCountMode: e.channelCountMode,
                                  channelInterpretation: e.channelInterpretation,
                                  gain: 1
                              })),
                              l.push(iY(i, {
                                  channelCount: e.channelCount,
                                  channelCountMode: "explicit",
                                  channelInterpretation: "discrete",
                                  numberOfOutputs: e.channelCount
                              }));
                          let u = await Promise.all(Array.from(r.parameters.values()).map(async t => {
                              let e = nL(i, {
                                  channelCount: 1,
                                  channelCountMode: "explicit",
                                  channelInterpretation: "discrete",
                                  offset: t.value
                              });
                              return await nR(i, t, e.offset),
                              e
                          }
                          ))
                            , c = nz(i, {
                              channelCount: 1,
                              channelCountMode: "explicit",
                              channelInterpretation: "speakers",
                              numberOfInputs: Math.max(1, t + n)
                          });
                          for (let t = 0; t < e.numberOfInputs; t += 1) {
                              s[t].connect(l[t]);
                              for (let i = 0; i < e.channelCount; i += 1)
                                  l[t].connect(c, i, t * e.channelCount + i)
                          }
                          for (let[e,i] of u.entries())
                              i.connect(c, 0, t + e),
                              i.start(0);
                          return c.connect(i.destination),
                          await Promise.all(s.map(t => nu(r, i, t))),
                          n$(i)
                      }
                      ;
                      s = iu(r, 0 === o ? null : await l(), a, e, c, i, si)
                  }
                  let t = await s
                    , n = nD(a, {
                      buffer: null,
                      channelCount: 2,
                      channelCountMode: "max",
                      channelInterpretation: "speakers",
                      loop: !1,
                      loopEnd: 0,
                      loopStart: 0,
                      playbackRate: 1
                  })
                    , [o,u,h] = l;
                  null !== t && (n.buffer = t,
                  n.start(0)),
                  n.connect(o);
                  for (let t = 0, e = 0; t < r.numberOfOutputs; t += 1) {
                      let i = u[t];
                      for (let n = 0; n < c[t]; n += 1)
                          o.connect(i, e + n, n);
                      e += c[t]
                  }
                  return h
              }
              if (u)
                  for (let[t,e] of r.parameters.entries())
                      await nE(a, e, o.parameters.get(t));
              else
                  for (let[t,e] of r.parameters.entries())
                      await nR(a, e, o.parameters.get(t));
              return await nu(r, a, o),
              o
          }
          ;
          return {
              render(t, e) {
                  tG(e, t);
                  let i = n.get(e);
                  return void 0 !== i ? Promise.resolve(i) : r(t, e)
              }
          }
      }
      )
        , sv = se ? (tH = (t, e) => {
          sd(t).add(e)
      }
      ,
      tX = nb,
      tZ = (t, e, i, n, s, r) => {
          if (null !== i)
              try {
                  var a, o;
                  let e = new i(t,n,r)
                    , s = new Map
                    , l = null;
                  if (Object.defineProperties(e, {
                      channelCount: {
                          get: () => r.channelCount,
                          set: () => {
                              throw iw()
                          }
                      },
                      channelCountMode: {
                          get: () => "explicit",
                          set: () => {
                              throw iw()
                          }
                      },
                      onprocessorerror: {
                          get: () => l,
                          set: t => {
                              "function" == typeof l && e.removeEventListener("processorerror", l),
                              l = "function" == typeof t ? t : null,
                              "function" == typeof l && e.addEventListener("processorerror", l)
                          }
                      }
                  }),
                  e.addEventListener = (a = e.addEventListener,
                  (...t) => {
                      if ("processorerror" === t[0]) {
                          let e = "function" == typeof t[1] ? t[1] : "object" == typeof t[1] && null !== t[1] && "function" == typeof t[1].handleEvent ? t[1].handleEvent : null;
                          if (null !== e) {
                              let i = s.get(t[1]);
                              void 0 !== i ? t[1] = i : (t[1] = i => {
                                  "error" === i.type ? (Object.defineProperties(i, {
                                      type: {
                                          value: "processorerror"
                                      }
                                  }),
                                  e(i)) : e(new ErrorEvent(t[0],{
                                      ...i
                                  }))
                              }
                              ,
                              s.set(e, t[1]))
                          }
                      }
                      return a.call(e, "error", t[1], t[2]),
                      a.call(e, ...t)
                  }
                  ),
                  e.removeEventListener = (o = e.removeEventListener,
                  (...t) => {
                      if ("processorerror" === t[0]) {
                          let e = s.get(t[1]);
                          void 0 !== e && (s.delete(t[1]),
                          t[1] = e)
                      }
                      return o.call(e, "error", t[1], t[2]),
                      o.call(e, t[0], t[1], t[2])
                  }
                  ),
                  0 !== r.numberOfOutputs) {
                      let i = iX(t, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          gain: 0
                      });
                      return e.connect(i).connect(t.destination),
                      nF(e, () => i.disconnect(), () => i.connect(t.destination))
                  }
                  return e
              } catch (t) {
                  if (11 === t.code)
                      throw iQ();
                  throw t
              }
          if (void 0 === s)
              throw iQ();
          return iF(r),
          sg(t, e, s, r)
      }
      ,
      t$ = t => sn.get(t),
      tQ = t => ({
          ...t,
          outputChannelCount: void 0 !== t.outputChannelCount ? t.outputChannelCount : 1 === t.numberOfInputs && 1 === t.numberOfOutputs ? [t.channelCount] : Array.from({
              length: t.numberOfOutputs
          }, () => 1)
      }),
      tJ = (t, e) => {
          sm.set(t, e)
      }
      ,
      tK = t => {
          let {port1: e, port2: i} = new MessageChannel;
          try {
              e.postMessage(t)
          } finally {
              e.close(),
              i.close()
          }
      }
      ,
      class extends tX {
          constructor(t, e, i) {
              var n;
              let s = nc(t)
                , r = nd(s)
                , a = tQ({
                  ...is,
                  ...i
              });
              tK(a);
              let o = en.get(s)
                , l = null == o ? void 0 : o.get(e)
                , u = tZ(r || "closed" !== s.state ? s : null !== (n = t$(s)) && void 0 !== n ? n : s, r ? null : t.baseLatency, ny, e, l, a);
              super(t, !0, u, r ? s_(e, a, l) : null);
              let c = [];
              u.parameters.forEach( (t, e) => {
                  let i = nI(this, r, t);
                  c.push([e, i])
              }
              ),
              this._nativeAudioWorkletNode = u,
              this._onprocessorerror = null,
              this._parameters = new ii(c),
              r && tH(s, this);
              let {activeInputs: h} = eI(this);
              tJ(u, h)
          }
          get onprocessorerror() {
              return this._onprocessorerror
          }
          set onprocessorerror(t) {
              let e = "function" == typeof t ? nn(this, t) : null;
              this._nativeAudioWorkletNode.onprocessorerror = e;
              let i = this._nativeAudioWorkletNode.onprocessorerror;
              this._onprocessorerror = null !== i && i === e ? t : i
          }
          get parameters() {
              return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters
          }
          get port() {
              return this._nativeAudioWorkletNode.port
          }
      }
      ) : void 0
        , sy = (t, e, i) => {
          if (null === nh)
              throw Error("Missing the native OfflineAudioContext constructor.");
          try {
              return new nh(t,e,i)
          } catch (t) {
              if ("SyntaxError" === t.name)
                  throw iQ();
              throw t
          }
      }
        , sb = (t, e) => nl(t).render(t, e).then( () => Promise.all(Array.from(sd(e)).map(t => nl(t).render(t, e)))).then( () => n$(e)).then(t => ("function" != typeof t.copyFromChannel ? (nk(t),
      eT(t)) : nr(ex, () => ex(t)) || nC(t),
      nw.add(t),
      t))
        , sx = (t0 = sa,
      class extends t0 {
          constructor(t, e, i) {
              let n;
              if ("number" == typeof t && void 0 !== e && void 0 !== i)
                  n = {
                      length: e,
                      numberOfChannels: t,
                      sampleRate: i
                  };
              else if ("object" == typeof t)
                  n = t;
              else
                  throw Error("The given parameters are not valid.");
              let {length: s, numberOfChannels: r, sampleRate: a} = {
                  ...iJ,
                  ...n
              }
                , o = sy(r, s, a);
              nr(iM, () => iM(o)) || o.addEventListener("statechange", ( () => {
                  let t = 0
                    , e = i => {
                      "running" === this._state && (t > 0 ? (o.removeEventListener("statechange", e),
                      i.stopImmediatePropagation(),
                      this._waitForThePromiseToSettle(i)) : t += 1)
                  }
                  ;
                  return e
              }
              )()),
              super(o, r),
              this._length = s,
              this._nativeOfflineAudioContext = o,
              this._state = null
          }
          get length() {
              return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
          }
          get state() {
              return null === this._state ? this._nativeOfflineAudioContext.state : this._state
          }
          startRendering() {
              return "running" === this._state ? Promise.reject(iw()) : (this._state = "running",
              sb(this.destination, this._nativeOfflineAudioContext).finally( () => {
                  this._state = null,
                  ej(this)
              }
              ))
          }
          _waitForThePromiseToSettle(t) {
              null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(t) : setTimeout( () => this._waitForThePromiseToSettle(t))
          }
      }
      )
        , sw = t => ng(et.get(t)) || ng(t)
        , sT = t => t6.has(t) || n_(t)
        , sS = t => t7.has(t) || nv(t)
        , sk = t => nd(et.get(t)) || nd(t);
      function sC(t, e) {
          if (!t)
              throw Error(e)
      }
      function sA(t, e, i=1 / 0) {
          if (!(e <= t && t <= i))
              throw RangeError(`Value must be within [${e}, ${i}], got: ${t}`)
      }
      function sO(t) {
          t.isOffline || "running" === t.state || sE('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')
      }
      let sM = console;
      function sE(...t) {
          sM.warn(...t)
      }
      function sD(t) {
          return void 0 === t
      }
      function sR(t) {
          return !sD(t)
      }
      function sI(t) {
          return "number" == typeof t
      }
      function sP(t) {
          return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
      }
      function sV(t) {
          return "boolean" == typeof t
      }
      function sj(t) {
          return Array.isArray(t)
      }
      function sN(t) {
          return "string" == typeof t
      }
      function sF(t) {
          return sN(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
      }
      let sz = "object" == typeof self ? self : null
        , sq = sz && (sz.hasOwnProperty("AudioContext") || sz.hasOwnProperty("webkitAudioContext"));
      var sB = i(7582);
      class sL {
          constructor(t, e, i) {
              this._callback = t,
              this._type = e,
              this._updateInterval = i,
              this._createClock()
          }
          _createWorker() {
              let t = new Blob([`
    // the initial timeout time
    let timeoutTime =  ${(1e3 * this._updateInterval).toFixed(1)};
    // onmessage callback
    self.onmessage = function(msg){
      timeoutTime = parseInt(msg.data);
    };
    // the tick function which posts a message
    // and schedules a new tick
    function tick(){
      setTimeout(tick, timeoutTime);
      self.postMessage('tick');
    }
    // call tick initially
    tick();
    `],{
                  type: "text/javascript"
              })
                , e = URL.createObjectURL(t)
                , i = new Worker(e);
              i.onmessage = this._callback.bind(this),
              this._worker = i
          }
          _createTimeout() {
              this._timeout = setTimeout( () => {
                  this._createTimeout(),
                  this._callback()
              }
              , 1e3 * this._updateInterval)
          }
          _createClock() {
              if ("worker" === this._type)
                  try {
                      this._createWorker()
                  } catch (t) {
                      this._type = "timeout",
                      this._createClock()
                  }
              else
                  "timeout" === this._type && this._createTimeout()
          }
          _disposeClock() {
              this._timeout && (clearTimeout(this._timeout),
              this._timeout = 0),
              this._worker && (this._worker.terminate(),
              this._worker.onmessage = null)
          }
          get updateInterval() {
              return this._updateInterval
          }
          set updateInterval(t) {
              this._updateInterval = Math.max(t, 128 / 44100),
              "worker" === this._type && this._worker.postMessage(Math.max(1e3 * t, 1))
          }
          get type() {
              return this._type
          }
          set type(t) {
              this._disposeClock(),
              this._type = t,
              this._createClock()
          }
          dispose() {
              this._disposeClock()
          }
      }
      function sW(t) {
          return t instanceof AudioBuffer
      }
      function sU(t, ...e) {
          if (!e.length)
              return t;
          let i = e.shift();
          if (sP(t) && sP(i))
              for (let e in i) {
                  var n;
                  (n = i[e],
                  "value" === e || sS(n) || sT(n) || sW(n)) ? t[e] = i[e] : sP(i[e]) ? (t[e] || Object.assign(t, {
                      [e]: {}
                  }),
                  sU(t[e], i[e])) : Object.assign(t, {
                      [e]: i[e]
                  })
              }
          return sU(t, ...e)
      }
      function sY(t, e, i=[], n) {
          let s = {}
            , r = Array.from(e);
          if (sP(r[0]) && n && !Reflect.has(r[0], n) && !Object.keys(r[0]).some(e => Reflect.has(t, e)) && (sU(s, {
              [n]: r[0]
          }),
          i.splice(i.indexOf(n), 1),
          r.shift()),
          1 === r.length && sP(r[0]))
              sU(s, r[0]);
          else
              for (let t = 0; t < i.length; t++)
                  sR(r[t]) && (s[i[t]] = r[t]);
          return sU(t, s)
      }
      function sG(t, e) {
          return sD(t) ? e : t
      }
      function sH(t, e) {
          return e.forEach(e => {
              Reflect.has(t, e) && delete t[e]
          }
          ),
          t
      }
      /**
* Tone.js
* @author Yotam Mann
* @license http://opensource.org/licenses/MIT MIT License
* @copyright 2014-2019 Yotam Mann
*/
      class sX {
          constructor() {
              this.debug = !1,
              this._wasDisposed = !1
          }
          static getDefaults() {
              return {}
          }
          log(...t) {
              (this.debug || sz && this.toString() === sz.TONE_DEBUG_CLASS) && function(...t) {
                  sM.log(...t)
              }(this, ...t)
          }
          dispose() {
              return this._wasDisposed = !0,
              this
          }
          get disposed() {
              return this._wasDisposed
          }
          toString() {
              return this.name
          }
      }
      function sZ(t, e) {
          return t > e + 1e-6
      }
      function s$(t, e) {
          return sZ(t, e) || sQ(t, e)
      }
      function sQ(t, e) {
          return 1e-6 > Math.abs(t - e)
      }
      function sJ(t, e, i) {
          return Math.max(Math.min(t, i), e)
      }
      sX.version = r;
      class sK extends sX {
          constructor() {
              super(),
              this.name = "Timeline",
              this._timeline = [];
              let t = sY(sK.getDefaults(), arguments, ["memory"]);
              this.memory = t.memory,
              this.increasing = t.increasing
          }
          static getDefaults() {
              return {
                  memory: 1 / 0,
                  increasing: !1
              }
          }
          get length() {
              return this._timeline.length
          }
          add(t) {
              if (sC(Reflect.has(t, "time"), "Timeline: events must have a time attribute"),
              t.time = t.time.valueOf(),
              this.increasing && this.length) {
                  let e = this._timeline[this.length - 1];
                  sC(s$(t.time, e.time), "The time must be greater than or equal to the last scheduled time"),
                  this._timeline.push(t)
              } else {
                  let e = this._search(t.time);
                  this._timeline.splice(e + 1, 0, t)
              }
              if (this.length > this.memory) {
                  let t = this.length - this.memory;
                  this._timeline.splice(0, t)
              }
              return this
          }
          remove(t) {
              let e = this._timeline.indexOf(t);
              return -1 !== e && this._timeline.splice(e, 1),
              this
          }
          get(t, e="time") {
              let i = this._search(t, e);
              return -1 !== i ? this._timeline[i] : null
          }
          peek() {
              return this._timeline[0]
          }
          shift() {
              return this._timeline.shift()
          }
          getAfter(t, e="time") {
              let i = this._search(t, e);
              return i + 1 < this._timeline.length ? this._timeline[i + 1] : null
          }
          getBefore(t) {
              let e = this._timeline.length;
              if (e > 0 && this._timeline[e - 1].time < t)
                  return this._timeline[e - 1];
              let i = this._search(t);
              return i - 1 >= 0 ? this._timeline[i - 1] : null
          }
          cancel(t) {
              if (this._timeline.length > 1) {
                  let e = this._search(t);
                  if (e >= 0) {
                      if (sQ(this._timeline[e].time, t)) {
                          for (let i = e; i >= 0; i--)
                              if (sQ(this._timeline[i].time, t))
                                  e = i;
                              else
                                  break;
                          this._timeline = this._timeline.slice(0, e)
                      } else
                          this._timeline = this._timeline.slice(0, e + 1)
                  } else
                      this._timeline = []
              } else
                  1 === this._timeline.length && s$(this._timeline[0].time, t) && (this._timeline = []);
              return this
          }
          cancelBefore(t) {
              let e = this._search(t);
              return e >= 0 && (this._timeline = this._timeline.slice(e + 1)),
              this
          }
          previousEvent(t) {
              let e = this._timeline.indexOf(t);
              return e > 0 ? this._timeline[e - 1] : null
          }
          _search(t, e="time") {
              if (0 === this._timeline.length)
                  return -1;
              let i = 0
                , n = this._timeline.length
                , s = n;
              if (n > 0 && this._timeline[n - 1][e] <= t)
                  return n - 1;
              for (; i < s; ) {
                  let n = Math.floor(i + (s - i) / 2)
                    , r = this._timeline[n]
                    , a = this._timeline[n + 1];
                  if (sQ(r[e], t)) {
                      for (let i = n; i < this._timeline.length; i++)
                          if (sQ(this._timeline[i][e], t))
                              n = i;
                          else
                              break;
                      return n
                  }
                  if (r[e] + 1e-6 < t && sZ(a[e], t))
                      return n;
                  sZ(r[e], t) ? s = n : i = n + 1
              }
              return -1
          }
          _iterate(t, e=0, i=this._timeline.length - 1) {
              this._timeline.slice(e, i + 1).forEach(t)
          }
          forEach(t) {
              return this._iterate(t),
              this
          }
          forEachBefore(t, e) {
              let i = this._search(t);
              return -1 !== i && this._iterate(e, 0, i),
              this
          }
          forEachAfter(t, e) {
              let i = this._search(t);
              return this._iterate(e, i + 1),
              this
          }
          forEachBetween(t, e, i) {
              let n = this._search(t)
                , s = this._search(e);
              return -1 !== n && -1 !== s ? (this._timeline[n].time !== t && (n += 1),
              this._timeline[s].time === e && (s -= 1),
              this._iterate(i, n, s)) : -1 === n && this._iterate(i, 0, s),
              this
          }
          forEachFrom(t, e) {
              let i = this._search(t);
              for (; i >= 0 && this._timeline[i].time >= t; )
                  i--;
              return this._iterate(e, i + 1),
              this
          }
          forEachAtTime(t, e) {
              let i = this._search(t);
              if (-1 !== i && sQ(this._timeline[i].time, t)) {
                  let n = i;
                  for (let e = i; e >= 0; e--)
                      if (sQ(this._timeline[e].time, t))
                          n = e;
                      else
                          break;
                  this._iterate(t => {
                      e(t)
                  }
                  , n, i)
              }
              return this
          }
          dispose() {
              return super.dispose(),
              this._timeline = [],
              this
          }
      }
      let s0 = [];
      function s1(t) {
          s0.push(t)
      }
      let s2 = [];
      function s3(t) {
          s2.push(t)
      }
      class s8 extends sX {
          constructor() {
              super(...arguments),
              this.name = "Emitter"
          }
          on(t, e) {
              return t.split(/\W+/).forEach(t => {
                  sD(this._events) && (this._events = {}),
                  this._events.hasOwnProperty(t) || (this._events[t] = []),
                  this._events[t].push(e)
              }
              ),
              this
          }
          once(t, e) {
              let i = (...n) => {
                  e(...n),
                  this.off(t, i)
              }
              ;
              return this.on(t, i),
              this
          }
          off(t, e) {
              return t.split(/\W+/).forEach(i => {
                  if (sD(this._events) && (this._events = {}),
                  this._events.hasOwnProperty(t)) {
                      if (sD(e))
                          this._events[t] = [];
                      else {
                          let i = this._events[t];
                          for (let t = i.length - 1; t >= 0; t--)
                              i[t] === e && i.splice(t, 1)
                      }
                  }
              }
              ),
              this
          }
          emit(t, ...e) {
              if (this._events && this._events.hasOwnProperty(t)) {
                  let i = this._events[t].slice(0);
                  for (let t = 0, n = i.length; t < n; t++)
                      i[t].apply(this, e)
              }
              return this
          }
          static mixin(t) {
              ["on", "once", "off", "emit"].forEach(e => {
                  let i = Object.getOwnPropertyDescriptor(s8.prototype, e);
                  Object.defineProperty(t.prototype, e, i)
              }
              )
          }
          dispose() {
              return super.dispose(),
              this._events = void 0,
              this
          }
      }
      class s5 extends s8 {
          constructor() {
              super(...arguments),
              this.isOffline = !1
          }
          toJSON() {
              return {}
          }
      }
      class s4 extends s5 {
          constructor() {
              super(),
              this.name = "Context",
              this._constants = new Map,
              this._timeouts = new sK,
              this._timeoutIds = 0,
              this._initialized = !1,
              this.isOffline = !1,
              this._workletModules = new Map;
              let t = sY(s4.getDefaults(), arguments, ["context"]);
              t.context ? this._context = t.context : this._context = new sh({
                  latencyHint: t.latencyHint
              }),
              this._ticker = new sL(this.emit.bind(this, "tick"),t.clockSource,t.updateInterval),
              this.on("tick", this._timeoutLoop.bind(this)),
              this._context.onstatechange = () => {
                  this.emit("statechange", this.state)
              }
              ,
              this._setLatencyHint(t.latencyHint),
              this.lookAhead = t.lookAhead
          }
          static getDefaults() {
              return {
                  clockSource: "worker",
                  latencyHint: "interactive",
                  lookAhead: .1,
                  updateInterval: .05
              }
          }
          initialize() {
              if (!this._initialized) {
                  var t;
                  t = this,
                  s0.forEach(e => e(t)),
                  this._initialized = !0
              }
              return this
          }
          createAnalyser() {
              return this._context.createAnalyser()
          }
          createOscillator() {
              return this._context.createOscillator()
          }
          createBufferSource() {
              return this._context.createBufferSource()
          }
          createBiquadFilter() {
              return this._context.createBiquadFilter()
          }
          createBuffer(t, e, i) {
              return this._context.createBuffer(t, e, i)
          }
          createChannelMerger(t) {
              return this._context.createChannelMerger(t)
          }
          createChannelSplitter(t) {
              return this._context.createChannelSplitter(t)
          }
          createConstantSource() {
              return this._context.createConstantSource()
          }
          createConvolver() {
              return this._context.createConvolver()
          }
          createDelay(t) {
              return this._context.createDelay(t)
          }
          createDynamicsCompressor() {
              return this._context.createDynamicsCompressor()
          }
          createGain() {
              return this._context.createGain()
          }
          createIIRFilter(t, e) {
              return this._context.createIIRFilter(t, e)
          }
          createPanner() {
              return this._context.createPanner()
          }
          createPeriodicWave(t, e, i) {
              return this._context.createPeriodicWave(t, e, i)
          }
          createStereoPanner() {
              return this._context.createStereoPanner()
          }
          createWaveShaper() {
              return this._context.createWaveShaper()
          }
          createMediaStreamSource(t) {
              return sC(sw(this._context), "Not available if OfflineAudioContext"),
              this._context.createMediaStreamSource(t)
          }
          createMediaElementSource(t) {
              return sC(sw(this._context), "Not available if OfflineAudioContext"),
              this._context.createMediaElementSource(t)
          }
          createMediaStreamDestination() {
              return sC(sw(this._context), "Not available if OfflineAudioContext"),
              this._context.createMediaStreamDestination()
          }
          decodeAudioData(t) {
              return this._context.decodeAudioData(t)
          }
          get currentTime() {
              return this._context.currentTime
          }
          get state() {
              return this._context.state
          }
          get sampleRate() {
              return this._context.sampleRate
          }
          get listener() {
              return this.initialize(),
              this._listener
          }
          set listener(t) {
              sC(!this._initialized, "The listener cannot be set after initialization."),
              this._listener = t
          }
          get transport() {
              return this.initialize(),
              this._transport
          }
          set transport(t) {
              sC(!this._initialized, "The transport cannot be set after initialization."),
              this._transport = t
          }
          get draw() {
              return this.initialize(),
              this._draw
          }
          set draw(t) {
              sC(!this._initialized, "Draw cannot be set after initialization."),
              this._draw = t
          }
          get destination() {
              return this.initialize(),
              this._destination
          }
          set destination(t) {
              sC(!this._initialized, "The destination cannot be set after initialization."),
              this._destination = t
          }
          createAudioWorkletNode(t, e) {
              var i;
              return i = this.rawContext,
              sC(sR(sv), "This node only works in a secure context (https or localhost)"),
              new sv(i,t,e)
          }
          addAudioWorkletModule(t, e) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  sC(sR(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)"),
                  this._workletModules.has(e) || this._workletModules.set(e, this.rawContext.audioWorklet.addModule(t)),
                  yield this._workletModules.get(e)
              })
          }
          workletsAreReady() {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let t = [];
                  this._workletModules.forEach(e => t.push(e)),
                  yield Promise.all(t)
              })
          }
          get updateInterval() {
              return this._ticker.updateInterval
          }
          set updateInterval(t) {
              this._ticker.updateInterval = t
          }
          get clockSource() {
              return this._ticker.type
          }
          set clockSource(t) {
              this._ticker.type = t
          }
          get latencyHint() {
              return this._latencyHint
          }
          _setLatencyHint(t) {
              let e = 0;
              if (this._latencyHint = t,
              sN(t))
                  switch (t) {
                  case "interactive":
                      e = .1;
                      break;
                  case "playback":
                      e = .5;
                      break;
                  case "balanced":
                      e = .25
                  }
              this.lookAhead = e,
              this.updateInterval = e / 2
          }
          get rawContext() {
              return this._context
          }
          now() {
              return this._context.currentTime + this.lookAhead
          }
          immediate() {
              return this._context.currentTime
          }
          resume() {
              return sw(this._context) ? this._context.resume() : Promise.resolve()
          }
          close() {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  if (sw(this._context) && (yield this._context.close()),
                  this._initialized) {
                      var t;
                      t = this,
                      s2.forEach(e => e(t))
                  }
              })
          }
          getConstant(t) {
              if (this._constants.has(t))
                  return this._constants.get(t);
              {
                  let e = this._context.createBuffer(1, 128, this._context.sampleRate)
                    , i = e.getChannelData(0);
                  for (let e = 0; e < i.length; e++)
                      i[e] = t;
                  let n = this._context.createBufferSource();
                  return n.channelCount = 1,
                  n.channelCountMode = "explicit",
                  n.buffer = e,
                  n.loop = !0,
                  n.start(0),
                  this._constants.set(t, n),
                  n
              }
          }
          dispose() {
              return super.dispose(),
              this._ticker.dispose(),
              this._timeouts.dispose(),
              Object.keys(this._constants).map(t => this._constants[t].disconnect()),
              this
          }
          _timeoutLoop() {
              let t = this.now()
                , e = this._timeouts.peek();
              for (; this._timeouts.length && e && e.time <= t; )
                  e.callback(),
                  this._timeouts.shift(),
                  e = this._timeouts.peek()
          }
          setTimeout(t, e) {
              this._timeoutIds++;
              let i = this.now();
              return this._timeouts.add({
                  callback: t,
                  id: this._timeoutIds,
                  time: i + e
              }),
              this._timeoutIds
          }
          clearTimeout(t) {
              return this._timeouts.forEach(e => {
                  e.id === t && this._timeouts.remove(e)
              }
              ),
              this
          }
          clearInterval(t) {
              return this.clearTimeout(t)
          }
          setInterval(t, e) {
              let i = ++this._timeoutIds
                , n = () => {
                  let s = this.now();
                  this._timeouts.add({
                      callback: () => {
                          t(),
                          n()
                      }
                      ,
                      id: i,
                      time: s + e
                  })
              }
              ;
              return n(),
              i
          }
      }
      class s6 extends s5 {
          constructor() {
              super(...arguments),
              this.lookAhead = 0,
              this.latencyHint = 0,
              this.isOffline = !1
          }
          createAnalyser() {
              return {}
          }
          createOscillator() {
              return {}
          }
          createBufferSource() {
              return {}
          }
          createBiquadFilter() {
              return {}
          }
          createBuffer(t, e, i) {
              return {}
          }
          createChannelMerger(t) {
              return {}
          }
          createChannelSplitter(t) {
              return {}
          }
          createConstantSource() {
              return {}
          }
          createConvolver() {
              return {}
          }
          createDelay(t) {
              return {}
          }
          createDynamicsCompressor() {
              return {}
          }
          createGain() {
              return {}
          }
          createIIRFilter(t, e) {
              return {}
          }
          createPanner() {
              return {}
          }
          createPeriodicWave(t, e, i) {
              return {}
          }
          createStereoPanner() {
              return {}
          }
          createWaveShaper() {
              return {}
          }
          createMediaStreamSource(t) {
              return {}
          }
          createMediaElementSource(t) {
              return {}
          }
          createMediaStreamDestination() {
              return {}
          }
          decodeAudioData(t) {
              return Promise.resolve({})
          }
          createAudioWorkletNode(t, e) {
              return {}
          }
          get rawContext() {
              return {}
          }
          addAudioWorkletModule(t, e) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return Promise.resolve()
              })
          }
          resume() {
              return Promise.resolve()
          }
          setTimeout(t, e) {
              return 0
          }
          clearTimeout(t) {
              return this
          }
          setInterval(t, e) {
              return 0
          }
          clearInterval(t) {
              return this
          }
          getConstant(t) {
              return {}
          }
          get currentTime() {
              return 0
          }
          get state() {
              return {}
          }
          get sampleRate() {
              return 0
          }
          get listener() {
              return {}
          }
          get transport() {
              return {}
          }
          get draw() {
              return {}
          }
          set draw(t) {}
          get destination() {
              return {}
          }
          set destination(t) {}
          now() {
              return 0
          }
          immediate() {
              return 0
          }
      }
      function s9(t, e) {
          sj(e) ? e.forEach(e => s9(t, e)) : Object.defineProperty(t, e, {
              enumerable: !0,
              writable: !1
          })
      }
      let s7 = () => {}
      ;
      class rt extends sX {
          constructor() {
              super(),
              this.name = "ToneAudioBuffer",
              this.onload = s7;
              let t = sY(rt.getDefaults(), arguments, ["url", "onload", "onerror"]);
              this.reverse = t.reverse,
              this.onload = t.onload,
              t.url && sW(t.url) || t.url instanceof rt ? this.set(t.url) : sN(t.url) && this.load(t.url).catch(t.onerror)
          }
          static getDefaults() {
              return {
                  onerror: s7,
                  onload: s7,
                  reverse: !1
              }
          }
          get sampleRate() {
              return this._buffer ? this._buffer.sampleRate : rs().sampleRate
          }
          set(t) {
              return t instanceof rt ? t.loaded ? this._buffer = t.get() : t.onload = () => {
                  this.set(t),
                  this.onload(this)
              }
              : this._buffer = t,
              this._reversed && this._reverse(),
              this
          }
          get() {
              return this._buffer
          }
          load(t) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let e = rt.load(t).then(t => {
                      this.set(t),
                      this.onload(this)
                  }
                  );
                  rt.downloads.push(e);
                  try {
                      yield e
                  } finally {
                      let t = rt.downloads.indexOf(e);
                      rt.downloads.splice(t, 1)
                  }
                  return this
              })
          }
          dispose() {
              return super.dispose(),
              this._buffer = void 0,
              this
          }
          fromArray(t) {
              let e = sj(t) && t[0].length > 0
                , i = e ? t.length : 1
                , n = e ? t[0].length : t.length
                , s = rs()
                , r = s.createBuffer(i, n, s.sampleRate)
                , a = e || 1 !== i ? t : [t];
              for (let t = 0; t < i; t++)
                  r.copyToChannel(a[t], t);
              return this._buffer = r,
              this
          }
          toMono(t) {
              if (sI(t))
                  this.fromArray(this.toArray(t));
              else {
                  let t = new Float32Array(this.length)
                    , e = this.numberOfChannels;
                  for (let i = 0; i < e; i++) {
                      let e = this.toArray(i);
                      for (let i = 0; i < e.length; i++)
                          t[i] += e[i]
                  }
                  t = t.map(t => t / e),
                  this.fromArray(t)
              }
              return this
          }
          toArray(t) {
              if (sI(t))
                  return this.getChannelData(t);
              if (1 === this.numberOfChannels)
                  return this.toArray(0);
              {
                  let t = [];
                  for (let e = 0; e < this.numberOfChannels; e++)
                      t[e] = this.getChannelData(e);
                  return t
              }
          }
          getChannelData(t) {
              return this._buffer ? this._buffer.getChannelData(t) : new Float32Array(0)
          }
          slice(t, e=this.duration) {
              let i = Math.floor(t * this.sampleRate)
                , n = Math.floor(e * this.sampleRate);
              sC(i < n, "The start time must be less than the end time");
              let s = rs().createBuffer(this.numberOfChannels, n - i, this.sampleRate);
              for (let t = 0; t < this.numberOfChannels; t++)
                  s.copyToChannel(this.getChannelData(t).subarray(i, n), t);
              return new rt(s)
          }
          _reverse() {
              if (this.loaded)
                  for (let t = 0; t < this.numberOfChannels; t++)
                      this.getChannelData(t).reverse();
              return this
          }
          get loaded() {
              return this.length > 0
          }
          get duration() {
              return this._buffer ? this._buffer.duration : 0
          }
          get length() {
              return this._buffer ? this._buffer.length : 0
          }
          get numberOfChannels() {
              return this._buffer ? this._buffer.numberOfChannels : 0
          }
          get reverse() {
              return this._reversed
          }
          set reverse(t) {
              this._reversed !== t && (this._reversed = t,
              this._reverse())
          }
          static fromArray(t) {
              return new rt().fromArray(t)
          }
          static fromUrl(t) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let e = new rt;
                  return yield e.load(t)
              })
          }
          static load(t) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let e = t.match(/\[([^\]\[]+\|.+)\]$/);
                  if (e) {
                      let i = e[1].split("|")
                        , n = i[0];
                      for (let t of i)
                          if (rt.supportsType(t)) {
                              n = t;
                              break
                          }
                      t = t.replace(e[0], n)
                  }
                  let i = "" === rt.baseUrl || rt.baseUrl.endsWith("/") ? rt.baseUrl : rt.baseUrl + "/"
                    , n = yield fetch(i + t);
                  if (!n.ok)
                      throw Error(`could not load url: ${t}`);
                  let s = yield n.arrayBuffer();
                  return yield rs().decodeAudioData(s)
              })
          }
          static supportsType(t) {
              let e = t.split(".")
                , i = e[e.length - 1];
              return "" !== document.createElement("audio").canPlayType("audio/" + i)
          }
          static loaded() {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  for (yield Promise.resolve(); rt.downloads.length; )
                      yield rt.downloads[0]
              })
          }
      }
      rt.baseUrl = "",
      rt.downloads = [];
      class re extends s4 {
          constructor() {
              var t, e, i, n, s, r;
              super({
                  clockSource: "offline",
                  context: (t = arguments[0],
                  sk(t)) ? arguments[0] : (e = arguments[0],
                  i = arguments[1] * arguments[2],
                  n = arguments[2],
                  new sx(e,i,n)),
                  lookAhead: 0,
                  updateInterval: (s = arguments[0],
                  sk(s)) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
              }),
              this.name = "OfflineContext",
              this._currentTime = 0,
              this.isOffline = !0,
              r = arguments[0],
              this._duration = sk(r) ? arguments[0].length / arguments[0].sampleRate : arguments[1]
          }
          now() {
              return this._currentTime
          }
          get currentTime() {
              return this._currentTime
          }
          _renderClock(t) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let e = 0;
                  for (; this._duration - this._currentTime >= 0; ) {
                      this.emit("tick"),
                      this._currentTime += 128 / this.sampleRate,
                      e++;
                      let i = Math.floor(this.sampleRate / 128);
                      t && e % i == 0 && (yield new Promise(t => setTimeout(t, 1)))
                  }
              })
          }
          render(t=!0) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return yield this.workletsAreReady(),
                  yield this._renderClock(t),
                  new rt((yield this._context.startRendering()))
              })
          }
          close() {
              return Promise.resolve()
          }
      }
      let ri = new s6
        , rn = ri;
      function rs() {
          var t;
          return rn === ri && sq && (rn = sw(t = new s4) ? new s4(t) : sk(t) ? new re(t) : t),
          rn
      }
      function rr() {
          return rn.resume()
      }
      if (sz && !sz.TONE_SILENCE_LOGGING) {
          let t = ` * Tone.js v${r} * `;
          console.log(`%c${t}`, "background: #000; color: #fff")
      }
      function ra(t) {
          return Math.pow(2, t / 12)
      }
      let ro = 440;
      function rl(t) {
          return Math.round(ru(t))
      }
      function ru(t) {
          return 69 + 12 * Math.log2(t / ro)
      }
      function rc(t) {
          return ro * Math.pow(2, (t - 69) / 12)
      }
      class rh extends sX {
          constructor(t, e, i) {
              super(),
              this.defaultUnits = "s",
              this._val = e,
              this._units = i,
              this.context = t,
              this._expressions = this._getExpressions()
          }
          _getExpressions() {
              return {
                  hz: {
                      method: t => this._frequencyToUnits(parseFloat(t)),
                      regexp: /^(\d+(?:\.\d+)?)hz$/i
                  },
                  i: {
                      method: t => this._ticksToUnits(parseInt(t, 10)),
                      regexp: /^(\d+)i$/i
                  },
                  m: {
                      method: t => this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
                      regexp: /^(\d+)m$/i
                  },
                  n: {
                      method: (t, e) => {
                          let i = parseInt(t, 10)
                            , n = "." === e ? 1.5 : 1;
                          return 1 === i ? this._beatsToUnits(this._getTimeSignature()) * n : this._beatsToUnits(4 / i) * n
                      }
                      ,
                      regexp: /^(\d+)n(\.?)$/i
                  },
                  number: {
                      method: t => this._expressions[this.defaultUnits].method.call(this, t),
                      regexp: /^(\d+(?:\.\d+)?)$/
                  },
                  s: {
                      method: t => this._secondsToUnits(parseFloat(t)),
                      regexp: /^(\d+(?:\.\d+)?)s$/
                  },
                  samples: {
                      method: t => parseInt(t, 10) / this.context.sampleRate,
                      regexp: /^(\d+)samples$/
                  },
                  t: {
                      method: t => {
                          let e = parseInt(t, 10);
                          return this._beatsToUnits(8 / (3 * Math.floor(e)))
                      }
                      ,
                      regexp: /^(\d+)t$/i
                  },
                  tr: {
                      method: (t, e, i) => {
                          let n = 0;
                          return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                          e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))),
                          i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)),
                          n
                      }
                      ,
                      regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
                  }
              }
          }
          valueOf() {
              if (this._val instanceof rh && this.fromType(this._val),
              sD(this._val))
                  return this._noArg();
              if (sN(this._val) && sD(this._units)) {
                  for (let t in this._expressions)
                      if (this._expressions[t].regexp.test(this._val.trim())) {
                          this._units = t;
                          break
                      }
              } else if (sP(this._val)) {
                  let t = 0;
                  for (let e in this._val)
                      if (sR(this._val[e])) {
                          let i = this._val[e];
                          t += new this.constructor(this.context,e).valueOf() * i
                      }
                  return t
              }
              if (sR(this._units)) {
                  let t = this._expressions[this._units]
                    , e = this._val.toString().trim().match(t.regexp);
                  return e ? t.method.apply(this, e.slice(1)) : t.method.call(this, this._val)
              }
              return sN(this._val) ? parseFloat(this._val) : this._val
          }
          _frequencyToUnits(t) {
              return 1 / t
          }
          _beatsToUnits(t) {
              return 60 / this._getBpm() * t
          }
          _secondsToUnits(t) {
              return t
          }
          _ticksToUnits(t) {
              return t * this._beatsToUnits(1) / this._getPPQ()
          }
          _noArg() {
              return this._now()
          }
          _getBpm() {
              return this.context.transport.bpm.value
          }
          _getTimeSignature() {
              return this.context.transport.timeSignature
          }
          _getPPQ() {
              return this.context.transport.PPQ
          }
          fromType(t) {
              switch (this._units = void 0,
              this.defaultUnits) {
              case "s":
                  this._val = t.toSeconds();
                  break;
              case "i":
                  this._val = t.toTicks();
                  break;
              case "hz":
                  this._val = t.toFrequency();
                  break;
              case "midi":
                  this._val = t.toMidi()
              }
              return this
          }
          toFrequency() {
              return 1 / this.toSeconds()
          }
          toSamples() {
              return this.toSeconds() * this.context.sampleRate
          }
          toMilliseconds() {
              return 1e3 * this.toSeconds()
          }
      }
      class rd extends rh {
          constructor() {
              super(...arguments),
              this.name = "TimeClass"
          }
          _getExpressions() {
              return Object.assign(super._getExpressions(), {
                  now: {
                      method: t => this._now() + new this.constructor(this.context,t).valueOf(),
                      regexp: /^\+(.+)/
                  },
                  quantize: {
                      method: t => {
                          let e = new rd(this.context,t).valueOf();
                          return this._secondsToUnits(this.context.transport.nextSubdivision(e))
                      }
                      ,
                      regexp: /^@(.+)/
                  }
              })
          }
          quantize(t, e=1) {
              let i = new this.constructor(this.context,t).valueOf()
                , n = this.valueOf();
              return n + (Math.round(n / i) * i - n) * e
          }
          toNotation() {
              let t = this.toSeconds()
                , e = ["1m"];
              for (let t = 1; t < 9; t++) {
                  let i = Math.pow(2, t);
                  e.push(i + "n."),
                  e.push(i + "n"),
                  e.push(i + "t")
              }
              e.push("0");
              let i = e[0]
                , n = new rd(this.context,e[0]).toSeconds();
              return e.forEach(e => {
                  let s = new rd(this.context,e).toSeconds();
                  Math.abs(s - t) < Math.abs(n - t) && (i = e,
                  n = s)
              }
              ),
              i
          }
          toBarsBeatsSixteenths() {
              let t = this._beatsToUnits(1)
                , e = this.valueOf() / t
                , i = Math.floor((e = parseFloat(e.toFixed(4))) / this._getTimeSignature())
                , n = e % 1 * 4;
              e = Math.floor(e) % this._getTimeSignature();
              let s = n.toString();
              return s.length > 3 && (n = parseFloat(parseFloat(s).toFixed(3))),
              [i, e, n].join(":")
          }
          toTicks() {
              let t = this._beatsToUnits(1);
              return Math.round(this.valueOf() / t * this._getPPQ())
          }
          toSeconds() {
              return this.valueOf()
          }
          toMidi() {
              return rl(this.toFrequency())
          }
          _now() {
              return this.context.now()
          }
      }
      class rp extends rd {
          constructor() {
              super(...arguments),
              this.name = "Frequency",
              this.defaultUnits = "hz"
          }
          static get A4() {
              return ro
          }
          static set A4(t) {
              ro = t
          }
          _getExpressions() {
              return Object.assign({}, super._getExpressions(), {
                  midi: {
                      regexp: /^(\d+(?:\.\d+)?midi)/,
                      method(t) {
                          return "midi" === this.defaultUnits ? t : rp.mtof(t)
                      }
                  },
                  note: {
                      regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                      method(t, e) {
                          let i = rf[t.toLowerCase()] + (parseInt(e, 10) + 1) * 12;
                          return "midi" === this.defaultUnits ? i : rp.mtof(i)
                      }
                  },
                  tr: {
                      regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                      method(t, e, i) {
                          let n = 1;
                          return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                          e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))),
                          i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)),
                          n
                      }
                  }
              })
          }
          transpose(t) {
              return new rp(this.context,this.valueOf() * ra(t))
          }
          harmonize(t) {
              return t.map(t => this.transpose(t))
          }
          toMidi() {
              return rl(this.valueOf())
          }
          toNote() {
              let t = Math.round(12 * Math.log2(this.toFrequency() / rp.A4)) + 57
                , e = Math.floor(t / 12);
              return e < 0 && (t += -12 * e),
              rm[t % 12] + e.toString()
          }
          toSeconds() {
              return 1 / super.toSeconds()
          }
          toTicks() {
              let t = this._beatsToUnits(1);
              return Math.floor(this.valueOf() / t * this._getPPQ())
          }
          _noArg() {
              return 0
          }
          _frequencyToUnits(t) {
              return t
          }
          _ticksToUnits(t) {
              return 1 / (60 * t / (this._getBpm() * this._getPPQ()))
          }
          _beatsToUnits(t) {
              return 1 / super._beatsToUnits(t)
          }
          _secondsToUnits(t) {
              return 1 / t
          }
          static mtof(t) {
              return rc(t)
          }
          static ftom(t) {
              return rl(t)
          }
      }
      let rf = {
          cbb: -2,
          cb: -1,
          c: 0,
          "c#": 1,
          cx: 2,
          dbb: 0,
          db: 1,
          d: 2,
          "d#": 3,
          dx: 4,
          ebb: 2,
          eb: 3,
          e: 4,
          "e#": 5,
          ex: 6,
          fbb: 3,
          fb: 4,
          f: 5,
          "f#": 6,
          fx: 7,
          gbb: 5,
          gb: 6,
          g: 7,
          "g#": 8,
          gx: 9,
          abb: 7,
          ab: 8,
          a: 9,
          "a#": 10,
          ax: 11,
          bbb: 9,
          bb: 10,
          b: 11,
          "b#": 12,
          bx: 13
      }
        , rm = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      class rg extends rd {
          constructor() {
              super(...arguments),
              this.name = "TransportTime"
          }
          _now() {
              return this.context.transport.seconds
          }
      }
      class r_ extends sX {
          constructor() {
              super();
              let t = sY(r_.getDefaults(), arguments, ["context"]);
              this.defaultContext ? this.context = this.defaultContext : this.context = t.context
          }
          static getDefaults() {
              return {
                  context: rs()
              }
          }
          now() {
              return this.context.currentTime + this.context.lookAhead
          }
          immediate() {
              return this.context.currentTime
          }
          get sampleTime() {
              return 1 / this.context.sampleRate
          }
          get blockTime() {
              return 128 / this.context.sampleRate
          }
          toSeconds(t) {
              return new rd(this.context,t).toSeconds()
          }
          toFrequency(t) {
              return new rp(this.context,t).toFrequency()
          }
          toTicks(t) {
              return new rg(this.context,t).toTicks()
          }
          _getPartialProperties(t) {
              let e = this.get();
              return Object.keys(e).forEach(i => {
                  sD(t[i]) && delete e[i]
              }
              ),
              e
          }
          get() {
              let t = this.constructor.getDefaults();
              return Object.keys(t).forEach(e => {
                  if (Reflect.has(this, e)) {
                      let i = this[e];
                      sR(i) && sR(i.value) && sR(i.setValueAtTime) ? t[e] = i.value : i instanceof r_ ? t[e] = i._getPartialProperties(t[e]) : sj(i) || sI(i) || sN(i) || sV(i) ? t[e] = i : delete t[e]
                  }
              }
              ),
              t
          }
          set(t) {
              return Object.keys(t).forEach(e => {
                  Reflect.has(this, e) && sR(this[e]) && (this[e] && sR(this[e].value) && sR(this[e].setValueAtTime) ? this[e].value !== t[e] && (this[e].value = t[e]) : this[e]instanceof r_ ? this[e].set(t[e]) : this[e] = t[e])
              }
              ),
              this
          }
      }
      class rv extends sK {
          constructor(t="stopped") {
              super(),
              this.name = "StateTimeline",
              this._initial = t,
              this.setStateAtTime(this._initial, 0)
          }
          getValueAtTime(t) {
              let e = this.get(t);
              return null !== e ? e.state : this._initial
          }
          setStateAtTime(t, e, i) {
              return sA(e, 0),
              this.add(Object.assign({}, i, {
                  state: t,
                  time: e
              })),
              this
          }
          getLastState(t, e) {
              let i = this._search(e);
              for (let e = i; e >= 0; e--) {
                  let i = this._timeline[e];
                  if (i.state === t)
                      return i
              }
          }
          getNextState(t, e) {
              let i = this._search(e);
              if (-1 !== i)
                  for (let e = i; e < this._timeline.length; e++) {
                      let i = this._timeline[e];
                      if (i.state === t)
                          return i
                  }
          }
      }
      class ry extends r_ {
          constructor() {
              super(sY(ry.getDefaults(), arguments, ["param", "units", "convert"])),
              this.name = "Param",
              this.overridden = !1,
              this._minOutput = 1e-7;
              let t = sY(ry.getDefaults(), arguments, ["param", "units", "convert"]);
              for (sC(sR(t.param) && (sS(t.param) || t.param instanceof ry), "param must be an AudioParam"); !sS(t.param); )
                  t.param = t.param._param;
              this._swappable = !!sR(t.swappable) && t.swappable,
              this._swappable ? (this.input = this.context.createGain(),
              this._param = t.param,
              this.input.connect(this._param)) : this._param = this.input = t.param,
              this._events = new sK(1e3),
              this._initialValue = this._param.defaultValue,
              this.units = t.units,
              this.convert = t.convert,
              this._minValue = t.minValue,
              this._maxValue = t.maxValue,
              sR(t.value) && t.value !== this._toType(this._initialValue) && this.setValueAtTime(t.value, 0)
          }
          static getDefaults() {
              return Object.assign(r_.getDefaults(), {
                  convert: !0,
                  units: "number"
              })
          }
          get value() {
              let t = this.now();
              return this.getValueAtTime(t)
          }
          set value(t) {
              this.cancelScheduledValues(this.now()),
              this.setValueAtTime(t, this.now())
          }
          get minValue() {
              return sR(this._minValue) ? this._minValue : "time" === this.units || "frequency" === this.units || "normalRange" === this.units || "positive" === this.units || "transportTime" === this.units || "ticks" === this.units || "bpm" === this.units || "hertz" === this.units || "samples" === this.units ? 0 : "audioRange" === this.units ? -1 : "decibels" === this.units ? -1 / 0 : this._param.minValue
          }
          get maxValue() {
              return sR(this._maxValue) ? this._maxValue : "normalRange" === this.units || "audioRange" === this.units ? 1 : this._param.maxValue
          }
          _is(t, e) {
              return this.units === e
          }
          _assertRange(t) {
              return sR(this.maxValue) && sR(this.minValue) && sA(t, this._fromType(this.minValue), this._fromType(this.maxValue)),
              t
          }
          _fromType(t) {
              return this.convert && !this.overridden ? this._is(t, "time") ? this.toSeconds(t) : this._is(t, "decibels") ? Math.pow(10, t / 20) : this._is(t, "frequency") ? this.toFrequency(t) : t : this.overridden ? 0 : t
          }
          _toType(t) {
              return this.convert && "decibels" === this.units ? Math.log(t) / Math.LN10 * 20 : t
          }
          setValueAtTime(t, e) {
              let i = this.toSeconds(e)
                , n = this._fromType(t);
              return sC(isFinite(n) && isFinite(i), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
              this._assertRange(n),
              this.log(this.units, "setValueAtTime", t, i),
              this._events.add({
                  time: i,
                  type: "setValueAtTime",
                  value: n
              }),
              this._param.setValueAtTime(n, i),
              this
          }
          getValueAtTime(t) {
              let e = Math.max(this.toSeconds(t), 0)
                , i = this._events.getAfter(e)
                , n = this._events.get(e)
                , s = this._initialValue;
              if (null === n)
                  s = this._initialValue;
              else if ("setTargetAtTime" === n.type && (null === i || "setValueAtTime" === i.type)) {
                  let t;
                  let i = this._events.getBefore(n.time);
                  t = null === i ? this._initialValue : i.value,
                  "setTargetAtTime" === n.type && (s = this._exponentialApproach(n.time, t, n.value, n.constant, e))
              } else if (null === i)
                  s = n.value;
              else if ("linearRampToValueAtTime" === i.type || "exponentialRampToValueAtTime" === i.type) {
                  let t = n.value;
                  if ("setTargetAtTime" === n.type) {
                      let e = this._events.getBefore(n.time);
                      t = null === e ? this._initialValue : e.value
                  }
                  s = "linearRampToValueAtTime" === i.type ? this._linearInterpolate(n.time, t, i.time, i.value, e) : this._exponentialInterpolate(n.time, t, i.time, i.value, e)
              } else
                  s = n.value;
              return this._toType(s)
          }
          setRampPoint(t) {
              t = this.toSeconds(t);
              let e = this.getValueAtTime(t);
              return this.cancelAndHoldAtTime(t),
              0 === this._fromType(e) && (e = this._toType(this._minOutput)),
              this.setValueAtTime(e, t),
              this
          }
          linearRampToValueAtTime(t, e) {
              let i = this._fromType(t)
                , n = this.toSeconds(e);
              return sC(isFinite(i) && isFinite(n), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
              this._assertRange(i),
              this._events.add({
                  time: n,
                  type: "linearRampToValueAtTime",
                  value: i
              }),
              this.log(this.units, "linearRampToValueAtTime", t, n),
              this._param.linearRampToValueAtTime(i, n),
              this
          }
          exponentialRampToValueAtTime(t, e) {
              let i = this._fromType(t);
              i = sQ(i, 0) ? this._minOutput : i,
              this._assertRange(i);
              let n = this.toSeconds(e);
              return sC(isFinite(i) && isFinite(n), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
              this._events.add({
                  time: n,
                  type: "exponentialRampToValueAtTime",
                  value: i
              }),
              this.log(this.units, "exponentialRampToValueAtTime", t, n),
              this._param.exponentialRampToValueAtTime(i, n),
              this
          }
          exponentialRampTo(t, e, i) {
              return i = this.toSeconds(i),
              this.setRampPoint(i),
              this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)),
              this
          }
          linearRampTo(t, e, i) {
              return i = this.toSeconds(i),
              this.setRampPoint(i),
              this.linearRampToValueAtTime(t, i + this.toSeconds(e)),
              this
          }
          targetRampTo(t, e, i) {
              return i = this.toSeconds(i),
              this.setRampPoint(i),
              this.exponentialApproachValueAtTime(t, i, e),
              this
          }
          exponentialApproachValueAtTime(t, e, i) {
              e = this.toSeconds(e);
              let n = Math.log((i = this.toSeconds(i)) + 1) / Math.log(200);
              return this.setTargetAtTime(t, e, n),
              this.cancelAndHoldAtTime(e + .9 * i),
              this.linearRampToValueAtTime(t, e + i),
              this
          }
          setTargetAtTime(t, e, i) {
              let n = this._fromType(t);
              sC(isFinite(i) && i > 0, "timeConstant must be a number greater than 0");
              let s = this.toSeconds(e);
              return this._assertRange(n),
              sC(isFinite(n) && isFinite(s), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),
              this._events.add({
                  constant: i,
                  time: s,
                  type: "setTargetAtTime",
                  value: n
              }),
              this.log(this.units, "setTargetAtTime", t, s, i),
              this._param.setTargetAtTime(n, s, i),
              this
          }
          setValueCurveAtTime(t, e, i, n=1) {
              i = this.toSeconds(i),
              e = this.toSeconds(e);
              let s = this._fromType(t[0]) * n;
              this.setValueAtTime(this._toType(s), e);
              let r = i / (t.length - 1);
              for (let i = 1; i < t.length; i++) {
                  let s = this._fromType(t[i]) * n;
                  this.linearRampToValueAtTime(this._toType(s), e + i * r)
              }
              return this
          }
          cancelScheduledValues(t) {
              let e = this.toSeconds(t);
              return sC(isFinite(e), `Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),
              this._events.cancel(e),
              this._param.cancelScheduledValues(e),
              this.log(this.units, "cancelScheduledValues", e),
              this
          }
          cancelAndHoldAtTime(t) {
              let e = this.toSeconds(t)
                , i = this._fromType(this.getValueAtTime(e));
              sC(isFinite(e), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),
              this.log(this.units, "cancelAndHoldAtTime", e, "value=" + i);
              let n = this._events.get(e)
                , s = this._events.getAfter(e);
              return n && sQ(n.time, e) ? s ? (this._param.cancelScheduledValues(s.time),
              this._events.cancel(s.time)) : (this._param.cancelAndHoldAtTime(e),
              this._events.cancel(e + this.sampleTime)) : s && (this._param.cancelScheduledValues(s.time),
              this._events.cancel(s.time),
              "linearRampToValueAtTime" === s.type ? this.linearRampToValueAtTime(this._toType(i), e) : "exponentialRampToValueAtTime" === s.type && this.exponentialRampToValueAtTime(this._toType(i), e)),
              this._events.add({
                  time: e,
                  type: "setValueAtTime",
                  value: i
              }),
              this._param.setValueAtTime(i, e),
              this
          }
          rampTo(t, e=.1, i) {
              return "frequency" === this.units || "bpm" === this.units || "decibels" === this.units ? this.exponentialRampTo(t, e, i) : this.linearRampTo(t, e, i),
              this
          }
          apply(t) {
              let e = this.context.currentTime;
              t.setValueAtTime(this.getValueAtTime(e), e);
              let i = this._events.get(e);
              if (i && "setTargetAtTime" === i.type) {
                  let n = this._events.getAfter(i.time)
                    , s = n ? n.time : e + 2
                    , r = (s - e) / 10;
                  for (let i = e; i < s; i += r)
                      t.linearRampToValueAtTime(this.getValueAtTime(i), i)
              }
              return this._events.forEachAfter(this.context.currentTime, e => {
                  "cancelScheduledValues" === e.type ? t.cancelScheduledValues(e.time) : "setTargetAtTime" === e.type ? t.setTargetAtTime(e.value, e.time, e.constant) : t[e.type](e.value, e.time)
              }
              ),
              this
          }
          setParam(t) {
              sC(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
              let e = this.input;
              return e.disconnect(this._param),
              this.apply(t),
              this._param = t,
              e.connect(this._param),
              this
          }
          dispose() {
              return super.dispose(),
              this._events.dispose(),
              this
          }
          get defaultValue() {
              return this._toType(this._param.defaultValue)
          }
          _exponentialApproach(t, e, i, n, s) {
              return i + (e - i) * Math.exp(-(s - t) / n)
          }
          _linearInterpolate(t, e, i, n, s) {
              return e + (s - t) / (i - t) * (n - e)
          }
          _exponentialInterpolate(t, e, i, n, s) {
              return e * Math.pow(n / e, (s - t) / (i - t))
          }
      }
      class rb extends r_ {
          constructor() {
              super(...arguments),
              this.name = "ToneAudioNode",
              this._internalChannels = []
          }
          get numberOfInputs() {
              return sR(this.input) ? sS(this.input) || this.input instanceof ry ? 1 : this.input.numberOfInputs : 0
          }
          get numberOfOutputs() {
              return sR(this.output) ? this.output.numberOfOutputs : 0
          }
          _isAudioNode(t) {
              return sR(t) && (t instanceof rb || sT(t))
          }
          _getInternalNodes() {
              let t = this._internalChannels.slice(0);
              return this._isAudioNode(this.input) && t.push(this.input),
              this._isAudioNode(this.output) && this.input !== this.output && t.push(this.output),
              t
          }
          _setChannelProperties(t) {
              this._getInternalNodes().forEach(e => {
                  e.channelCount = t.channelCount,
                  e.channelCountMode = t.channelCountMode,
                  e.channelInterpretation = t.channelInterpretation
              }
              )
          }
          _getChannelProperties() {
              let t = this._getInternalNodes();
              sC(t.length > 0, "ToneAudioNode does not have any internal nodes");
              let e = t[0];
              return {
                  channelCount: e.channelCount,
                  channelCountMode: e.channelCountMode,
                  channelInterpretation: e.channelInterpretation
              }
          }
          get channelCount() {
              return this._getChannelProperties().channelCount
          }
          set channelCount(t) {
              let e = this._getChannelProperties();
              this._setChannelProperties(Object.assign(e, {
                  channelCount: t
              }))
          }
          get channelCountMode() {
              return this._getChannelProperties().channelCountMode
          }
          set channelCountMode(t) {
              let e = this._getChannelProperties();
              this._setChannelProperties(Object.assign(e, {
                  channelCountMode: t
              }))
          }
          get channelInterpretation() {
              return this._getChannelProperties().channelInterpretation
          }
          set channelInterpretation(t) {
              let e = this._getChannelProperties();
              this._setChannelProperties(Object.assign(e, {
                  channelInterpretation: t
              }))
          }
          connect(t, e=0, i=0) {
              return rw(this, t, e, i),
              this
          }
          toDestination() {
              return this.connect(this.context.destination),
              this
          }
          toMaster() {
              return sE("toMaster() has been renamed toDestination()"),
              this.toDestination()
          }
          disconnect(t, e=0, i=0) {
              return function(t, e, i=0, n=0) {
                  if (sR(e))
                      for (; e instanceof rb; )
                          e = e.input;
                  for (; !sT(t); )
                      sR(t.output) && (t = t.output);
                  sS(e) ? t.disconnect(e, i) : sT(e) ? t.disconnect(e, i, n) : t.disconnect()
              }(this, t, e, i),
              this
          }
          chain(...t) {
              return rx(this, ...t),
              this
          }
          fan(...t) {
              return t.forEach(t => this.connect(t)),
              this
          }
          dispose() {
              return super.dispose(),
              sR(this.input) && (this.input instanceof rb ? this.input.dispose() : sT(this.input) && this.input.disconnect()),
              sR(this.output) && (this.output instanceof rb ? this.output.dispose() : sT(this.output) && this.output.disconnect()),
              this._internalChannels = [],
              this
          }
      }
      function rx(...t) {
          let e = t.shift();
          t.reduce( (t, e) => (t instanceof rb ? t.connect(e) : sT(t) && rw(t, e),
          e), e)
      }
      function rw(t, e, i=0, n=0) {
          for (sC(sR(t), "Cannot connect from undefined node"),
          sC(sR(e), "Cannot connect to undefined node"),
          (e instanceof rb || sT(e)) && sC(e.numberOfInputs > 0, "Cannot connect to node with no inputs"),
          sC(t.numberOfOutputs > 0, "Cannot connect from node with no outputs"); e instanceof rb || e instanceof ry; )
              sR(e.input) && (e = e.input);
          for (; t instanceof rb; )
              sR(t.output) && (t = t.output);
          sS(e) ? t.connect(e, i) : t.connect(e, i, n)
      }
      class rT extends rb {
          constructor() {
              super(sY(rT.getDefaults(), arguments, ["gain", "units"])),
              this.name = "Gain",
              this._gainNode = this.context.createGain(),
              this.input = this._gainNode,
              this.output = this._gainNode;
              let t = sY(rT.getDefaults(), arguments, ["gain", "units"]);
              this.gain = new ry({
                  context: this.context,
                  convert: t.convert,
                  param: this._gainNode.gain,
                  units: t.units,
                  value: t.gain,
                  minValue: t.minValue,
                  maxValue: t.maxValue
              }),
              s9(this, "gain")
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  convert: !0,
                  gain: 1,
                  units: "gain"
              })
          }
          dispose() {
              return super.dispose(),
              this._gainNode.disconnect(),
              this.gain.dispose(),
              this
          }
      }
      class rS extends rb {
          constructor(t) {
              super(t),
              this.onended = s7,
              this._startTime = -1,
              this._stopTime = -1,
              this._timeout = -1,
              this.output = new rT({
                  context: this.context,
                  gain: 0
              }),
              this._gainNode = this.output,
              this.getStateAtTime = function(t) {
                  let e = this.toSeconds(t);
                  return -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? "started" : "stopped"
              }
              ,
              this._fadeIn = t.fadeIn,
              this._fadeOut = t.fadeOut,
              this._curve = t.curve,
              this.onended = t.onended
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  curve: "linear",
                  fadeIn: 0,
                  fadeOut: 0,
                  onended: s7
              })
          }
          _startGain(t, e=1) {
              sC(-1 === this._startTime, "Source cannot be started more than once");
              let i = this.toSeconds(this._fadeIn);
              return this._startTime = t + i,
              this._startTime = Math.max(this._startTime, this.context.currentTime),
              i > 0 ? (this._gainNode.gain.setValueAtTime(0, t),
              "linear" === this._curve ? this._gainNode.gain.linearRampToValueAtTime(e, t + i) : this._gainNode.gain.exponentialApproachValueAtTime(e, t, i)) : this._gainNode.gain.setValueAtTime(e, t),
              this
          }
          stop(t) {
              return this.log("stop", t),
              this._stopGain(this.toSeconds(t)),
              this
          }
          _stopGain(t) {
              sC(-1 !== this._startTime, "'start' must be called before 'stop'"),
              this.cancelStop();
              let e = this.toSeconds(this._fadeOut);
              return this._stopTime = this.toSeconds(t) + e,
              this._stopTime = Math.max(this._stopTime, this.context.currentTime),
              e > 0 ? "linear" === this._curve ? this._gainNode.gain.linearRampTo(0, e, t) : this._gainNode.gain.targetRampTo(0, e, t) : (this._gainNode.gain.cancelAndHoldAtTime(t),
              this._gainNode.gain.setValueAtTime(0, t)),
              this.context.clearTimeout(this._timeout),
              this._timeout = this.context.setTimeout( () => {
                  let t = "exponential" === this._curve ? 2 * e : 0;
                  this._stopSource(this.now() + t),
                  this._onended()
              }
              , this._stopTime - this.context.currentTime),
              this
          }
          _onended() {
              if (this.onended !== s7 && (this.onended(this),
              this.onended = s7,
              !this.context.isOffline)) {
                  let t = () => this.dispose();
                  void 0 !== window.requestIdleCallback ? window.requestIdleCallback(t) : setTimeout(t, 1e3)
              }
          }
          get state() {
              return this.getStateAtTime(this.now())
          }
          cancelStop() {
              return this.log("cancelStop"),
              sC(-1 !== this._startTime, "Source is not started"),
              this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime),
              this.context.clearTimeout(this._timeout),
              this._stopTime = -1,
              this
          }
          dispose() {
              return super.dispose(),
              this._gainNode.disconnect(),
              this
          }
      }
      class rk extends rS {
          constructor() {
              super(sY(rk.getDefaults(), arguments, ["offset"])),
              this.name = "ToneConstantSource",
              this._source = this.context.createConstantSource();
              let t = sY(rk.getDefaults(), arguments, ["offset"]);
              rw(this._source, this._gainNode),
              this.offset = new ry({
                  context: this.context,
                  convert: t.convert,
                  param: this._source.offset,
                  units: t.units,
                  value: t.offset,
                  minValue: t.minValue,
                  maxValue: t.maxValue
              })
          }
          static getDefaults() {
              return Object.assign(rS.getDefaults(), {
                  convert: !0,
                  offset: 1,
                  units: "number"
              })
          }
          start(t) {
              let e = this.toSeconds(t);
              return this.log("start", e),
              this._startGain(e),
              this._source.start(e),
              this
          }
          _stopSource(t) {
              this._source.stop(t)
          }
          dispose() {
              return super.dispose(),
              "started" === this.state && this.stop(),
              this._source.disconnect(),
              this.offset.dispose(),
              this
          }
      }
      class rC extends rb {
          constructor() {
              super(sY(rC.getDefaults(), arguments, ["value", "units"])),
              this.name = "Signal",
              this.override = !0;
              let t = sY(rC.getDefaults(), arguments, ["value", "units"]);
              this.output = this._constantSource = new rk({
                  context: this.context,
                  convert: t.convert,
                  offset: t.value,
                  units: t.units,
                  minValue: t.minValue,
                  maxValue: t.maxValue
              }),
              this._constantSource.start(0),
              this.input = this._param = this._constantSource.offset
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  convert: !0,
                  units: "number",
                  value: 0
              })
          }
          connect(t, e=0, i=0) {
              return rA(this, t, e, i),
              this
          }
          dispose() {
              return super.dispose(),
              this._param.dispose(),
              this._constantSource.dispose(),
              this
          }
          setValueAtTime(t, e) {
              return this._param.setValueAtTime(t, e),
              this
          }
          getValueAtTime(t) {
              return this._param.getValueAtTime(t)
          }
          setRampPoint(t) {
              return this._param.setRampPoint(t),
              this
          }
          linearRampToValueAtTime(t, e) {
              return this._param.linearRampToValueAtTime(t, e),
              this
          }
          exponentialRampToValueAtTime(t, e) {
              return this._param.exponentialRampToValueAtTime(t, e),
              this
          }
          exponentialRampTo(t, e, i) {
              return this._param.exponentialRampTo(t, e, i),
              this
          }
          linearRampTo(t, e, i) {
              return this._param.linearRampTo(t, e, i),
              this
          }
          targetRampTo(t, e, i) {
              return this._param.targetRampTo(t, e, i),
              this
          }
          exponentialApproachValueAtTime(t, e, i) {
              return this._param.exponentialApproachValueAtTime(t, e, i),
              this
          }
          setTargetAtTime(t, e, i) {
              return this._param.setTargetAtTime(t, e, i),
              this
          }
          setValueCurveAtTime(t, e, i, n) {
              return this._param.setValueCurveAtTime(t, e, i, n),
              this
          }
          cancelScheduledValues(t) {
              return this._param.cancelScheduledValues(t),
              this
          }
          cancelAndHoldAtTime(t) {
              return this._param.cancelAndHoldAtTime(t),
              this
          }
          rampTo(t, e, i) {
              return this._param.rampTo(t, e, i),
              this
          }
          get value() {
              return this._param.value
          }
          set value(t) {
              this._param.value = t
          }
          get convert() {
              return this._param.convert
          }
          set convert(t) {
              this._param.convert = t
          }
          get units() {
              return this._param.units
          }
          get overridden() {
              return this._param.overridden
          }
          set overridden(t) {
              this._param.overridden = t
          }
          get maxValue() {
              return this._param.maxValue
          }
          get minValue() {
              return this._param.minValue
          }
          apply(t) {
              return this._param.apply(t),
              this
          }
      }
      function rA(t, e, i, n) {
          (e instanceof ry || sS(e) || e instanceof rC && e.override) && (e.cancelScheduledValues(0),
          e.setValueAtTime(0, 0),
          e instanceof rC && (e.overridden = !0)),
          rw(t, e, i, n)
      }
      class rO extends ry {
          constructor() {
              super(sY(rO.getDefaults(), arguments, ["value"])),
              this.name = "TickParam",
              this._events = new sK(1 / 0),
              this._multiplier = 1;
              let t = sY(rO.getDefaults(), arguments, ["value"]);
              this._multiplier = t.multiplier,
              this._events.cancel(0),
              this._events.add({
                  ticks: 0,
                  time: 0,
                  type: "setValueAtTime",
                  value: this._fromType(t.value)
              }),
              this.setValueAtTime(t.value, 0)
          }
          static getDefaults() {
              return Object.assign(ry.getDefaults(), {
                  multiplier: 1,
                  units: "hertz",
                  value: 1
              })
          }
          setTargetAtTime(t, e, i) {
              e = this.toSeconds(e),
              this.setRampPoint(e);
              let n = this._fromType(t)
                , s = this._events.get(e)
                , r = Math.round(Math.max(1 / i, 1));
              for (let t = 0; t <= r; t++) {
                  let r = i * t + e
                    , a = this._exponentialApproach(s.time, s.value, n, i, r);
                  this.linearRampToValueAtTime(this._toType(a), r)
              }
              return this
          }
          setValueAtTime(t, e) {
              let i = this.toSeconds(e);
              super.setValueAtTime(t, e);
              let n = this._events.get(i)
                , s = this._events.previousEvent(n)
                , r = this._getTicksUntilEvent(s, i);
              return n.ticks = Math.max(r, 0),
              this
          }
          linearRampToValueAtTime(t, e) {
              let i = this.toSeconds(e);
              super.linearRampToValueAtTime(t, e);
              let n = this._events.get(i)
                , s = this._events.previousEvent(n)
                , r = this._getTicksUntilEvent(s, i);
              return n.ticks = Math.max(r, 0),
              this
          }
          exponentialRampToValueAtTime(t, e) {
              e = this.toSeconds(e);
              let i = this._fromType(t)
                , n = this._events.get(e)
                , s = Math.round(Math.max((e - n.time) * 10, 1))
                , r = (e - n.time) / s;
              for (let t = 0; t <= s; t++) {
                  let s = r * t + n.time
                    , a = this._exponentialInterpolate(n.time, n.value, e, i, s);
                  this.linearRampToValueAtTime(this._toType(a), s)
              }
              return this
          }
          _getTicksUntilEvent(t, e) {
              if (null === t)
                  t = {
                      ticks: 0,
                      time: 0,
                      type: "setValueAtTime",
                      value: 0
                  };
              else if (sD(t.ticks)) {
                  let e = this._events.previousEvent(t);
                  t.ticks = this._getTicksUntilEvent(e, t.time)
              }
              let i = this._fromType(this.getValueAtTime(t.time))
                , n = this._fromType(this.getValueAtTime(e))
                , s = this._events.get(e);
              return s && s.time === e && "setValueAtTime" === s.type && (n = this._fromType(this.getValueAtTime(e - this.sampleTime))),
              .5 * (e - t.time) * (i + n) + t.ticks
          }
          getTicksAtTime(t) {
              let e = this.toSeconds(t)
                , i = this._events.get(e);
              return Math.max(this._getTicksUntilEvent(i, e), 0)
          }
          getDurationOfTicks(t, e) {
              let i = this.toSeconds(e)
                , n = this.getTicksAtTime(e);
              return this.getTimeOfTick(n + t) - i
          }
          getTimeOfTick(t) {
              let e = this._events.get(t, "ticks")
                , i = this._events.getAfter(t, "ticks");
              if (e && e.ticks === t)
                  return e.time;
              if (e && i && "linearRampToValueAtTime" === i.type && e.value !== i.value) {
                  let n = this._fromType(this.getValueAtTime(e.time))
                    , s = (this._fromType(this.getValueAtTime(i.time)) - n) / (i.time - e.time)
                    , r = Math.sqrt(Math.pow(n, 2) - 2 * s * (e.ticks - t))
                    , a = (-n + r) / s;
                  return (a > 0 ? a : (-n - r) / s) + e.time
              }
              return e ? 0 === e.value ? 1 / 0 : e.time + (t - e.ticks) / e.value : t / this._initialValue
          }
          ticksToTime(t, e) {
              return this.getDurationOfTicks(t, e)
          }
          timeToTicks(t, e) {
              let i = this.toSeconds(e)
                , n = this.toSeconds(t)
                , s = this.getTicksAtTime(i);
              return this.getTicksAtTime(i + n) - s
          }
          _fromType(t) {
              return "bpm" === this.units && this.multiplier ? 1 / (60 / t / this.multiplier) : super._fromType(t)
          }
          _toType(t) {
              return "bpm" === this.units && this.multiplier ? t / this.multiplier * 60 : super._toType(t)
          }
          get multiplier() {
              return this._multiplier
          }
          set multiplier(t) {
              let e = this.value;
              this._multiplier = t,
              this.cancelScheduledValues(0),
              this.setValueAtTime(e, 0)
          }
      }
      class rM extends rC {
          constructor() {
              super(sY(rM.getDefaults(), arguments, ["value"])),
              this.name = "TickSignal";
              let t = sY(rM.getDefaults(), arguments, ["value"]);
              this.input = this._param = new rO({
                  context: this.context,
                  convert: t.convert,
                  multiplier: t.multiplier,
                  param: this._constantSource.offset,
                  units: t.units,
                  value: t.value
              })
          }
          static getDefaults() {
              return Object.assign(rC.getDefaults(), {
                  multiplier: 1,
                  units: "hertz",
                  value: 1
              })
          }
          ticksToTime(t, e) {
              return this._param.ticksToTime(t, e)
          }
          timeToTicks(t, e) {
              return this._param.timeToTicks(t, e)
          }
          getTimeOfTick(t) {
              return this._param.getTimeOfTick(t)
          }
          getDurationOfTicks(t, e) {
              return this._param.getDurationOfTicks(t, e)
          }
          getTicksAtTime(t) {
              return this._param.getTicksAtTime(t)
          }
          get multiplier() {
              return this._param.multiplier
          }
          set multiplier(t) {
              this._param.multiplier = t
          }
          dispose() {
              return super.dispose(),
              this._param.dispose(),
              this
          }
      }
      class rE extends r_ {
          constructor() {
              super(sY(rE.getDefaults(), arguments, ["frequency"])),
              this.name = "TickSource",
              this._state = new rv,
              this._tickOffset = new sK;
              let t = sY(rE.getDefaults(), arguments, ["frequency"]);
              this.frequency = new rM({
                  context: this.context,
                  units: t.units,
                  value: t.frequency
              }),
              s9(this, "frequency"),
              this._state.setStateAtTime("stopped", 0),
              this.setTicksAtTime(0, 0)
          }
          static getDefaults() {
              return Object.assign({
                  frequency: 1,
                  units: "hertz"
              }, r_.getDefaults())
          }
          get state() {
              return this.getStateAtTime(this.now())
          }
          start(t, e) {
              let i = this.toSeconds(t);
              return "started" !== this._state.getValueAtTime(i) && (this._state.setStateAtTime("started", i),
              sR(e) && this.setTicksAtTime(e, i)),
              this
          }
          stop(t) {
              let e = this.toSeconds(t);
              if ("stopped" === this._state.getValueAtTime(e)) {
                  let t = this._state.get(e);
                  t && t.time > 0 && (this._tickOffset.cancel(t.time),
                  this._state.cancel(t.time))
              }
              return this._state.cancel(e),
              this._state.setStateAtTime("stopped", e),
              this.setTicksAtTime(0, e),
              this
          }
          pause(t) {
              let e = this.toSeconds(t);
              return "started" === this._state.getValueAtTime(e) && this._state.setStateAtTime("paused", e),
              this
          }
          cancel(t) {
              return t = this.toSeconds(t),
              this._state.cancel(t),
              this._tickOffset.cancel(t),
              this
          }
          getTicksAtTime(t) {
              let e = this.toSeconds(t)
                , i = this._state.getLastState("stopped", e)
                , n = {
                  state: "paused",
                  time: e
              };
              this._state.add(n);
              let s = i
                , r = 0;
              return this._state.forEachBetween(i.time, e + this.sampleTime, t => {
                  let e = s.time
                    , i = this._tickOffset.get(t.time);
                  i && i.time >= s.time && (r = i.ticks,
                  e = i.time),
                  "started" === s.state && "started" !== t.state && (r += this.frequency.getTicksAtTime(t.time) - this.frequency.getTicksAtTime(e)),
                  s = t
              }
              ),
              this._state.remove(n),
              r
          }
          get ticks() {
              return this.getTicksAtTime(this.now())
          }
          set ticks(t) {
              this.setTicksAtTime(t, this.now())
          }
          get seconds() {
              return this.getSecondsAtTime(this.now())
          }
          set seconds(t) {
              let e = this.now()
                , i = this.frequency.timeToTicks(t, e);
              this.setTicksAtTime(i, e)
          }
          getSecondsAtTime(t) {
              t = this.toSeconds(t);
              let e = this._state.getLastState("stopped", t)
                , i = {
                  state: "paused",
                  time: t
              };
              this._state.add(i);
              let n = e
                , s = 0;
              return this._state.forEachBetween(e.time, t + this.sampleTime, t => {
                  let e = n.time
                    , i = this._tickOffset.get(t.time);
                  i && i.time >= n.time && (s = i.seconds,
                  e = i.time),
                  "started" === n.state && "started" !== t.state && (s += t.time - e),
                  n = t
              }
              ),
              this._state.remove(i),
              s
          }
          setTicksAtTime(t, e) {
              return e = this.toSeconds(e),
              this._tickOffset.cancel(e),
              this._tickOffset.add({
                  seconds: this.frequency.getDurationOfTicks(t, e),
                  ticks: t,
                  time: e
              }),
              this
          }
          getStateAtTime(t) {
              return t = this.toSeconds(t),
              this._state.getValueAtTime(t)
          }
          getTimeOfTick(t, e=this.now()) {
              let i = this._tickOffset.get(e)
                , n = this._state.get(e)
                , s = Math.max(i.time, n.time)
                , r = this.frequency.getTicksAtTime(s) + t - i.ticks;
              return this.frequency.getTimeOfTick(r)
          }
          forEachTickBetween(t, e, i) {
              let n = this._state.get(t);
              this._state.forEachBetween(t, e, e => {
                  n && "started" === n.state && "started" !== e.state && this.forEachTickBetween(Math.max(n.time, t), e.time - this.sampleTime, i),
                  n = e
              }
              );
              let s = null;
              if (n && "started" === n.state) {
                  let r = Math.max(n.time, t)
                    , a = this.frequency.getTicksAtTime(r)
                    , o = a - this.frequency.getTicksAtTime(n.time)
                    , l = Math.ceil(o) - o;
                  l = sQ(l, 1) ? 0 : l;
                  let u = this.frequency.getTimeOfTick(a + l);
                  for (; u < e; ) {
                      try {
                          i(u, Math.round(this.getTicksAtTime(u)))
                      } catch (t) {
                          s = t;
                          break
                      }
                      u += this.frequency.getDurationOfTicks(1, u)
                  }
              }
              if (s)
                  throw s;
              return this
          }
          dispose() {
              return super.dispose(),
              this._state.dispose(),
              this._tickOffset.dispose(),
              this.frequency.dispose(),
              this
          }
      }
      class rD extends r_ {
          constructor() {
              super(sY(rD.getDefaults(), arguments, ["callback", "frequency"])),
              this.name = "Clock",
              this.callback = s7,
              this._lastUpdate = 0,
              this._state = new rv("stopped"),
              this._boundLoop = this._loop.bind(this);
              let t = sY(rD.getDefaults(), arguments, ["callback", "frequency"]);
              this.callback = t.callback,
              this._tickSource = new rE({
                  context: this.context,
                  frequency: t.frequency,
                  units: t.units
              }),
              this._lastUpdate = 0,
              this.frequency = this._tickSource.frequency,
              s9(this, "frequency"),
              this._state.setStateAtTime("stopped", 0),
              this.context.on("tick", this._boundLoop)
          }
          static getDefaults() {
              return Object.assign(r_.getDefaults(), {
                  callback: s7,
                  frequency: 1,
                  units: "hertz"
              })
          }
          get state() {
              return this._state.getValueAtTime(this.now())
          }
          start(t, e) {
              sO(this.context);
              let i = this.toSeconds(t);
              return this.log("start", i),
              "started" !== this._state.getValueAtTime(i) && (this._state.setStateAtTime("started", i),
              this._tickSource.start(i, e),
              i < this._lastUpdate && this.emit("start", i, e)),
              this
          }
          stop(t) {
              let e = this.toSeconds(t);
              return this.log("stop", e),
              this._state.cancel(e),
              this._state.setStateAtTime("stopped", e),
              this._tickSource.stop(e),
              e < this._lastUpdate && this.emit("stop", e),
              this
          }
          pause(t) {
              let e = this.toSeconds(t);
              return "started" === this._state.getValueAtTime(e) && (this._state.setStateAtTime("paused", e),
              this._tickSource.pause(e),
              e < this._lastUpdate && this.emit("pause", e)),
              this
          }
          get ticks() {
              return Math.ceil(this.getTicksAtTime(this.now()))
          }
          set ticks(t) {
              this._tickSource.ticks = t
          }
          get seconds() {
              return this._tickSource.seconds
          }
          set seconds(t) {
              this._tickSource.seconds = t
          }
          getSecondsAtTime(t) {
              return this._tickSource.getSecondsAtTime(t)
          }
          setTicksAtTime(t, e) {
              return this._tickSource.setTicksAtTime(t, e),
              this
          }
          getTimeOfTick(t, e=this.now()) {
              return this._tickSource.getTimeOfTick(t, e)
          }
          getTicksAtTime(t) {
              return this._tickSource.getTicksAtTime(t)
          }
          nextTickTime(t, e) {
              let i = this.toSeconds(e)
                , n = this.getTicksAtTime(i);
              return this._tickSource.getTimeOfTick(n + t, i)
          }
          _loop() {
              let t = this._lastUpdate
                , e = this.now();
              this._lastUpdate = e,
              this.log("loop", t, e),
              t !== e && (this._state.forEachBetween(t, e, t => {
                  switch (t.state) {
                  case "started":
                      let e = this._tickSource.getTicksAtTime(t.time);
                      this.emit("start", t.time, e);
                      break;
                  case "stopped":
                      0 !== t.time && this.emit("stop", t.time);
                      break;
                  case "paused":
                      this.emit("pause", t.time)
                  }
              }
              ),
              this._tickSource.forEachTickBetween(t, e, (t, e) => {
                  this.callback(t, e)
              }
              ))
          }
          getStateAtTime(t) {
              let e = this.toSeconds(t);
              return this._state.getValueAtTime(e)
          }
          dispose() {
              return super.dispose(),
              this.context.off("tick", this._boundLoop),
              this._tickSource.dispose(),
              this._state.dispose(),
              this
          }
      }
      s8.mixin(rD);
      class rR extends rb {
          constructor() {
              super(sY(rR.getDefaults(), arguments, ["delayTime", "maxDelay"])),
              this.name = "Delay";
              let t = sY(rR.getDefaults(), arguments, ["delayTime", "maxDelay"])
                , e = this.toSeconds(t.maxDelay);
              this._maxDelay = Math.max(e, this.toSeconds(t.delayTime)),
              this._delayNode = this.input = this.output = this.context.createDelay(e),
              this.delayTime = new ry({
                  context: this.context,
                  param: this._delayNode.delayTime,
                  units: "time",
                  value: t.delayTime,
                  minValue: 0,
                  maxValue: this.maxDelay
              }),
              s9(this, "delayTime")
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  delayTime: 0,
                  maxDelay: 1
              })
          }
          get maxDelay() {
              return this._maxDelay
          }
          dispose() {
              return super.dispose(),
              this._delayNode.disconnect(),
              this.delayTime.dispose(),
              this
          }
      }
      class rI extends sX {
          constructor() {
              super(),
              this.name = "ToneAudioBuffers",
              this._buffers = new Map,
              this._loadingCount = 0;
              let t = sY(rI.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
              this.baseUrl = t.baseUrl,
              Object.keys(t.urls).forEach(e => {
                  this._loadingCount++;
                  let i = t.urls[e];
                  this.add(e, i, this._bufferLoaded.bind(this, t.onload), t.onerror)
              }
              )
          }
          static getDefaults() {
              return {
                  baseUrl: "",
                  onerror: s7,
                  onload: s7,
                  urls: {}
              }
          }
          has(t) {
              return this._buffers.has(t.toString())
          }
          get(t) {
              return sC(this.has(t), `ToneAudioBuffers has no buffer named: ${t}`),
              this._buffers.get(t.toString())
          }
          _bufferLoaded(t) {
              this._loadingCount--,
              0 === this._loadingCount && t && t()
          }
          get loaded() {
              return Array.from(this._buffers).every( ([t,e]) => e.loaded)
          }
          add(t, e, i=s7, n=s7) {
              return sN(e) ? this._buffers.set(t.toString(), new rt(this.baseUrl + e,i,n)) : this._buffers.set(t.toString(), new rt(e,i,n)),
              this
          }
          dispose() {
              return super.dispose(),
              this._buffers.forEach(t => t.dispose()),
              this._buffers.clear(),
              this
          }
      }
      class rP extends rp {
          constructor() {
              super(...arguments),
              this.name = "MidiClass",
              this.defaultUnits = "midi"
          }
          _frequencyToUnits(t) {
              return rl(super._frequencyToUnits(t))
          }
          _ticksToUnits(t) {
              return rl(super._ticksToUnits(t))
          }
          _beatsToUnits(t) {
              return rl(super._beatsToUnits(t))
          }
          _secondsToUnits(t) {
              return rl(super._secondsToUnits(t))
          }
          toMidi() {
              return this.valueOf()
          }
          toFrequency() {
              return rc(this.toMidi())
          }
          transpose(t) {
              return new rP(this.context,this.toMidi() + t)
          }
      }
      class rV extends rg {
          constructor() {
              super(...arguments),
              this.name = "Ticks",
              this.defaultUnits = "i"
          }
          _now() {
              return this.context.transport.ticks
          }
          _beatsToUnits(t) {
              return this._getPPQ() * t
          }
          _secondsToUnits(t) {
              return Math.floor(t / (60 / this._getBpm()) * this._getPPQ())
          }
          _ticksToUnits(t) {
              return t
          }
          toTicks() {
              return this.valueOf()
          }
          toSeconds() {
              return this.valueOf() / this._getPPQ() * (60 / this._getBpm())
          }
      }
      class rj extends r_ {
          constructor() {
              super(...arguments),
              this.name = "Draw",
              this.expiration = .25,
              this.anticipation = .008,
              this._events = new sK,
              this._boundDrawLoop = this._drawLoop.bind(this),
              this._animationFrame = -1
          }
          schedule(t, e) {
              return this._events.add({
                  callback: t,
                  time: this.toSeconds(e)
              }),
              1 === this._events.length && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop)),
              this
          }
          cancel(t) {
              return this._events.cancel(this.toSeconds(t)),
              this
          }
          _drawLoop() {
              let t = this.context.currentTime;
              for (; this._events.length && this._events.peek().time - this.anticipation <= t; ) {
                  let e = this._events.shift();
                  e && t - e.time <= this.expiration && e.callback()
              }
              this._events.length > 0 && (this._animationFrame = requestAnimationFrame(this._boundDrawLoop))
          }
          dispose() {
              return super.dispose(),
              this._events.dispose(),
              cancelAnimationFrame(this._animationFrame),
              this
          }
      }
      s1(t => {
          t.draw = new rj({
              context: t
          })
      }
      ),
      s3(t => {
          t.draw.dispose()
      }
      );
      class rN extends sX {
          constructor() {
              super(...arguments),
              this.name = "IntervalTimeline",
              this._root = null,
              this._length = 0
          }
          add(t) {
              sC(sR(t.time), "Events must have a time property"),
              sC(sR(t.duration), "Events must have a duration parameter"),
              t.time = t.time.valueOf();
              let e = new rF(t.time,t.time + t.duration,t);
              for (null === this._root ? this._root = e : this._root.insert(e),
              this._length++; null !== e; )
                  e.updateHeight(),
                  e.updateMax(),
                  this._rebalance(e),
                  e = e.parent;
              return this
          }
          remove(t) {
              if (null !== this._root) {
                  let e = [];
                  for (let i of (this._root.search(t.time, e),
                  e))
                      if (i.event === t) {
                          this._removeNode(i),
                          this._length--;
                          break
                      }
              }
              return this
          }
          get length() {
              return this._length
          }
          cancel(t) {
              return this.forEachFrom(t, t => this.remove(t)),
              this
          }
          _setRoot(t) {
              this._root = t,
              null !== this._root && (this._root.parent = null)
          }
          _replaceNodeInParent(t, e) {
              null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e,
              this._rebalance(t.parent)) : this._setRoot(e)
          }
          _removeNode(t) {
              if (null === t.left && null === t.right)
                  this._replaceNodeInParent(t, null);
              else if (null === t.right)
                  this._replaceNodeInParent(t, t.left);
              else if (null === t.left)
                  this._replaceNodeInParent(t, t.right);
              else {
                  let e;
                  let i = t.getBalance()
                    , n = null;
                  if (i > 0) {
                      if (null === t.left.right)
                          (e = t.left).right = t.right,
                          n = e;
                      else {
                          for (e = t.left.right; null !== e.right; )
                              e = e.right;
                          e.parent && (e.parent.right = e.left,
                          n = e.parent,
                          e.left = t.left,
                          e.right = t.right)
                      }
                  } else if (null === t.right.left)
                      (e = t.right).left = t.left,
                      n = e;
                  else {
                      for (e = t.right.left; null !== e.left; )
                          e = e.left;
                      e.parent && (e.parent.left = e.right,
                      n = e.parent,
                      e.left = t.left,
                      e.right = t.right)
                  }
                  null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e),
                  n && this._rebalance(n)
              }
              t.dispose()
          }
          _rotateLeft(t) {
              let e = t.parent
                , i = t.isLeftChild()
                , n = t.right;
              n && (t.right = n.left,
              n.left = t),
              null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
          }
          _rotateRight(t) {
              let e = t.parent
                , i = t.isLeftChild()
                , n = t.left;
              n && (t.left = n.right,
              n.right = t),
              null !== e ? i ? e.left = n : e.right = n : this._setRoot(n)
          }
          _rebalance(t) {
              let e = t.getBalance();
              e > 1 && t.left ? 0 > t.left.getBalance() ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && t.right && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t))
          }
          get(t) {
              if (null !== this._root) {
                  let e = [];
                  if (this._root.search(t, e),
                  e.length > 0) {
                      let t = e[0];
                      for (let i = 1; i < e.length; i++)
                          e[i].low > t.low && (t = e[i]);
                      return t.event
                  }
              }
              return null
          }
          forEach(t) {
              if (null !== this._root) {
                  let e = [];
                  this._root.traverse(t => e.push(t)),
                  e.forEach(e => {
                      e.event && t(e.event)
                  }
                  )
              }
              return this
          }
          forEachAtTime(t, e) {
              if (null !== this._root) {
                  let i = [];
                  this._root.search(t, i),
                  i.forEach(t => {
                      t.event && e(t.event)
                  }
                  )
              }
              return this
          }
          forEachFrom(t, e) {
              if (null !== this._root) {
                  let i = [];
                  this._root.searchAfter(t, i),
                  i.forEach(t => {
                      t.event && e(t.event)
                  }
                  )
              }
              return this
          }
          dispose() {
              return super.dispose(),
              null !== this._root && this._root.traverse(t => t.dispose()),
              this._root = null,
              this
          }
      }
      class rF {
          constructor(t, e, i) {
              this._left = null,
              this._right = null,
              this.parent = null,
              this.height = 0,
              this.event = i,
              this.low = t,
              this.high = e,
              this.max = this.high
          }
          insert(t) {
              t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t)
          }
          search(t, e) {
              !(t > this.max) && (null !== this.left && this.left.search(t, e),
              this.low <= t && this.high > t && e.push(this),
              this.low > t || null === this.right || this.right.search(t, e))
          }
          searchAfter(t, e) {
              this.low >= t && (e.push(this),
              null !== this.left && this.left.searchAfter(t, e)),
              null !== this.right && this.right.searchAfter(t, e)
          }
          traverse(t) {
              t(this),
              null !== this.left && this.left.traverse(t),
              null !== this.right && this.right.traverse(t)
          }
          updateHeight() {
              null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0
          }
          updateMax() {
              this.max = this.high,
              null !== this.left && (this.max = Math.max(this.max, this.left.max)),
              null !== this.right && (this.max = Math.max(this.max, this.right.max))
          }
          getBalance() {
              let t = 0;
              return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)),
              t
          }
          isLeftChild() {
              return null !== this.parent && this.parent.left === this
          }
          get left() {
              return this._left
          }
          set left(t) {
              this._left = t,
              null !== t && (t.parent = this),
              this.updateHeight(),
              this.updateMax()
          }
          get right() {
              return this._right
          }
          set right(t) {
              this._right = t,
              null !== t && (t.parent = this),
              this.updateHeight(),
              this.updateMax()
          }
          dispose() {
              this.parent = null,
              this._left = null,
              this._right = null,
              this.event = null
          }
      }
      class rz extends rb {
          constructor() {
              super(sY(rz.getDefaults(), arguments, ["volume"])),
              this.name = "Volume";
              let t = sY(rz.getDefaults(), arguments, ["volume"]);
              this.input = this.output = new rT({
                  context: this.context,
                  gain: t.volume,
                  units: "decibels"
              }),
              this.volume = this.output.gain,
              s9(this, "volume"),
              this._unmutedVolume = t.volume,
              this.mute = t.mute
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  mute: !1,
                  volume: 0
              })
          }
          get mute() {
              return this.volume.value === -1 / 0
          }
          set mute(t) {
              !this.mute && t ? (this._unmutedVolume = this.volume.value,
              this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
          }
          dispose() {
              return super.dispose(),
              this.input.dispose(),
              this.volume.dispose(),
              this
          }
      }
      class rq extends rb {
          constructor() {
              super(sY(rq.getDefaults(), arguments)),
              this.name = "Destination",
              this.input = new rz({
                  context: this.context
              }),
              this.output = new rT({
                  context: this.context
              }),
              this.volume = this.input.volume;
              let t = sY(rq.getDefaults(), arguments);
              rx(this.input, this.output, this.context.rawContext.destination),
              this.mute = t.mute,
              this._internalChannels = [this.input, this.context.rawContext.destination, this.output]
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  mute: !1,
                  volume: 0
              })
          }
          get mute() {
              return this.input.mute
          }
          set mute(t) {
              this.input.mute = t
          }
          chain(...t) {
              return this.input.disconnect(),
              t.unshift(this.input),
              t.push(this.output),
              rx(...t),
              this
          }
          get maxChannelCount() {
              return this.context.rawContext.destination.maxChannelCount
          }
          dispose() {
              return super.dispose(),
              this.volume.dispose(),
              this
          }
      }
      s1(t => {
          t.destination = new rq({
              context: t
          })
      }
      ),
      s3(t => {
          t.destination.dispose()
      }
      );
      class rB extends sX {
          constructor(t) {
              super(),
              this.name = "TimelineValue",
              this._timeline = new sK({
                  memory: 10
              }),
              this._initialValue = t
          }
          set(t, e) {
              return this._timeline.add({
                  value: t,
                  time: e
              }),
              this
          }
          get(t) {
              let e = this._timeline.get(t);
              return e ? e.value : this._initialValue
          }
      }
      class rL {
          constructor(t, e) {
              this.id = rL._eventId++;
              let i = Object.assign(rL.getDefaults(), e);
              this.transport = t,
              this.callback = i.callback,
              this._once = i.once,
              this.time = i.time
          }
          static getDefaults() {
              return {
                  callback: s7,
                  once: !1,
                  time: 0
              }
          }
          invoke(t) {
              this.callback && (this.callback(t),
              this._once && this.transport.clear(this.id))
          }
          dispose() {
              return this.callback = void 0,
              this
          }
      }
      rL._eventId = 0;
      class rW extends rL {
          constructor(t, e) {
              super(t, e),
              this._currentId = -1,
              this._nextId = -1,
              this._nextTick = this.time,
              this._boundRestart = this._restart.bind(this);
              let i = Object.assign(rW.getDefaults(), e);
              this.duration = new rV(t.context,i.duration).valueOf(),
              this._interval = new rV(t.context,i.interval).valueOf(),
              this._nextTick = i.time,
              this.transport.on("start", this._boundRestart),
              this.transport.on("loopStart", this._boundRestart),
              this.context = this.transport.context,
              this._restart()
          }
          static getDefaults() {
              return Object.assign({}, rL.getDefaults(), {
                  duration: 1 / 0,
                  interval: 1,
                  once: !1
              })
          }
          invoke(t) {
              this._createEvents(t),
              super.invoke(t)
          }
          _createEvents(t) {
              let e = this.transport.getTicksAtTime(t);
              e >= this.time && e >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval,
              this._currentId = this._nextId,
              this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new rV(this.context,this._nextTick).toSeconds()))
          }
          _restart(t) {
              this.transport.clear(this._currentId),
              this.transport.clear(this._nextId),
              this._nextTick = this.time;
              let e = this.transport.getTicksAtTime(t);
              e > this.time && (this._nextTick = this.time + Math.ceil((e - this.time) / this._interval) * this._interval),
              this._currentId = this.transport.scheduleOnce(this.invoke.bind(this), new rV(this.context,this._nextTick).toSeconds()),
              this._nextTick += this._interval,
              this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new rV(this.context,this._nextTick).toSeconds())
          }
          dispose() {
              return super.dispose(),
              this.transport.clear(this._currentId),
              this.transport.clear(this._nextId),
              this.transport.off("start", this._boundRestart),
              this.transport.off("loopStart", this._boundRestart),
              this
          }
      }
      class rU extends r_ {
          constructor() {
              super(sY(rU.getDefaults(), arguments)),
              this.name = "Transport",
              this._loop = new rB(!1),
              this._loopStart = 0,
              this._loopEnd = 0,
              this._scheduledEvents = {},
              this._timeline = new sK,
              this._repeatedEvents = new rN,
              this._syncedSignals = [],
              this._swingAmount = 0;
              let t = sY(rU.getDefaults(), arguments);
              this._ppq = t.ppq,
              this._clock = new rD({
                  callback: this._processTick.bind(this),
                  context: this.context,
                  frequency: 0,
                  units: "bpm"
              }),
              this._bindClockEvents(),
              this.bpm = this._clock.frequency,
              this._clock.frequency.multiplier = t.ppq,
              this.bpm.setValueAtTime(t.bpm, 0),
              s9(this, "bpm"),
              this._timeSignature = t.timeSignature,
              this._swingTicks = t.ppq / 2
          }
          static getDefaults() {
              return Object.assign(r_.getDefaults(), {
                  bpm: 120,
                  loopEnd: "4m",
                  loopStart: 0,
                  ppq: 192,
                  swing: 0,
                  swingSubdivision: "8n",
                  timeSignature: 4
              })
          }
          _processTick(t, e) {
              if (this._loop.get(t) && e >= this._loopEnd && (this.emit("loopEnd", t),
              this._clock.setTicksAtTime(this._loopStart, t),
              e = this._loopStart,
              this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
              this.emit("loop", t)),
              this._swingAmount > 0 && e % this._ppq != 0 && e % (2 * this._swingTicks) != 0) {
                  let i = Math.sin(e % (2 * this._swingTicks) / (2 * this._swingTicks) * Math.PI) * this._swingAmount;
                  t += new rV(this.context,2 * this._swingTicks / 3).toSeconds() * i
              }
              this._timeline.forEachAtTime(e, e => e.invoke(t))
          }
          schedule(t, e) {
              let i = new rL(this,{
                  callback: t,
                  time: new rg(this.context,e).toTicks()
              });
              return this._addEvent(i, this._timeline)
          }
          scheduleRepeat(t, e, i, n=1 / 0) {
              let s = new rW(this,{
                  callback: t,
                  duration: new rd(this.context,n).toTicks(),
                  interval: new rd(this.context,e).toTicks(),
                  time: new rg(this.context,i).toTicks()
              });
              return this._addEvent(s, this._repeatedEvents)
          }
          scheduleOnce(t, e) {
              let i = new rL(this,{
                  callback: t,
                  once: !0,
                  time: new rg(this.context,e).toTicks()
              });
              return this._addEvent(i, this._timeline)
          }
          clear(t) {
              if (this._scheduledEvents.hasOwnProperty(t)) {
                  let e = this._scheduledEvents[t.toString()];
                  e.timeline.remove(e.event),
                  e.event.dispose(),
                  delete this._scheduledEvents[t.toString()]
              }
              return this
          }
          _addEvent(t, e) {
              return this._scheduledEvents[t.id.toString()] = {
                  event: t,
                  timeline: e
              },
              e.add(t),
              t.id
          }
          cancel(t=0) {
              let e = this.toTicks(t);
              return this._timeline.forEachFrom(e, t => this.clear(t.id)),
              this._repeatedEvents.forEachFrom(e, t => this.clear(t.id)),
              this
          }
          _bindClockEvents() {
              this._clock.on("start", (t, e) => {
                  e = new rV(this.context,e).toSeconds(),
                  this.emit("start", t, e)
              }
              ),
              this._clock.on("stop", t => {
                  this.emit("stop", t)
              }
              ),
              this._clock.on("pause", t => {
                  this.emit("pause", t)
              }
              )
          }
          get state() {
              return this._clock.getStateAtTime(this.now())
          }
          start(t, e) {
              let i;
              return sR(e) && (i = this.toTicks(e)),
              this._clock.start(t, i),
              this
          }
          stop(t) {
              return this._clock.stop(t),
              this
          }
          pause(t) {
              return this._clock.pause(t),
              this
          }
          toggle(t) {
              return t = this.toSeconds(t),
              "started" !== this._clock.getStateAtTime(t) ? this.start(t) : this.stop(t),
              this
          }
          get timeSignature() {
              return this._timeSignature
          }
          set timeSignature(t) {
              sj(t) && (t = t[0] / t[1] * 4),
              this._timeSignature = t
          }
          get loopStart() {
              return new rd(this.context,this._loopStart,"i").toSeconds()
          }
          set loopStart(t) {
              this._loopStart = this.toTicks(t)
          }
          get loopEnd() {
              return new rd(this.context,this._loopEnd,"i").toSeconds()
          }
          set loopEnd(t) {
              this._loopEnd = this.toTicks(t)
          }
          get loop() {
              return this._loop.get(this.now())
          }
          set loop(t) {
              this._loop.set(t, this.now())
          }
          setLoopPoints(t, e) {
              return this.loopStart = t,
              this.loopEnd = e,
              this
          }
          get swing() {
              return this._swingAmount
          }
          set swing(t) {
              this._swingAmount = t
          }
          get swingSubdivision() {
              return new rV(this.context,this._swingTicks).toNotation()
          }
          set swingSubdivision(t) {
              this._swingTicks = this.toTicks(t)
          }
          get position() {
              let t = this.now()
                , e = this._clock.getTicksAtTime(t);
              return new rV(this.context,e).toBarsBeatsSixteenths()
          }
          set position(t) {
              let e = this.toTicks(t);
              this.ticks = e
          }
          get seconds() {
              return this._clock.seconds
          }
          set seconds(t) {
              let e = this.now()
                , i = this._clock.frequency.timeToTicks(t, e);
              this.ticks = i
          }
          get progress() {
              if (!this.loop)
                  return 0;
              {
                  let t = this.now();
                  return (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)
              }
          }
          get ticks() {
              return this._clock.ticks
          }
          set ticks(t) {
              if (this._clock.ticks !== t) {
                  let e = this.now();
                  if ("started" === this.state) {
                      let i = this._clock.getTicksAtTime(e)
                        , n = this._clock.frequency.getDurationOfTicks(Math.ceil(i) - i, e)
                        , s = e + n;
                      this.emit("stop", s),
                      this._clock.setTicksAtTime(t, s),
                      this.emit("start", s, this._clock.getSecondsAtTime(s))
                  } else
                      this._clock.setTicksAtTime(t, e)
              }
          }
          getTicksAtTime(t) {
              return Math.round(this._clock.getTicksAtTime(t))
          }
          getSecondsAtTime(t) {
              return this._clock.getSecondsAtTime(t)
          }
          get PPQ() {
              return this._clock.frequency.multiplier
          }
          set PPQ(t) {
              this._clock.frequency.multiplier = t
          }
          nextSubdivision(t) {
              if (t = this.toTicks(t),
              "started" !== this.state)
                  return 0;
              {
                  let e = this.now()
                    , i = this.getTicksAtTime(e)
                    , n = t - i % t;
                  return this._clock.nextTickTime(n, e)
              }
          }
          syncSignal(t, e) {
              if (!e) {
                  let i = this.now();
                  if (0 !== t.getValueAtTime(i)) {
                      let n = 1 / (60 / this.bpm.getValueAtTime(i) / this.PPQ);
                      e = t.getValueAtTime(i) / n
                  } else
                      e = 0
              }
              let i = new rT(e);
              return this.bpm.connect(i),
              i.connect(t._param),
              this._syncedSignals.push({
                  initial: t.value,
                  ratio: i,
                  signal: t
              }),
              t.value = 0,
              this
          }
          unsyncSignal(t) {
              for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
                  let i = this._syncedSignals[e];
                  i.signal === t && (i.ratio.dispose(),
                  i.signal.value = i.initial,
                  this._syncedSignals.splice(e, 1))
              }
              return this
          }
          dispose() {
              return super.dispose(),
              this._clock.dispose(),
              !function t(e, i) {
                  sj(i) ? i.forEach(i => t(e, i)) : Object.defineProperty(e, i, {
                      writable: !0
                  })
              }(this, "bpm"),
              this._timeline.dispose(),
              this._repeatedEvents.dispose(),
              this
          }
      }
      s8.mixin(rU),
      s1(t => {
          t.transport = new rU({
              context: t
          })
      }
      ),
      s3(t => {
          t.transport.dispose()
      }
      );
      class rY extends rb {
          constructor(t) {
              super(t),
              this.input = void 0,
              this._state = new rv("stopped"),
              this._synced = !1,
              this._scheduled = [],
              this._syncedStart = s7,
              this._syncedStop = s7,
              this._state.memory = 100,
              this._state.increasing = !0,
              this._volume = this.output = new rz({
                  context: this.context,
                  mute: t.mute,
                  volume: t.volume
              }),
              this.volume = this._volume.volume,
              s9(this, "volume"),
              this.onstop = t.onstop
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  mute: !1,
                  onstop: s7,
                  volume: 0
              })
          }
          get state() {
              return this._synced ? "started" === this.context.transport.state ? this._state.getValueAtTime(this.context.transport.seconds) : "stopped" : this._state.getValueAtTime(this.now())
          }
          get mute() {
              return this._volume.mute
          }
          set mute(t) {
              this._volume.mute = t
          }
          _clampToCurrentTime(t) {
              return this._synced ? t : Math.max(t, this.context.currentTime)
          }
          start(t, e, i) {
              let n = sD(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
              if (n = this._clampToCurrentTime(n),
              this._synced || "started" !== this._state.getValueAtTime(n)) {
                  if (this.log("start", n),
                  this._state.setStateAtTime("started", n),
                  this._synced) {
                      let t = this._state.get(n);
                      t && (t.offset = this.toSeconds(sG(e, 0)),
                      t.duration = i ? this.toSeconds(i) : void 0);
                      let s = this.context.transport.schedule(t => {
                          this._start(t, e, i)
                      }
                      , n);
                      this._scheduled.push(s),
                      "started" === this.context.transport.state && this.context.transport.getSecondsAtTime(this.immediate()) > n && this._syncedStart(this.now(), this.context.transport.seconds)
                  } else
                      sO(this.context),
                      this._start(n, e, i)
              } else
                  sC(sZ(n, this._state.get(n).time), "Start time must be strictly greater than previous start time"),
                  this._state.cancel(n),
                  this._state.setStateAtTime("started", n),
                  this.log("restart", n),
                  this.restart(n, e, i);
              return this
          }
          stop(t) {
              let e = sD(t) && this._synced ? this.context.transport.seconds : this.toSeconds(t);
              if (e = this._clampToCurrentTime(e),
              "started" === this._state.getValueAtTime(e) || sR(this._state.getNextState("started", e))) {
                  if (this.log("stop", e),
                  this._synced) {
                      let t = this.context.transport.schedule(this._stop.bind(this), e);
                      this._scheduled.push(t)
                  } else
                      this._stop(e);
                  this._state.cancel(e),
                  this._state.setStateAtTime("stopped", e)
              }
              return this
          }
          restart(t, e, i) {
              return t = this.toSeconds(t),
              "started" === this._state.getValueAtTime(t) && (this._state.cancel(t),
              this._restart(t, e, i)),
              this
          }
          sync() {
              return this._synced || (this._synced = !0,
              this._syncedStart = (t, e) => {
                  if (e > 0) {
                      let i = this._state.get(e);
                      if (i && "started" === i.state && i.time !== e) {
                          let n;
                          let s = e - this.toSeconds(i.time);
                          i.duration && (n = this.toSeconds(i.duration) - s),
                          this._start(t, this.toSeconds(i.offset) + s, n)
                      }
                  }
              }
              ,
              this._syncedStop = t => {
                  let e = this.context.transport.getSecondsAtTime(Math.max(t - this.sampleTime, 0));
                  "started" === this._state.getValueAtTime(e) && this._stop(t)
              }
              ,
              this.context.transport.on("start", this._syncedStart),
              this.context.transport.on("loopStart", this._syncedStart),
              this.context.transport.on("stop", this._syncedStop),
              this.context.transport.on("pause", this._syncedStop),
              this.context.transport.on("loopEnd", this._syncedStop)),
              this
          }
          unsync() {
              return this._synced && (this.context.transport.off("stop", this._syncedStop),
              this.context.transport.off("pause", this._syncedStop),
              this.context.transport.off("loopEnd", this._syncedStop),
              this.context.transport.off("start", this._syncedStart),
              this.context.transport.off("loopStart", this._syncedStart)),
              this._synced = !1,
              this._scheduled.forEach(t => this.context.transport.clear(t)),
              this._scheduled = [],
              this._state.cancel(0),
              this._stop(0),
              this
          }
          dispose() {
              return super.dispose(),
              this.onstop = s7,
              this.unsync(),
              this._volume.dispose(),
              this._state.dispose(),
              this
          }
      }
      class rG extends rS {
          constructor() {
              super(sY(rG.getDefaults(), arguments, ["url", "onload"])),
              this.name = "ToneBufferSource",
              this._source = this.context.createBufferSource(),
              this._internalChannels = [this._source],
              this._sourceStarted = !1,
              this._sourceStopped = !1;
              let t = sY(rG.getDefaults(), arguments, ["url", "onload"]);
              rw(this._source, this._gainNode),
              this._source.onended = () => this._stopSource(),
              this.playbackRate = new ry({
                  context: this.context,
                  param: this._source.playbackRate,
                  units: "positive",
                  value: t.playbackRate
              }),
              this.loop = t.loop,
              this.loopStart = t.loopStart,
              this.loopEnd = t.loopEnd,
              this._buffer = new rt(t.url,t.onload,t.onerror),
              this._internalChannels.push(this._source)
          }
          static getDefaults() {
              return Object.assign(rS.getDefaults(), {
                  url: new rt,
                  loop: !1,
                  loopEnd: 0,
                  loopStart: 0,
                  onload: s7,
                  onerror: s7,
                  playbackRate: 1
              })
          }
          get fadeIn() {
              return this._fadeIn
          }
          set fadeIn(t) {
              this._fadeIn = t
          }
          get fadeOut() {
              return this._fadeOut
          }
          set fadeOut(t) {
              this._fadeOut = t
          }
          get curve() {
              return this._curve
          }
          set curve(t) {
              this._curve = t
          }
          start(t, e, i, n=1) {
              sC(this.buffer.loaded, "buffer is either not set or not loaded");
              let s = this.toSeconds(t);
              this._startGain(s, n),
              e = this.loop ? sG(e, this.loopStart) : sG(e, 0);
              let r = Math.max(this.toSeconds(e), 0);
              if (this.loop) {
                  let t = this.toSeconds(this.loopEnd) || this.buffer.duration
                    , e = this.toSeconds(this.loopStart)
                    , i = t - e;
                  s$(r, t) && (r = (r - e) % i + e),
                  sQ(r, this.buffer.duration) && (r = 0)
              }
              if (this._source.buffer = this.buffer.get(),
              this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration,
              r + 1e-6 < this.buffer.duration && (this._sourceStarted = !0,
              this._source.start(s, r)),
              sR(i)) {
                  let t = this.toSeconds(i);
                  t = Math.max(t, 0),
                  this.stop(s + t)
              }
              return this
          }
          _stopSource(t) {
              !this._sourceStopped && this._sourceStarted && (this._sourceStopped = !0,
              this._source.stop(this.toSeconds(t)),
              this._onended())
          }
          get loopStart() {
              return this._source.loopStart
          }
          set loopStart(t) {
              this._source.loopStart = this.toSeconds(t)
          }
          get loopEnd() {
              return this._source.loopEnd
          }
          set loopEnd(t) {
              this._source.loopEnd = this.toSeconds(t)
          }
          get buffer() {
              return this._buffer
          }
          set buffer(t) {
              this._buffer.set(t)
          }
          get loop() {
              return this._source.loop
          }
          set loop(t) {
              this._source.loop = t,
              this._sourceStarted && this.cancelStop()
          }
          dispose() {
              return super.dispose(),
              this._source.onended = null,
              this._source.disconnect(),
              this._buffer.dispose(),
              this.playbackRate.dispose(),
              this
          }
      }
      class rH extends rY {
          constructor() {
              super(sY(rH.getDefaults(), arguments, ["type"])),
              this.name = "Noise",
              this._source = null;
              let t = sY(rH.getDefaults(), arguments, ["type"]);
              this._playbackRate = t.playbackRate,
              this.type = t.type,
              this._fadeIn = t.fadeIn,
              this._fadeOut = t.fadeOut
          }
          static getDefaults() {
              return Object.assign(rY.getDefaults(), {
                  fadeIn: 0,
                  fadeOut: 0,
                  playbackRate: 1,
                  type: "white"
              })
          }
          get type() {
              return this._type
          }
          set type(t) {
              if (sC(t in rZ, "Noise: invalid type: " + t),
              this._type !== t && (this._type = t,
              "started" === this.state)) {
                  let t = this.now();
                  this._stop(t),
                  this._start(t)
              }
          }
          get playbackRate() {
              return this._playbackRate
          }
          set playbackRate(t) {
              this._playbackRate = t,
              this._source && (this._source.playbackRate.value = t)
          }
          _start(t) {
              let e = rZ[this._type];
              this._source = new rG({
                  url: e,
                  context: this.context,
                  fadeIn: this._fadeIn,
                  fadeOut: this._fadeOut,
                  loop: !0,
                  onended: () => this.onstop(this),
                  playbackRate: this._playbackRate
              }).connect(this.output),
              this._source.start(this.toSeconds(t), Math.random() * (e.duration - .001))
          }
          _stop(t) {
              this._source && (this._source.stop(this.toSeconds(t)),
              this._source = null)
          }
          get fadeIn() {
              return this._fadeIn
          }
          set fadeIn(t) {
              this._fadeIn = t,
              this._source && (this._source.fadeIn = this._fadeIn)
          }
          get fadeOut() {
              return this._fadeOut
          }
          set fadeOut(t) {
              this._fadeOut = t,
              this._source && (this._source.fadeOut = this._fadeOut)
          }
          _restart(t) {
              this._stop(t),
              this._start(t)
          }
          dispose() {
              return super.dispose(),
              this._source && this._source.disconnect(),
              this
          }
      }
      let rX = {
          brown: null,
          pink: null,
          white: null
      }
        , rZ = {
          get brown() {
              if (!rX.brown) {
                  let t = [];
                  for (let e = 0; e < 2; e++) {
                      let i = new Float32Array(220500);
                      t[e] = i;
                      let n = 0;
                      for (let t = 0; t < 220500; t++) {
                          let e = 2 * Math.random() - 1;
                          i[t] = (n + .02 * e) / 1.02,
                          n = i[t],
                          i[t] *= 3.5
                      }
                  }
                  rX.brown = new rt().fromArray(t)
              }
              return rX.brown
          },
          get pink() {
              if (!rX.pink) {
                  let t = [];
                  for (let e = 0; e < 2; e++) {
                      let i, n, s, r, a, o, l;
                      let u = new Float32Array(220500);
                      t[e] = u,
                      i = n = s = r = a = o = l = 0;
                      for (let t = 0; t < 220500; t++) {
                          let e = 2 * Math.random() - 1;
                          i = .99886 * i + .0555179 * e,
                          n = .99332 * n + .0750759 * e,
                          s = .969 * s + .153852 * e,
                          r = .8665 * r + .3104856 * e,
                          a = .55 * a + .5329522 * e,
                          o = -.7616 * o - .016898 * e,
                          u[t] = i + n + s + r + a + o + l + .5362 * e,
                          u[t] *= .11,
                          l = .115926 * e
                      }
                  }
                  rX.pink = new rt().fromArray(t)
              }
              return rX.pink
          },
          get white() {
              if (!rX.white) {
                  let t = [];
                  for (let e = 0; e < 2; e++) {
                      let i = new Float32Array(220500);
                      t[e] = i;
                      for (let t = 0; t < 220500; t++)
                          i[t] = 2 * Math.random() - 1
                  }
                  rX.white = new rt().fromArray(t)
              }
              return rX.white
          }
      };
      function r$(t, e) {
          return (0,
          sB.__awaiter)(this, void 0, void 0, function*() {
              let i = e / t.context.sampleRate
                , n = new re(1,i,t.context.sampleRate);
              return new t.constructor(Object.assign(t.get(), {
                  frequency: 2 / i,
                  detune: 0,
                  context: n
              })).toDestination().start(0),
              (yield n.render()).getChannelData(0)
          })
      }
      class rQ extends rS {
          constructor() {
              super(sY(rQ.getDefaults(), arguments, ["frequency", "type"])),
              this.name = "ToneOscillatorNode",
              this._oscillator = this.context.createOscillator(),
              this._internalChannels = [this._oscillator];
              let t = sY(rQ.getDefaults(), arguments, ["frequency", "type"]);
              rw(this._oscillator, this._gainNode),
              this.type = t.type,
              this.frequency = new ry({
                  context: this.context,
                  param: this._oscillator.frequency,
                  units: "frequency",
                  value: t.frequency
              }),
              this.detune = new ry({
                  context: this.context,
                  param: this._oscillator.detune,
                  units: "cents",
                  value: t.detune
              }),
              s9(this, ["frequency", "detune"])
          }
          static getDefaults() {
              return Object.assign(rS.getDefaults(), {
                  detune: 0,
                  frequency: 440,
                  type: "sine"
              })
          }
          start(t) {
              let e = this.toSeconds(t);
              return this.log("start", e),
              this._startGain(e),
              this._oscillator.start(e),
              this
          }
          _stopSource(t) {
              this._oscillator.stop(t)
          }
          setPeriodicWave(t) {
              return this._oscillator.setPeriodicWave(t),
              this
          }
          get type() {
              return this._oscillator.type
          }
          set type(t) {
              this._oscillator.type = t
          }
          dispose() {
              return super.dispose(),
              "started" === this.state && this.stop(),
              this._oscillator.disconnect(),
              this.frequency.dispose(),
              this.detune.dispose(),
              this
          }
      }
      class rJ extends rY {
          constructor() {
              super(sY(rJ.getDefaults(), arguments, ["frequency", "type"])),
              this.name = "Oscillator",
              this._oscillator = null;
              let t = sY(rJ.getDefaults(), arguments, ["frequency", "type"]);
              this.frequency = new rC({
                  context: this.context,
                  units: "frequency",
                  value: t.frequency
              }),
              s9(this, "frequency"),
              this.detune = new rC({
                  context: this.context,
                  units: "cents",
                  value: t.detune
              }),
              s9(this, "detune"),
              this._partials = t.partials,
              this._partialCount = t.partialCount,
              this._type = t.type,
              t.partialCount && "custom" !== t.type && (this._type = this.baseType + t.partialCount.toString()),
              this.phase = t.phase
          }
          static getDefaults() {
              return Object.assign(rY.getDefaults(), {
                  detune: 0,
                  frequency: 440,
                  partialCount: 0,
                  partials: [],
                  phase: 0,
                  type: "sine"
              })
          }
          _start(t) {
              let e = this.toSeconds(t)
                , i = new rQ({
                  context: this.context,
                  onended: () => this.onstop(this)
              });
              this._oscillator = i,
              this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type,
              this._oscillator.connect(this.output),
              this.frequency.connect(this._oscillator.frequency),
              this.detune.connect(this._oscillator.detune),
              this._oscillator.start(e)
          }
          _stop(t) {
              let e = this.toSeconds(t);
              this._oscillator && this._oscillator.stop(e)
          }
          _restart(t) {
              let e = this.toSeconds(t);
              return this.log("restart", e),
              this._oscillator && this._oscillator.cancelStop(),
              this._state.cancel(e),
              this
          }
          syncFrequency() {
              return this.context.transport.syncSignal(this.frequency),
              this
          }
          unsyncFrequency() {
              return this.context.transport.unsyncSignal(this.frequency),
              this
          }
          _getCachedPeriodicWave() {
              if ("custom" === this._type)
                  return rJ._periodicWaveCache.find(t => {
                      var e, i;
                      return t.phase === this._phase && (e = t.partials,
                      i = this._partials,
                      e.length === i.length && e.every( (t, e) => i[e] === t))
                  }
                  );
              {
                  let t = rJ._periodicWaveCache.find(t => t.type === this._type && t.phase === this._phase);
                  return this._partialCount = t ? t.partialCount : this._partialCount,
                  t
              }
          }
          get type() {
              return this._type
          }
          set type(t) {
              this._type = t;
              let e = -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
              if (0 === this._phase && e)
                  this._wave = void 0,
                  this._partialCount = 0,
                  null !== this._oscillator && (this._oscillator.type = t);
              else {
                  let e = this._getCachedPeriodicWave();
                  if (sR(e)) {
                      let {partials: t, wave: i} = e;
                      this._wave = i,
                      this._partials = t,
                      null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave)
                  } else {
                      let[e,i] = this._getRealImaginary(t, this._phase)
                        , n = this.context.createPeriodicWave(e, i);
                      this._wave = n,
                      null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave),
                      rJ._periodicWaveCache.push({
                          imag: i,
                          partialCount: this._partialCount,
                          partials: this._partials,
                          phase: this._phase,
                          real: e,
                          type: this._type,
                          wave: this._wave
                      }),
                      rJ._periodicWaveCache.length > 100 && rJ._periodicWaveCache.shift()
                  }
              }
          }
          get baseType() {
              return this._type.replace(this.partialCount.toString(), "")
          }
          set baseType(t) {
              this.partialCount && "custom" !== this._type && "custom" !== t ? this.type = t + this.partialCount : this.type = t
          }
          get partialCount() {
              return this._partialCount
          }
          set partialCount(t) {
              sA(t, 0);
              let e = this._type
                , i = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
              if (i && (e = i[1]),
              "custom" !== this._type)
                  0 === t ? this.type = e : this.type = e + t.toString();
              else {
                  let e = new Float32Array(t);
                  this._partials.forEach( (t, i) => e[i] = t),
                  this._partials = Array.from(e),
                  this.type = this._type
              }
          }
          _getRealImaginary(t, e) {
              let i = 2048
                , n = new Float32Array(i)
                , s = new Float32Array(i)
                , r = 1;
              if ("custom" === t) {
                  if (r = this._partials.length + 1,
                  this._partialCount = this._partials.length,
                  i = r,
                  0 === this._partials.length)
                      return [n, s]
              } else {
                  let e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                  e ? (r = parseInt(e[2], 10) + 1,
                  this._partialCount = parseInt(e[2], 10),
                  t = e[1],
                  i = r = Math.max(r, 2)) : this._partialCount = 0,
                  this._partials = []
              }
              for (let a = 1; a < i; ++a) {
                  let i;
                  let o = 2 / (a * Math.PI);
                  switch (t) {
                  case "sine":
                      i = a <= r ? 1 : 0,
                      this._partials[a - 1] = i;
                      break;
                  case "square":
                      i = 1 & a ? 2 * o : 0,
                      this._partials[a - 1] = i;
                      break;
                  case "sawtooth":
                      i = o * (1 & a ? 1 : -1),
                      this._partials[a - 1] = i;
                      break;
                  case "triangle":
                      i = 1 & a ? o * o * 2 * (a - 1 >> 1 & 1 ? -1 : 1) : 0,
                      this._partials[a - 1] = i;
                      break;
                  case "custom":
                      i = this._partials[a - 1];
                      break;
                  default:
                      throw TypeError("Oscillator: invalid type: " + t)
                  }
                  0 !== i ? (n[a] = -i * Math.sin(e * a),
                  s[a] = i * Math.cos(e * a)) : (n[a] = 0,
                  s[a] = 0)
              }
              return [n, s]
          }
          _inverseFFT(t, e, i) {
              let n = 0
                , s = t.length;
              for (let r = 0; r < s; r++)
                  n += t[r] * Math.cos(r * i) + e[r] * Math.sin(r * i);
              return n
          }
          getInitialValue() {
              let[t,e] = this._getRealImaginary(this._type, 0)
                , i = 0
                , n = 2 * Math.PI;
              for (let s = 0; s < 32; s++)
                  i = Math.max(this._inverseFFT(t, e, s / 32 * n), i);
              return sJ(-this._inverseFFT(t, e, this._phase) / i, -1, 1)
          }
          get partials() {
              return this._partials.slice(0, this.partialCount)
          }
          set partials(t) {
              this._partials = t,
              this._partialCount = this._partials.length,
              t.length && (this.type = "custom")
          }
          get phase() {
              return this._phase * (180 / Math.PI)
          }
          set phase(t) {
              this._phase = t * Math.PI / 180,
              this.type = this._type
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              null !== this._oscillator && this._oscillator.dispose(),
              this._wave = void 0,
              this.frequency.dispose(),
              this.detune.dispose(),
              this
          }
      }
      rJ._periodicWaveCache = [];
      class rK extends rb {
          constructor() {
              super(Object.assign(sY(rK.getDefaults(), arguments, ["context"])))
          }
          connect(t, e=0, i=0) {
              return rA(this, t, e, i),
              this
          }
      }
      class r0 extends rK {
          constructor() {
              super(Object.assign(sY(r0.getDefaults(), arguments, ["mapping", "length"]))),
              this.name = "WaveShaper",
              this._shaper = this.context.createWaveShaper(),
              this.input = this._shaper,
              this.output = this._shaper;
              let t = sY(r0.getDefaults(), arguments, ["mapping", "length"]);
              sj(t.mapping) || t.mapping instanceof Float32Array ? this.curve = Float32Array.from(t.mapping) : "function" == typeof t.mapping && this.setMap(t.mapping, t.length)
          }
          static getDefaults() {
              return Object.assign(rC.getDefaults(), {
                  length: 1024
              })
          }
          setMap(t, e=1024) {
              let i = new Float32Array(e);
              for (let n = 0; n < e; n++) {
                  let s = n / (e - 1) * 2 - 1;
                  i[n] = t(s, n)
              }
              return this.curve = i,
              this
          }
          get curve() {
              return this._shaper.curve
          }
          set curve(t) {
              this._shaper.curve = t
          }
          get oversample() {
              return this._shaper.oversample
          }
          set oversample(t) {
              sC(["none", "2x", "4x"].some(e => e.includes(t)), "oversampling must be either 'none', '2x', or '4x'"),
              this._shaper.oversample = t
          }
          dispose() {
              return super.dispose(),
              this._shaper.disconnect(),
              this
          }
      }
      class r1 extends rK {
          constructor() {
              super(...arguments),
              this.name = "AudioToGain",
              this._norm = new r0({
                  context: this.context,
                  mapping: t => (t + 1) / 2
              }),
              this.input = this._norm,
              this.output = this._norm
          }
          dispose() {
              return super.dispose(),
              this._norm.dispose(),
              this
          }
      }
      class r2 extends rC {
          constructor() {
              super(Object.assign(sY(r2.getDefaults(), arguments, ["value"]))),
              this.name = "Multiply",
              this.override = !1;
              let t = sY(r2.getDefaults(), arguments, ["value"]);
              this._mult = this.input = this.output = new rT({
                  context: this.context,
                  minValue: t.minValue,
                  maxValue: t.maxValue
              }),
              this.factor = this._param = this._mult.gain,
              this.factor.setValueAtTime(t.value, 0)
          }
          static getDefaults() {
              return Object.assign(rC.getDefaults(), {
                  value: 0
              })
          }
          dispose() {
              return super.dispose(),
              this._mult.dispose(),
              this
          }
      }
      class r3 extends rY {
          constructor() {
              super(sY(r3.getDefaults(), arguments, ["frequency", "type", "modulationType"])),
              this.name = "AMOscillator",
              this._modulationScale = new r1({
                  context: this.context
              }),
              this._modulationNode = new rT({
                  context: this.context
              });
              let t = sY(r3.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
              this._carrier = new rJ({
                  context: this.context,
                  detune: t.detune,
                  frequency: t.frequency,
                  onstop: () => this.onstop(this),
                  phase: t.phase,
                  type: t.type
              }),
              this.frequency = this._carrier.frequency,
              this.detune = this._carrier.detune,
              this._modulator = new rJ({
                  context: this.context,
                  phase: t.phase,
                  type: t.modulationType
              }),
              this.harmonicity = new r2({
                  context: this.context,
                  units: "positive",
                  value: t.harmonicity
              }),
              this.frequency.chain(this.harmonicity, this._modulator.frequency),
              this._modulator.chain(this._modulationScale, this._modulationNode.gain),
              this._carrier.chain(this._modulationNode, this.output),
              s9(this, ["frequency", "detune", "harmonicity"])
          }
          static getDefaults() {
              return Object.assign(rJ.getDefaults(), {
                  harmonicity: 1,
                  modulationType: "square"
              })
          }
          _start(t) {
              this._modulator.start(t),
              this._carrier.start(t)
          }
          _stop(t) {
              this._modulator.stop(t),
              this._carrier.stop(t)
          }
          _restart(t) {
              this._modulator.restart(t),
              this._carrier.restart(t)
          }
          get type() {
              return this._carrier.type
          }
          set type(t) {
              this._carrier.type = t
          }
          get baseType() {
              return this._carrier.baseType
          }
          set baseType(t) {
              this._carrier.baseType = t
          }
          get partialCount() {
              return this._carrier.partialCount
          }
          set partialCount(t) {
              this._carrier.partialCount = t
          }
          get modulationType() {
              return this._modulator.type
          }
          set modulationType(t) {
              this._modulator.type = t
          }
          get phase() {
              return this._carrier.phase
          }
          set phase(t) {
              this._carrier.phase = t,
              this._modulator.phase = t
          }
          get partials() {
              return this._carrier.partials
          }
          set partials(t) {
              this._carrier.partials = t
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this.frequency.dispose(),
              this.detune.dispose(),
              this.harmonicity.dispose(),
              this._carrier.dispose(),
              this._modulator.dispose(),
              this._modulationNode.dispose(),
              this._modulationScale.dispose(),
              this
          }
      }
      class r8 extends rY {
          constructor() {
              super(sY(r8.getDefaults(), arguments, ["frequency", "type", "modulationType"])),
              this.name = "FMOscillator",
              this._modulationNode = new rT({
                  context: this.context,
                  gain: 0
              });
              let t = sY(r8.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
              this._carrier = new rJ({
                  context: this.context,
                  detune: t.detune,
                  frequency: 0,
                  onstop: () => this.onstop(this),
                  phase: t.phase,
                  type: t.type
              }),
              this.detune = this._carrier.detune,
              this.frequency = new rC({
                  context: this.context,
                  units: "frequency",
                  value: t.frequency
              }),
              this._modulator = new rJ({
                  context: this.context,
                  phase: t.phase,
                  type: t.modulationType
              }),
              this.harmonicity = new r2({
                  context: this.context,
                  units: "positive",
                  value: t.harmonicity
              }),
              this.modulationIndex = new r2({
                  context: this.context,
                  units: "positive",
                  value: t.modulationIndex
              }),
              this.frequency.connect(this._carrier.frequency),
              this.frequency.chain(this.harmonicity, this._modulator.frequency),
              this.frequency.chain(this.modulationIndex, this._modulationNode),
              this._modulator.connect(this._modulationNode.gain),
              this._modulationNode.connect(this._carrier.frequency),
              this._carrier.connect(this.output),
              this.detune.connect(this._modulator.detune),
              s9(this, ["modulationIndex", "frequency", "detune", "harmonicity"])
          }
          static getDefaults() {
              return Object.assign(rJ.getDefaults(), {
                  harmonicity: 1,
                  modulationIndex: 2,
                  modulationType: "square"
              })
          }
          _start(t) {
              this._modulator.start(t),
              this._carrier.start(t)
          }
          _stop(t) {
              this._modulator.stop(t),
              this._carrier.stop(t)
          }
          _restart(t) {
              return this._modulator.restart(t),
              this._carrier.restart(t),
              this
          }
          get type() {
              return this._carrier.type
          }
          set type(t) {
              this._carrier.type = t
          }
          get baseType() {
              return this._carrier.baseType
          }
          set baseType(t) {
              this._carrier.baseType = t
          }
          get partialCount() {
              return this._carrier.partialCount
          }
          set partialCount(t) {
              this._carrier.partialCount = t
          }
          get modulationType() {
              return this._modulator.type
          }
          set modulationType(t) {
              this._modulator.type = t
          }
          get phase() {
              return this._carrier.phase
          }
          set phase(t) {
              this._carrier.phase = t,
              this._modulator.phase = t
          }
          get partials() {
              return this._carrier.partials
          }
          set partials(t) {
              this._carrier.partials = t
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this.frequency.dispose(),
              this.harmonicity.dispose(),
              this._carrier.dispose(),
              this._modulator.dispose(),
              this._modulationNode.dispose(),
              this.modulationIndex.dispose(),
              this
          }
      }
      class r5 extends rY {
          constructor() {
              super(sY(r5.getDefaults(), arguments, ["frequency", "width"])),
              this.name = "PulseOscillator",
              this._widthGate = new rT({
                  context: this.context,
                  gain: 0
              }),
              this._thresh = new r0({
                  context: this.context,
                  mapping: t => t <= 0 ? -1 : 1
              });
              let t = sY(r5.getDefaults(), arguments, ["frequency", "width"]);
              this.width = new rC({
                  context: this.context,
                  units: "audioRange",
                  value: t.width
              }),
              this._triangle = new rJ({
                  context: this.context,
                  detune: t.detune,
                  frequency: t.frequency,
                  onstop: () => this.onstop(this),
                  phase: t.phase,
                  type: "triangle"
              }),
              this.frequency = this._triangle.frequency,
              this.detune = this._triangle.detune,
              this._triangle.chain(this._thresh, this.output),
              this.width.chain(this._widthGate, this._thresh),
              s9(this, ["width", "frequency", "detune"])
          }
          static getDefaults() {
              return Object.assign(rY.getDefaults(), {
                  detune: 0,
                  frequency: 440,
                  phase: 0,
                  type: "pulse",
                  width: .2
              })
          }
          _start(t) {
              t = this.toSeconds(t),
              this._triangle.start(t),
              this._widthGate.gain.setValueAtTime(1, t)
          }
          _stop(t) {
              t = this.toSeconds(t),
              this._triangle.stop(t),
              this._widthGate.gain.cancelScheduledValues(t),
              this._widthGate.gain.setValueAtTime(0, t)
          }
          _restart(t) {
              this._triangle.restart(t),
              this._widthGate.gain.cancelScheduledValues(t),
              this._widthGate.gain.setValueAtTime(1, t)
          }
          get phase() {
              return this._triangle.phase
          }
          set phase(t) {
              this._triangle.phase = t
          }
          get type() {
              return "pulse"
          }
          get baseType() {
              return "pulse"
          }
          get partials() {
              return []
          }
          get partialCount() {
              return 0
          }
          set carrierType(t) {
              this._triangle.type = t
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this._triangle.dispose(),
              this.width.dispose(),
              this._widthGate.dispose(),
              this._thresh.dispose(),
              this
          }
      }
      class r4 extends rY {
          constructor() {
              super(sY(r4.getDefaults(), arguments, ["frequency", "type", "spread"])),
              this.name = "FatOscillator",
              this._oscillators = [];
              let t = sY(r4.getDefaults(), arguments, ["frequency", "type", "spread"]);
              this.frequency = new rC({
                  context: this.context,
                  units: "frequency",
                  value: t.frequency
              }),
              this.detune = new rC({
                  context: this.context,
                  units: "cents",
                  value: t.detune
              }),
              this._spread = t.spread,
              this._type = t.type,
              this._phase = t.phase,
              this._partials = t.partials,
              this._partialCount = t.partialCount,
              this.count = t.count,
              s9(this, ["frequency", "detune"])
          }
          static getDefaults() {
              return Object.assign(rJ.getDefaults(), {
                  count: 3,
                  spread: 20,
                  type: "sawtooth"
              })
          }
          _start(t) {
              t = this.toSeconds(t),
              this._forEach(e => e.start(t))
          }
          _stop(t) {
              t = this.toSeconds(t),
              this._forEach(e => e.stop(t))
          }
          _restart(t) {
              this._forEach(e => e.restart(t))
          }
          _forEach(t) {
              for (let e = 0; e < this._oscillators.length; e++)
                  t(this._oscillators[e], e)
          }
          get type() {
              return this._type
          }
          set type(t) {
              this._type = t,
              this._forEach(e => e.type = t)
          }
          get spread() {
              return this._spread
          }
          set spread(t) {
              if (this._spread = t,
              this._oscillators.length > 1) {
                  let e = -t / 2
                    , i = t / (this._oscillators.length - 1);
                  this._forEach( (t, n) => t.detune.value = e + i * n)
              }
          }
          get count() {
              return this._oscillators.length
          }
          set count(t) {
              if (sA(t, 1),
              this._oscillators.length !== t) {
                  this._forEach(t => t.dispose()),
                  this._oscillators = [];
                  for (let e = 0; e < t; e++) {
                      let i = new rJ({
                          context: this.context,
                          volume: -Infinity,
                          type: this._type,
                          phase: this._phase + e / t * 360,
                          partialCount: this._partialCount,
                          onstop: 0 === e ? () => this.onstop(this) : s7
                      });
                      "custom" === this.type && (i.partials = this._partials),
                      this.frequency.connect(i.frequency),
                      this.detune.connect(i.detune),
                      i.detune.overridden = !1,
                      i.connect(this.output),
                      this._oscillators[e] = i
                  }
                  this.spread = this._spread,
                  "started" === this.state && this._forEach(t => t.start())
              }
          }
          get phase() {
              return this._phase
          }
          set phase(t) {
              this._phase = t,
              this._forEach( (t, e) => t.phase = this._phase + e / this.count * 360)
          }
          get baseType() {
              return this._oscillators[0].baseType
          }
          set baseType(t) {
              this._forEach(e => e.baseType = t),
              this._type = this._oscillators[0].type
          }
          get partials() {
              return this._oscillators[0].partials
          }
          set partials(t) {
              this._partials = t,
              this._partialCount = this._partials.length,
              t.length && (this._type = "custom",
              this._forEach(e => e.partials = t))
          }
          get partialCount() {
              return this._oscillators[0].partialCount
          }
          set partialCount(t) {
              this._partialCount = t,
              this._forEach(e => e.partialCount = t),
              this._type = this._oscillators[0].type
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this.frequency.dispose(),
              this.detune.dispose(),
              this._forEach(t => t.dispose()),
              this
          }
      }
      class r6 extends rY {
          constructor() {
              super(sY(r6.getDefaults(), arguments, ["frequency", "modulationFrequency"])),
              this.name = "PWMOscillator",
              this.sourceType = "pwm",
              this._scale = new r2({
                  context: this.context,
                  value: 2
              });
              let t = sY(r6.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
              this._pulse = new r5({
                  context: this.context,
                  frequency: t.modulationFrequency
              }),
              this._pulse.carrierType = "sine",
              this.modulationFrequency = this._pulse.frequency,
              this._modulator = new rJ({
                  context: this.context,
                  detune: t.detune,
                  frequency: t.frequency,
                  onstop: () => this.onstop(this),
                  phase: t.phase
              }),
              this.frequency = this._modulator.frequency,
              this.detune = this._modulator.detune,
              this._modulator.chain(this._scale, this._pulse.width),
              this._pulse.connect(this.output),
              s9(this, ["modulationFrequency", "frequency", "detune"])
          }
          static getDefaults() {
              return Object.assign(rY.getDefaults(), {
                  detune: 0,
                  frequency: 440,
                  modulationFrequency: .4,
                  phase: 0,
                  type: "pwm"
              })
          }
          _start(t) {
              t = this.toSeconds(t),
              this._modulator.start(t),
              this._pulse.start(t)
          }
          _stop(t) {
              t = this.toSeconds(t),
              this._modulator.stop(t),
              this._pulse.stop(t)
          }
          _restart(t) {
              this._modulator.restart(t),
              this._pulse.restart(t)
          }
          get type() {
              return "pwm"
          }
          get baseType() {
              return "pwm"
          }
          get partials() {
              return []
          }
          get partialCount() {
              return 0
          }
          get phase() {
              return this._modulator.phase
          }
          set phase(t) {
              this._modulator.phase = t
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this._pulse.dispose(),
              this._scale.dispose(),
              this._modulator.dispose(),
              this
          }
      }
      let r9 = {
          am: r3,
          fat: r4,
          fm: r8,
          oscillator: rJ,
          pulse: r5,
          pwm: r6
      };
      class r7 extends rY {
          constructor() {
              super(sY(r7.getDefaults(), arguments, ["frequency", "type"])),
              this.name = "OmniOscillator";
              let t = sY(r7.getDefaults(), arguments, ["frequency", "type"]);
              this.frequency = new rC({
                  context: this.context,
                  units: "frequency",
                  value: t.frequency
              }),
              this.detune = new rC({
                  context: this.context,
                  units: "cents",
                  value: t.detune
              }),
              s9(this, ["frequency", "detune"]),
              this.set(t)
          }
          static getDefaults() {
              return Object.assign(rJ.getDefaults(), r8.getDefaults(), r3.getDefaults(), r4.getDefaults(), r5.getDefaults(), r6.getDefaults())
          }
          _start(t) {
              this._oscillator.start(t)
          }
          _stop(t) {
              this._oscillator.stop(t)
          }
          _restart(t) {
              return this._oscillator.restart(t),
              this
          }
          get type() {
              let t = "";
              return ["am", "fm", "fat"].some(t => this._sourceType === t) && (t = this._sourceType),
              t + this._oscillator.type
          }
          set type(t) {
              "fm" === t.substr(0, 2) ? (this._createNewOscillator("fm"),
              this._oscillator = this._oscillator,
              this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator("am"),
              this._oscillator = this._oscillator,
              this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator("fat"),
              this._oscillator = this._oscillator,
              this._oscillator.type = t.substr(3)) : "pwm" === t ? (this._createNewOscillator("pwm"),
              this._oscillator = this._oscillator) : "pulse" === t ? this._createNewOscillator("pulse") : (this._createNewOscillator("oscillator"),
              this._oscillator = this._oscillator,
              this._oscillator.type = t)
          }
          get partials() {
              return this._oscillator.partials
          }
          set partials(t) {
              this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partials = t)
          }
          get partialCount() {
              return this._oscillator.partialCount
          }
          set partialCount(t) {
              this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || (this._oscillator.partialCount = t)
          }
          set(t) {
              return Reflect.has(t, "type") && t.type && (this.type = t.type),
              super.set(t),
              this
          }
          _createNewOscillator(t) {
              if (t !== this._sourceType) {
                  this._sourceType = t;
                  let e = r9[t]
                    , i = this.now();
                  if (this._oscillator) {
                      let t = this._oscillator;
                      t.stop(i),
                      this.context.setTimeout( () => t.dispose(), this.blockTime)
                  }
                  this._oscillator = new e({
                      context: this.context
                  }),
                  this.frequency.connect(this._oscillator.frequency),
                  this.detune.connect(this._oscillator.detune),
                  this._oscillator.connect(this.output),
                  this._oscillator.onstop = () => this.onstop(this),
                  "started" === this.state && this._oscillator.start(i)
              }
          }
          get phase() {
              return this._oscillator.phase
          }
          set phase(t) {
              this._oscillator.phase = t
          }
          get sourceType() {
              return this._sourceType
          }
          set sourceType(t) {
              let e = "sine";
              "pwm" !== this._oscillator.type && "pulse" !== this._oscillator.type && (e = this._oscillator.type),
              "fm" === t ? this.type = "fm" + e : "am" === t ? this.type = "am" + e : "fat" === t ? this.type = "fat" + e : "oscillator" === t ? this.type = e : "pulse" === t ? this.type = "pulse" : "pwm" === t && (this.type = "pwm")
          }
          _getOscType(t, e) {
              return t instanceof r9[e]
          }
          get baseType() {
              return this._oscillator.baseType
          }
          set baseType(t) {
              this._getOscType(this._oscillator, "pulse") || this._getOscType(this._oscillator, "pwm") || "pulse" === t || "pwm" === t || (this._oscillator.baseType = t)
          }
          get width() {
              return this._getOscType(this._oscillator, "pulse") ? this._oscillator.width : void 0
          }
          get count() {
              return this._getOscType(this._oscillator, "fat") ? this._oscillator.count : void 0
          }
          set count(t) {
              this._getOscType(this._oscillator, "fat") && sI(t) && (this._oscillator.count = t)
          }
          get spread() {
              return this._getOscType(this._oscillator, "fat") ? this._oscillator.spread : void 0
          }
          set spread(t) {
              this._getOscType(this._oscillator, "fat") && sI(t) && (this._oscillator.spread = t)
          }
          get modulationType() {
              return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.modulationType : void 0
          }
          set modulationType(t) {
              (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && sN(t) && (this._oscillator.modulationType = t)
          }
          get modulationIndex() {
              return this._getOscType(this._oscillator, "fm") ? this._oscillator.modulationIndex : void 0
          }
          get harmonicity() {
              return this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am") ? this._oscillator.harmonicity : void 0
          }
          get modulationFrequency() {
              return this._getOscType(this._oscillator, "pwm") ? this._oscillator.modulationFrequency : void 0
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return r$(this, t)
              })
          }
          dispose() {
              return super.dispose(),
              this.detune.dispose(),
              this.frequency.dispose(),
              this._oscillator.dispose(),
              this
          }
      }
      function at(t, e=1 / 0) {
          let i = new WeakMap;
          return function(n, s) {
              Reflect.defineProperty(n, s, {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                      return i.get(this)
                  },
                  set: function(n) {
                      sA(n, t, e),
                      i.set(this, n)
                  }
              })
          }
      }
      function ae(t, e=1 / 0) {
          let i = new WeakMap;
          return function(n, s) {
              Reflect.defineProperty(n, s, {
                  configurable: !0,
                  enumerable: !0,
                  get: function() {
                      return i.get(this)
                  },
                  set: function(n) {
                      sA(this.toSeconds(n), t, e),
                      i.set(this, n)
                  }
              })
          }
      }
      class ai extends rY {
          constructor() {
              super(sY(ai.getDefaults(), arguments, ["url", "onload"])),
              this.name = "Player",
              this._activeSources = new Set;
              let t = sY(ai.getDefaults(), arguments, ["url", "onload"]);
              this._buffer = new rt({
                  onload: this._onload.bind(this, t.onload),
                  onerror: t.onerror,
                  reverse: t.reverse,
                  url: t.url
              }),
              this.autostart = t.autostart,
              this._loop = t.loop,
              this._loopStart = t.loopStart,
              this._loopEnd = t.loopEnd,
              this._playbackRate = t.playbackRate,
              this.fadeIn = t.fadeIn,
              this.fadeOut = t.fadeOut
          }
          static getDefaults() {
              return Object.assign(rY.getDefaults(), {
                  autostart: !1,
                  fadeIn: 0,
                  fadeOut: 0,
                  loop: !1,
                  loopEnd: 0,
                  loopStart: 0,
                  onload: s7,
                  onerror: s7,
                  playbackRate: 1,
                  reverse: !1
              })
          }
          load(t) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  return yield this._buffer.load(t),
                  this._onload(),
                  this
              })
          }
          _onload(t=s7) {
              t(),
              this.autostart && this.start()
          }
          _onSourceEnd(t) {
              this.onstop(this),
              this._activeSources.delete(t),
              0 !== this._activeSources.size || this._synced || "started" !== this._state.getValueAtTime(this.now()) || (this._state.cancel(this.now()),
              this._state.setStateAtTime("stopped", this.now()))
          }
          start(t, e, i) {
              return super.start(t, e, i),
              this
          }
          _start(t, e, i) {
              e = this._loop ? sG(e, this._loopStart) : sG(e, 0);
              let n = this.toSeconds(e)
                , s = i;
              i = sG(i, Math.max(this._buffer.duration - n, 0));
              let r = this.toSeconds(i);
              r /= this._playbackRate,
              t = this.toSeconds(t);
              let a = new rG({
                  url: this._buffer,
                  context: this.context,
                  fadeIn: this.fadeIn,
                  fadeOut: this.fadeOut,
                  loop: this._loop,
                  loopEnd: this._loopEnd,
                  loopStart: this._loopStart,
                  onended: this._onSourceEnd.bind(this),
                  playbackRate: this._playbackRate
              }).connect(this.output);
              this._loop || this._synced || (this._state.cancel(t + r),
              this._state.setStateAtTime("stopped", t + r, {
                  implicitEnd: !0
              })),
              this._activeSources.add(a),
              this._loop && sD(s) ? a.start(t, n) : a.start(t, n, r - this.toSeconds(this.fadeOut))
          }
          _stop(t) {
              let e = this.toSeconds(t);
              this._activeSources.forEach(t => t.stop(e))
          }
          restart(t, e, i) {
              return super.restart(t, e, i),
              this
          }
          _restart(t, e, i) {
              this._stop(t),
              this._start(t, e, i)
          }
          seek(t, e) {
              let i = this.toSeconds(e);
              if ("started" === this._state.getValueAtTime(i)) {
                  let e = this.toSeconds(t);
                  this._stop(i),
                  this._start(i, e)
              }
              return this
          }
          setLoopPoints(t, e) {
              return this.loopStart = t,
              this.loopEnd = e,
              this
          }
          get loopStart() {
              return this._loopStart
          }
          set loopStart(t) {
              this._loopStart = t,
              this.buffer.loaded && sA(this.toSeconds(t), 0, this.buffer.duration),
              this._activeSources.forEach(e => {
                  e.loopStart = t
              }
              )
          }
          get loopEnd() {
              return this._loopEnd
          }
          set loopEnd(t) {
              this._loopEnd = t,
              this.buffer.loaded && sA(this.toSeconds(t), 0, this.buffer.duration),
              this._activeSources.forEach(e => {
                  e.loopEnd = t
              }
              )
          }
          get buffer() {
              return this._buffer
          }
          set buffer(t) {
              this._buffer.set(t)
          }
          get loop() {
              return this._loop
          }
          set loop(t) {
              if (this._loop !== t && (this._loop = t,
              this._activeSources.forEach(e => {
                  e.loop = t
              }
              ),
              t)) {
                  let t = this._state.getNextState("stopped", this.now());
                  t && this._state.cancel(t.time)
              }
          }
          get playbackRate() {
              return this._playbackRate
          }
          set playbackRate(t) {
              this._playbackRate = t;
              let e = this.now()
                , i = this._state.getNextState("stopped", e);
              i && i.implicitEnd && (this._state.cancel(i.time),
              this._activeSources.forEach(t => t.cancelStop())),
              this._activeSources.forEach(i => {
                  i.playbackRate.setValueAtTime(t, e)
              }
              )
          }
          get reverse() {
              return this._buffer.reverse
          }
          set reverse(t) {
              this._buffer.reverse = t
          }
          get loaded() {
              return this._buffer.loaded
          }
          dispose() {
              return super.dispose(),
              this._activeSources.forEach(t => t.dispose()),
              this._activeSources.clear(),
              this._buffer.dispose(),
              this
          }
      }
      (0,
      sB.__decorate)([ae(0)], ai.prototype, "fadeIn", void 0),
      (0,
      sB.__decorate)([ae(0)], ai.prototype, "fadeOut", void 0);
      class an extends rK {
          constructor() {
              super(...arguments),
              this.name = "GainToAudio",
              this._norm = new r0({
                  context: this.context,
                  mapping: t => 2 * Math.abs(t) - 1
              }),
              this.input = this._norm,
              this.output = this._norm
          }
          dispose() {
              return super.dispose(),
              this._norm.dispose(),
              this
          }
      }
      class as extends rb {
          constructor() {
              super(sY(as.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])),
              this.name = "Envelope",
              this._sig = new rC({
                  context: this.context,
                  value: 0
              }),
              this.output = this._sig,
              this.input = void 0;
              let t = sY(as.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
              this.attack = t.attack,
              this.decay = t.decay,
              this.sustain = t.sustain,
              this.release = t.release,
              this.attackCurve = t.attackCurve,
              this.releaseCurve = t.releaseCurve,
              this.decayCurve = t.decayCurve
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  attack: .01,
                  attackCurve: "linear",
                  decay: .1,
                  decayCurve: "exponential",
                  release: 1,
                  releaseCurve: "exponential",
                  sustain: .5
              })
          }
          get value() {
              return this.getValueAtTime(this.now())
          }
          _getCurve(t, e) {
              if (sN(t))
                  return t;
              {
                  let i;
                  for (i in ar)
                      if (ar[i][e] === t)
                          return i;
                  return t
              }
          }
          _setCurve(t, e, i) {
              if (sN(i) && Reflect.has(ar, i)) {
                  let n = ar[i];
                  sP(n) ? "_decayCurve" !== t && (this[t] = n[e]) : this[t] = n
              } else if (sj(i) && "_decayCurve" !== t)
                  this[t] = i;
              else
                  throw Error("Envelope: invalid curve: " + i)
          }
          get attackCurve() {
              return this._getCurve(this._attackCurve, "In")
          }
          set attackCurve(t) {
              this._setCurve("_attackCurve", "In", t)
          }
          get releaseCurve() {
              return this._getCurve(this._releaseCurve, "Out")
          }
          set releaseCurve(t) {
              this._setCurve("_releaseCurve", "Out", t)
          }
          get decayCurve() {
              return this._decayCurve
          }
          set decayCurve(t) {
              sC(["linear", "exponential"].some(e => e === t), `Invalid envelope curve: ${t}`),
              this._decayCurve = t
          }
          triggerAttack(t, e=1) {
              this.log("triggerAttack", t, e),
              t = this.toSeconds(t);
              let i = this.toSeconds(this.attack)
                , n = this.toSeconds(this.decay)
                , s = this.getValueAtTime(t);
              if (s > 0 && (i = (1 - s) / (1 / i)),
              i < this.sampleTime)
                  this._sig.cancelScheduledValues(t),
                  this._sig.setValueAtTime(e, t);
              else if ("linear" === this._attackCurve)
                  this._sig.linearRampTo(e, i, t);
              else if ("exponential" === this._attackCurve)
                  this._sig.targetRampTo(e, i, t);
              else {
                  this._sig.cancelAndHoldAtTime(t);
                  let n = this._attackCurve;
                  for (let t = 1; t < n.length; t++)
                      if (n[t - 1] <= s && s <= n[t]) {
                          (n = this._attackCurve.slice(t))[0] = s;
                          break
                      }
                  this._sig.setValueCurveAtTime(n, t, i, e)
              }
              if (n && this.sustain < 1) {
                  let s = e * this.sustain
                    , r = t + i;
                  this.log("decay", r),
                  "linear" === this._decayCurve ? this._sig.linearRampToValueAtTime(s, n + r) : this._sig.exponentialApproachValueAtTime(s, r, n)
              }
              return this
          }
          triggerRelease(t) {
              this.log("triggerRelease", t),
              t = this.toSeconds(t);
              let e = this.getValueAtTime(t);
              if (e > 0) {
                  let i = this.toSeconds(this.release);
                  i < this.sampleTime ? this._sig.setValueAtTime(0, t) : "linear" === this._releaseCurve ? this._sig.linearRampTo(0, i, t) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, i, t) : (sC(sj(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array"),
                  this._sig.cancelAndHoldAtTime(t),
                  this._sig.setValueCurveAtTime(this._releaseCurve, t, i, e))
              }
              return this
          }
          getValueAtTime(t) {
              return this._sig.getValueAtTime(t)
          }
          triggerAttackRelease(t, e, i=1) {
              return e = this.toSeconds(e),
              this.triggerAttack(e, i),
              this.triggerRelease(e + this.toSeconds(t)),
              this
          }
          cancel(t) {
              return this._sig.cancelScheduledValues(this.toSeconds(t)),
              this
          }
          connect(t, e=0, i=0) {
              return rA(this, t, e, i),
              this
          }
          asArray(t=1024) {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let e = t / this.context.sampleRate
                    , i = new re(1,e,this.context.sampleRate)
                    , n = this.toSeconds(this.attack) + this.toSeconds(this.decay)
                    , s = n + this.toSeconds(this.release)
                    , r = .1 * s
                    , a = s + r
                    , o = new this.constructor(Object.assign(this.get(), {
                      attack: e * this.toSeconds(this.attack) / a,
                      decay: e * this.toSeconds(this.decay) / a,
                      release: e * this.toSeconds(this.release) / a,
                      context: i
                  }));
                  return o._sig.toDestination(),
                  o.triggerAttackRelease(e * (n + r) / a, 0),
                  (yield i.render()).getChannelData(0)
              })
          }
          dispose() {
              return super.dispose(),
              this._sig.dispose(),
              this
          }
      }
      (0,
      sB.__decorate)([ae(0)], as.prototype, "attack", void 0),
      (0,
      sB.__decorate)([ae(0)], as.prototype, "decay", void 0),
      (0,
      sB.__decorate)([at(0, 1)], as.prototype, "sustain", void 0),
      (0,
      sB.__decorate)([ae(0)], as.prototype, "release", void 0);
      let ar = ( () => {
          let t, e;
          let i = [];
          for (t = 0; t < 128; t++)
              i[t] = Math.sin(t / 127 * (Math.PI / 2));
          let n = [];
          for (t = 0; t < 127; t++) {
              let i = Math.sin(2 * Math.PI * (e = t / 127) * 6.4 - Math.PI / 2) + 1;
              n[t] = i / 10 + .83 * e
          }
          n[127] = 1;
          let s = [];
          for (t = 0; t < 128; t++)
              s[t] = Math.ceil(t / 127 * 5) / 5;
          let r = [];
          for (t = 0; t < 128; t++)
              e = t / 127,
              r[t] = .5 * (1 - Math.cos(Math.PI * e));
          let a = [];
          for (t = 0; t < 128; t++) {
              let i = Math.cos((4 * Math.pow(e = t / 127, 3) + .2) * Math.PI * 2 * e);
              a[t] = Math.abs(i * (1 - e))
          }
          function o(t) {
              let e = Array(t.length);
              for (let i = 0; i < t.length; i++)
                  e[i] = 1 - t[i];
              return e
          }
          return {
              bounce: {
                  In: o(a),
                  Out: a
              },
              cosine: {
                  In: i,
                  Out: i.slice(0).reverse()
              },
              exponential: "exponential",
              linear: "linear",
              ripple: {
                  In: n,
                  Out: o(n)
              },
              sine: {
                  In: r,
                  Out: o(r)
              },
              step: {
                  In: s,
                  Out: o(s)
              }
          }
      }
      )();
      class aa extends rb {
          constructor() {
              super(sY(aa.getDefaults(), arguments)),
              this._scheduledEvents = [],
              this._synced = !1,
              this._original_triggerAttack = this.triggerAttack,
              this._original_triggerRelease = this.triggerRelease;
              let t = sY(aa.getDefaults(), arguments);
              this._volume = this.output = new rz({
                  context: this.context,
                  volume: t.volume
              }),
              this.volume = this._volume.volume,
              s9(this, "volume")
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  volume: 0
              })
          }
          sync() {
              return this._syncState() && (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 0)),
              this
          }
          _syncState() {
              let t = !1;
              return this._synced || (this._synced = !0,
              t = !0),
              t
          }
          _syncMethod(t, e) {
              let i = this["_original_" + t] = this[t];
              this[t] = (...t) => {
                  let n = t[e]
                    , s = this.context.transport.schedule(n => {
                      t[e] = n,
                      i.apply(this, t)
                  }
                  , n);
                  this._scheduledEvents.push(s)
              }
          }
          unsync() {
              return this._scheduledEvents.forEach(t => this.context.transport.clear(t)),
              this._scheduledEvents = [],
              this._synced && (this._synced = !1,
              this.triggerAttack = this._original_triggerAttack,
              this.triggerRelease = this._original_triggerRelease),
              this
          }
          triggerAttackRelease(t, e, i, n) {
              let s = this.toSeconds(i)
                , r = this.toSeconds(e);
              return this.triggerAttack(t, s, n),
              this.triggerRelease(s + r),
              this
          }
          dispose() {
              return super.dispose(),
              this._volume.dispose(),
              this.unsync(),
              this._scheduledEvents = [],
              this
          }
      }
      class ao extends aa {
          constructor() {
              super(sY(ao.getDefaults(), arguments));
              let t = sY(ao.getDefaults(), arguments);
              this.portamento = t.portamento,
              this.onsilence = t.onsilence
          }
          static getDefaults() {
              return Object.assign(aa.getDefaults(), {
                  detune: 0,
                  onsilence: s7,
                  portamento: 0
              })
          }
          triggerAttack(t, e, i=1) {
              this.log("triggerAttack", t, e, i);
              let n = this.toSeconds(e);
              return this._triggerEnvelopeAttack(n, i),
              this.setNote(t, n),
              this
          }
          triggerRelease(t) {
              this.log("triggerRelease", t);
              let e = this.toSeconds(t);
              return this._triggerEnvelopeRelease(e),
              this
          }
          setNote(t, e) {
              let i = this.toSeconds(e)
                , n = t instanceof rp ? t.toFrequency() : t;
              if (this.portamento > 0 && this.getLevelAtTime(i) > .05) {
                  let t = this.toSeconds(this.portamento);
                  this.frequency.exponentialRampTo(n, t, i)
              } else
                  this.frequency.setValueAtTime(n, i);
              return this
          }
      }
      (0,
      sB.__decorate)([ae(0)], ao.prototype, "portamento", void 0);
      class al extends as {
          constructor() {
              super(sY(al.getDefaults(), arguments, ["attack", "decay", "sustain", "release"])),
              this.name = "AmplitudeEnvelope",
              this._gainNode = new rT({
                  context: this.context,
                  gain: 0
              }),
              this.output = this._gainNode,
              this.input = this._gainNode,
              this._sig.connect(this._gainNode.gain),
              this.output = this._gainNode,
              this.input = this._gainNode
          }
          dispose() {
              return super.dispose(),
              this._gainNode.dispose(),
              this
          }
      }
      class au extends ao {
          constructor() {
              super(sY(au.getDefaults(), arguments)),
              this.name = "Synth";
              let t = sY(au.getDefaults(), arguments);
              this.oscillator = new r7(Object.assign({
                  context: this.context,
                  detune: t.detune,
                  onstop: () => this.onsilence(this)
              }, t.oscillator)),
              this.frequency = this.oscillator.frequency,
              this.detune = this.oscillator.detune,
              this.envelope = new al(Object.assign({
                  context: this.context
              }, t.envelope)),
              this.oscillator.chain(this.envelope, this.output),
              s9(this, ["oscillator", "frequency", "detune", "envelope"])
          }
          static getDefaults() {
              return Object.assign(ao.getDefaults(), {
                  envelope: Object.assign(sH(as.getDefaults(), Object.keys(rb.getDefaults())), {
                      attack: .005,
                      decay: .1,
                      release: 1,
                      sustain: .3
                  }),
                  oscillator: Object.assign(sH(r7.getDefaults(), [...Object.keys(rY.getDefaults()), "frequency", "detune"]), {
                      type: "triangle"
                  })
              })
          }
          _triggerEnvelopeAttack(t, e) {
              if (this.envelope.triggerAttack(t, e),
              this.oscillator.start(t),
              0 === this.envelope.sustain) {
                  let e = this.toSeconds(this.envelope.attack)
                    , i = this.toSeconds(this.envelope.decay);
                  this.oscillator.stop(t + e + i)
              }
          }
          _triggerEnvelopeRelease(t) {
              this.envelope.triggerRelease(t),
              this.oscillator.stop(t + this.toSeconds(this.envelope.release))
          }
          getLevelAtTime(t) {
              return t = this.toSeconds(t),
              this.envelope.getValueAtTime(t)
          }
          dispose() {
              return super.dispose(),
              this.oscillator.dispose(),
              this.envelope.dispose(),
              this
          }
      }
      class ac extends au {
          constructor() {
              super(sY(ac.getDefaults(), arguments)),
              this.name = "MembraneSynth",
              this.portamento = 0;
              let t = sY(ac.getDefaults(), arguments);
              this.pitchDecay = t.pitchDecay,
              this.octaves = t.octaves,
              s9(this, ["oscillator", "envelope"])
          }
          static getDefaults() {
              return sU(ao.getDefaults(), au.getDefaults(), {
                  envelope: {
                      attack: .001,
                      attackCurve: "exponential",
                      decay: .4,
                      release: 1.4,
                      sustain: .01
                  },
                  octaves: 10,
                  oscillator: {
                      type: "sine"
                  },
                  pitchDecay: .05
              })
          }
          setNote(t, e) {
              let i = this.toSeconds(e)
                , n = this.toFrequency(t instanceof rp ? t.toFrequency() : t)
                , s = n * this.octaves;
              return this.oscillator.frequency.setValueAtTime(s, i),
              this.oscillator.frequency.exponentialRampToValueAtTime(n, i + this.toSeconds(this.pitchDecay)),
              this
          }
          dispose() {
              return super.dispose(),
              this
          }
      }
      (0,
      sB.__decorate)([at(0)], ac.prototype, "octaves", void 0),
      (0,
      sB.__decorate)([ae(0)], ac.prototype, "pitchDecay", void 0);
      let ah = new Set;
      function ad(t, e) {
          let i = `registerProcessor("${t}", ${e})`;
          ah.add(i)
      }
      t1 = `
/**
 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
 */
class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

  constructor(options) {
    
    super(options);
    /**
     * If the processor was disposed or not. Keep alive until it's disposed.
     */
    this.disposed = false;
       /** 
     * The number of samples in the processing block
     */
    this.blockSize = 128;
    /**
     * the sample rate
     */
    this.sampleRate = sampleRate;

    this.port.onmessage = (event) => {
      // when it receives a dispose 
      if (event.data === "dispose") {
        this.disposed = true;
      }
    };
  }
}
`,
      ah.add(t1),
      t2 = `
/**
 * Abstract class for a single input/output processor. 
 * has a 'generate' function which processes one sample at a time
 */
class SingleIOProcessor extends ToneAudioWorkletProcessor {

  constructor(options) {
    super(Object.assign(options, {
      numberOfInputs: 1,
      numberOfOutputs: 1
    }));
    /**
     * Holds the name of the parameter and a single value of that
     * parameter at the current sample
     * @type { [name: string]: number }
     */
    this.params = {}
  }

  /**
   * Generate an output sample from the input sample and parameters
   * @abstract
   * @param input number
   * @param channel number
   * @param parameters { [name: string]: number }
   * @returns number
   */
  generate(){}

  /**
   * Update the private params object with the 
   * values of the parameters at the given index
   * @param parameters { [name: string]: Float32Array },
   * @param index number
   */
  updateParams(parameters, index) {
    for (const paramName in parameters) {
      const param = parameters[paramName];
      if (param.length > 1) {
        this.params[paramName] = parameters[paramName][index];
      } else {
        this.params[paramName] = parameters[paramName][0];
      }
    }
  }

  /**
   * Process a single frame of the audio
   * @param inputs Float32Array[][]
   * @param outputs Float32Array[][]
   */
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];
    // get the parameter values
    const channelCount = Math.max(input && input.length || 0, output.length);
    for (let sample = 0; sample < this.blockSize; sample++) {
      this.updateParams(parameters, sample);
      for (let channel = 0; channel < channelCount; channel++) {
        const inputSample = input && input.length ? input[channel][sample] : 0;
        output[channel][sample] = this.generate(inputSample, channel, this.params);
      }
    }
    return !this.disposed;
  }
};
`,
      ah.add(t2),
      t3 = `
/**
 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
 */
class DelayLine {
  
  constructor(size, channels) {
    this.buffer = [];
    this.writeHead = []
    this.size = size;

    // create the empty channels
    for (let i = 0; i < channels; i++) {
      this.buffer[i] = new Float32Array(this.size);
      this.writeHead[i] = 0;
    }
  }

  /**
   * Push a value onto the end
   * @param channel number
   * @param value number
   */
  push(channel, value) {
    this.writeHead[channel] += 1;
    if (this.writeHead[channel] > this.size) {
      this.writeHead[channel] = 0;
    }
    this.buffer[channel][this.writeHead[channel]] = value;
  }

  /**
   * Get the recorded value of the channel given the delay
   * @param channel number
   * @param delay number delay samples
   */
  get(channel, delay) {
    let readHead = this.writeHead[channel] - Math.floor(delay);
    if (readHead < 0) {
      readHead += this.size;
    }
    return this.buffer[channel][readHead];
  }
}
`,
      ah.add(t3),
      ad("feedback-comb-filter", `
class FeedbackCombFilterWorklet extends SingleIOProcessor {

  constructor(options) {
    super(options);
    this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
  }

  static get parameterDescriptors() {
    return [{
      name: "delayTime",
      defaultValue: 0.1,
      minValue: 0,
      maxValue: 1,
      automationRate: "k-rate"
    }, {
      name: "feedback",
      defaultValue: 0.5,
      minValue: 0,
      maxValue: 0.9999,
      automationRate: "k-rate"
    }];
  }

  generate(input, channel, parameters) {
    const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
    this.delayLine.push(channel, input + delayedSample * parameters.feedback);
    return delayedSample;
  }
}
`);
      class ap extends aa {
          constructor() {
              super(sY(ap.getDefaults(), arguments, ["voice", "options"])),
              this.name = "PolySynth",
              this._availableVoices = [],
              this._activeVoices = [],
              this._voices = [],
              this._gcTimeout = -1,
              this._averageActiveVoices = 0;
              let t = sY(ap.getDefaults(), arguments, ["voice", "options"]);
              sC(!sI(t.voice), "DEPRECATED: The polyphony count is no longer the first argument.");
              let e = t.voice.getDefaults();
              this.options = Object.assign(e, t.options),
              this.voice = t.voice,
              this.maxPolyphony = t.maxPolyphony,
              this._dummyVoice = this._getNextAvailableVoice();
              let i = this._voices.indexOf(this._dummyVoice);
              this._voices.splice(i, 1),
              this._gcTimeout = this.context.setInterval(this._collectGarbage.bind(this), 1)
          }
          static getDefaults() {
              return Object.assign(aa.getDefaults(), {
                  maxPolyphony: 32,
                  options: {},
                  voice: au
              })
          }
          get activeVoices() {
              return this._activeVoices.length
          }
          _makeVoiceAvailable(t) {
              this._availableVoices.push(t);
              let e = this._activeVoices.findIndex(e => e.voice === t);
              this._activeVoices.splice(e, 1)
          }
          _getNextAvailableVoice() {
              if (this._availableVoices.length)
                  return this._availableVoices.shift();
              if (this._voices.length < this.maxPolyphony) {
                  let t = new this.voice(Object.assign(this.options, {
                      context: this.context,
                      onsilence: this._makeVoiceAvailable.bind(this)
                  }));
                  return t.connect(this.output),
                  this._voices.push(t),
                  t
              }
              sE("Max polyphony exceeded. Note dropped.")
          }
          _collectGarbage() {
              if (this._averageActiveVoices = Math.max(.95 * this._averageActiveVoices, this.activeVoices),
              this._availableVoices.length && this._voices.length > Math.ceil(this._averageActiveVoices + 1)) {
                  let t = this._availableVoices.shift()
                    , e = this._voices.indexOf(t);
                  this._voices.splice(e, 1),
                  this.context.isOffline || t.dispose()
              }
          }
          _triggerAttack(t, e, i) {
              t.forEach(t => {
                  let n = new rP(this.context,t).toMidi()
                    , s = this._getNextAvailableVoice();
                  s && (s.triggerAttack(t, e, i),
                  this._activeVoices.push({
                      midi: n,
                      voice: s,
                      released: !1
                  }),
                  this.log("triggerAttack", t, e))
              }
              )
          }
          _triggerRelease(t, e) {
              t.forEach(t => {
                  let i = new rP(this.context,t).toMidi()
                    , n = this._activeVoices.find( ({midi: t, released: e}) => t === i && !e);
                  n && (n.voice.triggerRelease(e),
                  n.released = !0,
                  this.log("triggerRelease", t, e))
              }
              )
          }
          _scheduleEvent(t, e, i, n) {
              sC(!this.disposed, "Synth was already disposed"),
              i <= this.now() ? "attack" === t ? this._triggerAttack(e, i, n) : this._triggerRelease(e, i) : this.context.setTimeout( () => {
                  this._scheduleEvent(t, e, i, n)
              }
              , i - this.now())
          }
          triggerAttack(t, e, i) {
              Array.isArray(t) || (t = [t]);
              let n = this.toSeconds(e);
              return this._scheduleEvent("attack", t, n, i),
              this
          }
          triggerRelease(t, e) {
              Array.isArray(t) || (t = [t]);
              let i = this.toSeconds(e);
              return this._scheduleEvent("release", t, i),
              this
          }
          triggerAttackRelease(t, e, i, n) {
              let s = this.toSeconds(i);
              if (this.triggerAttack(t, s, n),
              sj(e)) {
                  sC(sj(t), "If the duration is an array, the notes must also be an array");
                  for (let i = 0; i < t.length; i++) {
                      let n = e[Math.min(i, e.length - 1)]
                        , r = this.toSeconds(n);
                      sC(r > 0, "The duration must be greater than 0"),
                      this.triggerRelease(t[i], s + r)
                  }
              } else {
                  let i = this.toSeconds(e);
                  sC(i > 0, "The duration must be greater than 0"),
                  this.triggerRelease(t, s + i)
              }
              return this
          }
          sync() {
              return this._syncState() && (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 1)),
              this
          }
          set(t) {
              let e = sH(t, ["onsilence", "context"]);
              return this.options = sU(this.options, e),
              this._voices.forEach(t => t.set(e)),
              this._dummyVoice.set(e),
              this
          }
          get() {
              return this._dummyVoice.get()
          }
          releaseAll(t) {
              let e = this.toSeconds(t);
              return this._activeVoices.forEach( ({voice: t}) => {
                  t.triggerRelease(e)
              }
              ),
              this
          }
          dispose() {
              return super.dispose(),
              this._dummyVoice.dispose(),
              this._voices.forEach(t => t.dispose()),
              this._activeVoices = [],
              this._availableVoices = [],
              this.context.clearInterval(this._gcTimeout),
              this
          }
      }
      class af extends aa {
          constructor() {
              super(sY(af.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")),
              this.name = "Sampler",
              this._activeSources = new Map;
              let t = sY(af.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls")
                , e = {};
              Object.keys(t.urls).forEach(i => {
                  let n = parseInt(i, 10);
                  sC(sF(i) || sI(n) && isFinite(n), `url key is neither a note or midi pitch: ${i}`),
                  sF(i) ? e[new rp(this.context,i).toMidi()] = t.urls[i] : sI(n) && isFinite(n) && (e[n] = t.urls[n])
              }
              ),
              this._buffers = new rI({
                  urls: e,
                  onload: t.onload,
                  baseUrl: t.baseUrl,
                  onerror: t.onerror
              }),
              this.attack = t.attack,
              this.release = t.release,
              this.curve = t.curve,
              this._buffers.loaded && Promise.resolve().then(t.onload)
          }
          static getDefaults() {
              return Object.assign(aa.getDefaults(), {
                  attack: 0,
                  baseUrl: "",
                  curve: "exponential",
                  onload: s7,
                  onerror: s7,
                  release: .1,
                  urls: {}
              })
          }
          _findClosest(t) {
              let e = 0;
              for (; e < 96; ) {
                  if (this._buffers.has(t + e))
                      return -e;
                  if (this._buffers.has(t - e))
                      return e;
                  e++
              }
              throw Error(`No available buffers for note: ${t}`)
          }
          triggerAttack(t, e, i=1) {
              return this.log("triggerAttack", t, e, i),
              Array.isArray(t) || (t = [t]),
              t.forEach(t => {
                  let n = ru(new rp(this.context,t).toFrequency())
                    , s = Math.round(n)
                    , r = n - s
                    , a = this._findClosest(s)
                    , o = s - a
                    , l = this._buffers.get(o)
                    , u = ra(a + r)
                    , c = new rG({
                      url: l,
                      context: this.context,
                      curve: this.curve,
                      fadeIn: this.attack,
                      fadeOut: this.release,
                      playbackRate: u
                  }).connect(this.output);
                  c.start(e, 0, l.duration / u, i),
                  sj(this._activeSources.get(s)) || this._activeSources.set(s, []),
                  this._activeSources.get(s).push(c),
                  c.onended = () => {
                      if (this._activeSources && this._activeSources.has(s)) {
                          let t = this._activeSources.get(s)
                            , e = t.indexOf(c);
                          -1 !== e && t.splice(e, 1)
                      }
                  }
              }
              ),
              this
          }
          triggerRelease(t, e) {
              return this.log("triggerRelease", t, e),
              Array.isArray(t) || (t = [t]),
              t.forEach(t => {
                  let i = new rp(this.context,t).toMidi();
                  if (this._activeSources.has(i) && this._activeSources.get(i).length) {
                      let t = this._activeSources.get(i);
                      e = this.toSeconds(e),
                      t.forEach(t => {
                          t.stop(e)
                      }
                      ),
                      this._activeSources.set(i, [])
                  }
              }
              ),
              this
          }
          releaseAll(t) {
              let e = this.toSeconds(t);
              return this._activeSources.forEach(t => {
                  for (; t.length; )
                      t.shift().stop(e)
              }
              ),
              this
          }
          sync() {
              return this._syncState() && (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 1)),
              this
          }
          triggerAttackRelease(t, e, i, n=1) {
              let s = this.toSeconds(i);
              return this.triggerAttack(t, s, n),
              sj(e) ? (sC(sj(t), "notes must be an array when duration is array"),
              t.forEach( (t, i) => {
                  let n = e[Math.min(i, e.length - 1)];
                  this.triggerRelease(t, s + this.toSeconds(n))
              }
              )) : this.triggerRelease(t, s + this.toSeconds(e)),
              this
          }
          add(t, e, i) {
              if (sC(sF(t) || isFinite(t), `note must be a pitch or midi: ${t}`),
              sF(t)) {
                  let n = new rp(this.context,t).toMidi();
                  this._buffers.add(n, e, i)
              } else
                  this._buffers.add(t, e, i);
              return this
          }
          get loaded() {
              return this._buffers.loaded
          }
          dispose() {
              return super.dispose(),
              this._buffers.dispose(),
              this._activeSources.forEach(t => {
                  t.forEach(t => t.dispose())
              }
              ),
              this._activeSources.clear(),
              this
          }
      }
      (0,
      sB.__decorate)([ae(0)], af.prototype, "attack", void 0),
      (0,
      sB.__decorate)([ae(0)], af.prototype, "release", void 0);
      class am extends r_ {
          constructor() {
              super(sY(am.getDefaults(), arguments, ["callback", "value"])),
              this.name = "ToneEvent",
              this._state = new rv("stopped"),
              this._startOffset = 0;
              let t = sY(am.getDefaults(), arguments, ["callback", "value"]);
              this._loop = t.loop,
              this.callback = t.callback,
              this.value = t.value,
              this._loopStart = this.toTicks(t.loopStart),
              this._loopEnd = this.toTicks(t.loopEnd),
              this._playbackRate = t.playbackRate,
              this._probability = t.probability,
              this._humanize = t.humanize,
              this.mute = t.mute,
              this._playbackRate = t.playbackRate,
              this._state.increasing = !0,
              this._rescheduleEvents()
          }
          static getDefaults() {
              return Object.assign(r_.getDefaults(), {
                  callback: s7,
                  humanize: !1,
                  loop: !1,
                  loopEnd: "1m",
                  loopStart: 0,
                  mute: !1,
                  playbackRate: 1,
                  probability: 1,
                  value: null
              })
          }
          _rescheduleEvents(t=-1) {
              this._state.forEachFrom(t, t => {
                  let e;
                  if ("started" === t.state) {
                      -1 !== t.id && this.context.transport.clear(t.id);
                      let i = t.time + Math.round(this.startOffset / this._playbackRate);
                      if (!0 === this._loop || sI(this._loop) && this._loop > 1) {
                          e = 1 / 0,
                          sI(this._loop) && (e = this._loop * this._getLoopDuration());
                          let n = this._state.getAfter(i);
                          null !== n && (e = Math.min(e, n.time - i)),
                          e !== 1 / 0 && (this._state.setStateAtTime("stopped", i + e + 1, {
                              id: -1
                          }),
                          e = new rV(this.context,e));
                          let s = new rV(this.context,this._getLoopDuration());
                          t.id = this.context.transport.scheduleRepeat(this._tick.bind(this), s, new rV(this.context,i), e)
                      } else
                          t.id = this.context.transport.schedule(this._tick.bind(this), new rV(this.context,i))
                  }
              }
              )
          }
          get state() {
              return this._state.getValueAtTime(this.context.transport.ticks)
          }
          get startOffset() {
              return this._startOffset
          }
          set startOffset(t) {
              this._startOffset = t
          }
          get probability() {
              return this._probability
          }
          set probability(t) {
              this._probability = t
          }
          get humanize() {
              return this._humanize
          }
          set humanize(t) {
              this._humanize = t
          }
          start(t) {
              let e = this.toTicks(t);
              return "stopped" === this._state.getValueAtTime(e) && (this._state.add({
                  id: -1,
                  state: "started",
                  time: e
              }),
              this._rescheduleEvents(e)),
              this
          }
          stop(t) {
              this.cancel(t);
              let e = this.toTicks(t);
              if ("started" === this._state.getValueAtTime(e)) {
                  this._state.setStateAtTime("stopped", e, {
                      id: -1
                  });
                  let t = this._state.getBefore(e)
                    , i = e;
                  null !== t && (i = t.time),
                  this._rescheduleEvents(i)
              }
              return this
          }
          cancel(t) {
              t = sG(t, -1 / 0);
              let e = this.toTicks(t);
              return this._state.forEachFrom(e, t => {
                  this.context.transport.clear(t.id)
              }
              ),
              this._state.cancel(e),
              this
          }
          _tick(t) {
              let e = this.context.transport.getTicksAtTime(t);
              if (!this.mute && "started" === this._state.getValueAtTime(e)) {
                  if (this.probability < 1 && Math.random() > this.probability)
                      return;
                  if (this.humanize) {
                      let e = .02;
                      sV(this.humanize) || (e = this.toSeconds(this.humanize)),
                      t += (2 * Math.random() - 1) * e
                  }
                  this.callback(t, this.value)
              }
          }
          _getLoopDuration() {
              return Math.round((this._loopEnd - this._loopStart) / this._playbackRate)
          }
          get loop() {
              return this._loop
          }
          set loop(t) {
              this._loop = t,
              this._rescheduleEvents()
          }
          get playbackRate() {
              return this._playbackRate
          }
          set playbackRate(t) {
              this._playbackRate = t,
              this._rescheduleEvents()
          }
          get loopEnd() {
              return new rV(this.context,this._loopEnd).toSeconds()
          }
          set loopEnd(t) {
              this._loopEnd = this.toTicks(t),
              this._loop && this._rescheduleEvents()
          }
          get loopStart() {
              return new rV(this.context,this._loopStart).toSeconds()
          }
          set loopStart(t) {
              this._loopStart = this.toTicks(t),
              this._loop && this._rescheduleEvents()
          }
          get progress() {
              if (!this._loop)
                  return 0;
              {
                  let t = this.context.transport.ticks
                    , e = this._state.get(t);
                  if (null === e || "started" !== e.state)
                      return 0;
                  {
                      let i = this._getLoopDuration();
                      return (t - e.time) % i / i
                  }
              }
          }
          dispose() {
              return super.dispose(),
              this.cancel(),
              this._state.dispose(),
              this
          }
      }
      class ag extends r_ {
          constructor() {
              super(sY(ag.getDefaults(), arguments, ["callback", "interval"])),
              this.name = "Loop";
              let t = sY(ag.getDefaults(), arguments, ["callback", "interval"]);
              this._event = new am({
                  context: this.context,
                  callback: this._tick.bind(this),
                  loop: !0,
                  loopEnd: t.interval,
                  playbackRate: t.playbackRate,
                  probability: t.probability
              }),
              this.callback = t.callback,
              this.iterations = t.iterations
          }
          static getDefaults() {
              return Object.assign(r_.getDefaults(), {
                  interval: "4n",
                  callback: s7,
                  playbackRate: 1,
                  iterations: 1 / 0,
                  probability: 1,
                  mute: !1,
                  humanize: !1
              })
          }
          start(t) {
              return this._event.start(t),
              this
          }
          stop(t) {
              return this._event.stop(t),
              this
          }
          cancel(t) {
              return this._event.cancel(t),
              this
          }
          _tick(t) {
              this.callback(t)
          }
          get state() {
              return this._event.state
          }
          get progress() {
              return this._event.progress
          }
          get interval() {
              return this._event.loopEnd
          }
          set interval(t) {
              this._event.loopEnd = t
          }
          get playbackRate() {
              return this._event.playbackRate
          }
          set playbackRate(t) {
              this._event.playbackRate = t
          }
          get humanize() {
              return this._event.humanize
          }
          set humanize(t) {
              this._event.humanize = t
          }
          get probability() {
              return this._event.probability
          }
          set probability(t) {
              this._event.probability = t
          }
          get mute() {
              return this._event.mute
          }
          set mute(t) {
              this._event.mute = t
          }
          get iterations() {
              return !0 === this._event.loop ? 1 / 0 : this._event.loop
          }
          set iterations(t) {
              t === 1 / 0 ? this._event.loop = !0 : this._event.loop = t
          }
          dispose() {
              return super.dispose(),
              this._event.dispose(),
              this
          }
      }
      function *a_(t) {
          let e = 0;
          for (; e < t.length; )
              e = ab(e, t),
              yield t[e],
              e++
      }
      function *av(t) {
          let e = t.length - 1;
          for (; e >= 0; )
              e = ab(e, t),
              yield t[e],
              e--
      }
      function *ay(t, e) {
          for (; ; )
              yield*e(t)
      }
      function ab(t, e) {
          return sJ(t, 0, e.length - 1)
      }
      function *ax(t, e) {
          let i = e ? 0 : t.length - 1;
          for (; ; )
              i = ab(i, t),
              yield t[i],
              e ? ++i >= t.length - 1 && (e = !1) : --i <= 0 && (e = !0)
      }
      function *aw(t) {
          let e = 0
            , i = 0;
          for (; e < t.length; )
              e = ab(e, t),
              yield t[e],
              e += ++i % 2 ? 2 : -1
      }
      function *aT(t) {
          let e = t.length - 1
            , i = 0;
          for (; e >= 0; )
              e = ab(e, t),
              yield t[e],
              e += ++i % 2 ? -2 : 1
      }
      function *aS(t) {
          let e = [];
          for (let i = 0; i < t.length; i++)
              e.push(i);
          for (; e.length > 0; ) {
              let i = ab(e.splice(Math.floor(e.length * Math.random()), 1)[0], t);
              yield t[i]
          }
      }
      function *ak(t, e="up", i=0) {
          switch (sC(t.length > 0, "The array must have more than one value in it"),
          e) {
          case "up":
              yield*ay(t, a_);
          case "down":
              yield*ay(t, av);
          case "upDown":
              yield*ax(t, !0);
          case "downUp":
              yield*ax(t, !1);
          case "alternateUp":
              yield*ay(t, aw);
          case "alternateDown":
              yield*ay(t, aT);
          case "random":
              yield*function*(t) {
                  for (; ; ) {
                      let e = Math.floor(Math.random() * t.length);
                      yield t[e]
                  }
              }(t);
          case "randomOnce":
              yield*ay(t, aS);
          case "randomWalk":
              yield*function*(t) {
                  let e = Math.floor(Math.random() * t.length);
                  for (; ; )
                      0 === e ? e++ : e === t.length - 1 ? e-- : .5 > Math.random() ? e-- : e++,
                      yield t[e]
              }(t)
          }
      }
      class aC extends ag {
          constructor() {
              super(sY(aC.getDefaults(), arguments, ["callback", "values", "pattern"])),
              this.name = "Pattern";
              let t = sY(aC.getDefaults(), arguments, ["callback", "values", "pattern"]);
              this.callback = t.callback,
              this._values = t.values,
              this._pattern = ak(t.values, t.pattern),
              this._type = t.pattern
          }
          static getDefaults() {
              return Object.assign(ag.getDefaults(), {
                  pattern: "up",
                  values: [],
                  callback: s7
              })
          }
          _tick(t) {
              let e = this._pattern.next();
              this._value = e.value,
              this.callback(t, this._value)
          }
          get values() {
              return this._values
          }
          set values(t) {
              this._values = t,
              this.pattern = this._type
          }
          get value() {
              return this._value
          }
          get pattern() {
              return this._type
          }
          set pattern(t) {
              this._type = t,
              this._pattern = ak(this._values, this._type)
          }
      }
      class aA extends rb {
          constructor() {
              super(Object.assign(sY(aA.getDefaults(), arguments, ["fade"]))),
              this.name = "CrossFade",
              this._panner = this.context.createStereoPanner(),
              this._split = this.context.createChannelSplitter(2),
              this._g2a = new an({
                  context: this.context
              }),
              this.a = new rT({
                  context: this.context,
                  gain: 0
              }),
              this.b = new rT({
                  context: this.context,
                  gain: 0
              }),
              this.output = new rT({
                  context: this.context
              }),
              this._internalChannels = [this.a, this.b];
              let t = sY(aA.getDefaults(), arguments, ["fade"]);
              this.fade = new rC({
                  context: this.context,
                  units: "normalRange",
                  value: t.fade
              }),
              s9(this, "fade"),
              this.context.getConstant(1).connect(this._panner),
              this._panner.connect(this._split),
              this._panner.channelCount = 1,
              this._panner.channelCountMode = "explicit",
              rw(this._split, this.a.gain, 0),
              rw(this._split, this.b.gain, 1),
              this.fade.chain(this._g2a, this._panner.pan),
              this.a.connect(this.output),
              this.b.connect(this.output)
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  fade: .5
              })
          }
          dispose() {
              return super.dispose(),
              this.a.dispose(),
              this.b.dispose(),
              this.output.dispose(),
              this.fade.dispose(),
              this._g2a.dispose(),
              this._panner.disconnect(),
              this._split.disconnect(),
              this
          }
      }
      class aO extends rb {
          constructor(t) {
              super(t),
              this.name = "Effect",
              this._dryWet = new aA({
                  context: this.context
              }),
              this.wet = this._dryWet.fade,
              this.effectSend = new rT({
                  context: this.context
              }),
              this.effectReturn = new rT({
                  context: this.context
              }),
              this.input = new rT({
                  context: this.context
              }),
              this.output = this._dryWet,
              this.input.fan(this._dryWet.a, this.effectSend),
              this.effectReturn.connect(this._dryWet.b),
              this.wet.setValueAtTime(t.wet, 0),
              this._internalChannels = [this.effectReturn, this.effectSend],
              s9(this, "wet")
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  wet: 1
              })
          }
          connectEffect(t) {
              return this._internalChannels.push(t),
              this.effectSend.chain(t, this.effectReturn),
              this
          }
          dispose() {
              return super.dispose(),
              this._dryWet.dispose(),
              this.effectSend.dispose(),
              this.effectReturn.dispose(),
              this.wet.dispose(),
              this
          }
      }
      class aM extends rb {
          constructor() {
              super(Object.assign(sY(aM.getDefaults(), arguments, ["pan"]))),
              this.name = "Panner",
              this._panner = this.context.createStereoPanner(),
              this.input = this._panner,
              this.output = this._panner;
              let t = sY(aM.getDefaults(), arguments, ["pan"]);
              this.pan = new ry({
                  context: this.context,
                  param: this._panner.pan,
                  value: t.pan,
                  minValue: -1,
                  maxValue: 1
              }),
              this._panner.channelCount = t.channelCount,
              this._panner.channelCountMode = "explicit",
              s9(this, "pan")
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  pan: 0,
                  channelCount: 1
              })
          }
          dispose() {
              return super.dispose(),
              this._panner.disconnect(),
              this.pan.dispose(),
              this
          }
      }
      ad("bit-crusher", `
class BitCrusherWorklet extends SingleIOProcessor {

  static get parameterDescriptors() {
    return [{
      name: "bits",
      defaultValue: 12,
      minValue: 1,
      maxValue: 16,
      automationRate: 'k-rate'
    }];
  }

  generate(input, _channel, parameters) {
    const step = Math.pow(0.5, parameters.bits - 1);
    const val = step * Math.floor(input / step + 0.5);
    return val;
  }
}
`);
      class aE extends rb {
          constructor() {
              super(sY(aE.getDefaults(), arguments, ["channels"])),
              this.name = "Merge";
              let t = sY(aE.getDefaults(), arguments, ["channels"]);
              this._merger = this.output = this.input = this.context.createChannelMerger(t.channels)
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  channels: 2
              })
          }
          dispose() {
              return super.dispose(),
              this._merger.disconnect(),
              this
          }
      }
      class aD extends aO {
          constructor(t) {
              super(t),
              this.name = "FeedbackEffect",
              this._feedbackGain = new rT({
                  context: this.context,
                  gain: t.feedback,
                  units: "normalRange"
              }),
              this.feedback = this._feedbackGain.gain,
              s9(this, "feedback"),
              this.effectReturn.chain(this._feedbackGain, this.effectSend)
          }
          static getDefaults() {
              return Object.assign(aO.getDefaults(), {
                  feedback: .125
              })
          }
          dispose() {
              return super.dispose(),
              this._feedbackGain.dispose(),
              this.feedback.dispose(),
              this
          }
      }
      class aR extends aD {
          constructor() {
              super(sY(aR.getDefaults(), arguments, ["delayTime", "feedback"])),
              this.name = "FeedbackDelay";
              let t = sY(aR.getDefaults(), arguments, ["delayTime", "feedback"]);
              this._delayNode = new rR({
                  context: this.context,
                  delayTime: t.delayTime,
                  maxDelay: t.maxDelay
              }),
              this.delayTime = this._delayNode.delayTime,
              this.connectEffect(this._delayNode),
              s9(this, "delayTime")
          }
          static getDefaults() {
              return Object.assign(aD.getDefaults(), {
                  delayTime: .25,
                  maxDelay: 1
              })
          }
          dispose() {
              return super.dispose(),
              this._delayNode.dispose(),
              this.delayTime.dispose(),
              this
          }
      }
      class aI extends aO {
          constructor() {
              super(sY(aI.getDefaults(), arguments, ["decay"])),
              this.name = "Reverb",
              this._convolver = this.context.createConvolver(),
              this.ready = Promise.resolve();
              let t = sY(aI.getDefaults(), arguments, ["decay"]);
              this._decay = t.decay,
              this._preDelay = t.preDelay,
              this.generate(),
              this.connectEffect(this._convolver)
          }
          static getDefaults() {
              return Object.assign(aO.getDefaults(), {
                  decay: 1.5,
                  preDelay: .01
              })
          }
          get decay() {
              return this._decay
          }
          set decay(t) {
              sA(t = this.toSeconds(t), .001),
              this._decay = t,
              this.generate()
          }
          get preDelay() {
              return this._preDelay
          }
          set preDelay(t) {
              sA(t = this.toSeconds(t), 0),
              this._preDelay = t,
              this.generate()
          }
          generate() {
              return (0,
              sB.__awaiter)(this, void 0, void 0, function*() {
                  let t = this.ready
                    , e = new re(2,this._decay + this._preDelay,this.context.sampleRate)
                    , i = new rH({
                      context: e
                  })
                    , n = new rH({
                      context: e
                  })
                    , s = new aE({
                      context: e
                  });
                  i.connect(s, 0, 0),
                  n.connect(s, 0, 1);
                  let r = new rT({
                      context: e
                  }).toDestination();
                  s.connect(r),
                  i.start(0),
                  n.start(0),
                  r.gain.setValueAtTime(0, 0),
                  r.gain.setValueAtTime(1, this._preDelay),
                  r.gain.exponentialApproachValueAtTime(0, this._preDelay, this.decay);
                  let a = e.render();
                  return this.ready = a.then(s7),
                  yield t,
                  this._convolver.buffer = (yield a).get(),
                  this
              })
          }
          dispose() {
              return super.dispose(),
              this._convolver.disconnect(),
              this
          }
      }
      class aP extends rb {
          constructor() {
              super(sY(aP.getDefaults(), arguments, ["solo"])),
              this.name = "Solo";
              let t = sY(aP.getDefaults(), arguments, ["solo"]);
              this.input = this.output = new rT({
                  context: this.context
              }),
              aP._allSolos.has(this.context) || aP._allSolos.set(this.context, new Set),
              aP._allSolos.get(this.context).add(this),
              this.solo = t.solo
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  solo: !1
              })
          }
          get solo() {
              return this._isSoloed()
          }
          set solo(t) {
              t ? this._addSolo() : this._removeSolo(),
              aP._allSolos.get(this.context).forEach(t => t._updateSolo())
          }
          get muted() {
              return 0 === this.input.gain.value
          }
          _addSolo() {
              aP._soloed.has(this.context) || aP._soloed.set(this.context, new Set),
              aP._soloed.get(this.context).add(this)
          }
          _removeSolo() {
              aP._soloed.has(this.context) && aP._soloed.get(this.context).delete(this)
          }
          _isSoloed() {
              return aP._soloed.has(this.context) && aP._soloed.get(this.context).has(this)
          }
          _noSolos() {
              return !aP._soloed.has(this.context) || aP._soloed.has(this.context) && 0 === aP._soloed.get(this.context).size
          }
          _updateSolo() {
              this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0
          }
          dispose() {
              return super.dispose(),
              aP._allSolos.get(this.context).delete(this),
              this._removeSolo(),
              this
          }
      }
      aP._allSolos = new Map,
      aP._soloed = new Map;
      class aV extends rb {
          constructor() {
              super(sY(aV.getDefaults(), arguments, ["pan", "volume"])),
              this.name = "PanVol";
              let t = sY(aV.getDefaults(), arguments, ["pan", "volume"]);
              this._panner = this.input = new aM({
                  context: this.context,
                  pan: t.pan,
                  channelCount: t.channelCount
              }),
              this.pan = this._panner.pan,
              this._volume = this.output = new rz({
                  context: this.context,
                  volume: t.volume
              }),
              this.volume = this._volume.volume,
              this._panner.connect(this._volume),
              this.mute = t.mute,
              s9(this, ["pan", "volume"])
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  mute: !1,
                  pan: 0,
                  volume: 0,
                  channelCount: 1
              })
          }
          get mute() {
              return this._volume.mute
          }
          set mute(t) {
              this._volume.mute = t
          }
          dispose() {
              return super.dispose(),
              this._panner.dispose(),
              this.pan.dispose(),
              this._volume.dispose(),
              this.volume.dispose(),
              this
          }
      }
      class aj extends rb {
          constructor() {
              super(sY(aj.getDefaults(), arguments, ["volume", "pan"])),
              this.name = "Channel";
              let t = sY(aj.getDefaults(), arguments, ["volume", "pan"]);
              this._solo = this.input = new aP({
                  solo: t.solo,
                  context: this.context
              }),
              this._panVol = this.output = new aV({
                  context: this.context,
                  pan: t.pan,
                  volume: t.volume,
                  mute: t.mute,
                  channelCount: t.channelCount
              }),
              this.pan = this._panVol.pan,
              this.volume = this._panVol.volume,
              this._solo.connect(this._panVol),
              s9(this, ["pan", "volume"])
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  pan: 0,
                  volume: 0,
                  mute: !1,
                  solo: !1,
                  channelCount: 1
              })
          }
          get solo() {
              return this._solo.solo
          }
          set solo(t) {
              this._solo.solo = t
          }
          get muted() {
              return this._solo.muted || this.mute
          }
          get mute() {
              return this._panVol.mute
          }
          set mute(t) {
              this._panVol.mute = t
          }
          _getBus(t) {
              return aj.buses.has(t) || aj.buses.set(t, new rT({
                  context: this.context
              })),
              aj.buses.get(t)
          }
          send(t, e=0) {
              let i = this._getBus(t)
                , n = new rT({
                  context: this.context,
                  units: "decibels",
                  gain: e
              });
              return this.connect(n),
              n.connect(i),
              n
          }
          receive(t) {
              return this._getBus(t).connect(this),
              this
          }
          dispose() {
              return super.dispose(),
              this._panVol.dispose(),
              this.pan.dispose(),
              this.volume.dispose(),
              this._solo.dispose(),
              this
          }
      }
      aj.buses = new Map;
      class aN extends rb {
          constructor() {
              super(...arguments),
              this.name = "Listener",
              this.positionX = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.positionX
              }),
              this.positionY = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.positionY
              }),
              this.positionZ = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.positionZ
              }),
              this.forwardX = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.forwardX
              }),
              this.forwardY = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.forwardY
              }),
              this.forwardZ = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.forwardZ
              }),
              this.upX = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.upX
              }),
              this.upY = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.upY
              }),
              this.upZ = new ry({
                  context: this.context,
                  param: this.context.rawContext.listener.upZ
              })
          }
          static getDefaults() {
              return Object.assign(rb.getDefaults(), {
                  positionX: 0,
                  positionY: 0,
                  positionZ: 0,
                  forwardX: 0,
                  forwardY: 0,
                  forwardZ: -1,
                  upX: 0,
                  upY: 1,
                  upZ: 0
              })
          }
          dispose() {
              return super.dispose(),
              this.positionX.dispose(),
              this.positionY.dispose(),
              this.positionZ.dispose(),
              this.forwardX.dispose(),
              this.forwardY.dispose(),
              this.forwardZ.dispose(),
              this.upX.dispose(),
              this.upY.dispose(),
              this.upZ.dispose(),
              this
          }
      }
      function aF() {
          return rs().now()
      }
      s1(t => {
          t.listener = new aN({
              context: t
          })
      }
      ),
      s3(t => {
          t.listener.dispose()
      }
      );
      let az = rs().transport;
      rs().destination,
      rs().destination,
      rs().listener,
      rs().draw;
      let aq = rs()
  },
  3897: function(t) {
      t.exports = function(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, n = Array(e); i < e; i++)
              n[i] = t[i];
          return n
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  5372: function(t) {
      t.exports = function(t) {
          if (Array.isArray(t))
              return t
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  6690: function(t) {
      t.exports = function(t, e) {
          if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function")
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  9728: function(t, e, i) {
      var n = i(4062);
      function s(t, e) {
          for (var i = 0; i < e.length; i++) {
              var s = e[i];
              s.enumerable = s.enumerable || !1,
              s.configurable = !0,
              "value"in s && (s.writable = !0),
              Object.defineProperty(t, n(s.key), s)
          }
      }
      t.exports = function(t, e, i) {
          return e && s(t.prototype, e),
          i && s(t, i),
          Object.defineProperty(t, "prototype", {
              writable: !1
          }),
          t
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  8872: function(t) {
      t.exports = function(t, e) {
          var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != i) {
              var n, s, r, a, o = [], l = !0, u = !1;
              try {
                  if (r = (i = i.call(t)).next,
                  0 === e) {
                      if (Object(i) !== i)
                          return;
                      l = !1
                  } else
                      for (; !(l = (n = r.call(i)).done) && (o.push(n.value),
                      o.length !== e); l = !0)
                          ;
              } catch (t) {
                  u = !0,
                  s = t
              } finally {
                  try {
                      if (!l && null != i.return && (a = i.return(),
                      Object(a) !== a))
                          return
                  } finally {
                      if (u)
                          throw s
                  }
              }
              return o
          }
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  2218: function(t) {
      t.exports = function() {
          throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  7424: function(t, e, i) {
      var n = i(5372)
        , s = i(8872)
        , r = i(6116)
        , a = i(2218);
      t.exports = function(t, e) {
          return n(t) || s(t, e) || r(t, e) || a()
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  5036: function(t, e, i) {
      var n = i(8698).default;
      t.exports = function(t, e) {
          if ("object" != n(t) || !t)
              return t;
          var i = t[Symbol.toPrimitive];
          if (void 0 !== i) {
              var s = i.call(t, e || "default");
              if ("object" != n(s))
                  return s;
              throw TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === e ? String : Number)(t)
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  4062: function(t, e, i) {
      var n = i(8698).default
        , s = i(5036);
      t.exports = function(t) {
          var e = s(t, "string");
          return "symbol" == n(e) ? e : e + ""
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  8698: function(t) {
      function e(i) {
          return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
          ,
          t.exports.__esModule = !0,
          t.exports.default = t.exports,
          e(i)
      }
      t.exports = e,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  6116: function(t, e, i) {
      var n = i(3897);
      t.exports = function(t, e) {
          if (t) {
              if ("string" == typeof t)
                  return n(t, e);
              var i = Object.prototype.toString.call(t).slice(8, -1);
              if ("Object" === i && t.constructor && (i = t.constructor.name),
              "Map" === i || "Set" === i)
                  return Array.from(t);
              if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                  return n(t, e)
          }
      }
      ,
      t.exports.__esModule = !0,
      t.exports.default = t.exports
  },
  7582: function(t, e, i) {
      "use strict";
      i.r(e),
      i.d(e, {
          __addDisposableResource: function() {
              return V
          },
          __assign: function() {
              return r
          },
          __asyncDelegator: function() {
              return C
          },
          __asyncGenerator: function() {
              return k
          },
          __asyncValues: function() {
              return A
          },
          __await: function() {
              return S
          },
          __awaiter: function() {
              return f
          },
          __classPrivateFieldGet: function() {
              return R
          },
          __classPrivateFieldIn: function() {
              return P
          },
          __classPrivateFieldSet: function() {
              return I
          },
          __createBinding: function() {
              return g
          },
          __decorate: function() {
              return o
          },
          __disposeResources: function() {
              return N
          },
          __esDecorate: function() {
              return u
          },
          __exportStar: function() {
              return v
          },
          __extends: function() {
              return s
          },
          __generator: function() {
              return m
          },
          __importDefault: function() {
              return D
          },
          __importStar: function() {
              return E
          },
          __makeTemplateObject: function() {
              return O
          },
          __metadata: function() {
              return p
          },
          __param: function() {
              return l
          },
          __propKey: function() {
              return h
          },
          __read: function() {
              return b
          },
          __rest: function() {
              return a
          },
          __runInitializers: function() {
              return c
          },
          __setFunctionName: function() {
              return d
          },
          __spread: function() {
              return x
          },
          __spreadArray: function() {
              return T
          },
          __spreadArrays: function() {
              return w
          },
          __values: function() {
              return y
          }
      });
      var n = function(t, e) {
          return (n = Object.setPrototypeOf || ({
              __proto__: []
          })instanceof Array && function(t, e) {
              t.__proto__ = e
          }
          || function(t, e) {
              for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }
          )(t, e)
      };
      function s(t, e) {
          if ("function" != typeof e && null !== e)
              throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
          function i() {
              this.constructor = t
          }
          n(t, e),
          t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
          new i)
      }
      var r = function() {
          return (r = Object.assign || function(t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                  for (var s in e = arguments[i])
                      Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
              return t
          }
          ).apply(this, arguments)
      };
      function a(t, e) {
          var i = {};
          for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
              for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
                  0 > e.indexOf(n[s]) && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
          return i
      }
      function o(t, e, i, n) {
          var s, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
              a = Reflect.decorate(t, e, i, n);
          else
              for (var o = t.length - 1; o >= 0; o--)
                  (s = t[o]) && (a = (r < 3 ? s(a) : r > 3 ? s(e, i, a) : s(e, i)) || a);
          return r > 3 && a && Object.defineProperty(e, i, a),
          a
      }
      function l(t, e) {
          return function(i, n) {
              e(i, n, t)
          }
      }
      function u(t, e, i, n, s, r) {
          function a(t) {
              if (void 0 !== t && "function" != typeof t)
                  throw TypeError("Function expected");
              return t
          }
          for (var o, l = n.kind, u = "getter" === l ? "get" : "setter" === l ? "set" : "value", c = !e && t ? n.static ? t : t.prototype : null, h = e || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), d = !1, p = i.length - 1; p >= 0; p--) {
              var f = {};
              for (var m in n)
                  f[m] = "access" === m ? {} : n[m];
              for (var m in n.access)
                  f.access[m] = n.access[m];
              f.addInitializer = function(t) {
                  if (d)
                      throw TypeError("Cannot add initializers after decoration has completed");
                  r.push(a(t || null))
              }
              ;
              var g = (0,
              i[p])("accessor" === l ? {
                  get: h.get,
                  set: h.set
              } : h[u], f);
              if ("accessor" === l) {
                  if (void 0 === g)
                      continue;
                  if (null === g || "object" != typeof g)
                      throw TypeError("Object expected");
                  (o = a(g.get)) && (h.get = o),
                  (o = a(g.set)) && (h.set = o),
                  (o = a(g.init)) && s.unshift(o)
              } else
                  (o = a(g)) && ("field" === l ? s.unshift(o) : h[u] = o)
          }
          c && Object.defineProperty(c, n.name, h),
          d = !0
      }
      function c(t, e, i) {
          for (var n = arguments.length > 2, s = 0; s < e.length; s++)
              i = n ? e[s].call(t, i) : e[s].call(t);
          return n ? i : void 0
      }
      function h(t) {
          return "symbol" == typeof t ? t : "".concat(t)
      }
      function d(t, e, i) {
          return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""),
          Object.defineProperty(t, "name", {
              configurable: !0,
              value: i ? "".concat(i, " ", e) : e
          })
      }
      function p(t, e) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
              return Reflect.metadata(t, e)
      }
      function f(t, e, i, n) {
          return new (i || (i = Promise))(function(s, r) {
              function a(t) {
                  try {
                      l(n.next(t))
                  } catch (t) {
                      r(t)
                  }
              }
              function o(t) {
                  try {
                      l(n.throw(t))
                  } catch (t) {
                      r(t)
                  }
              }
              function l(t) {
                  var e;
                  t.done ? s(t.value) : ((e = t.value)instanceof i ? e : new i(function(t) {
                      t(e)
                  }
                  )).then(a, o)
              }
              l((n = n.apply(t, e || [])).next())
          }
          )
      }
      function m(t, e) {
          var i, n, s, r, a = {
              label: 0,
              sent: function() {
                  if (1 & s[0])
                      throw s[1];
                  return s[1]
              },
              trys: [],
              ops: []
          };
          return r = {
              next: o(0),
              throw: o(1),
              return: o(2)
          },
          "function" == typeof Symbol && (r[Symbol.iterator] = function() {
              return this
          }
          ),
          r;
          function o(o) {
              return function(l) {
                  return function(o) {
                      if (i)
                          throw TypeError("Generator is already executing.");
                      for (; r && (r = 0,
                      o[0] && (a = 0)),
                      a; )
                          try {
                              if (i = 1,
                              n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                              0) : n.next) && !(s = s.call(n, o[1])).done)
                                  return s;
                              switch (n = 0,
                              s && (o = [2 & o[0], s.value]),
                              o[0]) {
                              case 0:
                              case 1:
                                  s = o;
                                  break;
                              case 4:
                                  return a.label++,
                                  {
                                      value: o[1],
                                      done: !1
                                  };
                              case 5:
                                  a.label++,
                                  n = o[1],
                                  o = [0];
                                  continue;
                              case 7:
                                  o = a.ops.pop(),
                                  a.trys.pop();
                                  continue;
                              default:
                                  if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                      a = 0;
                                      continue
                                  }
                                  if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                      a.label = o[1];
                                      break
                                  }
                                  if (6 === o[0] && a.label < s[1]) {
                                      a.label = s[1],
                                      s = o;
                                      break
                                  }
                                  if (s && a.label < s[2]) {
                                      a.label = s[2],
                                      a.ops.push(o);
                                      break
                                  }
                                  s[2] && a.ops.pop(),
                                  a.trys.pop();
                                  continue
                              }
                              o = e.call(t, a)
                          } catch (t) {
                              o = [6, t],
                              n = 0
                          } finally {
                              i = s = 0
                          }
                      if (5 & o[0])
                          throw o[1];
                      return {
                          value: o[0] ? o[1] : void 0,
                          done: !0
                      }
                  }([o, l])
              }
          }
      }
      var g = Object.create ? function(t, e, i, n) {
          void 0 === n && (n = i);
          var s = Object.getOwnPropertyDescriptor(e, i);
          (!s || ("get"in s ? !e.__esModule : s.writable || s.configurable)) && (s = {
              enumerable: !0,
              get: function() {
                  return e[i]
              }
          }),
          Object.defineProperty(t, n, s)
      }
      : function(t, e, i, n) {
          void 0 === n && (n = i),
          t[n] = e[i]
      }
      ;
      function v(t, e) {
          for (var i in t)
              "default" === i || Object.prototype.hasOwnProperty.call(e, i) || g(e, t, i)
      }
      function y(t) {
          var e = "function" == typeof Symbol && Symbol.iterator
            , i = e && t[e]
            , n = 0;
          if (i)
              return i.call(t);
          if (t && "number" == typeof t.length)
              return {
                  next: function() {
                      return t && n >= t.length && (t = void 0),
                      {
                          value: t && t[n++],
                          done: !t
                      }
                  }
              };
          throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }
      function b(t, e) {
          var i = "function" == typeof Symbol && t[Symbol.iterator];
          if (!i)
              return t;
          var n, s, r = i.call(t), a = [];
          try {
              for (; (void 0 === e || e-- > 0) && !(n = r.next()).done; )
                  a.push(n.value)
          } catch (t) {
              s = {
                  error: t
              }
          } finally {
              try {
                  n && !n.done && (i = r.return) && i.call(r)
              } finally {
                  if (s)
                      throw s.error
              }
          }
          return a
      }
      function x() {
          for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(b(arguments[e]));
          return t
      }
      function w() {
          for (var t = 0, e = 0, i = arguments.length; e < i; e++)
              t += arguments[e].length;
          for (var n = Array(t), s = 0, e = 0; e < i; e++)
              for (var r = arguments[e], a = 0, o = r.length; a < o; a++,
              s++)
                  n[s] = r[a];
          return n
      }
      function T(t, e, i) {
          if (i || 2 == arguments.length)
              for (var n, s = 0, r = e.length; s < r; s++)
                  !n && s in e || (n || (n = Array.prototype.slice.call(e, 0, s)),
                  n[s] = e[s]);
          return t.concat(n || Array.prototype.slice.call(e))
      }
      function S(t) {
          return this instanceof S ? (this.v = t,
          this) : new S(t)
      }
      function k(t, e, i) {
          if (!Symbol.asyncIterator)
              throw TypeError("Symbol.asyncIterator is not defined.");
          var n, s = i.apply(t, e || []), r = [];
          return n = {},
          a("next"),
          a("throw"),
          a("return"),
          n[Symbol.asyncIterator] = function() {
              return this
          }
          ,
          n;
          function a(t) {
              s[t] && (n[t] = function(e) {
                  return new Promise(function(i, n) {
                      r.push([t, e, i, n]) > 1 || o(t, e)
                  }
                  )
              }
              )
          }
          function o(t, e) {
              try {
                  var i;
                  (i = s[t](e)).value instanceof S ? Promise.resolve(i.value.v).then(l, u) : c(r[0][2], i)
              } catch (t) {
                  c(r[0][3], t)
              }
          }
          function l(t) {
              o("next", t)
          }
          function u(t) {
              o("throw", t)
          }
          function c(t, e) {
              t(e),
              r.shift(),
              r.length && o(r[0][0], r[0][1])
          }
      }
      function C(t) {
          var e, i;
          return e = {},
          n("next"),
          n("throw", function(t) {
              throw t
          }),
          n("return"),
          e[Symbol.iterator] = function() {
              return this
          }
          ,
          e;
          function n(n, s) {
              e[n] = t[n] ? function(e) {
                  return (i = !i) ? {
                      value: S(t[n](e)),
                      done: !1
                  } : s ? s(e) : e
              }
              : s
          }
      }
      function A(t) {
          if (!Symbol.asyncIterator)
              throw TypeError("Symbol.asyncIterator is not defined.");
          var e, i = t[Symbol.asyncIterator];
          return i ? i.call(t) : (t = y(t),
          e = {},
          n("next"),
          n("throw"),
          n("return"),
          e[Symbol.asyncIterator] = function() {
              return this
          }
          ,
          e);
          function n(i) {
              e[i] = t[i] && function(e) {
                  return new Promise(function(n, s) {
                      !function(t, e, i, n) {
                          Promise.resolve(n).then(function(e) {
                              t({
                                  value: e,
                                  done: i
                              })
                          }, e)
                      }(n, s, (e = t[i](e)).done, e.value)
                  }
                  )
              }
          }
      }
      function O(t, e) {
          return Object.defineProperty ? Object.defineProperty(t, "raw", {
              value: e
          }) : t.raw = e,
          t
      }
      var M = Object.create ? function(t, e) {
          Object.defineProperty(t, "default", {
              enumerable: !0,
              value: e
          })
      }
      : function(t, e) {
          t.default = e
      }
      ;
      function E(t) {
          if (t && t.__esModule)
              return t;
          var e = {};
          if (null != t)
              for (var i in t)
                  "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && g(e, t, i);
          return M(e, t),
          e
      }
      function D(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }
      function R(t, e, i, n) {
          if ("a" === i && !n)
              throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
              throw TypeError("Cannot read private member from an object whose class did not declare it");
          return "m" === i ? n : "a" === i ? n.call(t) : n ? n.value : e.get(t)
      }
      function I(t, e, i, n, s) {
          if ("m" === n)
              throw TypeError("Private method is not writable");
          if ("a" === n && !s)
              throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !s : !e.has(t))
              throw TypeError("Cannot write private member to an object whose class did not declare it");
          return "a" === n ? s.call(t, i) : s ? s.value = i : e.set(t, i),
          i
      }
      function P(t, e) {
          if (null === e || "object" != typeof e && "function" != typeof e)
              throw TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof t ? e === t : t.has(e)
      }
      function V(t, e, i) {
          if (null != e) {
              var n;
              if ("object" != typeof e && "function" != typeof e)
                  throw TypeError("Object expected.");
              if (i) {
                  if (!Symbol.asyncDispose)
                      throw TypeError("Symbol.asyncDispose is not defined.");
                  n = e[Symbol.asyncDispose]
              }
              if (void 0 === n) {
                  if (!Symbol.dispose)
                      throw TypeError("Symbol.dispose is not defined.");
                  n = e[Symbol.dispose]
              }
              if ("function" != typeof n)
                  throw TypeError("Object not disposable.");
              t.stack.push({
                  value: e,
                  dispose: n,
                  async: i
              })
          } else
              i && t.stack.push({
                  async: !0
              });
          return e
      }
      var j = "function" == typeof SuppressedError ? SuppressedError : function(t, e, i) {
          var n = Error(i);
          return n.name = "SuppressedError",
          n.error = t,
          n.suppressed = e,
          n
      }
      ;
      function N(t) {
          function e(e) {
              t.error = t.hasError ? new j(e,t.error,"An error was suppressed during disposal.") : e,
              t.hasError = !0
          }
          return function i() {
              for (; t.stack.length; ) {
                  var n = t.stack.pop();
                  try {
                      var s = n.dispose && n.dispose.call(n.value);
                      if (n.async)
                          return Promise.resolve(s).then(i, function(t) {
                              return e(t),
                              i()
                          })
                  } catch (t) {
                      e(t)
                  }
              }
              if (t.hasError)
                  throw t.error
          }()
      }
      e.default = {
          __extends: s,
          __assign: r,
          __rest: a,
          __decorate: o,
          __param: l,
          __metadata: p,
          __awaiter: f,
          __generator: m,
          __createBinding: g,
          __exportStar: v,
          __values: y,
          __read: b,
          __spread: x,
          __spreadArrays: w,
          __spreadArray: T,
          __await: S,
          __asyncGenerator: k,
          __asyncDelegator: C,
          __asyncValues: A,
          __makeTemplateObject: O,
          __importStar: E,
          __importDefault: D,
          __classPrivateFieldGet: R,
          __classPrivateFieldSet: I,
          __classPrivateFieldIn: P,
          __addDisposableResource: V,
          __disposeResources: N
      }
  },
  2870: function(t) {
      "use strict";
      t.exports = JSON.parse('[{"title":"Tomorrow when The War began","slug":"Tomorrow-when-The-War-began","collaborator":"—","type":"Individual","timeline":"August 2025 - November 2025","imageUrl":"/public/assets/images/Final 10 Projects/Tomorrow when The War began/06_drawing13.jpg","description":"<span> The Clandestine Medical Facility is understood as a \\"hidden field hospital\\" in the Glebe Markets. It is to serve the Ironbark Resistance members injured in confrontation with the occupying power. The design of the field hospital begins with assumption due to the site\'s conditions - all patients will arrive by walking or through public transport on Glebe Point Road. Thus, out of the four categories which define medical facility capabilities where T1 is most severe and T4 is least, the Clandestine Medical Facility will predominately not serve T1 (Immediate or Red) as per NATO AMedP-1.10 / STANAG 2879. T1 is defined as life-threatening but survivable with rapid intervention. Examples: airway obstruction, severe bleeding/shock, tension pneumothorax, open chest/abdominal wounds, unconscious with airway at risk. </span> <span> Before executing this brief, the overall strategy must be understood through Ends + Ways + Means, as coined by Colonel Arthur F. Lykke Jr., US Army, Retired, for successful execution. Ends are goals. Ways are concepts. Means are resources/tactics. Seen from this vantage point, the Logistic Basline Signature (LBS), prepared earlier, serves the Ways which provides data of the Glebe Market milieu to be exploited for the purposes of the Clandestine Medical Facility. As the LBS provides the most full-picture story of the Glebe Market with causal, scalar, space-time, diverse subjects, discernability and detectability assessment of data, the Clandestine Medical Facility exploits three main Ways: (1) archetypal and repeating behaviours of marshalls, permanent vendor, casual vendors; (2) Where the eyes or ears of actors fall in space within the Glebe Market; (3) Precise times of the day to act where eyes or ears are directed towards or away operations. Refer to the LBS - moments M.015, M.018, M.030-M.034 and its constituent instants for reference. </span> <span> As a result, the Clandestine Medical Facility team provides three architectural Means: (1) an orchestrated disarray of items facilitating the camouflaged transition into a concealed nurse triage through the architectural powers of sensory overloads; (2) through the guise of a tailoring stall and mobile alterations trolley the intervention operates within Glebe Markets as covert medical infrastructure, manipulating logistical flows and visibility; and (3) a Thai massage parlour that relocates its identity to disorient occupying power\'s sense of discernability for successful surgery room functions. In conclusion, these three tactics will achieve the Ends of accommodating \\"hidden field hospital\\" infiltration, exfiltration and functions. </span>"},{"title":"North Eveleigh Tech Hub ","slug":"North-Eveleigh-Tech-Hub","collaborator":"—","type":"Individual","timeline":"February 2023 - June 2023","imageUrl":"/public/assets/images/Final 10 Projects/North Eveleigh Tech Hub /00_studio3a_presentation_moneyshot.jpg","description":"<span>A last minute reversal of my third year propopal where I prioritized improved graphical representation and technical handdrawing.</span>"},{"title":"A Renascant Exchange","slug":"A-Renascant-Exchange","collaborator":"w/ Shaelem Lolesi","type":"Educational","timeline":"August 2024 - November 2024","imageUrl":"/public/assets/images/Final 10 Projects/A Renascant Exchange/00_market-entrance-43.jpg","description":"<span> This project reimagines the marketplace as a site of historical, ecological, and cultural exchange. Set within Sydney\'s Blackwattle Bay, the Souq proposal reflects the layered palimpsest of the site—once a tidal marshland inhabited by First Nations peoples, later industrialised into a dense network of warehouses and viaducts. Responding to this complex legacy, the architectural intervention seeks to balance the natural and industrial histories by creating a marketplace that is both materially grounded and ecologically restorative.</span> <span>The conceptual and architectural framework was instigated by an experimental object—an early design exploration of counterweights and hydrological tension. This object, which responds dynamically to changes in water weight, became a metaphor for the larger design ambition: to balance opposing forces—natural and industrial, past and present, open and enclosed. The object\'s logic of exchange and equilibrium informed the formal, spatial, and programmatic strategies of the entire proposal.</span> <span>The Souq adopts a linear pavilion typology that stretches across the site in dialogue with existing infrastructures like the viaduct and a newly proposed creek. Courtyards between pavilions act as biophilic impluviums, restoring indigenous ecologies and responding to the site\'s flood-prone conditions. These spaces also serve as civic forums—open, accessible, and meditative.</span> <span>Public infrastructure, including a new light rail station and ferry wharf, transforms the market into a regional destination. Within, hawker stalls, wet markets, and auction houses animate the site with social and economic exchange. Yet beyond commerce, the Souq functions as a cultural vessel—evoking memory, landscape, and community renewal.</span> <span>Through architecture that embraces layered time and material storytelling, the Souq becomes more than a market—it becomes a place where Sydney can re-meet its shoreline, its history, and itself.</span>"},{"title":"Traces: A Palimpsest Project","slug":"Traces-A-Palimpsest-Project","collaborator":"w/ Mitchell Kolunic","type":"Educational","timeline":"February 2025 - June 2025","imageUrl":"/public/assets/images/Final 10 Projects/Traces A Palimpsest Project/02_04.jpg","description":"<span> This project, Traces: A Palimpsest Project, proposes a series of architectural interventions within the Convict Precinct of Cockatoo Island that aim to reveal, not reconstruct, the site\'s layered history. Through a restrained palette of stone, earth, and timber, the design makes memory legible in material and movement—inviting the public to engage with what has been erased, forgotten, or overlooked.</span> <span>Three key interventions form the spatial sequence: a re-inscribed sandstone pathway, a lightweight modular timber roof, and a courtyard framed by rammed earth walls. Each draws on a different aspect of the island\'s past—its vanished structures, its constrained atmospheres, its cultivated yet controlled gardens—and offers a new mode of engagement. The path traces foundations with locally sourced and reclaimed sandstone, transforming the act of walking into a reading of the ground. The timber roof, assembled from recycled plywood, reanimates the barracks interior by framing material details, offering vertical access, and layering multiple perspectives. The courtyard garden, defined by unstabilised rammed earth walls and endemic flora, inverts the oppressive logic of the original fortress walls—replacing confinement with reflection.</span> <span>Materials are sourced with intent: sandstone from the island and nearby quarries, earth from metro excavations across Sydney, and timber reused from formwork processes. These choices reinforce a practice of low-impact, circular construction while grounding the project in both geological and civic continuity.</span> <span>Ultimately, Traces: A Palimpsest Project draws inspiration from the ethos of unofficial art—architecture as humble, grounded storytelling. It proposes that enduring cultural memory can emerge not from monumental gestures, but from careful, crafted acts that expose what time has layered into the land. In doing so, it offers a spatial narrative that connects past and present through texture, light, and the quiet persistence of material.</span>"},{"title":"Richmond Childcare ","slug":"Richmond-Childcare","collaborator":"w/ Quantum 3D","type":"Professional","timeline":"February 2025 - Ongoing","imageUrl":"/public/assets/images/Final 10 Projects/Richmond Childcare/01_richmondchildcare.jpg","description":"<span> Of Castlereagh Road, the proposal is a multistorey childcare presenting a modest and distinct presense to the context in suburban Western Sydney. Spanning over two residential lots, it maximises the site for children operation capacity, car park quantity and optimum internal and external physical environmental design. The center can be broken in two parts: a familiar barn-style volume with a lower brick veneer with awning and upper standing seam hat for staff administration and kitchen space. </span>"}, {"title":"Lets Build a Beautiful City 2025 by INTBAU Netherlands","slug":"Lets-Build-a-Beautiful-City-2025-by-INTBAU-Netherlands","collaborator":"—","type":"Educational","timeline":"July 2025 - August 2025","imageUrl":"/public/assets/images/Final 10 Projects/Lets Build a Beautiful City 2025 by INTBAU Netherlands/04_DSCF2880 editted.jpg","description":"<span> Urban design is more important than ever. With the housing crisis, an increasingly vulnerable environment and the threat of climate change, we need to rethink how we approach the building of cities as a society. We cannot afford to create low-quality, short-term solutions - we need to build to sustain, to use less resources in the long term and reduce our environmental impact. We must learn from past mistakes. Many mass housing developments have proven to not be as attractive, and thus as future-proof, as the designers intended. As a society we need more beautiful, attractive places; but how to build these?</span>"}, {"title":"Richmond Mall Rotunda","slug":"Richmond-Mall-Rotunda","collaborator":"w/ Jav Pablo","type":"Professional","timeline":"June 2025 - Ongoing","imageUrl":"/public/assets/images/Final 10 Projects/Richmond Mall Rotunda/00_IMG_6581.jpg","description":"<span> The new rotunda for the historical Windor township is a new beautiful, ornate pavilion. It will be built using only traditional joinery, and using trait de charpente a technique to scribe and cut it\'s unique geometric shape. It will feature a twisted spire, the first in Australia.</span>"}, {"title":"Custody of the Architect\'s Heart","slug":"Custody-of-the-Architects-Heart","collaborator":"—","type":"Academic","timeline":"January 2025 - Ongoing","imageUrl":"/public/assets/images/Final 10 Projects/Custody of the Architects Heart/custody-of-the-architects-heart-title-page-1.jpg","description":"<span> This essay explores the inner transformation required of architects before they can authentically reform the world, beginning with a \\"spiritual surgery\\" of the heart. It critically engages with the rising movement in Australian architecture that turns to Aboriginal spirituality and Country-centric design as a moral and cultural compass. While this movement attempts to repair the wounds inflicted by exploitative, excessive, and disconnected design, the essay argues that true rebellion begins within — through humility, contemplation, and the rediscovery of metaphysical truths. Architecture, then, is not merely a political or environmental act but a spiritual vocation requiring moral transformation. Only through interior conversion can architects truely attempt to heal the deeper wounds of the world.</span>"},{"title":"Ethnography of Negotiation: Framework to investigate Rammed Earth implementation","slug":"Ethnography-of-Negotiation-Framework-to-investigate-Rammed-Earth-implementation","collaborator":"—","type":"Individual","timeline":"February 2025 - November 2025","imageUrl":"/public/assets/images/Final 10 Projects/Ethnography of Negotiation Framework to investigate Rammed Earth implementation/0_ETHNOGRAPHY OF NEGOTIATION cover image.png","description":"<span> Ethnography of Negotiation  is an architectural ethnography that follows the journey of a structural rammed earth wall through design and construction within a Class 9a/9b building in Sydney, Australia. This research offers context-rich, previously unavailable knowledge cautioning about the practical complications that arise when low-carbon materials confront real high-stakes regulation. Drawing on Actor-Network Theory (ANT), the study traces how legislation, design intent, and material behavior are constantly negotiated across sketches, approvals, and site decisions. Through document analysis and site observations, the research exposes the unseen frictions, institutional habits, and material culture that accompany the use of alternative technologies in practice. In doing so, it provides needed nuance in the adoption of low-carban, sustainable construction methods, revealing how alternative materials are not simply adopted but fundamentally reshaped—sometimes contorted—by the regulatory ecologies they inhabit.</span>"}, {"title":"Pittwater Summer School 2025 by Glenn Murcutt Architecture Foundation","slug":"Pittwater-Summer-School-2025-by-Glenn-Murcutt-Architecture-Foundation","collaborator":"w/ Hinatea Jones, Andréa Lambert, Donovan Ryan","type":"Educational","timeline":"February 2025","imageUrl":"/public/assets/images/Final 10 Projects/Pittwater Summer School 2025 by Glenn Murcutt Architecture Foundation/00_IMG_9327.jpg","description":"<span> A worthy summer school which I was actively discerning the nature of the vocation of the architect. My biggest takeaway is custody of the architect\'s heart. Unprogram the heart from the world (\\"world\\" as business-as-usual, corruption, injustice) and conform it with receptivity to the Divine Logos and His works. Only then your heart will be sensitive and capable of co-creating beauty.</span>"}]') }
}, function(t) { 
  var e = function(e) {
      return t(t.s = e)
  };
  t.O(0, [774, 179], function() {
      return e(6840),
      e(4546)
  }),
  _N_E = t.O()
}
]);

