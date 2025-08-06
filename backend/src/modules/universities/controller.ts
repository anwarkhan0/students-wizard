export const getUniversitiesByCountry = async (req: Request, res: Response) => {
  try {
    const { countryId } = req.params;
    const universities = await prisma.university.findMany({
      where: { countryId },
      include: { programs: true }
    });
    res.json(universities);
  } catch {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
};
