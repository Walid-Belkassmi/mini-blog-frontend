import { useEffect, useState } from "react";
import H1 from "../components/H1";
import CategorieCard from "../components/CategorieCard";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const categorie = await fetch("http://localhost:5000/categories");
    const response = await categorie.json();

    setCategories(response);
  };
  return (
    <>
      <H1>Home</H1>
      <section>
        {categories.map((categorie) => {
          return <CategorieCard categorie={categorie} key={categorie.name} />;
        })}
      </section>
    </>
  );
};

export default Home;
