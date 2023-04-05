const {
    render,
    screen,
    fireEvent,
    within,
    waitFor,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import axios from '../../../axios'
import MockAdapter from 'axios-mock-adapter'
import AddFormularyDetailPackaging from '../AddFormularyDetailPackaging'

beforeEach(() => {
    const endPoint = 'FormularyDetailPackaging'
    const getStudentListResponse = [
        {
            id: 1,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 96,
            PkgQty: 65,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        },
    ]
    const mock = new MockAdapter(axios)
    mock.onGet(`/${endPoint}`).reply(200, getStudentListResponse)
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <AddFormularyDetailPackaging />
                    </Router>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
})

const clickAndWait = async (element) => {
    await act(async () => {
        fireEvent.click(element)
    })

    await act(async () => {
        jest.runOnlyPendingTimers()
    })
}

afterEach(cleanup)

describe('testing view FormularyDetailPackagingAdd Component', () => {
    test('should render AddFormularyDetailPackaging and to display Add Form title', async () => {
        const headingNote = screen.getByText(/Add Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the add form', async () => {
        const addFormularyDetailPackagingButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        const DrugNameElement = screen.getByLabelText(/DrugName/i)
        const NDCElement = screen.getByLabelText(/NDC/i)
        const TierElement = screen.getByLabelText(/Tier/i)
        const YearElement = screen.getByLabelText(/Year/i)
        const Not90DEligElement = screen.getByLabelText(/Not90DElig/i)
        const PkgSizeElement = screen.getByLabelText(/PkgSize/i)
        const PkgQtyElement = screen.getByLabelText(/PkgQty/i)
        const PkgSizeUomElement = screen.getByLabelText(/PkgSizeUom/i)
        const PkgDescElement = screen.getByLabelText(/PkgDesc/i)
        const UsualDailyDoseElement = screen.getByLabelText(/UsualDailyDose/i)
        const PBPElement = screen.getByLabelText(/PBP/i)
        const IsUnitDosageElement = screen.getByLabelText(/IsUnitDosage/i)

        expect(addFormularyDetailPackagingButtonElement).toBeInTheDocument()

        expect(DrugNameElement).toBeInTheDocument()
        expect(NDCElement).toBeInTheDocument()
        expect(TierElement).toBeInTheDocument()
        expect(YearElement).toBeInTheDocument()
        expect(Not90DEligElement).toBeInTheDocument()
        expect(PkgSizeElement).toBeInTheDocument()
        expect(PkgQtyElement).toBeInTheDocument()
        expect(PkgSizeUomElement).toBeInTheDocument()
        expect(PkgDescElement).toBeInTheDocument()
        expect(UsualDailyDoseElement).toBeInTheDocument()
        expect(PBPElement).toBeInTheDocument()
        expect(IsUnitDosageElement).toBeInTheDocument()
    })

    test('should be able to give inputs to all fields of FormularyDetailPackaging add form', async () => {
        const DrugNameElement = screen.getByLabelText(/DrugName/i)
        const NDCElement = screen.getByLabelText(/NDC/i)
        const TierElement = screen.getByLabelText(/Tier/i)
        const YearElement = screen.getByLabelText(/Year/i)
        const Not90DEligElement = screen.getByLabelText(/Not90DElig/i)
        const PkgSizeElement = screen.getByLabelText(/PkgSize/i)
        const PkgQtyElement = screen.getByLabelText(/PkgQty/i)
        const PkgSizeUomElement = screen.getByLabelText(/PkgSizeUom/i)
        const PkgDescElement = screen.getByLabelText(/PkgDesc/i)
        const UsualDailyDoseElement = screen.getByLabelText(/UsualDailyDose/i)
        const PBPElement = screen.getByLabelText(/PBP/i)
        const IsUnitDosageElement = screen.getByLabelText(/IsUnitDosage/i)

        fireEvent.change(DrugNameElement, { target: { value: 'DrugName' } })
        fireEvent.change(NDCElement, { target: { value: 'NDC' } })
        fireEvent.change(TierElement, { target: { value: 'Tier' } })
        fireEvent.change(YearElement, { target: { value: 'Year' } })
        fireEvent.change(PkgSizeElement, { target: { value: 70 } })
        fireEvent.change(PkgQtyElement, { target: { value: 3 } })
        fireEvent.change(PkgSizeUomElement, { target: { value: 'PkgSizeUom' } })
        fireEvent.change(PkgDescElement, { target: { value: 'PkgDesc' } })
        fireEvent.change(UsualDailyDoseElement, {
            target: { value: 'UsualDailyDose' },
        })
        fireEvent.change(PBPElement, { target: { value: 'PBP' } })

        fireEvent.mouseDown(Not90DEligElement)
        const Not90DEliglistbox = within(screen.getByRole('listbox'))
        fireEvent.click(Not90DEliglistbox.getByText(/False/))
        expect(Not90DEligElement).toHaveTextContent(/False/i)
        fireEvent.mouseDown(IsUnitDosageElement)
        const IsUnitDosagelistbox = within(screen.getByRole('listbox'))
        fireEvent.click(IsUnitDosagelistbox.getByText(/True/))
        expect(IsUnitDosageElement).toHaveTextContent(/True/i)
    })

    test('should return error message when add FormularyDetailPackaging button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const addFormularyDetailPackagingButtonElement = screen.getByRole(
            'button',
            { name: /Add/i }
        )

        await clickAndWait(addFormularyDetailPackagingButtonElement)

        let errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(12)
    })
})
