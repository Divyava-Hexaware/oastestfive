const {
    render,
    screen,
    fireEvent,
    within,
    getByRole,
    act,
    cleanup,
} = require('@testing-library/react')
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from 'store/store'
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'
import { SettingsProvider } from 'common/contexts/SettingsContext'
import { MatxTheme } from 'components'
import EditFormularyDetailPackaging from '../EditFormularyDetailPackaging'
import { FormularyDetailPackagingAdded } from '../store/FormularyDetailPackagingSlice'
beforeAll(() => {
    store.dispatch(
        FormularyDetailPackagingAdded({
            id: 1,
            DrugName: 'DrugName',
            NDC: 'NDC',
            Tier: 'Tier',
            Year: 'Year',
            Not90DElig: true,
            PkgSize: 30,
            PkgQty: 44,
            PkgSizeUom: 'PkgSizeUom',
            PkgDesc: 'PkgDesc',
            UsualDailyDose: 'UsualDailyDose',
            PBP: 'PBP',
            IsUnitDosage: false,
        })
    )
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Navigate
                                        to="FormularyDetailPackaging/edit/1"
                                        replace
                                    />
                                }
                            />
                            <Route
                                path="FormularyDetailPackaging/edit/:id"
                                element={<EditFormularyDetailPackaging />}
                            />
                        </Routes>
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

describe('testing view of FormularyDetailPackagingEdit Component', () => {
    test('should render EditFormularyDetailPackaging and display the heading Edit Form', async () => {
        const headingNote = screen.getByText(/Edit Form/i)
        expect(headingNote).toBeInTheDocument()
    })

    test('should have all input fields present in the edit form', async () => {
        const saveFormularyDetailPackagingButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
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

        expect(saveFormularyDetailPackagingButtonElement).toBeInTheDocument()

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

    test('should be able to give inputs to all fields of FormularyDetailPackaging edit form', async () => {
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
        fireEvent.change(PkgSizeElement, { target: { value: 5 } })
        fireEvent.change(PkgQtyElement, { target: { value: 63 } })
        fireEvent.change(PkgSizeUomElement, { target: { value: 'PkgSizeUom' } })
        fireEvent.change(PkgDescElement, { target: { value: 'PkgDesc' } })
        fireEvent.change(UsualDailyDoseElement, {
            target: { value: 'UsualDailyDose' },
        })
        fireEvent.change(PBPElement, { target: { value: 'PBP' } })

        expect(DrugNameElement.value).toBe('DrugName')

        expect(NDCElement.value).toBe('NDC')

        expect(TierElement.value).toBe('Tier')

        expect(YearElement.value).toBe('Year')

        expect(PkgSizeElement.value).toBe(5)
        expect(PkgQtyElement.value).toBe(63)
        expect(PkgSizeUomElement.value).toBe('PkgSizeUom')

        expect(PkgDescElement.value).toBe('PkgDesc')

        expect(UsualDailyDoseElement.value).toBe('UsualDailyDose')

        expect(PBPElement.value).toBe('PBP')

        fireEvent.mouseDown(Not90DEligElement)
        const Not90DEliglistbox = within(screen.getByRole('listbox'))
        fireEvent.click(Not90DEliglistbox.getByText(/True/))
        expect(Not90DEligElement).toHaveTextContent(/True/i)
        fireEvent.mouseDown(IsUnitDosageElement)
        const IsUnitDosagelistbox = within(screen.getByRole('listbox'))
        fireEvent.click(IsUnitDosagelistbox.getByText(/False/))
        expect(IsUnitDosageElement).toHaveTextContent(/False/i)
    })

    test('should return error message when save button is clicked on invalid form', async () => {
        jest.useFakeTimers()
        const DrugNameElement = screen.getByLabelText(/DrugName/i)
        const NDCElement = screen.getByLabelText(/NDC/i)
        const TierElement = screen.getByLabelText(/Tier/i)
        const YearElement = screen.getByLabelText(/Year/i)
        const PkgSizeElement = screen.getByLabelText(/PkgSize/i)
        const PkgQtyElement = screen.getByLabelText(/PkgQty/i)
        const PkgSizeUomElement = screen.getByLabelText(/PkgSizeUom/i)
        const PkgDescElement = screen.getByLabelText(/PkgDesc/i)
        const UsualDailyDoseElement = screen.getByLabelText(/UsualDailyDose/i)
        const PBPElement = screen.getByLabelText(/PBP/i)

        fireEvent.change(DrugNameElement, { target: { value: '' } })
        fireEvent.change(NDCElement, { target: { value: '' } })
        fireEvent.change(TierElement, { target: { value: '' } })
        fireEvent.change(YearElement, { target: { value: '' } })
        fireEvent.change(PkgSizeElement, { target: { value: '' } })
        fireEvent.change(PkgQtyElement, { target: { value: '' } })
        fireEvent.change(PkgSizeUomElement, { target: { value: '' } })
        fireEvent.change(PkgDescElement, { target: { value: '' } })
        fireEvent.change(UsualDailyDoseElement, { target: { value: '' } })
        fireEvent.change(PBPElement, { target: { value: '' } })
        await act(async () => {
            jest.runOnlyPendingTimers()
        })
        const saveFormularyDetailPackagingButtonElement = screen.getByRole(
            'button',
            { name: /save/i }
        )

        await clickAndWait(saveFormularyDetailPackagingButtonElement)

        const errorList = await screen.findAllByText('this field is required')
        expect(errorList).toHaveLength(10)
    })
})
