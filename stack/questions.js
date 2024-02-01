// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalS += " " + current;
    }
  }

  return finalS.trim();
};

function reverse(string) {
  const splitString = string.split(" ");
  console.log(splitString);
  // console.log(splitString[splitString.length-1]); // to peek();

  let finalString = "";
  console.log(splitString);

  while (splitString.length) {
    finalString += " " + splitString.pop();
  }

  return finalString.trim();
}

console.log(reverse("the sky is blue"));
console.log(reverse("   hello world   "));
console.log(reverse("a good example   "));

// Ques 2 : Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//          determine if the input string is valid.
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: "()"             ----->>>>>        Output: true
// Input: "([]{})"         ----->>>>>        Output: true
// Input: "(]"             ----->>>>>        Output: false
// Input : "({[]})"

function isValid(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false;
      }

      let top = stack.pop();

      if (
        (char === "(" && top === ")") ||
        (char === "{" && top === "}") ||
        (char === "[" && top === "]")
      ) {
        return false
      }
    }
  }
    return stack.length ===0;
}

console.log(isValid("({[})"));
