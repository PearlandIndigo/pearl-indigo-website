import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items, dark = false }: { items: FaqItem[]; dark?: boolean }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gold/25 border-y border-gold/25">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(open ? null : i)}
              className={`w-full text-left py-4 px-2 flex justify-between items-center gap-4 ${
                dark ? "text-pearl" : "text-indigo-deep"
              }`}
            >
              <span className="font-display text-lg font-medium">{item.q}</span>
              <span className="text-gold-deep text-xl shrink-0">{open ? "−" : "+"}</span>
            </button>
            {open && (
              <p className={`px-2 pb-5 text-[15px] leading-relaxed ${dark ? "text-pearl/85" : "text-charcoal/90"}`}>
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
