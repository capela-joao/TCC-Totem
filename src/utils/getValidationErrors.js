import * as Yup from 'yup';

export default function getValidationErrors (err) {
    const ValidationErrors = {};

    if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
            ValidationErrors[error.path] = error.message;
        });
    }

    return ValidationErrors;
}