import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
    useFactory : (configService: ConfigService) =>({
      type: 'postgres',
      host: configService.getOrThrow('HOST'),
      port: configService.getOrThrow('PORT'),
      username: configService.getOrThrow('USER'),
      password: configService.getOrThrow('PASSWORD'),
      database: configService.getOrThrow('DB'),
      autoLoadEntities: true,
      synchronize: true  
    }), 
    inject: [ConfigService]
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
