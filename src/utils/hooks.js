import { useState, useCallback, useEffect } from 'react';
import {
  DISPLAYED_MOVIES_FROM_1280,
  DISPLAYED_MOVIES_FROM_768_TO_1279,
  DISPLAYED_MOVIES_FROM_320_TO_767,
  ADDED_MOVIES_FROM_1280,
  ADDED_MOVIES_FROM_320_TO_1279
} from './constants';

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
    return [DISPLAYED_MOVIES_FROM_1280, ADDED_MOVIES_FROM_1280]
    } else if (displayWidth >= 768) {
      return [DISPLAYED_MOVIES_FROM_768_TO_1279, ADDED_MOVIES_FROM_320_TO_1279]
    } else {
      return [DISPLAYED_MOVIES_FROM_320_TO_767, ADDED_MOVIES_FROM_320_TO_1279]
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

export const useLocalStorage = (key, init) => {
  const initState = JSON.parse(localStorage.getItem(key)) || init;
  const [state, setState] = useState(initState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state]);

  return [state, setState]

}
