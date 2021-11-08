export const Input = ({
  setinputValue,
  inputValue,
  setinputValue1,
  inputValue1,
  itemTodo,
  setItemTodo,
}) => {
  const readerInput = (e) => {
    setinputValue(e.target.value);
  };

  const readerInput1 = (e) => {
    setinputValue1(e.target.value);
  };

  const addItem = (e) => {
    if (inputValue === "" || inputValue1 === "") {
      alert("please type a book");
      e.stopPropagation();
    } else {
      let id = Math.floor(Math.random() * 5000);
      setinputValue("");
      setinputValue1("");
      setItemTodo([
        ...itemTodo,
        {
          id: id,
          author: inputValue1,
          title: inputValue,
          completed: false,
          editing: false,
        },
      ]);
    }
  };

  const handleKey = (e) => {
    if (e.keyCode === 0 || e.keyCode === 13) {
      addItem(e);
    }
  };

  return (
    <div className="container-input">
      <div className="container-counter">
        <h4>Total Books: {itemTodo.length}</h4>
        <h4>
          Completed Books:
          {
            itemTodo.filter((el) => {
              return el.completed === true;
            }).length
          }
        </h4>
        <h4>
          Pending Books:{" "}
          {
            itemTodo.filter((el) => {
              return el.completed !== true;
            }).length
          }
        </h4>
      </div>
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="book-title"
        className="input"
        value={inputValue}
        onChange={readerInput}
        onKeyDown={handleKey}
        required
      />
      <label htmlFor="author" className="label">
        Author
      </label>
      <input
        type="text"
        name="author"
        id="book-author"
        className="input"
        value={inputValue1}
        onChange={readerInput1}
        onKeyDown={handleKey}
        required
      />
      <button
        type="submit"
        value="Add"
        className="button-submit"
        onClick={addItem}
      >
        Add Book
      </button>
    </div>
  );
};
