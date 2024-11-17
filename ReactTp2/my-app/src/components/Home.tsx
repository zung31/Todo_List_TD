import SuperheroList from "./Superhero-list";
import { SuperHero } from "./SuperHeros";

interface HomeProps {
    heroes: SuperHero[];
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    powerStats: {
      intelligence: string;
      strength: string;
      speed: string;
      durability: string;
      power: string;
      combat: string;
    };
    handlePowerStatsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    sortOption: string;
    handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    sortedHeroes: SuperHero[];
  }

export const Home: React.FC<HomeProps> = ({ heroes, searchQuery, setSearchQuery, powerStats, handlePowerStatsChange, handleSearch, sortOption, handleSortChange, sortedHeroes }) => {
    return (
    <div className= "container">
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <input className= "input-name"
            type="text" 
            placeholder="Rechercher un super-héros" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Intelligence:</label>
                        <input className="form-control"
                            type="number" 
                            name="intelligence" 
                            value={powerStats.intelligence} 
                            onChange={handlePowerStatsChange} />
                    </div>
                    <div className="form-group">
                        <label>Strength:</label>
                        <input className="form-control"
                            type="number" 
                            name="strength" 
                            value={powerStats.strength} 
                            onChange={handlePowerStatsChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <label>Speed:</label>
                        <input className="form-control"
                            type="number" 
                            name="speed" 
                            value={powerStats.speed} 
                            onChange={handlePowerStatsChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Durability:</label>
                        <input className="form-control"
                            type="number" 
                            name="durability" 
                            value={powerStats.durability} 
                            onChange={handlePowerStatsChange} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Power:</label>
                        <input className="form-control"
                            type="number" 
                            name="power" 
                            value={powerStats.power} 
                            onChange={handlePowerStatsChange} />
                    </div>
                    <div className="form-group">
                        <label>Combat:</label>
                        <input className="form-control"
                            type="number" 
                            name="combat" 
                            value={powerStats.combat} 
                            onChange={handlePowerStatsChange} 
                        />
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Rechercher</button>
        </form>
          
        <SuperheroList heroes={sortedHeroes} />
    </div>);
};