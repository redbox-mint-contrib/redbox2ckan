import {ckan} from './ckan.js'
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
  'urlBase': `${process.env.CKAN_REDBOX_URL}`,
  'organization': 'test2'
}

const _redboxRecord = {
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
    'dataLocations': [],
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
}

// const logoSrc = require('@/assets/images/yeoman-logo.png')
//
// const logo = document.createElement('img')
// logo.setAttribute('src', logoSrc)
// document.getElementById('app').appendChild(logo)

document.getElementById('send-org-to-ckan').onclick = function() {
  sendOrgToCkan()
}
document.getElementById('send-dataset-to-ckan').onclick = function() {
  sendDatasetToCkan()
}

function sendOrgToCkan() {
  console.log('sending org data to ckan...')
  ckan.createOrganization(_redboxConfig)
}

function sendDatasetToCkan() {
  console.log('sending dataset data to ckan...')
}
