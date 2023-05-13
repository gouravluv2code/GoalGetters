export interface Goal {
    name: string;
    description: string;
    image: string;
  }
  
  export const goals: Goal[] = [
    {
      name: 'Weight Loss',
      description: 'Lose 10 lbs in 2 months',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE1ONjumS8AApCGzFaSx_tDuA9Dw_kBCguA&usqp=CAU',
    },
    {
      name: 'Muscle Gain',
      description: 'Gain 5 lbs of muscle in 3 months',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMI-hy2_40zLio5pfbjbLlx1AB8bfHJhET2Q&usqp=CAU',
    },
    {
      name: 'Cardiovascular Health',
      description: 'Run a 5K in under 30 minutes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AFakj1LuPGJxcbvyhpW7j55b20gA-qhXaQ&usqp=CAU',
    },
  ];