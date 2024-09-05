function solution(food) {
    let left = "";
    let right = "";
    
    for(let i=1;i<food.length;i++){
        let location = Math.floor(food[i] / 2);
        for(let j=0;j<location;j++){
            left +=i;
            right = i + right;
        }
    }
    return left + "0" + right
}
