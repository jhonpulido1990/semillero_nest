import { name } from './01-types';

export const pokemonIds = [1,2,3,4,5,6,7,8,9,7];

pokemonIds.push(+'1')

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const Bulbasor: Pokemon = {
    id: 1,
    name: 'Bulbasor',
}

export const pokemons:Pokemon[]= [];

pokemons.push(1, 'string')
