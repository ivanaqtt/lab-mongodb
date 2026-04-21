const express = require('express');
const app = express();

app.use(express.json()); // To parse JSON bodies

const PORT = 3000;

// Sample Data (In-memory for demonstration)
let products = [
  { id: 101, name: 'Smartphone', category: 'electronics', price: 699 },
  { id: 102, name: 'Laptop', category: 'electronics', price: 1299 },
  { id: 103, name: 'Book', category: 'books', price: 19 }
];

let orders = [
  { id: 1, userId: 1, items: [{ productId: 101, quantity: 1 }] },
  { id: 2, userId: 2, items: [{ productId: 102, quantity: 2 }] }
];

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

let reviews = [
  { productId: 101, review: 'Great phone!', rating: 5 },
  { productId: 102, review: 'Excellent laptop.', rating: 4 }
];

// 1. Retrieve all products - GET /v1/products
app.get('/v1/products', (req, res) => {
  let result = [...products];

  // Filtering
  if (req.query.category) {
    result = result.filter(p => p.category === req.query.category);
  }

  // Sorting
  if (req.query.sort) {
    const [field, order] = req.query.sort.split('_');
    result.sort((a, b) => {
      if (order === 'asc') return a[field] > b[field] ? 1 : -1;
      else return a[field] < b[field] ? 1 : -1;
    });
  }

  // Pagination
  const limit = parseInt(req.query.limit) || result.length;
  result = result.slice(0, limit);

  res.status(200).json(result);
});

// 2. Retrieve a specific product - GET /v1/products/:id
app.get('/v1/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// 3. Create a new order - POST /v1/orders
app.post('/v1/orders', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    userId: req.body.userId,
    items: req.body.items
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// 4. Delete an order - DELETE /v1/orders/:id
app.delete('/v1/orders/:id', (req, res) => {
  const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
  if (orderIndex !== -1) {
    orders.splice(orderIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

// 5. Get all orders for a user - GET /v1/users/:userId/orders
app.get('/v1/users/:userId/orders', (req, res) => {
  const userOrders = orders.filter(o => o.userId === parseInt(req.params.userId));
  res.status(200).json(userOrders);
});

// 6. Get reviews for a product - GET /v1/products/:productId/reviews
app.get('/v1/products/:productId/reviews', (req, res) => {
  const productReviews = reviews.filter(r => r.productId === parseInt(req.params.productId));
  res.status(200).json(productReviews);
});

// Start server
app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
