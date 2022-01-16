const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getAll = async () => {
  const activities = await readFile('../shared/store/activities.json', 'utf8');

  return JSON.parse(activities);
}

const setAll = async (activities) => {
  const formattedActivities = JSON.stringify(activities, null, 2);

  await writeFile('../shared/store/activities.json', formattedActivities)
}

const clearAll = async() => {
  await writeFile('../shared/store/activities.json', '[]')
}

const add = async (name, color, startTime, duration, notify) => {
  const activities = await getAll();

  activities.push({ name,color, startTime, duration, notify });

  await setAll(activities)
}

const remove = async (startTime) => {
  const activites = await getAll();
  const filteredActivities = activites.filter((activity) => activity.startTime !== startTime);

  await setAll(filteredActivities);
}
