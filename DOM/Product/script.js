// Select DOM elements
const form = document.getElementById("productForm");
const productBody = document.getElementById("productBody");

// Load products from localStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Render products to table
function renderTable() {
  productBody.innerHTML = "";
  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.productName}</td>
      <td>${product.quantity}</td>
      <td>${product.costPerUnit}</td>
      <td>${product.soldQuantity}</td>
      <td>${product.totalCost}</td>
      <td>${product.totalSell}</td>
      <td>${product.totalBenefit}</td>
      <td>
        <button class="edit" onclick="editProduct(${index})">Edit</button>
        <button class="delete" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;

    productBody.appendChild(row);
  });

  localStorage.setItem("products", JSON.stringify(products));
}

// Add Product
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = document.getElementById("productName").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const costPerUnit = parseFloat(document.getElementById("costPerUnit").value);
  const soldQuantity = parseInt(document.getElementById("soldQuantity").value) || 0;

  const totalCost = quantity * costPerUnit;

  const newProduct = {
    productName,
    quantity,
    costPerUnit,
    soldQuantity,
    totalCost,
    totalSell: 0,        // Default 0
    totalBenefit: 0      // Default 0
  };

  products.push(newProduct);
  renderTable();
  form.reset();
});

// Edit Product
function editProduct(index) {
  const product = products[index];
  const newSoldQty = prompt("Enter Sold Quantity:", product.soldQuantity);

  if (newSoldQty !== null && !isNaN(newSoldQty)) {
    product.soldQuantity = parseInt(newSoldQty);
    product.totalSell = product.soldQuantity * product.costPerUnit;
    product.totalBenefit = product.totalSell - product.totalCost;
    renderTable();
  }
}

// Delete Product
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

// Initial render
renderTable();
