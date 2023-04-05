import store from 'store/store'
import {
    planDetailAdded,
    planDetailDeleted,
    planDetailUpdated,
} from '../planDetailSlice'

describe('testing planDetail redux store reducers', () => {
    test('add planDetail to store test', () => {
        let state = store.getState().planDetail
        expect(state.entities).toHaveLength(0)
        const initialInput = {
            id: 1,
            PharmacyCostType: 'PharmacyCostType',
            DrugTier: 44,
            DrugTierCaption: 'DrugTierCaption',
            DaysSupply: 'DaysSupply',
            CostAmount: 56,
            CostPercentage: 13,
            MinAmount: 94,
            MaxAmount: 37,
            Is31DaySupply: true,
            DrugCategory: 'DrugCategory',
            SubCategory: 'SubCategory',
        }
        store.dispatch(planDetailAdded(initialInput))
        state = store.getState().planDetail
        expect(state.entities).toHaveLength(1)
    })

    test('update planDetail from store should change the length of the entities array in redux store', () => {
        const initialInput = {
            id: 2,
            PharmacyCostType: 'PharmacyCostType',
            DrugTier: 24,
            DrugTierCaption: 'DrugTierCaption',
            DaysSupply: 'DaysSupply',
            CostAmount: 73,
            CostPercentage: 63,
            MinAmount: 87,
            MaxAmount: 32,
            Is31DaySupply: false,
            DrugCategory: 'DrugCategory',
            SubCategory: 'SubCategory',
        }
        store.dispatch(planDetailAdded(initialInput))
        let state = store.getState().planDetail
        expect(state.entities).toHaveLength(2)

        const updatedInput = {
            id: initialInput.id,
            PharmacyCostType: 'PharmacyCostType',
            DrugTier: 9,
            DrugTierCaption: 'DrugTierCaption',
            DaysSupply: 'DaysSupply',
            CostAmount: 40,
            CostPercentage: 36,
            MinAmount: 59,
            MaxAmount: 57,
            Is31DaySupply: false,
            DrugCategory: 'DrugCategory',
            SubCategory: 'SubCategory',
        }
        store.dispatch(planDetailUpdated(updatedInput))
        state = store.getState().planDetail
        let changedPlanDetail = state.entities.find((p) => p.id === 2)
        expect(changedPlanDetail).toStrictEqual(updatedInput)
    })

    test('delete planDetail from store should reduce the length of the entities array in redux store', () => {
        const initialInput = {
            id: 3,
            PharmacyCostType: 'PharmacyCostType',
            DrugTier: 50,
            DrugTierCaption: 'DrugTierCaption',
            DaysSupply: 'DaysSupply',
            CostAmount: 37,
            CostPercentage: 47,
            MinAmount: 87,
            MaxAmount: 57,
            Is31DaySupply: true,
            DrugCategory: 'DrugCategory',
            SubCategory: 'SubCategory',
        }
        store.dispatch(planDetailAdded(initialInput))
        let state = store.getState().planDetail
        expect(state.entities).toHaveLength(3)

        store.dispatch(
            planDetailDeleted({
                id: initialInput.id,
            })
        )
        state = store.getState().planDetail
        expect(state.entities).toHaveLength(2)
    })
})
