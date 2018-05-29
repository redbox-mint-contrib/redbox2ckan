import 'lodash/lodash.min.js'
import {Api} from './api.js'
import {Builder} from './builder.js'
import url from 'url'

class RedboxToCkan {
  constructor(redboxConfig) {
    this.redboxConfig = redboxConfig
    this.ownerOrgId = redboxConfig.ckan.ownerOrgId
    this.api = new Api(redboxConfig.ckan)
  }

  async createAllRedboxDatasets(redboxRecords) {
    await this.checkAndSetOrganization()
    for (const redboxRecord of redboxRecords) {
      const ckanPackage = this.buildCkanPackage(redboxRecord)
      const response = await this.api.createPackage(ckanPackage)
      if (!this.api.isResponseOk(response)) {
        console.log('Error: ', response)
      } else {
        console.log(response.data)
        await this.createAllRedboxDataLocations(response, redboxRecord)
      }
    }
  }

  buildCkanPackage(redboxRecord) {
    return new Builder
      .ckanPackage(redboxRecord)
      .ownerOrg(this.ownerOrgId)
      .build()
  }

  async createAllRedboxDataLocations(response, redboxRecord) {
    const packageId = response.data.result.id
    const ckanResources = this.buildCkanResources(redboxRecord, packageId)
    for (const resource of ckanResources) {
      const response = await this.api.createResource(resource)
      if (!this.api.isResponseOk(response)) {
        console.log('Error: ', response)
      }
    }
  }

  buildCkanResources(redboxRecord, packageId) {
    return new Builder
      .allCkanResources(redboxRecord.metadata.dataLocations)
      .packageId(packageId)
      .url(this.getRedboxUrl())
      .build()
  }

  getRedboxUrl() {
    return url.resolve(this.redboxConfig.urlBase, `/default/rdmp/`)
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
