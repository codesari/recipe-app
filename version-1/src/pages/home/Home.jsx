import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from "../../assets/home.svg";
import Cards from "../../components/cards/Cards";

const Home = () => {
  //! env dosyasindan proces ile aldik
  //* env dosyasini gizlemek icin gitignore altinda misc'e .env ekliyoruz
  //? env dosyasinda yapilan her degisiklik icin projeyi yeniden baslatammiz gerekmektedir (yarn start)
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill the form...");
    }
  };
  console.log(recipes);

  return (
    <>
      <Header
        setQuery={setQuery}
        mealType={mealType}
        setMeal={setMeal}
        getData={getData}
        recipes={recipes}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}
      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </>
  );
};

export default Home;
