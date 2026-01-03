// src/admin/resources/finance/journalEntries/index.ts
import { JournalEntryList } from './JournalEntryList';
import { JournalEntryCreate } from './JournalEntryCreate';
import { JournalEntryEdit } from './JournalEntryEdit';
import { JournalEntryDetails } from './JournalEntryDetails';
import { JournalEntryDelete } from './JournalEntryDelete';

export { JournalEntryList, JournalEntryCreate, JournalEntryEdit, JournalEntryDetails, JournalEntryDelete };

export const JournalEntries = {
  list: JournalEntryList,
  show: JournalEntryDetails,
  create: JournalEntryCreate,
  edit: JournalEntryEdit,
  // Observação: <Resource /> do react-admin não aceita `delete` como prop.
  // Este componente fica pronto para rota custom (CustomRoutes), se quiser.
  delete: JournalEntryDelete,
};
