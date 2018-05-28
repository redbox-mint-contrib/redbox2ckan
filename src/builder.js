import {Adapter} from './adapter.js'

class Builder {
  static get fromRedbox() {
    class RedboxToCkan {
      constructor(redboxDataset) {
        this.redboxDataset = _.assign({}, redboxDataset)
      }

      ownerOrg(orgId) {
        this.ownerOrgId = orgId
        return this
      }

      build() {
        return Adapter.redboxToCkan(this)
      }
    }
    return RedboxToCkan
  }
}

export {
  Builder
}
