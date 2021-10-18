// let nums = document.getElementsByClassName("num");
// for()
let draft = [];
let str;
function writing(Element) {
  console.log(draft);
  let btn = Element.value;
  let input = document.getElementById("input");
  let input2 = document.getElementById("input2");
  let inputVal = document.getElementById("input").value;
  if (btn == "Delete") {
    input.value = "";
    input2.value = "";
    for (let j = 0; draft.length != 0; j++) {
      draft.pop();
    }
    return;
  }
  if (btn == "/" || btn == "*" || btn == "+" || btn == "-" || btn == "%") {
    if (
      (draft[draft.length - 1] == "/" ||
        draft[draft.length - 1] == "*" ||
        draft[draft.length - 1] == "+" ||
        draft[draft.length - 1] == "%" ||
        draft[draft.length - 1] == "-") &&
      input.value == ""
    ) {
      draft.pop();
      draft.push(btn);
      return;
    }
    if (inputVal != "") draft.push(inputVal);
    draft.push(btn);

    input.value = "";
  } else if (btn == "=") {
    if (draft.length != 0) {
      draft.push(inputVal);
      draft.push(btn);
    }
  } else if (draft.length == 1 && !isNaN(parseFloat(btn))) {
    input.value = btn.toString();
    input2.value = "";
    for (let j = 0; draft.length != 0; j++) {
      draft.pop();
    }
    // draft.push(btn);
    let print = inputVal + btn;
    input.value = print;
  } else {
    let print = inputVal + btn;
    input.value = print;
  }

  if (draft.length > 2) {
    let last = draft[draft.length - 1];
    str += draft[0] + " " + draft[1] + " " + draft[2];
    let num1 = parseFloat(draft[0]);
    let opp = draft[1];
    let num2 = parseFloat(draft[2]);
    let result;
    if (opp == "/") result = num1 / num2;
    else if (opp == "*") result = num1 * num2;
    else if (opp == "+") result = num1 + num2;
    else if (opp == "-") result = num1 - num2;
    else if (opp == "%") result = num1 % num2;
    for (let j = 0; draft.length != 0; j++) {
      draft.pop();
    }
    draft.push(result);
    if (last == "/" || last == "*" || last == "+" || last == "-" || last == "%")
      draft.push(last);
    input2.value = num1 + " " + opp + " " + num2 + " = " + draft[0];
    input.value = "";
  }

  console.log(draft);
}

// function calc() {
//   let input = document.getElementById("input");
//   let inputVal = document.getElementById("input").value;
// }
