const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// const idEvenCheck = pokémon.filter((poke)=>{
//     return poke.id%3==0;
// })
// console.log(idEvenCheck)

// const arrayFireType= pokémon.filter((poke)=>{
//     return poke.types =="fire";
// })
// console.log(arrayFireType)

// const arrayMoreThanType= pokémon.filter((poke)=>{
//     return poke.types.length > 1;
// })
// console.log(arrayMoreThanType)

// const arrayNames= pokémon.map((poke)=>{
//     return poke.name;
// })
// console.log(arrayNames)

// const arrayNamesGreaterthan99= pokémon.filter((poke) => poke.id > 99).map((poke) => poke.name)
// console.log(arrayNamesGreaterthan99)

// const arrayNamestypepoison= pokémon.filter((poke) => poke.types == "poison").map((poke) => poke.name)
// console.log(arrayNamestypepoison)

// const arrayNamestypepoison= pokémon.filter((poke) => poke.types == "poison").map((poke) => poke.name)
// console.log(arrayNamestypepoison)

// const countNormal = pokémon.filter((poke)=>{
//     let count = 0;
//     if(poke.types == "normal"){
//         count++
//     }
//     return count;

// })

// console.log(countNormal);