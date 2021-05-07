function Element() {
  return (
    <div className="Element">
      <header className="Element-header">
        <h4>1.To print only the even numbers of the array</h4>
        <p>Given Array: {givenArray}</p>
        <p>Even Numbers Of The Array: {evenArrayResult}</p>
      </header>
    </div>
  );
}

export default Element;

var array = [1, 23, 44, 22, 32, 64, 65, 77, 99, 89, 88, 98, 26];
var givenArray = array.join(", ");
var evenArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    evenArray.push(array[i]);
  }
}
var evenArrayResult = evenArray.join(", ");
