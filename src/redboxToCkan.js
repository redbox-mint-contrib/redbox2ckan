import 'lodash/lodash.min.js'
import {Api} from './api.js'
import {Builder} from './builder.js'

class RedboxToCkan {
  constructor(redboxConfig) {
    this.ownerOrgId = redboxConfig.ckan.ownerOrgId
    this.api = new Api(redboxConfig.ckan)
  }

  async createAllRedboxDatasets(redboxRecords) {
    await this.checkAndSetOrganization()
    for (const redboxRecord of redboxRecords) {
      const ckanDataset = new Builder
        .fromRedbox(redboxRecord)
        .ownerOrg(this.ownerOrgId)
        .build()
      const response = await this.api.createPackage(ckanDataset)
      if (!this.api.isResponseOk(response)) {
        console.log('Error: ', response)
      }
    }
  }

  async checkAndSetOrganization() {
    const id = this.ownerOrgId
    const hasOrganization = await this.api.hasOrganization(id)
    if (!hasOrganization) {
      console.log(`organization, ${id}, does not exist. Creating...`)
      const response = await this.api.createOrganization(id)
      if (!this.api.isResponseOk(response)) {
        throw new Error(`Unable to create org: ${this.ownerOrgId}`, response)
      }
    }
    console.log(`organization id, ${id}, created.`)
  }
}

export {
  RedboxToCkan
}
