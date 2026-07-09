import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import LandingPage from '@/components/LandingPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="*">
        {() => (
          <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
            <p className="text-muted-foreground font-sans uppercase tracking-widest text-sm">Page not found</p>
            <a href="/" className="mt-8 border border-primary text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
              Return Home
            </a>
          </div>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
