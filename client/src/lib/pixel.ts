/**
 * Meta Pixel (Facebook) event helper.
 *
 * The base pixel + PageView is loaded in `client/index.html`.
 * This module exposes a safe wrapper so components can fire conversion
 * events without worrying about whether `fbq` actually exists — ad
 * blockers, privacy browsers and SSR/build-time contexts all leave it
 * undefined, and an unguarded call would throw inside a form handler
 * and break the submit flow.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const PIXEL_ID = "2879856492350769";

type PixelParams = Record<string, string | number | boolean | undefined>;

/** Fire a STANDARD Meta event (Lead, Subscribe, Contact, ViewContent…). */
export function trackPixel(event: string, params?: PixelParams) {
  try {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  } catch {
    // Never let analytics break a user action.
  }
}

/** Fire a CUSTOM Meta event (anything not in Meta's standard list). */
export function trackPixelCustom(event: string, params?: PixelParams) {
  try {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    if (params) {
      window.fbq("trackCustom", event, params);
    } else {
      window.fbq("trackCustom", event);
    }
  } catch {
    // Never let analytics break a user action.
  }
}
