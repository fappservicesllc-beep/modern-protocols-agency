import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

type Toast = {
  id: number;
  title: string;
  description?: string;
  variant?: "success" | "error";
};

type ToastInput = Omit<Toast, "id">;

let pushFn: ((t: ToastInput) => void) | null = null;

export function toast(t: ToastInput) {
  pushFn?.(t);
}

export function Toaster() {
  const [items, setItems] = useState<Toast[]>([]);

  useEffect(() => {
    pushFn = (t) => {
      const id = Date.now() + Math.random();
      setItems((prev) => [...prev, { ...t, id }]);
      setTimeout(() => {
        setItems((prev) => prev.filter((x) => x.id !== id));
      }, 5000);
    };
    return () => {
      pushFn = null;
    };
  }, []);

  return (
    <div
      className="fixed top-6 right-6 z-[100] flex flex-col gap-3 max-w-sm"
      data-testid="toaster"
    >
      {items.map((t) => (
        <div
          key={t.id}
          className="bg-card border border-border rounded-sm p-4 shadow-2xl backdrop-blur-xl flex items-start gap-3 animate-fade-up"
          data-testid={`toast-${t.variant ?? "info"}`}
        >
          {t.variant === "error" ? (
            <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
          )}
          <div className="flex-1">
            <div className="text-sm font-medium text-foreground">{t.title}</div>
            {t.description && (
              <div className="text-xs text-muted-foreground mt-1">
                {t.description}
              </div>
            )}
          </div>
          <button
            onClick={() => setItems((prev) => prev.filter((x) => x.id !== t.id))}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
