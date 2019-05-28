class SingleObject {
  private static instance: SingleObject;
  static getInstance() {
    if (!SingleObject.instance) {
      SingleObject.instance = new SingleObject();
    }
    return SingleObject.instance;
  }
}
