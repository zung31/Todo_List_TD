import React from 'react';
import { SuperHero } from './SuperHeros'; 
import SuperheroCard from './Superhero-card'; 
import { useNavigate } from 'react-router-dom'; 

interface SuperheroListProps {
  heroes: SuperHero[]; 
}

const SuperheroList: React.FC<SuperheroListProps> = ({ heroes }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/about/${id}`);
  };

  return (
    <div className="row">
      {heroes.map((hero) => (
        <div className="col-md-4" key={hero.id} onClick={() => handleCardClick(hero.id)}>
          <SuperheroCard hero={hero} />
        </div>
      ))}
    </div>
  );
};

export default SuperheroList;