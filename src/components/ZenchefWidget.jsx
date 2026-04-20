import { useEffect } from "react";

export default function ZenchefWidget() {
  useEffect(() => {
    const waitForZenchef = setInterval(() => {
      if (window.ZenchefWidget) {
        // 🔥 trigger init door event
        window.dispatchEvent(new Event("load"));
        clearInterval(waitForZenchef);
      }
    }, 300);

    return () => clearInterval(waitForZenchef);
  }, []);

  return (
    <div
      className="zc-widget-config"
      data-restaurant="384441"
      data-open="0"
      data-hide-button="false"
    ></div>
  );
}