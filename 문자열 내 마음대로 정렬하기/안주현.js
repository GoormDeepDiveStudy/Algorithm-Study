function solution(strings, n) {
    strings.sort((a,b)=>{
        let comp1 = a[n];
        let comp2 = b[n];
        if(comp1 > comp2) return 1;
        if(comp1 < comp2) return -1;
        if(comp1 === comp2){
            if(a>b) return 1;
            else if(a<b) return -1;
            else return 0;
            
        }
    })
    return strings;
}
