import { Global, Module } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Global()
@Module({
  providers: [
    {
      provide: 'ELASTICSEARCH_CLIENT',
      useFactory: () => {
        return new Client({ node: 'http://localhost:9200' });
      },
    },
  ],
  exports: ['ELASTICSEARCH_CLIENT'],
})
export class ElasticsearchModule {}
