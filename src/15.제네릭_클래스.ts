class User {
  //   public payload
  payload;
  constructor(payload: string) {
    this.payload = payload;
  }
  getPayload() {
    return this.payload;
  }
}

class User1<P> {
  //   public payload
  constructor(public payload: P) {}
  getPayload() {
    return this.payload;
  }
}

const ts15User = new User1({});
