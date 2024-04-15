/*function zbir(num1,num2){
  return num1+num2;
}

let zbir=zbir(1,2);
console.log(zbir);

function razlika(num1,num2){
    return num1-num2;
  }
  
  let razlika=razlika(1,2);
  console.log(razlika);

  function proizvod(num1,num2){
    return num1*num2;
  }
  
  let proizvod=proizvod(1,2);
  console.log(proizvod);

  function količnik(num1,num2){
    return num1/num2;
  }
  
  let količnik=količnik(1,2);
  console.log(količnik);

  function zbir(num1,num2){
    return num1+num2;
  }
  
  let zbir=zbir(1,2);
  console.log(zbir);*/





  let CurrentResult=0;

  addBtn.addEventListener("click",add);

  function add(){
    let CaloculationDescript=CurrentResult + "+" + userInput.value;
    CurrentResult=CurrentResult+parseInt(userInput.value);
     outputResult(CurrentResult,CaloculationDescript);


  }


  subtractBtn.addEventListener("click",substract);


  function substract(){
    let CalculationDescript=CurrentResult + "-" + userInput.value;
    CurrentResult=CurrentResult-parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);
  }


  multiplyBtn.addEventListener("click",multiply);



  function multiply(){
    let CalculationDescript=CurrentResult + "*" +userInput.value;
    CurrentResult=CurrentResult*parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);

  }


  divideBtn.addEventListener("click",divide);

  function divide(){
    let CalculationDescript=CurrentResult + "/" + userInput.value;
    CurrentResult=CurrentResult/parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);


  }
















  
