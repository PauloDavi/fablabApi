import { Test, TestingModule } from '@nestjs/testing';
import { LaserCutsService } from './laser-cuts.service';

describe('LaserCutsService', () => {
  let service: LaserCutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaserCutsService],
    }).compile();

    service = module.get<LaserCutsService>(LaserCutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
