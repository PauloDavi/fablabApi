import { Test, TestingModule } from '@nestjs/testing';
import { FilamentsService } from './filaments.service';

describe('FilamentsService', () => {
  let service: FilamentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilamentsService],
    }).compile();

    service = module.get<FilamentsService>(FilamentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
