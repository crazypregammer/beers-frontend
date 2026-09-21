import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
            axios.get('http://localhost:5005/api/beers')
            .then((res) => {
                setBeers(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }, [])
    const navigate = useNavigate();
         const deleteBeer = (beerId) => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios.delete(`http://localhost:5005/api/beers/${beerId}`)
      .then(() => {
        setBeers(beers.filter((beer) => beer._id !== beerId));
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        
      })
      .catch((err) => console.log(err));
  };  
  
    return (
        <div className="beers-container">
            {beers.map((beer) => {
                return(
                    <div key={beer._id} className="beer-card">
                        <h3>{beer.name}</h3>
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image} alt="" />
                        </Link>
                        <p><strong>Brand:</strong> {beer.brand}</p>
                        <p><strong>Style:</strong> {beer.style}</p>
                        <p><strong>ABV:</strong> {beer.abv}%</p>
                        <p><strong>IBU:</strong> {beer.ibu}</p>
                        <button onClick={() => navigate(`/beers/${beer._id}/edit`)}>Edit</button>
                        <button onClick={() => deleteBeer(beer._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage