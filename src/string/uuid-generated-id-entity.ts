import { v4 } from 'uuid'
import { StringIdEntity } from './string-id-entity'

export abstract class UUIDGeneratedIdEntity<Props> extends StringIdEntity<Props> {
  public constructor(props: Props, id?: string) {
    super(props, id ?? v4())
  }
}
