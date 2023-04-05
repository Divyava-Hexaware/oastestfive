const { render, screen, cleanup } = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import FormularyDetailPackagingList from '../FormularyDetailPackagingList'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'

afterEach(cleanup)

test('should render FormularyDetailPackaging rows when api response has data', async () => {
    const endPoint = 'formularyDetailPackaging'
    const getFormularyDetailPackagingListResponse = [
        {
            id: 1,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: false,
            PkgSize: 8,
            PkgQty: 90,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: true,
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(
        200,
        getFormularyDetailPackagingListResponse
    )
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <FormularyDetailPackagingList />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
    const formularyDetailPackagingDrugNameCell = await screen.findByText(
        /DrugName/i
    )

    expect(formularyDetailPackagingDrugNameCell).toHaveTextContent(/DrugName/i)
    mock.reset()
})
