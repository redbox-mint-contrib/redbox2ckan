import axios from 'axios'

class Ckan {
  constructor(config) {
    this.ckanBaseUrl = process.env.CKAN_BASE_URL
    this.config = config
    this._api = axios.create({
      baseURL: `${this.ckanBaseUrl}/api/action`,
      timeout: 10000,
      headers: {
        common: {
          'Authorization': `${process.env.CKAN_ADMIN_API_KEY}`
        }
      }
    })
  }

  createOrganization() {
    this.postToCkan('/organization_create', {
      name: this.config.organization
    })
  }

  deleteOrganization(redboxConfig) {
    this.postToCkan('/organization_delete', {
      id: this.config.organization
    })
  }

  postToCkan(path, data, params={}) {
    this._api.post(path, data, {
      params: params
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}

export function createInstance(config) {
  const ckan = new Ckan(config)
  return ckan
}
