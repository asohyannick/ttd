import getFruits from "./fruits";

let myFruits = [];
async function fruits() {
    try{
        const resp = await fetch(myFruits);
        const newFruits = await resp.json();
        console.log(newFruits);
        console.log(getFruits());
    } catch(error) {
        console.log(error);
    }
}
fruits();