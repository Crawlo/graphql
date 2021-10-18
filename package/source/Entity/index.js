import Entity from '@crawlo/entity'
import extender from './extender'

const GraphQLEntity = extender(Entity)

GraphQLEntity.graphql = Symbol('graphql')

export default GraphQLEntity