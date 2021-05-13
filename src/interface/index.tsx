type CallBack = (...args: any[]) => void

export interface IPropsDisplay {
  handler: CallBack;
}

export interface IPropsValue {
    value: string;
}
