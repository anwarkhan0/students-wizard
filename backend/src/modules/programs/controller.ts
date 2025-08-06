export const getProgramsByUniversity = async (req: Request, res: Response) => {
  try {
    const { universityId } = req.params;
    const programs = await prisma.program.findMany({
      where: { universityId }
    });
    res.json(programs);
  } catch {
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
};
