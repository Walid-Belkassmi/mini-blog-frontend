import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import H1 from "../Components/H1";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import Obligation from "../Components/Obligation";

import { newArticle } from "../API/Articles";

const NewArticle = () => {
  const [pseudo, setPseudo] = useState("Anonyme");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const { slug } = useParams();
  const navigate = useNavigate();

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const handleTitreChange = (e) => {
    setTitre(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = {
      Auteur: pseudo,
      Titre: titre,
      Description: description,
    };

    const Data = await newArticle(article, slug);

    if (Data) {
      setErrors(Data);
      setPseudo("Anonyme");
      setTitre("");
      setDescription("");
    } else {
      navigate(`/${slug}`);
    }
  };

  return (
    <>
      <H1>NewArticle</H1>
      <form onSubmit={handleSubmit} className="flex clmn aic g-30">
        <Input
          label="Pseudo"
          type="text"
          value={pseudo}
          placeholder="Pseudo..."
          handleChange={handlePseudoChange}
          error={errors.filter((error) => error.param === "Auteur")}
        />

        <Input
          label="Titre"
          type="text"
          value={titre}
          placeholder="Titre..."
          handleChange={handleTitreChange}
          required
          error={errors.filter((error) => error.param === "Titre")}
        />

        <TextArea
          label="Descrtiption"
          value={description}
          placeholder="Description..."
          handleChange={handleDescriptionChange}
          required
          error={errors.filter((error) => error.param === "Description")}
        />

        <Button type="submit" disabled={!titre || !description} text="Submit" />

        <Obligation />
      </form>
    </>
  );
};

export default NewArticle;
