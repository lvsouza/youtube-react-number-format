import { useState } from 'react'
import { NumericFormat } from 'react-number-format'


export function Numeric() {
  const [value, setValue] = useState('')


  return (
    <>
      {value}

      <NumericFormat
        value={value}
        onValueChange={(values) => { setValue(values.value); console.log(values) }}

        allowLeadingZeros={false}
        allowNegative={false}

        decimalScale={2}
        fixedDecimalScale={true}
        decimalSeparator=','
        allowedDecimalSeparators={['.']}

        prefix='R$ '
        //suffix='$'
        thousandSeparator='.'
        //thousandsGroupStyle='thousand'
      />
    </>
  )
}
