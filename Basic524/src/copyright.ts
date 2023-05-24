// const year = document.getElementById('year') as HTMLSpanElement|null;
// // const thisYear = new Date().getFullYear().toString();
// const thisYear:string = new Date().getFullYear().toString();

// // in js the next code is correct, but here, no.because it could be null, but because we ensure it cannot be null and it's a span. so we need to give it an assertion
// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('yearTime', thisYear);
year.textContent = thisYear;
