import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Loading Overlay */}
      <div id="loadingOverlay" className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-12 w-12 text-primary-600 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-xl text-gray-800 font-medium">Loading CreativeWorld...</p>
        </div>
      </div>

      {/* Header Component */}
      <Header />


      {/* Hero Component */}
      <Hero />

      {/* Search Bar Component */}
      <SearchBar />
    </div>
  );
}

export default App;
