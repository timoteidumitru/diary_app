import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import axios from "axios";

export default function DiaryForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:4000/diaries`);
      setItems(result.data.reverse());
    };

    fetchData();
  }, [items.length, setItems]);

  // console.log(items);

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: date,
      text: text,
    };
    setItems((prevState) => {
      if (!prevState) {
        return itemObject;
      } else {
        return [itemObject, ...prevState];
      }
    });
    axios
      .post("http://localhost:4000/diary/create", itemObject)
      .then((res) => {
        console.log(res.data);
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
      <ShowData date={items} />
    </div>
  );
}
