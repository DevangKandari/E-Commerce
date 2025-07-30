const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "ARhFeDHSYgupq_it4PZpgjL1vmH7Al-JqGaNfJE1hPqd7M-oYxEX5NAlejNeSde-hExssjViUpZdAe1k",
  client_secret:
    "EPFkVjXrbJNHuQWnpkDe25qPAyv9bcFkbF4oDZUw8iRqgK7GBL_dmgh6EfKHyKzioImMKFmJLMVLWnlY",
});

module.exports = paypal;
