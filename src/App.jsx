import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./companents/Navbar";
import Home from "./companents/Home";
import Footer from "./companents/Footer";
import context from "./context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import language from "./lang/language"
import Card from "./UI/Card";
import DataItem from "./companents/Home/DataItem";
const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const baseURL = "https://restcountries.com/v2/all";
  const searchURL = "https://restcountries.com/v2/name";
  async function getAllData() {
    const response = await fetch(baseURL);
    const result = await response.json();
    setData(result);
  }
  const searchData = async (text) => {
    const response = await fetch(`${searchURL}/${text}`);
    const result = await response.json();
  
    console.log(result);
    if (result.status === 404) {
      setTimeout(() => {
        toast.error("404 NOT FOUND");
      }, 2000);
    } else {
      setData(result);
      setTimeout(() => {
        toast.success("Succesfull");
      }, 500);
    }
  };
  data.forEach((e) => {
    if (!category.includes(e.region)) {
      setCategory(category.push(e.region))
    }
  });
  useEffect(() => {
    getAllData();
  }, []);
  const [lang, setLang] = useState('uz')
  
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, settotalPage] = useState(10)
  const firstPage = currentPage * totalPage;
  const lastPage = firstPage - totalPage;  
  const secondData = data;
  const lastData = secondData.slice(lastPage, firstPage);
  


  const pageN = (id) => {
    setCurrentPage(id)
  }
// console.log(currentPage);
  return (
    <>
      <context.Provider
        value={{
          data,
          category,
          searchData,
          language,
          setLang,
          lang,
          secondData,
          lastData,
          totalPage,
          pageN,
        }}
      >
        <Navbar data={language} lang={lang} setLang={setLang} />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:name" element={<DataItem/>}></Route>
          </Routes>
        </main>

        <Footer />
      </context.Provider>
      <ToastContainer />
    </>
  );
};

export default App;
