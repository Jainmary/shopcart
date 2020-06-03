import {DefaultCrudRepository} from '@loopback/repository';
import {Cartt, CarttRelations} from '../models';
import {ShoppingcartDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CarttRepository extends DefaultCrudRepository<
  Cartt,
  typeof Cartt.prototype.id,
  CarttRelations
> {
  constructor(
    @inject('datasources.shoppingcart') dataSource: ShoppingcartDataSource,
  ) {
    super(Cartt, dataSource);
  }
}
