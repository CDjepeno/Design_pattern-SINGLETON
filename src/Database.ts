export class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance() {
    if (Database.instance == null) {
      Database.instance = new Database();
    }
  }
}
