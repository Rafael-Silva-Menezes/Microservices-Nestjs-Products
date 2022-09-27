import { Module } from '@nestjs/common';
import { ClientProxyProducts } from './client.proxy';

@Module({
  providers: [ClientProxyProducts],
  exports: [ClientProxyProducts],
})
export class ProxyModule {}
