/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function TagList() {
  const session = await auth();

  const tags = await prisma.tag.findMany({
    include: {
      tags: true,
      masterTag: true,
      user: true,
    },
    where: {
      user: {
        id: session?.user?.id,
      },
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Tag Listesi</h1>
      <ul className="list-disc mt-4">
        {tags.map((tag) => (
          <li key={tag.id}>
            <span>{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
