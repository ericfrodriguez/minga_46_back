import joi from 'joi';

// named export
export const userCreateSignUp = joi.object({
    email: joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
    password: joi.string()
        .min(8)
        .max(25)
        .required(),
    photo: joi.string()
        .uri(),
})