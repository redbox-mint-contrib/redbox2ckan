import {Adapter} from './adapter.js'

class Builder {
  static get ckanPackage() {
    class RedboxToCkanPackage {
      constructor(dataset) {
        this.dataset = _.assign({}, dataset)
      }

      ownerOrg(id) {
        this.ownerOrgId = id
        return this
      }

      build() {
        return Adapter.redboxToCkanPackage(this)
      }
    }
    return RedboxToCkanPackage
  }

  static get ckanResource() {
    class RedboxDataLocationToCkanResource {
      constructor(dataset) {
        this.dataset = _.assign({}, dataset)
      }

      packageId(id) {
        this.packageId = id
        return this
      }

      url(urlBase) {
        this.urlBase = urlBase
        return this
      }

      build() {
        return Adapter.redboxDataLocationToCkanResource(this)
      }
    }
    return RedboxDataLocationToCkanResource
  }

  static get allCkanResources() {
    class AllRedboxDataLocationsToCkanResources {
      constructor(datasets) {
        this.datasets = datasets
      }

      packageId(id) {
        this.packageId = id
        return this
      }

      url(urlBase) {
        this.urlBase = urlBase
        return this
      }

      build() {
        const allCkanResources = []
        for (const dataset of this.datasets) {
          allCkanResources.push(new Builder
            .ckanResource(dataset)
            .packageId(this.packageId)
            .url(this.urlBase)
            .build()
          )
        }
        return allCkanResources
      }
    }
    return AllRedboxDataLocationsToCkanResources
  }
}

export {
  Builder
}
