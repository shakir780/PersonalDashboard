import React from 'react'
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { useStateContext } from '../Contexts/ContextProvider';
const SearchBar = ({color}) => {
  const{currentColor}=useStateContext()
  return (
    <div style={{color}} className="textboxes   mb-6 ml-3 w-20 hidden md:block md:w-40">
                <div>

                <TextBoxComponent  style={{color}}  placeholder="Search Dashboard" floatLabelType="Auto"/>
                </div>
            </div>
         
  )
}

export default SearchBar