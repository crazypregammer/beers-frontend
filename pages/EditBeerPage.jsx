import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBeerPage() {
  const { beerId } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);
  const [description, setDescription] = useState("");

  // Load beer data
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/beers/${beerId}`)
      .then((res) => {
        const beer = res.data;
        setImage(beer.image);
        setName(beer.name);
        setBrand(beer.brand);
        setStyle(beer.style);
        setAbv(beer.abv);
        setIbu(beer.ibu);
        setDescription(beer.description);
      })
      .catch((error) => console.log(error));
  }, [beerId]);

  // Submit updated beer
  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBeer = {
      image,
      name,
      brand,
      style,
      abv,
      ibu,
      description,
    };

    axios
      .put(`http://localhost:5005/api/beers/${beerId}`, updatedBeer)
      .then(() => {
        navigate(`/beers/${beerId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Beer</h2>

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

      <button type="submit">Save changes</button>
      <button type="button" onClick={() => navigate(`/beers/${beerId}`)}>
        Cancel
      </button>
    </form>
  );
}

export default EditBeerPage;
