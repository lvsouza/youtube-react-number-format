
import { PatternFormat } from 'react-number-format'


export const Pattern = () => {


  return (
    <>
      <PatternFormat
        format='=== # ==='

        mask='_'
        allowEmptyFormatting

        patternChar='='
      />
    
    </>
  );
}
