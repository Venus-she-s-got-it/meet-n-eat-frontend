import DropdownItem from "react-bootstrap/esm/DropdownItem"


const DropdownListItem = ({ className, onClick, itemName }) => {

   return (
      <>
         <DropdownItem className={className} onClick={onClick}>{itemName}</DropdownItem>
      </>
   )
}

export default DropdownListItem