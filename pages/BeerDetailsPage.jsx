import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function BeerDetailsPage() {
    const [beer, setBeer] = useState({});
    const { beerId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5005/api/beers/${beerId}`)
        .then((res) => {
            setBeer(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [beerId])

    
    return(
        <div>
            <img src={beer.image} alt="" />
            <h2>Name: {beer.name}</h2>
            <p>Brand: {beer.brand}</p>
            <p>Style: {beer.style}</p>
            <p>Abv: {beer.abv}</p>
            <p>Ibu: {beer.ibu}</p>
            <p>Description: {beer.description}</p>
            <button onClick={() => {navigate("/beers")}}>Back</button>
        </div>
    )
}

export default BeerDetailsPage;