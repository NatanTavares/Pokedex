import React from 'react';

import { Spinner, PositionSpinner } from './styles';

export default function SpinnerLoader() {
  return (
    <PositionSpinner>
      <Spinner />
    </PositionSpinner>
  );
}
