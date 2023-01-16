import React from "react";
import {
  Container,
  HomeForm,
  HomeH1,
  HomeInput,
  HomeSelect,
  SearchButton,
} from "./HomeStyled";
import { Flex } from "../../components/global/Flex";

const Home = () => {
  return (
    <Container>
      <Flex>
        <div>
          <HomeH1>Healty Food Recipes</HomeH1>
        </div>

        <HomeForm>
          <div>
            <HomeInput />
            <SearchButton>SEARCH</SearchButton>
            <HomeSelect></HomeSelect>
          </div>
        </HomeForm>
      </Flex>
    </Container>
  );
};

export default Home;
