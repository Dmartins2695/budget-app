import { Box } from '@mui/material'
import { Datatable } from '../../components/Datatable'
import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCategories } from '../../graphql/queries'
import { createCategory } from '../../graphql/mutations'

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
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await API.graphql(graphqlOperation(listCategories))
        const categoriesList = categories.data.listCategories.items
        return categoriesList
      } catch (e) {
        console.log(e)
      }
    }

    fetchData().then((data) => setRows(data))
  }, [])

  const saveToDataBase = (modifiedRows, newRow) => {
    const saveData = async (newRow) => {
      try {
        newRow.balance = parseFloat('0')
        delete newRow.isNew
        return await API.graphql(graphqlOperation(createCategory, { input: newRow }))
      } catch (e) {}
    }
    if (rows !== modifiedRows) {
      newRow.id = modifiedRows.length - 1
      saveData(newRow).then((r) => console.log(r))
    }
  }

  console.log(rows)

  return (
    <Box>
      <Datatable rows={rows} columns={columns} saveToDataBase={saveToDataBase} />
    </Box>
  )
}
