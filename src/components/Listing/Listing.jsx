import React from 'react'
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem/ListingItem.jsx';

function Listing(props) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.map((item) =>
        <ListingItem key={item.listing_id} item={item} />
      )}
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
  })),
}

Listing.defaultProps = {
  items: [],
};

export default Listing

