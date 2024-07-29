$(".btn-lang").click(function (e) {
  e.stopPropagation();
  $(this).siblings().toggleClass("active");
});

$(document).click(function (e) {
  if (!$(".lang-list").has(e.target).length) {
    $(".lang-list").removeClass("active");
  }
});

$(window).scroll(function () {
  $(".lang-list").removeClass("active");
});

ScrollTrigger.create({
  trigger: ".sc-slogan",
  start: "0% 0%",
  end: "100% 100%",
  endTrigger: "#footer",
  // markers: true,
  onUpdate: function (self) {
    direction = self.direction;
    if (direction == 1) {
      $(".top-btn").removeClass("active");
    } else {
      $(".top-btn").addClass("active");
    }
  },
  onLeaveBack: function () {
    $(".top-btn").removeClass("active");
  },
});

$(".top-btn").click(function () {
  gsap.to(window, { duration: 1, scrollTo: 0 });
});

gsap.set(`[data-effect="fade"]`, { opacity: 0 });

const intro = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-intro",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
    },
  })
  .to(".sc-intro .intro-description", { background: "rgba(0,0,0,.7)" }, "bg")
  .to(".sc-intro .desc-text1", { opacity: 1 }, "bg")
  .to(".sc-intro .desc-text1", {
    opacity: 0,
    onStart: function () {
      $("#header").addClass("active");
    },
    onReverseComplete: function () {
      $("#header").removeClass("active");
    },
  })
  .to(".sc-intro .desc-text2", { opacity: 1 })
  .to(".sc-intro .desc-text2", { opacity: 0 })
  .to(".sc-intro .desc-text3", { opacity: 1 })
  .to(".sc-intro .desc-text3", { opacity: 0 })
  .to(".sc-intro .desc-text4", { opacity: 1 });

const slogan = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-slogan",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".slogan-text-box", { background: "rgba(0,0,0,.7)" }, "bg")
  .to(".slogan-title", { opacity: 1 }, "bg")

  .to(".slogan-text1", { xPercent: 100 }, "text")
  .to(".slogan-text2", { xPercent: -100 }, "text")

  .to(".slogan-text-box", { background: "rgba(0,0,0,0)" }, "text")
  .to(".slogan-title", { opacity: 0 })
  .to(".bg-img1", { height: 0 })
  .to(".bg-img2", { height: 0 })

  .to(".slogan-description-text", { opacity: 1 }, "bg-end")
  .to(".slogan-text-box", { background: "rgba(0,0,0,.4)" }, "bg-end");

const business = ScrollTrigger.create({
  trigger: ".sc-business",
  start: "0% 10%",
  end: "100% 100%",
  scrub: 0,
  // markers: true,
  onEnter: function () {
    $("#header").addClass("dark");
    $(".lang-list").addClass("white");
  },
  onLeaveBack: function () {
    $("#header").removeClass("dark");
    $(".lang-list").removeClass("white");
  },
});

const dark = ScrollTrigger.create({
  trigger: '[data-theme="dark"]',
  start: "0% 50%",
  end: "100% 20%",
  scrub: 0,
  // markers: true,
  toggleClass: {
    targets: "body",
    className: "dark",
  },
  onEnter: function () {
    $("#header").removeClass("dark");
    $(".lang-list").removeClass("white");
  },
  onLeaveBack: function () {
    $("#header").addClass("dark");
    $(".lang-list").addClass("white");
  },
});

const dataInfo = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-data-info",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
      invalidateOnRefresh: true,
    },
  })
  .to(".data-info", {
    xPercent: -100,
    x: function () {
      return window.innerWidth;
    },
  });

const banner = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-banner",
      start: "0% 90%",
      end: "0% 60%",
      scrub: 0,
      // markers: true,
    },
  })
  .from(".col-left", { x: -300 }, "line")
  .from(".col-right", { x: 300 }, "line");

const bannerText = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-banner",
      start: "0% 40%",
      end: "100% 30%",
      scrub: 0,
      // markers: true,
      onEnter: function () {
        $(".sc-banner .banner-description").addClass("show");
      },
      onLeaveBack: function () {
        $(".sc-banner .banner-description").removeClass("show");
      },
    },
  })
  .to(".banner-description p", { opacity: 1 });

const area1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-service .area1",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      invalidateOnRefresh: true,
    },
  })
  .to(".group-data-id", {
    x: function () {
      return -$(".sc-service .group-data-id .data-id-title").outerWidth();
    },
  })
  .to(
    ".group-data-id .card-list-item:nth-child(2)",
    1,
    { xPercent: -100, x: -40 * 1 },
    "card"
  )
  .to(
    ".group-data-id .card-list-item:nth-child(3)",
    1,
    { xPercent: -200, x: -40 * 2 },
    "card"
  )
  .to(
    ".group-data-id .card-list-item:nth-child(4)",
    1,
    { xPercent: -300, x: -40 * 3 },
    "card"
  )
  .to(".lock", { opacity: 0 }, "card")
  .to(".lock-on", { opacity: 1 }, "card+=0.5")
  .to(".group-data-id .card-list-item:not(:last-child)", { opacity: 0 })
  .to(".lock-on", { opacity: 0 })
  .to(".lock-text", { opacity: 1 });

const area2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-service .area2",
    start: "0% 0%",
    end: "100% 100%",
    scrub: 0,
    invalidateOnRefresh: true,
    onEnter: function () {
      gsap.set(".sc-service .area1 .card-list", { opacity: 0 });
      gsap.set(".sc-service .area2 .card-area .card", { opacity: 1 });
    },
    onLeaveBack: function () {
      gsap.set(".sc-service .area1 .card-list", { opacity: 1 });
      gsap.set(".sc-service .area2 .card-area .card", { opacity: 0 });
    },
  },
});

const area3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-service .area3",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      invalidateOnRefresh: true,
      // markers: true,
      onEnter: function () {
        gsap.set(".sc-service .area2 .card-area .card", { opacity: 0 });
        gsap.set(".sc-service .area3 .card-list-item.card-lock", {
          opacity: 1,
        });
      },
      onLeaveBack: function () {
        gsap.set(".sc-service .area2 .card-area .card", { opacity: 1 });
        gsap.set(".sc-service .area3 .card-list-item.card-lock", {
          opacity: 0,
        });
      },
    },
  })
  .to(
    ".content.area3 .card-list-item:nth-child(2)",
    { xPercent: -100, x: -40 * 1 },
    "card"
  )
  .to(
    ".content.area3 .card-list-item:nth-child(3)",
    { xPercent: -200, x: -40 * 2 },
    "card"
  )
  .to(
    ".content.area3 .card-list-item:nth-child(4)",
    { xPercent: -300, x: -40 * 3 },
    "card"
  )
  .to(".card-lock-bg", { opacity: 1 }, "text")
  .to(".end-text", { opacity: 1 }, "text");

const message = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-message",
    start: "0% 30%",
    end: "100% 100%",
    scrub: 0,
    // markers: true,
    onUpdate: function (self) {
      if (Math.floor(self.progress * 100) >= 1) {
        $("#header").addClass("dark");
        $("body").removeClass("dark");
        $(".data-info-title").removeClass("dark");
        $(".sc-message").addClass("dark");
        $(".lang-list").addClass("white");
      } else {
        $("#header").removeClass("dark");
        $("body").addClass("dark");
        $(".data-info-title").addClass("dark");
        $(".sc-message").removeClass("dark");
        $(".lang-list").removeClass("white");
      }
    },
  },
});

$(".sc-visual").each(function () {
  const visual = gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "0% 70%",
        end: "100% 80%",
        scrub: 0,
        // markers: true,
      },
    })
    .from($(this).find(".visual-text1"), { x: 0 }, "bg")
    .from($(this).find(".visual-text2"), { x: 0 }, "bg")
    .to($(this).find(".visaul-bg-box"), { x: 0 }, "bg");
});

$(".sc-property").each(function () {
  const property = gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        // markers: true,
        invalidateOnRefresh: true,
        onUpdate: function (self) {
          if (Math.floor(self.progress * 100) >= 1) {
            $(".scroll-down").addClass("active");
          } else {
            $(".scroll-down").removeClass("active");
          }

          if (Math.floor(self.progress * 100) >= 47) {
            $(".start-title").css("opacity", "0");
            $(".end-title").css("opacity", "1");
          } else {
            $(".start-title").css("opacity", "1");
            $(".end-title").css("opacity", "0");
          }
        },
      },
    })
    .to($(this).find(".property"), {
      xPercent: -100,
      x: function () {
        return window.innerWidth;
      },
    });
});

const creator = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sc-creator .creator-wrap",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
      // markers: true,
    },
  })
  .to(".creator-description", { opacity: 1 })
  .to(".creator-description", { opacity: 0 });

const ground = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-ground",
    start: "100% 100%",
    end: "100% 0%",
    // markers: true,
    onEnter: function () {
      $(".top-btn").addClass("absolute");
    },
    onLeaveBack: function () {
      $(".top-btn").removeClass("absolute");
    },
  },
});

const join = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    start: "-20% 85%",
    end: "100% 0%",
    // markers: true,
    onUpdate: function (self) {
      if (Math.floor(self.progress * 100) >= 1) {
        $(".sc-join").addClass("active");
      } else {
        $(".sc-join").removeClass("active");
      }
    },
  },
});
