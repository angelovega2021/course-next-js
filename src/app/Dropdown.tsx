import React, { useEffect } from 'react'
import { getCurrencyOptions, getExchangeRate } from './api'
import { DropdownProps } from './Courses'

const Dropdown = ({
  options,
  setOptions,
  setExchangeRate,
  currency,
  handleCurrency,
  setLoading,
}:DropdownProps) => {
  useEffect(() => {
    getCurrencyOptions().then((result) => {
      setOptions(result)
    })
  }, [])

  useEffect(() => {
    getExchangeRate().then((result) => {
      setLoading(false)
      setExchangeRate(result.conversion_rates)
    })
  }, [])

  return (
    <div>
      <select
        className='currency'
        id='currency'
        value={currency}
        onChange={handleCurrency}
      >
        {Object.entries(options).map(([code, currency]) => {
          return (
            // <option key={code} value={currency.code}>
            //   {code}
            // </option>
            <option key={code} >
              {code}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown