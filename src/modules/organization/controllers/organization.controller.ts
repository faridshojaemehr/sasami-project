import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrganizationDto } from '../dto/createOrganization.dto';
import { OrganizationService } from '../services/organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private orgService: OrganizationService) {}

  @Post('/create')
  public async createOrganization(
    @Body()
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<any> {
    const apponitment = await this.orgService.create(createOrganizationDto);
    return apponitment;
  }
}
