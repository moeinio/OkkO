import React, { useState } from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const AddTodo = (props) => {
  const onAddTodo = () => {
    setId(id + 1);
    let todo = {
      id: id + 1,
      title: title,
      task: task,
    };
    props.addTodo(todo);
  };
  const [id, setId] = useState(0);
  const [title] = useState("");
  const [task, setTask] = useState("");

  return (
    <NewTask>
      <NewTaskInput type="text" onChange={(e) => setTask(e.target.value)} />
      <Button onClick={() => onAddTodo()}>Add a new task</Button>
    </NewTask>
  );
};

export default AddTodo;

const NewTask = styled.div`
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const NewTaskInput = styled.input`
  padding: 1em;
  margin-right: 1em;
  background-color: #64b5f6;
  border: solid 2px #0d47a1;
  flex-basis: 75%;
`;
