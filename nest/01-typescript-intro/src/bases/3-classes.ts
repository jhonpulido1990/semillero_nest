import axios from 'axios';
import { Pokeapi } from '../interfaces/pokeapi-response.interfaces';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

  constructor(public readonly id: number, public name: string) {}

  screem() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }
  speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  async getMovies() {
    const { data } = await axios.get<Pokeapi>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);
    return data.moves;

  }
}

export const Charmander = new Pokemon(4, "charmander");
console.log(Charmander.imageUrl);

Charmander.screem();
Charmander.speak();
Charmander.getMovies();