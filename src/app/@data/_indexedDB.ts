import { DBConfig } from "ngx-indexed-db";

export const DB_CONFIG: DBConfig = {
  name: "SphynxDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "exercises",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name",         keypath: "name",          options: { unique: false } },
        { name: "description",  keypath: "description",   options: { unique: false } },
        { name: "category",     keypath: "category",      options: { unique: false } },
        { name: "weighted",     keypath: "weighted",      options: { unique: false } },
      ],
    },
    {
      store: "workouts",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name",         keypath: "name",          options: { unique: false } },
        { name: "description",  keypath: "description",   options: { unique: false } },
        { name: "category",     keypath: "category",      options: { unique: false } },
        { name: "exercises",    keypath: "exercises",     options: { unique: false } },
      ],
    },
    {
      store: "routines",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name",         keypath: "name",          options: { unique: false } },
        { name: "description",  keypath: "description",   options: { unique: false } },
        { name: "category",     keypath: "category",      options: { unique: false } },
        { name: "workouts",     keypath: "workouts",      options: { unique: false } },
      ],
    }
  ],
  migrationFactory
};

export function migrationFactory() {
  return {
    1: (db: IDBDatabase, transaction: IDBTransaction) => {
      const store = transaction.objectStore('routines');
      store.createIndex('dog', 'dog', { unique: false });
    },
    2: (db: IDBDatabase, transaction: IDBTransaction) => {
      const store = transaction.objectStore('routines');
      store.createIndex('cat', 'cat', { unique: false });
    }
  };
}
