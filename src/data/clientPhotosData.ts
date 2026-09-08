export interface ClientMoment {
  id: string;
  image: string;
}

// Generates client(1).jpeg through client(31).jpeg
export const CLIENT_MOMENTS: ClientMoment[] = Array.from({ length: 31 }, (_, i) => ({
  id: `cm-${i + 1}`,
  image: `/client/client(${i + 1}).jpeg`,
}));