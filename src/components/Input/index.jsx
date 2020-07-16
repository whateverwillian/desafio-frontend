import React from 'react';
import { useField } from '@unform/core';

import { Input } from './styles';

const InputComponent = ({ name, ...rest }) => {
  const inputRef = React.useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <Input ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

export default InputComponent;