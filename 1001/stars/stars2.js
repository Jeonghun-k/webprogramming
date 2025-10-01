let n = 5;

for (let i = 1; i <= n; i++) {
  let line = "";
  
  // 줄마다 공백 개수가 줄어들도록 (n - i)
  for (let j = 1; j <= n - i; j++) {
    line += " ";
  }
  
  // 별 출력
  for (let k = 1; k <= i; k++) {
    line += "*";
  }
  
  console.log(line);
}