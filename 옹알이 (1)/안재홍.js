function solution(babbling) {
    var answer = 0;
    const pronounce = ['aya', 'ye', 'woo', 'ma'];
    let i = 0;
    for(i = 0; i < babbling.length; i++){  
        for(let j = 0; j < pronounce.length; j++){
            while(true){
                if(babbling[i].includes(pronounce[j]))
                    babbling[i] = babbling[i].replace(pronounce[j]," ");
                else break;
            }
        }
        while(true){
            if(babbling[i].includes(" "))
               babbling[i] = babbling[i].replace(" ","");
            else break;
        }
        if(babbling[i]==="") answer++;
    }
    return answer;
}