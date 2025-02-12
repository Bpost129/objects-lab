// ! Do not touch, or pay any attention to this line!!
import pokemon from "./data.js"
// ! Remember, the above line doesn't exist!! Please ignore it!

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

/* ----------------------------------------------------------------------------
Exercise One

This exercise has been completed for you.

Add a difficulty property to the game object above.
Give it a value of your choice.

---------------------------------------------------------------------------- */
// Solve Exercise One here:

game.difficulty = "Hard"

/* ----------------------------------------------------------------------------
Exercise Two

Spend some time inspecting the pokemon data we magically have access to in the
`pokemon` array that is being logged below. You have not seen this console
method before, but we're using it here so that you're able to see all of the
pokemon in the console. By default, only the first 100 items in an array are
shown - we're overriding that behavior here.

Take note of the shape of the data here. Each pokemon object in the array has:
- a number, which is a number between 1 and 151
- a name, which is a string
- a type, which is a string
- hp (hit points), which is a number
- a starter boolean.

There's some game-specific terminology here, so if you've never played pokemon
here's a quick primer on what these mean:
- All pokemon have a number that acts as a unique identifier
- All pokemon have a type that indicates their primary abilities. Pokemon 
  generally have multiple types, but we're only using a pokemon's primary type 
  here to make working with this data more manageable.
- All pokemon have hit points - essentially a quantitative measure of a 
  pokemon's constitution.
- At the start of a game, a player must select a starting pokemon. Acceptable 
  starting pokemon objects will have a starter property with a value set to 
  true. Four pokemon fit this criterion:
  - Pokemon 1: Bulbasaur
  - Pokemon 4: Charmander
  - Pokemon 7: Squirtle
  - Pokemon 25: Pikachu

When you've completed your inspection of the data, you can comment out the
console.dir method and use the console.log method to log JUST the name of the 
Pokemon with the number 59 using the index of the Pokemon in the array you 
observed. Feel free to uncomment the console.dir as needed to help you 
complete the rest of the lab.

---------------------------------------------------------------------------- */
// Solve Exercise Two here:

console.log("name: " + pokemon[141].name + " type: " + pokemon[141].type + " hp: " + pokemon[141].hp)

// console.dir(pokemon, { maxArrayLength: null })

/* ----------------------------------------------------------------------------
Exercise Three

Uncomment the console log in Exercise Three.
Take a moment to familiarize yourself with the `game` object being logged.
It has three properties: party, gyms, and items. All of these hold or will
hold an array of objects.

Note in a full-fledged application, this game object would likely be broken up
into many smaller objects with more specific jobs - we're using one object here
for simplicity and utility to ease your learning experience.

- As you move through the exercises game.party will hold an array of pokemon 
  objects that will be retrieved from the `pokemon` array discussed in Exercise
  Two. These are pokemon that you have caught!
- game.gyms holds an array of objects, each representing a gym in the game.
  (gyms are essentially checkpoints placed throughout the game). Note the 
  `completed` boolean property on each, this will be important later.
- game.items holds an array of objects, each representing an item held in an
  player inventory.

When you've completed your inspection of the data, you can comment out the
console.log and move on to Exercise Four. Feel free to uncomment the
console.log as needed to help you complete the rest of the lab.

---------------------------------------------------------------------------- */
// Solve Exercise Three here:

// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Four

Select a pokemon from the `pokemon` data with a starter property value set to 
`true` and add it to the `game.party` array. 

---------------------------------------------------------------------------- */
// Solve Exercise Four here:

game.party.push(pokemon[0])
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Five

Select three more pokemon of your choice from the `pokemon` data and add them 
to the `game.party` array.

---------------------------------------------------------------------------- */
// Solve Exercise Five here:

game.party.push(pokemon[58], pokemon[100], pokemon[129])
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Six

Sort the pokemon in the `game.party` by their total hit points (`hp`) in
descenting order from the greatest to the least.

---------------------------------------------------------------------------- */
// Solve Exercise Six here:

game.party.sort((a,b) => {
  return a.hp - b.hp
})
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Seven

Complete the gyms that have a difficulty below 3 (change the value of
`complete` in the qualifying objects from false to true).

---------------------------------------------------------------------------- */
// Solve Exercise Seven here:

game.gyms.map(gym => {
  if (gym.difficulty < 3) return gym.completed = true
})
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Eight

Evolve the starting pokemon that you picked out in Exercise Four.

Hint: 
- Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
- Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
- Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
- Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter pokemon will be *replaced* in your party with
            the pokemon that it evolved into.

---------------------------------------------------------------------------- */
// Solve Exercise Eight here:

game.party.splice(1, 1, pokemon[1])
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Nine

Print out the name of each pokemon in your party.

---------------------------------------------------------------------------- */
// Solve Exercise Nine here:

// game.party.forEach(poke => {
//   console.log(poke.name)
// })

/* ----------------------------------------------------------------------------
Exercise Ten

Print out the name of every starter pokemon.

---------------------------------------------------------------------------- */
// Solve Exercise Ten here:

// pokemon.forEach(poke => {
//   console.log(poke.name)
// })

/* ----------------------------------------------------------------------------
Exercise Eleven

Add a method called `catchPokemon` to the `game` object. This method should:
- Accept an object on a parameter called `pokemonObj`
- Add the `pokemonObj` to the `game.party` array.
- not return anything

After writing this method, make use of it by calling it and passing in a 
pokemon object of your choice from the `pokemon` data to catch it.

---------------------------------------------------------------------------- */
// Solve Exercise Eleven here:

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
}

game.catchPokemon(pokemon[62])
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Twelve

Copy the `catchPokemon` method that you just wrote above, and paste it below.
Modify it so that the quantity of pokeballs in the `items` array decrements 
by one each time the method is called, and a pokemon is caught.

For the purposes of this exercise, it's ok to have a negative number of
pokeballs.

After updating the method, make use of it by calling it and passing in a 
pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being
decremented.

---------------------------------------------------------------------------- */
// Solve Exercise Twelve here:

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj)
  game.items[1].quantity -= 1
}

game.catchPokemon(pokemon[82])
// console.log(game)
/* ----------------------------------------------------------------------------
Exercise Thirteen

Complete the gyms that have a difficulty below 6 (change the value of
`complete` in the qualifying objects from false to true).

---------------------------------------------------------------------------- */
// Solve Exercise Thirteen here:

game.gyms.map(gym => {
  if (gym.difficulty < 6) return gym.completed = true
})
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Fourteen

Add a method called `gymStatus` to the `game` object. This method should:
- Not accept any arguments
- Iterate through the objects in the `game.gyms` array and create 
  an object with two properties: 
  - One property, `completed`, should count how many gyms in the array have a
    value of `true` for their `completed` property. 
  - The second property, `incomplete`, should count how many gyms in the array
    have a value of `false` for their `completed` property.
- After creating the object, its final value should be console logged
- The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed`
property and three gym objects have a value of `false` on their `completed` 
property, the logged value would be: `{ completed: 5, incomplete: 3 }`.


---------------------------------------------------------------------------- */
// Solve Exercise Fourteen here:

game.gymStatus = () => {
  const gymStats = {
    completed: 0,
    incomplete: 0
  }

  game.gyms.forEach(gym => {
    if (gym.completed) gymStats.completed += 1
    else gymStats.incomplete += 1
  })

  console.log(gymStats)
}

game.gymStatus()

/* ----------------------------------------------------------------------------
Exercise Fifteen

Add a method called `partyCount` to the `game` object. This method should:
- Not accept any arguments
- Count the number of pokemon in the party
- return the found number of pokemon in the party

---------------------------------------------------------------------------- */
// Solve Exercise Fifteen here:

game.partyCount = () => {
  const count = game.party.reduce((prev, poke) => {
    return prev += 1
  }, 0)
  console.log("party count: " + count)
  return count
}

game.partyCount()

// console.log(game)
/* ----------------------------------------------------------------------------
Exercise Sixteen

Complete the gyms that have a difficulty below 8 (change the value of
`complete` in the qualifying objects from false to true).

---------------------------------------------------------------------------- */
// Solve Exercise Sixteen here:

game.gyms.map(gym => {
  if (gym.difficulty < 8) return gym.completed = true
})
// console.log(game)

/* ----------------------------------------------------------------------------
Exercise Seventeen

Print the `game` object.

---------------------------------------------------------------------------- */
// Solve Exercise Seventeen here:

// console.log(game)

// ------------------- 🚀🚀🚀🚀🚀🚀 LEVEL UP 🚀🚀🚀🚀🚀🚀 ------------------- //
// Everything in the lab past this point is OPTIONAL. You are NOT REQUIRED 
// to finish the below exercises to get full credit for this lab!

/* ----------------------------------------------------------------------------
Exercise Eighteen - OPTIONAL LEVEL UP 🚀

Add a new property to the `game` object called `collection` and initialize its
value to an empty array.

Copy the `catchPokemon` method that you wrote in Exercise Twelve, and paste 
it below. Modify it so that:
- Ensure that no more than six pokemon can be in the party at any given time. 
  Excess pokemon should be placed in the `game.collection` array.
- It's up to you how to distribute pokemon in a situation where more than six 
  would be placed into the `game.party` array.

Again, for the purposes of this exercise, it's ok to have a negative number of
pokeballs.

After updating the method, make use of it by calling it and passing in a 
pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being
decremented.

---------------------------------------------------------------------------- */
// Solve Exercise Eighteen here:

game.collection = []

game.catchPokemon = (pokemonObj) => {
  if (game.party.length === 6) {
    game.party.push(pokemonObj)
    const addition = game.party.shift()
    game.collection.push(addition)
  } else {
    game.party.push(pokemonObj)
  }

  game.items[1].quantity -= 1
}

game.catchPokemon(pokemon[90])
game.catchPokemon(pokemon[103])
// console.log(game)





// game.collection = [];

// game.catchPokemon = function(pokemonObj){
//   if (game.party.length <= 6) {
//     game.party.push(pokemonObj)
//   } 

//   if (game.party.length === 7) {
//     game.party.sort(function (a, b) {
//       return b.hp - a.hp
//     })
//     game.collection.push(game.party.pop())
//   }
//   game.items[1].quantity -= 1
// }

// game.catchPokemon(pokemon[39])
// console.log(game.items)

/* ----------------------------------------------------------------------------
Exercise Nineteen - OPTIONAL LEVEL UP 🚀

Copy the `catchPokemon` method that you just wrote above, and paste it below.
The time has come to make it so that we cannot catch a pokemon when we do not 
have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be 
displayed that there are not enough pokeballs to catch the desired pokemon.
Also ensure that the pokemon isn't added to the `game.party` or the 
`game.collection`.

---------------------------------------------------------------------------- */
// Solve Exercise Nineteen here:


game.catchPokemon = (pokemonObj) => {
  if (game.items[1].quantity > 0) {
    if (game.party.length === 6) {
      game.party.push(pokemonObj)
      const addition = game.party.shift()
      game.collection.push(addition)
    } else {
      game.party.push(pokemonObj)
    }
    game.items[1].quantity -= 1
  } else {
    console.log('You don\'t have any pokeballs!')
  }
}

game.catchPokemon(pokemon[135])
// console.log(game)





// game.catchPokemon = function(pokemonObj){
//   if (game.items[1].quantity === 0) {
//     console.log("You have no more pokeballs!")
//   } else {
//     if (game.party.length <= 6) {
//       game.party.push(pokemonObj)
//     } 
  
//     if (game.party.length === 7) {
//       game.party.sort(function (a, b) {
//         return b.hp - a.hp
//       })
//       game.collection.push(game.party.pop())
//     }
//     game.items[1].quantity -= 1
//   }
  
// }

/* ----------------------------------------------------------------------------
Exercise Twenty - OPTIONAL LEVEL UP 🚀

Copy the `catchPokemon` method that you just wrote above, and paste it below.
Modify is so that you can just pass in the name of a pokemon instead of an 
entire object and the method will look up the pokemon from the data set for you.

The string that is passed in should be allowed to be any case (for example if 
the string 'PiKacHU' is passed to the function it should match to 'Pikachu' in
the data set). 

If there is not a match then return a string noting that the selected pokemon
does not exist. Ensure you do not decrement the pokeball count if an invalid
pokemon name is passed in, and also ensure that the pokemon isn't added to the
`game.party` or the `game.collection`.

---------------------------------------------------------------------------- */
// Solve Exercise Twenty here:


game.catchPokemon = (poke) => {
  const pokemonObj = pokemon.find(mon => {
    return mon.name.toLowerCase() === poke.toLowerCase()
  })

  if (!pokemonObj) {
    console.log('Pokemon does not exist')
    return
  }

  if (game.items[1].quantity > 0) {
    if (game.party.length === 6) {
      game.party.push(pokemonObj)
      const addition = game.party.shift()
      game.collection.push(addition)
    } else {
      game.party.push(pokemonObj)
    }
    game.items[1].quantity -= 1
  } else {
    console.log('You don\'t have any pokeballs!')
  }
}


game.catchPokemon('niTe')
console.log(game)




// game.catchPokemon = function(pokemonObj){
//   if (game.items[1].quantity === 0) {
//     console.log("You have no more pokeballs!")
//   } else {
//     if (game.party.length <= 6) {
//       game.party.push(pokemonObj)
//     } 
  
//     if (game.party.length === 7) {
//       game.party.sort(function (a, b) {
//         return b.hp - a.hp
//       })
//       game.collection.push(game.party.pop())
//     }
//     game.items[1].quantity -= 1
//   }
  
// }

/* ----------------------------------------------------------------------------
Exercise Twenty-One - OPTIONAL LEVEL UP 🚀

Dynamically construct an object with the existing `pokemon` data sorted by the 
different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80,starter: false },
    * more grass type pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type pokemon objects...
  ],
  water: [
    * water type pokemon objects...
  ],
  * etc... until there is an array for every pokemon type!
}

Log the object when it's constructed.

---------------------------------------------------------------------------- */
// Solve Exercise Twenty-One here:



/* ----------------------------------------------------------------------------
Exercise Twenty-Two - OPTIONAL LEVEL UP 🚀

Complete all the gyms (change the value of `complete` in the qualifying 
objects from false to true).

---------------------------------------------------------------------------- */
// Solve Exercise Twenty-Two here:


