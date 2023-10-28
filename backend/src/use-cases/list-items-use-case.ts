import { IItemRepository } from '../repositories/item-repository';

export class ListItemsUseCase {
  constructor(private itemRepository: IItemRepository) {}
  async exec() {
    const items = await this.itemRepository.find({ userId: '' });
    return items;
  }
}
