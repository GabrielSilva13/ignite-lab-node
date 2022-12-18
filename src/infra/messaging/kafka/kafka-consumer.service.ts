/* eslint-disable prettier/prettier */
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['trusted-crayfish-7308-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dHJ1c3RlZC1jcmF5ZmlzaC03MzA4JAU9RbCyzmCy4v7G-oAGx-f45AqwX8HUuxQ',
          password:
            '5Q7NT5kpLJV3NrWDPs9NcspE58gPyVt-1VDL8q_hlVnR5EoUuXfCEJ33rv4Jd1sw_NGtCA==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
