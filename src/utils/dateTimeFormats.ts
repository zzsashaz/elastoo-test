import { DateTimeFormats } from 'vue-i18n';

// eslint-disable-next-line import/prefer-default-export
export const dateTimeFormats: DateTimeFormats = {
  ru: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
    },
  },
};
