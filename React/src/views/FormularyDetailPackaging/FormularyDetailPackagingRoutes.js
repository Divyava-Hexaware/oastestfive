import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const FormularyDetailPackagingList = Loadable(
    lazy(() => import('./FormularyDetailPackagingList'))
)
const EditFormularyDetailPackaging = Loadable(
    lazy(() => import('./EditFormularyDetailPackaging'))
)
const AddFormularyDetailPackaging = Loadable(
    lazy(() => import('./AddFormularyDetailPackaging'))
)

const FormularyDetailPackagingRoutes = [
    {
        path: '/FormularyDetailPackaging',
        element: <FormularyDetailPackagingList />,
    },
    {
        path: '/FormularyDetailPackaging/edit/:id',
        element: <EditFormularyDetailPackaging />,
    },
    {
        path: '/FormularyDetailPackaging/add',
        element: <AddFormularyDetailPackaging />,
    },
]

export default FormularyDetailPackagingRoutes
