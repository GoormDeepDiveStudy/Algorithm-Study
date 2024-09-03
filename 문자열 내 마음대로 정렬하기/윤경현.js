function solution(strings, n) {
    var answer = [];
    let nStr = []
    strings.forEach((str,i) => {
        nStr.push({[str[n]]:i})
    })

    return strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt())
    
//     console.log(nStr)
//     console.log(nStr.map((s) => Object.keys(s)).flat().sort())
//     nStr.map((s) => Object.keys(s)).flat().sort().map((s) => {
//         nStr.forEach(a => {
//             if(a[s] !== undefined) {
//                 answer.push(strings[a[s]])
//             }
//             // console.log(a[s], a, s, strings[a[s]])
//         })
//     })
    
    return answer;
}

