import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface GetRecipientNotificationRequest {
  recipientId: string;
}

type GetRecipientNotificationResponse = {
  notifications: Notification[];
};

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

    return { notifications };
  }
}
