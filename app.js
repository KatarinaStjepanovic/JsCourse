
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

  doubleBtn.addEventListener("click",double);

  function double(){
    let CalculationDescript= CurrentResult + " ˇ2";
   CurrentResult= CurrentResult * CurrentResult;
   outputResult(CurrentResult,CalculationDescript);

  }


  stepenBtn.addEventListener("click",stepen);
   
  function stepen(){
    let CalculationDescript= CurrentResult + "^" + userInput.value;
    CurrentResult= Math.pow(CurrentResult,parseInt(userInput.value));
    outputResult(CurrentResult,CalculationDescript);
 

  }















  
