import './App.css';
import { useState, useEffect } from 'react';
import { Superheros } from './Superheros.ts';
import SuperHerosData from './superherosData.json';

function App() {
  const [name, setName] = useState('Hoang');
  const [heroes, setHeroes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [sortOption, setSortOption] = useState('name');
  const [selectedHero, setSelectedHero] = useState(null); 

  useEffect(() => { 
    const heroesFromData = SuperHerosData.map((heroData) => new Superheros(heroData.id, heroData.name, heroData['id-api'], heroData.slug)); 
    setHeroes(heroesFromData); 
    setFilteredHeroes(heroesFromData);
  }, []);

  const ajouterPointExclamation = () => {
    setName(name + '!');
  };

  const remettreName = () => {
    setName('Hoang');
  }

  const handleSearch = () => {
    const filtered = heroes.filter(hero => hero.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredHeroes(filtered);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedHeroes = filteredHeroes.sort((a, b) => { 
    if(sortOption === "name") { 
      return a.name.localeCompare(b.name); 
    } else { 
      return a.id - b.id; 
    } 
  });

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const handleBackToList = () => {
    setSelectedHero(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Avec React: Hello {name}</h2>
      </header>
      <button onClick={ajouterPointExclamation}>Ajouter un point !</button>
      <button onClick={remettreName}>Remetrre name</button>

      <h1>Super Heroes App</h1> 
      <p>Nombre de super-héros chargés: {heroes.length}</p>
      <div>
        <input 
          type="text" 
          placeholder="Rechercher un super-héros" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>Rechercher</button>
      </div>
      
      <div>
        <label htmlFor="sort">Trier par: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="name">Trier par Nom</option>
          <option value="id">Trier par ID</option>
        </select>
      </div>

      {selectedHero ? (
        <div>
          <h2>{selectedHero.name}</h2>
          <p>Id: {selectedHero.idApi}</p>
          <p>Slug: {selectedHero.slug}</p>
          <img src={`https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/images/sm/${selectedHero.slug}.jpg`} alt={selectedHero.name} />
          <button onClick={handleBackToList}>Retour à la liste</button>
        </div>
      ) : (
        sortedHeroes.map((hero) => (
          <div key={hero.id} onClick={() => handleHeroClick(hero)}>
            <h2>{hero.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default App;