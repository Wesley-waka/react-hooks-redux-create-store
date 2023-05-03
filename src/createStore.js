// let state;
function createStore() {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  function getState() {
    return state;// able to store current state of our value
  }

  return { dispatch, getState } // this is a store cause the fi=unction returns a JS object
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}



function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore();
store.dispatch({ type: "INIT" }) //using a specific method inside Create store function 

// dispatch({ type: "@@INIT" });
let button = document.getElementById("button");

button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
