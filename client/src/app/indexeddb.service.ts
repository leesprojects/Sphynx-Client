import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IndexedDBService {
  databaseName = 'ProjectSpyhnxDB';
  database: any;
  databaseRequest!: IDBOpenDBRequest;

  constructor() {
    console.log(`IndexedDBService initialising`);
    this.openDatabase();
  }

  openDatabase(): void {
    this.databaseRequest = window.indexedDB.open(this.databaseName, 1)

    this.databaseRequest.onerror = (event: any) => {
      console.log(`Failed to open IndexedDB for ${this.databaseName}`);
    };

    this.databaseRequest.onsuccess = (event: { target: any; }) => {
      console.log(`Succeeded to open IndexedDB for ${this.databaseName}`);
      this.database = event.target
    };

  };
}
