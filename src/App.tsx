import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RestorationService from "./pages/RestorationService";
import RoofingService from "./pages/RoofingService";
import EpoxyFlooringService from "./pages/EpoxyFlooringService";
import HvacService from "./pages/HvacService";
import GlassService from "./pages/GlassService";
import AsphaltService from "./pages/AsphaltService";

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
          <Route path="/services/roofing" element={<RoofingService />} />
          <Route path="/services/epoxy-flooring" element={<EpoxyFlooringService />} />
          <Route path="/services/hvac-electrical-plumbing" element={<HvacService />} />
          <Route path="/services/custom-glass" element={<GlassService />} />
          <Route path="/services/asphalt" element={<AsphaltService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
