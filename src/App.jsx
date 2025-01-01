import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageTop from "./components/PageTop";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <PageTop />
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
