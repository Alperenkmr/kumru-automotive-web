
import { machineType } from './machine';
import { whyChooseUsType } from './whyChooseUs';
import { enTranslations as mainTranslations } from '../en';

export const enTranslations = {
  ...mainTranslations,
  ...machineType,
  ...whyChooseUsType
};
