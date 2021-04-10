import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

function useForm<T extends object>(
  initialValues: T,
  validation: Object,
  submitFormCallback: Function,
) {
  const formik: FormikProps<T> = useFormik({
    initialValues,
    onSubmit: async (values: T) => {
      await submitFormCallback(values);
    },
    validationSchema: yup.object(validation as any),
  });

  return formik;
}

export default useForm;