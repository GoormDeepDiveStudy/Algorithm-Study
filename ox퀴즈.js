function solution(quiz) {
    
    return quiz.map((expression) => {
      const [n1, sign, n2, equal, result] = expression.split(" ");
      if (sign === "+") {
        return Number(n1) + Number(n2) === Number(result) ? "O" : "X";
      } 
      else {
        return Number(n1) - Number(n2) === Number(result) ? "O" : "X";
      }
    });
  }