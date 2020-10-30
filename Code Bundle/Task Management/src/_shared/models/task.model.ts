import { ETaskStatus } from '../enums/task-status.enum';

export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public status: ETaskStatus
  ) {}
}
