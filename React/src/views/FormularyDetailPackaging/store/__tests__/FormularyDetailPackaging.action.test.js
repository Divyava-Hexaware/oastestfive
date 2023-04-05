import axios from '../../../../axios'
import MockAdapter from 'axios-mock-adapter'
import store from 'store/store'
import {
    fetchFormularyDetailPackaging,
    addFormularyDetailPackaging,
    editFormularyDetailPackaging,
    deleteFormularyDetailPackaging,
} from '../formularyDetailPackaging.action'

const getFormularyDetailPackagingListResponse = [
    {
        id: 1,
        DrugName: 'DrugName',
        NDC: 'NDC',
        Tier: 'Tier',
        Year: 'Year',
        Not90DElig: true,
        PkgSize: 77,
        PkgQty: 97,
        PkgSizeUom: 'PkgSizeUom',
        PkgDesc: 'PkgDesc',
        UsualDailyDose: 'UsualDailyDose',
        PBP: 'PBP',
        IsUnitDosage: false,
    },
]

const addFormularyDetailPackagingListResponse = (data) => {
    return { id: 2, ...data }
}
const editFormularyDetailPackagingListResponse = (data) => {
    return data
}

describe('should test FormularyDetailPackaging redux tooklit asyncThunk api action and redux store updation', () => {
    const mock = new MockAdapter(axios)
    const endPoint = 'formularyDetailPackaging'
    test('Should be able to fetch the formularyDetailPackaging list and update formularyDetailPackaging redux store', async () => {
        mock.onGet(`/${endPoint}`).reply(
            200,
            getFormularyDetailPackagingListResponse
        )
        const result = await store.dispatch(fetchFormularyDetailPackaging())
        const formularyDetailPackagingList = result.payload
        expect(result.type).toBe(
            'formularyDetailPackaging/fetchFormularyDetailPackaging/fulfilled'
        )
        expect(formularyDetailPackagingList).toEqual(
            getFormularyDetailPackagingListResponse
        )

        const state = store.getState().formularyDetailPackaging
        expect(state.entities).toEqual(formularyDetailPackagingList)
    })

    test('Should be able to add new formularyDetailPackaging to list and make post api and update formularyDetailPackaging redux store', async () => {
        const body = {
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 6,
            PkgQty: 28,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        }
        mock.onPost(`/${endPoint}`, body).reply(
            201,
            addFormularyDetailPackagingListResponse(body)
        )
        const result = await store.dispatch(addFormularyDetailPackaging(body))
        const formularyDetailPackagingItem = result.payload
        expect(result.type).toBe(
            'formularyDetailPackaging/addFormularyDetailPackaging/fulfilled'
        )
        expect(formularyDetailPackagingItem).toEqual(
            addFormularyDetailPackagingListResponse(body)
        )

        const state = store.getState().formularyDetailPackaging
        expect(state.entities).toContainEqual(
            addFormularyDetailPackagingListResponse(body)
        )
    })

    test('Should be able to edit formularyDetailPackaging in list and make put api call and update formularyDetailPackaging redux store', async () => {
        const body = {
            id: 1,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: false,
            PkgSize: 28,
            PkgQty: 51,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        }
        mock.onPut(`/${endPoint}/${body.id}`, body).reply(
            201,
            editFormularyDetailPackagingListResponse(body)
        )
        const result = await store.dispatch(editFormularyDetailPackaging(body))
        const formularyDetailPackagingItem = result.payload
        expect(result.type).toBe(
            'formularyDetailPackaging/editFormularyDetailPackaging/fulfilled'
        )
        expect(formularyDetailPackagingItem).toEqual(
            editFormularyDetailPackagingListResponse(body)
        )

        const state = store.getState().formularyDetailPackaging
        let changedFormularyDetailPackaging = state.entities.find(
            (p) => p.id === body.id
        )
        expect(changedFormularyDetailPackaging.name).toEqual(body.name)
    })

    test('Should be able to delete formularyDetailPackaging in list and update formularyDetailPackaging redux store', async () => {
        const input = {
            id: 2,
        }
        mock.onDelete(`/${endPoint}/${input.id}`, input).reply(200)
        let state = store.getState().formularyDetailPackaging
        const initialLength = state.entities.length
        const result = await store.dispatch(
            deleteFormularyDetailPackaging(input)
        )
        const deletId = result.payload
        expect(result.type).toBe(
            'formularyDetailPackaging/deleteFormularyDetailPackaging/fulfilled'
        )
        expect(deletId).toEqual(input.id)

        state = store.getState().formularyDetailPackaging
        const updateLength = initialLength - 1
        expect(state.entities.length).toEqual(updateLength)
    })
})
