# MongoDB База Данни за Книжарница

## Общо описание

Тази MongoDB база данни представлява модел на онлайн книжарница, включваща информация за клиенти, поръчки, книги, автори и отзиви. Тя е подходяща за учебни цели, тестове и прототипиране на уеб или десктоп приложения, свързани с електронна търговия на книги.

## Колекции и структура на документите

### 1. Customers Collection

Съдържа информация за потребителите на платформата.

Примерна структура:
```json
{
  "id": 1,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 28,
  "city": "Sofia"
}
```

### 2. Orders Collection
Съдържа направени поръчки от клиенти.

Примерна структура:

```json
{
  "id": 101,
  "customer_id": 1,
  "book_ids": [201, 202],
  "order_date": "2024-06-10",
  "total_price": 47.98,
  "status": "Delivered"
}
```

### 3. Reviews Collection
Съдържа отзиви от клиенти за книги.

Примерна структура:

```json
{
  "id": 1001,
  "book_id": 201,
  "customer_id": 1,
  "rating": 5,
  "comment": "Great book!",
  "date": "2024-06-11"
}
```

### 4. Book Collection
Съдържа информация за наличните книги.

Примерна структура:

```json
{
  "id": 201,
  "title": "The Great Adventure",
  "author_id": 301,
  "genre": "Fantasy",
  "price": 23.99,
  "stock": 5
}
```

### 5. Author Collection
Съдържа информация за авторите на книгите.

Примерна структура:

```json
{
  "id": 301,
  "name": "John Doe",
  "birth_year": 1975,
  "nationality": "British"
}
```

## Стартиране
Увери се, че MongoDB е стартиран
```bash
mongod
```

Стартирай MongoDB shell
```bash
mongosh
```

Изпълни файла insert.js (въвежда началните данни)
```javascript
load("insert.js")
```

Изпълни файла queries.js, за да направиш заявки
```javascript
load("queries.js")
```