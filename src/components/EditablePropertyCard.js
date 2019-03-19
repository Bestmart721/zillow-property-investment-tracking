import React from 'react';
import PropertyForm from './PropertyForm';
import PropertyCard from './PropertyCard';
import PropTypes from 'prop-types';

export default class EditablePropertyCard extends React.Component {
    static propTypes = {
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      image: PropTypes.string,
      zpid: PropTypes.string.isRequired,
      description: PropTypes.string,
      onTrashClick: PropTypes.func.isRequired,
      onFormSubmit: PropTypes.func.isRequired,
    }

    constructor(props) {
      super(props);
      this.state = {
        editFormOpen: false,
      };

      this.handleEditClick = this.handleEditClick.bind(this);
      this.handleFormClose = this.handleFormClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeForm = this.closeForm.bind(this);
      this.openForm = this.openForm.bind(this);
    }

    handleEditClick = () => {
      this.openForm();
    };

    handleFormClose = () => {
      this.closeForm();
    };

    handleSubmit = (timer) => {
      this.props.onFormSubmit(timer);
      this.closeForm();
    };

    closeForm = () => {
      this.setState({ editFormOpen: false });
    };

    openForm = () => {
      this.setState({ editFormOpen: true });
    };

    render() {
      if (this.state.editFormOpen) {
        return (
          <PropertyForm
            id={this.props.zpid}
            zpid={this.props.zpid}
            address={this.props.address}
            city={this.props.city}
            state={this.props.state}
            zip={this.props.zip}
            description={this.props.description}
            image={this.props.image}
            onFormClose={this.handleFormClose}
            onFormSubmit={this.handleSubmit}
          />
          );
        } else {
          return (
            <PropertyCard
              zpid={this.props.zpid}
              address={this.props.address}
              city={this.props.city}
              state={this.props.state}
              zip={this.props.zip}
              description={this.props.description}
              image={this.props.image}
              onEditClick={this.handleEditClick}
              onTrashClick={this.props.onTrashClick}
            />
          );
        }
    }
  }