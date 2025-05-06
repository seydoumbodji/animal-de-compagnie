
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShelterSubmission from "./pages/ShelterSubmission";
import { ThemeProvider } from "next-themes";
import Mission from "./pages/Mission";
import HowToAdopt from "./pages/HowToAdopt";
import AdoptionTipsWrapper from "./pages/AdoptionTipsWrapper";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/soumettre-animal" element={<ShelterSubmission />} />
            <Route path="/notre-mission" element={<Mission />} />
            <Route path="/comment-adopter" element={<HowToAdopt />} />
            <Route path="/conseils-adoption" element={<AdoptionTipsWrapper />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
