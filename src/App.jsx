import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogData } = useContext(AppContext);

  useEffect(() => {
    fetchBlogData();
  }, []);
  return (
    <div className="">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
