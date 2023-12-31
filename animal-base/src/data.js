const data = [
  {
    fullname: "Mandu the amazing cat",
    age: 9,
  },
  {
    fullname: "Mia the black cat",
    age: 9,
  },
  {
    fullname: "Leeloo the growing dog",
    age: 1,
  },
  {
    fullname: "Toothless the trained dragon",
    age: 14,
  },
  {
    fullname: "ScoobyDoo the wondering dog",
    age: 58,
  },
  {
    fullname: "Horsey the horsing horse",
    age: 10,
  },
];

// eksporterer funktion med "Export" så vi kan bruge den senere
export function getData(){
    return data.map(animal =>{
        const [name, , trait, species] = animal.fullname.split(" ");

        return {
            name, 
            trait,
            species,
            age: animal.age,
        };
    });
}
