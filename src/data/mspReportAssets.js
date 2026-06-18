import mspReport from './journees_msp.json';
import schoolImage from './images/msp/report-page-05-image-1-xref-75.jpeg';
import schoolPlanImage from './images/msp/report-page-08-image-1-xref-93.jpeg';
import computerRoomImage from './images/msp/report-page-09-image-1-xref-97.jpeg';
import preparationBookImage from './images/msp/report-page-10-image-1-xref-101.jpeg';
import assessmentImage from './images/msp/report-page-20-image-1-xref-132.jpeg';
import conditionBoardImage from './images/msp/report-page-29-image-1-xref-170.jpeg';
import stringExerciseImage from './images/msp/report-page-36-image-1-xref-192.jpeg';
import massarImage from './images/msp/report-page-40-image-1-xref-205.jpeg';
import finalBoardImage from './images/msp/report-page-44-image-1-xref-218.jpeg';
import computerRoomImage2 from './images/msp/report-page-09-image-2-xref-97.jpeg';

export { mspReport };

export const mspImages = {
  school: schoolImage,
  schoolPlan: schoolPlanImage,
  computerRoom: computerRoomImage,
  preparationBook: preparationBookImage,
  assessment: assessmentImage,
  conditionBoard: conditionBoardImage,
  stringExercise: stringExerciseImage,
  massar: massarImage,
  finalBoard: finalBoardImage,
  computerRoom2: computerRoomImage2,
};

export const mspDayImages = {
  1: preparationBookImage,
  2: computerRoomImage,
  3: assessmentImage,
  4: computerRoomImage,
  5: computerRoomImage,
  6: conditionBoardImage,
  7: finalBoardImage,
  8: stringExerciseImage,
  9: massarImage,
  10: finalBoardImage,
};

export const getMspDayImage = (dayId) => mspDayImages[Number(dayId)] ?? computerRoomImage;

export const getMspCategoryTone = (category = '') => {
  if (category.includes('Évaluation')) {
    return 'border-emerald-200 bg-emerald-50 text-emerald-700';
  }

  if (category.includes('Python')) {
    return 'border-sky-200 bg-sky-50 text-sky-700';
  }

  if (category.includes('Massar')) {
    return 'border-cyan-200 bg-cyan-50 text-cyan-700';
  }

  return 'border-blue-200 bg-blue-50 text-primary-light';
};
