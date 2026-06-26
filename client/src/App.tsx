import { Route, Switch } from "wouter";
import Home from "@/pages/home";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <Home />
        </Route>
      </Switch>
      <Toaster />
    </>
  );
}
