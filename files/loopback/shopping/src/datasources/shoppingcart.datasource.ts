import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'shoppingcart',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'jain410',
  database: 'shoppingcart'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ShoppingcartDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'shoppingcart';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.shoppingcart', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
