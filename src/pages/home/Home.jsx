import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "26cd5523";
  const APP_KEY = "77c512afa5750768a43ab70499ce212b	";
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    const { data } = await axios(url);
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Header setQuery={setQuery} />;
};

export default Home;
