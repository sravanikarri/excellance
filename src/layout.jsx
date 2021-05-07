import Evennumber from "./evennumber";
import Max1 from "./maxConsecutive1";
import Repeatednumber from "./repeatednumber";
import SortId from "./sortId";
import Todo from "./todotask";
import Apidata from "./callapi";
function Element() {
  return (
    <div className="Element">
      <header className="Element-header">
        {/*
        <form>
          <div>
            <label>First Name:</label>
            <input placeholder="enter first name" type="text"></input>
          </div>
          <div>
            <label>Last Name:</label>
            <input placeholder="enter last name" type="text"></input>
          </div>
          <div>
            <select>
              {" "}
              Age:
              <option value="20">20</option>
              <option value="20">21</option>
              <option value="20">22</option>
            </select>
          </div>
        </form> */}
        <h2 className="heading">
          Using Reactjs below are the tasks -by sravani
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <h3>basic logical problems</h3>
            <hr />
            <Evennumber />
            <Max1 />
            <Repeatednumber />
            <SortId />
          </div>
          <div className="col-lg-6">
            <h3>final code task</h3>
            <hr />
            <Todo />
            <h3>4.API call data</h3>
            <hr />
            <Apidata />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Element;
