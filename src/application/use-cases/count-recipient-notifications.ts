import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

type CountRecipientNotificationResponse = {
  count: number;
};

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
