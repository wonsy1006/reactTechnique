import produce from "immer";

const update = produce((draft) => {
  draft.value = 2;
});

const originalState = {
  value: 1,
  foo: "bar",
};

const nextState = update(originalState);
console.log(nextState); // {value:2, foo: 'bar'}
