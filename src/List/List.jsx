import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

  renderList = () => {
    const renderedList = this.props.items.map((item) => {
      return (<li key={item.id} className="c-list__item">{item.label}</li>);
    });

    return renderedList;
  }

  render() {
    return (
      <ul className="c-list">
        { this.renderList() }
      </ul>
    );
  }
}

export default List;
