function Element() {
  return (
    <div className="Element">
      <header className="Element-header">
        <h4>3.To find the repeated number in the array</h4>
        <p>Given Array of 101 integers 0-99 one nuber is repeated</p>
        <p>Repeated number in the array is: {repeated}</p>
      </header>
    </div>
  );
}

export default Element;
let array = [];
let repeated;
for (let i = 0; i < 100; i++) {
  array[i] = i;
}
let extra = getRandomNumberBetween(0, 99);
for (let j = 0; j < array.length; j++) {
  if (array[j] == extra) {
    array.splice(j, 0, extra);
    break;
  }
}
for (let k = 0; k < array.length - 1; k++) {
  if (array[k] == array[k + 1]) {
    repeated = array[k];
    break;
  }
}
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
