import joi from 'joi';

// named export
export const userCreateSignUp = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.empty': 'EMAIL_REQUIRED',
            'string.email': 'INVALID_EMAIL'
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(50)
        .alphanum()
        .messages({
            'any.required': 'PASS_REQUIRED',
            'string.empty': 'PASS_REQUIRED',
            'string.min': 'PASS_TOO_SHORT',
            'string.max': 'PASS_TOO_LARGE',
            'string.alphanum': 'PASS_ALPHANUMERIC_REQUIRED',
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'PHOTO_REQUIRED',
            'string.empty': 'PHOTO_REQUIRED',
            'string.uri': 'INVALID_URL'
        })
})

export const userCreateSignIn = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2
        })
        .messages({
            'any.required': 'EMAIL_REQUIRED',
            'string.empty': 'EMAIL_REQUIRED',
            'string.email': 'INVALID_EMAIL'
        }),
    password: joi.string()
        .required()
        .min(8)
        .max(50)
        .alphanum()
        .messages({
            'any.required': 'PASS_REQUIRED',
            'string.empty': 'PASS_REQUIRED',
            'string.min': 'PASS_TOO_SHORT',
            'string.max': 'PASS_TOO_LARGE',
            'string.alphanum': 'PASS_ALPHANUMERIC_REQUIRED',
        })
})