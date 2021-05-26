import { Test, TestingModule } from '@nestjs/testing';
import { PrintersController } from './printers.controller';
import { PrintersService } from './printers.service';

describe('PrintersController', () => {
  let controller: PrintersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintersController],
      providers: [PrintersService],
    }).compile();

    controller = module.get<PrintersController>(PrintersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
