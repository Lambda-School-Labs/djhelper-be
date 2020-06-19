const eventData = require('../jsonData/events.json');

console.log(eventData.length, 'events being inserted');

const createEvent = event => {
  return {
    dj_id: event.dj_id,
    name: event.name,
    date: event.date,
    event_type: event.event_type,
    description: event.description,
    img_url: event.img_url,
    notes: event.notes
  };
};

exports.seed = async function(knex) {
  const eventContainer = [];
  eventData.map(event => eventContainer.push(createEvent(event)));

  await knex('events').insert(eventContainer);
};
