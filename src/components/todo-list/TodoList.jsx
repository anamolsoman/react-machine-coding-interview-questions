import React, { useEffect, useState, useMemo } from "react";

function TodoList() {
  let todos = useMemo(
    () => [
      {
        id: 1,
        name: "finish dashboard design",
        priority: "High",
        finished: true,
        deadline: "12/11/2024",
      },
      {
        id: 2,
        name: "Design Login Page",
        priority: "Medium",
        finished: false,
        deadline: "12/11/2024",
      },
      {
        id: 3,
        name: "Fix Logout Issue",
        priority: "High",
        finished: false,
        deadline: "12/11/2024",
      },
    ],
    []
  );
  const [updatedTodos, setUpdatedTodos] = useState(todos);
  const [filter, setFilter] = useState("all");
  const [addTodo, setAddTodo] = useState(false);
  const [taskDetails, setTaskDetails] = useState({
    id: "",
    name: "",
    priority: "",
    deadline: "",
    finished: false,
  });

  useEffect(() => {
    console.log(taskDetails);
  }, [taskDetails]);

  const lastRecord = () => {
    return updatedTodos[updatedTodos?.length - 1]?.id;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTaskDetails((prev) => ({
      ...prev,
      [name]: value,
      id: Number(lastRecord()) + 1,
    }));
  };

  const addTodoObj = (todo) => {
    setUpdatedTodos([...updatedTodos, todo]);
    setAddTodo(false);
  };

  const deleteTodo = (id) => {
    setUpdatedTodos(updatedTodos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    const task = updatedTodos.find((todo) => todo.id === id);
    setTaskDetails(task);
    setAddTodo(true);
  };

  const updateTask = (id) => {};

  const handleSelectedTodo = (id) => {
    setUpdatedTodos((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, finished: !todo.finished } : todo;
      })
    );
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    let filtered = [...todos];
    if (filter === "finished") {
      filtered = filtered.filter((todo) => todo.finished === true);
    } else if (filter === "pending") {
      filtered = filtered.filter((todo) => todo.finished !== true);
    }

    setUpdatedTodos(filtered);
  }, [filter, todos]);

  useEffect(() => {
    console.log(updatedTodos, "updatedTodos");
  }, [updatedTodos]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="min-w-[700px] w-[80%] ">
        <div className="text-3xl">Todo List</div>
        {addTodo ? (
          <div>
            Add Task
            <div className="bg-gray-300 rounded p-3">
              <div className="grid grid-cols-6 gap-2">
                <input
                  className="col-span-2 p-1"
                  name="name"
                  placeholder="Enter Task"
                  value={taskDetails.name}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                {/* <input
                  className=" p-1"
                  name="priority"
                  placeholder="Select Priority"
                  value={taskDetails.priority}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "} */}
                <select
                  value={taskDetails.priority}
                  onChange={(e) => handleInputChange(e)}
                  name="priority"
                >
                  {" "}
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </select>
                <input
                  type="date"
                  className=" p-1"
                  name="deadline"
                  placeholder="Select Deadline"
                  value={taskDetails.deadline}
                  onChange={(e) => handleInputChange(e)}
                ></input>{" "}
                <button
                  className="px-2 py-1  text-white bg-green-600"
                  onClick={() => addTodoObj(taskDetails)}
                >
                  Save
                </button>
                <button
                  className="px-2 py-1  text-white bg-green-600"
                  onClick={() => setAddTodo(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            {" "}
            <div className="flex justify-between py-3 ">
              <button
                className="px-2 py-1 border text-white bg-green-600"
                onClick={() => setAddTodo(true)}
              >
                Add Task
              </button>
              <select value={filter} onChange={handleFilter}>
                <option value="all">All</option>
                <option value="finished">Finished</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className=" bg-gray-300 rounded p-3">
              {updatedTodos &&
                updatedTodos.map((todo) => {
                  return (
                    <div
                      className="bg-white min-h-[50px] my-4 flex cursor-pointer"
                      onClick={() => handleSelectedTodo(todo.id)}
                    >
                      <div className="p-3">
                        <input type="checkbox" checked={todo.finished}></input>
                      </div>
                      <div className="flex-auto p-1">
                        <div className="flex justify-start font-semibold text-1xl text-gray-700">
                          {todo.finished ? (
                            <strike>
                              {todo.name.charAt(0).toUpperCase() +
                                todo.name.slice(1)}
                            </strike>
                          ) : (
                            todo.name.charAt(0).toUpperCase() +
                            todo.name.slice(1)
                          )}
                        </div>
                        <div className="flex justify-start text-1xl text-gray-700">
                          {todo.deadline}
                        </div>
                      </div>
                      <div className="p-3 ">
                        <button
                          className="mx-2  px-3 bg-blue-600 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            editTask(todo.id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="mx-2  px-3 bg-red-600 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              {updatedTodos && updatedTodos.length === 0 && (
                <div>No Tasks Available</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
