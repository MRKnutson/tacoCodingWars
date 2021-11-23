const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id

// and returns a new object with name changed to "changed"

// Initially did these to pull from array

// const nameChange = (id, name)=> {             
//   let taco = tacos.find((taco)=> {
//     return (taco.id === id);
//   });
//   let tacoNewName = { ...taco, name: name  }
//   return tacoNewName;
// };

// console.log(nameChange(3, "halibut"));

// this one just uses an object passed directly

const nameChange = (object, name)=>{
  return { ...object, name: name }
};

let newName = nameChange(taco2, "Halibut");
console.log(newName);

// write a function that takes an tacoOBJ and return some

// formatted html (will be a string technically)

// doing it from the array

// const prettyTaco = (id) => {
//   let taco = tacos.find((taco)=> {
//     return (taco.id === id);
//   });
//   return(
//     `<div>
//     <p>${taco.name}: $${taco.price}</p>
//     <p>${taco.about}</p>
//     </div>`
//   );  
// };

// console.log(prettyTaco(2));

// Doing it from the object

const prettyTaco = (object) => {
  return(
    `<div>
      <p>${taco.name}: $${taco.price}</p>
      <p>${taco.about}</p>
    </div>`
  );
};

let tacoString = prettyTaco(taco1);
console.log(tacoString);

// write a function that takes an tacoOBJ and return formatted price with

// .00 

// Doing it from the array

// const addCents = (id) => {
//   let taco = tacos.find((taco)=> {
//     return (taco.id === id);
//   });
//   let priceFloat = parseFloat(taco.price).toFixed(2);
//   return(
//     `$${priceFloat}`
//   );
// };

// console.log(addCents(2));

// Doing it from the object

const addCents = (object) => {
  let priceFloat = parseFloat(taco.price).toFixed(2);
  return(
    `$${priceFloat}`
  );
};

let fancyPrice = addCents(taco1);
console.log(fancyPrice);

// create a new array where all of the prices is formatted with .00

const centsArray = () => {
  let price = tacos.map((taco)=> {
    let float = parseFloat(taco.price).toFixed(2);
    return (
      { ...taco, price:float }
    );
  });
  return price;
};

console.log(centsArray());



// write a function that takes an array and logs each item in the array

// hint forEach

const logTacos = () => {
  return(
    tacos.forEach((taco) => {
        console.log(taco);
    })
  );
};

logTacos();

// use the find method to return the object with id:1

const findTaco = (id) => {
  return tacos.find((taco)=> taco.id === id)
};

console.log(findTaco(1));

// return a new array with all prices greater than 19

const findExpensive = () => {
  let expensive = tacos.filter((taco)=> taco.price > 19);
  return expensive;
};

console.log(findExpensive())

// return a new array with a 'info' key where it is a combo of

// name price and about

const newAbout = () => {
  let newInfo = tacos.map((taco)=>{
    let infoArr = [taco.name, taco.price, taco.about]
    let info = infoArr.join(' ')
    return { ...taco, info};
  });
  return newInfo
};

console.log(newAbout());



///CRUD

// don't change tacos array or change objects




// READ (array of obj to array of html)

// Index

const index = (array) =>  {
  return array.map((taco) => {
    return (
      `<div>
        <h3>${taco.name}</h3>
        <p>$${taco.price}</p>
        <p>comments: ${taco.about}</p>
      </div>`
    )
  });
};

let tacosIndex = index(tacos)

console.log(tacosIndex);

const show = (id) => {
  let taco = tacos.find((taco)=> taco.id === id);
  return (
    `<div>
        <h3>${taco.name}</h3>
        <p>$${taco.price}</p>
        <p>comments: ${taco.about}</p>
      </div>`
  );
};

let tacoShow = show(1);

console.log(tacoShow);

// Update (update a taco) 

const updateFunc = (id, name, price, about) => {
  return tacos.map((taco)=> {
    if (taco.id !== id) {
      return taco
    }
    return { ...taco, name: name, price: price, about: about }
  });
};
let changedTacos = updateFunc(1,"test", 45, "stuff")

console.log(changedTacos)

// Remove (delete a taco) 

const removeFunc = (id) => {
  return tacos.filter((taco) => taco.id !== id);
};
let lessTacos = removeFunc(1);

console.log(lessTacos);

// Create (add a taco) 

const addTaco = (newTaco) => {
  return [ ...tacos, newTaco]
};

let newTacos = addTaco({id:4, name:'Veggie', price:7, about:'I guess its still a taco without meat'});

console.log(newTacos);

// bonus use reduce to return the sum of prices in tacos array

const menuCost = () => {
  let priceArray = tacos.map((taco)=>{
    return taco.price
  });
  let total = priceArray.reduce((accum, char)=>{
    return accum + char;
  }, 0);
  return total
};


let total = menuCost();
console.log(total);

// bonus do in rails

// ssh key for the github repo: git@github.com:MRKnutson/taco_sandbox.git

// bonus create you own