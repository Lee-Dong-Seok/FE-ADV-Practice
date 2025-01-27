import modelFactory from "./model.js";

describe("TodoMVC Model", () => {
  test("data should be immutable", () => {
    const model = modelFactory();

    expect(() => {
      model.getState().currentFilter = "WRONG";
    }).toThrow(TypeError);
  });
  test("should add an item", () => {
    const model = modelFactory();
    model.addItem("dummy");

    const { todos } = model.getState();

    expect(todos.length).toBe(1);
    expect(todos[0]).toEqual({
      text: "dummy",
      completed: false,
    });
  });
test("should not add an item when a falsy text is provided", () => {
  const model = modelFactory();

  model.addItem("");
  model.addItem(undefined);
  model.addItem(0);
  model.addItem();
  model.addItem(false);

  const { todos } = model.getState();

  expect(todos.length).toBe(0);
})
})