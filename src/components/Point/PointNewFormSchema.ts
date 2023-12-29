import { z } from "zod";

export const PointNewFormSchema = z.object({
  name: z.string().min(4).max(25),
  description: z.string().min(5).max(300),
  type: z.string(),
  picture: z.instanceof(File).refine((file) => file instanceof File, {
    message: "A file is required",
  }),

  district: z.string(),
});

export type PointNewFormSchemaType = z.infer<typeof PointNewFormSchema>;
