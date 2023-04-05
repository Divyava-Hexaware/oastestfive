import { createSlice } from '@reduxjs/toolkit'
import { fetchFormularyDetailPackaging } from './FormularyDetailPackaging.action'
import { addFormularyDetailPackaging } from './FormularyDetailPackaging.action'
import { editFormularyDetailPackaging } from './FormularyDetailPackaging.action'
import { deleteFormularyDetailPackaging } from './FormularyDetailPackaging.action'

const fetchFormularyDetailPackagingExtraReducer = {
    [fetchFormularyDetailPackaging.pending]: (state, action) => {
        state.loading = true
    },
    [fetchFormularyDetailPackaging.fulfilled]: (state, action) => {
        state.entities = [...action.payload]
        state.loading = false
    },
    [fetchFormularyDetailPackaging.rejected]: (state, action) => {
        state.loading = false
    },
}

const addFormularyDetailPackagingExtraReducer = {
    [addFormularyDetailPackaging.pending]: (state, action) => {
        state.loading = true
    },
    [addFormularyDetailPackaging.fulfilled]: (state, action) => {
        state.entities.push(action.payload)
        state.loading = false
    },
    [addFormularyDetailPackaging.rejected]: (state, action) => {
        state.loading = false
    },
}

const editFormularyDetailPackagingExtraReducer = {
    [editFormularyDetailPackaging.pending]: (state, action) => {
        state.loading = true
    },
    [editFormularyDetailPackaging.fulfilled]: (state, action) => {
        const {
            id,
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
        } = action.payload
        const existingFormularyDetailPackaging = state.entities.find(
            (FormularyDetailPackaging) =>
                FormularyDetailPackaging?.id?.toString() === id?.toString()
        )
        if (existingFormularyDetailPackaging) {
            existingFormularyDetailPackaging.drugName = drugName
            existingFormularyDetailPackaging.nDC = nDC
            existingFormularyDetailPackaging.tier = tier
            existingFormularyDetailPackaging.year = year
            existingFormularyDetailPackaging.not90DElig = not90DElig
            existingFormularyDetailPackaging.pkgSize = pkgSize
            existingFormularyDetailPackaging.pkgQty = pkgQty
            existingFormularyDetailPackaging.pkgSizeUom = pkgSizeUom
            existingFormularyDetailPackaging.pkgDesc = pkgDesc
            existingFormularyDetailPackaging.usualDailyDose = usualDailyDose
            existingFormularyDetailPackaging.pBP = pBP
            existingFormularyDetailPackaging.isUnitDosage = isUnitDosage
        }
        state.loading = false
    },
    [editFormularyDetailPackaging.rejected]: (state, action) => {
        state.loading = false
    },
}

const deleteFormularyDetailPackagingExtraReducer = {
    [deleteFormularyDetailPackaging.pending]: (state, action) => {
        state.loading = true
    },
    [deleteFormularyDetailPackaging.fulfilled]: (state, action) => {
        const id = action.payload
        const existingFormularyDetailPackaging = state.entities.find(
            (FormularyDetailPackaging) =>
                FormularyDetailPackaging.id.toString() === id.toString()
        )
        if (existingFormularyDetailPackaging) {
            state.entities = state.entities.filter(
                (FormularyDetailPackaging) => FormularyDetailPackaging.id !== id
            )
        }
        state.loading = false
    },
    [deleteFormularyDetailPackaging.rejected]: (state, action) => {
        state.loading = false
    },
}
const FormularyDetailPackagingSlice = createSlice({
    name: 'FormularyDetailPackaging',
    initialState: {
        entities: [],
        loading: false,
    },
    reducers: {
        FormularyDetailPackagingAdded(state, action) {
            state.entities.push(action.payload)
        },
        FormularyDetailPackagingUpdated(state, action) {
            const {
                id,
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
            } = action.payload
            const existingFormularyDetailPackaging = state.entities.find(
                (FormularyDetailPackaging) =>
                    FormularyDetailPackaging.id.toString() === id.toString()
            )
            if (existingFormularyDetailPackaging) {
                existingFormularyDetailPackaging.drugName = drugName
                existingFormularyDetailPackaging.nDC = nDC
                existingFormularyDetailPackaging.tier = tier
                existingFormularyDetailPackaging.year = year
                existingFormularyDetailPackaging.not90DElig = not90DElig
                existingFormularyDetailPackaging.pkgSize = pkgSize
                existingFormularyDetailPackaging.pkgQty = pkgQty
                existingFormularyDetailPackaging.pkgSizeUom = pkgSizeUom
                existingFormularyDetailPackaging.pkgDesc = pkgDesc
                existingFormularyDetailPackaging.usualDailyDose = usualDailyDose
                existingFormularyDetailPackaging.pBP = pBP
                existingFormularyDetailPackaging.isUnitDosage = isUnitDosage
            }
        },
        FormularyDetailPackagingDeleted(state, action) {
            const { id } = action.payload
            const existingFormularyDetailPackaging = state.entities.find(
                (FormularyDetailPackaging) =>
                    FormularyDetailPackaging.id.toString() === id.toString()
            )
            if (existingFormularyDetailPackaging) {
                state.entities = state.entities.filter(
                    (FormularyDetailPackaging) =>
                        FormularyDetailPackaging.id !== id
                )
            }
        },
    },
    extraReducers: {
        ...fetchFormularyDetailPackagingExtraReducer,
        ...addFormularyDetailPackagingExtraReducer,
        ...editFormularyDetailPackagingExtraReducer,
        ...deleteFormularyDetailPackagingExtraReducer,
    },
})

export const {
    FormularyDetailPackagingAdded,
    FormularyDetailPackagingUpdated,
    FormularyDetailPackagingDeleted,
} = FormularyDetailPackagingSlice.actions

export default FormularyDetailPackagingSlice.reducer
