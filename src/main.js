import 'lodash/lodash.min.js'
import {RedboxToCkan} from './redboxToCkan.js'
require('normalize.css')
require('@/main.css')

const _redboxConfig = {
  'curation': {
    'pidType': 'local',
    'pidProperty': 'localPid'
  },
  'identity': {
    'RIF_CSGroup': 'The University of Examples, Australia'
  },
  'urlBase': `${process.env.REDBOX_BASE_URL}`,
  'ckan': {
    'urlBase': `${process.env.CKAN_BASE_URL}`,
    'apiKey': `${process.env.CKAN_ADMIN_API_KEY}`,
    'ownerOrgId': 'test3'
  }
}

const _redboxRecords = [{
  'metaMetadata': {
    'brandId': '5acc42ad0937ed00057df76f',
    'createdBy': 'admin',
    'type': 'dataPublication',
    'form': 'dataPublication-1.0-draft',
    'attachmentFields': ['dataLocations'],
    'lastSavedBy': 'admin',
    'lastSaveDate': '2018-05-18T11:29:33+10:00'
  },
  'authorization': {
    'view': ['admin'],
    'edit': ['admin'],
    'viewRoles': [
      'Admin', 'Librarians'
    ],
    'editRoles': ['Admin', 'Librarians']
  },
  'metadata': {
    'parameterRetriever': '',
    '': {},
    'rdmp': {
      'oid': '2781f63397d2cbfaa585acde225dea26',
      'title': 'asfasffas'
    },
    'title': 'Title',
    'description': '# Description\n\n## A markdown description\n\nThis might be a problem Matt :)',
    'dc:subject_anzsrc:toa_rdf:resource': 'catalogueOrIndex',
    'finalKeywords': ['keyword'],
    'startDate': '2018-05-02',
    'endDate': '2018-05-31',
    'timePeriod': '123',
    'geospatial': {},
    'dataLocations': [
      {
        'type': 'attachment',
        'location': '36940f28431f0419aaf56168e1cda7bd/attach/72570f502d25cb9984d2b897e442a869',
        'mimeType': 'video/quicktime',
        'name': '2[6].mov',
        'fileId': '72570f502d25cb9984d2b897e442a869',
        'uploadUrl': 'http://localhost:1500/default/rdmp/record/36940f28431f0419aaf56168e1cda7bd/attach/72570f502d25cb9984d2b897e442a869'
      },
      {
        'type': 'attachment',
        'location': '36940f28431f0419aaf56168e1cda7bd/attach/86b46ad2d84ceb6838771ac49a7e3590',
        'name': '2-openid.log',
        'fileId': '86b46ad2d84ceb6838771ac49a7e3590',
        'uploadUrl': 'http://localhost:1500/default/rdmp/record/36940f28431f0419aaf56168e1cda7bd/attach/86b46ad2d84ceb6838771ac49a7e3590'
      },
      {
        'type': 'attachment',
        'location': '36940f28431f0419aaf56168e1cda7bd/attach/c1a392c753c8d525040015c055b2c01b',
        'mimeType': 'video/quicktime',
        'name': 'Issue-Vipul.mov',
        'fileId': 'c1a392c753c8d525040015c055b2c01b',
        'uploadUrl': 'http://localhost:1500/default/rdmp/record/36940f28431f0419aaf56168e1cda7bd/attach/c1a392c753c8d525040015c055b2c01b'
      },
      {
        'type': 'attachment',
        'location': '36940f28431f0419aaf56168e1cda7bd/attach/28d7aa99eca715be7bf20879915e3ef0',
        'mimeType': 'application/x-bzip2',
        'name': 'Firefox 59.0.2.dmg',
        'fileId': '28d7aa99eca715be7bf20879915e3ef0',
        'uploadUrl': 'http://localhost:1500/default/rdmp/record/36940f28431f0419aaf56168e1cda7bd/attach/28d7aa99eca715be7bf20879915e3ef0'
      },
      {
        'type': 'attachment',
        'location': '36940f28431f0419aaf56168e1cda7bd/attach/da54fafc82c86e4ba53aac38cadbf233',
        'mimeType': 'image/png',
        'name': 'Screen Shot 2017-11-28 at 9.59.12 am.png',
        'fileId': 'da54fafc82c86e4ba53aac38cadbf233',
        'uploadUrl': 'http://localhost:1500/default/rdmp/record/36940f28431f0419aaf56168e1cda7bd/attach/da54fafc82c86e4ba53aac38cadbf233'
      }
    ],
    'related_websites': [
      {
        'related_url': '',
        'related_title': '',
        'related_notes': ''
      }
    ],
    'related_data': [
      {
        'related_relationship': '',
        'related_title': '',
        'related_url': '',
        'related_notes': '',
        'related_localdata': [],
        'related_publishrda': []
      }
    ],
    'related_services': [
      {
        'related_relationship': '',
        'related_title': '',
        'service_identifer': '',
        'related_notes': ''
      }
    ],
    'embargoEnabled': [],
    'embargoUntil': '',
    'embargoNote': ''
  },
  'workflow': {
    'stage': 'draft',
    'stageLabel': 'Draft'
  },
  'redboxOid': '1295670950f612afa219455f011afcb9',
  'date_object_created': ['2018-05-18T01:29:03.853Z'],
  'date_object_modified': ['2018-05-18T01:29:33.365Z']
}]
// const logoSrc = require('@/assets/images/yeoman-logo.png')
//
// const logo = document.createElement('img')
// logo.setAttribute('src', logoSrc)
// document.getElementById('app').appendChild(logo)

const _redboxToCkan = new RedboxToCkan(_redboxConfig)

function hasValidInput(value) {
  const isValid = _.isString(value) && value.trim().length > 0
  if (!isValid) {
    throw new Error('A string value must be entered.')
  }
  return isValid
}

for (const el of document.getElementsByClassName('ckan-api')) {
  el.onclick = function(event) {
    const value = document.getElementById('ckan-value').value
    // ensure element id follows javascript convention of kebab-case and corresponding ckan method match for camelCase
    const fnName = _.camelCase(event.target.id)
    switch (fnName) {
      case 'createOrganization':
        if (hasValidInput(value)) {
          _redboxToCkan.api[fnName](value)
        }
        break
      case 'createPackage':
        _redboxToCkan.createAllRedboxDatasets(_redboxRecords)
        break
      case 'getGroupList':
        _redboxToCkan.api[fnName]()
        break
      default:
        if (hasValidInput(value)) {
          _redboxToCkan.api[fnName](value)
        }
        break
    }
  }
}
