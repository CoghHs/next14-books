import Link from "next/link";
import { getBooksInList } from "../../../../utils/fetch";
import { Book } from "../../../../utils/type";

export default async function Detail({
  params: { id },
}: {
  params: { id: string };
}) {
  const book: Book[] = await getBooksInList(id);
  return (
    <div>
      <h1>{id} Books</h1>
      <ul>
        {book.map((book, index) => (
          <li key={index}>
            <img src={book.book_image} alt="image" />
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <Link href={book.amazon_product_url}>buy now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
