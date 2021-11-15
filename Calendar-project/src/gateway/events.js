import { getDateTime, round } from '../utils/dateUtils.js';

export const baseUrl = 'https://617e67ce2ff7e600174bd7b8.mockapi.io/events';

export const fetchData = (event) => {
  event.dateFrom = new Date(
    new Date(getDateTime(event.date, event.dateFrom)).setMinutes(
      round(new Date(getDateTime(event.date, event.dateFrom)).getMinutes())
    )
  );
  event.dateTo = new Date(
    new Date(getDateTime(event.date, event.dateTo)).setMinutes(
      round(new Date(getDateTime(event.date, event.dateTo)).getMinutes())
    )
  );
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create event');
    }
  });
};

export const removeEvent = (id) => {
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to delete event ${id}`);
    }
  });
};
