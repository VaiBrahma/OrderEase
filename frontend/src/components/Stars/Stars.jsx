import React from 'react'

const Stars = ({number}) => {
    function rationalPartGreaterThanHalf(number) {
        var strNumber = number.toString();
        var decimalIndex = strNumber.indexOf('.');
        if (decimalIndex === -1) {
            return false;
        }
        var fractionalPart = strNumber.substr(decimalIndex + 1);
        var fractionalNumber = parseInt(fractionalPart, 10);
        return fractionalNumber > 5;
    }
    
      let number1 = number/2;
      let number2 = 0;
      if(rationalPartGreaterThanHalf(number1)) number2 = 1;
    
      number1 = Math.floor(number1);
    
      let number3 = 5- number1 - number2;
  return (
    <div className='m-auto flex'>
          {Array(number1).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/stars/star.png" alt="" /></div>
          ))}
          {Array(number2).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/stars/star2.png" alt="" /></div>
          ))}
          {Array(number3).fill().map((_, index) => (
            <div key={index} className='h-[18px] w-[18px]'><img src="/stars/star1.png" alt="" /></div>
          ))}
    </div>
  )
}

export default Stars