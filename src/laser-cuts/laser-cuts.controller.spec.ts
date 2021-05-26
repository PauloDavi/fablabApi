import { Test, TestingModule } from '@nestjs/testing';
import { LaserCutsController } from './laser-cuts.controller';
import { LaserCutsService } from './laser-cuts.service';

describe('LaserCutsController', () => {
  let controller: LaserCutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaserCutsController],
      providers: [LaserCutsService],
    }).compile();

    controller = module.get<LaserCutsController>(LaserCutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
