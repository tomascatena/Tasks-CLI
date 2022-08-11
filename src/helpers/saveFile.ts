import fs from 'fs';

export const saveToDB = (data: any) => {
  const file = './src/db/db.json';

  fs.writeFileSync(file, JSON.stringify(data));
};
