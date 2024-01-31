
import { PatternFormat } from 'react-number-format'
import { TextField } from '@mui/material';


export const Pattern = () => {


  return (
    <>
      <PatternFormat
        format='+55 (##) # #### ####'

        mask='_'
        allowEmptyFormatting

        patternChar='#'


        type='text'
        displayType='input'

        isAllowed={(values) => {
          if (values.value.length > 11) return false;
          return true;
        }}

        /* renderText={(formattedValue, otherProps) => {
          return (
            <h1>
              {formattedValue}
            </h1>
          );
        }} */

        getInputRef={(el: HTMLInputElement) => el.focus()}

        customInput={TextField}
        label="Pattern format"
      />

    </>
  );
}
