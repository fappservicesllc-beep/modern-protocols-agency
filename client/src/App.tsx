import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";

export default function App() {
  return (
    <I18nProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <Home />
        </Route>
      </Switch>
      <Toaster />
    </I18nProvider>
  );
}
