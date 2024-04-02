// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function catName() {
    return cats
    
}
cats();

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
  }

function destructivelyPrependCat (Bob) {
    cats.unshift("Bob"); 
}

function destructivelyRemoveLastCat (Garfield) {
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat (Milo)  {
    cats.shift("Milo");
}

function appendCat (Broom) {
    return [...cats,Broom];
   
}

function prependCat (Arnold) {
    return [Arnold, ...cats];
}

function removeLastCat () {
   return cats.slice(0, -1);

}

function removeFirstCat () {
    return cats.slice (1);
}