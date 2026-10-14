import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { QueryForm } from "./components/QueryForm";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "./pages/About";
import { CallForPapers } from "./pages/CallForPapers";
import { Committee } from "./pages/Committee";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ImportantDates } from "./pages/ImportantDates";
import { NotFound } from "./pages/NotFound";
import { Registration } from "./pages/Registration";
import { Speakers } from "./pages/Speakers";
import { Venue } from "./pages/Venue";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <QueryForm />
      <Footer />
    </div>
  );
}

export default App;
