export abstract class Entity<Id, Props> {
  public constructor(protected _props: Props, protected _id?: Id) {}

  public get id(): Id | null {
    return this._id
  }

  public set id(id: Id) {
    this._id = id
  }

  public get props(): Props {
    return this._props
  }

  public toJSON(): Required<Id & Props> {
    return {
      id: this._id,
      ...this._props
    } as Required<Id & Props>
  }
}
