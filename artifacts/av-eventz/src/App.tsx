import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';

// Eager-load the home page (already fast, no code-splitting needed)
import LandingPage from '@/components/LandingPage';

// Lazy-load all other pages
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const ClientsPage = lazy(() => import('@/pages/ClientsPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));

// Service pages
const CorporateEventsPage = lazy(() => import('@/pages/services/CorporateEventsPage'));
const ConferencesPage = lazy(() => import('@/pages/services/ConferencesPage'));
const ProductLaunchesPage = lazy(() => import('@/pages/services/ProductLaunchesPage'));
const ExhibitionsPage = lazy(() => import('@/pages/services/ExhibitionsPage'));
const DealerMeetsPage = lazy(() => import('@/pages/services/DealerMeetsPage'));
const AnnualMeetsPage = lazy(() => import('@/pages/services/AnnualMeetsPage'));
const RoadShowsPage = lazy(() => import('@/pages/services/RoadShowsPage'));
const BrandPromotionsPage = lazy(() => import('@/pages/services/BrandPromotionsPage'));
const AwardNightsPage = lazy(() => import('@/pages/services/AwardNightsPage'));
const MICEPage = lazy(() => import('@/pages/services/MICEPage'));
const WeddingsPage = lazy(() => import('@/pages/services/WeddingsPage'));
const BirthdaysPage = lazy(() => import('@/pages/services/BirthdaysPage'));
const ArtistManagementPage = lazy(() => import('@/pages/services/ArtistManagementPage'));
const PhotographyPage = lazy(() => import('@/pages/services/PhotographyPage'));
const StageProductionPage = lazy(() => import('@/pages/services/StageProductionPage'));
const LEDWallsPage = lazy(() => import('@/pages/services/LEDWallsPage'));
const SoundLightPage = lazy(() => import('@/pages/services/SoundLightPage'));
const VenueDecorationPage = lazy(() => import('@/pages/services/VenueDecorationPage'));

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-px bg-primary animate-pulse" />
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/corporate-events" component={CorporateEventsPage} />
        <Route path="/services/conferences" component={ConferencesPage} />
        <Route path="/services/product-launches" component={ProductLaunchesPage} />
        <Route path="/services/exhibitions" component={ExhibitionsPage} />
        <Route path="/services/dealer-meets" component={DealerMeetsPage} />
        <Route path="/services/annual-meets" component={AnnualMeetsPage} />
        <Route path="/services/road-shows" component={RoadShowsPage} />
        <Route path="/services/brand-promotions" component={BrandPromotionsPage} />
        <Route path="/services/award-nights" component={AwardNightsPage} />
        <Route path="/services/mice" component={MICEPage} />
        <Route path="/services/weddings" component={WeddingsPage} />
        <Route path="/services/birthdays" component={BirthdaysPage} />
        <Route path="/services/artist-management" component={ArtistManagementPage} />
        <Route path="/services/photography-videography" component={PhotographyPage} />
        <Route path="/services/stage-production" component={StageProductionPage} />
        <Route path="/services/led-walls" component={LEDWallsPage} />
        <Route path="/services/sound-light" component={SoundLightPage} />
        <Route path="/services/venue-decoration" component={VenueDecorationPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/clients" component={ClientsPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/privacy-policy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
