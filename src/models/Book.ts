export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public description: string = '',
    public price: number,
    public coverImage: string = '',
    public isbn?: string,
    public availableStock?: number
  ) {}

  get displayPrice(): string {
    return `$${this.price.toFixed(2)}`
  }

  static fromJSON(json: any): Book {
    return new Book(
      json.id,
      json.title,
      json.author,
      json.description ?? '',
      json.price,
      json.coverImage ?? '',
      json.isbn,
      json.availableStock
    )
  }
}
