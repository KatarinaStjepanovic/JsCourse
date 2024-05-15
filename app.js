
  let CurrentResult=0;

  let resultHistory=[0];

  addBtn.addEventListener("click",add);



  function addHistoryLog(userInput,operation,operationResult){
    let logEntry={
      inp: userInput,
      opr: operation,
      res: operationResult

    }
    resultHistory.push(logEntry);
    console.log(resultHistory);
  }

 
  function add(){
    let CaloculationDescript=CurrentResult + "+" + userInput.value;
    CurrentResult=CurrentResult+parseInt(userInput.value);
     outputResult(CurrentResult,CaloculationDescript);
 
    addHistoryLog(parseInt(userInput.value),"ADD",CurrentResult);
    


  }
 


  subtractBtn.addEventListener("click",substract);


  function substract(){
    let CalculationDescript=CurrentResult + "-" + userInput.value;
    CurrentResult=CurrentResult-parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);
    addHistoryLog(parseInt(userInput.value),"SUB",CurrentResult);

  }


  multiplyBtn.addEventListener("click",multiply);



  function multiply(){
    let CalculationDescript=CurrentResult + "*" +userInput.value;
    CurrentResult=CurrentResult*parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);
    addHistoryLog(parseInt(userInput.value),"MLT",CurrentResult);


  }


  divideBtn.addEventListener("click",divide);

  function divide(){
    let CalculationDescript=CurrentResult + "/" + userInput.value;
    CurrentResult=CurrentResult/parseInt(userInput.value);
    outputResult(CurrentResult,CalculationDescript);
    addHistoryLog(parseInt(userInput.value),"DIV",CurrentResult);



  }

  doubleBtn.addEventListener("click",double);

  function double(){
    let CalculationDescript= CurrentResult + " ˇ2";
   CurrentResult= CurrentResult * CurrentResult;
   outputResult(CurrentResult,CalculationDescript);
   addHistoryLog(parseInt(userInput.value),"DBL",CurrentResult);


  }


  stepenBtn.addEventListener("click",stepen);
   
  function stepen(){
    let CalculationDescript= CurrentResult + "^" + userInput.value;
    CurrentResult= Math.pow(CurrentResult,parseInt(userInput.value));
    outputResult(CurrentResult,CalculationDescript);
    addHistoryLog(parseInt(userInput.value),"STP",CurrentResult);

 

  }















  
