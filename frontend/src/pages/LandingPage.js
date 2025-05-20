import React from "react";
import { Link } from "react-router-dom";
import FluensLogo from "../components/FluensLogo";
import { useTheme } from "../context/ThemeContext";

const features = [
  {
    icon: "⚡",
    title: "Snel en Eenvoudig",
    description: "Automatiseer je financiële workflows in een handomdraai met ons intuïtieve platform."
  },
  {
    icon: "🔒",
    title: "Veilig en Betrouwbaar",
    description: "Jouw gegevens zijn veilig met geavanceerde versleuteling en beveiligingsprotocollen."
  },
  {
    icon: "🔄",
    title: "Naadloze Integraties",
    description: "Makkelijk verbonden met je bestaande financiële systemen en tools."
  }
];

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3576C9] to-blue-600 dark:from-fluens-dark-blue dark:to-blue-900 text-white transition-colors">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FluensLogo size={40} />
            <span className="ml-3 text-2xl font-bold">fluens</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-200 transition">Functies</a>
            <a href="#over-ons" className="hover:text-blue-200 transition">Over Ons</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link to="/login" className="px-4 py-2 font-medium hover:text-blue-200 transition">Inloggen</Link>
            <Link
              to="/register"
              className="bg-white text-[#3576C9] px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Start Nu
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Automatiseer Je Financiële<br className="hidden md:block" /> Workflows met <span className="text-blue-100">Fluens</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
          Eenvoudige automatisering voor complexe financiële processen. Bespaar tijd en verhoog je efficiëntie.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/register" 
            className="bg-white text-[#3576C9] px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition shadow-lg transform hover:scale-105"
          >
            Gratis Proberen
          </Link>
          <Link 
            to="/" 
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition"
          >
            Demo Bekijken
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom kiezen voor Fluens?</h2>
            <div className="w-24 h-1 bg-[#3576C9] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl hover:shadow-lg transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#3576C9]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2c5fb3] to-[#3d8ae8] dark:from-fluens-dark-blue dark:to-blue-900 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Meld je vandaag nog aan en ontdek hoe eenvoudig financiële automatisering kan zijn.
          </p>
          <Link 
            to="/register" 
            className="inline-block bg-white text-[#3576C9] px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition shadow-lg transform hover:scale-105"
          >
            Start Nu Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2d5a] dark:bg-gray-900 text-white py-12 transition-colors">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <FluensLogo size={32} />
              <span className="ml-3 text-xl font-bold">fluens</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">Functies</a></li>
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">Prijzen</button></li>
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">API</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Bedrijf</h4>
                <ul className="space-y-2">
                  <li><a href="#over-ons" className="text-blue-200 hover:text-white transition-colors">Over Ons</a></li>
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">Blog</button></li>
                  <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Juridisch</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">Privacy</button></li>
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">Voorwaarden</button></li>
                  <li><button onClick={() => {}} className="text-blue-200 hover:text-white transition-colors text-left">Cookiebeleid</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 dark:border-blue-700 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Fluens. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
