const prices = {
  item1: 40,
  item2: 30,
  item3: 10,
};

const state = {
  quantities: {
    item1: 1,
    item2: 1,
    item3: 1,
  },
  totalPrice: 80,
};

const deleteBtns = document.querySelectorAll(".delete");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = e.target.id;

    const array = id.split("-"); // ["delete", "item1"]

    state.totalPrice =
      state.totalPrice - prices[array[1]] * state.quantities[array[1]];

    const list = document.getElementById("items-list");
    const item = document.getElementById(array[1]);

    const totalPrice = document.getElementById(`totalPrice`);
    totalPrice.innerHTML = state.totalPrice;

    list.removeChild(item);
  });
});

const increaseBtns = document.querySelectorAll(".increase");

increaseBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = e.target.id;

    const array = id.split("-");

    const itemName = array[1];

    state.quantities[itemName] = state.quantities[itemName] + 1;
    state.totalPrice = state.totalPrice + prices[itemName];

    const quantity = document.getElementById(`quantity-${itemName}`);
    const totalPrice = document.getElementById(`totalPrice`);

    quantity.innerHTML = state.quantities[array[1]];
    totalPrice.innerHTML = state.totalPrice;
  });
});

const decreaseBtns = document.querySelectorAll(".decrease");

decreaseBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = e.target.id;

    const array = id.split("-");

    state.quantities[array[1]]--;
    state.totalPrice = state.totalPrice - prices[array[1]];

    const quantity = document.getElementById(`quantity-${array[1]}`);
    const totalPrice = document.getElementById(`totalPrice`);

    quantity.innerHTML = state.quantities[array[1]];
    totalPrice.innerHTML = state.totalPrice;
  });
});
