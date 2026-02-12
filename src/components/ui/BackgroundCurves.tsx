"use client";

const curves = [
  // Große weiche Kurve oben links
  {
    d: "M-50,120 C150,20 300,180 500,80 S750,-30 950,100",
    top: "5%",
    left: "-5%",
    width: "70%",
    rotate: -8,
    opacity: 0.12,
  },
  // Schlanke Welle rechts oben
  {
    d: "M0,60 C80,180 200,-20 350,90 S500,200 680,50",
    top: "12%",
    right: "-3%",
    width: "45%",
    rotate: 15,
    opacity: 0.08,
  },
  // Langgezogener Bogen Mitte links
  {
    d: "M0,200 C120,50 280,250 450,100 S650,300 900,150",
    top: "35%",
    left: "-8%",
    width: "60%",
    rotate: -3,
    opacity: 0.1,
  },
  // Kleine Schleife rechts Mitte
  {
    d: "M0,80 C60,200 180,10 260,130 S380,60 440,160",
    top: "50%",
    right: "2%",
    width: "30%",
    rotate: 22,
    opacity: 0.07,
  },
  // Breite sanfte Welle unten
  {
    d: "M-100,100 C100,250 350,0 550,180 S800,50 1100,200",
    top: "70%",
    left: "-3%",
    width: "75%",
    rotate: 5,
    opacity: 0.09,
  },
  // Kleine Kurve unten rechts
  {
    d: "M0,50 C90,180 200,20 320,120 S420,10 500,100",
    top: "82%",
    right: "-5%",
    width: "35%",
    rotate: -12,
    opacity: 0.06,
  },
  // Vertikale Welle links
  {
    d: "M80,0 C200,150 30,300 160,450 S50,600 180,750",
    top: "15%",
    left: "8%",
    width: "15%",
    rotate: 0,
    opacity: 0.07,
  },
];

export default function BackgroundCurves() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {curves.map((curve, i) => (
        <svg
          key={i}
          viewBox="0 0 1000 300"
          fill="none"
          preserveAspectRatio="none"
          className="absolute"
          style={{
            top: curve.top,
            left: curve.left,
            right: curve.right,
            width: curve.width,
            height: "auto",
            transform: `rotate(${curve.rotate}deg)`,
            opacity: curve.opacity,
          }}
        >
          <path
            d={curve.d}
            stroke="var(--color-sage)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ))}
    </div>
  );
}
