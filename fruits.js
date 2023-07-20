let arr = ['banana', 'oranges', 'banana'];
async function getFruits() {
    try{
        const response = await fetch(arr);
        const newFruits = await response.json();
        console.log(newFruits);
    } catch(error) {
        console.log(error);
    }
}
 export default getFruits;