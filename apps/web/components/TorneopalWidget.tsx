"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Torneopal-widget, joka:
 * - Jos annetaan `src`, lataa sen suoraan (esim. competition=...&class=...&group=...&widget=scoretable)
 * - Muuten muodostaa src:n teamId + widget-paramilla (schedule/results/standings)
 *
 * Tämä luo <script> tagin suoraan containeriin, mikä toimii document.write()-widgeteille.
 */
type WidgetType = "schedule" | "results" | "standings" | "scoretable";

export function TorneopalWidget({
  teamId,
  widget = "schedule",
  src,
  className = "",
  title,
}: {
  teamId?: number;
  widget?: WidgetType;
  src?: string; // jos annetaan, käytetään suoraan
  className?: string;
  title?: string;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resolvedSrc = useMemo(() => {
    if (src) return src;
    if (typeof teamId === "number") {
      return `https://kaukis.torneopal.fi/taso/widget.php?teamid=${teamId}&widget=${widget}`;
    }
    return null;
  }, [src, teamId, widget]);

  useEffect(() => {
    setError(null);
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";

    if (!resolvedSrc) {
      setError("Widget-src puuttuu.");
      return;
    }

    const s = document.createElement("script");
    s.src = resolvedSrc;
    s.async = true;
    s.charset = "utf-8";

    s.onerror = () => setError("Widgetin lataus epäonnistui.");

    host.appendChild(s);

    return () => {
      try {
        host.innerHTML = "";
      } catch {
        // ignore cleanup errors
      }
    };
  }, [resolvedSrc]);

  return (
    <div className={className}>
      {title ? <div className="mb-2 text-sm font-semibold text-slate-700">{title}</div> : null}

      <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
        <div ref={hostRef} className="p-4" />
      </div>

      {error ? <div className="mt-2 text-sm text-red-700">{error}</div> : null}

      <div className="mt-2 text-xs text-slate-500">Data: Torneopal</div>
    </div>
  );
}