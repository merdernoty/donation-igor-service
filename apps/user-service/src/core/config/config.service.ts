import { parse, DotenvParseOutput } from 'dotenv';
import { readFileSync } from 'fs';
import * as Joi from 'joi';

export class ConfigService {
  private readonly envConfig: DotenvParseOutput;

  constructor(filePath: string) {
    const parsedConfig = parse(readFileSync(filePath));
    this.envConfig = this.validateInput(parsedConfig);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(parsedConfig: DotenvParseOutput) {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      DATABASE_TYPE_USER_SERVICE: Joi.string()
        .valid(
          'cockroachdb',
          'cordova',
          'mariadb',
          'mongodb',
          'mssql',
          'mysql',
          'nativescript',
          'oracle',
          'postgres',
          'react-native',
          'sqlite',
          'sqljs',
        )
        .required(),
      PORT: Joi.number(),
    });

    const validationOptions: Joi.ValidationOptions = { allowUnknown: true };

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      parsedConfig,
      validationOptions,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  /**
   * Generic getter
   */
  get(key: string) {
    return this.envConfig[key];
  }

  /**
   * Getters for each environment variable
   */
  public get isDev() {
    return this.envConfig.NODE_ENV === 'development';
  }

  public get isProd() {
    return this.envConfig.NODE_ENV === 'production';
  }

  public get isTest() {
    return this.envConfig.NODE_ENV === 'test';
  }

  public get databaseType() {
    return this.envConfig.DATABASE_TYPE_USER_SERVICE;
  }

  public get databaseHost() {
    return this.envConfig.DATABASE_HOST_USER_SERVICE;
  }

  public get databasePort() {
    return Number(this.envConfig.DATABASE_PORT_USER_SERVICE);
  }

  public get databaseUsername() {
    return this.envConfig.DATABASE_USERNAME_USER_SERVICE;
  }

  public get databasePassword() {
    return this.envConfig.DATABASE_PASSWORD_USER_SERVICE;
  }

  public get databaseName() {
    return this.envConfig.DATABASE_NAME_USER_SERVICE;
  }
}
