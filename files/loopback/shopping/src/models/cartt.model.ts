import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cartt extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  product_name: string;

  @property({
    type: 'number',
    required: true,
  })
  product_price: number;

  @property({
    type: 'string',
    required: true,
  })
  product_image: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cartt>) {
    super(data);
  }
}

export interface CarttRelations {
  // describe navigational properties here
}

export type CarttWithRelations = Cartt & CarttRelations;
