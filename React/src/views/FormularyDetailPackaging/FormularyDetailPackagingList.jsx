import React, { useEffect } from 'react'
import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    deleteFormularyDetailPackaging,
    fetchFormularyDetailPackaging,
} from './store/FormularyDetailPackaging.action'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import { CircularProgress, IconButton } from '@mui/material'
import { Button, Icon } from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const FormularyDetailPackagingList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { entities } = useSelector((state) => state.FormularyDetailPackaging)
    const loading = useSelector(
        (state) => state.FormularyDetailPackaging.loading
    )

    const handleDelete = (id) => {
        dispatch(deleteFormularyDetailPackaging({ id }))
    }

    const handleEdit = (id) => {
        navigate(`/FormularyDetailPackaging/edit/${id}`)
    }

    const handleAdd = () => {
        navigate(`/FormularyDetailPackaging/add`)
    }

    useEffect(() => {
        dispatch(fetchFormularyDetailPackaging())
    }, [dispatch])

    const rows = entities.map((entity, idCounter) => {
        idCounter += 1
        return { id: idCounter, ...entity }
    })

    const columns = [
        { field: 'drugName', headerName: 'DrugName', width: 200 },
        { field: 'nDC', headerName: 'NDC', width: 200 },
        { field: 'tier', headerName: 'Tier', width: 200 },
        { field: 'year', headerName: 'Year', width: 200 },
        { field: 'not90DElig', headerName: 'Not90DElig', width: 200 },
        { field: 'pkgSize', headerName: 'PkgSize', width: 200 },
        { field: 'pkgQty', headerName: 'PkgQty', width: 200 },
        { field: 'pkgSizeUom', headerName: 'PkgSizeUom', width: 200 },
        { field: 'pkgDesc', headerName: 'PkgDesc', width: 200 },
        { field: 'usualDailyDose', headerName: 'UsualDailyDose', width: 200 },
        { field: 'pBP', headerName: 'PBP', width: 200 },
        { field: 'isUnitDosage', headerName: 'IsUnitDosage', width: 200 },
        {
            field: 'Actions',
            width: 200,
            renderCell: (cellValues) => {
                return (
                    <>
                        <IconButton
                            onClick={() => {
                                handleEdit(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                handleDelete(cellValues.row.id)
                            }}
                            aria-label="Example"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </>
                )
            },
        },
    ]
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Entities', path: '/FormularyDetailPackaging' },
                        { name: 'FormularyDetailPackaging' },
                    ]}
                />
            </div>

            <Button
                onClick={() => {
                    handleAdd()
                }}
                color="primary"
                variant="contained"
            >
                <Icon>add</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                    Add FormularyDetailPackaging
                </Span>
            </Button>

            <SimpleCard title="FormularyDetailPackaging">
                {loading ? (
                    <div
                        title="loading"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <CircularProgress className="progress" />
                    </div>
                ) : (
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                )}
            </SimpleCard>
        </Container>
    )
}

export default FormularyDetailPackagingList
