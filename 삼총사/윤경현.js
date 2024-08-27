function solution(number) {
    var answer = 0;
    
    number.forEach((num1,i1) => {
        number.forEach((num2,i2) => {
            number.forEach((num3,i3) => {
                if(i1 >= i2 || i2 >= i3 || i1 >= i3) return
                if(num1 + num2 + num3 == 0){
                    answer++
                }
            })
        })
    })
    
    return answer;
}