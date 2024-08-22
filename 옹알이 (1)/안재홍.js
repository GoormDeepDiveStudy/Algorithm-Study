function solution(babbling) {
    var answer = 0;
    const pronounce = ['aya', 'ye', 'woo', 'ma'];
    let i = 0;
    for(i = 0; i < babbling.length; i++){
        let s = babbling[i];
        let arr;
        let a = 1;
        let j = 0;
        while(j<s.length){
            if(s.indexOf(j)==='a'&&s.indexOf(j+1)==='y'&&s.indexOf(j+2)==='a')
                j += 3;
            else if(s.indexOf(j)==='w'&&s.indexOf(j+1)==='o'&&s.indexOf(j+2)==='o')
                j += 3;
            else if(s.indexOf(j)==='y'&&s.indexOf(j+1)==='e')
                j += 2;
            else if(s.indexOf(j)==='m'&&s.indexOf(j+1)==='a')
                j+= 2;
            else{
                a = 0;
                break;
            }
        }
        answer += a;
    }
    return answer;
}