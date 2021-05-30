import { HTTP, servicesPath } from '@/utils/http-common'
import { Employee } from '@/utils/employees-store'
import Vue from 'vue'

export interface Service {
  id: number;
  name: string;
  employee: Employee;
  date: string;
  longitude: string;
  latitude: string;
}

export interface ServiceDto {
  name: string;
  employeeId: number;
  date: string;
  address: string;
}

let initialized = false
export const servicesStore = {
  debug: true,
  state: {
    services: new Array<Service>()
  },
  async init () : Promise<void> {
    if (this.debug) {
      console.log('called method init in servicesStore')
    }

    if (!initialized) {
      const services = await HTTP.get<Array<Service>>(servicesPath)
      this.state.services.push(...services.data)
      initialized = true
    }
  },
  async addService (serviceDto: ServiceDto) : Promise<void> {
    if (this.debug) {
      console.log(`called addService in servicesStore with arguments: service=${JSON.stringify(serviceDto)}`)
    }

    const serviceResponse = await HTTP.post<Service>(servicesPath, serviceDto)
    this.state.services.push(serviceResponse.data)
  },
  async deleteService (serviceId: number) : Promise<void> {
    if (this.debug) {
      console.log(`called method deleteService in serviceStore with arguments: serviceId=${serviceId}`)
    }

    await HTTP.delete(`${servicesPath}/${serviceId}`)
    const element = this.state.services.filter(x => x.id === serviceId)[0]
    const elementIndex = this.state.services.indexOf(element)
    Vue.delete(this.state.services, elementIndex)
  },
  async editService (serviceId: number, serviceDto: ServiceDto) : Promise<void> {
    if (this.debug) {
      console.log(`called method editService in serviceStore with arguments: serviceId=${serviceId}, service=${JSON.stringify(serviceDto)}`)
    }

    const serviceResponse = await HTTP.put<Service>(`${servicesPath}/${serviceId}`, serviceDto)
    const element = this.state.services.filter(x => x.id === serviceId)[0]
    const elementIndex = this.state.services.indexOf(element)
    Vue.set(this.state.services, elementIndex, serviceResponse.data)
  }
}
