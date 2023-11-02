import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className='w-full max-w-7xl mx-auto px-[25px]'>
            {children}
        </div>
    );
};


Container.propTypes = {
    children: PropTypes.node,
}
export default Container;