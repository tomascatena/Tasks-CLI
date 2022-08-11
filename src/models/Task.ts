import { v4 as uuid } from 'uuid';

export class Task {
  id: string;
  title: string;
  createdAt: Date | null;
  completedOn: Date | null;

  constructor(title: string) {
    this.id = uuid();
    this.title = title;
    this.createdAt = new Date();
    this.completedOn = null;
  }
}
