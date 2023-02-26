import {
  Injectable,
  INestApplication,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  logger = new Logger(PrismaService.name);
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
  async onModuleInit() {
    await this.$connect();
    this.$on('query' as any, async (e: any) => {
      this.logger.debug(`(${e.duration}ms) ${e.query}`);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async cleanDb() {
    return await this.$transaction([
      this.account.deleteMany(),
      this.accountGroup.deleteMany(),
      this.accountJobListing.deleteMany(),
      this.accountPortfolio.deleteMany(),
      this.accountPost.deleteMany(),
      this.accountSkill.deleteMany(),
      this.category.deleteMany(),
      this.group.deleteMany(),
      this.interview.deleteMany(),
      this.jobListing.deleteMany(),
      this.portfolio.deleteMany(),
      this.portfolioItem.deleteMany(),
      this.post.deleteMany(),
      this.postComment.deleteMany(),
      this.postJobListing.deleteMany(),
      this.postResume.deleteMany(),
      this.resume.deleteMany(),
      this.skill.deleteMany(),
      this.user.deleteMany(),
      this.votes.deleteMany(),
    ]);
  }
}
