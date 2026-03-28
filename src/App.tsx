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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
