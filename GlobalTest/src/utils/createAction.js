export function createAction(type) {
  console.log(type);
  return function (payload) {
    console.log(payload);
    return { type, payload };
  };
}
