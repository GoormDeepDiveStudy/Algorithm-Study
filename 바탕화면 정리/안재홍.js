function solution(wallpaper) {
  let s1 = -1;
  let s2 = wallpaper[0].length;
  let e1 = 0;
  let e2 = 0;
  
  wallpaper.map((a,i) => {
      if(a.includes('#')){
          if(s1 === -1) s1 = i;
          if(a.indexOf('#') < s2) s2 = a.indexOf('#');
          e1 = i + 1;
          if(a.lastIndexOf('#') + 1 > e2) e2 = a.lastIndexOf('#') + 1;
      }
  })
  return [s1, s2, e1, e2];
}