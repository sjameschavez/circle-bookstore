// src/api/bookService.ts
import axios from 'axios';
import { Book } from '@/models/Book';
import { BookSerializer } from '@/serializers/BookSerializer';

const BASE_URL = 'http://localhost:8000'; // Replace with actual API URL

export async function fetchBooks(): Promise<Book[]> {
  const response = await axios.get(`${BASE_URL}/books`);
  const booksArray = response.data.books ?? []; // Safely fallback to empty array
  return booksArray.map((item: any) => BookSerializer.deserialize(item));
}

export async function fetchBook(id: string): Promise<Book> {
  try {
    const response = await axios.get(`${BASE_URL}/books/${id}`);

    const rawData = response.data.book; // ✅ Use .book, not .data or .data.book

    if (!rawData || typeof rawData !== 'object') {
      throw new Error('Invalid book format');
    }

    return BookSerializer.deserialize(rawData);
  } catch (error) {
    console.error('Failed to fetch book:', error);
    throw error;
  }
}

export async function purchaseBook(id: string): Promise<void> {
  await axios.post(`${BASE_URL}/books/${id}/purchase`);
}
