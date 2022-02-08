import { useState } from "react";

import "../styles.css";
// component function
function Generator() {
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Phone, setPhone] = useState();
  const [Birth, setBirth] = useState();
  // set the initial state (an array with 1 object to start (this can be an empty object to start))
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mohammad",
      age: 21,
      phone: "09113216170",
      birth: "2000/08/05",
    },
  ]);

  // declare the function
  function handleAddNewUser(event) {
    event.preventDefault();
    // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
    const updateUsers = [
      // copy the current users state
      ...users,
      // now you can add a new object to add to the array
      {
        // using the length of the array for a unique id
        id: users.length + 1,
        name: Name,
        age: Age,
        phone: Phone,
        birth: Birth,
      },
    ];
    // update the state to the updatedUsers
    setUsers(updateUsers);
  }

  // JSX we want to return
  return (
    // parent div to hold the ul and li's
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <form>
            <div className="pt-2 form-group text-start">
              <label className="text-capitalize" htmlFor="name">
                name:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ex: Mohammad"
              />
            </div>
            <div className="pt-2 form-group text-start">
              <label className="text-capitalize" htmlFor="name">
                age:
              </label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="number"
                className="form-control"
                placeholder="ex: 16"
                max={100}
                min={5}
              />
            </div>
            <div className="pt-2 form-group text-start">
              <label className="text-capitalize" htmlFor="name">
                phone:
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="form-control"
                placeholder="ex: 09120000000"
              />
            </div>
            <div className="pt-2 form-group text-start">
              <label className="text-capitalize" htmlFor="name">
                birthday:
              </label>
              <input
                type="date"
                onChange={(e) => setBirth(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="pt-2 text-start">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleAddNewUser}
              >
                Add new user
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <ul>
            {/* map over the users array */}
            {users.map((user) => (
              // display a <div> element with the user.name and user.type
              // parent element needs to have a unique key
              <div key={user.id} className="border-radius border border-1 mt-2">
                <div className="row">
                  <div className="col-7">
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.phone}</p>
                    <p>{user.birth}</p>
                  </div>
                  <div
                    key={user.id}
                    className="col-5 d-flex align-items-center"
                  >
                    <button
                      onClick={() =>
                        setUsers((users) =>
                          users.filter((_, i) => i !== users.length - 1)
                        )
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Generator;
