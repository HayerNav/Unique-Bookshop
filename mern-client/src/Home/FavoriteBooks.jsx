import { data } from "autoprefixer";
import { useEffect, useState } from "react"
import BookCards from "../components/BookCards";

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/all-books').then(res => res.json()).then(data => setBooks(data))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Best Sellar Books"/>
    </div>
  )
}

export default FavoriteBooks;