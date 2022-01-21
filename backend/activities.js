const { Store } = require('./store');
const { paths } = require('settings.json');

const getAll = async () => await Store.getAll(paths.activities);

const setAll = async (activities) => await Store.setAll(paths.activities, activities);

const clearAll = async () => await Store.clearAll(paths.activities);

const add = async (name, color, startTime, duration, notify) =>
  await Store.add(paths.activities, name, color, startTime, duration, notify);

const remove = async (startTime) => await Store.remove(paths.activities, startTime);
