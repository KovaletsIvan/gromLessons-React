import { getDateTime } from '../utils/dateUtils.js';
// export const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2021, 10, 5, 10, 15),
//     dateTo: new Date(2021, 10, 5, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2021, 10, 1, 9, 30),
//     dateTo: new Date(2021, 10, 1, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2021, 10, 2, 10, 30),
//     dateTo: new Date(2021, 10, 2, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2021, 10, 3, 10, 30),
//     dateTo: new Date(2021, 10, 3, 11, 30),
//   },
// ];

export const baseUrl = 'https://617e67ce2ff7e600174bd7b8.mockapi.io/events';

export const fetchData = (event) => {
  event.dateFrom = new Date(getDateTime(event.date, event.dateFrom));
  event.dateTo = new Date(getDateTime(event.date, event.dateTo));
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });
};

// export const getData = () => {
//   fetch(baseUrl)
//     .then((resp) => resp.json())
//     .then((result) => {
//       result.map((elem) => {
//         (elem.dateFrom = new Date(elem.dateFrom)),
//           (elem.dateTo = new Date(elem.dateTo));
//       });
//       return result;
//     })
//     .then((res) => {
//       this.setState({ events: res });
//     });
// };
