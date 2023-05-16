import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { getVerificationCodeDto } from './dto/get-verification-code.dto';
import { checkVerificationCodeDto } from './dto/check-verification-code.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('get-code')
  async getVerificationCode(@Body() body: getVerificationCodeDto) {
    return await this.authService.getVerificationCode(body);
  }

  @Post('check-code')
  async checkVerificationCode(@Body() body: checkVerificationCodeDto) {
    return await this.authService.checkVerificationCode(body);
  }
}
