// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const house = range(s,t,1);
    
    const myFruits = ((arrOfFruits, threePosition, theHouse) => {
        return arrOfFruits.filter(fruit => {
            if( theHouse.includes(fruit + threePosition)){
                return fruit
            }
        })
    })
    
    const myApples = myFruits(apples,a,house);
    const myOranges = myFruits(oranges,b,house);
    
    

    console.log(myApples.length)
    console.log(myOranges.length)
    }