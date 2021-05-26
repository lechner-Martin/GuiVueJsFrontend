import { HTTP, employeesPath } from '@/utils/http-common'

export interface Employee {
  id: number;
  name: string;
}

export interface EmployeeDto {
  name: string;
}

let initialized = false
export const employeesStore = {
  debug: true,
  state: {
    employees: new Array<Employee>()
  },
  async init () : Promise<void> {
    if (this.debug) {
      console.log('called method init int employeesStore')
    }

    if (!initialized) {
      const employees = await HTTP.get<Array<Employee>>(employeesPath)
      this.state.employees.push(...employees.data)
      initialized = true
    }
  },
  async addEmployee (empDto: EmployeeDto) : Promise<void> {
    if (this.debug) {
      console.log(`called addEmployee in employeesStore with arguments: employee=${JSON.stringify(empDto)}`)
    }

    const employee = await HTTP.post(employeesPath, empDto)
    this.state.employees.push(employee.data)
  }
}
