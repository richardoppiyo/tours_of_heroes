import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  logs: string[] = []; // capture logs for testing

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  constructor() { }
}
