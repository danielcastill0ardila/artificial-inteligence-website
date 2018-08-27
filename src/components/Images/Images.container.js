import { connect } from 'react-redux';
import Images from './Images';
import * as actions from '../../store/images/actions';

export const mapStateToProps = ({entities:{images:{entities}}}) =>{
    return {
        images:entities
    }
}

export default connect(mapStateToProps,{
    addImage:actions.PostImage
})(Images);
