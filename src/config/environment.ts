import * as Yup from 'yup'

const envSchema = Yup.object().shape({
  POSTGRES_USER: Yup.string().required(),
  POSTGRES_PASSWORD: Yup.string().required(),
  JWT_PASS: Yup.string().required(),
  POSTGRES_DB: Yup.string().required(),
  DATABASE_URL: Yup.string().required(),
})

export const env = envSchema.validateSync(process.env)
