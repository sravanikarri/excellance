function Element() {
  return (
    <div className="Element">
      <header className="Element-header">
        <h4>2.To find the max consecutive 1's in an array of 0's and 1's.</h4>
        <p>Given Array: {data}</p>
        <p>Max num of consecutive 1's is: {max}</p>
      </header>
    </div>
  );
}

export default Element;

var data = "1000011110001";
let array = data.split("");
let max = 0;
for (let i = 0; i < array.length; i++) {
  var count = 0;
  if (array[i] == 1) {
    count++;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] != 1) {
        break;
      } else {
        count++;
      }
    }
  }
  if (max < count) {
    max = count;
  }
}
