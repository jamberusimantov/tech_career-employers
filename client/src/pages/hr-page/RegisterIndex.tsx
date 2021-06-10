import HrRegisterForm from './Hr-Register'
import CompanyRegister from './Company-register'
import HrSteps from '../../components/steps/HrSteps'
import React from 'react'

export default function RegisterIndex() {
    return (
        <>
            <HrRegisterForm />
            <CompanyRegister />
            <HrSteps/>
        </>
    )
}
