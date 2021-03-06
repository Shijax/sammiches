const printToDom = (stringToPrint, divId) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };
  
  const addToDom = (stringToPrint, divId) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };
  
  const foodDiscount = selectedPrice => {
    let priceString = selectedPrice.replace(/[$]/g, "");
    let newPrice = (
      parseFloat(priceString) -
      parseFloat(priceString) * 0.12
    ).toFixed(2);
    return newPrice;
  };
  
  export { printToDom, foodDiscount, addToDom };