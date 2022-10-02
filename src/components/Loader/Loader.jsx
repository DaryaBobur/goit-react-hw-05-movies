import { Vortex } from  'react-loader-spinner';

const Loader = () => {
    return (    
        <Vortex 
            visible={true} 
            height="150" 
            width="150"
            color='black'
            wrapperStyle={{marginRight: 'auto',
            marginLeft: 'auto'}}
        />
    )
}

export default Loader;