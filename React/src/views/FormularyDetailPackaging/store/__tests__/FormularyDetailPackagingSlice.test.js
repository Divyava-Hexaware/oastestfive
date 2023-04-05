import store from 'store/store'
import {
    formularyDetailPackagingAdded,
    formularyDetailPackagingDeleted,
    formularyDetailPackagingUpdated,
} from '../formularyDetailPackagingSlice'

describe('testing formularyDetailPackaging redux store reducers', () => {
    test('add formularyDetailPackaging to store test', () => {
        let state = store.getState().formularyDetailPackaging
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: false,
            PkgSize: 42,
            PkgQty: 64,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: true,
        }
        store.dispatch(formularyDetailPackagingAdded(initialInput))
        state = store.getState().formularyDetailPackaging
        expect(state.entities).toHaveLength(1)
    })

    test('update formularyDetailPackaging from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 20,
            PkgQty: 41,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        }
        store.dispatch(formularyDetailPackagingAdded(initialInput))
        let state = store.getState().formularyDetailPackaging
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 18,
            PkgQty: 30,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: true,
        }
        store.dispatch(formularyDetailPackagingUpdated(updatedInput))
        state = store.getState().formularyDetailPackaging
        let changedFormularyDetailPackaging = state.entities.find(
            (p) => p.id === 2
        )
        expect(changedFormularyDetailPackaging).toStrictEqual(updatedInput)
    })

    test('delete formularyDetailPackaging from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 31,
            PkgQty: 87,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        }
        store.dispatch(formularyDetailPackagingAdded(initialInput))
        let state = store.getState().formularyDetailPackaging
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            formularyDetailPackagingDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().formularyDetailPackaging
        expect(state.entities).toHaveLength(2)
    })
})
