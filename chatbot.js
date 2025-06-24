// TransStadia Institute Career Guidance Chatbot (Dialogflow-Compatible JSON intents)

// This is a sample intent and response set for a basic chatbot built using Dialogflow or similar platforms.

const chatbotIntents = [
  {
    intent: "WelcomeIntent",
    trainingPhrases: [
      "Hi",
      "Hello",
      "Hey",
      "I want help choosing a course",
      "Can you guide me for college options?"
    ],
    responses: [
      "Hello! I’m your course advisor. What was your stream in 12th grade – Science, Commerce, or Arts?"
    ]
  },

  {
    intent: "StreamIntent",
    trainingPhrases: [
      "Science",
      "Commerce",
      "Arts"
    ],
    responses: [
      "Got it! Could you tell me your subjects or areas of interest? For example, Math, Biology, Economics, etc."
    ]
  },

  {
    intent: "InterestIntentScience",
    trainingPhrases: [
      "Math",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer",
      "Computer Science",
      "AI",
      "Data Science",
      "Math and Computer",
      "Physics and Chemistry",
      "AI and Data Science"
    ],
    responses: [
      "Based on your interests, you can explore B.Sc in AI & Sports Analytics or Data Science & Sports Studies at TransStadia Institute. Would you like to know about career paths?"
    ]
  },

  {
    intent: "InterestIntentCommerce",
    trainingPhrases: [
      "Accounts",
      "Accounting",
      "Economics",
      "Business",
      "Business Studies",
      "Commerce",
      "Marketing",
      "Finance",
      "Commerce and Marketing"
    ],
    responses: [
      "You can consider BMS in Sports Management or BMS in Management & Sports Administration. Interested in future opportunities in these fields?"
    ]
  },

  {
    intent: "InterestIntentArts",
    trainingPhrases: [
      "Psychology",
      "Sociology",
      "History",
      "Political Science",
      "English",
      "Fine Arts",
      "Literature"
    ],
    responses: [
      "You may explore liberal arts, mass media, or sports communication programs. Would you like more information about career prospects?"
    ]
  },

  {
    intent: "CareerPathIntent",
    trainingPhrases: [
      "Yes, tell me the career options",
      "What can I do after this course?",
      "Career scope?"
    ],
    responses: [
      "These degrees open up careers in data analysis, sports tech, management, event planning, sports marketing, and more. TransStadia also offers internships and placement support through its IBM collaboration."
    ]
  },

  {
    intent: "EligibilityIntent",
    trainingPhrases: [
      "My percentage is 72",
      "I got 60%",
      "I have 80 percent in 12th"
    ],
    responses: [
      "You’re eligible! Our basic criteria is 40% or above with a qualifying entrance test. Would you like me to send you the brochure or connect you with admissions?"
    ]
  },

  {
    intent: "EmailBrochureIntent",
    trainingPhrases: [
      "Yes, send brochure",
      "Can you email the brochure?",
      "I want the brochure in my email"
    ],
    responses: [
      "Sure! Please share your email address so I can send you the brochure."
    ]
  },

  {
    intent: "CollectUserInfoIntent",
    trainingPhrases: [
      "My email is student@example.com",
      "It's student.name@gmail.com",
      "Here is my email: name@domain.com"
    ],
    responses: [
      "Thanks! Your email has been received. Our admissions team will be in touch shortly."
    ]
  },

  {
    intent: "ClosingIntent",
    trainingPhrases: [
      "I want to apply",
      "Connect me to admission",
      "Thank you"
    ],
    responses: [
      "Great! I’ve shared your details with the admissions team. You’ll hear from them soon. Good luck!"
    ]
  }
];

export default chatbotIntents;
