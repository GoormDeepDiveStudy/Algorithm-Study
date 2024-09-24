function solution(nums) {
    var answer = 0;
    
//     const func = (target, index, arr) => {
//         console.log(target)
//         if(target.length < 3){
//             // 1,2,3 ... 추가로 넣음
//             if(!arr[index+1]) return false
            
//              func([...target, arr[index+1]], ++index, arr)
//         }
//         if(target.length == 3){
//             // index 3개 만족
//             let sum = target.reduce((a,b) => a+b, 0);
//             console.log("sum : ", sum)
//             for(let i = 2; i < sum; i++){
//                 if(sum%i === 0) continue;
//             }
//             console.log("answer++")
//             answer++
//             if(arr[index+1]){
//                 console.log("아직 있음 : ",arr, arr[index+1])
//                 func()
//             }
//         }
//     }
    
//     nums.sort()
//     nums.forEach((num, i) => {
//         func([num], i, nums)
//     })
    
    for(let i1=0; i1 < nums.length; i1++){
        for(let i2=i1+1; i2 <nums.length; i2++){
            for(let i3=i2+1; i3<nums.length; i3++){
                let bool = true
                
                const sum = nums[i1] + nums[i2] + nums[i3]
                for(let i=2; i<sum; i++){
                    if(sum%i === 0) bool = false
                }
                if(bool) answer++
            }
        }
    }
    
    
    
    return answer;
}