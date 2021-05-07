import React from "react";
import axios from "axios";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }
  componentDidMount() {
    const { array } = this.state;
    var config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", config)
      .then((response) => {
        this.setState({ array: response.data });
        // console.log(array, response);
      })
      .catch((error) => {
        this.setState({ array: null });
      });
  }

  render() {
    const { array } = this.state;
    return (
      <div className="Element">
        <header className="Element-header">
          <h3>Display API Data</h3>
          <div>
            <table>
              <th>Name</th>
              <th>City</th>
              {array.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    {el.city}
                  </tr>
                );
              })}
            </table>
          </div>
        </header>
      </div>
    );
  }
}
export default Todo;
