function createAddAction(value) {
  const action = {
    type: "add",
    payload: value,
    error: null
  };

  return action;
}

const listeners = [];

const store = {
  state: 0,
  listen(action) {
    switch (action.type) {
      case "add":
        this.state += action.payload;
        break;
    }

    listeners.forEach(element => {
      element(this.state);
    });
  }
};

function dispatch(action) {
  store.listen(action);
}

const addAction = createAddAction(7);

listeners.push(console.log)

dispatch(addAction);

listeners.push(state => console.log(`The state is: ${state}`))

dispatch(createAddAction(42));

dispatch(createAddAction(100));

listeners.pop()

dispatch(createAddAction(100));
