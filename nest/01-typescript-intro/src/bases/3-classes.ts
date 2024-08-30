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
}

export const Charmander = new Pokemon(4, "charmander");
console.log(Charmander.imageUrl);

Charmander.screem();
Charmander.speak();
