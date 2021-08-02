// let counter = 0;

const maxProfit = stockPrices => {
  const getMinMaxIndexAndValue = array => {
    let minIndex = 0;
    let minValue = Infinity;
    let maxIndex = 0;
    let maxValue = -Infinity;
    for (let i = 0; i < array.length; i++) {
      // console.log(counter++);
      if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
      }

      if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
      }
    }
    
    return {
      minIndex,
      minValue,
      maxIndex,
      maxValue
    };
  };

  const {minIndex, minValue, maxIndex, maxValue} = getMinMaxIndexAndValue(stockPrices);
  if (minIndex < maxIndex) {
    return maxValue - minValue;
  } else if (minIndex > maxIndex) {
    return getMinMaxIndexAndValue([
      maxProfit(stockPrices.slice(minIndex)),
      maxProfit(stockPrices.slice(0, maxIndex + 1)),
      maxProfit(stockPrices.slice(maxIndex + 1, minIndex))
    ]).maxValue;
  } else {
    return -1;
  }
};

module.exports = maxProfit;
