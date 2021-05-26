import { Module } from '@nestjs/common';
import { LaserCutsService } from './laser-cuts.service';
import { LaserCutsController } from './laser-cuts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LaserCuts, LaserCutsSchema } from './schemas/laser-cuts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LaserCuts.name, schema: LaserCutsSchema },
    ]),
  ],
  controllers: [LaserCutsController],
  providers: [LaserCutsService],
})
export class LaserCutsModule {}
