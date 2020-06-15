import { Faqs } from '../../models';

export const SUPPORT_IN_PROGRESS = 'SUPPORT_IN_PROGRESS';
export const SUPPORT_SUCCESS = 'SUPPORT_SUCCESS';
export const SUPPORT_FAILURE = 'SUPPORT_FAILURE';

export const supportInProgress = () => ({type: SUPPORT_IN_PROGRESS});
export const supportSuccess = (faqs: Faqs[]) => ({
  type: SUPPORT_SUCCESS,
  payload: { faqs }
});
export const supportFailure = () => ({ type: SUPPORT_FAILURE });

export const getFaqs = () => {
  return async (dispatch: Function) => {
    dispatch(supportInProgress());

    const answer =
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.';

    const faqs = [
      {
        uuid: 'SKDPS3-SKDL-3DSDF',
        question: 'What is the app about ?',
        answer
      },
      {
        uuid: '494S-SKD03-3SKDS',
        question: 'Can I register more than ones ?',
        answer
      },
      {
        uuid: 'DKSI-SK3-SKDS',
        question: 'Can anyone join the app as a driver ?',
        answer
      },
      {
        uuid: 'KSK-KSK-3JSO-SDF',
        question: 'How do I get in touch in case of a problem ?',
        answer
      }
    ];

    dispatch(supportSuccess(faqs));
  };
};
