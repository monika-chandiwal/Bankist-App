const account1 = {
  owner: 'Jonas Jack',
  movements: [200, 300, -442, -654, -130, 50, 1300],
  interestRate: 1.2,
  pin: 111,
  dates: [
    '12/05/2024',
    '23/06/2024',
    '04/07/2024',
    '15/08/2024',
    '26/09/2024',
    '10/10/2024',
    '21/11/2024',
  ],
  currency: 'USD',
  locale: 'en_US',
};

const account2 = {
  owner: 'Jessica Tace',
  movements: [980, 50, 130, 564, 645, 434, -987, 653, -98],
  interestRate: 1.5,
  pin: 222,
  dates: [
    '02/03/2024',
    '15/04/2024',
    '28/05/2024',
    '10/06/2024',
    '22/07/2024',
    '05/08/2024',
    '17/09/2024',
    '30/10/2024',
    '12/11/2024',
  ],
  currency: 'GBP',
  locale: 'en-GB',
};

const account3 = {
  owner: 'Steven Thomas Willians',
  movements: [
    200, 909, -654, 453, -76, 432, -9087, 123, 43, 54, 7654, -656, 43, 90,
  ],
  interestRate: 1.9,
  pin: 333,
  dates: [
    '01/01/2024',
    '14/02/2024',
    '27/03/2024',
    '09/04/2024',
    '21/05/2024',
    '04/06/2024',
    '16/07/2024',
    '29/08/2024',
    '11/09/2024',
    '24/10/2024',
    '06/11/2024',
    '19/12/2024',
    '31/12/2024',
    '13/01/2025',
  ],
  currency: 'JPY',
  locale: 'ja-JP',
};

const account4 = {
  owner: 'Smith',
  movements: [
    90,
    534,
    326,
    8740,
    -442,
    526,
    -980,
    4351,
    879 - 654,
    -130,
    50,
    1300,
  ],
  interestRate: 1,
  pin: 444,
  dates: [
    '05/02/2024',
    '18/03/2024',
    '01/04/2024',
    '14/05/2024',
    '27/06/2024',
    '09/07/2024',
    '22/08/2024',
    '04/09/2024',
    '17/10/2024',
    '30/11/2024',
    '12/12/2024',
    '25/01/2025',
  ],
  currency: 'EUR',
  locale: 'fr-FR',
};

// List of accounts
const accounts = [account1, account2, account3, account4];

console.log(accounts);

// Run on page load
const parseDate = dateStr => {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('/').map(Number);
  return new Date(year, month - 1, day); // Convert from DD/MM/YYYY to proper Date object
};

const loadFromLocalStorage = () => {
  const storedAccounts = JSON.parse(localStorage.getItem('accounts'));

  if (storedAccounts) {
    accounts.length = 0;

    storedAccounts.forEach(acc => {
      acc.movements = acc.movements.map(mov => Number(mov) || 0);
      acc.dates = acc.dates.map(parseDate); // Convert stored date strings properly
    });

    accounts.push(...storedAccounts);
  }
};

const saveToLocalStorage = () => {
  const accountsToSave = accounts.map(acc => ({
    ...acc,
    dates: acc.dates.map(date => {
      if (!(date instanceof Date)) date = new Date(date); // Ensure it's a Date object
      return date.toLocaleDateString(); // Store in DD/MM/YYYY format
    }),
  }));

  localStorage.setItem('accounts', JSON.stringify(accountsToSave));
};

window.addEventListener('load', loadFromLocalStorage);

const createUserName = function (accounts) {
  accounts.forEach(function (ele) {
    ele.username = ele.owner
      .toLowerCase()
      .split(' ')
      .map(m => m[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts);

let display_date;
const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    document.getElementById('currentTime').textContent = `${min}:${sec}`;
    if (time === 0) {
      welcome.textContent = `Log in to get Started
      }`;
      containerApp.style.opacity = 0;
      clearInterval(timer);
    }
    time--;
  };

  let time = 60 * 5;
  const timer = setInterval(tick, 1000);
  return timer;
};

function updateDate() {
  const now = new Date();
  //document.querySelector('.current_date').textContent = now.toLocaleDateString();
  // const day = `${now.getDate()}`.padStart(2, '0');
  // const month = `${now.getMonth() + 1}`.padStart(2, '0');
  // const year = now.getFullYear();
  // const hour = now.getHours();
  // const min = now.getMinutes();
  // display_date = `${day}/${month}/${year}`;
  let n = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minutes: 'numeric',
  };
  document.querySelector('.current_date').textContent = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(n);
}

updateDate();
setInterval(updateDate, 1000);

const welcome = document.querySelector('.welcome');
const cur_date = document.querySelector('.current_date');
const cur_bal = document.querySelector('.current_balance__value');
const login_btn = document.querySelector('.login_btn');
const sumIn = document.querySelector('.in');
const sumOut = document.querySelector('.out');
const sumInterest = document.querySelector('.interest');
const app = document.querySelector('.app');
const movement = document.querySelector('.movements');
const movements_row = document.querySelector('.movements_row');
const sort_btn = document.querySelector('.sort');
const deposit = document.querySelector('.deposit');
const deposit_date = document.querySelector('.deposit_date');
const deposit_bal = document.querySelector('.deposit_balance');
const withdraw = document.querySelector('.withdraw');
const withdraw_date = document.querySelector('.withdraw_date');
const withdraw_bal = document.querySelector('.withdraw_balance');
const transfer_btn = document.querySelector('.transfer_btn');
const request_btn = document.querySelector('.request_btn');
const close_btn = document.querySelector('.close_btn');
const transferTo = document.querySelector('.transferTo');
const user_amount = document.querySelector('.user_amount');
const loan_amount = document.querySelector('.loan_amount');
const confirm_user = document.querySelector('.confirm_user');
const confirm_pin = document.querySelector('.confirm_pin');
let user = document.querySelector('.user');
let pin = document.querySelector('.pin');
const containerApp = document.querySelector('.app');
let dates = document.querySelector('.date');

let current_account, timer;

let sorted = false;
sort_btn.addEventListener('click', function (e) {
  e.preventDefault();
  //console.log(current_account);
  displayMovements(current_account, !sorted);
  sorted = !sorted;
});

const formattedDates = function (date) {
  if (!(date instanceof Date)) {
    date = new Date(date); // Convert if it's a string or other format
  }

  const now = new Date();
  const differenceInMs = Math.abs(now - date);
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  let formattedDate;
  if (differenceInDays === 0) {
    formattedDate = 'TODAY';
  } else if (differenceInDays === 1) {
    formattedDate = 'YESTERDAY';
  } else if (differenceInDays < 30) {
    formattedDate = `${differenceInDays} days ago`;
  } else {
    const year = date.getFullYear();
    const thisYear = now.getFullYear();

    if (year === thisYear) {
      let monthsDiff = Math.floor(differenceInDays / 30);
      formattedDate = `${monthsDiff} months ago`;
    } else {
      const day = `${date.getDate()}`.padStart(2, '0');
      const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Months are 0-based
      formattedDate = `${day}/${month}/${year}`;
    }
  }

  return formattedDate;
};

const sortMovementsWithDates = (account, sort) => {
  // Create a shallow copy of movements and dates
  const combined = account.movements.map((mov, index) => ({
    movement: mov,
    date: account.dates[index],
  }));

  // Sort only if needed
  if (sort) {
    combined.sort((a, b) => a.movement - b.movement); // Sort by movement amount (ascending)
  }

  return combined; // Return sorted/unsorted array without modifying the original
};

// const formattedMov = function (value, locale, curr) {
//   return new Intl.NumberFormat(locale, curr).format(value);
// };

const displayMovements = function (acc, sort = false) {
  if (!acc || !acc.movements) {
    console.error('Account or movements not found', acc, acc.movements);
    return;
  }
  movement.innerHTML = '';
  const sortedMovements = sortMovementsWithDates(acc, sort);

  sortedMovements.forEach((movObj, i) => {
    const type = movObj.movement > 0 ? 'deposit' : 'withdraw';
    const formattedDate = formattedDates(movObj.date);
    // const formattedMov = formattedMov(
    //   movObj.movement,
    //   movObj.locale,
    //   movObj.currency
    // );
    const html = ` 
      <div class="movements_row"> 
        <div class="${type}">${i + 1} ${type}</div> 
        <div class="${type}_date">${formattedDate}</div> 
        <div class="${type}_balance">${Number(movObj.movement).toFixed(
      2
    )}</div> 
      </div>`;

    movement.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  if (!acc || !Array.isArray(acc.movements) || acc.movements.length === 0) {
    cur_bal.textContent = `0.00€`; // Default to 0 if no valid movements
    return;
  }

  acc.cur_bal = acc.movements.reduce((acc, mov) => acc + (Number(mov) || 0), 0);
  cur_bal.textContent = `${acc.cur_bal.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  sumIn.textContent = `${Number(incomes).toFixed(2)}€`;
  console.log(incomes);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  sumOut.textContent = `${Math.abs(Number(out).toFixed(2))}€`;
  console.log(out);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  sumInterest.textContent = `${Number(interest).toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

login_btn.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('Logging in user:', user.value);
  current_account = accounts.find(acc => acc.username === user.value);
  console.log(current_account);

  if (!current_account) {
    alert('Invalid username');
    return;
  }

  if (current_account.pin === Number(pin.value)) {
    welcome.textContent = `Welcome back, ${
      current_account.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    pin.value = user.value = ''; // Clear fields
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
    updateUI(current_account);
  } else {
    alert('Invalid PIN');
  }
});

console.log(current_account);

transfer_btn.addEventListener('click', function (e) {
  e.preventDefault();

  amount = Number(user_amount.value);
  receiverAc = accounts.find(acc => acc.username === transferTo.value);

  //j=accounts.findIndex(num => num === current_account);
  // console.log(
  //   receiverAc,
  //   current_account,
  //   accounts,
  //   current_account !== undefined,
  //   receiverAc !== current_account,
  //   receiverAc !== undefined,
  //   amount > 0
  // );

  if (!receiverAc || receiverAc === current_account) {
    alert('Invalid receiver account');
    return;
  }
  let currentBalance = Number(cur_bal.textContent.replace('€', ''));
  if (currentBalance < amount) alert('You dont have sufficient balance');

  if (amount > 0 && currentBalance >= amount) {
    receiverAc.movements.push(amount);
    receiverAc.dates.push(new Date().toISOString());

    //console.log(receiverAc.movements);
    current_account.movements.push(-amount);
    current_account.dates.push(new Date().toISOString());

    saveToLocalStorage();
    transferTo.value = user_amount.value = '';
    clearInterval(timer);
    timer = startLogoutTimer();
    updateUI(current_account);
  } else alert('something went wrong');
});

request_btn.addEventListener('click', function (e) {
  e.preventDefault();
  amount = Number(loan_amount.value);
  console.log(cur_bal.textContent.split('€')[0]);
  if (amount > 0 && cur_bal.textContent.split('€')[0] >= amount * 0.1) {
    setTimeout(function () {
      current_account.movements.push(amount);
      current_account.dates.push(new Date().toISOString());

      saveToLocalStorage();
      clearInterval(timer);
      timer = startLogoutTimer();
      updateUI(current_account);
    }, 2000);
  } else alert('you are not able to take loan');
  loan_amount.value = '';
});

close_btn.addEventListener('click', function (e) {
  e.preventDefault();
  use = confirm_user.value;
  pi = Number(confirm_pin.value);
  console.log(use, pi);
  u = accounts.findIndex(acc => acc.username === use);
  //p = accounts.findIndex(acc => acc.pin === pi);
  //console.log(u, accounts[u].pin, pi, accounts[u].pin === pi);
  if (u >= 0 && accounts[u].pin === pi) {
    console.log('correct');
    accounts.splice(u, 1);
    containerApp.style.opacity = 0;
  } else {
    console.log('something went wrong');
  }
  confirm_user.value = '';
  confirm_pin.value = '';
});

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
