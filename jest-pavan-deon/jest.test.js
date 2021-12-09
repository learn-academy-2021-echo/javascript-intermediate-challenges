// describe("areYouTired", () => {
//     it("returns drink coffee or keep working based on input", () => {
//       expect(areYouTired("yes")).toEqual("drink coffee")
//       expect(areYouTired("no")).toEqual("keep working")
//     })
// })
// const areYouTired = (string) => {
//     if(string === "yes"){
//       return "drink coffee"
//       console.log("1")
//     }else if(string === "no"){
//     return( "keep working")
//       console.log("2")
//     }
// }

// describe ("areYouStressed", ()=>{
//     it("returns relax or or keep goin", ()=>{
//         expect(areYouStressed("yes")).toEqual("relax")
//         expect(areYouStressed("no")).toEqual("keep goin")
//     })
//})

// const areYouStressed = (string) => {
//     if(string === "yes"){
//       return "relax"
//     } else if(string === "no") {
//       return ("keep goin")
//     }
//}

// describe ("underThree", ()=>{
//     it("returns in budget or too expensive", ()=>{
//         expect(underThree("yes")).toEqual("in budget")
//         expect(underThree("no")).toEqual("too expensive")
//     })
// })
// const underThree = (string) => {
//     if(string === "yes"){
//       return "in budget"
//     } else if(string === "no") {
//       return ("too expensive")
//     }
// }
// describe ("underThree", ()=>{
//     it("returns in budget or too expensive", ()=>{
//         expect(underThree("yes")).toEqual("in budget")
//         expect(underThree("no")).toEqual("too expensive")
//     })
// })
// const underThree = (string) => {
//     if(string === "yes"){
//       return "in budget"
//     } else if(string === "no") {
//       return ("too expensive")
//     }
// }
describe ("lowNum", ()=>{
    it("returns the lower number", ()=>{
        expect(lowNum(3, 9)).toEqual(3)
        expect(lowNum(9, 3)).toEqual(3)
    })
})
const lowNum = (3,9) => {
    if(3 > 9){
      return 3
    } else if(3 < 9) {
      return 9
    }
}

