export interface Faqs {
  uuid: string;
  question: string;
  answer: string;
  date?: string;
}

// REDUCER
export interface SupportState {
  loading: boolean;
  errorMsg: string;
  faqs: Faqs[];
}

export interface SupportAction {
  type: string;
  payload?: {
    faqs: Faqs[];
  };
}
