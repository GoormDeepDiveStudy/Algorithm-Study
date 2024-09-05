function solution(s) {
    let arr = [-1];
    for(let i=1;i<s.length;i++){
        for(let j=i-1;j>=0;j--){
            if(s[i]===s[j]){
                arr.push(i-j);
                break;
            }
            if(j==0){
                arr.push(-1);
            }
        }
    }
    return arr;
}
