// I'm evil
class Module {
  // I can't be mocked in tests
  cantMockThis(x: i32): void {
    // I can't spy on this either
  }
}

export interface Service<T> {
  module: T;
}

export class SpecialService implements Service<Module> {
  get module(): Module {
    return new Module();
  }
}
