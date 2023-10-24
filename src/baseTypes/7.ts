/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeeksDay {
  Monday = 'work',
  Tuesday = 'work',
  Wednesday = 'work',
  Thursday = 'work',
  Friday = 'work',
  Saturday = 'weekend', 
  Sunday = 'weekend',
}

function isWeekend(day: string): boolean {
  return WeeksDay[day.toLowerCase()] === 'weekend';
}

isWeekend('Monday'); 