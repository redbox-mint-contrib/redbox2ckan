import url from 'url'

class Adapter {
  static redboxToCkanPackage(data) {
    const dataset = _.assign({}, data.dataset)
    const ckan = {
      name: dataset.redboxOid,
      title: dataset.metadata.title,
      author: dataset.metaMetadata.createdBy,
      notes: dataset.metadata.description,
      owner_org: data.ownerOrgId
    }
    return ckan
  }

  static redboxDataLocationToCkanResource(data) {
    const dataset = _.assign({}, data.dataset)
    const ckan = {
      name: dataset.name,
      format: dataset.mimeType,
      package_id: data.packageId
    }
    ckan.url = dataset.type !== 'url' ? url.resolve(data.urlBase, dataset.location) : dataset.location
    return ckan
  }
}

export {
  Adapter
}
