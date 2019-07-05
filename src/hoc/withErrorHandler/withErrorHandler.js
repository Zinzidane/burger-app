import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxilary from '../Auxilary/Auxilary';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);

    return (
      <Auxilary>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxilary>
    );
  };
};

export default withErrorHandler;
