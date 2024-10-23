"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export type TagCreateActionResponse = {
  success: boolean;
  message: string;
};

export const tagCreateAction = async (
  prevState: string | undefined,
  formData: FormData
): Promise<TagCreateActionResponse> => {
  try {
    const session = await auth();
    if (!session || !session.user) {
      throw new Error("Unauthorized");
    }

    const name = formData.get("name") as string;
    const color = formData.get("color") as string;
    const icon = formData.get("icon") as string;

    const variables = {
      name,
      color,
      icon,
    };

    await prisma.tag.create({
      data: {
        color: variables.color,
        icon: variables.icon,
        name: variables.name,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return { success: true, message: "Tag created successfully" };
  } catch (error) {
    return { success: false, message: "Failed to create tag" };
  }
};
