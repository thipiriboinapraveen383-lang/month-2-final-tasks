// =============================================
// EXPENSE TRACKER — script.js
// =============================================

// --- State: Array of transaction objects ---
let transactions = [];

// --- DOM References ---
const descInput       = document.getElementById('descInput');
const amountInput     = document.getElementById('amountInput');
const typeSelect      = document.getElementById('typeSelect');
const categorySelect  = document.getElementById('categorySelect');
const addBtn          = document.getElementById('addBtn');
const clearAllBtn     = document.getElementById('clearAllBtn');
const transactionList = document.getElementById('transactionList');
const netBalanceEl    = document.getElementById('netBalance');
const totalIncomeEl   = document.getElementById('totalIncome');
const totalExpenseEl  = document.getElementById('totalExpense');

// =============================================
// Add a new transaction
// =============================================
function addTransaction() {
  const desc     = descInput.value.trim();
  const amount   = parseFloat(amountInput.value);
  const type     = typeSelect.value;       // 'income' or 'expense'
  const category = categorySelect.value;

  // Validate: description and a positive number are required
  if (!desc || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid description and amount.');
    return;
  }

  // Build transaction object
  const transaction = {
    id: Date.now(),
    desc,
    amount,
    type,
    category,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  };

  transactions.push(transaction); // Add to transactions array

  // Reset form fields
  descInput.value   = '';
  amountInput.value = '';
  descInput.focus();

  render(); // Re-render UI
}

// =============================================
// Delete a transaction by ID
// =============================================
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  render();
}

// =============================================
// Clear all transactions
// =============================================
function clearAll() {
  if (transactions.length === 0) return;
  if (confirm('Clear all transactions?')) {
    transactions = [];
    render();
  }
}

// =============================================
// Calculate summary totals
// =============================================
function calculateSummary() {
  let income = 0, expense = 0;

  // Loop through each transaction and accumulate income/expense
  transactions.forEach(t => {
    if (t.type === 'income')  income  += t.amount;
    if (t.type === 'expense') expense += t.amount;
  });

  return { income, expense, balance: income - expense };
}

// =============================================
// Format number as currency string
// =============================================
function formatCurrency(amount) {
  return '$' + Math.abs(amount).toFixed(2);
}

// =============================================
// Render everything to the DOM
// =============================================
function render() {
  // --- Update summary cards ---
  const { income, expense, balance } = calculateSummary();

  netBalanceEl.textContent  = (balance < 0 ? '-' : '') + formatCurrency(balance);
  totalIncomeEl.textContent  = formatCurrency(income);
  totalExpenseEl.textContent = formatCurrency(expense);

  // Change balance color based on positive/negative
  netBalanceEl.style.color = balance < 0 ? '#e74c3c' : balance > 0 ? '#2ecc71' : '#1a1a1a';

  // --- Render transaction list (newest first) ---
  transactionList.innerHTML = '';

  if (transactions.length === 0) {
    transactionList.innerHTML = '<li class="empty-msg">No transactions yet. Add one above!</li>';
    return;
  }

  // Display transactions in reverse order (most recent at top)
  [...transactions].reverse().forEach(t => {
    const li = document.createElement('li');
    li.className = `transaction-item ${t.type}`;

    const sign = t.type === 'income' ? '+' : '-';

    li.innerHTML = `
      <div class="tx-info">
        <div class="tx-desc">${escapeHTML(t.desc)}</div>
        <div class="tx-meta">${t.category} · ${t.date}</div>
      </div>
      <span class="tx-amount">${sign}${formatCurrency(t.amount)}</span>
      <button class="tx-delete" aria-label="Delete transaction">✕</button>
    `;

    // Attach delete event listener
    li.querySelector('.tx-delete').addEventListener('click', () => deleteTransaction(t.id));

    transactionList.appendChild(li);
  });
}

// =============================================
// Escape HTML to prevent XSS
// =============================================
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// =============================================
// Event Listeners
// =============================================
addBtn.addEventListener('click', addTransaction);
clearAllBtn.addEventListener('click', clearAll);

// Allow Enter key to submit
amountInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTransaction();
});

// =============================================
// Initial render
// =============================================
render();