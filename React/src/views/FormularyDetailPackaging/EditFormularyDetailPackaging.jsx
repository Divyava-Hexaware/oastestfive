import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
    editFormularyDetailPackaging,
    fetchFormularyDetailPackaging,
} from './store/FormularyDetailPackaging.action'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

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

const EditFormularyDetailPackaging = () => {
    const { id: FormularyDetailPackagingId } = useParams()

    const FormularyDetailPackaging = useSelector((state) =>
        state.FormularyDetailPackaging.entities.find(
            (FormularyDetailPackaging) =>
                FormularyDetailPackaging.id.toString() ===
                FormularyDetailPackagingId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [DrugName, setDrugName] = useState(FormularyDetailPackaging.DrugName)

    const [NDC, setNDC] = useState(FormularyDetailPackaging.NDC)

    const [Tier, setTier] = useState(FormularyDetailPackaging.Tier)

    const [Year, setYear] = useState(FormularyDetailPackaging.Year)

    const [Not90DElig, setNot90DElig] = useState(
        FormularyDetailPackaging.Not90DElig
    )

    const [PkgSize, setPkgSize] = useState(FormularyDetailPackaging.PkgSize)

    const [PkgQty, setPkgQty] = useState(FormularyDetailPackaging.PkgQty)

    const [PkgSizeUom, setPkgSizeUom] = useState(
        FormularyDetailPackaging.PkgSizeUom
    )

    const [PkgDesc, setPkgDesc] = useState(FormularyDetailPackaging.PkgDesc)

    const [UsualDailyDose, setUsualDailyDose] = useState(
        FormularyDetailPackaging.UsualDailyDose
    )

    const [PBP, setPBP] = useState(FormularyDetailPackaging.PBP)

    const [IsUnitDosage, setIsUnitDosage] = useState(
        FormularyDetailPackaging.IsUnitDosage
    )

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
            editFormularyDetailPackaging({
                id: FormularyDetailPackagingId,
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

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'EditFormularyDetailPackaging',
                            path: '/FormularyDetailPackaging',
                        },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="text"
                                name="DrugName"
                                id="drugNameInput"
                                onChange={handleDrugName}
                                value={drugName}
                                validators={['required']}
                                label="DrugName"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="NDC"
                                id="nDCInput"
                                onChange={handleNDC}
                                value={nDC}
                                validators={['required']}
                                label="NDC"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Tier"
                                id="tierInput"
                                onChange={handleTier}
                                value={tier}
                                validators={['required']}
                                label="Tier"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="Year"
                                id="yearInput"
                                onChange={handleYear}
                                value={year}
                                validators={['required']}
                                label="Year"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                value={not90DElig}
                                onChange={handleNot90DElig}
                                select
                                id="not90DEligInput"
                                label="Not90DElig"
                                validators={['required']}
                                errorMessages={['this field is required']}
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
                                validators={['required']}
                                label="PkgSize"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                type="number"
                                name="PkgQty"
                                id="pkgQtyInput"
                                onChange={handlePkgQty}
                                value={pkgQty || ''}
                                validators={['required']}
                                label="PkgQty"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="PkgSizeUom"
                                id="pkgSizeUomInput"
                                onChange={handlePkgSizeUom}
                                value={pkgSizeUom}
                                validators={['required']}
                                label="PkgSizeUom"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="PkgDesc"
                                id="pkgDescInput"
                                onChange={handlePkgDesc}
                                value={pkgDesc}
                                validators={['required']}
                                label="PkgDesc"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="UsualDailyDose"
                                id="usualDailyDoseInput"
                                onChange={handleUsualDailyDose}
                                value={usualDailyDose}
                                validators={['required']}
                                label="UsualDailyDose"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="PBP"
                                id="pBPInput"
                                onChange={handlePBP}
                                value={pBP}
                                validators={['required']}
                                label="PBP"
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                value={isUnitDosage}
                                onChange={handleIsUnitDosage}
                                select
                                id="isUnitDosageInput"
                                label="IsUnitDosage"
                                validators={['required']}
                                errorMessages={['this field is required']}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>send</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Save
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default EditFormularyDetailPackaging
