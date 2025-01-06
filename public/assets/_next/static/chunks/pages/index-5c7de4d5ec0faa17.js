(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(6213);
        },
      ]);
    },

    6213: function (e, t, i) {
      // Define the image URLs at the top of your file
      const projectImages = {
        "post-0": [
          'https://via.placeholder.com/300x200?text=Post0-Image1',
          'https://via.placeholder.com/300x200?text=Post0-Image2',
          'https://via.placeholder.com/300x200?text=Post0-Image3',
        ],
        "post-1": [
          'https://via.placeholder.com/300x200?text=Post1-Image1',
          'https://via.placeholder.com/300x200?text=Post1-Image2',
          'https://via.placeholder.com/300x200?text=Post1-Image3',
        ],
        "post-2": [
          'https://via.placeholder.com/300x200?text=Post2-Image1',
          'https://via.placeholder.com/300x200?text=Post2-Image2',
          'https://via.placeholder.com/300x200?text=Post2-Image3',
        ],
      };      

      // Standalone function to create the carousel
      function createCarousel(images = []) {
        const newDiv = document.querySelector('.new-div');
        if (!newDiv) return;

        // Create carousel container
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';

        // Create carousel track
        const carouselTrack = document.createElement('div');
        carouselTrack.className = 'carousel-track';

        // Add images to the carousel
        images.forEach((imageUrl, index) => {
          const img = document.createElement('img');
          img.src = imageUrl; // Use the provided image URL
          img.alt = `Image ${index + 1}`;
          img.className = 'carousel-image';
          carouselTrack.appendChild(img);
        });

        // Append track to container
        carouselContainer.appendChild(carouselTrack);
        newDiv.appendChild(carouselContainer);
        // Start the infinite scroll
        startCarousel(carouselTrack);

        // Attach click events for modal functionality
        addModalClickEventToImages(carouselTrack);

      }
      // Function to handle infinite scrolling
      function startCarousel(track) {
        let scrollAmount = 0; // Tracks how far we've scrolled

        function scroll() {
          scrollAmount += 1; // Adjust this value to control the speed
          if (scrollAmount >= track.scrollWidth / 2) {
            scrollAmount = 0; // Reset scroll to create infinite effect
          }
          track.style.transform = `translateX(-${scrollAmount}px)`;
          requestAnimationFrame(scroll); // Continuously call scroll
        }

        // Duplicate the images for the infinite effect
        track.innerHTML += track.innerHTML;

        // Start the scrolling animation
        scroll();
      }
      // Function to handle opening the image in a modal
      function openImageModal(imageUrl) {
        // Create a modal container if it doesn't exist
        let modal = document.getElementById('image-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'image-modal';
            modal.className = 'modal';
            document.body.appendChild(modal);
        }

        // Set the modal content (show the clicked image)
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${imageUrl}" alt="Modal Image">
            </div>
        `;

        // Display the modal
        modal.style.display = 'block';

        // Add event listener for the close button
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close the modal when clicking outside the content
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
      }

      // Attach click event listeners to each image in the carousel
      function addModalClickEventToImages(carouselTrack) {
        const images = carouselTrack.querySelectorAll('img'); // Select all images in the carousel
        images.forEach((img) => {
            img.addEventListener('click', () => {
                openImageModal(img.src); // Pass the clicked image's URL to the modal
            });
        });
      }

      "use strict";
      i.r(t);
      var s = i(5893),
        o = i(7947),
        a = i.n(o),
        n = i(7294),
        r = i(2870),
        l = i(5675),
        c = i.n(l),
        d = i(9008),
        h = i.n(d);
      i(8621);
      var u = i(8229),
        m = i(6493),
        p = i(1766),
        v = i(5123),
        y = i(6038);
      let g = (0, i(2231).T)();
      function f(e, t) {
        return ""
          .concat(e, "-")
          .concat(
            String(Math.floor(Math.random() * t) + 1).padStart(2, "0"),
            ".jpg"
          );
      }
      let S = f("t", 5),
        x = f("f", 5);
      class b extends n.Component {
        componentDidMount() {
          let e = console.warn;
          (console.warn = function () {
            for (var t, i = arguments.length, s = Array(i), o = 0; o < i; o++)
              s[o] = arguments[o];
            (null !== (t = s[0]) &&
              void 0 !== t &&
              t.includes('The AudioContext is "suspended"')) ||
              e(...s);
          }),
            this.wrapIntroText(),
            this.setInitialScrollPosition(),
            this.startAnimation(),
            this.addEvents(),
            this.startAutoScroll(),
            this.animateCircle(),
            this.adjustSquaresPosition(),
            this.addNavHoverEvents();
        }
        componentWillUnmount() {
          window.removeEventListener("scroll", this.handleScroll),
            document.removeEventListener("mousemove", this.handleMouseMove),
            cancelAnimationFrame(this.animationId),
            cancelAnimationFrame(this.circleAnimationId),
            clearTimeout(this.autoScrollTimer),
            (this.detailsBackground = null),
            (this.detailsDiv = null);
        }
        handleIntersection(e) {
          e.forEach((e) => {
            parseInt(e.target.dataset.index);
            let t = e.isIntersecting,
              i = e.boundingClientRect.bottom < 0,
              s = e.boundingClientRect.top > window.innerHeight;
            if (this.userActive) {
              var o, a;
              t
                ? null === (o = this.audioControllerRef.current) ||
                void 0 === o ||
                o.playSound()
                : (i || s) &&
                (null === (a = this.audioControllerRef.current) ||
                  void 0 === a ||
                  a.playSound());
            }
          });
        }
        addEvents() {
          let e = () => {
            (this.circle.style.pointerEvents = "none"),
              (this.circle.style.opacity = "0"),
              (this.circleVisible = !1),
              this.animationWords && this.animationWords.isActive()
                ? this.animationWords
                  .timeScale(10)
                  .eventCallback("onComplete", () => {
                    this.completeAndReverse();
                  })
                : this.completeAndReverse();
          };
          document.addEventListener("mousemove", this.handleMouseMove),
            document.addEventListener("touchmove", this.handleMouseMove, {
              passive: !1,
            }),
            window.addEventListener("scroll", () => {
              if (this.wheel) {
                let e = window.scrollY,
                  t = e - this.lastScrollTop;
                this.lastScrollTop = e;
                let i = window.scrollX,
                  s = i - this.lastScrollLeft;
                (this.lastScrollLeft = i),
                  Math.abs(s) > 1
                    ? this.handleScroll(s)
                    : Math.abs(t) > 1 && this.handleScroll(t);
              }
            }),
            this.circle.addEventListener("click", e),
            window.addEventListener("popstate", () => {
              e();
            });
        }
        addNavHoverEvents() {
          document.querySelectorAll("nav a, nav .toggle-audio").forEach((e) => {
            e.addEventListener("mouseenter", (e) =>
              this.pauseCircleAnimation(e)
            ),
              e.addEventListener("mouseleave", this.resumeCircleAnimation);
          });
        }
        animateCircle() {
          if (this.isCircleAnimationPaused) return;
          let e = this.mouseX - this.posX,
            t = this.mouseY - this.posY;
          (this.velocityX += 0.1 * e),
            (this.velocityY += 0.1 * t),
            (this.velocityX *= 0.8),
            (this.velocityY *= 0.8),
            (this.posX += this.velocityX),
            (this.posY += this.velocityY);
          let i = Math.max(Math.abs(this.velocityX), Math.abs(this.velocityY)),
            s = 1 + (this.velocityX / i) * 0.1,
            o = 1 + (this.velocityY / i) * 0.1;
          (this.circle.style.transform = "translate("
            .concat(this.posX - 25, "px, ")
            .concat(this.posY - 25, "px) scale(")
            .concat(s, ", ")
            .concat(o, ")")),
            (this.circleAnimationId = requestAnimationFrame(
              this.animateCircle.bind(this)
            ));
        }
        handleScroll(e) {
          let t = Math.sign(e) * Math.min(1.5 * Math.abs(e), 100);
          (this.lastScrollDirection = t),
            (this.target += t),
            (this.userActive = !0),
            clearTimeout(this.autoScrollTimer),
            (this.autoScrollTimer = setTimeout(() => {
              (this.userActive = !1), this.startAutoScroll();
            }, this.autoScrollInterval / 2));
        }
        completeAndReverse() {
          this.detailsBackground &&
            this.detailsDiv &&
            (document.body.removeChild(this.detailsBackground),
              document.body.removeChild(this.detailsDiv),
              (this.detailsBackground = null),
              (this.detailsDiv = null));

          const existingNewDiv = document.querySelector(".new-div");
          if (existingNewDiv) {
            document.body.removeChild(existingNewDiv);
          }

          this.handleCircleClickPostAnimation();
        }
        handleCircleClickPostAnimation() {
          this.timeline && this.timeline.reverse();
        }
        setInitialScrollPosition() {
          let e = (document.body.scrollHeight - window.innerHeight) / 2 / 3,
            t = (document.body.scrollWidth - window.innerWidth) / 2 / 3;
          window.scrollTo(t, e),
            (this.lastScrollTop = e),
            (this.lastScrollLeft = t);
        }
        smoothScrollTo(e) {
          let t = window.scrollY + e / 2,
            i = e - t,
            s = null,
            o = (a) => {
              s || (s = a);
              let n = a - s,
                r = 1 - Math.pow(1 - Math.min(n / 1e3, 1), 4);
              window.scrollTo(t + i * r, t + i * r),
                n < 1e3
                  ? requestAnimationFrame(o)
                  : ((this.lastScrollTop = e), (this.lastScrollLeft = e));
            };
          requestAnimationFrame(o);
        }
        handleSquareClick(e, t) {
          var i;
          if (!this.clickable) return;
          (this.container.style.pointerEvents = "none"),
            null === (i = this.audioControllerRef.current) ||
            void 0 === i ||
            i.playSound(),
            (this.userActive = !0),
            (this.wheel = !1),
            (this.clickable = !1),
            clearTimeout(this.autoScrollTimer),
            document.body.classList.add("dark"),
            this.physicsSimRef.current &&
            (this.physicsSimRef.current.setPhysicsContainerStyle(
              "filter",
              "invert(0)"
            ),
              this.physicsSimRef.current.setPhysicsContainerStyle("right", "10px"),
              this.physicsSimRef.current.setPhysicsContainerStyle("bottom", "5px"));
          let s = this.ease;
          (this.ease = 0.2), this.items[t];
          let o = e.getAttribute("data-title"),
            a = e.getAttribute("data-description");

          // Remove any existing 'new-div' directly from the DOM
          const existingNewDiv = document.querySelector(".new-div");
          if (existingNewDiv) {
            document.body.removeChild(existingNewDiv);
          }

          // Create the new div to be added above the 'details' div
          let newDiv = document.createElement("div");
          newDiv.className = "new-div";

          // Create the 'details' div
          let n = document.createElement("div");
          (n.className = "details"),
            (n.innerHTML = "<h2>".concat(o, "</h2><p>").concat(a, "</p>"));

          // Append the new div and then the details div to the body
          document.body.appendChild(newDiv);
          document.body.appendChild(n);

          createCarousel(imageUrls);

          let r = n.cloneNode(!0);
          (r.className = "details background"),
            document.body.insertBefore(r, n.nextSibling);

          let l = v.L.wrapWords(n.querySelector("p")),
            c = v.L.wrapWords(r.querySelector("p"));
          y.p8.set([...l.words, ...c.words], { opacity: 0.2 }),
            (this.detailsBackground = r),
            (this.detailsDiv = n);

          let d = () => {
            let e = 100 - ((0.96 * window.innerHeight) / window.innerWidth) * 100;
            (n.style.width = "".concat(e, "vw")),
              (r.style.width = "".concat(e, "vw"));
          };
          d(),
            window.addEventListener("resize", d),
            y.p8.to(".dve", {
              ease: "power2.inOut",
              y: "-62vh",
              duration: 0.2,
              delay: 0.2,
            });
          let h = e.querySelector("div");
          y.p8.to(h, {
            duration: 0.2,
            opacity: 0.8,
            repeat: 1,
            yoyo: !0,
            ease: "power2.inOut",
            onComplete: () => {
              var i;
              y.p8.to(this.physicsSimRef.current.getPhysicsContainer(), {
                scale: 0.7,
                duration: 0.3,
                transformOrigin: "bottom right",
              }),
                y.p8.to(".dve", { opacity: 0, duration: 0.01, delay: 0.7 });
              let o = e.cloneNode(!0);
              (o.style.cssText =
                "\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    transform: translate(0%, 0%) scale(1);\n                    transform-origin: top center;\n                    border: 6px solid white; box-sizing: border-box;\n                    border-top:0px solid transparent;\n                "),
                null === (i = this.audioControllerRef.current) ||
                void 0 === i ||
                i.playSound();
              let a = document.querySelector(".clone");
              a.appendChild(o);
              let c = this.items.length;
              for (let e = -6; e <= 6; e++) {
                let i = t + e;
                if ((i < 0 ? (i += c) : i >= c && (i -= c), i !== t)) {
                  let t = document.getElementById("post-".concat(i));
                  if (t) {
                    let i = t.cloneNode(!0);
                    (i.style.cssText =
                      "\n                                position: absolute;\n                                width: 100%;\n                                height: 100%;\n                                transform: translateX(".concat(
                        100 * e,
                        "%);\n                                transform-origin: center center;\n                                border: 6px solid white; \n                                box-sizing: border-box;\n                                border-top:0px solid transparent;\n                            "
                      )),
                      a.appendChild(i);
                  }
                }
              }
              let d = a.getBoundingClientRect(),
                h = e.getBoundingClientRect(),
                u = ((d.left - h.left) / h.width) * 100;
              (this.target += u),
                setTimeout(() => {
                  let t = e.getBoundingClientRect(),
                    i = d.left - t.left;
                  Math.abs(i) > 1 &&
                    ((this.target += (i / t.width) * 100),
                      this.adjustSquaresPosition()),
                    (this.container.style.opacity = "0"),
                    (a.style.opacity = "1"),
                    (this.timeline = y.p8.timeline({
                      defaults: { ease: "power2.out" },
                      onReverseComplete: () => {
                        for (
                          this.container.style.pointerEvents = "auto",
                          this.container.style.opacity = "1",
                          a.style.opacity = "0",
                          document.body.classList.remove("dark"),
                          this.physicsSimRef.current &&
                          (this.physicsSimRef.current.setPhysicsContainerStyle(
                            "filter",
                            "invert(1)"
                          ),
                            this.physicsSimRef.current.setPhysicsContainerStyle(
                              "right",
                              "0px"
                            ),
                            this.physicsSimRef.current.setPhysicsContainerStyle(
                              "bottom",
                              "0px"
                            )),
                          y.p8.to(
                            this.physicsSimRef.current.getPhysicsContainer(),
                            {
                              scale: 1,
                              duration: 0.2,
                              transformOrigin: "bottom right",
                            }
                          ),
                          y.p8.set(".dve", { y: "-22vw", opacity: 1 });
                          a.firstChild;

                        )
                          a.removeChild(a.firstChild);
                        (this.userActive = !1),
                          (this.ease = s),
                          this.startAutoScroll(),
                          (this.wheel = !0),
                          (this.clickable = !0);
                      },
                    }));
                  let o = this.timeline;
                  o
                    .to(a, {
                      duration: 0.3,
                      scale: 0.7,
                      x: "-50vw",
                      xPercent: 50,
                      y: "3vh",
                      transformOrigin: "top center",
                      onStart: () => {
                        var e;
                        null === (e = this.audioControllerRef.current) ||
                          void 0 === e ||
                          e.playSound();
                      },
                      onReverseComplete: () => {
                        var e;
                        return null === (e = this.audioControllerRef.current) ||
                          void 0 === e
                          ? void 0
                          : e.playSound();
                      },
                    })
                    .to(
                      this.physicsSimRef.current.getPhysicsContainer(),
                      {
                        scale: 0.35,
                        duration: 0.3,
                        transformOrigin: "bottom right",
                      },
                      "<"
                    ),
                    o
                      .to(a, {
                        duration: 0.3,
                        scale: 0.92,
                        x: "0vw",
                        xPercent: 0,
                        transformOrigin: "top right",
                        onStart: () => {
                          var e;
                          return null ===
                            (e = this.audioControllerRef.current) ||
                            void 0 === e
                            ? void 0
                            : e.playSound();
                        },
                        onReverseComplete: () => {
                          var e;
                          return null ===
                            (e = this.audioControllerRef.current) ||
                            void 0 === e
                            ? void 0
                            : e.playSound();
                        },
                      })
                      .to(
                        this.physicsSimRef.current.getPhysicsContainer(),
                        {
                          scale: 0.085,
                          duration: 0.3,
                          transformOrigin: "bottom right",
                        },
                        "<"
                      ),
                    a
                      .querySelectorAll(".square:not(:first-child)")
                      .forEach((e) => {
                        let t = e.style.transform.match(
                          /translateX\(([-\d]+)%\)/
                        ),
                          i = t ? parseFloat(t[1]) : 0,
                          s = i < 0 ? -100 : 100;
                        o.to(
                          e,
                          {
                            duration: 0.3,
                            xPercent: i + s,
                            onStart: () => {
                              var e;
                              null === (e = this.audioControllerRef.current) ||
                                void 0 === e ||
                                e.playSound(),
                                document.body.classList.add("dark");
                            },
                            onReverseComplete: () => {
                              var t;
                              null === (t = this.audioControllerRef.current) ||
                                void 0 === t ||
                                t.playSound(),
                                (e.style.transform = "translateX(".concat(
                                  i,
                                  "%)"
                                ));
                            },
                          },
                          "-=0.3"
                        );
                      }),
                    y.p8.to(r, {
                      opacity: 1,
                      onStart: () => {
                        var e;
                        null === (e = this.audioControllerRef.current) ||
                          void 0 === e ||
                          e.playSound();
                      },
                      delay: 0.3,
                    }),
                    y.p8.to(n, { opacity: 1, duration: 0.05, delay: 0.4 }),
                    y.p8.to(n.querySelector("h2"), {
                      opacity: 1,
                      duration: 0.5,
                      onStart: () => {
                        var e;
                        return null === (e = this.audioControllerRef.current) ||
                          void 0 === e
                          ? void 0
                          : e.playSound();
                      },
                      delay: 0.5,
                    }),
                    o.fromTo(
                      ".dve-t",
                      { yPercent: "-200", opacity: 1 },
                      { yPercent: "0", opacity: 1, duration: 0.2 },
                      "<"
                    ),
                    this.circleVisible ||
                    ((this.circleVisible = !0),
                      y.p8.fromTo(
                        this.circle,
                        { scale: 0, opacity: 0 },
                        {
                          scale: 1,
                          opacity: 1,
                          duration: 0.5,
                          ease: "back.out(1, 0.3)",
                        }
                      )),
                    setTimeout(() => {
                      (this.animationWords = y.p8.timeline({
                        onStart: () => {
                          this.circle.style.pointerEvents = "auto";
                        },
                      })),
                        l.words.forEach((e, t) => {
                          let i = 0,
                            s = e.textContent.slice(-1);
                          "," === s || ";" === s
                            ? (i = 0.25)
                            : ("." === s || "!" === s || "?" === s) &&
                            (i = 0.4),
                            this.animationWords.to(e, {
                              opacity: 1,
                              duration: 0.09,
                              onComplete: () => {
                                var e;
                                null ===
                                  (e = this.audioControllerRef.current) ||
                                  void 0 === e ||
                                  e.playTypingSound();
                              },
                            }),
                            i > 0 &&
                            this.animationWords.to({}, { duration: i });
                        });
                    }, 1500);
                }, 700);
            },
          });
        }



        startAnimation() {
          let e = () => {
            (this.currentPos += (this.target - this.currentPos) * this.ease),
              this.adjustSquaresPosition(),
              (this.animationId = requestAnimationFrame(e));
          };
          this.animationId = requestAnimationFrame(e);
        }
        adjustSquaresPosition() {
          let e = 100 * this.items.length,
            t = this.currentPos % e;
          (t = (t + e) % e),
            this.items.forEach((i, s) => {
              let o = (t + 100 * s) % e,
                a = document.getElementById("post-".concat(s));
              a && (a.style.transform = "translateX(".concat(o, "%)"));
            });
        }
        startAutoScroll() {
          let e = () => {
            if (!this.userActive) {
              let i = this.lastScrollDirection < 0 ? -100 : 100,
                s = this.target % 100;
              if (
                (0 !== s && (i > 0 ? (i += 100 - s) : (i -= s)),
                  (this.target += i),
                  this.allImagesClicked)
              ) {
                var t;
                null === (t = this.audioControllerRef.current) ||
                  void 0 === t ||
                  t.playSound();
              }
              this.autoScrollTimer = setTimeout(e, this.autoScrollInterval);
            }
          };
          this.userActive ||
            (this.autoScrollTimer = setTimeout(e, this.autoScrollInterval / 4));
        }
        wrapIntroText() {
          let e = document.createElement("div");
          (e.className = "intro"),
            (e.innerHTML =
              "<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ex ac tortor aliquet tincidunt id vitae arcu. Nullam euismod, lacus a tincidunt dictum, augue ligula sollicitudin libero, nec vehicula turpis justo vel erat. Ut fermentum nisi at sapien luctus, eu eleifend justo ultrices. Aliquam vehicula, lectus sit amet mollis cursus, lorem felis consequat est, ut luctus libero risus sit amet arcu. Pellentesque at risus non elit porttitor viverra. </span></p>");
          let t = e.cloneNode(!0);
          (t.className = "intro background"),
            document.body.appendChild(e),
            document.body.insertBefore(t, e.nextSibling);
          let i = v.L.wrapWords(e.querySelector("p")),
            s = v.L.wrapWords(t.querySelector("p"));
          y.p8.set([...i.words], { opacity: 0 }),
            y.p8.set([...s.words], { opacity: 0.2 }),
            (this.introBackground = t),
            (this.introDiv = e);
          let o = y.p8.timeline({});
          i.words.forEach((e, t) => {
            let i = 0,
              s = e.textContent.slice(-1);
            "," === s || ";" === s
              ? (i = 0.5)
              : ("." === s || "!" === s || "?" === s) && (i = 0.4),
              o.to(e, {
                opacity: 1,
                duration: 0.09,
                onComplete: () => {
                  var e;
                  null === (e = this.audioControllerRef.current) ||
                    void 0 === e ||
                    e.playTypingSound();
                  let t = console.warn;
                  console.warn = function () {
                    for (
                      var e, i = arguments.length, s = Array(i), o = 0;
                      o < i;
                      o++
                    )
                      s[o] = arguments[o];
                    (null !== (e = s[0]) &&
                      void 0 !== e &&
                      e.includes('The AudioContext is "suspended"')) ||
                      t(...s);
                  };
                },
              }),
              i > 0 && o.to({}, { duration: i });
          });
        }
        render() {
          let {
            preloadProgress: e,
            imagesLoaded: t,
            readyToStart: i,
          } = this.state;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(h(), {
                children: [
                  (0, s.jsx)("title", {
                    className: "jsx-d6a22ac56ece3798",
                    children:
                      "Troyce",
                  }),
                  (0, s.jsx)("meta", {
                    name: "description",
                    content:
                      "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:title",
                    content:
                      "Troyce - Transform Your Space with Expert 3D Room Design",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:description",
                    content:
                      "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:url",
                    content: "".concat(g),
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:title",
                    content:
                      "Troyce - Transform Your Space with Expert 3D Room Design",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:description",
                    content:
                      "Troyce specializes in bringing your dream spaces to life through expert 3D room design. Discover our unique approach to transforming kitchens, bathrooms, living rooms, and more.",
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    name: "twitter:image",
                    content: "".concat(g, "/social/").concat(S),
                    className: "jsx-d6a22ac56ece3798",
                  }),
                  (0, s.jsx)("meta", {
                    property: "og:image",
                    content: "".concat(g, "/social/").concat(x),
                    className: "jsx-d6a22ac56ece3798",
                  }),
                ],
              }),
              (0, s.jsx)(a(), { id: "d6a22ac56ece3798", children: "" }),
              !t &&
              (0, s.jsx)("div", {
                className: "jsx-d6a22ac56ece3798 preloader display-hidden",
                children: (0, s.jsx)("div", {
                  className: "jsx-d6a22ac56ece3798 preloader-wrap",
                  children: (0, s.jsxs)("div", {
                    className: "jsx-d6a22ac56ece3798 preloader-bar",
                    children: ["Loading... ", e, "%"],
                  }),
                }),
              }),
              i &&
              (0, s.jsx)("div", {
                className: "jsx-d6a22ac56ece3798",
                children: (0, s.jsx)(u.default, {
                  ref: this.physicsSimRef,
                  scale: 0.4,
                  velocityFactor: 1,
                  rotationSpeedFactor: 4,
                  debounceDelay: 200,
                  mouseForceFactor: 0.05,
                  opacityDuration: 100,
                  positionDuration: 300,
                  containerPadding: 20,
                  initialLeftMargin: 10,
                  initialBottomMargin: 10,
                  rigidBodyMessage: "Click all the floating letters to start",
                  onAllImagesClicked: this.handleAllImagesClicked,
                  rigidBodyFontSize: ".7vw",
                  playSound: this.playClickSound,
                }),
              }),
              (0, s.jsx)("div", { className: "jsx-d6a22ac56ece3798 noise" }),
              (0, s.jsx)(m.default, { ref: this.audioControllerRef }),
              (0, s.jsx)("div", {
                ref: (e) => (this.circle = e),
                className: "jsx-d6a22ac56ece3798 circle",
              }),
              (0, s.jsxs)("div", {
                className: "jsx-d6a22ac56ece3798 header",
                children: [
                  (0, s.jsxs)("div", {
                    className: "jsx-d6a22ac56ece3798 dve-t",
                    children: [
                      "",
                      (0, s.jsx)("br", { className: "jsx-d6a22ac56ece3798" }),
                      "",
                      (0, s.jsx)("br", { className: "jsx-d6a22ac56ece3798" }),
                      "",
                    ],
                  }),
                  (0, s.jsxs)("nav", {
                    className: "jsx-d6a22ac56ece3798",
                    children: [
                      (0, s.jsx)("div", {
                        className: "jsx-d6a22ac56ece3798 toggle-audio",
                        children: (0, s.jsx)(p.default, {
                          audioControllerRef: this.audioControllerRef,
                        }),
                      }),
                      (0, s.jsx)("a", {
                        href: "https://Troyce.space/book-a-meeting",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-d6a22ac56ece3798",
                        children: "BOOK A MEETING",
                      }),
                      (0, s.jsx)("a", {
                        href: "https://www.linkedin.com/company/Troyce/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-d6a22ac56ece3798",
                        children: "LI",
                      }),
                      (0, s.jsx)("a", {
                        href: "https://www.instagram.com/Troyce.space/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "jsx-d6a22ac56ece3798",
                        children: "INS",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                ref: (e) => (this.container = e),
                id: "container",
                className:
                  "jsx-d6a22ac56ece3798 fixed top-0 h-screen mt-[3vh] ml-[-300vh] w-screen origin-top-left pointer-events-auto",
                children: this.items.map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      id: "post-".concat(t),
                      ref: this.squareRefs[t],
                      style: {
                        border: "6px solid white",
                        boxSizing: "border-box",
                      },
                      onClick: (e) =>
                        this.handleSquareClick(e.currentTarget, t),
                      "data-index": t,
                      "data-description": e.description,
                      "data-title": e.title,
                      className:
                        "jsx-d6a22ac56ece3798 square absolute h-[100vh] w-[100vh] top-0 cursor-pointer",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "jsx-d6a22ac56ece3798 absolute w-full h-full bg-white opacity-0 z-10",
                        }),
                        (0, s.jsx)(c(), {
                          className: "absolute max-w-none w-full h-full ",
                          src: e.imageUrl,
                          alt: "".concat(e.title),
                          width: 800,
                          height: 800,
                          loading: "lazy",
                          onLoad: this.handleImageLoad,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)("div", { className: "jsx-d6a22ac56ece3798 clone" }),
              (0, s.jsx)("div", {
                id: "tallDiv",
                className:
                  "jsx-d6a22ac56ece3798 h-[1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000px] w-[1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000px]",
              }),
              (0, s.jsx)("div", {
                className: "jsx-d6a22ac56ece3798 cow",
                children: (0, s.jsxs)("div", {
                  className: "jsx-d6a22ac56ece3798 dve",
                  children: [
                    "",
                    (0, s.jsx)("br", { className: "jsx-d6a22ac56ece3798" }),
                    "",
                    (0, s.jsx)("br", { className: "jsx-d6a22ac56ece3798" }),
                    "",
                  ],
                }),
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.touchStartY = null),
            (this.handleStart = () => {
              this.setState({ readyToStart: !1 }, () => { });
            }),
            (this.getRandomItems = (e, t) =>
              e.sort(() => 0.5 - Math.random()).slice(0, t)),
            (this.handleImageLoad = () => {
              this.imagesLoadedCount++;
              let e = Math.round(
                (this.imagesLoadedCount / this.imagesToLoad) * 100
              );
              this.setState({ preloadProgress: e }, () => {
                100 === e &&
                  this.setState({ imagesLoaded: !0, readyToStart: !0 });
              });
            }),
            (this.pauseCircleAnimation = (e) => {
              (this.isCircleAnimationPaused = !0),
                cancelAnimationFrame(this.circleAnimationId);
              let t = e.currentTarget.getBoundingClientRect(),
                i = document.querySelector(".header");
              if (i) {
                let e = i.getBoundingClientRect(),
                  s = e.top + e.height / 2,
                  o = t.left + (0.5 * window.innerWidth) / 100;
                y.p8.to(this.circle, {
                  x: o,
                  y: s - 4,
                  ease: "back.out(1.2)",
                  duration: 0.5,
                  scale: 0.2,
                  transformOrigin: "top left",
                });
              }
            }),
            (this.resumeCircleAnimation = () => {
              (this.isCircleAnimationPaused = !1), this.animateCircle();
            }),
            (this.handleMouseMove = (e) => {
              let t, i;
              e.touches
                ? ((t = e.touches[0].clientX), (i = e.touches[0].clientY))
                : ((t = e.clientX), (i = e.clientY)),
                (this.mouseX = t),
                (this.mouseY = i);
            }),
            (this.initializeObserver = () => {
              (this.observer = new IntersectionObserver(
                this.handleIntersection,
                { threshold: 0.5 }
              )),
                this.squareRefs.forEach((e) => {
                  e.current && this.observer.observe(e.current);
                });
            }),
            (this.handleAllImagesClicked = () => {
              var e;
              null === (e = this.audioControllerRef.current) ||
                void 0 === e ||
                e.startBackgroundMusic(),
                (this.allImagesClicked = !0),
                this.initializeObserver(),
                document.body.removeChild(this.introBackground),
                document.body.removeChild(this.introDiv),
                this.physicsSimRef.current &&
                (this.physicsSimRef.current.setPhysicsContainerStyle(
                  "right",
                  "0px"
                ),
                  this.physicsSimRef.current.setPhysicsContainerStyle(
                    "bottom",
                    "0px"
                  ),
                  this.physicsSimRef.current.setPhysicsContainerStyle(
                    "background",
                    "transparent"
                  ),
                  this.physicsSimRef.current.setPhysicsContainerStyle(
                    "pointer-events",
                    "none"
                  ),
                  this.physicsSimRef.current.setPhysicsContainerStyle(
                    "filter",
                    "invert(1)"
                  ));
              let t = (document.body.scrollHeight - window.innerHeight) / 2;
              this.smoothScrollTo(t);
            }),
            (this.playClickSound = () => {
              var e;
              null === (e = this.audioControllerRef.current) ||
                void 0 === e ||
                e.playSound();
            }),
            (this.items = this.getRandomItems(r, 18)),
            (this.squareRefs = this.items.map(() => n.createRef())),
            (this.container = n.createRef()),
            (this.intro = n.createRef()),
            (this.circle = n.createRef()),
            (this.physicsSimRef = n.createRef()),
            (this.audioControllerRef = n.createRef()),
            (this.lastScrollTop = 0),
            (this.lastScrollLeft = 0),
            (this.target = 0),
            (this.currentPos = 0),
            (this.ease = 0.07),
            (this.animationId = null),
            (this.userActive = !1),
            (this.autoScrollInterval = 2e3),
            (this.autoScrollTimer = null),
            (this.lastScrollDirection = 100),
            (this.wheel = !0),
            (this.clickable = !0),
            (this.circleVisible = !1),
            (this.circleAnimationId = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.velocityX = 0),
            (this.velocityY = 0),
            (this.posX = 0),
            (this.posY = 0),
            (this.detailsBackground = null),
            (this.detailsDiv = null),
            (this.introBackground = null),
            (this.introDiv = null),
            (this.animationWords = null),
            (this.timeline = null),
            (this.allImagesClicked = !1),
            (this.isCircleAnimationPaused = !1),
            (this.imagesToLoad = this.items.length),
            (this.imagesLoadedCount = 0),
            (this.numberOfBoxes = this.items.length),
            (this.state = {
              preloadProgress: 0,
              imagesLoaded: !1,
              readyToStart: !1,
            }),
            (this.handleIntersection = this.handleIntersection.bind(this));
        }
      }
      t.default = b;
    },
    8621: function () { },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
