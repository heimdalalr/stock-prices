function best (array){
    let profit = 0
    if (array.length <2) {
        profit = 0
    }
    for (i = 0; i < array.length - 1; i++){
        for (j = 1; j < array.length; j++){
            if (i < j){
                let newProfit = array [j] - array [i]
                if (newProfit > profit) {
                    profit = newProfit
                } if (profit < 0) {
                    profit = 0
                }
            }
        }
    }
    return profit
}

console.log(best([15, 10, 20, 22, 1, 9]))

console.log(best([1,2,3,4,5]))