function problem1(pobi, crong) {
  let answer;

  // 페이지의 각 자릿수를 더하는 함수
  function plusValue(arr) {
    let result = 0;
    let a = String(arr);

    for (let i = 0; i < a.length; i++) {
      result += parseInt(a[i]);
    };

    return result;
  };

  // 페이지의 각 자릿수를 곱하는 함수
  function multiplyValue(arr) {
    let result = 1;
    let a = String(arr);

    for (let i = 0; i < a.length; i++) {
      result *= parseInt(a[i]);
    };

    return result;
  };

  // pobi 와 crong중 더 큰수를 반환하는 함수
  function resultValue(pobi, crong) {
    if (pobi > crong) {
      answer = 1;
    } else if (crong > pobi) {
      answer = 2;
    } else if (pobi == crong) {
      answer = 0;
    } else {
      answer = -1;
    }
  };

  // pobi
  let pobiLeftPlusValue = plusValue(pobi[0]);
  let pobiRightPlusValue = plusValue(pobi[1]);

  let pobiLeftMultiplyValue = multiplyValue(pobi[0]);
  let pobiRightMultiplyValue = multiplyValue(pobi[1]);

  let pobiLeftVaule = pobiLeftPlusValue > pobiLeftMultiplyValue ? pobiLeftPlusValue : pobiLeftMultiplyValue;
  let pobiRightValue = pobiRightPlusValue > pobiRightMultiplyValue ? pobiRightPlusValue : pobiRightMultiplyValue;

  let pobiResultValue = pobiLeftVaule > pobiRightValue ? pobiLeftVaule : pobiRightValue;

  // crong
  let crongLeftPlusValue = plusValue(crong[0]);
  let crongRightPlusValue = plusValue(crong[1]);

  let crongLeftMultiplyValue = multiplyValue(crong[0]);
  let crongRightMultiplyValue = multiplyValue(crong[1]);

  let crongLeftValue = crongLeftPlusValue > crongLeftMultiplyValue ? crongLeftPlusValue : crongLeftMultiplyValue;
  let crongRightValue = crongRightPlusValue > crongRightMultiplyValue ? crongRightPlusValue : crongRightMultiplyValue;

  let crongResultValue = crongLeftValue > crongRightValue ? crongLeftValue : crongRightValue;


  resultValue(pobiResultValue, crongResultValue);

  return answer;
}

module.exports = problem1;
