(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(3058);
        },
      ]);
    },
    4038: function (e, t, s) {
      "use strict";
      var a = s(5893);
      s(7294);
      var n = s(1664),
        i = s.n(n),
        r = s(1016);
      t.Z = function () {
        let { isModalOpen: e, setModalOpen: t } = (0, r.d)();
      };
    },
    3058: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(5893),
        n = s(7294),
        i = s(5675),
        r = s.n(i),
        l = s(1664),
        o = s.n(l),
        c = s(4038),
        m = s(9008),
        x = s.n(m),
        d = s(1016),
        p = s(5907);
      let u = (0, p.T)();
      t.default = function () {
        let [e, t] = (0, n.useState)(50),
          s = (0, n.useRef)(null),
          { isModalOpen: i, setModalOpen: l } = (0, d.d)(),
          m = (0, n.useRef)(null),
          updateVideoTime = (e) => {
            if (m.current) {
              let t = m.current.duration;
              t && (m.current.currentTime = (e / 100) * t);
            }
          },
          [p, h] = (0, n.useState)("/assets/demo/seq/0007.png"),
          getImageSrc = (e) =>
            "/assets/demo/seq/".concat(
              String(
                13 -
                  (Math.min(Math.max(Math.round((e / 100) * 12), 0), 12) +
                    1 -
                    1)
              ).padStart(4, "0"),
              ".png"
            );
        function getRandomImageName(e, t) {
          return ""
            .concat(e, "-")
            .concat(
              String(Math.floor(Math.random() * t) + 1).padStart(2, "0"),
              ".jpg"
            );
        }
        (0, n.useEffect)(() => {
          let e;
          let a = s.current;
          if (!a) return;
          let handleMouseMove = (a) => {
              if (s.current) {
                let n = s.current.getBoundingClientRect(),
                  i = ((a.clientX - n.left) / n.width) * 100;
                t((i = Math.max(0, Math.min(i, 100)))),
                  cancelAnimationFrame(e),
                  (e = requestAnimationFrame(() => updateVideoTime(i)));
                let r = getImageSrc(i);
                h(r);
              }
            },
            handleTouchMove = (a) => {
              if (s.current) {
                let n = s.current.getBoundingClientRect(),
                  i = a.touches[0].clientX,
                  r = ((i - n.left) / n.width) * 100;
                t((r = Math.max(0, Math.min(r, 100)))),
                  cancelAnimationFrame(e),
                  (e = requestAnimationFrame(() => updateVideoTime(r)));
                let l = getImageSrc(r);
                h(l);
              }
            };
          return (
            window.addEventListener("mousemove", handleMouseMove),
            a.addEventListener("touchmove", handleTouchMove, { passive: !1 }),
            () => {
              window.removeEventListener("mousemove", handleMouseMove),
                a.removeEventListener("touchmove", handleTouchMove);
            }
          );
        }, [s]);
        let g = getRandomImageName("t", 5),
          w = getRandomImageName("f", 5),
          f = [
            "public/assets/selection/001.webp",
            "public/assets/selection/002.webp",
            "public/assets/selection/003.webp",
            "public/assets/selection/004.webp",
            "public/assets/selection/005.webp",
            "public/assets/selection/006.webp",
            "public/assets/selection/007.webp",
            "public/assets/selection/008.webp",
            "public/assets/selection/009.webp",
            "public/assets/selection/010.webp",
            "public/assets/selection/011.webp",
            "public/assets/selection/012.webp",
            "public/assets/selection/013.webp",
            "public/assets/selection/014.webp",
            "public/assets/selection/015.webp",
            "public/assets/selection/016.webp",
            "public/assets/selection/017.webp",
            "public/assets/selection/018.webp",
            "public/assets/selection/019.webp",
            "public/assets/selection/020.webp",
            "public/assets/selection/021.webp",
            "public/assets/selection/022.webp",
          ],
          [v, b] = (0, n.useState)("fade-in"),
          handleImageLoad = (e) => {
            e.currentTarget.classList.add("fade-in-active");
          },
          [j, y] = (0, n.useState)([]);
        (0, n.useEffect)(() => {
          let e = (function (e) {
              for (let t = e.length - 1; t > 0; t--) {
                let s = Math.floor(Math.random() * (t + 1));
                [e[t], e[s]] = [e[s], e[t]];
              }
              return e;
            })([...f]),
            t = e.slice(0, 6),
            s = e.slice(0, 6),
            a = [...t, ...s];
          y(a);
        }, []);
        let N = (0, n.useRef)(null),
          [k, z] = (0, n.useState)(!1),
          [L, E] = (0, n.useState)(0),
          [M, T] = (0, n.useState)(0),
          D = (0, n.useRef)(null),
          S = (0, n.useRef)(null),
          [F, A] = (0, n.useState)(0),
          [q, I] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          let handleResize = () => {
            I(window.innerWidth <= 768);
          };
          return (
            handleResize(),
            window.addEventListener("resize", handleResize),
            () => window.removeEventListener("resize", handleResize)
          );
        }, []),
          (0, n.useEffect)(() => {
            let handleMouseDown = (e) => {
                var t;
                z(!0),
                  E(e.pageX - N.current.offsetLeft),
                  T(N.current.scrollLeft),
                  null === (t = N.current) ||
                    void 0 === t ||
                    t.classList.add("cursor-grabbing"),
                  D.current &&
                    (cancelAnimationFrame(D.current), (D.current = null)),
                  S.current && clearTimeout(S.current);
              },
              handleTouchStart = (e) => {
                z(!0);
                let t = e.touches[0];
                E(t.pageX - N.current.offsetLeft),
                  A(t.pageY),
                  T(N.current.scrollLeft),
                  D.current &&
                    (cancelAnimationFrame(D.current), (D.current = null)),
                  S.current && clearTimeout(S.current);
              },
              e = N.current;
            e &&
              (e.addEventListener("mousedown", handleMouseDown),
              document.addEventListener("mousemove", handleMouseMove),
              document.addEventListener("mouseup", handleMouseUp),
              e.addEventListener("touchstart", handleTouchStart),
              e.addEventListener("touchmove", handleTouchMove),
              e.addEventListener("touchend", handleTouchEnd));
            let animateScroll = () => {
              if (N.current) {
                var e = N.current.querySelectorAll("img")[6],
                  t = N.current.scrollLeft;
                (null == e ? void 0 : e.offsetLeft) - t < 0
                  ? (N.current.scrollLeft = 3)
                  : (N.current.scrollLeft += q ? 1 : 2),
                  (D.current = requestAnimationFrame(animateScroll));
              }
            };
            return (
              (D.current = requestAnimationFrame(animateScroll)),
              () => {
                e &&
                  (e.removeEventListener("mousedown", handleMouseDown),
                  document.removeEventListener("mousemove", handleMouseMove),
                  document.removeEventListener("mouseup", handleMouseUp),
                  e.removeEventListener("touchstart", handleTouchStart),
                  e.removeEventListener("touchmove", handleTouchMove),
                  e.removeEventListener("touchend", handleTouchEnd)),
                  D.current && cancelAnimationFrame(D.current),
                  S.current && clearTimeout(S.current);
              }
            );
          }, [k, L, M, j]);
        let handleMouseMove = (e) => {
            if (!k) return;
            e.preventDefault();
            let t = e.pageX - N.current.offsetLeft,
              s = (t - L) * (q ? 1 : 2);
            N.current.scrollLeft = M - s;
            var a = N.current.querySelectorAll("img")[6],
              n = N.current.scrollLeft,
              i = a.offsetLeft - n;
            i < 0 && (N.current.scrollLeft = -i),
              D.current &&
                (cancelAnimationFrame(D.current), (D.current = null)),
              S.current && clearTimeout(S.current);
          },
          handleTouchMove = (e) => {
            if (!k) return;
            let t = e.touches[0],
              s = t.pageX - N.current.offsetLeft,
              a = t.pageY,
              n = Math.abs(s - L);
            if (n > Math.abs(a - F)) {
              e.preventDefault();
              let t = (s - L) * (q ? 1 : 2);
              N.current.scrollLeft = M - t;
            }
            var i = N.current.querySelectorAll("img")[6],
              r = N.current.scrollLeft,
              l = i.offsetLeft - r;
            l < 0 && (N.current.scrollLeft = -l),
              D.current &&
                (cancelAnimationFrame(D.current), (D.current = null)),
              S.current && clearTimeout(S.current);
          },
          handleMouseUp = () => {
            var e;
            z(!1),
              null === (e = N.current) ||
                void 0 === e ||
                e.classList.remove("cursor-grabbing");
          },
          handleTouchEnd = () => {
            z(!1);
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(x(), {
              children: [
                (0, a.jsx)("title", {
                  children:
                    "zolviz - Transform Your Space with Expert 3D Room Design",
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content:
                    "zolviz specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                }),
                (0, a.jsx)("meta", {
                  property: "og:title",
                  content:
                    "zolviz - Transform Your Space with Expert 3D Room Design",
                }),
                (0, a.jsx)("meta", {
                  property: "og:description",
                  content:
                    "zolviz specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: "".concat(u),
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:title",
                  content:
                    "zolviz - Transform Your Space with Expert 3D Room Design",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:description",
                  content:
                    "zolviz specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:image",
                  content: "".concat(u, "/assets/social/").concat(g),
                }),
                (0, a.jsx)("meta", {
                  property: "og:image",
                  content: "".concat(u, "/assets/social/").concat(w),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: " pt-20",
              children: [
                (0, a.jsxs)("div", {
                  className: "w-full  pb-40 max-[1024px]:pb-16 fade-in",
                  "data-fade-in": !0,
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-11/12 m-auto max-w-[1600px]",
                      children: (0, a.jsx)("h2", {
                        className:
                          "text-4xl max-w-[820px] leading-10 tracking-tight max-[1024px]:text-[3.5vw] max-[1024px]:leading-[3.8vw] max-[700px]:text-[24px] max-[700px]:leading-[27px]",
                        children:
                          "Welcome to zolviz, where we turn your visions into exquisite reality. Specializing in 3D room designs for commercial and residential spaces, including kitchens, bathrooms, living rooms, bedrooms, and more.",
                      }),
                    }),
                    (0, a.jsx)(r(), {
                      className: "mt-20 w-full pointer-events-none hidden",
                      src: "/assets/images/hero-023.png",
                      alt: "zolviz specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                      width: 1600,
                      height: 760,
                      loading: "lazy",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "mt-20 max-[700px]:mt-10 overflow-hidden w-[100%] cursor-grab",
                      ref: N,
                      children: (0, a.jsx)("div", {
                        className: "banner flex",
                        children: j.map((e, t) =>
                          (0, a.jsx)(
                            r(),
                            {
                              onLoad: handleImageLoad,
                              className:
                                "box-content border border-[3px] border-white ".concat(
                                  v
                                ),
                              width: 760,
                              height: 760,
                              src: e,
                              alt: "zolviz specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                              priority: !0,
                            },
                            "first-set-".concat(t)
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-11/12 m-auto max-w-[1600px]  py-40  max-[1024px]:py-16",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-4xl max-w-[840px] leading-10 tracking-tight max-[1024px]:text-[3.5vw] max-[1024px]:leading-[3.8vw] max-[700px]:text-[24px] max-[700px]:leading-[27px]  fade-in",
                      "data-fade-in": !0,
                      children: "Our Process",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex place-content-between  max-[1024px]:block",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "max-w-[370px] w-3/12  min-w-[280px]  max-[1024px]:min-w-[0px]  max-[1024px]:max-w-[100%] max-[1024px]:w-[100%]  max-[1024px]:flex max-[1024px]:flex-wrap max-[1024px]:place-content-between  max-[1024px]:pt-10  max-[580px]:flex-col fade-in",
                          "data-fade-in": !0,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "bg-neutral-100 mb-2   max-[1024px]:w-[30%] max-[580px]:w-[100%]",
                              children: (0, a.jsx)(r(), {
                                className: " w-full pointer-events-none",
                                src: "/assets/images/003.png",
                                alt: "Easily share your space with us by uploading photos and dimensions. Include some selected image to capture your style inspiration.",
                                width: 480,
                                height: 480,
                                loading: "lazy",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                " max-[1024px]:w-[65%] max-[580px]:w-[100%]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex place-content-between mb-8 mt-3 items-center",
                                  children: [
                                    (0, a.jsx)("strong", {
                                      className: "text-[#0000FF] text-sm",
                                      children: "1. Share Your Space",
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: () => l(!i),
                                      className:
                                        " cursor-pointer inline-block bg-black text-white px-6 py-1 min-w-max",
                                      children: "Book a Meeting",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className: "max-[760px]:text-sm",
                                  children: [
                                    "Easily share your space with us by ",
                                    (0, a.jsx)("strong", {
                                      children:
                                        "uploading photos and dimensions. Include some selected images",
                                    }),
                                    " to capture your style inspiration.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "max-w-[370px] w-3/12  min-w-[280px]  max-[1024px]:min-w-[0px]  max-[1024px]:max-w-[100%] max-[1024px]:w-[100%]  max-[1024px]:flex max-[1024px]:flex-wrap max-[1024px]:place-content-between  max-[1024px]:pt-10 max-[580px]:flex-col fade-in",
                          "data-fade-in": !0,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "bg-neutral-100 mb-2   max-[1024px]:w-[30%] max-[580px]:w-[100%]",
                              children: (0, a.jsx)(r(), {
                                className: " w-full pointer-events-none  ",
                                src: "/assets/images/004.png",
                                alt: "Our team marries your ideas with our skill to forge a 3D masterpiece in just two weeks.</strong> Your preferences shape every element, from furnishings to hues.",
                                width: 480,
                                height: 480,
                                loading: "lazy",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                " max-[1024px]:w-[65%] max-[580px]:w-[100%]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex place-content-between mb-8 mt-3 items-center",
                                  children: [
                                    (0, a.jsx)("strong", {
                                      className: "text-[#0000FF] text-sm",
                                      children: "2. Expert Craftsmanship",
                                    }),
                                    (0, a.jsx)(o(), {
                                      href: "/benefits-of-3d-visualization",
                                      className:
                                        " cursor-pointer inline-block bg-black text-white px-6 py-1 ml-10 min-w-max",
                                      children: "Benefits of 3D Vis",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className: "max-[760px]:text-sm",
                                  children: [
                                    "Our team marries your ideas with our skill to forge a ",
                                    (0, a.jsx)("strong", {
                                      children:
                                        "3D masterpiece in just two weeks.",
                                    }),
                                    " Your preferences shape every element, from furnishings to hues.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "max-w-[370px] w-3/12  min-w-[280px]  max-[1024px]:min-w-[0px]  max-[1024px]:max-w-[100%] max-[1024px]:w-[100%]  max-[1024px]:flex max-[1024px]:flex-wrap max-[1024px]:place-content-between  max-[1024px]:pt-10 max-[580px]:flex-col fade-in",
                          "data-fade-in": !0,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "bg-neutral-100 mb-2   max-[1024px]:w-[30%] max-[580px]:w-[100%]",
                              children: (0, a.jsx)(r(), {
                                className: " w-full pointer-events-none",
                                src: "/assets/images/005.png",
                                alt: "Experience full control with our interactive dashboard. Explore real product options, object swaps, and more. Every 3D design is meticulously handcrafted by our experts for an authentic interior design service, not an AI tool.",
                                width: 480,
                                height: 480,
                                loading: "lazy",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                " max-[1024px]:w-[65%] max-[580px]:w-[100%]",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex place-content-between mb-8 mt-3 items-center",
                                  children: [
                                    (0, a.jsx)("strong", {
                                      className: "text-[#0000FF] text-sm",
                                      children: "3. Immersive Exploration",
                                    }),
                                    (0, a.jsx)(o(), {
                                      href: "/demo",
                                      className:
                                        " cursor-pointer inline-block bg-black text-white px-6 py-1 ml-10 min-w-max",
                                      children: "Try our Demo",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className: "max-[760px]:text-sm",
                                  children: [
                                    "Experience full control with our interactive dashboard. ",
                                    (0, a.jsx)("strong", {
                                      children:
                                        "Explore real product options, object swaps, and more.",
                                    }),
                                    " Every 3D design is meticulously handcrafted by our experts for an authentic interior design service, not an AI tool.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    " py-40 bg-neutral-800  text-white max-[1024px]:py-16",
                  children: (0, a.jsxs)("div", {
                    className: " w-11/12 m-auto max-w-[1300px]",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "mb-20 flex place-content-between max-[1024px]:flex-col",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "mr-20 max-[1024px]:mr-0 max-[1024px]:mb-16 fade-in",
                            "data-fade-in": !0,
                            children: [
                              (0, a.jsx)("h2", {
                                className:
                                  "text-4xl max-w-[750px] leading-10 tracking-tight max-[1024px]:text-[3.5vw] max-[1024px]:leading-[3.8vw] max-[700px]:text-[24px] max-[700px]:leading-[27px] ",
                                children:
                                  "Upon completing your design journey, you'll gain access to an exclusive login dashboard, complete with a timeline that empowers you to tailor your experience. As you progress, you can set reviews and request new versions as well as add objects according to your evolving needs.",
                              }),
                              (0, a.jsx)(o(), {
                                href: "/how-it-works",
                                className:
                                  " cursor-pointer inline-block bg-white text-black px-6 py-1 mt-5",
                                children: "How it Works",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "max-w-[300px]",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "mb-14 fade-in",
                                "data-fade-in": !0,
                                children: [
                                  (0, a.jsx)("strong", {
                                    className: " text-sm mb-3 inline-block",
                                    children:
                                      "High-Quality Realistic 3D Renders",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "",
                                    children:
                                      "Our design package encompasses two versions of high-quality, photorealistic 3D renders that immerse you in the envisioned space. These visuals offer an authentic depiction of your future room from different angles, allowing you to virtually step into the transformation.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: " fade-in",
                                "data-fade-in": !0,
                                children: [
                                  (0, a.jsx)("strong", {
                                    className: " text-sm mb-3 inline-block",
                                    children: "Object and Furniture List",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "",
                                    children:
                                      "We curate a list of suggested objects and furniture based on your style and preferences. This includes items from your moodboard as well as expertly chosen pieces that harmonize with your design. The list features everything down to appliances and d\xe9cor, complete with purchasing information.",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: " fade-in",
                        "data-fade-in": !0,
                        children: (0, a.jsx)(r(), {
                          className:
                            " pointer-events-none mt-50 w-full select-none",
                          src: "/assets/images/006i.png",
                          alt: "Upon completing your design journey, you will gain access to an exclusive login dashboard, complete with a timeline that empowers you to tailor your experience. As you progress, you can pay to unlock sections and add objects according to your evolving needs.",
                          width: 1378,
                          height: 1020,
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(c.Z, {}),
              ],
            }),
          ],
        });
      };
    },
    5907: function (e, t, s) {
      "use strict";
      s.d(t, {
        T: function () {
          return getAppUrl;
        },
      });
      let getAppUrl = () => "https://zolviz.com";
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
