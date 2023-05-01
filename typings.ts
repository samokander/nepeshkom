/* eslint-disable */
export type Schema = {
  'about-company': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'text': string;
    };
    nested: {};
    flat: {};
  };
  'AboutCompany': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'text': string;
    };
    nested: {};
    flat: {};
  };
  'adminUser': {
    plain: {
      'id': string;
      'username': string;
      'password': string;
    };
    nested: {};
    flat: {};
  };
  'Contacts': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'address': string;
      'workingMode': string;
      'phoneNumber': string;
      'email': string;
      'technicalSupport': string;
    };
    nested: {};
    flat: {};
  };
  'Faq': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'cardFirstQuestionTitle': string;
      'cardFirstQuestionText': string;
      'cardSecondQuestionTitle': string;
      'cardSecondQuestionText': string;
      'cardThirdQuestionTitle': string;
      'cardThirdQuestionText': string;
      'cardFourthQuestionTitle': string;
      'cardFourthQuestionText': string;
    };
    nested: {};
    flat: {};
  };
  'MinimumRentalConditions': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'cardFirstTitle': string;
      'cardFirstText': string;
      'cardSecondTitle': string;
      'cardSecondText': string;
      'cardThirdTitle': string;
      'cardThirdText': string;
    };
    nested: {};
    flat: {};
  };
  'PrivacyPolicy': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'text': string;
    };
    nested: {};
    flat: {};
  };
  'PublicOffer': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'text': string;
    };
    nested: {};
    flat: {};
  };
  'Services': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'RentalWithDriverText': string;
      'RentalWithoutDriverText': string;
      'transferText': string;
      'autoForPhotoSession': string;
    };
    nested: {};
    flat: {};
  };
  'user': {
    plain: {
      'id': string;
      'created_at': string;
      'updated_at': string;
      'username': string;
      'email': string;
      'password': string;
    };
    nested: {};
    flat: {};
  };
};
