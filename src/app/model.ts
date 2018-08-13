export interface Config {
  customerLimits: number,
  apiUrl: string;
}

export enum CustomerType {
  Standard,
  Premium,
  VIP
}
