import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Cartt} from '../models';
import {CarttRepository} from '../repositories';

export class CartuserController {
  constructor(
    @repository(CarttRepository)
    public carttRepository : CarttRepository,
  ) {}

  @post('/cartts', {
    responses: {
      '200': {
        description: 'Cartt model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cartt)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartt, {
            title: 'NewCartt',
            exclude: ['id'],
          }),
        },
      },
    })
    cartt: Omit<Cartt, 'id'>,
  ): Promise<Cartt> {
    return this.carttRepository.create(cartt);
  }

  @get('/cartts/count', {
    responses: {
      '200': {
        description: 'Cartt model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Cartt) where?: Where<Cartt>,
  ): Promise<Count> {
    return this.carttRepository.count(where);
  }

  @get('/cartts', {
    responses: {
      '200': {
        description: 'Array of Cartt model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Cartt, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Cartt) filter?: Filter<Cartt>,
  ): Promise<Cartt[]> {
    return this.carttRepository.find(filter);
  }

  @patch('/cartts', {
    responses: {
      '200': {
        description: 'Cartt PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartt, {partial: true}),
        },
      },
    })
    cartt: Cartt,
    @param.where(Cartt) where?: Where<Cartt>,
  ): Promise<Count> {
    return this.carttRepository.updateAll(cartt, where);
  }

  @get('/cartts/{id}', {
    responses: {
      '200': {
        description: 'Cartt model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cartt, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cartt, {exclude: 'where'}) filter?: FilterExcludingWhere<Cartt>
  ): Promise<Cartt> {
    return this.carttRepository.findById(id, filter);
  }

  @patch('/cartts/{id}', {
    responses: {
      '204': {
        description: 'Cartt PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartt, {partial: true}),
        },
      },
    })
    cartt: Cartt,
  ): Promise<void> {
    await this.carttRepository.updateById(id, cartt);
  }

  @put('/cartts/{id}', {
    responses: {
      '204': {
        description: 'Cartt PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cartt: Cartt,
  ): Promise<void> {
    await this.carttRepository.replaceById(id, cartt);
  }

  @del('/cartts/{id}', {
    responses: {
      '204': {
        description: 'Cartt DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.carttRepository.deleteById(id);
  }
}
