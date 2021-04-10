import { useSnackbar as originalUseSnackbar } from 'notistack';

type TSnackbarVariant = 'info' | 'error' | 'success';

const useSnackbar = () => {
  const snackbar = originalUseSnackbar();

  const trigger = (
    message: any,
    type: TSnackbarVariant = 'error',
  ): void => {
    snackbar.enqueueSnackbar(message, {
      variant: type,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
      preventDuplicate: true,
    });
  };

  return { trigger };
};

export default useSnackbar;
