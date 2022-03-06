import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import axios from "axios";

export default function DiaryForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then((res) => {
        setItem(res.data.reverse());
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: date,
      text: text,
    };
    setItem((prevState) => {
      if (!prevState) {
        return itemObject;
      } else {
        return [itemObject, ...prevState];
      }
    });
    axios
      .post("http://localhost:4000/todos/create", itemObject)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setTitle("");
    setDate("");
    setText("");
  };

  return (
    <div style={{ display: "block" }}>
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Add an Item"
            className="diary-input"
          />
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="diary-date-input"
          />
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows="10"
          className="diary-textarea"
        ></textarea>
        <button type="submit" className="diary-button">
          Add Your Entry
        </button>
      </form>
      <ShowData date={item} />
    </div>
  );
}
