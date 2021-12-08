// Sorted Array Function

// sorter test
describe("Sorter", ()=> {
    it("takes in an array and returns array sorted", ()=>{
        expect(sorter([2,6,-100, 75,1, 28, 0])).toEqual([-100,0,1,2,6,28,75])
    })
})
// RED, WOO HOOO
// psuedo coding sorter
// declare a function named sorter that takes in an array
const sorter = (arr) => {
    // takes in an array and returns array sorte
    // .sort(a,b => a - b)
return arr.sort((a,b) => a - b);
}
// GREEN!
// Deleted line console.log(arr)
// REFACTOR!!
