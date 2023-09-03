const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'Name',
    width: 350,
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'budget',
    headerName: 'Budget',
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    width: 350,
    editable: true
  },
  {
    field: 'balance',
    headerName: 'Balance',
    align: 'left',
    headerAlign: 'left',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) => `${params.row.balance || ''}`
  }
]

const defaultRows = [
  {
    id: '1',
    name: 'Monthly Groceries',
    budget: 500.0,
    balance: 375.0,
    items: []
  },
  {
    id: '2',
    name: 'Vacation Fund',
    budget: 1000.0,
    balance: 750.0,
    items: []
  },
  {
    id: '3',
    name: 'Home Renovation',
    budget: 5000.0,
    balance: 3000.0,
    items: []
  },
  {
    id: '4',
    name: 'Emergency Fund',
    budget: 2000.0,
    balance: 2000.0,
    items: []
  },
  {
    id: '5',
    name: 'Tech Gadgets',
    budget: 1500.0,
    balance: 1000.0,
    items: []
  }
]

const items = [
  {
    id: 1,
    name: 'compra supermercado',
    store: 'Intermache',
    details: 'Ainda por definir',
    value: parseFloat('20'),
    date: '2023-09-02T14:21:49.854Z',
    type: 'comida'
  },
  {
    id: 2,
    name: 'comprar pão',
    store: 'padaria',
    details: 'Ainda por definir',
    value: parseFloat('5'),
    date: '2023-09-02T14:21:49.854Z'
  },
  {
    id: 3,
    name: 'gasoleo',
    store: 'Intermache',
    details: 'Ainda por definir',
    value: parseFloat('45'),
    date: '2023-09-02T14:21:49.854Z'
  }
]
export const Category = (props) => {
  return <div></div>
}
