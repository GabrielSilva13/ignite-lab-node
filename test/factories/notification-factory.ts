/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export const makeNotification = (override: Override = {}) => {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de teste'),
    recipientId: 'recipient-2',
    ...override,
  });
};
