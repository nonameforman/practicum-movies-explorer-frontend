import { useState, useCallback, useMemo } from 'react';

export function useFormWithValidation(init = {}) {
    const [values, setValues] = useState(init);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false);
    }
  };
    
    return [ fetching, isLoading, error ];
};

export const useLimit = (initial) => {
  
  const func = (displayWidth) => {
    if (displayWidth >= 1280) {
    return [12,  3]
    } else if (displayWidth >= 768) {
      return [8, 2]
    } else {
      return [5, 2]
    }
  }
  const initialLimit = func(initial)[0]
  const initialCountAddedCard = func(initial)[1]
  
  const [limit, setLimit] = useState(initialLimit);
  const [countAddedCard, setCountAddedCard] = useState(initialCountAddedCard);

  const onChangeLimit = (displayWidth) => {
      setLimit(func(displayWidth)[0])
      setCountAddedCard(func(displayWidth)[1])
  }

  return [limit, countAddedCard, onChangeLimit]
}

