import { InvalidParamError } from 'project-custom-errors'
import { NumericIdEntity } from './numeric-id-entity'

export abstract class IntIdEntity<Props> extends NumericIdEntity<Props> {
  public constructor(props: Props, id?: number) {
    if (id && !Number.isInteger(id)) {
      throw new InvalidParamError('Id is not Integer')
    }

    super(props, id)
  }
}
