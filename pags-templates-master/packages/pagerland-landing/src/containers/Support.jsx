import React, { useState } from 'react';
import { Support } from '@pagerland/themes/src/Landing/containers';
import { sendTicketRequest } from '../services/support';

const SupportContainer = props => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <Support
      {...props}
      form={{
        ...Support.defaultProps.form,
        hasSuccessStatus: isSuccess,
        hasErrorStatus: isError,
        onSubmit: async (values, { setSubmitting }) => {
          setIsSuccess(false);
          setIsError(false);

          setSubmitting(true);

          try {
            const { data } = await sendTicketRequest(values);

            if (data?.send) {
              setIsSuccess(true);
            } else {
              setIsError(true);
            }
          } catch (_) {
            setIsError(true);
          }
        },
      }}
    />
  );
};

export default SupportContainer;
