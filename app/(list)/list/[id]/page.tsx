import Link from "next/link";
import { getBooksInList } from "../../../../utils/fetch";
import { Book, IParams } from "../../../../utils/type";
import styles from "../../../../styles/detail.module.css";

export async function generateMetadata({ params: { id } }: IParams) {
  return {
    title: id.replace(/-/g, " "),
  };
}

export default async function Detail({ params: { id } }: IParams) {
  const books: Book[] = await getBooksInList(id);
  const displayId = id.replace(/-/g, " ");
  return (
    <div>
      <ul className={styles.info}>
        {books.map((book, index) => (
          <li key={index} style={{ animationDelay: `${0.2 * index}s` }}>
            <img src={book.book_image} alt="image" />
            <div className={styles.wrap}>
              <h1>{book.title}</h1>
              <h2>{book.author}</h2>
              <Link href={book.amazon_product_url}>buy now</Link>
            </div>
          </li>
        ))}
      </ul>
      <h1 className={styles.author}>{displayId} Books</h1>
    </div>
  );
}
