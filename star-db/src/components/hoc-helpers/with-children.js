import React from 'react';

const withChildren = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        {fn}
      </Wrapped>
    );
  }
}

export default withChildren;
