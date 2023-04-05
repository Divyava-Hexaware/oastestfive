const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import PlanDetailList from '../PlanDetailList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render PlanDetail rows when api response has data', async () => {
    const endPoint = 'planDetail'
    const getPlanDetailListResponse = [
        {
            id: 1,
            PharmacyCostType: 'PharmacyCostType',
            DrugTier: 70,
            DrugTierCaption: 'DrugTierCaption',
            DaysSupply: 'DaysSupply',
            CostAmount: 13,
            CostPercentage: 95,
            MinAmount: 25,
            MaxAmount: 74,
            Is31DaySupply: false,
            DrugCategory: 'DrugCategory',
            SubCategory: 'SubCategory',
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getPlanDetailListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <PlanDetailList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const planDetailPharmacyCostTypeCell = await screen.findByText(
        /PharmacyCostType/i
    )

    expect(planDetailPharmacyCostTypeCell).toHaveTextContent(
        /PharmacyCostType/i
    )
    mock.reset()
})
