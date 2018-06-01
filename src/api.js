import axios from 'axios'
import 'lodash/lodash.min.js'
import {RestErrorHandler} from './restErrorHandler.js'

class Api {
  constructor(config) {
    this.baseUrl = config.urlBase
    this._api = axios.create({
      baseURL: `${this.baseUrl}/api/action`,
      timeout: 10000,
      headers: {
        common: {
          'Authorization': `${config.apiKey}`
        }
      }
    })
    this.restErrorHandler = new RestErrorHandler()
  }

  async getGroupList() {
    const response = await this.getFromCkan('/group_list')
    return response
  }

  isResponseOk(response) {
    return response.status === 200
  }

  async hasOrganization(value) {
    const response = await this.getOrganization(value)
    return this.isResponseOk(response)
  }

  async getOrganization(value) {
    const response = await this.getFromCkan('/organization_show', {
      id: value
    })
    return response
  }

  async getOrganization(value) {
    const response = await this.getFromCkan('/organization_show', {
      id: value
    })
    return response
  }

  async createOrganization(value) {
    const response = await this.postToCkan('/organization_create', {
      name: value
    })
    return response
  }

  async deleteOrganization(value) {
    const response = await this.postToCkan('/organization_delete', {
      id: value
    })
    return response
  }

  async purgeOrganization(value) {
    const response = await this.postToCkan('/organization_purge', {
      id: value
    })
    return response
  }

  // NB: 'deletes', not purges
  async deletePackage(value) {
    const response = await this.postToCkan('/package_delete', {
      id: value
    })
    return response
  }

  async purgePackage(value) {
    const response = await this.postToCkan('/dataset_purge', {
      id: value
    })
    return response
  }

  async createPackage(value) {
    const response = await this.postToCkan('/package_create', value)
    return response
  }

  async createResource(value) {
    const response = await this.postToCkan('/resource_create', value)
    return response
  }

  async postToCkan(path, data, params={}) {
    let response
    try {
      response = await this._api.post(path, data, {
        params: params
      })
    } catch (error) {
      response = this.restErrorHandler.showResponseDataError(error)
    } finally {
      return response
    }
  }

  async getFromCkan(path, params={}) {
    let response
    try {
      response = await this._api.get(path, {
        params: params
      })
    } catch (error) {
      response = this.restErrorHandler.showResponseDataError(error)
    } finally {
      return response
    }
  }
}

export {
  Api
}
