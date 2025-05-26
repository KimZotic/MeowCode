// config/api.js

const API_BASE = "https://api.example.com"; // Boleh ubah jika guna API real

export const sendTopupOrder = async (data) => {
  const res = await fetch(`${API_BASE}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
};

export const checkOrderStatus = async (orderId) => {
  const res = await fetch(`${API_BASE}/order/${orderId}`);
  return await res.json();
};
