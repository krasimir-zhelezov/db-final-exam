// Създаване на база данни 'bookstore'
use bookstore;

db.Customers.insertMany([
  { "_id": 1, "name": "Alice Smith", "email": "alice@example.com", "phone": "1234567890", "address": "123 Main St, NY" },
  { "_id": 2, "name": "Bob Johnson", "email": "bob@example.com", "phone": "2345678901", "address": "456 Elm St, CA" },
  { "_id": 3, "name": "Charlie Brown", "email": "charlie@example.com", "phone": "3456789012", "address": "789 Oak St, TX" },
  { "_id": 4, "name": "Diana Prince", "email": "diana@example.com", "phone": "4567890123", "address": "147 Pine St, WA" },
  { "_id": 5, "name": "Evan Miller", "email": "evan@example.com", "phone": "5678901234", "address": "258 Cedar St, FL" },
  { "_id": 6, "name": "Fiona Hill", "email": "fiona@example.com", "phone": "6789012345", "address": "369 Maple St, OR" },
  { "_id": 7, "name": "George Martin", "email": "george@example.com", "phone": "7890123456", "address": "951 Birch St, IL" },
  { "_id": 8, "name": "Hannah Scott", "email": "hannah@example.com", "phone": "8901234567", "address": "753 Walnut St, MI" },
  { "_id": 9, "name": "Ian Lee", "email": "ian@example.com", "phone": "9012345678", "address": "852 Cherry St, NV" },
  { "_id": 10, "name": "Julia Adams", "email": "julia@example.com", "phone": "0123456789", "address": "159 Poplar St, CO" }
])

db.Orders.insertMany([
  { "_id": 1001, "customer_id": 1, "book_id": 201, "quantity": 1, "order_date": "2025-06-01", "status": "Shipped" },
  { "_id": 1002, "customer_id": 2, "book_id": 202, "quantity": 2, "order_date": "2025-06-02", "status": "Delivered" },
  { "_id": 1003, "customer_id": 3, "book_id": 203, "quantity": 1, "order_date": "2025-06-03", "status": "Pending" },
  { "_id": 1004, "customer_id": 4, "book_id": 204, "quantity": 3, "order_date": "2025-06-04", "status": "Shipped" },
  { "_id": 1005, "customer_id": 5, "book_id": 205, "quantity": 2, "order_date": "2025-06-05", "status": "Delivered" },
  { "_id": 1006, "customer_id": 6, "book_id": 206, "quantity": 1, "order_date": "2025-06-06", "status": "Pending" },
  { "_id": 1007, "customer_id": 7, "book_id": 207, "quantity": 4, "order_date": "2025-06-07", "status": "Delivered" },
  { "_id": 1008, "customer_id": 8, "book_id": 208, "quantity": 1, "order_date": "2025-06-08", "status": "Shipped" },
  { "_id": 1009, "customer_id": 9, "book_id": 209, "quantity": 2, "order_date": "2025-06-09", "status": "Pending" },
  { "_id": 1010, "customer_id": 10, "book_id": 210, "quantity": 1, "order_date": "2025-06-10", "status": "Delivered" }
])

db.Reviews.insertMany([
  { "_id": 3001, "book_id": 201, "customer_id": 1, "rating": 5, "comment": "Amazing book!" },
  { "_id": 3002, "book_id": 202, "customer_id": 2, "rating": 4, "comment": "Really enjoyed it." },
  { "_id": 3003, "book_id": 203, "customer_id": 3, "rating": 3, "comment": "It was okay." },
  { "_id": 3004, "book_id": 204, "customer_id": 4, "rating": 5, "comment": "Highly recommended!" },
  { "_id": 3005, "book_id": 205, "customer_id": 5, "rating": 2, "comment": "Not my type." },
  { "_id": 3006, "book_id": 206, "customer_id": 6, "rating": 4, "comment": "Well written." },
  { "_id": 3007, "book_id": 207, "customer_id": 7, "rating": 5, "comment": "Couldn’t put it down!" },
  { "_id": 3008, "book_id": 208, "customer_id": 8, "rating": 3, "comment": "Average read." },
  { "_id": 3009, "book_id": 209, "customer_id": 9, "rating": 4, "comment": "Good plot." },
  { "_id": 3010, "book_id": 210, "customer_id": 10, "rating": 5, "comment": "Excellent storytelling!" }
])

db.Book.insertMany([
  { "_id": 201, "title": "The Silent Forest", "author_id": 501, "genre": "Mystery", "price": 19.99 },
  { "_id": 202, "title": "Ocean's Whisper", "author_id": 502, "genre": "Romance", "price": 14.99 },
  { "_id": 203, "title": "The Quantum Code", "author_id": 503, "genre": "Science Fiction", "price": 21.99 },
  { "_id": 204, "title": "Legacy of Ashes", "author_id": 504, "genre": "History", "price": 18.49 },
  { "_id": 205, "title": "Dreamwalker", "author_id": 505, "genre": "Fantasy", "price": 22.95 },
  { "_id": 206, "title": "Mind Over Matter", "author_id": 506, "genre": "Psychology", "price": 16.75 },
  { "_id": 207, "title": "Code Red", "author_id": 507, "genre": "Thriller", "price": 17.89 },
  { "_id": 208, "title": "Beyond the Stars", "author_id": 508, "genre": "Sci-Fi", "price": 20.25 },
  { "_id": 209, "title": "The Hidden Path", "author_id": 509, "genre": "Adventure", "price": 15.99 },
  { "_id": 210, "title": "Echoes of the Past", "author_id": 510, "genre": "Drama", "price": 13.49 }
])

db.Author.insertMany([
  { "_id": 501, "name": "Laura Green", "birth_year": 1975, "nationality": "American" },
  { "_id": 502, "name": "Carlos Mendes", "birth_year": 1982, "nationality": "Brazilian" },
  { "_id": 503, "name": "Amira Khan", "birth_year": 1978, "nationality": "Pakistani" },
  { "_id": 504, "name": "John Wallace", "birth_year": 1965, "nationality": "British" },
  { "_id": 505, "name": "Yuki Tanaka", "birth_year": 1986, "nationality": "Japanese" },
  { "_id": 506, "name": "Sophia Petrova", "birth_year": 1990, "nationality": "Russian" },
  { "_id": 507, "name": "Mohamed El-Sayed", "birth_year": 1983, "nationality": "Egyptian" },
  { "_id": 508, "name": "Angela Wu", "birth_year": 1972, "nationality": "Chinese" },
  { "_id": 509, "name": "Tomáš Novák", "birth_year": 1980, "nationality": "Czech" },
  { "_id": 510, "name": "Anna Kowalska", "birth_year": 1985, "nationality": "Polish" }
])