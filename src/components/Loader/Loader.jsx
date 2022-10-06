import { Vortex } from  'react-loader-spinner';

const Loader = () => {
    return (    
        <Vortex 
            visible={true} 
            height="100" 
            width="100"
            color='black'
            wrapperStyle={{marginRight: 'auto',
            marginLeft: 'auto'}}
        />
    )
}

export default Loader;