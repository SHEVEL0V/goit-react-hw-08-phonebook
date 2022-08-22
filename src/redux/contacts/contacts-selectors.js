const loadingFetch = state => state.contacts.loadingFetch;

const loadingAdd = state => state.contacts.loadingAdd;

const loadingDelete = state => state.contacts.loadingDelete;

const data = state => state.contacts.data;

const totalSel = state => state.contacts.data.total;

export { data, loadingFetch, loadingAdd, loadingDelete, totalSel };
