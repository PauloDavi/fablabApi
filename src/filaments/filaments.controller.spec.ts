import { Test, TestingModule } from '@nestjs/testing';
import { FilamentsController } from './filaments.controller';
import { FilamentsService } from './filaments.service';

describe('FilamentsController', () => {
  let controller: FilamentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilamentsController],
      providers: [FilamentsService],
    }).compile();

    controller = module.get<FilamentsController>(FilamentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
