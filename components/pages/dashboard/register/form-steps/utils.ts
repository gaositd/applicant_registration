import { ZodError, ZodSchema } from 'zod'
import { RegisterFormValues } from '../RegisterForm'

export function handleOnStepChange (
  validationSchema: ZodSchema<any, any>,
  currentData: RegisterFormValues,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
) {
  setErrors({})
  try {
    validationSchema.parse(currentData)

    setCurrentPage((prev) => prev + 1)
  } catch (error) {
    if (error instanceof ZodError) {
      const formErrors: Record<string, string> = {}

      const flatErrors = error.flatten().fieldErrors
      Object.keys(flatErrors).forEach((errorKey) => {
        const errorValue = flatErrors[errorKey]
        if (Array.isArray(errorValue) && errorValue.length > 0) {
          formErrors[errorKey] = errorValue[0]
        }
      })

      setErrors(formErrors)
    }
  }
}
export function handleOnStepBack (
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) {
  setCurrentPage((prev) => prev - 1)
}
