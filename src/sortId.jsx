function Element() {
  return (
    <div className="Element">
      <header className="Element-header">
        <h4>5.To sort the object by id</h4>
        <p>Given Array of object: are in the console</p>
        <p>objected sort by id’s: are in the console </p>
      </header>
    </div>
  );
}

export default Element;

var obj = [
  {
    id: 4,
    name: "abc",
  },
  {
    id: 10,
    name: "ab2",
  },
  {
    id: 5,
    name: "abc3",
  },
  {
    id: 6,
    name: "abc5",
  },
];
console.log("given array of object", obj);
let res = obj.sort((a, b) => a.id - b.id);
console.log("sortted array by id", res);
