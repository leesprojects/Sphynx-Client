import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';

export interface Dictionary {
  english: string;
  spanish: string;
  definition: string;
}

const dictionaryTable = {
  store: 'dictionary',
  storeConfig: { keyPath: 'id', autoIncrement: true },
  storeSchema: [
    { name: 'english', keypath: 'english', options: { unique: false } },
    { name: 'spanish', keypath: 'spanish', options: { unique: false } },
    { name: 'definition', keypath: 'definition', options: { unique: false } }
  ]
};

const dictionaryItem1: Dictionary = {
  english: 'hello',
  spanish: 'hola',
  definition: 'a greeting'
};

const dbConfig: DBConfig  = {
  name: 'SphynxDB',
  version: 1,
  objectStoresMeta: [
    dictionaryTable
  ]
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ]
})
export class IndexedDBModule {
  constructor(
    private dbService: NgxIndexedDBService
  ) {
    console.log(`IndexedDB Initialised`);
    this.connectToDatabase().then(() => {
      console.log(`Connected to database ${dbConfig.name}}`);
      this.addTestDate();
    });
  }

  connectToDatabase(): Promise<void> {
    const request = window.indexedDB.open(dbConfig.name, 1);
    return Promise.resolve();
  }

  addTestDate(): void {
    this.dbService.add(dictionaryTable.store, dictionaryItem1);
  }
}
