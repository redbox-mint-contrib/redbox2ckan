import 'lodash/lodash.min.js'

class Adapter {
  static redboxToCkan(data) {
    console.log(`incoming data is:`, data)
    const dataset = _.assign({}, data.redboxDataset)
    const ckanDataset = {
      name: dataset.redboxOid,
      title: dataset.metadata.title,
      author: dataset.metaMetadata.createdBy,
      notes: dataset.metadata.description,
      owner_org: data.ownerOrgId
    }
    return ckanDataset
  }
}

export {
  Adapter
}
