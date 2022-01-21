const { Store } = require('./store');
const { paths } = require('settings.json');

const getAll = async () => await Store.getAll(paths.bookmarks);

const setAll = async (bookmarks) => await Store.setAll(paths.bookmarks, bookmarks);

const clearAll = async () => await Store.clearAll(paths.bookmarks);

const add = async (name, color, startTime, duration, notify) =>
  await Store.add(path, name, color, startTime, duration, notify);

const remove = async (startTime) => await Store.remove(path, startTime);
