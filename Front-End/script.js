const apiBase = 'https://your-backend.onrender.com';

document.getElementById('addForm').onsubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;

  await fetch(`${apiBase}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, quantity })
  });

  loadInventory();
};

async function loadInventory() {
  const res = await fetch(`${apiBase}/list`);
  const data = await res.json();
  document.getElementById('inventory').innerHTML = data.map(
    (item, i) => `<p>${i + 1}. ${item.name} - ${item.quantity}</p>`
  ).join('');
}

loadInventory();
