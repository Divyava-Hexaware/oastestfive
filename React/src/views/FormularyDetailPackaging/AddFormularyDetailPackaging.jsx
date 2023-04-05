import { Breadcrumb, SimpleCard } from 'components'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    addFormularyDetailPackaging,
    fetchFormularyDetailPackaging,
} from './store/FormularyDetailPackaging.action'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

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

const AddFormularyDetailPackaging = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [drugName, setDrugName] = useState('')
    const [nDC, setNDC] = useState('')
    const [tier, setTier] = useState('')
    const [year, setYear] = useState('')
    const [not90DElig, setNot90DElig] = useState('')
    const [pkgSize, setPkgSize] = useState('')
    const [pkgQty, setPkgQty] = useState('')
    const [pkgSizeUom, setPkgSizeUom] = useState('')
    const [pkgDesc, setPkgDesc] = useState('')
    const [usualDailyDose, setUsualDailyDose] = useState('')
    const [pBP, setPBP] = useState('')
    const [isUnitDosage, setIsUnitDosage] = useState('')

    const handleDrugName = (e) => setDrugName(e.target.value)
    const handleNDC = (e) => setNDC(e.target.value)
    const handleTier = (e) => setTier(e.target.value)
    const handleYear = (e) => setYear(e.target.value)
    const handleNot90DElig = (e) => setNot90DElig(e.target.value)
    const handlePkgSize = (e) => setPkgSize(parseInt(e.target.value))
    const handlePkgQty = (e) => setPkgQty(parseInt(e.target.value))
    const handlePkgSizeUom = (e) => setPkgSizeUom(e.target.value)
    const handlePkgDesc = (e) => setPkgDesc(e.target.value)
    const handleUsualDailyDose = (e) => setUsualDailyDose(e.target.value)
    const handlePBP = (e) => setPBP(e.target.value)
    const handleIsUnitDosage = (e) => setIsUnitDosage(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            addFormularyDetailPackaging({
                drugName,
                nDC,
                tier,
                year,
                not90DElig,
                pkgSize,
                pkgQty,
                pkgSizeUom,
                pkgDesc,
                usualDailyDose,
                pBP,
                isUnitDosage,
            })
        ).then(() => {
            dispatch(fetchFormularyDetailPackaging())
        })
        navigate('/FormularyDetailPackaging')
    }

    useEffect(() => {
        return () => {
            setDrugName('')
            setNDC('')
            setTier('')
            setYear('')
            setNot90DElig('')
            setPkgSize('')
            setPkgQty('')
            setPkgSizeUom('')
            setPkgDesc('')
            setUsualDailyDose('')
            setPBP('')
            setIsUnitDosage('')
        }
    }, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'AddFormularyDetailPackaging',
                            path: '/FormularyDetailPackaging',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="text"
                                name="DrugName"
                                id="drugNameInput"
                                onChange={handleDrugName}
                                value={drugName}
                                label="DrugName"
                            />

                            <TextField
                                type="text"
                                name="NDC"
                                id="nDCInput"
                                onChange={handleNDC}
                                value={nDC}
                                label="NDC"
                            />

                            <TextField
                                type="text"
                                name="Tier"
                                id="tierInput"
                                onChange={handleTier}
                                value={tier}
                                label="Tier"
                            />

                            <TextField
                                type="text"
                                name="Year"
                                id="yearInput"
                                onChange={handleYear}
                                value={year}
                                label="Year"
                            />

                            <TextField
                                value={not90DElig}
                                onChange={handleNot90DElig}
                                select
                                id="not90DEligInput"
                                label="Not90DElig"
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </TextField>

                            <TextField
                                type="number"
                                name="PkgSize"
                                id="pkgSizeInput"
                                onChange={handlePkgSize}
                                value={pkgSize || ''}
                                label="PkgSize"
                            />

                            <TextField
                                type="number"
                                name="PkgQty"
                                id="pkgQtyInput"
                                onChange={handlePkgQty}
                                value={pkgQty || ''}
                                label="PkgQty"
                            />

                            <TextField
                                type="text"
                                name="PkgSizeUom"
                                id="pkgSizeUomInput"
                                onChange={handlePkgSizeUom}
                                value={pkgSizeUom}
                                label="PkgSizeUom"
                            />

                            <TextField
                                type="text"
                                name="PkgDesc"
                                id="pkgDescInput"
                                onChange={handlePkgDesc}
                                value={pkgDesc}
                                label="PkgDesc"
                            />

                            <TextField
                                type="text"
                                name="UsualDailyDose"
                                id="usualDailyDoseInput"
                                onChange={handleUsualDailyDose}
                                value={usualDailyDose}
                                label="UsualDailyDose"
                            />

                            <TextField
                                type="text"
                                name="PBP"
                                id="pBPInput"
                                onChange={handlePBP}
                                value={pBP}
                                label="PBP"
                            />

                            <TextField
                                value={isUnitDosage}
                                onChange={handleIsUnitDosage}
                                select
                                id="isUnitDosageInput"
                                label="IsUnitDosage"
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default AddFormularyDetailPackaging
