import { Database } from "./Database";
export class Application {
  main() {
    const D1 = Database.getInstance();
    const D2 = Database.getInstance();

    if (D1 === D2) {
      return "Singleton works, both variables contain the same instance.";
    } else {
      return "Singleton failed, variables contain different instances.";
    }
  }
}
