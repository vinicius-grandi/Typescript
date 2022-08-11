import { returnDateTime } from './fileB';
import { logDate } from './fileC';

const main = () => {
  const date = returnDateTime();
  logDate(date);
};

main();
