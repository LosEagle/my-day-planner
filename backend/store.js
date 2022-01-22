const { File } = require('./file')

const getAll = async (path) => {
  const activities = await File.readFile(path);

  return JSON.parse(activities);
}

const setAll = async (path, activities) => {
  const formattedActivities = JSON.stringify(activities, null, 2);

  await File.writeFile(path, formattedActivities)
}

const clearAll = async (path) => {
  await File.writeFile(path, '[]')
}

const add = async (path, name, color, startTime, duration, notify) => {
  const activities = await getAll(path);

  activities.push({ name, color, startTime, duration, notify });

  await setAll(path, activities);
}

const remove = async (path, startTime) => {
  const activites = await getAll(path);
  const filteredActivities = activites.filter((activity) => activity.startTime !== startTime);

  await setAll(path, filteredActivities);
}

module.exports = {
  Store: {
    getAll,
    setAll,
    clearAll,
    add,
    remove,
  }
}
