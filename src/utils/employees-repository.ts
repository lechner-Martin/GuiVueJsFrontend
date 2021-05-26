import { HTTP } from '@/utils/http-common'

export class EmployeesRepositorySingleton {
  private static instance: EmployeesRepositorySingleton;

  // eslint-disable-next-line no-useless-constructor,@typescript-eslint/no-empty-function
  private constructor () { }

  public static get Instance () {
    return this.instance || (this.instance = new EmployeesRepositorySingleton())
  }
}

export interface Employee {
  id: number;
  name: string;
}
