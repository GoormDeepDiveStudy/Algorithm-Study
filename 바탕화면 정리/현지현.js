function solution(wallpaper) {
    let answer = [];
    let lux = Number.MAX_VALUE;
    let luy = Number.MAX_VALUE;
    let rdx = Number.MIN_VALUE;
    let rdy = Number.MIN_VALUE;
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') {
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    return answer = [lux,luy,rdx + 1,rdy + 1]
}