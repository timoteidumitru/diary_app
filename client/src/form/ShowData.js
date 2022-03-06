import React from "react";

export default function ShowData({ date }) {
  return (
    <div>
      {date.length ? (
        date.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </div>
          );
        })
      ) : (
        <h1>No data to show</h1>
      )}
    </div>
  );
}
