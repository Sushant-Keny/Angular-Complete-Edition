import { Task } from './task.model';

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public userName: string,
    public password: string,
    public tasks: Task[]
  ) {}
}
