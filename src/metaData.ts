export {}

const data = {
  rows : [
    ['Lisa', 16, 'Female', '2000-12-01'],
    ['Bob', 22, 'Male', '1996-01-21']
  ],
  metaData: [
    { name: 'name', note: '' },
    { name: 'age', note: ''},
    { name: 'gender', note: ''},
    { name: 'birthday', note: ''},
  ]
};

function composeData(data: { rows: Array<any[]>, metaData: Array<any>}) {
  const { rows, metaData } = data;

  return rows.reduce((acc, row) => {
    const obj: any = {};

    row.forEach((v, index) => {
      const { name } = metaData[index];
      Object.defineProperty(obj, name, { value: v, enumerable: true });
    });

    acc.push(obj);

    return acc;
  }, []);
}

const res = composeData(data);
console.log(`res ${JSON.stringify(res)}`);