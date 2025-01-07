(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6664: function (e, t, r) {
      !(function (e, t) {
        "use strict";
        function ownKeys(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function _objectSpread2(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ownKeys(Object(r), !0).forEach(function (t) {
                  _defineProperty(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        function _typeof(e) {
          return (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function _defineProperty(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        function _slicedToArray(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r,
                n,
                s =
                  e &&
                  (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"]);
              if (null != s) {
                var a = [],
                  i = !0,
                  o = !1;
                try {
                  for (
                    s = s.call(e);
                    !(i = (r = s.next()).done) &&
                    (a.push(r.value), !t || a.length !== t);
                    i = !0
                  );
                } catch (e) {
                  (o = !0), (n = e);
                } finally {
                  try {
                    i || null == s.return || s.return();
                  } finally {
                    if (o) throw n;
                  }
                }
                return a;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return _arrayLikeToArray(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r)
                )
                  return Array.from(e);
                if (
                  "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                )
                  return _arrayLikeToArray(e, t);
              }
            })(e, t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function _arrayLikeToArray(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        (t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t),
          (emptyFunctionWithReset.resetWarningCache = emptyFunction);
        var r,
          n,
          s =
            ((r = n = { exports: {} }),
            n.exports,
            (r.exports = (function () {
              function shim(e, t, r, n, s, a) {
                if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
                  var i = Error(
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                  throw ((i.name = "Invariant Violation"), i);
                }
              }
              function getShim() {
                return shim;
              }
              shim.isRequired = shim;
              var e = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction,
              };
              return (e.PropTypes = e), e;
            })()),
            n.exports),
          usePrevious = function (e) {
            var r = t.useRef(e);
            return (
              t.useEffect(
                function () {
                  r.current = e;
                },
                [e]
              ),
              r.current
            );
          },
          isUnknownObject = function (e) {
            return null !== e && "object" === _typeof(e);
          },
          a = "[object Object]",
          isEqual = function isEqual(e, t) {
            if (!isUnknownObject(e) || !isUnknownObject(t)) return e === t;
            var r = Array.isArray(e);
            if (r !== Array.isArray(t)) return !1;
            var n = Object.prototype.toString.call(e) === a;
            if (n !== (Object.prototype.toString.call(t) === a)) return !1;
            if (!n && !r) return e === t;
            var s = Object.keys(e),
              i = Object.keys(t);
            if (s.length !== i.length) return !1;
            for (var o = {}, l = 0; l < s.length; l += 1) o[s[l]] = !0;
            for (var c = 0; c < i.length; c += 1) o[i[c]] = !0;
            var u = Object.keys(o);
            return (
              u.length === s.length &&
              u.every(function (r) {
                return isEqual(e[r], t[r]);
              })
            );
          },
          extractAllowedOptionsUpdates = function (e, t, r) {
            return isUnknownObject(e)
              ? Object.keys(e).reduce(function (n, s) {
                  var a = !isUnknownObject(t) || !isEqual(e[s], t[s]);
                  return r.includes(s)
                    ? (a &&
                        console.warn(
                          "Unsupported prop change: options.".concat(
                            s,
                            " is not a mutable property."
                          )
                        ),
                      n)
                    : a
                    ? _objectSpread2(
                        _objectSpread2({}, n || {}),
                        {},
                        _defineProperty({}, s, e[s])
                      )
                    : n;
                }, null)
              : null;
          },
          i =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
          validateStripe = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i;
            if (
              null === e ||
              (isUnknownObject(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment)
            )
              return e;
            throw Error(t);
          },
          parseStripeProp = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : i;
            if (isUnknownObject(e) && "function" == typeof e.then)
              return {
                tag: "async",
                stripePromise: Promise.resolve(e).then(function (e) {
                  return validateStripe(e, t);
                }),
              };
            var r = validateStripe(e, t);
            return null === r ? { tag: "empty" } : { tag: "sync", stripe: r };
          },
          registerWithStripeJs = function (e) {
            e &&
              e._registerWrapper &&
              e.registerAppInfo &&
              (e._registerWrapper({
                name: "react-stripe-js",
                version: "2.2.0",
              }),
              e.registerAppInfo({
                name: "react-stripe-js",
                version: "2.2.0",
                url: "https://stripe.com/docs/stripe-js/react",
              }));
          },
          o = ["on", "session"],
          l = t.createContext(null);
        l.displayName = "CustomCheckoutSdkContext";
        var parseCustomCheckoutSdkContext = function (e, t) {
            if (!e)
              throw Error(
                "Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(
                  t,
                  " in an <CustomCheckoutProvider> provider."
                )
              );
            return e;
          },
          c = t.createContext(null);
        c.displayName = "CustomCheckoutContext";
        var extractCustomCheckoutContextValue = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var r = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                s = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    s = {},
                    a = Object.keys(e);
                  for (n = 0; n < a.length; n++)
                    (r = a[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                  return s;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (s[r] = e[r]);
              }
              return s;
            })(e, o);
            return t
              ? _objectSpread2(_objectSpread2({}, r), t)
              : _objectSpread2(_objectSpread2({}, r), e.session());
          },
          CustomCheckoutProvider = function (e) {
            var r = e.stripe,
              n = e.options,
              s = e.children,
              a = t.useMemo(
                function () {
                  return parseStripeProp(
                    r,
                    "Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."
                  );
                },
                [r]
              ),
              i = _slicedToArray(t.useState(null), 2),
              o = i[0],
              u = i[1],
              d = _slicedToArray(
                t.useState(function () {
                  return {
                    stripe: "sync" === a.tag ? a.stripe : null,
                    customCheckoutSdk: null,
                  };
                }),
                2
              ),
              h = d[0],
              m = d[1],
              safeSetContext = function (e, t) {
                m(function (r) {
                  return r.stripe && r.customCheckoutSdk
                    ? r
                    : { stripe: e, customCheckoutSdk: t };
                });
              },
              p = t.useRef(!1);
            t.useEffect(
              function () {
                var e = !0;
                return (
                  "async" !== a.tag || h.stripe
                    ? "sync" === a.tag &&
                      a.stripe &&
                      !p.current &&
                      ((p.current = !0),
                      a.stripe.initCustomCheckout(n).then(function (e) {
                        e && (safeSetContext(a.stripe, e), e.on("change", u));
                      }))
                    : a.stripePromise.then(function (t) {
                        t &&
                          e &&
                          !p.current &&
                          ((p.current = !0),
                          t.initCustomCheckout(n).then(function (e) {
                            e && (safeSetContext(t, e), e.on("change", u));
                          }));
                      }),
                  function () {
                    e = !1;
                  }
                );
              },
              [a, h, n, u]
            );
            var f = usePrevious(r);
            t.useEffect(
              function () {
                null !== f &&
                  f !== r &&
                  console.warn(
                    "Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it."
                  );
              },
              [f, r]
            );
            var g = usePrevious(n);
            t.useEffect(
              function () {
                if (h.customCheckoutSdk) {
                  !n.clientSecret ||
                    isUnknownObject(g) ||
                    isEqual(n.clientSecret, g.clientSecret) ||
                    console.warn(
                      "Unsupported prop change: options.client_secret is not a mutable property."
                    );
                  var e,
                    t,
                    r =
                      null == g
                        ? void 0
                        : null === (e = g.elementsOptions) || void 0 === e
                        ? void 0
                        : e.appearance,
                    s =
                      null == n
                        ? void 0
                        : null === (t = n.elementsOptions) || void 0 === t
                        ? void 0
                        : t.appearance;
                  s &&
                    !isEqual(s, r) &&
                    h.customCheckoutSdk.changeAppearance(s);
                }
              },
              [n, g, h.customCheckoutSdk]
            ),
              t.useEffect(
                function () {
                  registerWithStripeJs(h.stripe);
                },
                [h.stripe]
              );
            var x = t.useMemo(
              function () {
                return extractCustomCheckoutContextValue(
                  h.customCheckoutSdk,
                  o
                );
              },
              [h.customCheckoutSdk, o]
            );
            return h.customCheckoutSdk
              ? t.createElement(
                  l.Provider,
                  { value: h },
                  t.createElement(c.Provider, { value: x }, s)
                )
              : null;
          };
        CustomCheckoutProvider.propTypes = {
          stripe: s.any,
          options: s.shape({
            clientSecret: s.string.isRequired,
            elementsOptions: s.object,
          }).isRequired,
        };
        var useElementsOrCustomCheckoutSdkContextWithUseCase = function (e) {
            var r = t.useContext(l),
              n = t.useContext(u);
            if (r && n)
              throw Error(
                "You cannot wrap the part of your app that ".concat(
                  e,
                  " in both <CustomCheckoutProvider> and <Elements> providers."
                )
              );
            return r
              ? parseCustomCheckoutSdkContext(r, e)
              : parseElementsContext(n, e);
          },
          u = t.createContext(null);
        u.displayName = "ElementsContext";
        var parseElementsContext = function (e, t) {
            if (!e)
              throw Error(
                "Could not find Elements context; You need to wrap the part of your app that ".concat(
                  t,
                  " in an <Elements> provider."
                )
              );
            return e;
          },
          d = t.createContext(null);
        d.displayName = "CartElementContext";
        var parseCartElementContext = function (e, t) {
            if (!e)
              throw Error(
                "Could not find Elements context; You need to wrap the part of your app that ".concat(
                  t,
                  " in an <Elements> provider."
                )
              );
            return e;
          },
          Elements = function (e) {
            var r = e.stripe,
              n = e.options,
              s = e.children,
              a = t.useMemo(
                function () {
                  return parseStripeProp(r);
                },
                [r]
              ),
              i = _slicedToArray(t.useState(null), 2),
              o = i[0],
              l = i[1],
              c = _slicedToArray(t.useState(null), 2),
              h = c[0],
              m = c[1],
              p = _slicedToArray(
                t.useState(function () {
                  return {
                    stripe: "sync" === a.tag ? a.stripe : null,
                    elements: "sync" === a.tag ? a.stripe.elements(n) : null,
                  };
                }),
                2
              ),
              f = p[0],
              g = p[1];
            t.useEffect(
              function () {
                var e = !0,
                  safeSetContext = function (e) {
                    g(function (t) {
                      return t.stripe
                        ? t
                        : { stripe: e, elements: e.elements(n) };
                    });
                  };
                return (
                  "async" !== a.tag || f.stripe
                    ? "sync" !== a.tag || f.stripe || safeSetContext(a.stripe)
                    : a.stripePromise.then(function (t) {
                        t && e && safeSetContext(t);
                      }),
                  function () {
                    e = !1;
                  }
                );
              },
              [a, f, n]
            );
            var x = usePrevious(r);
            t.useEffect(
              function () {
                null !== x &&
                  x !== r &&
                  console.warn(
                    "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."
                  );
              },
              [x, r]
            );
            var v = usePrevious(n);
            return (
              t.useEffect(
                function () {
                  if (f.elements) {
                    var e = extractAllowedOptionsUpdates(n, v, [
                      "clientSecret",
                      "fonts",
                    ]);
                    e && f.elements.update(e);
                  }
                },
                [n, v, f.elements]
              ),
              t.useEffect(
                function () {
                  registerWithStripeJs(f.stripe);
                },
                [f.stripe]
              ),
              t.createElement(
                u.Provider,
                { value: f },
                t.createElement(
                  d.Provider,
                  {
                    value: {
                      cart: o,
                      setCart: l,
                      cartState: h,
                      setCartState: m,
                    },
                  },
                  s
                )
              )
            );
          };
        Elements.propTypes = { stripe: s.any, options: s.object };
        var useElementsContextWithUseCase = function (e) {
            return parseElementsContext(t.useContext(u), e);
          },
          h = {
            cart: null,
            cartState: null,
            setCart: function () {},
            setCartState: function () {},
          },
          useCartElementContextWithUseCase = function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.useContext(d);
            return r ? h : parseCartElementContext(n, e);
          },
          ElementsConsumer = function (e) {
            return (0, e.children)(
              useElementsContextWithUseCase("mounts <ElementsConsumer>")
            );
          };
        ElementsConsumer.propTypes = { children: s.func.isRequired };
        var useAttachEvent = function (e, r, n) {
            var s = !!n,
              a = t.useRef(n);
            t.useEffect(
              function () {
                a.current = n;
              },
              [n]
            ),
              t.useEffect(
                function () {
                  if (!s || !e) return function () {};
                  var decoratedCb = function () {
                    a.current && a.current.apply(a, arguments);
                  };
                  return (
                    e.on(r, decoratedCb),
                    function () {
                      e.off(r, decoratedCb);
                    }
                  );
                },
                [s, r, e, a]
              );
          },
          createElementComponent = function (e, r) {
            var n = "".concat(
                e.charAt(0).toUpperCase() + e.slice(1),
                "Element"
              ),
              a = r
                ? function (e) {
                    var r = useElementsOrCustomCheckoutSdkContextWithUseCase(
                      "mounts <".concat(n, ">")
                    );
                    useCartElementContextWithUseCase(
                      "mounts <".concat(n, ">"),
                      "customCheckoutSdk" in r
                    );
                    var s = e.id,
                      a = e.className;
                    return t.createElement("div", { id: s, className: a });
                  }
                : function (r) {
                    var s,
                      a = r.id,
                      i = r.className,
                      o = r.options,
                      l = void 0 === o ? {} : o,
                      c = r.onBlur,
                      u = r.onFocus,
                      d = r.onReady,
                      h = r.onChange,
                      m = r.onEscape,
                      p = r.onClick,
                      f = r.onLoadError,
                      g = r.onLoaderStart,
                      x = r.onNetworksChange,
                      v = r.onCheckout,
                      y = r.onLineItemClick,
                      b = r.onConfirm,
                      w = r.onCancel,
                      _ = r.onShippingAddressChange,
                      S = r.onShippingRateChange,
                      j = useElementsOrCustomCheckoutSdkContextWithUseCase(
                        "mounts <".concat(n, ">")
                      ),
                      k = "elements" in j ? j.elements : null,
                      C = "customCheckoutSdk" in j ? j.customCheckoutSdk : null,
                      E = _slicedToArray(t.useState(null), 2),
                      P = E[0],
                      T = E[1],
                      N = t.useRef(null),
                      A = t.useRef(null),
                      O = useCartElementContextWithUseCase(
                        "mounts <".concat(n, ">"),
                        "customCheckoutSdk" in j
                      ),
                      R = O.setCart,
                      I = O.setCartState;
                    useAttachEvent(P, "blur", c),
                      useAttachEvent(P, "focus", u),
                      useAttachEvent(P, "escape", m),
                      useAttachEvent(P, "click", p),
                      useAttachEvent(P, "loaderror", f),
                      useAttachEvent(P, "loaderstart", g),
                      useAttachEvent(P, "networkschange", x),
                      useAttachEvent(P, "lineitemclick", y),
                      useAttachEvent(P, "confirm", b),
                      useAttachEvent(P, "cancel", w),
                      useAttachEvent(P, "shippingaddresschange", _),
                      useAttachEvent(P, "shippingratechange", S),
                      "cart" === e
                        ? (s = function (e) {
                            I(e), d && d(e);
                          })
                        : d &&
                          (s =
                            "expressCheckout" === e
                              ? d
                              : function () {
                                  d(P);
                                }),
                      useAttachEvent(P, "ready", s),
                      useAttachEvent(
                        P,
                        "change",
                        "cart" === e
                          ? function (e) {
                              I(e), h && h(e);
                            }
                          : h
                      ),
                      useAttachEvent(
                        P,
                        "checkout",
                        "cart" === e
                          ? function (e) {
                              I(e), v && v(e);
                            }
                          : v
                      ),
                      t.useLayoutEffect(
                        function () {
                          if (
                            null === N.current &&
                            null !== A.current &&
                            (k || C)
                          ) {
                            var t = null;
                            C
                              ? (t = C.createElement(e, l))
                              : k && (t = k.create(e, l)),
                              "cart" === e && R && R(t),
                              (N.current = t),
                              T(t),
                              t && t.mount(A.current);
                          }
                        },
                        [k, C, l, R]
                      );
                    var L = usePrevious(l);
                    return (
                      t.useEffect(
                        function () {
                          if (N.current) {
                            var e = extractAllowedOptionsUpdates(l, L, [
                              "paymentRequest",
                            ]);
                            e && N.current.update(e);
                          }
                        },
                        [l, L]
                      ),
                      t.useLayoutEffect(function () {
                        return function () {
                          if (
                            N.current &&
                            "function" == typeof N.current.destroy
                          )
                            try {
                              N.current.destroy(), (N.current = null);
                            } catch (e) {}
                        };
                      }, []),
                      t.createElement("div", { id: a, className: i, ref: A })
                    );
                  };
            return (
              (a.propTypes = {
                id: s.string,
                className: s.string,
                onChange: s.func,
                onBlur: s.func,
                onFocus: s.func,
                onReady: s.func,
                onEscape: s.func,
                onClick: s.func,
                onLoadError: s.func,
                onLoaderStart: s.func,
                onNetworksChange: s.func,
                onCheckout: s.func,
                onLineItemClick: s.func,
                onConfirm: s.func,
                onCancel: s.func,
                onShippingAddressChange: s.func,
                onShippingRateChange: s.func,
                options: s.object,
              }),
              (a.displayName = n),
              (a.__elementType = e),
              a
            );
          },
          m = "undefined" == typeof window,
          p = createElementComponent("auBankAccount", m),
          f = createElementComponent("card", m),
          g = createElementComponent("cardNumber", m),
          x = createElementComponent("cardExpiry", m),
          v = createElementComponent("cardCvc", m),
          y = createElementComponent("fpxBank", m),
          b = createElementComponent("iban", m),
          w = createElementComponent("idealBank", m),
          _ = createElementComponent("p24Bank", m),
          S = createElementComponent("epsBank", m),
          j = createElementComponent("payment", m),
          k = createElementComponent("expressCheckout", m),
          C = createElementComponent("paymentRequestButton", m),
          E = createElementComponent("linkAuthentication", m),
          P = createElementComponent("address", m),
          T = createElementComponent("shippingAddress", m),
          N = createElementComponent("cart", m),
          A = createElementComponent("paymentMethodMessaging", m),
          O = createElementComponent("affirmMessage", m),
          R = createElementComponent("afterpayClearpayMessage", m);
        (e.AddressElement = P),
          (e.AffirmMessageElement = O),
          (e.AfterpayClearpayMessageElement = R),
          (e.AuBankAccountElement = p),
          (e.CardCvcElement = v),
          (e.CardElement = f),
          (e.CardExpiryElement = x),
          (e.CardNumberElement = g),
          (e.CartElement = N),
          (e.CustomCheckoutProvider = CustomCheckoutProvider),
          (e.Elements = Elements),
          (e.ElementsConsumer = ElementsConsumer),
          (e.EpsBankElement = S),
          (e.ExpressCheckoutElement = k),
          (e.FpxBankElement = y),
          (e.IbanElement = b),
          (e.IdealBankElement = w),
          (e.LinkAuthenticationElement = E),
          (e.P24BankElement = _),
          (e.PaymentElement = j),
          (e.PaymentMethodMessagingElement = A),
          (e.PaymentRequestButtonElement = C),
          (e.ShippingAddressElement = T),
          (e.useCartElement = function () {
            return useCartElementContextWithUseCase("calls useCartElement()")
              .cart;
          }),
          (e.useCartElementState = function () {
            return useCartElementContextWithUseCase(
              "calls useCartElementState()"
            ).cartState;
          }),
          (e.useCustomCheckout = function () {
            return (
              parseCustomCheckoutSdkContext(
                t.useContext(l),
                "calls useCustomCheckout()"
              ),
              t.useContext(c)
            );
          }),
          (e.useElements = function () {
            return useElementsContextWithUseCase("calls useElements()")
              .elements;
          }),
          (e.useStripe = function () {
            return useElementsOrCustomCheckoutSdkContextWithUseCase(
              "calls useStripe()"
            ).stripe;
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, r(7294));
    },
    9743: function (e, t, r) {
      "use strict";
      var n = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== r.g) return r.g;
        throw Error("unable to locate global object");
      })();
      (e.exports = t = n.fetch),
        n.fetch && (t.default = n.fetch.bind(n)),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response);
    },
    2515: function (e, t, r) {
      "use strict";
      r.d(t, {
        eI: function () {
          return createClient;
        },
      });
      let resolveFetch = (e) => {
        let t;
        return (
          (t =
            e ||
            ("undefined" == typeof fetch
              ? (...e) =>
                  Promise.resolve()
                    .then(r.t.bind(r, 9743, 23))
                    .then(({ default: t }) => t(...e))
              : fetch)),
          (...e) => t(...e)
        );
      };
      let FunctionsError = class FunctionsError extends Error {
        constructor(e, t = "FunctionsError", r) {
          super(e), (this.name = t), (this.context = r);
        }
      };
      let FunctionsFetchError = class FunctionsFetchError extends FunctionsError {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      };
      let FunctionsRelayError = class FunctionsRelayError extends FunctionsError {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      };
      let FunctionsHttpError = class FunctionsHttpError extends FunctionsError {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      };
      let FunctionsClient = class FunctionsClient {
        constructor(e, { headers: t = {}, customFetch: r } = {}) {
          (this.url = e), (this.headers = t), (this.fetch = resolveFetch(r));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var r, n, s, a, i;
          return (
            (n = this),
            (s = void 0),
            (a = void 0),
            (i = function* () {
              try {
                let n;
                let { headers: s, method: a, body: i } = t,
                  o = {};
                i &&
                  ((s &&
                    !Object.prototype.hasOwnProperty.call(s, "Content-Type")) ||
                    !s) &&
                  (("undefined" != typeof Blob && i instanceof Blob) ||
                  i instanceof ArrayBuffer
                    ? ((o["Content-Type"] = "application/octet-stream"),
                      (n = i))
                    : "string" == typeof i
                    ? ((o["Content-Type"] = "text/plain"), (n = i))
                    : "undefined" != typeof FormData && i instanceof FormData
                    ? (n = i)
                    : ((o["Content-Type"] = "application/json"),
                      (n = JSON.stringify(i))));
                let l = yield this.fetch(`${this.url}/${e}`, {
                    method: a || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, o), this.headers),
                      s
                    ),
                    body: n,
                  }).catch((e) => {
                    throw new FunctionsFetchError(e);
                  }),
                  c = l.headers.get("x-relay-error");
                if (c && "true" === c) throw new FunctionsRelayError(l);
                if (!l.ok) throw new FunctionsHttpError(l);
                let u = (
                  null !== (r = l.headers.get("Content-Type")) && void 0 !== r
                    ? r
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === u
                      ? yield l.json()
                      : "application/octet-stream" === u
                      ? yield l.blob()
                      : "multipart/form-data" === u
                      ? yield l.formData()
                      : yield l.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (a || (a = Promise))(function (e, t) {
              function fulfilled(e) {
                try {
                  step(i.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function rejected(e) {
                try {
                  step(i.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function step(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof a
                      ? r
                      : new a(function (e) {
                          e(r);
                        })
                    ).then(fulfilled, rejected);
              }
              step((i = i.apply(n, s || [])).next());
            })
          );
        }
      };
      var n,
        s,
        a,
        i,
        o,
        l,
        c,
        u,
        d,
        h,
        m,
        p,
        f,
        g,
        x,
        v,
        y,
        b,
        w,
        _ = r(9743),
        S = r.n(_);
      let PostgrestBuilder = class PostgrestBuilder {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = S())
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let r = this.fetch,
            n = r(this.url.toString(), {
              method: this.method,
              headers: this.headers,
              body: JSON.stringify(this.body),
              signal: this.signal,
            }).then(async (e) => {
              var t, r, n;
              let s = null,
                a = null,
                i = null,
                o = e.status,
                l = e.statusText;
              if (e.ok) {
                if ("HEAD" !== this.method) {
                  let t = await e.text();
                  "" === t ||
                    (a =
                      "text/csv" === this.headers.Accept
                        ? t
                        : this.headers.Accept &&
                          this.headers.Accept.includes(
                            "application/vnd.pgrst.plan+text"
                          )
                        ? t
                        : JSON.parse(t));
                }
                let n =
                    null === (t = this.headers.Prefer) || void 0 === t
                      ? void 0
                      : t.match(/count=(exact|planned|estimated)/),
                  c =
                    null === (r = e.headers.get("content-range")) ||
                    void 0 === r
                      ? void 0
                      : r.split("/");
                n && c && c.length > 1 && (i = parseInt(c[1])),
                  this.isMaybeSingle &&
                    "GET" === this.method &&
                    Array.isArray(a) &&
                    (a.length > 1
                      ? ((s = {
                          code: "PGRST116",
                          details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                          hint: null,
                          message:
                            "JSON object requested, multiple (or no) rows returned",
                        }),
                        (a = null),
                        (i = null),
                        (o = 406),
                        (l = "Not Acceptable"))
                      : (a = 1 === a.length ? a[0] : null));
              } else {
                let t = await e.text();
                try {
                  (s = JSON.parse(t)),
                    Array.isArray(s) &&
                      404 === e.status &&
                      ((a = []), (s = null), (o = 200), (l = "OK"));
                } catch (r) {
                  404 === e.status && "" === t
                    ? ((o = 204), (l = "No Content"))
                    : (s = { message: t });
                }
                if (
                  (s &&
                    this.isMaybeSingle &&
                    (null === (n = null == s ? void 0 : s.details) ||
                    void 0 === n
                      ? void 0
                      : n.includes("Results contain 0 rows")) &&
                    ((s = null), (o = 200), (l = "OK")),
                  s && this.shouldThrowOnError)
                )
                  throw s;
              }
              let c = { error: s, data: a, count: i, status: o, statusText: l };
              return c;
            });
          return (
            this.shouldThrowOnError ||
              (n = n.catch((e) => {
                var t, r, n;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (r = null == e ? void 0 : e.stack) &&
                      void 0 !== r
                        ? r
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (n = null == e ? void 0 : e.code) && void 0 !== n
                        ? n
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            n.then(e, t)
          );
        }
      };
      let PostgrestTransformBuilder = class PostgrestTransformBuilder extends PostgrestBuilder {
        select(e) {
          let t = !1,
            r = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", r),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(e, { ascending: t = !0, nullsFirst: r, foreignTable: n } = {}) {
          let s = n ? `${n}.order` : "order",
            a = this.url.searchParams.get(s);
          return (
            this.url.searchParams.set(
              s,
              `${a ? `${a},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t } = {}) {
          let r = void 0 === t ? "limit" : `${t}.limit`;
          return this.url.searchParams.set(r, `${e}`), this;
        }
        range(e, t, { foreignTable: r } = {}) {
          let n = void 0 === r ? "offset" : `${r}.offset`,
            s = void 0 === r ? "limit" : `${r}.limit`;
          return (
            this.url.searchParams.set(n, `${e}`),
            this.url.searchParams.set(s, `${t - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: r = !1,
          buffers: n = !1,
          wal: s = !1,
          format: a = "text",
        } = {}) {
          let i = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              r ? "settings" : null,
              n ? "buffers" : null,
              s ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            o = this.headers.Accept;
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${o}"; options=${i};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      };
      let PostgrestFilterBuilder = class PostgrestFilterBuilder extends PostgrestTransformBuilder {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          let r = t
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${r})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: r, type: n } = {}) {
          let s = "";
          "plain" === n
            ? (s = "pl")
            : "phrase" === n
            ? (s = "ph")
            : "websearch" === n && (s = "w");
          let a = void 0 === r ? "" : `(${r})`;
          return this.url.searchParams.append(e, `${s}fts${a}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, r) {
          return this.url.searchParams.append(e, `not.${t}.${r}`), this;
        }
        or(e, { foreignTable: t } = {}) {
          let r = t ? `${t}.or` : "or";
          return this.url.searchParams.append(r, `(${e})`), this;
        }
        filter(e, t, r) {
          return this.url.searchParams.append(e, `${t}.${r}`), this;
        }
      };
      let PostgrestQueryBuilder = class PostgrestQueryBuilder {
        constructor(e, { headers: t = {}, schema: r, fetch: n }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = r),
            (this.fetch = n);
        }
        select(e, { head: t = !1, count: r } = {}) {
          let n = !1,
            s = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !n ? "" : ('"' === e && (n = !n), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", s),
            r && (this.headers.Prefer = `count=${r}`),
            new PostgrestFilterBuilder({
              method: t ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: r = !0 } = {}) {
          let n = [];
          if (
            (this.headers.Prefer && n.push(this.headers.Prefer),
            t && n.push(`count=${t}`),
            r || n.push("missing=default"),
            (this.headers.Prefer = n.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new PostgrestFilterBuilder({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: r = !1,
            count: n,
            defaultToNull: s = !0,
          } = {}
        ) {
          let a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && a.push(this.headers.Prefer),
            n && a.push(`count=${n}`),
            s || a.push("missing=default"),
            (this.headers.Prefer = a.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new PostgrestFilterBuilder({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          let r = [];
          return (
            this.headers.Prefer && r.push(this.headers.Prefer),
            t && r.push(`count=${t}`),
            (this.headers.Prefer = r.join(",")),
            new PostgrestFilterBuilder({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new PostgrestFilterBuilder({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      };
      let j = { "X-Client-Info": "postgrest-js/1.8.4" };
      let PostgrestClient = class PostgrestClient {
        constructor(e, { headers: t = {}, schema: r, fetch: n } = {}) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, j), t)),
            (this.schemaName = r),
            (this.fetch = n);
        }
        from(e) {
          let t = new URL(`${this.url}/${e}`);
          return new PostgrestQueryBuilder(t, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new PostgrestClient(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: r = !1, count: n } = {}) {
          let s, a;
          let i = new URL(`${this.url}/rpc/${e}`);
          r
            ? ((s = "HEAD"),
              Object.entries(t).forEach(([e, t]) => {
                i.searchParams.append(e, `${t}`);
              }))
            : ((s = "POST"), (a = t));
          let o = Object.assign({}, this.headers);
          return (
            n && (o.Prefer = `count=${n}`),
            new PostgrestFilterBuilder({
              method: s,
              url: i,
              headers: o,
              schema: this.schemaName,
              body: a,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      };
      var k = r(5840);
      let C = { "X-Client-Info": "realtime-js/2.7.4" };
      ((m = n || (n = {}))[(m.connecting = 0)] = "connecting"),
        (m[(m.open = 1)] = "open"),
        (m[(m.closing = 2)] = "closing"),
        (m[(m.closed = 3)] = "closed"),
        ((p = s || (s = {})).closed = "closed"),
        (p.errored = "errored"),
        (p.joined = "joined"),
        (p.joining = "joining"),
        (p.leaving = "leaving"),
        ((f = a || (a = {})).close = "phx_close"),
        (f.error = "phx_error"),
        (f.join = "phx_join"),
        (f.reply = "phx_reply"),
        (f.leave = "phx_leave"),
        (f.access_token = "access_token"),
        ((i || (i = {})).websocket = "websocket"),
        ((g = o || (o = {})).Connecting = "connecting"),
        (g.Open = "open"),
        (g.Closing = "closing"),
        (g.Closed = "closed");
      let Timer = class Timer {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      };
      let Serializer = class Serializer {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : "string" == typeof e
            ? t(JSON.parse(e))
            : t({});
        }
        _binaryDecode(e) {
          let t = new DataView(e),
            r = new TextDecoder();
          return this._decodeBroadcast(e, t, r);
        }
        _decodeBroadcast(e, t, r) {
          let n = t.getUint8(1),
            s = t.getUint8(2),
            a = this.HEADER_LENGTH + 2,
            i = r.decode(e.slice(a, a + n));
          a += n;
          let o = r.decode(e.slice(a, a + s));
          a += s;
          let l = JSON.parse(r.decode(e.slice(a, e.byteLength)));
          return { ref: null, topic: i, event: o, payload: l };
        }
      };
      let Push = class Push {
        constructor(e, t, r = {}, n = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = r),
            (this.timeout = n),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null),
            (this.rateLimited = !1);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          if (this._hasReceived("timeout")) return;
          this.startTimeout(), (this.sent = !0);
          let e = this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef(),
          });
          "rate limited" === e && (this.rateLimited = !0);
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var r;
          return (
            this._hasReceived(e) &&
              t(
                null === (r = this.receivedResp) || void 0 === r
                  ? void 0
                  : r.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      };
      ((x = l || (l = {})).SYNC = "sync"),
        (x.JOIN = "join"),
        (x.LEAVE = "leave");
      let RealtimePresence = class RealtimePresence {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let r = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(r.state, {}, (e) => {
            let { onJoin: t, onLeave: r, onSync: n } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = RealtimePresence.syncState(this.state, e, t, r)),
              this.pendingDiffs.forEach((e) => {
                this.state = RealtimePresence.syncDiff(this.state, e, t, r);
              }),
              (this.pendingDiffs = []),
              n();
          }),
            this.channel._on(r.diff, {}, (e) => {
              let { onJoin: t, onLeave: r, onSync: n } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = RealtimePresence.syncDiff(
                    this.state,
                    e,
                    t,
                    r
                  )),
                  n());
            }),
            this.onJoin((e, t, r) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: r,
              });
            }),
            this.onLeave((e, t, r) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: r,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, r, n) {
          let s = this.cloneDeep(e),
            a = this.transformState(t),
            i = {},
            o = {};
          return (
            this.map(s, (e, t) => {
              a[e] || (o[e] = t);
            }),
            this.map(a, (e, t) => {
              let r = s[e];
              if (r) {
                let n = t.map((e) => e.presence_ref),
                  s = r.map((e) => e.presence_ref),
                  a = t.filter((e) => 0 > s.indexOf(e.presence_ref)),
                  l = r.filter((e) => 0 > n.indexOf(e.presence_ref));
                a.length > 0 && (i[e] = a), l.length > 0 && (o[e] = l);
              } else i[e] = t;
            }),
            this.syncDiff(s, { joins: i, leaves: o }, r, n)
          );
        }
        static syncDiff(e, t, r, n) {
          let { joins: s, leaves: a } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            r || (r = () => {}),
            n || (n = () => {}),
            this.map(s, (t, n) => {
              var s;
              let a = null !== (s = e[t]) && void 0 !== s ? s : [];
              if (((e[t] = this.cloneDeep(n)), a.length > 0)) {
                let r = e[t].map((e) => e.presence_ref),
                  n = a.filter((e) => 0 > r.indexOf(e.presence_ref));
                e[t].unshift(...n);
              }
              r(t, a, n);
            }),
            this.map(a, (t, r) => {
              let s = e[t];
              if (!s) return;
              let a = r.map((e) => e.presence_ref);
              (s = s.filter((e) => 0 > a.indexOf(e.presence_ref))),
                (e[t] = s),
                n(t, s, r),
                0 === s.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (t, r) => {
              let n = e[r];
              return (
                "metas" in n
                  ? (t[r] = n.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (t[r] = n),
                t
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      };
      ((v = c || (c = {})).abstime = "abstime"),
        (v.bool = "bool"),
        (v.date = "date"),
        (v.daterange = "daterange"),
        (v.float4 = "float4"),
        (v.float8 = "float8"),
        (v.int2 = "int2"),
        (v.int4 = "int4"),
        (v.int4range = "int4range"),
        (v.int8 = "int8"),
        (v.int8range = "int8range"),
        (v.json = "json"),
        (v.jsonb = "jsonb"),
        (v.money = "money"),
        (v.numeric = "numeric"),
        (v.oid = "oid"),
        (v.reltime = "reltime"),
        (v.text = "text"),
        (v.time = "time"),
        (v.timestamp = "timestamp"),
        (v.timestamptz = "timestamptz"),
        (v.timetz = "timetz"),
        (v.tsrange = "tsrange"),
        (v.tstzrange = "tstzrange");
      let convertChangeData = (e, t, r = {}) => {
          var n;
          let s = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
          return Object.keys(t).reduce(
            (r, n) => ((r[n] = convertColumn(n, e, t, s)), r),
            {}
          );
        },
        convertColumn = (e, t, r, n) => {
          let s = t.find((t) => t.name === e),
            a = null == s ? void 0 : s.type,
            i = r[e];
          return a && !n.includes(a) ? convertCell(a, i) : noop(i);
        },
        convertCell = (e, t) => {
          if ("_" === e.charAt(0)) {
            let r = e.slice(1, e.length);
            return toArray(t, r);
          }
          switch (e) {
            case c.bool:
              return toBoolean(t);
            case c.float4:
            case c.float8:
            case c.int2:
            case c.int4:
            case c.int8:
            case c.numeric:
            case c.oid:
              return toNumber(t);
            case c.json:
            case c.jsonb:
              return toJson(t);
            case c.timestamp:
              return toTimestampString(t);
            case c.abstime:
            case c.date:
            case c.daterange:
            case c.int4range:
            case c.int8range:
            case c.money:
            case c.reltime:
            case c.text:
            case c.time:
            case c.timestamptz:
            case c.timetz:
            case c.tsrange:
            case c.tstzrange:
            default:
              return noop(t);
          }
        },
        noop = (e) => e,
        toBoolean = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        toNumber = (e) => {
          if ("string" == typeof e) {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        toJson = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        toArray = (e, t) => {
          if ("string" != typeof e) return e;
          let r = e.length - 1,
            n = e[r],
            s = e[0];
          if ("{" === s && "}" === n) {
            let n;
            let s = e.slice(1, r);
            try {
              n = JSON.parse("[" + s + "]");
            } catch (e) {
              n = s ? s.split(",") : [];
            }
            return n.map((e) => convertCell(t, e));
          }
          return e;
        },
        toTimestampString = (e) =>
          "string" == typeof e ? e.replace(" ", "T") : e;
      var RealtimeChannel_awaiter = function (e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      };
      ((y = u || (u = {})).ALL = "*"),
        (y.INSERT = "INSERT"),
        (y.UPDATE = "UPDATE"),
        (y.DELETE = "DELETE"),
        ((b = d || (d = {})).BROADCAST = "broadcast"),
        (b.PRESENCE = "presence"),
        (b.POSTGRES_CHANGES = "postgres_changes"),
        ((w = h || (h = {})).SUBSCRIBED = "SUBSCRIBED"),
        (w.TIMED_OUT = "TIMED_OUT"),
        (w.CLOSED = "CLOSED"),
        (w.CHANNEL_ERROR = "CHANNEL_ERROR");
      let RealtimeChannel = class RealtimeChannel {
        constructor(e, t = { config: {} }, r) {
          (this.topic = e),
            (this.params = t),
            (this.socket = r),
            (this.bindings = {}),
            (this.state = s.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new Push(this, a.join, this.params, this.timeout)),
            (this.rejoinTimer = new Timer(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = s.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = s.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = s.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = s.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(a.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new RealtimePresence(this));
        }
        subscribe(e, t = this.timeout) {
          var r, n;
          if (this.joinedOnce)
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: s, presence: a },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            let i = {},
              o = {
                broadcast: s,
                presence: a,
                postgres_changes:
                  null !==
                    (n =
                      null === (r = this.bindings.postgres_changes) ||
                      void 0 === r
                        ? void 0
                        : r.map((e) => e.filter)) && void 0 !== n
                    ? n
                    : [],
              };
            this.socket.accessToken &&
              (i.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: o }, i)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var r;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === t)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let n = this.bindings.postgres_changes,
                      s =
                        null !== (r = null == n ? void 0 : n.length) &&
                        void 0 !== r
                          ? r
                          : 0,
                      a = [];
                    for (let r = 0; r < s; r++) {
                      let s = n[r],
                        {
                          filter: { event: i, schema: o, table: l, filter: c },
                        } = s,
                        u = t && t[r];
                      if (
                        u &&
                        u.event === i &&
                        u.schema === o &&
                        u.table === l &&
                        u.filter === c
                      )
                        a.push(
                          Object.assign(Object.assign({}, s), { id: u.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = a), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        track(e, t = {}) {
          return RealtimeChannel_awaiter(this, void 0, void 0, function* () {
            return yield this.send(
              { type: "presence", event: "track", payload: e },
              t.timeout || this.timeout
            );
          });
        }
        untrack(e = {}) {
          return RealtimeChannel_awaiter(this, void 0, void 0, function* () {
            return yield this.send({ type: "presence", event: "untrack" }, e);
          });
        }
        on(e, t, r) {
          return this._on(e, t, r);
        }
        send(e, t = {}) {
          return new Promise((r) => {
            var n, s, a;
            let i = this._push(e.type, e, t.timeout || this.timeout);
            i.rateLimited && r("rate limited"),
              "broadcast" !== e.type ||
                (null ===
                  (a =
                    null ===
                      (s =
                        null === (n = this.params) || void 0 === n
                          ? void 0
                          : n.config) || void 0 === s
                      ? void 0
                      : s.broadcast) || void 0 === a
                  ? void 0
                  : a.ack) ||
                r("ok"),
              i.receive("ok", () => r("ok")),
              i.receive("timeout", () => r("timed out"));
          });
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = s.leaving;
          let onClose = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(a.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((t) => {
              let r = new Push(this, a.leave, {}, e);
              r
                .receive("ok", () => {
                  onClose(), t("ok");
                })
                .receive("timeout", () => {
                  onClose(), t("timed out");
                })
                .receive("error", () => {
                  t("error");
                }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
            })
          );
        }
        _push(e, t, r = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let n = new Push(this, e, t, r);
          return (
            this._canPush()
              ? n.send()
              : (n.startTimeout(), this.pushBuffer.push(n)),
            n
          );
        }
        _onMessage(e, t, r) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, r) {
          var n, s;
          let i = e.toLocaleLowerCase(),
            { close: o, error: l, leave: c, join: u } = a;
          if (r && [o, l, c, u].indexOf(i) >= 0 && r !== this._joinRef())
            return;
          let d = this._onMessage(i, t, r);
          if (t && !d)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(i)
            ? null === (n = this.bindings.postgres_changes) ||
              void 0 === n ||
              n
                .filter((e) => {
                  var t, r, n;
                  return (
                    (null === (t = e.filter) || void 0 === t
                      ? void 0
                      : t.event) === "*" ||
                    (null ===
                      (n =
                        null === (r = e.filter) || void 0 === r
                          ? void 0
                          : r.event) || void 0 === n
                      ? void 0
                      : n.toLocaleLowerCase()) === i
                  );
                })
                .map((e) => e.callback(d, r))
            : null === (s = this.bindings[i]) ||
              void 0 === s ||
              s
                .filter((e) => {
                  var r, n, s, a, o, l;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(i)
                  )
                    return e.type.toLocaleLowerCase() === i;
                  if ("id" in e) {
                    let a = e.id,
                      i =
                        null === (r = e.filter) || void 0 === r
                          ? void 0
                          : r.event;
                    return (
                      a &&
                      (null === (n = t.ids) || void 0 === n
                        ? void 0
                        : n.includes(a)) &&
                      ("*" === i ||
                        (null == i ? void 0 : i.toLocaleLowerCase()) ===
                          (null === (s = t.data) || void 0 === s
                            ? void 0
                            : s.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let r =
                      null ===
                        (o =
                          null === (a = null == e ? void 0 : e.filter) ||
                          void 0 === a
                            ? void 0
                            : a.event) || void 0 === o
                        ? void 0
                        : o.toLocaleLowerCase();
                    return (
                      "*" === r ||
                      r ===
                        (null === (l = null == t ? void 0 : t.event) ||
                        void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof d && "ids" in d) {
                    let e = d.data,
                      {
                        schema: t,
                        table: r,
                        commit_timestamp: n,
                        type: s,
                        errors: a,
                      } = e;
                    d = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: t,
                          table: r,
                          commit_timestamp: n,
                          eventType: s,
                          new: {},
                          old: {},
                          errors: a,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(d, r);
                });
        }
        _isClosed() {
          return this.state === s.closed;
        }
        _isJoined() {
          return this.state === s.joined;
        }
        _isJoining() {
          return this.state === s.joining;
        }
        _isLeaving() {
          return this.state === s.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, r) {
          let n = e.toLocaleLowerCase(),
            s = { type: n, filter: t, callback: r };
          return (
            this.bindings[n]
              ? this.bindings[n].push(s)
              : (this.bindings[n] = [s]),
            this
          );
        }
        _off(e, t) {
          let r = e.toLocaleLowerCase();
          return (
            (this.bindings[r] = this.bindings[r].filter((e) => {
              var n;
              return !(
                (null === (n = e.type) || void 0 === n
                  ? void 0
                  : n.toLocaleLowerCase()) === r &&
                RealtimeChannel.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let r in e) if (e[r] !== t[r]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(a.close, {}, e);
        }
        _onError(e) {
          this._on(a.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = s.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let t = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (t.new = convertChangeData(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (t.old = convertChangeData(e.columns, e.old_record)),
            t
          );
        }
      };
      var RealtimeClient_awaiter = function (e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      };
      let RealtimeClient_noop = () => {};
      let RealtimeClient = class RealtimeClient {
        constructor(e, t) {
          var r, n;
          (this.accessToken = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = C),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.transport = k.w3cwebsocket),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = RealtimeClient_noop),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new Serializer()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this.eventsPerSecondLimitMs = 100),
            (this.inThrottle = !1),
            (this.endPoint = `${e}/${i.websocket}`),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.transport) &&
              (this.transport = t.transport),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          let s =
            null === (r = null == t ? void 0 : t.params) || void 0 === r
              ? void 0
              : r.eventsPerSecond;
          s && (this.eventsPerSecondLimitMs = Math.floor(1e3 / s));
          let a =
            null === (n = null == t ? void 0 : t.params) || void 0 === n
              ? void 0
              : n.apikey;
          a && (this.accessToken = a),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new Timer(
              () =>
                RealtimeClient_awaiter(this, void 0, void 0, function* () {
                  this.disconnect(), this.connect();
                }),
              this.reconnectAfterMs
            ));
        }
        connect() {
          !this.conn &&
            ((this.conn = new this.transport(
              this._endPointURL(),
              [],
              null,
              this.headers
            )),
            this.conn &&
              ((this.conn.binaryType = "arraybuffer"),
              (this.conn.onopen = () => this._onConnOpen()),
              (this.conn.onerror = (e) => this._onConnError(e)),
              (this.conn.onmessage = (e) => this._onConnMessage(e)),
              (this.conn.onclose = (e) => this._onConnClose(e))));
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        removeChannel(e) {
          return RealtimeClient_awaiter(this, void 0, void 0, function* () {
            let t = yield e.unsubscribe();
            return 0 === this.channels.length && this.disconnect(), t;
          });
        }
        removeAllChannels() {
          return RealtimeClient_awaiter(this, void 0, void 0, function* () {
            let e = yield Promise.all(
              this.channels.map((e) => e.unsubscribe())
            );
            return this.disconnect(), e;
          });
        }
        log(e, t, r) {
          this.logger(e, t, r);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case n.connecting:
              return o.Connecting;
            case n.open:
              return o.Open;
            case n.closing:
              return o.Closing;
            default:
              return o.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === o.Open;
        }
        channel(e, t = { config: {} }) {
          this.isConnected() || this.connect();
          let r = new RealtimeChannel(`realtime:${e}`, t, this);
          return this.channels.push(r), r;
        }
        push(e) {
          let { topic: t, event: r, payload: n, ref: s } = e,
            callback = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          if ((this.log("push", `${t} ${r} (${s})`, n), this.isConnected())) {
            if (["broadcast", "presence", "postgres_changes"].includes(r)) {
              let e = this._throttle(callback)();
              if (e) return "rate limited";
            } else callback();
          } else this.sendBuffer.push(callback);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(a.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: r, payload: n, ref: s } = e;
            ((s && s === this.pendingHeartbeatRef) ||
              r === (null == n ? void 0 : n.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${n.status || ""} ${t} ${r} ${(s && "(" + s + ")") || ""}`,
                n
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(r, n, s)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(a.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          let r = e.match(/\?/) ? "&" : "?",
            n = new URLSearchParams(t);
          return `${e}${r}${n}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
        _throttle(e, t = this.eventsPerSecondLimitMs) {
          return () =>
            !!this.inThrottle ||
            (e(),
            t > 0 &&
              ((this.inThrottle = !0),
              setTimeout(() => {
                this.inThrottle = !1;
              }, t)),
            !1);
        }
      };
      let StorageError = class StorageError extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      };
      function isStorageError(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      let StorageApiError = class StorageApiError extends StorageError {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let StorageUnknownError = class StorageUnknownError extends StorageError {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      };
      let helpers_resolveFetch = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(r.t.bind(r, 9743, 23))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        resolveResponse = () => {
          var e, t, n, s;
          return (
            (e = void 0),
            (t = void 0),
            (n = void 0),
            (s = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(r.t.bind(r, 9743, 23))).Response
                : Response;
            }),
            new (n || (n = Promise))(function (r, a) {
              function fulfilled(e) {
                try {
                  step(s.next(e));
                } catch (e) {
                  a(e);
                }
              }
              function rejected(e) {
                try {
                  step(s.throw(e));
                } catch (e) {
                  a(e);
                }
              }
              function step(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(fulfilled, rejected);
              }
              step((s = s.apply(e, t || [])).next());
            })
          );
        };
      var fetch_awaiter = function (e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      };
      let _getErrorMessage = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        handleError = (e, t) =>
          fetch_awaiter(void 0, void 0, void 0, function* () {
            let r = yield resolveResponse();
            e instanceof r
              ? e
                  .json()
                  .then((r) => {
                    t(
                      new StorageApiError(_getErrorMessage(r), e.status || 500)
                    );
                  })
                  .catch((e) => {
                    t(new StorageUnknownError(_getErrorMessage(e), e));
                  })
              : t(new StorageUnknownError(_getErrorMessage(e), e));
          }),
        _getRequestParams = (e, t, r, n) => {
          let s = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? s
            : ((s.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              (s.body = JSON.stringify(n)),
              Object.assign(Object.assign({}, s), r));
        };
      function _handleRequest(e, t, r, n, s, a) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return new Promise((i, o) => {
            e(r, _getRequestParams(t, n, s, a))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == n ? void 0 : n.noResolveJson) ? e : e.json();
              })
              .then((e) => i(e))
              .catch((e) => handleError(e, o));
          });
        });
      }
      function get(e, t, r, n) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "GET", t, r, n);
        });
      }
      function post(e, t, r, n, s) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "POST", t, n, s, r);
        });
      }
      function remove(e, t, r, n, s) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "DELETE", t, n, s, r);
        });
      }
      var StorageFileApi_awaiter = function (e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      };
      let E = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        P = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      let StorageFileApi = class StorageFileApi {
        constructor(e, t = {}, r, n) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = r),
            (this.fetch = helpers_resolveFetch(n));
        }
        uploadOrUpdate(e, t, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let s;
              let a = Object.assign(Object.assign({}, P), n),
                i = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(a.upsert) }
                );
              "undefined" != typeof Blob && r instanceof Blob
                ? ((s = new FormData()).append("cacheControl", a.cacheControl),
                  s.append("", r))
                : "undefined" != typeof FormData && r instanceof FormData
                ? (s = r).append("cacheControl", a.cacheControl)
                : ((s = r),
                  (i["cache-control"] = `max-age=${a.cacheControl}`),
                  (i["content-type"] = a.contentType));
              let o = this._removeEmptyFolders(t),
                l = this._getFinalPath(o),
                c = yield this.fetch(
                  `${this.url}/object/${l}`,
                  Object.assign(
                    { method: e, body: s, headers: i },
                    (null == a ? void 0 : a.duplex) ? { duplex: a.duplex } : {}
                  )
                );
              if (c.ok) return { data: { path: o }, error: null };
              {
                let e = yield c.json();
                return { data: null, error: e };
              }
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, r);
          });
        }
        uploadToSignedUrl(e, t, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            let s = this._removeEmptyFolders(e),
              a = this._getFinalPath(s),
              i = new URL(this.url + `/object/upload/sign/${a}`);
            i.searchParams.set("token", t);
            try {
              let e;
              let t = Object.assign({ upsert: P.upsert }, n),
                a = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && r instanceof Blob
                ? ((e = new FormData()).append("cacheControl", t.cacheControl),
                  e.append("", r))
                : "undefined" != typeof FormData && r instanceof FormData
                ? (e = r).append("cacheControl", t.cacheControl)
                : ((e = r),
                  (a["cache-control"] = `max-age=${t.cacheControl}`),
                  (a["content-type"] = t.contentType));
              let o = yield this.fetch(i.toString(), {
                method: "PUT",
                body: e,
                headers: a,
              });
              if (o.ok) return { data: { path: s }, error: null };
              {
                let e = yield o.json();
                return { data: null, error: e };
              }
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let t = this._getFinalPath(e),
                r = yield post(
                  this.fetch,
                  `${this.url}/object/upload/sign/${t}`,
                  {},
                  { headers: this.headers }
                ),
                n = new URL(this.url + r.url),
                s = n.searchParams.get("token");
              if (!s) throw new StorageError("No token returned by API");
              return {
                data: { signedUrl: n.toString(), path: e, token: s },
                error: null,
              };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, r);
          });
        }
        move(e, t) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield post(
                this.fetch,
                `${this.url}/object/move`,
                { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield post(
                this.fetch,
                `${this.url}/object/copy`,
                { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                { headers: this.headers }
              );
              return { data: { path: r.Key }, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = this._getFinalPath(e),
                s = yield post(
                  this.fetch,
                  `${this.url}/object/sign/${n}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == r ? void 0 : r.transform)
                      ? { transform: r.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                a = (null == r ? void 0 : r.download)
                  ? `&download=${!0 === r.download ? "" : r.download}`
                  : "",
                i = encodeURI(`${this.url}${s.signedURL}${a}`);
              return { data: (s = { signedUrl: i }), error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = yield post(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                s = (null == r ? void 0 : r.download)
                  ? `&download=${!0 === r.download ? "" : r.download}`
                  : "";
              return {
                data: n.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${s}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            let r = void 0 !== (null == t ? void 0 : t.transform),
              n = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              s = n ? `?${n}` : "";
            try {
              let t = this._getFinalPath(e),
                n = yield get(
                  this.fetch,
                  `${this.url}/${
                    r ? "render/image/authenticated" : "object"
                  }/${t}${s}`,
                  { headers: this.headers, noResolveJson: !0 }
                ),
                a = yield n.blob();
              return { data: a, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          let r = this._getFinalPath(e),
            n = [],
            s = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== s && n.push(s);
          let a = void 0 !== (null == t ? void 0 : t.transform),
            i = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== i && n.push(i);
          let o = n.join("&");
          return (
            "" !== o && (o = `?${o}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${a ? "render/image" : "object"}/public/${r}${o}`
                ),
              },
            }
          );
        }
        remove(e) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let t = yield remove(
                this.fetch,
                `${this.url}/object/${this.bucketId}`,
                { prefixes: e },
                { headers: this.headers }
              );
              return { data: t, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = Object.assign(Object.assign(Object.assign({}, E), t), {
                  prefix: e || "",
                }),
                s = yield post(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  n,
                  { headers: this.headers },
                  r
                );
              return { data: s, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      };
      let T = { "X-Client-Info": "storage-js/2.5.4" };
      var StorageBucketApi_awaiter = function (e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      };
      let StorageBucketApi = class StorageBucketApi {
        constructor(e, t = {}, r) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, T), t)),
            (this.fetch = helpers_resolveFetch(r));
        }
        listBuckets() {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let e = yield get(this.fetch, `${this.url}/bucket`, {
                headers: this.headers,
              });
              return { data: e, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let t = yield get(this.fetch, `${this.url}/bucket/${e}`, {
                headers: this.headers,
              });
              return { data: t, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield post(
                this.fetch,
                `${this.url}/bucket`,
                {
                  id: e,
                  name: e,
                  public: t.public,
                  file_size_limit: t.fileSizeLimit,
                  allowed_mime_types: t.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield (function (e, t, r, n, s) {
                return fetch_awaiter(this, void 0, void 0, function* () {
                  return _handleRequest(e, "PUT", t, n, void 0, r);
                });
              })(
                this.fetch,
                `${this.url}/bucket/${e}`,
                {
                  id: e,
                  name: e,
                  public: t.public,
                  file_size_limit: t.fileSizeLimit,
                  allowed_mime_types: t.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let t = yield post(
                this.fetch,
                `${this.url}/bucket/${e}/empty`,
                {},
                { headers: this.headers }
              );
              return { data: t, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let t = yield remove(
                this.fetch,
                `${this.url}/bucket/${e}`,
                {},
                { headers: this.headers }
              );
              return { data: t, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      };
      let StorageClient = class StorageClient extends StorageBucketApi {
        constructor(e, t = {}, r) {
          super(e, t, r);
        }
        from(e) {
          return new StorageFileApi(this.url, this.headers, e, this.fetch);
        }
      };
      let fetch_resolveFetch = (e) => {
          let t;
          return (
            (t = e || ("undefined" == typeof fetch ? S() : fetch)),
            (...e) => t(...e)
          );
        },
        resolveHeadersConstructor = () =>
          "undefined" == typeof Headers ? _.Headers : Headers,
        fetchWithAuth = (e, t, r) => {
          let n = fetch_resolveFetch(r),
            s = resolveHeadersConstructor();
          return (r, a) => {
            var i, o, l, c;
            return (
              (i = void 0),
              (o = void 0),
              (l = void 0),
              (c = function* () {
                var i;
                let o = null !== (i = yield t()) && void 0 !== i ? i : e,
                  l = new s(null == a ? void 0 : a.headers);
                return (
                  l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") ||
                    l.set("Authorization", `Bearer ${o}`),
                  n(r, Object.assign(Object.assign({}, a), { headers: l }))
                );
              }),
              new (l || (l = Promise))(function (e, t) {
                function fulfilled(e) {
                  try {
                    step(c.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function rejected(e) {
                  try {
                    step(c.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function step(t) {
                  var r;
                  t.done
                    ? e(t.value)
                    : ((r = t.value) instanceof l
                        ? r
                        : new l(function (e) {
                            e(r);
                          })
                      ).then(fulfilled, rejected);
                }
                step((c = c.apply(i, o || [])).next());
              })
            );
          };
        },
        helpers_isBrowser = () => "undefined" != typeof document,
        N = { tested: !1, writable: !1 },
        supportsLocalStorage = () => {
          if (!helpers_isBrowser()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (N.tested) return N.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (N.tested = !0),
              (N.writable = !0);
          } catch (e) {
            (N.tested = !0), (N.writable = !1);
          }
          return N.writable;
        };
      function parseParametersFromURL(e) {
        let t = {},
          r = new URL(e);
        if (r.hash && "#" === r.hash[0])
          try {
            let e = new URLSearchParams(r.hash.substring(1));
            e.forEach((e, r) => {
              t[r] = e;
            });
          } catch (e) {}
        return (
          r.searchParams.forEach((e, r) => {
            t[r] = e;
          }),
          t
        );
      }
      let lib_helpers_resolveFetch = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(r.t.bind(r, 9743, 23))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        looksLikeFetchResponse = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        setItemAsync = async (e, t, r) => {
          await e.setItem(t, JSON.stringify(r));
        },
        getItemAsync = async (e, t) => {
          let r = await e.getItem(t);
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch (e) {
            return r;
          }
        },
        removeItemAsync = async (e, t) => {
          await e.removeItem(t);
        };
      let Deferred = class Deferred {
        constructor() {
          this.promise = new Deferred.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      };
      function decodeJWTPayload(e) {
        let t = e.split(".");
        if (3 !== t.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        let r = t[1];
        return JSON.parse(
          (function (e) {
            let t, r, n, s, a, i, o;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              c = "",
              u = 0;
            for (e = e.replace("-", "+").replace("_", "/"); u < e.length; )
              (s = l.indexOf(e.charAt(u++))),
                (a = l.indexOf(e.charAt(u++))),
                (i = l.indexOf(e.charAt(u++))),
                (o = l.indexOf(e.charAt(u++))),
                (t = (s << 2) | (a >> 4)),
                (r = ((15 & a) << 4) | (i >> 2)),
                (n = ((3 & i) << 6) | o),
                (c += String.fromCharCode(t)),
                64 != i && 0 != r && (c += String.fromCharCode(r)),
                64 != o && 0 != n && (c += String.fromCharCode(n));
            return c;
          })(r)
        );
      }
      async function sleep(e) {
        return await new Promise((t) => {
          setTimeout(() => t(null), e);
        });
      }
      function dec2hex(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      function generatePKCEVerifier() {
        let e = new Uint32Array(56);
        if ("undefined" == typeof crypto) {
          let e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            t = e.length,
            r = "";
          for (let n = 0; n < 56; n++)
            r += e.charAt(Math.floor(Math.random() * t));
          return r;
        }
        return crypto.getRandomValues(e), Array.from(e, dec2hex).join("");
      }
      async function sha256(e) {
        let t = new TextEncoder(),
          r = t.encode(e),
          n = await crypto.subtle.digest("SHA-256", r),
          s = new Uint8Array(n);
        return Array.from(s)
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function generatePKCEChallenge(e) {
        if ("undefined" == typeof crypto)
          return (
            console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e
          );
        let t = await sha256(e);
        return btoa(t)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }
      Deferred.promiseConstructor = Promise;
      let AuthError = class AuthError extends Error {
        constructor(e, t) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t);
        }
      };
      function isAuthError(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      let AuthApiError = class AuthApiError extends AuthError {
        constructor(e, t) {
          super(e, t), (this.name = "AuthApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let AuthUnknownError = class AuthUnknownError extends AuthError {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      };
      let CustomAuthError = class CustomAuthError extends AuthError {
        constructor(e, t, r) {
          super(e), (this.name = t), (this.status = r);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let AuthSessionMissingError = class AuthSessionMissingError extends CustomAuthError {
        constructor() {
          super("Auth session missing!", "AuthSessionMissingError", 400);
        }
      };
      let AuthInvalidTokenResponseError = class AuthInvalidTokenResponseError extends CustomAuthError {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500
          );
        }
      };
      let AuthInvalidCredentialsError = class AuthInvalidCredentialsError extends CustomAuthError {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400);
        }
      };
      let AuthImplicitGrantRedirectError = class AuthImplicitGrantRedirectError extends CustomAuthError {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      };
      let AuthPKCEGrantCodeExchangeError = class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      };
      let AuthRetryableFetchError = class AuthRetryableFetchError extends CustomAuthError {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t);
        }
      };
      function isAuthRetryableFetchError(e) {
        return isAuthError(e) && "AuthRetryableFetchError" === e.name;
      }
      var __rest = function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, n = Object.getOwnPropertySymbols(e);
            s < n.length;
            s++
          )
            0 > t.indexOf(n[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
              (r[n[s]] = e[n[s]]);
        return r;
      };
      let fetch_getErrorMessage = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        A = [502, 503, 504];
      async function fetch_handleError(e) {
        let t;
        if (!looksLikeFetchResponse(e))
          throw new AuthRetryableFetchError(fetch_getErrorMessage(e), 0);
        if (A.includes(e.status))
          throw new AuthRetryableFetchError(fetch_getErrorMessage(e), e.status);
        try {
          t = await e.json();
        } catch (e) {
          throw new AuthUnknownError(fetch_getErrorMessage(e), e);
        }
        throw new AuthApiError(fetch_getErrorMessage(t), e.status || 500);
      }
      let fetch_getRequestParams = (e, t, r, n) => {
        let s = { method: e, headers: (null == t ? void 0 : t.headers) || {} };
        return "GET" === e
          ? s
          : ((s.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (s.body = JSON.stringify(n)),
            Object.assign(Object.assign({}, s), r));
      };
      async function _request(e, t, r, n) {
        var s;
        let a = Object.assign({}, null == n ? void 0 : n.headers);
        (null == n ? void 0 : n.jwt) && (a.Authorization = `Bearer ${n.jwt}`);
        let i =
          null !== (s = null == n ? void 0 : n.query) && void 0 !== s ? s : {};
        (null == n ? void 0 : n.redirectTo) && (i.redirect_to = n.redirectTo);
        let o = Object.keys(i).length
            ? "?" + new URLSearchParams(i).toString()
            : "",
          l = await fetch_handleRequest(
            e,
            t,
            r + o,
            { headers: a, noResolveJson: null == n ? void 0 : n.noResolveJson },
            {},
            null == n ? void 0 : n.body
          );
        return (null == n ? void 0 : n.xform)
          ? null == n
            ? void 0
            : n.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      async function fetch_handleRequest(e, t, r, n, s, a) {
        let i;
        let o = fetch_getRequestParams(t, n, s, a);
        try {
          i = await e(r, o);
        } catch (e) {
          throw (
            (console.error(e),
            new AuthRetryableFetchError(fetch_getErrorMessage(e), 0))
          );
        }
        if (
          (i.ok || (await fetch_handleError(i)),
          null == n ? void 0 : n.noResolveJson)
        )
          return i;
        try {
          return await i.json();
        } catch (e) {
          await fetch_handleError(e);
        }
      }
      function _sessionResponse(e) {
        var t;
        let r = null;
        e.access_token &&
          e.refresh_token &&
          e.expires_in &&
          ((r = Object.assign({}, e)),
          e.expires_at ||
            (r.expires_at = (function (e) {
              let t = Math.round(Date.now() / 1e3);
              return t + e;
            })(e.expires_in)));
        let n = null !== (t = e.user) && void 0 !== t ? t : e;
        return { data: { session: r, user: n }, error: null };
      }
      function _userResponse(e) {
        var t;
        let r = null !== (t = e.user) && void 0 !== t ? t : e;
        return { data: { user: r }, error: null };
      }
      function _ssoResponse(e) {
        return { data: e, error: null };
      }
      function _generateLinkResponse(e) {
        let {
            action_link: t,
            email_otp: r,
            hashed_token: n,
            redirect_to: s,
            verification_type: a,
          } = e,
          i = __rest(e, [
            "action_link",
            "email_otp",
            "hashed_token",
            "redirect_to",
            "verification_type",
          ]),
          o = Object.assign({}, i);
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: r,
              hashed_token: n,
              redirect_to: s,
              verification_type: a,
            },
            user: o,
          },
          error: null,
        };
      }
      function _noResolveJsonResponse(e) {
        return e;
      }
      var GoTrueAdminApi_rest = function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, n = Object.getOwnPropertySymbols(e);
            s < n.length;
            s++
          )
            0 > t.indexOf(n[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
              (r[n[s]] = e[n[s]]);
        return r;
      };
      let GoTrueAdminApi = class GoTrueAdminApi {
        constructor({ url: e = "", headers: t = {}, fetch: r }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = lib_helpers_resolveFetch(r)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await _request(
                this.fetch,
                "POST",
                `${this.url}/logout?scope=${t}`,
                { headers: this.headers, jwt: e, noResolveJson: !0 }
              ),
              { data: null, error: null }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await _request(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: _userResponse,
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: t } = e,
              r = GoTrueAdminApi_rest(e, ["options"]),
              n = Object.assign(Object.assign({}, r), t);
            return (
              "newEmail" in r &&
                ((n.new_email = null == r ? void 0 : r.newEmail),
                delete n.newEmail),
              await _request(
                this.fetch,
                "POST",
                `${this.url}/admin/generate_link`,
                {
                  body: n,
                  headers: this.headers,
                  xform: _generateLinkResponse,
                  redirectTo: null == t ? void 0 : t.redirectTo,
                }
              )
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await _request(
              this.fetch,
              "POST",
              `${this.url}/admin/users`,
              { body: e, headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, r, n, s, a, i, o;
          try {
            let l = { nextPage: null, lastPage: 0, total: 0 },
              c = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (r =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== r
                      ? r
                      : "",
                  per_page:
                    null !==
                      (s =
                        null === (n = null == e ? void 0 : e.perPage) ||
                        void 0 === n
                          ? void 0
                          : n.toString()) && void 0 !== s
                      ? s
                      : "",
                },
                xform: _noResolveJsonResponse,
              });
            if (c.error) throw c.error;
            let u = await c.json(),
              d =
                null !== (a = c.headers.get("x-total-count")) && void 0 !== a
                  ? a
                  : 0,
              h =
                null !==
                  (o =
                    null === (i = c.headers.get("link")) || void 0 === i
                      ? void 0
                      : i.split(",")) && void 0 !== o
                  ? o
                  : [];
            return (
              h.length > 0 &&
                (h.forEach((e) => {
                  let t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    r = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${r}Page`] = t;
                }),
                (l.total = parseInt(d))),
              { data: Object.assign(Object.assign({}, u), l), error: null }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await _request(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e}`,
              { headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await _request(
              this.fetch,
              "PUT",
              `${this.url}/admin/users/${e}`,
              { body: t, headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await _request(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: _userResponse,
              }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: t, error: r } = await _request(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: r };
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            let t = await _request(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
              { headers: this.headers }
            );
            return { data: t, error: null };
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
      };
      let O = "2.51.0",
        R = { "X-Client-Info": `gotrue-js/${O}` };
      var I = {
        getItem: (e) =>
          supportsLocalStorage() ? globalThis.localStorage.getItem(e) : null,
        setItem: (e, t) => {
          supportsLocalStorage() && globalThis.localStorage.setItem(e, t);
        },
        removeItem: (e) => {
          supportsLocalStorage() && globalThis.localStorage.removeItem(e);
        },
      };
      globalThis &&
        supportsLocalStorage() &&
        globalThis.localStorage &&
        globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
      let LockAcquireTimeoutError = class LockAcquireTimeoutError extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      };
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let L = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: R,
        flowType: "implicit",
        debug: !1,
      };
      async function lockNoOp(e, t, r) {
        return await r();
      }
      let GoTrueClient = class GoTrueClient {
        constructor(e) {
          var t;
          (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.instanceID = GoTrueClient.nextInstanceID),
            (GoTrueClient.nextInstanceID += 1),
            this.instanceID > 0 &&
              helpers_isBrowser() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let r = Object.assign(Object.assign({}, L), e);
          if (
            ((this.logDebugMessages = r.debug),
            (this.inMemorySession = null),
            (this.storageKey = r.storageKey),
            (this.autoRefreshToken = r.autoRefreshToken),
            (this.persistSession = r.persistSession),
            (this.storage = r.storage || I),
            (this.admin = new GoTrueAdminApi({
              url: r.url,
              headers: r.headers,
              fetch: r.fetch,
            })),
            (this.url = r.url),
            (this.headers = r.headers),
            (this.fetch = lib_helpers_resolveFetch(r.fetch)),
            (this.lock = r.lock || lockNoOp),
            (this.detectSessionInUrl = r.detectSessionInUrl),
            (this.flowType = r.flowType),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession &&
              this.storage === I &&
              !supportsLocalStorage() &&
              console.warn(`No storage option exists to persist the session, which may result in unexpected behavior when using auth.
        If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning.`),
            helpers_isBrowser() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (t = this.broadcastChannel) ||
              void 0 === t ||
              t.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              console.log(
                `GoTrueClient@${
                  this.instanceID
                } (${O}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!helpers_isBrowser() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: t, error: r } = await this._getSessionFromURL(e);
              if (r)
                return (
                  this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    r
                  ),
                  await this._removeSession(),
                  { error: r }
                );
              let { session: n, redirectType: s } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  n,
                  "redirect type",
                  s
                ),
                await this._saveSession(n),
                setTimeout(async () => {
                  "recovery" === s
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n)
                    : await this._notifyAllSubscribers("SIGNED_IN", n);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (isAuthError(e)) return { error: e };
            return {
              error: new AuthUnknownError(
                "Unexpected error during initialization",
                e
              ),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signUp(e) {
          var t, r, n;
          try {
            let s;
            if ((await this._removeSession(), "email" in e)) {
              let { email: r, password: n, options: a } = e,
                i = null,
                o = null;
              if ("pkce" === this.flowType) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (i = await generatePKCEChallenge(e)),
                  (o = e === i ? "plain" : "s256");
              }
              s = await _request(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                redirectTo: null == a ? void 0 : a.emailRedirectTo,
                body: {
                  email: r,
                  password: n,
                  data:
                    null !== (t = null == a ? void 0 : a.data) && void 0 !== t
                      ? t
                      : {},
                  gotrue_meta_security: {
                    captcha_token: null == a ? void 0 : a.captchaToken,
                  },
                  code_challenge: i,
                  code_challenge_method: o,
                },
                xform: _sessionResponse,
              });
            } else if ("phone" in e) {
              let { phone: t, password: a, options: i } = e;
              s = await _request(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: t,
                  password: a,
                  data:
                    null !== (r = null == i ? void 0 : i.data) && void 0 !== r
                      ? r
                      : {},
                  channel:
                    null !== (n = null == i ? void 0 : i.channel) &&
                    void 0 !== n
                      ? n
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == i ? void 0 : i.captchaToken,
                  },
                },
                xform: _sessionResponse,
              });
            } else
              throw new AuthInvalidCredentialsError(
                "You must provide either an email or phone number and a password"
              );
            let { data: a, error: i } = s;
            if (i || !a)
              return { data: { user: null, session: null }, error: i };
            let o = a.session,
              l = a.user;
            return (
              a.session &&
                (await this._saveSession(a.session),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              let { email: r, password: n, options: s } = e;
              t = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: r,
                    password: n,
                    gotrue_meta_security: {
                      captcha_token: null == s ? void 0 : s.captchaToken,
                    },
                  },
                  xform: _sessionResponse,
                }
              );
            } else if ("phone" in e) {
              let { phone: r, password: n, options: s } = e;
              t = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: r,
                    password: n,
                    gotrue_meta_security: {
                      captcha_token: null == s ? void 0 : s.captchaToken,
                    },
                  },
                  xform: _sessionResponse,
                }
              );
            } else
              throw new AuthInvalidCredentialsError(
                "You must provide either an email or phone number and a password"
              );
            let { data: r, error: n } = t;
            if (n) return { data: { user: null, session: null }, error: n };
            if (!r || !r.session || !r.user)
              return {
                data: { user: null, session: null },
                error: new AuthInvalidTokenResponseError(),
              };
            return (
              r.session &&
                (await this._saveSession(r.session),
                await this._notifyAllSubscribers("SIGNED_IN", r.session)),
              { data: { user: r.user, session: r.session }, error: n }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, r, n, s;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
              queryParams:
                null === (n = e.options) || void 0 === n
                  ? void 0
                  : n.queryParams,
              skipBrowserRedirect:
                null === (s = e.options) || void 0 === s
                  ? void 0
                  : s.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let t = await getItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`
            ),
            { data: r, error: n } = await _request(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: t },
                xform: _sessionResponse,
              }
            );
          return (await removeItemAsync(
            this.storage,
            `${this.storageKey}-code-verifier`
          ),
          n)
            ? { data: { user: null, session: null }, error: n }
            : r && r.session && r.user
            ? (r.session &&
                (await this._saveSession(r.session),
                await this._notifyAllSubscribers("SIGNED_IN", r.session)),
              { data: r, error: n })
            : {
                data: { user: null, session: null },
                error: new AuthInvalidTokenResponseError(),
              };
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            let {
                options: t,
                provider: r,
                token: n,
                access_token: s,
                nonce: a,
              } = e,
              i = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: r,
                    id_token: n,
                    access_token: s,
                    nonce: a,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: _sessionResponse,
                }
              ),
              { data: o, error: l } = i;
            if (l) return { data: { user: null, session: null }, error: l };
            if (!o || !o.session || !o.user)
              return {
                data: { user: null, session: null },
                error: new AuthInvalidTokenResponseError(),
              };
            return (
              o.session &&
                (await this._saveSession(o.session),
                await this._notifyAllSubscribers("SIGNED_IN", o.session)),
              { data: o, error: l }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, r, n, s, a;
          try {
            if ((await this._removeSession(), "email" in e)) {
              let { email: n, options: s } = e,
                a = null,
                i = null;
              if ("pkce" === this.flowType) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (a = await generatePKCEChallenge(e)),
                  (i = e === a ? "plain" : "s256");
              }
              let { error: o } = await _request(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: n,
                    data:
                      null !== (t = null == s ? void 0 : s.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (r = null == s ? void 0 : s.shouldCreateUser) ||
                      void 0 === r ||
                      r,
                    gotrue_meta_security: {
                      captcha_token: null == s ? void 0 : s.captchaToken,
                    },
                    code_challenge: a,
                    code_challenge_method: i,
                  },
                  redirectTo: null == s ? void 0 : s.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: o };
            }
            if ("phone" in e) {
              let { phone: t, options: r } = e,
                { data: i, error: o } = await _request(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (n = null == r ? void 0 : r.data) &&
                        void 0 !== n
                          ? n
                          : {},
                      create_user:
                        null ===
                          (s = null == r ? void 0 : r.shouldCreateUser) ||
                        void 0 === s ||
                        s,
                      gotrue_meta_security: {
                        captcha_token: null == r ? void 0 : r.captchaToken,
                      },
                      channel:
                        null !== (a = null == r ? void 0 : r.channel) &&
                        void 0 !== a
                          ? a
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == i ? void 0 : i.message_id,
                },
                error: o,
              };
            }
            throw new AuthInvalidCredentialsError(
              "You must provide either an email or phone number."
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, r;
          try {
            let n, s;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((n =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (s =
                  null === (r = e.options) || void 0 === r
                    ? void 0
                    : r.captchaToken));
            let { data: a, error: i } = await _request(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: s },
                }),
                redirectTo: n,
                xform: _sessionResponse,
              }
            );
            if (i) throw i;
            if (!a) throw Error("An error occurred on token verification.");
            let o = a.session,
              l = a.user;
            return (
              (null == o ? void 0 : o.access_token) &&
                (await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, r, n;
          try {
            return (
              await this._removeSession(),
              await _request(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (r =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== r
                            ? r
                            : void 0,
                      }
                    ),
                    (
                      null === (n = null == e ? void 0 : e.options) ||
                      void 0 === n
                        ? void 0
                        : n.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  { skip_http_redirect: !0 }
                ),
                headers: this.headers,
                xform: _ssoResponse,
              })
            );
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: t },
                error: r,
              } = e;
              if (r) throw r;
              if (!t) throw new AuthSessionMissingError();
              let { error: n } = await _request(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: n };
            });
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            let t = `${this.url}/resend`;
            if ("email" in e) {
              let { email: r, type: n, options: s } = e,
                { error: a } = await _request(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: r,
                    type: n,
                    gotrue_meta_security: {
                      captcha_token: null == s ? void 0 : s.captchaToken,
                    },
                  },
                  redirectTo: null == s ? void 0 : s.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: a };
            }
            if ("phone" in e) {
              let { phone: r, type: n, options: s } = e,
                { data: a, error: i } = await _request(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: r,
                    type: n,
                    gotrue_meta_security: {
                      captcha_token: null == s ? void 0 : s.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == a ? void 0 : a.message_id,
                },
                error: i,
              };
            }
            throw new AuthInvalidCredentialsError(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._useSession(async (e) => e))
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                r = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await r;
                    } catch (e) {}
                  })()
                ),
                r
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null;
            if (this.persistSession) {
              let t = await getItemAsync(this.storage, this.storageKey);
              this._debug("#getSession()", "session from storage", t),
                null !== t &&
                  (this._isValidSession(t)
                    ? (e = t)
                    : (this._debug(
                        "#getSession()",
                        "session from storage is not valid"
                      ),
                      await this._removeSession()));
            } else
              (e = this.inMemorySession),
                this._debug("#getSession()", "session from memory", e);
            if (!e) return { data: { session: null }, error: null };
            let t = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${t ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !t)
            )
              return { data: { session: e }, error: null };
            let { session: r, error: n } = await this._callRefreshToken(
              e.refresh_token
            );
            if (n) return { data: { session: null }, error: n };
            return { data: { session: r }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await _request(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: _userResponse,
              });
            return await this._useSession(async (e) => {
              var t, r;
              let { data: n, error: s } = e;
              if (s) throw s;
              return await _request(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt:
                  null !==
                    (r =
                      null === (t = n.session) || void 0 === t
                        ? void 0
                        : t.access_token) && void 0 !== r
                    ? r
                    : void 0,
                xform: _userResponse,
              });
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (r) => {
              let { data: n, error: s } = r;
              if (s) throw s;
              if (!n.session) throw new AuthSessionMissingError();
              let a = n.session,
                i = null,
                o = null;
              if ("pkce" === this.flowType && null != e.email) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (i = await generatePKCEChallenge(e)),
                  (o = e === i ? "plain" : "s256");
              }
              let { data: l, error: c } = await _request(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: i,
                    code_challenge_method: o,
                  }),
                  jwt: a.access_token,
                  xform: _userResponse,
                }
              );
              if (c) throw c;
              return (
                (a.user = l.user),
                await this._saveSession(a),
                await this._notifyAllSubscribers("USER_UPDATED", a),
                { data: { user: a.user }, error: null }
              );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return decodeJWTPayload(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token)
              throw new AuthSessionMissingError();
            let t = Date.now() / 1e3,
              r = t,
              n = !0,
              s = null,
              a = decodeJWTPayload(e.access_token);
            if ((a.exp && (n = (r = a.exp) <= t), n)) {
              let { session: t, error: r } = await this._callRefreshToken(
                e.refresh_token
              );
              if (r) return { data: { user: null, session: null }, error: r };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              s = t;
            } else {
              let { data: n, error: a } = await this._getUser(e.access_token);
              if (a) throw a;
              (s = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: n.user,
                token_type: "bearer",
                expires_in: r - t,
                expires_at: r,
              }),
                await this._saveSession(s),
                await this._notifyAllSubscribers("SIGNED_IN", s);
            }
            return { data: { user: s.user, session: s }, error: null };
          } catch (e) {
            if (isAuthError(e))
              return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              if (!e) {
                let { data: n, error: s } = t;
                if (s) throw s;
                e = null !== (r = n.session) && void 0 !== r ? r : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token))
                throw new AuthSessionMissingError();
              let { session: n, error: s } = await this._callRefreshToken(
                e.refresh_token
              );
              return s
                ? { data: { user: null, session: null }, error: s }
                : n
                ? { data: { user: n.user, session: n }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!helpers_isBrowser())
              throw new AuthImplicitGrantRedirectError("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new AuthPKCEGrantCodeExchangeError(
                  "Not a valid PKCE flow url."
                );
            } else
              throw new AuthImplicitGrantRedirectError(
                "Not a valid implicit grant flow url."
              );
            let t = parseParametersFromURL(window.location.href);
            if (e) {
              if (!t.code)
                throw new AuthPKCEGrantCodeExchangeError("No code detected.");
              let { data: e, error: r } = await this._exchangeCodeForSession(
                t.code
              );
              if (r) throw r;
              let n = new URL(window.location.href);
              return (
                n.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  n.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new AuthImplicitGrantRedirectError(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: r,
              provider_refresh_token: n,
              access_token: s,
              refresh_token: a,
              expires_in: i,
              expires_at: o,
              token_type: l,
            } = t;
            if (!s || !i || !a || !l)
              throw new AuthImplicitGrantRedirectError(
                "No session defined in URL"
              );
            let c = Math.round(Date.now() / 1e3),
              u = parseInt(i),
              d = c + u;
            o && (d = parseInt(o));
            let h = d - c;
            1e3 * h <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${u}s`
              );
            let m = d - u;
            c - m >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  m,
                  d,
                  c
                )
              : c - m < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  m,
                  d,
                  c
                );
            let { data: p, error: f } = await this._getUser(s);
            if (f) throw f;
            let g = {
              provider_token: r,
              provider_refresh_token: n,
              access_token: s,
              expires_in: u,
              expires_at: d,
              refresh_token: a,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: g, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = parseParametersFromURL(window.location.href);
          return !!(
            helpers_isBrowser() &&
            (e.access_token || e.error_description)
          );
        }
        async _isPKCEFlow() {
          let e = parseParametersFromURL(window.location.href),
            t = await getItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`
            );
          return !!(e.code && t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var r;
            let { data: n, error: s } = t;
            if (s) return { error: s };
            let a =
              null === (r = n.session) || void 0 === r
                ? void 0
                : r.access_token;
            if (a) {
              let { error: t } = await this.admin.signOut(a, e);
              if (
                t &&
                !(
                  isAuthError(t) &&
                  "AuthApiError" === t.name &&
                  (404 === t.status || 401 === t.status)
                )
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await removeItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`
                ),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            r = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, r),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: r } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var r, n;
            try {
              let {
                data: { session: n },
                error: s,
              } = t;
              if (s) throw s;
              await (null === (r = this.stateChangeEmitters.get(e)) ||
              void 0 === r
                ? void 0
                : r.callback("INITIAL_SESSION", n)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", n);
            } catch (t) {
              await (null === (n = this.stateChangeEmitters.get(e)) ||
              void 0 === n
                ? void 0
                : n.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let r = null,
            n = null;
          if ("pkce" === this.flowType) {
            let e = generatePKCEVerifier();
            await setItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`,
              e
            ),
              (r = await generatePKCEChallenge(e)),
              (n = e === r ? "plain" : "s256");
          }
          try {
            return await _request(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: r,
                code_challenge_method: n,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            let r = Date.now();
            return await (function (e, t) {
              let r = new Promise((r, n) => {
                (async () => {
                  for (let s = 0; s < 1 / 0; s++)
                    try {
                      let n = await e(s);
                      if (!t(s, null, n)) {
                        r(n);
                        return;
                      }
                    } catch (e) {
                      if (!t(s, e)) {
                        n(e);
                        return;
                      }
                    }
                })();
              });
              return r;
            })(
              async (r) => (
                await sleep(200 * r),
                this._debug(t, "refreshing attempt", r),
                await _request(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=refresh_token`,
                  {
                    body: { refresh_token: e },
                    headers: this.headers,
                    xform: _sessionResponse,
                  }
                )
              ),
              (e, t, n) =>
                n &&
                n.error &&
                isAuthRetryableFetchError(n.error) &&
                Date.now() + (e + 1) * 200 - r < 3e4
            );
          } catch (e) {
            if ((this._debug(t, "error", e), isAuthError(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          let r = await this._getUrlForProvider(e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              r
            ),
            helpers_isBrowser() &&
              !t.skipBrowserRedirect &&
              window.location.assign(r),
            { data: { provider: e, url: r }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            let r = await getItemAsync(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", r),
              !this._isValidSession(r))
            ) {
              this._debug(t, "session is not valid"),
                null !== r && (await this._removeSession());
              return;
            }
            let n = Math.round(Date.now() / 1e3),
              s =
                (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) <
                n + 10;
            if (
              (this._debug(
                t,
                `session has${s ? "" : " not"} expired with margin of 10s`
              ),
              s)
            ) {
              if (this.autoRefreshToken && r.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  r.refresh_token
                );
                e &&
                  (console.error(e),
                  isAuthRetryableFetchError(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", r);
          } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return;
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, r;
          if (!e) throw new AuthSessionMissingError();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(n, "begin");
          try {
            this.refreshingDeferred = new Deferred();
            let { data: t, error: r } = await this._refreshAccessToken(e);
            if (r) throw r;
            if (!t.session) throw new AuthSessionMissingError();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let n = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(n), n;
          } catch (e) {
            if ((this._debug(n, "error", e), isAuthError(e))) {
              let r = { session: null, error: e };
              return (
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(r),
                r
              );
            }
            throw (
              (null === (r = this.refreshingDeferred) ||
                void 0 === r ||
                r.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(n, "end");
          }
        }
        async _notifyAllSubscribers(e, t, r = !0) {
          let n = `#_notifyAllSubscribers(${e})`;
          this._debug(n, "begin", t, `broadcast = ${r}`);
          try {
            this.broadcastChannel &&
              r &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            let n = [],
              s = Array.from(this.stateChangeEmitters.values()).map(
                async (r) => {
                  try {
                    await r.callback(e, t);
                  } catch (e) {
                    n.push(e);
                  }
                }
              );
            if ((await Promise.all(s), n.length > 0)) {
              for (let e = 0; e < n.length; e += 1) console.error(n[e]);
              throw n[0];
            }
          } finally {
            this._debug(n, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            this.persistSession || (this.inMemorySession = e),
            this.persistSession &&
              e.expires_at &&
              (await this._persistSession(e));
        }
        _persistSession(e) {
          return (
            this._debug("#_persistSession()", e),
            setItemAsync(this.storage, this.storageKey, e)
          );
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            this.persistSession
              ? await removeItemAsync(this.storage, this.storageKey)
              : (this.inMemorySession = null);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              helpers_isBrowser() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    let {
                      data: { session: r },
                    } = t;
                    if (!r || !r.refresh_token || !r.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let n = Math.floor((1e3 * r.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${n} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      n <= 3 && (await this._callRefreshToken(r.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !helpers_isBrowser() ||
              !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        t,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t) {
          let r = [`provider=${encodeURIComponent(e)}`];
          if (
            ((null == t ? void 0 : t.redirectTo) &&
              r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
            (null == t ? void 0 : t.scopes) &&
              r.push(`scopes=${encodeURIComponent(t.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let e = generatePKCEVerifier();
            await setItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`,
              e
            );
            let t = await generatePKCEChallenge(e),
              n = e === t ? "plain" : "s256";
            this._debug(
              "PKCE",
              "code verifier",
              `${e.substring(0, 5)}...`,
              "code challenge",
              t,
              "method",
              n
            );
            let s = new URLSearchParams({
              code_challenge: `${encodeURIComponent(t)}`,
              code_challenge_method: `${encodeURIComponent(n)}`,
            });
            r.push(s.toString());
          }
          if (null == t ? void 0 : t.queryParams) {
            let e = new URLSearchParams(t.queryParams);
            r.push(e.toString());
          }
          return `${this.url}/authorize?${r.join("&")}`;
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              let { data: n, error: s } = t;
              return s
                ? { data: null, error: s }
                : await _request(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (r = null == n ? void 0 : n.session) ||
                        void 0 === r
                          ? void 0
                          : r.access_token,
                    }
                  );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var r, n;
              let { data: s, error: a } = t;
              if (a) return { data: null, error: a };
              let { data: i, error: o } = await _request(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (r = null == s ? void 0 : s.session) ||
                    void 0 === r
                      ? void 0
                      : r.access_token,
                }
              );
              return o
                ? { data: null, error: o }
                : ((null === (n = null == i ? void 0 : i.totp) || void 0 === n
                    ? void 0
                    : n.qr_code) &&
                    (i.totp.qr_code = `data:image/svg+xml;utf-8,${i.totp.qr_code}`),
                  { data: i, error: null });
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              let { data: n, error: s } = t;
              if (s) return { data: null, error: s };
              let { data: a, error: i } = await _request(
                this.fetch,
                "POST",
                `${this.url}/factors/${e.factorId}/verify`,
                {
                  body: { code: e.code, challenge_id: e.challengeId },
                  headers: this.headers,
                  jwt:
                    null === (r = null == n ? void 0 : n.session) ||
                    void 0 === r
                      ? void 0
                      : r.access_token,
                }
              );
              return i
                ? { data: null, error: i }
                : (await this._saveSession(
                    Object.assign(
                      {
                        expires_at: Math.round(Date.now() / 1e3) + a.expires_in,
                      },
                      a
                    )
                  ),
                  await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
                  { data: a, error: i });
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _challenge(e) {
          try {
            return await this._useSession(async (t) => {
              var r;
              let { data: n, error: s } = t;
              return s
                ? { data: null, error: s }
                : await _request(
                    this.fetch,
                    "POST",
                    `${this.url}/factors/${e.factorId}/challenge`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (r = null == n ? void 0 : n.session) ||
                        void 0 === r
                          ? void 0
                          : r.access_token,
                    }
                  );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _challengeAndVerify(e) {
          let { data: t, error: r } = await this._challenge({
            factorId: e.factorId,
          });
          return r
            ? { data: null, error: r }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: t,
          } = await this._getUser();
          if (t) return { data: null, error: t };
          let r = (null == e ? void 0 : e.factors) || [],
            n = r.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: r, totp: n }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return await this._useSession(async (e) => {
            var t, r;
            let {
              data: { session: n },
              error: s,
            } = e;
            if (s) return { data: null, error: s };
            if (!n)
              return {
                data: {
                  currentLevel: null,
                  nextLevel: null,
                  currentAuthenticationMethods: [],
                },
                error: null,
              };
            let a = this._decodeJWT(n.access_token),
              i = null;
            a.aal && (i = a.aal);
            let o = i,
              l =
                null !==
                  (r =
                    null === (t = n.user.factors) || void 0 === t
                      ? void 0
                      : t.filter((e) => "verified" === e.status)) &&
                void 0 !== r
                  ? r
                  : [];
            l.length > 0 && (o = "aal2");
            let c = a.amr || [];
            return {
              data: {
                currentLevel: i,
                nextLevel: o,
                currentAuthenticationMethods: c,
              },
              error: null,
            };
          });
        }
      };
      GoTrueClient.nextInstanceID = 0;
      let SupabaseAuthClient = class SupabaseAuthClient extends GoTrueClient {
        constructor(e) {
          super(e);
        }
      };
      let F = { headers: { "X-Client-Info": "supabase-js/2.33.2" } },
        M = { schema: "public" },
        D = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        U = {};
      let SupabaseClient = class SupabaseClient {
        constructor(e, t, r) {
          var n, s, a, i, o, l, c, u;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw Error("supabaseUrl is required.");
          if (!t) throw Error("supabaseKey is required.");
          let d = e.replace(/\/$/, "");
          (this.realtimeUrl = `${d}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${d}/auth/v1`),
            (this.storageUrl = `${d}/storage/v1`),
            (this.functionsUrl = `${d}/functions/v1`);
          let h = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            m = {
              db: M,
              realtime: U,
              auth: Object.assign(Object.assign({}, D), { storageKey: h }),
              global: F,
            },
            p = (function (e, t) {
              let { db: r, auth: n, realtime: s, global: a } = e,
                { db: i, auth: o, realtime: l, global: c } = t;
              return {
                db: Object.assign(Object.assign({}, i), r),
                auth: Object.assign(Object.assign({}, o), n),
                realtime: Object.assign(Object.assign({}, l), s),
                global: Object.assign(Object.assign({}, c), a),
              };
            })(null != r ? r : {}, m);
          (this.storageKey =
            null !==
              (s =
                null === (n = p.auth) || void 0 === n
                  ? void 0
                  : n.storageKey) && void 0 !== s
              ? s
              : ""),
            (this.headers =
              null !==
                (i =
                  null === (a = p.global) || void 0 === a
                    ? void 0
                    : a.headers) && void 0 !== i
                ? i
                : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (o = p.auth) && void 0 !== o ? o : {},
              this.headers,
              null === (l = p.global) || void 0 === l ? void 0 : l.fetch
            )),
            (this.fetch = fetchWithAuth(
              t,
              this._getAccessToken.bind(this),
              null === (c = p.global) || void 0 === c ? void 0 : c.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, p.realtime)
            )),
            (this.rest = new PostgrestClient(`${d}/rest/v1`, {
              headers: this.headers,
              schema: null === (u = p.db) || void 0 === u ? void 0 : u.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new FunctionsClient(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new StorageClient(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, r) {
          return this.rest.rpc(e, t, r);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t, r, n, s, a;
          return (
            (r = this),
            (n = void 0),
            (s = void 0),
            (a = function* () {
              let { data: r } = yield this.auth.getSession();
              return null !==
                (t =
                  null === (e = r.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== t
                ? t
                : null;
            }),
            new (s || (s = Promise))(function (e, t) {
              function fulfilled(e) {
                try {
                  step(a.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function rejected(e) {
                try {
                  step(a.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function step(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value) instanceof s
                      ? r
                      : new s(function (e) {
                          e(r);
                        })
                    ).then(fulfilled, rejected);
              }
              step((a = a.apply(r, n || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            storage: n,
            storageKey: s,
            flowType: a,
            debug: i,
          },
          o,
          l
        ) {
          let c = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, c), o),
            storageKey: s,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            storage: n,
            flowType: a,
            debug: i,
            fetch: l,
          });
        }
        _initRealtimeClient(e) {
          return new RealtimeClient(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, r) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== r
            ? (this.realtime.setAuth(null != r ? r : null),
              (this.changedAccessToken = r))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      };
      let createClient = (e, t, r) => new SupabaseClient(e, t, r);
    },
    7660: function (e, t, r) {
      "use strict";
      var n = r(5463),
        s = {},
        a = {};
      n.forEach(function (e) {
        (s[e.name.toLowerCase()] = e.code), (a[e.code.toLowerCase()] = e.name);
      }),
        (t.e3 = function () {
          return n.map(function (e) {
            return e.name;
          });
        });
    },
    284: function (e) {
      var naiveFallback = function () {
        if ("object" == typeof self && self) return self;
        if ("object" == typeof window && window) return window;
        throw Error("Unable to resolve global `this`");
      };
      e.exports = (function () {
        if (this) return this;
        if ("object" == typeof globalThis && globalThis) return globalThis;
        try {
          Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
              return this;
            },
            configurable: !0,
          });
        } catch (e) {
          return naiveFallback();
        }
        try {
          if (!__global__) return naiveFallback();
          return __global__;
        } finally {
          delete Object.prototype.__global__;
        }
      })();
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(6087);
        },
      ]);
    },
    6658: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return s;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_RESTORE: function () {
            return i;
          },
          ACTION_SERVER_PATCH: function () {
            return o;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return u;
          },
        });
      let s = "refresh",
        a = "navigate",
        i = "restore",
        o = "server-patch",
        l = "prefetch",
        c = "fast-refresh",
        u = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9703: function (e, t, r) {
      "use strict";
      function getDomainLocale(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        r(464),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5479: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = r(8754),
        s = r(1757),
        a = s._(r(7294)),
        i = n._(r(3935)),
        o = n._(r(6561)),
        l = r(8681),
        c = r(5764),
        u = r(7010);
      r(8565);
      let d = r(1625),
        h = n._(r(6920)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "public/assets/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function handleLoading(e, t, r, n, s, a) {
        let i = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === i) return;
        e["data-loaded-src"] = i;
        let o = "decode" in e ? e.decode() : Promise.resolve();
        o.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("empty" !== t && s(!0), null == r ? void 0 : r.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let n = !1,
                s = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => s,
                persist: () => {},
                preventDefault: () => {
                  (n = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (s = !0), t.stopPropagation();
                },
              });
            }
            (null == n ? void 0 : n.current) && n.current(e);
          }
        });
      }
      function getDynamicProps(e) {
        let [t, r] = a.version.split("."),
          n = parseInt(t, 10),
          s = parseInt(r, 10);
        return n > 18 || (18 === n && s >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let p = (0, a.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: s,
          height: i,
          width: o,
          decoding: l,
          className: c,
          style: u,
          fetchPriority: d,
          placeholder: h,
          loading: m,
          unoptimized: p,
          fill: f,
          onLoadRef: g,
          onLoadingCompleteRef: x,
          setBlurComplete: v,
          setShowAltText: y,
          onLoad: b,
          onError: w,
          ..._
        } = e;
        return a.default.createElement("img", {
          ..._,
          ...getDynamicProps(d),
          loading: m,
          width: o,
          height: i,
          decoding: l,
          "data-nimg": f ? "fill" : "1",
          className: c,
          style: u,
          sizes: s,
          srcSet: n,
          src: r,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (w && (e.src = e.src),
                  e.complete && handleLoading(e, h, g, x, v, p));
            },
            [r, h, g, x, v, w, p, t]
          ),
          onLoad: (e) => {
            let t = e.currentTarget;
            handleLoading(t, h, g, x, v, p);
          },
          onError: (e) => {
            y(!0), "empty" !== h && v(!0), w && w(e);
          },
        });
      });
      function ImagePreload(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...getDynamicProps(r.fetchPriority),
          };
        return t && i.default.preload
          ? (i.default.preload(r.src, n), null)
          : a.default.createElement(
              o.default,
              null,
              a.default.createElement("link", {
                key: "__nimg-" + r.src + r.srcSet + r.sizes,
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...n,
              })
            );
      }
      let f = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
          n = (0, a.useContext)(u.ImageConfigContext),
          s = (0, a.useMemo)(() => {
            let e = m || n || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: i, onLoadingComplete: o } = e,
          f = (0, a.useRef)(i);
        (0, a.useEffect)(() => {
          f.current = i;
        }, [i]);
        let g = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          g.current = o;
        }, [o]);
        let [x, v] = (0, a.useState)(!1),
          [y, b] = (0, a.useState)(!1),
          { props: w, meta: _ } = (0, l.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: s,
            blurComplete: x,
            showAltText: y,
          });
        return a.default.createElement(
          a.default.Fragment,
          null,
          a.default.createElement(p, {
            ...w,
            unoptimized: _.unoptimized,
            placeholder: _.placeholder,
            fill: _.fill,
            onLoadRef: f,
            onLoadingCompleteRef: g,
            setBlurComplete: v,
            setShowAltText: b,
            ref: t,
          }),
          _.priority
            ? a.default.createElement(ImagePreload, {
                isAppRouter: !r,
                imgAttributes: w,
              })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2418: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(8754),
        s = n._(r(7294)),
        a = r(9059),
        i = r(1651),
        o = r(3337),
        l = r(7921),
        c = r(6956),
        u = r(1625),
        d = r(1855),
        h = r(6730),
        m = r(9703),
        p = r(5341),
        f = r(6658),
        g = new Set();
      function prefetch(e, t, r, n, s, a) {
        if (!a && !(0, i.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let s =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            a = t + "%" + r + "%" + s;
          if (g.has(a)) return;
          g.add(a);
        }
        let o = a ? e.prefetch(t, s) : e.prefetch(t, r, n);
        Promise.resolve(o).catch((e) => {});
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, o.formatUrl)(e);
      }
      let x = s.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: o,
            as: g,
            children: x,
            prefetch: v = null,
            passHref: y,
            replace: b,
            shallow: w,
            scroll: _,
            locale: S,
            onClick: j,
            onMouseEnter: k,
            onTouchStart: C,
            legacyBehavior: E = !1,
            ...P
          } = e;
          (r = x),
            E &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = s.default.createElement("a", null, r));
          let T = s.default.useContext(u.RouterContext),
            N = s.default.useContext(d.AppRouterContext),
            A = null != T ? T : N,
            O = !T,
            R = !1 !== v,
            I = null === v ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL,
            { href: L, as: F } = s.default.useMemo(() => {
              if (!T) {
                let e = formatStringOrUrl(o);
                return { href: e, as: g ? formatStringOrUrl(g) : e };
              }
              let [e, t] = (0, a.resolveHref)(T, o, !0);
              return { href: e, as: g ? (0, a.resolveHref)(T, g) : t || e };
            }, [T, o, g]),
            M = s.default.useRef(L),
            D = s.default.useRef(F);
          E && (n = s.default.Children.only(r));
          let U = E ? n && "object" == typeof n && n.ref : t,
            [$, B, q] = (0, h.useIntersection)({ rootMargin: "200px" }),
            z = s.default.useCallback(
              (e) => {
                (D.current !== F || M.current !== L) &&
                  (q(), (D.current = F), (M.current = L)),
                  $(e),
                  U &&
                    ("function" == typeof U
                      ? U(e)
                      : "object" == typeof U && (U.current = e));
              },
              [F, U, L, q, $]
            );
          s.default.useEffect(() => {
            A && B && R && prefetch(A, L, F, { locale: S }, { kind: I }, O);
          }, [F, L, B, S, R, null == T ? void 0 : T.locale, A, O, I]);
          let G = {
            ref: z,
            onClick(e) {
              E || "function" != typeof j || j(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                A &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, a, o, l, c, u, d) {
                    let { nodeName: h } = e.currentTarget,
                      m = "A" === h.toUpperCase();
                    if (
                      m &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!u && !(0, i.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == l || l;
                      "beforePopState" in t
                        ? t[a ? "replace" : "push"](r, n, {
                            shallow: o,
                            locale: c,
                            scroll: e,
                          })
                        : t[a ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !d,
                            scroll: e,
                          });
                    };
                    u ? s.default.startTransition(navigate) : navigate();
                  })(e, A, L, F, b, w, _, S, O, R);
            },
            onMouseEnter(e) {
              E || "function" != typeof k || k(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                A &&
                  (R || !O) &&
                  prefetch(
                    A,
                    L,
                    F,
                    { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: I },
                    O
                  );
            },
            onTouchStart(e) {
              E || "function" != typeof C || C(e),
                E &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                A &&
                  (R || !O) &&
                  prefetch(
                    A,
                    L,
                    F,
                    { locale: S, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: I },
                    O
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(F)) G.href = F;
          else if (!E || y || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== S ? S : null == T ? void 0 : T.locale,
              t =
                (null == T ? void 0 : T.isLocaleDomain) &&
                (0, m.getDomainLocale)(
                  F,
                  e,
                  null == T ? void 0 : T.locales,
                  null == T ? void 0 : T.domainLocales
                );
            G.href =
              t ||
              (0, p.addBasePath)(
                (0, c.addLocale)(F, e, null == T ? void 0 : T.defaultLocale)
              );
          }
          return E
            ? s.default.cloneElement(n, G)
            : s.default.createElement("a", { ...P, ...G }, r);
        }),
        v = x;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6730: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let n = r(7294),
        s = r(3558),
        a = "function" == typeof IntersectionObserver,
        i = new Map(),
        o = [];
      function useIntersection(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          c = l || !a,
          [u, d] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          m = (0, n.useCallback)((e) => {
            h.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (a) {
            if (c || u) return;
            let e = h.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: s,
                  elements: a,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = o.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = i.get(n))) return t;
                  let s = new Map(),
                    a = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = s.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: a, elements: s }),
                    o.push(r),
                    i.set(r, t),
                    t
                  );
                })(r);
                return (
                  a.set(e, t),
                  s.observe(e),
                  function () {
                    if ((a.delete(e), s.unobserve(e), 0 === a.size)) {
                      s.disconnect(), i.delete(n);
                      let e = o.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && o.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && d(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!u) {
            let e = (0, s.requestIdleCallback)(() => d(!0));
            return () => (0, s.cancelIdleCallback)(e);
          }
        }, [c, r, t, u, h.current]);
        let p = (0, n.useCallback)(() => {
          d(!1);
        }, []);
        return [m, u, p];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8681: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return getImgProps;
          },
        }),
        r(8565);
      let n = r(6742),
        s = r(5764);
      function isStaticRequire(e) {
        return void 0 !== e.default;
      }
      function getInt(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function getImgProps(e, t) {
        var r;
        let a,
          i,
          o,
          {
            src: l,
            sizes: c,
            unoptimized: u = !1,
            priority: d = !1,
            loading: h,
            className: m,
            quality: p,
            width: f,
            height: g,
            fill: x = !1,
            style: v,
            onLoad: y,
            onLoadingComplete: b,
            placeholder: w = "empty",
            blurDataURL: _,
            fetchPriority: S,
            layout: j,
            objectFit: k,
            objectPosition: C,
            lazyBoundary: E,
            lazyRoot: P,
            ...T
          } = e,
          { imgConf: N, showAltText: A, blurComplete: O, defaultLoader: R } = t,
          I = N || s.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
            t = I.deviceSizes.sort((e, t) => e - t);
          a = { ...I, allSizes: e, deviceSizes: t };
        }
        let L = T.loader || R;
        delete T.loader, delete T.srcSet;
        let F = "__next_img_default" in L;
        if (F) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                l +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (j) {
          "fill" === j && (x = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[j];
          e && (v = { ...v, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[j];
          t && !c && (c = t);
        }
        let M = "",
          D = getInt(f),
          U = getInt(g);
        if (
          "object" == typeof (r = l) &&
          (isStaticRequire(r) || void 0 !== r.src)
        ) {
          let e = isStaticRequire(l) ? l.default : l;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((i = e.blurWidth),
            (o = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (M = e.src),
            !x)
          ) {
            if (D || U) {
              if (D && !U) {
                let t = D / e.width;
                U = Math.round(e.height * t);
              } else if (!D && U) {
                let t = U / e.height;
                D = Math.round(e.width * t);
              }
            } else (D = e.width), (U = e.height);
          }
        }
        let $ = !d && ("lazy" === h || void 0 === h);
        (!(l = "string" == typeof l ? l : M) ||
          l.startsWith("data:") ||
          l.startsWith("blob:")) &&
          ((u = !0), ($ = !1)),
          a.unoptimized && (u = !0),
          F && l.endsWith(".svg") && !a.dangerouslyAllowSVG && (u = !0),
          d && (S = "high");
        let B = getInt(p),
          q = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: C,
                }
              : {},
            A ? {} : { color: "transparent" },
            v
          ),
          z =
            O || "empty" === w
              ? null
              : "blur" === w
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: D,
                  heightInt: U,
                  blurWidth: i,
                  blurHeight: o,
                  blurDataURL: _ || "",
                  objectFit: q.objectFit,
                }) +
                '")'
              : 'url("' + w + '")',
          G = z
            ? {
                backgroundSize: q.objectFit || "cover",
                backgroundPosition: q.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: z,
              }
            : {},
          H = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: s,
              quality: a,
              sizes: i,
              loader: o,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: c } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: s } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: s.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: s, kind: "w" };
                }
                if ("number" != typeof t) return { widths: n, kind: "w" };
                let a = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => s.find((t) => t >= e) || s[s.length - 1]
                    )
                  ),
                ];
                return { widths: a, kind: "x" };
              })(t, s, i),
              u = l.length - 1;
            return {
              sizes: i || "w" !== c ? i : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    o({ config: t, src: r, quality: a, width: e }) +
                    " " +
                    ("w" === c ? e : n + 1) +
                    c
                )
                .join(", "),
              src: o({ config: t, src: r, quality: a, width: l[u] }),
            };
          })({
            config: a,
            src: l,
            unoptimized: u,
            width: D,
            quality: B,
            sizes: c,
            loader: L,
          }),
          J = {
            ...T,
            loading: $ ? "lazy" : h,
            fetchPriority: S,
            width: D,
            height: U,
            decoding: "async",
            className: m,
            style: { ...q, ...G },
            sizes: H.sizes,
            srcSet: H.srcSet,
            src: H.src,
          },
          K = { unoptimized: u, priority: d, placeholder: w, fill: x };
        return { props: J, meta: K };
      }
    },
    6742: function (e, t) {
      "use strict";
      function getImageBlurSvg(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: s,
            blurDataURL: a,
            objectFit: i,
          } = e,
          o = n ? 40 * n : t,
          l = s ? 40 * s : r,
          c = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === i
            ? "xMidYMid"
            : "cover" === i
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg;
          },
        });
    },
    4169: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          unstable_getImgProps: function () {
            return unstable_getImgProps;
          },
        });
      let n = r(8754),
        s = r(8681),
        a = r(8565),
        i = r(5479),
        o = n._(r(6920)),
        unstable_getImgProps = (e) => {
          (0, a.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, s.getImgProps)(e, {
            defaultLoader: o.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        l = i.Image;
    },
    6920: function (e, t) {
      "use strict";
      function defaultLoader(e) {
        let { config: t, src: r, width: n, quality: s } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (s || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (defaultLoader.__next_img_default = !0);
      let r = defaultLoader;
    },
    8250: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cz: function () {
          return LogoH;
        },
        Kh: function () {
          return ChevronUp;
        },
        P_: function () {
          return PlayIco;
        },
        Xq: function () {
          return LogoV;
        },
        YM: function () {
          return Bulb;
        },
        _M: function () {
          return ChevronDown;
        },
        _Q: function () {
          return ChevronRight;
        },
        kO: function () {
          return Sun;
        },
        s$: function () {
          return ChevronLeft;
        },
      });
      var n = r(5893);
      let LogoH = () =>
          (0, n.jsxs)("svg", {
            width: "106",
            height: "23",
            viewBox: "0 0 106 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M80 10 A5 5 0 1 1 80 0",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M90 0 H95 V2 H92 V8 H95 V10 H92 V15 H95 V20 H90 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10 0 H6 V20 H10 V18 H14 V20 H18 V0 H14 V2 H10 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M40 5 A5 5 0 1 1 40 15 A5 5 0 1 1 40 5 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M60 0 L55 10 L60 20 L65 10 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M22 0 H26 V10 H24 L28 15 H24 L22 10 Z",
                fill: "black",
              }),
            ],
          }),
        LogoV = () =>
          (0, n.jsxs)("svg", {
            width: "106",
            height: "23",
            viewBox: "0 0 106 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M80 10 A5 5 0 1 1 80 0",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M90 0 H95 V2 H92 V8 H95 V10 H92 V15 H95 V20 H90 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10 0 H6 V20 H10 V18 H14 V20 H18 V0 H14 V2 H10 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M40 5 A5 5 0 1 1 40 15 A5 5 0 1 1 40 5 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M60 0 L55 10 L60 20 L65 10 Z",
                fill: "black",
              }),
              (0, n.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M22 0 H26 V10 H24 L28 15 H24 L22 10 Z",
                fill: "black",
              }),
            ],
          }),
        ChevronLeft = () =>
          (0, n.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M11 13L5 8L11 3",
              stroke: "currentColor",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        ChevronDown = () =>
          (0, n.jsx)("div", {
            className: "relative top-[1px]",
            children: (0, n.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M3 5l5 5 5-5",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        ChevronUp = () =>
          (0, n.jsx)("div", {
            className: "relative top-[-1px]",
            children: (0, n.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M3 11l5-5 5 5",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          }),
        PlayIco = () =>
          (0, n.jsxs)("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M9 6.5L5.25 8.66506L5.25 4.33494L9 6.5Z",
                fill: "white",
              }),
              (0, n.jsx)("circle", {
                cx: "6.5",
                cy: "6.5",
                r: "6",
                stroke: "white",
              }),
            ],
          }),
        Bulb = () =>
          (0, n.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("circle", {
                cx: "8",
                cy: "5",
                r: "4",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("rect", {
                x: "7",
                y: "9",
                width: "2",
                height: "4",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
            ],
          }),
        Sun = () =>
          (0, n.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("circle", {
                cx: "8",
                cy: "8",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "8",
                y1: "1",
                x2: "8",
                y2: "3",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "8",
                y1: "15",
                x2: "8",
                y2: "13",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "1",
                y1: "8",
                x2: "3",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "15",
                y1: "8",
                x2: "13",
                y2: "8",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "2",
                y1: "2",
                x2: "3.5",
                y2: "3.5",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "14",
                y1: "2",
                x2: "12.5",
                y2: "3.5",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "2",
                y1: "14",
                x2: "3.5",
                y2: "12.5",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
              (0, n.jsx)("line", {
                x1: "14",
                y1: "14",
                x2: "12.5",
                y2: "12.5",
                stroke: "currentColor",
                strokeWidth: "1",
              }),
            ],
          }),
        ChevronRight = () =>
          (0, n.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M5 13L11 8L5 3",
              stroke: "currentColor",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
    },
    5179: function (e, t, r) {
      "use strict";
      var n = r(5893),
        s = r(7294),
        a = r(8250);
      t.Z = (e) => {
        let { onSelectSlot: t } = e,
          [r, i] = (0, s.useState)(new Date()),
          [o, l] = (0, s.useState)(null),
          [c, u] = (0, s.useState)(!1),
          [d, h] = (0, s.useState)([]),
          [m, p] = (0, s.useState)(!0),
          [f, g] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let fetchEvents = async () => {
            let e = getISODateWithSpecificTime(getMonday(r), "00:00:00"),
              t = new Date(getMonday(r).setDate(v.getDate() + 7)),
              n = getISODateWithSpecificTime(t, "00:00:00"),
              s = await fetch("/api/fetchEvents", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ startDate: e, endDate: n }),
              }),
              a = await s.json();
            h(a), g(!1);
          };
          fetchEvents();
          let e = [...Array(7)].some((e, t) => {
            let r = new Date(new Date(v).setDate(v.getDate() + t));
            return x.some((e) => !isSlotDisabled(r, e) && !isSlotTaken(r, e));
          });
          p(e);
        }, [r, f]);
        let getISODateWithSpecificTime = (e, t) => {
            let [r, n, s] = t.split(":").map(Number);
            return e.setHours(r, n, s), e.toISOString();
          },
          isSlotTaken = (e, t) => {
            let [r] = t.split(" - ")[0].split(":").map(Number),
              n = new Date(e);
            n.setHours(r);
            let s = new Date(n);
            return (
              s.setHours(n.getHours() + 1),
              d.some((e) => {
                let t = new Date(e.start.dateTime),
                  r = new Date(e.end.dateTime);
                return (t >= n && t < s) || (n >= t && n < r);
              })
            );
          },
          getMonday = (e) => {
            e = new Date(e);
            let t = e.getDay(),
              r = e.getDate() - t + (0 === t ? -6 : 1);
            return new Date(e.setDate(r));
          },
          x = (() => {
            let e = [];
            for (let t = 9; t < 18; t++) {
              let r = t.toString().padStart(2, "0"),
                n = (t + 1).toString().padStart(2, "0");
              e.push("".concat(r, ":00 - ").concat(n, ":00"));
            }
            return e;
          })(),
          v = getMonday(r),
          y = new Date(),
          formatDateStr = (e) =>
            ""
              .concat(e.getFullYear(), "-")
              .concat(e.getMonth(), "-")
              .concat(e.getDate()),
          isSlotDisabled = (e, t) => {
            let [r, n] = t.split(" - ")[0].split(":").map(Number),
              s = new Date(e);
            s.setHours(r, n);
            let a = new Date(y);
            return a.setDate(y.getDate() + 2), s < a;
          },
          isSlotSelected = (e, t) => {
            if (!o) return !1;
            let [r, n] = t.split(" - ")[0].split(":").map(Number);
            return (
              e.getDate() === o.getDate() &&
              e.getMonth() === o.getMonth() &&
              e.getFullYear() === o.getFullYear() &&
              r === o.getHours()
            );
          },
          selectSlot = (e, r) => {
            let [n, s] = r.split(" - ")[0].split(":").map(Number),
              a = new Date(e);
            a.setHours(n, s), a >= y && (l(a), t(a));
          };
        return (0, n.jsxs)("div", {
          className: "flex flex-col items-center space-y-4 text-center",
          children: [
            (0, n.jsxs)("div", {
              className:
                "flex place-content-between flex-wrap w-full  relative",
              children: [
                (0, n.jsx)("div", {
                  className: "flex space-x-2 z-10 relative invisible",
                  children: (0, n.jsx)("button", {
                    className: "px-4  bg-black text-white",
                    onClick: () => {
                      i(new Date()), u(!1);
                    },
                    children: "Today",
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "text-2xl mb-4  w-full",
                  children: r.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  }),
                }),
                o &&
                  (0, n.jsxs)("div", {
                    className: "bg-blue-200 px-4  mx-auto mb-4 py-1",
                    children: [
                      "Selected Slot: ",
                      (0, n.jsx)("br", { className: "min-[760px]:hidden" }),
                      " ",
                      o.toLocaleDateString("en-US", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }),
                      " at ",
                      o.getHours().toString().padStart(2, "0"),
                      ":00 (CET)",
                    ],
                  }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "relative flex  mx-auto  w-full place-content-center",
              children: [
                (0, n.jsx)("button", {
                  onClick: () => {
                    g(!0);
                    let e = new Date(r);
                    e.setDate(v.getDate() - 7), i(e);
                    let t = formatDateStr(getMonday(new Date())),
                      n = formatDateStr(e);
                    n === t ? u(!1) : u(!0);
                  },
                  className:
                    "absolute left-0 top-0 mt-[2%]  flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-black self-start opacity-0 pointer-events-none max-[780px]:mt-[-70px] hover:bg-black hover:text-white ".concat(
                      c ? "  opacity-100 pointer-events-auto" : ""
                    ),
                  children: (0, n.jsx)(a.s$, {}),
                }),
                (0, n.jsx)("div", {
                  className:
                    "flex place-content-between flex-wrap  relative w-[87%] min-h-fit max-[780px]:w-full",
                  children: m
                    ? f
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            [...Array(7)].map((e, t) => {
                              let r = new Date(
                                  new Date(v).setDate(v.getDate() + t)
                                ),
                                s =
                                  r.getDate() === y.getDate() &&
                                  r.getMonth() === y.getMonth() &&
                                  r.getFullYear() === y.getFullYear();
                              return (0, n.jsx)(
                                "div",
                                {
                                  className:
                                    "flex flex-col  w-[14.2%] p-[0.7%] ",
                                  children: (0, n.jsxs)("div", {
                                    className: "flex flex-col p-[10%] ".concat(
                                      s
                                        ? " border border-blue-600"
                                        : "border border-white"
                                    ),
                                    children: [
                                      r.toLocaleDateString("en-US", {
                                        weekday: "short",
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "text-2xl",
                                        children: r.toLocaleDateString(
                                          "en-US",
                                          { day: "numeric" }
                                        ),
                                      }),
                                    ],
                                  }),
                                },
                                t
                              );
                            }),
                            (0, n.jsxs)("div", {
                              className: "w-full text-center my-40",
                              children: [
                                (0, n.jsx)("strong", {
                                  children: "Loading slots",
                                }),
                                ", Please wait.",
                              ],
                            }),
                          ],
                        })
                      : [...Array(7)].map((e, t) => {
                          let r = new Date(
                              new Date(v).setDate(v.getDate() + t)
                            ),
                            s =
                              r.getDate() === y.getDate() &&
                              r.getMonth() === y.getMonth() &&
                              r.getFullYear() === y.getFullYear();
                          return (0, n.jsxs)(
                            "div",
                            {
                              className: "flex flex-col w-[14.2%] p-[0.7%]",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col p-[10%] ".concat(
                                    s
                                      ? " border border-blue-600"
                                      : " border border-white"
                                  ),
                                  children: [
                                    r.toLocaleDateString("en-US", {
                                      weekday: "short",
                                    }),
                                    " ",
                                    (0, n.jsx)("span", {
                                      className: "text-2xl",
                                      children: r.toLocaleDateString("en-US", {
                                        day: "numeric",
                                      }),
                                    }),
                                  ],
                                }),
                                x
                                  .filter(
                                    (e) =>
                                      !isSlotDisabled(r, e) &&
                                      !isSlotTaken(r, e)
                                  )
                                  .map((e, t) =>
                                    (0, n.jsx)(
                                      "div",
                                      {
                                        className:
                                          "mt-3 border border-gray-200 p-[10%] cursor-pointer   "
                                            .concat(
                                              f ? "hidden" : " block",
                                              " "
                                            )
                                            .concat(
                                              isSlotSelected(r, e)
                                                ? "bg-black text-white hover:text-white"
                                                : "bg-gray-200 text-black hover:text-[#0000FF]",
                                              " "
                                            ),
                                        onClick: () => selectSlot(r, e),
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "w-[36px] leading-[12px] min-[1150px]:w-[100%] mx-auto",
                                          children: e,
                                        }),
                                      },
                                      t
                                    )
                                  ),
                              ],
                            },
                            t
                          );
                        })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          [...Array(7)].map((e, t) => {
                            let r = new Date(
                                new Date(v).setDate(v.getDate() + t)
                              ),
                              s =
                                r.getDate() === y.getDate() &&
                                r.getMonth() === y.getMonth() &&
                                r.getFullYear() === y.getFullYear();
                            return (0, n.jsx)(
                              "div",
                              {
                                className: "flex flex-col  w-[14.2%] p-[0.7%] ",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-col p-[10%] ".concat(
                                    s
                                      ? " border border-blue-600"
                                      : "border border-white"
                                  ),
                                  children: [
                                    r.toLocaleDateString("en-US", {
                                      weekday: "short",
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "text-2xl",
                                      children: r.toLocaleDateString("en-US", {
                                        day: "numeric",
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                          (0, n.jsxs)("div", {
                            className: "w-full text-center my-40",
                            children: [
                              (0, n.jsx)("strong", {
                                children: "No slots available",
                              }),
                              ", Please explore another week.",
                            ],
                          }),
                        ],
                      }),
                }),
                (0, n.jsx)("button", {
                  className:
                    " mt-[2%] flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-black self-start right-0 top-0 absolute max-[780px]:mt-[-70px] hover:bg-black hover:text-white",
                  onClick: () => {
                    g(!0);
                    let e = new Date(r);
                    e.setDate(v.getDate() + 7), i(e), u(!0);
                  },
                  children: (0, n.jsx)(a._Q, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    1016: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return ModalProvider;
        },
        d: function () {
          return useModal;
        },
      });
      var n = r(5893),
        s = r(7294);
      let a = (0, s.createContext)(void 0),
        ModalProvider = (e) => {
          let { children: t } = e,
            [r, i] = (0, s.useState)(!1);
          return (0, n.jsx)(a.Provider, {
            value: { isModalOpen: r, setModalOpen: i },
            children: t,
          });
        },
        useModal = () => {
          let e = (0, s.useContext)(a);
          if (!e) throw Error("useModal must be used within a ModalProvider");
          return e;
        };
    },
    8732: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return UserDataProvider;
        },
        v: function () {
          return useUserData;
        },
      });
      var n = r(5893),
        s = r(7294),
        a = r(4698),
        i = r(1163);
      let o = (0, s.createContext)(null);
      function useUserData() {
        let e = (0, s.useContext)(o);
        if (null === e)
          throw Error("useUserData must be used within a UserDataProvider");
        return e;
      }
      async function getAdminStatus(e) {
        let t = await fetch(
          "/api/checkAdmin?email=".concat(encodeURIComponent(e))
        );
        if (!t.ok) throw Error("Failed to check admin status");
        let r = await t.json();
        return r;
      }
      async function getUserData(e) {
        let t = new URLSearchParams();
        e.uid &&
          t.append("uid", "string" == typeof e.uid ? e.uid : e.uid.join(",")),
          e.email && t.append("email", e.email),
          void 0 !== e.isAdmin && t.append("isAdmin", String(e.isAdmin));
        let r = await fetch("/api/userData?".concat(t));
        if (!r.ok) throw Error("Failed to fetch user data");
        let n = await r.json();
        return n;
      }
      function UserDataProvider(e) {
        let { children: t } = e,
          [r, l] = (0, s.useState)(!0),
          c = (0, i.useRouter)(),
          { uid: u } = c.query;
        async function fetchData() {
          try {
            let {
              data: { user: e },
            } = await a.O.auth.getUser();
            if (null == e ? void 0 : e.email) {
              let { isAdmin: t, adminData: r } = await getAdminStatus(e.email);
              if (u) {
                if (t) {
                  let {
                    spacesData: n,
                    bookingsData: s,
                    reviewsData: a,
                  } = await getUserData({ uid: u, isAdmin: t });
                  return {
                    success: !0,
                    spacesData: n,
                    bookingsData: s,
                    reviewsData: a,
                    user: e,
                    isAdmin: t,
                    adminData: r,
                  };
                }
                {
                  if (!t && c.asPath.includes("/admin")) {
                    let e = c.asPath.replace("/admin", "/user");
                    c.push(e);
                  }
                  let {
                    spacesData: r,
                    bookingsData: n,
                    reviewsData: s,
                  } = await getUserData({ email: e.email });
                  return {
                    success: !0,
                    spacesData: r,
                    bookingsData: n,
                    reviewsData: s,
                    user: e,
                  };
                }
              }
              if (t) return { success: !0, user: e, isAdmin: t, adminData: r };
              {
                let {
                  spacesData: t,
                  bookingsData: r,
                  reviewsData: n,
                } = await getUserData({ email: e.email });
                return {
                  success: !0,
                  spacesData: t,
                  bookingsData: r,
                  reviewsData: n,
                  user: e,
                };
              }
            }
          } catch (e) {
            return (
              console.error("Error fetching data:", e),
              { success: !1, error: e }
            );
          } finally {
            l(!1);
          }
        }
        async function signOut() {
          let { error: e } = await a.O.auth.signOut();
          e ? console.error("Error during sign out:", e) : c.push("/login");
        }
        async function updateProjectName(e, t) {
          try {
            let r = await fetch("/api/updateProjectName", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ newProjectName: e, uid: t }),
              }),
              n = await r.json();
            if (!r.ok) throw Error(n.message || "Something went wrong");
            return n;
          } catch (e) {
            return (
              console.error("Error updating project name:", e),
              { success: !1, message: e.message }
            );
          }
        }
        return (0, n.jsx)(o.Provider, {
          value: { signOut, loading: r, updateProjectName, fetchData },
          children: t,
        });
      }
    },
    6087: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return _app;
          },
        });
      var n = r(5893);
      r(8199);
      var s = r(1664),
        a = r.n(s),
        i = r(1016),
        o = r(1163),
        l = r(7294),
        c = r(8732),
        u = r(8250),
        components_Header = function () {
          let { isModalOpen: e, setModalOpen: t } = (0, i.d)(),
            r = (0, o.useRouter)(),
            { signOut: s, fetchData: d } = (0, c.v)(),
            [h, m] = (0, l.useState)(!0),
            [p, f] = (0, l.useState)("Loading..."),
            [g, x] = (0, l.useState)(!1),
            [v, y] = (0, l.useState)(!1),
            [b, w] = (0, l.useState)(!1),
            handleFetch = async () => {
              let e = await d();
              m(!1),
                e &&
                  e.success &&
                  e.user &&
                  (x(!0),
                  e.isAdmin
                    ? (w(!0), f(e.adminData.name))
                    : (w(!1), f(e.spacesData[0].name)));
            };
          (0, l.useEffect)(() => {
            handleFetch();
          }, [s]),
            (0, l.useEffect)(() => {
              if (v && window.innerWidth <= 1024) {
                document.body.classList.add("overflow-hidden"),
                  console.log("open");
                let e = setTimeout(() => {
                  S(!0);
                }, 50);
                return () => clearTimeout(e);
              }
              document.body.classList.remove("overflow-hidden"),
                S(!1),
                console.log("close");
            }, [v]);
          let [_, S] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            let handleResize = () => {
              v &&
                (window.innerWidth > 1024
                  ? document.body.classList.remove("overflow-hidden")
                  : v
                  ? document.body.classList.add("overflow-hidden")
                  : document.body.classList.remove("overflow-hidden"));
            };
            return (
              handleResize(),
              window.addEventListener("resize", handleResize),
              () => {
                window.removeEventListener("resize", handleResize);
              }
            );
          }, [v]),
            (0, l.useEffect)(() => {
              let closeMenu = (e) => {
                  if (!e.target.matches(".menu-toggle-button") && v) {
                    let e = document.querySelector(".menu-div-class");
                    e.classList.add("fade-out"),
                      setTimeout(() => {
                        y(!1),
                          e.classList.remove("fade-out"),
                          document.body.classList.remove("overflow-hidden");
                      }, 100);
                  }
                },
                e = document.querySelector("header"),
                t =
                  null == e
                    ? void 0
                    : e.querySelectorAll("a, button:not(.menu-toggle-button)");
              return (
                null == t ||
                  t.forEach((e) => {
                    e.addEventListener("click", closeMenu);
                  }),
                () => {
                  null == t ||
                    t.forEach((e) => {
                      e.removeEventListener("click", closeMenu);
                    });
                }
              );
            }, [v]);
          let getLinkClassName = (e) =>
            r.pathname === e ? "text-[#0000FF] font-bold" : "";
          return (0, n.jsx)("header", {
            className: " w-11/12 m-auto max-w-[1600px]",
            children: (0, n.jsxs)("div", {
              className:
                "flex justify-between items-center   pt-11 pb-16 max-[1024px]:pt-[4vw] max-[1024px]:pb-[2vw]",
              children: [
                (0, n.jsxs)("nav", {
                  className: "flex  items-center w-full place-content-between",
                  children: [
                    (0, n.jsxs)(a(), {
                      href: "/",
                      className: " ml-1 relative z-50 flex max-[1215px]:block",
                      children: [
                        (0, n.jsx)("div", {
                          className: "block max-[1215px]:hidden",
                          children: (0, n.jsx)(u.Cz, {}),
                        }),
                        (0, n.jsx)("div", {
                          className: "hidden max-[1215px]:block",
                          children: (0, n.jsx)(u.Xq, {}),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "".concat(
                        v ? "flex " : "hidden ",
                        " menu-div-class relative w-full min-[1024px]:flex max-[1024px]:fixed z-40 max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:h-[100svh] max-[1024px]:w-[100vw]  max-[1024px]:bg-white max-[1024px]:flex-col"
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "min-[1024px]:w-[100%] relative flex place-content-center ml-[-3vw] max-[1024px]:ml-[0vw]  max-[1110px]:ml-[-4vw] max-[1024px]:h-[100svh]",
                          children: (0, n.jsxs)("div", {
                            className: ""
                              .concat(v ? "menu-items " : "")
                              .concat(
                                _ ? "active " : "",
                                "flex flex-wrap place-content-between w-[50%] max-w-[600px] min-w-[460px] max-[1024px]:flex-col max-[1024px]:w-11/12 max-[1024px]:m-auto max-[1024px]:text-xl max-[1024px]:min-w-[0px] max-[1024px]:h-[35vh] max-[1024px]:max-w-[100%]"
                              ),
                            children: [
                              (0, n.jsx)(a(), {
                                href: "/",
                                className: "".concat(
                                  getLinkClassName("/"),
                                  " hidden  hover:text-[#0000FF]"
                                ),
                                children: "Home",
                              }),
                              (0, n.jsx)(a(), {
                                href: "/how-it-works",
                                className: "".concat(
                                  getLinkClassName("/how-it-works"),
                                  "  hover:text-[#0000FF]"
                                ),
                                children: "Home",
                              }),
                              (0, n.jsx)(a(), {
                                href: "/benefits-of-3d-visualization",
                                className: "".concat(
                                  getLinkClassName(
                                    "/benefits-of-3d-visualization"
                                  ),
                                  "  hover:text-[#0000FF]"
                                ),
                                children: "Previous Works",
                              }),
                              (0, n.jsx)(a(), {
                                href: "/about-us",
                                className: "".concat(
                                  getLinkClassName("/about-us"),
                                  "hover:text-[#0000FF]"
                                ),
                                children: "About",
                              }),
                              (0, n.jsx)(a(), {
                                href: "/faq",
                                className: "".concat(
                                  getLinkClassName("/faq"),
                                  "   hover:text-[#0000FF]"
                                ),
                                children: "Contact",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("button", {
                  onClick: () => {
                    y((e) => !e);
                  },
                  className:
                    "menu-toggle-button min-[1024px]:hidden text-base ml-5 border-b border-black relative z-40",
                  children: v ? "Close" : "Menu",
                }),
              ],
            }),
          });
        },
        components_Footer = function () {
          let [e, t] = (0, l.useState)(""),
            [r, s] = (0, l.useState)(""),
            [o, c] = (0, l.useState)(""),
            { isModalOpen: u, setModalOpen: d } = (0, i.d)(),
            validateEmail = (e) => /^\S+@\S+\.\S+$/.test(e),
            handleSubmit = async (t) => {
              if ((t.preventDefault(), !validateEmail(e))) {
                s("Please enter a valid email address");
                return;
              }
              s("");
              try {
                let t = await fetch("/api/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: e }),
                  }),
                  r = await t.json();
                c(r.message),
                  setTimeout(() => {
                    c("");
                  }, 5e3);
              } catch (e) {
                console.log(e);
              }
            };
        },
        d = r(5675),
        h = r.n(d),
        components_StepOne = (e) => {
          let t,
            r,
            s,
            {
              onNext: a,
              setSelectedSpace: i,
              setRoomLength: o,
              setDepth: c,
              setSquareMeters: u,
              setImages: d,
              setPreviews: m,
              setLinks: p,
              setCurrentLink: f,
              selectedSpace: g,
              roomLength: x,
              depth: v,
              squareMeters: y,
              images: b,
              previews: w,
              links: _,
              currentLink: S,
            } = e,
            [j, k] = (0, l.useState)(null),
            [C, E] = (0, l.useState)(null),
            [P, T] = (0, l.useState)(null),
            [N, A] = (0, l.useState)(null),
            [O, R] = (0, l.useState)(null),
            [I, L] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            let formatInput = (e) => e.replace(/,/g, "."),
              e = formatInput(x),
              t = formatInput(v);
            e &&
              t &&
              !isNaN(Number(e)) &&
              !isNaN(Number(t)) &&
              (u((Number(e) * Number(t)).toFixed(2).toString()), c(t), o(e));
          }, [x, v, u]);
          let [F, M] = (0, l.useState)({ x: 0, y: 0 }),
            [D, U] = (0, l.useState)(!1),
            validateStep1 = () => {
              let e = !0;
              if (
                (0 === g.length
                  ? (E("Please select at least one space."), (e = !1))
                  : E(null),
                !x || isNaN(Number(x)) || 0 >= Number(x)
                  ? (T("Please enter a valid room length in mt."), (e = !1))
                  : T(null),
                !v || isNaN(Number(v)) || 0 >= Number(v)
                  ? (A("Please enter a valid depth in mt."), (e = !1))
                  : A(null),
                !y || isNaN(Number(y)) || 0 >= Number(y)
                  ? (R("Please enter a valid square meters."), (e = !1))
                  : R(null),
                0 === b.length)
              ) {
                L("At least one image is required."), (e = !1);
                return;
              }
              return L(null), e;
            },
            Thumbnail = (e) => {
              let { src: t, onRemove: r } = e;
              return (0, n.jsxs)("div", {
                className: "relative w-5/12 inline-block m-2 group",
                children: [
                  (0, n.jsx)(h(), {
                    width: 300,
                    height: 300,
                    src: t,
                    alt: "Preview",
                    className: "w-full h-auto",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      URL.revokeObjectURL(t), r();
                    },
                    className:
                      "absolute top-0 right-0 text-white bg-[#0000FF]  w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100  focus:outline-none",
                    "aria-label": "Remove image",
                    children: (0, n.jsx)("span", {
                      className: "underline",
                      children: "Remove Image",
                    }),
                  }),
                ],
              });
            };
          return (0, n.jsxs)("div", {
            className: "text-center mt-10",
            children: [
              (0, n.jsxs)("div", {
                className: "mb-20",
                children: [
                  (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("span", {
                        className: "block mb-4 ",
                        children: "Which space are you interested in?",
                      }),
                      (0, n.jsx)("div", {
                        className: "flex place-content-center flex-wrap",
                        children: [
                          "Kitchen",
                          "Bathroom",
                          "Bedroom",
                          "Living Room",
                          "Other",
                        ].map((e) =>
                          (0, n.jsx)(
                            "div",
                            {
                              onClick: () => {
                                i(e), E(null);
                              },
                              className:
                                "min-w-[150px] text-sm w-1/6 cursor-pointer mx-2 my-2 py-1 ".concat(
                                  g.includes(e)
                                    ? "bg-black text-white hover:text-white"
                                    : "bg-gray-200 text-black hover:text-[#0000FF]"
                                ),
                              children: e,
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  }),
                  C &&
                    (0, n.jsx)("div", {
                      className: "text-xs text-red-500 mt-1",
                      children: C,
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col items-center  mb-20 ",
                children: [
                  (0, n.jsx)("span", {
                    className: "block mb-4 ",
                    children:
                      "What are the approximate measurements of your space?",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex w-[80%] place-content-between flex-wrap max-[1024px]:w-full",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col text-center items-center w-1/3  px-4 max-[600px]:px-2",
                        children: [
                          (0, n.jsx)("input", {
                            type: "text",
                            pattern: "[0-9]*",
                            inputMode: "decimal",
                            placeholder: "length in mt",
                            value: x,
                            onChange: (e) => o(e.target.value),
                            onFocus: () => T(null),
                            className:
                              "text-xl border-b  py-1 w-full  text-center border-black rounded-none outline-none focus:border-blue-600 focus:outline-none ".concat(
                                P ? "border-red-500" : ""
                              ),
                          }),
                          P &&
                            (0, n.jsx)("div", {
                              className: "text-xs  text-red-500 mt-1",
                              children: P,
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col text-center items-center  w-1/3 px-4 max-[600px]:px-2",
                        children: [
                          (0, n.jsx)("input", {
                            type: "text",
                            pattern: "[0-9]*",
                            inputMode: "decimal",
                            placeholder: "depth in mt",
                            value: v,
                            onChange: (e) => c(e.target.value),
                            onFocus: () => A(null),
                            className:
                              "text-xl border-b py-1 w-full   text-center border-black rounded-none outline-none focus:border-blue-600 focus:outline-none ".concat(
                                N ? "border-red-500" : ""
                              ),
                          }),
                          N &&
                            (0, n.jsx)("div", {
                              className: "text-xs text-red-500 mt-1",
                              children: N,
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col text-center items-center  w-1/3  px-4 max-[600px]:px-2",
                        children: [
                          (0, n.jsx)("input", {
                            type: "text",
                            pattern: "[0-9]*",
                            inputMode: "decimal",
                            placeholder: "square mt.",
                            value: y,
                            onChange: (e) => u(e.target.value),
                            onFocus: () => R(null),
                            onMouseMove: (e) => {
                              M({ x: e.clientX, y: e.clientY });
                            },
                            onMouseOver: () => {
                              U(!0);
                            },
                            onMouseOut: () => {
                              U(!1);
                            },
                            className:
                              "text-xl border-b  py-1 w-full text-center border-black rounded-none outline-none  focus:border-blue-600 focus:outline-none  ".concat(
                                O ? "border-red-500" : ""
                              ),
                          }),
                          D &&
                            (0, n.jsx)(
                              (e) => {
                                let { message: t, position: r } = e,
                                  s = {
                                    position: "fixed",
                                    top: r.y,
                                    left: r.x,
                                    backgroundColor: "black",
                                    color: "white",
                                    zIndex: 10,
                                  };
                                return (0, n.jsx)("span", {
                                  className:
                                    "fixed ml-5 mt-5 p-4 max-w-[300px] hidden",
                                  style: s,
                                  children: t,
                                });
                              },
                              {
                                message:
                                  ((s = ""),
                                  y >= 2 && y <= 10
                                    ? ((s = "Small"), (t = 2), (r = 10))
                                    : y > 10 && y <= 24
                                    ? ((s = "Medium"), (t = 10), (r = 24))
                                    : y > 24 &&
                                      ((s = "Large"), (t = 25), (r = 1 / 0)),
                                  s
                                    ? ""
                                        .concat(s, " Space (")
                                        .concat(t)
                                        .concat(
                                          r === 1 / 0 ? "+" : "-".concat(r),
                                          "m\xb2)."
                                        )
                                    : "Please enter a valid size to get an estimated space size."),
                                position: F,
                              }
                            ),
                          O &&
                            (0, n.jsx)("div", {
                              className: "text-xs  text-red-500 mt-1",
                              children: O,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "mt-4  flex flex-col items-center mb-20",
                children: [
                  (0, n.jsxs)("span", {
                    className: "block mb-4",
                    children: [
                      (0, n.jsx)("strong", {
                        children:
                          "Here, you should upload a few photos of your space, including doors and windows if apply (mandatory),",
                      }),
                      " ",
                      (0, n.jsx)("br", {}),
                      "Additional and optional a floor plan, a photo of your desired style, a handmade drawing or other, Max (5mb)",
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "  relative w-full bg-gray-100 flex flex-col items-center min-h-[548px]  max-w-[560px]  justify-center items-center",
                    children: (0, n.jsxs)("div", {
                      className:
                        "border border-black  min-w-[426px] max-w-[426px] w-[80%] min-h-[365px]  h-[80%] justify-center  py-20 mt-20 mb-20 flex-col items-center flex max-[1024px]:min-w-[0px] max-[1024px]:py-10 max-[1024px]:mt-10 max-[1024px]:mb-10",
                      children: [
                        (0, n.jsx)("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: (e) => {
                            if (e.target.files) {
                              let t = Array.from(e.target.files),
                                r =
                                  t.reduce((e, t) => e + t.size, 0) +
                                  b.reduce((e, t) => e + t.size, 0);
                              if (r > 5242880) {
                                L("Total image size must not exceed 5MB.");
                                return;
                              }
                              L(null), d([...b, ...t]);
                              let n = t.map((e) => URL.createObjectURL(e));
                              m([...w, ...n]);
                            }
                          },
                          onFocus: () => L(null),
                          className:
                            "absolute inset-0 opacity-0 w-full h-full cursor-pointer",
                          multiple: !0,
                        }),
                        w.length > 0
                          ? (0, n.jsx)("div", {
                              children: w.map((e, t) =>
                                (0, n.jsx)(
                                  Thumbnail,
                                  {
                                    src: e,
                                    onRemove: () => {
                                      let e = b.filter((e, r) => r !== t);
                                      d(e);
                                      let r = w.filter((e, r) => r !== t);
                                      m(r);
                                    },
                                  },
                                  t
                                )
                              ),
                            })
                          : (0, n.jsxs)("div", {
                              className: "",
                              children: [
                                (0, n.jsx)("p", {
                                  children: "Drag & Drop your images",
                                }),
                                (0, n.jsx)("button", {
                                  type: "button",
                                  className:
                                    "mt-2 text-[#0000FF] hover:underline",
                                  onClick: () => {
                                    let e =
                                      document.querySelector(
                                        'input[type="file"]'
                                      );
                                    e && e.click();
                                  },
                                  children: "or Browse",
                                }),
                              ],
                            }),
                        I &&
                          (0, n.jsx)("p", {
                            className: "text-xs  text-red-500 mt-1",
                            children: I,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex flex-col mx-auto items-center mt-4 mb-20 w-3/5 max-[1024px]:w-full",
                children: [
                  (0, n.jsx)("span", {
                    className: "block mb-2 ",
                    children:
                      "(Optional) Any links to a Pinterest board, or Ikea plan for us to take a look? ",
                  }),
                  (0, n.jsx)("input", {
                    type: "text",
                    inputMode: "url",
                    placeholder: "link here.",
                    value: S,
                    onChange: (e) => f(e.target.value),
                    onFocus: () => k(null),
                    className:
                      "rounded-none outline-none text-xl border-b px-2 py-1 w-full text-center border-black focus:border-blue-600 focus:outline-none ".concat(
                        j ? "border-red-500" : ""
                      ),
                  }),
                  (0, n.jsx)("div", {
                    className: "text-xs  text-red-500 mt-1",
                    children: j,
                  }),
                  (0, n.jsx)("div", {
                    onClick: () => {
                      if (!S.trim()) {
                        k("Please, if you provide links, should not be empty");
                        return;
                      }
                      if (
                        !/^(?:(?:https?|ftp):\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)(\/[^]*)?$/.test(
                          S
                        )
                      ) {
                        k("Please enter a valid URL.");
                        return;
                      }
                      if (_.length >= 3) {
                        k("You can add a maximum of 3 links.");
                        return;
                      }
                      p((e) => [...e, S]), f(""), k(null);
                    },
                    className:
                      "px-4  border  cursor-pointer bg-black text-white self-start py-1 ",
                    children: "+ Add a new link",
                  }),
                  (0, n.jsx)("ul", {
                    className: "mt-2 w-full py-2",
                    children: _.map((e, t) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className:
                            "mb-2 w-full  flex justify-between  max-w-[700px] place-content-between",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-blue-500 w-[80%] text-left",
                              children: e,
                            }),
                            (0, n.jsx)("span", {
                              className: "cursor-pointer text-red-500",
                              onClick: () => {
                                p((e) => e.filter((e, r) => r !== t));
                              },
                              children: "remove",
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "text-white inline-block   py-3 text-sm w-full max-w-[214px]  cursor-pointer bg-black text-center ",
                onClick: () => {
                  validateStep1() && a();
                },
                children: "Proceed to Step 2",
              }),
            ],
          });
        },
        m = r(7660);
      (0, m.e3)();
      var components_StepTwo = (e) => {
          let {
              onNext: t,
              userName: r,
              setUserName: s,
              userEmail: a,
              setEmail: i,
              userMessage: o,
              setUserMessage: c,
              lastName: u,
              setLastName: d,
              phoneNumber: h,
              setPhoneNumber: p,
              budget: f,
              setBudget: g,
              country: x,
              setCountry: v,
              enquiryType: y,
              setEnquiryType: b,
            } = e,
            [w, _] = (0, l.useState)(null),
            [S, j] = (0, l.useState)(null),
            [k, C] = (0, l.useState)(null),
            [E, P] = (0, l.useState)(null),
            [T, N] = (0, l.useState)(null),
            [A, O] = (0, l.useState)(null),
            [R, I] = (0, l.useState)(null),
            [L, F] = (0, l.useState)(null),
            [M, D] = (0, l.useState)("Select your Country"),
            [U, $] = (0, l.useState)(!1),
            [B, q] = (0, l.useState)({ x: 0, y: 0 }),
            [z, G] = (0, l.useState)(!1),
            validateStep2 = async () => {
              let e = !0;
              return (
                (r ? _(null) : (_("Name field is required."), (e = !1)),
                u ? P(null) : (P("Last Name field is required."), (e = !1)),
                f ? O(null) : (O("Please select a budget."), (e = !1)),
                x ? I(null) : (I("Please select a country."), (e = !1)),
                y ? F(null) : (F("Please select an enquiry type."), (e = !1)),
                a && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a))
                  ? j(null)
                  : (j("Please provide a valid email address."), (e = !1)),
                o ? C(null) : (C("Message field is required."), (e = !1)),
                e
              );
            },
            H = (0, m.e3)(),
            J = H.sort((e, t) => e.localeCompare(t)).map((e) =>
              "United Kingdom of Great Britain and Northern Ireland" === e
                ? "United Kingdom"
                : e
            );
          return (0, n.jsxs)("div", {
            className: "max-w-[700px] mx-auto text-center",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex place-content-between  mt-20 mb-10 text-left  max-[780px]:flex-col  max-[780px]:mt-10",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%]",
                    children: [
                      (0, n.jsx)("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Name",
                        value: r,
                        className:
                          "text-xl  border-b  py-1 w-full border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        onChange: (e) => s(e.target.value),
                        onFocus: () => _(null),
                      }),
                      w &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1",
                          children: w,
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%] max-[780px]:mt-10 ",
                    children: [
                      (0, n.jsx)("input", {
                        type: "text",
                        name: "lastName",
                        placeholder: "Last Name",
                        value: u,
                        className:
                          "text-xl  border-b   py-1 w-full  border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        onChange: (e) => d(e.target.value),
                        onFocus: () => P(null),
                      }),
                      E &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1",
                          children: E,
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "mb-10 text-left",
                children: [
                  (0, n.jsx)("input", {
                    type: "email",
                    placeholder: "Email",
                    name: "email",
                    value: a,
                    className:
                      "text-xl  border-b  py-1 w-full  border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                    onChange: (e) => {
                      i(e.target.value);
                    },
                    onFocus: () => j(null),
                  }),
                  S &&
                    (0, n.jsx)("div", {
                      className: "text-xs  text-red-500 mt-1",
                      children: S,
                    }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex place-content-between   mb-10 text-left  max-[780px]:flex-col",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%] ",
                    children: [
                      (0, n.jsx)("input", {
                        type: "tel",
                        name: "phone",
                        placeholder: "Phone Number",
                        value: h,
                        className:
                          "text-xl  border-b  py-1   w-full  border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        onChange: (e) => p(e.target.value),
                        onFocus: () => N(null),
                      }),
                      T &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1",
                          children: T,
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%] max-[780px]:mt-10 ",
                    children: [
                      (0, n.jsxs)("select", {
                        name: "country",
                        className:
                          "text-xl  border-b  py-1  w-full text-left border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        value: x,
                        onChange: (e) => v(e.target.value),
                        onFocus: () => I(null),
                        children: [
                          (0, n.jsx)("option", {
                            value: "Select your Country",
                            disabled: !0,
                            children: "Select your Country",
                          }),
                          J.map((e) =>
                            (0, n.jsx)("option", { value: e, children: e }, e)
                          ),
                        ],
                      }),
                      R &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1 ",
                          children: R,
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex place-content-between   mb-20 text-left  max-[780px]:flex-col",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%]  ",
                    children: [
                      (0, n.jsxs)("select", {
                        name: "budget",
                        className:
                          "text-xl border-b  py-1  w-full text-left border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        value: f,
                        onChange: (e) => g(e.target.value),
                        onFocus: () => O(null),
                        onMouseMove: (e) => {
                          q({ x: e.clientX, y: e.clientY });
                        },
                        onMouseOver: () => {
                          G(!0);
                        },
                        onMouseOut: () => {
                          G(!1);
                        },
                        children: [
                          (0, n.jsx)("option", {
                            value: "Select your Budget",
                            disabled: !0,
                            children: "Select your Budget",
                          }),
                          (0, n.jsx)("option", {
                            value: "Less than 1000EUR",
                            children: "Less than 1000EUR",
                          }),
                          (0, n.jsx)("option", {
                            value: "1000EUR - 3000EUR",
                            children: "1000EUR - 3000EUR",
                          }),
                          (0, n.jsx)("option", {
                            value: "3000EUR - 8000EUR",
                            children: "3000EUR - 8000EUR",
                          }),
                          (0, n.jsx)("option", {
                            value: "More than 10000EUR",
                            children: "More than 10000EUR",
                          }),
                        ],
                      }),
                      z &&
                        (0, n.jsx)(
                          (e) => {
                            let { message: t, position: r } = e,
                              s = {
                                position: "fixed",
                                top: r.y,
                                left: r.x,
                                backgroundColor: "black",
                                color: "white",
                                zIndex: 10,
                              };
                            return (0, n.jsx)("span", {
                              className:
                                "fixed ml-5 mt-5 p-4 max-w-[300px] hidden",
                              style: s,
                              children: t,
                            });
                          },
                          {
                            message:
                              "This Budget is relative to your actual Budget, not the actual zolviz cost. So we can design your space with this in consideration.",
                            position: B,
                          }
                        ),
                      A &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1",
                          children: A,
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "w-[48%] max-w-[340px] max-[780px]:w-[100%] max-[780px]:max-w-[100%] max-[780px]:mt-10 ",
                    children: [
                      (0, n.jsxs)("select", {
                        name: "enquiryType",
                        className:
                          "text-xl border-b  py-1    w-full text-left border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                        onChange: (e) => b(e.target.value),
                        value: y,
                        onFocus: () => F(null),
                        children: [
                          (0, n.jsx)("option", {
                            value: "Type of Enquiry",
                            disabled: !0,
                            children: "Type of Enquiry",
                          }),
                          (0, n.jsx)("option", {
                            value: "Home Owner",
                            children: "Home Owner",
                          }),
                          (0, n.jsx)("option", {
                            value: "Interior Designer",
                            children: "Interior Designer",
                          }),
                          (0, n.jsx)("option", {
                            value: "Architect",
                            children: "Architect",
                          }),
                          (0, n.jsx)("option", {
                            value: "Contractor",
                            children: "Contractor",
                          }),
                          (0, n.jsx)("option", {
                            value: "Business Owner",
                            children: "Business Owner",
                          }),
                        ],
                      }),
                      L &&
                        (0, n.jsx)("div", {
                          className: "text-xs  text-red-500 mt-1",
                          children: L,
                        }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("span", {
                className: "block mb-4 text-center",
                children:
                  "Is there anything else we should know about or pay special attention to regarding your project?",
              }),
              (0, n.jsxs)("div", {
                className: "relative",
                children: [
                  (0, n.jsx)("textarea", {
                    name: "message",
                    placeholder: "",
                    className:
                      "border min-h-[375px] text-sm px-2 py-1 w-full text-left border-black focus:border-blue-600 focus:outline-none relative   max-[780px]:text-base rounded-none outline-none",
                    value: o,
                    onChange: (e) => {
                      c(e.target.value);
                    },
                    onFocus: () => C(null),
                    maxLength: 1e3,
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "absolute right-3 bottom-3 text-gray-500 text-xl z-10 select-user-none pointer-events-none",
                    children: 1e3 - o.length,
                  }),
                  k &&
                    (0, n.jsx)("div", {
                      className: "text-xs  text-red-500 mt-1",
                      children: k,
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "text-center mt-10",
                children: (0, n.jsx)("div", {
                  className:
                    "text-white inline-block py-3 text-sm w-full max-w-[214px] cursor-pointer bg-black text-center",
                  onClick: async () => {
                    (await validateStep2()) && t();
                  },
                  children: "Select a Date",
                }),
              }),
            ],
          });
        },
        p = r(5179),
        components_StepThree = (e) => {
          let {
              onNext: t,
              selectedDate: r,
              setSelectedDate: s,
              selectedTime: a,
              setSelectedTime: i,
            } = e,
            [o, c] = (0, l.useState)(null),
            validateStep3 = () => {
              let e = !0;
              return (
                r && a
                  ? c(null)
                  : (c("Please select a date and time slot."), (e = !1)),
                e
              );
            };
          return (0, n.jsxs)("div", {
            className: "mx-auto text-center mt-20  max-[780px]:mt-10",
            children: [
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(p.Z, {
                    onSelectSlot: (e) => {
                      s(e.toISOString().split("T")[0]),
                        i(
                          "".concat(
                            e.getHours().toString().padStart(2, "0"),
                            ":00"
                          )
                        ),
                        c(null);
                    },
                  }),
                  o &&
                    (0, n.jsx)("div", {
                      className: "text-xs text-red-500 mt-2",
                      children: o,
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "text-white inline-block   py-3 my-5 mt-10 text-sm w-full max-w-[214px]  cursor-pointer bg-black text-center ",
                onClick: () => {
                  validateStep3() && t();
                },
                children: "Review and Pay",
              }),
            ],
          });
        },
        f = r(2515),
        g = r(6664);
      let x = "https://jkulgwbhmgxswgegngsq.supabase.co",
        v =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdWxnd2JobWd4c3dnZWduZ3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDcyNjEsImV4cCI6MjAxMDAyMzI2MX0.em9HKTRTv1_ht-5IXCEUtT9vBwUZKaMJsGH79NT0RWA";
      if ("string" != typeof x || "string" != typeof v)
        throw Error("Supabase URL and Anon Key must be defined");
      let y = (0, f.eI)(x, v),
        formatDate = (e, t) => {
          let r = new Date(e),
            n = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(r);
          return "".concat(n, " at ").concat(t);
        };
      var components_StepFour = (e) => {
          let {
              userName: t,
              lastName: r,
              userEmail: s,
              userMessage: a,
              selectedDate: i,
              selectedTime: o,
              previews: c,
              selectedSpace: u,
              roomLength: d,
              depth: h,
              squareMeters: m,
              links: p,
              resetErrors: f,
              images: x,
              phoneNumber: v,
              country: b,
              budget: w,
              enquiryType: _,
              onNext: S,
            } = e,
            [j, k] = (0, l.useState)(null),
            [C, E] = (0, l.useState)(!1),
            P = new Date("".concat(i, "T").concat(o)),
            T = Intl.DateTimeFormat().resolvedOptions().timeZone,
            N = (0, g.useStripe)(),
            A = (0, g.useElements)(),
            [O, R] = (0, l.useState)(!1),
            [I, L] = (0, l.useState)(null),
            validateStep4 = () => {
              let e = !0;
              return (
                N && A
                  ? k(null)
                  : (k("Payment hasn't yet loaded, Please refresh."), (e = !1)),
                e
              );
            },
            handleGoogleCalendarEvent = async (e) => {
              try {
                let t = await fetch("/api/addEvent", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                if (!t.ok) {
                  let e = await t.json();
                  throw Error("API error: ".concat(e.error));
                }
                let r = await t.json();
                return r.googleMeetLink;
              } catch (e) {
                return null;
              }
            },
            handleGoogleSendEmail = async (e) => {
              try {
                let t = await fetch("/api/sendEmail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                if (!t.ok) {
                  let e = await t.json();
                  throw Error("API error: ".concat(e.error));
                }
                L("Email sent successfully!");
              } catch (e) {
                k("Error sending email");
              }
            },
            handleSendMeEmail = async (e) => {
              try {
                let t = await fetch("/api/sendMeEmail", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                if (!t.ok) {
                  let e = await t.json();
                  throw Error("API error: ".concat(e.error));
                }
              } catch (e) {
                k("Error sending email");
              }
            },
            handleBookingCreation = async (e) => {
              try {
                let t = await fetch("/api/createBooking", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                });
                if (!t.ok) throw Error("Failed to create booking");
                let { uid: r } = await t.json();
                return r;
              } catch (e) {
                k("Failed to create booking");
              }
            },
            uploadImageToSupabase = async (e, t) => {
              try {
                let r = t.replace(/[^a-zA-Z0-9-.]/g, "_"),
                  n = e.map(async (e, t) => {
                    let n = ""
                        .concat(r, "/image-")
                        .concat(t, "-")
                        .concat(Date.now(), ".")
                        .concat(e.name.split(".").pop()),
                      { error: s } = await y.storage
                        .from("bookings-assets")
                        .upload(n, e);
                    if (s) throw s;
                    return n;
                  }),
                  s = await Promise.all(n),
                  a = JSON.stringify({ images: s });
                return L("Images uploaded"), a;
              } catch (e) {
                k("Error uploading images");
              }
            },
            handlePaymentIntent = async () => {
              if (!N || !A) {
                console.error("Stripe.js has not loaded yet.");
                return;
              }
              try {
                let e = await fetch("/api/createPaymentIntent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ uid: "booking" }),
                  }),
                  n = await e.json(),
                  l = n.clientSecret,
                  c = A.getElement(g.CardElement);
                if (!c) {
                  console.error("Card element not found"),
                    k("Card element not found.");
                  return;
                }
                let { error: f, paymentIntent: y } = await N.confirmCardPayment(
                  l,
                  { payment_method: { card: c } }
                );
                if (f) k(f.message);
                else if (y && "succeeded" === y.status) {
                  L("Payment succeeded");
                  let e = {
                      summary: "Meeting with ".concat(t),
                      description: a,
                      start: { dateTime: P.toISOString(), timeZone: T },
                      end: {
                        dateTime: new Date(P.getTime() + 36e5).toISOString(),
                        timeZone: T,
                      },
                      attendees: [{ email: s, displayName: t }],
                    },
                    n = await handleGoogleCalendarEvent(e),
                    l = await uploadImageToSupabase(x, s),
                    c = await handleBookingCreation({
                      userEmail: s,
                      userName: t,
                      lastName: r,
                      userMessage: a,
                      combinedDateTime: P,
                      phoneNumber: v,
                      enquiry: _,
                      budget: w,
                      country: b,
                      space: u,
                      measurements: { depth: h, length: d, square_meters: m },
                      links: p,
                      googleMeetLink: n,
                      images: l,
                    }),
                    f = {
                      userEmail: s,
                      userName: t,
                      lastName: r,
                      userDate: formatDate(i, o),
                      phoneNumber: v,
                      enquiry: _,
                      budget: w,
                      country: b,
                      space: u,
                      measurements: { depth: h, length: d, square_meters: m },
                      links: p,
                      userMessage: a,
                      googleMeetLink: n,
                      uid: c,
                    };
                  await handleGoogleSendEmail(f),
                    await handleSendMeEmail(f),
                    S();
                } else (y && "processing" === y.status) || k("Payment failed");
              } catch (e) {
                k("Failed to create payment intent.");
              }
            },
            handleCheckAvailability = async (e) => {
              e.preventDefault(), R(!0);
              let t = new Date(P.getTime()).toISOString(),
                r = new Date(P.getTime() + 36e5).toISOString();
              L("Confirming Booking Slot");
              try {
                let e = await fetch("/api/fetchEvents", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ startDate: t, endDate: r }),
                });
                if (e.ok) {
                  let t = await e.json();
                  t.length
                    ? (R(!1), k("Slot was taken, please choose another time"))
                    : await handlePaymentAndDataSubmission();
                } else console.error("Error:", e.statusText);
              } catch (e) {
                console.error("Fetch error:", e);
              }
            },
            handlePaymentAndDataSubmission = async () => {
              if (!C) {
                k("You must agree to the terms before proceeding."), R(!1);
                return;
              }
              if (!validateStep4()) {
                R(!1);
                return;
              }
              try {
                await handlePaymentIntent();
              } catch (e) {
                k("There was a problem processing your request.");
              } finally {
                R(!1);
              }
            };
          return (0, n.jsxs)("div", {
            className: "max-w-[746px] mx-auto text-center ".concat(
              O ? "cursor-progress" : ""
            ),
            children: [
              (0, n.jsxs)("div", {
                className: "mx-auto text-left mt-20 max-[1024px]:mt-10",
                children: [
                  (0, n.jsx)("strong", { children: "Booking Time:" }),
                  (0, n.jsxs)("div", {
                    className:
                      "text-3xl text-[#0000FF] max-[760px]:text-[4vw] max-[784px]:leading-[3.8vw] max-[700px]:mt-2",
                    children: [
                      " ",
                      formatDate(i, o),
                      " ",
                      (0, n.jsx)("br", { className: "min-[784px]:hidden" }),
                      " ",
                      (0, n.jsx)("span", {
                        className: "text-[18px] max-[784px]:text-[3vw]",
                        children: "(Central European Time)",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("p", {
                    className: "mt-10",
                    children: [
                      (0, n.jsx)("strong", {
                        children: "During our 1-hour video appointment",
                      }),
                      ", a zolviz Expert will delve into the specifics of your space, present our preliminary ideas tailored to your needs, and discuss the associated fees*.",
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "mt-20 text-left mb-10 max-[1024px]:mt-10 ",
                children: [
                  (0, n.jsx)("strong", {
                    className: "mb-7 inline-block max-[1024px]:mb-4",
                    children: " After this appointment you will receive:",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex place-content-between max-[720px]:flex-col",
                    children: [
                      (0, n.jsxs)("ul", {
                        className:
                          "border-l border-black border-l-1 pl-4 max-w-[320px]  max-[720px]:max-w-[100%]",
                        children: [
                          (0, n.jsx)("li", {
                            className: "mb-4",
                            children:
                              "An email link for the initial fee payment.",
                          }),
                          (0, n.jsx)("li", {
                            className: "mb-4",
                            children:
                              "Upon payment, gain access to a  personalized login account.",
                          }),
                          (0, n.jsx)("li", {
                            children:
                              "Explore your interactive dashboard with  a dynamic timeline.",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("ul", {
                        className:
                          "border-l border-black border-l-1 pl-4 max-w-[320px] max-[720px]:max-w-[100%] max-[760px]:pt-4",
                        children: [
                          (0, n.jsx)("li", {
                            className: "mb-4",
                            children:
                              "Expect your 3D visualization in  about 2-3 weeks.",
                          }),
                          (0, n.jsx)("li", {
                            className: "mb-4",
                            children:
                              "Email notification and plan our progress review meeting.",
                          }),
                          (0, n.jsx)("li", {
                            children:
                              "A refund of 99EUR from this booking service after pay the initial fee.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "text-left mb-2 ",
                children: (0, n.jsx)("strong", {
                  children: "Your Contact Details:",
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "flex text-left   p-14 pt-0 border border-black bg-gray-100  max-[1024px]:p-[6%]",
                children: (0, n.jsxs)("div", {
                  className: " w-full  flex flex-wrap ",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]  max-[1024px]:w-full  max-[1024px]:mt-2",
                      children: [
                        (0, n.jsx)("div", { children: "Name" }),
                        (0, n.jsxs)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: [t, " ", r],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]   max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Email" }),
                        (0, n.jsx)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: s,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16   mr-5 w-[38%]  max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Country" }),
                        (0, n.jsxs)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: [
                            " ",
                            "Select your Country" === b ? "-" : b,
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]   max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Phone Number" }),
                        (0, n.jsx)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: v,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]   max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Space" }),
                        (0, n.jsx)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: u,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]  max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Measurements" }),
                        (0, n.jsxs)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: [d, " x ", h, " (", m, "m\xb2)"],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]  max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Type of Enquiry" }),
                        (0, n.jsx)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: "Type of Enquiry" === _ ? "-" : _,
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-16  mr-5 w-[38%]   max-[1024px]:w-full max-[1024px]:mt-8",
                      children: [
                        (0, n.jsx)("div", { children: "Budget" }),
                        (0, n.jsx)("div", {
                          className: "text-2xl max-[760px]:text-[3.5vw]",
                          children: "Select your Budget" === w ? "-" : w,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "mx-auto text-left mt-10",
                children: [
                  (0, n.jsx)("strong", { children: "Booking Price:" }),
                  (0, n.jsx)("div", {
                    className: "text-3xl text-[#0000FF]",
                    children: "58 EUR",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "w-full mx-auto py-1 mt-10",
                children: [
                  (0, n.jsx)("div", {
                    className: "mb-4",
                    children: (0, n.jsx)("input", {
                      type: "text",
                      id: "nameOnCard",
                      placeholder: "Name on Card",
                      className:
                        "text-xl border-b py-1 w-full text-left border-black focus:border-blue-600 focus:outline-none rounded-none outline-none",
                    }),
                  }),
                  (0, n.jsx)(g.CardElement, {
                    id: "card-element",
                    className:
                      "w-full text-xl  border-b  py-1 border-black focus:border-blue-600 focus:outline-none mt-10 rounded-none outline-none",
                    options: {
                      hidePostalCode: !0,
                      style: {
                        base: {
                          fontSize: "21px",
                          font: "sans-serif",
                          color: "#000",
                          "::placeholder": { color: "#9ca3af" },
                          borderBottom: "1px solid black",
                          paddingBottom: "5px",
                        },
                        invalid: { color: "#9e2146", iconColor: "#9e2146" },
                        focus: { borderBottom: "1px solid #1E90FF" },
                      },
                    },
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "text-center mt-8",
                children: [
                  (0, n.jsxs)("strong", {
                    children: [
                      "After payment, you have 24 hours to cancel your booking by sending an email to hi@zolviz.com. ",
                      (0, n.jsx)("br", {}),
                      " After this period, your booking time cannot be modified, and you will still be charged for the appointment. ",
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex justify-center items-center mb-2  mt-5",
                    children: [
                      (0, n.jsx)("input", {
                        type: "checkbox",
                        id: "agreeCheckbox",
                        className: "mr-2",
                        checked: C,
                        onChange: () => E((e) => !e),
                      }),
                      (0, n.jsx)("label", {
                        htmlFor: "agreeCheckbox",
                        children: "I Agree",
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("button", {
                className:
                  "text-white inline-block mt-5 py-3 text-sm w-full max-w-[214px] cursor-pointer bg-black text-center",
                onClick: handleCheckAvailability,
                disabled: O,
                children: O
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("svg", {
                          className: "animate-spin h-5 w-5 mr-3 inline-block",
                          viewBox: "0 0 24 24",
                          children: [
                            (0, n.jsx)("circle", {
                              className: "opacity-25",
                              cx: "12",
                              cy: "12",
                              r: "10",
                              stroke: "white",
                              strokeWidth: "4",
                            }),
                            (0, n.jsx)("path", {
                              className: "opacity-75",
                              fill: "white",
                              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className: "self-center place-self-center",
                          children: "Processing...",
                        }),
                      ],
                    })
                  : "Schedule Event",
              }),
              O && (0, n.jsx)("div", { className: "mt-2", children: I }),
              j &&
                (0, n.jsx)("div", {
                  className: "text-xs text-red-500 mt-2",
                  children: j,
                }),
            ],
          });
        },
        components_StepFive = (e) => {
          let { handleClose: t } = e;
          return (0, n.jsxs)("div", {
            className:
              "w-full text-xl mx-auto text-center h-[100%] items-center justify-center flex flex-col absolute top-0 left-0",
            children: [
              (0, n.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-3xl",
                    children: "Thank you :)",
                  }),
                  " ",
                  (0, n.jsx)("br", {}),
                  (0, n.jsxs)("p", {
                    className: "text-sm",
                    children: [
                      "you will receive an ",
                      (0, n.jsx)("span", {
                        className: "text-[#0000FF]",
                        children: "email of confirmation",
                      }),
                      "  now or in a few minutes.  ",
                      (0, n.jsx)("br", {}),
                      "please remember check your spam folder, and see you there!",
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("button", {
                className:
                  "text-white inline-block mt-5  py-3 text-sm w-full max-w-[214px]  cursor-pointer bg-black text-center",
                onClick: () => {
                  t();
                },
                children: "Close Form",
              }),
            ],
          });
        };
      function BookingModal_BookingModal() {
        let { isModalOpen: e, setModalOpen: t } = (0, i.d)(),
          [r, s] = (0, l.useState)(1),
          [a, o] = (0, l.useState)(""),
          [c, u] = (0, l.useState)(""),
          [d, h] = (0, l.useState)(""),
          [m, p] = (0, l.useState)(""),
          [f, g] = (0, l.useState)([]),
          [x, v] = (0, l.useState)([]),
          [y, b] = (0, l.useState)([]),
          [w, _] = (0, l.useState)(""),
          [S, j] = (0, l.useState)(""),
          [k, C] = (0, l.useState)(""),
          [E, P] = (0, l.useState)(""),
          [T, N] = (0, l.useState)(""),
          [A, O] = (0, l.useState)(""),
          [R, I] = (0, l.useState)(""),
          [L, F] = (0, l.useState)(""),
          [M, D] = (0, l.useState)("Select your Budget"),
          [U, $] = (0, l.useState)("Select your Country"),
          [B, q] = (0, l.useState)("Type of Enquiry"),
          z = (0, l.useRef)(null),
          scrollToTop = () => {
            z.current && (z.current.scrollTop = 0);
          };
        (0, l.useEffect)(
          () => (
            document.body.style.overflow,
            e &&
              (document.body.classList.remove("overflow-auto"),
              document.body.classList.add("overflow-hidden")),
            () => {
              document.body.classList.remove("overflow-hidden"),
                document.body.classList.add("overflow-auto");
            }
          ),
          [e]
        );
        let ChevronLeft = () =>
            (0, n.jsx)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, n.jsx)("path", {
                d: "M11 13L5 8L11 3",
                stroke: "currentColor",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
          handleClose = () => {
            t(!1);
          },
          handleNextStep = () => {
            r < 5 &&
              (s((e) => {
                let t = e + 1;
                return (
                  window.history.pushState(
                    { modal: !0, step: t },
                    "",
                    window.location.pathname
                  ),
                  t
                );
              }),
              scrollToTop());
          };
        return ((0, l.useEffect)(() => {
          e &&
            (window.history.pushState(
              { modal: !0, step: 1 },
              "",
              window.location.pathname
            ),
            s(1));
        }, [e]),
        (0, l.useEffect)(() => {
          let handlePopState = (e) => {
            e.state && e.state.modal
              ? 5 === e.state.step
                ? t(!1)
                : e.state.step >= 1 && e.state.step < 5
                ? s(e.state.step)
                : t(!1)
              : t(!1);
          };
          return (
            window.addEventListener("popstate", handlePopState),
            () => {
              window.removeEventListener("popstate", handlePopState);
            }
          );
        }, []),
        e)
          ? (0, n.jsx)("div", {
              className:
                "fixed inset-0 flex justify-center  py-[10vh] overflow-y-auto z-[70] max-[1024px]:py-[0px] ",
              ref: z,
              children: (0, n.jsxs)("div", {
                className:
                  "relative bg-white p-[50px] w-[95%]  inline-table max-w-[1200px]  border border-black w-11/12  max-[1024px]:w-full  max-[1024px]:border-none max-[1024px]:p-[20px]  max-[600px]:p-[15px]  max-[600px]:pt-[60px]  max-[1024px]:pt-[60px] max-[600px]:pb-[60px]  max-[1024px]:pb-[60px]",
                children: [
                  1 === r &&
                    (0, n.jsx)("button", {
                      onClick: () => {
                        handleClose();
                      },
                      className:
                        "absolute top-4 right-4 text-black hover:text-[#0000FF] text-sm flex",
                      children: "\xd7 Close Form",
                    }),
                  2 === r &&
                    (0, n.jsxs)("button", {
                      onClick: () => s(1),
                      className:
                        "absolute top-4 right-4 text-black  hover:text-[#0000FF] text-sm flex place-items-center",
                      children: [
                        (0, n.jsx)(ChevronLeft, {}),
                        (0, n.jsx)("span", {
                          className: "inline-block ml-1",
                          children: "Back to Step 1 ",
                        }),
                      ],
                    }),
                  3 === r &&
                    (0, n.jsxs)("button", {
                      onClick: () => s(2),
                      className:
                        "absolute top-4 right-4 text-black hover:text-[#0000FF]0 text-sm flex place-items-center",
                      children: [
                        (0, n.jsx)(ChevronLeft, {}),
                        (0, n.jsx)("span", {
                          className: "inline-block ml-1",
                          children: " Back to Step 2 ",
                        }),
                      ],
                    }),
                  4 === r &&
                    (0, n.jsxs)("button", {
                      onClick: () => {
                        s(3);
                      },
                      className:
                        "absolute top-4 right-4 text-black  hover:text-[#0000FF] text-sm flex place-items-center",
                      children: [
                        (0, n.jsx)(ChevronLeft, {}),
                        (0, n.jsx)("span", {
                          className: "inline-block ml-1",
                          children: " Back to Step 3 ",
                        }),
                      ],
                    }),
                  5 === r &&
                    (0, n.jsx)("button", {
                      onClick: () => {
                        handleClose();
                      },
                      className:
                        "absolute top-4 right-4 text-black  hover:text-[#0000FF] text-sm z-10",
                      children: "\xd7 Close Form",
                    }),
                  (0, n.jsx)("h2", {
                    className:
                      "mb-4 text-3xl max-w-[840px] leading-10 tracking-tight",
                    children: "Book a Meeting",
                  }),
                  (0, n.jsx)("div", {
                    className: "relative h-[2px]  w-full bg-gray-200 mb-2",
                    children: (0, n.jsx)("div", {
                      className:
                        "absolute top-0 left-0 h-[2px] bg-[#0000FF] transition-width",
                      style: {
                        width:
                          1 === r
                            ? "18%"
                            : 2 === r
                            ? "50%"
                            : 3 === r
                            ? "80%"
                            : "100%",
                      },
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "select-none w-full flex place-content-between mb-4 max-[600px]:text-[10px] ".concat(
                        5 === r ? " invisible" : ""
                      ),
                    children: [
                      (0, n.jsx)("div", {
                        className: " ".concat(
                          1 === r ? " text-[#0000FF]" : "text-gray-700"
                        ),
                        children: " 1. space details",
                      }),
                      (0, n.jsx)("div", {
                        className: " ".concat(
                          2 === r ? " text-[#0000FF]" : "text-gray-700"
                        ),
                        children: " 2. your information",
                      }),
                      (0, n.jsx)("div", {
                        className: " ".concat(
                          3 === r ? " text-[#0000FF]" : "text-gray-700"
                        ),
                        children: " 3. select a date",
                      }),
                      (0, n.jsx)("div", {
                        className: " ".concat(
                          4 === r ? " text-[#0000FF]" : "text-gray-700"
                        ),
                        children: " 4. review and pay",
                      }),
                    ],
                  }),
                  (0, n.jsx)("h3", {
                    className: "text-2xl mb-4 mt-8",
                    children:
                      1 === r
                        ? "1/4 Tell us about your space"
                        : 2 === r
                        ? "2/4 Your Information"
                        : 3 === r
                        ? "3/4 Select a Date"
                        : 4 === r
                        ? "4/4 Review and Pay"
                        : "",
                  }),
                  1 === r &&
                    (0, n.jsx)(components_StepOne, {
                      onNext: handleNextStep,
                      setSelectedSpace: o,
                      setRoomLength: u,
                      setDepth: h,
                      setSquareMeters: p,
                      setImages: g,
                      setPreviews: v,
                      setLinks: b,
                      setCurrentLink: _,
                      selectedSpace: a,
                      roomLength: c,
                      depth: d,
                      squareMeters: m,
                      images: f,
                      previews: x,
                      links: y,
                      currentLink: w,
                    }),
                  2 === r &&
                    (0, n.jsx)(components_StepTwo, {
                      onNext: handleNextStep,
                      userName: S,
                      setUserName: j,
                      userEmail: k,
                      setEmail: C,
                      userMessage: E,
                      setUserMessage: P,
                      lastName: R,
                      setLastName: I,
                      phoneNumber: L,
                      setPhoneNumber: F,
                      budget: M,
                      setBudget: D,
                      country: U,
                      setCountry: $,
                      enquiryType: B,
                      setEnquiryType: q,
                    }),
                  3 === r &&
                    (0, n.jsx)(components_StepThree, {
                      onNext: handleNextStep,
                      selectedDate: T,
                      setSelectedDate: N,
                      selectedTime: A,
                      setSelectedTime: O,
                    }),
                  4 === r &&
                    (0, n.jsx)(components_StepFour, {
                      onPaymentSuccess: () => {
                        s(5),
                          window.removeEventListener(
                            "popstate",
                            handlePopState
                          );
                      },
                      userName: S,
                      lastName: R,
                      userEmail: k,
                      userMessage: E,
                      selectedDate: T,
                      selectedTime: A,
                      phoneNumber: L,
                      country: U,
                      previews: x,
                      selectedSpace: a,
                      roomLength: c,
                      depth: d,
                      squareMeters: m,
                      links: y,
                      budget: M,
                      enquiryType: B,
                      resetErrors: () => {},
                      images: f,
                      onNext: handleNextStep,
                    }),
                  5 === r &&
                    (0, n.jsx)(components_StepFive, {
                      handleClose: handleClose,
                    }),
                ],
              }),
            })
          : null;
      }
      function handlePopState(e) {
        throw Error("Function not implemented.");
      }
      var b = "https://js.stripe.com/v3",
        w = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        findScript = function () {
          for (
            var e = document.querySelectorAll('script[src^="'.concat(b, '"]')),
              t = 0;
            t < e.length;
            t++
          ) {
            var r = e[t];
            if (w.test(r.src)) return r;
          }
          return null;
        },
        injectScript = function (e) {
          var t =
              e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
            r = document.createElement("script");
          r.src = "".concat(b).concat(t);
          var n = document.head || document.body;
          if (!n)
            throw Error(
              "Expected document.body not to be null. Stripe.js requires a <body> element."
            );
          return n.appendChild(r), r;
        },
        registerWrapper = function (e, t) {
          e &&
            e._registerWrapper &&
            e._registerWrapper({
              name: "stripe-js",
              version: "2.1.3",
              startTime: t,
            });
        },
        _ = null,
        initStripe = function (e, t, r) {
          if (null === e) return null;
          var n = e.apply(void 0, t);
          return registerWrapper(n, r), n;
        },
        S = Promise.resolve().then(function () {
          return null !== _
            ? _
            : (_ = new Promise(function (e, t) {
                if (
                  "undefined" == typeof window ||
                  "undefined" == typeof document
                ) {
                  e(null);
                  return;
                }
                if ((window.Stripe, window.Stripe)) {
                  e(window.Stripe);
                  return;
                }
                try {
                  var r = findScript();
                  r || (r = injectScript(null)),
                    r.addEventListener("load", function () {
                      window.Stripe
                        ? e(window.Stripe)
                        : t(Error("Stripe.js not available"));
                    }),
                    r.addEventListener("error", function () {
                      t(Error("Failed to load Stripe.js"));
                    });
                } catch (e) {
                  t(e);
                  return;
                }
              }));
        }),
        j = !1;
      S.catch(function (e) {
        j || console.warn(e);
      });
      var k = r(9008),
        C = r.n(k),
        components_CookiesBanner = function () {
          let [e, t] = (0, l.useState)(!0);
          return (
            e &&
            (0, n.jsx)("div", {
              className:
                "cookies-message fixed bottom-0 w-full  text-xs font-normal  flex flex-end z-[50]",
              children: (0, n.jsx)("div", {
                className:
                  "    max-w-[1920px] mx-auto w-full place-content-end flex",
                children: (0, n.jsxs)("div", {
                  className:
                    "bg-white text-black border border-black  p-5 mb-5 mr-5 max-w-[380px] flex",
                  children: [
                    (0, n.jsxs)("p", {
                      children: [
                        "We use cookies to improve your experience. By using our site, you agree to our",
                        " ",
                        (0, n.jsx)(a(), {
                          href: "/privacy-policy",
                          className: "underline",
                          children: "Privacy Policy",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => {
                        t(!1);
                      },
                      className:
                        "place-self-center px-4  border  cursor-pointer bg-black text-white py-1 ml-2",
                      children: "OK",
                    }),
                  ],
                }),
              }),
            })
          );
        },
        E = r(4304),
        components_FadeIn = () => {
          let handleScroll = () => {
              let e = document.querySelectorAll(
                "[".concat("data-fade-in", "]")
              );
              e.forEach((e) => {
                let t = e.getBoundingClientRect().top;
                t < window.innerHeight && e.classList.add("fade-in-active");
              });
            },
            e = (0, o.useRouter)();
          return (
            (0, l.useEffect)(() => {
              let handleRouteChange = () => {
                handleScroll();
              };
              return (
                window.addEventListener("scroll", handleScroll),
                handleScroll(),
                e.events.on("routeChangeComplete", handleRouteChange),
                () => {
                  window.removeEventListener("scroll", handleScroll),
                    e.events.off("routeChangeComplete", handleRouteChange);
                }
              );
            }, [e.events]),
            null
          );
        };
      let P =
        "pk_live_51NpRujHEI1ZXaY8WBJ5zep3HRR1b4cocFpd78VM430664ZLf84LfgnPuo5V6lZjStXAvbXw5lc6d1eMWrSJVGDt500JulKaPMs";
      if (!P)
        throw Error(
          "Stripe public key is not defined in environment variables"
        );
      let T = (function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        j = !0;
        var n = Date.now();
        return S.then(function (e) {
          return initStripe(e, t, n);
        });
      })(P);
      var _app = function (e) {
        let { Component: t, pageProps: r } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(E.Wi, { trackPageViews: !0 }),
            (0, n.jsxs)(c.i, {
              children: [
                (0, n.jsxs)(C(), {
                  children: [
                    (0, n.jsx)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=.9",
                    }),
                    (0, n.jsx)("link", {
                      rel: "icon",
                      type: "image/png",
                      href: "/assets/favicon.png",
                    }),
                  ],
                }),
                (0, n.jsxs)(i.D, {
                  children: [
                    (0, n.jsx)(components_FadeIn, {}),
                    (0, n.jsxs)("div", {
                      className:
                        "max-w-[1920px] w-full mx-auto bg-white min-h-[100vh] text-black text-xs font-normal",
                      children: [
                        (0, n.jsx)(components_Header, {}),
                        (0, n.jsxs)(g.Elements, {
                          stripe: T,
                          children: [
                            (0, n.jsx)(BookingModal_BookingModal, {}),
                            (0, n.jsx)(t, { ...r }),
                          ],
                        }),
                        (0, n.jsx)(components_Footer, {}),
                      ],
                    }),
                    (0, n.jsx)(components_CookiesBanner, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    4698: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return i;
        },
      });
      var n = r(2515);
      let s = "https://jkulgwbhmgxswgegngsq.supabase.co",
        a =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdWxnd2JobWd4c3dnZWduZ3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDcyNjEsImV4cCI6MjAxMDAyMzI2MX0.em9HKTRTv1_ht-5IXCEUtT9vBwUZKaMJsGH79NT0RWA";
      if ("string" != typeof s || "string" != typeof a)
        throw Error("Supabase URL and Anon Key must be defined");
      let i = (0, n.eI)(s, a);
    },
    8199: function () {},
    9008: function (e, t, r) {
      e.exports = r(6561);
    },
    5675: function (e, t, r) {
      e.exports = r(4169);
    },
    1664: function (e, t, r) {
      e.exports = r(2418);
    },
    1163: function (e, t, r) {
      e.exports = r(2338);
    },
    4298: function (e, t, r) {
      e.exports = r(9220);
    },
    1462: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0);
      let n = r(7582),
        s = n.__importDefault(r(7294)),
        a = n.__importDefault(r(4298)),
        i = r(8816);
      t.GoogleAnalytics = function ({
        debugMode: e = !1,
        gaMeasurementId: t,
        gtagUrl: r = "https://www.googletagmanager.com/gtag/js",
        strategy: n = "afterInteractive",
        defaultConsent: o = "granted",
        trackPageViews: l,
        nonce: c,
      }) {
        let u = "G-J1HX6CKEDJ";
        return ((0, i.usePageViews)({
          gaMeasurementId: u,
          ignoreHashChange:
            "object" == typeof l && (null == l ? void 0 : l.ignoreHashChange),
          disabled: !l,
        }),
        u)
          ? s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(a.default, {
                src: `${r}?id=${u}`,
                strategy: n,
              }),
              s.default.createElement(
                a.default,
                { id: "nextjs-google-analytics", nonce: c },
                `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${
              "denied" === o &&
              `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`
            }
            gtag('config', '${u}', {
              page_path: window.location.pathname,
              ${e ? `debug_mode: ${e},` : ""}
            });
          `
              )
            )
          : null;
      };
    },
    7270: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0);
      var n = r(1462);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return n.GoogleAnalytics;
        },
      });
    },
    8816: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.usePageViews = t.usePagesViews = void 0);
      var n = r(7015);
      Object.defineProperty(t, "usePagesViews", {
        enumerable: !0,
        get: function () {
          return n.usePagesViews;
        },
      });
      var s = r(9412);
      Object.defineProperty(t, "usePageViews", {
        enumerable: !0,
        get: function () {
          return s.usePageViews;
        },
      });
    },
    9412: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.usePageViews = void 0);
      let n = r(7294),
        s = r(1163),
        a = r(8396);
      t.usePageViews = function ({
        gaMeasurementId: e,
        ignoreHashChange: t,
        disabled: r,
      } = {}) {
        (0, n.useEffect)(() => {
          if (r) return;
          let handleRouteChange = (e) => {
            (0, a.pageView)({ path: e.toString() }, "G-J1HX6CKEDJ");
          };
          return (
            s.Router.events.on("routeChangeComplete", handleRouteChange),
            t || s.Router.events.on("hashChangeComplete", handleRouteChange),
            () => {
              s.Router.events.off("routeChangeComplete", handleRouteChange),
                t ||
                  s.Router.events.off("hashChangeComplete", handleRouteChange);
            }
          );
        }, [s.Router.events, e, t]);
      };
    },
    7015: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.usePagesViews = void 0);
      let n = r(9412);
      t.usePagesViews = function (e) {
        console.warn(
          "Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"
        ),
          (0, n.usePageViews)(e);
      };
    },
    4304: function (e, t, r) {
      "use strict";
      t.Wi = void 0;
      var n = r(7270);
      Object.defineProperty(t, "Wi", {
        enumerable: !0,
        get: function () {
          return n.GoogleAnalytics;
        },
      }),
        r(8816),
        r(8396);
    },
    5146: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.consent = void 0),
        (t.consent = function ({ arg: e, params: t }) {
          window.gtag && window.gtag("consent", e, t);
        });
    },
    9633: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.event = void 0);
      let n = r(7582);
      t.event = function (e, t = {}) {
        var {
            category: r,
            label: s,
            value: a,
            nonInteraction: i,
            userId: o,
          } = t,
          l = n.__rest(t, [
            "category",
            "label",
            "value",
            "nonInteraction",
            "userId",
          ]);
        if (!window.gtag) return;
        let c = Object.assign({}, l);
        void 0 !== r && (c.event_category = r),
          void 0 !== s && (c.event_label = s),
          void 0 !== a && (c.value = a),
          void 0 !== i && (c.non_interaction = i),
          void 0 !== o && (c.user_id = o),
          window.gtag("event", e, c);
      };
    },
    8396: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.consent = t.event = t.pageView = void 0);
      var n = r(3371);
      Object.defineProperty(t, "pageView", {
        enumerable: !0,
        get: function () {
          return n.pageView;
        },
      });
      var s = r(9633);
      Object.defineProperty(t, "event", {
        enumerable: !0,
        get: function () {
          return s.event;
        },
      });
      var a = r(5146);
      Object.defineProperty(t, "consent", {
        enumerable: !0,
        get: function () {
          return a.consent;
        },
      });
    },
    3371: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pageView = void 0),
        (t.pageView = function (
          { title: e, location: t, path: r, sendPageView: n, userId: s } = {},
          a
        ) {
          let i = "G-J1HX6CKEDJ";
          if (!i || !window.gtag) return;
          let o = {};
          void 0 !== e && (o.page_title = e),
            void 0 !== t && (o.page_location = t),
            void 0 !== r && (o.page_path = r),
            void 0 !== n && (o.send_page_view = n),
            void 0 !== s && (o.user_id = s),
            window.gtag("config", i, o);
        });
    },
    5840: function (e, t, r) {
      if ("object" == typeof globalThis) n = globalThis;
      else
        try {
          n = r(284);
        } catch (e) {
        } finally {
          if ((n || "undefined" == typeof window || (n = window), !n))
            throw Error("Could not determine global this");
        }
      var n,
        s = n.WebSocket || n.MozWebSocket,
        a = r(9387);
      function W3CWebSocket(e, t) {
        return t ? new s(e, t) : new s(e);
      }
      s &&
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
          Object.defineProperty(W3CWebSocket, e, {
            get: function () {
              return s[e];
            },
          });
        }),
        (e.exports = { w3cwebsocket: s ? W3CWebSocket : null, version: a });
    },
    9387: function (e, t, r) {
      e.exports = r(9794).version;
    },
    7582: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __addDisposableResource: function () {
            return __addDisposableResource;
          },
          __assign: function () {
            return __assign;
          },
          __asyncDelegator: function () {
            return __asyncDelegator;
          },
          __asyncGenerator: function () {
            return __asyncGenerator;
          },
          __asyncValues: function () {
            return __asyncValues;
          },
          __await: function () {
            return __await;
          },
          __awaiter: function () {
            return __awaiter;
          },
          __classPrivateFieldGet: function () {
            return __classPrivateFieldGet;
          },
          __classPrivateFieldIn: function () {
            return __classPrivateFieldIn;
          },
          __classPrivateFieldSet: function () {
            return __classPrivateFieldSet;
          },
          __createBinding: function () {
            return n;
          },
          __decorate: function () {
            return __decorate;
          },
          __disposeResources: function () {
            return __disposeResources;
          },
          __esDecorate: function () {
            return __esDecorate;
          },
          __exportStar: function () {
            return __exportStar;
          },
          __extends: function () {
            return __extends;
          },
          __generator: function () {
            return __generator;
          },
          __importDefault: function () {
            return __importDefault;
          },
          __importStar: function () {
            return __importStar;
          },
          __makeTemplateObject: function () {
            return __makeTemplateObject;
          },
          __metadata: function () {
            return __metadata;
          },
          __param: function () {
            return __param;
          },
          __propKey: function () {
            return __propKey;
          },
          __read: function () {
            return __read;
          },
          __rest: function () {
            return __rest;
          },
          __runInitializers: function () {
            return __runInitializers;
          },
          __setFunctionName: function () {
            return __setFunctionName;
          },
          __spread: function () {
            return __spread;
          },
          __spreadArray: function () {
            return __spreadArray;
          },
          __spreadArrays: function () {
            return __spreadArrays;
          },
          __values: function () {
            return __values;
          },
        });
      var extendStatics = function (e, t) {
        return (extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function __extends(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function __() {
          this.constructor = e;
        }
        extendStatics(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((__.prototype = t.prototype), new __()));
      }
      var __assign = function () {
        return (__assign =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function __rest(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, n = Object.getOwnPropertySymbols(e);
            s < n.length;
            s++
          )
            0 > t.indexOf(n[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
              (r[n[s]] = e[n[s]]);
        return r;
      }
      function __decorate(e, t, r, n) {
        var s,
          a = arguments.length,
          i =
            a < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, r, n);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (i = (a < 3 ? s(i) : a > 3 ? s(t, r, i) : s(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i;
      }
      function __param(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function __esDecorate(e, t, r, n, s, a) {
        function accept(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var i,
            o = n.kind,
            l = "getter" === o ? "get" : "setter" === o ? "set" : "value",
            c = !t && e ? (n.static ? e : e.prototype) : null,
            u = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}),
            d = !1,
            h = r.length - 1;
          h >= 0;
          h--
        ) {
          var m = {};
          for (var p in n) m[p] = "access" === p ? {} : n[p];
          for (var p in n.access) m.access[p] = n.access[p];
          m.addInitializer = function (e) {
            if (d)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            a.push(accept(e || null));
          };
          var f = (0, r[h])(
            "accessor" === o ? { get: u.get, set: u.set } : u[l],
            m
          );
          if ("accessor" === o) {
            if (void 0 === f) continue;
            if (null === f || "object" != typeof f)
              throw TypeError("Object expected");
            (i = accept(f.get)) && (u.get = i),
              (i = accept(f.set)) && (u.set = i),
              (i = accept(f.init)) && s.unshift(i);
          } else (i = accept(f)) && ("field" === o ? s.unshift(i) : (u[l] = i));
        }
        c && Object.defineProperty(c, n.name, u), (d = !0);
      }
      function __runInitializers(e, t, r) {
        for (var n = arguments.length > 2, s = 0; s < t.length; s++)
          r = n ? t[s].call(e, r) : t[s].call(e);
        return n ? r : void 0;
      }
      function __propKey(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function __setFunctionName(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function __metadata(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function __awaiter(e, t, r, n) {
        return new (r || (r = Promise))(function (s, a) {
          function fulfilled(e) {
            try {
              step(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function rejected(e) {
            try {
              step(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function step(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(fulfilled, rejected);
          }
          step((n = n.apply(e, t || [])).next());
        });
      }
      function __generator(e, t) {
        var r,
          n,
          s,
          a,
          i = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = { next: verb(0), throw: verb(1), return: verb(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function verb(o) {
          return function (l) {
            return (function (o) {
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), o[0] && (i = 0)), i; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (s =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((s = n.return) && s.call(n), 0)
                          : n.next) &&
                      !(s = s.call(n, o[1])).done)
                  )
                    return s;
                  switch (((n = 0), s && (o = [2 & o[0], s.value]), o[0])) {
                    case 0:
                    case 1:
                      s = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = i.trys).length > 0 && s[s.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!s || (o[1] > s[0] && o[1] < s[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < s[1]) {
                        (i.label = s[1]), (s = o);
                        break;
                      }
                      if (s && i.label < s[2]) {
                        (i.label = s[2]), i.ops.push(o);
                        break;
                      }
                      s[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (e) {
                  (o = [6, e]), (n = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, l]);
          };
        }
      }
      var n = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var s = Object.getOwnPropertyDescriptor(t, r);
            (!s ||
              ("get" in s ? !t.__esModule : s.writable || s.configurable)) &&
              (s = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, s);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function __exportStar(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            n(t, e, r);
      }
      function __values(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function __read(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          s,
          a = r.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
            i.push(n.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a);
          } finally {
            if (s) throw s.error;
          }
        }
        return i;
      }
      function __spread() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(__read(arguments[t]));
        return e;
      }
      function __spreadArrays() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), s = 0, t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, o = a.length; i < o; i++, s++)
            n[s] = a[i];
        return n;
      }
      function __spreadArray(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, s = 0, a = t.length; s < a; s++)
            (!n && s in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, s)), (n[s] = t[s]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function __await(e) {
        return this instanceof __await ? ((this.v = e), this) : new __await(e);
      }
      function __asyncGenerator(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          s = r.apply(e, t || []),
          a = [];
        return (
          (n = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function verb(e) {
          s[e] &&
            (n[e] = function (t) {
              return new Promise(function (r, n) {
                a.push([e, t, r, n]) > 1 || resume(e, t);
              });
            });
        }
        function resume(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof __await
              ? Promise.resolve(r.value.v).then(fulfill, reject)
              : settle(a[0][2], r);
          } catch (e) {
            settle(a[0][3], e);
          }
        }
        function fulfill(e) {
          resume("next", e);
        }
        function reject(e) {
          resume("throw", e);
        }
        function settle(e, t) {
          e(t), a.shift(), a.length && resume(a[0][0], a[0][1]);
        }
      }
      function __asyncDelegator(e) {
        var t, r;
        return (
          (t = {}),
          verb("next"),
          verb("throw", function (e) {
            throw e;
          }),
          verb("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function verb(n, s) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: __await(e[n](t)), done: !1 }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function __asyncValues(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = __values(e)),
            (t = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function verb(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, s) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function __makeTemplateObject(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var s = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function __importStar(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              n(t, e, r);
        return s(t, e), t;
      }
      function __importDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function __classPrivateFieldGet(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function __classPrivateFieldSet(e, t, r, n, s) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !s)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !s : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? s.call(e, r) : s ? (s.value = r) : t.set(e, r), r;
      }
      function __classPrivateFieldIn(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function __addDisposableResource(e, t, r) {
        if (null != t) {
          var n;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose];
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var a =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function __disposeResources(e) {
        function fail(t) {
          (e.error = e.hasError
            ? new a(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        return (function next() {
          for (; e.stack.length; ) {
            var t = e.stack.pop();
            try {
              var r = t.dispose && t.dispose.call(t.value);
              if (t.async)
                return Promise.resolve(r).then(next, function (e) {
                  return fail(e), next();
                });
            } catch (e) {
              fail(e);
            }
          }
          if (e.hasError) throw e.error;
        })();
      }
      t.default = {
        __extends,
        __assign,
        __rest,
        __decorate,
        __param,
        __metadata,
        __awaiter,
        __generator,
        __createBinding: n,
        __exportStar,
        __values,
        __read,
        __spread,
        __spreadArrays,
        __spreadArray,
        __await,
        __asyncGenerator,
        __asyncDelegator,
        __asyncValues,
        __makeTemplateObject,
        __importStar,
        __importDefault,
        __classPrivateFieldGet,
        __classPrivateFieldSet,
        __classPrivateFieldIn,
        __addDisposableResource,
        __disposeResources,
      };
    },
    5463: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"\xc5land Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barth\xe9lemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"C\xf4te d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Cura\xe7ao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"R\xe9union"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"T\xfcrkiye"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]'
      );
    },
    9794: function (e) {
      "use strict";
      e.exports = { version: "1.0.34" };
    },
  },
  function (e) {
    var __webpack_exec__ = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(6840), __webpack_exec__(2338);
    }),
      (_N_E = e.O());
  },
]);
