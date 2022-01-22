const { Activities } = require('./activities')

describe('activities', () => {
  beforeAll(async () => {
    await Activities.clearAll();
  });

  afterAll(async () => {
    await Activities.clearAll();
  });

  it('should read activities', async () => {
    expect(await Activities.getAll()).toStrictEqual([]);
  });

  it('should set multiple activities', async () => {
    const activities = [{
      name: 'Programming',
      color: '#000',
      startTime: '6pm',
      duration: '30',
      notify: '10',
    }];

    await Activities.setAll(activities);

    expect(await Activities.getAll()).toStrictEqual(activities);
  });

  it('should clear all activities', async () => {
    await Activities.clearAll();

    expect(await Activities.getAll()).toStrictEqual([]);
  });

  it('should add activity', async () => {
    const activities = [{
      name: 'Programming',
      color: '#000',
      startTime: '6pm',
      duration: '30',
      notify: '10',
    }];

    await Activities.add('Programming', '#000', '6pm', '30', '10');

    expect(await Activities.getAll()).toStrictEqual(activities);
  });

  it('should remove activity', async () => {
    await Activities.remove('6pm');

    expect(await Activities.getAll()).toStrictEqual([]);
  });
});
