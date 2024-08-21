let num = +prompt('Введите кол-во бананчиков')

for (let i = 1; i <= num; i++) {
  if (i == 1) {
    console.log(`${i} + banana`)
  } else if(i == 0){
    console.log(`${i} + у вас нету бананов`);
  }else {
    console.log(`${i} + bananas`)
  }
}
