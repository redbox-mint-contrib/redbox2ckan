import axios from 'axios'

class Ckan {
  constructor() {
    this.ckanBaseUrl = process.env.CKAN_BASE_URL
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

  createOrganization(redboxConfig) {
    this.postToCkan('/organization_create', {
      name: redboxConfig.organization
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

const ckan = new Ckan()

export {
  ckan
}
