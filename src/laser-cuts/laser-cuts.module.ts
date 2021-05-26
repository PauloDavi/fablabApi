import { Module } from '@nestjs/common';
import { LaserCutsService } from './laser-cuts.service';
import { LaserCutsController } from './laser-cuts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { laserCuts, laserCutsSchema } from './schemas/laser-cuts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: laserCuts.name, schema: laserCutsSchema },
    ]),
  ],
  controllers: [LaserCutsController],
  providers: [LaserCutsService],
})
export class LaserCutsModule {}
