function solution(keymap, targets) {
  var answer = [];
  let map = {};
  let arr = targets.join('').split('');
  let s = arr.filter((a, i) => i === arr.indexOf(a));
  let sum = 0;
  
  for(let i = 0; i < s.length; i++) {
      for(let j = 0; j < keymap.length; j++) {
          if(keymap[j].includes(s[i])){
              if(!(map[s[i]]))
                  map[s[i]] = keymap[j].indexOf(s[i]) + 1;
              else {
                  if(keymap[j].indexOf(s[i]) + 1 < map[s[i]])
                      map[s[i]] = keymap[j].indexOf(s[i]) + 1;
              }
          }
      }
  }
  
  for(let x = 0; x < targets.length; x++) {
      let arr = targets[x].split('');
      let bool = false;
      sum = 0;
      for(let y = 0; y < arr.length; y++) {
          if(!map[arr[y]]){
              bool = !bool;
              break;
          } else sum += map[arr[y]];
      }
      if(bool) answer.push(-1);
      else answer.push(sum)
  }
  return answer;
}