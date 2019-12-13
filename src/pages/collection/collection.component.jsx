import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {SelectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
  
   return (
    <div className='collection-page'>
         <h2>Collection Page</h2>
    </div>
   )

}

const mapStateToProps = (state, ownProps) => ({
    collection : SelectCollection(ownProps.match.params.collectionId)(state)
})
    


export default connect(mapStateToProps)(CollectionPage);