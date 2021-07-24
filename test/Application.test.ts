import { Application } from "../src/Application";
describe("Run application ", () => {
  it("Should be return 'Singleton works, both variables contain the same instance.'", () => {
    const app = new Application();
    const result = app.main();

    expect(result).toBe(
      "Singleton works, both variables contain the same instance."
    );
  });
});
