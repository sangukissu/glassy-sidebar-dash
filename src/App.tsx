
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/contexts/SidebarContext";
import DashboardLayout from "@/components/DashboardLayout";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import AITools from "./pages/AITools";
import Templates from "./pages/Templates";
import Create from "./pages/Create";
import Extensions from "./pages/Extensions";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<Landing />} />
            
            {/* Dashboard and protected routes */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/gallery" element={<DashboardLayout><Gallery /></DashboardLayout>} />
            <Route path="/ai-tools" element={<DashboardLayout><AITools /></DashboardLayout>} />
            <Route path="/templates" element={<DashboardLayout><Templates /></DashboardLayout>} />
            <Route path="/create" element={<DashboardLayout><Create /></DashboardLayout>} />
            <Route path="/extensions" element={<DashboardLayout><Extensions /></DashboardLayout>} />
            <Route path="/downloads" element={<DashboardLayout><Downloads /></DashboardLayout>} />
            <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
