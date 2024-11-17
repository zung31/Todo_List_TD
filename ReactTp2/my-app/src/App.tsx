import React, { useState, useEffect } from 'react'; 
import { SuperHero } from './components/SuperHeros';  // Importation de notre classe SuperHero 
import SuperHerosData from './data/SuperHeros.json';  // Importation du fichier JSON 
import './App.css';
import SuperheroList from './components/Superhero-list';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'; 
import SuperheroDetail from './components/Superhero-detail';
import About from './components/About';
import Error from './components/Error';
import { Home } from './components/Home';
 
const Navigation = () => ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container-fluid"> 
            <Link className="navbar-brand" to="/">Home</Link> 
            <div className="collapse navbar-collapse"> 
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li className="nav-item"> 
                        <Link className="nav-link" to="/about">About Page</Link> 
                    </li> 
                    <li className="nav-item"> 
                        <Link className="nav-link" to="/error">Error Page</Link> 
                    </li> 
                </ul> 
            </div> 
        </div> 
    </nav> 
);

export const App = () => { 
    const [heroes, setHeroes] = useState<SuperHero[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('name');
    const [selectedHero, setSelectedHero] = useState<SuperHero | null>(null);
    const [filteredHeroes, setFilteredHeroes] = useState<SuperHero[]>([]); 
    const [powerStats, setPowerStats] = useState({
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    });
  
    useEffect(() => { 
      const heroesFromData = SuperHerosData.map((heroData) => new SuperHero(heroData.id, heroData.name, heroData.slug, heroData.powerstats, heroData.appearance, heroData.biography, heroData.work, heroData.connections, heroData.images)); 
      setHeroes(heroesFromData); 
      setFilteredHeroes(heroesFromData); 
    }, []);

    const handleSearch = () => {
      const filtered = heroes.filter(hero => {
        const matchesName = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPowerStats = Object.keys(powerStats).every(stat => {
          if (powerStats[stat as keyof typeof powerStats] === '') return true;
          return hero.powerstats[stat as keyof typeof hero.powerstats] >= parseInt(powerStats[stat as keyof typeof powerStats]);
        });
        return matchesName && matchesPowerStats;
      });
      setFilteredHeroes(filtered);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event.target.value);
    };

    const handlePowerStatsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setPowerStats(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const sortedHeroes = filteredHeroes.sort((a: SuperHero, b: SuperHero) => { 
      if(sortOption === "name") { 
        return a.name.localeCompare(b.name); 
      } else { 
        return a.id - b.id; 
      } 
    });

    return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navigation />
        <div className= "container">
          <h1>Super Heroes App</h1>
          <Routes>
            <Route path="/" element={<Home 
              heroes={sortedHeroes} 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
              powerStats={powerStats} 
              handlePowerStatsChange={handlePowerStatsChange} 
              handleSearch={handleSearch} 
              sortOption={sortOption} 
              handleSortChange={handleSortChange} 
              sortedHeroes={sortedHeroes} 
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:id" element={<SuperheroDetail heroes={heroes} />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </Router>
    );
}    