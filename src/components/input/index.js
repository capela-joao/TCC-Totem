import React, { useEffect, useRef, useState, useCallback } from "react";
import { Container, Error } from "./styles.js";
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

export default function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback (() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur =  useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value)
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      <Icon />
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size="20px" />
        </Error>
      )}
    </Container>
  );
}
