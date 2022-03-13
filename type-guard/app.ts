function printType(value: number | string) {
  if (typeof value === 'string') {
    value;
    return `${value} is a string`;
  }
  return `${value} is a number`;
}


interface Developer {
  name: string;
  language: string;
}

interface Designer {
  name: string;
  software: string;
}

const dev: Developer = {
  name: 'Túlio',
  language: 'Javascript',
};

const des: Designer = {
  name: 'Paulo',
  software: 'Excel'
};

const isDeveloper = (value: Designer | Developer): value is Developer  => {
  return 'language' in value;
};

function printSkill(person: Designer | Developer): void {
  if (isDeveloper(person)) {
    console.log(person.language);
  } else {
    console.log(person.software);
  }
}
