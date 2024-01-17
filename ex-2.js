function defangIPaddr(numbers) {
  return numbers.split(".").join("[.]");
}

console.log(defangIPaddr("255.100.50.0"));
