export const add = (state, action) => ({
  ...state,
  theValue: state.theValue + action.payload
});

export const functions = {
  add
  
};

export default function myReducer(state = { theValue: 0 }, action) {
  console.log(action, state);
  //   switch (action.type) {
  //     case "add":
  //       // No!!! state.theValue += action.payload;

  //       // OK return Object.assign({}, state, {
  //       //   theValue: state.theValue + action.payload
  //       // });

  //       return { ...state, theValue: state.theValue + action.payload };
  //   }

  const fn = functions[action.type];
  if (fn) {
    return fn(state, action);
  }

  return state;
}
