import { Book } from '@/models/Book'

export class BookSerializer {
  static serialize(book: Book): any {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      price: book.price,
      coverImage: book.coverImage,
      isbn: book.isbn,
      availableStock: book.availableStock
    }
  }

  static deserialize(data: any): Book {
    return Book.fromJSON(data)
  }
}
