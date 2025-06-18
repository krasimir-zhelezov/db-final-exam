use bookstore;

db.Customers.find({})
db.Customers.find({ name: "Alice Smith" })
db.Customers.find({ name: "Alice Smith", email: "alice@example.com" })

db.Orders.find({})
db.Orders.find({ status: "Delivered" })
db.Orders.find({ status: "Delivered", customer_id: 2 })

db.Reviews.find({})
db.Reviews.find({ rating: 5 })
db.Reviews.find({ rating: 5, book_id: 201 })

db.Book.find({})
db.Book.find({ genre: "Fantasy" })
db.Book.find({ genre: "Fantasy", price: { $lt: 23 } })

db.Author.find({})
db.Author.find({ nationality: "Japanese" })
db.Author.find({ nationality: "Japanese", birth_year: { $gt: 1980 } })



db.Customers.updateOne(
  { name: "Alice Smith" },
  { $set: { email: "newalice@example.com" } }
)

db.Orders.updateOne(
  { id: 102 },
  { $set: { status: "Delivered" } }
)

db.Reviews.updateOne(
  { id: 1001 },
  { $set: { comment: "Updated comment: Still love it!" } }
)

db.Book.updateOne(
  { id: 201 },
  { $set: { price: 21.99 } }
)

db.Author.updateOne(
  { id: 301 },
  { $set: { awards: ["Best Fiction 2015", "Lifetime Achievement"] } }
)



db.Customers.deleteOne({ id: 5 })

db.Orders.deleteOne({ status: "Cancelled" })

db.Reviews.deleteOne({ rating: { $lt: 3 } })

db.Book.deleteOne({ title: "Old Book" })

db.Author.deleteOne({ nationality: "Unknown" })



db.Customers.aggregate([
  { $group: { _id: "$city", total_customers: { $sum: 1 } } }
])

db.Customers.aggregate([
  { $match: { age: { $gte: 30 } } },
  { $sort: { name: 1 } }
])

db.Orders.aggregate([
  { $group: { _id: "$status", total_price: { $sum: "$total_price" } } }
])

db.Orders.aggregate([
  { $match: { total_price: { $gt: 100 } } },
  { $sort: { order_date: -1 } }
])

db.Reviews.aggregate([
  { $group: { _id: "$book_id", avg_rating: { $avg: "$rating" } } }
])

db.Reviews.aggregate([
  { $match: { rating: { $gte: 4 } } },
  { $sort: { date: -1 } }
])

db.Book.aggregate([
  { $group: { _id: "$genre", total_stock: { $sum: "$stock" } } }
])

db.Book.aggregate([
  { $match: { price: { $lte: 25 } } },
  { $sort: { title: 1 } }
])

db.Author.aggregate([
  { $group: { _id: "$nationality", count: { $sum: 1 } } }
])

db.Author.aggregate([
  { $match: { birth_year: { $gt: 1980 } } },
  { $sort: { birth_year: 1 } }
])