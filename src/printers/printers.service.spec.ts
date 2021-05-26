import { Test, TestingModule } from '@nestjs/testing';
import { PrintersService } from './printers.service';

describe('PrintersService', () => {
  let service: PrintersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintersService],
    }).compile();

    service = module.get<PrintersService>(PrintersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
