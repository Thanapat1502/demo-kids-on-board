// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Define types for gtag
type GtagCommand = "config" | "event" | "js" | "set";

type GtagConfigParams = {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  custom_map?: Record<string, string>;
  [key: string]: unknown;
};

type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events happening
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: {
      (command: "config", targetId: string, config?: GtagConfigParams): void;
      (
        command: "event",
        eventName: string,
        eventParams?: GtagEventParams
      ): void;
      (command: "js", date: Date): void;
      (command: "set", config: Record<string, unknown>): void;
      (command: GtagCommand, ...args: unknown[]): void;
    };
  }
}
