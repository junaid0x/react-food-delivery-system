import React from 'react';
import "./Home.css"
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Appdownload from '../../components/AppDownload/Appdownload';
import Exploremenu from '../../components/Explore Menu/Exploremenu';
import FoodDisplay from '../../components/Food Display/FoodDisplay';

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <Appdownload />

    </div>
  );
}

export default Home;
