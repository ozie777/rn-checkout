import z from "zod";
import isEthereumAddress from "validator/lib/isEthereumAddress";
import { CURRENCY_ID } from "./currencies";

const CurrencyIdSchema = z.enum(
  Object.values(CURRENCY_ID) as [string, ...string[]]
);

export const PropsValidation = z.object({
  sellerInfo: z
    .object({
      name: z
        .string()
        .min(2, {
          message: "Seller name needs to be at least 2 characters",
        })
        .optional(),
      logo: z.string().url("Invalid seller logo").optional(),
    })
    .optional(),
  productInfo: z
    .object({
      name: z
        .string()
        .min(2, {
          message: "Product name needs to be at least 2 characters",
        })
        .optional(),
      image: z.string().url("Invalid product image").optional(),
      description: z.string().optional(),
    })
    .optional(),
  amountInUSD: z
    .number()
    .gt(0, {
      message: "Amount needs to be higher than 0",
    })
    .default(0),
  sellerAddress: z.string().refine(isEthereumAddress, {
    message: "Invalid seller address",
  }),
  supportedCurrencies: z
    .array(CurrencyIdSchema)
    .min(1, { message: "At least one currency must be selected" })
    .default([]),
});
