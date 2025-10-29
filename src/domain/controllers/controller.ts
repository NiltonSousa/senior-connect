export interface IControllerContext extends Record<string, unknown> {
  traceId: string;
}

export interface IController<T, U> {
  control(input: T, ctx?: IControllerContext): Promise<U>;
}
