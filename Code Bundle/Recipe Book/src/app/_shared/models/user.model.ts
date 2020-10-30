export class User {
  constructor(
    public id: string,
    public email: string,
    private idToken: string,
    private tokenExpirationDate: Date
  ) {  }

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }
    return this.idToken;
  }
}
