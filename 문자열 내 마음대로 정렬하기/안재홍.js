function solution(strings, n) {
    var answer = [];
    let tmp;
    strings.sort();
    strings.sort(function(a, b){
        let aa = a.charAt(n);
        let bb = b.charAt(n);
    
        console.log(aa, bb)
        if(aa > bb) return 1;
        if(aa < bb) return -1;
        return 0;
    });
    
    answer = strings;
    return answer;
}