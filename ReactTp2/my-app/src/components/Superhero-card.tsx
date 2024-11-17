import React from 'react';
import { SuperHero } from './SuperHeros';

interface SuperheroCardProps {
    hero: SuperHero; // Ensure the type passed is a SuperHero
}

const SuperheroCard: React.FC<SuperheroCardProps> = ({ hero }) => {
  return (
    <div className="card card-custom mt-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`} className="img-fluid rounded-start" alt={hero.name} />
            </div>
            <div className="col-md-8">
                <div className="card-body card-body-custom">
                    <h5 className="card-title">{hero.name}</h5>
                    <p className="card-text">Id: {hero.id}</p>
                    <p className="card-text">Slug: {hero.slug}</p>
                    <p className="card-text">Intelligence: <span className="badge bg-primary">{hero.powerstats.intelligence}</span></p>
                    <p className="card-text">Strength: <span className="badge bg-success">{hero.powerstats.strength}</span></p>
                    <p className="card-text">Speed: <span className="badge bg-warning text-dark">{hero.powerstats.speed}</span></p>
                    <p className="card-text">Durability: <span className="badge bg-danger">{hero.powerstats.durability}</span></p>
                    <p className="card-text">Power: <span className="badge bg-info text-dark">{hero.powerstats.power}</span></p>
                    <p className="card-text">Combat: <span className="badge bg-secondary">{hero.powerstats.combat}</span></p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SuperheroCard