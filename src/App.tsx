import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <TopNews />
        <LatestNews />
      </div>
    </>
  );
}

export default App;
