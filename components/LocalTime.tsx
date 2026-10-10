"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/** Live local time for Astana, computed in Asia/Almaty regardless of the browser timezone. */
export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Almaty",
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = window.setInterval(update, 10000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="local-time">
      <Clock size={14} strokeWidth={1.6} aria-hidden />
      <time suppressHydrationWarning>{time || "--:--"}</time>
    </span>
  );
}
