export interface PowerStats { 
    intelligence: number; 
    strength: number; 
    speed: number; 
    durability: number; 
    power: number; 
    combat: number;
}

export interface Appearance {
    gender: string;
    race: string | null;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
}

export interface Biography {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string | null;
    alignment: string;
}

export interface Work {
    occupation: string;
    base: string;
}

export interface Connections {
    groupAffiliation: string;
    relatives: string;
}

export interface Images {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}

export class SuperHero { 
    id: number; 
    name: string; 
    slug: string; 
    powerstats: PowerStats; 
    appearance: Appearance;
    biography: Biography;
    work: Work;
    connections: Connections;
    images: Images;

    constructor(
        id: number, 
        name: string, 
        slug: string, 
        powerstats: PowerStats, 
        appearance: Appearance, 
        biography: Biography, 
        work: Work, 
        connections: Connections, 
        images: Images
    ) { 
        this.id = id; 
        this.name = name; 
        this.slug = slug; 
        this.powerstats = powerstats;
        this.appearance = appearance;
        this.biography = biography;
        this.work = work;
        this.connections = connections;
        this.images = images;
    } 
}