import { Button } from "react-bootstrap";
function NoFilter ({removeFilter}){
    return(
        <Button className='nofilter' onClick={removeFilter}>
            No Filter
        </Button>
    )
}
export default NoFilter;