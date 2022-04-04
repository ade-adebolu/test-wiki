import { Controller } from '@nestjs/common';

/**
 * Friends controller
 */
@Controller('friends')
export class FriendsController {
  /**
   * Returns friends name from friend id
   * @param friendId 
   * @returns string[] friend nams
   */
  getFriendsNames(friendId: string): string[] {
    return [];
  }
}
