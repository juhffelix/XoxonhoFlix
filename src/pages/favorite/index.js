import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';


const Favorite = () => {
  const [item, setItem] = useState(JSON.parse(localStorage.getItem('@list')) || []); 

  const removeMovie = (id) => {
    const updatedList = item.filter(movie => movie.id !== id);
    localStorage.setItem('@list', JSON.stringify(updatedList));
    setItem(updatedList); 
    toast.info("Filme removido da lista")
  };

  console.log(item);

  return (
    <div className="favorite-container">
      <h2>Favoritos</h2>
      <ul>
        {item.length > 0 ? (
          item.map((movie) => (
            <li key={movie.id}>
              <Link to={`/about/${movie.id}`}>
                <h3 className='title-m'>{movie.title}</h3>
              </Link>
              <button className='remove-button' onClick={() => removeMovie(movie.id)}>Excluir</button>
            </li>
          ))
        ) : (
          <p>Nenhum filme na lista de favoritos.</p>
        )}
      </ul>
    </div>
  );
};

export default Favorite;
