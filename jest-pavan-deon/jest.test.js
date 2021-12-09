describe("areYouTired", () => {
    it("returns drink coffee or keep working based on input", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })

const areYouTired = (string) => {

    if(string === "yes"){
      return "drink coffee"
      console.log("1")
    }{ elseif(string === "no") 
    }return( "keep on truckin' ")
     { console.log("2")
    }
}

// const areYouStressed = (string) => {
//     if(string === "yes"){
//       return "relax"
//     } else if(string === "no") {
//       return "keep goin"
//     }
//   }

// console.log(areYouStressed,"yes")

// const areYouStressed = (string) => {
//     if(string === "yes"){
//       return "relax"
//     } else if(string === "no") {
//       return "keep goin"
//     }
//   }

// console.log(areYouStressed,["yes"])


// const areYouHungry = (string) => {
//     if(string === "yes"){
//       return "eat food"
//     } else if(string === "no") {
//       return "keep working"
//     }
//   }
