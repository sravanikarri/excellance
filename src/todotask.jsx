import React from "react";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.array = ["enter name", "click add button", "see list"];
    this.state = { todoName: "" };
    this.adding = this.adding.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  adding() {
    const { todoName } = this.state;
    this.array.push(todoName);
    this.setState({ todoName: "" });
  }
  onChange(val) {
    const { todoName } = this.state;
    this.setState({ todoName: val.target.value });
  }
  render() {
    const { todoName } = this.state;
    return (
      <div className="Element">
        <header className="Element-header">
          <h3>Add and Display all Elements</h3>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <input
                  placeholder="enter name"
                  value={todoName}
                  onChange={this.onChange}
                  type="text"
                ></input>
              </div>
              <div className="col-lg-6">
                <button onClick={this.adding} type="button">
                  +ADD
                </button>
              </div>
            </div>
          </form>
          <div>
            <ul>
              {this.array.map((el) => {
                return <dir>{el}</dir>;
              })}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default Todo;
