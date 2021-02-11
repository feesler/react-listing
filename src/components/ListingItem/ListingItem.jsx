import React from 'react'
import PropTypes from 'prop-types'

const MAX_TITLE_LEN = 50;
const QUANTITY_LOW = 10;
const QUANTITY_MEDIUM = 20;


function formatPrice(item) {
  const currencies = {
    USD: { sign: '$', signBefore: true },
    EUR: { sign: '€', signBefore: true },
  };

  const currency = (item.currency_code in currencies)
    ? currencies[item.currency_code]
    : { sign: item.currency_code, signBefore: false };

  if (currency.signBefore) {
    return `${currency.sign}${item.price}`
  }

  return `${item.price} ${currency.sign}`;
}

function ListingItem(props) {
  const { item } = props;

  if (!item.MainImage) {
    return null;
  }

  const title = (item.title.length > MAX_TITLE_LEN)
    ? item.title.substr(0, MAX_TITLE_LEN) + '...'
    : item.title;

  const quantityClass = ['item-quantity'];
  if (item.quantity <= QUANTITY_LOW) {
    quantityClass.push('level-low');
  } else if (item.quantity <= QUANTITY_MEDIUM) {
    quantityClass.push('level-medium');
  } else {
    quantityClass.push('level-high');
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{formatPrice(item)}</p>
        <p className={quantityClass.join(' ')}>{item.quantity} left</p>
      </div>
    </div>
  )
}

ListingItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.string,
    currency_code: PropTypes.string,
    quantity: PropTypes.number,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string,
    }),
  }).isRequired
}

export default ListingItem;
