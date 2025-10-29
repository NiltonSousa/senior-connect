export interface IController<T = void> {
  control(): Promise<T>;
}
