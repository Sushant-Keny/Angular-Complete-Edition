import { EServerStatus } from '../enums/server-status.enum';

export class Server {
  constructor(
    public instanceType: string,
    public name: string,
    public status: EServerStatus,
    public startedAt: Date
  ) {  }
}
