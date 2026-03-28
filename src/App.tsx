import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RestorationService from "./pages/RestorationService";
import FireRestorationService from "./pages/FireRestorationService";
import RoofingService from "./pages/RoofingService";
import HvacService from "./pages/HvacService";
import ElectricalService from "./pages/ElectricalService";
import BusinessCards from "./pages/BusinessCards";

// Water Damage Location Pages
import HoustonWaterDamage from "./pages/water-damage/Houston";
import KatyWaterDamage from "./pages/water-damage/Katy";
import SugarLandWaterDamage from "./pages/water-damage/SugarLand";
import PearlandWaterDamage from "./pages/water-damage/Pearland";
import TheWoodlandsWaterDamage from "./pages/water-damage/TheWoodlands";
import CypressWaterDamage from "./pages/water-damage/Cypress";
import SpringWaterDamage from "./pages/water-damage/Spring";
import HumbleWaterDamage from "./pages/water-damage/Humble";
import LeagueCityWaterDamage from "./pages/water-damage/LeagueCity";
import MissouriCityWaterDamage from "./pages/water-damage/MissouriCity";
import PasadenaWaterDamage from "./pages/water-damage/Pasadena";
import BaytownWaterDamage from "./pages/water-damage/Baytown";
import RichmondWaterDamage from "./pages/water-damage/Richmond";
import TomballWaterDamage from "./pages/water-damage/Tomball";
import ConroeWaterDamage from "./pages/water-damage/Conroe";
import FriendswoodWaterDamage from "./pages/water-damage/Friendswood";

// Fire Damage Location Pages
import HoustonFireDamage from "./pages/fire-damage/Houston";
import KatyFireDamage from "./pages/fire-damage/Katy";
import SugarLandFireDamage from "./pages/fire-damage/SugarLand";
import PearlandFireDamage from "./pages/fire-damage/Pearland";
import TheWoodlandsFireDamage from "./pages/fire-damage/TheWoodlands";
import CypressFireDamage from "./pages/fire-damage/Cypress";
import SpringFireDamage from "./pages/fire-damage/Spring";
import HumbleFireDamage from "./pages/fire-damage/Humble";
import LeagueCityFireDamage from "./pages/fire-damage/LeagueCity";
import MissouriCityFireDamage from "./pages/fire-damage/MissouriCity";
import PasadenaFireDamage from "./pages/fire-damage/Pasadena";
import BaytownFireDamage from "./pages/fire-damage/Baytown";
import RichmondFireDamage from "./pages/fire-damage/Richmond";
import TomballFireDamage from "./pages/fire-damage/Tomball";
import ConroeFireDamage from "./pages/fire-damage/Conroe";
import FriendswoodFireDamage from "./pages/fire-damage/Friendswood";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/restoration" element={<RestorationService />} />
            <Route path="/services/fire-restoration" element={<FireRestorationService />} />
            <Route path="/services/roofing" element={<RoofingService />} />
            <Route path="/services/hvac" element={<HvacService />} />
            <Route path="/services/electrical" element={<ElectricalService />} />
            <Route path="/business-cards" element={<BusinessCards />} />

            {/* Water Damage Location Pages */}
            <Route path="/water-damage/houston" element={<HoustonWaterDamage />} />
            <Route path="/water-damage/katy" element={<KatyWaterDamage />} />
            <Route path="/water-damage/sugar-land" element={<SugarLandWaterDamage />} />
            <Route path="/water-damage/pearland" element={<PearlandWaterDamage />} />
            <Route path="/water-damage/the-woodlands" element={<TheWoodlandsWaterDamage />} />
            <Route path="/water-damage/cypress" element={<CypressWaterDamage />} />
            <Route path="/water-damage/spring" element={<SpringWaterDamage />} />
            <Route path="/water-damage/humble" element={<HumbleWaterDamage />} />
            <Route path="/water-damage/league-city" element={<LeagueCityWaterDamage />} />
            <Route path="/water-damage/missouri-city" element={<MissouriCityWaterDamage />} />
            <Route path="/water-damage/pasadena" element={<PasadenaWaterDamage />} />
            <Route path="/water-damage/baytown" element={<BaytownWaterDamage />} />
            <Route path="/water-damage/richmond" element={<RichmondWaterDamage />} />
            <Route path="/water-damage/tomball" element={<TomballWaterDamage />} />
            <Route path="/water-damage/conroe" element={<ConroeWaterDamage />} />
            <Route path="/water-damage/friendswood" element={<FriendswoodWaterDamage />} />

            {/* Fire Damage Location Pages */}
            <Route path="/fire-damage/houston" element={<HoustonFireDamage />} />
            <Route path="/fire-damage/katy" element={<KatyFireDamage />} />
            <Route path="/fire-damage/sugar-land" element={<SugarLandFireDamage />} />
            <Route path="/fire-damage/pearland" element={<PearlandFireDamage />} />
            <Route path="/fire-damage/the-woodlands" element={<TheWoodlandsFireDamage />} />
            <Route path="/fire-damage/cypress" element={<CypressFireDamage />} />
            <Route path="/fire-damage/spring" element={<SpringFireDamage />} />
            <Route path="/fire-damage/humble" element={<HumbleFireDamage />} />
            <Route path="/fire-damage/league-city" element={<LeagueCityFireDamage />} />
            <Route path="/fire-damage/missouri-city" element={<MissouriCityFireDamage />} />
            <Route path="/fire-damage/pasadena" element={<PasadenaFireDamage />} />
            <Route path="/fire-damage/baytown" element={<BaytownFireDamage />} />
            <Route path="/fire-damage/richmond" element={<RichmondFireDamage />} />
            <Route path="/fire-damage/tomball" element={<TomballFireDamage />} />
            <Route path="/fire-damage/conroe" element={<ConroeFireDamage />} />
            <Route path="/fire-damage/friendswood" element={<FriendswoodFireDamage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
