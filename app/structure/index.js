import S from '@sanity/desk-tool/structure-builder'
import {FiCalendar, FiDatabase, FiFeather, FiUsers} from 'react-icons/fi'

import {workflowListItems} from './workflow'

const listItems = [
  // NOTE: uncomment this to debug
  // {schema: 'workflow.metadata', title: 'Metadata', icon: FiDatabase},
  {schema: 'post', title: 'Posts', icon: FiFeather},
  {schema: 'author', title: 'Authors', icon: FiUsers},
  {schema: 'release', title: 'Releases', icon: FiCalendar}
]

const docTypeListItems = listItems.map(({schema, title, icon}) =>
  S.documentTypeListItem(schema).icon(icon).title(title)
)

export default () =>
  S.list()
    .title('Content')
    .items([...workflowListItems, S.divider(), ...docTypeListItems])
