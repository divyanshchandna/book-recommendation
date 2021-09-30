import React, { useState } from "react";
import "./styles.css";

const genresDictionary = {
  Fiction: [
    {
      title: "The immortals of meluha",
      rating: "⭐⭐⭐⭐",
      author: "Amish"
    },
    {
      title: "The Hare",
      rating: "⭐⭐⭐⭐",
      author: "Melanie Finn"
    },
    {
      title: "Every Last Fear",
      rating: "⭐⭐⭐",
      author: "Alex Finlay"
    }
  ],
  Fantasy: [
    {
      title: "Vampire Academy",
      rating: "⭐⭐⭐⭐⭐",
      author: "Richelle Mead"
    },
    {
      title: "Angelfall",
      rating: "⭐⭐⭐⭐",
      author: "Susan Ee"
    },
    {
      title: "Graceling",
      rating: "⭐⭐⭐",
      author: "Kristin Cashore"
    }
  ],
  Mystery: [
    {
      title: "The Hound of the Baskervilles",
      rating: "⭐⭐⭐⭐⭐",
      author: "Sir Arthur Conan Doyle"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      rating: "⭐⭐⭐⭐",
      author: "Stieg Larsson"
    },
    {
      title: "Da Vinci Code",
      rating: "⭐⭐⭐",
      author: "Dan Brown"
    }
  ]
};

var booksweknow = Object.keys(genresDictionary);
console.log(booksweknow);

export default function App() {
  var [title, setbook] = useState(genresDictionary["Fiction"]);

  function clickHandler(book) {
    var title = genresDictionary[book];
    setbook(title);
  }
  return (
    <div className="App">
      <h1>Book Recommendations</h1>

      <h3> Choose Genre </h3>
      {booksweknow.map(function (book) {
        return (
          <button
            style={{ margin: "1rem" }}
            onClick={() => clickHandler(book)}
            key={book}
          >
            {" "}
            {book}{" "}
          </button>
        );
      })}

      <div>
        <ol>
          {title.map((titleEntry) => {
            const titleJSX = (
              <li>
                <span> Title: {titleEntry.title} </span>
                <span> Rating: {titleEntry.rating}</span>
                <span> Author: {titleEntry.author}</span>
              </li>
            );
            return titleJSX;
          })}
        </ol>
      </div>
    </div>
  );
}
