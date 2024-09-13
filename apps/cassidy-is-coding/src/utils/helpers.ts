import { Experience } from "./types";

export const experiences: Experience[] = [
    {
      company: 'LifeCloud',
      title: 'Frontend Engineer, Accessibility Lead',
      skills: ['React', 'Jotai', 'Node.js', 'Vite', 'TypeScript', 'Web Accessibility', 'Tailwind CSS', 'UX Design'],
      description: [
        'Created notification service with CRD REST APIs to notify users responsively in-app and via email of changes in their account or estate. Supported both one time and persistent notifications with context',
        'Optimized data fetching with custom React hooks and React’s suspense component to reduce re-renders, display fallback UIs, and use async rendering to improve load times by 60% from ~1650 ms to ~660 ms',
        'Used responsive design and ensured cross-browser compatibility, providing a consistent user experience',
        'Led accessibility development for our core web application, ensuring compliance with industry accessibility guidelines (WCAG) and implementing best practices for inclusive design',
        'Owned accessibility plan for app outlining our required testing tools and requirements for our app into categories such as visual primitives, perceivable content, operable user interface and navigation, etc.',
      ],
      url: 'https://lifecloud.com',
    },
    {
      company: 'Intern.house',
      title: 'Software Engineer',
      skills: ['React', 'GCP (Cloud Run, Cloud Functions)', 'SASS', 'Tailwind CSS', 'Responsive Design'],
      description: [
        'Created site for interns to find and apply for housing where they match with other interns at their company, increasing application volume by 300% within 3 months',
        'Employed GCP Cloud Run with Cloud Functions to host site and automated vacancy updates daily from REST Endpoints integrated with 3rd party property management software',
      ],
      url: 'https://intern.house',
    },
    {
      company: 'Foundcom',
      title: 'Volunteer Software Engineer',
      skills: ['JavaScript', 'HTML5', 'SQL', 'Azure', 'Microsoft Power Platform', 'Vanilla CSS'],
      description: [
            'Pro-bono work for one of the largest income-restricted housing providers in Texas housing 3800 households',
            'Built 3 sites to sign up families in need, match them with community sponsors, and enable Foundcom staff to manage donations, approve families, and contact sponsors',
            'Software matched 498 families in need with sponsors giving $199,770.00 in holiday gifts in December 2023',
          ],
        url: 'https://foundcom.org',
    },
  ];