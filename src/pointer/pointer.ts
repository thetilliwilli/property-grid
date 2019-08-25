export interface IPointer<TValue> {
  value: TValue;
}

export class Pointer<TObj, TKey extends keyof TObj> implements IPointer<TObj[TKey]>{
  public get value(): TObj[TKey] { return this._obj[this._key]; }
  public set value(value: TObj[TKey]) { this._obj[this._key] = value; }
  constructor(private _obj: TObj, private _key: TKey) { }
}