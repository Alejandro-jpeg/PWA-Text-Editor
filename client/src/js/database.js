import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//put method takes in content and in turn updates the database
export const putDb = async (content) => {
  console.log('Updating the database');

  const textEditorDb = await openDB('jate', 1);

  const tx = textEditorDb.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  // Instead of using the add method we use the put method since we are updating
  const request = store.put({id: 1, value: content});

  const result = await request;
  console.log('Database succesfully updated', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
