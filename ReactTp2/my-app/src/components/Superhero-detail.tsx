import React, { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import { SuperHero } from './SuperHeros';
type Params = { 
    id: string; 
}; 

interface SuperheroDetailProps {
    heroes: SuperHero[];
}

const SuperheroDetail: React.FC<SuperheroDetailProps> = ({ heroes }) => {
    const { id } = useParams<Params>();
    const heroId = parseInt(id as string);
    const hero = heroes.find(hero => hero.id === heroId);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (!hero) {
          navigate('/error'); 
        }
    }, [hero, navigate]);

    if (!hero) {
    return null;
    }

    return (
        <div>
            <h2>Superhero Detail</h2>
            <div>
                <h3>{hero.name}</h3>
                <img src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${hero.slug}.jpg`} alt={hero.name} />
                <p>Id: {hero.id}</p>
                <p>Slug: {hero.slug}</p>
                <p>Intelligence: {hero.powerstats.intelligence}</p>
                <p>Strength: {hero.powerstats.strength}</p>
                <p>Speed: {hero.powerstats.speed}</p>
                <p>Durability: {hero.powerstats.durability}</p>
                <p>Power: {hero.powerstats.power}</p>
                <p>Combat: {hero.powerstats.combat}</p>
                <p>Gender: {hero.appearance.gender}</p>
                <p>Race: {hero.appearance.race}</p>
                <p>Height: {hero.appearance.height.join(', ')}</p>
                <p>Weight: {hero.appearance.weight.join(', ')}</p>
                <p>Eye Color: {hero.appearance.eyeColor}</p>
                <p>Hair Color: {hero.appearance.hairColor}</p>
                <p>Full Name: {hero.biography.fullName}</p>
                <p>Alter Egos: {hero.biography.alterEgos}</p>
                <p>Aliases: {hero.biography.aliases.join(', ')}</p>
                <p>Place of Birth: {hero.biography.placeOfBirth}</p>
                <p>First Appearance: {hero.biography.firstAppearance}</p>
                <p>Publisher: {hero.biography.publisher}</p>
                <p>Alignment: {hero.biography.alignment}</p>
                <p>Occupation: {hero.work.occupation}</p>
                <p>Base: {hero.work.base}</p>
                <p>Group Affiliation: {hero.connections.groupAffiliation}</p>
                <p>Relatives: {hero.connections.relatives}</p>
            </div>
            <button className="btn btn-primary btn-back" onClick = {() => window.history.back()}>Back</button>
        </div>
    );
};
  
export default SuperheroDetail;