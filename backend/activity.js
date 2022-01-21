const { file } = require('./file')

const getAll = async () => {
  const activities = await file.readFile('../shared/store/activities.json');

  return JSON.parse(activities);
}

const setAll = async (activities) => {
  const formattedActivities = JSON.stringify(activities, null, 2);

  await file.writeFile('../shared/store/activities.json', formattedActivities)
}

const clearAll = async() => {
  await file.writeFile('../shared/store/activities.json', '[]')
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
