// Programs organized by department
  const programs = {
    // Engineering departments
    1: [
      // Harvard SEAS
      { id: 1, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 2, name: "Electrical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 3, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 4, name: "Computer Science", duration: "2 years", degree: "Master", level: "Graduate" },
    ],
    6: [
      // Stanford Engineering
      { id: 5, name: "Computer Science", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 6, name: "Electrical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 7, name: "Mechanical Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
    ],
    11: [
      // MIT Engineering
      {
        id: 8,
        name: "Computer Science and Engineering",
        duration: "4 years",
        degree: "Bachelor",
        level: "Undergraduate",
      },
      {
        id: 9,
        name: "Electrical Engineering and Computer Science",
        duration: "2 years",
        degree: "Master",
        level: "Graduate",
      },
      { id: 10, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    ],

    // Business departments
    2: [
      // Harvard Business School
      { id: 11, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
      { id: 12, name: "Executive Education", duration: "1 year", degree: "Certificate", level: "Executive" },
    ],
    7: [
      // Stanford GSB
      { id: 13, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
      { id: 14, name: "Management Science & Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
    ],
    12: [
      // MIT Sloan
      { id: 15, name: "Business Administration", duration: "2 years", degree: "MBA", level: "Graduate" },
      { id: 16, name: "Management", duration: "1 year", degree: "Master", level: "Graduate" },
    ],

    // Medical departments
    3: [
      // Harvard Medical School
      { id: 17, name: "Medicine", duration: "4 years", degree: "MD", level: "Graduate" },
      { id: 18, name: "Biomedical Sciences", duration: "5 years", degree: "PhD", level: "Graduate" },
    ],
    8: [
      // Stanford Medicine
      { id: 19, name: "Medicine", duration: "4 years", degree: "MD", level: "Graduate" },
      { id: 20, name: "Biomedical Informatics", duration: "2 years", degree: "Master", level: "Graduate" },
    ],

    // Arts and Sciences
    4: [
      // Harvard FAS
      { id: 21, name: "Psychology", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 22, name: "Economics", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 23, name: "History", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 24, name: "Psychology", duration: "5 years", degree: "PhD", level: "Graduate" },
    ],
    9: [
      // Stanford H&S
      { id: 25, name: "Psychology", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 26, name: "Economics", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 27, name: "International Relations", duration: "2 years", degree: "Master", level: "Graduate" },
    ],

    // Law departments
    5: [
      // Harvard Law
      { id: 28, name: "Juris Doctor", duration: "3 years", degree: "JD", level: "Graduate" },
      { id: 29, name: "Master of Laws", duration: "1 year", degree: "LLM", level: "Graduate" },
    ],
    10: [
      // Stanford Law
      { id: 30, name: "Juris Doctor", duration: "3 years", degree: "JD", level: "Graduate" },
      { id: 31, name: "Master of Laws", duration: "1 year", degree: "LLM", level: "Graduate" },
    ],

    // Add more programs for other departments...
    15: [
      // Oxford Engineering
      { id: 32, name: "Engineering Science", duration: "4 years", degree: "MEng", level: "Undergraduate" },
      { id: 33, name: "Computer Science", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
    ],
    20: [
      // Cambridge Engineering
      { id: 34, name: "Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
      { id: 35, name: "Computer Science", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
    ],
    25: [
      // Imperial Engineering
      { id: 36, name: "Aeronautical Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
      { id: 37, name: "Civil Engineering", duration: "4 years", degree: "MEng", level: "Undergraduate" },
    ],
    29: [
      // UofT Engineering
      { id: 38, name: "Computer Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 39, name: "Mechanical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    ],
    44: [
      // Melbourne Engineering
      { id: 40, name: "Software Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 41, name: "Chemical Engineering", duration: "4 years", degree: "Bachelor", level: "Undergraduate" },
    ],
    59: [
      // TUM Engineering
      { id: 42, name: "Mechanical Engineering", duration: "3 years", degree: "Bachelor", level: "Undergraduate" },
      { id: 43, name: "Electrical Engineering", duration: "2 years", degree: "Master", level: "Graduate" },
    ],
  }