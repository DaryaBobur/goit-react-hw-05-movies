import { Vortex } from  'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
    return (    
        <LoaderStyled>
        <Vortex 
            visible={true} 
            height="100" 
            width="100"
            color='black'
        />
        </LoaderStyled>
    )
}

export default Loader;