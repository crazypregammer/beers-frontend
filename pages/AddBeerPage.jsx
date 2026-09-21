import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);
  const [description, setDescription] = useState("");
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      image,
      name,
      brand,
      style,
      abv,
      ibu,
      description
    };

    axios
      .post("http://localhost:5005/api/beers", newBeer)
      .then((res) => {
        navigate("/beers");
        console.log("Beer created:", res.data);

        // Opcional: limpiar formulario
        setImage("");
        setName("");
        setBrand("");
        setStyle("");
        setAbv(0);
        setIbu(0);
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Brand</label>
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />

      <label>Style</label>
      <input
        type="text"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />

      <label>Abv</label>
      <input
        type="number"
        value={abv}
        onChange={(e) => setAbv(e.target.value)}
      />

      <label>Ibu</label>
      <input
        type="number"
        value={ibu}
        onChange={(e) => setIbu(e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddBeerPage;
