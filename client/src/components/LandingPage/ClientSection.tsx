import React, { useRef, useEffect, useState, useCallback } from "react";

type Review = {
  id: number;
  quote: string;
  name: string;
  avatar: string;
  bg: "black" | "tan";
  offset: number;
};



/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const reviews: Review[] = [
  {
    id: 1,
    quote: "Reyu Jewels is a name I rely on for premium diamonds. Their service, clarity in dealings, and product quality are world-class.",
    name: "Emily Johnson",
    avatar: "https://i.pravatar.cc/80?img=47",
    bg: "black",
    offset: 0,
  },
  {
    id: 2,
    quote: "The craftsmanship and consistency of Reyu Jewels are remarkable. Every stone speaks of trust and expertise. Highly recommended for long-term business.",
    name: "Michael Smith",
    avatar: "https://i.pravatar.cc/80?img=12",
    bg: "tan",
    offset: 30,
  },
  {
    id: 3,
    quote: "Reyu Jewels combines exceptional diamond quality with transparent communication. Even from overseas, the process felt secure and seamless.",
    name: "Jessica Brown",
    avatar: "https://i.pravatar.cc/80?img=49",
    bg: "black",
    offset: 0,
  },
  {
    id: 4,
    quote: "Clarity, value, and professionalism — Reyu Jewels delivers on every promise. I wouldn't trust anyone else for fine diamond sourcing.",
    name: "Priya Sharma",
    avatar: "https://i.pravatar.cc/80?img=45",
    bg: "tan",
    offset: 30,
  },
];

/* ─────────────────────────────────────────────────────────────────
   STAR RATING
───────────────────────────────────────────────────────────────── */
const StarRating = ({ isBlack }) => (
  <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={isBlack ? "#C6A96B" : "#111111"}>
        <polygon points="10,2 12.4,7.8 18.5,8.3 14,12.4 15.5,18.4 10,15 4.5,18.4 6,12.4 1.5,8.3 7.6,7.8" />
      </svg>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   REVIEW CARD — purely presentational
───────────────────────────────────────────────────────────────── */
const ReviewCard = React.forwardRef(({ review, style, onMouseEnter, onMouseLeave }, ref) => {
  const isBlack = review.bg === "black";
  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: "350px",
        height: "557px",
        flexShrink: 0,
        borderRadius: "30px",
        padding: "40px",
        backgroundColor: isBlack ? "#000000" : "#C6A96B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
        position: "absolute",   // positioned by JS
        top: 0,
        willChange: "transform",
        cursor: "default",
        ...style,
      }}
    >
      <StarRating isBlack={isBlack} />
      <div style={{ fontSize: "48px", lineHeight: 1, marginBottom: "14px", alignSelf: "flex-start", color: isBlack ? "#C6A96B" : "#5C4730", fontFamily: "Georgia, serif" }}>
        "
      </div>
      <p style={{ fontSize: "15px", lineHeight: "26px", fontStyle: "italic", flex: 1, color: isBlack ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)", margin: 0 }}>
        {review.quote}
      </p>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={review.avatar}
          alt={review.name}
          style={{ width: "70px", height: "70px", borderRadius: "15px", objectFit: "cover", marginBottom: "12px", border: `2px solid ${isBlack ? "#C6A96B" : "#5C4730"}` }}
        />
        <span style={{ fontSize: "14px", fontWeight: 500, color: isBlack ? "#ffffff" : "#000000" }}>
          {review.name}
        </span>
      </div>
    </div>
  );
});

/* ─────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────── */
const CARD_W   = 350;
const CARD_GAP = 20;
const STEP     = CARD_W + CARD_GAP;    // 370px per slot
const DELAY_MS = 3000;                 // pause between moves
const SLIDE_MS = 850;                  // slide duration

/* ─────────────────────────────────────────────────────────────────
   EASING
───────────────────────────────────────────────────────────────── */
const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;


const ClientSection = () => {
  const cardRefs  = useRef([]);          // DOM refs, indexed by review order
  const orderRef  = useRef(reviews.map((_, i) => i));  // [0,1,2,3]
  const busyRef   = useRef(false);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef    = useRef(null);

  // Number of cards visible in the strip (we show 3 fully, 4th partially)
  const VISIBLE = reviews.length;

  /* ── Get the x position for a given slot index ──────────────── */
  const slotX = (slotIdx) => slotIdx * STEP;

  /* ── Instantly set a card's transform (no animation) ────────── */
  const setX = (domIdx:number, x:number) => {
    const el = cardRefs.current[domIdx];
    if (el) el.style.transform = `translateX(${x}px)`;
  };

  /* ── Animate a card from `fromX:number` to `toX:number` over SLIDE_MS ─────── */
  const animateCard = (domIdx:number, fromX:number, toX:number, onDone:number) => {
    const el = cardRefs.current[domIdx];
    if (!el) { onDone?.(); return; }

    const startTime = performance.now();
    const tick = (now) => {
      const t       = Math.min((now - startTime) / SLIDE_MS, 1);
      const eased   = easeInOut(t);
      const current = fromX + (toX - fromX) * eased;
      el.style.transform = `translateX(${current}px)`;
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  /* ── ONE TICK: rotate the leftmost card to the right end ─────── */
  const tick = useCallback(() => {
    if (busyRef.current || pausedRef.current) return;
    busyRef.current = true;

    const order    = orderRef.current;          // e.g. [0,1,2,3]
    const exitIdx  = order[0];                  // card going off-screen left
    const restIdxs = order.slice(1);            // cards sliding left by one slot

    // Current X positions before animation
    const currentXMap = {};
    order.forEach((domIdx:number, slot) => {
      currentXMap[domIdx] = slotX(slot);
    });

    // Destination for the exiting card: one slot LEFT of slot 0 (off-screen)
    const exitDestX = -STEP;

    // Destination for the returning card: rightmost slot
    const returnDestX = slotX(VISIBLE - 1);

    let settled = 0;
    const total = VISIBLE; // all cards move simultaneously

    const oneDone = () => {
      settled++;
      if (settled < total) return;

      // All animations finished. Now:
      // 1. Teleport exitIdx to just off-screen RIGHT (invisible jump)
      //    so it can slide in from there next time it's the rightmost card.
      //    Actually: put it at returnDestX immediately, no slide needed —
      //    it's already been placed there via returnSlide below.

      // Update logical order: move front card to the back
      orderRef.current = [...restIdxs, exitIdx];

      busyRef.current = false;

      if (!pausedRef.current) {
        timerRef.current = setTimeout(tick, DELAY_MS);
      }
    };

    // ── Animate every card ──────────────────────────────────────

    // The exiting card slides off to the left
    animateCard(exitIdx, currentXMap[exitIdx], exitDestX, () => {
      // Once off-screen, instantly snap it to one slot BEYOND the rightmost
      // slot (off-screen right), then animate it into the rightmost slot.
      // But since all other cards are already there, we do a quick re-entry.
      const offRightX = slotX(VISIBLE); // just off the right edge
      setX(exitIdx, offRightX);

      // Slide it into the rightmost slot
      animateCard(exitIdx, offRightX, returnDestX, oneDone);
    });

    // All other cards each slide one slot to the left simultaneously
    restIdxs.forEach((domIdx:number, i) => {
      const fromX:number = currentXMap[domIdx];      // current slot position
      const toX:number   = slotX(i);                // one slot to the left
      animateCard(domIdx, fromX, toX, oneDone);
    });

  }, []);

  /* ── Initialise positions and start loop ─────────────────────── */
  useEffect(() => {
    // Place every card at its initial slot instantly
    orderRef.current.forEach((domIdx:number, slotIdx) => {
      setX(domIdx, slotX(slotIdx));
    });

    timerRef.current = setTimeout(tick, DELAY_MS);

    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const pauseLoop = () => {
    pausedRef.current = true;
    clearTimeout(timerRef.current);
  };

  const resumeLoop = () => {
    if (!pausedRef.current) return;
    pausedRef.current = false;
    if (!busyRef.current) {
      timerRef.current = setTimeout(tick, DELAY_MS);
    }
  };

  return (
    <section
      style={{
        width: "100%",
        overflowX: "hidden",
        paddingTop: "40px",
        paddingLeft: "8px",
        paddingRight: "8px",
        boxSizing: "border-box",
      }}
    >
      {/* Dark outer wrapper */}
      <div style={{ backgroundColor: "#202020", borderRadius: "30px", overflow: "hidden" }}>

        {/* Brown inner panel */}
        <div
          style={{
            width: "100%",
            minHeight: "837px",
            backgroundColor: "#5C4730",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(24px, 5.2vw, 100px)",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >

          {/* ── Left header ──────────────────────────────────────── */}
          <div
            style={{
              width: "clamp(240px, 26vw, 500px)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 3,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 2.8vw, 42px)",
                fontWeight: 600,
                color: "#ffffff",
                fontFamily: "Georgia, 'Times New Roman', serif",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              What Our Clients Say
            </h2>
            <p
              style={{
                fontSize: "clamp(14px, 1.1vw, 20px)",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Discover why discerning customers choose Reyu Jewels for their most precious moments.
            </p>
          </div>

          {/* ── Cards strip ──────────────────────────────────────── */}
          <div
            style={{
              flex: 1,
              marginLeft: "clamp(24px, 3vw, 60px)",
              height: "637px",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={pauseLoop}
            onMouseLeave={resumeLoop}
          >
            {/*
              Each card is absolutely positioned inside this container.
              The `top` is set to the card's `offset` (0 or 30px) to
              maintain the original Figma zigzag rhythm.
              JS drives `translateX` for the horizontal movement.
            */}
            {reviews.map((review, i) => (
              <ReviewCard
                key={review.id}
                ref={(el) => (cardRefs.current[i] = el)}
                review={review}
                style={{
                  // Zigzag: each card's vertical offset is baked into `top`
                  top: `${review.offset}px`,
                  // Transition only the box-shadow on hover, not transform
                  // (transform is driven by JS rAF)
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    review.bg === "black"
                      ? "0 20px 48px rgba(0,0,0,0.55)"
                      : "0 20px 48px rgba(92,71,48,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            ))}

            {/* Left fade — masks cards exiting stage-left */}
            <div
              style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: "50px",
                background: "linear-gradient(to right, #5C4730, transparent)",
                pointerEvents: "none", zIndex: 2,
              }}
            />

            {/* Right fade — signals more cards */}
            <div
              style={{
                position: "absolute", right: 0, top: 0, bottom: 0,
                width: "180px",
                background: "linear-gradient(to left, #5C4730, transparent)",
                pointerEvents: "none", zIndex: 2,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSection;