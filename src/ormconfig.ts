import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: './db/sqlite.db',
  synchronize: true,
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
};
