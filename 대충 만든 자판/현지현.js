function solution(keymap, targets) {
    let answer = [];
    
    targets.map((target,index)=>{
        let cnt = 0;
        
        for(let i=0; i<target.length; i++){
            let str = target[i];
            let min = Infinity;
            
            for (let key of keymap) {
                let idx = key.indexOf(str);
                if (idx !== -1) {
                    min = Math.min(min, idx + 1);
                }
            }
            
            if( min === Infinity ){
                answer[index] = -1;
                break;
            } else {
                cnt += min;
                answer[index] = cnt;
            }
        }
    })
    
    return answer;
}