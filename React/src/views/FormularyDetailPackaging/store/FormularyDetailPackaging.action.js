import { createAsyncThunk } from '@reduxjs/toolkit'
import { showSuccess } from 'middleware/notification/store/notification.actions'
import axios from '../../../axios'

const endPoint = 'FormularyDetailPackaging'

export const fetchFormularyDetailPackaging = createAsyncThunk(
    'FormularyDetailPackaging/fetchFormularyDetailPackaging',
    async () => {
        const response = await axios.get(`/${endPoint}`)
        const FormularyDetailPackaging = await response.data
        return FormularyDetailPackaging
    }
)

export const addFormularyDetailPackaging = createAsyncThunk(
    'FormularyDetailPackaging/addFormularyDetailPackaging',
    async (data, thunkAPI) => {
        const response = await axios.post(`/${endPoint}`, data)
        const FormularyDetailPackaging = await response.data
        thunkAPI.dispatch(
            showSuccess('FormularyDetailPackaging added successfully')
        )
        return FormularyDetailPackaging
    }
)

export const editFormularyDetailPackaging = createAsyncThunk(
    'FormularyDetailPackaging/editFormularyDetailPackaging',
    async (data, thunkAPI) => {
        let body = {
            ...data,
        }

        delete body['id']

        const response = await axios.put(`/${endPoint}/${data.id}`, body)
        const FormularyDetailPackaging = await response.data
        thunkAPI.dispatch(
            showSuccess('FormularyDetailPackaging updated successfully')
        )
        return FormularyDetailPackaging
    }
)

export const deleteFormularyDetailPackaging = createAsyncThunk(
    'FormularyDetailPackaging/deleteFormularyDetailPackaging',
    async (data, thunkAPI) => {
        const response = await axios.delete(`/${endPoint}/${data.id}`)
        const status = await response.status
        if (status === 200) {
            thunkAPI.dispatch(
                showSuccess(
                    'Selected FormularyDetailPackaging deleted successfully.'
                )
            )
            return data.id
        }
    }
)
