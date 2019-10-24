import React, { useState } from "react";
import { connect } from "react-redux";
import DT from "date-time";
import uuid from "uuid";

function AddTodo(props) {
  // onchange
  const [dataChange, setDataChange] = useState({
    label: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (!dataChange.label) {
    } else {
      const newTodo = {
        id: uuid(),
        time: DT(),
        label: dataChange.label,
        message: dataChange.message
      };
      props.dispatch({ type: "ADD_TODO", payload: newTodo });
      setDataChange({ label: "", message: "" });
    }
  };
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <h1>New Todo</h1>
      <input
        required
        name="label"
        placeholder="add a label"
        value={dataChange.label}
        onChange={e =>
          setDataChange({
            ...dataChange,
            [e.target.name]: e.target.value,
            time: Date.now()
          })
        }
      />
      <textarea
        name="message"
        placeholder="add a message"
        value={dataChange.message}
        onChange={e =>
          setDataChange({
            ...dataChange,
            [e.target.name]: e.target.value,
            time: Date.now()
          })
        }
      />
      <button>
        <i className="fas fa-plus" />
      </button>

      <small
        style={props.status.status ? { color: "green" } : { color: "red" }}
      >
        {props.status.message}
      </small>
    </form>
  );
}

export default connect(
  null,
  null
)(AddTodo);
