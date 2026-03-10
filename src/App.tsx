import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RestorationService from "./pages/RestorationService";
import FireRestorationService from "./pages/FireRestorationService";
import RoofingService from "./pages/RoofingService";
import HvacService from "./pages/HvacService";
import ElectricalService from "./pages/ElectricalService";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
