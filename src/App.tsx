
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { ScrollToTop } from "@/components/ScrollToTop";
import CategoryPage from "@/pages/CategoryPage";
import ComponentDetail from "@/pages/ComponentDetail";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import { AuthProvider } from "@/context/AuthContext";

// Import CSS
import "./App.css";
import "./styles/button-previews.css";
import "./styles/components/buttons/social-buttons-card.css";
import "./styles/components/buttons/functional-buttons.css";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/components/:category" element={<CategoryPage />} />
            <Route
              path="/components/:category/:id"
              element={<ComponentDetail />}
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
          <Toaster position="bottom-right" />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
